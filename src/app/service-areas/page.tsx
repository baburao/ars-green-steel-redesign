import Link from "next/link";
import { ArrowRight, FileText, MapPin, Search, ShieldCheck } from "lucide-react";
import { cityServiceAreas } from "@/data/city-service-areas";
import { createPageMetadata } from "@/lib/site-metadata";
import { createServiceAreasJsonLd, serializeServiceAreaJsonLd } from "@/lib/service-area-schema";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "ARS TMT Steel Service Areas | City Enquiry Support",
  description: "Explore ARS TMT steel enquiry pathways for eight cities across Tamil Nadu, Kerala, Puducherry and Andhra Pradesh.",
  path: "/service-areas",
  image: "/ars-assets/cwv/heroes/dealer-distributor-desktop.webp",
});

const regionOrder = ["Tamil Nadu", "Kerala", "Puducherry", "Andhra Pradesh"];

export default function ServiceAreasPage() {
  const jsonLd = createServiceAreasJsonLd(cityServiceAreas);

  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeServiceAreaJsonLd(jsonLd) }} />
      <SiteHeader />
      <PageHero
        eyebrow="ARS SERVICE AREAS"
        title="TMT Steel Enquiry Support by City"
        body="Start with a city-specific ARS product and enquiry pathway, then confirm dealer, price, stock and delivery details for the exact project location."
        primaryLabel="Choose a city"
        primaryHref="#cities"
        secondaryLabel="Find a dealer"
        secondaryHref="/our-network"
        backgroundImageSrc="/ars-assets/cwv/heroes/dealer-distributor-desktop.webp"
        backgroundImageMobileSrc="/ars-assets/cwv/heroes/dealer-distributor-mobile.webp"
        backgroundImageAlt="ARS steel distribution and project support"
        backgroundImagePosition="58% center"
      />

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionKicker variant="brand">How to use this directory</SectionKicker>
            <h2 className="section-title mt-5">Choose a location, then share the real requirement.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-steel-700 md:text-lg">
            <p>Each service-area page combines ARS product information, project context, dealer discovery and a city-prefilled quotation form. It does not guarantee live stock, delivery or a specific dealer.</p>
            <p>The structural engineer&apos;s specification remains the source of truth for product grade and bar diameter. Commercial details are confirmed after ARS receives the site location, sizes and approximate quantity.</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24" id="cities">
        <div className="ars-container">
          <SectionKicker variant="brand">Eight city pathways</SectionKicker>
          <h2 className="section-title mt-5">ARS service areas</h2>
          <div className="mt-12 space-y-14">
            {regionOrder.map((region) => {
              const regionAreas = cityServiceAreas.filter((area) => area.state === region);
              if (regionAreas.length === 0) return null;

              return (
                <section key={region} aria-labelledby={`region-${region.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-4 border-b border-ink-900/12 pb-4">
                    <MapPin size={18} className="text-brand-red" aria-hidden="true" />
                    <h3 id={`region-${region.toLowerCase().replace(/\s+/g, "-")}`} className="font-display text-2xl font-bold text-ink-900">{region}</h3>
                  </div>
                  <div className="grid border-b border-ink-900/12 md:grid-cols-2 xl:grid-cols-3">
                    {regionAreas.map((area, index) => (
                      <Link
                        key={area.path}
                        href={area.path}
                        className={`focus-ring group flex min-h-[250px] flex-col border-t border-ink-900/12 py-7 transition hover:bg-white md:px-7 ${index % 2 === 0 ? "md:border-r" : ""} xl:border-r ${index % 3 === 2 ? "xl:border-r-0" : ""}`}
                      >
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">{area.state}</span>
                        <h4 className="mt-5 font-display text-2xl font-bold text-ink-900 group-hover:text-brand-blue">{area.h1}</h4>
                        <p className="mt-4 text-sm leading-7 text-steel-700">{area.description}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">Open city page <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" /></span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-10 border-b border-ink-900/12 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">From search to support</SectionKicker>
              <h2 className="section-title mt-5">Three useful next steps</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-steel-700 lg:justify-self-end">Choose the path that matches the information already available for the project.</p>
          </div>
          <div className="grid border-b border-ink-900/12 md:grid-cols-3">
            {[
              { icon: Search, title: "Review the product", body: "Compare ARS Fe 550D, CRS Fe 550D and Binders on their canonical product pages.", href: "/products", label: "Explore products" },
              { icon: MapPin, title: "Search dealer records", body: "Use city, district, pincode or dealer name as a discovery starting point, then confirm the record.", href: "/our-network", label: "Find a dealer" },
              { icon: FileText, title: "Submit the requirement", body: "Send the grade, bar sizes, approximate quantity and site locality through the quote form.", href: "/request-quote", label: "Request a quote" },
            ].map(({ icon: Icon, title, body, href, label }, index) => (
              <article key={title} className={`py-8 md:px-8 ${index < 2 ? "md:border-r md:border-ink-900/12" : ""} ${index === 0 ? "md:pl-0" : ""}`}>
                <span className="inline-flex size-11 items-center justify-center border border-brand-blue/20 text-brand-blue"><Icon size={19} aria-hidden="true" /></span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-steel-700">{body}</p>
                <Link href={href} className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue">{label} <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-start gap-4 border border-brand-blue/16 bg-surface-50 p-6">
            <ShieldCheck className="mt-1 shrink-0 text-brand-blue" size={20} aria-hidden="true" />
            <p className="text-sm leading-7 text-steel-700"><strong className="text-ink-900">Verification note:</strong> City pages provide enquiry and discovery pathways. They do not represent a city office, warehouse, guaranteed dealer, live stock position or fixed delivery commitment.</p>
          </div>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow="PROJECT LOCATION READY"
        headline="Share the requirement with ARS."
        body="Include the exact locality, engineer-specified grade, bar diameters and approximate quantity for a more useful response."
        primaryLabel="Request a quote"
        primaryHref="/request-quote"
        secondaryLabel="Contact ARS"
        secondaryHref="/contact"
        tone="solid"
      />
    </main>
  );
}
