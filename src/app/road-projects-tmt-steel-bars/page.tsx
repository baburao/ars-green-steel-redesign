import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

const pagePath = "/road-projects-tmt-steel-bars";

export const metadata: Metadata = createPageMetadata({
  title: "TMT Bars for Road Projects | ARS Green Steel",
  description:
    "For highways, expressways, and urban road projects, ARS Fe 550D and CRS 550D TMT Bars combine strength, durability, and engineering excellence for infrastructure that lasts.",
  path: pagePath,
  image: "/ars-assets/Solutions/RoadProjects/RoadProjectHeroBanner.jpg",
});

const projectRequirements = [
  ["Built to Carry Heavy Traffic", "Road infrastructure is subjected to constant traffic loads every day. High-strength reinforcement helps maintain structural stability under continuous use.", ClipboardCheck],
  ["Engineered for Long-Term Durability", "Roads are built to last for decades. Quality TMT bars help improve the service life of reinforced concrete structures while reducing maintenance over time.", ShieldCheck],
  ["Designed for Challenging Environments", "From heavy rainfall and moisture to high salinity conditions, durable reinforcement helps road infrastructure perform reliably across diverse environments.", Waves],
] as const;

const arsStrengths = [
  ["Consistency That Strengthens Every Kilometre", "Uniform mechanical properties help deliver reliable performance across large-scale road infrastructure projects."],
  ["Designed for Demanding Conditions", "Engineered to perform under continuous traffic loads, changing weather conditions, and challenging construction environments."],
  ["Precision Built Into Every Bar", "Advanced manufacturing and spectrometer testing ensure accurate chemical composition and consistent product quality."],
  ["Durability That Reduces Lifecycle Costs", "Long-lasting reinforcement helps extend the service life of reinforced concrete structures and supports lower maintenance requirements."],
  ["Trusted for Infrastructure", "Backed by recognised certifications and manufacturing standards that inspire confidence in every project."],
] as const;

const products = [
  ["ARS CRS Fe 550D TMT Bars", "Designed for road infrastructure exposed to high moisture, water crossings, and high-salinity environments where enhanced corrosion resistance is essential.", "/product-crs-550d", "Explore CRS 550D"],
  ["ARS Fe 550D TMT Bars", "For highways, bridges, flyovers, retaining walls, and reinforced concrete structures that demand high strength and excellent ductility.", "/product-550d", "Explore Fe550D"],
  ["ARS Binders", "Factory-made reinforcement binders designed for accurate bends, consistent dimensions, and faster reinforcement work on road infrastructure projects.", "/ars-binders", "Explore ARS Binders"],
] as const;

const qualityEvidence = [
  "BIS Certified",
  "ISO Certified Manufacturing",
  "SGS Tested",
  "GreenPro Certified",
  "GRIHA Listed",
  "Precision Manufacturing & Spectrometer Testing",
] as const;

const roadGuideCards = [
  { icon: ClipboardCheck, text: "Review the reinforced concrete structures supporting the road network, including bridges, culverts, retaining walls, and drainage systems." },
  { icon: Factory, text: "Align reinforcement with continuous traffic loads, changing weather conditions, and challenging construction environments." },
  { icon: Waves, text: "For high moisture, water crossings, and high-salinity environments, review the need for enhanced corrosion resistance." },
  { icon: ShieldCheck, text: "Use certified reinforcement that meets recognised quality standards for consistent manufacturing and dependable structural performance." },
] as const;

const faqs = [
  ["Which TMT bar is suitable for road construction?", "Road projects generally require high-strength, high-ductility TMT bars capable of reinforcing bridges, culverts, retaining walls, and other reinforced concrete structures. ARS Fe 550D and CRS 550D TMT Bars are designed for such demanding applications."],
  ["Which TMT bar is best for highway and bridge construction?", "Projects requiring superior strength, ductility, and long-term durability often specify Fe550D grade reinforcement. For structures exposed to moisture or high salinity, corrosion-resistant CRS 550D provides additional protection."],
  ["Why is ductility important in road infrastructure?", "Ductility enables reinforced concrete structures to absorb stresses and distribute loads more effectively, helping improve structural resilience under dynamic traffic conditions."],
  ["Is corrosion resistance important in road projects?", "Yes. Infrastructure exposed to water, humidity, coastal air, or de-icing environments benefits from corrosion-resistant reinforcement that helps improve long-term durability."],
  ["Why should road contractors choose certified TMT bars?", "Certified reinforcement ensures compliance with recognised quality standards, consistent manufacturing, and dependable structural performance for critical infrastructure."],
] as const;

