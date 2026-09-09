# ARS Green Steel Deployment Guide

This is the deployment source of truth for the ARS Green Steel redesign.

## Live Project

- Production website: https://arsgroup.in/
- Production host: Hostinger
- Primary development repository: https://github.com/baburao/ars-green-steel-redesign
- Primary development branch: `main`
- Hostinger-connected production repository: https://github.com/SrikanthCh960/ars-green-steel
- Hostinger-connected production branch: `main`
- Secondary Vercel preview: https://ars-green-steel.vercel.app/
- Vercel project: `ars-green-steel`
- Vercel team/account: `baburaos-projects-1c568830`

Hostinger and `arsgroup.in` are the production source of truth. A Vercel deployment can remain available for preview and comparison, but it does not prove that the production website has been updated. Do not disconnect or reconfigure Vercel without explicit approval.

## Latest Hostinger Production Verification — 2026-09-01

- Production commit: `724ae550b2cb5242efc0b575ace17e4d5fbdc386` (`724ae55`) — `Add leadership, brochure, and media updates`.
- Source branch: `main`, after the primary-repository change was synced to the production-connected fork.
- Hostinger deployment state: **Completed / Current**.
- Live route verification: `/our-team`, `/download-product-brochure`, and `/press-media` show the released leadership, brochure-library, and press-media content.
- The abbreviated seven-character Git SHA (`724ae55`) and the eight-character SHA shown by Hostinger (`724ae550`) identify the same commit.
- Release scope excludes the Quality page, Binders brochure, and Clients logo expansion because the required approved source material has not yet been supplied.

## Pending Hostinger release — workbook-backed TMT calculator

- Primary-repository commit: `ff74ff0` — **Update workbook-backed TMT calculator pricing** — is pushed to Baburao's `main`; it has not yet been synced to the Hostinger-connected fork or verified in production.
- Before declaring it live, use **Sync fork → Update branch** in `SrikanthCh960/ars-green-steel`, confirm Hostinger reports `ff74ff0` as **Completed / Current**, then verify `/tmt-steel-calculator`, `/tmt-calculator`, and `/tmt-steel-price-today` on `https://arsgroup.in`.
- Confirm a supported calculator selection shows its workbook-backed results and an unsupported/unavailable selection shows an unavailable-price message without a displayed ₹0 rate or ₹0 total.
- The update uses the approved `Price - Formula workbook (Regionwise Vs Dia Vs Product) - New.xlsx` source for the supported state/product/diameter prices, rods/bundles/weight calculations, GST treatment, and order disclaimers. Do not update values manually without a newer approved workbook.

## Salesforce UAT configuration

The five server-owned enquiry endpoints can send each validated lead to Salesforce and Google Sheets. Google Sheets remains the digital-marketing reporting destination; Salesforce is the client-operated lead system.

Set these **server-only** values in the UAT environment only after Salesforce has rotated the credentials previously exposed in a document. Never commit them, add a `NEXT_PUBLIC_` prefix, or send them from browser code:

```txt
SALESFORCE_ENABLED=true
SALESFORCE_INSTANCE_URL=https://your-salesforce-uat-instance
SALESFORCE_CLIENT_ID=
SALESFORCE_CLIENT_SECRET=
SALESFORCE_API_VERSION=v64.0
```

- When `SALESFORCE_ENABLED` is not exactly `true`, Salesforce is skipped and the existing Google Sheets delivery remains unchanged.
- When enabled, a form must create its Salesforce `Website_Enquiry__c` record before its Google Sheets row is appended. The visitor sees success only after both destination calls complete.
- The website does not currently rely on a Salesforce external ID. For UAT, reconcile the two destinations by form type, source route, submission time, and the Salesforce record created. Request a unique external ID before production if Salesforce wants retry-safe duplicate handling.
- Do not use the OAuth access-token request in a URL query string. The server posts credentials to Salesforce's token endpoint and sends the returned access token only in the server-side Authorization header.

## Search Indexing Policy

Indexing is controlled by one explicit build-time variable:

```txt
NEXT_PUBLIC_INDEXING_ENABLED=true
```

