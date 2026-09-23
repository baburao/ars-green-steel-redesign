import Image from "next/image";
import { PageShell } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { clientLogos } from "@/data/client-logos";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Our Clients | ARS Green Steel",
  description: "Explore the organizations that work with ARS Green Steel across construction, infrastructure, and industry.",
  path: "/clients",
  image: "/ars-assets/cwv/heroes/about-desktop.webp",
});

export default function ClientsPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Our clients",
        title: "Our Clients",
        body: "Strong projects depend on strong partnerships. Meet some of the organizations that work with ARS Green Steel.",
        primaryLabel: "Explore our products",
        primaryHref: "/products",
        secondaryLabel: "Talk to ARS",
        secondaryHref: "/contact",
        backgroundImageSrc: "/ars-assets/cwv/heroes/about-desktop.webp",
        backgroundImageMobileSrc: "/ars-assets/cwv/heroes/about-mobile.webp",
        backgroundImageAlt: "ARS Green Steel manufacturing facility",
      }}
    >
      <section className="bg-white py-20 md:py-28" aria-labelledby="clients-heading">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker>Client relationships</SectionKicker>
            <h2 id="clients-heading" className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink-900">
              Building confidence together.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700 md:text-lg">
              ARS supports clients across residential development, infrastructure, and industry with steel made for dependable performance.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="ARS client logos">
            {clientLogos.map((client) => (
              <li key={client.name} className="flex min-h-52 flex-col items-center justify-center rounded-[18px] border border-brand-blue/10 bg-white px-8 py-7 text-center shadow-[0_18px_45px_rgba(13,43,110,0.06)]">
                <div className="flex h-32 w-full items-center justify-center">
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="max-h-28 max-w-full object-contain"
                  />
                </div>
                <span className="mt-3 text-sm font-semibold text-steel-700">{client.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
