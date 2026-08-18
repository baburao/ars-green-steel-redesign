"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, Scale } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { calculatorBars, calculatorCities, calculatorNotes, calculatorProducts, calculatorRegions, calculateBar, getRatePerKg, type RequirementMode } from "@/data/tmt-calculator";

const fieldClass = "focus-ring h-12 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm text-ink-900 shadow-sm transition hover:border-brand-blue/45";
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const faqs = [
  ["How does the TMT calculator estimate requirements?", "Choose a region, product, diameter, and requirement unit. The calculator applies the ARS workbook bundle and weight rules to show rods, bundles, weight, and an indicative GST-inclusive amount."],
  ["Can I calculate by rods, bundles, or weight?", "Yes. The workbook supports all three modes. Weight inputs are converted to whole rods using the mean bundle weight and the workbook rounding rule."],
  ["Does the displayed rate include GST and delivery?", "The displayed rate includes GST. Delivery, transportation, and loading or unloading charges are extra and should be confirmed with ARS before ordering."],
] as const;

type Inputs = Record<string, string>;
type Project = { buildingType: string; floors: string; area: string };

const projectMix = [0.05, 0.15, 0.25, 0.25, 0.15, 0.1, 0.05];

export function PriceCalculatorExperience() {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [product, setProduct] = useState("");
  const [mode, setMode] = useState<RequirementMode>("Rods");
  const [inputs, setInputs] = useState<Inputs>({});
  const [notice, setNotice] = useState("");
  const [project, setProject] = useState<Project>({ buildingType: "", floors: "", area: "" });
  const [projectErrors, setProjectErrors] = useState<Record<string, string>>({});
  const [weightOverrides, setWeightOverrides] = useState<Record<string, number>>({});
  const [draftWeights, setDraftWeights] = useState<Record<string, string>>({});
  const [weightErrors, setWeightErrors] = useState<Record<string, string>>({});

  const projectReady = Boolean(project.buildingType && /^\d+$/.test(project.floors) && Number(project.floors) > 0 && /^\d+(\.\d+)?$/.test(project.area) && Number(project.area) > 0);
  const results = useMemo(() => calculatorBars.map((bar, index) => {
    const projectKilograms = projectReady ? Number(project.area) * Number(project.floors) * 3.5 * projectMix[index] : 0;
    const projectRods = projectReady ? Math.max(0, Math.round((projectKilograms / bar.meanBundleWeight) * bar.piecesPerBundle)) : 0;
    const calculation = projectReady
      ? { input: projectKilograms, rods: projectRods, bundles: Math.floor(projectRods / bar.piecesPerBundle), remainingRods: projectRods % bar.piecesPerBundle, kilograms: (projectRods / bar.piecesPerBundle) * bar.meanBundleWeight }
      : calculateBar(bar, mode, Number(inputs[bar.size] ?? 0));
    const ratePerKg = getRatePerKg(region, product, bar.size);
    const selectedQuantity = mode === "Weight (Kgs)" ? calculation.kilograms : calculation.rods;
    const selectedUnit = mode === "Weight (Kgs)" ? "kg" : "rods";
    const kilograms = weightOverrides[bar.size] ?? calculation.kilograms;
    return { ...bar, ...calculation, kilograms, defaultKilograms: calculation.kilograms, selectedQuantity, selectedUnit, ratePerKg, amount: kilograms * ratePerKg };
  }), [inputs, mode, product, project.area, project.buildingType, project.floors, projectReady, region, weightOverrides]);
  const summary = results.reduce((total, row) => ({ rods: total.rods + row.rods, kilograms: total.kilograms + row.kilograms, amount: total.amount + row.amount }), { rods: 0, kilograms: 0, amount: 0 });
  const hasSelection = Boolean(region && product);
  const hasQuantity = summary.rods > 0;

  function updateInput(size: string, value: string) {
    setNotice("");
    setInputs((current) => ({ ...current, [size]: value }));
  }

  function updateProject(field: keyof Project, value: string) {
    setProject((current) => ({ ...current, [field]: value }));
    setProjectErrors((current) => ({ ...current, [field]: "" }));
    setNotice("");
  }

  function updateDraftWeight(size: string, value: string) {
    setDraftWeights((current) => ({ ...current, [size]: value }));
    setWeightErrors((current) => ({ ...current, [size]: isInvalidWeight(value) ? "Enter a positive weight." : "" }));
  }

  function commitWeightEdit(size: string, value: string) {
    if (isInvalidWeight(value)) return;
    setWeightOverrides((current) => ({ ...current, [size]: Number(value) }));
    setNotice("Adjusted weights are indicative assumptions.");
  }

  function resetWeightDefaults() {
    setWeightOverrides({});
    setDraftWeights({});
    setWeightErrors({});
    setNotice("Workbook-backed default weights restored.");
  }

  function calculateProject() {
    const errors: Record<string, string> = {};
    if (!project.buildingType) errors.buildingType = "Select a building type.";
    if (!/^\d+$/.test(project.floors) || Number(project.floors) < 1) errors.floors = "Enter a whole number of floors.";
    if (!/^\d+(\.\d+)?$/.test(project.area) || Number(project.area) <= 0) errors.area = "Enter a positive area in square feet.";
    setProjectErrors(errors);
    setNotice(Object.keys(errors).length ? "Complete the project details before continuing." : "Project details saved. Enter diameter quantities to update your requirement.");
  }

  function requestRate() {
    if (!hasSelection) { setNotice("Select your region and product first."); return; }
    if (!hasQuantity) { setNotice("Enter at least one positive quantity before requesting a rate."); return; }
    const detail = results.filter((row) => row.rods > 0).map((row) => `${row.size}: ${row.rods} rods / ${row.kilograms.toFixed(2)} kg`).join(", ");
    const params = new URLSearchParams({ source: "tmt-steel-calculator", region, city, product, mode, quantity: String(summary.rods), weight: summary.kilograms.toFixed(2), details: detail });
    window.location.href = `/request-quote?${params.toString()}`;
  }

  return <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
    <SiteHeader />
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <Image src="/ars-assets/products/ProductComparission_HeroBanner.jpg" alt="ARS TMT steel bars for construction planning" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="steel-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,13,30,0.96)_10%,rgba(6,13,30,0.84)_60%,rgba(13,43,110,0.62))]" />
      <div className="ars-container relative flex min-h-[500px] items-end pb-14 pt-36 md:min-h-[570px] md:pb-20">
        <div className="max-w-4xl"><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />TMT Steel Calculator</div><h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.035em]">Calculate Your TMT Requirement <span className="text-[var(--text-accent-dark)]">With Precision.</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">Use ARS workbook-backed rates and bundle rules to plan rods, weight, and indicative cost before you request a confirmed quote.</p><a href="#calculator" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white">Start calculating <ArrowRight size={16} /></a></div>
      </div>
    </section>

    <MotionSection id="calculator" className="scroll-mt-24 bg-white py-14 md:py-24" aria-labelledby="calculator-title">
      <div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><SectionKicker variant="brand">Information</SectionKicker><h2 id="calculator-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">Plan your TMT requirement with confidence.</h2><p className="mt-5 text-[15px] leading-7 text-steel-700">Use the ARS workbook-backed calculator to estimate rods, weight, bundles, and indicative cost before requesting a confirmed rate.</p></div><div className="grid gap-4 text-sm leading-6 text-steel-700 lg:pt-12">{calculatorNotes.map((note) => <p key={note} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" /><span>{note}</span></p>)}</div></div></div>
    </MotionSection>

    <MotionSection className="bg-surface-50 py-14 md:py-24" aria-labelledby="diameter-title">
      <div className="ars-container"><div className="mb-8"><SectionKicker variant="brand">Calculator</SectionKicker><h2 id="diameter-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Set your project details and quantities.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-steel-700">Choose your region, product, and measurement unit, then enter the quantity required for each bar diameter.</p></div>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-stretch">
          <form className="h-full rounded-2xl border border-brand-blue/10 bg-[#f4f7ff] p-6 shadow-[0_16px_40px_rgba(13,43,110,0.06)] md:p-8" onSubmit={(event) => { event.preventDefault(); calculateProject(); }} aria-labelledby="project-inputs-title">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.08] px-3 py-2 text-xs font-bold text-brand-blue"><Calculator size={15} aria-hidden="true" /> <span id="project-inputs-title">Project inputs</span></div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Region" value={region} onChange={(value) => { setRegion(value); setCity(""); }}><option value="">Select region</option>{calculatorRegions.map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="City" value={city} onChange={setCity} disabled={!region}><option value="">{region ? "Select city" : "Select region first"}</option>{region && calculatorCities[region as keyof typeof calculatorCities].map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="Product" value={product} onChange={setProduct}><option value="">Select product</option>{calculatorProducts.map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="Requirement unit" value={mode} onChange={(value) => { setMode(value as RequirementMode); setInputs({}); }}><option value="Rods">Rods</option><option value="Weight (Kgs)">Weight (Kgs)</option></Field>
              <ValidatedField id="building-type" label="Building type" value={project.buildingType} error={projectErrors.buildingType} onChange={(value) => updateProject("buildingType", value)}><option value="">Select type</option><option>Residential</option><option>Commercial</option><option>Infrastructure</option></ValidatedField>
              <ValidatedField id="number-of-floors" label="Number of floors" value={project.floors} error={projectErrors.floors} onChange={(value) => updateProject("floors", value)} type="number" min="1" step="1" placeholder="Enter floors" />
              <ValidatedField id="project-area" label="Built-up area per floor (sq ft)" value={project.area} error={projectErrors.area} onChange={(value) => updateProject("area", value)} type="number" min="0.01" step="any" inputMode="decimal" placeholder="Enter area" />
            </div>
            <p className="mt-6 text-xs leading-5 text-steel-700">Estimates use a standard consumption model and are indicative — confirm exact quantities with the ARS team and your structural engineer.</p>
            <p className="mt-2 text-xs leading-5 text-steel-700">If your City/Town is not listed, please select the nearest City/Town.</p>
            <button type="submit" className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Calculate project <Calculator size={16} aria-hidden="true" /></button>
            <p className={`mt-4 text-xs leading-5 ${projectReady && hasSelection ? "text-steel-700" : "font-semibold text-brand-blue"}`} aria-live="polite">{projectReady && hasSelection ? "Estimated requirement updated from your project inputs and the selected workbook rate." : "Complete the project inputs and select a region and product to update the estimate."}</p>
          </form>

          <section className="h-full rounded-2xl border border-ink-900/10 bg-white p-6 shadow-[0_16px_40px_rgba(6,13,30,0.06)] md:p-8" aria-labelledby="summary-title">
            <div className="flex flex-wrap items-center justify-between gap-3"><p className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">Estimated requirement</p><p className="text-xs font-semibold text-steel-700">Indicative · {new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date())}</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><Metric label="Total steel" value={`${(summary.kilograms / 1000).toFixed(2)} t`} detail={`${summary.kilograms.toLocaleString("en-IN", { maximumFractionDigits: 0 })} kg`} /><Metric label="Indicative cost" value={summary.amount ? currency.format(summary.amount) : "—"} detail={`${product || "Select product"} · ${region || "Select region"}, incl. GST`} accent /></div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3"><p className="font-technical text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700">Results by diameter</p>{(Object.keys(weightOverrides).length > 0 || Object.keys(draftWeights).length > 0) && <button type="button" onClick={resetWeightDefaults} className="focus-ring min-h-10 rounded-md border border-brand-blue/20 px-3 text-xs font-bold text-brand-blue">Reset defaults</button>}</div>
            <p className="mt-2 text-xs leading-5 text-steel-700">Adjust weight only if you are working with a verified project-specific assumption.</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <caption className="sr-only">Estimated TMT requirement by diameter</caption>
                <thead><tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700"><th className="py-3 pr-4">Size</th><th className="py-3 pr-4">Approx. weight</th><th className="py-3 pr-4">Approx. {mode === "Weight (Kgs)" ? "weight" : mode.toLowerCase()}</th><th className="py-3 text-right">Indic. cost</th></tr></thead>
                <tbody>{results.map((row) => <tr key={row.size} className="border-b border-ink-900/10 last:border-0"><td className="py-3 pr-4 font-bold text-brand-blue">{row.size}</td><WeightCell row={row} value={draftWeights[row.size] ?? (weightOverrides[row.size]?.toFixed(2) ?? row.defaultKilograms.toFixed(2))} error={weightErrors[row.size]} onChange={(value) => updateDraftWeight(row.size, value)} onBlur={(value) => commitWeightEdit(row.size, value)} /><td className="py-3 pr-4 text-steel-700">{row.selectedQuantity.toLocaleString("en-IN", { maximumFractionDigits: 2 })} {row.selectedUnit}</td><td className="py-3 text-right font-bold text-ink-900">{row.amount ? currency.format(row.amount) : "—"}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-5 text-xs leading-5 text-steel-700">Indicative GST-inclusive amount. Adjusted values are indicative and should be confirmed with ARS before ordering. Delivery, transportation, loading/unloading, and the final order rate must be confirmed with ARS.</p>
            <button type="button" onClick={requestRate} className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-red/90">Get an exact quote from ARS <ArrowRight size={16} /></button>
            {notice && <p role="alert" className="mt-4 text-sm font-semibold text-brand-blue">{notice}</p>}
          </section>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="bg-white py-14 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"><div><SectionKicker variant="brand">Calculate with precision</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Master your TMT requirements.</h2><div className="mt-6 grid gap-5 text-[15px] leading-7 text-steel-700"><p>Our TMT Calculator simplifies construction planning by estimating the quantity, weight, and indicative cost of TMT steel required for a project.</p><p>Use the result for budgeting and logistics planning, then share the requirement with ARS for a confirmed rate and product guidance.</p></div></div><div className="border-l-4 border-brand-blue bg-surface-50 p-6"><Scale className="text-brand-blue" size={24} aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-bold">A clear starting point</h3><p className="mt-3 text-sm leading-6 text-steel-700">The calculator supports residential, commercial, and infrastructure purchase planning across the ARS regions listed in the workbook.</p></div></div></MotionSection>
    <MotionSection className="bg-surface-50 py-14 md:py-24"><div className="ars-container"><SectionKicker variant="brand">Answers before ordering</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Frequently asked questions</h2><FaqList className="mt-8" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>
    <ContactCta eyebrow="Ready for a confirmed rate?" headline="Send ARS your requirement." body="Share your selected product, region, quantity, and indicative calculation with the ARS team." primaryLabel="Send enquiry" primaryHref="/request-quote" secondaryLabel="Talk to sales" secondaryHref="/our-network" tone="solid" />
  </main>;
}

function Field({ label, value, onChange, children, disabled = false }: { label: string; value: string; onChange: (value: string) => void; children: React.ReactNode; disabled?: boolean }) { return <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">{label}<select className={`${fieldClass} disabled:cursor-not-allowed disabled:bg-surface-50 disabled:text-steel-500`} value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled}>{children}</select></label>; }
function ValidatedField({ id, label, value, error, onChange, children, type = "select", ...props }: { id: string; label: string; value: string; error?: string; onChange: (value: string) => void; children?: React.ReactNode; type?: "select" | "number"; min?: string; step?: string; inputMode?: "decimal"; placeholder?: string }) { const errorId = `${id}-error`; return <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">{label}{type === "select" ? <select id={id} name={id} className={`${fieldClass} ${error ? "border-brand-red" : ""}`} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined}>{children}</select> : <input id={id} name={id} className={`${fieldClass} ${error ? "border-brand-red" : ""}`} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} {...props} />}{error && <span id={errorId} className="text-xs font-semibold normal-case tracking-normal text-brand-red">{error}</span>}</label>; }
function Metric({ label, value, detail, accent = false }: { label: string; value: string; detail: string; accent?: boolean }) { return <div className="rounded-xl bg-[#f4f7ff] p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">{label}</p><p className={`mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] ${accent ? "text-brand-red" : "text-brand-blue"}`}>{value}</p><p className="mt-1 truncate text-xs text-steel-700">{detail}</p></div>; }
function isInvalidWeight(value: string | undefined) { const number = Number(value); return !value?.trim() || !Number.isFinite(number) || number <= 0 || number > 1_000_000; }
function WeightCell({ row, value, error, onChange, onBlur }: { row: { size: string }; value: string; error?: string; onChange: (value: string) => void; onBlur: (value: string) => void }) { const errorId = `${row.size}-weight-error`; return <td className="py-2 pr-4 text-steel-700"><div className="flex items-center gap-2"><label className="sr-only" htmlFor={`${row.size}-weight`}>Weight for {row.size} rod</label><input id={`${row.size}-weight`} type="number" min="0.01" max="1000000" step="0.01" inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} onBlur={(event) => onBlur(event.target.value)} aria-label={`Weight for ${row.size} rod`} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`focus-ring h-9 w-24 rounded-md border bg-white px-2.5 text-sm text-ink-900 ${error ? "border-brand-red" : "border-ink-900/15"}`} /><span className="text-xs text-steel-700">kg</span></div>{error && <span id={errorId} className="mt-1 block text-xs font-semibold text-brand-red">{error}</span>}</td>; }
