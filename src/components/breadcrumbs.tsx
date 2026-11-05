"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  tone?: "dark" | "light";
};

/**
 * A compact, server-rendered orientation trail for editorial interior-page heroes.
 * The final item is always rendered as the current page rather than a link.
 */
export function Breadcrumbs({ items, className = "", tone = "dark" }: BreadcrumbsProps) {
  const styles = tone === "dark"
    ? { nav: "text-white/70", current: "text-white", separator: "text-white/42", link: "hover:text-white" }
    : { nav: "text-steel-700", current: "text-ink-900", separator: "text-steel-700/45", link: "hover:text-brand-blue" };
  const mobileItems = items.length > 3 ? [items[0], { label: "…" }, items.at(-1)!] : items;

  function renderItems(trail: BreadcrumbItem[]) {
    return trail.map((item, index) => {
      const isCurrentPage = index === trail.length - 1;
      const isEllipsis = item.label === "…";

      return (
        <li key={`${item.label}-${item.href ?? "current"}-${index}`} className="flex min-h-11 items-center">
          {index > 0 ? <ChevronRight className={`mx-1.5 shrink-0 ${styles.separator}`} size={14} aria-hidden="true" /> : null}
          {isEllipsis ? (
            <span aria-hidden="true" className="px-1.5">…</span>
          ) : isCurrentPage || !item.href ? (
            <span aria-current={isCurrentPage ? "page" : undefined} className={`max-w-[14rem] truncate ${styles.current} sm:max-w-none`}>
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className={`focus-ring inline-flex min-h-11 items-center rounded-sm px-1 transition ${styles.link}`}>
              {item.label}
            </Link>
          )}
        </li>
      );
    });
  }

  return (
    <nav aria-label="Breadcrumb" className={`text-[12px] font-medium tracking-[0.01em] ${styles.nav} ${className}`}>
      <ol className="hidden flex-wrap items-center gap-x-1 gap-y-0 md:flex">{renderItems(items)}</ol>
      <ol className="flex items-center gap-x-1 md:hidden">{renderItems(mobileItems)}</ol>
    </nav>
  );
}

type BreadcrumbDefinition = {
  label: string;
  parents?: BreadcrumbItem[];
  tone?: "dark" | "light";
};

const home: BreadcrumbItem = { label: "Home", href: "/" };
const products: BreadcrumbItem = { label: "Products", href: "/products" };
const about: BreadcrumbItem = { label: "About", href: "/about-us" };
const sustainability: BreadcrumbItem = { label: "Sustainability", href: "/ars-green-steel" };
const solutions: BreadcrumbItem = { label: "Solutions", href: "/industries" };
const resources: BreadcrumbItem = { label: "Resources", href: "/blog" };
const pressMedia: BreadcrumbItem = { label: "Press Media", href: "/press-media" };
const serviceAreas: BreadcrumbItem = { label: "Service Areas", href: "/service-areas" };

