import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { DealerLocatorExperience } from "@/components/dealer-locator-experience";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, verifiedContactDetails } from "@/data/business-verification";
import { dealers } from "@/data/dealers";

export const metadata = createPageMetadata({
  title: "Dealer Locator | ARS Green Steel",
  description: "Search ARS Green Steel dealer records by city, district, pincode, or dealer name.",
  path: "/our-network",
});

const dealerStats = [
  {
    value: dealers.length.toLocaleString("en-IN"),
    label: "Dealer records",
  },
  {
    value: new Set(dealers.map((dealer) => dealer.city).filter(Boolean)).size.toLocaleString("en-IN"),
    label: "City entries",
  },
  {
    value: new Set(dealers.map((dealer) => dealer.district).filter(Boolean)).size.toLocaleString("en-IN"),
    label: "Districts",
  },
  {
    value: dealers.filter((dealer) => dealer.phone).length.toLocaleString("en-IN"),
    label: "Mobile contacts",
  },
];

export default function DealerLocatorPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-[#071226] text-white">
        <Image
          src="/ars-assets/Contact_banner.png"
          alt="ARS dealer locator support"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.58]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.92)_0%,rgba(6,13,30,0.72)_42%,rgba(6,13,30,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(222,18,26,0.22),transparent_28%),linear-gradient(180deg,rgba(6,13,30,0.1),rgba(6,13,30,0.5))]" />

        <div className="ars-page-hero-content h-full ars-container relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_0.75fr] lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-bold text-white/82 backdrop-blur">
              <MapPin size={16} className="text-brand-red" />
              Dealer locator
            </div>
            <h1 className="mt-7 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-normal text-white">
              Find ARS steel <span className="text-brand-red">near you.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 lg:text-xl lg:leading-9">
              Search the ARS dealer list by city, district, pincode, or dealer name and move from
              product interest to local purchase support faster.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="#dealer-search"
              >
                Search dealers <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/24 bg-white/8 px-7 text-base font-bold text-white backdrop-blur transition hover:border-white/42 hover:bg-white/12"
                href="/request-quote"
              >
                Request quote
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/16 bg-white/10 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.26)] backdrop-blur-md lg:p-6">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.22em] text-white/58">
              Dealer sheet summary
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dealerStats.map((stat) => (
                <article key={stat.label} className="rounded-[16px] border border-white/14 bg-white/9 p-5">
                  <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-white/64">{stat.label}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-white/58">
              Final public phone numbers and addresses should be verified by ARS before launch.
            </p>
          </div>
        </div>
      </section>

      <DealerLocatorExperience dealers={dealers} />

      <section className="bg-brand-blue py-16 text-white lg:py-20">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.78fr_auto] lg:items-center">
          <div>
            <SectionKicker variant="light">Need dealer support?</SectionKicker>
            <h2 className="section-title section-title-light mt-5 max-w-3xl">
              Share your project need and let ARS guide the next step.
            </h2>
            <p className="section-copy section-copy-light mt-5 max-w-2xl">
              If the nearest dealer record needs confirmation, the ARS team can help with product,
              location, and quote support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
              href="/request-quote"
            >
              Request quote <ArrowRight size={18} />
            </Link>
            <a
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/24 bg-white/8 px-7 text-base font-bold text-white transition hover:bg-white/12"
              href={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}
            >
              <Phone size={18} />
              Call ARS
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="ars-container rounded-[18px] border border-brand-blue/10 bg-surface-50 p-5 text-sm leading-7 text-steel-700">
          <strong className="text-ink-900">Client verification note:</strong>{" "}
          {clientVerificationSummary.contact}
        </div>
      </section>

    </main>
  );
}
