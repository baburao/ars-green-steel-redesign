import "server-only";

import { appendGoogleSheetRow } from "@/lib/google-sheets";
import {
  calculatorBars,
  calculatorCities,
  calculatorProducts,
  calculatorRegions,
  getRatePerKg,
  type CalculatorBar,
  type CalculatorProduct,
  type CalculatorRegion,
} from "@/data/tmt-calculator";

const allowedKeys = new Set([
  "fullName", "phone", "region", "city", "product", "size", "quantity", "unit",
  "sourcePage", "website", "submissionId",
]);
const sourcePages = ["/tmt-steel-price-today", "/steel-price-today"] as const;
const units = ["kg", "tonnes"] as const;
type QuantityUnit = (typeof units)[number];

export type PriceEnquiry = {
  fullName: string;
  phone: string;
  region: CalculatorRegion;
  city: string;
  product: CalculatorProduct;
  size: CalculatorBar["size"];
  quantity: number;
  unit: QuantityUnit;
  sourcePage: (typeof sourcePages)[number];
  submittedDate: string;
  submittedTime: string;
  timezone: "Asia/Kolkata";
  isoTimestamp: string;
};

export type PriceEnquiryValidation =
  | { ok: true; enquiry: PriceEnquiry; submissionId: string; isHoneypot: boolean }
  | { ok: false; errors: Record<string, string> };

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function normalizeIndianPhone(value: unknown) {
  const digits = typeof value === "string" ? value.replace(/\D/g, "") : "";
  const localNumber = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(localNumber) ? `+91${localNumber}` : "";
}

function formatIndiaDateTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return { submittedDate: `${values.day}/${values.month}/${values.year}`, submittedTime: `${values.hour}:${values.minute}:${values.second}` };
}

export function validatePriceEnquiry(value: unknown, now = new Date()): PriceEnquiryValidation {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Please review the form and try again." } };
  }
  const record = value as Record<string, unknown>;
  if (Object.keys(record).some((key) => !allowedKeys.has(key))) {
    return { ok: false, errors: { form: "The price enquiry contains unsupported data." } };
  }

  const fullName = cleanText(record.fullName);
  const phone = normalizeIndianPhone(record.phone);
  const region = cleanText(record.region);
  const city = cleanText(record.city);
  const product = cleanText(record.product);
  const size = cleanText(record.size);
  const rawQuantity = cleanText(record.quantity);
  const quantity = Number(rawQuantity);
  const unit = cleanText(record.unit);
  const sourcePage = cleanText(record.sourcePage);
  const submissionId = cleanText(record.submissionId);
  const website = cleanText(record.website);
  const errors: Record<string, string> = {};

  if (fullName.length < 2 || fullName.length > 100) errors.fullName = "Enter a name between 2 and 100 characters.";
  if (!phone) errors.phone = "Enter a valid Indian mobile number.";
  if (!calculatorRegions.some((item) => item === region)) errors.region = "Select a valid region.";
  if (!calculatorProducts.some((item) => item === product)) errors.product = "Select a valid product.";
  if (!calculatorBars.some((item) => item.size === size)) errors.size = "Select a valid diameter.";
  if (!calculatorRegions.some((item) => item === region) || !calculatorCities[region as CalculatorRegion].includes(city)) {
    errors.city = "Select a valid delivery city.";
  }
  if (!/^\d+(?:\.\d{1,3})?$/.test(rawQuantity) || !Number.isFinite(quantity) || quantity <= 0 || quantity > 1_000_000_000) {
    errors.quantity = "Enter a quantity greater than zero, with up to 3 decimal places.";
  }
  if (!units.some((item) => item === unit)) errors.unit = "Select kg or tonnes.";
  if (!sourcePages.some((item) => item === sourcePage)) errors.form = "The price enquiry source is not supported.";
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(submissionId)) errors.form = "Please refresh the page and try again.";
  if (Object.keys(errors).length) return { ok: false, errors };

  const { submittedDate, submittedTime } = formatIndiaDateTime(now);
  return {
    ok: true,
    submissionId,
    isHoneypot: Boolean(website),
    enquiry: {
      fullName, phone, region: region as CalculatorRegion, city,
      product: product as CalculatorProduct, size: size as CalculatorBar["size"],
      quantity, unit: unit as QuantityUnit,
      sourcePage: sourcePage as PriceEnquiry["sourcePage"],
      submittedDate, submittedTime, timezone: "Asia/Kolkata", isoTimestamp: now.toISOString(),
    },
  };
}

export function priceEnquiryRequirement(enquiry: PriceEnquiry) {
  const perKg = getRatePerKg(enquiry.region, enquiry.product, enquiry.size);
  return `${enquiry.quantity} ${enquiry.unit} of ${enquiry.size} ${enquiry.product}; delivery city: ${enquiry.city}; indicative workbook rate: INR ${perKg.toFixed(2)}/kg including GST. Confirm final order rate with ARS.`;
}

export async function appendPriceEnquiryToGoogleSheets(enquiry: PriceEnquiry) {
  const sheetName = process.env.GOOGLE_SHEETS_QUOTE_REQUESTS_SHEET_NAME?.trim();
  if (!sheetName) throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");

  await appendGoogleSheetRow({
    sheetName,
    rangeColumns: "A:M",
    values: [
      enquiry.fullName, enquiry.phone, "", enquiry.region, enquiry.city, "",
      enquiry.product, priceEnquiryRequirement(enquiry), enquiry.sourcePage,
      enquiry.submittedDate, enquiry.submittedTime, enquiry.timezone, enquiry.isoTimestamp,
    ],
  });
}
