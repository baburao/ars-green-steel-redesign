import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gauge,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

const pagePath = "/bridges-projects-tmt-steel-bars";

export const metadata: Metadata = createPageMetadata({
  title: "TMT Bars for Bridges & Flyovers | ARS Green Steel",
  description:
    "ARS TMT Bars for bridge and flyover construction, designed for reliable strength, corrosion resistance, seismic performance, and lasting durability.",
  path: pagePath,
  image: "/ars-assets/Solutions/Bridges/BridgesHeroBanner.jpg",
});

const structuralDemands = [
  ["High load-bearing strength", "Bridges and flyovers are designed to support constant dynamic loads. High-strength TMT bars provide the structural reinforcement needed to help maintain stability and long-term performance."],
  ["Superior ductility", "Good ductility allows reinforced concrete structures to absorb stress and distribute loads more effectively, helping improve structural resilience under demanding conditions."],
  ["2x Corrosion resistance", "Bridges and flyovers exposed to moisture, humidity, and high salinity environments require reinforcement that helps improve durability and reduce long-term maintenance."],
  ["Earthquake performance", "High-ductility TMT bars help reinforced concrete structures respond better to seismic forces, making them suitable for infrastructure projects in earthquake-prone regions."],
  ["Long-term durability", "Infrastructure is expected to perform reliably for decades. Quality reinforcement helps extend the service life of bridges and flyovers while supporting long-term structural performance."],
  ["Manufactured to recognised standards", "Consistent manufacturing, stringent quality control, and recognised certifications help ensure every TMT bar delivers dependable performance across critical infrastructure projects."],
] as const;

const arsStrengths = [
  [Gauge, "Built for continuous load performance", "Engineered to support reinforced concrete structures that endure constant traffic, dynamic loads, and everyday use."],
  [ShieldCheck, "Strength that endures decades", "Designed to help bridges and flyovers maintain structural stability and long-term durability throughout their service life."],
  [BadgeCheck, "Precision that builds confidence", "Advanced manufacturing processes and spectrometer testing ensure consistent mechanical properties and accurate chemical composition in every batch."],
  [Waves, "Performance in challenging environments", "ARS CRS TMT Bars provide enhanced corrosion resistance for bridges and infrastructure exposed to high moisture and high salinity conditions."],
  [ClipboardCheck, "Trusted for critical infrastructure", "Manufactured under stringent quality standards and backed by recognised certifications for infrastructure where reliability is essential."],
] as const;

const productRows = [
  ["Strength", "★★★★★", "★★★★★"],
  ["Ductility", "★★★★★", "★★★★★"],
  ["Corrosion resistance", "2x Corrosion resistance", "Standard"],
  ["Best suited for", "Coastal, high-moisture & high salinity infrastructure", "General bridge & infrastructure projects"],
  ["IS standard", "IS 1786", "IS 1786"],
] as const;

const certifications = [
  "BIS Certified – Manufactured in compliance with IS 1786 standards.",
  "ISO 9001 Certified – Quality management systems for consistent manufacturing.",
  "ISO 14001 Certified – Environmentally responsible manufacturing practices.",
  "SGS Tested – Independently verified product quality and performance.",
  "GreenPro Certified – Recognised for sustainable manufacturing.",
  "Environmental Product Declaration (EPD) – Transparent, third-party verified environmental performance.",
  "SGBC 4-Ticks Leader Rating – Supporting sustainable infrastructure and green building initiatives.",
  "Government of Tamil Nadu PWD Approved – Approved for use in public infrastructure and construction projects.",
] as const;

const selectionGuide = [
  "Review the project’s structural design and load requirements.",
  "Consider environmental conditions, including high moisture and high salinity exposure.",
  "Select Fe550D or CRS 550D based on the project’s structural requirements, environmental conditions, and long-term durability.",
  "Request product specifications, technical data sheets, brochures, and technical assistance from the ARS technical team.",
] as const;

