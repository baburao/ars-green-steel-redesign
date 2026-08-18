import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Thank You | ARS Green Steel",
    description: "Your enquiry has been received by ARS Green Steel.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
};

const confirmationCopy = {
  product: {
    kicker: "Product enquiry received",
    heading: "Thank you for your product enquiry.",
    body: "The ARS sales team has received your requirement and will contact you with the appropriate product support.",
  },
  quote: {
    kicker: "Quote request received",
    heading: "Thank you for requesting a quote.",
    body: "The ARS sales team has received your project details and will contact you about the next steps.",
  },
  contact: {
    kicker: "Enquiry received",
    heading: "Thank you for contacting ARS.",
    body: "The ARS team has received your enquiry and will route it to the appropriate sales, dealer, or technical contact.",
  },
  distributor: {
    kicker: "Partnership enquiry received",
    heading: "Thank you for your partnership enquiry.",
    body: "The ARS team has received your distributor enquiry and will contact you about the appropriate next steps.",
  },
} as const;

const defaultCopy = {
  kicker: "Enquiry received",
  heading: "Thank you for contacting ARS.",
  body: "Our team has received your enquiry and will be in touch with you shortly.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ form?: string | string[] }>;
}) {
  const form = (await searchParams).form;
  const formType = typeof form === "string" && Object.hasOwn(confirmationCopy, form)
    ? form as keyof typeof confirmationCopy
    : null;
  const copy = formType ? confirmationCopy[formType] : defaultCopy;

  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <section className="flex min-h-[70vh] items-center bg-white py-24">
        <div className="ars-container max-w-3xl text-center">
          <CheckCircle2 className="mx-auto text-brand-blue" size={52} aria-hidden="true" />
          <p className="mt-8 font-technical text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{copy.kicker}</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.035em] text-ink-900">{copy.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-steel-700">{copy.body}</p>
          <Link href="/" className="focus-ring mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Return to homepage <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
