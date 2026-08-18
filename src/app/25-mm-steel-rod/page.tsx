import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Calculator, CircleGauge, FileText, Ruler, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelTestingProof } from "@/components/steel-testing-proof";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";

const heroImage = "/ars-assets/Sizes/25mm_Banner.jpg";
const detailImage = "/ars-assets/Sizes/25mm-detail.png";

const faqs = [
  ["What is the 25mm rod weight per meter?", "A typical 25mm rod weight per metre is approximately 3.850 kg. This substantial weight contributes to its exceptional strength and load-bearing capacity, making it ideal for heavy-duty construction applications."],
  ["Why is a 25mm steel bar ideal for high-rise buildings and large commercial complexes?", "The optimal 25mm rod weight per metre offers superior tensile strength and durability, which are crucial for supporting the significant loads and stresses encountered in high-rise buildings and large commercial complexes. Their robust nature ensures the structural integrity and safety of these massive structures."],
  ["How does the 25mm steel bar enhance resilience of bridges and industrial facilities?", "The 25mm round bar weight improves the resilience of bridges and industrial facilities by providing exceptional resistance to dynamic loads, environmental factors, and potential seismic activity. Their high tensile strength ensures that these critical infrastructures can withstand harsh conditions and maintain their stability over time."],
  ["What unique features make 25mm steel bars suitable for foundational structures?", "Substantial diameter and the optimal 25mm steel bar weight provide unmatched load-bearing capacity, making them ideal for foundational structures such as heavy-duty columns and beams. Their superior ductility and strength ensure that the foundation can support the entire structure's weight and maintain stability under various stresses."],
  ["What are the key benefits of using ARS 25mm TMT bars in construction projects?", "ARS 25mm TMT bars offer several key benefits, including exceptional strength, high tensile capacity, and superior durability. They are designed to handle the most demanding construction challenges, ensuring that your projects are built to last with maximum support and stability. These bars provide a reliable foundation for large-scale constructions, enhancing safety and longevity."],
] as const;

export const metadata = createPageMetadata({
  title: "25mm Steel Rod | ARS Green Steel",
  description: "ARS 25mm TMT steel rods for high-load structures and major infrastructure. Approximate nominal weight: 3.850 kg per metre.",
  path: "/25-mm-steel-rod",
  image: heroImage,
});

