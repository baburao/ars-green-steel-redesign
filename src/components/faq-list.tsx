"use client";

import { useId, useState, type ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqListProps = {
  items: readonly FaqItem[];
  className?: string;
};

/** Shared ARS FAQ disclosure list. Content remains page-owned; this controls presentation and state. */
export function FaqList({ items, className = "" }: FaqListProps) {
  const baseId = useId();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className={`divide-y divide-ink-900/10 border-y border-ink-900/10 ${className}`}>
      {items.map((item, index) => {
        const open = openItems.has(index);
        const answerId = `${baseId}-answer-${index}`;
        return (
          <div key={`${item.question}-${index}`}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => toggle(index)}
              className="focus-ring flex min-h-14 w-full items-center justify-between gap-5 py-5 text-left font-display text-lg font-bold leading-7 text-ink-900"
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className={`relative flex size-8 shrink-0 items-center justify-center border transition-colors motion-reduce:transition-none ${open ? "border-brand-red text-brand-red" : "border-brand-blue text-brand-blue"}`}>
                <span className={`relative flex size-full items-center justify-center transition-transform motion-reduce:transition-none ${open ? "rotate-45" : ""}`}>
                  <span className="absolute h-3 w-0.5 bg-current" />
                  <span className="absolute h-0.5 w-3 bg-current" />
                </span>
              </span>
            </button>
            <div id={answerId} hidden={!open} className="pb-6 pr-12 text-[15px] leading-7 text-steel-700">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