const routeDefinitions: Record<string, BreadcrumbDefinition> = {
  "/about-us": { label: "ARS Group", parents: [home, about] },
  "/vision-mission": { label: "Vision & Mission", parents: [home, about] },
  "/our-team": { label: "Leadership", parents: [home, about] },
  "/manufacturing": { label: "Manufacturing", parents: [home, about] },
  "/our-quality": { label: "Quality", parents: [home, about] },
  "/our-certification": { label: "Certifications", parents: [home, about] },
  "/csr": { label: "CSR", parents: [home, about] },
  "/clients": { label: "Clients", parents: [home, about] },
  "/our-express": { label: "Our Express", parents: [home, about] },
  "/products": { label: "Products", parents: [home] },
  "/product-550d": { label: "ARS Fe 550D", parents: [home, products] },
  "/product-crs-550d": { label: "ARS CRS Fe 550D", parents: [home, products] },
  "/ars-binders": { label: "ARS Binders", parents: [home, products] },
  "/crs-qr-code-view-html": { label: "CRS Product Verification", parents: [home, products] },
  "/download-product-brochure": { label: "Product Brochures", parents: [home, products] },
  "/8-mm-steel-rod": { label: "8 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/10-mm-steel-rod": { label: "10 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/12-mm-steel-rod": { label: "12 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/16-mm-steel-rod": { label: "16 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/20-mm-steel-rod": { label: "20 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/25-mm-steel-rod": { label: "25 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/32-mm-steel-rod": { label: "32 mm Steel Rod", parents: [home, products, { label: "TMT Bar Sizes", href: "/products#sizes" }] },
  "/ars-green-steel": { label: "ARS Green Steel", parents: [home, sustainability] },
  "/green-steel": { label: "Green Steel Explained", parents: [home, sustainability] },
  "/embodied-carbon": { label: "Embodied Carbon", parents: [home, sustainability] },
  "/green-certifications": { label: "Green Certifications", parents: [home, sustainability] },
  "/reports-downloads": { label: "Reports & Downloads", parents: [home, sustainability] },
  "/sgbc": { label: "SGBC", parents: [home, sustainability] },
  "/industries": { label: "Solutions", parents: [home] },
  "/services": { label: "Services", parents: [home, solutions] },
  "/projects": { label: "Project Types", parents: [home, solutions] },
  "/metro-projects-tmt-steel-bars": { label: "Metro Projects", parents: [home, solutions, { label: "Project Types", href: "/projects" }] },
  "/road-projects-tmt-steel-bars": { label: "Road Projects", parents: [home, solutions, { label: "Project Types", href: "/projects" }] },
  "/bridges-projects-tmt-steel-bars": { label: "Bridges & Flyovers", parents: [home, solutions, { label: "Project Types", href: "/projects" }] },
  "/institutions-projects-tmt-steel-bars": { label: "Institutional Projects", parents: [home, solutions, { label: "Project Types", href: "/projects" }] },
  "/steel-distributors-dealers": { label: "Dealers & Distributors", parents: [home, solutions] },
  "/our-network": { label: "Dealer Locator", parents: [home, solutions] },
  "/service-areas": { label: "Service Areas", parents: [home, solutions] },
  "/tmt-bars-coimbatore": { label: "TMT Bars in Coimbatore", parents: [home, serviceAreas] },
  "/tmt-bars-madurai": { label: "TMT Bars in Madurai", parents: [home, serviceAreas] },
  "/tmt-bars-salem": { label: "TMT Bars in Salem", parents: [home, serviceAreas] },
  "/tmt-bars-tiruppur": { label: "TMT Bars in Tiruppur", parents: [home, serviceAreas] },
  "/tmt-bars-vellore": { label: "TMT Bars in Vellore", parents: [home, serviceAreas] },
  "/tmt-bars-kochi": { label: "TMT Bars in Kochi (Ernakulam)", parents: [home, serviceAreas] },
  "/tmt-bars-puducherry": { label: "TMT Bars in Puducherry", parents: [home, serviceAreas] },
  "/tmt-bars-nellore": { label: "TMT Bars in Nellore", parents: [home, serviceAreas] },
  "/become-a-steel-distributor": { label: "Become a Steel Distributor", parents: [home, solutions] },
  "/steel-testing": { label: "Steel Testing", parents: [home, products] },
  "/blog": { label: "Blog", parents: [home, resources] },
  "/guides-articles": { label: "Guides & Articles", parents: [home, resources] },
  "/faqs": { label: "FAQs", parents: [home, resources] },
  "/tmt-steel-calculator": { label: "TMT Steel Calculator", parents: [home, resources] },
  "/tmt-steel-price-today": { label: "Steel Price Today", parents: [home, resources] },
  "/contact": { label: "Contact", parents: [home], tone: "light" },
  "/request-quote": { label: "Request Quote", parents: [home], tone: "light" },
  "/careers": { label: "Careers", parents: [home] },
  "/press-media": { label: "Press Media", parents: [home] },
  "/tv-commercials": { label: "TV Commercials", parents: [home, pressMedia] },
  "/news-press-releases": { label: "News & Press Releases", parents: [home, pressMedia] },
  "/events": { label: "Events", parents: [home, pressMedia] },
  "/gallery": { label: "Gallery", parents: [home, pressMedia] },
  "/success-stories": { label: "Success Stories", parents: [home, pressMedia] },
  "/video": { label: "Videos", parents: [home, pressMedia] },
  "/privacy-policy": { label: "Privacy Policy", parents: [home, { label: "Legal" }] },
  "/terms-of-use": { label: "Terms of Use", parents: [home, { label: "Legal" }] },
};

const excludedRoutes = new Set(["/", "/thank-you"]);

function titleFromPath(value: string) {
  return value
    .replace(/\.html$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getBreadcrumbDefinition(pathname: string): BreadcrumbDefinition | null {
  if (excludedRoutes.has(pathname)) return null;

  const direct = routeDefinitions[pathname];
  if (direct) return direct;

  if (pathname.startsWith("/blog/")) {
    return { label: titleFromPath(pathname.split("/").at(-1) ?? "Article"), parents: [home, resources, { label: "Blog", href: "/blog" }] };
  }

  if (pathname.startsWith("/careers/")) {
    return { label: titleFromPath(pathname.split("/").at(-1) ?? "Career Opportunity"), parents: [home, { label: "Careers", href: "/careers" }] };
  }

  if (pathname.startsWith("/tmt-steel-bar-guide-")) {
    return { label: titleFromPath(pathname.replace("/tmt-steel-bar-guide-", "")), parents: [home, solutions] };
  }

  if (pathname.startsWith("/arssteel-")) {
    return { label: "Buy ARS Steel", parents: [home, products] };
  }

  if (pathname === "/ars-green-steel-old-v1") {
    return { label: "ARS Green Steel", parents: [home, sustainability] };
  }

  return { label: titleFromPath(pathname.slice(1)), parents: [home] };
}

/** Top-of-hero breadcrumb bar supplied once by the shared public site header. */
export function BreadcrumbBar({ pathname }: { pathname: string }) {
  const definition = getBreadcrumbDefinition(pathname);
  if (!definition) return null;

  const tone = definition.tone ?? "dark";
  const barClass = tone === "dark"
    ? "border-white/15"
    : "border-ink-900/12 bg-white/88 backdrop-blur-sm";

  return (
    <div className={`absolute inset-x-0 top-0 border-b ${barClass}`}>
      <div className="ars-container">
        <Breadcrumbs items={[...(definition.parents ?? [home]), { label: definition.label }]} tone={tone} />
      </div>
    </div>
  );
}
