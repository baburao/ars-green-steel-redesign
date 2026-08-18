import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  FileText,
  Gauge,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { ProductLeadCaptureForm } from "@/components/product-lead-capture-form";
import { FaqList } from "@/components/faq-list";

export const metadata = createPageMetadata({
  title: "ARS Binders | ARS Green Steel",
  description:
    "Manufactured from premium ARS CRS Fe 550D TMT Bars, ARS Binders are precision-made stirrups that reduce manual bending, minimise steel wastage, and help deliver faster, more consistent reinforcement on site.",
  path: "/ars-binders",
});

const trustItems = [
  { value: "CRS 550D", label: "Manufactured from CRS 550D Steel" },
  { value: "8 & 10 mm", label: "Available Sizes" },
  { value: "IS 1786", label: "BIS Compliant Steel" },
  { value: "Factory Made", label: "Precision Manufactured" },
];

const technicalOverview = [
  { label: "Product", value: "Factory-Made TMT Binders" },
  { label: "Material", value: "ARS CRS Fe 550D TMT Bars" },
  { label: "Available Sizes", value: "8 mm • 10 mm" },
  { label: "Manufacturing", value: "Machine Bent • Factory Precision" },
  { label: "Compliance", value: "IS 1786 Compliant Steel" },
  { label: "Applications", value: "Columns • Beams • Footings • RCC Construction" },
];

const reasons = [
  {
    title: "Factory-Made Precision",
    description: "Every binder is machine-manufactured to deliver consistent dimensions and accurate reinforcement placement.",
    icon: Factory,
  },
  {
    title: "Faster Construction",
    description: "Ready-to-use binders reduce on-site fabrication time and help speed up reinforcement work.",
    icon: Timer,
  },
  {
    title: "Reduced Steel Wastage",
    description: "Factory-controlled manufacturing helps minimise material wastage compared to manual bending.",
    icon: Ruler,
  },
  {
    title: "Superior Ductility",
    description: "Manufactured using ARS CRS Fe 550D TMT Bars for dependable strength and flexibility.",
    icon: Gauge,
  },
  {
    title: "Corrosion Resistant",
    description: "Made from corrosion resistant CRS 550D steel to improve long-term durability in demanding environments.",
    icon: ShieldCheck,
  },
  {
    title: "Better Site Productivity",
    description: "Reduces manual labour and simplifies reinforcement work across projects.",
    icon: Building2,
  },
  {
    title: "Uniform Quality",
    description: "Every binder is manufactured under controlled factory conditions for consistent quality.",
    icon: ShieldCheck,
  },
  {
    title: "Ready for Installation",
    description: "Delivered ready to use, eliminating cutting, measuring and manual bending on site.",
    icon: Factory,
  },
];

const applications = [
  { label: "Residential Construction", icon: Building2 },
  { label: "Commercial Buildings", icon: Building2 },
  { label: "Industrial Structures", icon: Factory },
  { label: "Infrastructure Projects", icon: MapPin },
  { label: "Columns", icon: Ruler },
  { label: "Beams", icon: Ruler },
  { label: "Footings", icon: ShieldCheck },
  { label: "RCC Reinforcement", icon: Gauge },
];

const benefits = [
  { label: "Save Construction Time", icon: Timer },
  { label: "Reduce Labour Dependency", icon: Building2 },
  { label: "Minimise Steel Wastage", icon: Ruler },
  { label: "Improve Reinforcement Accuracy", icon: Gauge },
  { label: "Consistent Binder Dimensions", icon: Ruler },
  { label: "Cleaner Construction Sites", icon: ShieldCheck },
  { label: "Ready-to-Use Solution", icon: FileText },
  { label: "Reliable Structural Performance", icon: ShieldCheck },
];

const faqs = [
  [
    "What are ARS Binders?",
    "ARS Binders are factory-made TMT stirrups manufactured from premium ARS CRS Fe 550D TMT Bars. Designed for reinforced concrete construction, they provide consistent dimensions, reduce on-site bending, and help improve construction speed and quality.",
  ],
  [
    "How are ARS Binders different from manually bent stirrups?",
    "Unlike manually bent stirrups, ARS Binders are machine-manufactured with precise dimensions and consistent quality. They help minimise steel wastage, reduce labour dependency, and ensure uniform reinforcement throughout the project.",
  ],
  [
    "Why are factory-made binders better?",
    "Factory-made binders eliminate the variations associated with manual fabrication. Every binder is produced under controlled manufacturing conditions, delivering greater accuracy, improved productivity, and reliable structural performance.",
  ],
  [
    "What steel is used to manufacture ARS Binders?",
    "ARS Binders are manufactured using premium ARS CRS Fe 550D TMT Bars. This provides high strength, superior ductility, and enhanced corrosion resistance for long-lasting reinforced concrete structures.",
  ],
  [
    "Where can ARS Binders be used?",
    "ARS Binders are suitable for residential, commercial, industrial, and infrastructure projects. They are widely used for columns, beams, footings, and other reinforced concrete structural elements.",
  ],
  [
    "What sizes are available in ARS Binders?",
    "ARS Binders are available in 8 mm and 10 mm sizes, making them suitable for a wide range of reinforced concrete construction requirements.",
  ],
  [
    "Are ARS Binders corrosion resistant?",
    "Yes. ARS Binders are manufactured from ARS CRS Fe 550D TMT Bars, which are engineered to provide enhanced corrosion resistance, making them suitable for structures exposed to humid and high-salinity environments.",
  ],
] as const;

function DisabledBrochureAction({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-disabled="true"
      title="Download Brochure is unavailable until the approved brochure is supplied."
      className={`inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[14px] font-bold ${
        dark
          ? "border border-white/30 text-white/60"
          : "border border-brand-blue/20 text-brand-blue/55"
      }`}
    >
      <FileText size={15} /> Download Brochure
    </span>
  );
}

