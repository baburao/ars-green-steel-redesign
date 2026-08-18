import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Factory, ShieldCheck, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { AboutJourneyTimeline } from "@/components/about-journey-timeline";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "About ARS Group",
  description:
    "ARS group is one of India's leading manufacturers of BIS-certified Fe550D and CRS 550D TMT bars, delivering high-strength, high-ductility, corrosion-resistant, and sustainable steel solutions for residential, commercial, industrial, and infrastructure projects.",
  path: "/about-us",
});

const storyPoints = [
  "35+ Years of Manufacturing Excellence",
  "Integrated Steel Manufacturing Facility",
  "BIS-Certified Fe550D & CRS 550D TMT Bars",
  "ISO 9001 & ISO 14001 Certified",
];

const trustPillars = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    points: ["Integrated Steel Plant", "Gummidipoondi, Tamil Nadu", "2,50,000 MT Capacity"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Certifications",
    points: ["BIS Certified", "ISO 9001 & ISO 14001", "SGS Verified", "IS 1786 Compliant"],
  },
  {
    icon: CheckCircle2,
    title: "Sustainable Green Steel",
    points: ["5-Star Green Steel", "GreenPro Certified", "EPD Verified", "GRIHA Approved"],
  },
  {
    icon: Users,
    title: "Trusted Performance",
    points: [
      "Fe550D & CRS 550D",
      "Corrosion Resistant",
      "Builders & Engineers Trust ARS",
      "Residential to Infrastructure Projects",
    ],
  },
] as const;

const milestones = [
  {
    year: "1990",
    title: "The Beginning",
    description:
      "Established as ARS Metals Private Limited with a vision to manufacture high-quality steel through disciplined processes and uncompromising quality standards.",
  },
  {
    year: "1992",
    title: "Commercial Production Begins",
    description:
      "Started commercial production of MS Billets, laying the foundation for integrated steel manufacturing and long-term operational excellence.",
  },
  {
    year: "2005",
    title: "Entering TMT Manufacturing",
    description:
      "Commissioned the rolling mill division and began manufacturing TMT rebars, becoming a fully integrated steel manufacturer with greater control over quality and consistency.",
  },
  {
    year: "2010",
    title: "Strengthening Manufacturing",
    description:
      "Expanded production capabilities with a 25-ton induction furnace and billet caster, improving efficiency, metallurgical consistency, and production capacity.",
  },
  {
    year: "2015",
    title: "Introducing Fe550D",
    description:
      "Expanded the product portfolio with Fe550D TMT bars, delivering higher strength, improved ductility, and dependable structural performance.",
  },
  {
    year: "2018",
    title: "Setting New Industry Benchmarks",
    description:
      "Became the first manufacturer to introduce Fe550D grade TMT bars, raising industry standards for strength, ductility, and construction performance.",
  },
  {
    year: "2024",
    title: "Leading the Green Steel Movement",
    description:
      "Achieved another industry milestone by introducing 3-in-1 Green Steel TMT Rebars with Ductility, Corrosion Resistance, and Green Steel advantages while expanding manufacturing capacity to support future growth.",
  },
  {
    year: "Looking Ahead",
    title: "Building the Future",
    description:
      "With a vision to reach 0.5 million tonnes of TMT rebars by 2027 and 1 million tonnes of Green Steel rebars by 2030, ARS continues to invest in innovation, sustainability, and manufacturing excellence to help build a stronger and greener India.",
  },
] as const;

