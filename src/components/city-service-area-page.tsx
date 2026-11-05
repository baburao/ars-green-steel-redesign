import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, FileText, MapPin, Ruler } from "lucide-react";
import type { CityServiceArea } from "@/data/city-service-areas";
import { getRelatedCityServiceAreas } from "@/data/city-service-areas";
import { productCatalog } from "@/lib/product-catalog";
import { createCityServiceAreaJsonLd, serializeServiceAreaJsonLd } from "@/lib/service-area-schema";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq-list";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export function CityServiceAreaPage({ area }: { area: CityServiceArea }) {
  const relatedAreas = getRelatedCityServiceAreas(area);
  const jsonLd = createCityServiceAreaJsonLd(area);
  const prefillSummary = area.state === area.shortCity
    ? `${area.shortCity} is prefilled as both the Union Territory and city.`
    : `${area.state} and ${area.shortCity} are prefilled.`;

  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeServiceAreaJsonLd(jsonLd) }}
      />
      <SiteHeader />
      <PageHero
        eyebrow={`ARS SERVICE AREA · ${area.state}`}
        title={area.h1}
        body={area.heroBody}
        primaryLabel="Request a quote"
        primaryHref="#enquire"
        secondaryLabel="Find a dealer"
        secondaryHref="/our-network"
        backgroundImageSrc="/ars-assets/products/ProductComparission_HeroBanner-desktop.webp"
        backgroundImageMobileSrc="/ars-assets/products/ProductComparission_HeroBanner-mobile.webp"
        backgroundImageAlt="ARS Fe 550D and CRS Fe 550D TMT product range"
        backgroundImagePosition="58% center"
      />

      <section className="border-b border-surface-100 bg-white">
        <div className="ars-container grid divide-y divide-ink-900/10 py-2 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["Product choice", "ARS Fe 550D, CRS Fe 550D and Binders"],
            ["Requirement context", "Grade, diameter, quantity and site location"],
            ["Commercial status", "Price, stock and delivery confirmed after enquiry"],
          ].map(([label, value], index) => (
            <div key={label} className={`py-6 md:px-7 ${index === 0 ? "md:pl-0" : ""}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">{label}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-steel-700">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
          <div>
            <SectionKicker variant="brand">{`${area.shortCity} project planning`}</SectionKicker>
            <h2 className="section-title mt-5">Start with the structural requirement.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-steel-700 md:text-lg">
            {area.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-10 border-b border-ink-900/12 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Why this page helps</SectionKicker>
              <h2 className="section-title mt-5">{area.localHeading}</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-steel-700 lg:justify-self-end">{area.localContext}</p>
          </div>
          <div className="grid border-b border-ink-900/12 md:grid-cols-2">
            {area.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`border-t border-ink-900/12 py-8 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center border border-brand-blue/20 bg-white text-brand-blue">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{benefit.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-steel-700">{benefit.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-ink-950 py-20 text-white md:py-24">
        <div className="ars-container">
          <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker variant="light">ARS product range</SectionKicker>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] text-white">Choose from verified product information.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/68 lg:justify-self-end">Review each ARS product on its canonical page. Product availability for {area.shortCity} is confirmed only after enquiry.</p>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {productCatalog.map((product) => (
              <Link
                key={product.slug}
                href={product.route}
                className="focus-ring group flex min-h-[330px] flex-col bg-ink-950 p-7 transition hover:bg-brand-blue-dark md:p-8"
              >
                <div className="relative h-24 w-full max-w-[190px]">
                  <Image src={product.image} alt={`${product.name} product logo`} fill sizes="190px" className="object-contain object-left" />
                </div>
                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">{product.overviewTag}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">{product.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-white">Review product <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionKicker variant="brand">Project applications</SectionKicker>
            <h2 className="section-title mt-5">Common {area.shortCity} enquiry contexts</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-steel-700">These are planning contexts, not automatic product recommendations. The approved structural design controls the final grade and diameter.</p>
          </div>
          <ol className="border-y border-ink-900/12">
            {area.applications.map((application, index) => (
              <li key={application.title} className="grid gap-3 border-b border-ink-900/12 py-6 last:border-b-0 sm:grid-cols-[3rem_0.72fr_1.28fr] sm:items-start sm:gap-5">
                <span className="font-technical text-sm font-bold text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-bold text-ink-900">{application.title}</h3>
                <p className="text-[15px] leading-7 text-steel-700">{application.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-16 text-white md:py-20">
        <div className="ars-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Dealer and availability support</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] text-white">Confirm the commercial details for your exact site.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{area.supportCopy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/our-network" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3 text-sm font-bold text-brand-blue transition hover:bg-surface-50">
              <MapPin size={17} aria-hidden="true" /> Find a dealer
            </Link>
            <Link href="/tmt-steel-price-today" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Review price guidance <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Frequently asked questions</SectionKicker>
          <h2 className="section-title mt-5">Before you submit a {area.shortCity} enquiry</h2>
          <FaqList className="mt-10" items={area.faqs} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="enquire">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionKicker variant="brand">Tracked city enquiry</SectionKicker>
            <h2 className="section-title mt-5">Tell ARS what the project needs.</h2>
            <p className="mt-6 text-base leading-8 text-steel-700">{prefillSummary} Use the requirement field for TMT bar sizes, approximate quantity, delivery locality and project stage.</p>
            <ul className="mt-8 grid gap-4 border-y border-ink-900/12 py-6 text-sm font-semibold leading-6 text-steel-700">
              <li className="flex gap-3"><Ruler size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />Required diameters and approximate quantity</li>
              <li className="flex gap-3"><Building2 size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />Project type and construction stage</li>
              <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />Exact site or delivery locality</li>
              <li className="flex gap-3"><FileText size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />Engineer-specified product grade</li>
            </ul>
          </div>
          <QuoteRequestForm
            title={`Request an ARS steel quote for ${area.shortCity}`}
            body="Share the project and reinforcement details so the ARS team can respond with relevant dealer, availability and quotation assistance."
            idPrefix={`city-${area.slug}`}
            prefill={{ state: area.state, city: area.shortCity }}
            sourcePage={area.path}
          />
        </div>
      </MotionSection>

      <MotionSection className="border-t border-ink-900/10 bg-surface-50 py-16 md:py-20">
        <div className="ars-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionKicker variant="brand">Related service areas</SectionKicker>
              <h2 className="section-title mt-5">Continue by location</h2>
            </div>
            <Link href="/service-areas" className="focus-ring inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-brand-blue md:self-auto">View all service areas <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-10 grid border-y border-ink-900/12 md:grid-cols-3">
            {relatedAreas.map((related, index) => (
              <Link key={related.path} href={related.path} className={`focus-ring group flex min-h-32 flex-col justify-between border-b border-ink-900/12 py-6 md:border-b-0 md:px-7 ${index < relatedAreas.length - 1 ? "md:border-r" : ""} ${index === 0 ? "md:pl-0" : ""}`}>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-steel-700">{related.state}</span>
                <span className="mt-5 inline-flex items-center justify-between gap-4 font-display text-xl font-bold text-ink-900 group-hover:text-brand-blue">{related.h1}<ArrowRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow={`${area.shortCity} PROJECT SUPPORT`}
        headline="Need help before you request a quote?"
        body="Use the dealer locator for current location records or contact ARS with the project context."
        primaryLabel="Find a dealer"
        primaryHref="/our-network"
        secondaryLabel="Contact ARS"
        secondaryHref="/contact"
        tone="solid"
      />
    </main>
  );
}
