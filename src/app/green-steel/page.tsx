import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  Factory,
  FileCheck2,
  Gauge,
  Leaf,
  Recycle,
  Scale,
  ShieldCheck,
  type LucideIcon,
  Zap,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Green Guide: What Is Green Steel? | ARS Green Steel",
  description:
    "Understand what Green Steel is, how lower-carbon production routes differ, how emissions are measured, and what India’s Green Steel Taxonomy means for construction.",
  path: "/green-steel",
});

const highlights: Array<[LucideIcon, string]> = [
  [BarChart3, "Lower carbon emissions from production"],
  [Recycle, "Greater use of recycled steel"],
  [Zap, "Cleaner energy and production methods"],
  [Building2, "Supports lower-carbon construction"],
  [ShieldCheck, "Maintains required steel quality and performance"],
];

const routeComparison = [
  ["Primary Input", "Higher use of virgin raw materials", "Greater use of recycled steel"],
  ["Energy Source", "Fossil-fuel dependent in many routes", "Greater potential for cleaner electricity"],
  ["Process Type", "Ore reduction — chemically intensive", "Scrap melting — energy intensive, not chemically intensive*"],
  ["Emission Intensity", "~2.9 t CO₂e/tonne (typical)*", "Significantly lower, dependent on grid and process efficiency"],
  ["Adoption in India", "Still the dominant production method*", "Emerging route in India*"],
  ["Finished Product", "Meets standard TMT strength grades", "Meets the same strength grades"],
] as const;

const measurementConcepts: Array<[string, string, string, LucideIcon]> = [
  [
    "01",
    "Life Cycle Assessment (LCA)",
    "An assessment method that looks at emissions across the production process rather than measuring only one stage.",
    Scale,
  ],
  [
    "02",
    "Environmental Product Declaration (EPD)",
    "A standardised disclosure that reports verified environmental data, including emission intensity.",
    FileCheck2,
  ],
  [
    "03",
    "Green Steel Taxonomy (India)",
    "A Government of India classification framework based on emission intensity per tonne of finished steel.",
    Gauge,
  ],
];

const taxonomyRatings = [
  ["5-Star Green Steel", "Below", "1.6", "Highest green rating", "border-emerald-600", "bg-emerald-600"],
  ["4-Star Green Steel", "From", "1.6–2.0", "Four-star range", "border-brand-blue", "bg-brand-blue"],
  ["3-Star Green Steel", "From", "2.0–2.2", "Three-star range", "border-safety-amber", "bg-safety-amber"],
  ["No Green Steel Rating", "Above", "2.2", "Not eligible for a green rating", "border-steel-700", "bg-steel-700"],
] as const;

const constructionBenefits: Array<[LucideIcon, string, string]> = [
  [
    Leaf,
    "Lower Embodied Carbon",
    "A lower-carbon steel choice can reduce the carbon associated with the structure before the building is even occupied.",
  ],
  [
    FileCheck2,
    "Better Material Information",
    "Verified environmental data helps project teams understand the carbon impact of the steel they specify.",
  ],
  [
    Building2,
    "Supports Green Building Goals",
    "Lower-carbon steel can contribute to wider sustainability and green-building objectives.",
  ],
];

const frameworks: Array<[LucideIcon, string, string, string]> = [
  [ShieldCheck, "BIS Certification", "Product quality standard", "Confirms steel is manufactured to India’s applicable national quality standards for structural performance."],
  [FileCheck2, "EPD", "Environmental disclosure", "An independently verified disclosure of a product’s environmental impact, based on Life Cycle Assessment data."],
  [Gauge, "Green Steel Taxonomy", "Government classification", "India’s official framework for rating steel production by CO₂e emission intensity per tonne of finished steel."],
  [Factory, "ISO 14001", "Management-system standard", "The international standard for environmental management systems within a manufacturing facility."],
  [BookOpenCheck, "LEED", "Building-rating framework", "A globally recognised green-building framework that can consider material environmental data in project ratings."],
  [BadgeCheck, "GRIHA", "Building-rating framework", "India’s green-building rating framework for recognising sustainable construction materials and practices."],
];