Set this variable to `true` only in the Hostinger production environment for `https://arsgroup.in`. An explicit `true` or `false` always wins. As a Hostinger compatibility safeguard, a non-Vercel production build is also indexable when the flag is unavailable during compilation. Vercel builds and local development remain `noindex, nofollow` by default.

The generated `src/app/robots.ts` file is the only robots.txt source:

- Production allows crawling and references `https://arsgroup.in/sitemap.xml`.
- Non-production allows crawlers to fetch pages so they can read `noindex, nofollow`, but does not advertise a sitemap.
- Do not add a second `public/robots.txt`; duplicate sources can produce conflicting deployment output.
- Do not use `Disallow: /` as a substitute for `noindex`. Use authentication as the primary protection when a preview contains private material.

Before every production release:

1. Confirm Hostinger stores `NEXT_PUBLIC_INDEXING_ENABLED=true`; the non-Vercel production fallback protects builds where Hostinger does not expose the value during compilation.
2. Confirm the Vercel preview does not have the production value; Vercel's platform flag keeps it non-indexable by default.
3. Verify production HTML contains `index, follow` and preview HTML contains `noindex, nofollow`.
4. Verify production `/robots.txt` allows crawling and references the production sitemap.
5. Verify no indexable sitemap URL has a conflicting meta robots or `X-Robots-Tag` directive.

## Repository Ownership and Production Flow

All development work originates in Baburao's repository. The local `origin` remote must point to:

```txt
https://github.com/baburao/ars-green-steel-redesign
```

Srikanth's repository is a production-connected fork, not the primary development source. Hostinger watches its `main` branch:

```txt
https://github.com/SrikanthCh960/ars-green-steel
```

Use this release flow for every approved production change:

1. Review and verify the change locally.
2. Commit to Baburao's `main` branch.
3. Push to `baburao/ars-green-steel-redesign`.
4. Open Srikanth's fork and use **Sync fork → Update branch**.
5. Wait for Hostinger to show the expected commit as **Completed / Current**.
6. Verify the affected routes and behaviour on https://arsgroup.in/.
7. Report the change as live only after production verification passes.

Do not commit directly to Srikanth's fork unless the repository ownership or emergency-release process is explicitly changed and documented.

## Analytics Configuration

Direct Google Analytics 4 (GA4), Google Tag Manager (GTM), and Meta Pixel are installed globally and controlled independently through the shared source configuration in `src/lib/analytics-config.ts`. This makes every build from the same commit use the same analytics setup on Hostinger and Vercel without host-specific environment variables.

| Integration | Enable field | ID field | Configured ID |
|---|---|---|---|
| Direct GA4 | `analyticsConfig.ga4.enabled` | `analyticsConfig.ga4.measurementId` | `G-MQXGEGFD37` |
| Google Tag Manager | `analyticsConfig.gtm.enabled` | `analyticsConfig.gtm.containerId` | `GTM-5SKJ2BWC` |
| Meta Pixel | `analyticsConfig.metaPixel.enabled` | `analyticsConfig.metaPixel.pixelId` | `1310310320950953` |

All three integrations are currently enabled. To disable an integration for every host, change only its `enabled` value and rebuild both deployments from the same commit:

```ts
ga4: { enabled: false, measurementId: "G-MQXGEGFD37" }
gtm: { enabled: false, containerId: "GTM-5SKJ2BWC" }
metaPixel: { enabled: false, pixelId: "1310310320950953" }
```

GA4 measurement IDs, GTM container IDs, and Meta Pixel IDs are public identifiers that are visible in the delivered website markup. Do not place private analytics credentials or API secrets in this source configuration.

When direct GA4 and GTM are both enabled, confirm that the GTM container is not also sending the same GA4 page views or conversion events unless duplicate measurement is intentionally required. The shared `generate_lead`, `phone_click`, and `whatsapp_click` events are dispatched to each enabled integration.

Meta Pixel loads globally with an initial `PageView` and sends another `PageView` after each App Router pathname change. Confirm that GTM does not also install Pixel ID `1310310320950953` or send overlapping Meta PageView events, unless duplicate measurement is intentionally required.

Implementation locations:

