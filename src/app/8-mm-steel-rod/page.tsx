import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, CircleGauge, FileText, Ruler, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelTestingProof } from "@/components/steel-testing-proof";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";

const pagePath = "/8-mm-steel-rod";
const heroImage = "/ars-assets/Sizes/8mm_Banner.jpg";
const detailImage = "/ars-assets/Sizes/8mm_size.jpg";

export const metadata = createPageMetadata({
  title: "8mm Steel Rod | ARS Green Steel",
  description: "ARS 8mm TMT steel rods for detailed reinforcement, stirrups, rings, and residential slabs. Nominal weight: approximately 0.395 kg per metre.",
  path: pagePath,
  image: heroImage,
});

const productFacts = [
  { value: "8 mm", label: "Nominal diameter", icon: Ruler },
  { value: "0.395 kg/m", label: "Approx. weight per metre", icon: CircleGauge },
  { value: "TMT", label: "Reinforcement steel", icon: ShieldCheck },
  { value: "SGS", label: "Certified assurance", icon: BadgeCheck },
];

const applications = [
  "Stirrups and rings for reinforcement cages",
  "Residential slabs, beams, columns, and footings",
  "Detailed architectural and lightweight structural work",
  "Ornamental and formed steel frameworks",
];

const benefits = [
  {
    title: "Commitment to ‘D’ Quality Expertise",
    body: "At ARS Steels, our dedication to superior craftsmanship is embodied in our ‘D’ Quality expertise, setting a high standard in the steel manufacturing industry. Each 8MM TMT bar is crafted with meticulous attention to detail, ensuring it meets rigorous strength, durability, and flexibility criteria.",
  },
  {
    title: "SGS Certified Assurance",
    body: "ARS Steels takes pride in the quality and reliability of our products, confirmed through our SGS certification. This globally recognised certification provides confidence that every rod supplied is rigorously tested for safety and excellence.",
  },
];

const faqs = [
  ["What is the weight of an 8mm steel rod per metre?", "The weight of an 8mm steel rod per metre is approximately 0.395 kg. This standard measurement helps in precise calculation and budgeting in construction projects, ensuring efficient use of materials."],
  ["How is the 8mm TMT bar weight useful in residential construction?", "The weight of an 8mm steel rod per metre is approximately 0.395 kg. This standard measurement helps in precise calculation and budgeting in construction projects, ensuring efficient use of materials."],
  ["Can an 8mm steel rod be used for decorative purposes?", "The weight of an 8mm steel rod per metre is approximately 0.395 kg. This standard measurement helps in precise calculation and budgeting in construction projects, ensuring efficient use of materials."],
  ["What are the benefits of using 8mm TMT bars for highway projects?", "The weight of an 8mm steel rod per metre is approximately 0.395 kg. This standard measurement helps in precise calculation and budgeting in construction projects, ensuring efficient use of materials."],
  ["Why should I choose ARS CRS Fe 550D TMT bars for my construction needs?", "The weight of an 8mm steel rod per metre is approximately 0.395 kg. This standard measurement helps in precise calculation and budgeting in construction projects, ensuring efficient use of materials."],
] as const;

