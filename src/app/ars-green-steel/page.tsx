import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { AboutIntroMotion, HeroIntroMotion, WhyGreenSteelMotion } from "@/components/ars-green-steel-intro-motion";
import {
  GreenSteelArticleReveal,
  GreenSteelCarbonBar,
  GreenSteelImageReveal,
  GreenSteelListItemReveal,
  GreenSteelReveal,
  GreenSteelRoadmap,
  GreenSteelVideoReveal,
} from "@/components/ars-green-steel-section-motion";
import { FaqList } from "@/components/faq-list";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "ARS Green Steel | India’s No. 1 Certified Green Steel Manufacturer",
  description:
    "Explore ARS Green Steel: recycled steel, electric furnace technology, verified low-carbon manufacturing, certified performance, products, and environmental documentation.",
  path: "/ars-green-steel",
  image: "/ars-assets/Sustainability/ARSGreenSteel-heroBanner.jpg",
});

const aboutChecklist = [
  "Electric Arc Furnace production, not blast furnace",
  "98% recycled steel as primary input",
  "Independently verified emissions data (EPD)",
  "Fe-550D strength, IS 1786:2008 tested — no trade-off on performance",
] as const;

const aboutParagraphs = [
  "Most steel in India still comes from the blast furnace process, which runs on iron ore, coal, and limestone. ARS shifted its production toward an electric arc furnace route, built on recycled steel scrap instead of mined ore. That single change is what brings the emissions number down — not an offset purchased after the fact, not a claim added to a brochure.",
  "What makes this worth talking about isn't that ARS calls itself green. It's that the numbers are checked by outside bodies — an international EPD, a government rating from the Ministry of Steel, and certifications recognized by GRIHA, LEED, and the Singapore Green Building Council. None of that gets awarded on the strength of a press release.",
] as const;

const manufacturingRoute = [
  ["Recycled Steel Scrap", "Premium-quality recycled steel scrap forms the primary raw material."],
  ["Electric Furnace", "The scrap is melted through an electric furnace-based steelmaking route."],
  ["Refining", "The molten steel is refined to achieve the required composition and quality."],
  ["Rolling", "The refined steel is rolled into TMT rebars for structural applications."],
] as const;

const carbonComparison = [
  ["India Average Steel", "2.55", "t CO₂e/tonne", "100%"],
  ["Global Average Steel", "1.85", "t CO₂e/tonne", "72.5%"],
  ["Conventional Blast Furnace Steel", "~2.9", "t CO₂e/tonne", "100%"],
  ["ARS Green Steel (EPD)", "0.592", "t CO₂e/tonne", "20.4%"],
] as const;

const roadmap = [
  ["2023", "6%", "renewable energy", "reducing emissions to 0.85t CO₂e/t steel"],
  ["2024", "28%", "renewable energy", "reducing emissions to 0.59t CO₂e/t steel"],
  ["2026", "80%", "renewable energy", "reducing emissions to 0.300t CO₂e/t steel"],
  ["2027", "ARS", "Becomes Net Zero", ""],
  ["2030", "MoS", "targets 2.2t CO₂e/t steel", ""],
] as const;

const buildingRecognition = [
  ["EPD Verified", "Third-party verified environmental data covering the carbon and environmental performance of ARS Green Steel."],
  ["GRIHA Listed", "ARS Green Steel TMT rebar is listed under GRIHA's product catalogue for Life Cycle Assessment and Innovation."],
  ["LEED", "The published EPD provides environmental data that supports the use of ARS Green Steel in LEED-certified projects."],
  ["SGBC Leader", "ARS has received the Leader category certification from the Singapore Green Building Council, recognising its contribution to sustainable steel and green building."],
] as const;

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
] as const;

const certificationLogos = [
  {
    src: "/ars-assets/ars-green-steel/EPD.jpg",
    alt: "The International EPD System logo",
    title: "EPD Verified",
    body: "Third-party verified environmental data covering the carbon and environmental performance of ARS Green Steel.",
  },
  {
    src: "/ars-assets/ars-green-steel/GRIHA.jpg",
    alt: "GRIHA green building rating system logo",
    title: "GRIHA Listed",
    body: "ARS Green Steel TMT rebar is listed under GRIHA's product catalogue for Life Cycle Assessment and Innovation.",
  },
  {
    src: "/ars-assets/ars-green-steel/LEED.jpg",
    alt: "LEED green building certification logo",
    title: "LEED",
    body: "The published EPD provides environmental data that supports the use of ARS Green Steel in LEED-certified projects.",
  },
  {
    src: "/ars-assets/ars-green-steel/SGBC.png",
    alt: "Singapore Green Building Product SGBC Leader logo",
    title: "SGBC Leader",
    body: "ARS has received the Leader category certification from the Singapore Green Building Council, recognising its contribution to sustainable steel and green building.",
  },
] as const;