export default function ArsBindersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex items-end overflow-hidden bg-ink-950 text-white">
        <Image
          src="/ars-assets/products/ARSBinders.jpg"
          alt="ARS Binders with campaign spokesperson"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />ARS BINDERS</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
              Factory-Made TMT Binders for Faster, Smarter Construction
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Manufactured from premium ARS CRS Fe 550D TMT Bars, ARS Binders are precision-made stirrups that reduce manual bending, minimise steel wastage, and help deliver faster, more consistent reinforcement on site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90">
                Request Quote <ArrowRight size={15} />
              </Link>
              <a href="tel:+919710411111" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/30 px-6 py-3 text-[14px] font-bold text-white transition hover:bg-white hover:text-brand-blue">
                <Phone size={15} aria-hidden="true" /> Talk to Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => (
            <div key={item.value} className="px-0 text-left lg:px-8 lg:text-center">
              <p className="font-display text-[clamp(1.55rem,2.4vw,2.15rem)] font-extrabold tracking-[-0.03em] text-brand-blue">{item.value}</p>
              <p className="mt-1 max-w-[190px] text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900 lg:mx-auto">{item.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="relative flex min-h-[390px] overflow-hidden rounded-[8px] bg-ink-950 p-6 md:p-8 lg:min-h-0">
            <Image
              src="/ars-assets/products/WhatAreARSBinders.jpg"
              alt="Factory-made ARS Binders ready for reinforced concrete construction"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.7)_46%,rgba(6,13,30,0.08)_100%)]" />
            <div className="relative z-10 mt-auto max-w-xl">
              <SectionKicker variant="light">PRODUCT OVERVIEW</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">What Are ARS Binders?</h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/80">ARS Binders are factory-manufactured TMT stirrups made from premium ARS CRS Fe 550D TMT Bars. Designed for consistent quality and precision, they eliminate on-site bending, reduce steel wastage, improve construction speed, and deliver reliable reinforcement for reinforced concrete structures.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[8px] border-[1.5px] border-surface-100 bg-white">
            <div className="bg-brand-blue px-6 py-4"><h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/85">Technical Overview</h2></div>
            <dl>
              {technicalOverview.map((row, index) => (
                <div key={row.label} className={`grid grid-cols-5 gap-4 px-5 py-4 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}>
                  <dt className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{row.label}</dt>
                  <dd className="col-span-3 text-[14px] leading-[1.6] text-steel-700">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-surface-100 p-5"><DisabledBrochureAction /></div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <SectionKicker variant="light">WHY CHOOSE ARS BINDERS</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Built for Faster Construction. Engineered for Better Reinforcement.</h2>
            </div>
            <p className="text-[16px] leading-[1.8] text-white/75 lg:pt-12">Every binder is manufactured for precision, consistency, and dependable structural performance.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/[0.16] bg-white/[0.16] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, description, icon: Icon }) => (
              <article key={title} className="bg-brand-blue p-6">
                <Icon size={20} className="text-white/65" aria-hidden="true" />
                <h3 className="mt-8 font-display text-[17px] font-bold text-white">{title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/72">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch">
          <div>
            <SectionKicker variant="brand">Where Binders are used</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Designed for Modern RCC Construction</h2>
            <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-steel-700">Suitable for reinforced concrete structures where speed, accuracy, and consistent reinforcement are essential.</p>
            <div className="relative mt-10 min-h-72 overflow-hidden rounded-[8px] bg-ink-950 lg:min-h-[420px]">
              <Image
                src="/ars-assets/products/Binders_ModernRCC.jpg"
                alt="ARS Binders used in modern reinforced concrete construction"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.78),transparent_58%)]" />
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:content-center">
            {applications.map(({ label, icon: Icon }) => (
              <li key={label} className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-[8px] border border-ink-900/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-[0_14px_35px_rgba(13,43,110,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-[6px] bg-brand-blue/[0.06] text-brand-blue"><Icon size={19} aria-hidden="true" /></span>
                </div>
                <span className="mt-8 max-w-[12rem] text-[16px] font-bold leading-[1.3] text-ink-900">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Key Benefits</SectionKicker>
              <h2 className="max-w-3xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Benefits That Go Beyond Traditional Site Bending</h2>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-[8px] bg-ink-950 md:min-h-80">
              <Image
                src="/ars-assets/placeholders/binders-factory-placeholder.png"
                alt="Temporary placeholder showing factory-made steel binders stacked on a production floor"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,13,30,0.25),transparent_60%)]" />
            </div>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ label, icon: Icon }) => (
              <li key={label} className="group relative flex min-h-48 flex-col justify-between bg-white p-6 transition hover:bg-surface-50">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-[6px] bg-brand-blue text-white"><Icon size={19} aria-hidden="true" /></span>
                </div>
                <span className="mt-8 max-w-[14rem] text-[16px] font-bold leading-[1.35] text-ink-900">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <ProductLeadCaptureForm product="ARS Binders" trustItems={["Factory-made precision", "CRS 550D steel", "IS 1786 compliant", "Consistent quality"]} />

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container max-w-5xl">
          <h2 className="text-center font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">FAQs</h2>
          <FaqList className="mt-10 rounded-[8px] border border-surface-100 bg-white px-6" items={faqs.map(([question, answer]) => ({ question, answer }))} />
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} />
        <div className="ars-container relative z-10">
          <SectionKicker variant="light">READY TO BUILD</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Simplify Reinforcement. Build with Precision.</h2>
          <p className="mt-3 max-w-[620px] text-[15px] leading-[1.7] text-white/75">Get a Quote for ARS Binders</p>
        </div>
      </MotionSection>

    </main>
  );
}
