import { createHash } from "node:crypto";
import { sendMetaLeadEvent } from "@/lib/meta-conversions";
import { appendProductEnquiryToGoogleSheets, validateProductEnquiry } from "@/lib/product-enquiries";
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
    if (Buffer.byteLength(rawBody, "utf8") > maximumBodyBytes) {
      return response({ ok: false, message: "The enquiry is too large." }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return response({ ok: false, message: "Please review the form and try again." }, 400);
  }

  const validation = validateProductEnquiry(body);
  if (!validation.ok) {
    return response({ ok: false, message: "Please correct the highlighted fields.", errors: validation.errors }, 400);
  }
  if (validation.isHoneypot) return response({ ok: true, message: "Your enquiry has been received." }, 200);

  const now = Date.now();
  cleanupSubmissionCache(now);
  const submissionKey = createHash("sha256").update(validation.submissionId).digest("hex");
  if (recentSubmissions.has(submissionKey)) {
    return response({ ok: false, message: "This enquiry is already being processed." }, 409);
  }
  recentSubmissions.set(submissionKey, now + duplicateWindowMs);

  try {
    await createSalesforceWebsiteEnquiry({
      Full_Name__c: validation.enquiry.fullName,
      Phone__c: validation.enquiry.phone,
      Email__c: validation.enquiry.email,
      State__c: validation.enquiry.state,
      City__c: validation.enquiry.city,
      Requirement__c: validation.enquiry.requirement,
      Product_Type__c: validation.enquiry.product,
      Type__c: "Product Enquiry",
    });
    await appendProductEnquiryToGoogleSheets(validation.enquiry);
    await sendMetaLeadEvent(request, {
      eventId: validation.submissionId,
      formType: "product_enquiry",
      sourcePage: validation.enquiry.sourcePage,
      email: validation.enquiry.email,
      phone: validation.enquiry.phone,
    });
    return response({ ok: true, message: "Thank you. Your enquiry has been sent to the ARS sales team." }, 201);
  } catch (error) {
    recentSubmissions.delete(submissionKey);
    console.error("Product enquiry delivery failed", {
      reason: error instanceof Error ? error.message : "UNKNOWN_ERROR",
    });
    const isConfigurationError = error instanceof Error && ["GOOGLE_SHEETS_NOT_CONFIGURED", "SALESFORCE_NOT_CONFIGURED"].includes(error.message);
    return response({
      ok: false,
      message: isConfigurationError
        ? "Enquiry service is being configured. Please call ARS sales or try again later."
        : "We could not send your enquiry. Please try again or call ARS sales.",
    }, 503);
  }
}
