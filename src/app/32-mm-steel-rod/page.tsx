import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Calculator, CircleGauge, FileText, Ruler, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelTestingProof } from "@/components/steel-testing-proof";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";

const pagePath = "/32-mm-steel-rod";
const heroImage = "/ars-assets/Sizes/32mm_Banner.jpg";
const detailImage = "/ars-assets/products-all.png";

const faqs = [
  ["What is the typical 32mm TMT bar weight per metre?", "A 32mm steel bar weight is typically around 6.313 kg per metre. This significant weight contributes to its exceptional load-bearing capacity, making it ideal for heavy-duty construction applications."],
  ["Why are 32mm steel bars ideal for mega construction projects?", "32mm steel bars are ideal for mega construction projects due to their superior tensile strength and durability. They can withstand significant loads and stresses, making them perfect for large bridges, dams, industrial complexes, and high-rise buildings."],
  ["How do 32mm TMT bars enhance the structural integrity of a building?", "32mm TMT bars enhance structural integrity by providing robust reinforcement that ensures stability and strength. Their substantial diameter helps distribute loads evenly, preventing structural failures and increasing the overall lifespan of the building."],
  ["What are the specific uses of 32mm steel bars in construction?", "32mm steel bars are used in various high-stress applications, including the foundations and frameworks of large buildings, bridges, dams, industrial floors, and retaining walls. Their high tensile strength and resistance to bending and breaking make them suitable for these demanding uses."],
  ["What are the key benefits of using ARS 32mm TMT bars in construction projects?", "ARS 32mm TMT bars offer several key benefits, including exceptional strength, high tensile capacity, and superior durability. They are designed to handle the most demanding construction challenges, ensuring that your projects are built to last with maximum support and stability. These bars provide a reliable foundation for large-scale constructions, enhancing safety and longevity."],
] as const;

export const metadata = createPageMetadata({
  title: "32mm Steel Rod | ARS Green Steel",
  description: "ARS 32mm TMT steel bars for monumental, high-load structures. Approximate nominal weight: 6.313 kg per metre.",
  path: pagePath,
  image: heroImage,
});

