import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Ruler, ShieldCheck, Waves } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { productCatalog } from "@/lib/product-catalog";
import { FaqList } from "@/components/faq-list";

export const metadata = createPageMetadata({
  title: "Products | ARS Green Steel",
  description: "Explore the ARS product range, including ARS Fe 550D, ARS CRS Fe 550D, and ARS Binders, then choose the right solution for your construction project.",
  path: "/products",
});

const trustItems = [
  { value: "550D", label: "Earth-quake Resistant", description: "High-strength ductile Fe-550D TMT for modern structures." },
  { value: "CRS", label: "Corrosion Resistant", description: "Durability-led grade for High salinity exposed conditions." },
  { value: "8–32", label: "Bar sizes (mm)", description: "Common rod-size range for every construction need." },
  { value: "IS 1786", label: "Standard", description: "Both grades are manufactured to the IS 1786:2008 benchmark." },
];

const products = productCatalog.map((product) => ({
  ...product,
  icon: product.name === "ARS Fe 550D" ? ShieldCheck : product.name === "ARS CRS Fe 550D" ? Waves : Layers,
  points: product.homePoints,
}));

const comparisonRows = [
  ["Best For", "General reinforced concrete construction", "Reinforced concrete construction in high-salinity and humid environments"],
  ["Strength Grade", "Fe550D", "Fe550D CRS"],
  ["Corrosion Resistance", "Standard protection", "2x long life and Enhanced corrosion resistance with CRS technology"],
  ["Applications", "Residential, Commercial, Industrial & Infrastructure Projects", "Residential, Commercial, Industrial, Infrastructure & High-Salinity Projects"],
  ["Structural Performance", "High Strength, Superior Ductility & Bendability", "High Strength, Superior Ductility & Long-Term Corrosion Protection"],
  ["Service Life", "Designed for long-lasting structural performance", "Designed for extended service life in aggressive environments"],
  ["Earthquake Performance", "Suitable for earthquake-resistant construction", "Suitable for earthquake-resistant construction with added corrosion resistance"],
  ["Concrete Bonding", "Excellent ribbed surface for strong concrete bonding", "Excellent ribbed surface for strong concrete bonding"],
  ["Standards", "IS 1786 Compliant • BIS Certified • SGS Tested • SERC Certified", "IS 1786 Compliant • BIS Certified • SGS Tested • SERC Certified"],
  ["Recommended When", "Corrosion resistance is not the primary requirement", "When corrosion resistance are critical"],
] as const;

const sizes = [
  ["8 mm", "Ideal for stirrups, rings and light reinforcement.", "/8-mm-steel-rod"],
  ["10 mm", "Suitable for slabs and small structural members.", "/10-mm-steel-rod"],
  ["12 mm", "Recommended for slabs, beams and residential construction.", "/12-mm-steel-rod"],
  ["16 mm", "Used in beams, columns and structural framing.", "/16-mm-steel-rod"],
  ["20 mm", "Suitable for foundations and heavy RCC members.", "/20-mm-steel-rod"],
  ["25 mm", "Preferred for industrial and infrastructure projects.", "/25-mm-steel-rod"],
  ["32 mm", "Designed for heavy structural and infrastructure applications.", "/32-mm-steel-rod"],
] as const;

