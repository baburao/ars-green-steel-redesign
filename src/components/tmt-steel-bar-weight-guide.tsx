import Link from "next/link";
import { ArrowRight, Calculator, Info, Ruler } from "lucide-react";
import type { ReactNode } from "react";
import { FaqList, type FaqItem } from "@/components/faq-list";

type WeightRow = {
  size: string;
  perMetre: string;
  barWeight: string;
  minimumWeight: string;
  maximumWeight: string;
  piecesPerBundle: number;
  bundleWeight: string;
  barsPerTonne: number;
  safetyNote?: string;
};

export const tmtSteelBarWeightHeadings = [
  { id: "quick-ars-tmt-steel-bar-weight-chart", title: "Quick ARS TMT Steel Bar Weight Chart" },
  { id: "ars-tmt-bar-weights-by-size", title: "ARS TMT Bar Weights by Size" },
  { id: "how-to-calculate-tmt-steel-bar-weight", title: "How to Calculate TMT Steel Bar Weight" },
  { id: "nominal-weight-and-permissible-weight-range", title: "Nominal Weight and Permissible Weight Range" },
  { id: "how-many-tmt-bars-make-one-tonne", title: "How Many TMT Bars Make One Tonne?" },
  { id: "difference-between-tmt-bar-weight-and-bundle-weight", title: "TMT Bar Weight vs Bundle Weight" },
  { id: "frequently-asked-questions-about-tmt-bar-weight", title: "Frequently Asked Questions" },
  { id: "choose-and-calculate-ars-tmt-bars", title: "Choose and Calculate ARS TMT Bars" },
] as const;

const weightRows: readonly WeightRow[] = [
  { size: "8mm", perMetre: "0.395 kg/m", barWeight: "4.819 kg", minimumWeight: "4.477 kg", maximumWeight: "5.161 kg", piecesPerBundle: 10, bundleWeight: "48.190 kg", barsPerTonne: 208, safetyNote: "The use of an 8mm bar in any structural element must follow drawings and specifications approved by a qualified structural engineer." },
  { size: "10mm", perMetre: "0.617 kg/m", barWeight: "7.527 kg", minimumWeight: "7.003 kg", maximumWeight: "8.052 kg", piecesPerBundle: 7, bundleWeight: "52.692 kg", barsPerTonne: 133, safetyNote: "Bar diameter and placement must follow the structural drawings for the project." },
  { size: "12mm", perMetre: "0.888 kg/m", barWeight: "10.834 kg", minimumWeight: "10.297 kg", maximumWeight: "11.370 kg", piecesPerBundle: 5, bundleWeight: "54.168 kg", barsPerTonne: 92, safetyNote: "The suitability of a 12mm bar for a beam, slab, column or other structural element must be determined by a qualified structural engineer." },
  { size: "16mm", perMetre: "1.580 kg/m", barWeight: "19.276 kg", minimumWeight: "18.312 kg", maximumWeight: "20.240 kg", piecesPerBundle: 3, bundleWeight: "57.828 kg", barsPerTonne: 52, safetyNote: "A structural engineer must determine where 16mm reinforcement is required based on the design and expected loads." },
  { size: "20mm", perMetre: "2.470 kg/m", barWeight: "30.134 kg", minimumWeight: "29.231 kg", maximumWeight: "31.037 kg", piecesPerBundle: 2, bundleWeight: "60.268 kg", barsPerTonne: 33 },
  { size: "25mm", perMetre: "3.850 kg/m", barWeight: "46.970 kg", minimumWeight: "45.555 kg", maximumWeight: "48.373 kg", piecesPerBundle: 1, bundleWeight: "46.970 kg", barsPerTonne: 21 },
  { size: "32mm", perMetre: "6.310 kg/m", barWeight: "76.982 kg", minimumWeight: "74.676 kg", maximumWeight: "79.288 kg", piecesPerBundle: 1, bundleWeight: "76.982 kg", barsPerTonne: 13 },
] as const;

