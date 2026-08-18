import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelPriceLookup } from "@/components/steel-price-lookup";
import { clientVerificationSummary } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "Steel Price Today | ARS Green Steel",
  description:
    "ARS Green Steel TMT bar price context by size, with calculator, dealer, and quote paths for current pricing.",
  path: "/tmt-steel-price-today",
});

const stats = [
  { value: "Step 01", label: "Select Region", sub: "Choose the region for your price lookup." },
  { value: "Step 02", label: "Check Price", sub: "Review current ARS TMT price guidance." },
  { value: "Step 03", label: "Estimate Quantity", sub: "Calculate the quantity your project needs." },
  { value: "Step 04", label: "Request Quote", sub: "Share your requirement for an accurate quotation." },
];

const nextSteps = [
  {
    icon: <ClipboardList size={20} />,
    title: "Explore Products",
    desc: "Compare ARS TMT products and find the right grade for your project.",
    cta: "View products",
    href: "/products",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find dealer",
    desc: "Use your location to discover nearby ARS supply support.",
    cta: "Find a dealer",
    href: "/our-network",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Request quote",
    desc: "Share size, quantity, and site location for current pricing.",
    cta: "Request quote",
    href: "/request-quote",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Verify quality",
    desc: "Review product proof before making price the only factor.",
    cta: "View proof",
    href: "/our-certification",
  },
];

export default function SteelPriceTodayPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/SteelPriceHeroBanner.jpg"
            alt="ARS TMT steel bars"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0.65) 50%, rgba(6,13,30,0.2) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, transparent 55%)" }}
          />
        </div>

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />TMT Steel Price Today</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.025em] text-white">
              Know Today&apos;s Price.
              <br />
              <span className="italic text-brand-red">Build with Confidence.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Stay updated with the latest ARS TMT steel prices, compare available bar sizes, estimate your
              project requirements, and request an accurate quotation—all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Get Today&apos;s Price <ArrowRight size={14} />
              </a>
              <a
                href="/tmt-steel-calculator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                <Calculator size={14} /> Steel Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {s.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {s.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Price table ── */}
      <MotionSection className="bg-white py-24" id="price-table">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Price Table</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Find your size, then get today&apos;s rate.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              {clientVerificationSummary.pricing}
            </p>
          </div>

          <SteelPriceLookup />
        </div>
      </MotionSection>

      {/* ── Next steps ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Next Steps</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Do more than check a number.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Price is one input. Estimate your requirement, find a dealer, verify quality, or move straight
              to a quote.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((a) => (
              <a
                key={a.title}
                href={a.href}
                className="focus-ring group flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-[16px] font-bold text-ink-900">{a.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-grey-600">{a.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                  {a.cta} <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </MotionSection>

    </main>
  );
}
