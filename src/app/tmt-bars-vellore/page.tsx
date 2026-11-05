import { CityServiceAreaPage } from "@/components/city-service-area-page";
import { getCityServiceArea } from "@/data/city-service-areas";
import { createPageMetadata } from "@/lib/site-metadata";

const area = getCityServiceArea("vellore");
export const metadata = createPageMetadata({ title: area.title, description: area.description, path: area.path, image: "/ars-assets/products/ProductComparission_HeroBanner-desktop.webp" });
export default function VelloreTmtBarsPage() { return <CityServiceAreaPage area={area} />; }
