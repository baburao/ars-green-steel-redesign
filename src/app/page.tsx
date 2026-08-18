import {
  ArrowRight,
  Atom,
  BadgeCheck,
  BookOpen,
  Calculator,
  ClipboardList,
  IndianRupee,
  Layers,
  Leaf,
  MapPin,
  RefreshCw,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/site-metadata";
import { productCatalog } from "@/lib/product-catalog";
import { AudienceJourneySection } from "@/components/audience-journey-section";
import { ContactCta } from "@/components/contact-cta";
import { HomeHero } from "@/components/home-hero";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

const buyingActions = [
  {
    title: "Check Price",
    detail: "View the latest ARS TMT steel prices by grade and location.",
    href: "/tmt-steel-price-today",
    icon: IndianRupee,
  },
  {
    title: "Calculate Steel",
    detail: "Estimate your TMT steel requirement based on project type, built-up area, floors, and bar size.",
    href: "/tmt-steel-calculator",
    icon: Calculator,
  },
  {
    title: "Find Dealer",
    detail: "Locate your nearest authorised ARS Green Steel dealer or distributor.",
    href: "/our-network",
    icon: MapPin,
  },
  {
    title: "Request Quote",
    detail: "Get a customised quotation for residential, commercial, or infrastructure projects.",
    href: "/request-quote",
    icon: ClipboardList,
  },
];

export const metadata = createPageMetadata({
  title: "ARS Group | TMT Steel for Construction",
  description:
    "Explore ARS TMT steel products, quality and manufacturing information, dealer support, price guidance, and project planning tools.",
  path: "/",
});

const products = [productCatalog[0], productCatalog[1], productCatalog[2]];

const certificateCards = [
  {
    label: "5-Star Green Steel",
    detail: "Certified by the Ministry of Steel, Government of India (NISST)",
    image: "/ars-assets/awards-certificates-img3.png",
  },
  {
    label: "EPD Verified",
    detail: "Internationally verified environmental impact declaration for sustainable construction.",
    image: "/ars-assets/awards-certificates-img2.png",
  },
  {
    label: "SGBP Leader",
    detail: "Internationally certified for sustainable building materials.",
  },
  {
    label: "GRIHA Certified",
    detail: "Recognised for sustainable construction under the GRIHA Green Building Rating System.",
  },
  {
    label: "Government Approved",
    detail: "Officially approved by Tamil Nadu PWD for quality, strength, and compliance.",
  },
  {
    label: "BIS Certified",
    detail: "Certified under IS 1786:2008, ensuring compliance with India's quality standards for TMT steel bars.",
  },
  {
    label: "IGBC Founding Member",
    detail: "Committed to advancing sustainable and green building practices in India.",
  },
  {
    label: "Green Product Excellence Award",
    detail: "Awarded for excellence in green product innovation at ABP Infrastructure Conclave 2024.",
  },
  {
    label: "Green Initiative Leadership",
    detail: "Recipient of the Ispat Udyog Ratan Award for sustainable manufacturing excellence.",
  },
  {
    label: "NHAI Project Approved",
    detail: "Recognised for use in major highway infrastructure projects through independent engineering approval.",
  },
];

const partnerCards = [
  {
    name: "Akshaya",
    logo: "/ars-assets/partners/akshaya.png.webp",
  },
  {
    name: "Baashyaam",
    logo: "/ars-assets/partners/baashyaam.png.webp",
  },
  {
    name: "Foxconn",
    logo: "/ars-assets/partners/foxconn.png.webp",
  },
  {
    name: "VGN",
    logo: "/ars-assets/partners/vgn.png.webp",
  },
  {
    name: "RCCL",
    logo: "/ars-assets/partners/rccl.png.webp",
  },
  {
    name: "Noah",
    logo: "/ars-assets/partners/noah.png.webp",
  },
  {
    name: "Rohaan",
    logo: "/ars-assets/partners/rohaan.png.webp",
  },
  {
    name: "Sathyamoorthy",
    logo: "/ars-assets/partners/sathyamoorthy.png.webp",
  },
  {
    name: "Casa",
    logo: "/ars-assets/partners/CASA-2-1.png.webp",
  },
];

const greenSteelFeatures = [
  {
    title: "5-Star Green Steel Rating",
    text: "Awarded the highest 5-Star Green Steel Rating under the Government of India's Green Steel Taxonomy, recognising industry-leading low carbon emissions.",
    icon: Atom,
  },
  {
    title: "4× Lower Carbon Emissions",
    text: "Produces 592 kg CO₂e per tonne—4× lower than the Indian average and 3× lower than the global average, independently verified through an Environmental Product Declaration (EPD).",
    icon: RefreshCw,
  },
  {
    title: "73.5% Greenness Score",
    text: "Achieved an industry-leading 73.5% Greenness Score, independently assessed under the Government of India's Green Steel Taxonomy.",
    icon: Zap,
  },
];

const blogs = [
  {
    title: "What is CRS Steel?",
    href: "/blog/corrosion-resistance-steel.html",
    category: "Product knowledge",
    detail: "Understand how corrosion-resistant steel differs from standard TMT and when it is the right choice for your project.",
    readTime: "4 min read",
    icon: Layers,
    image: "/ars-assets/blog-banners/everything-you-need-to-know-about-corrosion-resistance-steel/corrosion-resistance-steel.jpeg",
  },
  {
    title: "How Green Steel is Produced",
    href: "/ars-green-steel",
    category: "Sustainability",
    detail: "A look inside the electric arc furnace process that makes ARS steel cleaner, greener, and future-ready.",
    readTime: "5 min read",
    icon: Leaf,
    image: "/ars-assets/original-green-steel/what-is-green-steel.png",
  },
  {
    title: "TMT Bars vs HYSD Bars",
    href: "/blog/everything-about-hysd-bars.html",
    category: "Construction guide",
    detail: "Side-by-side comparison of the two most common steel bar types and what they mean for strength, cost, and safety.",
    readTime: "6 min read",
    icon: BookOpen,
    image: "/ars-assets/blog-banners/all-you-need-to-know-about-hysd-bars/quality-tmt-bar-3.webp",
  },
  {
    title: "House Construction Cost in India",
    href: "/blog/average-house-construction-cost-in-india-per-square-feet.html",
    category: "Planning",
    detail: "A practical guide to estimating steel requirements and total construction cost before breaking ground.",
    readTime: "7 min read",
    icon: Calculator,
    image: "/ars-assets/blog-banners/average-house-construction-cost-in-india-per-square-feet/WhatsApp-Image-2024-12-02-at-12.34.42-PM.jpeg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <HomeHero />

      <ManufacturingStorySection />

      <AudienceJourneySection />

      <GreenSteelSection />

      <MotionSection className="bg-surface-50 py-16 lg:min-h-[90vh] lg:py-18" id="products">
        <div className="ars-container flex min-h-[calc(90vh-96px)] flex-col justify-center">
          <div className="mb-8 max-w-4xl lg:mb-10">
            <SectionKicker>Product range</SectionKicker>
            <h2 className="section-title">
              Choose the Right TMT Steel for Your Project
            </h2>
            <p className="section-copy">
              From corrosion-resistant TMT bars for high-salinity, high-TDS environments to high-strength TMT bars
              for earthquake-resistant construction, ARS offers the right solution for every project.
            </p>
          </div>

          <div className="grid gap-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="group grid overflow-hidden rounded-[18px] border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/45 hover:shadow-[0_22px_72px_rgba(13,43,110,0.12)] lg:grid-cols-[260px_minmax(0,1fr)_220px]"
              >
                <div className="flex min-h-[180px] items-center justify-center bg-surface-100 p-6 lg:min-h-[216px]">
                  <Image
                    src={product.image}
                    alt={`${product.name} product`}
                    width={360}
                    height={260}
                    className="max-h-[150px] w-full object-contain transition duration-500 group-hover:scale-105 lg:max-h-[170px]"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-center p-6 lg:p-8">
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">
                    {product.homeEyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,3vw,3.15rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700 lg:text-lg lg:leading-8">
                    {product.description}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {product.homePoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-sm font-semibold leading-5 text-steel-700">
                        <BadgeCheck size={16} className="mt-0.5 shrink-0 text-green-steel" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 border-t border-ink-900/10 p-6 lg:border-l lg:border-t-0 lg:p-8">
                  <Link
                    className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                    href={product.route}
                  >
                    View product <ArrowRight size={17} />
                  </Link>
                  {product.slug === "ars-crs-550d" || product.slug === "ars-550d" || product.slug === "ars-binders" ? (
                    <a
                      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-brand-blue/20 bg-surface-50 px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                      href={product.slug === "ars-crs-550d" ? "/ars-assets/Downloads/CRS-brochure-English.pdf" : product.slug === "ars-550d" ? "/ars-assets/Downloads/ARS-550D.pdf" : "/ars-assets/Downloads/Binders.pdf"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download brochure <ArrowRight size={17} />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-[6px] border border-brand-blue/20 bg-surface-50 px-5 text-sm font-bold text-steel-500"
                      title="The approved product leaflet is not yet available for download."
                    >
                      Product leaflet pending
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[16px] border border-brand-blue/10 bg-white/78 p-5 shadow-[var(--shadow-soft)] lg:grid-cols-4">
            {["High Strength & Ductility", "Corrosion Resistant", "Earthquake Resistant", "BIS Certified Green Steel"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-steel-700">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-brand-blue">
                  <BadgeCheck size={17} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <BuyingAssistantSection />

      <MotionSection className="bg-surface-50 py-24" id="trusted-by">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionIntro
              eyebrow="Industry Recognition"
              title="Certified. Tested. Trusted."
              body="Every ARS TMT bar is backed by nationally recognised certifications, rigorous testing, and partnerships trusted across the construction industry."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {certificateCards.slice(0, 2).map((item) => (
                <article
                  key={item.label}
                  className="group grid min-h-[290px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[170px_1fr]"
                >
                  <div className="overflow-hidden bg-white p-5">
                    <Image
                      src={item.image!}
                      alt={`${item.label} ARS certification`}
                      width={368}
                      height={523}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white">
                    <h3 className="font-display text-xl font-bold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificateCards.slice(2).map((item) => (
              <article
                key={item.label}
                className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10">
                  <BadgeCheck size={21} />
                </span>
                <h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-steel-700">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-brand-blue/10 pt-8">
            <div className="mb-5 flex items-center justify-between gap-6">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Clients
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
              {partnerCards.map((partner) => (
                <article
                  key={partner.name}
                  className="flex min-h-[76px] items-center justify-center rounded-[12px] border border-ink-900/8 bg-white p-2 text-center"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} partner logo`}
                    width={190}
                    height={76}
                    className="max-h-16 w-full object-contain"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <RahulDravidSection />

      <MotionSection className="bg-white py-24" id="blogs">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionKicker>Knowledge center</SectionKicker>
              <h2 className="section-title max-w-3xl">
                Expert Guides for Smarter Steel Decisions
              </h2>
              <p className="section-copy max-w-2xl">
                Explore expert insights on TMT steel, construction best practices, pricing, corrosion
                resistance, green steel, and project planning to build with confidence.
              </p>
            </div>

            <Link
              href="/blog"
              className="focus-ring inline-flex items-center gap-2 justify-self-start text-sm font-bold text-brand-blue transition hover:text-brand-red lg:justify-self-end"
            >
              View all articles <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.38fr]">
            <FeaturedBlogCard blog={blogs[0]} />

            <div className="grid gap-5">
              {blogs.slice(1).map((blog) => (
                <BlogListCard key={blog.title} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactCta />
    </main>
  );
}

function FeaturedBlogCard({ blog }: { blog: (typeof blogs)[number] }) {
  const Icon = blog.icon;

  return (
    <Link
      href={blog.href}
      className="focus-ring group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[18px] bg-bg-dark p-7 text-white shadow-[0_24px_70px_rgba(13,43,110,0.18)] transition duration-300 hover:-translate-y-1 lg:p-8"
    >
      <Image
        src={blog.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/76 to-bg-dark/10" />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 font-technical text-xs font-black uppercase tracking-[0.16em] text-white/74 ring-1 ring-white/14">
          <Icon size={16} />
          {blog.category}
        </span>
        <h3 className="mt-10 max-w-xl font-display text-[clamp(2rem,3vw,3.2rem)] font-bold leading-[1.05] tracking-normal text-white">
          {blog.title}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/70 lg:text-lg">
          {blog.detail}
        </p>
      </div>

      <div className="relative mt-12 flex items-center justify-between border-t border-white/14 pt-7">
        <span className="text-sm font-bold text-white/50">{blog.readTime}</span>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
          Read article <ArrowRight size={17} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function BlogListCard({ blog }: { blog: (typeof blogs)[number] }) {
  return (
    <Link
      href={blog.href}
      className="focus-ring group grid overflow-hidden rounded-[16px] border border-brand-blue/10 bg-surface-50 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/28 hover:bg-white sm:grid-cols-[180px_minmax(0,1fr)_48px]"
    >
      <span className="relative min-h-[170px] overflow-hidden bg-surface-100 sm:min-h-full">
        <Image
          src={blog.image}
          alt=""
          fill
          sizes="(min-width: 640px) 180px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          aria-hidden="true"
        />
      </span>

      <span className="min-w-0 p-6">
        <span className="font-technical text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
          {blog.category}
          <span className="mx-2 text-steel-300">-</span>
          <span className="text-steel-400">{blog.readTime}</span>
        </span>
        <span className="mt-3 block font-display text-xl font-bold tracking-normal text-ink-900">
          {blog.title}
        </span>
        <span className="mt-3 block text-sm leading-6 text-steel-600 lg:text-base lg:leading-7">
          {blog.detail}
        </span>
      </span>

      <ArrowRight
        size={20}
        className="mb-6 mr-6 self-end justify-self-end text-brand-blue transition duration-300 group-hover:translate-x-1 group-hover:text-brand-red sm:mb-0 sm:mr-5 sm:self-center"
      />
    </Link>
  );
}

function RahulDravidSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-bg-dark text-white" id="brand-ambassador">
      <div className="ars-container py-20 lg:py-24">
        <div className="grid overflow-hidden rounded-[22px] border border-white/12 bg-[#07142f] shadow-[0_30px_90px_rgba(6,13,30,0.28)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <SectionKicker variant="light">Brand ambassador</SectionKicker>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,4.5vw,4.6rem)] font-extrabold leading-[0.94] text-white">
              A Partnership Built on Trust.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72 lg:text-lg">
              Rahul Dravid represents the values that define ARS—discipline, integrity, consistency,
              and trust. His association reflects our commitment to delivering TMT bars engineered to
              perform with confidence, project after project.
            </p>
            <Link
              className="focus-ring mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              href="/product-crs-550d"
            >
              Explore ARS CRS Fe 550D <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative min-h-[390px] overflow-hidden bg-[#f5a916] lg:min-h-[560px]">
            <Image
              src="/ars-assets/home/rahul_.jpg"
              alt="Rahul Dravid representing ARS CRS Fe 550D TMT steel"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07142f]/55 via-transparent to-transparent lg:from-[#07142f]/24" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function GreenSteelSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-bg-dark py-24 text-white" id="ars-green-steel">
      <div className="absolute inset-0">
        <Image
          src="/ars-assets/home/ARS-green-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.72),rgba(6,13,30,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,101,52,0.32),transparent_28%)]" />
      </div>

      <div className="ars-container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionKicker variant="green" align="center" showEndLine>
            The Green Steel Advantage
          </SectionKicker>
          <h2 className="section-title section-title-light mx-auto">
            ARS Green Steel
          </h2>
          <p className="section-copy section-copy-light mx-auto mt-6 max-w-3xl">
            As India&apos;s No.1 Certified Green Steel Manufacturer, ARS is setting new benchmarks in sustainable steel
            manufacturing through lower-emission production, recycled materials, and energy-efficient manufacturing practices.
          </p>
          <Link
            className="focus-ring mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-[6px] border border-emerald-300/30 px-5 text-sm font-bold text-emerald-200 transition hover:border-white/45 hover:bg-white hover:text-[#07351f]"
            href="/ars-green-steel"
          >
            Learn More About Green Steel <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {greenSteelFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[16px] border border-white/12 bg-white/[0.07] p-7 shadow-[var(--shadow-card)] backdrop-blur-[2px]"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-[8px] bg-white/12 text-emerald-200 ring-1 ring-white/12">
                  <Icon size={24} />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-normal text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 grid gap-3 border-y border-white/12 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {["GreenPro Certified", "GRIHA", "EPD Documented", "SGS Tested"].map((item) => (
            <div key={item} className="flex min-h-16 items-center gap-3 rounded-[6px] border border-emerald-200/20 bg-white/[0.06] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-emerald-100 transition hover:border-emerald-200/45 hover:bg-white/[0.1]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                <BadgeCheck size={15} aria-hidden="true" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ManufacturingStorySection() {
  const manufacturingProof = [
    { value: "Since 1992", label: "Manufacturing legacy" },
    { value: "Billet to TMT", label: "Integrated production" },
    { value: "Tamil Nadu", label: "Manufacturing base" },
  ];

  return (
    <MotionSection className="overflow-hidden bg-white py-20" id="manufacturing-story">
      <div className="ars-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-[20px] bg-white sm:min-h-[540px]">
            <Image
              src="/ars-assets/home/ars_home.jpg"
              alt="Aerial view of the ARS steel manufacturing facility in Gummidipoondi"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl">
            <SectionKicker>Manufacturing heritage</SectionKicker>
            <h2 className="section-title max-w-xl">
              Engineering Trust Since 1992
            </h2>
            <p className="section-copy max-w-xl">
              Since 1992, ARS has grown into an integrated steel manufacturer with its manufacturing
              facility in Gummidipoondi, Tamil Nadu. From billet production and TMT bar manufacturing
              to rigorous quality testing and dispatch, every stage is managed under one roof to ensure
              consistent quality, complete traceability, and dependable supply for construction projects
              across South India.
            </p>

            <dl className="mt-9 grid gap-px overflow-hidden rounded-[16px] border border-brand-blue/10 bg-brand-blue/10 sm:grid-cols-3">
              {manufacturingProof.map((item) => (
                <div key={item.value} className="bg-surface-50 p-5">
                  <dt className="text-sm leading-6 text-steel-600">{item.label}</dt>
                  <dd className="mt-2 font-display text-xl font-bold leading-tight text-ink-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                href="/manufacturing"
              >
                Our Manufacturing <ArrowRight size={17} />
              </Link>
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-brand-blue/18 bg-white px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue/40 hover:bg-surface-50"
                href="/about-us"
              >
                Our Story <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function BuyingAssistantSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="buying-assistant">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.1),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
      <div className="ars-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.28fr] lg:gap-16">
          <div className="max-w-xl">
            <SectionKicker>Plan Your Project</SectionKicker>
            <h2 className="section-title section-title-light">
              Plan, Calculate & Buy the Right TMT Steel
            </h2>
            <p className="section-copy section-copy-light">
              Check TMT steel prices, calculate steel requirements, locate an authorised dealer, or request a customised quotation—all in one place.
            </p>
          </div>

          <div className="grid gap-4">
            {buyingActions.map((action, index) => {
              const Icon = action.icon;
              const count = String(index + 1).padStart(2, "0");

              return (
                <Link
                  key={action.title}
                  className="focus-ring group grid items-center gap-5 rounded-[18px] border border-white/18 bg-white/[0.11] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.16] sm:grid-cols-[44px_72px_minmax(0,1fr)_24px] lg:p-6"
                  href={action.href}
                >
                  <span className="font-technical text-sm font-black tracking-[0.14em] text-white/42">
                    {count}
                  </span>
                  <span className="inline-flex size-14 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12 transition group-hover:bg-white/20">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-bold tracking-normal text-white lg:text-2xl">
                      {action.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-white/66 lg:text-base">
                      {action.detail}
                    </span>
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-white/42 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-12 max-w-4xl">
      <div>
        <SectionKicker className="mb-6">{eyebrow}</SectionKicker>
        <h2 className="max-w-4xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">{body}</p>
    </div>
  );
}