export default function RoadProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src="/ars-assets/Solutions/RoadProjects/RoadProjectHeroBanner.jpg" alt="Road infrastructure construction supported by ARS reinforcement" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-950/75" aria-hidden="true" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-4xl">
            <SectionKicker variant="light">Road Projects</SectionKicker>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.025em] text-white">Because Every Journey Deserves a Strong Beginning.</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/80">Designed for highways, expressways, and urban road projects, ARS CRS Fe 550D TMT Bars combine strength, durability, and engineering excellence for infrastructure that lasts.</p>
            <Link href="/request-quote" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Request a Project Quote <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20"><div><SectionKicker>Road engineering</SectionKicker><h2 className="section-title">Every Road Is Only as Strong as What Lies Beneath.</h2><div className="relative mt-8 aspect-[4/3] overflow-hidden bg-surface-100"><Image src="/ars-assets/Solutions/RoadProjects/RoadEngineering.jpg" alt="Road engineering and infrastructure construction" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" /></div></div><div><p className="max-w-3xl text-lg leading-9 text-steel-700">Roads are more than asphalt. Beneath every highway, expressway, and urban road network lies a system of reinforced concrete structures that carry traffic, withstand environmental conditions, and support decades of continuous use. Choosing high-quality TMT bars is essential to building road infrastructure that delivers lasting strength, durability, and safety.</p><div className="mt-10 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">{projectRequirements.map(([title, body, Icon], index) => <article key={title} className="bg-surface-50 p-6"><span className="font-technical text-xs font-bold tracking-[0.2em] text-brand-red">0{index + 1}</span><Icon aria-hidden="true" className="mt-10 text-brand-blue" size={25} /><h3 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-3 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></div></div></MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28"><div className="ars-container"><SectionKicker>Why ARS</SectionKicker><div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end"><h2 className="section-title">Engineered for the Roads That Millions Depend On.</h2><p className="text-[15px] leading-8 text-steel-700">Road infrastructure leaves no room for compromise. Every reinforced concrete structure—from culverts and retaining walls to bridges and drainage systems—must perform reliably for decades. That&apos;s why ARS engineers every TMT bar for consistent strength, superior durability, and dependable performance where it matters most.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{arsStrengths.map(([title, body]) => <article key={title} className="border border-ink-900/10 bg-white p-6"><Factory aria-hidden="true" size={22} className="text-brand-blue" /><h3 className="mt-10 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-3 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></div></MotionSection>

      <MotionSection className="bg-bg-dark py-20 text-white md:py-28"><div className="ars-container"><SectionKicker variant="light">ARS Products</SectionKicker><div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-end"><h2 className="section-title section-title-light">The Right Reinforcement for Every Road Infrastructure Project</h2><p className="text-[15px] leading-7 text-white/70">Different road structures face different engineering challenges. From heavily loaded bridges to retaining walls and drainage systems, ARS offers TMT Bars engineered to meet diverse structural requirements while delivering consistent strength and long-term durability.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{products.map(([name, body, href, label], index) => <Link key={name} href={href} className="focus-ring group flex min-h-64 flex-col overflow-hidden border border-white/20 bg-white/[0.04] transition hover:border-white/45 hover:bg-white/[0.09]"><div className="relative h-36 bg-[#F4F7FF]"><Image src={["/ars-assets/logos/ARSCRS550D.png", "/ars-assets/logos/ARS550D.png", "/ars-assets/logos/BinderLogo.png"][index]} alt={`${name} product logo`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-7" /></div><div className="flex flex-1 flex-col p-6"><p className="font-technical text-xs font-bold tracking-[0.2em] text-white/50">PRODUCT</p><h3 className="mt-6 font-display text-2xl font-bold text-white">{name}</h3><p className="mt-4 text-sm leading-6 text-white/70">{body}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-white">{label} <ArrowRight aria-hidden="true" size={16} /></span></div></Link>)}</div><div className="mt-8 grid gap-6 border border-brand-red/45 bg-[#0D2B6E] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-8"><div><h3 className="font-display text-2xl font-bold text-white">Certified Green Steel</h3><p className="mt-3 max-w-3xl text-sm leading-7 text-white/78">Manufactured through sustainable processes without compromising structural performance—helping build infrastructure that is stronger and more responsible.</p></div><Link href="/green-steel" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-brand-red-dark">Explore Green Steel <ArrowRight size={16} /></Link></div></div></MotionSection>

      <MotionSection className="bg-[#F4F7FF] py-20 md:py-28"><div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"><div><SectionKicker>Quality &amp; certifications</SectionKicker><h2 className="section-title">Every Bar Manufactured to Meet Stringent Quality Standards</h2><p className="mt-5 text-[15px] leading-8 text-steel-700">Road infrastructure is expected to perform for decades under continuous traffic, changing weather conditions, and demanding load cycles. That&apos;s why every ARS TMT Bar undergoes rigorous quality testing and is manufactured in compliance with recognised national and international standards.</p></div><div className="grid gap-4 sm:grid-cols-2">{qualityEvidence.slice(0, 2).map((item) => <article key={item} className="grid min-h-[190px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[72px_1fr]"><div className="flex items-center justify-center bg-white p-5"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><Check size={21} /></span></div><div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white"><h3 className="font-display text-xl font-bold">{item}</h3></div></article>)}</div></div><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{qualityEvidence.slice(2).map((item) => <article key={item} className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><Check size={21} /></span><h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item}</h3></article>)}</div><Link href="/our-certification" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark">Explore quality &amp; certifications <ArrowRight aria-hidden="true" size={16} /></Link></div></MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28"><div className="ars-container"><SectionKicker>Road project guide</SectionKicker><h2 className="section-title">A focused reinforcement review.</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{roadGuideCards.map(({ icon: Icon, text }) => <article key={text} className="min-h-56 border border-brand-blue/12 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"><Icon aria-hidden="true" size={26} className="text-brand-red" /><p className="mt-10 text-[15px] font-semibold leading-7 text-ink-900">{text}</p></article>)}</div></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.34fr_0.66fr]"><div><SectionKicker>FAQs</SectionKicker><h2 className="section-title">Road-project questions, answered.</h2></div><FaqList items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>

      <ContactCta tone="solid" eyebrow="Road projects" headline="Building India&apos;s Roads Starts with Stronger Reinforcement." body="Whether you&apos;re constructing highways, flyovers, retaining walls, or drainage infrastructure, choose TMT Bars engineered for long-term structural performance." primaryLabel="Explore Products" primaryHref="/products" secondaryLabel="Talk to Our Team" secondaryHref="/contact" />
    </main>
  );
}
