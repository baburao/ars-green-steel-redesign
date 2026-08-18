import { createPageMetadata } from "@/lib/site-metadata";
import SteelPriceTodayPage from "@/app/steel-price-today/page";

export const metadata = createPageMetadata({ title: "TMT Steel Price Today | ARS Green Steel", description: "Check current ARS TMT steel price guidance and connect with the ARS team.", path: "/tmt-steel-price-today" });

export default function TmtSteelPriceTodayPage() {
  return <SteelPriceTodayPage />;
}
