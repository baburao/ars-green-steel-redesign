import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ClipboardList,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Store,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, verifiedContactDetails } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "Services | ARS Green Steel",
  description:
    "Steel price, TMT calculator, dealer locator, quote request, and sales support for ARS Green Steel buyers.",
  path: "/services",
});

const primaryRoutes = [
  {
    title: "Check price",
    text: "Review the prepared TMT steel price journey before speaking with sales.",
    href: "/tmt-steel-price-today",
    icon: IndianRupee,
  },
  {
    title: "Calculate steel",
    text: "Estimate requirement by project type, built-up area, floors, and bar size.",
    href: "/tmt-steel-calculator",
    icon: Calculator,
  },
  {
    title: "Find dealer",
    text: "Move from product interest to nearby ARS dealer discovery.",
    href: "/our-network",
    icon: MapPin,
  },
  {
    title: "Request quote",
    text: "Share project needs and let the ARS team guide the next step.",
    href: "/request-quote",
    icon: ClipboardList,
  },
];

const serviceCards = [
  {
    title: "Price assistance",
    text: clientVerificationSummary.pricing,
    href: "/tmt-steel-price-today",
    image: "/ars-assets/products-all.png",
    icon: Search,
    points: ["Size-led pricing context", "Current rate request path", "Quote-ready next step"],
  },
  {
    title: "Requirement planning",
    text: clientVerificationSummary.calculator,
    href: "/tmt-steel-calculator",
    image: "/ars-assets/TMT-Bars.png",
    icon: Ruler,
    points: ["Project-type inputs", "Bar-size guidance", "Sales conversation support"],
  },
  {
    title: "Dealer support",
    text: clientVerificationSummary.dealer,
    href: "/our-network",
    image: "/ars-assets/Contact_banner.png",
    icon: Store,
    points: ["Location-led route", "Local availability support", "Dealer enquiry handoff"],
  },
];

const supportCards = [
  {
    title: "Product proof",
    text: "Review ARS Fe 550D and CRS 550D product paths before selecting a grade.",
    href: "/products",
    icon: ShieldCheck,
  },
  {
    title: "Quality documents",
    text: "Use certification and testing pages to support technical review.",
    href: "/our-certification",
    icon: BadgeCheck,
  },
  {
    title: "Direct contact",
    text: `Call ${verifiedContactDetails.mobile} for sales and project support.`,
    href: "/contact",
    icon: Phone,
  },
  {
    title: "Enquiry form",
    text: "Send product, quantity, site, and project details in one structured request.",
    href: "/request-quote",
    icon: Mail,
  },
];

