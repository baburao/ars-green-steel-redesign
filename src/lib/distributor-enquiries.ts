import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";

export const DISTRIBUTOR_ENQUIRY_STATES = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"] as const;
export const DISTRIBUTOR_USER_TYPES = [
  "Dealer", "Distributor", "Individual", "Builder", "Contractor", "Engineer",
  "Bar Bender", "Mason", "Architect", "Others",
] as const;
export const DISTRIBUTOR_ENQUIRY_TYPES = [
  "Business Enquiry", "Export Enquiry", "Suggestion", "Market Feedback",
  "Dealer Support", "Complaint", "Others",
] as const;

export type DistributorState = (typeof DISTRIBUTOR_ENQUIRY_STATES)[number];
export type DistributorUserType = (typeof DISTRIBUTOR_USER_TYPES)[number];
export type DistributorEnquiryType = (typeof DISTRIBUTOR_ENQUIRY_TYPES)[number];

export type DistributorEnquiry = {
  fullName: string;
  phone: string;
  email: string;
  state: DistributorState;
  district: string;
  pincode: string;
  userType: DistributorUserType;
  enquiryType: DistributorEnquiryType;
  enquiryDetails: string;
  sourcePage: "/become-a-steel-distributor";
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type DistributorEnquiryValidationResult =
  | { ok: true; enquiry: DistributorEnquiry; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

const allowedRequestKeys = new Set([
  "fullName", "phone", "email", "state", "district", "pincode", "userType",
  "enquiryType", "enquiryDetails", "sourcePage", "website", "submissionId",
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

function normalizePincode(value: unknown) {
  const digits = typeof value === "string" ? value.replace(/\D/g, "") : "";
  return /^[1-9]\d{5}$/.test(digits) ? digits : "";
}

function isAllowed<T extends readonly string[]>(values: T, value: string): value is T[number] {
  return values.includes(value);
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

export function validateDistributorEnquiry(value: unknown, now = new Date()): DistributorEnquiryValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Please review the form and try again." } };
  }

  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedRequestKeys.has(key))) {
    return { ok: false, errors: { form: "The distributor enquiry contains unsupported data." } };
  }

  const errors: Record<string, string> = {};
  const fullName = cleanText(record.fullName);
  const phone = normalizeIndianPhone(record.phone);
  const email = cleanText(record.email).toLowerCase();
  const state = cleanText(record.state);
  const district = cleanText(record.district);
  const pincode = normalizePincode(record.pincode);
  const userType = cleanText(record.userType);
  const enquiryType = cleanText(record.enquiryType);
  const enquiryDetails = cleanMultilineText(record.enquiryDetails);
  const sourcePage = cleanText(record.sourcePage);
  const website = cleanText(record.website);
  const submissionId = cleanText(record.submissionId);

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > 100) errors.fullName = "Full name must be 100 characters or fewer.";
  if (!phone) errors.phone = "Please enter a valid Indian mobile number.";
  if (!emailPattern.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!isAllowed(DISTRIBUTOR_ENQUIRY_STATES, state)) errors.state = "Please select an approved state.";
  if (district.length < 2) errors.district = "Please enter your district.";
  else if (district.length > 100) errors.district = "District must be 100 characters or fewer.";
  if (!pincode) errors.pincode = "Please enter a valid six-digit Indian pincode.";
  if (!isAllowed(DISTRIBUTOR_USER_TYPES, userType)) errors.userType = "Please select a user type.";
  if (!isAllowed(DISTRIBUTOR_ENQUIRY_TYPES, enquiryType)) errors.enquiryType = "Please select an enquiry type.";
  if (enquiryDetails.length < 10) errors.enquiryDetails = "Please provide at least 10 characters about your enquiry.";
  else if (enquiryDetails.length > 1500) errors.enquiryDetails = "Enquiry details must be 1,500 characters or fewer.";
  if (sourcePage !== "/become-a-steel-distributor") errors.form = "The distributor enquiry source is not supported.";
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
      state: state as DistributorState,
      district,
      pincode,
      userType: userType as DistributorUserType,
      enquiryType: enquiryType as DistributorEnquiryType,
      enquiryDetails,
      sourcePage: "/become-a-steel-distributor",
      submittedDate,
      submittedTime,
      timezone: indiaTimeZone,
      isoTimestamp: now.toISOString(),
    },
  };
}

export async function appendDistributorEnquiryToGoogleSheets(enquiry: DistributorEnquiry) {
  const sheetName = process.env.GOOGLE_SHEETS_DISTRIBUTOR_ENQUIRIES_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");

  await appendGoogleSheetRow({
    sheetName,
    rangeColumns: "A:N",
    values: [
      enquiry.fullName, enquiry.phone, enquiry.email, enquiry.state, enquiry.district,
      enquiry.pincode, enquiry.userType, enquiry.enquiryType, enquiry.enquiryDetails,
      enquiry.sourcePage, enquiry.submittedDate, enquiry.submittedTime, enquiry.timezone,
      enquiry.isoTimestamp,
    ],
  });
}
