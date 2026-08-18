import { createPageMetadata } from "@/lib/site-metadata";
import { ArrowRight, BadgeCheck, Building2, Factory, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { DistributorEnquiryForm } from "@/components/distributor-enquiry-form";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Become a Steel Dealer or Distributor | ARS Green Steel",
  description: "Get pioneered to become a part of ARS Steels - Best TMT Bar Manufacturer and Suppliers in South India",
  path: "/become-a-steel-distributor",
});

const proofPoints: Array<{ title: string; body: string; icon: typeof BadgeCheck; href?: string }> = [
  { title: "Product confidence", body: "Present a clear ARS range across 550D, CRS 550D, and Binders for different construction requirements.", icon: BadgeCheck },
  { title: "Manufacturing strength", body: "Build conversations around ARS manufacturing, testing, and quality-led production practices.", icon: Factory, href: "/manufacturing" },
  { title: "A connected network", body: "Move from distributor interest to the right ARS contact and network pathway with a clear next step.", icon: MapPin, href: "/our-network" },
];

export default function BecomeDealerPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative overflow-hidden bg-ink-950 text-white">
        <Image src="/ars-assets/home/Distributors.jpg" alt="ARS steel distribution and dealer partnership" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.92),rgba(6,13,30,0.58)_54%,rgba(13,43,110,0.28))]" />
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-brand-red" />
        <div className="ars-page-hero-content ars-container relative flex min-h-[560px] items-end py-12 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
          <div className="max-w-4xl">
            <SectionKicker variant="light">DEALER &amp; DISTRIBUTOR PARTNERSHIPS</SectionKicker>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold uppercase leading-[1.03]">Become part of the <span className="text-brand-red">ARS family.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">Join a dependable TMT steel manufacturer and build stronger supply relationships for residential, commercial, and infrastructure projects.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#distributor-form" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-[#c90f16] md:text-base">Start an enquiry <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href="/products" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] border border-white/28 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-brand-blue md:text-base">Explore products <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div>
            <SectionKicker>PARTNERSHIP</SectionKicker>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08]">Let’s build excellence. <span className="text-brand-red">Together.</span></h2>
          </div>
          <div className="max-w-3xl text-base leading-8 text-steel-700 md:text-lg">
            <p>At ARS, we believe dependable construction supply is built through strong relationships. If you are looking to become an ARS steel dealer or distributor, share your details with our team and we will help direct your enquiry.</p>
            <p className="mt-5">Our product range, manufacturing capability, and quality-led approach give channel partners a clear foundation for serving their customers with confidence.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker>WHY ARS</SectionKicker>
          <div className="mt-6 max-w-3xl"><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">A stronger product story for every construction conversation.</h2><p className="mt-5 text-base leading-8 text-steel-700">Quality TMT steel bars support the strength, durability, and reliability that construction projects demand. ARS helps partners build that confidence through a focused product and manufacturing story.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {proofPoints.map(({ title, body, icon: Icon, href }) => <article key={title} className="border border-brand-blue/15 bg-white p-7"><span className="inline-flex size-11 items-center justify-center bg-brand-blue text-white"><Icon size={19} aria-hidden="true" /></span><h3 className="mt-6 font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-base leading-7 text-steel-700">{body}</p>{href && <Link href={href} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Learn more <ArrowRight size={16} aria-hidden="true" /></Link>}</article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div><SectionKicker>PRODUCT RANGE</SectionKicker><h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">Products your customers can trust.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">Explore the ARS range and choose the right route for your product conversations.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/product-crs-550d" className="focus-ring inline-flex min-h-11 items-center gap-2 bg-brand-blue px-5 text-sm font-bold text-white">CRS 550D <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/product-550d" className="focus-ring inline-flex min-h-11 items-center gap-2 border border-brand-blue/25 px-5 text-sm font-bold text-brand-blue">ARS Fe 550D <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/ars-binders" className="focus-ring inline-flex min-h-11 items-center gap-2 border border-brand-blue/25 px-5 text-sm font-bold text-brand-blue">ARS Binders <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
          <div className="relative min-h-72 overflow-hidden bg-ink-950 lg:min-h-[360px]"><Image src="/ars-assets/quality-policy-banner.jpg" alt="ARS steel quality inspection and manufacturing" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
        </div>
      </section>

      <section id="distributor-form" className="bg-[#F4F7FF] py-20 lg:py-24"><div className="ars-container"><DistributorEnquiryForm /></div></section>

      <ContactCta eyebrow="DISTRIBUTOR ENQUIRY" headline="Build a stronger supply partnership with ARS." body="Connect with the ARS team to discuss your distributor or dealer enquiry and product requirements." primaryLabel="Contact ARS" primaryHref="/contact" secondaryLabel="Explore our network" secondaryHref="/our-network" />
    </main>
  );
}
