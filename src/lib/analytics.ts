"use client";

import { sendGAEvent } from "@next/third-parties/google";

type LeadFormType =
  | "product_enquiry"
  | "quote_request"
  | "contact_enquiry"
  | "distributor_enquiry";

type LeadFormId =
  | "product_lead_capture"
  | "quote_request"
  | "contact_enquiry"
  | "distributor_enquiry";

type GenerateLeadEvent = {
  formType: LeadFormType;
  formId: LeadFormId;
  product?: string;
};

type PhoneClickEvent = {
  pagePath: string;
  linkLocation: string;
  linkText: string;
  phoneContext: string;
};

function analyticsIsEnabled() {
  return (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_GA_ID)
  );
}

export function trackGenerateLead({ formType, formId, product }: GenerateLeadEvent) {
  if (!analyticsIsEnabled()) return;

  sendGAEvent("event", "generate_lead", {
    form_type: formType,
    form_id: formId,
    source_page: window.location.pathname,
    lead_destination: "google_sheets",
    ...(product ? { product } : {}),
  });
}

export function trackPhoneClick({
  pagePath,
  linkLocation,
  linkText,
  phoneContext,
}: PhoneClickEvent) {
  if (!analyticsIsEnabled()) return;

  sendGAEvent("event", "phone_click", {
    page_path: pagePath,
    link_location: linkLocation,
    link_text: linkText,
    phone_context: phoneContext,
  });
}
