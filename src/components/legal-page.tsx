import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  note: string;
  relatedHref: string;
  relatedLabel: string;
};

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function LegalPage({ label, title, intro, sections, note, relatedHref, relatedLabel }: LegalPageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 border-l border-white/10 bg-brand-blue/20 lg:block" />
        <div className="ars-container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div className="max-w-4xl">
            <SectionKicker variant="light">{label}</SectionKicker>
            <h1 className="mt-6 max-w-4xl font-display text-white">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{intro}</p>
          </div>
          <div className="border-l-2 border-brand-red pl-6">
            <ShieldCheck size={22} className="text-brand-red" aria-hidden="true" />
            <p className="mt-5 font-display text-2xl font-bold text-white">Clear terms. Responsible use.</p>
            <p className="mt-3 text-sm leading-6 text-white/60">Please review the information below before using the website or its enquiry channels.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">On this page</p>
            <nav className="mt-5 grid gap-3 border-l border-brand-blue/15 pl-5" aria-label="Legal page sections">
              {sections.map((section, index) => (
                <a key={section.title} href={`#${sectionId(section.title)}`} className="text-sm font-semibold leading-6 text-steel-700 transition hover:text-brand-blue">
                  <span className="mr-2 font-technical text-xs text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            <div className="flex items-center gap-3 border-b border-ink-900/10 pb-6 text-sm font-bold text-brand-blue">
              <FileText size={18} aria-hidden="true" />
              ARS Green Steel website policy
            </div>
            <div className="divide-y divide-ink-900/10">
              {sections.map((section, index) => (
                <section key={section.title} id={sectionId(section.title)} className="scroll-mt-28 py-9 first:pt-8 last:pb-4">
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Section {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink-900 md:text-3xl">{section.title}</h2>
                  <p className="mt-5 text-base leading-8 text-steel-700">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-brand-blue bg-surface-50 p-6 md:p-8">
              <p className="font-display text-xl font-bold text-ink-900">Need more information?</p>
              <p className="mt-3 text-base leading-7 text-steel-700">{note}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
                  Contact ARS <ArrowRight size={16} />
                </Link>
                <Link href={relatedHref} className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] border border-brand-blue/20 px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-surface-50">
                  {relatedLabel} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
