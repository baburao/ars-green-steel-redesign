"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/analytics";

function inferLinkLocation(anchor: HTMLAnchorElement) {
  if (anchor.dataset.analyticsLocation) return anchor.dataset.analyticsLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  return "site";
}

export function AnalyticsInteractions() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!anchor) return;

      trackPhoneClick({
        pagePath: window.location.pathname,
        linkLocation: inferLinkLocation(anchor),
        linkText: anchor.dataset.analyticsLabel ?? "call_ars",
        phoneContext: anchor.dataset.analyticsContext ?? "business_phone",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
