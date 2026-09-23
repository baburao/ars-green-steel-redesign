import { ArrowRight, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Download Product Brochures | ARS Green Steel",
  description: "Download ARS Green Steel product brochures and the corporate booklet.",
  path: "/download-product-brochure",
});

const brochures = [
  {
    title: "ARS Fe 550D Brochure",
    category: "Product brochure",
    description: "Product information for ARS Fe 550D TMT bars.",
    href: "/ars-assets/Downloads/ars-fe-550d-brochure.pdf",
    logo: "/ars-assets/logos/ARS550D.png",
    logoAlt: "ARS Fe 550D product logo",
  },
  {
    title: "ARS CRS Fe 550D Brochure — English",
    category: "Product brochure",
    description: "Product information for ARS CRS Fe 550D TMT bars in English.",
    href: "/ars-assets/Downloads/ars-crs-brochure-english.pdf",
    logo: "/ars-assets/logos/ARSCRS550D.png",
    logoAlt: "ARS CRS Fe 550D product logo",
  },
  {
    title: "ARS CRS Fe 550D Brochure — TAM",
    category: "Product brochure",
    description: "Product information for ARS CRS Fe 550D TMT bars.",
    href: "/ars-assets/Downloads/ars-crs-brochure-tam.pdf",
    logo: "/ars-assets/logos/ARSCRS550D.png",
    logoAlt: "ARS CRS Fe 550D product logo",
  },
  {
    title: "ARS Binders Brochure",
    category: "Product brochure",
    description: "Product information for ARS factory-made reinforcement binders.",
    href: "/ars-assets/Downloads/Binders.pdf",
    logo: "/ars-assets/logos/BinderLogo.png",
    logoAlt: "ARS Binders product logo",
  },
  {
    title: "ARS Corporate Booklet",
    category: "Company profile",
    description: "An introduction to ARS Green Steel, its capabilities, and its approach.",
    href: "/ars-assets/Downloads/ars-corporate-booklet.pdf",
    logo: "/ars-assets/logos/ARSGREENSTEEL.png",
    logoAlt: "ARS Green Steel logo",
  },
] as const;

export default function DownloadProductBrochurePage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <section className="ars-page-hero relative flex min-h-[440px] items-end overflow-hidden bg-ink-950 py-16 pt-36 md:min-h-[500px] md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(222,18,26,0.28),transparent_32%),linear-gradient(115deg,#060d1e_0%,#0d2b6e_100%)]" />
        <div className="steel-grid absolute inset-0 opacity-30" />
        <div className="ars-container relative z-10 w-full">
          <SectionKicker variant="light">Resource library</SectionKicker>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
            Product <span className="italic text-brand-red">Brochures</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/75 md:text-lg md:leading-8">
            Download ARS product literature and our corporate booklet for product planning, specification review, and project discussions.
          </p>
        </div>
      </section>

      <MotionSection className="bg-white py-16 md:py-24">
        <div className="ars-container">
          <div className="mb-10 max-w-2xl">
            <SectionKicker variant="brand">Available downloads</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">
              The information you need, ready to share.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {brochures.map((brochure) => (
              <article key={brochure.href} className="flex min-h-64 flex-col border border-ink-900/10 bg-surface-50 p-7 shadow-[0_18px_44px_rgba(13,43,110,0.06)] md:p-8">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white"><FileText size={19} aria-hidden="true" /></div>
                  <div className="flex h-14 w-36 items-center justify-end">
                    <Image src={brochure.logo} alt={brochure.logoAlt} width={144} height={56} className="h-auto max-h-14 w-auto max-w-full object-contain" />
                  </div>
                </div>
                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">{brochure.category}</p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight">{brochure.title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel-700">{brochure.description}</p>
                <a href={brochure.href} download className="focus-ring mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-7 text-sm font-bold text-brand-blue transition hover:text-brand-red">
                  Download PDF <Download size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-between gap-5 border-l-4 border-brand-red bg-surface-50 p-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-6 text-steel-700">Need help choosing the right TMT bar for your project? The ARS team can help you compare the available product options.</p>
            <Link href="/products" className="focus-ring inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-red">Explore products <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </MotionSection>
      <ContactCta eyebrow="Need project support?" headline="Talk to the ARS team." body="Share your project requirements for product guidance and a confirmed quote." primaryLabel="Request a quote" primaryHref="/request-quote" secondaryLabel="Explore products" secondaryHref="/products" tone="solid" />
    </main>
  );
}
