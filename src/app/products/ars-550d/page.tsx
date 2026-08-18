import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Download,
  FileText,
  IndianRupee,
  Layers,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { ProductLeadCaptureForm } from "@/components/product-lead-capture-form";
import { FaqList } from "@/components/faq-list";

export const metadata = createPageMetadata({
  title: "ARS Fe 550D TMT Bars | ARS Green Steel",
  description:
    "ARS Fe 550D high-strength ductile TMT bars (Fe-550D, IS 1786:2008) for safer residential, commercial, and infrastructure construction.",
  path: "/product-550d",
});

const trustItems = [
  { value: "Fe 550D", label: "Grade" },
  { value: "IS 1786", label: "Standard" },
  { value: "550 Min.", label: "Yield Strength" },
  { value: "16 Min.", label: "Elongation" },
];

const technicalOverview = [
  { label: "Grade", value: "Fe 550D TMT Reinforcement Bars • IS 1786 Compliant" },
  { label: "Available Sizes", value: "8 mm • 10 mm • 12 mm • 16 mm • 20 mm • 25 mm • 32 mm" },
  { label: "Applications", value: "Residential • Commercial • Industrial • Infrastructure • RCC Construction" },
  { label: "Key Properties", value: "High Strength • High Ductility • Superior Bendability • Strong Concrete Bonding" },
  { label: "Manufacturing", value: "Thermo-Mechanically Treated (TMT) • Low Sulphur • Low Phosphorus • Controlled Manufacturing Process" },
  { label: "Certifications", value: "BIS Certified • SGS Tested • SERC Certified • Quality Assured" },
];

const benefits = [
  {
    icon: <Zap size={20} />,
    title: "High Strength",
    desc: "Manufactured to Fe550D grade, ARS Fe 550D TMT Bars provide the strength required for residential, commercial, industrial, and infrastructure construction without compromising structural reliability.",
  },
  {
    icon: <Building2 size={20} />,
    title: "High Ductility",
    desc: "Designed with low sulphur and low phosphorus content, ARS Fe 550D offers excellent ductility, allowing reinforced concrete structures to perform better under dynamic loads and seismic conditions.",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "Superior Bendability",
    desc: "Maintains excellent bendability for easier fabrication and detailing on site while preserving the mechanical properties required for reinforced concrete construction.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Better Concrete Bonding",
    desc: "The ribbed surface profile creates a strong bond with concrete, helping improve load transfer and overall structural stability throughout the life of the structure.",
  },
  {
    icon: <Layers size={20} />,
    title: "Engineered for Structural Performance",
    desc: "Manufactured through a controlled Thermo-Mechanical Treatment (TMT) process to achieve a balanced combination of strength, toughness, and durability across every batch.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Certified Quality",
    desc: "Manufactured in accordance with IS 1786 standards and backed by BIS certification, SGS testing, SERC certification, and stringent in-house quality control processes.",
  },
  {
    icon: <FileText size={20} />,
    title: "Better Weldability",
    desc: "The controlled chemical composition supports improved weldability, making ARS Fe 550D suitable for a wide range of reinforced concrete construction requirements.",
  },
  {
    icon: <IndianRupee size={20} />,
    title: "Optimised Steel Consumption",
    desc: "The higher yield strength of Fe550D helps engineers optimise steel usage in structural design, contributing to efficient construction without compromising safety.",
  },
];

const mechanicalProperties = [
  ["Yield Strength", "N/mm²", "550 Min."],
  ["Tensile Strength", "N/mm²", "600 Min."],
  ["TS/YS Ratio", "Ratio", "1.10 Min."],
  ["Elongation", "%", "16 Min."],
];

const chemicalProperties = [
  ["Carbon (C)", "%", "0.25 Max."],
  ["Sulphur (S)", "%", "0.04 Max."],
  ["Phosphorus (P)", "%", "0.04 Max."],
  ["Sulphur + Phosphorus (S+P)", "%", "0.075 Max."],
  ["Carbon Equivalent (CE)", "%", "0.42 Max."],
];

const certificationBadges = ["BIS Certified", "Green Steel Certified", "TN PWD Approved", "SGBC Leader (4-Star)", "GRIHA", "EPD Verified"];

const diameterLinks = [
  ["8mm", "/8-mm-steel-rod"],
  ["10mm", "/10-mm-steel-rod"],
  ["12mm", "/12-mm-steel-rod"],
  ["16mm", "/16-mm-steel-rod"],
  ["20mm", "/20-mm-steel-rod"],
  ["25mm", "/25-mm-steel-rod"],
  ["32mm", "/32-mm-steel-rod"],
] as const;

