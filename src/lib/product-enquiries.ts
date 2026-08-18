import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";

export const PRODUCT_SOURCE_PAGES = {
  "ARS CRS Fe 550D": "/product-crs-550d",
  "ARS Fe 550D": "/product-550d",
  "ARS Binders": "/ars-binders",
} as const;

export const PRODUCT_ENQUIRY_STATES = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"] as const;

export type ProductName = keyof typeof PRODUCT_SOURCE_PAGES;
export type ProductEnquiryState = (typeof PRODUCT_ENQUIRY_STATES)[number];

export type ProductEnquiry = {
  fullName: string;
  phone: string;
  email: string;
  state: ProductEnquiryState;
  city: string;
  requirement: string;
  product: ProductName;
  sourcePage: (typeof PRODUCT_SOURCE_PAGES)[ProductName];
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type ProductEnquiryValidationResult =
  | { ok: true; enquiry: ProductEnquiry; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

const allowedRequestKeys = new Set([
  "fullName", "phone", "email", "state", "city", "requirement",
  "product", "sourcePage", "website", "submissionId",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indiaTimeZone = "Asia/Kolkata" as const;
const legacyProductNames: Record<string, ProductName> = {
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

function isProductName(value: string): value is ProductName {
  return Object.prototype.hasOwnProperty.call(PRODUCT_SOURCE_PAGES, value);
}

function normalizeProductName(value: string) {
  return legacyProductNames[value] ?? value;
}

function isProductEnquiryState(value: string): value is ProductEnquiryState {
  return PRODUCT_ENQUIRY_STATES.includes(value as ProductEnquiryState);
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

export function validateProductEnquiry(value: unknown, now = new Date()): ProductEnquiryValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Please review the form and try again." } };
  }

  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedRequestKeys.has(key))) {
    return { ok: false, errors: { form: "The enquiry contains unsupported data." } };
  }

  const errors: Record<string, string> = {};
  const fullName = cleanText(record.fullName);
  const phone = normalizeIndianPhone(record.phone);
  const email = cleanText(record.email).toLowerCase();
  const state = cleanText(record.state);
  const city = cleanText(record.city);
  const requirement = cleanMultilineText(record.requirement);
  const product = normalizeProductName(cleanText(record.product));
  const sourcePage = cleanText(record.sourcePage);
  const website = cleanText(record.website);
  const submissionId = cleanText(record.submissionId);

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Full name must be 100 characters or fewer.";
  if (!phone) errors.phone = "Please enter a valid Indian mobile number.";
  if (!emailPattern.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!isProductEnquiryState(state)) errors.state = "Please select an approved state.";
  if (city.length < 2) errors.city = "Please enter the city or project location.";
  else if (city.length > 120) errors.city = "City or project location must be 120 characters or fewer.";
  if (requirement.length > 1000) errors.requirement = "Requirement must be 1,000 characters or fewer.";
  if (!isProductName(product)) errors.form = "The selected product is not supported.";
  else if (sourcePage !== PRODUCT_SOURCE_PAGES[product]) errors.form = "The enquiry source is not supported.";
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) errors.form = "Please refresh the page and try again.";

  if (Object.keys(errors).length) return { ok: false, errors };

  const { submittedDate, submittedTime } = formatIndiaDateTime(now);
  return {
    ok: true,
    submissionId,
    isHoneypot: Boolean(website),
    enquiry: {
      fullName,
      phone,
      email,
      state: state as ProductEnquiryState,
      city,
      requirement,
      product: product as ProductName,
      sourcePage: sourcePage as ProductEnquiry["sourcePage"],
      submittedDate,
      submittedTime,
      timezone: indiaTimeZone,
      isoTimestamp: now.toISOString(),
    },
  };
}

function getProductEnquiriesSheetName() {
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");
  return sheetName;
}

export async function appendProductEnquiryToGoogleSheets(enquiry: ProductEnquiry) {
  await appendGoogleSheetRow({
    sheetName: getProductEnquiriesSheetName(),
    rangeColumns: "A:L",
    values: [
      enquiry.fullName, enquiry.phone, enquiry.email, enquiry.state, enquiry.city, enquiry.requirement,
      enquiry.product, enquiry.sourcePage, enquiry.submittedDate, enquiry.submittedTime,
      enquiry.timezone, enquiry.isoTimestamp,
    ],
  });
}
