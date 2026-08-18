import type { MetadataRoute } from "next";
import { getBlogMigrationRegistry } from "@/lib/blog-migration";
import { getLegacyTopLevelPages } from "@/lib/legacy-content";
import { productionDomain } from "@/lib/site-metadata";

const staticRoutes = [
  "",
  "/about-us",
  "/ars-binders",
  "/become-a-steel-distributor",
  "/bridges-projects-tmt-steel-bars",
  "/contact",
  "/embodied-carbon",
  "/green-steel",
  "/green-certifications",
  "/industries",
  "/institutions-projects-tmt-steel-bars",
  "/manufacturing",
  "/our-quality",
  "/our-team",
  "/vision-mission",
  "/privacy-policy",
  "/products",
  "/metro-projects-tmt-steel-bars",
  "/our-certification",
  "/our-network",
  "/product-550d",
  "/product-crs-550d",
  "/steel-distributors-dealers",
  "/8-mm-steel-rod",
  "/10-mm-steel-rod",
  "/12-mm-steel-rod",
  "/16-mm-steel-rod",
  "/20-mm-steel-rod",
  "/25-mm-steel-rod",
  "/32-mm-steel-rod",
  "/projects",
  "/request-quote",
  "/sgbc",
  "/services",
  "/steel-testing",
  "/tmt-steel-price-today",
  "/tmt-steel-calculator",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const seen = new Set<string>();

  const approvedBlogRoutes = getBlogMigrationRegistry()
    .filter((entry) => entry.migrationStatus === "Migrated — approved")
    .map((entry) => new URL(entry.finalUrl).pathname);

  return [
    ...staticRoutes,
    ...getLegacyTopLevelPages().map((page) => page.path),
    ...approvedBlogRoutes,
  ]
    .filter((route) => {
      const normalized = route || "/";
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    })
    .map((route) => ({
      url: `${productionDomain}${route === "/" ? "" : route}`,
      lastModified: today,
      changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
      priority: route === "/" ? 1 : route.includes("/blog/") ? 0.55 : 0.75,
    }));
}