- `src/app/layout.tsx` installs GA4, GTM, the Meta Pixel script, and both no-JavaScript fallbacks globally.
- `src/lib/analytics-config.ts` is the only source-controlled enable/disable and public-ID configuration.
- `src/lib/analytics.ts` dispatches the shared lead, phone, WhatsApp, and Meta route PageView events.
- `src/components/analytics-interactions.tsx` detects client-side pathname changes without duplicating the initial Meta PageView.

Analytics release checks:

1. Confirm the GA4, GTM, and Meta Pixel enable flags and public IDs before building.
2. Build and deploy the same commit through the normal Baburao → Srikanth → Hostinger flow.
3. Verify the tags and intended events on `arsgroup.in` after Hostinger is **Completed / Current**.
4. Confirm that GTM is not duplicating direct GA4 or Meta Pixel page views and conversions.
5. Never place private analytics credentials, API secrets, or service-account keys in the source-controlled analytics configuration.

Performance release checks for the affected calculator and price pages:

1. Verify the new responsive WebP hero image is requested on `/tmt-steel-price-today` and `/tmt-steel-calculator`.
2. Confirm the calculator loads without a React hydration error in the browser console.
3. Keep GTM and Google Ads configuration unchanged until the SEO team confirms the tag strategy.

### Meta Conversions API (CAPI)

Server-side `Lead` events complement the browser Meta Pixel event for every successfully appended product, quote, contact, distributor, and steel-testing enquiry. The browser and server events share one event ID, so Meta deduplicates them and counts one conversion.

Hostinger-only server environment variables:

```txt
META_CAPI_PIXEL_ID=1310310320950953
META_CAPI_ACCESS_TOKEN=
META_CAPI_GRAPH_VERSION=v23.0
META_CAPI_TEST_EVENT_CODE=
```

- `META_CAPI_ACCESS_TOKEN` is secret. Never commit, log, paste into chat, or expose it with `NEXT_PUBLIC_`.
- Use `META_CAPI_TEST_EVENT_CODE` only while validating in Meta Events Manager. Remove it, then redeploy, before live conversion measurement.
- Rotate the token by generating a replacement in Meta Events Manager, replacing only the Hostinger access-token value, redeploying, confirming a new lead, then revoking the prior token.
- The 2026-08-23 test was successful: Meta received the browser and server `Lead` events and deduplicated the server copy as intended.

## Latest Hostinger Production Verification — 2026-08-20

- Production commit: `a22ae35` — `Handle Hostinger production indexing fallback`
- Primary repository: `baburao/ars-green-steel-redesign`
- Production-connected fork: `SrikanthCh960/ars-green-steel`
- Production host and URL: Hostinger at https://arsgroup.in/
- Deployment state: **Completed / Current** at 2026-08-20 16:40 IST.
- SEO result: homepage, blog, and representative product routes emit `index, follow`; `/thank-you` remains `noindex, follow`; robots.txt allows crawling and references the production sitemap; sitemap returns HTTP 200 XML; homepage Organization, WebSite, and WebPage JSON-LD are live.
- Existing integration result: quote-request and product-enquiry Google Sheets submissions were previously confirmed working in production and remain part of the deployed history.
- Operational note: Hostinger stored the service-account PEM newlines with additional escaping. The server now normalizes one or more escape characters before parsing the PKCS#8 key. Never print the key value in logs or documentation.

## Historical Vercel Release Records

The following release records predate Hostinger becoming the production source of truth. Preserve them as deployment history; their Vercel `READY` status does not verify current Hostinger production.

### Internal-Link Release — 2026-08-05

- Commit: `faa072f`
- Production deployment: `dpl_3By4xPLn7zLdTKC4J7BSuksAkRxW`
- Status: `READY`
- Internal links now point directly to canonical WordPress routes, avoiding internal 301 hops.
- 61 broken page links in `src/data/blog-migration-registry.json` were corrected.
- `/about` was removed from the sitemap; redirect sources in `next.config.ts` remain unchanged.
- TypeScript, internal route/asset QA, production build, calculator routes, sitemap, favicon, and logo checks passed.

### Vercel Release — 2026-08-08

Latest confirmed live update:

