"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 } as const;

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function reveal(reduceMotion: boolean | null, delay = 0, y = 18) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: reduceMotion ? { duration: 0 } : { duration: 0.58, delay, ease },
  };
}

export function GreenSteelReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} {...reveal(reduceMotion, delay)}>{children}</motion.div>;
}

export function GreenSteelArticleReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  return <motion.article className={className} {...reveal(reduceMotion, delay, 16)}>{children}</motion.article>;
}

export function GreenSteelListItemReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  return <motion.li className={className} {...reveal(reduceMotion, delay, 14)}>{children}</motion.li>;
}

export function GreenSteelImageReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.figure
      className={className}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.008 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.68, delay, ease }}
    >
      {children}
    </motion.figure>
  );
}

export function GreenSteelVideoReveal({ children, className }: Omit<MotionProps, "delay">) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.16, ease }}
    >
      {children}
    </motion.div>
  );
}

type CarbonBarProps = {
  className: string;
  width: string;
};

export function GreenSteelCarbonBar({ className, width }: CarbonBarProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ width, transformOrigin: "left" }}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.72, ease }}
    >
      <span className="sr-only">Comparison bar: {width}</span>
    </motion.div>
  );
}

export function GreenSteelRoadmap({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const rail = reduceMotion
    ? { initial: false as const, whileInView: { scaleX: 1, scaleY: 1 }, transition: { duration: 0 } }
    : { initial: { scaleX: 0, scaleY: 0 }, whileInView: { scaleX: 1, scaleY: 1 }, transition: { duration: 0.75, ease } };

  return (
    <ol className="relative mt-14 grid gap-0 pl-7 lg:grid-cols-5 lg:pl-0">
      <motion.span className="absolute bottom-0 left-0 top-0 w-px origin-top bg-white/22 lg:hidden" aria-hidden="true" viewport={viewport} {...rail} />
      <motion.span className="absolute left-0 right-0 top-0 hidden h-px origin-left bg-white/22 lg:block" aria-hidden="true" viewport={viewport} {...rail} />
      {children}
    </ol>
  );
}
