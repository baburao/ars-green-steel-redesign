import { createPageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Download,
  FileCheck2,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { CertificationDocumentPreview } from "@/components/certification-document-preview";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Certifications & Awards | ARS Green Steel",
  description:
    "Review ARS Green Steel certifications, approvals, sustainability documentation, management systems, and awards.",
  path: "/our-certification",
});

type CertificationDocument = {
  title: string;
  preview?: string;
  file?: string;
  fileLabel?: string;
  sourceNote?: string;
  anchor?: string;
};

type CertificationGroup = {
  title: string;
  icon: typeof Leaf;
  documents: CertificationDocument[];
};

const certificationGroups: CertificationGroup[] = [
  {
    title: "Sustainability documentation",
    icon: Leaf,
    documents: [
      {
        title: "Sustainability report",
        preview: "/ars-assets/certifications/previews/sustainability-report.png",
        file: "/ars-assets/certifications/Sustainability-report-Final-13.02.pdf",
      },
      {
        title: "SGBC certificate",
        preview: "/ars-assets/certifications/previews/sgbc-certificate.png",
        file: "/ars-assets/certifications/SGBP-6210-ARS-Steels-Alloy-International-Private-Limited-4-1.pdf",
        anchor: "sgbc-recognition",
      },
      {
        title: "NISST green steel taxonomy certificate",
        preview: "/ars-assets/certifications/previews/nisst-green-steel-certificate.png",
        file: "/ars-assets/certifications/Green-Steel-Certificate-2027-1.pdf",
      },
      {
        title: "Environmental Product Declaration Certificate",
        preview: "/ars-assets/certifications/previews/epd-certificate.png",
        file: "/ars-assets/certifications/ARS-STEELS_EPD-CERTIFICATE-2.pdf",
      },
      {
        title: "GRIHA Certificate",
        preview: "/ars-assets/certifications/previews/griha-certificate.png",
        file: "/ars-assets/certifications/GRIHA-Product-Catalogue-ARS-Steels-and-Alloys-International-Private-Limited.pdf",
      },
    ],
  },
  {
    title: "Product & statutory approvals",
    icon: Building2,
    documents: [
      {
        title: "PWD Brand approval certificate",
        preview: "/ars-assets/certifications/previews/pwd-approval.png",
        file: "/ars-assets/certifications/PWD-Approval-2025.pdf",
      },
      {
        title: "TMT Bar Renewals certificate",
        preview: "/ars-assets/certifications/previews/tmt-renewal.png",
        file: "/ars-assets/certifications/1786-renewal-certificate-1.pdf",
      },
      { title: "Billets Renewal Certificate" },
      {
        title: "NHAI Source Approval Document (TES)",
        preview: "/ars-assets/certifications/previews/nhai-source-approval.png",
        file: "/ars-assets/certifications/NHAI-Source-Approval-Letter.pdf",
      },
    ],
  },
  {
    title: "Management systems",
    icon: ShieldCheck,
    documents: [
      {
        title: "ISO 9001 Certificate",
        preview: "/ars-assets/certifications/previews/iso-9001.png",
        file: "/ars-assets/certifications/ISO-9001.2025-February-2024-2.pdf",
      },
      {
        title: "ISO 14001 Certificate",
        preview: "/ars-assets/certifications/previews/iso-14001.png",
        file: "/ars-assets/certifications/ISO-14001.2015-February-2024.pdf",
      },
      {
        title: "ISO 45001 Certificate",
        preview: "/ars-assets/certifications/previews/iso-45001.png",
        file: "/ars-assets/certifications/ISO-45001-1-1.pdf",
        sourceNote: "Certificate Expiry 9th June 2025",
      },
    ],
  },
  {
    title: "Awards & recognitions",
    icon: Award,
    documents: [
      {
        title: "Excellence in Green Product Initiative (ABP India Infrastructure 2024)",
        preview: "/ars-assets/certifications/ARS-Wins-the-Excellence-Aw_-Aug-24-05.jpg",
        file: "/ars-assets/certifications/ARS-Wins-the-Excellence-Aw_-Aug-24-05.jpg",
        fileLabel: "Download image",
      },
      {
        title:
          "ISPAT Udyog Ratan Award for Green Initiative Leadership (2024) Ministry of Steels",
        preview: "/ars-assets/certifications/ARS-Wins-the-Excellence-Aw_-Aug-24-06.jpg",
        file: "/ars-assets/certifications/ARS-Wins-the-Excellence-Aw_-Aug-24-06.jpg",
        fileLabel: "Download image",
      },
    ],
  },
];

function toAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[520px] items-end overflow-hidden bg-ink-950 md:min-h-[580px] lg:h-[640px] lg:min-h-[640px]">
        <div className="soft-noise absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(13,43,110,0.5),transparent_38%),linear-gradient(0deg,rgba(6,13,30,0.78),rgba(6,13,30,0.38))] md:bg-[radial-gradient(circle_at_82%_25%,rgba(13,43,110,0.42),transparent_40%),linear-gradient(0deg,rgba(6,13,30,0.68),rgba(6,13,30,0.28))]" />

        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Certifications
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
              Proof before
              <br />
              <span className="italic text-brand-red">purchase.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Certifications turn ARS claims into usable trust for engineers, contractors,
              institutions, dealers, and project buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#certification-library"
                className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                View documents <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-[6px] border-[1.5px] border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                Request certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="certification-library">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Certification library</SectionKicker>
              <h2 className="section-title max-w-3xl">Keep proof easy to scan.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Buyers should not hunt for credibility. Group proof by the job it does: quality
              confidence, process confidence, green-building confidence, and approval review.
            </p>
          </div>

          <div
            id="downloads"
            className="mt-12 rounded-[18px] border border-brand-blue/12 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
              <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-brand-blue text-white">
                <Download size={22} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900">
                  Need a document for review?
                </h2>
                <p className="mt-2 text-sm leading-7 text-steel-700">
                  Open or download the available certificates, approvals, reports, and award
                  records. Contact the sales team when a document is not available here.
                </p>
              </div>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Request documents <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {certificationGroups.map((group) => {
              const Icon = group.icon;
              const groupAnchor = toAnchor(group.title);

              return (
                <section
                  key={group.title}
                  id={groupAnchor}
                  aria-labelledby={`${groupAnchor}-title`}
                  className="scroll-mt-28"
                >
                  <div className="mb-7 flex items-center gap-4 border-b border-brand-blue/12 pb-5">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-brand-blue text-white">
                      <Icon size={21} />
                    </span>
                    <h2
                      id={`${groupAnchor}-title`}
                      className="font-display text-[clamp(1.8rem,3.5vw,2.55rem)] font-bold tracking-[-0.02em] text-ink-900"
                    >
                      {group.title}
                    </h2>
                  </div>

                  <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {group.documents.map((document) => (
                      <li
                        key={document.title}
                        id={document.anchor}
                        className="scroll-mt-28 overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)]"
                      >
                        {document.preview ? (
                          <CertificationDocumentPreview
                            title={document.title}
                            image={document.preview}
                          />
                        ) : (
                          <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(145deg,#eef3fb,#ffffff)]">
                            <FileCheck2 size={42} className="text-brand-blue/45" aria-hidden="true" />
                          </div>
                        )}
                        <div className="flex min-h-48 flex-col p-6">
                          <BadgeCheck size={19} className="text-steel-500" aria-hidden="true" />
                          <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink-900">
                            {document.title}
                          </h3>
                          {document.sourceNote ? (
                            <p className="mt-3 text-sm font-semibold text-brand-red">
                              {document.sourceNote}
                            </p>
                          ) : null}
                          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
                            {document.file ? (
                              <>
                                <a
                                  href={document.file}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-bold text-brand-blue transition hover:text-brand-red"
                                >
                                  View document <ArrowRight size={15} />
                                </a>
                                <a
                                  href={document.file}
                                  download
                                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-bold text-brand-blue transition hover:text-brand-red"
                                >
                                  {document.fileLabel ?? "Download PDF"} <Download size={15} />
                                </a>
                              </>
                            ) : (
                              <Link
                                href="/contact"
                                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-bold text-brand-blue transition hover:text-brand-red"
                              >
                                Request documents <ArrowRight size={15} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Request certification support for your project.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Tell ARS which product, project type, and document proof you need for technical or
              procurement review.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/contact"
          >
            <Download size={18} />
            Request documents
          </Link>
        </div>
      </section>

    </main>
  );
}
