import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Calculator, CircleGauge, FileText, Ruler, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelTestingProof } from "@/components/steel-testing-proof";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";

const pagePath = "/10-mm-steel-rod";
const heroImage = "/ars-assets/Sizes/10mm_Banner.jpg";
const detailImage = "/ars-assets/Sizes/10mm_Size.jpg";

export const metadata = createPageMetadata({
  title: "10mm Steel Rod | ARS Green Steel",
  description: "ARS 10mm TMT steel bars for robust construction applications. Approximate nominal weight: 0.617 kg per metre.",
  path: pagePath,
  image: heroImage,
});

const productFacts = [
  { value: "10 mm", label: "Nominal diameter", icon: Ruler },
  { value: "0.617 kg/m", label: "Approx. weight per metre", icon: CircleGauge },
  { value: "7.52 kg", label: "Approx. 40 ft rod weight", icon: ShieldCheck },
  { value: "SGS", label: "Certified assurance", icon: BadgeCheck },
];

const applications = [
  "Beams, columns, and slabs in residential and commercial buildings",
  "Multi-storey residential buildings and commercial complexes",
  "Foundations and retaining walls",
  "Heavy-duty pavements and driveways",
];

const benefits = [
  {
    title: "Commitment to ‘D’ Quality Expertise",
    body: "At ARS Steels, our dedication to superior craftsmanship is embodied in our ‘D’ Quality expertise, setting a high standard in the steel manufacturing industry. Each 10MM steel rod is crafted with meticulous attention to detail, ensuring it meets rigorous strength, durability, and flexibility criteria.",
  },
  {
    title: "SGS Certified Assurance",
    body: "ARS Steels takes pride in the quality and reliability of our products, confirmed through our SGS certification. This globally recognised certification provides confidence that every 10MM steel bar is rigorously tested for safety and excellence.",
  },
];

const faqs = [
  ["What are the key benefits of using 10mm TMT bars in construction?", "10mm TMT bars are renowned for their superior strength and durability, making them ideal for structural applications such as beams, columns, and slabs in commercial and residential buildings. Their robust nature ensures enhanced load-bearing capacity and resistance to seismic activities, providing a safe and stable structure."],
  ["What is the 10mm steel bar weight per metre?", "The 10mm TMT bar weight per metre is approximately 0.617 kg. Thus, the 10mm steel rod weight for 40 ft is 7.52 kg. This standardised weight helps in accurate planning and budgeting in construction projects, ensuring efficiency and cost-effectiveness."],
  ["Can a 10mm steel bar be used for foundation work?", "Yes, a 10mm steel bar is excellent for use in foundations, especially for structures requiring high tensile strength and stability. Their robustness ensures that foundations are capable of withstanding environmental stresses and loads, providing a solid base for any construction."],
  ["What makes a 10mm steel bar suitable for multi-storey buildings?", "The high tensile strength and ductility provided by 10mm TMT bars makes them particularly suitable for multi-storey buildings, which require materials that can handle dynamic loads and provide additional seismic resistance. These bars ensure the longevity and safety of buildings in diverse climatic conditions."],
  ["How is 10mm steel bar price compared to other sizes?", "The 10mm steel bar price generally reflects its larger diameter and enhanced structural capabilities. It is priced competitively, providing value for money given its significant role in major structural elements and contribution to the longevity and integrity of large-scale constructions."],
] as const;

