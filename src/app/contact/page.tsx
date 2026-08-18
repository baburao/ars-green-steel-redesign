import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Factory,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { ContactEnquiryForm } from "@/components/contact-enquiry-form";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, verifiedContactDetails } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "Contact ARS Green Steel",
  description:
    "Contact ARS Green Steel for TMT bar pricing, dealer support, product guidance, and project enquiries.",
  path: "/contact",
});

const salesPhoneHref = `tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`;
const officePhoneHref = `tel:${verifiedContactDetails.officePhoneCompact.replace(/\s/g, "")}`;

const contactChannels = [
  {
    icon: Phone,
    label: "Customer helpline",
    title: verifiedContactDetails.mobile,
    text: "For product, pricing, quote, dealer, and project enquiry support.",
    href: salesPhoneHref,
    cta: "Call sales",
  },
  {
    icon: Building2,
    label: "Corporate office",
    title: verifiedContactDetails.officePhone,
    text: "For office communication and business support.",
    href: officePhoneHref,
    cta: "Call office",
  },
  {
    icon: Mail,
    label: "Email support",
    title: "Use enquiry form",
    text: "Send product, dealer, technical, or business enquiries through this form.",
    href: "#enquiry",
    cta: "Send enquiry",
  },
];

const enquiryRoutes = [
  {
    icon: ClipboardList,
    title: "Request a quote",
    text: "Share grade, size, quantity, location, and project stage.",
    href: "/request-quote",
  },
  {
    icon: Store,
    title: "Find dealer support",
    text: "Move product interest toward local availability and supply guidance.",
    href: "/our-network",
  },
  {
    icon: ShieldCheck,
    title: "Verify product proof",
    text: "Ask for specifications, testing context, and certification documents.",
    href: "/our-certification",
  },
];

const officeDetails = [
  {
    icon: Building2,
    title: "Corporate office",
    detail: verifiedContactDetails.corporateOffice,
    meta: `Phone: ${verifiedContactDetails.officePhone} / Fax: ${verifiedContactDetails.fax}`,
  },
  {
    icon: Factory,
    title: "Steel plant",
    detail: verifiedContactDetails.plant,
    meta: `Phones: ${verifiedContactDetails.plantPhones} / Fax: ${verifiedContactDetails.fax}`,
  },
];

const usefulDetails = [
  "Product grade: ARS Fe 550D or ARS CRS Fe 550D",
  "Bar size and approximate quantity",
  "Delivery city or project location",
  "Project type and timeline",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-white">
        <div className="ars-page-hero-content h-full ars-container grid gap-12 py-16 md:py-20 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-10">
          <div>
            <SectionKicker>Contact ARS</SectionKicker>
            <h1 className="max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.96] tracking-[-0.035em] text-ink-900">
              Start the right steel conversation.
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-steel-700 md:text-lg">
              {clientVerificationSummary.contact} Share the right details once, and move faster toward
              pricing, dealer support, or product proof.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-[#c90f16]"
              >
                Get quote <ArrowRight size={18} />
              </Link>
              <Link
                href={salesPhoneHref}
                className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full border border-ink-900/14 bg-white px-8 text-base font-bold text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
              >
                <Phone size={18} /> Call sales
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[22px] bg-brand-blue p-4 text-white shadow-[0_28px_100px_rgba(13,43,110,0.22)] lg:p-3">
              <div className="relative h-[240px] overflow-hidden rounded-[16px] bg-ink-950 md:h-[330px] lg:h-[190px]">
                <Image
                  src="/ars-assets/Contact_banner.png"
                  alt="ARS contact and support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1e]/80 via-[#060d1e]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[14px] border border-white/16 bg-white/[0.12] p-4 backdrop-blur">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                    Response path
                  </p>
                  <p className="mt-2 text-xl font-bold leading-snug text-white">
                    Product, price, dealer, and project enquiries in one place.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 pt-4 lg:gap-2 lg:pt-3">
                {contactChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="focus-ring group grid gap-4 rounded-[16px] border border-white/12 bg-white/[0.08] p-4 transition hover:bg-white/[0.12] sm:grid-cols-[44px_1fr_auto] sm:items-center lg:gap-3 lg:p-3"
                    >
                      <span className="inline-flex size-11 items-center justify-center rounded-[12px] bg-white/[0.12] text-white">
                        <Icon size={19} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-base font-bold text-white">{item.title}</span>
                        <span className="mt-1 block text-sm leading-6 text-white/70">{item.text}</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-white/80 transition group-hover:gap-3 group-hover:text-white">
                        {item.cta} <ArrowRight size={15} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <SectionKicker>Choose your route</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Move from enquiry to the right ARS team.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-steel-700">
              Keep the next step specific. Price, dealer, quote, and product-proof requests should not
              compete with each other.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {enquiryRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.title}
                  href={route.href}
                  className="focus-ring group flex min-h-[250px] flex-col justify-between rounded-[18px] border border-ink-900/10 bg-white p-6 shadow-[0_18px_60px_rgba(13,43,110,0.06)] transition hover:-translate-y-1 hover:border-brand-blue/35"
                >
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-brand-blue/[0.06] text-brand-blue ring-1 ring-brand-blue/10">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-bold tracking-[-0.02em] text-ink-900">
                      {route.title}
                    </span>
                    <span className="mt-4 block text-[15px] leading-7 text-steel-700">{route.text}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition group-hover:gap-3">
                    Start here <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <SectionKicker>Before you submit</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Send the details sales teams actually need.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-steel-700">
              A clearer enquiry creates a faster reply. These four details help ARS route your request to
              the right product, dealer, or project support conversation.
            </p>
            <div className="mt-8 grid gap-3">
              {usefulDetails.map((item) => (
                <div key={item} className="flex gap-3 rounded-[14px] border border-ink-900/8 bg-surface-50 p-4 text-sm font-semibold leading-6 text-steel-700">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ContactEnquiryForm />
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 text-white md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
            <div>
              <SectionKicker variant="light">Office and plant</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Verified contact locations.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-white/70">
              Reach ARS through the corporate office or manufacturing plant using the verified contact
              details below.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {officeDetails.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[18px] border border-white/12 bg-white/[0.07] p-6"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="inline-flex size-13 items-center justify-center rounded-[14px] border border-white/14 bg-white/[0.08] text-white">
                      <Icon size={22} />
                    </span>
                    <MapPin size={18} className="text-brand-red" />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-white/70">{item.detail}</p>
                  <p className="mt-5 border-t border-white/10 pt-5 text-sm font-semibold leading-6 text-white/75">
                    {item.meta}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

    </main>
  );
}
