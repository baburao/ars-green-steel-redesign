"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { analyticsConfig } from "@/lib/analytics-config";

type LeadFormType =
  | "product_enquiry"
  | "quote_request"
  | "contact_enquiry"
  | "distributor_enquiry"
  | "steel_testing_enquiry"
  | "price_enquiry";

type LeadFormId =
  | "product_lead_capture"
  | "quote_request"
  | "contact_enquiry"
  | "distributor_enquiry"
  | "steel_testing_enquiry"
  | "price_enquiry";

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

type WhatsAppClickEvent = {
  pagePath: string;
  linkLocation: string;
  linkText: string;
};

type MetaPixelWindow = Window & {
  fbq?: (
    command: "track",
    eventName: string,
    parameters?: Record<string, string>,
    options?: { eventID: string },
  ) => void;
};

function directGaIsEnabled() {
  return typeof window !== "undefined" && analyticsConfig.ga4.enabled;
}

function gtmIsEnabled() {
  return typeof window !== "undefined" && analyticsConfig.gtm.enabled;
}

function metaPixelIsEnabled() {
  return typeof window !== "undefined" && analyticsConfig.metaPixel.enabled;
}

function analyticsIsEnabled() {
  return directGaIsEnabled() || gtmIsEnabled();
}

function sendAnalyticsEvent(eventName: string, parameters: Record<string, string>) {
  if (directGaIsEnabled()) {
    sendGAEvent("event", eventName, parameters);
  }

  if (gtmIsEnabled()) {
    sendGTMEvent({ event: eventName, ...parameters });
  }
}

export function trackGenerateLead({ formType, formId, product }: GenerateLeadEvent) {
  if (!analyticsIsEnabled()) return;

  sendAnalyticsEvent("generate_lead", {
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

  sendAnalyticsEvent("phone_click", {
    page_path: pagePath,
    link_location: linkLocation,
    link_text: linkText,
    phone_context: phoneContext,
  });
}

export function trackWhatsAppClick({
  pagePath,
  linkLocation,
  linkText,
}: WhatsAppClickEvent) {
  if (!analyticsIsEnabled()) return;

  sendAnalyticsEvent("whatsapp_click", {
    source_page: pagePath,
    link_location: linkLocation,
    link_text: linkText,
  });
}

export function trackMetaPageView() {
  if (!metaPixelIsEnabled()) return;

  (window as MetaPixelWindow).fbq?.("track", "PageView");
}

export function trackMetaLead({ eventId, formType }: { eventId: string; formType: LeadFormType }) {
  if (!metaPixelIsEnabled()) return;

  (window as MetaPixelWindow).fbq?.(
    "track",
    "Lead",
    { content_category: "enquiry", form_type: formType },
    { eventID: eventId },
  );
}
