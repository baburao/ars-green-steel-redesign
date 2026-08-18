# ARS Green Steel Website Redesign

Modern, conversion-led redesign of the ARS Green Steel website.

Live preview:

- https://ars-green-steel.vercel.app/

Primary local project path:

- `/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`

Current active redesign branch:

- `codex/metadata-seo`

Latest production release:

- Date: 2026-08-08
- Commit: `871462f` — Refresh solution page assets and content
- Deployment: `dpl_4sYbBETKM1uS632v8SMm8ymMSaDt`
- Status: Ready
- Refreshed Road Projects, Bridges & Flyovers, Institutional Projects, Dealers & Distributors, Contractors, Engineers & Architects, Home Owners, and related solution content with local ARS assets.
- Added local brochures/download assets where available and verified 172 local assets.
- Production solution routes returned HTTP 200.

- Date: 2026-08-07
- Commit: `79a3438` — Standardize FAQ presentation
- Deployment: `dpl_E1w66Nt94QfCwQsRqnvPU7jMTmaN`
- Status: Ready
- Shared `FaqList` now standardizes FAQ interaction, spacing, dividers, icon states, focus behavior, and multiple-open behavior across converted FAQ sections.
- Canonical product order is ARS CRS 550D, ARS 550D, then ARS BINDERS wherever the shared product lists are used.
- The homepage-only CTA refresh was removed while original homepage navigation and content pathways were preserved.
- Production routes and assets returned HTTP 200 after release.

Latest internal-link release:

- Date: 2026-08-05
- Commit: `faa072f`
- Canonical internal links now point directly to WordPress routes, avoiding internal 301 hops.
- Blog page links previously ending in `.html` were corrected to valid application routes.
- `/about` was removed from the sitemap; `/about-us` remains canonical.
- Production deployment: `dpl_3By4xPLn7zLdTKC4J7BSuksAkRxW`

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- Vercel deployment

## Approved Design Direction

The project follows the client-approved Figma Make direction and `ARS-DESIGN-HANDOFF.md`.

Core rules:

- Primary blue: `#0D2B6E`
- Secondary red: `#DE121A`
- Dark navy: `#060D1E`
- Font: IBM Plex Sans
- Section H2: `clamp(2rem, 3.4vw, 2.25rem)`
- Section labels use the shared `SectionKicker` component.
- Non-home page heroes should target roughly `60vh`.
- Do not invent founder, team, or people photos.
- Use authentic ARS assets when available; placeholder industrial/product images can be replaced later.

## Local Preview

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3034
```

Open:

```text
http://127.0.0.1:3034/
```

If the port is already busy, stop the old Next.js process or choose a new port.

## Current Completed Areas

- Homepage Figma refresh
- Shared header and mega menu
- Shared footer
- About page
- Products listing
- ARS 550D product page
- ARS CRS 550D product page
- Green Steel page
- ARS Green Steel page
- Manufacturing page
- Certifications page
- Buying tools:
  - Steel price
  - TMT calculator
  - Dealer locator
- Audience guide pages:
  - Home owners
  - Engineers and architects
  - Civil contractors
  - Dealers and distributors
- Contact and quote flows
- Restored legacy routes and blog/article coverage

## Latest Live Update

Date:

- 2026-06-26

Latest deployed work:

- Dealer locator rebuilt from the supplied ARS dealer CSV.
- Search supports location, pincode, city, state, dealer name, dealer code, and phone.
- Dealer cards include call and map direction actions.
- Dealer intro cards were removed per client feedback.

Live dealer locator:

- https://ars-green-steel.vercel.app/dealer-locator

## Important Pending Client Inputs

These should be confirmed before final domain launch:

- Final steel prices
- TMT calculator formula and assumptions
- WhatsApp number
- Final dealer active status and phone number verification
- PDFs, brochures, certificates, and downloadable technical documents
- Any unverifiable business claims or certification wording

## Current Release Status — 2026-08-02

- Release branch: codex/metadata-seo
- Latest production commit: 4d5c4fc
- Privacy Policy and Terms of Use now use the shared legal-page UI.
- Dealer locator uses the updated region-wise workbook with 1,566 records.
- State selection filters the available city options.
- Dealer codes and the ARS dealer pill are not shown in public cards.
- Mobile navigation remains visible below the header while the visitor is mid-page.
- Repeated-content React key warnings were resolved.

## Documentation

Read these before making larger changes:

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_RULES.md`
- `DESIGN_SYSTEM.md`
- `TASKS.md`
- `DEPLOYMENT.md`
- `CLIENT_VERIFICATION_CHECKLIST.md`

## Product Enquiry Integration

The shared product enquiry form posts to `/api/product-enquiries`. The server validates and normalizes the lead before appending it to Google Sheets. Configure these server-only environment variables locally and in Vercel:

```bash
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_SHEET_NAME=Product Enquiries
GOOGLE_SHEETS_QUOTE_REQUESTS_SHEET_NAME=Quote Requests
GOOGLE_SHEETS_CONTACT_ENQUIRIES_SHEET_NAME=Contact Enquiries
GOOGLE_SHEETS_DISTRIBUTOR_ENQUIRIES_SHEET_NAME=Distributor Enquiries
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Create a Google Cloud service account with access to the Google Sheets API, then share the target spreadsheet with `GOOGLE_SERVICE_ACCOUNT_EMAIL` as an editor. Add this header row to the configured sheet:

```text
Full Name | Phone | Email | State | City / Project Location | Requirement | Product | Source Page | Submitted Date | Submitted Time | Timezone | ISO Timestamp
```

Do not prefix these variables with `NEXT_PUBLIC_` or commit their values. The lead payload and provider integration are separated so a Salesforce destination can be added later without changing the product forms.

Request Quote submissions use a separate `Quote Requests` worksheet in the same spreadsheet. Share the spreadsheet with the same service-account email and add this header row to that worksheet:

```text
Full Name | Phone | Email | State | City / Project Location | Project Type | Product Type | Requirement | Source Page | Submitted Date | Submitted Time | Timezone | ISO Timestamp
```

The quote-request browser payload remains destination-independent so Salesforce can be added later without changing the form fields.

Contact page submissions use a dedicated `Contact Enquiries` worksheet with this header row:

```text
Full Name | Phone | Email | Enquiry Type | City / Location | Requirement | Source Page | Submitted Date | Submitted Time | Timezone | ISO Timestamp
```

The Contact form posts to `/api/contact-enquiries`; its server-owned validation and normalized payload keep the browser form independent from Google Sheets so another provider such as Salesforce can be added later.

Distributor form submissions use a dedicated `Distributor Enquiries` worksheet with this header row:

```text
Full Name | Phone | Email | State | District | Pincode | Type of User | Enquiry Type | Enquiry Details | Source Page | Submitted Date | Submitted Time | Timezone | ISO Timestamp
```

The distributor form posts to `/api/distributor-enquiries`. Strict server-side validation and a normalized destination-independent payload allow a future Salesforce provider to be added without changing the browser form.