const products = [
  ["ARS CRS Fe 550D TMT Bars", "Designed for projects exposed to high moisture, high TDS, high salinity, and corrosive environments. Its enhanced corrosion resistance helps improve the durability and service life of structures, making it suitable for demanding conditions.", "Explore ARS CRS Fe 550D", "/product-crs-550d", "/ars-assets/logos/ARSCRS550D.png"],
  ["ARS Fe 550D TMT Bars", "Ideal for general residential, commercial, and infrastructure construction where high strength, excellent ductility, and reliable performance are essential. A trusted choice for everyday construction projects.", "Explore ARS Fe 550D", "/product-550d", "/ars-assets/TMT-Bars.png"],
  ["ARS Binders", "Factory-made steel binders designed for consistent dimensions, accurate bends, and faster reinforcement work on site. Manufactured with precision to help improve productivity, reduce manual bending time, and deliver uniform quality across construction projects.", "Explore ARS Binders", "/ars-binders", "/ars-assets/logos/BinderLogo.png"],
] as const;

const audiences = [
  ["For Developers", "EPD-verified environmental data helps developers account for embodied carbon and support green building and sustainability requirements."],
  ["For Builders & Contractors", "ARS Green Steel is manufactured to established TMT standards and fits into regular construction and reinforcement practices."],
  ["For Structural Engineers & Consultants", "D-Quality steel, IS 13920 compliance and defined mechanical properties provide the required technical information for structural specification."],
  ["For Government & Infrastructure Projects", "Green Steel Taxonomy certification, EPD documentation and recognised environmental credentials support sustainability requirements in public and infrastructure projects."],
  ["For Homeowners", "High ductility, corrosion-resistant options and tested quality make ARS Green Steel suitable for homes where long-term strength and durability matter."],
  ["For Dealers & Distributors", "ARS Green Steel gives dealers a certified Green Steel product backed by environmental documentation and recognised credentials."],
] as const;

const faqs = [
  ["What is Green Steel, and how is ARS Green Steel different?", "Green steel refers to steel manufactured with significantly lower carbon emissions than conventional steel. ARS Green Steel achieves this through recycled steel, the Electric Arc Furnace (EAF) route, renewable energy integration, and continuous process improvements. Every environmental claim is backed by recognized certifications and independently verified Environmental Product Declarations (EPDs), giving customers confidence in both performance and sustainability."],
  ["How does ARS Green Steel help reduce embodied carbon?", "The steel used in a project has a direct impact on its embodied carbon. By manufacturing steel with lower carbon emissions, ARS Green Steel helps reduce the overall carbon footprint of residential, commercial, and infrastructure projects. This allows project teams to make more sustainable material choices without compromising structural strength or durability."],
  ["What certifications does ARS Green Steel have?", "ARS Green Steel is backed by multiple nationally and internationally recognized certifications, including Environmental Product Declarations (EPDs), GreenPro Certification, BIS compliance, ISO certifications, SGS testing, and recognition under India's Green Steel Taxonomy. These certifications provide independent verification of product quality and environmental performance."],
  ["Can ARS Green Steel support green building projects?", "Yes. ARS Green Steel provides verified environmental data through its EPD and sustainability certifications, helping project teams with documentation for green building rating systems such as LEED, IGBC, and GRIHA. It is a practical choice for projects looking to balance structural performance with environmental responsibility."],
  ["Why is an Environmental Product Declaration (EPD) important when choosing steel?", "An Environmental Product Declaration (EPD) provides independently verified information about a product's environmental impact throughout its life cycle. Instead of relying on marketing claims, architects, engineers, and developers can compare materials using transparent, standardized data and make informed decisions for sustainable construction."],
] as const;

const primaryButton = "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark";
const bodyCopy = "text-base leading-8 text-steel-700 lg:text-lg";

