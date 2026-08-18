import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/site-metadata";
import { SiteHeader } from "@/components/site-header";

const videos = [
  "https://www.youtube.com/embed/0TmcBoFbXu8",
  "https://www.youtube.com/embed/3vljw7mpeKU",
] as const;

export const metadata = createPageMetadata({
  title: "Video Gallery | ARS Green Steel",
  description: "Watch ARS product films, campaign videos, testing clips, and media references.",
  path: "/video",
  image: "/ars-assets/ARSHOME4.jpg",
});

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image
          src="/ars-assets/ARSHOME4.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.82)_46%,rgba(6,13,30,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.08)_0%,rgba(6,13,30,0.74)_100%)]" />

        <div className="ars-container relative z-10 flex w-full items-end pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />Video Gallery</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.025em] text-white">
              Video Gallery
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/74 md:text-lg md:leading-8">
              The original ARS video gallery is restored as a media page for product films, campaign videos, testing clips, and YouTube references.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {videos.map((video, index) => (
              <article key={video} className="group overflow-hidden border border-ink-900/10 bg-ink-950 shadow-[0_20px_56px_rgba(13,43,110,0.12)]">
                <div className="h-0.5 bg-brand-red transition-colors duration-300 group-hover:bg-brand-blue" />
                <div className="relative aspect-video bg-ink-950">
                  <iframe
                    className="absolute inset-0 size-full"
                    src={video}
                    title={`ARS Video Gallery ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-16 md:py-20">
        <div className="ars-container flex flex-col items-start justify-between gap-7 border-y border-ink-900/10 py-10 md:flex-row md:items-center md:py-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-brand-red" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink-900">Video Gallery</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/request-quote" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">
              Request quote <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue">
              Contact ARS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