export const tmtSteelBarWeightFaqs = [
  {
    question: "What is the formula for calculating TMT bar weight?",
    answer: "The commonly used estimation formula is D² ÷ 162, where D is the nominal diameter in millimetres. Multiply the weight per metre by the bar length to estimate the weight of one complete bar.",
  },
  {
    question: "What is the weight of an 8mm ARS TMT bar?",
    answer: "An 8mm ARS TMT bar has a nominal weight of 0.395 kg per metre. One approximately 40 ft bar has a nominal weight of 4.819 kg.",
  },
  {
    question: "What is the weight of a 12mm ARS TMT bar?",
    answer: "A 12mm ARS TMT bar has a nominal weight of 0.888 kg per metre. One approximately 40 ft bar has a nominal weight of 10.834 kg. An ARS 12mm bundle contains five bars and has a nominal weight of 54.168 kg.",
  },
  {
    question: "What is the weight of a 16mm ARS TMT bar?",
    answer: "A 16mm ARS TMT bar has a nominal weight of 1.580 kg per metre. One approximately 40 ft bar has a nominal weight of 19.276 kg.",
  },
  {
    question: "How many rods are included in an ARS bundle?",
    answer: "An ARS bundle contains 10 pieces of 8mm bars, seven pieces of 10mm bars, five pieces of 12mm bars, three pieces of 16mm bars, two pieces of 20mm bars and one piece each of 25mm and 32mm bars.",
  },
  {
    question: "Are nominal and actual TMT bar weights identical?",
    answer: "Not always. Nominal weight is a standard reference value. Actual measured weight may vary within the applicable permissible manufacturing tolerance.",
  },
  {
    question: "Is a 40 ft bar exactly equal to a 12 m bar?",
    answer: "No. Forty feet is approximately 12.2 metres, while 12 metres is approximately 39.37 feet. Buyers should confirm the supplied bar length in the ARS quotation and order documentation.",
  },
  {
    question: "Which TMT bar diameter should be used for construction?",
    answer: "The required bar diameter, spacing and quantity must be determined from structural drawings prepared or approved by a qualified structural engineer. A weight chart should be used for estimation and procurement planning, not for structural design decisions.",
  },
] as const satisfies readonly FaqItem[];

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-display text-[clamp(1.8rem,3vw,2.2rem)] font-bold leading-[1.14] tracking-[-0.025em] text-ink-900">
      {children}
    </h2>
  );
}

