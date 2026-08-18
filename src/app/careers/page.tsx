import Image from "next/image";
import { ContactCta } from "@/components/contact-cta";
import { CareerOpenings } from "@/components/career-openings";
import { MotionSection } from "@/components/motion-section";
import { PageHero, SectionIntro } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { careerJobs } from "@/data/careers";
import { createPageMetadata } from "@/lib/site-metadata";
import { Factory, Gauge, Handshake, ShieldCheck } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Careers at ARS Green Steel",
  description:
    "Explore career profiles at ARS Green Steel across sales, logistics, and steel plant leadership, and enquire about future opportunities.",
  path: "/careers",
});

const employerPrinciples = [
  {
    icon: Factory,
    title: "Work close to the industry",
    text: "Contribute to the commercial, logistics, and plant disciplines that keep steel moving from production to project.",
  },
  {
    icon: Gauge,
    title: "Own measurable outcomes",
    text: "Take responsibility for customer growth, operating reliability, delivery discipline, quality, and cost performance.",
  },
  {
    icon: Handshake,
    title: "Build across functions",
    text: "Collaborate across sales, production, dispatch, finance, maintenance, quality, and external partner networks.",
  },
  {
    icon: ShieldCheck,
    title: "Lead with discipline",
    text: "Bring sound judgement, process rigour, safety awareness, and accountability to work that supports critical infrastructure.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Careers at ARS"
        title="Build what lasts."
        accent="Grow with ARS."
        body="Join teams working across steel sales, project development, logistics, and plant operations—where disciplined execution turns engineering capability into dependable supply."
        primaryLabel="View recent roles"
        primaryHref="#open-roles"
        secondaryLabel="Discover ARS"
        secondaryHref="/about"
        backgroundImageSrc="/ars-assets/about/ARS-Vision-Misson_hero.jpg"
        backgroundImageAlt="ARS Green Steel plant viewed by an industrial professional"
        backgroundImagePosition="center"
      />

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <SectionIntro
            eyebrow="The work"
            title="Careers connected to real industrial outcomes."
            body="ARS roles sit at the intersection of manufacturing, customer trust, operational precision, and infrastructure delivery."
          />
          <div className="grid gap-px overflow-hidden rounded-[12px] border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-4">
            {employerPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} className="bg-white p-7 md:p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-[8px] bg-brand-blue/7 text-brand-blue">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-ink-900">{principle.title}</h3>
                  <p className="mt-4 text-base leading-7 text-steel-700">{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="open-roles" className="scroll-mt-24 bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Recent roles"
            title="Explore the experience ARS looks for across key functions."
            body="These four positions are currently filled. Their role profiles remain available for reference, and future opportunities will be added here when they open."
          />
          <CareerOpenings jobs={careerJobs} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[14px] bg-ink-950">
            <Image
              src="/ars-assets/about/Manufacturing-our-facility.jpg"
              alt="ARS Green Steel manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
          </div>
          <div>
            <SectionKicker>Grow through responsibility</SectionKicker>
            <h2 className="section-title">Bring depth. Build range. Lead the next outcome.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-700">
              Industrial careers grow through increasingly complex decisions: winning the right customer, coordinating a dependable dispatch, improving a process, or aligning an entire plant around safety, quality, delivery, and cost.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Customer and project exposure", "Cross-functional execution", "Operational problem-solving", "Leadership at increasing scale"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-l-2 border-brand-red bg-surface-50 px-4 py-4 text-sm font-bold text-ink-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow="General career enquiry"
        headline="Do not see the right role today? Start a conversation with ARS."
        body="Use the contact page to introduce your experience and the kind of industrial work you are looking to take on."
        primaryLabel="Contact ARS"
        primaryHref="/contact"
        secondaryLabel="Review roles"
        secondaryHref="#open-roles"
      />
    </main>
  );
}
