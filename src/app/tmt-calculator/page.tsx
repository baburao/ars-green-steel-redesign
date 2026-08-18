import { PriceCalculatorExperience } from "@/app/price-calculator/price-calculator-experience";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "TMT Steel Calculator for Construction Projects | ARS Green Steel",
  description: "Calculate ARS TMT steel requirements by region, product, diameter, rods, bundles, or weight, then request a confirmed rate.",
  path: "/tmt-steel-calculator",
});

export default function TmtCalculatorPage() {
  return <PriceCalculatorExperience />;
}
