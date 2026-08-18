import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Leadership & Our Team | ARS Green Steel",
  description:
    "Meet the Managing Director, Executive Director, and wider team of ARS Green Steel.",
  path: "/our-team",
});

const executiveLeadership = [
  {
    name: "Shri Ashwani Kumar Bhatia",
    role: "Managing Director (MD)",
    bio: "Shri Ashwani Kumar Bhatia, an Economics Honours graduate, is the Founder and Managing Director of ARS Group of Companies and the visionary behind ARS Steels Pvt. Ltd. With over 39 years of distinguished experience in the steel and trade industry, he began his entrepreneurial journey in 1978 through the trading of MS scrap in New Delhi before establishing ARS Steels in 1990 with a vision to manufacture high-quality MS Ingots. As the principal promoter and strategic leader of the company, he continues to steer its growth with an unwavering commitment to manufacturing excellence, innovation, operational integrity, and customer trust, laying the foundation for ARS to become one of South India's leading manufacturers of premium TMT steel bars.",
    photo: "/ars-assets/leadership/ashwani-kumar-bhatia.png",
  },
  {
    name: "Shri Rajesh Bhatia",
    role: "Executive Director (ED)",
    bio: "Shri Rajesh Bhatia, Executive Director of ARS Steels & Alloy International Pvt. Ltd., began his journey with the company as a part-time trainee during the final year of his Bachelor's in Business Administration from BVIMR, New Delhi. Complementing his academic foundation with a Diploma in Stock Analysis and Portfolio Management from the BLB Institute of Financial Management, he has played an instrumental role in driving the company's strategic growth and expanding its presence into new business avenues. Combining a progressive outlook with a strong understanding of the steel manufacturing industry, he continues to lead initiatives focused on innovation, operational excellence, sustainable growth, and delivering long-term value to customers and stakeholders.",
    photo: "/ars-assets/leadership/rajesh-bhatia.png",
  },
] as const;

const directLeadership = [
  executiveLeadership[1],
  {
    name: "Mr. C.V. Sathyanarayana Murthy",
    role: "Technical Director",
    photo: "/ars-assets/leadership/cv-sathyanarayana-murthy.png",
  },
  {
    name: "Mr. N. Prabhu",
    role: "Dy. Director – Finance & Accounts",
    photo: "/ars-assets/leadership/n-prabhu.png",
  },
  {
    name: "Mr. Sumit Bhatia",
    role: "VP – Global Business All India Key Accounts & Renewable Power Management",
    photo: "/ars-assets/Sumit-Bhatia-1.jpeg",
  },
  {
    name: "Mr. Madhanagopal",
    role: "VP – Supply Chain Management",
    photo: "/ars-assets/Madhana-Gopal-1.jpeg",
  },
] as const;

const salesMarketingLeader = {
  name: "Mr. G. Chandra Mouli",
  role: "Chief Marketing Officer – Sales & Marketing",
  photo: "/ars-assets/Chandra-Mouli-1.jpeg",
} as const;

const financeLeader = {
  name: "Ms. S. Valarmadhi",
  role: "GM – Finance & Accounts",
  photo: "/ars-assets/leadership/s-valarmadhi.png",
} as const;

const salesMarketingTeam = [
  {
    name: "Mr. TS. Ragu",
    role: "AVP – Project & Retail Sales",
    photo: "/ars-assets/leadership/ts-ragu.png",
  },
  {
    name: "Mr. R. Govindarajan",
    role: "SGM – Field Marketing & Technical Services",
    photo: "/ars-assets/leadership/r-govindarajan.png",
  },
  {
    name: "Ms. N. Subashini",
    role: "SGM – People Management",
    photo: "/ars-assets/leadership/n-subashini.png",
  },
  {
    name: "Mr. M. Babulal",
    role: "DGM – IT",
    photo: "/ars-assets/leadership/m-babulal.png",
  },
  {
    name: "Mr. Balamurali Krishna Chakkaravarthy",
    role: "DGM – New Business Development",
    photo: "/ars-assets/leadership/balamurali-krishna-chakkaravarthy.jpeg",
  },
  {
    name: "Mr. Jayaprakash",
    role: "Company Secretary & AGM – Corporate Strategy",
    photo: "/ars-assets/leadership/r-jayaprakash.jpeg",
  },
  {
    name: "Mr. S. Sivakarthikeyan",
    role: "AGM – Marketing",
    photo: "/ars-assets/leadership/s-sivakarthikeyan.jpeg",
  },
] as const;

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