- Date: 2026-08-08
- Commit: `871462f` — `Refresh solution page assets and content`
- Vercel deployment: `dpl_4sYbBETKM1uS632v8SMm8ymMSaDt`
- Status: `READY`
- Verified routes: `/`, `/road-projects-tmt-steel-bars`, `/bridges-projects-tmt-steel-bars`, `/institutions-projects-tmt-steel-bars`, `/steel-distributors-dealers`, `/tmt-steel-bar-guide-homeowners`
- All verified routes returned HTTP 200.

What went live:

- Refreshed solution-page content and local ARS imagery.
- Added local solution assets for Roads, Bridges, Contractors, Dealers, Engineers & Architects, and related page sections.
- Added available local Binders and CRS brochure assets.

### Vercel Release — 2026-08-07

Latest confirmed live update:

- Date: 2026-08-07
- Commit: `79a3438` — `Standardize FAQ presentation`
- Vercel deployment: `dpl_E1w66Nt94QfCwQsRqnvPU7jMTmaN`
- Status: `READY`
- Verified routes: `/`, `/products`, `/our-quality`, `/ars-green-steel`, `/10-mm-steel-rod`, `/tmt-steel-calculator`
- All verified routes returned HTTP 200.

What went live:

- Shared accessible FAQ presentation and interaction pattern.
- Consistent FAQ spacing, dividers, typography, focus states, open/closed icon states, and multi-answer behavior.
- Canonical product ordering: ARS CRS 550D → ARS 550D → ARS BINDERS.
- Homepage CTA refresh rollback, preserving the original homepage CTA layer.

### Vercel Release — 2026-08-02

Latest confirmed live update:

- Date: 2026-08-02
- Commit: `4d5c4fc` - `Refine legal pages and dealer locator`
- Production URL: https://ars-green-steel.vercel.app/
- Dealer locator URL: https://ars-green-steel.vercel.app/our-network
- Vercel deployment: `dpl_4AfuvJQX2BCCENKX5ds8HxHuEw5Q`
- Status: `READY`

What went live:

- Dealer locator updated from the supplied region-wise workbook with 1,566 unique records.
- State selection filters the city options; dealer codes remain internal only.
- Dealer cards include call and map direction actions.
- Privacy Policy and Terms of Use use the shared legal-page system.
- Mobile menu viewport positioning and duplicate React keys were fixed.

## Current Recommended Deployment Flow

Use the primary repository's `main` branch for approved releases. A push to Baburao's repository updates the development source; syncing Srikanth's fork triggers the Hostinger production deployment.

Current caution:

- The native `/blog` archive work may be local-only until committed and pushed.
- Do not include accidental package-manager files such as `pnpm-lock.yaml` or `pnpm-workspace.yaml` unless the package-manager strategy is intentionally changing.

### 1. Run Local Site

```bash
cd /Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
npm run dev -- --hostname 127.0.0.1 --port 3032
```

Local preview:

```txt
http://127.0.0.1:3032/
```

If this URL says "This site can't be reached", the local dev server is not running.

### 2. Verify Before Push

Run these checks before deploying:

```bash
npm run build -- --webpack
git status
```

`next dev` is intentionally `noindex, nofollow`. A production build outside Vercel uses the same indexing fallback as Hostinger. To make the production intent explicit during local verification, use:

```bash
NEXT_PUBLIC_INDEXING_ENABLED=true npm run build -- --webpack
```

If available, also run:

```bash
npm run lint
npm run qa:routes
```

### 3. Commit And Push

```bash
git add .
git commit -m "Describe the update"
git push origin main
```

After `git push origin main`, Vercel automatically starts a production deployment.

This may update the secondary Vercel preview. It does not update Hostinger until Srikanth's fork is synced.

### 4. Sync the Hostinger-Connected Fork

Open https://github.com/SrikanthCh960/ars-green-steel and use **Sync fork → Update branch**. Confirm that Srikanth's `main` shows the same commit SHA as Baburao's `main`.

### 5. Confirm Hostinger Production

Open Hostinger and check:

- The expected commit must become **Completed / Current**.
- Do not test production while the deployment is still building.
- Hard-refresh and verify the affected routes at https://arsgroup.in/.
- For form or API changes, confirm the production response and the intended destination result, such as the new Google Sheets row.
- Use Hostinger runtime logs for backend failures; a minified browser stack only identifies the frontend call site.

