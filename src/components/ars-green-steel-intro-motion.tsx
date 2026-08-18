"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Leaf, Sparkles } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";

const ease = [0.22, 1, 0.36, 1] as const;

type HeroIntroMotionProps = {
  kicker: ReactNode;
  title: string;
  body: string;
  actions: ReactNode;
};

type AboutIntroMotionProps = {
  kicker: ReactNode;
  title: string;
  paragraphs: readonly string[];
  checklist: readonly string[];
  imageSrc: string;
  imageAlt: string;
  caption: string;
};

function reveal(reduceMotion: boolean | null, y: number, delay: number, duration: number) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration, delay, ease },
  };
}

export function HeroIntroMotion({ kicker, title, body, actions }: HeroIntroMotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="max-w-4xl">
      <motion.div {...reveal(reduceMotion, 14, 0.08, 0.46)}>{kicker}</motion.div>
      <motion.h1
        className="mt-7 max-w-4xl font-display font-extrabold leading-[0.98] text-white"
        {...reveal(reduceMotion, 22, 0.16, 0.7)}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-lg"
        {...reveal(reduceMotion, 18, 0.26, 0.6)}
      >
        {body}
      </motion.p>
      <motion.div
        className="mt-9 flex flex-wrap gap-3"
        {...reveal(reduceMotion, 14, 0.34, 0.54)}
      >
        {actions}
      </motion.div>
    </div>
  );
}

export function AboutIntroMotion({
  kicker,
  title,
  paragraphs,
  checklist,
  imageSrc,
  imageAlt,
  caption,
}: AboutIntroMotionProps) {
  const reduceMotion = useReducedMotion();
  const viewport = { once: true, amount: 0.18 } as const;
  const revealOnView = (y: number, delay: number, duration: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: reduceMotion ? { duration: 0 } : { duration, delay, ease },
  });

  return (
    <section className="bg-[#F6F8F1] py-20 lg:py-28">
      <div className="ars-container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
        <div>
          <motion.div {...revealOnView(16, 0, 0.46)}>{kicker}</motion.div>
          <motion.h2
            className="section-title max-w-3xl"
            {...revealOnView(22, 0.08, 0.66)}
          >
            {title}
          </motion.h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-steel-700 lg:text-lg">
            {paragraphs.map((paragraph, index) => (
              <motion.p key={paragraph} {...revealOnView(18, 0.16 + index * 0.08, 0.58)}>
                {paragraph}
              </motion.p>
            ))}
          </div>
          <motion.ul
            className="mt-9 grid gap-3 border-l-2 border-green-steel bg-white p-6 shadow-[0_16px_38px_rgba(18,61,43,0.06)] md:p-7"
            {...revealOnView(18, 0.4, 0.58)}
          >
            {checklist.map((item, index) => (
              <motion.li
                key={item}
                className="flex gap-3 text-sm font-semibold leading-6 text-ink-900"
                {...revealOnView(12, 0.46 + index * 0.07, 0.48)}
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-steel" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.figure
          className="relative min-h-[520px] overflow-hidden bg-[#123D2B]"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.72, delay: 0.18, ease }}
        >
          <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A1E]/88 via-transparent to-transparent" />
          <motion.figcaption
            className="absolute inset-x-7 bottom-7 border-l-2 border-green-steel pl-5 text-lg font-bold text-white"
            {...revealOnView(14, 0.48, 0.52)}
          >
            {caption}
          </motion.figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

const performancePillars = [
  {
    icon: Sparkles,
    title: "Ductility",
    body: "Every ARS Green Steel bar meets 100% D-Quality classification and is IS 13920-compliant, with a minimum TS/YS ratio of 1.15 — the threshold required for seismic-resistant construction.",
  },
  {
    icon: Leaf,
    title: "Green Steel",
    body: "Produced through a recycled scrap, electric arc furnace route, with an EPD-verified emission intensity of 592 kg CO₂e per tonne — a fraction of the conventional blast-furnace figure.",
  },
] as const;

export function WhyGreenSteelMotion() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: true, amount: 0.18 } as const;
  const revealOnView = (y: number, delay: number, duration: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: reduceMotion ? { duration: 0 } : { duration, delay, ease },
  });

  return (
    <section className="bg-[#EEF5EC] py-20 lg:py-28">
      <div className="ars-container">
        <motion.div {...revealOnView(16, 0, 0.46)}>
          <SectionKicker>WHY ARS GREEN STEEL</SectionKicker>
        </motion.div>
        <motion.h2 className="section-title max-w-4xl" {...revealOnView(22, 0.08, 0.66)}>
          Ductility. Corrosion Resistance. Green Steel.
        </motion.h2>
        <motion.p
          className="mt-6 max-w-4xl text-base leading-8 text-steel-700 lg:text-lg"
          {...revealOnView(18, 0.16, 0.58)}
        >
          ARS Green Steel brings together three qualities that matter in demanding construction—ductility, corrosion resistance, and lower-carbon manufacturing. From D-Quality steel and CRS technology to recycled steel and electric furnace production, each is backed by defined standards, testing and verified performance.
        </motion.p>
        <div className="mt-12 grid border-l border-t border-[#123D2B]/18 md:grid-cols-2">
          {performancePillars.map(({ icon: Icon, title, body }, index) => (
            <motion.article
              key={title}
              className={`border-b border-r border-[#123D2B]/18 p-7 lg:p-9 ${title === "Green Steel" ? "bg-[#123D2B] text-white" : "bg-white"}`}
              {...revealOnView(18, 0.22 + index * 0.08, 0.58)}
            >
              <Icon className={`size-6 ${title === "Green Steel" ? "text-[#9BCB83]" : "text-brand-blue"}`} aria-hidden="true" />
              <h3 className={`mt-7 font-display text-2xl font-bold ${title === "Green Steel" ? "text-white" : "text-ink-900"}`}>{title}</h3>
              <p className={`mt-4 text-base leading-8 ${title === "Green Steel" ? "text-white/76" : "text-steel-700"}`}>{body}</p>
            </motion.article>
          ))}
        </div>
        <motion.div className="mt-9" {...revealOnView(14, 0.58, 0.52)}>
          <Link href="#certifications" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
            View Certifications <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