const faqs = [
  ["Which TMT bar is suitable for bridge and infrastructure construction?", "The choice depends on the project's structural design, load requirements, and environmental conditions. ARS offers Fe550D and CRS 550D TMT Bars for a wide range of bridge and infrastructure applications."],
  ["Why is ductility important in bridge construction?", "Ductile TMT bars help reinforced concrete structures absorb stress and distribute loads more effectively, contributing to improved structural performance under dynamic loading and seismic conditions."],
  ["When should CRS TMT bars be used?", "CRS 550D TMT Bars are recommended for bridges and infrastructure exposed to high moisture and high salinity environments where enhanced corrosion resistance is required."],
  ["Do ARS TMT Bars comply with industry standards?", "Yes. ARS TMT Bars are manufactured in accordance with IS 1786 standards and are supported by recognised certifications, including BIS, ISO, SGS, GreenPro, EPD, and SGBC."],
  ["How does ARS ensure consistent product quality?", "Every batch undergoes stringent quality control, including advanced spectrometer testing, mechanical testing, and chemical composition verification to ensure consistent performance."],
  ["Where can I get technical specifications or product guidance?", "Our technical team can provide product specifications, technical data sheets, brochures, and assistance in selecting the right TMT bars for your bridge and infrastructure projects."],
] as const;

