"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 } as const;

type SectionProps = Omit<HTMLMotionProps<"section">, "initial" | "whileInView" | "viewport" | "transition">;
type RevealProps = { children: ReactNode; className?: string; delay?: number; y?: number };

function reveal(delay = 0, y = 18) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.58, delay, ease },
  };
}

/** Shared, opt-in editorial motion for the three ARS product-detail pages. */
export function ProductDetailSectionMotion({ children, className = "", ...props }: SectionProps) {
  return (
    <motion.section
      {...props}
      className={className}
      data-product-detail-motion="section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.64, ease }}
    >
      {children}
    </motion.section>
  );
}

/** Content layer reveal for headings, copy, actions, and grouped proof. */
export function ProductDetailReveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  return <motion.div className={className} data-product-detail-motion="content" {...reveal(delay, y)}>{children}</motion.div>;
}
