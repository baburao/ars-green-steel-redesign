import { ArrowRight, BadgeCheck, Leaf, Recycle, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { ManufacturingProcessFlow } from "@/components/manufacturing-process-flow";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing | ARS Green Steel",
  description:
    "Explore ARS Green Steel manufacturing, facility capabilities, process flow, responsible production, and recognised industry standards.",
  path: "/manufacturing",
});

const facilityCapabilities = [
  {
    title: "Integrated Manufacturing",
    text: "Steel Making • Billet Casting • Rolling Mill • TMT Process • Quality Control • Dispatch — all managed within a single integrated facility.",
  },
  {
    title: "Advanced Manufacturing Technology",
    text: "Modern rolling mills, automated process controls, and precision equipment ensure consistent production across every batch.",
  },
  {
    title: "Production Capacity",
    text: "Built to support residential, commercial, industrial, and infrastructure projects with reliable manufacturing and uninterrupted supply.",
  },
  {
    title: "Supply & Distribution",
    text: "Strong dealer network and efficient logistics ensure timely deliveries across South India, with a growing presence nationwide.",
  },
  {
    title: "Product Range",
    text: "Manufacturing ARS Fe 550D and ARS CRS Fe 550D TMT bars in multiple diameters to suit diverse construction needs.",
  },
  {
    title: "Process Excellence",
    text: "Standardised manufacturing practices, continuous process monitoring, and controlled production at every stage for consistent results.",
  },
];

const processStages = [
  "Raw Material",
  "Steel Making",
  "Continuous Casting",
  "Billet Formation",
  "Rolling Mill",
  "Thermo Mechanical Treatment",
  "Cooling Bed",
  "Cutting & Bundling",
  "Dispatch",
];

const responsibleManufacturing = [
  {
    icon: Leaf,
    title: "Lower Carbon Production",
    text: "Our manufacturing process is designed to reduce carbon emissions by adopting cleaner steelmaking practices and improving energy efficiency across production.",
  },
  {
    icon: Recycle,
    title: "Responsible Use of Resources",
    text: "Recycled steel and efficient resource management help reduce the demand for virgin raw materials while supporting more sustainable manufacturing.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Operations",
    text: "Every improvement in energy efficiency contributes to lowering the environmental impact of steel manufacturing without affecting production performance.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Green Steel",
    text: "Our environmental performance is supported by internationally recognised certifications, including EPD, GreenPro, and SGBC Leader-rated Green Product certification.",
  },
];

