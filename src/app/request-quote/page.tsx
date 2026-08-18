import { createPageMetadata } from "@/lib/site-metadata";
import { Calculator, MapPin, Ruler, ShieldCheck } from "lucide-react";
import { ContentBand, PageHero, ProofMetrics } from "@/components/page-sections";
import { LeadForm } from "@/components/lead-form";
import { MotionSection } from "@/components/motion-section";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Request Quote | ARS Green Steel",
  description: "Request ARS Green Steel pricing and sales support for TMT bar requirements.",
  path: "/request-quote",
});

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Quote request"
        title="Tell us what"
        accent="you need."
        body="Share product, rod size, quantity, site location, and project context so the ARS team can respond with fewer follow-up calls."
        primaryLabel="Call sales"
        primaryHref="tel:+919710411111"
        secondaryLabel="Calculate first"
        secondaryHref="/tmt-steel-calculator"
      />

      <MotionSection className="bg-white py-24">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">Before you submit</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.04] tracking-normal text-ink-900">Useful quote details</h2>
            <p className="mt-4 text-base leading-7 text-steel-700">
              Share these details so the sales team can respond with clearer pricing and availability.
            </p>
            <div className="mt-8 grid gap-4">
              {["Product grade: ARS Fe 550D or ARS CRS Fe 550D", "Rod size: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, or 32mm", "Approximate quantity or built-up area", "Delivery location and project stage"].map((item) => (
                <div key={item} className="flex gap-3 text-base leading-7 text-steel-700">
                  <ShieldCheck size={19} className="mt-1 shrink-0 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            title="Request ARS steel quote"
            body="Share your project and product details so the ARS sales team can respond with clearer pricing and availability."
            submission="quote"
          />
        </div>
      </MotionSection>

      <ProofMetrics
        metrics={[
          { kicker: "grade", value: "550D", label: "Choose core TMT or corrosion-resistant CRS variant." },
          { kicker: "sizes", value: "8-32", label: "Quote by rod size, bundle, and requirement context." },
          { kicker: "dealer", value: "Local", label: "Dealer path can support availability and supply questions." },
          { kicker: "proof", value: "SGS", label: "Certification and quality context remain close to enquiry." },
        ]}
      />

      <ContentBand
        eyebrow="Helpful before quote"
        title="Prepare a more accurate enquiry."
        cards={[
          { title: "Calculate steel", text: "Estimate quantity before submitting your quote request.", href: "/tmt-steel-calculator", icon: Calculator },
          { title: "Check rod sizes", text: "Review common rod-size use cases and weight context.", href: "/products#sizes", icon: Ruler },
          { title: "Find dealer", text: "For urgent local supply, move to dealer discovery.", href: "/our-network", icon: MapPin },
        ]}
      />

      <section className="bg-white py-14">
        <div className="ars-container">
        </div>
      </section>
    </main>
  );
}
