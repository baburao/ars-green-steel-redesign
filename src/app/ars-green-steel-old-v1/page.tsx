import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Factory,
  FileCheck,
  Leaf,
  Recycle,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { FaqList } from "@/components/faq-list";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
export const metadata: Metadata = {
  title: "ARS Green Steel — Old V1",
  description: "Archived first version of the ARS Green Steel page.",
  robots: { index: false, follow: false },
};

const heroStats = [
  { value: "★★★★★", label: "5-Star Green Steel Taxonomy Rating" },
  { value: "592 kg", label: "CO₂e per tonne — EPD Verified" },
  { value: "98%", label: "Recycled Steel Route" },
];

const conceptPoints = [
  "Electric Arc Furnace production, not blast furnace",
  "98% recycled steel as primary input",
  "Independently verified emissions data (EPD)",
  "Fe-550D strength, IS 1786:2008 tested — no trade-off on performance",
];

const greenSteelFormula = [
  { title: "Recycled Steel", body: "Circular material input", image: "/ars-assets/Sustainability/ARSGreenSteel/recycle.jpg" },
  { title: "Renewable Energy", body: "Cleaner energy integration", image: "/ars-assets/Sustainability/ARSGreenSteel/renerwed.jpg" },
  { title: "Lower-Emission Manufacturing", body: "Efficient steelmaking practices", image: "/ars-assets/Sustainability/ARSGreenSteel/foil.jpg" },
  { title: "ARS Green Steel", body: "Strength with lower impact", image: "/ars-assets/Sustainability/ARSGreenSteel/greensteel.jpg" },
];

const proofItems = [
  {
    icon: BadgeCheck,
    title: "★★★★★ 5-Star Green Steel Rating",
    description: "Ministry of Steel recognition.",
  },
  {
    icon: FileCheck,
    title: "EPD Verified",
    description: "Transparent, third-party verified environmental data.",
  },
  {
    icon: Factory,
    title: "Electric Arc Furnace (EAF)",
    description: "Lower-emission steelmaking process.",
  },
  {
    icon: Recycle,
    title: "Recycled Steel",
    description: "Supports a circular manufacturing economy.",
  },
  {
    icon: Leaf,
    title: "GreenPro Certified",
    description: "Recognized sustainable construction material.",
  },
  {
    icon: Zap,
    title: "Built for Lower Embodied Carbon",
    description: "Helps projects pursue greener building goals.",
  },
];

const advantageItems = [
  [
    "IS 13920 Seismic Compliance",
    "Designed to comply with IS 13920 requirements, ARS Green Steel maintains a minimum TS/YS ratio of 1.15, making it suitable for earthquake-resistant construction.",
  ],
  [
    "Independently SGS Tested",
    "Product quality is verified by SGS, one of the world's leading independent testing and certification organizations, providing confidence beyond internal quality checks.",
  ],
  [
    "Manufactured with 98% Recycled Steel",
    "Produced using the Electric Arc Furnace (EAF) route with up to 98% recycled steel, ARS Green Steel supports a circular manufacturing economy while reducing embodied carbon.",
  ],
  [
    "Powered by Renewable Energy",
    "A growing share of manufacturing energy is sourced from renewable power, supporting lower production emissions and more responsible steel manufacturing.",
  ],
  [
    "Real-Time CO₂ Monitoring",
    "Carbon emissions are monitored through a third-party platform, while environmental performance is supported by certifications including EPD, GreenPro, BIS, ISO 9001, ISO 14001, and the 5-Star Green Steel Rating from the Ministry of Steel.",
  ],
];

const impactItems = [
  ["90", "Trees Equivalent", "per tonne of ARS Green Steel"],
  ["110,000", "Vehicles Equivalent", "at 250,000 MT annual production"],
  ["22 Million", "Trees Equivalent", "annual carbon absorption impact"],
  ["592 kg CO₂e", "EPD Verified", "per tonne of finished steel"],
];

