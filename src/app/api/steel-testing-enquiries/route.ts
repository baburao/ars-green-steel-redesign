import { createHash } from "node:crypto";
import { sendMetaLeadEvent } from "@/lib/meta-conversions";
import { appendSteelTestingEnquiryToGoogleSheets, validateSteelTestingEnquiry } from "@/lib/steel-testing-enquiries";
import { createSalesforceWebsiteEnquiry } from "@/lib/salesforce";

export const runtime = "nodejs";

const recentSubmissions = new Map<string, number>();
const duplicateWindowMs = 10 * 60 * 1000;
const maximumBodyBytes = 16_384;

function response(body: object, status: number) {
  return Response.json(body, { status, headers: { "cache-control": "no-store" } });
}

function cleanupSubmissionCache(now: number) {
  for (const [key, expiresAt] of recentSubmissions) {
    if (expiresAt <= now) recentSubmissions.delete(key);
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maximumBodyBytes) return response({ ok: false, message: "The enquiry is too large." }, 413);

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, "utf8") > maximumBodyBytes) return response({ ok: false, message: "The enquiry is too large." }, 413);
    body = JSON.parse(rawBody);
  } catch {
    return response({ ok: false, message: "Please review the form and try again." }, 400);
  }

  const validation = validateSteelTestingEnquiry(body);
  if (!validation.ok) return response({ ok: false, message: "Please correct the highlighted fields.", errors: validation.errors }, 400);
  if (validation.isHoneypot) return response({ ok: true, message: "Your enquiry has been received." }, 200);

  const now = Date.now();
  cleanupSubmissionCache(now);
  const submissionKey = createHash("sha256").update(validation.submissionId).digest("hex");
  if (recentSubmissions.has(submissionKey)) return response({ ok: false, message: "This enquiry is already being processed." }, 409);
  recentSubmissions.set(submissionKey, now + duplicateWindowMs);

  try {
    await createSalesforceWebsiteEnquiry({
      Full_Name__c: validation.enquiry.fullName,
      Phone__c: validation.enquiry.phone,
      Project_Type__c: validation.enquiry.projectType,
      Area__c: validation.enquiry.area,
      City__c: validation.enquiry.city,
      State__c: validation.enquiry.state,
      Description__c: validation.enquiry.description,
      Type__c: "Steel Testing Enquiry",
    });
    await appendSteelTestingEnquiryToGoogleSheets(validation.enquiry);
    await sendMetaLeadEvent(request, {
      eventId: validation.submissionId,
      formType: "steel_testing_enquiry",
      sourcePage: validation.enquiry.sourcePage,
      phone: validation.enquiry.phone,
    });
    return response({ ok: true, message: "Thank you. Your steel testing enquiry has been sent to the ARS team." }, 201);
  } catch (error) {
    recentSubmissions.delete(submissionKey);
    const isConfigurationError = error instanceof Error && ["GOOGLE_SHEETS_NOT_CONFIGURED", "SALESFORCE_NOT_CONFIGURED"].includes(error.message);
    return response({
      ok: false,
      message: isConfigurationError
        ? "Enquiry service is being configured. Please call the ARS sales team or try again later."
        : "We could not send your enquiry. Please try again or call the ARS sales team.",
    }, 503);
  }
}