const greenSteelFaqs = [
  {
    question: "What is Green Steel?",
    answer:
      "Green Steel refers to steel produced through methods that result in lower emissions than conventional steelmaking. These methods can include greater use of recycled steel, electric furnace technology, cleaner electricity and more efficient production practices.",
  },
  {
    question: "How is Green Steel different from conventional steel?",
    answer:
      "The main difference is the carbon intensity of production. Conventional blast-furnace routes often depend more heavily on virgin raw materials and fossil fuels, while electric-furnace routes can use more recycled steel and have greater potential to use cleaner electricity.",
  },
  {
    question: "Can Green Steel meet normal construction requirements?",
    answer:
      "Yes. A lower-carbon production route does not replace structural requirements. Finished steel must still meet the applicable grade, quality and performance standards specified for the construction project.",
  },
  {
    question: "How is Green Steel measured?",
    answer:
      "It is assessed through the carbon emissions associated with producing a tonne of finished steel. Life Cycle Assessments, Environmental Product Declarations and recognised classification frameworks help make that environmental performance measurable and comparable.",
  },
  {
    question: "What is an Environmental Product Declaration?",
    answer:
      "An Environmental Product Declaration, or EPD, is a standardised and independently verified disclosure of a product’s environmental data. It is based on Life Cycle Assessment information and can include the product’s emission intensity.",
  },
  {
    question: "What is India’s Green Steel Taxonomy?",
    answer:
      "It is a Ministry of Steel framework that classifies Green Steel using CO₂e emission intensity per tonne of finished steel. Production below 2.2 t CO₂e per tonne may qualify for a three-, four- or five-star rating, depending on its measured intensity.",
  },
  {
    question: "How can lower-carbon steel affect a project’s embodied carbon?",
    answer:
      "Embodied carbon includes emissions associated with construction materials before a building is occupied. Selecting steel with lower verified production emissions can reduce the material-related carbon included in a project’s overall embodied-carbon assessment.",
  },
];

