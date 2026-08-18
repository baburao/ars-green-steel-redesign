import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep Next's optimized image responses viewable in a new tab instead of forcing downloads.
    contentDispositionType: "inline",
    // Serve local public assets directly so cached optimizer responses cannot force downloads.
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/products/ars-550d",
        destination: "/product-550d",
        permanent: true,
      },
      {
        source: "/products/ars-crs-550d",
        destination: "/product-crs-550d",
        permanent: true,
      },
      {
        source: "/products/ars-binders",
        destination: "/ars-binders",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/certifications",
        destination: "/our-certification",
        permanent: true,
      },
      {
        source: "/dealer-locator",
        destination: "/our-network",
        permanent: true,
      },
      {
        source: "/become-a-dealer",
        destination: "/steel-distributors-dealers",
        permanent: true,
      },
      {
        source: "/tmt-calculator",
        destination: "/tmt-steel-calculator",
        permanent: true,
      },
      {
        source: "/steel-price-today",
        destination: "/tmt-steel-price-today",
        permanent: true,
      },
      {
        source: "/blog/the-secret-to-a-successful-construction.html",
        destination: "/blog/things-to-keep-in-mind-before-buying-tmt-steel-bars.html",
        permanent: true,
      },
      {
        source: "/blog/leading-hub-for-tmt-steel-bar-manufacture-in-tamil-nadu.html",
        destination: "/blog/check-out-why-ars-is-the-leading-steel-manufacturing-company-in-tamil-nadu.html",
        permanent: true,
      },
      {
        source: "/blog/why-are-tmt-bars-necessary-for-construction.html",
        destination: "/blog/what-makes-tmt-steel-bars-important-for-a-long-lasting-building-construction.html",
        permanent: true,
      },
      {
        source: "/blog/how-to-identify-top-quality-tmt-steel-bars-for-construction.html",
        destination: "/blog/how-to-identify-top-quality-tmt-steel-bars-for-building-construction.html",
        permanent: true,
      },
      {
        source: "/blog/difference-between-tmt-hysd-tor-steel-bars.html",
        destination: "/blog/tmt-bars-vs-hysd-bars.html",
        permanent: true,
      },
      {
        source: "/blog/what-is-tmt-sariya.html",
        destination: "/blog/what-is-tmt-bar-and-what-are-its-advantages.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