const greenBuildingItems = [
  ["Advance Net-Zero & Decarbonization Goals", "Supports lower embodied carbon and helps organizations progress toward decarbonization and net-zero commitments."],
  ["ESG & Sustainability Reporting", "EPD-backed environmental data strengthens ESG reporting, sustainability disclosures, and responsible material selection."],
  ["Green Building Certifications", "Supports LEED, IGBC, and GRIHA certification requirements through recognized environmental credentials."],
  ["Institutional & Government Procurement", "NISST Green Steel Taxonomy, EPD, and recognized certifications help meet sustainability requirements for public and institutional projects."],
  ["Sustainable Brand Positioning", "Enables developers and organizations to demonstrate measurable environmental responsibility backed by verified data."],
];

const audienceItems = [
  ["For Developers", "EPD-verified environmental data supports LEED, IGBC, and GRIHA certification efforts while providing a credible sustainability story backed by measurable performance—not marketing claims."],
  ["For Builders & Contractors", "Built to the same Fe550D standards with the same installation and construction practices, ARS Green Steel integrates seamlessly into projects without changing timelines, procurement processes, or budgets."],
  ["For Structural Engineers & Consultants", "Manufactured in compliance with IS 1786 and IS 13920 requirements, enabling confident specification without compromising structural design, safety, or code compliance."],
  ["For Government & Infrastructure Projects", "Supported by NISST Green Steel Taxonomy certification and EPD documentation, helping meet institutional procurement requirements and sustainability objectives for public infrastructure projects."],
  ["For Homeowners", "High corrosion resistance, seismic-grade ductility, and certified quality contribute to stronger, longer-lasting homes designed for long-term durability and peace of mind."],
  ["For Dealers & Distributors", "Offer customers a certified Green Steel solution backed by verified environmental performance, helping differentiate your product portfolio in a competitive market."],
];

const certifications = [
  ["Environmental Product Declaration (EPD)", "International EPD® System", "Life-cycle carbon emissions, independently measured and disclosed per tonne of steel"],
  ["5-Star Green Steel Rating", "NISST, Ministry of Steel, Government of India", "Plant-level emission intensity under India's official Green Steel Taxonomy"],
  ["GRIHA Product Catalogue Listing", "GRIHA Council", "Life Cycle Assessment (LCA) and Innovation registration — first Indian TMT rebar to hold this"],
  ["LEED v5 Embodied Carbon Compliance", "U.S. Green Building Council", "Eligibility for LEED-certified project material sourcing"],
  ["SGBC Leader Rating", "Singapore Green Building Council", "Highest-tier recognition for low-carbon manufacturing and data transparency — first for an Indian steel brand"],
  ["BIS Certification", "Bureau of Indian Standards", "Compliance with IS 1786:2008 for TMT rebar manufacturing"],
  ["ISO 9001", "International Organization for Standardization", "Quality management systems across manufacturing"],
  ["ISO 14001", "International Organization for Standardization", "Environmental management systems and process controls"],
  ["SGS Testing", "SGS", "Independent, third-party verification of product quality and consistency"],
];

const faqs = [
  ["What is Green Steel, and how is ARS Green Steel different?", "Green steel refers to steel manufactured with significantly lower carbon emissions than conventional steel. ARS Green Steel achieves this through recycled steel, the Electric Arc Furnace (EAF) route, renewable energy integration, and continuous process improvements. Every environmental claim is backed by recognized certifications and independently verified Environmental Product Declarations (EPDs), giving customers confidence in both performance and sustainability."],
  ["How does ARS Green Steel help reduce embodied carbon?", "The steel used in a project has a direct impact on its embodied carbon. By manufacturing steel with lower carbon emissions, ARS Green Steel helps reduce the overall carbon footprint of residential, commercial, and infrastructure projects. This allows project teams to make more sustainable material choices without compromising structural strength or durability."],
  ["What certifications does ARS Green Steel have?", "ARS Green Steel is backed by multiple nationally and internationally recognized certifications, including Environmental Product Declarations (EPDs), GreenPro Certification, BIS compliance, ISO certifications, SGS testing, and recognition under India's Green Steel Taxonomy. These certifications provide independent verification of product quality and environmental performance."],
  ["Can ARS Green Steel support green building projects?", "Yes. ARS Green Steel provides verified environmental data through its EPD and sustainability certifications, helping project teams with documentation for green building rating systems such as LEED, IGBC, and GRIHA. It is a practical choice for projects looking to balance structural performance with environmental responsibility."],
  ["Why is an Environmental Product Declaration (EPD) important when choosing steel?", "An Environmental Product Declaration (EPD) provides independently verified information about a product's environmental impact throughout its life cycle. Instead of relying on marketing claims, architects, engineers, and developers can compare materials using transparent, standardized data and make informed decisions for sustainable construction."],
];

