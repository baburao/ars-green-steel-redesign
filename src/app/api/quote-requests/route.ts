import { createHash } from "node:crypto";
import { appendQuoteRequestToGoogleSheets, validateQuoteRequest } from "@/lib/quote-requests";

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
  if (contentLength > maximumBodyBytes) return response({ ok: false, message: "The quote request is too large." }, 413);

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, "utf8") > maximumBodyBytes) {
      return response({ ok: false, message: "The quote request is too large." }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return response({ ok: false, message: "Please review the form and try again." }, 400);
  }

  const validation = validateQuoteRequest(body);
  if (!validation.ok) {
    return response({ ok: false, message: "Please correct the highlighted fields.", errors: validation.errors }, 400);
  }
  if (validation.isHoneypot) return response({ ok: true, message: "Your quote request has been received." }, 200);

  const now = Date.now();
  cleanupSubmissionCache(now);
  const submissionKey = createHash("sha256").update(validation.submissionId).digest("hex");
  if (recentSubmissions.has(submissionKey)) {
    return response({ ok: false, message: "This quote request is already being processed." }, 409);
  }
  recentSubmissions.set(submissionKey, now + duplicateWindowMs);

  try {
    await appendQuoteRequestToGoogleSheets(validation.quoteRequest);
    return response({ ok: true, message: "Thank you. Your quote request has been sent to the ARS sales team." }, 201);
  } catch (error) {
    recentSubmissions.delete(submissionKey);
    const isConfigurationError = error instanceof Error && error.message === "GOOGLE_SHEETS_NOT_CONFIGURED";
    return response({
      ok: false,
      message: isConfigurationError
        ? "Quote request service is being configured. Please call ARS sales or try again later."
        : "We could not send your quote request. Please try again or call ARS sales.",
    }, 503);
  }
}