export default function EightMmSteelRodPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ARS 8mm Steel Rod",
    description: "ARS 8mm TMT steel rod for detailed reinforcement and lightweight construction applications.",
    image: `${productionDomain}${heroImage}`,
    brand: { "@type": "Brand", name: "ARS Green Steel" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Nominal diameter", value: "8 mm" },
      { "@type": "PropertyValue", name: "Approximate weight per metre", value: "0.395 kg/m" },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src={heroImage} alt="ARS 8mm TMT steel reinforcement rod" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-3xl">
            <SectionKicker variant="light">ARS TMT BAR SIZES</SectionKicker>
            <h1 className="mt-5 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Precision Engineered for Maximum Efficiency: ARS 8MM Steel Rod</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/78">Leverage the precise engineering of ARS 8MM steel TMT rods for your projects, where consistency in weight and structural reliability pave the way for optimal construction outcomes.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tmt-steel-price-today" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"><Calculator size={15} /> Check price</Link>
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-[14px] font-bold text-white transition hover:bg-white/10"><FileText size={15} /> Request a quote</Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {productFacts.map(({ value, label, icon: Icon }) => <div key={label} className="px-0 lg:px-8 lg:text-center"><Icon size={16} className="mb-2 text-brand-red lg:mx-auto" /><p className="font-display text-[1.55rem] font-extrabold tracking-[-0.03em] text-brand-blue">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-900">{label}</p></div>)}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="specifications">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-ink-950">
            <Image src={detailImage} alt="ARS 8mm TMT steel rod detail" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.86),transparent_62%)]" />
            <p className="absolute bottom-6 left-6 right-6 font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">8 mm TMT reinforcement steel</p>
          </div>
          <div>
            <SectionKicker variant="brand">PRODUCT OVERVIEW</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Ultra-Slim, Ultra-Strong: ARS 8MM Steel Rod Redefines Building Standards</h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-steel-700">Discover the exceptional balance of slim design and robust performance with ARS 8MM TMT bars, crafted to support the intricate demands of modern construction. Ideal for applications requiring precision and lightweight strength, such as stirrups and residential slabs, these bars ensure optimal structural integrity and ease of handling.</p>
            <div className="mt-8 overflow-hidden border border-surface-100">
              {[['Nominal diameter', '8 mm'], ['Approximate weight per metre', '0.395 kg/m'], ['Ideal applications', 'Stirrups, rings, residential slabs, detailed reinforcement']].map(([label, value], index) => <div key={label} className={`grid grid-cols-5 gap-4 px-5 py-4 ${index % 2 === 0 ? 'bg-surface-50' : 'bg-white'}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{label}</p><p className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{value}</p></div>)}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div><SectionKicker variant="light">ARS STEEL BENEFITS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Quality that supports every detail.</h2></div>
          <div className="space-y-8">{benefits.map((benefit, index) => <article key={benefit.title} className="border-l-2 border-brand-red pl-6"><p className="font-technical text-[11px] font-bold tracking-[0.12em] text-white/45">0{index + 1}</p><h3 className="mt-2 font-display text-[1.35rem] font-bold text-white">{benefit.title}</h3><p className="mt-3 text-[14px] leading-[1.8] text-white/75">{benefit.body}</p></article>)}</div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div><SectionKicker variant="brand">8 MM USE CASES</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Made for precision-led reinforcement.</h2><p className="mt-6 text-[15px] leading-[1.8] text-steel-700">The 8mm steel TMT bars play a vital role in architectural and construction applications. Their smaller diameter makes them well suited to detailed reinforcement, while flexibility and high tensile strength support formed and intricate designs without compromising structural purpose.</p><p className="mt-5 text-[15px] leading-[1.8] text-steel-700">The 8mm steel rod weight per metre helps with precise calculation, budgeting, handling, and material planning where every detail matters.</p></div>
          <aside className="border-t-2 border-brand-blue bg-white p-7 md:p-8"><p className="font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue">Common applications</p><ul className="mt-6 space-y-4">{applications.map((application) => <li key={application} className="flex gap-3 text-[14px] leading-[1.6] text-steel-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{application}</li>)}</ul></aside>
        </div>
      </MotionSection>

      <SteelTestingProof />

      <MotionSection className="bg-surface-50 py-20 md:py-24" id="faqs">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16"><div><SectionKicker variant="brand">FAQS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">8mm steel rod questions, answered.</h2></div><div className="divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring cursor-pointer list-none pr-8 text-[15px] font-bold text-ink-900 marker:hidden">{question}<span aria-hidden="true" className="float-right text-brand-red transition group-open:rotate-45">+</span></summary><p className="pt-4 pr-8 text-[14px] leading-[1.75] text-steel-700">{answer}</p></details>)}</div></div>
      </MotionSection>

      <ContactCta eyebrow="Plan with precision" headline="Need 8mm steel for your project?" body="Check the latest ARS steel price, find an authorised dealer, or request support for your construction requirement." primaryLabel="Check price" primaryHref="/tmt-steel-price-today" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
    </main>
  );
}