export default function ArsGreenSteelOldV1Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-ink-950">
        <Image src="/ars-assets/Sustainability/ARSGreenSteel-heroBanner.jpg" alt="Modern construction supported by ARS Green Steel" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.58)_48%,rgba(6,13,30,0.92)_100%)]" />
        <div className="ars-page-hero-content h-full ars-container relative z-10 grid items-end gap-10 pb-14 pt-36 md:pb-20 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-4xl text-white">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              India&apos;s No.1 Certified Green Steel
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.045em]">Green Steel,<span className="block text-[var(--text-accent-dark)]">Proven — Not Promised.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">ARS Green Steel brings recycled-route manufacturing, verified certification, and dependable 550D strength into one responsible construction choice.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:opacity-90">Request Quote <ArrowRight size={16} /></Link>
              <Link href="#certifications" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10">View Certification</Link>
            </div>
          </div>
          <aside className="rounded-[24px] border border-white/15 bg-white/10 p-7 text-white backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">ARS Green Steel impact</p>
            <div className="mt-5 divide-y divide-white/15">{heroStats.map((stat) => <div key={stat.value} className="grid grid-cols-[150px_1fr] gap-4 py-5 first:pt-0 last:pb-0"><strong className={`font-display text-brand-red ${stat.value === "★★★★★" ? "whitespace-nowrap text-base tracking-[0.08em]" : "text-3xl"}`}>{stat.value}</strong><span className="self-center text-sm font-semibold text-white/80">{stat.label}</span></div>)}</div>
          </aside>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionKicker variant="brand">The concept</SectionKicker>
            <h2 className="section-title max-w-xl">What actually makes steel “green.”</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-steel-700"><p>Green steel isn&apos;t a finish or a coating. It&apos;s a manufacturing decision made long before the bar reaches a construction site.</p><p>Most steel in India is still produced through the blast furnace route, which depends heavily on iron ore, coal, and limestone. ARS Green Steel takes a different path — an electric arc furnace route built on recycled steel scrap, with renewable energy increasingly built into the process.</p><p>The result shows up in the numbers. Where conventional blast-furnace steel runs close to 2.55 tonnes of CO₂e per tonne produced nationally, ARS Green Steel is independently verified at 592 kg CO₂e per tonne — a difference that&apos;s documented, not estimated.</p><p>None of this changes what the bar is asked to do on site. Every tonne still meets Fe-550D strength requirements and IS 1786:2008 testing, so the choice to go green doesn&apos;t ask engineers or contractors to compromise on what they&apos;re building with.</p></div>
            <ul className="mt-8 grid gap-3">{conceptPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-steel-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red" />{point}</li>)}</ul>
          </div>
          <div className="relative overflow-hidden rounded-[24px] bg-surface-50 shadow-[0_24px_70px_rgba(13,43,110,0.12)]"><Image src="/ars-assets/Sustainability/ARSGreenSteel_GreenSteelExplain.jpg" alt="ARS CRS Fe 550D reinforcing a partnership between industry and nature" width={1080} height={1080} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-square w-full object-cover" /><div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-ink-950/65 px-5 py-4 text-white backdrop-blur"><span className="block text-xs font-bold uppercase tracking-[0.15em] text-white/55">EPD Verified</span><strong className="mt-1 block text-lg">592 kg CO₂e/tonne</strong></div></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 text-white lg:py-24">
        <div className="ars-container"><SectionKicker variant="light">ARS Steel — India&apos;s greenest steel</SectionKicker><h2 className="section-title max-w-3xl text-white">Not the greenest by claim. The greenest by rating.</h2><p className="mt-6 max-w-4xl text-base leading-8 text-white/75">Being one of India&apos;s greenest steel manufacturers isn&apos;t defined by a single certification—it&apos;s earned through every stage of production. From Electric Arc Furnace technology and recycled raw materials to EPD-verified environmental performance, GreenPro certification, and a 5-Star Green Steel rating by the Ministry of Steel, ARS has built sustainability into the way steel is made—not just the way it&apos;s marketed.</p><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{proofItems.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-[20px] border border-white/15 bg-white/10 p-6"><Icon size={20} className="text-brand-red" /><h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p></article>; })}</div></div>
      </MotionSection>

      <MotionSection className="bg-white py-16 lg:py-20">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden bg-brand-blue lg:min-h-0">
            <Image src="/ars-assets/Sustainability/ARSGreenSteel_leaves.jpg" alt="Industrial manufacturing viewed through a green landscape" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionKicker variant="brand">Green Steel taxonomy</SectionKicker>
            <h2 className="section-title max-w-2xl">A clear framework for lower-emission steel.</h2>
            <Image src="/ars-assets/Sustainability/ARSGreenSteel/Graph.jpg" alt="Green Steel emission-intensity rating framework" width={1920} height={1080} sizes="(min-width: 1024px) 65vw, 100vw" className="mt-8 h-auto w-full rounded-[20px] border border-brand-blue/10 bg-white" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="brand">The ARS advantage</SectionKicker><h2 className="section-title max-w-3xl">What Sets ARS Green Steel Apart</h2><p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">Every claim is backed by engineering, testing, and independent verification. Green Steel is more than the manufacturing route—it is the consistency of quality, structural performance, environmental responsibility, and transparency behind every TMT bar.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{advantageItems.map(([title, description]) => <article key={title} className="border-t-2 border-brand-blue bg-white p-7"><h3 className="font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{description}</p></article>)}</div><div className="mt-10 flex flex-wrap items-center gap-4"><Link href="/products" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Explore Products <ArrowRight size={16} /></Link><Link href="#certifications" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full border border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">View Certifications <ArrowRight size={16} /></Link></div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="brand">Environmental impact</SectionKicker><h2 className="section-title max-w-3xl">The Impact Behind Every Tonne</h2><p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">Every tonne of ARS Green Steel contributes to measurable environmental impact. Backed by EPD-verified data, these numbers demonstrate how responsible manufacturing translates into meaningful carbon reduction at scale.</p><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-stretch"><div className="grid gap-4 sm:grid-cols-2">{impactItems.map(([value, title, description], index) => <article key={`${title}-${index}`} className="border border-green-steel/20 bg-surface-50 p-6"><strong className="font-display text-3xl text-green-steel">{value}</strong><h3 className="mt-4 font-display text-lg font-bold text-ink-900">{title}</h3><p className="mt-2 text-sm leading-6 text-steel-600">{description}</p></article>)}</div><div className="relative min-h-[360px] overflow-hidden"><Image src="/ars-assets/Sustainability/ARSGreenSteel_infography.jpg" alt="ARS Green Steel environmental impact metrics" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div><div className="relative mt-10 overflow-hidden rounded-[24px] bg-ink-950"><Image src="/ars-assets/Sustainability/ARSGreenSteel_WhyitMatters.jpg" alt="ARS CRS Fe 550D rebar connected to a greener future" width={1080} height={1080} sizes="100vw" className="h-[360px] w-full object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" /><div className="absolute bottom-8 left-8 max-w-md text-white"><SectionKicker variant="light">Our sustainability journey</SectionKicker><h3 className="mt-4 font-display text-3xl font-bold">Driving Continuous Carbon Reduction</h3></div></div></div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 text-white lg:py-24">
        <div className="ars-container"><SectionKicker variant="light">Sustainable construction</SectionKicker><h2 className="section-title max-w-3xl text-white">Supporting Green Building & ESG Goals</h2><p className="mt-5 max-w-4xl text-base leading-8 text-white/75">ARS Green Steel helps projects meet sustainability objectives with verified environmental performance, recognized certifications, and documentation that supports green building and responsible procurement.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{greenBuildingItems.map(([title, description]) => <article key={title} className="rounded-[20px] border border-white/15 bg-white/10 p-7"><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-white/70">{description}</p></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-white py-14 lg:py-16">
        <div className="ars-container">
          <SectionKicker variant="brand">The Green Steel formula</SectionKicker><h2 className="section-title max-w-3xl">Responsible inputs. Stronger outcomes.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] xl:items-stretch">{greenSteelFormula.map((item,index)=><Fragment key={item.title}><article className={`group relative min-h-[300px] overflow-hidden bg-ink-950 ${index===3?"ring-2 ring-green-steel":""}`}><Image src={item.image} alt={item.title} fill sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/20 to-transparent"/><div className="absolute inset-x-6 bottom-6 text-white"><p className="text-xs font-bold uppercase tracking-[0.14em] text-green-steel">0{index+1}</p><h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3><p className="mt-2 text-sm text-white/75">{item.body}</p></div></article>{index<3?<span aria-hidden="true" className="hidden self-center font-display text-4xl font-bold text-green-steel xl:block">{index===2?"=":"+"}</span>:null}</Fragment>)}</div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="brand">Who this matters for</SectionKicker><h2 className="section-title max-w-3xl">What Certified Green Steel Means for Your Project</h2><p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">Every construction project has different priorities. ARS Green Steel delivers measurable value to developers, engineers, contractors, architects, homeowners, and infrastructure projects—without compromising structural performance or project timelines.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audienceItems.map(([title, description]) => <article key={title} className="border-l-2 border-brand-red bg-surface-50 p-7"><h3 className="font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{description}</p></article>)}</div><Link href="/products" className="focus-ring mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:opacity-90">Find the Right Grade for Your Project <ArrowRight size={16} /></Link></div>
      </MotionSection>

      <MotionSection id="certifications" className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="brand">Certifications</SectionKicker><h2 className="section-title max-w-3xl">Every claim on this page traces back to a certificate.</h2><p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">Sustainability language is easy to write. Third-party certification isn&apos;t. Here&apos;s what backs ARS Green Steel, issued by the bodies that actually audit it.</p><div className="mt-8 rounded-[20px] border border-brand-blue/10 bg-white p-5"><Image src="/ars-assets/original-green-steel/environmental-certifications.png" alt="Environmental certification and green-building partners shown on the original ARS Green Steel page" width={773} height={205} className="mx-auto h-auto w-full max-w-4xl" /></div><div className="mt-10 overflow-x-auto border border-brand-blue/15 bg-white"><table className="min-w-[760px] w-full border-collapse text-left"><thead className="bg-brand-blue text-white"><tr><th className="p-5 text-sm font-bold">Certification</th><th className="p-5 text-sm font-bold">Issuing Body</th><th className="p-5 text-sm font-bold">What It Verifies</th></tr></thead><tbody>{certifications.map(([name, issuer, scope]) => <tr key={name} className="border-t border-surface-100 align-top"><td className="p-5 font-display text-base font-bold text-ink-900">{name}</td><td className="p-5 text-sm leading-6 text-steel-700">{issuer}</td><td className="p-5 text-sm leading-6 text-steel-700">{scope}</td></tr>)}</tbody></table></div><Link href="/our-certification" className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">View all Certificates <ArrowRight size={16} /></Link></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl"><SectionKicker variant="brand">FAQs</SectionKicker><h2 className="section-title">Green Steel questions, answered.</h2><div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="focus-ring cursor-pointer list-none pr-8 font-display text-xl font-bold text-ink-900 marker:hidden">{question}</summary><p className="mt-4 max-w-3xl text-sm leading-7 text-steel-700">{answer}</p></details>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 text-white">
        <div className="ars-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><SectionKicker variant="light">Build Greener</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,3.25rem)] font-bold leading-[1.08]">Ready to Build Smarter with ARS Green Steel?</h2><p className="mt-5 text-base leading-8 text-white/75">Talk to our team about choosing the right certified green steel solution for your next project. Get product guidance, technical support, and certification documentation.</p></div><div className="flex flex-wrap gap-3"><Link href="/request-quote" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:opacity-90">Request Quote <ArrowRight size={16} /></Link><span className="inline-flex h-12 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white/60" aria-disabled="true">Brochure download coming soon</span></div></div>
      </MotionSection>

    </main>
  );
}
