import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Download, FileCheck2, Leaf, ShieldCheck } from "lucide-react";
import { CertificationDocumentPreview } from "@/components/certification-document-preview";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Green Certifications | ARS Green Steel",
  description:
    "Review ARS Green Steel environmental credentials, verified product declarations, green-building recognition, and downloadable sustainability documents.",
  path: "/green-certifications",
  image: "/ars-assets/Sustainability/ARSGreenSteel_leaves.jpg",
});

const credentials = [
  ["NISST Green Steel Taxonomy Certificate", "NISST, Ministry of Steel", "Government of India Green Steel Taxonomy rating for ARS TMT Bars.", "#nisst", true],
  ["Environmental Product Declaration", "The International EPD® System", "Standardised environmental information for ARS Fe 550D TMT rebars.", "#epd", true],
  ["GRIHA Product Catalogue Recognition", "GRIHA Council", "Product-catalogue inclusion under LCA and Innovation for ARS Fe 550D and 550D CRS rebars.", "#griha", true],
  ["SGBC Leader Recognition", "Singapore Green Building Council", "Leader, 4-Tick product recognition for specified ARS reinforcing-steel models.", "#sgbc", true],
  ["LEED Project Support", "Project documentation support", "Environmental documentation that may support material-selection and embodied-carbon review for LEED projects.", "#leed", false],
] as const;

const documents = [
  {
    title: "NISST Green Steel Certificate",
    issuer: "National Institute of Secondary Steel Technology",
    description: "Government of India Green Steel Taxonomy certificate for ARS TMT Bars.",
    preview: "/ars-assets/certifications/previews/nisst-green-steel-certificate.png",
    file: "/ars-assets/certifications/Green-Steel-Certificate-2027-1.pdf",
  },
  {
    title: "Environmental Product Declaration",
    issuer: "The International EPD® System",
    description: "Published environmental declaration for ARS Fe 550D TMT rebars.",
    preview: "/ars-assets/certifications/previews/epd-certificate.png",
    file: "/ars-assets/certifications/ARS-STEELS_EPD-CERTIFICATE-2.pdf",
  },
  {
    title: "GRIHA Product Catalogue Certificate",
    issuer: "GRIHA Council",
    description: "Catalogue recognition for ARS Steel Rebars 550D and 550D CRS under LCA and Innovation.",
    preview: "/ars-assets/certifications/previews/griha-certificate.png",
    file: "/ars-assets/certifications/GRIHA-Product-Catalogue-ARS-Steels-and-Alloys-International-Private-Limited.pdf",
  },
  {
    title: "SGBC Leader Certificate",
    issuer: "Singapore Green Building Council",
    description: "Leader, 4-Tick Singapore Green Building Product recognition for ARS Steel.",
    preview: "/ars-assets/certifications/previews/sgbc-certificate.png",
    file: "/ars-assets/certifications/SGBP-6210-ARS-Steels-Alloy-International-Private-Limited-4-1.pdf",
  },
  {
    title: "Sustainability Report FY 2024-25",
    issuer: "ARS Green Steel",
    description: "ARS reporting on its sustainability approach, performance, and supporting evidence.",
    preview: "/ars-assets/certifications/previews/sustainability-report.png",
    file: "/ars-assets/certifications/Sustainability-report-Final-13.02.pdf",
  },
  {
    title: "ISO 14001:2015",
    issuer: "Environmental Management System",
    description: "Supporting management-system evidence for ARS manufacturing activities; not a Green Steel product rating.",
    preview: "/ars-assets/certifications/previews/iso-14001.png",
    file: "/ars-assets/certifications/ISO-14001.2015-February-2024.pdf",
  },
] as const;

const pathways = [
  ["ARS Green Steel", "Product performance, manufacturing route, carbon transparency, and environmental impact.", "/ars-green-steel"],
  ["Embodied Carbon", "How material emissions affect the carbon profile of construction projects.", "/embodied-carbon"],
  ["Green Guide", "A practical introduction to Green Steel and lower-carbon manufacturing.", "/green-steel#what-is-green-steel"],
  ["SGBC", "Detailed information about ARS recognition from the Singapore Green Building Council.", "/sgbc"],
  ["Complete Certifications & Awards", "The full ARS corporate library, including statutory, quality, management, and award documents.", "/our-certification"],
] as const;