const certificationCards = [
  {
    label: "BIS Certification",
    detail: "Manufactured to the Indian quality standard for TMT steel bars.",
    image: "/ars-assets/awards-certificates-img3.png",
  },
  {
    label: "EPD Verified",
    detail: "Environmental performance documented through an independently verified declaration.",
    image: "/ars-assets/awards-certificates-img2.png",
  },
  {
    label: "ISO 9001:2015",
    detail: "Quality management systems that support consistent manufacturing and continuous improvement.",
  },
  {
    label: "ISO 14001:2015",
    detail: "Environmental management practices integrated into responsible production.",
  },
  {
    label: "GreenPro",
    detail: "Recognised green product certification for sustainable construction materials.",
  },
  {
    label: "SGBC Leader Rated Green Product",
    detail: "Four-tick recognition for responsible and sustainable steel manufacturing.",
  },
  {
    label: "GRIHA Listed",
    detail: "Listed for use in sustainable building and green construction projects.",
  },
  {
    label: "NISST Green Steel Taxonomy Certificate",
    detail: "Recognised under India's Green Steel Taxonomy framework.",
  },
] as const;

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:max-h-[680px] lg:min-h-[680px]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/ars-assets/about/ARS-Manufacturing-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        </div>

        <div className="ars-container relative z-10 w-full pb-16 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Manufacturing
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
              Built with
              <br />
              <span className="italic text-brand-red">precision.</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-white/72 md:text-lg">
              Every ARS TMT bar is manufactured in our integrated facility, where advanced technology,
              process discipline, and decades of expertise come together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" id="facility">
        <div className="ars-container">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
            <div>
              <SectionKicker variant="brand">Our facility</SectionKicker>
              <h2 className="section-title">Built to Deliver at Scale.</h2>
              <p className="section-copy max-w-2xl">
                Every ARS TMT bar is manufactured at our integrated steel facility, where every stage—from
                steel making to dispatch—is managed with precision. The result is consistent production,
                dependable supply, and the capability to support projects of every size.
              </p>
            </div>

            <figure className="relative mx-auto aspect-square w-full max-w-[588px] overflow-hidden rounded-[20px] border border-brand-blue/10 bg-surface-50 shadow-[var(--shadow-soft)]">
              <Image
                src="/ars-assets/about/Manufacturing-our-facility.jpg"
                alt="TMT bars moving through the ARS manufacturing cooling line"
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 70vw, calc(100vw - 40px)"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="mt-14 grid border-l border-t border-brand-blue/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {facilityCapabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="relative border-b border-r border-brand-blue/12 bg-white p-6 md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-technical text-xs font-black tracking-[0.18em] text-brand-red"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink-900">
                  {capability.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 lg:py-28" id="process-flow">
        <div className="ars-container">
          <div className="max-w-4xl">
            <SectionKicker variant="brand">Process flow</SectionKicker>
            <h2 className="section-title">How ARS Steel Takes Shape.</h2>
            <p className="section-copy">
              Every ARS TMT bar follows a carefully planned manufacturing process that transforms high-quality
              raw materials into steel designed for strength, durability, and dependable performance.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
            <figure className="relative min-h-64 overflow-hidden rounded-[20px] bg-ink-950 md:min-h-[360px]">
              <Image
                src="/ars-assets/blog-banners/demystifying-manufacturing-process-of-tmt-bars/demystifying.webp"
                alt="Heated ribbed steel bar moving through rolling equipment"
                fill
                sizes="(min-width: 768px) 54vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
            </figure>
            <figure className="relative min-h-64 overflow-hidden rounded-[20px] bg-ink-950 md:min-h-[360px]">
              <Image
                src="/ars-assets/blog-banners/manufacturing-process-of-tmt-bar/tmt-bars-manufacturing.jpeg"
                alt="Hot steel bar passing through the rolling process"
                fill
                sizes="(min-width: 768px) 46vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
            </figure>
          </div>

          <ManufacturingProcessFlow stages={processStages} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="responsible-manufacturing">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(255,255,255,0.11),transparent_30%),linear-gradient(135deg,#0D2B6E,#08245F)]" />
        <div className="ars-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <SectionKicker variant="light">Responsible manufacturing</SectionKicker>
              <h2 className="section-title section-title-light max-w-3xl">
                Building Better Steel Starts with How It&apos;s Made.
              </h2>
            </div>
            <p className="section-copy section-copy-light section-copy-flush max-w-2xl lg:justify-self-end">
              The environmental impact of steel is shaped long before it reaches a construction site. At ARS,
              we focus on making every stage of manufacturing more efficient—using cleaner production methods,
              responsible resource management, and lower-emission processes to produce Green Steel for the
              future of construction.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-white/15 bg-white/15 md:grid-cols-2">
            {responsibleManufacturing.map((item) => {
              const Icon = item.icon;

              return (
              <article key={item.title} className="bg-brand-blue/90 p-6 md:p-8 lg:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-brand-red" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">{item.text}</p>
              </article>
              );
            })}
          </div>

          <p className="mt-10 max-w-2xl text-lg font-bold leading-8 text-white md:text-xl">
            Because stronger buildings deserve steel that&apos;s made responsibly.
          </p>
          <Link
            href="/green-steel"
            className="focus-ring mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            <span>Explore ARS Green Steel</span>
            <ArrowRight aria-hidden="true" className="shrink-0" size={20} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" id="standards">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Built to global standards</SectionKicker>
              <h2 className="section-title max-w-4xl">Manufactured to Recognised Industry Standards.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Every stage of manufacturing follows established systems and recognised industry standards that
              support consistency, responsible production, and continuous improvement. These certifications
              reflect how we manufacture—not just what we produce.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="grid gap-4 sm:grid-cols-2">
              {certificationCards.slice(0, 2).map((item) => (
                <article key={item.label} className="group grid min-h-[290px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[170px_1fr]">
                  <div className="overflow-hidden bg-white p-5">
                    {"image" in item ? <Image src={item.image} alt={`${item.label} ARS certification`} width={368} height={523} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" /> : null}
                  </div>
                  <div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white">
                    <h3 className="font-display text-xl font-bold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificationCards.slice(2).map((item) => (
                <article key={item.label} className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10">
                    <BadgeCheck size={21} />
                  </span>
                  <h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel-700">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Link href="/our-certification" className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
              View certifications and awards <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(13,43,110,0.65),transparent_34%)]" />
        <div className="ars-container relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.25rem,4.4vw,3.8rem)] font-bold leading-[1.05] text-white">
              See the Manufacturing Behind the Steel.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              Whether you&apos;re planning a home, a commercial development, or a large infrastructure project,
              our team can help you understand our manufacturing capabilities, production capacity, and supply
              network.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/products"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              Explore Products <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="/contact#enquiry"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/24 px-8 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
