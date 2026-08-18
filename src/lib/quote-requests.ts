import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";

export const QUOTE_REQUEST_STATES = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"] as const;
export const QUOTE_PROJECT_TYPES = ["Residential", "Commercial", "Road / Infrastructure", "Dealer Enquiry"] as const;
export const QUOTE_PRODUCT_TYPES = ["ARS CRS Fe 550D", "ARS Fe 550D", "Binders"] as const;

type QuoteState = (typeof QUOTE_REQUEST_STATES)[number];
type QuoteProjectType = (typeof QUOTE_PROJECT_TYPES)[number];
type QuoteProductType = (typeof QUOTE_PRODUCT_TYPES)[number];

export type QuoteRequest = {
  fullName: string;
  phone: string;
  email: string;
  state: QuoteState;
  city: string;
  projectType: QuoteProjectType;
  productType: QuoteProductType;
  requirement: string;
  sourcePage: "/request-quote";
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type QuoteRequestValidationResult =
  | { ok: true; quoteRequest: QuoteRequest; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

const allowedRequestKeys = new Set([
  "fullName", "phone", "email", "state", "city", "projectType", "productType",
  "requirement", "sourcePage", "website", "submissionId",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indiaTimeZone = "Asia/Kolkata" as const;
const legacyQuoteProductTypes: Record<string, QuoteProductType> = {
  "ARS 550D": "ARS Fe 550D",
  "ARS Fe550D": "ARS Fe 550D",
  "ARS CRS 550D": "ARS CRS Fe 550D",
  "ARS CRS Fe550D": "ARS CRS Fe 550D",
  "ARS 550D CRS": "ARS CRS Fe 550D",
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function cleanMultilineText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\r\n?/g, "\n") : "";
}

function normalizeIndianPhone(value: unknown) {
  const digits = typeof value === "string" ? value.replace(/\D/g, "") : "";
  const localNumber = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(localNumber) ? `+91${localNumber}` : "";
}

function isAllowed<T extends readonly string[]>(values: T, value: string): value is T[number] {
  return values.includes(value);
}

function normalizeQuoteProductType(value: string) {
  return legacyQuoteProductTypes[value] ?? value;
}

function formatIndiaDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: indiaTimeZone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    submittedDate: `${values.day}/${values.month}/${values.year}`,
    submittedTime: `${values.hour}:${values.minute}:${values.second}`,
  };
}

export function validateQuoteRequest(value: unknown, now = new Date()): QuoteRequestValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Please review the form and try again." } };
  }

  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedRequestKeys.has(key))) {
    return { ok: false, errors: { form: "The quote request contains unsupported data." } };
  }

  const errors: Record<string, string> = {};
  const fullName = cleanText(record.fullName);
  const phone = normalizeIndianPhone(record.phone);
  const email = cleanText(record.email).toLowerCase();
  const state = cleanText(record.state);
  const city = cleanText(record.city);
  const projectType = cleanText(record.projectType);
  const productType = normalizeQuoteProductType(cleanText(record.productType));
  const requirement = cleanMultilineText(record.requirement);
  const sourcePage = cleanText(record.sourcePage);
  const website = cleanText(record.website);
  const submissionId = cleanText(record.submissionId);

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Full name must be 100 characters or fewer.";
  if (!phone) errors.phone = "Please enter a valid Indian mobile number.";
  if (!emailPattern.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!isAllowed(QUOTE_REQUEST_STATES, state)) errors.state = "Please select an approved state.";
  if (city.length < 2) errors.city = "Please enter the city or project location.";
  else if (city.length > 120) errors.city = "City or project location must be 120 characters or fewer.";
  if (!isAllowed(QUOTE_PROJECT_TYPES, projectType)) errors.projectType = "Please select an approved project type.";
  if (!isAllowed(QUOTE_PRODUCT_TYPES, productType)) errors.productType = "Please select an approved product.";
  if (requirement.length > 1000) errors.requirement = "Requirement must be 1,000 characters or fewer.";
  if (sourcePage !== "/request-quote") errors.form = "The quote request source is not supported.";
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) errors.form = "Please refresh the page and try again.";

  if (Object.keys(errors).length) return { ok: false, errors };

  const { submittedDate, submittedTime } = formatIndiaDateTime(now);
  return {
    ok: true,
    submissionId,
    isHoneypot: Boolean(website),
    quoteRequest: {
      fullName,
      phone,
      email,
      state: state as QuoteState,
      city,
      projectType: projectType as QuoteProjectType,
      productType: productType as QuoteProductType,
      requirement,
      sourcePage: "/request-quote",
      submittedDate,
      submittedTime,
      timezone: indiaTimeZone,
      isoTimestamp: now.toISOString(),
    },
  };
}

export async function appendQuoteRequestToGoogleSheets(quoteRequest: QuoteRequest) {
  const sheetName = process.env.GOOGLE_SHEETS_QUOTE_REQUESTS_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");

  await appendGoogleSheetRow({
    sheetName,
    rangeColumns: "A:M",
    values: [
      quoteRequest.fullName, quoteRequest.phone, quoteRequest.email, quoteRequest.state,
      quoteRequest.city, quoteRequest.projectType, quoteRequest.productType, quoteRequest.requirement,
      quoteRequest.sourcePage, quoteRequest.submittedDate, quoteRequest.submittedTime,
      quoteRequest.timezone, quoteRequest.isoTimestamp,
    ],
  });
}
