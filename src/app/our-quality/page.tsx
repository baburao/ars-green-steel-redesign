import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Atom,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Droplets,
  FlaskConical,
  Gauge,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { FaqList } from "@/components/faq-list";
import { QualityDocumentGallery } from "@/components/quality-document-gallery";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Our Quality | ARS Green Steel",
  description:
    "ARS quality systems — SGS certification, in-house spectrometry and lab testing, bend/rebend, tensile, and spectro analysis behind ARS Fe 550D TMT bars.",
  path: "/our-quality",
});

const trustBar = [
  {
    value: "SGS",
    label: "Certified",
    sub: "Quality independently verified by an internationally recognised testing agency.",
  },
  {
    value: "100%",
    label: '"D" Quality',
    sub: "Consistent ductility and dependable performance across every bar.",
  },
  {
    value: "8–32 mm",
    label: "All sizes",
    sub: "Uniform quality maintained across every available size.",
  },
  {
    value: "In-house",
    label: "Lab",
    sub: "Advanced testing and spectrometry performed within our manufacturing facility.",
  },
];

const usp = [
  "Every batch tested before dispatch",
  "In-house quality control at every stage",
  "Advanced OES chemical analysis",
  "SGS-certified quality assurance",
  "Manufactured to BIS standards",
  "Consistent quality from 8 mm to 32 mm",
];

const journey = [
  {
    title: "Raw Material",
    lead: "Only quality raw materials move forward.",
    text: "Every batch begins with carefully selected raw materials that meet our strict quality standards, laying the foundation for reliable TMT bars.",
  },
  {
    title: "Billet Manufacturing",
    lead: "Engineered for consistency from the start.",
    text: "Steel billets are produced under closely monitored conditions to achieve the right chemical composition and uniform quality before rolling.",
  },
  {
    title: "Rolling Mill",
    lead: "Shaped with precision.",
    text: "The billets are rolled into TMT bars using advanced rolling technology to ensure accurate dimensions, strength, and consistency.",
  },
  {
    title: "TMT Process",
    lead: "Strength built through controlled cooling.",
    text: "Our Thermo-Mechanical Treatment (TMT) process creates a tough outer layer and a ductile core, delivering the strength and flexibility modern construction demands.",
  },
  {
    title: "Laboratory Testing",
    lead: "Every batch is tested before approval.",
    text: "Our in-house laboratory verifies chemical composition, tensile strength, yield strength, elongation, and bend performance to ensure every batch meets quality standards.",
  },
  {
    title: "Final Inspection",
    lead: "Nothing leaves without a final quality check.",
    text: "Each batch undergoes a thorough inspection to confirm it meets BIS specifications and ARS's uncompromising quality benchmarks.",
  },
  {
    title: "Dispatch",
    lead: "Delivered with confidence.",
    text: "Only after every quality check is complete are ARS TMT bars dispatched, ready to support homes, commercial buildings, and infrastructure projects across India.",
  },
];

const tests = [
  {
    icon: Activity,
    title: "Bend & Rebend Test",
    desc: "Confirms that the bar can bend and rebend without cracking, ensuring the ductility needed for safer structures.",
  },
  {
    icon: CircleDot,
    title: "Martensite Ring Test",
    desc: "Checks the hardened outer layer of the bar to verify the balance between strength and flexibility.",
  },
  {
    icon: Gauge,
    title: "Tensile Test",
    desc: "Measures tensile strength, yield strength, and elongation to ensure every bar meets BIS quality requirements.",
  },
  {
    icon: Droplets,
    title: "Quenching Process",
    desc: "A carefully controlled cooling process that develops the strength and ductility expected from high-quality TMT bars.",
  },
  {
    icon: Atom,
    title: "Spectro Analysis",
    desc: "Verifies the chemical composition of every heat to maintain consistency and comply with manufacturing specifications.",
  },
  {
    icon: BadgeCheck,
    title: "SGS Certification",
    desc: "Independent testing and certification provide an additional layer of assurance that ARS quality meets recognised industry standards.",
  },
];

const faqs = [
  {
    question: "How does ARS ensure the quality of every TMT bar?",
    answer:
      "Every batch undergoes multiple quality checks throughout the manufacturing process. From raw material inspection to laboratory testing and final quality verification, each stage is closely monitored before the steel is approved for dispatch.",
  },
  {
    question: "Are ARS TMT bars BIS certified?",
    answer:
      "Yes. ARS TMT bars are manufactured in accordance with BIS standards and comply with IS 1786 requirements, ensuring consistent quality and reliable performance.",
  },
  {
    question: "What tests are performed on ARS TMT bars?",
    answer:
      "Each batch is tested for chemical composition, tensile strength, yield strength, elongation, bend and rebend performance, weight, dimensions, and other critical quality parameters to ensure it meets our internal standards and regulatory requirements.",
  },
  {
    question: "Can I request a Mill Test Certificate (MTC)?",
    answer:
      "Yes. Mill Test Certificates are available for supplied batches and provide detailed information about the mechanical properties and chemical composition of the material.",
  },
  {
    question: "Are ARS TMT bars tested by independent laboratories?",
    answer:
      "Yes. In addition to our in-house quality control, ARS products are periodically verified through independent testing agencies such as SGS, providing an added level of confidence.",
  },
];