export default function ThirtyTwoMmSteelRodPage() {
  const productJsonLd = {
    "@context": "https://schema.org", "@type": "Product", name: "ARS 32mm Steel Rod",
    description: "ARS 32mm TMT steel bar for monumental, high-load construction and infrastructure projects.",
    image: `${productionDomain}${heroImage}`, brand: { "@type": "Brand", name: "ARS Green Steel" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Nominal diameter", value: "32 mm" },
      { "@type": "PropertyValue", name: "Approximate weight per metre", value: "6.313 kg/m" },
    ],
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
    <SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

    <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
      <Image src={heroImage} alt="ARS 32mm TMT steel bar for monumental construction" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" /><div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
      <div className="ars-container relative z-10 w-full pb-14 md:pb-16"><div className="max-w-3xl">
        <SectionKicker variant="light">ARS TMT BAR SIZES</SectionKicker>
        <h1 className="mt-5 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Maximum Load-Bearing Capacity for Monumental Structures: ARS 32mm TMT Steel Bars</h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">Choose ARS 32mm TMT steel bars for unparalleled strength and durability in your largest construction projects, with the essential reinforcement needed for monumental structures, maximum load-bearing capacity, and structural integrity.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/tmt-steel-price-today" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white"><Calculator size={15} /> Check price</Link><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-[14px] font-bold text-white"><FileText size={15} /> Request a quote</Link></div>
      </div></div>
    </section>

    <MotionSection className="border-b border-surface-100 bg-white py-10"><div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
      {[["32 mm", "Nominal diameter", Ruler], ["6.313 kg/m", "Approx. weight per metre", CircleGauge], ["TMT", "Reinforcement steel", ShieldCheck], ["SGS", "Certified assurance", BadgeCheck]].map(([value, label, Icon]) => { const I = Icon as typeof Ruler; return <div key={String(label)} className="px-0 lg:px-8 lg:text-center"><I size={16} className="mb-2 text-brand-red lg:mx-auto" /><p className="font-display text-[1.55rem] font-extrabold text-brand-blue">{String(value)}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-900">{String(label)}</p></div>; })}
    </div></MotionSection>

    <MotionSection className="bg-white py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
      <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-ink-950"><Image src={detailImage} alt="ARS TMT steel products for large construction projects" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" /></div>
      <div><SectionKicker variant="brand">PRODUCT OVERVIEW</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">ARS 32mm TMT Bars: The Pinnacle of Strength for Mega Constructions</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">Discover the unparalleled power of ARS 32mm TMT steel bars, engineered for the most demanding construction projects. Each 32mm rod provides extraordinary tensile strength and load-bearing capacity. These bars are suited to high-capacity bridges, large industrial complexes, and expansive foundations that require exceptional durability and stability.</p><div className="mt-8 overflow-hidden border border-surface-100">{[["Nominal diameter", "32 mm"], ["Approximate weight per metre", "6.313 kg/m"], ["Ideal applications", "Bridges, dams, industrial complexes, high-rise cores, expansive foundations"]].map(([label, value], index) => <div key={label} className={`grid grid-cols-5 gap-4 px-5 py-4 ${index % 2 === 0 ? "bg-surface-50" : "bg-white"}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[.08em] text-brand-blue">{label}</p><p className="col-span-3 text-[13px] text-steel-700">{value}</p></div>)}</div></div>
    </div></MotionSection>

    <MotionSection className="bg-brand-blue py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionKicker variant="light">ARS STEEL BENEFITS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-white">Quality built for the largest structural demands.</h2></div><div className="space-y-8"><article className="border-l-2 border-brand-red pl-6"><h3 className="font-display text-[1.35rem] font-bold text-white">Commitment to ‘D’ Quality Expertise</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">At ARS Steels, our dedication to superior craftsmanship is embodied in our ‘D’ Quality expertise. Each 32mm steel rod is crafted with meticulous attention to detail, ensuring it meets rigorous strength, durability, and flexibility criteria. These properties provide the foundational strength that builders and engineers rely upon.</p></article><article className="border-l-2 border-brand-red pl-6"><h3 className="font-display text-[1.35rem] font-bold text-white">SGS Certified Assurance</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">ARS Steels takes pride in quality and reliability confirmed through SGS certification. This internationally recognised certification gives clients confidence that every 32mm steel bar is rigorously tested for safety and excellence.</p></article></div></div></MotionSection>

    <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><SectionKicker variant="brand">32 MM USE CASES</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">Made for massive, high-load structures.</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">The 32mm TMT steel bar weight and strength are critical for massive high-load structures that demand superior strength and stability. These bars reinforce foundations and core structural elements of large bridges, dams, industrial complexes, and high-rise buildings, where exceptional load-bearing capacity is essential.</p><p className="mt-5 text-[15px] leading-[1.8] text-steel-700">They also support robust flyovers, retaining walls, large-scale water tanks, and silos—projects where long-term durability and resistance to pressure, dynamic loads, and environmental impacts matter.</p></div><aside className="border-t-2 border-brand-blue bg-white p-7"><p className="font-technical text-[11px] font-bold uppercase tracking-[.14em] text-brand-blue">Common applications</p><ul className="mt-6 space-y-4">{["Large bridges, dams, and industrial complexes", "High-rise building foundations, columns, beams, and core elements", "Robust flyovers and retaining walls", "Large-scale water tanks and silos"].map(item => <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-steel-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{item}</li>)}</ul></aside></div></MotionSection>

    <SteelTestingProof />

    <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><SectionKicker variant="brand">FAQS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">32mm steel bar questions, answered.</h2></div><div className="divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring cursor-pointer list-none pr-8 text-[15px] font-bold text-ink-900">{question}<span className="float-right text-brand-red transition group-open:rotate-45">+</span></summary><p className="pt-4 pr-8 text-[14px] leading-[1.75] text-steel-700">{answer}</p></details>)}</div></div></MotionSection>

    <ContactCta eyebrow="Plan with confidence" headline="Need 32mm steel for a major project?" body="Check the latest ARS steel price, find an authorised dealer, or request project support for your high-load construction requirement." primaryLabel="Check price" primaryHref="/tmt-steel-price-today" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
  </main>;
}
