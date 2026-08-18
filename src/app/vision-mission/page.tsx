import Link from "next/link";
import { ArrowRight, Factory, Handshake, Leaf, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Vision & Mission | ARS Green Steel",
  description:
    "Every ARS Green Steel product reflects our commitment to manufacturing excellence, sustainable innovation, uncompromising quality, and long-term customer trust.",
  path: "/vision-mission",
});

const purposeOutcomes = [
  {
    title: "To Build with Trust",
    text: "Every TMT bar we manufacture is engineered to deliver consistent quality, reliability, and confidence for every project.",
  },
  {
    title: "To Enable Sustainable Growth",
    text: "We advance responsible steel manufacturing that supports stronger infrastructure while reducing environmental impact.",
  },
  {
    title: "To Strengthen India's Future",
    text: "From homes and commercial buildings to large-scale infrastructure, our steel helps create safer, more resilient communities.",
  },
];

const missionPillars = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    text: "Deliver BIS-certified Fe550D and CRS 550D TMT bars with uncompromising quality, strength, and consistency.",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    text: "Advance Green Steel manufacturing through responsible practices, innovation, and environmental stewardship.",
  },
  {
    icon: Handshake,
    title: "Customer Trust",
    text: "Build lasting partnerships by delivering reliable products, exceptional service, and consistent value.",
  },
  {
    icon: Settings2,
    title: "Engineering the Future",
    text: "Continuously invest in technology, people, and manufacturing capabilities to strengthen India's infrastructure.",
  },
];

const values = [
  {
    number: "01",
    title: "Quality Without Compromise",
    text: "Every ARS TMT bar is manufactured to meet rigorous quality standards, ensuring consistent strength, durability, and performance for every project.",
  },
  {
    number: "02",
    title: "Built Responsibly",
    text: "We embrace sustainable manufacturing practices that reduce environmental impact while contributing to a stronger and greener India.",
  },
  {
    number: "03",
    title: "Engineering Excellence",
    text: "We continuously improve our technology, processes, and expertise to deliver innovative steel solutions that meet the evolving needs of modern construction.",
  },
  {
    number: "04",
    title: "Trust in Every Partnership",
    text: "We build lasting relationships with customers, builders, engineers, contractors, and dealers through transparency, reliability, and dependable service.",
  },
  {
    number: "05",
    title: "Safety Comes First",
    text: "We believe strong infrastructure begins with safe manufacturing, responsible operations, and products that perform when it matters most.",
  },
  {
    number: "06",
    title: "Driven by Progress",
    text: "We invest in people, innovation, and continuous improvement to create long-term value for our customers, communities, and the future of India's infrastructure",
  },
];