const faqs = [
  ["What is the difference between ARS Fe 550D and ARS CRS Fe 550D?", "Both ARS Fe 550D and ARS CRS Fe 550D are Fe550D grade TMT Bars manufactured in accordance with IS 1786 standards. ARS Fe 550D is designed for general reinforced concrete construction, while ARS CRS Fe 550D offers enhanced corrosion resistance for structures exposed to high-salinity and humid environments."],
  ["Which TMT Bar is better for high-salinity areas?", "ARS CRS Fe 550D is the preferred choice for high-salinity and humid environments. Its advanced Corrosion Resistant Steel (CRS) technology helps improve durability and provides enhanced protection against corrosion over the life of the structure."],
  ["Can ARS CRS Fe 550D be used for normal residential construction?", "Yes. ARS CRS Fe 550D is suitable for residential construction and offers the same high strength and ductility as ARS Fe 550D, along with enhanced corrosion resistance. It is an ideal choice where long-term durability is a priority."],
  ["Do ARS Fe 550D and ARS CRS Fe 550D comply with IS 1786 standards?", "Yes. Both ARS Fe 550D and ARS CRS Fe 550D are manufactured in compliance with IS 1786 and are supported by BIS Certification, SGS Testing, SERC Certification, and stringent quality assurance processes."],
  ["How do I choose the right TMT Bar for my project?", "The right TMT Bar depends on your project environment and durability requirements. ARS Fe 550D is recommended for general reinforced concrete construction, while ARS CRS Fe 550D is better suited for projects exposed to high-salinity, humidity, or corrosive conditions."],
  ["Are ARS Fe 550D and ARS CRS Fe 550D available in the same sizes?", "Yes. Both ARS Fe 550D and ARS CRS Fe 550D are available in a wide range of standard TMT Bar sizes to meet the reinforcement requirements of residential, commercial, industrial, and infrastructure construction projects."],
] as const;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/products/ProductComparission_HeroBanner.jpg" alt="ARS TMT bars with campaign spokesperson" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />ARS Fe 550D vs ARS CRS Fe 550D</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Choose the Right TMT Bar <span className="italic text-brand-red">for Your Project</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">Compare ARS Fe 550D and ARS CRS Fe 550D, explore available sizes, download technical specifications, and find the right reinforcement steel for your construction project.</p>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => <div key={item.value} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center"><span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">{item.value}</span><span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">{item.label}</span><span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{item.description}</span></div>)}
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-24" id="comparison">
        <div className="ars-container"><SectionKicker variant="light">Product Comparison</SectionKicker>
          <div className="hidden overflow-hidden rounded-2xl border border-white bg-brand-blue md:block"><table className="w-full border-collapse text-left"><caption className="sr-only">Comparison of ARS Fe 550D and ARS CRS Fe 550D TMT Bars.</caption><thead className="bg-brand-blue-dark"><tr><th scope="col" className="w-[22%] border-b border-white/35 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white">Feature</th><th scope="col" className="border-b border-white/35 px-5 py-4 text-[12px] font-bold text-white">ARS Fe 550D</th><th scope="col" className="border-b border-white/35 px-5 py-4 text-[12px] font-bold text-white">ARS CRS Fe 550D</th></tr></thead><tbody>{comparisonRows.map(([feature, standard, crs], index) => <tr key={feature} className={index % 2 === 0 ? "bg-brand-blue" : "bg-brand-blue-dark/70"}><th scope="row" className="border-b border-white/25 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.04em] text-white">{feature}</th><td className="border-b border-white/25 px-5 py-4 text-[13px] leading-[1.5] text-white/85">{standard}</td><td className="border-b border-white/25 px-5 py-4 text-[13px] leading-[1.5] text-white/85">{crs}</td></tr>)}</tbody></table></div>
          <dl className="divide-y divide-white/25 rounded-2xl border border-white bg-brand-blue md:hidden">{comparisonRows.map(([feature, standard, crs]) => <div key={feature} className="p-5"><dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">{feature}</dt><dd className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65">ARS Fe 550D</p><p className="mt-1.5 text-[13px] leading-[1.55] text-white/85">{standard}</p></div><div><p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65">ARS CRS Fe 550D</p><p className="mt-1.5 text-[13px] leading-[1.55] text-white/85">{crs}</p></div></dd></div>)}</dl>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="sizes"><div className="ars-container"><div className="mb-14 grid items-end gap-10 lg:grid-cols-2"><div><SectionKicker variant="brand">Bar sizes</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Available TMT Bar Sizes</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Choose the bar diameter that matches your structural design. ARS TMT Bars are available in multiple sizes for residential, commercial, industrial, and infrastructure construction.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sizes.map(([size, description, href]) => <Link key={size} href={href} className="focus-ring group rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg"><div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue ring-1 ring-ink-900/[0.06] transition group-hover:bg-brand-blue group-hover:text-white"><Ruler aria-hidden="true" size={20} /></div><h3 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink-900">{size}</h3><p className="mt-3 text-[13px] leading-[1.6] text-grey-600">{description}</p><span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-brand-blue">View size details <ArrowRight aria-hidden="true" size={14} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></MotionSection>

      <MotionSection className="bg-white py-24" id="grades">
        <div className="ars-container"><div className="mb-14 grid items-end gap-12 lg:grid-cols-2"><div><SectionKicker variant="brand">Product Range</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Explore the ARS Product Range</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Explore ARS reinforcement products for everyday construction, demanding environments, and faster on-site assembly. Select a product to review its dedicated information and enquiry pathway.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => { const Icon = product.icon; return <Link key={product.name} href={product.route} className="focus-ring group overflow-hidden rounded-2xl border-[1.5px] border-surface-100 bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"><div className="relative h-56 overflow-hidden bg-surface-50 p-8"><Image src={product.image} alt={`${product.name} product`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-8 transition duration-500 group-hover:scale-105" /></div><div className="p-7"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue"><Icon aria-hidden="true" size={20} /></div><h3 className="font-display text-[22px] font-bold text-ink-900">{product.name}</h3><p className="mt-3 text-[14px] leading-[1.7] text-steel-700">{product.description}</p><ul className="mt-5 flex flex-col gap-2">{product.points.map((point) => <li key={point} className="flex items-start gap-2.5"><CheckCircle2 aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-brand-red" /><span className="text-[13px] font-medium text-steel-700">{point}</span></li>)}</ul></div></Link> })}</div></div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-24" id="faqs"><div className="ars-container max-w-4xl"><SectionKicker variant="brand">FAQs</SectionKicker><FaqList className="mt-10" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} /><div className="ars-container relative z-10"><div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><SectionKicker variant="light">READY TO BUILD</SectionKicker><h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Choose the Right TMT Bar with Confidence</h2><p className="text-[14px] leading-[1.7] text-white/70">Whether you&apos;re building a home, a commercial project, or infrastructure, selecting the right reinforcement steel makes all the difference. Compare ARS Fe 550D and ARS CRS Fe 550D, speak with our experts, and choose the TMT Bar that best matches your project&apos;s structural and environmental requirements.</p></div><div className="flex flex-wrap gap-3"><Link href="/request-quote" className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90">Talk to Sales <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/our-network" className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]">Find a Dealer <ArrowRight aria-hidden="true" size={15} /></Link></div></div></div></MotionSection>

    </main>
  );
}
