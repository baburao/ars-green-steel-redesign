import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FlaskConical, Phone, ShieldCheck } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Reliable Steel Testing Services for Quality Assurance | ARS Steel",
  description:
    "Ensure the quality and strength of your steel with our expert testing services. Discover comprehensive steel testing solutions tailored for construction and manufacturing!",
  path: "/steel-testing",
  image: "/ars-assets/products/SteelTesting/steel-testing-hero.jpg",
});

const testingElements = ["Carbon", "Manganese", "Silicon"] as const;

export default function SteelTestingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image
          src="/ars-assets/products/SteelTesting/steel-testing-hero.jpg"
          alt="ARS technician conducting spectrometer testing for steel quality verification"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />Free On-Site Spectrometer Testing</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
              Ensure Material Excellence
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90">
                Request an On-site Spectrometry Testing <ArrowRight aria-hidden="true" size={15} />
              </Link>
              <a href="tel:+919710411111" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white hover:text-ink-900">
                <Phone aria-hidden="true" size={15} /> +91 9710411111
              </a>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink-900/10">
          {testingElements.map((element) => (
            <div key={element} className="flex items-center gap-3 px-0 sm:justify-center sm:px-8">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-blue/[0.06] text-brand-blue"><FlaskConical aria-hidden="true" size={18} /></span>
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink-900">{element} analysis</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.6fr_1.08fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-ink-950 md:min-h-[480px]">
            <Image src="/ars-assets/products/SteelTesting/steel-testing-detail.jpg" alt="Spectrometer equipment used for on-site TMT steel bar composition analysis" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <SectionKicker variant="brand">ON-SITE PRECISION</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">On-Site Precision: Empowering Your Projects with Spectrometer Testing</h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-steel-700">At ARS Steels, we bring advanced spectrometer testing directly to your construction site, enabling you to verify the quality and composition of TMT steel bars on the spot. This on-site service allows you to conduct real-time analysis of critical elements like carbon, manganese, and silicon, which determine the steel&apos;s properties such as strength, flexibility, and resistance to corrosion.</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-steel-700">By offering immediate insights into the material&apos;s characteristics, our spectrometer testing helps ensure that every batch of TMT bars meets both your project specifications and industry standards. This proactive approach not only enhances the reliability of your construction but also optimizes material usage and project timelines, providing a clear advantage in maintaining high standards of construction quality.</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionKicker variant="brand">QUALITY VERIFICATION</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Quality Verification Made Easy: Free On-Site Spectrometer Service</h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-steel-700">Experience the assurance of quality and compliance without leaving your worksite with ARS Steels&apos; free on-site spectrometer testing service. This complimentary offering is designed to give contractors and engineers a powerful tool for immediate validation of TMT steel bars used in their projects.</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-steel-700">Our advanced spectrometer equipment is brought directly to your site, where our skilled technicians perform precise analyses of the steel&apos;s chemical composition. This process not only confirms that the material adheres to high standards of strength and durability but also identifies any discrepancies in real-time, allowing for quick resolutions and continued confidence in your building materials.</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-steel-700">Leverage this service to ensure every component of your construction meets the exacting requirements necessary for a robust and lasting build.</p>
          </div>
          <aside className="rounded-[8px] bg-brand-blue p-7 text-white md:p-9">
            <ShieldCheck aria-hidden="true" size={28} className="text-brand-red" />
            <h3 className="mt-8 font-display text-[1.7rem] font-bold leading-[1.15]">Quality You Can Trust. Verified By The Steel Test.</h3>
            <ul className="mt-7 grid gap-4">
              {[
                "Verify the strength, ductility, and durability of the steel used in your projects.",
                "Ensure every element conforms to the rigorous demands of modern construction.",
                "Receive detailed analyses and reports from our team of experts.",
              ].map((item) => <li key={item} className="flex gap-3 text-[14px] leading-[1.7] text-white/80"><CheckCircle2 aria-hidden="true" size={17} className="mt-1 shrink-0 text-brand-red" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.4fr_0.94fr] lg:items-center lg:gap-16">
          <div className="w-full max-w-[420px] justify-self-center overflow-hidden rounded-[8px] bg-ink-950 shadow-[0_20px_55px_rgba(15,23,42,0.16)] lg:justify-self-start">
            <video className="aspect-square w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src="/ars-assets/products/SteelTesting/Steeltesting-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <SectionKicker variant="brand">Spectrometer Test Live</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">ARS Fe 550D TMT Bars Certified by SGS</h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-steel-700">Our team of experts is equipped with the latest technology and deep industry knowledge, ready to assist you on-site or at our labs with detailed analyses and reports. Don&apos;t compromise on safety and quality—contact ARS Steels today to schedule your free steel testing.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product-550d" className="focus-ring inline-flex min-h-11 items-center gap-2 text-[14px] font-bold text-brand-blue">Explore ARS Fe 550D TMT Bars <ArrowRight aria-hidden="true" size={16} /></Link>
              <Link href="/our-certification" className="focus-ring inline-flex min-h-11 items-center gap-2 text-[14px] font-bold text-brand-blue">View Certifications <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} />
        <div className="ars-container relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <SectionKicker variant="light">REQUEST AN ON-SITE SPECTROMETRY TESTING</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Quality You Can Trust. Verified By The Steel Test.</h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/75">Please complete this form with basic information about the testing or analysis you need.</p>
          </div>
          <Link href="/request-quote" className="focus-ring inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90">
            Request Testing <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </MotionSection>

    </main>
  );
}
