import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { BlogArchive } from "@/components/blog-archive";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { getBlogArchiveArticles, type BlogArchiveArticle } from "@/lib/blog-content";
import { defaultSocialImage, getSeoMetadata, isProductionSite, toProductionUrl } from "@/lib/site-metadata";

const seo = getSeoMetadata("/blog.html");

export const metadata: Metadata = {
  title: seo?.title ?? "Steel and Construction Knowledge Center | ARS Green Steel",
  description: seo?.description ?? "Explore ARS guides on TMT steel, construction planning, product quality, green steel, manufacturing, and industry developments.",
  robots: { index: isProductionSite, follow: isProductionSite },
  alternates: {
    canonical: toProductionUrl("/blog.html"),
  },
  openGraph: {
    title: seo?.title ?? "Steel and Construction Knowledge Center | ARS Green Steel",
    description: seo?.description ?? "Practical guidance for better steel selection, safer construction, and more confident project decisions.",
    url: toProductionUrl("/blog.html"),
    type: "website",
    images: [{ url: toProductionUrl(defaultSocialImage) }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo?.title ?? "Steel and Construction Knowledge Center | ARS Green Steel",
    description: seo?.description ?? "Practical guidance for better steel selection, safer construction, and more confident project decisions.",
    images: [toProductionUrl(defaultSocialImage)],
  },
};

const featuredSlugs = [
  "what-is-crs-steel-grades-standards-quality.html",
  "house-construction-process-in-india.html",
  "green-steel-manufacturing-using-clean-energy.html",
];

export default function BlogPage() {
  const articles = getBlogArchiveArticles();
  const featuredArticles = featuredSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is BlogArchiveArticle => Boolean(article));

  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-bg-dark text-white">
        <Image
          src="/ars-assets/ARS-green-bg.png"
          alt="Steel production and sustainability knowledge from ARS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.94)_0%,rgba(6,13,30,0.78)_46%,rgba(6,13,30,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,13,30,0.68),transparent_55%)]" />

        <div className="ars-container relative z-10 grid gap-10 pb-14 pt-28 lg:grid-cols-[minmax(0,0.82fr)_minmax(300px,0.42fr)] lg:items-end lg:pb-16">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />ARS Knowledge Center</div>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-normal text-white">
              Knowledge for stronger building decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Practical guidance on steel selection, structural planning, quality, sustainability,
              and the decisions that shape safer projects.
            </p>
          </div>

          <div className="border-l border-white/20 pl-6 lg:justify-self-end lg:pl-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <strong className="block font-display text-4xl font-bold text-white">
                  {articles.length}
                </strong>
                <span className="mt-2 block text-sm font-medium text-white/58">Practical guides</span>
              </div>
              <div>
                <strong className="block font-display text-4xl font-bold text-white">5</strong>
                <span className="mt-2 block text-sm font-medium text-white/58">Knowledge topics</span>
              </div>
            </div>
            <Link
              href="#article-library"
              className="focus-ring mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c90f16]"
            >
              Explore the library <ArrowDown size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.62fr)]">
            <div>
              <SectionKicker>Latest knowledge</SectionKicker>
              <h2 className="section-title">Start with the decisions that matter now.</h2>
            </div>
            <p className="section-copy section-copy-flush lg:justify-self-end">
              New and high-value guides covering corrosion resistance, house construction, and
              lower-carbon steel production.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {featuredArticles[0] ? <PrimaryFeaturedArticle article={featuredArticles[0]} /> : null}
            <div className="grid gap-5">
              {featuredArticles.slice(1).map((article) => (
                <SecondaryFeaturedArticle key={article.href} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogArchive articles={articles} />

      <ContactCta
        eyebrow="Plan with confidence"
        headline="Need help applying what you read?"
        body="Connect with ARS for product guidance, steel quantity planning, current pricing, or a nearby dealer."
        primaryLabel="Talk to the ARS team"
        primaryHref="/request-quote"
        secondaryLabel="Find a dealer"
        secondaryHref="/our-network"
      />
    </main>
  );
}

function PrimaryFeaturedArticle({ article }: { article: BlogArchiveArticle }) {
  return (
    <article className="group relative min-h-[480px] overflow-hidden rounded-[8px] bg-bg-dark shadow-[0_24px_70px_rgba(13,43,110,0.16)]">
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.55)_56%,rgba(6,13,30,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <span className="inline-flex rounded-[6px] bg-brand-red px-3 py-1.5 font-technical text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white">
          {article.category}
        </span>
        <h3 className="mt-5 max-w-2xl font-display text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.06] text-white">
          <Link href={article.href} className="focus-ring">
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
          {article.excerpt}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/16 pt-5">
          <ArticleMeta article={article} light />
          <Link
            href={article.href}
            className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition hover:text-brand-red"
          >
            Read article <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function SecondaryFeaturedArticle({ article }: { article: BlogArchiveArticle }) {
  return (
    <article className="group grid min-h-[230px] overflow-hidden rounded-[8px] border border-brand-blue/10 bg-surface-50 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/28 md:grid-cols-[210px_minmax(0,1fr)]">
      <Link
        href={article.href}
        className="focus-ring relative min-h-[190px] overflow-hidden bg-surface-100 md:min-h-full"
        aria-label={`Read ${article.title}`}
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 210px"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </Link>
      <div className="flex flex-col p-5 lg:p-6">
        <span className="font-technical text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-brand-red">
          {article.category}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold leading-[1.2] text-ink-900">
          <Link
            href={article.href}
            className="focus-ring transition group-hover:text-brand-blue"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-steel-700">{article.excerpt}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <ArticleMeta article={article} />
          <ArrowRight
            size={18}
            className="shrink-0 text-brand-blue transition group-hover:translate-x-1 group-hover:text-brand-red"
          />
        </div>
      </div>
    </article>
  );
}

function ArticleMeta({
  article,
  light = false,
}: {
  article: BlogArchiveArticle;
  light?: boolean;
}) {
  const textColor = light ? "text-white/58" : "text-grey-600";

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium ${textColor}`}>
      {article.dateLabel ? (
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} aria-hidden="true" />
          {article.dateLabel}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-1.5">
        <BookOpen size={14} aria-hidden="true" />
        {article.readTime}
      </span>
    </div>
  );
}
