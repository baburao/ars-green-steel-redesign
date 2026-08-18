import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "ARS Steel Andhra Buy Now | ARS Green Steel",
  description: "Explore ARS CRS Fe 550D corrosion-resistant TMT steel and connect with ARS for buying support in Andhra Pradesh.",
  path: "/arssteel-andhra-buynow",
  image: "/ars-assets/products/ARS-CRS550D_hero-banner.jpg",
});

const informationSections = [
  {
    eyebrow: "CORROSION RESISTANCE",
    title: "Join the Corrosion Resistance movement. ARS CRS Fe 550D is here!",
    body: "It is here. A TMT Bar that retains its ductility while being corrosion and earthquake resistant. All thanks to the micro alloys, Copper, Chromium, Nickel and Molybdenum, added to the steel at optimal quantities.",
    points: [
      "ARS CRS Fe 550D can increase the life of any structure. It is much more imperative under certain specific conditions.",
      "550D CRS is highly recommended if the salt content in the ground water is >300 ppm.",
      "Seaside structures — reduces the diffusion of chloride ions in TMT bars.",
      "Suitable for super structures of all types of buildings where corrosion-related problems need to be reduced.",
    ],
    image: "/ars-assets/products/WhatAre_ARS-CRS-550D_TMTBars.jpg",
    alt: "ARS CRS Fe 550D TMT reinforcement bars",
  },
  {
    eyebrow: "SPECIFICATIONS",
    title: "Specifications that ensure truly strong structures!",
    body: "ARS CRS Fe 550D combines corrosion resistance, ductility, strength, concrete bonding, durability, and fire resistance in one reinforcement system.",
    points: [
      "Highest Corrosion Resistance CRE — 0.5% minimum",
      "High earthquake resistance — ductility 16 to 18%",
      "High strength — grade 560 N/mm² to 600 N/mm²",
      "High bonding with concrete through innovative angular lugs",
      "Increases the life and durability of a building by 3 times",
      "Higher fire resistance — FRE 0.18",
    ],
    image: "/ars-assets/TMT_Rod-CRS.png",
    alt: "Close-up of corrosion-resistant ARS TMT steel bars",
  },
  {
    eyebrow: "STRUCTURAL BENEFITS",
    title: "True benefits of ARS CRS Fe 550D",
    body: "The micro-alloyed CRS composition is designed to support durable structures during construction and throughout their service life, when combined with optimal construction practices.",
    points: [
      "Higher Corrosion Resistant Equivalent (CRE), average 0.5% — 20% higher than IS 1786-2008.",
      "Highest resistance to fire as the micro alloys increase the fire resistance equivalent.",
      "Reduced corrosion of steel during and after construction increases the life of the structure.",
      "Increases the life of the structure by 3 times with optimal construction practices.",
    ],
    image: "/ars-assets/logos/ARSCRS550D.png",
    alt: "ARS corrosion-resistant steel product image",
  },
] as const;

export default function ArsSteelAndhraBuyNowPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/products/ARS-CRS550D_hero-banner.jpg"
            alt="ARS CRS Fe 550D corrosion-resistant TMT steel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,13,30,0.96),rgba(6,13,30,0.72)_52%,rgba(6,13,30,0.28))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.92),transparent_60%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-16 pt-32">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
              <MapPin size={13} className="text-brand-red" aria-hidden="true" />
              ARS Steel Andhra Pradesh
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.025em] text-white">
              ARS Steel Andhra Buy Now
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/75">
              Explore corrosion-resistant ARS CRS Fe 550D TMT reinforcement steel and connect with ARS for buying support in Andhra Pradesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
                Request a quote <ArrowRight size={16} />
              </Link>
              <Link href="/our-network" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900">
                Find a dealer <MapPin size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-9">
        <div className="ars-container grid gap-5 sm:grid-cols-3">
          {[
            ["ARS CRS Fe 550D", "Corrosion-resistant TMT steel"],
            ["16–18%", "Ductility range stated in source"],
            ["CRE 0.5%", "Average corrosion resistance equivalent"],
          ].map(([value, label]) => (
            <div key={label} className="border-l-2 border-brand-red pl-5">
              <p className="font-display text-2xl font-extrabold text-brand-blue">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-grey-600">{label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      {informationSections.map((section, index) => (
        <MotionSection key={section.title} className={index % 2 === 0 ? "bg-white py-20 md:py-24" : "bg-surface-50 py-20 md:py-24"}>
          <div className="ars-container grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <SectionKicker variant="brand">{section.eyebrow}</SectionKicker>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">{section.title}</h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">{section.body}</p>
              <ul className="mt-7 grid gap-4">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[14px] leading-[1.7] text-steel-700">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative min-h-[320px] overflow-hidden rounded-2xl bg-ink-950 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image src={section.image} alt={section.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 to-transparent" />
            </div>
          </div>
        </MotionSection>
      ))}

      <MotionSection className="bg-ink-950 py-20 text-white md:py-24">
        <div className="ars-container grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionKicker variant="light">CUSTOMER SUCCESS STORY</SectionKicker>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08]">Build with confidence in Andhra Pradesh.</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white/70">We sell our TMT bars in a way that benefits our dealers, including a price protection scheme described in the source material.</p>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/OEVnlWpos1Q" title="ARS customer success story" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </MotionSection>

      <ContactCta eyebrow="ANDHRA PRADESH ENQUIRIES" headline="Ready to source ARS steel?" body="Connect with ARS for product information, buying support, or a project enquiry." primaryLabel="Request a quote" primaryHref="/request-quote" secondaryLabel="Find a dealer" secondaryHref="/our-network" />
    </main>
  );
}
