"use client";

import { type FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, Calculator, ChevronDown } from "lucide-react";
import {
  calculatorCities,
  calculatorProducts,
  calculatorRegions,
  getWorkbookPriceRows,
  type CalculatorBar,
  type CalculatorProduct,
  type CalculatorRegion,
} from "@/data/tmt-calculator";
import { trackGenerateLead, trackMetaLead } from "@/lib/analytics";

const wholeCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const perKgCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const priceFieldFocus = "focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-white/70 focus-visible:!shadow-none";

export function SteelPriceLookup() {
  const router = useRouter();
  const pathname = usePathname();
  const [region, setRegion] = useState<CalculatorRegion>("Tamil Nadu");
  const [product, setProduct] = useState<CalculatorProduct>("ARS Fe 550D");
  const [size, setSize] = useState<CalculatorBar["size"]>("8mm");
  const [city, setCity] = useState<(typeof calculatorCities)[CalculatorRegion][number]>("Chennai");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());
  const prices = useMemo(() => getWorkbookPriceRows(region, product), [product, region]);
  const selected = prices.find((row) => row.size === size) ?? prices[0];

  async function handlePriceEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const unit = String(data.get("unit") ?? "");
    const phoneDigits = phone.replace(/\D/g, "");
    const localPhone = phoneDigits.startsWith("91") && phoneDigits.length === 12 ? phoneDigits.slice(2) : phoneDigits;
    const nextErrors: Record<string, string> = {};
    if (fullName.length < 2 || fullName.length > 100) nextErrors.fullName = "Enter a name between 2 and 100 characters.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) nextErrors.phone = "Enter a valid Indian mobile number.";
    if (!/^\d+(?:\.\d{1,3})?$/.test(quantity) || Number(quantity) <= 0 || Number(quantity) > 1_000_000_000) {
      nextErrors.quantity = "Enter a quantity greater than zero, with up to 3 decimal places.";
    }
    if (unit !== "kg" && unit !== "tonnes") nextErrors.unit = "Select kg or tonnes.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("Please correct the highlighted fields.");
      const firstField = Object.keys(nextErrors)[0];
      const control = form.elements.namedItem(firstField);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    setIsSubmitting(true);
    setStatus("");
    let isRedirecting = false;
    try {
      const response = await fetch("/api/price-enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, phone, region, city, product, size: selected.size, quantity, unit,
          sourcePage: pathname === "/steel-price-today" ? pathname : "/tmt-steel-price-today",
          website: String(data.get("website") ?? ""), submissionId,
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setStatus(result.message ?? "We could not send your price enquiry. Please try again.");
        return;
      }
      if (response.status === 201) {
        isRedirecting = true;
        trackGenerateLead({ formType: "price_enquiry", formId: "price_enquiry", product });
        trackMetaLead({ eventId: submissionId, formType: "price_enquiry" });
        router.replace("/thank-you?form=quote");
        return;
      }
      form.reset();
      setSubmissionId(crypto.randomUUID());
      setStatus(result.message ?? "Your price enquiry has been received.");
    } catch {
      setStatus("We could not send your price enquiry. Please check your connection and try again.");
    } finally {
      if (!isRedirecting) setIsSubmitting(false);
    }
  }

  function handleRegionChange(nextRegion: CalculatorRegion) {
    setRegion(nextRegion);
    setCity(calculatorCities[nextRegion][0]);
  }

  return (
    <div className="min-w-0 rounded-2xl border border-brand-blue/12 bg-surface-50 p-4 shadow-[0_18px_50px_rgba(13,43,110,0.06)] sm:p-5 md:p-7">
      <div className="grid min-w-0 gap-7 lg:grid-cols-[6.5fr_5.5fr] lg:items-start">
        <div className="min-w-0">
          <div className="grid min-w-0 gap-4 md:grid-cols-3">
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              Region
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={region}
                onChange={(event) => handleRegionChange(event.target.value as CalculatorRegion)}
              >
                {calculatorRegions.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              Product
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={product}
                onChange={(event) => setProduct(event.target.value as CalculatorProduct)}
              >
                {calculatorProducts.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              City / delivery location
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={city}
                onChange={(event) => setCity(event.target.value as typeof city)}
              >
                {calculatorCities[region].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <p className="mt-3 text-xs leading-5 text-steel-700">
            Workbook rates are state-level. Your city helps ARS prepare delivery and quotation guidance; it does not change the displayed rate.
          </p>

          <ul className="mt-6 grid gap-3 md:hidden" aria-label="Workbook-backed ARS steel prices by diameter">
            {prices.map((row) => (
              <li key={row.size}>
                <button
                  type="button"
                  onClick={() => setSize(row.size)}
                  aria-pressed={row.size === size}
                  className={`focus-ring grid min-h-16 w-full grid-cols-[auto_1fr] items-center gap-x-4 rounded-xl border p-4 text-left transition ${
                    row.size === size
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-brand-blue/12 bg-white text-ink-900 hover:border-brand-blue/35"
                  }`}
                >
                  <span className="row-span-2 font-display text-xl font-extrabold">{row.size}</span>
                  <span className={`text-right text-sm font-bold ${row.size === size ? "text-white" : "text-brand-blue"}`}>
                    {perKgCurrency.format(row.perKg)} / kg
                  </span>
                  <span className={`text-right text-xs ${row.size === size ? "text-white/75" : "text-steel-700"}`}>
                    {wholeCurrency.format(row.perTon)} / tonne
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 hidden max-w-full overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Workbook-backed ARS steel prices by diameter</caption>
              <thead>
                <tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700">
                  <th scope="col" className="py-3 pr-4">Diameter</th>
                  <th scope="col" className="py-3 pr-4">Price / kg</th>
                  <th scope="col" className="py-3 text-right">Price / tonne</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.size} className={`border-b border-ink-900/10 last:border-0 ${row.size === size ? "bg-brand-blue/[0.05]" : ""}`}>
                    <th scope="row" className="py-1 pr-4 font-bold text-brand-blue">
                      <button
                        type="button"
                        className="focus-ring inline-flex min-h-11 min-w-11 items-center rounded px-1"
                        onClick={() => setSize(row.size)}
                        aria-pressed={row.size === size}
                      >
                        {row.size}
                      </button>
                    </th>
                    <td className="py-3 pr-4 text-steel-700">{perKgCurrency.format(row.perKg)}</td>
                    <td className="py-3 text-right font-bold text-ink-900">{wholeCurrency.format(row.perTon)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-5 space-y-1 text-xs leading-5 text-steel-700">
            <li>Displayed workbook rates include GST.</li>
            <li>Each piece is approximately 12 m and remains subject to applicable BIS tolerances.</li>
            <li>Freight, transportation, loading and unloading are excluded.</li>
          </ul>
        </div>

        <aside className="grid min-w-0 gap-4 border-t border-ink-900/10 pt-7 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0" aria-label="Price summary and next steps">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-xl bg-white p-5" aria-live="polite" aria-atomic="true">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Selected rate · {selected.size}</p>
              <p className="mt-2 font-display text-3xl font-extrabold text-brand-blue">{wholeCurrency.format(selected.perTon)} / tonne</p>
              <p className="mt-1 text-sm text-steel-700">{perKgCurrency.format(selected.perKg)} per kg · GST included</p>
            </div>
            <div className="rounded-xl bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Current selection</p>
              <p className="mt-2 font-display text-xl font-bold text-ink-900">{product} · {region}</p>
              <p className="mt-1 text-sm text-steel-700">{city} · Indicative workbook rate. Confirm the order rate with ARS.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-ink-900/10 pt-4">
            <div className="rounded-xl bg-brand-blue p-5 text-white">
              <h2 className="text-lg font-bold leading-6">Get a Confirmed Price For this Selection</h2>
              <p className="mt-2 text-sm leading-6 text-white/80">Share your quantity and contact details. ARS will confirm the order rate with you.</p>
              <p className="mt-4 border-t border-white/20 pt-4 text-sm leading-6 text-white/90">{product} · {selected.size} · {region} · {city}</p>
              <form className="mt-5 grid gap-4 [--focus-ring:#fff]" data-lead-form onSubmit={handlePriceEnquiry} noValidate aria-busy={isSubmitting}>
                <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="price-website">Website</label><input id="price-website" name="website" tabIndex={-1} autoComplete="off" /></div>
                <div className="grid gap-1.5 text-sm font-semibold">
                  <label htmlFor="price-quantity">Required Quantity</label>
                  <div className="flex h-12 min-w-0 rounded-md border border-white/30 bg-white">
                    <input id="price-quantity" name="quantity" type="text" inputMode="decimal" autoComplete="off" maxLength={14} required placeholder="e.g. 2.5" className={`${priceFieldFocus} focus-ring h-full min-w-0 flex-1 rounded-l-md bg-transparent px-3.5 text-base font-normal text-ink-900 placeholder:text-steel-700/55`} aria-invalid={Boolean(errors.quantity)} aria-describedby={errors.quantity ? "price-quantity-error" : undefined} onChange={() => setErrors((current) => ({ ...current, quantity: "" }))} />
                    <div className="relative w-28 shrink-0 border-l border-brand-blue/15">
                      <select name="unit" aria-label="Quantity unit" defaultValue="tonnes" className={`${priceFieldFocus} focus-ring h-full w-full appearance-none rounded-r-md bg-white pl-3 pr-8 text-sm font-bold text-brand-blue`} aria-invalid={Boolean(errors.unit)} aria-describedby={errors.unit ? "price-unit-error" : undefined} onChange={() => setErrors((current) => ({ ...current, unit: "" }))}>
                        <option value="tonnes">Tonnes</option>
                        <option value="kg">Kg</option>
                      </select>
                      <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-blue" />
                    </div>
                  </div>
                  {errors.quantity ? <span id="price-quantity-error" className="text-xs text-white">{errors.quantity}</span> : null}
                  {errors.unit ? <span id="price-unit-error" className="text-xs text-white">{errors.unit}</span> : null}
                </div>
                <label className="grid gap-1.5 text-sm font-semibold" htmlFor="price-fullName">Name
                  <input id="price-fullName" name="fullName" autoComplete="name" maxLength={100} required className={`${priceFieldFocus} focus-ring h-12 min-w-0 w-full rounded-md border border-white/30 bg-white px-3.5 text-base font-normal text-ink-900`} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "price-fullName-error" : undefined} onChange={() => setErrors((current) => ({ ...current, fullName: "" }))} />
                  {errors.fullName ? <span id="price-fullName-error" className="text-xs text-white">{errors.fullName}</span> : null}
                </label>
                <label className="grid gap-1.5 text-sm font-semibold" htmlFor="price-phone">Phone
                  <input id="price-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" required className={`${priceFieldFocus} focus-ring h-12 min-w-0 w-full rounded-md border border-white/30 bg-white px-3.5 text-base font-normal text-ink-900 placeholder:text-steel-700/55`} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "price-phone-error" : undefined} onChange={() => setErrors((current) => ({ ...current, phone: "" }))} />
                  {errors.phone ? <span id="price-phone-error" className="text-xs text-white">{errors.phone}</span> : null}
                </label>
                <p className="text-xs leading-5 text-white/75">ARS will use these details to respond to your price enquiry. See our <Link href="/privacy-policy" className="focus-ring font-semibold text-white underline underline-offset-2">Privacy Policy</Link>.</p>
                <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-blue transition-colors hover:bg-surface-50 disabled:cursor-wait disabled:opacity-65">{isSubmitting ? "Sending…" : "Request Confirmed Price"} {!isSubmitting ? <ArrowRight size={16} aria-hidden="true" /> : null}</button>
                <p className="text-sm font-medium leading-6 text-white" role="status" aria-live="polite">{status}</p>
              </form>
            </div>
            <div className="rounded-xl border border-brand-blue/15 bg-white p-5">
              <p className="text-base font-semibold leading-6 text-ink-900">Estimate the steel quantity required for your project.</p>
              <Link className="focus-ring mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue" href="/tmt-steel-calculator">
                <Calculator aria-hidden="true" className="size-5" /> Calculate steel
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
