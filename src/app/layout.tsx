import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { AnalyticsInteractions } from "@/components/analytics-interactions";
import { defaultSocialImage, isProductionSite, productionDomain, toProductionUrl } from "@/lib/site-metadata";
import { SiteFooter } from "@/components/site-footer";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const analyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" && Boolean(gaId);

export const metadata: Metadata = {
  metadataBase: new URL(productionDomain),
  title: {
    default: "ARS Group | Certified TMT Steel",
    // Page titles in the migrated application already include the brand suffix.
    template: "%s",
  },
  description:
    "Modern website prototype for ARS Group, focused on certified TMT steel, dealer discovery, pricing, and construction confidence.",
  applicationName: "ARS Green Steel",
  openGraph: {
    title: "ARS Group | Certified TMT Steel",
    description:
      "Certified TMT steel, dealer discovery, pricing, and construction confidence from ARS Green Steel.",
    url: productionDomain,
    siteName: "ARS Green Steel",
    type: "website",
    images: [{ url: toProductionUrl(defaultSocialImage) }],
  },
  twitter: {
    card: "summary_large_image",
    images: [toProductionUrl(defaultSocialImage)],
  },
  robots: {
    index: isProductionSite,
    follow: isProductionSite,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content">{children}</div>
        <SiteFooter />
        {analyticsEnabled ? <AnalyticsInteractions /> : null}
      </body>
      {analyticsEnabled && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
