import "server-only";

import { createSign } from "node:crypto";

type AppendGoogleSheetRowOptions = {
  sheetName: string;
  rangeColumns: string;
  values: string[];
};

function base64Url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

function getGoogleSheetsConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");
  }

  return { spreadsheetId, clientEmail, privateKey };
}

async function getGoogleAccessToken(clientEmail: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const assertion = `${unsignedToken}.${base64Url(signer.sign(privateKey))}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) throw new Error("GOOGLE_AUTH_FAILED");
  const data = await response.json() as { access_token?: string };
  if (!data.access_token) throw new Error("GOOGLE_AUTH_FAILED");
  return data.access_token;
}

function safeSheetCell(value: string) {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export async function appendGoogleSheetRow({ sheetName, rangeColumns, values }: AppendGoogleSheetRowOptions) {
  const { spreadsheetId, clientEmail, privateKey } = getGoogleSheetsConfig();
  const normalizedSheetName = sheetName.trim();

  if (!normalizedSheetName || normalizedSheetName.length > 100 || !/^[\w .&()-]+$/.test(normalizedSheetName)) {
    throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");
  }
  if (!/^[A-Z]+:[A-Z]+$/.test(rangeColumns)) throw new Error("GOOGLE_SHEETS_RANGE_INVALID");

  const accessToken = await getGoogleAccessToken(clientEmail, privateKey);
  const range = encodeURIComponent(`${normalizedSheetName}!${rangeColumns}`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: { authorization: `Bearer ${accessToken}`, "content-type": "application/json" },
    body: JSON.stringify({ values: [values.map(safeSheetCell)] }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) throw new Error("GOOGLE_SHEETS_APPEND_FAILED");
}
