import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { getBlogArchiveArticle, getBlogExcerpt, cleanBlogTitle } from "@/lib/blog-content";
import { getBlogMigrationEntry } from "@/lib/blog-migration";
import { getLegacyBlogPages, getLegacyPage } from "@/lib/legacy-content";
import { getSeoMetadata, isProductionSite, productionDomain, toProductionUrl } from "@/lib/site-metadata";

function toProductionAssetUrl(value: string) {
  return toProductionUrl(value);
}

export function generateStaticParams() {
  return getLegacyBlogPages().map((page) => ({ slug: page.slug.replace(/^blog\//, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(`blog/${slug}`);

  if (!page) {
    return {};
  }

  const article = getBlogArchiveArticle(slug);
  const registryEntry = getBlogMigrationEntry(slug);
  const title = registryEntry?.yoastSeoTitle || article?.title || cleanBlogTitle(page);
  const description = registryEntry?.yoastMetaDescription || article?.excerpt || getBlogExcerpt(page, title);
  const seo = getSeoMetadata(`/blog/${slug}`);
  const resolvedTitle = seo?.title ?? title;
  const resolvedDescription = seo?.description ?? description;
  const image = registryEntry?.featuredImage?.url || article?.image;
  const imageAlt = registryEntry?.featuredImage?.alt || article?.imageAlt || title;
  const metadataImage = image ? toProductionAssetUrl(image) : undefined;

  const finalUrl = `${productionDomain}/blog/${slug}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    robots: {
      index: isProductionSite,
      follow: isProductionSite,
    },
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: finalUrl,
      type: "article",
      images: metadataImage ? [{ url: metadataImage, alt: imageAlt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: metadataImage ? [metadataImage] : undefined,
    },
  };
}

export default async function LegacyBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(`blog/${slug}`);

  if (!page) {
    notFound();
  }

  const article = getBlogArchiveArticle(slug);

  if (!article) {
    notFound();
  }

  return <BlogArticleTemplate page={page} article={article} />;
}
