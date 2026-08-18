"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { verifiedContactDetails } from "@/data/business-verification";
import { trackGenerateLead } from "@/lib/analytics";

type FormStatus = { tone: "idle" | "success" | "error"; message: string };

const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"];
const userTypes = [
  "Dealer", "Distributor", "Individual", "Builder", "Contractor", "Engineer",
  "Bar Bender", "Mason", "Architect", "Others",
];
const enquiryTypes = [
  "Business Enquiry", "Export Enquiry", "Suggestion", "Market Feedback",
  "Dealer Support", "Complaint", "Others",
];
const fieldOrder = [
  "fullName", "phone", "email", "state", "district", "pincode",
  "userType", "enquiryType", "enquiryDetails",
];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RequiredLabel({ children }: { children: string }) {
  return <span>{children}<span className="text-brand-red" aria-hidden="true"> *</span><span className="sr-only"> required</span></span>;
}

export function DistributorEnquiryForm() {
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
    const district = String(data.get("district") ?? "").trim();
    const pincode = String(data.get("pincode") ?? "").replace(/\D/g, "");
    const userType = String(data.get("userType") ?? "");
    const enquiryType = String(data.get("enquiryType") ?? "");
    const enquiryDetails = String(data.get("enquiryDetails") ?? "").trim();

    if (fullName.length < 2) nextErrors.fullName = "Please enter your full name.";
    else if (fullName.length > 100) nextErrors.fullName = "Full name must be 100 characters or fewer.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) nextErrors.phone = "Please enter a valid Indian mobile number.";
    if (!emailPattern.test(email) || email.length > 254) nextErrors.email = "Please enter a valid email address.";
    if (!states.includes(state)) nextErrors.state = "Please select a state.";
    if (district.length < 2) nextErrors.district = "Please enter your district.";
    else if (district.length > 100) nextErrors.district = "District must be 100 characters or fewer.";
    if (!/^[1-9]\d{5}$/.test(pincode)) nextErrors.pincode = "Please enter a valid six-digit Indian pincode.";
    if (!userTypes.includes(userType)) nextErrors.userType = "Please select a user type.";
    if (!enquiryTypes.includes(enquiryType)) nextErrors.enquiryType = "Please select an enquiry type.";
    if (enquiryDetails.length < 10) nextErrors.enquiryDetails = "Please provide at least 10 characters about your enquiry.";
    else if (enquiryDetails.length > 1500) nextErrors.enquiryDetails = "Enquiry details must be 1,500 characters or fewer.";

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
      const response = await fetch("/api/distributor-enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, phone: phoneInput, email, state, district, pincode, userType,
          enquiryType, enquiryDetails, sourcePage: "/become-a-steel-distributor",
          website: String(data.get("website") ?? ""), submissionId,
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (!response.ok || !result.ok) {
        const serverErrors = result.errors ?? {};
        setErrors(serverErrors);
        setStatus({ tone: "error", message: result.message ?? "We could not send your distributor enquiry. Please try again or call ARS sales." });
        focusFirstError(form, serverErrors);
        return;
      }

      if (response.status === 201) {
        isRedirecting = true;
        trackGenerateLead({ formType: "distributor_enquiry", formId: "distributor_enquiry" });
        router.replace("/thank-you?form=distributor");
        return;
      }

      form.reset();
      setErrors({});
      setSubmissionId(crypto.randomUUID());
      setStatus({ tone: "success", message: result.message ?? "Thank you. Your distributor enquiry has been sent to the ARS team." });
    } catch {
      setStatus({ tone: "error", message: "We could not send your distributor enquiry. Please check your connection and try again." });
    } finally {
      if (!isRedirecting) setIsSubmitting(false);
    }
  }

  const describedBy = (field: string) => errors[field] ? `distributor-${field}-error` : undefined;
  const errorMessage = (field: string) => errors[field] && <span id={`distributor-${field}-error`} className="text-sm font-normal text-brand-red">{errors[field]}</span>;

  return (
    <div className="grid overflow-hidden rounded-[8px] border border-ink-900/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[0.72fr_1.28fr]">
      <div className="bg-brand-blue p-7 text-white md:p-10 lg:p-12">
        <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/60">Distributor enquiry</p>
        <h2 id="distributor-enquiry-title" className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.06] text-white">Start your distributor enquiry.</h2>
        <p className="mt-5 text-base leading-7 text-white/75">Share your business profile and location so the ARS team can route your enquiry to the right partnership or support contact.</p>
        <ul className="mt-8 grid gap-4 text-sm font-semibold leading-6 text-white/85">
          {["Dedicated partnership review", "Product and network guidance", "Direct ARS follow-up"].map((item) => <li key={item} className="flex gap-3 border-t border-white/14 pt-4"><BadgeCheck className="mt-0.5 shrink-0 text-white" size={18} aria-hidden="true" />{item}</li>)}
        </ul>
        <a href={`tel:${phoneHref}`} className="focus-ring mt-10 inline-flex min-h-12 items-center gap-2 rounded-[6px] border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10"><Phone size={17} aria-hidden="true" /> Call {verifiedContactDetails.mobile}</a>
      </div>

      <div className="p-7 md:p-10 lg:p-12">
        <form className="grid gap-5" aria-labelledby="distributor-enquiry-title" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <input type="hidden" name="sourcePage" value="/become-a-steel-distributor" />
          <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="distributor-website">Website</label><input id="distributor-website" name="website" tabIndex={-1} autoComplete="off" /></div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass} htmlFor="distributor-fullName"><RequiredLabel>Full Name</RequiredLabel><input id="distributor-fullName" name="fullName" autoComplete="name" required maxLength={100} className={`${controlClass} ${errors.fullName ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.fullName)} aria-describedby={describedBy("fullName")} onChange={() => clearFieldError("fullName")} />{errorMessage("fullName")}</label>
            <label className={labelClass} htmlFor="distributor-phone"><RequiredLabel>Phone</RequiredLabel><input id="distributor-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91 98765 43210" className={`${controlClass} ${errors.phone ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone")} onChange={() => clearFieldError("phone")} />{errorMessage("phone")}</label>
          </div>

          <label className={labelClass} htmlFor="distributor-email"><RequiredLabel>Email</RequiredLabel><input id="distributor-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} className={`${controlClass} ${errors.email ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} onChange={() => clearFieldError("email")} />{errorMessage("email")}</label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass} htmlFor="distributor-state"><RequiredLabel>State</RequiredLabel><select id="distributor-state" name="state" defaultValue="" required className={`${controlClass} ${errors.state ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.state)} aria-describedby={describedBy("state")} onChange={() => clearFieldError("state")}><option value="" disabled>Select state</option>{states.map((state) => <option key={state} value={state}>{state}</option>)}</select>{errorMessage("state")}</label>
            <label className={labelClass} htmlFor="distributor-district"><RequiredLabel>District</RequiredLabel><input id="distributor-district" name="district" autoComplete="address-level2" required maxLength={100} className={`${controlClass} ${errors.district ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.district)} aria-describedby={describedBy("district")} onChange={() => clearFieldError("district")} />{errorMessage("district")}</label>
          </div>

          <label className={labelClass} htmlFor="distributor-pincode"><RequiredLabel>Pincode</RequiredLabel><input id="distributor-pincode" name="pincode" inputMode="numeric" autoComplete="postal-code" required maxLength={10} placeholder="600001" className={`${controlClass} ${errors.pincode ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.pincode)} aria-describedby={describedBy("pincode")} onChange={() => clearFieldError("pincode")} />{errorMessage("pincode")}</label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass} htmlFor="distributor-userType"><RequiredLabel>Type of User</RequiredLabel><select id="distributor-userType" name="userType" defaultValue="" required className={`${controlClass} ${errors.userType ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.userType)} aria-describedby={describedBy("userType")} onChange={() => clearFieldError("userType")}><option value="" disabled>Select user type</option>{userTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select>{errorMessage("userType")}</label>
            <label className={labelClass} htmlFor="distributor-enquiryType"><RequiredLabel>Enquiry Type</RequiredLabel><select id="distributor-enquiryType" name="enquiryType" defaultValue="" required className={`${controlClass} ${errors.enquiryType ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.enquiryType)} aria-describedby={describedBy("enquiryType")} onChange={() => clearFieldError("enquiryType")}><option value="" disabled>Select enquiry type</option>{enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select>{errorMessage("enquiryType")}</label>
          </div>

          <label className={labelClass} htmlFor="distributor-enquiryDetails"><RequiredLabel>Enquiry Details</RequiredLabel><textarea id="distributor-enquiryDetails" name="enquiryDetails" required minLength={10} maxLength={1500} className={`focus-ring min-h-36 rounded-[6px] border bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue ${errors.enquiryDetails ? "border-brand-red" : "border-ink-900/12"}`} placeholder="Tell us about your business, location, partnership interest, support request, or enquiry." aria-invalid={Boolean(errors.enquiryDetails)} aria-describedby={describedBy("enquiryDetails")} onChange={() => clearFieldError("enquiryDetails")} />{errorMessage("enquiryDetails")}</label>

          <p className="text-sm leading-6 text-steel-700">By submitting this form, you agree to be contacted by ARS Green Steel regarding your distributor enquiry. View our <Link href="/privacy-policy" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">Privacy Policy</Link>.</p>
          <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16] disabled:cursor-wait disabled:opacity-65">{isSubmitting ? "Submitting…" : "Send Distributor Enquiry"} {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}</button>
          <div aria-live="polite" aria-atomic="true">{status.message && <p className={`text-sm font-semibold leading-6 ${status.tone === "success" ? "text-brand-blue" : "text-brand-red"}`}>{status.message}</p>}</div>
        </form>
      </div>
    </div>
  );
}
