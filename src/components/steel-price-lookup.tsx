"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { calculatorBars, calculatorProducts, calculatorRegions, getRatePerKg } from "@/data/tmt-calculator";
import { verifiedContactDetails } from "@/data/business-verification";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const citiesByRegion: Record<string, string[]> = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Nellore"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam"],
};
const whatsappHref = `https://wa.me/${verifiedContactDetails.mobile.replace(/\D/g, "")}?text=${encodeURIComponent("Hello ARS, I would like today's steel price report.")}`;

export function SteelPriceLookup() {
  const [region, setRegion] = useState("Tamil Nadu");
  const [product, setProduct] = useState("ARS Fe 550D");
  const [size, setSize] = useState("8mm");
  const [city, setCity] = useState("Chennai");
  const prices = useMemo(() => calculatorBars.map((bar) => ({ ...bar, perKg: getRatePerKg(region, product, bar.size), perTon: getRatePerKg(region, product, bar.size) * 1000 })), [product, region]);
  const selected = prices.find((row) => row.size === size) ?? prices[0];

  return <div className="rounded-2xl border border-surface-100 bg-surface-50 p-5 md:p-7">
    <div className="mt-7 grid gap-7 lg:grid-cols-[6.5fr_5.5fr] lg:items-start">
      <div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Region<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={region} onChange={(event) => setRegion(event.target.value)}>{calculatorRegions.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Product<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={product} onChange={(event) => setProduct(event.target.value)}>{calculatorProducts.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">City<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={(citiesByRegion[region] ?? []).includes(city) ? city : citiesByRegion[region]?.[0]} onChange={(event) => setCity(event.target.value)}>{(citiesByRegion[region] ?? []).map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="mt-7 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm"><caption className="sr-only">Workbook-backed ARS steel prices by diameter</caption><thead><tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700"><th className="py-3 pr-4">Diameter</th><th className="py-3 pr-4">Price / kg</th><th className="py-3 text-right">Price / ton</th></tr></thead><tbody>{prices.map((row) => <tr key={row.size} className={`border-b border-ink-900/10 last:border-0 ${row.size === size ? "bg-brand-blue/[0.05]" : ""}`}><td className="py-3 pr-4 font-bold text-brand-blue"><button type="button" className="focus-ring rounded px-1" onClick={() => setSize(row.size)}>{row.size}</button></td><td className="py-3 pr-4 text-steel-700">{currency.format(row.perKg)}</td><td className="py-3 text-right font-bold text-ink-900">{currency.format(row.perTon)}</td></tr>)}</tbody></table>
        </div>
        <ul className="mt-5 space-y-1 text-xs leading-5 text-steel-700">
          <li>*The above prices are inclusive of all taxes.</li>
          <li>*Each piece is 12 m in length.</li>
          <li>*All dimensions are subject to BIS tolerances. Customers should satisfy themselves, as far as the number of pieces is concerned, at the time of delivery.</li>
          <li>*Delivery charges will be extra (transportation and loading/unloading).</li>
        </ul>
      </div>
      <aside className="grid gap-4 border-t border-ink-900/10 pt-7 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0" aria-label="Price summary and next steps">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Selected rate · {selected.size}</p><p className="mt-2 font-display text-3xl font-extrabold text-brand-blue">{currency.format(selected.perTon)} / ton</p><p className="mt-1 text-sm text-steel-700">{currency.format(selected.perKg)} per kg · GST included</p></div>
          <div className="rounded-xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Current selection</p><p className="mt-2 font-display text-xl font-bold text-ink-900">{product} · {region}</p><p className="mt-1 text-sm text-steel-700">{city} · Indicative workbook rate. Confirm today&apos;s order rate with ARS.</p></div>
        </div>
        <div className="flex flex-col gap-4 border-t border-ink-900/10 pt-4">
          <div className="rounded-xl bg-brand-blue p-5 text-white">
            <p className="text-base font-semibold leading-6">Get today&apos;s steel price report instantly on WhatsApp.</p>
            <a className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-blue transition-colors hover:bg-surface-50" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-5" />Send to WhatsApp</a>
          </div>
          <div className="rounded-xl border border-brand-blue/15 bg-white p-5">
            <p className="text-base font-semibold leading-6 text-ink-900">Estimate the steel quantity required for your project.</p>
            <a className="focus-ring mt-4 flex min-h-11 w-full items-center justify-center rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue" href="/tmt-steel-calculator">Calculate Steel</a>
          </div>
        </div>
      </aside>
    </div>
  </div>;
}
