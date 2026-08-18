import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Factory,
  Landmark,
  MapPin,
  Network,
  ShieldCheck,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Projects | ARS Green Steel",
  description:
    "Project confidence, manufacturing capability, certification proof, dealer support, and enquiry paths for ARS Green Steel.",
  path: "/projects",
});

const projectTypes = [
  {
    title: "Residential supply",
    text: "Support home and apartment projects with product, rod size, price, and dealer confidence.",
    href: "/tmt-steel-bar-guide-homeowners",
    icon: Building2,
    image: "/ars-assets/home-owner-banner-1.png",
  },
  {
    title: "Commercial construction",
    text: "Help engineers and contractors evaluate grade selection, quality proof, and quantity planning.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    icon: Factory,
    image: "/ars-assets/ARSHOME2.jpg",
  },
  {
    title: "Bridge and infrastructure",
    text: "Support road, bridge, flyover, and public-work requirements with proof-led product confidence.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    icon: Landmark,
    image: "/ars-assets/ARSHOME4.jpg",
  },
];

const proofCards = [
  {
    title: "Manufacturing capability",
    text: "Show process, scale, plant context, and supply confidence before the project enquiry.",
    href: "/manufacturing",
    icon: Factory,
  },
  {
    title: "Certification proof",
    text: "Keep quality, testing, SGS, ISO, and approval routes easy for procurement review.",
    href: "/our-certification",
    icon: BadgeCheck,
  },
  {
    title: "Dealer network",
    text: "Help contractors and procurement teams understand local support and enquiry routing.",
    href: "/our-network",
    icon: Network,
  },
  {
    title: "Project enquiry",
    text: "Capture grade, bar size, quantity, site location, and timeline in one structured route.",
    href: "/request-quote",
    icon: ClipboardList,
  },
];

const reviewSteps = [
  "Understand project type",
  "Select product path",
  "Check certification proof",
  "Request quote or dealer support",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-surface-50">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#eaf1ff] to-transparent" />
        <div className="ars-page-hero-content h-full ars-container relative grid items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="max-w-4xl">
            <SectionKicker>Project confidence</SectionKicker>
            <h1 className="mt-7 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.96] tracking-normal text-ink-900">
              Proof for <span className="text-brand-red">serious builds</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-700 lg:text-xl lg:leading-9">
              Project buyers need capability, availability, and quality proof before they raise
              an enquiry. This page keeps those signals close to the next action.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="/request-quote"
              >
                Discuss project <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-brand-blue/20 bg-white px-7 text-base font-bold text-brand-blue shadow-[0_12px_34px_rgba(13,43,110,0.08)] transition hover:border-brand-blue hover:bg-[#edf5ff]"
                href="/our-certification"
              >
                View certifications
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-brand-blue/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-brand-blue/12 bg-white shadow-[0_26px_90px_rgba(13,43,110,0.13)]">
              <div className="relative h-[360px] bg-brand-blue">
                <Image
                  src="/ars-assets/ARSHOME4.jpg"
                  alt="ARS steel for infrastructure project confidence"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/88 via-[#060D1E]/32 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Project support
                  </p>
                  <p className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight text-white">
                    Capability, quality proof, and enquiry clarity in one flow.
                  </p>
                </div>
              </div>
              <div className="grid gap-0 border-t border-brand-blue/10 md:grid-cols-4">
                {[
                  ["550D", "Product grade"],
                  ["CRS", "Durability option"],
                  ["SGS", "Proof route"],
                  ["Quote", "Next action"],
                ].map(([value, label]) => (
                  <article key={label} className="border-b border-brand-blue/10 p-5 md:border-b-0 md:border-r last:border-r-0">
                    <p className="font-display text-3xl font-bold text-brand-blue">{value}</p>
                    <p className="mt-2 text-sm font-semibold text-steel-600">{label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24" id="project-types">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker>Project types</SectionKicker>
            <h2 className="section-title">Show capability without overclaiming.</h2>
            <p className="section-copy">
              Until confirmed project names and photographs are supplied, the page should focus
              on project categories, decision needs, and proof routes instead of invented case studies.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projectTypes.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_22px_70px_rgba(13,43,110,0.12)]"
                >
                  <div className="relative h-64 overflow-hidden bg-surface-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} ARS project type`}
                      fill
                      sizes="(min-width: 1024px) 31vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/66 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-[14px] bg-white text-brand-blue shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                      <Icon size={21} />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-3xl font-bold tracking-normal text-ink-900">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-steel-700">{card.text}</p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      View path <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="project-review">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.28fr] lg:items-center">
          <div className="max-w-xl">
            <SectionKicker>Evaluation path</SectionKicker>
            <h2 className="section-title section-title-light">What project buyers need before they call.</h2>
            <p className="section-copy section-copy-light">
              Project teams look for fewer claims and more confidence: product fit, specification
              proof, local support, and a clear enquiry path.
            </p>
            <div className="mt-10 h-px w-full bg-white/12" />
            <Link
              className="focus-ring mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
              href="/request-quote"
            >
              Start project enquiry <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid gap-4">
            {reviewSteps.map((step, index) => (
              <div
                key={step}
                className="grid items-center gap-5 rounded-[18px] border border-white/18 bg-white/[0.11] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:grid-cols-[44px_64px_minmax(0,1fr)] lg:p-6"
              >
                <span className="font-technical text-sm font-black tracking-[0.14em] text-white/42">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex size-14 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12">
                  {index === 0 ? <Building2 size={22} /> : index === 1 ? <ShieldCheck size={22} /> : index === 2 ? <BadgeCheck size={22} /> : <ClipboardList size={22} />}
                </span>
                <span className="block font-display text-xl font-bold tracking-normal text-white lg:text-2xl">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="trust-signals">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <SectionKicker>Trust signals</SectionKicker>
              <h2 className="section-title max-w-4xl">Turn project interest into a confident enquiry.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              These routes support the buyer&apos;s internal checklist: capability, certification,
              local support, and structured quote capture.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group flex min-h-[260px] flex-col justify-between rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35"
                >
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10 transition group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span>
                    <h3 className="font-display text-2xl font-bold text-ink-900">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-steel-700">{card.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      View proof <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Have a residential, commercial, or infrastructure requirement?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Share project type, delivery location, product grade, and approximate quantity so
              ARS can guide the next step.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/request-quote"
          >
            Request project quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
