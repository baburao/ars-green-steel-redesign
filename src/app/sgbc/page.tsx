import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  ExternalLink,
  Factory,
  FileCheck2,
  Globe2,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { CertificationDocumentPreview } from "@/components/certification-document-preview";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "SGBC | ARS Green Steel",
  description:
    "SGBC recognition and sustainability credentials for ARS Green Steel.",
  path: "/sgbc",
});

const reasons = [
  { title: "Independent Assessment", body: "Products are evaluated using transparent environmental criteria rather than marketing claims.", icon: ShieldCheck },
  { title: "Trusted by the Building Industry", body: "Recognised by architects, consultants, developers and green building professionals across Asia.", icon: Building2 },
  { title: "Supports Sustainable Construction", body: "Encourages responsible material selection for lower-carbon buildings and infrastructure.", icon: Leaf },
  { title: "Global Credibility", body: "Provides confidence that environmental performance has been independently reviewed.", icon: Globe2 },
];

const performance = [
  { title: "Environmental Product Declaration (EPD)", body: "Verified product-specific environmental data, including carbon emission intensity.", icon: FileCheck2 },
  { title: "Lower Carbon Steel Manufacturing", body: "Manufactured through the Electric Arc Furnace (EAF) route using recycled steel and increasing renewable energy integration.", icon: Factory },
  { title: "Recognised Sustainability Standards", body: "Supported by GreenPro, BIS, ISO, SGS testing and India's Green Steel Taxonomy.", icon: BadgeCheck },
];

const faqs = [
  ["What is SGBC Certification?", "SGBC Certification is awarded by the Singapore Green Building Council to building products that meet recognised environmental performance standards. It helps architects, developers and project teams identify products that contribute to more sustainable construction."],
  ["What does the SGBC 4-Ticks Leader Rating mean?", "The 4-Ticks Leader Rating is the highest level of recognition awarded under the SGBC Green Building Product Certification scheme. It signifies outstanding environmental performance based on SGBC's evaluation criteria."],
  ["How is SGBC Certification different from LEED?", "SGBC certifies building products, while LEED is a green building rating system used to assess the sustainability of entire buildings. SGBC-certified products can support projects pursuing green building certifications by providing recognised environmental credentials."],
  ["How does SGBC Certification support sustainable construction?", "SGBC certification helps project teams select building materials that have been independently assessed for their environmental performance. It encourages more responsible material selection and contributes to lower-carbon construction practices."],
  ["Why did ARS Green Steel receive SGBC Certification?", "ARS Green Steel received the SGBC Green Certificate with a 4-Ticks Leader Rating for its demonstrated environmental performance, supported by responsible manufacturing practices, lower carbon emissions, and independently verified environmental documentation."],
];

const certificate = {
  preview: "/ars-assets/certifications/previews/sgbc-certificate.png",
  file: "/ars-assets/certifications/SGBP-6210-ARS-Steels-Alloy-International-Private-Limited-4-1.pdf",
};