const faqs = [
  [
    "What is ARS Fe 550D TMT Bar?",
    "ARS Fe 550D is a high-strength Fe550D grade TMT reinforcement bar manufactured in accordance with IS 1786 standards. It is engineered to provide superior strength, ductility, and durability for residential, commercial, industrial, and infrastructure construction.",
  ],
  [
    "What is the difference between Fe500D and Fe550D TMT Bars?",
    "The primary difference is yield strength. Fe550D offers a minimum yield strength of 550 MPa, while Fe500D provides 500 MPa. With higher strength and excellent ductility, Fe550D is preferred for projects that require enhanced structural performance and efficient steel utilisation.",
  ],
  [
    "Where can ARS Fe 550D TMT Bars be used?",
    "ARS Fe 550D TMT Bars are suitable for reinforced concrete construction, including residential homes, apartments, commercial buildings, industrial structures, bridges, public infrastructure, foundations, columns, beams, and slabs.",
  ],
  [
    "Why is ductility important in Fe550D TMT Bars?",
    "Ductility allows reinforcement steel to deform under heavy loads without sudden failure. This helps reinforced concrete structures absorb stress more effectively, making them safer during earthquakes, dynamic loading, and other demanding service conditions.",
  ],
  [
    "What standards and certifications does ARS Fe 550D comply with?",
    "ARS Fe 550D TMT Bars are manufactured in compliance with IS 1786 and are backed by BIS Certification, SGS Testing, SERC Certification, and stringent in-house quality control to ensure consistent product quality and performance.",
  ],
  [
    "Is ARS Fe 550D suitable for earthquake-resistant construction?",
    "Yes. ARS Fe 550D combines high strength with excellent ductility, helping reinforced concrete structures withstand seismic forces more effectively. Its mechanical properties make it a dependable choice for earthquake-resistant construction when used as part of a properly engineered structural design.",
  ],
  [
    "What is the difference between ARS Fe 550D and ARS CRS Fe 550D?",
    "ARS Fe 550D is designed for general reinforced concrete construction, offering high strength and ductility. ARS CRS Fe 550D provides these benefits along with enhanced corrosion resistance, making it suitable for structures exposed to moisture, coastal environments, and high-salinity conditions.",
  ],
];