function WeightSpecification({ row }: { row: WeightRow }) {
  const guide = row.size === "8mm"
    ? { href: "/8-mm-steel-rod", label: "Read the ARS 8mm rod weight guide" }
    : row.size === "12mm"
      ? { href: "/blog/12mm-rod-weight-chart.html", label: "Read the ARS 12mm rod weight guide" }
      : null;

  return (
    <section id={`${row.size}-steel-rod-weight`} className="scroll-mt-28 border-t border-brand-blue/12 pt-8 first:border-t-0 first:pt-0">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="font-technical text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-red">ARS nominal specification</p>
          <h3 className="mt-3 font-display text-[clamp(1.45rem,2.4vw,1.85rem)] font-bold leading-tight text-ink-900">
            {row.size} Steel Rod Weight
          </h3>
          <p className="mt-4 text-base leading-8 text-steel-700">
            The nominal weight for a {row.size} ARS TMT bar is {row.perMetre.replace("/m", " per metre")}. The nominal weight of one approximately 40 ft bar is {row.barWeight}.
          </p>
          {guide ? (
            <Link href={guide.href} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">
              {guide.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
          {row.safetyNote ? <p className="mt-5 text-sm leading-7 text-steel-700">{row.safetyNote}</p> : null}
        </div>

        <dl className="grid overflow-hidden rounded-[8px] border border-brand-blue/12 bg-surface-50 sm:grid-cols-2">
          {[
            ["Minimum weight per 40 ft bar", row.minimumWeight],
            ["Nominal weight per 40 ft bar", row.barWeight],
            ["Maximum weight per 40 ft bar", row.maximumWeight],
            ["Pieces per ARS bundle", String(row.piecesPerBundle)],
            ["Nominal bundle weight", row.bundleWeight],
            ["Approximate 40 ft bars per tonne", String(row.barsPerTonne)],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-brand-blue/10 px-5 py-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r">
              <dt className="text-xs font-semibold leading-5 text-steel-700">{label}</dt>
              <dd className="mt-1 font-technical text-base font-bold tabular-nums text-ink-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TmtSteelBarWeightGuide() {
  return (
    <div className="text-base leading-8 text-steel-700 md:text-[1.0625rem]">
      <div className="space-y-5">
        <p>
          ARS TMT bars are available in 8mm, 10mm, 12mm, 16mm, 20mm, 25mm and 32mm sizes. According to the approved ARS weight chart, the nominal weight ranges from 0.395 kg/m for an 8mm bar to 6.310 kg/m for a 32mm bar.
        </p>
        <p>
          The chart below compares weight per metre, weight of one approximately 40 ft bar, pieces per ARS bundle, bundle weight and approximate bars per tonne. Actual measured weight may vary within the applicable permissible tolerance.
        </p>
      </div>

      <section className="mt-12" aria-labelledby="quick-ars-tmt-steel-bar-weight-chart">
        <SectionHeading id="quick-ars-tmt-steel-bar-weight-chart">Quick ARS TMT Steel Bar Weight Chart</SectionHeading>
        <p className="mt-4 max-w-3xl">
          Compare the approved nominal values before estimating bars, bundles, transportation weight or tonnage.
        </p>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-brand-blue/15 bg-white shadow-[0_18px_48px_rgba(13,43,110,0.08)]">
          <div className="flex items-center gap-3 border-b border-white/10 bg-ink-950 px-5 py-4 text-white sm:px-6">
            <Ruler size={19} aria-hidden="true" className="text-brand-red" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.15em]">Nominal ARS 40 ft bar and bundle values</p>
          </div>
          <p className="border-b border-brand-blue/10 bg-surface-50 px-5 py-3 text-xs font-semibold text-brand-blue sm:hidden">
            Swipe horizontally to view all columns.
          </p>
          <div className="overflow-x-auto" tabIndex={0} aria-label="Scrollable ARS TMT bar weight comparison table">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <caption className="sr-only">ARS TMT steel bar nominal weight, bundle and bars-per-tonne comparison</caption>
              <thead className="bg-surface-50 font-technical text-[0.67rem] font-bold uppercase leading-5 tracking-[0.08em] text-brand-blue">
                <tr>
                  <th scope="col" className="sticky left-0 z-10 border-r border-brand-blue/12 bg-surface-50 px-5 py-4">TMT bar size</th>
                  <th scope="col" className="px-4 py-4">Nominal weight per metre</th>
                  <th scope="col" className="px-4 py-4">Nominal 40 ft bar weight</th>
                  <th scope="col" className="px-4 py-4">Pieces per ARS bundle</th>
                  <th scope="col" className="px-4 py-4">Nominal bundle weight</th>
                  <th scope="col" className="px-4 py-4">Approx. bars per tonne</th>
                </tr>
              </thead>
              <tbody>
                {weightRows.map((row, index) => (
                  <tr key={row.size} className={`border-t border-brand-blue/10 ${index % 2 === 0 ? "bg-white" : "bg-surface-50/70"}`}>
                    <th scope="row" className={`sticky left-0 z-10 border-r border-brand-blue/12 px-5 py-4 font-display text-base font-bold text-ink-900 ${index % 2 === 0 ? "bg-white" : "bg-[#F9FBFD]"}`}>
                      {row.size}
                    </th>
                    <td className="px-4 py-4 font-medium tabular-nums">{row.perMetre}</td>
                    <td className="px-4 py-4 font-medium tabular-nums">{row.barWeight}</td>
                    <td className="px-4 py-4 font-medium tabular-nums">{row.piecesPerBundle}</td>
                    <td className="px-4 py-4 font-medium tabular-nums">{row.bundleWeight}</td>
                    <td className="px-4 py-4 font-bold tabular-nums text-brand-blue">{row.barsPerTonne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-steel-700">
          The bars-per-tonne figures are approximate calculations based on nominal ARS bar weight. Actual quantities and delivery weights may vary within the applicable tolerance.
        </p>
        <Link href="/tmt-steel-calculator" className="focus-ring mt-6 inline-flex min-h-12 items-center gap-2 rounded-[8px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
          Calculate TMT quantity <Calculator size={17} aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-16" aria-labelledby="ars-tmt-bar-weights-by-size">
        <SectionHeading id="ars-tmt-bar-weights-by-size">ARS TMT Bar Weights by Size</SectionHeading>
        <p className="mt-4 max-w-3xl">
          Use the diameter-specific values below for material estimation and procurement planning. Structural selection must follow approved project drawings.
        </p>
        <div className="mt-9 grid gap-9">
          {weightRows.map((row) => <WeightSpecification key={row.size} row={row} />)}
        </div>
        <div className="mt-8 flex gap-4 rounded-[8px] border border-brand-blue/12 bg-[#F0F4FF] p-5 text-sm leading-7 text-brand-blue">
          <Info className="mt-1 shrink-0" size={19} aria-hidden="true" />
          <p>The required diameter, quantity, spacing and placement of reinforcement must always follow the approved structural design.</p>
        </div>
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="how-to-calculate-tmt-steel-bar-weight">
        <SectionHeading id="how-to-calculate-tmt-steel-bar-weight">How to Calculate TMT Steel Bar Weight</SectionHeading>
        <p className="mt-5">A commonly used formula for estimating TMT bar weight is:</p>
        <div className="mt-5 rounded-[8px] border-l-4 border-brand-red bg-ink-950 px-5 py-5 text-white sm:px-6">
          <p className="font-technical text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/60">Weight per metre</p>
          <p className="mt-2 font-display text-xl font-bold">Approximate weight in kg/m = D<sup>2</sup> ÷ 162</p>
        </div>
        <ul className="mt-6 list-disc space-y-2 pl-6 marker:text-brand-red">
          <li><strong className="text-ink-900">D</strong> is the nominal diameter of the bar in millimetres.</li>
          <li>The result is the approximate weight in kilograms per metre.</li>
          <li>The formula provides an estimate and may differ slightly from approved nominal values because of rounding.</li>
        </ul>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-[8px] border border-brand-blue/12 bg-surface-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Complete bar</p>
            <p className="mt-2 font-display text-lg font-bold text-ink-900">Bar weight = weight per metre × bar length in metres</p>
          </div>
          <div className="rounded-[8px] border border-brand-blue/12 bg-surface-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Complete bundle</p>
            <p className="mt-2 font-display text-lg font-bold text-ink-900">Bundle weight = weight of one bar × pieces per bundle</p>
          </div>
        </div>
        <p className="mt-6">For ARS quantity and bundle calculations, use the approved ARS nominal values in the weight chart rather than relying only on the general formula.</p>

        <div className="mt-9 rounded-[10px] border border-brand-blue/15 bg-white p-6 shadow-[0_16px_40px_rgba(13,43,110,0.07)] sm:p-7">
          <p className="font-technical text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-red">Worked example</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-ink-900">Calculating the Weight of a 16mm Bar</h3>
          <p className="mt-4">The approved nominal weight of a 16mm ARS TMT bar is 1.580 kg per metre.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <p className="rounded-[8px] bg-surface-50 p-4 font-technical font-bold tabular-nums text-ink-900">1.580 × 12.2 = 19.276 kg</p>
            <p className="rounded-[8px] bg-surface-50 p-4 font-technical font-bold tabular-nums text-ink-900">19.276 × 3 = 57.828 kg</p>
          </div>
          <p className="mt-5">Therefore, the nominal weight of one ARS 16mm bundle is 57.828 kg.</p>
        </div>
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="nominal-weight-and-permissible-weight-range">
        <SectionHeading id="nominal-weight-and-permissible-weight-range">Nominal Weight and Permissible Weight Range</SectionHeading>
        <p className="mt-5">The nominal weight is the standard reference value used for planning and comparison. The actual measured weight of a TMT bar may be slightly lower or higher within the applicable permissible tolerance.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            ["8mm and 10mm", "Minimum and maximum values around the nominal weight"],
            ["12mm and 16mm", "A narrower permissible weight range"],
            ["20mm, 25mm and 32mm", "A further reduced weight range"],
          ].map(([sizes, description]) => (
            <div key={sizes} className="rounded-[8px] border border-brand-blue/12 bg-surface-50 p-5">
              <p className="font-display text-lg font-bold text-brand-blue">{sizes}</p>
              <p className="mt-2 text-sm leading-7">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">The exact weight of a delivered bar or bundle should be checked against the applicable ARS specification and delivery documentation.</p>
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="how-many-tmt-bars-make-one-tonne">
        <SectionHeading id="how-many-tmt-bars-make-one-tonne">How Many TMT Bars Make One Tonne?</SectionHeading>
        <p className="mt-5">The approximate number of bars per tonne can be calculated using:</p>
        <p className="mt-4 rounded-[8px] bg-[#F0F4FF] px-5 py-4 font-display text-lg font-bold text-brand-blue">
          Approximate bars per tonne = 1,000 ÷ nominal weight of one bar
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {weightRows.map((row) => (
            <li key={row.size} className="flex items-center justify-between gap-5 border-b border-brand-blue/10 pb-3">
              <span className="font-semibold text-ink-900">{row.size}</span>
              <span className="font-technical font-bold tabular-nums text-brand-blue">approximately {row.barsPerTonne} bars</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">These figures are theoretical estimates. Actual quantities can vary depending on measured bar weight and the applicable tolerance.</p>
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="difference-between-tmt-bar-weight-and-bundle-weight">
        <SectionHeading id="difference-between-tmt-bar-weight-and-bundle-weight">Difference Between TMT Bar Weight and Bundle Weight</SectionHeading>
        <p className="mt-5">Bar weight is the weight of one individual TMT bar. Bundle weight is the combined weight of all the bars packed in one ARS bundle.</p>
        <div className="mt-6 rounded-[8px] border border-brand-blue/12 bg-surface-50 p-6">
          <p>For example, the nominal weight of one 10mm ARS bar is 7.527 kg. A 10mm ARS bundle contains seven bars:</p>
          <p className="mt-4 font-technical text-lg font-bold tabular-nums text-ink-900">0.617 kg/m × 12.2 m × 7 = 52.6918 kg, or approximately 52.692 kg</p>
          <p className="mt-4">This example uses the nominal unit weight and the approximately 40 ft length represented in the ARS chart, then rounds the bundle total. The displayed per-bar weight is rounded separately.</p>
          <p className="mt-4">Therefore, the nominal weight of a 10mm ARS bundle is 52.692 kg.</p>
        </div>
        <p className="mt-6">The number of bars in a bundle differs according to bar diameter. Always use the approved ARS pieces-per-bundle value for the required diameter.</p>
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="frequently-asked-questions-about-tmt-bar-weight">
        <SectionHeading id="frequently-asked-questions-about-tmt-bar-weight">Frequently Asked Questions About TMT Bar Weight</SectionHeading>
        <FaqList items={tmtSteelBarWeightFaqs} className="mt-7" />
      </section>

      <section className="mt-16 scroll-mt-28 border-t border-brand-blue/12 pt-12" aria-labelledby="choose-and-calculate-ars-tmt-bars">
        <SectionHeading id="choose-and-calculate-ars-tmt-bars">Choose and Calculate ARS TMT Bars</SectionHeading>
        <p className="mt-5">Understanding TMT steel bar weight helps contractors, engineers and buyers estimate material quantities, transportation requirements and procurement costs. The ARS chart provides approved weight and bundle information for 8mm, 10mm, 12mm, 16mm, 20mm, 25mm and 32mm TMT bars.</p>
        <p className="mt-5">
          Use the <Link href="/tmt-steel-calculator" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">ARS TMT steel calculator</Link> to estimate rods, bundles, weight and indicative cost by diameter. You can also check <Link href="/tmt-steel-price-today" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">today&apos;s ARS TMT steel price</Link>, explore <Link href="/product-550d" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">ARS Fe 550D TMT bars</Link>, <Link href="/our-network" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">find an ARS dealer</Link> or <Link href="/request-quote" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">request a quotation</Link>.
        </p>
        <p className="mt-5 rounded-[8px] border-l-4 border-brand-red bg-surface-50 px-5 py-4 text-sm leading-7">This weight chart is intended for material estimation and procurement planning. Construction reinforcement must follow drawings and specifications approved by a qualified structural engineer.</p>
      </section>
    </div>
  );
}