function HierarchyProfileCard({
  member,
  emphasis = false,
}: {
  member: TeamMember;
  emphasis?: boolean;
}) {
  return (
    <article
      className={`group relative h-full overflow-hidden border bg-white shadow-[0_18px_44px_rgba(13,43,110,0.08)] ${
        emphasis ? "border-brand-blue/30" : "border-ink-900/8"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-100">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role} at ARS Green Steel`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="relative min-h-40 p-5">
        <span className="mb-4 block h-0.5 w-12 bg-brand-red" aria-hidden="true" />
        <h3 className="font-display text-lg font-bold leading-[1.2] text-ink-900">{member.name}</h3>
        <p className="mt-2 text-sm leading-5 text-steel-700">{member.role}</p>
      </div>
    </article>
  );
}

function PrimaryHierarchyCard({ member }: { member: TeamMember }) {
  return (
    <article className="mx-auto grid w-full max-w-3xl overflow-hidden bg-brand-blue text-white shadow-[0_24px_70px_rgba(13,43,110,0.22)] sm:grid-cols-[180px_minmax(0,1fr)]">
      <div className="relative aspect-[4/3] min-h-48 overflow-hidden bg-brand-blue-dark sm:aspect-auto sm:min-h-56">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role} at ARS Green Steel`}
          fill
          sizes="(max-width: 640px) 100vw, 180px"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-9">
        <span className="mb-5 h-0.5 w-12 bg-brand-red" aria-hidden="true" />
        <h3 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.025em]">
          {member.name}
        </h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/72">{member.role}</p>
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950">
        <Image
          src="/ars-assets/about/ARS-leadership-banner.jpg"
          alt="ARS leadership team reviewing operations at a steel manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />

        <div className="ars-page-hero-content ars-container relative z-10 flex h-full w-full items-end pb-16 pt-32 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Leadership
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              The People Behind
              <br />
              <span className="italic text-brand-red">the Real Strength</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Behind ARS Green Steel is a team of experienced leaders driving innovation, manufacturing excellence, quality, sustainability, and customer trust. Together, they are shaping the future of India&apos;s steel industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Executive leadership ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Executive Leadership</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Leadership with purpose, integrity, and a relentless pursuit of excellence.</h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              At the heart of ARS is a leadership team driven by purpose, integrity, and a relentless pursuit of excellence. The Managing Director and Executive Director provide the strategic direction that continues to strengthen ARS&apos;s legacy of manufacturing high-quality steel while embracing innovation and sustainable growth.
            </p>
          </div>
          <div className="grid gap-10 lg:gap-14">
            {executiveLeadership.map((member, index) => (
              <article
                key={member.name}
                className={`grid overflow-hidden border-y border-ink-900/10 bg-surface-50 lg:h-[520px] ${
                  index % 2 === 1
                    ? "lg:grid-cols-[minmax(0,1.22fr)_minmax(200px,0.5fr)]"
                    : "lg:grid-cols-[minmax(200px,0.5fr)_minmax(0,1.22fr)]"
                }`}
              >
                <div className={`relative aspect-[367/398] w-full overflow-hidden lg:h-full lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at ARS Green Steel`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
                  <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                    <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
                    {member.role}
                  </div>
                  <h3 className="max-w-xl font-display text-[clamp(2rem,3.2vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink-900">
                    {member.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[15px] leading-8 text-steel-700">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Core team hierarchy ── */}
      <MotionSection className="overflow-hidden bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Core Team
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
                Behind ARS&apos;s continued success is a team of experienced professionals whose expertise, dedication, and collaborative spirit drive excellence across manufacturing, operations, quality, and customer service. Together, they uphold the values that define ARS and contribute to its sustained growth.
              </p>
            </div>
          </div>

          <div role="group" aria-label="ARS leadership reporting hierarchy">
            <PrimaryHierarchyCard member={executiveLeadership[0]} />

            <div className="mx-auto h-12 w-px bg-brand-blue/35" aria-hidden="true" />

            <section aria-labelledby="direct-leadership-title" className="relative">
              <h3 id="direct-leadership-title" className="sr-only">
                Leaders reporting to the Managing Director
              </h3>
              <div
                className="absolute top-0 hidden h-px bg-brand-blue/35 lg:block"
                style={{
                  left: "calc((100% - 5rem) / 10)",
                  right: "calc((100% - 5rem) / 10)",
                }}
                aria-hidden="true"
              />
              <div className="mb-5 flex items-center gap-3 lg:hidden">
                <span className="h-px w-8 bg-brand-blue" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">Reports to Managing Director</p>
              </div>
              <ol className="grid gap-7 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                {directLeadership.map((member) => (
                  <li key={member.name} className="relative pt-0 lg:pt-10 before:absolute before:left-1/2 before:top-0 before:hidden before:h-10 before:w-px before:bg-brand-blue/35 lg:before:block">
                    <HierarchyProfileCard member={member} emphasis />
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              <section aria-labelledby="sales-leader-title" className="relative lg:col-start-1">
                <div className="absolute -top-14 left-1/2 hidden h-14 w-px bg-brand-blue/35 lg:block" aria-hidden="true" />
                <h3 id="sales-leader-title" className="sr-only">
                  Leader reporting to the Executive Director
                </h3>
                <div className="mb-4 flex items-center gap-3 lg:hidden">
                  <span className="h-px w-8 bg-brand-blue" aria-hidden="true" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">Reports to Executive Director</p>
                </div>
                <HierarchyProfileCard member={salesMarketingLeader} emphasis />
              </section>

              <section aria-labelledby="finance-leader-title" className="relative lg:col-start-3">
                <div className="absolute -top-14 left-1/2 hidden h-14 w-px bg-brand-blue/35 lg:block" aria-hidden="true" />
                <h3 id="finance-leader-title" className="sr-only">
                  Leader reporting to the Deputy Director of Finance and Accounts
                </h3>
                <div className="mb-4 flex items-center gap-3 lg:hidden">
                  <span className="h-px w-8 bg-brand-blue" aria-hidden="true" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">Reports to Dy. Director – Finance & Accounts</p>
                </div>
                <HierarchyProfileCard member={financeLeader} emphasis />
              </section>
            </div>

            <section aria-labelledby="sales-marketing-team-title" className="relative mt-16 border-t border-brand-blue/20 pt-14 lg:mt-20">
              <div className="absolute -top-16 left-[10%] hidden h-16 w-px bg-brand-blue/35 lg:block" aria-hidden="true" />
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
                <h3 id="sales-marketing-team-title" className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                  Sales &amp; Marketing
                </h3>
              </div>
              <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {salesMarketingTeam.map((member) => (
                  <li key={member.name}>
                    <HierarchyProfileCard member={member} />
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">JOIN OUR TEAM</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Build Your Future with ARS Green Steel
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Join a team driven by innovation, integrity, and manufacturing excellence. At ARS Green Steel, you&apos;ll have the opportunity to contribute to India&apos;s growing steel industry while building a rewarding career with purpose.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Link
                href="/careers"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Explore careers <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

    </main>
  );
}
