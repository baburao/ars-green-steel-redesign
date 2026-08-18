"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { verifiedContactDetails } from "@/data/business-verification";
import { trackGenerateLead } from "@/lib/analytics";

type ProductLeadCaptureFormProps = {
  product: "ARS Fe 550D" | "ARS CRS Fe 550D" | "ARS Binders";
  trustItems: string[];
  showCallSales?: boolean;
};

type FormStatus = { tone: "idle" | "success" | "error"; message: string };

const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"];
const sourcePages: Record<ProductLeadCaptureFormProps["product"], string> = {
  "ARS Fe 550D": "/product-550d",
  "ARS CRS Fe 550D": "/product-crs-550d",
  "ARS Binders": "/ars-binders",
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RequiredLabel({ children }: { children: string }) {
  return <span>{children}<span className="text-brand-red" aria-hidden="true"> *</span><span className="sr-only"> required</span></span>;
}

export function ProductLeadCaptureForm({ product, trustItems, showCallSales = true }: ProductLeadCaptureFormProps) {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>({ tone: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());
  const fieldId = `${product.toLowerCase().replaceAll(" ", "-")}-quote`;

  function clearFieldError(field: string) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status.tone === "error") setStatus({ tone: "idle", message: "" });
  }

  function focusFirstError(form: HTMLFormElement, nextErrors: Record<string, string>) {
    const firstField = ["fullName", "phone", "email", "state", "city", "requirement"].find((name) => nextErrors[name]);
    if (!firstField) return;
    const control = form.elements.namedItem(firstField);
    if (control instanceof HTMLElement) control.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const fullName = String(data.get("fullName") ?? "").trim();
    const phoneInput = String(data.get("phone") ?? "");
    const phoneDigits = phoneInput.replace(/\D/g, "");
    const localPhone = phoneDigits.startsWith("91") && phoneDigits.length === 12 ? phoneDigits.slice(2) : phoneDigits;
    const email = String(data.get("email") ?? "").trim().toLowerCase();
    const state = String(data.get("state") ?? "");
    const city = String(data.get("city") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();

    if (fullName.length < 2) nextErrors.fullName = "Please enter your full name.";
    else if (fullName.length > 100) nextErrors.fullName = "Full name must be 100 characters or fewer.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) nextErrors.phone = "Please enter a valid Indian mobile number.";
    if (!emailPattern.test(email) || email.length > 254) nextErrors.email = "Please enter a valid email address.";
    if (!states.includes(state)) nextErrors.state = "Please select a state.";
    if (city.length < 2) nextErrors.city = "Please enter the city or project location.";
    else if (city.length > 120) nextErrors.city = "City or project location must be 120 characters or fewer.";
    if (requirement.length > 1000) nextErrors.requirement = "Requirement must be 1,000 characters or fewer.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ tone: "error", message: "Please correct the highlighted fields." });
      focusFirstError(form, nextErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ tone: "idle", message: "" });
    let isRedirecting = false;
    try {
      const response = await fetch("/api/product-enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, phone: phoneInput, email, state, city, requirement, product,
          sourcePage: sourcePages[product], website: String(data.get("website") ?? ""), submissionId,
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };

      if (!response.ok || !result.ok) {
        const serverErrors = result.errors ?? {};
        setErrors(serverErrors);
        setStatus({ tone: "error", message: result.message ?? "We could not send your enquiry. Please try again." });
        focusFirstError(form, serverErrors);
        return;
      }

      if (response.status === 201) {
        isRedirecting = true;
        trackGenerateLead({
          formType: "product_enquiry",
          formId: "product_lead_capture",
          product,
        });
        router.replace("/thank-you?form=product");
        return;
      }

      form.reset();
      setErrors({});
      setSubmissionId(crypto.randomUUID());
      setStatus({ tone: "success", message: result.message ?? "Thank you. Your enquiry has been sent." });
    } catch {
      setStatus({ tone: "error", message: "We could not send your enquiry. Please check your connection and try again." });
    } finally {
      if (!isRedirecting) setIsSubmitting(false);
    }
  }

  const phone = verifiedContactDetails.mobile.replace(/\s/g, "");
  const controlClass = "focus-ring h-12 rounded-[6px] border bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue";
  const labelClass = "grid gap-2 text-sm font-bold text-ink-900";
  const describedBy = (field: string) => errors[field] ? `${fieldId}-${field}-error` : undefined;
  const errorMessage = (field: string) => errors[field] && <span id={`${fieldId}-${field}-error`} className="text-sm font-normal text-brand-red">{errors[field]}</span>;

  return (
    <section className="bg-surface-50 py-20 md:py-24" aria-labelledby={`${fieldId}-title`}>
      <div className="ars-container">
        <div className="grid overflow-hidden rounded-[8px] border border-ink-900/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-brand-blue p-7 text-white md:p-10 lg:p-12">
            <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/60">Product enquiry</p>
            <h2 id={`${fieldId}-title`} className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.06] text-white">Get a Quote for {product}</h2>
            <p className="mt-5 text-base leading-7 text-white/75">Share your project location and contact details so our sales team can respond with the right product support.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Product proof points">
              {trustItems.map((item, index) => (
                <li key={item} className="relative min-h-28 border border-white/15 bg-white/[0.08] p-4">
                  <div className="flex items-start justify-between gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_6px_16px_rgba(222,18,26,0.28)]"><CheckCircle2 size={16} aria-hidden="true" /></span><span className="border border-white/20 px-2 py-1 font-technical text-[10px] font-bold tracking-[0.16em] text-white/65" aria-hidden="true">0{index + 1}</span></div>
                  <span className="mt-4 block max-w-[12rem] text-sm font-bold leading-5 text-white">{item}</span>
                </li>
              ))}
            </ul>
            {showCallSales && <a href={`tel:${phone}`} className="focus-ring mt-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10"><Phone size={16} aria-hidden="true" /> Call Sales</a>}
          </div>

          <div className="p-7 md:p-10 lg:p-12">
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
              <input type="hidden" name="product" value={product} />
              <input type="hidden" name="sourcePage" value={sourcePages[product]} />
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor={`${fieldId}-website`}>Website</label><input id={`${fieldId}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass} htmlFor={`${fieldId}-fullName`}><RequiredLabel>Full Name</RequiredLabel><input id={`${fieldId}-fullName`} name="fullName" autoComplete="name" required maxLength={100} className={`${controlClass} ${errors.fullName ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.fullName)} aria-describedby={describedBy("fullName")} onChange={() => clearFieldError("fullName")} />{errorMessage("fullName")}</label>
                <label className={labelClass} htmlFor={`${fieldId}-phone`}><RequiredLabel>Phone</RequiredLabel><input id={`${fieldId}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91 98765 43210" className={`${controlClass} ${errors.phone ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} onChange={() => clearFieldError("phone")} />{errorMessage("phone")}</label>
              </div>

              <label className={labelClass} htmlFor={`${fieldId}-email`}><RequiredLabel>Email</RequiredLabel><input id={`${fieldId}-email`} name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} className={`${controlClass} ${errors.email ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} onChange={() => clearFieldError("email")} />{errorMessage("email")}</label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass} htmlFor={`${fieldId}-state`}><RequiredLabel>State</RequiredLabel><select id={`${fieldId}-state`} name="state" defaultValue="" required className={`${controlClass} ${errors.state ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.state)} aria-describedby={describedBy("state")} onChange={() => clearFieldError("state")}><option value="" disabled>Select state</option>{states.map((state) => <option key={state} value={state}>{state}</option>)}</select>{errorMessage("state")}</label>
                <label className={labelClass} htmlFor={`${fieldId}-city`}><RequiredLabel>City / Project Location</RequiredLabel><input id={`${fieldId}-city`} name="city" autoComplete="address-level2" required maxLength={120} placeholder="Enter city or project location" className={`${controlClass} ${errors.city ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.city)} aria-describedby={describedBy("city")} onChange={() => clearFieldError("city")} />{errorMessage("city")}</label>
              </div>

              <label className={labelClass} htmlFor={`${fieldId}-requirement`}>Requirement <span className="font-normal text-steel-700">(optional)</span><textarea id={`${fieldId}-requirement`} name="requirement" maxLength={1000} className={`focus-ring min-h-32 rounded-[6px] border bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue ${errors.requirement ? "border-brand-red" : "border-ink-900/12"}`} placeholder="Size, quantity, delivery location, or project stage" aria-invalid={Boolean(errors.requirement)} aria-describedby={describedBy("requirement")} onChange={() => clearFieldError("requirement")} />{errorMessage("requirement")}</label>

              <p className="text-sm leading-6 text-steel-700">By submitting this form, you agree to be contacted by ARS Green Steel regarding your enquiry. View our <Link href="/privacy-policy" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">Privacy Policy</Link>.</p>
              <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16] disabled:cursor-wait disabled:opacity-65">{isSubmitting ? "Submitting…" : "Get a Quote"} {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}</button>
              <div aria-live="polite" aria-atomic="true">{status.message && <p className={`text-sm font-semibold leading-6 ${status.tone === "success" ? "text-brand-blue" : "text-brand-red"}`}>{status.message}</p>}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