const proofStats = [
  { value: "4", label: "Primary buyer routes", detail: "Price, calculator, dealer, and quote paths stay visible." },
  { value: "8-32", label: "Bar size range", detail: "Common ARS rod sizes connect tools to real buying decisions." },
  { value: "550D", label: "Product clarity", detail: "Core TMT and CRS options lead into product proof pages." },
  { value: "SGS", label: "Proof nearby", detail: "Certification cues remain close to high-intent actions." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-surface-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eaf1ff] to-transparent" />
        <div className="ars-page-hero-content h-full ars-container relative grid items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div className="max-w-4xl">
            <SectionKicker>Buying assistance</SectionKicker>
            <h1 className="mt-7 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.96] tracking-normal text-ink-900">
              From enquiry to <span className="text-brand-red">steel</span> in fewer steps.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-700 lg:text-xl lg:leading-9">
              Give every buyer a practical next action: check price, calculate requirement,
              find a dealer, or request a quote with product proof close by.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="/request-quote"
              >
                Get your quote now <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-brand-blue/20 bg-white px-7 text-base font-bold text-brand-blue shadow-[0_12px_34px_rgba(13,43,110,0.08)] transition hover:border-brand-blue hover:bg-[#edf5ff]"
                href="/tmt-steel-price-today"
              >
                Check steel price <Search size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-brand-blue/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-brand-blue/12 bg-white shadow-[0_26px_90px_rgba(13,43,110,0.13)]">
              <div className="relative h-[250px] overflow-hidden bg-brand-blue lg:h-[320px]">
                <Image
                  src="/ars-assets/ARSHOME1.jpg"
                  alt="ARS steel support for construction projects"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/78 via-[#060D1E]/24 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Service hub
                  </p>
                  <p className="mt-2 max-w-md font-display text-3xl font-bold leading-tight text-white">
                    One place for price, planning, dealer, and quote support.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                {primaryRoutes.map((route, index) => {
                  const Icon = route.icon;

                  return (
                    <Link
                      key={route.title}
                      href={route.href}
                      className="focus-ring group rounded-[16px] border border-brand-blue/10 bg-surface-50 p-4 transition hover:-translate-y-0.5 hover:border-brand-blue/32 hover:bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-technical text-xs font-black tracking-[0.16em] text-brand-red">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex size-10 items-center justify-center rounded-[12px] bg-white text-brand-blue ring-1 ring-brand-blue/10">
                          <Icon size={18} />
                        </span>
                      </div>
                      <p className="mt-4 font-display text-xl font-bold text-ink-900">{route.title}</p>
                      <p className="mt-2 text-sm leading-6 text-steel-600">{route.text}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24" id="service-routes">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker>Service routes</SectionKicker>
            <h2 className="section-title">Choose the support path that matches the buyer moment.</h2>
            <p className="section-copy">
              ARS service pages should reduce hesitation, not add another layer of reading.
              Each route connects product interest to a practical next action.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_22px_70px_rgba(13,43,110,0.12)]"
                >
                  <div className="relative h-52 overflow-hidden bg-surface-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} service`}
                      fill
                      sizes="(min-width: 1024px) 31vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/56 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-[14px] bg-white text-brand-blue shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                      <Icon size={21} />
                    </span>
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="font-display text-3xl font-bold tracking-normal text-ink-900">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-steel-700">{card.text}</p>
                    <div className="mt-6 grid gap-3">
                      {card.points.map((point) => (
                        <span key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                          <BadgeCheck size={17} className="shrink-0 text-green-steel" />
                          {point}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      View service <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="fastest-route">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.28fr] lg:gap-16">
            <div className="max-w-xl">
              <SectionKicker>Fastest route</SectionKicker>
              <h2 className="section-title section-title-light">A cleaner route from question to action.</h2>
              <p className="section-copy section-copy-light">
                Buyers do not need to decode the whole website first. Give them the shortest
                useful path, then let product and proof pages support the decision.
              </p>
              <div className="mt-10 h-px w-full bg-white/12" />
              <Link
                className="focus-ring mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="/request-quote"
              >
                Start with a quote <ArrowRight size={19} />
              </Link>
            </div>

            <div className="grid gap-4">
              {primaryRoutes.map((route, index) => {
                const Icon = route.icon;

                return (
                  <Link
                    key={route.title}
                    href={route.href}
                    className="focus-ring group grid items-center gap-5 rounded-[18px] border border-white/18 bg-white/[0.11] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.16] sm:grid-cols-[44px_72px_minmax(0,1fr)_24px] lg:p-6"
                  >
                    <span className="font-technical text-sm font-black tracking-[0.14em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex size-14 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12 transition group-hover:bg-white/20">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-xl font-bold tracking-normal text-white lg:text-2xl">
                        {route.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-white/66 lg:text-base">
                        {route.text}
                      </span>
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-white/42 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="support">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <SectionKicker>Support proof</SectionKicker>
              <h2 className="section-title max-w-4xl">Service support should carry proof with it.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Every high-intent path should make ARS easier to trust: product grade, quality
              documentation, contact route, and enquiry clarity stay connected.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group flex min-h-[250px] flex-col justify-between rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35"
                >
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10 transition group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span>
                    <h3 className="font-display text-2xl font-bold text-ink-900">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-steel-700">{card.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      Open path <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[18px] border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)] md:grid-cols-4">
            {proofStats.map((stat) => (
              <article key={stat.label} className="border-b border-brand-blue/10 p-6 md:border-b-0 md:border-r last:border-r-0">
                <p className="font-display text-[clamp(2.2rem,4vw,4rem)] font-bold leading-none text-brand-blue">
                  {stat.value}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{stat.label}</h3>
                <p className="mt-3 text-sm leading-6 text-steel-600">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-brand-blue text-white">
        <div className="ars-container grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="font-technical text-xs font-black uppercase tracking-[0.24em] text-white/50">
              Get started today
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.02] text-white">
              Ready to source quality <span className="text-brand-red">green steel?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/64 lg:text-lg lg:leading-8">
              Talk to the ARS team, check today&apos;s price, or find your nearest certified
              dealer in fewer steps.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
              href="/tmt-steel-price-today"
            >
              Check today&apos;s price <ArrowRight size={18} />
            </Link>
            <Link
              className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/26 px-7 text-base font-bold text-white transition hover:border-white hover:bg-white hover:text-brand-blue"
              href={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}
            >
              <Phone size={18} />
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