export default function GreenSteelPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: greenSteelFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section
        id="what-is-green-steel"
        className="ars-page-hero relative isolate min-h-[560px] scroll-mt-24 overflow-hidden bg-[#060D1E] text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]"
      >
        <Image
          src="/ars-assets/Sustainability/WhatisGreenSteel_Banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,13,30,0.98)_0%,rgba(6,13,30,0.91)_48%,rgba(6,13,30,0.56)_100%)]" />
        <div className="steel-grid absolute inset-0 -z-10 opacity-35" />
        <div className="ars-page-hero-content ars-container relative z-10 flex h-full items-end pb-14 pt-36 md:pb-20">
          <div className="max-w-[790px]">
            <SectionKicker variant="light">Green Guide</SectionKicker>
            <p className="mt-7 font-technical text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
              Green Steel: What It Is &amp; Why It Matters
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              What Is <span className="text-[var(--text-accent-dark)]">Green Steel?</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
              Steel manufactured through recycled materials, cleaner energy, and improved production methods — reducing its carbon footprint while retaining everything it is relied on for in construction.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">
                Talk to Experts <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/ars-green-steel" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] border border-white/28 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Explore ARS Green Steel <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection id="green-steel-explained" className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.72fr)] lg:items-stretch">
          <div>
            <SectionKicker variant="brand">Green Steel Explained</SectionKicker>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-ink-900">
              Green Steel: Steel with a Lower Carbon Footprint
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-steel-700">
              <p>Steel is essential to modern construction, but making it can produce significant carbon emissions. Green Steel refers to steel produced through methods that result in lower emissions than conventional steelmaking.</p>
              <p>The approach can include greater use of recycled steel, electric furnace technology, renewable energy and more efficient production methods.</p>
            </div>
            <ul className="mt-9 grid border-y border-ink-900/10 sm:grid-cols-2">
              {highlights.map(([Icon, item], index) => (
                <li key={item} className={`flex min-h-24 items-center gap-4 py-5 sm:px-5 ${index % 2 === 0 ? "sm:border-r sm:border-ink-900/10" : ""} ${index > 1 ? "border-t border-ink-900/10" : ""}`}>
                  <Icon aria-hidden="true" size={20} className="shrink-0 text-brand-blue" />
                  <span className="text-sm font-bold leading-6 text-ink-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-brand-blue/12 bg-surface-50">
            <Image
              src="/ars-assets/Sustainability/ARSGreenSteel_WhyitMatters.jpg"
              alt="Steel reinforcement held against a green natural landscape, representing lower-carbon construction"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-center transition duration-700 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(6,13,30,.78)_100%)]" aria-hidden="true" />
            <p className="absolute bottom-6 left-6 right-6 font-technical text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
              Lower-carbon steel for responsible construction
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-ink-950 py-20 text-white lg:py-24">
        <div className="ars-container">
          <SectionKicker variant="light">How Steel Is Made</SectionKicker>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white">
            Two routes to the same material — very different carbon cost.
          </h2>
          <div className="mt-10 overflow-x-auto border border-white/14 bg-white/[0.04]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">Comparison of conventional blast-furnace and lower-carbon electric-arc-furnace steelmaking routes</caption>
              <thead>
                <tr className="border-b border-white/14 bg-white/[0.06]">
                  <th scope="col" className="w-[22%] p-5 font-technical text-xs font-bold uppercase tracking-[0.14em] text-white/55">Comparison</th>
                  <th scope="col" className="w-[39%] border-l border-white/12 p-5 font-display text-xl font-bold text-white">Blast Furnace Route <span className="mt-1 block font-technical text-[11px] uppercase tracking-[0.13em] text-white/50">Conventional</span></th>
                  <th scope="col" className="w-[39%] border-l border-white/12 p-5 font-display text-xl font-bold text-white">Electric Arc Furnace Route <span className="mt-1 block font-technical text-[11px] uppercase tracking-[0.13em] text-emerald-200">Lower-carbon potential</span></th>
                </tr>
              </thead>
              <tbody>
                {routeComparison.map(([label, conventional, eaf]) => (
                  <tr key={label} className="border-b border-white/10 last:border-b-0">
                    <th scope="row" className="p-5 text-sm font-bold text-white">{label}</th>
                    <td className="border-l border-white/10 p-5 text-sm leading-7 text-white/68">{conventional}</td>
                    <td className="border-l border-white/10 p-5 text-sm leading-7 text-white/78">{eaf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-4xl text-xs leading-6 text-white/50">
            *Indicative statements from the supplied content brief. Conventional-route intensity, process-language and India adoption statements require technical or client approval before publication.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Measuring Green Steel</SectionKicker>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-ink-900">
                If It’s Green, the Numbers Should Show It.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-steel-700">
              <p>Green Steel is measured by the emissions generated to produce a tonne of finished steel. A <strong className="text-ink-900">Life Cycle Assessment (LCA)</strong> looks at emissions across the production chain, from raw materials and melting through rolling and delivery.</p>
              <p>The result can be documented through an <strong className="text-ink-900">Environmental Product Declaration (EPD)</strong>, which presents environmental data in a standard format and allows steel products to be compared on the same basis.</p>
              <p>In India, the <strong className="text-ink-900">Green Steel Taxonomy</strong> uses emission intensity per tonne of finished steel to assign a star rating to steel production.</p>
            </div>
          </div>

          <ol className="relative mt-12 grid gap-4 lg:grid-cols-3">
            {measurementConcepts.map(([number, title, body, Icon], index) => (
              <li key={title} className="relative border-t-2 border-brand-blue bg-white p-7 shadow-[0_12px_38px_rgba(13,43,110,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="font-technical text-xs font-bold tracking-[0.18em] text-brand-red">{number}</span>
                  <Icon aria-hidden="true" size={22} className="text-brand-blue" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-700">{body}</p>
                {index < measurementConcepts.length - 1 ? <ArrowRight aria-hidden="true" size={18} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-brand-red lg:block" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionKicker variant="brand">Green Steel Taxonomy</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-ink-900">
              A Common Standard for Measuring Green Steel
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-steel-700">
              <p>India’s Green Steel Taxonomy provides a common way to identify and classify lower-carbon steel. Issued by the <strong className="text-ink-900">Ministry of Steel</strong>, it uses the carbon emission intensity of finished steel as the basis for its rating.</p>
              <p>The taxonomy shifts the conversation from broad sustainability claims to a measurable emissions figure for manufacturers, buyers and construction professionals.</p>
            </div>
            <a href="https://steel.gov.in/green-steel-initiative" target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">
              Ministry of Steel taxonomy <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-brand-red">How the rating works</p>
            <div className="mt-5 grid gap-4">
              {taxonomyRatings.map(([label, qualifier, value, note, border, fill]) => (
                <article key={label} className={`grid overflow-hidden border-l-4 bg-surface-50 ${border} sm:grid-cols-[1fr_215px] sm:items-stretch`}>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink-900">{label}</h3>
                    <p className="mt-2 text-sm text-steel-700">{note}</p>
                  </div>
                  <div className={`${fill} flex min-h-28 items-center justify-between gap-4 px-6 py-5 text-white sm:flex-col sm:items-start sm:justify-center`}>
                    <span className="font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{qualifier}</span>
                    <strong className="font-display text-2xl font-bold">{value}</strong>
                    <span className="text-[11px] font-bold text-white/75">t CO₂e / t finished steel</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-steel-600">Thresholds follow India’s notified Green Steel Taxonomy and are subject to the applicable framework and periodic review. No ARS-specific rating is asserted here.</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 text-white lg:py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker variant="light">Green Steel in Construction</SectionKicker>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white">
                What Does Green Steel Change for a Construction Project?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-white/72">
              <p>The biggest difference is in the <strong className="text-white">embodied carbon of the materials used to build it</strong>. Choosing lower-carbon steel can reduce material-related emissions while still allowing projects to meet their required structural standards.</p>
              <p>For developers, architects and engineers, EPDs, carbon-intensity figures and recognised Green Steel ratings provide a clearer basis for comparing steel products during material selection.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden bg-white/15 md:grid-cols-3">
            {constructionBenefits.map(([Icon, title, body]) => (
              <article key={title} className="bg-brand-blue p-7 md:p-8">
                <Icon aria-hidden="true" size={23} className="text-emerald-200" />
                <h3 className="mt-7 font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{body}</p>
              </article>
            ))}
          </div>
          <Link href="/embodied-carbon" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition hover:text-emerald-200">
            Understand embodied carbon <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Certifications</SectionKicker>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-ink-900">
                Standards That Support Sustainable Construction
              </h2>
            </div>
            <p className="text-base leading-8 text-steel-700">Green Steel is increasingly supported by environmental declarations and green-building frameworks that help measure and recognise responsible manufacturing practices.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map(([Icon, title, category, body]) => (
              <article key={title} className="group border border-ink-900/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_18px_45px_rgba(13,43,110,0.09)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-blue text-white">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="max-w-[150px] text-right font-technical text-[10px] font-bold uppercase tracking-[0.13em] text-brand-red">{category}</span>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-steel-600">These items serve different purposes and are not presented as equivalent ARS product certifications. Official logos can replace the temporary category icons after approved assets and usage rights are supplied.</p>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Green Guide FAQs</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-ink-900">Frequently Asked Questions</h2>
          <FaqList className="mt-10" items={greenSteelFaqs} />
        </div>
      </MotionSection>

      <MotionSection className="bg-ink-950 py-20 text-white lg:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionKicker variant="light">Next Step</SectionKicker>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white">
              See How ARS Is Advancing Green Steel
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Explore how ARS Green Steel combines responsible manufacturing, certified sustainability and dependable structural performance to support the future of construction.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/ars-green-steel" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">
              Explore ARS Green Steel <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Talk to Experts <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
