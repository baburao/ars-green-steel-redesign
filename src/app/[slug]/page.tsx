import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { DealerDistributorPage } from "@/components/dealer-distributor-page";
import { AudienceGuidePage } from "@/components/homeowners-guide-page";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { bridgesFlyoversProjectPage, institutionalProjectPage, ProjectTypePage, roadProjectPage } from "@/components/project-type-page";
import { SiteHeader } from "@/components/site-header";
import { getPlannedPage, plannedPages } from "@/data/planned-pages";
import { getLegacyPage, getLegacyTopLevelPages } from "@/lib/legacy-content";
import { createPageMetadata, isProductionSite, toProductionUrl } from "@/lib/site-metadata";

const audienceGuideSlugs = [
  "tmt-steel-bar-guide-homeowners",
  "tmt-steel-bar-guide-engineers-architects",
  "tmt-steel-bar-guide-civil-contractors",
] as const;

type AudienceGuideSlug = (typeof audienceGuideSlugs)[number];
const roadProjectSlug = "road-projects-tmt-steel-bars";
const bridgesFlyoversProjectSlug = "bridges-projects-tmt-steel-bars";
const institutionalProjectSlug = "institutions-projects-tmt-steel-bars";
const dealerDistributorSlug = "steel-distributors-dealers";

const audienceMetadata = {
  "tmt-steel-bar-guide-homeowners": {
    title: "TMT Steel Guide for Home Owners | ARS Green Steel",
    description: "A practical guide for home owners choosing ARS TMT steel, comparing product options, and finding dealer support.",
  },
  "tmt-steel-bar-guide-engineers-architects": {
    title: "TMT Steel Guide for Engineers & Architects | ARS Green Steel",
    description: "Product, manufacturing, quality, and specification guidance for engineers and architects evaluating ARS TMT steel.",
  },
  "tmt-steel-bar-guide-civil-contractors": {
    title: "TMT Steel Guide for Civil Contractors | ARS Green Steel",
    description: "ARS TMT Bars for contractors and builders: product selection, dealer access, quality assurance, tools, support, and project enquiries.",
  },
} as const;

const dealerDistributorMetadata = {
  title: "Dealer & Distributor Enquiries | ARS Green Steel",
  description: "Contact ARS to discuss Dealer or Distributor interest, review product information, and begin a commercial enquiry.",
};

function isAudienceGuideSlug(slug: string): slug is AudienceGuideSlug {
  return audienceGuideSlugs.includes(slug as AudienceGuideSlug);
}

export function generateStaticParams() {
  return [
    ...getLegacyTopLevelPages()
      .filter((page) => page.slug !== "home")
      .map((page) => ({ slug: page.slug })),
    ...plannedPages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(slug);
  const plannedPage = getPlannedPage(slug);

  if (plannedPage) {
    return {
      title: `${plannedPage.title} | ARS Green Steel`,
      robots: { index: false, follow: true },
      alternates: { canonical: toProductionUrl(`/${plannedPage.slug}`) },
    };
  }

  if (!page || page.kind === "blog") {
    return {};
  }

  if (slug === roadProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Road Projects | ARS Green Steel",
      description: roadProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/CRS.png",
    });
  }

  if (slug === bridgesFlyoversProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Bridges and Flyovers | ARS Green Steel",
      description: bridgesFlyoversProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/CRS.png",
    });
  }

  if (slug === institutionalProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Institutional Projects | ARS Green Steel",
      description: institutionalProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/TMT-Bars.png",
    });
  }

  if (slug === dealerDistributorSlug) {
    return createPageMetadata({
      title: dealerDistributorMetadata.title,
      description: dealerDistributorMetadata.description,
      path: page.path,
      image: "/ars-assets/Solutions/Dealers/DealersHeroBanner.jpg",
    });
  }

  if (slug in audienceMetadata) {
    const audiencePage = audienceMetadata[slug as keyof typeof audienceMetadata];
    return createPageMetadata({ title: audiencePage.title, description: audiencePage.description, path: page.path });
  }

  return {
    title: `${page.title} | ARS Green Steel`,
    description: page.description,
    robots: { index: isProductionSite, follow: isProductionSite },
    alternates: { canonical: toProductionUrl(page.path) },
    openGraph: {
      title: `${page.title} | ARS Green Steel`,
      description: page.description,
      url: toProductionUrl(page.path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ARS Green Steel`,
      description: page.description,
    },
  };
}

export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(slug);
  const plannedPage = getPlannedPage(slug);

  if (plannedPage) {
    return (
      <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
        <SiteHeader />
        <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
          <div className="soft-noise absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,43,110,0.7)_0%,rgba(6,13,30,0.98)_62%)]" />
          <div className="ars-container relative z-10 w-full pb-16">
            <div className="max-w-4xl">
              <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
                {plannedPage.title}
              </h1>
              <Link
                href="/contact"
                className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Contact ARS <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!page || page.kind === "blog") {
    notFound();
  }

  if (isAudienceGuideSlug(slug)) {
    return <AudienceGuidePage slug={slug} />;
  }

  if (slug === dealerDistributorSlug) {
    return <DealerDistributorPage />;
  }

  if (slug === roadProjectSlug) {
    return <ProjectTypePage {...roadProjectPage} />;
  }

  if (slug === bridgesFlyoversProjectSlug) {
    return <ProjectTypePage {...bridgesFlyoversProjectPage} />;
  }

  if (slug === institutionalProjectSlug) {
    return <ProjectTypePage {...institutionalProjectPage} />;
  }

  return <LegacyPageRenderer page={page} />;
}
