import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, PackageCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { FaqList } from "@/components/faq-list";

const products = [
  { title: "ARS CRS Fe 550D TMT Bars", body: "A corrosion-resistant TMT solution for projects exposed to moisture, salinity, high TDS, and demanding environments.", href: "/product-crs-550d", label: "Explore ARS CRS Fe 550D", image: "/ars-assets/logos/ARSCRS550D.png" },
  { title: "ARS Fe 550D TMT Bars", body: "A dependable TMT steel solution for residential, commercial, and infrastructure projects.", href: "/product-550d", label: "Explore ARS Fe 550D", image: "/ars-assets/logos/ARS550D.png" },
  { title: "ARS Binders", body: "Precision-made steel binders that help improve consistency and efficiency in reinforcement work.", href: "/ars-binders", label: "Explore ARS Binders", image: "/ars-assets/logos/BinderLogo.png" },
] as const;

const faqs = [
  ["Why is it important to use high-quality TMT bars in construction?", "High-quality TMT bars provide superior strength, flexibility, and durability, which are essential for the structural integrity and longevity of construction projects. They help structures withstand environmental stresses such as earthquakes, corrosion, and heavy loads while reducing maintenance needs and improving safety."],
  ["How do TMT bars enhance the safety of construction projects?", "TMT bars undergo a thermo-mechanical treatment process that creates a tough exterior and a flexible core. This combination helps the bars absorb and dissipate stress, making structures more resilient to seismic activity and other dynamic loads. Their strong bond with concrete also supports a stable and robust framework."],
  ["What should I look for when selecting TMT bars for my projects?", "Consider the bar’s chemical composition, grade, and certification. Look for products tested by reputable organisations, with well-defined ribs for better bonding with concrete and clear branding that helps confirm authenticity."],
] as const;

function EditorialBand({ image, children, reverse = false }: { image: string; children: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid overflow-hidden border border-brand-blue/15 bg-white lg:grid-cols-2">
      <div className={`relative min-h-72 bg-ink-950 ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,13,30,0.12),rgba(13,43,110,0.42))]" />
      </div>
      <div className={`p-8 md:p-12 ${reverse ? "lg:order-1" : ""}`}>{children}</div>
    </div>
  );
}

export function DealerDistributorPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative overflow-hidden bg-ink-950 text-white">
        <Image src="/ars-assets/Solutions/Dealers/DealersHeroBanner.jpg" alt="ARS dealer and distributor network" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.9)_0%,rgba(13,43,110,0.62)_58%,rgba(6,13,30,0.2)_100%)]" />
        <div className="ars-page-hero-content ars-container relative flex min-h-[560px] items-end py-12 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />For Dealers &amp; Distributors</div>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold uppercase leading-[1.03]">Construction excellence. <span className="text-brand-red">Safely delivered.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">ARS Steel is your dependable partner for TMT steel bars that help make construction projects successful and dependable.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark md:text-base">Become a Dealer <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href="/our-network" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] border border-white/28 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-brand-blue md:text-base">Find our network <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <EditorialBand image="/ars-assets/Solutions/Dealers/DealersHeroBanner.jpg">
            <SectionKicker>PARTNERSHIP</SectionKicker>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">Let’s build excellence. <span className="text-brand-red">Together.</span></h2>
            <p className="mt-6 text-base leading-8 text-steel-700">As a contractor, your expertise and dedication are the cornerstones of every successful construction project. Your planning, coordination, and execution help ensure that each build meets high standards of quality and efficiency. The choices you make, from materials to techniques, have a lasting impact on the outcome.</p>
            <p className="mt-5 text-base leading-8 text-steel-700">Partner with a steel manufacturer that supports your commitment to projects built to last.</p>
            <Link href="/become-a-steel-distributor" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Partner with ARS <ArrowRight size={16} aria-hidden="true" /></Link>
          </EditorialBand>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className="ars-container">
          <EditorialBand image="/ars-assets/quality-policy-banner.jpg" reverse>
            <SectionKicker>QUALITY MATTERS</SectionKicker>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">The importance of high-quality TMT bars</h2>
            <p className="mt-6 whitespace-pre-line text-base leading-8 text-steel-700">One of the most critical decisions in construction is selecting the right TMT steel bars. High-quality TMT bars provide the strength, durability, and flexibility needed to support projects and help them remain safe and resilient for years to come. Choosing superior grades can strengthen the structure, reduce maintenance needs, and support the longevity of the construction.
\nWhen you choose TMT bars for residential, commercial, and infrastructure projects, you are choosing a foundation built around safety and reliability.</p>
          </EditorialBand>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker>ARS PRODUCTS</SectionKicker>
          <div className="mt-6 flex max-w-3xl gap-4"><span className="mt-1 h-10 w-1 shrink-0 bg-brand-red" aria-hidden="true" /><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">Products your customers can trust</h2></div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel-700">Explore the ARS product range for residential, commercial, and infrastructure requirements.</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => <article key={product.title} className="overflow-hidden border border-brand-blue/15 bg-white">
              <div className="relative h-52 bg-[#F4F7FF]"><Image src={product.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-8" /></div>
              <div className="p-7"><span className="inline-flex size-11 items-center justify-center bg-brand-blue text-white"><PackageCheck size={19} aria-hidden="true" /></span><h3 className="mt-6 font-display text-2xl font-bold">{product.title}</h3><p className="mt-4 text-base leading-7 text-steel-700">{product.body}</p><Link href={product.href} className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">{product.label} <ArrowRight size={16} aria-hidden="true" /></Link></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className="ars-container max-w-4xl"><SectionKicker>FAQS</SectionKicker><FaqList className="mt-8" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div>
      </section>

      <ContactCta eyebrow="DEALER & DISTRIBUTOR ENQUIRY" headline="Build a stronger supply partnership with ARS." body="Connect with the ARS team to discuss your dealer or distributor enquiry, product requirements, and next steps." primaryLabel="Become a Dealer" primaryHref="/become-a-steel-distributor" primaryClassName="bg-brand-blue hover:bg-brand-blue-dark" secondaryLabel="Explore our network" secondaryHref="/our-network" />
    </main>
  );
}
