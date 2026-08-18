import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  HardHat,
  Home,
  Landmark,
  MapPinned,
  Store,
  Users,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Industries | ARS Green Steel",
  description:
    "ARS Green Steel application paths for home owners, engineers, contractors, dealers, residential, commercial, and infrastructure projects.",
  path: "/industries",
});

const audienceCards = [
  {
    label: "Home owners",
    text: "Simple steel guidance for safer homes, clear prices, and nearby dealer access.",
    href: "/tmt-steel-bar-guide-homeowners",
    image: "/ars-assets/home-owner-banner-1.png",
    icon: Home,
  },
  {
    label: "Engineers",
    text: "Grade, testing, certification, and application proof for confident specification.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    image: "/ars-assets/our-quality-1.png",
    icon: HardHat,
  },
  {
    label: "Contractors",
    text: "Fast access to price, quantity planning, bar sizes, and project support.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    image: "/ars-assets/ARSHOME1.jpg",
    icon: Factory,
  },
  {
    label: "Dealers",
    text: "A clearer route from local demand to product visibility and business enquiries.",
    href: "/steel-distributors-dealers",
    image: "/ars-assets/products-all.png",
    icon: Store,
  },
];

const applicationCards = [
  {
    title: "Residential construction",
    text: "TMT steel paths for homes, apartments, slabs, beams, and columns.",
    href: "/tmt-steel-bar-guide-homeowners",
    icon: Building2,
    image: "/ars-assets/TMT-Bars.png",
  },
  {
    title: "Commercial buildings",
    text: "Specification, quality proof, and quote support for larger construction decisions.",
    href: "/projects",
    icon: Factory,
    image: "/ars-assets/ARSHOME2.jpg",
  },
  {
    title: "Roads and infrastructure",
    text: "Project support for contractors and teams handling heavier reinforcement needs.",
    href: "/projects#bridge-phase-2",
    icon: MapPinned,
    image: "/ars-assets/ARSHOME1.jpg",
  },
  {
    title: "Bridges and flyovers",
    text: "Durability, grade confidence, and certification-led proof for public-work review.",
    href: "/projects",
    icon: Landmark,
    image: "/ars-assets/ARSHOME4.jpg",
  },
];

const journeySteps = [
  "Identify the buyer type",
  "Match the product grade",
  "Check price or calculate need",
  "Move into dealer or quote support",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-surface-50">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#eaf1ff] to-transparent" />
        <div className="ars-page-hero-content h-full ars-container relative grid items-center gap-12 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:py-24">
          <div className="max-w-4xl">
            <SectionKicker>Industries and applications</SectionKicker>
            <h1 className="mt-7 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.96] tracking-normal text-ink-900">
              Steel journeys for <span className="text-brand-red">every buyer</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-700 lg:text-xl lg:leading-9">
              The industry experience should route each visitor to the proof, product,
              and next action they need without making everyone decode the same pages.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="/products"
              >
                Choose product <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-brand-blue/20 bg-white px-7 text-base font-bold text-brand-blue shadow-[0_12px_34px_rgba(13,43,110,0.08)] transition hover:border-brand-blue hover:bg-[#edf5ff]"
                href="/request-quote"
              >
                Request quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-brand-blue/8 blur-3xl" />
            <div className="relative grid gap-4 rounded-[24px] border border-brand-blue/12 bg-white p-4 shadow-[0_26px_90px_rgba(13,43,110,0.13)]">
              {journeySteps.map((step, index) => (
                <div key={step} className="grid items-center gap-4 rounded-[16px] border border-brand-blue/10 bg-surface-50 p-4 sm:grid-cols-[52px_minmax(0,1fr)_40px]">
                  <span className="font-technical text-sm font-black tracking-[0.16em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl font-bold text-ink-900">{step}</p>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand-blue ring-1 ring-brand-blue/10">
                    <ArrowRight size={17} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24" id="audience-paths">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker>Audience paths</SectionKicker>
            <h2 className="section-title">One website, four clear journeys.</h2>
            <p className="section-copy">
              Each audience sees a different reason to trust ARS: home safety, technical
              proof, project speed, or dealer opportunity.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {audienceCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.label}
                  href={card.href}
                  className="focus-ring group relative flex min-h-[460px] overflow-hidden rounded-[18px] bg-ink-900 p-6 text-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(13,43,110,0.16)]"
                >
                  <Image
                    src={card.image}
                    alt={`${card.label} ARS audience`}
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover opacity-78 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/92 via-[#060D1E]/34 to-transparent" />
                  <div className="relative z-10 mt-auto">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
                      <Icon size={16} />
                      {card.label}
                    </span>
                    <h3 className="font-display text-3xl font-bold leading-tight text-white">
                      ARS for {card.label.toLowerCase()}.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{card.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white">
                      View journey <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="applications">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.88fr_1fr]">
            <div>
              <SectionKicker>Applications</SectionKicker>
              <h2 className="section-title max-w-4xl">Match steel choice to construction context.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Application cards help buyers understand where ARS steel fits before they compare
              product grades, technical proof, price, or dealer support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {applicationCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group grid overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 lg:grid-cols-[0.46fr_0.54fr]"
                >
                  <div className="relative min-h-[230px] bg-surface-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} application`}
                      fill
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/44 to-transparent" />
                  </div>
                  <div className="flex min-h-[260px] flex-col justify-between p-7">
                    <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10">
                      <Icon size={22} />
                    </span>
                    <span>
                      <h3 className="font-display text-3xl font-bold text-ink-900">{card.title}</h3>
                      <p className="mt-4 text-base leading-7 text-steel-700">{card.text}</p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                        Explore application <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionKicker>Buyer confidence</SectionKicker>
            <h2 className="section-title section-title-light">Every application needs proof nearby.</h2>
            <p className="section-copy section-copy-light">
              Industry pages should not only describe use cases. They should move visitors
              toward product proof, calculator support, dealer discovery, or a quote request.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["550D", "Core TMT product path"],
              ["CRS", "Corrosion-resistant option"],
              ["SGS", "Certification proof route"],
              ["Quote", "Project enquiry path"],
            ].map(([value, label]) => (
              <article key={label} className="rounded-[18px] border border-white/16 bg-white/[0.1] p-6">
                <p className="font-display text-[clamp(2.4rem,4vw,4.2rem)] font-bold leading-none text-white">
                  {value}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/66">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Need the right steel path for your project?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Share the project type, site location, and product need. ARS can route you to the
              right price, dealer, product, or quote conversation.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/request-quote"
          >
            Request quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
