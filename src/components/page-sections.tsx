import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

type HeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showActions?: boolean;
  /** Retained for compatibility with source-led callers; global H1 casing is now standardized. */
  preserveTitleCase?: boolean;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  backgroundImagePosition?: string;
};

type Card = {
  title: string;
  text: string;
  href?: string;
  meta?: string;
  icon?: LucideIcon;
  points?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  primaryLabel = "Request quote",
  primaryHref = "/request-quote",
  secondaryLabel = "Talk to sales",
  secondaryHref = "/contact",
  showActions = true,
  backgroundImageSrc,
  backgroundImageAlt = "",
  backgroundImagePosition = "center",
}: HeroProps) {
  return (
    <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden text-white">
      <div className="absolute inset-0 bg-ink-950">
        {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: backgroundImagePosition }}
          />
        ) : (
          <>
            <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
            <video className="absolute inset-0 h-full w-full object-cover opacity-85" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src="/videos/ars-intro.mp4" type="video/mp4" />
            </video>
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
      </div>

      <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
            <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="max-w-4xl break-words font-display text-white">
            {title}
            {accent ? <span className="block font-serif italic text-[var(--text-accent-dark)]">{accent}</span> : null}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">{body}</p>
          {showActions ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href={primaryHref}>
                {primaryLabel} <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900" href={secondaryHref}>
                {secondaryLabel} <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PageShell({
  children,
  hero,
}: {
  children: ReactNode;
  hero: HeroProps;
}) {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero {...hero} />
      {children}
      <ContactCta />
    </main>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-intro">
      <div>
        <SectionKicker>{eyebrow}</SectionKicker>
        <h2 className="section-title">
          {title}
        </h2>
      </div>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  );
}

export function CardGrid({ cards, columns = 3 }: { cards: Card[]; columns?: 2 | 3 | 4 }) {
  const gridClass = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <div className={`grid gap-5 md:grid-cols-2 ${gridClass}`}>
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <article className="group flex min-h-[250px] flex-col justify-between rounded-[8px] border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-brand-blue/35">
            <div>
              {card.imageSrc ? (
                <div className="-mx-2 mb-7 h-44 overflow-hidden rounded-[8px] bg-[#f8f9fb]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt ?? card.title}
                    width={560}
                    height={360}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="mb-9 flex items-center justify-between">
                {Icon ? (
                  <span className="inline-flex size-14 items-center justify-center rounded-[8px] bg-[#f8f9fb] text-brand-blue ring-1 ring-ink-900/8">
                    <Icon size={22} />
                  </span>
                ) : (
                  <span className="h-[2px] w-12 bg-brand-blue" />
                )}
                {card.meta ? <span className="font-technical text-xs font-bold uppercase tracking-[0.22em] text-grey-600">{card.meta}</span> : null}
              </div>
              <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">{card.title}</h3>
              <p className="mt-5 text-base leading-7 text-steel-700">{card.text}</p>
              {card.points ? (
                <div className="mt-7 grid gap-3">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                      <BadgeCheck size={17} className="shrink-0 text-green-steel" />
                      {point}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {card.href ? (
              <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                View details <ArrowRight size={17} />
              </span>
            ) : null}
          </article>
        );

        return card.href ? (
          <a key={card.title} className="focus-ring block" href={card.href}>{content}</a>
        ) : (
          <div key={card.title}>{content}</div>
        );
      })}
    </div>
  );
}

export function ContentBand({
  id,
  eyebrow,
  title,
  body,
  cards,
  tone = "surface",
  columns,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body?: string;
  cards: Card[];
  tone?: "surface" | "white" | "warm";
  columns?: 2 | 3 | 4;
}) {
  const bg = tone === "white" ? "bg-white" : tone === "warm" ? "bg-[#fffdfa]" : "bg-[#f8f9fb]";

  return (
    <MotionSection className={`${bg} py-24`} id={id}>
      <div className="ars-container">
        <SectionIntro eyebrow={eyebrow} title={title} body={body} />
        <CardGrid cards={cards} columns={columns} />
      </div>
    </MotionSection>
  );
}

export function ProofMetrics({
  metrics,
  tone = "white",
}: {
  metrics: { kicker: string; value: string; label: string }[];
  tone?: "surface" | "white";
}) {
  return (
    <MotionSection className={`${tone === "white" ? "bg-white" : "bg-[#f8f9fb]"} py-20`}>
      <div className="ars-container">
        <div className="grid border-y border-ink-900/14 md:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.kicker} className="border-b border-ink-900/14 py-8 md:border-b-0 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0">
              <div className="mb-6 flex items-center gap-2">
                <span className="text-brand-blue">-&gt;</span>
                <p className="font-technical text-xs font-bold uppercase tracking-[0.28em] text-grey-600">{metric.kicker}</p>
              </div>
              <p className="font-display text-[clamp(2.7rem,4.4vw,4.8rem)] font-black leading-none text-ink-900">{metric.value}</p>
              <p className="mt-5 max-w-xs text-base leading-7 text-steel-700">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
