import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Building2,
  Download,
  Factory,
  FileText,
  Gauge,
  Layers3,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { PhysicalChemicalPropertiesTable } from "@/components/physical-chemical-properties-table";
import { ProductDetailReveal, ProductDetailSectionMotion as MotionSection } from "@/components/product-detail-motion";
import { ProductLeadCaptureForm } from "@/components/product-lead-capture-form";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { ars550SmPlusSpecifications } from "@/lib/product-catalog";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";
import { serializeJsonLd } from "@/lib/product-page-schema";

const path = "/product-550-sm-plus";
const pageUrl = `${productionDomain}${path}`;
const heroImage = "/ars-assets/products/ars-550-sm-plus/hero-desktop.webp";
const productLogo = "/ars-assets/products/ars-550-sm-plus/product-logo.webp";
const brochureUrl = "/ars-assets/Downloads/ars-550-sm-plus-brochure.pdf";
const title = "ARS 550 SM+ TMT Bars | ARS Green Steel";
const { diametersMm, tsYsRatio } = ars550SmPlusSpecifications;
const availableSizes = diametersMm.map((diameter) => `${diameter} mm`);
const description =
  `Explore ARS 550 SM+ TMT Bars with 550 MPa minimum yield strength, 16% minimum elongation and a TS/YS ratio ${tsYsRatio} for RCC construction.`;

export const metadata = createPageMetadata({
  title,
  description,
  path,
  image: heroImage,
});

const trustItems = [
  { value: "550 MPa", label: "Yield Strength" },
  { value: "635 MPa", label: "Tensile Strength" },
  { value: "16%", label: "Elongation" },
  { value: tsYsRatio, label: "TS/YS Ratio" },
] as const;

const technicalOverview = [
  { label: "Grade", value: "Fe 550 SM+ TMT Reinforcement Bars" },
  { label: "Available Sizes", value: availableSizes.join(" • ") },
  { label: "Applications", value: "Residential • Commercial • Industrial • Infrastructure • RCC Construction" },
  { label: "Key Properties", value: "High Ductility • Greater Bendability • High Tensile Strength • Earthquake Resistance" },
  { label: "Manufacturing", value: "Thermo-Mechanically Treated (TMT) • High Manganese Composition • Controlled Chemical Composition" },
  { label: "Technical Highlights", value: `550 MPa Minimum Yield Strength • 635 MPa Minimum Tensile Strength • 16% Minimum Elongation • TS/YS ratio ${tsYsRatio}` },
] as const;

const benefits = [
  {
    title: "Greater Ductility",
    description: "16% minimum elongation gives ARS 550 SM+ greater deformation capacity before fracture.",
    icon: Activity,
  },
  {
    title: "Better Bendability",
    description: "Developed with flexibility in focus, making it suitable for bending and shaping during reinforcement fabrication.",
    icon: Waves,
  },
  {
    title: "High Tensile Strength",
    description: "With a minimum tensile strength of 635 MPa, it offers a defined strength level beyond its 550 MPa minimum yield strength.",
    icon: Gauge,
  },
  {
    title: "High Manganese Content",
    description: "A minimum manganese content of 0.75% forms an important part of the product's chemical composition.",
    icon: Layers3,
  },
  {
    title: "Higher TS/YS Ratio",
    description: `A TS/YS ratio ${tsYsRatio} provides a greater margin between yield strength and ultimate tensile strength.`,
    icon: SlidersHorizontal,
  },
  {
    title: "Controlled Chemical Composition",
    description: "Defined limits for carbon, sulphur, phosphorus and nitrogen support consistency in the specified material composition.",
    icon: Factory,
  },
  {
    title: "Precisely Formed Ribs",
    description: "The ribbed surface profile provides mechanical interlock with concrete, helping transfer forces between steel and concrete.",
    icon: Ruler,
  },
  {
    title: "Earthquake Resistance",
    description: "Enhanced ductility and flexibility for structural performance under seismic conditions.",
    icon: ShieldCheck,
  },
] as const;

