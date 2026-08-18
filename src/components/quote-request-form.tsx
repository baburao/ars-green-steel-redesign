"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { verifiedContactDetails } from "@/data/business-verification";
import { trackGenerateLead } from "@/lib/analytics";

type QuoteRequestFormProps = { title: string; body: string };
type FormStatus = { tone: "idle" | "success" | "error"; message: string };

const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"];
const projectTypes = ["Residential", "Commercial", "Road / Infrastructure", "Dealer Enquiry"];
const productTypes = ["ARS CRS Fe 550D", "ARS Fe 550D", "Binders"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldOrder = ["fullName", "phone", "email", "state", "city", "projectType", "productType", "requirement"];

function RequiredLabel({ children }: { children: string }) {
  return <span>{children}<span className="text-brand-red" aria-hidden="true"> *</span><span className="sr-only"> required</span></span>;
}

export function QuoteRequestForm({ title, body }: QuoteRequestFormProps) {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>({ tone: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());
  const phoneHref = verifiedContactDetails.mobile.replace(/\s/g, "");
  const controlClass = "focus-ring h-12 rounded-[6px] border bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue";
  const labelClass = "grid gap-2 text-sm font-bold text-ink-900";

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
    const firstField = fieldOrder.find((name) => nextErrors[name]);
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
    const projectType = String(data.get("projectType") ?? "");
    const productType = String(data.get("productType") ?? "");
    const requirement = String(data.get("requirement") ?? "").trim();

    if (fullName.length < 2) nextErrors.fullName = "Please enter your full name.";
    else if (fullName.length > 100) nextErrors.fullName = "Full name must be 100 characters or fewer.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) nextErrors.phone = "Please enter a valid Indian mobile number.";
    if (!emailPattern.test(email) || email.length > 254) nextErrors.email = "Please enter a valid email address.";
    if (!states.includes(state)) nextErrors.state = "Please select a state.";
    if (city.length < 2) nextErrors.city = "Please enter the city or project location.";
    else if (city.length > 120) nextErrors.city = "City or project location must be 120 characters or fewer.";
    if (!projectTypes.includes(projectType)) nextErrors.projectType = "Please select a project type.";
    if (!productTypes.includes(productType)) nextErrors.productType = "Please select a product.";
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
      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, phone: phoneInput, email, state, city, projectType, productType, requirement,
          sourcePage: "/request-quote", website: String(data.get("website") ?? ""), submissionId,
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (!response.ok || !result.ok) {
        const serverErrors = result.errors ?? {};
        setErrors(serverErrors);
        setStatus({ tone: "error", message: result.message ?? "We could not send your quote request. Please try again or call ARS sales." });
        focusFirstError(form, serverErrors);
        return;
      }

      if (response.status === 201) {
        isRedirecting = true;
        trackGenerateLead({ formType: "quote_request", formId: "quote_request" });
        router.replace("/thank-you?form=quote");
        return;
      }

      form.reset();
      setErrors({});
      setSubmissionId(crypto.randomUUID());
      setStatus({ tone: "success", message: result.message ?? "Thank you. Your quote request has been sent to the ARS sales team." });
    } catch {
      setStatus({ tone: "error", message: "We could not send your quote request. Please check your connection and try again." });
    } finally {
      if (!isRedirecting) setIsSubmitting(false);
    }
  }

  const describedBy = (field: string) => errors[field] ? `quote-${field}-error` : undefined;
  const errorMessage = (field: string) => errors[field] && <span id={`quote-${field}-error`} className="text-sm font-normal text-brand-red">{errors[field]}</span>;

  return (
    <div className="rounded-[8px] border border-ink-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">Quote request</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.04] tracking-normal text-ink-900">{title}</h2>
        <p className="mt-4 text-base leading-7 text-steel-700">{body}</p>
      </div>

      <form className="grid gap-5" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
        <input type="hidden" name="sourcePage" value="/request-quote" />
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="quote-website">Website</label><input id="quote-website" name="website" tabIndex={-1} autoComplete="off" /></div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass} htmlFor="quote-fullName"><RequiredLabel>Full Name</RequiredLabel><input id="quote-fullName" name="fullName" autoComplete="name" required maxLength={100} className={`${controlClass} ${errors.fullName ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.fullName)} aria-describedby={describedBy("fullName")} onChange={() => clearFieldError("fullName")} />{errorMessage("fullName")}</label>
          <label className={labelClass} htmlFor="quote-phone"><RequiredLabel>Phone</RequiredLabel><input id="quote-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91 98765 43210" className={`${controlClass} ${errors.phone ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} onChange={() => clearFieldError("phone")} />{errorMessage("phone")}</label>
        </div>

        <label className={labelClass} htmlFor="quote-email"><RequiredLabel>Email</RequiredLabel><input id="quote-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} className={`${controlClass} ${errors.email ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} onChange={() => clearFieldError("email")} />{errorMessage("email")}</label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass} htmlFor="quote-state"><RequiredLabel>State</RequiredLabel><select id="quote-state" name="state" defaultValue="" required className={`${controlClass} ${errors.state ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.state)} aria-describedby={describedBy("state")} onChange={() => clearFieldError("state")}><option value="" disabled>Select state</option>{states.map((state) => <option key={state} value={state}>{state}</option>)}</select>{errorMessage("state")}</label>
          <label className={labelClass} htmlFor="quote-city"><RequiredLabel>City / Project Location</RequiredLabel><input id="quote-city" name="city" autoComplete="address-level2" required maxLength={120} className={`${controlClass} ${errors.city ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.city)} aria-describedby={describedBy("city")} onChange={() => clearFieldError("city")} />{errorMessage("city")}</label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass} htmlFor="quote-projectType"><RequiredLabel>Project Type</RequiredLabel><select id="quote-projectType" name="projectType" defaultValue="" required className={`${controlClass} ${errors.projectType ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.projectType)} aria-describedby={describedBy("projectType")} onChange={() => clearFieldError("projectType")}><option value="" disabled>Select project type</option>{projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select>{errorMessage("projectType")}</label>
          <label className={labelClass} htmlFor="quote-productType"><RequiredLabel>Product Type</RequiredLabel><select id="quote-productType" name="productType" defaultValue="" required className={`${controlClass} ${errors.productType ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.productType)} aria-describedby={describedBy("productType")} onChange={() => clearFieldError("productType")}><option value="" disabled>Select product</option>{productTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select>{errorMessage("productType")}</label>
        </div>

        <label className={labelClass} htmlFor="quote-requirement">Requirement <span className="font-normal text-steel-700">(optional)</span><textarea id="quote-requirement" name="requirement" maxLength={1000} className={`focus-ring min-h-32 rounded-[6px] border bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue ${errors.requirement ? "border-brand-red" : "border-ink-900/12"}`} placeholder="Share size, quantity, delivery location, project stage, or other details." aria-invalid={Boolean(errors.requirement)} aria-describedby={describedBy("requirement")} onChange={() => clearFieldError("requirement")} />{errorMessage("requirement")}</label>

        <p className="text-sm leading-6 text-steel-700">By submitting this form, you agree to be contacted by ARS Green Steel regarding your quote request. View our <Link href="/privacy-policy" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">Privacy Policy</Link>.</p>
        <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16] disabled:cursor-wait disabled:opacity-65">{isSubmitting ? "Submitting…" : "Send Quote Request"} {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}</button>
        <div aria-live="polite" aria-atomic="true">{status.message && <p className={`text-sm font-semibold leading-6 ${status.tone === "success" ? "text-brand-blue" : "text-brand-red"}`}>{status.message}</p>}</div>
        <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/12 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue sm:w-fit" href={`tel:${phoneHref}`}><Phone size={17} aria-hidden="true" /> Call {verifiedContactDetails.mobile}</a>
      </form>
    </div>
  );
}
