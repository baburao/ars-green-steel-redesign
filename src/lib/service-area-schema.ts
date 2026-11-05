import type { CityServiceArea } from "@/data/city-service-areas";
import { verifiedContactDetails } from "@/data/business-verification";
import { productionDomain, toProductionUrl } from "@/lib/site-metadata";

export const organizationId = `${productionDomain}/#organization`;
export const websiteId = `${productionDomain}/#website`;

const organizationJsonLd = {
  "@type": "Organization",
  "@id": organizationId,
  name: "ARS Steels & Alloy International Pvt. Ltd.",
  alternateName: "ARS Steels",
  url: `${productionDomain}/`,
  logo: {
    "@type": "ImageObject",
    url: `${productionDomain}/legacy-assets/images/ARS-GREEN-STEEL-Logo.png`,
  },
  telephone: verifiedContactDetails.mobile.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-109, LBR Complex, 2nd Floor, Chinthamani",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600102",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/ARSsteelsIndia",
    "https://www.instagram.com/arsgreensteel",
    "https://www.youtube.com/channel/UCmzQSAPi4oNfLTVPkRkbPXg",
  ],
};

export function createCityServiceAreaJsonLd(area: CityServiceArea) {
  const url = toProductionUrl(area.path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: area.title,
        description: area.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${productionDomain}/` },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${productionDomain}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: area.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function createServiceAreasJsonLd(areas: readonly CityServiceArea[]) {
  const path = "/service-areas";
  const url = toProductionUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "ARS TMT Steel Service Areas | City Enquiry Support",
        description: "Explore ARS TMT steel enquiry pathways for eight cities across Tamil Nadu, Kerala, Puducherry and Andhra Pradesh.",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
        mainEntity: { "@id": `${url}#cities` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${productionDomain}/` },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#cities`,
        name: "ARS city enquiry service areas",
        numberOfItems: areas.length,
        itemListElement: areas.map((area, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: area.h1,
          url: toProductionUrl(area.path),
        })),
      },
    ],
  };
}

export function serializeServiceAreaJsonLd(jsonLd: object) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
