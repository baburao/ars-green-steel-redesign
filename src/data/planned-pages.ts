export const plannedPages = [
  { slug: "clients", title: "Clients" },
  { slug: "download-product-brochure", title: "Download Product Brochure" },
  { slug: "sgbc", title: "SGBC" },
  { slug: "reports-downloads", title: "Reports & Downloads" },
  { slug: "guides-articles", title: "Guides & Articles" },
  { slug: "careers", title: "Career" },
  { slug: "faqs", title: "FAQs" },
  { slug: "press-media", title: "Press Media" },
  { slug: "tv-commercials", title: "TV Commercials" },
  { slug: "news-press-releases", title: "News & Press Releases" },
  { slug: "events", title: "Events" },
  { slug: "gallery", title: "Gallery" },
  { slug: "success-stories", title: "Success Stories" },
] as const;

export type PlannedPage = (typeof plannedPages)[number];

export function getPlannedPage(slug: string) {
  return plannedPages.find((page) => page.slug === slug);
}
