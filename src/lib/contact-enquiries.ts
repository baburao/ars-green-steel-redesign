import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";

export const CONTACT_ENQUIRY_TYPES = [
  "Product pricing",
  "Project quote",
  "Dealer support",
  "Technical documents",
  "Business enquiry",
] as const;

export type ContactEnquiryType = (typeof CONTACT_ENQUIRY_TYPES)[number];

export type ContactEnquiry = {
  fullName: string;
  phone: string;
  email: string;
  enquiryType: ContactEnquiryType;
  city: string;
  requirement: string;
  sourcePage: "/contact";
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type ContactEnquiryValidationResult =
  | { ok: true; enquiry: ContactEnquiry; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

const allowedRequestKeys = new Set([
  "fullName", "phone", "email", "enquiryType", "city", "requirement",
  "sourcePage", "website", "submissionId",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indiaTimeZone = "Asia/Kolkata" as const;

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

function isContactEnquiryType(value: string): value is ContactEnquiryType {
  return CONTACT_ENQUIRY_TYPES.includes(value as ContactEnquiryType);
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

export function validateContactEnquiry(value: unknown, now = new Date()): ContactEnquiryValidationResult {
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
  const enquiryType = cleanText(record.enquiryType);
  const city = cleanText(record.city);
  const requirement = cleanMultilineText(record.requirement);
  const sourcePage = cleanText(record.sourcePage);
  const website = cleanText(record.website);
  const submissionId = cleanText(record.submissionId);

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Full name must be 100 characters or fewer.";
  if (!phone) errors.phone = "Please enter a valid Indian mobile number.";
  if (!emailPattern.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!isContactEnquiryType(enquiryType)) errors.enquiryType = "Please select an enquiry type.";
  if (city.length < 2) errors.city = "Please enter your city or location.";
  else if (city.length > 120) errors.city = "City or location must be 120 characters or fewer.";
  if (requirement.length > 1000) errors.requirement = "Requirement must be 1,000 characters or fewer.";
  if (sourcePage !== "/contact") errors.form = "The enquiry source is not supported.";
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
      enquiryType: enquiryType as ContactEnquiryType,
      city,
      requirement,
      sourcePage: "/contact",
      submittedDate,
      submittedTime,
      timezone: indiaTimeZone,
      isoTimestamp: now.toISOString(),
    },
  };
}

export async function appendContactEnquiryToGoogleSheets(enquiry: ContactEnquiry) {
  const sheetName = process.env.GOOGLE_SHEETS_CONTACT_ENQUIRIES_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");

  await appendGoogleSheetRow({
    sheetName,
    rangeColumns: "A:K",
    values: [
      enquiry.fullName, enquiry.phone, enquiry.email, enquiry.enquiryType, enquiry.city,
      enquiry.requirement, enquiry.sourcePage, enquiry.submittedDate, enquiry.submittedTime,
      enquiry.timezone, enquiry.isoTimestamp,
    ],
  });
}
