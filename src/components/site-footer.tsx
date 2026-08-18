import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { verifiedContactDetails } from "@/data/business-verification";

const footerGroups = [
  {
    title: "Company & Connect",
    links: [
      { label: "About ARS Group", href: "/about-us" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Leadership", href: "/our-team" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Quality", href: "/our-quality" },
      { label: "Steel Testing", href: "/steel-testing" },
      { label: "Certifications & Awards", href: "/our-certification" },
      { label: "CSR", href: "/csr" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "ARS CRS Fe 550D", href: "/product-crs-550d" },
      { label: "ARS Fe 550D TMT Bar", href: "/product-550d" },
      { label: "ARS Binders", href: "/ars-binders" },
      { label: "Product Comparison", href: "/products#comparison" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "Engineers & Architects", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "Dealers & Distributors", href: "/steel-distributors-dealers" },
      { label: "Road Projects", href: "/road-projects-tmt-steel-bars" },
      { label: "Bridges & Flyovers", href: "/bridges-projects-tmt-steel-bars" },
      { label: "Institutional Projects", href: "/institutions-projects-tmt-steel-bars" },
    ],
  },
  {
    title: "Learn & Explore",
    links: [
      { label: "Green Steel Explained", href: "/green-steel" },
      { label: "ARS Green Steel", href: "/ars-green-steel" },
      { label: "Embodied Carbon", href: "/embodied-carbon" },
      { label: "Environmental Certifications", href: "/green-certifications" },
      { label: "Reports & Downloads", href: "/our-certification#downloads" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Steel Price Today", href: "/tmt-steel-price-today" },
      { label: "TMT Calculator", href: "/tmt-steel-calculator" },
      { label: "Dealer Locator", href: "/our-network" },
      { label: "Become a Distributor", href: "/become-a-steel-distributor" },
      { label: "Blog & Articles", href: "/blog" },
      { label: "Videos", href: "/video" },
    ],
  },
];

const socialLinks = [
  { platform: "facebook", accessibleLabel: "ARS on Facebook", href: "https://www.facebook.com/ARSsteelsIndia" },
  { platform: "instagram", accessibleLabel: "ARS on Instagram", href: "https://www.instagram.com/arsgreensteel" },
  { platform: "youtube", accessibleLabel: "ARS on YouTube", href: "https://www.youtube.com/channel/UCmzQSAPi4oNfLTVPkRkbPXg" },
] as const;

function SocialIcon({ platform }: { platform: (typeof socialLinks)[number]["platform"] }) {
  if (platform === "facebook") {
    return (
      <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.1a2.8 2.8 0 0 0-2-2C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.9a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.9.4-4.9s0-3.1-.4-4.9ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  );
}

function FooterLinks({ group }: { group: (typeof footerGroups)[number] }) {
  return (
    <ul className="mt-4 grid gap-1">
      {group.links.map((link) => (
        <li key={link.label}>
          <Link
            className="focus-ring flex min-h-11 items-center text-sm leading-6 text-slate-300 transition hover:text-white"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071126] text-white">
      <section className="border-b border-white/10">
        <div className="ars-container grid gap-10 py-12 md:py-16 lg:grid-cols-[0.9fr_1.35fr] lg:items-start lg:gap-16">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-3" aria-label="ARS Green Steel home">
              <Image
                src="/ars-green-steel-light.svg"
                alt="ARS Green Steel"
                width={213}
                height={100}
                className="h-auto w-[168px] md:w-[186px]"
              />
            </Link>
          </div>

          <div className="rounded-[18px] border border-white/12 bg-white/[0.035] p-6 md:p-8">
            <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white">Contact ARS</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <a
                className="focus-ring flex min-h-11 items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                href="tel:+919710411111"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-white" />
                <span><strong className="block text-white">Customer Care</strong>{verifiedContactDetails.mobile}</span>
              </a>
              <Link
                className="focus-ring flex min-h-11 items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                href="/contact"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-white" />
                <span><strong className="block text-white">Email support</strong>Use the enquiry form</span>
              </Link>
              <a
                className="focus-ring flex min-h-11 items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                href={`tel:${verifiedContactDetails.officePhoneCompact}`}
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-white" />
                <span><strong className="block text-white">Office</strong>{verifiedContactDetails.officePhone}</span>
              </a>
              <address className="flex items-start gap-3 text-sm not-italic leading-6 text-slate-300 md:col-span-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white" />
                <span><strong className="block text-white">Corporate office</strong>{verifiedContactDetails.corporateOffice}</span>
              </address>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
                href="/request-quote"
              >
                Request quote <ArrowRight size={15} />
              </Link>
              <Link
                className="focus-ring inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:border-white/40"
                href="/steel-distributors-dealers"
              >
                Become a dealer
              </Link>
              <Link
                className="focus-ring inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:border-white/40"
                href="/contact"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-2 sm:ml-auto">
                {socialLinks.map((item) => {
                  return (
                    <a
                      key={item.platform}
                      aria-label={item.accessibleLabel}
                      className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-white/40 hover:text-white"
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <SocialIcon platform={item.platform} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="ars-container py-8 md:py-12 lg:py-14">
          <div className="hidden gap-x-8 gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={`${group.title} footer links`}>
                <h2 className="font-technical text-xs font-black uppercase leading-5 tracking-[0.22em] text-white">
                  {group.title}
                </h2>
                <FooterLinks group={group} />
              </nav>
            ))}
          </div>

          <div className="divide-y divide-white/10 md:hidden">
            {footerGroups.map((group) => (
              <details key={group.title} className="group">
                <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between font-technical text-xs font-black uppercase tracking-[0.22em] text-white [&::-webkit-details-marker]:hidden">
                  {group.title}
                  <ChevronDown size={16} className="text-slate-300 transition group-open:rotate-180" />
                </summary>
                <nav aria-label={`${group.title} footer links`} className="pb-5 pl-1">
                  <FooterLinks group={group} />
                </nav>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="ars-container flex flex-col gap-5 py-7 text-xs leading-5 text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 ARS Steels & Alloy International Pvt. Ltd. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal links">
            <Link className="focus-ring inline-flex min-h-11 items-center transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="focus-ring inline-flex min-h-11 items-center transition hover:text-white" href="/terms-of-use">
              Terms of Use
            </Link>
            <Link className="focus-ring inline-flex min-h-11 items-center transition hover:text-white" href="/sitemap.xml">
              Sitemap
            </Link>
          </nav>
        </div>
      </section>
    </footer>
  );
}
