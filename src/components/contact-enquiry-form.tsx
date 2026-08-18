"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionKicker } from "@/components/section-kicker";
import { verifiedContactDetails } from "@/data/business-verification";
import { trackGenerateLead } from "@/lib/analytics";

type FormStatus = { tone: "idle" | "success" | "error"; message: string };

const enquiryTypes = [
  "Product pricing",
  "Project quote",
  "Dealer support",
  "Technical documents",
  "Business enquiry",
];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldOrder = ["fullName", "phone", "email", "enquiryType", "city", "requirement"];

function RequiredLabel({ children }: { children: string }) {
  return <span>{children}<span className="text-brand-red" aria-hidden="true"> *</span><span className="sr-only"> required</span></span>;
}

export function ContactEnquiryForm() {
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
    const enquiryType = String(data.get("enquiryType") ?? "");
    const city = String(data.get("city") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();

    if (fullName.length < 2) nextErrors.fullName = "Please enter your full name.";
    else if (fullName.length > 100) nextErrors.fullName = "Full name must be 100 characters or fewer.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) nextErrors.phone = "Please enter a valid Indian mobile number.";
    if (!emailPattern.test(email) || email.length > 254) nextErrors.email = "Please enter a valid email address.";
    if (!enquiryTypes.includes(enquiryType)) nextErrors.enquiryType = "Please select an enquiry type.";
    if (city.length < 2) nextErrors.city = "Please enter your city or location.";
    else if (city.length > 120) nextErrors.city = "City or location must be 120 characters or fewer.";
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
      const response = await fetch("/api/contact-enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, phone: phoneInput, email, enquiryType, city, requirement,
          sourcePage: "/contact", website: String(data.get("website") ?? ""), submissionId,
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (!response.ok || !result.ok) {
        const serverErrors = result.errors ?? {};
        setErrors(serverErrors);
        setStatus({ tone: "error", message: result.message ?? "We could not send your enquiry. Please try again or call the ARS sales team." });
        focusFirstError(form, serverErrors);
        return;
      }

      if (response.status === 201) {
        isRedirecting = true;
        trackGenerateLead({ formType: "contact_enquiry", formId: "contact_enquiry" });
        router.replace("/thank-you?form=contact");
        return;
      }

      form.reset();
      setErrors({});
      setSubmissionId(crypto.randomUUID());
      setStatus({ tone: "success", message: result.message ?? "Thank you. Your enquiry has been sent to the ARS team." });
    } catch {
      setStatus({ tone: "error", message: "We could not send your enquiry. Please check your connection and try again." });
    } finally {
      if (!isRedirecting) setIsSubmitting(false);
    }
  }

  const describedBy = (field: string) => errors[field] ? `contact-${field}-error` : undefined;
  const errorMessage = (field: string) => errors[field] && <span id={`contact-${field}-error`} className="text-sm font-normal text-brand-red">{errors[field]}</span>;

  return (
    <div className="rounded-[18px] border border-ink-900/10 bg-white p-5 shadow-[0_24px_80px_rgba(13,43,110,0.08)] md:p-7">
      <div className="mb-7">
        <SectionKicker>Sales enquiry</SectionKicker>
        <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Share your requirement.</h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-steel-700">Share your requirement and contact details. The ARS team will help route your enquiry to the right sales, dealer, or technical support contact.</p>
      </div>

      <form className="grid gap-5" id="enquiry" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
        <input type="hidden" name="sourcePage" value="/contact" />
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass} htmlFor="contact-fullName"><RequiredLabel>Full Name</RequiredLabel><input id="contact-fullName" name="fullName" autoComplete="name" required maxLength={100} className={`${controlClass} ${errors.fullName ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.fullName)} aria-describedby={describedBy("fullName")} onChange={() => clearFieldError("fullName")} />{errorMessage("fullName")}</label>
          <label className={labelClass} htmlFor="contact-phone"><RequiredLabel>Phone</RequiredLabel><input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91 98765 43210" className={`${controlClass} ${errors.phone ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} onChange={() => clearFieldError("phone")} />{errorMessage("phone")}</label>
        </div>

        <label className={labelClass} htmlFor="contact-email"><RequiredLabel>Email</RequiredLabel><input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} className={`${controlClass} ${errors.email ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} onChange={() => clearFieldError("email")} />{errorMessage("email")}</label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass} htmlFor="contact-enquiryType"><RequiredLabel>Enquiry Type</RequiredLabel><select id="contact-enquiryType" name="enquiryType" defaultValue="" required className={`${controlClass} ${errors.enquiryType ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.enquiryType)} aria-describedby={describedBy("enquiryType")} onChange={() => clearFieldError("enquiryType")}><option value="" disabled>Select enquiry type</option>{enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select>{errorMessage("enquiryType")}</label>
          <label className={labelClass} htmlFor="contact-city"><RequiredLabel>City / Location</RequiredLabel><input id="contact-city" name="city" autoComplete="address-level2" required maxLength={120} placeholder="Project city" className={`${controlClass} ${errors.city ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.city)} aria-describedby={describedBy("city")} onChange={() => clearFieldError("city")} />{errorMessage("city")}</label>
        </div>

        <label className={labelClass} htmlFor="contact-requirement">Requirement <span className="font-normal text-steel-700">(optional)</span><textarea id="contact-requirement" name="requirement" maxLength={1000} className={`focus-ring min-h-36 rounded-[6px] border bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue ${errors.requirement ? "border-brand-red" : "border-ink-900/12"}`} placeholder="Tell us grade, size, quantity, delivery location, or project stage." aria-invalid={Boolean(errors.requirement)} aria-describedby={describedBy("requirement")} onChange={() => clearFieldError("requirement")} />{errorMessage("requirement")}</label>

        <p className="text-sm leading-6 text-steel-700">By submitting this form, you agree to be contacted by ARS Green Steel regarding your enquiry. View our <Link href="/privacy-policy" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">Privacy Policy</Link>.</p>
        <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16] disabled:cursor-wait disabled:opacity-65">{isSubmitting ? "Submitting…" : "Send Enquiry"} {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}</button>
        <div aria-live="polite" aria-atomic="true">{status.message && <p className={`text-sm font-semibold leading-6 ${status.tone === "success" ? "text-brand-blue" : "text-brand-red"}`}>{status.message}</p>}</div>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center"><p className="text-sm leading-6 text-steel-700">Our team will review your enquiry and contact you using the details provided.</p><a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/12 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue" href={`tel:${phoneHref}`}><Phone size={17} aria-hidden="true" /> Call sales</a></div>
      </form>
    </div>
  );
}