const performanceItems = [
  {
    value: "550 MPa",
    title: "Minimum Yield Strength",
    description: "As a reinforcement bar takes on load, it reaches a point where it begins to deform permanently. For ARS 550 SM+, that minimum yield strength is specified at 550 MPa.",
  },
  {
    value: "635 MPa",
    title: "Minimum Tensile Strength",
    description: "The tensile strength specification for ARS 550 SM+ is 635 MPa. This is the maximum tensile stress the steel is required to withstand in the specified test.",
  },
  {
    value: tsYsRatio,
    title: "TS/YS Ratio",
    description: `There is a difference between the point at which steel starts yielding and the maximum stress it can withstand. ARS 550 SM+ specifies a TS/YS ratio ${tsYsRatio}, giving engineers another parameter to consider when assessing its mechanical performance.`,
  },
  {
    value: "16%",
    title: "Minimum Elongation",
    description: "Elongation is what allows steel to stretch before breaking. ARS 550 SM+ offers a minimum elongation of 16%, compared to 10% in the Fe 550 benchmark. This greater ductility is an important property for structures exposed to seismic forces.",
  },
] as const;

const applications = [
  { title: "Foundations", icon: Layers3 },
  { title: "Columns", icon: Building2 },
  { title: "Beams", icon: Ruler },
  { title: "Slabs", icon: Factory },
] as const;

const faqs = [
  {
    question: "What is ARS 550 SM+ TMT steel?",
    answer: "ARS 550 SM+ is a high-manganese TMT steel bar developed with a focus on strength, flexibility and ductility. It has a minimum yield strength of 550 MPa and minimum elongation of 16%.",
  },
  {
    question: "What does SM+ stand for?",
    answer: "In ARS 550 SM+, S stands for Strength and M+ stands for High Manganese. The product has a minimum manganese content of 0.75%.",
  },
  {
    question: "How is ARS 550 SM+ different from regular Fe 550 TMT bars?",
    answer: `ARS 550 SM+ offers 16% minimum elongation and a TS/YS ratio ${tsYsRatio}, compared with the Fe 550 benchmark figures of 10% and 1.06 respectively.`,
  },
  {
    question: "Is ARS 550 SM+ suitable for earthquake-resistant construction?",
    answer: "ARS 550 SM+ is developed with enhanced ductility and flexibility, making it suitable for earthquake-resistant construction. Its use should be assessed by the structural engineer in line with the project's seismic design requirements.",
  },
  {
    question: "What are the mechanical properties of ARS 550 SM+?",
    answer: `The minimum yield strength is 550 MPa, the minimum tensile strength is 635 MPa, and the minimum elongation is 16%. The TS/YS ratio is ${tsYsRatio}.`,
  },
  {
    question: "Where can ARS 550 SM+ TMT bars be used?",
    answer: "ARS 550 SM+ can be considered for RCC applications such as foundations, columns, beams and slabs in residential, commercial, industrial and infrastructure projects, subject to structural design and project specifications.",
  },
] as const;