export default function BridgesProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src="/ars-assets/Solutions/Bridges/BridgesHeroBanner.jpg" alt="Bridge and flyover infrastructure construction" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-950/75" aria-hidden="true" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-4xl">
            <SectionKicker variant="light">Bridge &amp; flyover construction</SectionKicker>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.025em] text-white">Building Infrastructure That Connects Generations</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/80">ARS TMT Bars are engineered for bridge construction and flyover projects, delivering reliable strength, corrosion resistance, seismic performance, and lasting durability for critical infrastructure.</p>
            <Link href="/request-quote" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Start a project enquiry <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20"><div><SectionKicker>Bridge construction</SectionKicker><h2 className="section-title">What Makes Steel Critical in Bridge &amp; Flyover Construction</h2><div className="relative mt-8 aspect-[4/3] overflow-hidden bg-surface-100"><Image src="/ars-assets/Solutions/Bridges/BridgeConstruction.jpg" alt="Bridge construction and reinforcement work" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" /></div></div><div><p className="max-w-3xl text-lg leading-9 text-steel-700">Bridge and flyover construction demands reinforcement that can withstand heavy loads, continuous traffic, changing weather conditions, and decades of service. Choosing the right TMT bars plays a vital role in achieving structural integrity, long-term durability, and reliable performance throughout the life of the structure.</p><dl className="mt-10 grid gap-x-8 gap-y-7 md:grid-cols-2">{structuralDemands.map(([term, detail], index) => <div key={term} className="border-t border-ink-900/15 pt-5"><dt className="font-display text-xl font-bold text-ink-900"><span className="mr-3 text-sm text-brand-red">{String(index + 1).padStart(2, "0")}</span>{term}</dt><dd className="mt-3 text-sm leading-6 text-steel-700">{detail}</dd></div>)}</dl></div></div>
      </MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28">
        <div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]"><div><SectionKicker>Why ARS</SectionKicker><h2 className="section-title">Engineered for Infrastructure That Connects Generations.</h2></div><p className="text-[15px] leading-8 text-steel-700">Bridges and flyovers are built to carry more than traffic—they connect cities, support economic growth, and serve communities for generations. Every span depends on reinforcement that delivers exceptional strength, structural integrity, and long-term durability. ARS TMT Bars are engineered to meet the demands of critical infrastructure where performance can never be compromised.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 xl:grid-cols-3">{arsStrengths.map(([Icon, title, body]) => <article key={title} className="bg-surface-50 p-7 md:p-8"><Icon aria-hidden="true" size={25} className="text-brand-blue"/><h3 className="mt-11 font-display text-2xl font-bold text-ink-900">{title}</h3><p className="mt-4 text-[15px] leading-7 text-steel-700">{body}</p></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-bg-dark py-20 text-white md:py-28">
        <div className="ars-container"><SectionKicker variant="light">ARS Products</SectionKicker><div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-end"><h2 className="section-title section-title-light">TMT Bars Built for Bridge &amp; Infrastructure Construction</h2><p className="text-[15px] leading-7 text-white/70">Choose the right reinforcement solution based on structural requirements, environmental conditions, and long-term durability for bridge and infrastructure projects.</p></div><div className="mt-12 overflow-x-auto border border-white/16"><table className="min-w-[680px] w-full text-left"><caption className="sr-only">Comparison of CRS 550D and ARS Fe 550D TMT Bars for bridge and infrastructure construction</caption><thead className="bg-white/10 text-sm"><tr><th scope="col" className="p-5 font-technical uppercase tracking-[0.14em] text-white/65">Feature</th><th scope="col" className="p-5 font-display text-lg text-white">ARS CRS Fe 550D</th><th scope="col" className="p-5 font-display text-lg text-white">ARS Fe 550D</th></tr></thead><tbody>{productRows.map(([feature, crs, fe550d]) => <tr key={feature} className="border-t border-white/12"><th scope="row" className="p-5 text-sm font-bold text-white">{feature}</th><td className="p-5 text-sm leading-6 text-white/72">{crs}</td><td className="p-5 text-sm leading-6 text-white/72">{fe550d}</td></tr>)}</tbody></table></div><div className="mt-7 flex flex-wrap gap-4"><Link href="/product-crs-550d" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(222,18,26,0.24)] transition hover:bg-brand-red-dark">Explore ARS CRS Fe 550D <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/product-550d" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(13,43,110,0.24)] transition hover:bg-brand-blue-dark">Explore ARS Fe 550D <ArrowRight aria-hidden="true" size={15}/></Link></div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.4fr_0.6fr]"><div><SectionKicker>Project review</SectionKicker><h2 className="section-title">A focused reinforcement selection guide</h2><p className="mt-6 text-[15px] leading-7 text-steel-700">Use the project’s design, loads, environment, and long-term durability needs to guide product selection and technical discussions.</p></div><ol className="border-y border-ink-900/10">{selectionGuide.map((step, index) => <li key={step} className="grid gap-4 border-b border-ink-900/10 py-6 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)]"><span className="font-technical text-sm font-bold tracking-[0.16em] text-brand-red">{String(index + 1).padStart(2, "0")}</span><span className="text-[15px] leading-7 text-steel-700">{step}</span></li>)}</ol></div></MotionSection>

      <MotionSection className="bg-[#F4F7FF] py-20 md:py-28"><div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"><div><SectionKicker>Certifications &amp; compliance</SectionKicker><h2 className="section-title">Built to Meet Industry Standards</h2><p className="mt-5 text-[15px] leading-8 text-steel-700">Bridge and infrastructure projects demand materials that meet stringent quality, safety, and performance requirements. ARS TMT Bars are manufactured under rigorous quality systems and backed by recognised certifications, providing confidence for critical construction applications.</p></div><div className="grid gap-4 sm:grid-cols-2">{certifications.slice(0, 2).map((item) => <article key={item} className="grid min-h-[190px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[72px_1fr]"><div className="flex items-center justify-center bg-white p-5"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><Check size={21} /></span></div><div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white"><h3 className="font-display text-xl font-bold">{item}</h3></div></article>)}</div></div><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certifications.slice(2).map((item) => <article key={item} className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><Check size={21} /></span><h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item}</h3></article>)}</div><Link href="/our-certification" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">View certifications <ArrowRight aria-hidden="true" size={15}/></Link></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr]"><div><SectionKicker>FAQs</SectionKicker><h2 className="section-title">Technical guidance for bridge and infrastructure projects</h2></div><FaqList items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>

      <ContactCta eyebrow="Infrastructure projects" headline="Build Infrastructure That Stands the Test of Time" body="Whether you're planning a bridge, flyover, or large-scale infrastructure project, ARS TMT Bars deliver the strength, quality, and reliability your structures depend on." primaryLabel="Contact Our Team" primaryHref="/request-quote" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
    </main>
  );
}