### 6. Optional Vercel Verification

If the Vercel preview is relevant to the release, confirm its deployment separately at https://ars-green-steel.vercel.app/. Vercel status is secondary and must not replace Hostinger production verification.

## Important GitHub, Hostinger, and Vercel Notes

The local repository and normal commit history belong to `baburao/ars-green-steel-redesign`. Hostinger is connected to `SrikanthCh960/ars-green-steel`, so both `main` branches must match before production verification.

The primary repository also remains connected to Vercel through the GitHub app.

GitHub app access must include:

```txt
baburao/ars-green-steel-redesign
```

If the secondary Vercel deployment does not start after a push, check:

1. GitHub repo is connected in Vercel.
2. Vercel GitHub app has access to the repository.
3. The pushed branch is `main`.
4. The latest commit appears in Vercel Deployments.

GitHub app permissions page:

```txt
https://github.com/settings/installations
```

## Previous Vercel Deployment Issue And Fix

We had a blocked production deployment after commit:

```txt
b8556c5 Refine ARS homepage journey and typography
```

Vercel showed:

```txt
Deployment Blocked
The deployment was blocked because the commit author did not have contributing access to the project on Vercel.
The Hobby Plan does not support collaboration for private repositories.
```

Root cause:

- Vercel checks the GitHub commit author and repo access, not only the browser login.
- The commit author appeared as `baburao7772`.
- Vercel/project access was being evaluated separately.
- The repo had been private earlier, so Vercel treated the deployment as a private-repo collaboration case.
- Existing blocked deployments do not automatically unblock after permissions change.

What fixed it:

1. GitHub repository was made public.
2. Vercel GitHub app access was confirmed for `baburao/ars-green-steel-redesign`.
3. A fresh commit was created and pushed:

```txt
f41c180 Trigger production deployment
```

After that fresh push, Vercel deployed successfully.

## If Vercel Shows Blocked Again

Do not keep retrying the same blocked deployment.

Follow this checklist:

1. Confirm GitHub app access:

```txt
https://github.com/settings/installations
```

2. Confirm Vercel has access to:

```txt
baburao/ars-green-steel-redesign
```

3. Check local Git author:

```bash
git config --get user.name
git config --get user.email
```

Expected current author:

```txt
baburao7772
166382500+baburao7772@users.noreply.github.com
```

4. Create a fresh commit and push:

```bash
git commit --allow-empty -m "Trigger production deployment"
git push origin main
```

5. Check Vercel Deployments again.

If it still blocks, the remaining issue is account identity mismatch between GitHub commit author and Vercel project access.

## Clean Working Tree Before Deploy

Before pushing, always run:

```bash
git status
```

If `CLAUDE.md` appears as deleted but that deletion is not intentional, restore it:

```bash
git restore CLAUDE.md
```

Do not deploy with accidental deleted files.

## Secondary Vercel CLI Use

GitHub push is preferred. Vercel CLI use does not deploy Hostinger production.

Use Vercel CLI only when needed:

```bash
vercel link
vercel deploy --prod
```

If Vercel CLI asks to upgrade itself and fails with npm cache errors, skip the upgrade and continue with the normal repository flow instead.

## Production Domain and Post-Deployment Checks

The production domain is already live on Hostinger at https://arsgroup.in/. After each relevant production deployment, recheck:

1. HTTPS and the expected Hostinger commit.
2. `/robots.txt` and `/sitemap.xml`.
3. Changed routes, old URLs, and blog URLs.
4. Enquiry, contact, quote, and other affected conversion flows.
5. GA4, GTM, and Meta Pixel loading and event behaviour when analytics changed.

Keep https://ars-green-steel.vercel.app/ as the secondary preview reference unless the client requests a different preview arrangement. Do not move `arsgroup.in` to Vercel or disconnect either host without explicit approval.

## Items That Can Be Added Later

These are future content or product inputs and are unrelated to the documented Hostinger release flow:

- Final client-approved contact details
- WhatsApp number
- Live steel price data
- Calculator formulas
- Final ARS verification of dealer active status and phone numbers
- Remaining original legacy assets
- PDFs, brochures, certificates, downloadable documents, and videos