function DocumentActions({ file }: { file: string }) {
  return (
    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
      <a href={file} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">
        View certificate <ArrowRight size={15} aria-hidden="true" />
      </a>
      <a href={file} download className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">
        Download PDF <Download size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

type EvidenceSectionProps = {
  id: string;
  kicker: string;
  title: string;
  preview: string;
  file: string;
  children: React.ReactNode;
  reverse?: boolean;
};

function EvidenceSection({ id, kicker, title, preview, file, children, reverse = false }: EvidenceSectionProps) {
  return (
    <MotionSection id={id} className="scroll-mt-28 bg-white py-20 lg:py-24">
      <div className={`ars-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden border border-[#123D2B]/15 bg-[#F6F8F1]">
          <CertificationDocumentPreview title={title} image={preview} />
        </div>
        <div>
          <SectionKicker variant="green">{kicker}</SectionKicker>
          <h2 className="section-title max-w-2xl">{title}</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-steel-700">{children}</div>
          <DocumentActions file={file} />
        </div>
      </div>
    </MotionSection>
  );
}

export default function GreenCertificationsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900 [&_.section-kicker-green]:!text-[#123D2B] [&_.section-kicker-line-green]:!bg-[#2F7650]">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-[#0B2A1E] text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src="/ars-assets/Sustainability/ARSGreenSteel_leaves.jpg" alt="ARS steel manufacturing facility surrounded by green vegetation" fill priority sizes="100vw" className="object-cover object-[64%_center] lg:object-[70%_55%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,42,30,0.78)_0%,rgba(11,42,30,0.58)_48%,rgba(18,61,43,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(11,42,30,0.66)_0%,rgba(11,42,30,0.36)_48%,rgba(18,61,43,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(11,42,30,0.4)_0%,rgba(11,42,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(11,42,30,0.26)_0%,rgba(11,42,30,0.04)_58%,transparent_100%)]" />
        <div className="ars-container relative z-10 w-full pb-14 pt-32 md:pb-20">
          <div className="max-w-4xl">
            <SectionKicker variant="light">Green Certifications</SectionKicker>
            <h1 className="mt-7 max-w-4xl font-display font-extrabold leading-[0.98] text-white">Green Steel Certifications &amp; Sustainability Credentials</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-lg">ARS environmental claims are supported by independently issued documentation and recognition from established Green Steel and green-building frameworks.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#certification-overview" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Explore Certifications <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href="/ars-green-steel" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-[6px] border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Explore ARS Green Steel</Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-[#F6F8F1] py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div><SectionKicker variant="green">Green Steel Certifications</SectionKicker><h2 className="section-title max-w-xl">The Standards Behind ARS Green Steel</h2></div>
          <div className="border-l border-[#123D2B]/18 pl-7 md:pl-10">
            <p className="max-w-3xl text-base leading-8 text-steel-700">From environmental performance to green-building requirements, these credentials provide independent evidence of how ARS Green Steel is made and assessed. Explore the certifications, declarations and recognised standards that support our Green Steel and sustainability claims.</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="certification-overview" className="scroll-mt-28 bg-[#EEF5EC] py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker variant="green">Environmental credentials overview</SectionKicker>
          <h2 className="section-title max-w-3xl">A Clear Evidence Path for Responsible Steel Selection.</h2>
          <div className="mt-12 grid border-l border-t border-[#123D2B]/18 md:grid-cols-2 lg:grid-cols-5">
            {credentials.map(([name, issuer, description, href, downloadable]) => <article key={name} className="border-b border-r border-[#123D2B]/18 bg-white p-6"><FileCheck2 className="size-6 text-[#17633F]" aria-hidden="true" /><p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-steel-600">{issuer}</p><h3 className="mt-3 font-display text-xl font-bold text-ink-900">{name}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{description}</p><Link href={href} className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue">Review evidence <ArrowRight size={15} aria-hidden="true" /></Link>{downloadable ? <p className="mt-2 text-xs font-semibold text-[#17633F]">Download available</p> : <p className="mt-2 text-xs font-semibold text-steel-600">Project support context</p>}</article>)}
          </div>
        </div>
      </MotionSection>

      <EvidenceSection id="nisst" kicker="Government of India Green Steel Taxonomy" title="NISST 5-Star Green Steel Certification" preview="/ars-assets/certifications/previews/nisst-green-steel-certificate.png" file="/ars-assets/certifications/Green-Steel-Certificate-2027-1.pdf">
        <p>The National Institute of Secondary Steel Technology, established by the Ministry of Steel, issued the Green Steel Certificate for ARS TMT Bars under the Government of India&apos;s Green Steel Taxonomy.</p>
        <p>The certificate records an average emission intensity of 0.5829 t-CO₂e per tonne of finished steel for the assessed FY 2025-26 production, a 5-Star rating, and 73.50% greenness. These figures are presented as stated in the issued certificate.</p>
      </EvidenceSection>

      <EvidenceSection id="epd" kicker="Environmental transparency" title="Environmental Product Declaration" preview="/ars-assets/certifications/previews/epd-certificate.png" file="/ars-assets/certifications/ARS-STEELS_EPD-CERTIFICATE-2.pdf" reverse>
        <p>An Environmental Product Declaration is a standardised document that reports environmental information for a product. The available ARS EPD covers TMT Rebars - ARS Fe 550D and is published through The International EPD® System.</p>
        <p>EPD information gives architects, engineers, developers, and sustainability teams a source document for embodied-carbon review and material comparison. The ARS Green Steel carbon-transparency page reports the approved current figure of 592 kg CO₂e per tonne.</p>
        <div className="flex flex-wrap gap-4"><Link href="/embodied-carbon" className="focus-ring font-bold text-brand-blue">Explore embodied carbon</Link><Link href="/ars-green-steel#certifications" className="focus-ring font-bold text-brand-blue">View carbon transparency</Link></div>
      </EvidenceSection>

      <EvidenceSection id="griha" kicker="Green-building recognition" title="GRIHA Product Catalogue Recognition" preview="/ars-assets/certifications/previews/griha-certificate.png" file="/ars-assets/certifications/GRIHA-Product-Catalogue-ARS-Steels-and-Alloys-International-Private-Limited.pdf">
        <p>GRIHA Council includes ARS Steel Rebars - 550D and 550D CRS in its Product Catalogue under the LCA and Innovation typology for the criteria identified in the certificate.</p>
        <p>The certificate supports sustainable material evaluation for the named products. Project teams should still validate project-specific mandatory compliances and applicable criteria, as the certificate itself recommends.</p>
      </EvidenceSection>

      <EvidenceSection id="sgbc" kicker="International green-building recognition" title="SGBC Leader Recognition" preview="/ars-assets/certifications/previews/sgbc-certificate.png" file="/ars-assets/certifications/SGBP-6210-ARS-Steels-Alloy-International-Private-Limited-4-1.pdf" reverse>
        <p>The Singapore Green Building Council evaluated ARS Steel under its Green Building Product Certification Scheme and awarded the specified reinforcing-steel models the Leader, 4-Tick rating.</p>
        <p>The certificate identifies ARS Fe 550D and ARS CRS Fe 550D TMT Bars and records 98% recycled steel for the listed product models.</p>
        <Link href="/sgbc" className="focus-ring inline-flex min-h-11 items-center gap-2 font-bold text-brand-blue">Explore the detailed SGBC page <ArrowRight size={15} aria-hidden="true" /></Link>
      </EvidenceSection>

      <MotionSection id="leed" className="scroll-mt-28 bg-[#123D2B] py-20 text-white lg:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div><SectionKicker variant="light">LEED project support</SectionKicker><h2 className="section-title text-white">Documentation Support, Not a Product Certificate.</h2></div>
          <div className="border-l border-white/20 pl-7 md:pl-10"><p className="text-base leading-8 text-white/78 lg:text-lg">ARS is not presented as “LEED certified.” Its environmental documentation, particularly the EPD, may support material-selection and embodied-carbon documentation prepared for LEED projects. Eligibility and credit decisions remain project-specific and subject to the applicable LEED requirements.</p><a href="/ars-assets/certifications/ARS-STEELS_EPD-CERTIFICATE-2.pdf" target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-white">Review the EPD <ArrowRight size={15} aria-hidden="true" /></a></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#F6F8F1] py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="green">Supporting sustainability documentation</SectionKicker><h2 className="section-title max-w-3xl">Evidence Beyond Product Ratings.</h2><div className="mt-12 grid gap-8 lg:grid-cols-2"><article className="border border-[#123D2B]/16 bg-white"><CertificationDocumentPreview title="Sustainability Report FY 2024-25" image="/ars-assets/certifications/previews/sustainability-report.png" /><div className="p-7"><h3 className="font-display text-2xl font-bold">Sustainability Report FY 2024-25</h3><p className="mt-4 text-base leading-8 text-steel-700">The ARS Sustainability Report brings together the company&apos;s environmental approach, reported performance, and supporting sustainability information.</p><DocumentActions file="/ars-assets/certifications/Sustainability-report-Final-13.02.pdf" /></div></article><article className="border border-[#123D2B]/16 bg-white"><CertificationDocumentPreview title="ISO 14001:2015 Environmental Management System" image="/ars-assets/certifications/previews/iso-14001.png" /><div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#17633F]">Supporting management-system evidence</p><h3 className="mt-3 font-display text-2xl font-bold">ISO 14001:2015</h3><p className="mt-4 text-base leading-8 text-steel-700">ISO 14001 provides supporting evidence for ARS&apos;s Environmental Management System covering its stated manufacturing activities. It is not a Green Steel product rating.</p><DocumentActions file="/ars-assets/certifications/ISO-14001.2015-February-2024.pdf" /></div></article></div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24" id="green-document-library">
        <div className="ars-container"><SectionKicker variant="green">Downloadable green certification library</SectionKicker><h2 className="section-title max-w-3xl">Environmental Evidence in One Place.</h2><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{documents.map((document) => <article key={document.title} className="overflow-hidden border border-[#123D2B]/14 bg-white shadow-[0_18px_45px_rgba(18,61,43,0.07)]"><CertificationDocumentPreview title={document.title} image={document.preview} /><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#17633F]">{document.issuer}</p><h3 className="mt-3 font-display text-xl font-bold text-ink-900">{document.title}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{document.description}</p><DocumentActions file={document.file} /></div></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-[#EEF5EC] py-20 lg:py-24">
        <div className="ars-container"><SectionKicker variant="green">Related sustainability pathways</SectionKicker><h2 className="section-title max-w-3xl">Continue the Evidence Journey.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-steel-700">Green Certifications contains environmental evidence. Certifications &amp; Awards remains the complete ARS corporate certification library.</p><nav aria-label="Related sustainability pages" className="mt-10 border-t border-[#123D2B]/18">{pathways.map(([label, description, href]) => <Link key={label} href={href} className="focus-ring grid min-h-24 gap-3 border-b border-[#123D2B]/18 py-6 transition hover:bg-white/65 md:grid-cols-[280px_1fr_auto] md:items-center md:px-4"><strong className="font-display text-xl text-ink-900">{label}</strong><span className="text-sm leading-7 text-steel-700">{description}</span><ArrowRight className="size-5 text-brand-blue" aria-hidden="true" /></Link>)}</nav></div>
      </MotionSection>

      <div className="[&>section]:!bg-[#123D2B]"><ContactCta eyebrow="CERTIFICATION SUPPORT" headline="Need Environmental Documentation for Your Project?" body="ARS can support project, procurement, specification, and sustainability-documentation enquiries with available environmental evidence." primaryLabel="Request Documents" primaryHref="/contact" secondaryLabel="Request Quote" secondaryHref="/request-quote" tone="solid" /></div>
    </main>
  );
}