export default function TenMmSteelRodPage() {
  const productJsonLd = {
    "@context": "https://schema.org", "@type": "Product", name: "ARS 10mm Steel Bar",
    description: "ARS 10mm TMT steel bar for robust reinforced concrete applications.", image: `${productionDomain}${heroImage}`,
    brand: { "@type": "Brand", name: "ARS Green Steel" },
    additionalProperty: [{ "@type": "PropertyValue", name: "Nominal diameter", value: "10 mm" }, { "@type": "PropertyValue", name: "Approximate weight per metre", value: "0.617 kg/m" }],
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src={heroImage} alt="ARS 10mm TMT steel reinforcement bar" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16"><div className="max-w-3xl"><SectionKicker variant="light">ARS TMT BAR SIZES</SectionKicker><h1 className="mt-5 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Superior Strength, Optimal Precision: The ARS 10MM Steel Bar</h1><p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">Experience unmatched strength and precision with ARS 10MM Steel Rod. Ideal for robust constructions, they ensure lasting durability and cost-effectiveness.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/tmt-steel-price-today" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"><Calculator size={15} /> Check price</Link><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-[14px] font-bold text-white transition hover:bg-white/10"><FileText size={15} /> Request a quote</Link></div></div></div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10"><div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">{productFacts.map(({ value, label, icon: Icon }) => <div key={label} className="px-0 lg:px-8 lg:text-center"><Icon size={16} className="mb-2 text-brand-red lg:mx-auto" /><p className="font-display text-[1.55rem] font-extrabold tracking-[-0.03em] text-brand-blue">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-900">{label}</p></div>)}</div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="specifications"><div className="ars-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16"><div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-ink-950"><Image src={detailImage} alt="ARS 10mm TMT steel bar detail" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.86),transparent_62%)]" /><p className="absolute bottom-6 left-6 right-6 font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">10 mm TMT reinforcement steel</p></div><div><SectionKicker variant="brand">PRODUCT OVERVIEW</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Durable, Dependable, Dynamic: ARS 10MM Steel Bar</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">Elevate your construction projects with the versatility and strength of ARS 10MM Steel TMT Bars, tailored for heavy-duty applications where resilience is key. The 10mm steel rod weight per metre is approximately 0.617 kg, making these bars suitable for reinforcing concrete in larger structures, heavy load-bearing walls, and foundations that require additional strength.</p><div className="mt-8 overflow-hidden border border-surface-100">{[['Nominal diameter', '10 mm'], ['Approximate weight per metre', '0.617 kg/m'], ['Approximate 40 ft rod weight', '7.52 kg'], ['Ideal applications', 'Beams, columns, slabs, foundations, retaining walls']].map(([label, value], index) => <div key={label} className={`grid grid-cols-5 gap-4 px-5 py-4 ${index % 2 === 0 ? 'bg-surface-50' : 'bg-white'}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{label}</p><p className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{value}</p></div>)}</div></div></div></MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><SectionKicker variant="light">ARS STEEL BENEFITS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Quality built for demanding loads.</h2></div><div className="space-y-8">{benefits.map((benefit, index) => <article key={benefit.title} className="border-l-2 border-brand-red pl-6"><p className="font-technical text-[11px] font-bold tracking-[0.12em] text-white/45">0{index + 1}</p><h3 className="mt-2 font-display text-[1.35rem] font-bold text-white">{benefit.title}</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">{benefit.body}</p></article>)}</div></div></MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16"><div><SectionKicker variant="brand">10 MM USE CASES</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Made for structural work that demands more.</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">10mm steel bars are essential in structural applications that demand higher strength and durability. They provide critical reinforcement to beams, columns, and slabs in medium-to-large construction projects, including multi-storey residential buildings, commercial complexes, and infrastructure facilities.</p><p className="mt-5 text-[15px] leading-[1.8] text-steel-700">Their robustness also supports retaining walls, foundations, heavy-duty pavements, and driveways where surface loads can be significant.</p></div><aside className="border-t-2 border-brand-blue bg-white p-7 md:p-8"><p className="font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue">Common applications</p><ul className="mt-6 space-y-4">{applications.map((application) => <li key={application} className="flex gap-3 text-[14px] leading-[1.6] text-steel-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{application}</li>)}</ul></aside></div></MotionSection>

      <SteelTestingProof />

      <MotionSection className="bg-surface-50 py-20 md:py-24" id="faqs"><div className="ars-container grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16"><div><SectionKicker variant="brand">FAQS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">10mm steel bar questions, answered.</h2></div><div className="divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring cursor-pointer list-none pr-8 text-[15px] font-bold text-ink-900 marker:hidden">{question}<span aria-hidden="true" className="float-right text-brand-red transition group-open:rotate-45">+</span></summary><p className="pt-4 pr-8 text-[14px] leading-[1.75] text-steel-700">{answer}</p></details>)}</div></div></MotionSection>
      <ContactCta eyebrow="Plan with precision" headline="Need 10mm steel for your project?" body="Check the latest ARS steel price, find an authorised dealer, or request support for your construction requirement." primaryLabel="Check price" primaryHref="/tmt-steel-price-today" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
    </main>
  );
}