const organizationId = `${productionDomain}/#organization`;
const webpageId = `${pageUrl}#webpage`;
const productId = `${pageUrl}#product`;
const breadcrumbId = `${pageUrl}#breadcrumb`;
const faqId = `${pageUrl}#faq`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "ARS Steels & Alloy International Pvt. Ltd.",
      alternateName: "ARS Steels",
      url: `${productionDomain}/`,
      logo: {
        "@type": "ImageObject",
        url: `${productionDomain}/legacy-assets/images/ARS-GREEN-STEEL-Logo.png`,
      },
      telephone: "+91-9710411111",
      sameAs: [
        "https://www.facebook.com/ARSsteelsIndia",
        "https://www.instagram.com/arsgreensteel",
        "https://www.youtube.com/channel/UCmzQSAPi4oNfLTVPkRkbPXg",
      ],
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: pageUrl,
      name: title,
      description: metadata.description,
      inLanguage: "en-IN",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${productionDomain}${heroImage}`,
      },
      breadcrumb: { "@id": breadcrumbId },
      about: { "@id": productId },
      mainEntity: [{ "@id": productId }, { "@id": faqId }],
      isPartOf: { "@id": `${productionDomain}/#website` },
      publisher: { "@id": organizationId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${productionDomain}/` },
        { "@type": "ListItem", position: 2, name: "Products", item: `${productionDomain}/products` },
        { "@type": "ListItem", position: 3, name: "ARS 550 SM+ TMT Bars", item: pageUrl },
      ],
    },
    {
      "@type": "Product",
      "@id": productId,
      name: "ARS 550 SM+ TMT Bars",
      description: metadata.description,
      image: [`${productionDomain}${heroImage}`, `${productionDomain}/ars-assets/products/ars-550-sm-plus/product-bars.webp`],
      category: "TMT Reinforcement Bars",
      material: "Steel",
      brand: { "@type": "Brand", name: "ARS Green Steel" },
      manufacturer: { "@id": organizationId },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Minimum Yield Strength", value: "550 MPa" },
        { "@type": "PropertyValue", name: "Minimum Tensile Strength", value: "635 MPa" },
        { "@type": "PropertyValue", name: "Minimum Elongation", value: "16%" },
        { "@type": "PropertyValue", name: "TS/YS Ratio", value: tsYsRatio },
        { "@type": "PropertyValue", name: "Minimum Manganese Content", value: "0.75%" },
        { "@type": "PropertyValue", name: "Available Sizes", value: availableSizes.join(", ") },
      ],
      url: pageUrl,
    },
    {
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const jsonLdString = serializeJsonLd(jsonLd);

export default function Ars550SmPlusPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <noscript><style>{"[data-product-detail-motion] { opacity: 1 !important; transform: none !important; }"}</style></noscript>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[620px] overflow-hidden bg-ink-950 md:min-h-[640px] lg:h-[700px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          {/* Frame the bar above the logo baked into the desktop artwork. */}
          <ResponsiveHeroImage
            desktopSrc={heroImage}
            mobileSrc="/ars-assets/products/ars-550-sm-plus/hero-mobile.webp"
            alt="ARS 550 SM+ TMT reinforcement bar against a construction setting"
            className="object-cover object-center md:h-[140%]! md:object-[right_top]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.91)_0%,rgba(6,13,30,0.74)_46%,rgba(6,13,30,0.50)_100%)] xl:bg-[linear-gradient(90deg,rgba(6,13,30,0.88)_0%,rgba(6,13,30,0.60)_48%,rgba(6,13,30,0.10)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(0deg,rgba(6,13,30,0.72)_0%,rgba(6,13,30,0.12)_62%,transparent_100%)] md:h-[48%]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-14 pt-12 md:pb-16 md:pt-16 lg:pt-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-[8px] bg-white px-3 py-2 sm:px-4">
              <Image src={productLogo} alt="" width={432} height={243} loading="eager" className="h-auto w-28 sm:w-32" />
            </div>
            <ProductDetailReveal y={14}>
              <SectionKicker variant="light">High-Manganese TMT Reinforcement</SectionKicker>
            </ProductDetailReveal>
            <ProductDetailReveal delay={0.08} y={22}>
              <h1 className="max-w-[900px] font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.025em] text-white">
                ARS 550 SM+ TMT Bars
              </h1>
            </ProductDetailReveal>
            <ProductDetailReveal delay={0.16}>
              <p className="mt-6 max-w-3xl font-display text-[clamp(1.35rem,2.5vw,2rem)] font-bold leading-[1.15] text-white">
                More Flexibility. Greater Bendability. Built for Strength.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                ARS 550 SM+ is developed with a focus on greater ductility and bendability, supporting structural performance under seismic conditions. With 16% minimum elongation, 550 MPa minimum yield strength and a TS/YS ratio {tsYsRatio}, it brings together flexibility and strength for reinforced concrete construction.
              </p>
            </ProductDetailReveal>
            <ProductDetailReveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquire" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]">
                  <FileText size={15} aria-hidden="true" /> Get a Quote
                </a>
                <a href={brochureUrl} download className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Download size={15} aria-hidden="true" /> Download Brochure
                </a>
              </div>
            </ProductDetailReveal>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => (
            <div key={item.label} className="px-0 text-left lg:px-8 lg:text-center">
              <p className="font-display text-[clamp(1.65rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.03em] text-brand-blue">{item.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900">{item.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="overview">
        <div className="ars-container grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <article className="relative flex min-h-[520px] overflow-hidden rounded-[12px] bg-ink-950 p-6 md:p-8">
            <Image
              src="/ars-assets/products/ars-550-sm-plus/product-bars.webp"
              alt="ARS 550 SM+ TMT bars prepared for reinforced concrete construction"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.58)_48%,rgba(6,13,30,0.05)_100%)]" />
            <div className="relative z-10 mt-auto max-w-xl">
              <SectionKicker variant="light">PRODUCT OVERVIEW</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white">When flexibility matters, the difference is in the steel.</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-white/80">
                <p>Reinforcement bars undergo considerable bending and shaping before they are placed inside concrete structures. Their ability to accommodate deformation while retaining the required mechanical properties is an important consideration, particularly in regions exposed to seismic activity.</p>
                <p>ARS 550 SM+ is developed with this requirement in mind. Its high-manganese composition, 16% minimum elongation and TS/YS ratio {tsYsRatio} give the product its distinct focus on ductility, flexibility and earthquake-resistant performance.</p>
                <p className="font-semibold text-white">S stands for Strength. M+ stands for High Manganese.</p>
              </div>
            </div>
          </article>

          <div className="overflow-hidden rounded-[12px] border-[1.5px] border-surface-100 bg-white">
            <div className="bg-brand-blue px-6 py-4">
              <h2 className="font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-white/85">ARS 550 SM+ Technical Overview</h2>
            </div>
            <dl>
              {technicalOverview.map((row, index) => (
                <div key={row.label} className={`grid grid-cols-5 gap-4 px-5 py-5 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}>
                  <dt className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{row.label}</dt>
                  <dd className="col-span-3 text-[13px] leading-[1.65] text-steel-700">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-surface-100 p-5">
              <a href={brochureUrl} download className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-2.5 text-[13px] font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white">
                <Download size={14} aria-hidden="true" /> Download Brochure
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24" id="benefits">
        <div className="ars-container">
          <div className="mb-12 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <SectionKicker variant="light">WHY CHOOSE ARS 550 SM+?</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white">More Flexibility. More Confidence in Every Bend.</h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/75 lg:pt-12">Not all reinforcement work is straightforward. Bars need to be cut, bent and shaped to suit the structure. ARS 550 SM+ puts greater emphasis on ductility and bendability, without compromising its specified strength requirements.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[12px] border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title: benefitTitle, description: benefitDescription, icon: Icon }, index) => (
              <article key={benefitTitle} className="flex min-h-64 flex-col bg-brand-blue p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-[8px] bg-white/10 text-white ring-1 ring-white/15"><Icon size={20} aria-hidden="true" /></span>
                  <span className="font-technical text-xs font-bold text-white/30">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 font-display text-[17px] font-bold text-white">{benefitTitle}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/72">{benefitDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24" id="performance">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">UNDERSTANDING PERFORMANCE</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">Strength is important. How steel behaves under stress matters just as much.</h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-[1.8] text-steel-700 lg:justify-self-end">With a minimum yield strength of 550 MPa and tensile strength of 635 MPa, ARS 550 SM+ combines the strength and flexibility required for reinforced concrete construction.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {performanceItems.map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-[12px] border border-brand-blue/12 bg-white p-7 shadow-[0_18px_48px_rgba(13,43,110,0.06)] md:p-8">
                <span className="absolute inset-y-0 left-0 w-1 bg-brand-red" aria-hidden="true" />
                <p className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.04em] text-brand-blue">{item.value}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{item.title}</h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-steel-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="properties">
        <div className="ars-container">
          <SectionKicker variant="brand">TECHNICAL PROPERTIES</SectionKicker>
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">Physical and Chemical Properties of ARS 550 SM+</h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-steel-700">Review the supplied Fe 550 benchmark alongside the specified physical and chemical properties of ARS 550 SM+.</p>
          <div className="mt-10"><PhysicalChemicalPropertiesTable grade="550 SM+" /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24" id="applications">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[460px] overflow-hidden rounded-[12px] bg-ink-950">
            <Image
              src="/ars-assets/products/ars-550-sm-plus/application.webp"
              alt="Illustration of ARS 550 SM+ reinforcement used within an RCC structure"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.76),transparent_60%)]" />
          </div>
          <div className="flex flex-col justify-center">
            <SectionKicker variant="brand">APPLICATIONS</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">Developed for Reinforced Concrete Construction</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">ARS 550 SM+ can be considered for RCC applications in residential, commercial, industrial and infrastructure projects, subject to structural design and project specifications.</p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {applications.map(({ title: applicationTitle, icon: Icon }) => (
                <li key={applicationTitle} className="flex min-h-24 items-center gap-4 rounded-[8px] border border-brand-blue/12 bg-white p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[7px] bg-brand-blue text-white"><Icon size={19} aria-hidden="true" /></span>
                  <span className="font-display text-base font-bold text-ink-900">{applicationTitle}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tmt-steel-calculator" className="focus-ring inline-flex min-h-11 items-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Estimate Steel Requirement</Link>
              <Link href="/our-network" className="focus-ring inline-flex min-h-11 items-center rounded-full border border-brand-blue/20 px-5 py-2.5 text-sm font-bold text-brand-blue transition hover:border-brand-blue">Find a Dealer</Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 md:py-20" id="trust" aria-labelledby="bis-standard-title">
        <div className="ars-container">
          <div className="flex flex-col items-start gap-6 rounded-[12px] border border-brand-blue/12 bg-surface-50 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div>
              <SectionKicker variant="brand">BIS Standard</SectionKicker>
              <h2 id="bis-standard-title" className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">IS 1786:2008</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-steel-700">Bureau of Indian Standards specification for high-strength deformed steel bars and wires for concrete reinforcement.</p>
            </div>
            <a href={brochureUrl} download className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"><Download size={15} aria-hidden="true" /> Download Brochure</a>
          </div>
        </div>
      </MotionSection>

      <div id="enquire" className="scroll-mt-24">
        <ProductLeadCaptureForm
          product="ARS 550 SM+ TMT Bars"
          trustItems={[
            "550 MPa minimum yield strength",
            "16% minimum elongation",
            `TS/YS ratio ${tsYsRatio}`,
            `Available sizes ${availableSizes.join(", ")}`,
          ]}
        />
      </div>

      <MotionSection className="bg-white py-20 md:py-24" id="faqs">
        <div className="ars-container max-w-5xl">
          <SectionKicker variant="brand">PRODUCT FAQS</SectionKicker>
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">Frequently Asked Questions – ARS 550 SM+ TMT Bars</h2>
          <FaqList className="mt-10 rounded-[12px] border border-surface-100 bg-white px-6" items={faqs} />
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} />
        <div className="ars-container relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <SectionKicker variant="light">READY TO BUILD</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">Discuss ARS 550 SM+ for Your Project</h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/75">Share your project location, required sizes and construction stage so the ARS team can respond with suitable product support.</p>
          </div>
          <a href="#enquire" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]">Get a Quote <FileText size={15} aria-hidden="true" /></a>
        </div>
      </MotionSection>
    </main>
  );
}