export default function ArsGreenSteelPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-[#0B2A1E] text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/ars-assets/ars-green-steel/hero-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0B2A1E]/10" />
        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <HeroIntroMotion
            kicker={<SectionKicker variant="light">ARS Green Steel</SectionKicker>}
            title="India’s No. 1 Certified Green Steel Manufacturer"
            body="ARS Green Steel combines recycled steel, electric furnace technology and verified low-carbon manufacturing to deliver high-performance steel with a lower environmental impact."
            actions={
              <>
                <Link href="#products" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-[#17633F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0F4E30]">Explore Products <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3 text-sm font-bold text-[#17633F] transition hover:bg-[#EEF5EC]">Request Quote <ArrowRight size={17} aria-hidden="true" /></Link>
              </>
            }
          />
        </div>
      </section>

      <AboutIntroMotion
        kicker={<SectionKicker>ABOUT ARS GREEN STEEL</SectionKicker>}
        title="Responsible Manufacturing. Proven Performance."
        paragraphs={aboutParagraphs}
        checklist={aboutChecklist}
        imageSrc="/ars-assets/ars-green-steel/whatisars.jpg"
        imageAlt="A construction professional and a nature-covered hand holding ARS CRS Fe 550D reinforcing steel"
        caption="Same Fe-550D performance. A lower-carbon manufacturing route."
      />

      <WhyGreenSteelMotion />

      <section className="relative overflow-hidden bg-[#0B2A1E] py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-20"><Image src="/ars-assets/homepage-manufacturing-detail.jpg" alt="" fill sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-[#0B2A1E]/90" />
        <div className="ars-container relative z-10">
          <GreenSteelReveal><SectionKicker variant="light">HOW ARS GREEN STEEL IS MADE</SectionKicker></GreenSteelReveal>
          <GreenSteelReveal delay={0.08}><h2 className="section-title max-w-4xl text-white">From Recycled Steel to Responsible Manufacturing.</h2></GreenSteelReveal>
          <div className="mt-7 grid gap-6 text-base leading-8 text-white/74 lg:grid-cols-3">
            <GreenSteelReveal delay={0.14}><p>ARS Green Steel is produced using approximately 98% premium-quality recyclable steel through an electric furnace route. The process allows recovered steel to be brought back into production while reducing the carbon impact associated with conventional blast-furnace steelmaking.</p></GreenSteelReveal>
            <GreenSteelReveal delay={0.2}><p>The steel is then refined and rolled into TMT bars, with quality checks carried out through the manufacturing process. Renewable energy integration and real-time CO₂ emissions monitoring further support ARS&apos;s approach to responsible steel manufacturing.</p></GreenSteelReveal>
            <GreenSteelReveal delay={0.26}><p>Emission intensity is calculated separately and consolidated into the plant&apos;s Environmental Product Declaration.</p></GreenSteelReveal>
          </div>
          <GreenSteelImageReveal className="relative mt-10 aspect-[1719/815] w-full overflow-hidden" delay={0.08}><Image src="/ars-assets/ars-green-steel/recycle.png" alt="Recycled steel, renewable energy, reduced fossil-fuel dependence, and finished reinforcing steel illustrating the ARS Green Steel manufacturing route" fill sizes="100vw" className="object-contain" /></GreenSteelImageReveal>
          <GreenSteelReveal><h3 className="mt-14 font-display text-2xl font-bold">The Manufacturing Route</h3></GreenSteelReveal>
          <ol className="mt-7 grid border-l border-t border-white/16 md:grid-cols-2 lg:grid-cols-4">
            {manufacturingRoute.map(([title, body], index) => <GreenSteelListItemReveal key={title} delay={index * 0.06} className="relative border-b border-r border-white/16 bg-white/[0.035] p-6 before:absolute before:left-0 before:top-0 before:h-1 before:w-12 before:bg-[#9BCB83]"><span className="font-technical text-xs font-black tracking-[0.18em] text-[#9BCB83]">{String(index + 1).padStart(2, "0")}</span><h4 className="mt-6 font-display text-xl font-bold text-white">{title}</h4><p className="mt-4 text-sm leading-7 text-white/68">{body}</p></GreenSteelListItemReveal>)}
          </ol>
          <GreenSteelReveal className="mt-9"><Link href="/manufacturing" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">ARS Manufacturing <ArrowRight size={17} aria-hidden="true" /></Link></GreenSteelReveal>
        </div>
      </section>

      <section className="bg-[#F6F8F1] py-20 lg:py-28">
        <div className="ars-container">
          <GreenSteelReveal><SectionKicker>CARBON TRANSPARENCY</SectionKicker></GreenSteelReveal>
          <GreenSteelReveal delay={0.08}><h2 className="section-title max-w-4xl">592 kg CO₂e per tonne — Verified Through an EPD.</h2></GreenSteelReveal>
          <GreenSteelReveal delay={0.14}><p className={`mt-6 max-w-5xl ${bodyCopy}`}>ARS Green Steel has an internationally verified Environmental Product Declaration (EPD) that provides transparent information on the carbon emissions and environmental performance of its steel. The EPD reports an emission intensity of 592 kg CO₂e per tonne of finished steel, giving architects, developers, engineers and project teams clear data to consider embodied carbon when selecting steel for sustainable construction.</p></GreenSteelReveal>
          <GreenSteelReveal delay={0.18}><a href="/ars-assets/certifications/ARS-STEELS_EPD-CERTIFICATE-2.pdf" target="_blank" rel="noreferrer" aria-label="Open the ARS Environmental Product Declaration source" className="focus-ring mt-12 block border border-[#123D2B]/18 bg-white p-6 transition hover:border-green-steel/60 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4"><h3 className="font-display text-2xl font-bold text-ink-900">Emission Intensity</h3><span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Click chart for source access <ArrowRight size={16} aria-hidden="true" /></span></div>
            <div className="mt-9 grid gap-7 md:grid-cols-2">
              {carbonComparison.map(([label, value, unit, width], index) => <div key={label}><div className="flex items-end justify-between gap-4"><span className="text-sm font-bold text-ink-900">{label}</span><span className={`font-display text-xl font-bold ${index === 3 ? "text-green-steel" : "text-ink-900"}`}>{value} <small className="text-xs font-semibold">{unit}</small></span></div><div className="mt-3 h-5 border border-[#123D2B]/10 bg-[#EEF5EC]"><GreenSteelCarbonBar width={width} className={`h-full ${index === 3 ? "bg-green-steel" : index === 1 ? "bg-steel-500" : "bg-[#33443D]"}`} /></div></div>)}
            </div>
          </a></GreenSteelReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#EEF5EC] py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] opacity-[0.09] lg:block"><Image src="/ars-assets/Sustainability/ARSGreenSteel_WhyitMatters.jpg" alt="" fill sizes="38vw" className="object-cover" /></div>
        <div className="ars-container">
          <GreenSteelReveal><SectionKicker>Environmental impact</SectionKicker></GreenSteelReveal>
          <GreenSteelReveal delay={0.08}><h2 className="section-title max-w-3xl">The Impact Behind Every Tonne</h2></GreenSteelReveal>
          <GreenSteelReveal delay={0.14}><p className={`mt-6 max-w-4xl ${bodyCopy}`}>Every tonne of ARS Green Steel contributes to measurable environmental impact. Backed by EPD-verified data, these numbers demonstrate how responsible manufacturing translates into meaningful carbon reduction at scale.</p></GreenSteelReveal>
          <GreenSteelImageReveal className="relative mt-12 aspect-video w-full overflow-hidden bg-[#0B2A1E]" delay={0.12}><Image src="/ars-assets/Sustainability/ARSGreenSteel_infography.jpg" alt="ARS Green Steel environmental impact metrics" fill sizes="100vw" className="object-cover" /></GreenSteelImageReveal>
        </div>
      </section>

      <section className="bg-[#123D2B] py-20 text-white lg:py-28">
        <div className="ars-container">
          <GreenSteelReveal><SectionKicker variant="light">OUR GREEN STEEL ROADMAP</SectionKicker></GreenSteelReveal>
          <GreenSteelReveal delay={0.08}><h2 className="section-title max-w-4xl text-white">A Clear Path Towards Net-Zero Steel</h2></GreenSteelReveal>
          <GreenSteelReveal delay={0.14}><p className="mt-6 max-w-4xl text-base leading-8 text-white/74 lg:text-lg">ARS is steadily increasing the use of renewable energy in its manufacturing process while working towards lower carbon emissions. The roadmap reflects the progress already made and the targets ahead as ARS moves towards net-zero steel production.</p></GreenSteelReveal>
          <GreenSteelRoadmap>
            {roadmap.map(([year, value, title, body], index) => <GreenSteelListItemReveal key={year} delay={index * 0.07} className="relative border-b border-white/16 py-8 last:border-b-0 lg:border-b-0 lg:border-r lg:px-6 lg:py-9 lg:first:pl-0 lg:last:border-r-0"><span className="absolute -left-[2.18rem] top-9 size-3 rounded-full border-2 border-[#123D2B] bg-[#9BCB83] ring-2 ring-white/35 lg:-top-[0.43rem] lg:left-6 lg:first:left-0" aria-hidden="true" /><span className="font-technical text-xs font-black tracking-[0.18em] text-[#B7DAA5]">{year}</span><strong className="mt-7 block font-display text-4xl font-bold text-white">{value}</strong><h3 className="mt-3 font-display text-lg font-bold text-white">{title}</h3>{body ? <p className="mt-3 text-sm leading-6 text-white/68">{body}</p> : null}</GreenSteelListItemReveal>)}
          </GreenSteelRoadmap>
          <GreenSteelReveal className="mt-9"><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Start Green <ArrowRight size={17} aria-hidden="true" /></Link></GreenSteelReveal>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="ars-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <GreenSteelReveal><Image src="/ars-green-steel.svg" alt="ARS Green Steel" width={213} height={100} className="mb-8 h-auto w-[190px]" /></GreenSteelReveal>
            <GreenSteelReveal delay={0.06}><SectionKicker>GOVERNMENT RECOGNISED GREEN STEEL</SectionKicker></GreenSteelReveal>
            <GreenSteelReveal delay={0.12}><h2 className="section-title">India’s Green Steel Taxonomy</h2></GreenSteelReveal>
            <GreenSteelReveal delay={0.18}><div className={`mt-7 space-y-5 ${bodyCopy}`}><p>India is the first country globally to introduce an official Green Steel Taxonomy. Issued by the Ministry of Steel, the framework classifies steel based on its carbon emission intensity, using a star-rating system based on CO₂ emissions per tonne of finished steel.</p><p>ARS Green Steel is the first steel manufacturer in India to receive the Green Steel Certificate under this framework. It has also received a 5-Star Green Steel Rating, the highest rating under the Government of India’s classification, along with a 73.5% Greenness Score.</p></div></GreenSteelReveal>
          </div>
          <GreenSteelVideoReveal className="relative aspect-square overflow-hidden bg-[#EEF5EC]">
            <video className="absolute inset-0 h-full w-full object-contain" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src="/ars-assets/ars-green-steel/GreenSteelTaxonomy.mp4" type="video/mp4" />
            </video>
          </GreenSteelVideoReveal>
        </div>
      </section>

      <section className="bg-[#F6F8F1] py-20 lg:py-28">
        <div className="ars-container">
          <GreenSteelReveal><SectionKicker>GREEN BUILDING RECOGNITION</SectionKicker><h2 className="section-title max-w-4xl">Recognised by Leading Green Building Standards.</h2><p className={`mt-6 max-w-5xl ${bodyCopy}`}>ARS Green Steel carries recognised environmental credentials that support its use in sustainable construction. Its environmental performance is backed by an Environmental Product Declaration (EPD), while its products are recognised across GRIHA, LEED and SGBC green building frameworks.</p></GreenSteelReveal>
          <div className="mt-12 grid border-l border-t border-[#123D2B]/18 md:grid-cols-2 lg:grid-cols-4">{buildingRecognition.map(([title, body], index) => <GreenSteelArticleReveal key={title} delay={index * 0.07} className="border-b border-r border-[#123D2B]/18 bg-white p-7"><FileCheck2 className="size-6 text-[#17633F]" aria-hidden="true" /><h3 className="mt-6 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{body}</p></GreenSteelArticleReveal>)}</div>

          <div id="certifications" className="scroll-mt-28 pt-20">
            <GreenSteelReveal><SectionKicker>Certifications</SectionKicker><h2 className="section-title max-w-4xl">Every Claim Traces Back to Independent Proof.</h2></GreenSteelReveal>
            <div className="mt-10 grid border-l border-t border-[#123D2B]/22 bg-white md:grid-cols-2 lg:grid-cols-4">
              {certificationLogos.map(({ src, alt, title, body }, index) => (
                <GreenSteelArticleReveal key={title} delay={index * 0.06} className="flex min-h-full flex-col border-b border-r border-[#123D2B]/22 p-6 md:p-7 lg:p-8">
                  <div className="relative flex h-28 w-full items-center justify-start overflow-hidden bg-white">
                    <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 18vw, (min-width: 768px) 38vw, 100vw" className="object-contain object-left" />
                  </div>
                  <div className="mt-7 border-t-2 border-brand-blue pt-6">
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3>
                    <p className="mt-5 text-base leading-7 text-steel-700">{body}</p>
                  </div>
                </GreenSteelArticleReveal>
              ))}
            </div>
            <div className="mt-8 overflow-x-auto border border-[#123D2B]/18 bg-white"><table className="min-w-[780px] w-full border-collapse text-left"><thead className="bg-[#123D2B] text-white"><tr><th scope="col" className="p-5 text-sm font-bold">Certification</th><th scope="col" className="p-5 text-sm font-bold">Issuing Body</th><th scope="col" className="p-5 text-sm font-bold">What It Verifies</th></tr></thead><tbody>{certifications.map(([name, issuer, scope]) => <tr key={name} className="border-t border-[#123D2B]/10 align-top"><th scope="row" className="p-5 font-display text-base font-bold text-ink-900">{name}</th><td className="p-5 text-sm leading-7 text-steel-700">{issuer}</td><td className="p-5 text-sm leading-7 text-steel-700">{scope}</td></tr>)}</tbody></table></div>
            <Link href="/green-certifications" className={`${primaryButton} mt-8`}>View all Certificates <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-[#EEF5EC] py-20 lg:py-28">
        <div className="ars-container">
          <GreenSteelReveal className="max-w-4xl"><SectionKicker>Our Products</SectionKicker><h2 className="section-title">Products Built for Modern Construction</h2><p className={`mt-6 ${bodyCopy}`}>Whether you&apos;re building an individual home, an apartment, a commercial building, or a large infrastructure project, choosing the right TMT bar is essential. ARS offers two high-quality reinforcement solutions, allowing you to select the product that best suits your project&apos;s environment and performance requirements.</p></GreenSteelReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{products.map(([title, body, cta, href, image], index) => <GreenSteelArticleReveal key={title} delay={index * 0.08} className="group overflow-hidden border border-brand-blue/18 bg-white transition hover:-translate-y-1 hover:border-brand-blue/40"><div className="relative h-52 overflow-hidden bg-[#F6F8F1]"><span className="absolute inset-x-0 top-0 z-10 h-1 bg-brand-red" aria-hidden="true" /><span className="absolute inset-y-0 right-0 w-1 bg-green-steel/35" aria-hidden="true" /><Image src={image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-9 transition duration-500 group-hover:scale-105" /></div><div className="p-7"><h3 className="font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3><p className="mt-4 text-base leading-8 text-steel-700">{body}</p><Link href={href} className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">{cta} <ArrowRight size={16} aria-hidden="true" /></Link></div></GreenSteelArticleReveal>)}</div>
        </div>
      </section>

      <section className="bg-[#0B2A1E] py-20 text-white lg:py-28">
        <div className="ars-container">
          <GreenSteelReveal><SectionKicker variant="light">WHO THIS MATTERS FOR</SectionKicker><h2 className="section-title max-w-4xl text-white">What Certified Green Steel Means for Your Project</h2><p className="mt-6 max-w-5xl text-base leading-8 text-white/74 lg:text-lg">The choice of steel has a role to play in both the structure and the environmental performance of a project. ARS Green Steel combines tested steel quality with verified environmental data, making it relevant across different stages of construction and procurement.</p></GreenSteelReveal>
          <div className="mt-12 grid border-l border-t border-white/16 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([title, body], index) => <GreenSteelArticleReveal key={title} delay={(index % 3) * 0.07} className="border-b border-r border-white/16 p-7 lg:p-9"><span className="font-technical text-xs font-black tracking-[0.18em] text-[#9BCB83]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-6 font-display text-xl font-bold text-white">{title}</h3><p className="mt-4 text-sm leading-7 text-white/70">{body}</p></GreenSteelArticleReveal>)}</div>
          <GreenSteelReveal className="mt-9"><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Get Started Now <ArrowRight size={17} aria-hidden="true" /></Link></GreenSteelReveal>
        </div>
      </section>

      <section className="bg-[#F6F8F1] py-20 lg:py-28">
        <div className="ars-container max-w-4xl"><GreenSteelReveal><SectionKicker>FAQs</SectionKicker><h2 className="section-title">Green Steel Questions, Answered.</h2><div className="mt-10"><FaqList items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></GreenSteelReveal></div>
      </section>

      <GreenSteelReveal className="[&>section]:!bg-[#123D2B]"><ContactCta eyebrow="BUILD GREENER" headline="Ready to Build Smarter with ARS Green Steel?" body="Talk to our team about choosing the right certified green steel solution for your next project. Get product guidance, technical support, and certification documentation." primaryLabel="Request Quote" primaryHref="/request-quote" secondaryLabel="Talk to Experts" secondaryHref="/contact" tone="solid" /></GreenSteelReveal>
    </main>
  );
}
