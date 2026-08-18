"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    word: "STRENGTH",
    titlePrefix: "Engineered for",
    copy: "High-grade TMT steel designed to deliver superior load-bearing capacity and dependable structural performance.",
  },
  {
    word: "SAFETY",
    titlePrefix: "Engineered for",
    copy: "High ductility, excellent bendability, and superior weldability work together to help structures perform better under stress.",
  },
  {
    word: "DURABILITY",
    titlePrefix: "Engineered for",
    copy: "Advanced corrosion resistance and precise metallurgy help ensure long-lasting performance, even in high-salinity environments.",
  },
  {
    word: "SUSTAINABILITY",
    titlePrefix: "Engineered for",
    copy: "Manufactured through responsible Green Steel practices that reduce environmental impact without compromising performance.",
  },
  {
    word: "CERTIFIED QUALITY",
    titlePrefix: "Engineered for",
    copy: "Rigorously tested and certified to BIS, ISO, and stringent industry standards for consistent, reliable quality.",
  },
];

const cycleMs = 4200;

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = heroSlides[activeIndex];

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, cycleMs);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      aria-label="ARS Green Steel hero"
      data-active-word={active.word}
      className="ars-page-hero relative flex w-full items-center overflow-hidden bg-bg-dark text-white"
    >
      <div className="absolute inset-0 h-full w-full bg-bg-dark">
        <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/ars-assets/home/ARS_Hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.52)_48%,rgba(6,13,30,0.12)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.6)_0%,rgba(6,13,30,0.3)_48%,rgba(6,13,30,0.02)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(0deg,rgba(6,13,30,0.42)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[52%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.28)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
      </div>

      <div className="ars-container ars-page-hero-content relative z-10 flex min-h-[560px] flex-col justify-center py-20 sm:py-24 md:min-h-[600px] lg:min-h-[680px] lg:justify-end lg:pb-14 lg:pt-24">
        <div className="min-w-0">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur sm:mb-7">
              <span className="size-2 rounded-full bg-brand-blue" />
              Since 1992 · Trusted TMT Steel Manufacturer
            </div>
          <h1 className="max-w-[760px] font-display text-white">
              <span className="sr-only" aria-live="polite">
                {active.titlePrefix} {active.word}. {active.copy}
              </span>
              <span aria-hidden="true">
                {active.titlePrefix}
                <span className="relative block min-h-[0.98em] overflow-hidden text-brand-red">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={active.word}
                      className="hero-feature-word block"
                      initial={reduceMotion ? false : { y: "82%", opacity: 0, rotateX: -18 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { y: "-82%", opacity: 0, rotateX: 18 }}
                      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                {active.word}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <p className="mt-5 max-w-[590px] text-base leading-7 text-grey-200 sm:mt-6 sm:text-lg sm:leading-9">
              {active.copy}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-brand-red px-5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(222,18,26,0.26)] transition hover:bg-brand-red-dark" href="/tmt-steel-calculator">
                Calculate Steel <ArrowRight size={18} />
              </Link>
              <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-white/28 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink-900" href="#products">
                Explore Products <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
