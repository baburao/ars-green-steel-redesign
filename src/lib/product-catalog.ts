export const ars550SmPlusSpecifications = {
  diametersMm: [8, 10, 12, 16],
  tsYsRatio: "above 1.15",
} as const;

export const productCatalog = [
  {
    slug: "ars-crs-550d",
    name: "ARS CRS Fe 550D",
    route: "/product-crs-550d",
    homeEyebrow: "Corrosion-resistant TMT bars",
    overviewTag: "Corrosion-resistant grade",
    description: "Engineered for high salinity, high TDS, and corrosion-prone environments where long-term durability matters.",
    homePoints: ["Corrosion resistance", "High salinity protection", "Longer structural life"],
    overviewPoints: ["Corrosion resistance", "Durability focus", "Fe-550D · IS 1786:2008"],
    image: "/ars-assets/logos/ARSCRS550D.png",
  },
  {
    slug: "ars-550d",
    name: "ARS Fe 550D",
    route: "/product-550d",
    homeEyebrow: "Earthquake Resistant Steel",
    overviewTag: "Core TMT grade",
    description: "High-ductility TMT bars designed for residential, commercial, and earthquake-resistant construction.",
    homePoints: ["Earthquake-resistant performance", "Superior bendability & ductility", "High-strength TMT bars"],
    overviewPoints: ["High ductility", "Strong bendability", "Fe-550D · IS 1786:2008"],
    image: "/ars-assets/logos/ARS550D.png",
  },
  {
    slug: "ars-binders",
    name: "ARS BINDERS",
    route: "/ars-binders",
    homeEyebrow: "Reinforcement accessories",
    overviewTag: "Factory-made reinforcement",
    description:
      "Engineered to provide secure reinforcement connections, ARS Binders ensure accurate bar positioning, improved structural stability, and faster, more efficient reinforcement assembly across residential, commercial, and infrastructure projects.",
    homePoints: ["Secure reinforcement connections", "Accurate bar alignment", "Faster on-site installation"],
    overviewPoints: ["Secure connections", "Accurate alignment", "Faster installation"],
    image: "/ars-assets/logos/BinderLogo.png",
  },
  {
    slug: "ars-550-sm-plus",
    name: "ARS 550 SM+ TMT Bars",
    route: "/product-550-sm-plus",
    homeEyebrow: "High-manganese TMT bars",
    overviewTag: "Flexibility-focused grade",
    description: `Developed for greater ductility and bendability, with 16% minimum elongation and a TS/YS ratio ${ars550SmPlusSpecifications.tsYsRatio}.`,
    homePoints: ["Greater bendability", "16% minimum elongation", `TS/YS ratio ${ars550SmPlusSpecifications.tsYsRatio}`],
    overviewPoints: ["High ductility", "High manganese", "550 MPa minimum yield strength"],
    image: "/ars-assets/products/ars-550-sm-plus/product-bars.webp",
  },
] as const;

export const productComparisonRows = [
  { attr: "Best fit", standard: "General construction", crs: "Exposed and coastal sites" },
  { attr: "Environment", standard: "Standard conditions", crs: "Salt, humidity, and water exposure" },
  { attr: "Corrosion resistance", standard: "Standard TMT", crs: "Corrosion-resistant (CRS)" },
  { attr: "Grade and standard", standard: "Fe-550D · IS 1786:2008", crs: "Fe-550D · IS 1786:2008" },
] as const;

export const missingProductLeafletMessage =
  "The approved ARS CRS Fe 550D product leaflet is not yet available for download.";
