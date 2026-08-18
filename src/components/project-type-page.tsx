import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CircleGauge, ShieldCheck, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { FaqList } from "@/components/faq-list";

type ProjectTypePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  rationale: { title: string; body: string };
  applicationsSection: { eyebrow: string; title: string };
  applications: { title: string; body: string }[];
  considerationsSection: { eyebrow: string; title: string };
  considerations: { title: string; body: string; icon: LucideIcon }[];
  relatedSection: { eyebrow: string; title: string; body: string };
  relatedLinks: { label: string; href: string }[];
  faqSection: { eyebrow: string; title: string };
  faq: { question: string; answer: string }[];
};

/**
 * Shared project-type architecture for Road, Bridges & Flyovers, and Institutional
 * Projects. Each route supplies verified, project-specific content and actions.
 */
export function ProjectTypePage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  rationale,
  applicationsSection,
  applications,
  considerationsSection,
  considerations,
  relatedSection,
  relatedLinks,
  faqSection,
  faq,
}: ProjectTypePageProps) {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative isolate flex items-center overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="steel-grid absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-[64%] bg-[radial-gradient(circle_at_center,rgba(13,43,110,0.76),transparent_64%)]" aria-hidden="true" />
        <div className="ars-container relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="focus-ring hover:text-white">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <Link href="/industries" className="focus-ring hover:text-white">Solutions</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span>Project Types</span>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(18rem,0.25fr)] lg:items-end">
            <div>
              <SectionKicker variant="light">{eyebrow}</SectionKicker>
              <h1 className="max-w-5xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-black uppercase leading-[0.94] tracking-normal">
                {title}
              </h1>
            </div>
            <div className="border-l border-white/20 pl-6 lg:pb-2">
              <p className="text-lg leading-8 text-slate-200">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href={primaryCta.href} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
                  {primaryCta.label} <ArrowRight size={18} />
                </Link>
                <Link href={secondaryCta.href} className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/35 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-ink-900">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <SectionKicker>Engineering rationale</SectionKicker>
            <h2 className="section-title">{rationale.title}</h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-steel-700">{rationale.body}</p>
        </div>
      </section>

      <section className="bg-[#e8ecf4] py-20 md:py-28">
        <div className="ars-container">
          <SectionKicker>{applicationsSection.eyebrow}</SectionKicker>
          <h2 className="section-title max-w-3xl">{applicationsSection.title}</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {applications.map((application, index) => (
              <article key={application.title} className="bg-[#f4f7ff] p-7 md:p-8">
                <p className="font-technical text-xs font-bold tracking-[0.22em] text-brand-red">0{index + 1}</p>
                <h3 className="mt-12 font-display text-3xl font-black leading-tight text-ink-900">{application.title}</h3>
                <p className="mt-5 text-base leading-7 text-steel-700">{application.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container">
          <SectionKicker>{considerationsSection.eyebrow}</SectionKicker>
          <h2 className="section-title max-w-3xl">{considerationsSection.title}</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {considerations.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
                  <Icon className="text-brand-blue" size={28} aria-hidden="true" />
                  <h3 className="mt-12 font-display text-2xl font-black text-ink-900">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-steel-700">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-dark py-20 text-white md:py-28">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <SectionKicker variant="light">{relatedSection.eyebrow}</SectionKicker>
            <h2 className="section-title section-title-light">{relatedSection.title}</h2>
            <p className="section-copy section-copy-light max-w-2xl">{relatedSection.body}</p>
          </div>
          <div className="grid gap-3">
            {relatedSection.eyebrow === "ARS Products" ? (
              <div className="mb-3 grid gap-3 sm:grid-cols-3">
                {[
                  ["ARS CRS Fe 550D", "/ars-assets/logos/ARSCRS550D.png", "/product-crs-550d"],
                  ["ARS Fe 550D", "/ars-assets/logos/ARS550D.png", "/product-550d"],
                  ["ARS Binders", "/ars-assets/logos/BinderLogo.png", "/ars-binders"],
                ].map(([label, image, href]) => (
                  <Link key={label} href={href} className="focus-ring overflow-hidden rounded-[6px] border border-brand-blue/15 bg-white transition hover:border-brand-blue/40">
                    <div className="relative h-24 bg-[#F4F7FF]"><Image src={image} alt={`${label} product logo`} fill sizes="(min-width: 640px) 20vw, 33vw" className="object-contain p-4" /></div>
                    <span className="block border-t border-brand-blue/10 px-3 py-3 text-xs font-bold text-ink-900">{label}</span>
                  </Link>
                ))}
              </div>
            ) : null}
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring flex min-h-16 items-center justify-between border border-white/20 bg-white/6 px-5 text-sm font-bold transition hover:bg-white hover:text-ink-900">
                {link.label} <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <SectionKicker>{faqSection.eyebrow}</SectionKicker>
            <h2 className="section-title">{faqSection.title}</h2>
          </div>
          <FaqList items={faq} />
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

export const roadProjectPage = {
  eyebrow: "Road Projects",
  title: "Because Every Journey Deserves a Strong Beginning.",
  description: "Designed for highways, expressways, and urban road projects, ARS CRS Fe 550D TMT Bars combine strength, durability, and engineering excellence for infrastructure that lasts.",
  primaryCta: { label: "Calculate Steel", href: "/tmt-steel-calculator" },
  secondaryCta: { label: "View CRS 550D", href: "/product-crs-550d" },
  rationale: {
    title: "Every Road Is Only as Strong as What Lies Beneath.",
    body: "Roads are more than asphalt. Beneath every highway, expressway, and urban road network lies a system of reinforced concrete structures that carry traffic, withstand environmental conditions, and support decades of continuous use. Choosing high-quality TMT bars is essential to building road infrastructure that delivers lasting strength, durability, and safety.",
  },
  applicationsSection: {
    eyebrow: "Road applications",
    title: "Reinforcement considerations across the road network.",
  },
  applications: [
    { title: "Built to Carry Heavy Traffic", body: "Road infrastructure is subjected to constant traffic loads every day. High-strength reinforcement helps maintain structural stability under continuous use." },
    { title: "Engineered for Long-Term Durability", body: "Roads are built to last for decades. Quality TMT bars help improve the service life of reinforced concrete structures while reducing maintenance over time." },
    { title: "Designed for Challenging Environments", body: "From heavy rainfall and moisture to high salinity conditions, durable reinforcement helps road infrastructure perform reliably across diverse environments." },
  ],
  considerations: [
    { title: "Supports Safer Infrastructure", body: "Reliable reinforcement contributes to stronger retaining walls, culverts, bridges, drains, and other critical structures that support every road network.", icon: CircleGauge },
    { title: "Built for Sustainable Development", body: "Long-lasting infrastructure reduces repair cycles, conserves resources, and supports more sustainable road construction for the future.", icon: Waves },
    { title: "Consistency That Strengthens Every Kilometre", body: "Uniform mechanical properties help deliver reliable performance across large-scale road infrastructure projects.", icon: ShieldCheck },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Specify for the demands your road project must meet.",
  },
  relatedSection: {
    eyebrow: "Product and quality review",
    title: "Bring the right product information into the project conversation.",
    body: "Review ARS CRS Fe 550D product information alongside the project’s design, environmental, and specification requirements.",
  },
  relatedLinks: [
    { label: "View CRS 550D", href: "/product-crs-550d" },
    { label: "Explore quality information", href: "/our-certification" },
    { label: "Explore bridges and flyovers", href: "/bridges-projects-tmt-steel-bars" },
    { label: "Explore institutional projects", href: "/institutions-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Road-project questions, answered.",
  },
  faq: [
    { question: "Which TMT bar is suitable for road construction?", answer: "Road projects generally require high-strength, high-ductility TMT bars capable of reinforcing bridges, culverts, retaining walls, and other reinforced concrete structures. ARS Fe 550D and CRS 550D TMT Bars are designed for such demanding applications." },
    { question: "Why is ductility important in road infrastructure?", answer: "Ductility enables reinforced concrete structures to absorb stresses and distribute loads more effectively, helping improve structural resilience under dynamic traffic conditions." },
    { question: "Is corrosion resistance important in road projects?", answer: "Yes. Infrastructure exposed to water, humidity, coastal air, or de-icing environments benefits from corrosion-resistant reinforcement that helps improve long-term durability." },
  ],
} satisfies ProjectTypePageProps;

export const bridgesFlyoversProjectPage = {
  eyebrow: "Bridge & Flyover Construction",
  title: "Building Infrastructure That Connects Generations",
  description: "ARS TMT Bars are engineered for bridge construction and flyover projects, delivering reliable strength, corrosion resistance, seismic performance, and lasting durability for critical infrastructure.",
  primaryCta: { label: "Request project quote", href: "/request-quote" },
  secondaryCta: { label: "View CRS 550D", href: "/product-crs-550d" },
  rationale: {
    title: "What Makes Steel Critical in Bridge & Flyover Construction",
    body: "Bridge and flyover construction demands reinforcement that can withstand heavy loads, continuous traffic, changing weather conditions, and decades of service. Choosing the right TMT bars plays a vital role in achieving structural integrity, long-term durability, and reliable performance throughout the life of the structure.",
  },
  applicationsSection: {
    eyebrow: "Bridge and flyover applications",
    title: "Reinforcement for structures with distinct functional demands.",
  },
  applications: [
    { title: "High Load-Bearing Strength", body: "Bridges and flyovers are designed to support constant dynamic loads. High-strength TMT bars provide the structural reinforcement needed to help maintain stability and long-term performance." },
    { title: "Superior Ductility", body: "Good ductility allows reinforced concrete structures to absorb stress and distribute loads more effectively, helping improve structural resilience under demanding conditions." },
    { title: "Enhanced Corrosion Resistance", body: "Bridges and flyovers exposed to moisture, humidity, and high salinity environments require reinforcement that helps improve durability and reduce long-term maintenance." },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Address the forces and exposure that shape bridge and flyover performance.",
  },
  considerations: [
    { title: "Earthquake Performance", body: "High-ductility TMT bars help reinforced concrete structures respond better to seismic forces, making them suitable for infrastructure projects in earthquake-prone regions.", icon: CircleGauge },
    { title: "Long-Term Durability", body: "Quality reinforcement helps extend the service life of bridges and flyovers while supporting long-term structural performance.", icon: Waves },
    { title: "Manufactured to Recognised Standards", body: "Consistent manufacturing, stringent quality control, and recognised certifications help ensure dependable performance across critical infrastructure projects.", icon: ShieldCheck },
  ],
  relatedSection: {
    eyebrow: "Product, quality, and manufacturing review",
    title: "Continue the specification conversation with the relevant ARS information.",
    body: "Use the product, quality, and manufacturing pages to support a project-specific discussion with the ARS team; final grade selection depends on the project requirements.",
  },
  relatedLinks: [
    { label: "View CRS 550D", href: "/product-crs-550d" },
    { label: "Explore quality information", href: "/our-certification" },
    { label: "Explore manufacturing", href: "/manufacturing" },
    { label: "Explore road projects", href: "/road-projects-tmt-steel-bars" },
    { label: "Explore institutional projects", href: "/institutions-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Bridge and flyover questions, answered.",
  },
  faq: [
    { question: "Which TMT bar is suitable for bridge and infrastructure construction?", answer: "The choice depends on the project's structural design, load requirements, and environmental conditions. ARS offers Fe550D and CRS 550D TMT Bars for a wide range of bridge and infrastructure applications." },
    { question: "Why is ductility important in bridge construction?", answer: "Ductile TMT bars help reinforced concrete structures absorb stress and distribute loads more effectively, contributing to improved structural performance under dynamic loading and seismic conditions." },
    { question: "When should CRS TMT bars be used?", answer: "CRS 550D TMT Bars are recommended for bridges and infrastructure exposed to high moisture and high salinity environments where enhanced corrosion resistance is required." },
  ],
} satisfies ProjectTypePageProps;

export const institutionalProjectPage = {
  eyebrow: "Institutional Construction",
  title: "Reliable TMT Bars for Institutional Projects",
  description: "ARS TMT Bars deliver the strength, quality, and durability required for schools, hospitals, universities, government buildings, and other institutional construction projects.",
  primaryCta: { label: "Request project quote", href: "/request-quote" },
  secondaryCta: { label: "View product specifications", href: "/products/ars-550d#specifications" },
  rationale: {
    title: "Building Better Institutions Starts with Better Steel",
    body: "Institutional buildings serve communities for decades. Schools, hospitals, universities, and government facilities require reinforcement that supports safety, structural reliability, and long-term durability. Choosing high-quality TMT bars helps ensure these essential structures are built to perform reliably throughout their service life.",
  },
  applicationsSection: {
    eyebrow: "Institutional applications",
    title: "Construction contexts with long-term public use in mind.",
  },
  applications: [
    { title: "Built for Long-Term Public Use", body: "Institutional buildings experience continuous use and must perform reliably for generations." },
    { title: "Strength for Complex Structures", body: "Hospitals, universities, and government buildings often involve large and complex structural designs that demand dependable reinforcement." },
    { title: "Safety at the Core", body: "Reliable reinforcement helps support the safety and structural integrity of buildings used by students, patients, staff, and the public." },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Review the requirements that matter across institutional construction.",
  },
  considerations: [
    { title: "Safety and durability", body: "Prioritise the safety and durability requirements of facilities that serve students, patients, staff, and the public.", icon: ShieldCheck },
    { title: "Complex structures", body: "For large or complex facilities, align the material discussion with the structure’s design and operating requirements.", icon: CircleGauge },
    { title: "Environmental conditions", body: "Include local environmental stresses and expected use in the project-specific specification review.", icon: Waves },
  ],
  relatedSection: {
    eyebrow: "ARS Products",
    title: "Bring the relevant ARS information into the project conversation.",
    body: "Review product specifications, quality information, and manufacturing context with ARS before finalising a project-specific selection.",
  },
  relatedLinks: [
    { label: "View ARS Fe 550D specifications", href: "/products/ars-550d#specifications" },
    { label: "Compare ARS products", href: "/products" },
    { label: "Explore quality information", href: "/our-certification" },
    { label: "Explore manufacturing", href: "/manufacturing" },
    { label: "Explore road projects", href: "/road-projects-tmt-steel-bars" },
    { label: "Explore bridges and flyovers", href: "/bridges-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Institutional-project questions, answered.",
  },
  faq: [
    { question: "Why are TMT steel bars considered for institutional projects?", answer: "The existing ARS source identifies schools, hospitals, and government buildings as institutional construction contexts where safety, durability, and structural integrity are material-selection considerations." },
    { question: "What should be reviewed for an institutional facility?", answer: "Review the facility type, its intended use, project design, environmental conditions, and the applicable product requirements with ARS before selecting a grade." },
    { question: "How do different institution types affect the review?", answer: "Schools, hospitals, universities, and government buildings have different operational contexts. The existing source identifies public use, large or complex structures, and environmental stresses as considerations to discuss during project planning." },
  ],
} satisfies ProjectTypePageProps;
