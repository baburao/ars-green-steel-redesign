import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Check, Clock3 } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { careerJobs, getCareerJob } from "@/data/careers";
import { createPageMetadata } from "@/lib/site-metadata";

type CareerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careerJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) {
    return createPageMetadata({
      title: "Career Opportunity",
      description: "Explore career opportunities at ARS Green Steel.",
      path: `/careers/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${job.shortTitle} Career | ARS Green Steel`,
    description: `${job.summary} Review responsibilities and experience requirements for this ARS Green Steel opportunity.`,
    path: `/careers/${job.slug}`,
  });
}

function RequirementList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-base leading-7 text-steel-700">
          <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue">
            <Check size={14} strokeWidth={3} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getCareerJob(slug);

  if (!job) notFound();

  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(13,43,110,0.72),transparent_34%),linear-gradient(125deg,#060d1e_20%,#0d2b6e_125%)]" />
        <div className="ars-container relative z-10 pb-16 pt-36 md:pb-20 md:pt-44">
          <Link href="/careers#open-roles" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white">
            <ArrowLeft size={17} aria-hidden="true" /> Back to career roles
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">{job.department}</p>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.65rem,5.6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">{job.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">{job.summary}</p>
            </div>
            <div className="grid gap-3 rounded-[10px] border border-white/14 bg-white/[0.06] p-5 backdrop-blur-sm">
              <div className="inline-flex w-fit rounded-full bg-brand-red px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                Position filled
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <BriefcaseBusiness size={18} className="text-white" aria-hidden="true" /> {job.department}
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <Clock3 size={18} className="text-white" aria-hidden="true" /> {job.experience} experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          <div className="grid gap-16">
            <section aria-labelledby="responsibilities-heading">
              <SectionKicker>Role scope</SectionKicker>
              <h2 id="responsibilities-heading" className="section-title">Key responsibilities</h2>
              <RequirementList items={job.responsibilities} />
            </section>

            <section aria-labelledby="qualifications-heading">
              <SectionKicker>Experience</SectionKicker>
              <h2 id="qualifications-heading" className="section-title">Qualifications and background</h2>
              <RequirementList items={job.qualifications} />
            </section>

            {job.competencies ? (
              <section aria-labelledby="competencies-heading">
                <SectionKicker>What helps you succeed</SectionKicker>
                <h2 id="competencies-heading" className="section-title">Core competencies</h2>
                <RequirementList items={job.competencies} />
              </section>
            ) : null}

            {job.successMeasures ? (
              <section aria-labelledby="success-heading">
                <SectionKicker>Performance focus</SectionKicker>
                <h2 id="success-heading" className="section-title">How success is measured</h2>
                <RequirementList items={job.successMeasures} />
              </section>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[12px] border border-ink-900/10 bg-surface-50 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">Position filled</p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink-900">This role is no longer accepting applications.</h2>
              <p className="mt-4 text-sm leading-6 text-steel-700">The position has been occupied. You can review other role profiles or contact ARS with a general career enquiry.</p>
              <Link href="/contact" className="focus-ring mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-ink-900/14 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue">
                General career enquiry <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/careers#open-roles" className="focus-ring mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-ink-900/14 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue">
                View all roles
              </Link>
            </div>
          </aside>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow="Careers at ARS"
        headline="Interested in future opportunities with ARS?"
        body="This position is filled, but you can contact ARS with a general career enquiry and introduce your experience."
        primaryLabel="General career enquiry"
        primaryHref="/contact"
        secondaryLabel="All roles"
        secondaryHref="/careers#open-roles"
      />
    </main>
  );
}