export default function SgpcPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="SINGAPORE GREEN BUILDING COUNCIL"
        title="Recognized Beyond Borders."
        body="Awarded the SGBC 4-Ticks Leader Rating for independently verified environmental performance and responsible manufacturing."
        showActions={false}
        preserveTitleCase
      />

      <MotionSection className="bg-[#123A34] py-9 text-white md:py-11">
        <div className="ars-container grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <Image src="/ars-assets/sgbc/sgbc-4-ticks-leader-badge.png" alt="Singapore Green Building Product SGBC 4-Ticks Leader" width={196} height={356} className="h-36 w-auto object-contain md:h-40" />
          <p className="max-w-4xl font-display text-[clamp(1.65rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Only Indian TMT manufacturer to receive the SGBC 4-Ticks Leader Rating
          </p>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[18px] bg-ink-950 shadow-[0_24px_60px_rgba(6,13,30,0.2)]">
            <Image src="/ars-assets/sgbc/UnderstandingSGBC.jpg" alt="ARS representative holding the SGBC Green Building Product certificate" width={1080} height={1080} className="aspect-square h-full w-full object-cover transition duration-700 ease-out hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8"><span className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur"><Factory size={20} /></span></div>
          </div>
          <div>
            <SectionKicker variant="brand">UNDERSTANDING SGBC</SectionKicker>
            <h2 className="section-title max-w-3xl">What Is the Singapore Green Building Council (SGBC)?</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-steel-700 lg:text-lg">
              <p>The Singapore Green Building Council (SGBC) is one of Asia&apos;s leading organisations promoting sustainable buildings and environmentally responsible construction materials. Established in 2009, SGBC develops recognised certification programmes that evaluate building products based on their environmental performance, helping architects, developers and project teams make informed material choices.</p>
              <p>Today, SGBC certification is trusted across commercial, residential and infrastructure projects seeking higher standards of sustainability.</p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker variant="brand">WHY IT MATTERS</SectionKicker>
          <h2 className="section-title">Why SGBC Certification Matters</h2>
          <p className="section-copy section-copy-flush max-w-4xl">Choosing certified building materials goes beyond environmental claims. SGBC certification provides independent validation that a product has been assessed against recognised sustainability benchmarks.</p>
          <div className="mt-11 grid gap-4 md:grid-cols-2">
            {reasons.map(({ title, body, icon: Icon }) => <article key={title} className="group border border-brand-blue/12 bg-white p-7 shadow-[0_12px_36px_rgba(13,43,110,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_22px_46px_rgba(13,43,110,0.12)] md:p-8"><span className="inline-flex size-12 items-center justify-center rounded-[14px] bg-brand-blue/7 text-brand-blue transition duration-300 group-hover:bg-brand-blue group-hover:text-white"><Icon size={22} /></span><h3 className="mt-8 font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-steel-700">{body}</p></article>)}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><SectionKicker variant="brand">OUR ACHIEVEMENT</SectionKicker><h2 className="section-title">ARS Green Steel Earned the Highest SGBC Leader Rating</h2><div className="mt-6 space-y-5 text-base leading-8 text-steel-700 lg:text-lg"><p>ARS Green Steel has been awarded the SGBC Green Certificate with a 4-Ticks Leader Rating, the highest level of recognition granted by the Singapore Green Building Council.</p><p>This recognition reflects ARS&apos;s continued investment in responsible manufacturing, lower-carbon steel production, and transparent environmental reporting.</p></div></div>
          <div className="rounded-[18px] border border-brand-blue/15 bg-surface-50 p-5 shadow-[var(--shadow-soft)] sm:p-7"><CertificationDocumentPreview title="SGBC certificate" image={certificate.preview} /><div className="mt-5 flex flex-wrap gap-3"><Link href={certificate.file} target="_blank" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">View SGBC Certificate <ExternalLink size={15} /></Link><a href={certificate.file} download className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue/25 px-5 text-sm font-bold text-brand-blue transition hover:bg-white">Download certificate</a></div></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-ink-950 py-20 text-white lg:py-24">
        <div className="ars-container"><SectionKicker variant="light">MORE THAN A CERTIFICATE</SectionKicker><h2 className="section-title text-white">Built on Verified Environmental Performance</h2><p className="mt-6 max-w-3xl text-base leading-8 text-white/72 lg:text-lg">SGBC recognition is supported by measurable environmental data and internationally recognised sustainability credentials.</p><div className="mt-12 grid gap-4 lg:grid-cols-3">{performance.map(({ title, body, icon: Icon }) => <article key={title} className="group border border-white/14 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08] md:p-8"><span className="inline-flex size-12 items-center justify-center rounded-[14px] border border-white/15 bg-white/[0.08] text-white transition duration-300 group-hover:border-brand-red/60 group-hover:text-brand-red"><Icon size={21} /></span><h3 className="mt-8 font-display text-2xl font-bold leading-tight">{title}</h3><p className="mt-5 text-sm leading-7 text-white/70">{body}</p></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24"><div className="ars-container max-w-4xl"><SectionKicker variant="brand">THE ARS ADVANTAGE</SectionKicker><h2 className="section-title">Why This Matters for Your Project</h2><div className="mt-6 space-y-5 text-base leading-8 text-steel-700 lg:text-lg"><p>Choosing SGBC-certified steel means selecting a product whose environmental performance has been independently assessed—not simply claimed.</p><p>Combined with ARS&apos;s Environmental Product Declaration (EPD), Green Steel manufacturing process, and internationally recognised certifications, it gives project teams greater confidence when specifying materials for sustainable construction.</p></div></div></MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24"><div className="ars-container max-w-4xl"><SectionKicker variant="brand">FAQs</SectionKicker><h2 className="section-title">FAQs</h2><FaqList className="mt-10" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>

      <ContactCta eyebrow="BUILD WITH CONFIDENCE" headline="Choose Steel Recognised for Sustainability" body="Select certified green steel backed by internationally recognised environmental standards and independently verified performance." primaryLabel="Choose Your Green Steel." primaryHref="/ars-green-steel" secondaryLabel="View SGBC Certificate" secondaryHref={certificate.file} />
    </main>
  );
}
