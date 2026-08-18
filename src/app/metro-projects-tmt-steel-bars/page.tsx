import type { Metadata } from "next";
import { CircleGauge, ShieldCheck, Waves } from "lucide-react";
import { ProjectTypePage } from "@/components/project-type-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "TMT Bars for Metro Projects | ARS Green Steel",
  description: "Explore ARS TMT steel solutions for metro rail and urban infrastructure projects.",
  path: "/metro-projects-tmt-steel-bars",
});

export default function MetroProjectsPage() {
  return (
    <ProjectTypePage
      eyebrow="Metro infrastructure"
      title="TMT Bars for Metro Projects"
      description="Reliable reinforcement steel for metro stations, viaducts, depots, and the urban infrastructure connecting India's growing cities."
      primaryCta={{ label: "Explore Products", href: "/product-550d" }}
      secondaryCta={{ label: "Talk to ARS", href: "/contact" }}
      rationale={{ title: "Built for complex urban infrastructure.", body: "Metro projects demand dependable reinforcement, consistent supply, and quality systems that support demanding structural and project requirements across stations, elevated corridors, foundations, and supporting infrastructure." }}
      applicationsSection={{ eyebrow: "Metro applications", title: "Steel solutions across the metro build." }}
      applications={[
        { title: "Viaducts", body: "Reinforcement for elevated metro corridors and supporting structural members." },
        { title: "Stations", body: "TMT steel for station buildings, platforms, concourses, and associated structures." },
        { title: "Depots", body: "Reliable reinforcement for maintenance facilities, workshops, and operational infrastructure." },
      ]}
      considerationsSection={{ eyebrow: "Project considerations", title: "Plan for strength, durability, and continuity." }}
      considerations={[
        { title: "Structural Strength", body: "Select reinforcement that supports demanding structural design and load requirements.", icon: ShieldCheck },
        { title: "Long-Term Durability", body: "Review exposure conditions and corrosion requirements for long-life public infrastructure.", icon: Waves },
        { title: "Project Continuity", body: "Coordinate product selection and supply planning across phased metro construction packages.", icon: CircleGauge },
      ]}
      relatedSection={{ eyebrow: "Related solutions", title: "Explore ARS project support.", body: "Review ARS products and project guidance for your metro infrastructure requirements." }}
      relatedLinks={[{ label: "View CRS 550D", href: "/product-crs-550d" }, { label: "View ARS Fe 550D", href: "/product-550d" }, { label: "Contact ARS", href: "/contact" }]}
      faqSection={{ eyebrow: "Metro project FAQs", title: "Common questions." }}
      faq={[
        { question: "Which ARS TMT products can support metro projects?", answer: "ARS Fe 550D and ARS CRS Fe 550D can be evaluated based on project specifications, exposure conditions, and engineering requirements." },
        { question: "Can ARS support large infrastructure enquiries?", answer: "Yes. Contact the ARS team to discuss product selection, technical requirements, and project supply support." },
      ]}
    />
  );
}