export default function OurQualityPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/about/Qualitypolicy_hero-banner.jpg"
            alt="ARS quality inspector measuring TMT bars at the manufacturing facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        </div>

        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Quality Policy
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
              Quality that stands behind
              <br />
              <span className="italic text-brand-red">every structure.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Quality is built into everything we do. From production to final inspection, every ARS TMT
              bar is carefully tested to meet the standards your project deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/steel-testing"
                className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-[6px] bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Explore ARS Steel Testing <ArrowRight size={14} />
              </Link>
              <Link
                href="/our-certification"
                className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-[6px] border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.12]"
              >
                View certifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {trustBar.map((item) => (
              <div key={item.label} className="flex flex-col lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.75rem,2.5vw,2.35rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {item.value}
                </span>
                <span className="mb-1 mt-2 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {item.label}
                </span>
                <span className="max-w-[220px] text-[12px] leading-[1.55] text-grey-600">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <div className="grid overflow-hidden bg-brand-blue lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex min-h-[380px] flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
              <SectionKicker variant="light">ARS Quality Policy</SectionKicker>
              <blockquote className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.65rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                “Every bar we manufacture meets the standards we would trust for our own structures.”
              </blockquote>
            </div>
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/ars-assets/homepage-manufacturing-detail.jpg"
                alt="ARS TMT bars moving through the manufacturing line"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="quality-control">
        <div className="ars-container">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
            <div>
              <SectionKicker variant="brand">Why ARS Quality</SectionKicker>
              <h2 className="section-title max-w-3xl">
                Every Stage of Manufacturing Has One Purpose: Better Quality Steel.
              </h2>
              <p className="section-copy max-w-3xl">
                The quality of steel depends on the decisions made throughout the manufacturing process. At
                ARS, every stage is carefully monitored and every batch is tested to ensure consistent strength,
                ductility, and reliability before it reaches your construction site.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {usp.map((point) => (
                  <div key={point} className="flex items-start gap-3 border-t border-ink-900/10 py-4">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-red" />
                    <span className="text-[14px] font-medium leading-6 text-steel-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-brand-blue/10 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center bg-brand-blue/[0.07] text-brand-blue">
                <FlaskConical size={24} />
              </div>
              <h3 className="mt-6 font-display text-[1.65rem] font-bold text-ink-900">
                In-house Quality Control
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-steel-700">
                Our quality team checks every production batch using advanced testing equipment before it is
                approved for dispatch. This helps us maintain consistent chemical composition, mechanical
                properties, and manufacturing standards across every ARS TMT bar.
              </p>
              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-brand-red pl-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-grey-600">
                    Spectrometry
                  </dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold text-brand-blue">
                    Optical Emission Spectrometry (OES)
                  </dd>
                </div>
                <div className="border-l-2 border-brand-red pl-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-grey-600">Analysis</dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold text-brand-blue">
                    Macro &amp; Mechanical Testing
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24" id="quality-journey">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionKicker variant="brand">Quality Journey</SectionKicker>
              <h2 className="section-title">The Journey Behind Every ARS TMT Bar</h2>
              <p className="section-copy">
                From raw materials to final inspection, every stage is designed to deliver consistent quality
                and reliable performance.
              </p>
            </div>

            <ol className="relative border-l border-brand-blue/20 pl-7 sm:pl-10">
              {journey.map((step, index) => (
                <li key={step.title} className="relative border-b border-ink-900/10 py-8 first:pt-0 last:border-0 last:pb-0">
                  <span
                    className={`absolute -left-[2.52rem] flex size-8 items-center justify-center rounded-full bg-brand-blue font-display text-[11px] font-bold text-white sm:-left-[3.52rem] ${
                      index === 0 ? "top-0" : "top-8"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.45rem,2vw,1.9rem)] font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-bold text-brand-blue">{step.lead}</p>
                  <p className="mt-2 max-w-2xl text-[14px] leading-[1.75] text-steel-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 lg:py-24" id="testing">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionKicker variant="light">Quality Assurance</SectionKicker>
              <h2 className="section-title text-white">
                Every Batch Undergoes These Critical Quality Tests
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Each batch is tested against key mechanical and chemical parameters to ensure it meets BIS
              standards and ARS&apos;s uncompromising quality benchmarks.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => {
              const Icon = test.icon;
              return (
                <article key={test.title} className="flex min-h-[260px] flex-col bg-brand-blue p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center border border-brand-red/35 bg-brand-red/10 text-brand-red">
                      <Icon size={20} />
                    </span>
                    <span className="text-[12px] font-bold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-[1.15rem] font-bold text-white">{test.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-white/65">{test.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="quality-documents">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker variant="brand">Quality Documents</SectionKicker>
            <h2 className="section-title">Everything You Need to Build with Confidence</h2>
          </div>
          <QualityDocumentGallery />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24" id="frequently-asked-questions">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <SectionKicker variant="brand">ARS Quality Policy</SectionKicker>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <FaqList items={faqs.map(({ question, answer }) => ({ question, answer }))} />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">Verify the quality</SectionKicker>
              <h2 className="section-title max-w-2xl text-white">
                Ask ARS for the proof your project needs.
              </h2>
              <p className="mt-4 max-w-[480px] text-[14px] leading-[1.7] text-white/70">
                Request test references, certifications, or technical support before you specify ARS steel.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/steel-testing"
                className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Explore ARS Steel Testing <ArrowRight size={15} />
              </Link>
              <Link
                href="/our-certification"
                className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                View certifications
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

    </main>
  );
}
