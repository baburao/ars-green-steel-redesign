import "server-only";

export type SalesforceWebsiteEnquiry = Record<string, string> & {
  Type__c: string;
};

type SalesforceConfig = {
  instanceUrl: string;
  clientId: string;
  clientSecret: string;
  apiVersion: string;
};

type SalesforceTokenResponse = {
  access_token?: unknown;
  instance_url?: unknown;
};

type SalesforceCreateResponse = {
  id?: unknown;
  success?: unknown;
};

type SalesforceCreateError = {
  errorCode?: unknown;
  fields?: unknown;
  message?: unknown;
};

const requestTimeoutMs = 12_000;
const smPlusProductName = "ARS 550 SM+ TMT Bars";

function getSalesforceConfig(): SalesforceConfig | null {
  if (process.env.SALESFORCE_ENABLED !== "true") return null;

  const instanceUrl = process.env.SALESFORCE_INSTANCE_URL?.trim();
  const clientId = process.env.SALESFORCE_CLIENT_ID?.trim();
  const clientSecret = process.env.SALESFORCE_CLIENT_SECRET?.trim();
  const apiVersion = process.env.SALESFORCE_API_VERSION?.trim() || "v64.0";

  if (!instanceUrl || !clientId || !clientSecret) {
    throw new Error("SALESFORCE_NOT_CONFIGURED");
  }

  let parsedInstanceUrl: URL;
  try {
    parsedInstanceUrl = new URL(instanceUrl);
  } catch {
    throw new Error("SALESFORCE_INSTANCE_URL_INVALID");
  }
  if (parsedInstanceUrl.protocol !== "https:") {
    throw new Error("SALESFORCE_INSTANCE_URL_INVALID");
  }
  if (!/^v\d+(?:\.\d+)?$/.test(apiVersion)) {
    throw new Error("SALESFORCE_API_VERSION_INVALID");
  }

  return {
    instanceUrl: parsedInstanceUrl.origin,
    clientId,
    clientSecret,
    apiVersion,
  };
}

function withTimeout() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
  return {
    signal: controller.signal,
    clear: () => clearTimeout(timeout),
  };
}

async function getSalesforceAccessToken(config: SalesforceConfig) {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });
  const timeout = withTimeout();

  try {
    const response = await fetch(`${config.instanceUrl}/services/oauth2/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      signal: timeout.signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`SALESFORCE_AUTH_FAILED_${response.status}`);

    const payload = await response.json() as SalesforceTokenResponse;
    if (typeof payload.access_token !== "string" || typeof payload.instance_url !== "string") {
      throw new Error("SALESFORCE_AUTH_RESPONSE_INVALID");
    }

    const returnedInstanceUrl = new URL(payload.instance_url);
    if (returnedInstanceUrl.protocol !== "https:") {
      throw new Error("SALESFORCE_AUTH_RESPONSE_INVALID");
    }
    return { accessToken: payload.access_token, instanceUrl: returnedInstanceUrl.origin };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") throw new Error("SALESFORCE_AUTH_TIMEOUT");
    throw error;
  } finally {
    timeout.clear();
  }
}

async function readCreateError(response: Response): Promise<SalesforceCreateError | undefined> {
  if (response.status !== 400) return;

  const errors: unknown = await response.json().catch(() => null);
  if (!Array.isArray(errors) || errors.length !== 1) return;

  const error: unknown = errors[0];
  if (error && typeof error === "object") return error as SalesforceCreateError;
}

function isSmPlusPicklistRejection(error: SalesforceCreateError | undefined) {
  if (error?.errorCode !== "INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST") return false;

  if (Array.isArray(error.fields) && error.fields.length > 0) {
    return error.fields.length === 1 && error.fields[0] === "Product_Type__c";
  }

  // Salesforce can omit the field name and identify the rejected value in the message.
  return typeof error.message === "string" && error.message.trimEnd().endsWith(`: ${smPlusProductName}`);
}

/**
 * Creates the Salesforce record when the server-only integration is enabled.
 * Returns without a network call until the secure Salesforce UAT configuration is installed.
 */
export async function createSalesforceWebsiteEnquiry(enquiry: SalesforceWebsiteEnquiry) {
  const config = getSalesforceConfig();
  if (!config) return { enabled: false as const, recordId: null };

  const { accessToken, instanceUrl } = await getSalesforceAccessToken(config);
  const createUrl = `${instanceUrl}/services/data/${config.apiVersion}/sobjects/Website_Enquiry__c/`;
  const timeout = withTimeout();

  function createRecord(fields: SalesforceWebsiteEnquiry) {
    return fetch(createUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(fields),
      signal: timeout.signal,
      cache: "no-store",
    });
  }

  try {
    let response = await createRecord(enquiry);
    let failure = await readCreateError(response);

    if (enquiry.Product_Type__c === smPlusProductName && isSmPlusPicklistRejection(failure)) {
      const { Product_Type__c: product, Requirement__c: requirement, ...fields } = enquiry;
      response = await createRecord({
        ...fields,
        Requirement__c: [`Product: ${product}`, requirement].filter(Boolean).join("\n\n"),
      });
      failure = await readCreateError(response);
    }

    if (!response.ok) {
      const code = failure?.errorCode;
      const reason = typeof code === "string" && /^[A-Z0-9_]{1,80}$/.test(code) ? `_${code}` : "";
      throw new Error(`SALESFORCE_RECORD_CREATE_FAILED_${response.status}${reason}`);
    }

    const payload = await response.json() as SalesforceCreateResponse;
    if (payload.success !== true || typeof payload.id !== "string") {
      throw new Error("SALESFORCE_RECORD_RESPONSE_INVALID");
    }
    return { enabled: true as const, recordId: payload.id };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") throw new Error("SALESFORCE_RECORD_CREATE_TIMEOUT");
    throw error;
  } finally {
    timeout.clear();
  }
}