export default function TwentyFiveMmSteelRodPage() {
  const productJsonLd = {
    "@context": "https://schema.org", "@type": "Product", name: "ARS 25mm Steel Rod",
    description: "ARS 25mm TMT steel bar for ambitious, high-load structures and infrastructure projects.",
    image: `${productionDomain}${heroImage}`, brand: { "@type": "Brand", name: "ARS Green Steel" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Nominal diameter", value: "25 mm" },
      { "@type": "PropertyValue", name: "Approximate weight per metre", value: "3.850 kg/m" },
    ],
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
    <SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

    <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
      <Image src={heroImage} alt="ARS 25mm TMT steel bar for high-load construction" fill priority sizes="100vw" className="object-cover object-[63%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" /><div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
      <div className="ars-container relative z-10 w-full pb-14 md:pb-16"><div className="max-w-3xl">
        <SectionKicker variant="light">ARS TMT BAR SIZES</SectionKicker>
        <h1 className="mt-5 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Ultimate Strength for Ambitious Structures: ARS 25mm Steel Bar</h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">Empower your most ambitious construction projects with ARS 25mm Steel Bars. These bars provide unparalleled strength and durability for critical infrastructure and large-scale buildings, ensuring your structures stand strong and secure for generations.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/tmt-steel-price-today" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white"><Calculator size={15} /> Check price</Link><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-[14px] font-bold text-white"><FileText size={15} /> Request a quote</Link></div>
      </div></div>
    </section>

    <MotionSection className="border-b border-surface-100 bg-white py-10"><div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
      {[["25 mm", "Nominal diameter", Ruler], ["3.850 kg/m", "Approx. weight per metre", CircleGauge], ["TMT", "Reinforcement steel", ShieldCheck], ["SGS", "Certified assurance", BadgeCheck]].map(([value, label, Icon]) => { const I = Icon as typeof Ruler; return <div key={String(label)} className="px-0 lg:px-8 lg:text-center"><I size={16} className="mb-2 text-brand-red lg:mx-auto" /><p className="font-display text-[1.55rem] font-extrabold text-brand-blue">{String(value)}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-900">{String(label)}</p></div>; })}
    </div></MotionSection>

    <MotionSection className="bg-white py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
      <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-ink-950"><Image src={detailImage} alt="Close detail of an ARS 25mm steel rod" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" /></div>
      <div><SectionKicker variant="brand">PRODUCT OVERVIEW</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">Elevate Your Construction with the ARS 25mm Steel Bar: Built for the Toughest Challenges</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">Experience the unmatched power of ARS 25mm Steel Bars, engineered to tackle the most demanding construction projects. With an approximate 25 mm rod weight per metre of 3.850 kg, these bars are perfect for high-rise buildings, large commercial complexes, and critical infrastructure like bridges and industrial facilities. Their superior tensile strength and exceptional durability make them ideal for heavy-duty columns, beams, and foundational structures.</p><div className="mt-8 overflow-hidden border border-surface-100">{[["Nominal diameter", "25 mm"], ["Approximate weight per metre", "3.850 kg/m"], ["Ideal applications", "High-rise buildings, bridges, industrial facilities, heavy-duty foundations"]].map(([label, value], index) => <div key={label} className={`grid grid-cols-5 gap-4 px-5 py-4 ${index % 2 === 0 ? "bg-surface-50" : "bg-white"}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[.08em] text-brand-blue">{label}</p><p className="col-span-3 text-[13px] text-steel-700">{value}</p></div>)}</div></div>
    </div></MotionSection>

    <MotionSection className="bg-brand-blue py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionKicker variant="light">ARS STEEL BENEFITS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-white">Quality built for the toughest challenges.</h2></div><div className="space-y-8"><article className="border-l-2 border-brand-red pl-6"><h3 className="font-display text-[1.35rem] font-bold text-white">Commitment to ‘D’ Quality Expertise</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">At ARS Steels, our dedication to superior craftsmanship is embodied in our ‘D’ Quality expertise. Each 25MM steel rod weight is maintained to a high standard and crafted with meticulous attention to detail, ensuring it meets rigorous strength, durability, and flexibility criteria. These properties are critical for both residential and commercial construction, providing the foundational strength that every builder and engineer relies upon.</p></article><article className="border-l-2 border-brand-red pl-6"><h3 className="font-display text-[1.35rem] font-bold text-white">SGS Certified Assurance</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">ARS Steels takes pride in the quality and reliability of our products, confirmed through SGS certification. This globally recognised certification guarantees that every 25MM steel bar meets high international standards and gives clients confidence that every rod supplied is rigorously tested for safety and excellence.</p></article></div></div></MotionSection>

    <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><SectionKicker variant="brand">25 MM USE CASES</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">Made for structures carrying significant loads.</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">ARS 25mm steel bars are engineered for large, high-load structures. They reinforce foundations and core elements in high-rise and commercial projects, support heavy columns and beams, and provide dependable strength for bridges, flyovers, industrial projects, retaining walls, and water-containment structures.</p></div><aside className="border-t-2 border-brand-blue bg-white p-7"><p className="font-technical text-[11px] font-bold uppercase tracking-[.14em] text-brand-blue">Common applications</p><ul className="mt-6 space-y-4">{["High-rise buildings and large commercial complexes", "Heavy-duty columns, beams, foundations, and core elements", "Bridges, flyovers, and industrial facilities", "Retaining walls and water-containment structures"].map(item => <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-steel-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{item}</li>)}</ul></aside></div></MotionSection>

    <SteelTestingProof />

    <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><SectionKicker variant="brand">FAQS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] text-ink-900">25mm steel bar questions, answered.</h2></div><div className="divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring cursor-pointer list-none pr-8 text-[15px] font-bold text-ink-900">{question}<span className="float-right text-brand-red">+</span></summary><p className="pt-4 pr-8 text-[14px] leading-[1.75] text-steel-700">{answer}</p></details>)}</div></div></MotionSection>

    <ContactCta eyebrow="Plan with precision" headline="Need 25mm steel for your project?" body="Check the latest ARS steel price, find an authorised dealer, or request support for your construction requirement." primaryLabel="Check price" primaryHref="/tmt-steel-price-today" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
  </main>;
}