const audiences = [
  {
    icon: Users,
    title: "Homeowners",
    description:
      "Build safer homes with BIS-certified Fe550D & CRS 550D TMT bars designed for strength, durability, and long-term structural safety.",
    cta: "Explore Products",
    href: "/products",
  },
  {
    icon: Building2,
    title: "Engineers & Consultants",
    description:
      "Access technical specifications, test certificates, design support, and certified steel solutions for confident structural planning.",
    cta: "View Technical Resources",
    href: undefined,
  },
  {
    icon: Factory,
    title: "Builders, Contractors & Developers",
    description:
      "Depend on consistent supply, certified quality, an extensive dealer network, and reliable performance for projects of every scale.",
    cta: "Find an Authorised Dealer",
    href: "/our-network",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section
        className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]"
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/about/ARS-group-hero-banner.jpg"
            alt="Aerial view of the ARS Green Steel manufacturing facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        </div>

        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              Since 1992
            </div>
            <h1 id="about-hero-title" className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">
              Building Stronger Foundations with <span className="text-brand-red">Trusted Steel</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
              ARS group is one of India&apos;s leading manufacturers of BIS-certified Fe550D and CRS 550D TMT bars, delivering high-strength, high-ductility, corrosion-resistant, and sustainable steel solutions for residential, commercial, industrial, and infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      <MotionSection className="scroll-mt-24 bg-white py-20 md:py-28" id="story">
        <div className="ars-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">WHO WE ARE</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                A Trusted Steel Manufacturer Since 1990.
              </h2>
              <p className="mb-8 mt-5 text-[15px] leading-[1.8] text-steel-700">
                ARS Green Steel is a trusted name in the Indian steel industry, built on more than three decades of manufacturing excellence, technical integrity, and continuous innovation. Founded in 1990 as ARS Metals Private Limited, we have remained committed to manufacturing high-quality steel that consistently meets specifications, delivers dependable performance, and earns the confidence of builders, engineers, contractors, and infrastructure developers. Today, our integrated manufacturing facility at Gummidipoondi, Tamil Nadu, produces BIS-certified Fe550D and CRS 550D TMT bars through precision manufacturing, rigorous quality standards, and responsible Green Steel practices.
              </p>
              <ul className="flex flex-col gap-3">
                {storyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                    <span className="text-[14px] font-medium leading-6 text-steel-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="relative min-h-[420px] overflow-hidden bg-ink-950 md:min-h-[540px]">
              <Image
                src="/ars-assets/about/ars-group-story.webp"
                alt="Aerial view of the ARS Green Steel manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.38)_0%,transparent_60%)]" />
            </figure>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-16 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="light">WHY TRUST ARS</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Built on Proven Quality. Backed by Verified Standards.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Manufactured in an integrated steel plant and backed by BIS, ISO, and SGS certifications, every ARS TMT bar is engineered for quality, strength, and long-lasting performance.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="border-t border-white/20 pt-6">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon size={21} className="text-brand-red" aria-hidden="true" />
                    <span className="text-[12px] font-bold text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-[17px] font-bold text-white">{pillar.title}</h3>
                  <ul className="mt-4 space-y-2 text-[13px] leading-[1.55] text-white/70">
                    {pillar.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-8 max-w-3xl">
            <SectionKicker variant="brand">OUR JOURNEY</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Three Decades of Building Strength, Trust & Innovation
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
              From our beginnings in 1990 to becoming a trusted Green Steel manufacturer, every milestone reflects our commitment to quality, innovation, and sustainable growth.
            </p>
          </div>
        </div>
        <AboutJourneyTimeline milestones={milestones} />
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Who we Serve</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Trusted Across Every Stage of Construction
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              From individual homeowners to large-scale infrastructure projects, ARS Green Steel delivers certified TMT steel solutions engineered to meet the diverse requirements of every construction professional.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              const content = (
                <>
                  <Icon size={21} className="text-brand-blue" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="mb-3 font-display text-[17px] font-bold text-ink-900">{audience.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-grey-600">{audience.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red">
                    {audience.cta} <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </>
              );

              return audience.href ? (
                <Link key={audience.title} href={audience.href} className="focus-ring group flex min-h-[290px] flex-col gap-5 border border-surface-100 bg-surface-50 p-7 transition hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-lg">
                  {content}
                </Link>
              ) : (
                <article key={audience.title} className="flex min-h-[290px] flex-col gap-5 border border-surface-100 bg-surface-50 p-7">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-28" id="contact">
        <div className="ars-container text-center">
          <SectionKicker variant="light" align="center" showEndLine>LET&apos;S BUILD TOGETHER</SectionKicker>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
            Partner with ARS Green Steel for Stronger, Safer Construction
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-[1.8] text-white/72">
            Whether you&apos;re planning a home, specifying Fe550D or CRS 550D TMT bars, or sourcing steel for a large infrastructure project, our experts are here to help you choose the right solution.
          </p>
        </div>
      </MotionSection>

    </main>
  );
}