const promisePoints = [
  {
    title: "01. Certified Quality",
    text: "Every ARS TMT bar is manufactured to meet stringent quality standards, giving builders, engineers, and homeowners the confidence to build without compromise.",
  },
  {
    title: "02. Reliable Performance",
    text: "From residential homes to large infrastructure projects, our steel is engineered for consistent strength, durability, and dependable performance.",
  },
  {
    title: "03. Sustainable Manufacturing",
    text: "We are committed to producing Green Steel through responsible manufacturing practices that help reduce environmental impact while supporting India's sustainable growth.",
  },
  {
    title: "04. Partnerships That Last",
    text: "We believe strong relationships are built on transparency, reliability, and delivering value long after the steel reaches the construction site.",
  },
];

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="OUR VISION • MISSION • VALUES"
        title="Driven by Purpose."
        accent="Built for the Future."
        body="Every ARS Green Steel product reflects our commitment to manufacturing excellence, sustainable innovation, uncompromising quality, and long-term customer trust."
        primaryLabel="Explore Our Products"
        primaryHref="/products"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
        backgroundImageSrc="/ars-assets/about/ARS-Vision-Misson_hero.jpg"
        backgroundImageAlt="ARS Green Steel manufacturing facility viewed by a plant worker"
        backgroundImagePosition="60% center"
      />

      <MotionSection className="bg-white py-20 md:py-28" aria-labelledby="purpose-title">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker>OUR PURPOSE</SectionKicker>
            <h2 id="purpose-title" className="section-title">Driven by Purpose. Defined by Impact.</h2>
            <p className="section-copy max-w-3xl">Beyond manufacturing steel, we are committed to creating safer infrastructure through sustainable innovation and uncompromising quality.</p>
          </div>
          <div className="mt-12 grid border border-ink-900/15 md:grid-cols-3">
            {purposeOutcomes.map((outcome) => (
              <article key={outcome.title} className="border-b border-ink-900/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8">
                <h3 className="font-display text-xl font-bold leading-tight text-ink-900">{outcome.title}</h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-28" aria-labelledby="vision-title">
        <div className="ars-container max-w-[1160px]">
          <div className="relative overflow-hidden border border-brand-blue/10 bg-white px-7 py-12 md:px-12 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full border border-brand-blue/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-4 top-12 size-44 rounded-full border border-brand-red/20" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-40 bg-brand-red" aria-hidden="true" />
            <div className="relative z-10">
              <SectionKicker>OUR VISION</SectionKicker>
              <h2 id="vision-title" className="section-title max-w-4xl">Building India&apos;s Most Trusted Green Steel Brand.</h2>
              <h3 className="mt-10 font-display text-xl font-bold text-ink-900">Vision Statement</h3>
              <p className="section-copy max-w-4xl">To become India&apos;s most trusted and reliable steel brand by setting benchmarks in sustainability, carbon neutrality, and stakeholder confidence. Through responsible manufacturing, continuous innovation, and uncompromising transparency, ARS Green Steel is committed to building trust, enabling net-zero construction, and shaping a future where economic growth and environmental stewardship advance together.</p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white md:py-28" aria-labelledby="mission-title">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] border-l border-white/10 lg:block" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-1/2 hidden size-[32rem] -translate-y-1/2 rounded-full border border-white/10 lg:block" aria-hidden="true" />
        <div className="ars-container">
          <SectionKicker variant="light">OUR MISSION</SectionKicker>
          <h2 id="mission-title" className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Building Excellence Through Every Bar of Steel</h2>
          <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.14em] text-white/65">Mission Pillars</h3>
          <div className="relative z-10 mt-6 grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-2">
            {missionPillars.map((pillar) => {
              const Icon: LucideIcon = pillar.icon;

              return (
              <article key={pillar.title} className="group relative min-h-[208px] bg-brand-blue p-7 transition-colors hover:bg-[#123b8b] md:p-9">
                <span className="absolute right-6 top-6 text-[11px] font-bold tracking-[0.18em] text-white/25" aria-hidden="true">0{missionPillars.indexOf(pillar) + 1}</span>
                <div className="flex size-11 items-center justify-center border border-white/20 bg-white/[0.06] text-brand-red">
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h4 className="mt-8 font-display text-xl font-bold leading-tight text-white">{pillar.title}</h4>
                <p className="mt-3 text-base leading-7 text-white/75">{pillar.text}</p>
              </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28" aria-labelledby="values-title">
        <div className="ars-container">
          <div className="max-w-4xl">
            <SectionKicker>OUR VALUES</SectionKicker>
            <h2 id="values-title" className="section-title">The Principles That Shape Every Bar We Manufacture</h2>
            <p className="section-copy max-w-4xl">From responsible manufacturing to customer trust, our values define how we innovate, build quality, and create sustainable steel solutions for generations to come.</p>
          </div>
          <ol className="mt-12 grid gap-x-12 border-t border-ink-900/15 md:grid-cols-2">
            {values.map((value) => (
              <li key={value.number} className="border-b border-ink-900/15 py-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">{value.number}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink-900">{value.title}</h3>
                <p className="mt-3 text-base leading-7 text-steel-700">{value.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-28" aria-labelledby="promise-title">
        <div className="ars-container">
          <div className="max-w-4xl">
            <SectionKicker>THE ARS PROMISE</SectionKicker>
            <h2 id="promise-title" className="section-title">Our Promise Is Built Into Every Bar.</h2>
            <p className="section-copy max-w-4xl">Every ARS Green Steel product is manufactured with a commitment to consistent quality, engineering excellence, and responsible manufacturing. From BIS-certified Fe550D and CRS 550D TMT bars to sustainable production practices, we help builders, engineers, contractors, and homeowners create stronger structures while contributing to a stronger, greener India.</p>
          </div>
          <div className="mt-12 grid border border-ink-900/15 md:grid-cols-2">
            {promisePoints.map((point) => (
              <article key={point.title} className="border-b border-ink-900/15 p-7 last:border-b-0 md:border-b md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0 md:p-8">
                <h3 className="font-display text-xl font-bold leading-tight text-ink-900">{point.title}</h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-ink-950 py-20 text-white md:py-24" aria-labelledby="vision-cta-title">
        <div className="ars-container text-center">
          <h2 id="vision-cta-title" className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em]">Let&apos;s Build a Stronger Tomorrow Together</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Explore Our Products <ArrowRight size={16} /></Link>
            <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-bold text-white transition hover:border-white">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
