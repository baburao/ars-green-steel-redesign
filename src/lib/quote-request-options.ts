export const QUOTE_REQUEST_STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Puducherry",
] as const;

export const QUOTE_PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Road / Infrastructure",
  "Dealer Enquiry",
] as const;

export const QUOTE_PRODUCT_TYPES = [
  "ARS CRS Fe 550D",
  "ARS Fe 550D",
  "Binders",
] as const;

export const QUOTE_REQUEST_SOURCE_PAGES = [
  "/request-quote",
  "/tmt-bars-coimbatore",
  "/tmt-bars-madurai",
  "/tmt-bars-salem",
  "/tmt-bars-tiruppur",
  "/tmt-bars-vellore",
  "/tmt-bars-kochi",
  "/tmt-bars-puducherry",
  "/tmt-bars-nellore",
] as const;

export type QuoteRequestState = (typeof QUOTE_REQUEST_STATES)[number];
export type QuoteProjectType = (typeof QUOTE_PROJECT_TYPES)[number];
export type QuoteProductType = (typeof QUOTE_PRODUCT_TYPES)[number];
export type QuoteRequestSourcePage = (typeof QUOTE_REQUEST_SOURCE_PAGES)[number];