function PropertyTable({
  caption,
  rows,
}: {
  caption: string;
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-100 bg-white">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-blue">
          <tr>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Property</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Unit</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">ARS Fe 550D</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([property, unit, value], index) => (
            <tr key={property} className={index % 2 === 0 ? "bg-surface-50" : "bg-white"}>
              <th scope="row" className="px-4 py-3 text-[13px] font-semibold text-ink-900">{property}</th>
              <td className="px-4 py-3 text-[13px] text-steel-700">{unit}</td>
              <td className="px-4 py-3 text-[13px] font-bold text-brand-blue">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Ars550DPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/products/ARS550DBanner.jpg" alt="ARS TMT steel bars with campaign spokesperson" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />ARS Fe 550D TMT Bars | Fe 550D Grade</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">ARS Fe 550D TMT Bars for Strong, Durable Construction</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">Engineered for high strength, superior ductility, and dependable performance, ARS Fe 550D TMT Bars are built for modern construction.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote?product=ars-550d" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"><FileText size={14} aria-hidden="true" /> Get a Quote</Link>
              <Link href="/tmt-steel-calculator" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.12]"><Calculator size={14} aria-hidden="true" /> Calculate Steel</Link>
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.08em] text-white/70 sm:text-sm">BIS-certified · SGS-tested · Fe 550D · yield 550 N/mm²</p>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => <div key={item.label} className="px-0 text-left lg:px-8 lg:text-center"><p className="font-display text-[1.65rem] font-extrabold tracking-[-0.03em] text-brand-blue">{item.value}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900">{item.label}</p></div>)}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="specifications">
        <div className="ars-container grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="relative flex min-h-[390px] overflow-hidden rounded-2xl bg-ink-950 p-6 md:p-8 lg:min-h-0">
            <Image
              src="/ars-assets/products/WhatAre_ARS-CRS-550D_TMTBars.jpg"
              alt="Bundled ARS TMT bars ready for construction use"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.68)_46%,rgba(6,13,30,0.08)_100%)]" />
            <div className="relative z-10 mt-auto max-w-xl">
              <SectionKicker variant="light">PRODUCT OVERVIEW</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">What Are ARS Fe 550D TMT Bars?</h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-white/80"><strong>Built for Strength. Trusted for Modern Construction.</strong><br />Choosing the right reinforcement steel is one of the most important decisions in any construction project. ARS Fe 550D TMT Bars are engineered to provide the strength, ductility, and consistency required for modern reinforced concrete structures. Manufactured to IS 1786 standards, they are suitable for residential, commercial, industrial, and infrastructure applications where long-term structural performance matters.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100">
            <div className="bg-brand-blue px-6 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">ARS Fe 550D Technical Overview</p></div>
            {technicalOverview.map((row, index) => <div key={row.label} className={`grid grid-cols-5 px-5 py-4 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{row.label}</p><p className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{row.value}</p></div>)}
            <div className="border-t border-surface-100 bg-white p-5"><span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-4 py-2 text-[13px] font-bold text-brand-blue"><Download size={14} aria-hidden="true" /> Download Brochure</span></div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-16 md:py-20" id="sizes">
        <div className="ars-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionKicker variant="brand">SIZES &amp; DIAMETERS</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Choose the right bar diameter for your project.</h2>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {diameterLinks.map(([label, href]) => <Link key={label} href={href} className="focus-ring inline-flex min-h-11 min-w-16 items-center justify-center rounded-full border border-brand-blue/20 bg-white px-4 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white">{label}</Link>)}
            </div>
          </div>
          <Link href="/tmt-steel-calculator" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"><Calculator size={16} aria-hidden="true" /> Estimate Quantity <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid items-start gap-8 lg:grid-cols-2"><div><SectionKicker variant="light">WHY CHOOSE ARS Fe 550D</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Engineered to Perform. Built to Last.</h2></div><p className="text-[15px] leading-[1.8] text-white/75 lg:pt-12">Every ARS Fe 550D TMT Bar is manufactured to deliver the strength, flexibility, and consistency required for modern reinforced concrete construction.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit, index) => <article key={benefit.title} className="flex min-h-[235px] flex-col rounded-2xl border border-white/[0.1] bg-white/[0.05] p-6"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">{benefit.icon}</span><span className="text-[12px] font-bold text-white/20">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-6 font-display text-[16px] font-bold text-white">{benefit.title}</h3><p className="mt-2 text-[13px] leading-[1.65] text-white/70">{benefit.desc}</p></article>)}</div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container"><SectionKicker variant="brand">Key Properties</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Mechanical &amp; Chemical Properties</h2><p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-steel-700">Manufactured to IS 1786 standards, ARS Fe 550D TMT Bars are engineered to deliver consistent mechanical performance and controlled chemical composition for reliable reinforced concrete construction.</p><div className="mt-10 grid gap-5 lg:grid-cols-2"><PropertyTable caption="Mechanical properties of ARS Fe 550D" rows={mechanicalProperties} /><PropertyTable caption="Chemical properties of ARS Fe 550D" rows={chemicalProperties} /></div></div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionKicker variant="brand">Trust</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Tested. Certified. Trusted.</h2><div className="mt-7 grid grid-cols-2 gap-3">{certificationBadges.map((badge) => <div key={badge} className="flex min-h-16 items-center gap-3 rounded-xl border border-surface-100 bg-white px-4 text-[13px] font-bold text-brand-blue"><BadgeCheck size={18} className="shrink-0 text-brand-red" />{badge}</div>)}</div><div className="mt-7 flex flex-wrap gap-3"><span aria-disabled="true" className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-2.5 text-[13px] font-bold text-brand-blue"><Download size={14} aria-hidden="true" /> Download Brochure</span><Link href="/our-certification" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-2.5 text-[13px] font-bold text-brand-blue"><ShieldCheck size={14} aria-hidden="true" /> View all certificates</Link></div></div><div className="relative min-h-[480px] overflow-hidden rounded-2xl bg-ink-950"><video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/ars-assets/products/SteelTesting/Steeltesting-video.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.86),rgba(6,13,30,0.08)_62%)]" /></div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container max-w-5xl"><h2 className="text-center font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">FAQs</h2><FaqList className="mt-10 rounded-2xl border border-surface-100 bg-white px-6" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} /><div className="ars-container relative z-10"><SectionKicker variant="light">READY TO BUILD</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Choose ARS Fe 550D for Your Next Project</h2><p className="mt-3 max-w-[540px] text-[14px] leading-[1.7] text-white/75">Get a Quote for ARS Fe 550D</p></div></MotionSection>

      <ProductLeadCaptureForm product="ARS Fe 550D" trustItems={["BIS-certified", "SGS-tested", "Fe 550D", "30+ years"]} showCallSales={false} />
    </main>
  );
}
