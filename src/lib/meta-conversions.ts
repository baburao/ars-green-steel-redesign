import "server-only";

import { createHash } from "node:crypto";
import { productionDomain } from "@/lib/site-metadata";

type MetaLeadInput = {
  eventId: string;
  formType:
    | "product_enquiry"
    | "quote_request"
    | "contact_enquiry"
    | "distributor_enquiry"
    | "steel_testing_enquiry"
    | "price_enquiry";
  sourcePage: string;
  email?: string;
  phone: string;
};

function hash(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function getCookieValue(cookieHeader: string | null, name: string) {
  if (!cookieHeader) return undefined;

  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;
}

/**
 * Sends only confirmed enquiry conversions. Failures are intentionally isolated
 * from the ARS form workflow so a Meta outage can never block a real enquiry.
 */
export async function sendMetaLeadEvent(request: Request, lead: MetaLeadInput) {
  const pixelId = process.env.META_CAPI_PIXEL_ID?.trim();
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN?.trim();
  if (!pixelId || !accessToken) return;

  const graphVersion = process.env.META_CAPI_GRAPH_VERSION?.trim() || "v23.0";
  if (!/^v\d+\.\d+$/.test(graphVersion)) {
    console.error("Meta CAPI is not configured with a valid Graph API version.");
    return;
  }

  const cookieHeader = request.headers.get("cookie");
  const fbp = getCookieValue(cookieHeader, "_fbp");
  const fbc = getCookieValue(cookieHeader, "_fbc");
  const clientIp = getClientIp(request);
  const clientUserAgent = request.headers.get("user-agent") || undefined;

  const userData = {
    ...(lead.email ? { em: [hash(lead.email)] } : {}),
    ph: [hash(lead.phone.replace(/\D/g, ""))],
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
    ...(clientIp ? { client_ip_address: clientIp } : {}),
    ...(clientUserAgent ? { client_user_agent: clientUserAgent } : {}),
  };

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.eventId,
        event_source_url: `${productionDomain}${lead.sourcePage}`,
        action_source: "website",
        user_data: userData,
        custom_data: { content_category: "enquiry", form_type: lead.formType },
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE?.trim()
      ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE.trim() }
      : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${graphVersion}/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(3_000),
      },
    );

    if (!response.ok) {
      console.error("Meta CAPI lead event was rejected.", { status: response.status });
    }
  } catch (error) {
    console.error("Meta CAPI lead event could not be delivered.", {
      reason: error instanceof Error ? error.name : "UNKNOWN_ERROR",
    });
  }
}
