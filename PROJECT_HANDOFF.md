# ARS Green Steel Project Handoff

Read this file first when continuing the ARS content migration in a new chat.

## Salesforce UAT integration — 2026-09-08

- The five server-owned website lead endpoints have a server-only Salesforce delivery path alongside their established Google Sheets delivery. This implementation is committed to primary `main`; the next Vercel deployment will make it available for UAT.
- Salesforce delivery is disabled unless `SALESFORCE_ENABLED=true` and all required non-public UAT settings are installed. Google Sheets remains the digital-marketing reporting destination.
- When enabled, each validated lead is created in Salesforce `Website_Enquiry__c` first and then appended to Google Sheets. Visitor success requires both deliveries. No Salesforce external ID is required for UAT; Salesforce record IDs, form type, source route, and submission time will be used for reconciliation.
- Do not use credentials present in the Salesforce requirement PDF. They were exposed in the source document and must be rotated before secure UAT configuration. Never write Salesforce credentials into source, Markdown, Git, or browser code.
- Build and diff checks pass. Salesforce UAT settings are configured securely in Vercel's Production environment; no external UAT submission has been sent. Next step: confirm the Vercel deployment from this commit, verify field permissions/picklist values, and explicitly authorise five labelled UAT submissions.

## Latest primary-repository update — 2026-09-05

- Commit `ff74ff0` — **Update workbook-backed TMT calculator pricing** — is pushed to Baburao's primary `main` branch. It is not yet a Hostinger production release.
- The approved source workbook is `Price - Formula workbook (Regionwise Vs Dia Vs Product) - New.xlsx`. It now drives supported 550 D and CRS pricing for Tamil Nadu, Andhra Pradesh, Kerala, and Karnataka across 8, 10, 12, 16, 20, 25, and 32 mm.
- `/tmt-steel-calculator` supports workbook-faithful rods, bundles, and weight-in-kg inputs. Its detailed results show rods, full bundles, loose rods, calculated weight, GST-inclusive rate/kg, and GST-inclusive total.
- The shared rate data also updates `/tmt-steel-price-today` without redesigning that page. Prices unavailable for an unsupported selection are deliberately withheld rather than presented as a valid zero-value quote.
- The workbook terms now cover GST-inclusive pricing, 12 m pieces, BIS tolerances, and delivery/transport/loading/unloading exclusions. City/town remains optional quote context only and does not change the state-level rate.
- Validation passed: all 56 supported state × product × diameter rate combinations matched the workbook formula; `npm run build` and `git diff --check` passed. A source-level responsive/accessibility review passed, including an accessible polite unavailable-price status. A normal browser rendering review remains recommended before Hostinger release.
- Next release steps: sync Srikanth's fork `main`, wait for Hostinger to deploy `ff74ff0`, then verify `/tmt-steel-calculator`, `/tmt-calculator`, and `/tmt-steel-price-today` live. Do not describe this change as live until those checks pass.

## Latest Hostinger release — 2026-09-01

- Production is confirmed on Hostinger from `main` at commit `724ae550b2cb5242efc0b575ace17e4d5fbdc386` (`724ae55`) — **Add leadership, brochure, and media updates**.
- `/our-team` now uses the approved portrait-led Core Team hierarchy: equal MD and ED entries, smaller centred supporting profiles, a red divider, and name/designation text outside the portrait surface. The two original leadership biographies are no longer clipped.
- `/download-product-brochure` is a public brochure library with ARS 550D, CRS 550D English, CRS 550D Tamil, and the ARS Corporate Booklet. Each available brochure has a direct download action and matching product/corporate logo.
- `/press-media` now contains the supplied product-film links and published press-coverage links. The ARS 550D product page download actions now point to its available brochure.
- `/price-calculator` then presented only Total Steel and Indicative Cost; it was superseded in primary `main` by the workbook-backed calculator update recorded above and remains pending Hostinger release.
- Production checks confirmed the above public routes after the Hostinger deployment completed.
- Intentionally pending client inputs: approved Quality-page technical claims, an approved Binders brochure, and a verified complete client-logo set/list for the Clients page. Do not infer or publish any of these without those inputs.

## Homepage mobile performance and redirect update — 2026-08-27

- `/about.html` now has a one-hop permanent redirect to `/about-us`; verify the 308 response after deployment.
- The homepage mobile hero now serves a 53 KB WebP still image instead of loading the 18 MB autoplay desktop video. Desktop continues to use the approved video.
- The homepage is statically prerendered and reports an internal Next.js cache hit. Cloudflare reports the response as dynamic, so further TTFB improvement requires a Hostinger/Cloudflare cache-policy review rather than an application-level cache override.
- GTM, Google Ads, Meta, and other third-party tag configuration remain unchanged pending SEO-team direction.

## Latest performance update — 2026-08-27

- Resolved a calculator hydration mismatch caused by rendering a date at build time and again in the browser. The calculator now uses stable indicative-copy text instead.
- Added responsive WebP hero delivery for `/tmt-steel-price-today` and `/tmt-steel-calculator`, preserving the original JPGs only as compatibility fallbacks.
- Production build and local route checks passed with no console errors on either affected page.
- GTM and Google Ads changes remain intentionally on hold pending SEO-team review.

## Latest operational update — 2026-08-23

- Commit `f777cd2` added Meta Conversions API `Lead` tracking for all five enquiry endpoints and matching browser-side events. Meta Test Events confirmed browser/server deduplication with a shared event ID.
- The Meta CAPI test-event code was removed from Hostinger after validation. Keep it unset for normal production measurement.
- Do not store CAPI access tokens in source, Markdown files, chat, browser-visible code, or public environment variables. Generate and install a replacement token through Hostinger before revoking the old token.
- Commit `c53948b` reordered `/products` so the Product Range section appears above Bar Sizes. The production build passed before the primary-branch push.

## Pending approved release — 2026-08-22

- Removed incomplete `Product` JSON-LD from the seven quote-led steel-size routes (`8`, `10`, `12`, `16`, `20`, `25`, and `32` mm) without changing their metadata, FAQ schema, visible content, CTAs, or indexability.
- Redesigned the shared `PhysicalChemicalPropertiesTable` with ARS navy, white, light-surface, steel-grey, and restrained-red styling; all supplied headings, fields, units, standards, values, grade names, and footnotes remain unchanged.
- Shared table coverage now includes `/product-550d`, `/product-crs-550d`, and both grade variants on `/tmt-steel-bar-guide-engineers-architects`.
- Production build and route/asset QA pass. Targeted component lint passes; full lint remains blocked by four pre-existing errors in calculator and steel-price files outside this release.
- Commit and primary-repository push are approved. Deployment, fork synchronization, live Rich Results testing, and Search Console validation remain separate actions requiring confirmation.

## Project location and current checkpoint

```txt
/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
```

- Branch: `codex/metadata-seo`
- Current committed checkpoint: `79a3438`
- Latest production deployment: `dpl_E1w66Nt94QfCwQsRqnvPU7jMTmaN` — Ready
- Production preview alias: https://ars-green-steel.vercel.app/
- Latest commits:
  - `ec65569 Refresh Home Owners guide`
  - `9c22607 Add Embodied Carbon page`
  - `712f33b Add SGBC sustainability page`
  - `c74f77d feat: integrate vision and mission into about page`
  - `a80f4da feat: establish shared SEO and content migration foundation`
  - `e446c80 Use local banners for migrated blog articles`
- `a7f8375 Complete approved blog migration`

## Latest release — 2026-08-07

## Latest release — 2026-08-08

- Commit: `871462f` — `Refresh solution page assets and content`.
- Production deployment: `dpl_4sYbBETKM1uS632v8SMm8ymMSaDt` — Ready.
- Refreshed solution-page copy, layouts, and local imagery for Road Projects, Bridges & Flyovers, Institutional Projects, Contractors, Engineers & Architects, Dealers & Distributors, and Home Owners.
- Added local solution imagery and approved Binders/CRS brochure assets where available.
- TypeScript, route/asset QA, and production build passed; 172 local assets and 154 routes were checked.

## Previous release — 2026-08-07

- Commit: `79a3438` — `Standardize FAQ presentation`
- Preview was verified Ready before promotion; production deployment is Ready.
- Added the shared `FaqList` component for consistent, keyboard-accessible FAQ disclosures.
- Converted the current FAQ sections that had page-specific accordion styling, including product, project, sustainability, calculator, quality, audience, dealer, and informational experiences.
- Standardized the visible product ordering as: ARS CRS 550D, ARS 550D, ARS BINDERS.
- Reverted the recently added homepage CTA layer, preserving the original homepage CTA/navigation behavior requested by the product team.
- Existing calculator editing, image inline-serving, Binders inclusion, and duplicate-footer fixes remain part of the released codebase.

## Deployment and SEO safety

- Testing alias: https://ars-green-steel.vercel.app/
- Production domain: `https://arsgroup.in` — **not assigned or launch-approved**.
- Do not deploy, push, switch domains, or declare production-ready without explicit user approval.
- Preview/testing must remain `noindex, nofollow`.
- Production indexing is enabled by `NEXT_PUBLIC_INDEXING_ENABLED=true`; a non-Vercel production build also falls back to indexable because Hostinger may not expose its saved public flag during Next.js compilation.
- Vercel preview and local development remain `noindex, nofollow` by default. Set the explicit flag to `false` for any future non-Vercel staging build.
- Testing canonicals intentionally use the planned production domain while testing pages remain noindex.

## Current Release Completion

- Internal URL mapping release is complete: component/nav/CTA links now use canonical WordPress routes, 61 broken blog page links were repaired, and the redirected `/about` sitemap entry was removed.
- `next.config.ts` redirect sources remain unchanged for external legacy traffic.
- Metadata registry and original URL parity structure are live.
- Privacy Policy and Terms of Use use the shared LegalPage component and preserve approved legal copy.
- Dealer locator uses the latest region-wise workbook with 1,566 unique records.
- Public filter order is Search, States, Cities, Reset; city options depend on state selection.
- Dealer codes remain internal identifiers and are not displayed in public cards.
- Mobile navigation is viewport-anchored below the header while open.
- Duplicate React keys were removed from repeated Green Steel impact content.
- Release checks passed: TypeScript, npm run qa:routes, and npm run build.

## Completed work

### What Is Green Steel

- Implemented and approved for publishing at `/green-steel` from the controlling `Sustainability - What is Green Steel.docx` source.
- The source-led Banner, Green Steel Explained, Process, Why It Matters, Certifications, FAQs, and Final CTA are present in order. The page uses the shared interior-hero system, restrained ARS imagery, industrial iconography, and reduced-motion-safe transitions without altering locked copy.
- Page metadata, canonical, Open Graph/Twitter, preview-safe robots, sitemap inclusion, Sustainability navigation, internal links, responsive layouts, focus states, keyboard FAQ interaction, and overflow were reviewed.
- Follow-up evidence remains needed for source sustainability claims and the document-referenced Certifications table; these do not block the approved page publication. See `docs/content-migration/what-is-green-steel/qa-report.md`.

### Embodied Carbon

- Implemented the supplied authoritative `Sustainability  - Embodied Carbon.docx` as a new standalone public page at `/embodied-carbon`.
- Sustainability header/footer links now point to `/embodied-carbon`; the prior Green Steel embodied-carbon section and anchor were removed. `/ars-green-steel` was not changed. Sitemap includes the new route.
- The page preserves source order and publishable copy, including the emissions table, engineering comparison, calculation note, FAQs, and CTA labels. The comparison is semantic and readable without colour or motion.
- Missing citation, EPD, assessment-boundary, date, and underlying calculation evidence are explicitly recorded; no new evidence, asset, certificate, or download was created. See `docs/content-migration/embodied-carbon/implementation-qa-report.md`.

### Blog preservation migration

- 94 WordPress source records are registered.
- 88 migrated blog routes are approved with local featured banner assets.
- Six retired routes remain approved one-hop redirects; do not create pages for them.
- Audit baseline: 94 source posts, 88 routes, six redirects, zero unresolved content or SEO parity issues.
- The `/blog` archive and article template use registry-backed local banner images for visible images, Open Graph/Twitter, and Article schema.
- Do not change XML-backed blog titles, descriptions, canonicals, or approval status without a documented parity review.

### Shared migration foundation

- Reusable metadata helper: `src/lib/site-metadata.ts`.
- Site-wide production canonical, Open Graph, Twitter, default social image, and preview-safe robots handling are in place.
- `src/app/robots.ts` is the only robots.txt source. It allows crawling in every environment so preview crawlers can read `noindex`, and references the sitemap only when production indexing is explicitly enabled.
- `src/app/sitemap.ts` uses production URLs, includes 88 approved blog records, and excludes the six redirects.
- The home Green Steel logo points to its available local asset.
- Missing ARS leaflet actions are disabled rather than linking to a missing PDF.
- Internal route/local-asset validation: `scripts/check-internal-routes.mjs`.

### Vision & Mission

- Implemented as a standalone public page at `/vision-mission` from the supplied authoritative `ABout - Vision & Mission.docx`.
- Header and footer About navigation now point to `/vision-mission`; `/about#vision` content was removed to prevent conflicting duplicate copy. Sitemap includes the new route.
- All publishable source sections are implemented in source order: banner, purpose, vision, mission, values, ARS Promise, and closing CTA. Document author labels are not public copy.
- Metadata uses `createPageMetadata`; no new imagery or schema was added. Shared interior hero video is retained.
- Desktop/tablet/mobile, route checker, TypeScript, and build checks pass. Full lint remains blocked by pre-existing errors outside this work; manual keyboard traversal remains a final release check. See `docs/content-migration/vision-mission/implementation-qa-report.md`.

### ARS 550D product-page reconciliation

- Implemented the supplied ARS 550D source at `/products/ars-550d`; the controlling visible-copy source is `/Users/baburao/Downloads/ARS Web content/Products/Product - ARS 550D.docx`.
- The source-led route includes the banner, trust bar, overview, eight benefits, mechanical and chemical property tables, certification/download actions, CRS panel, seven FAQs, selling actions, and final CTA. Source-document instructions are not public copy.
- All supplied publishing copy is present. The unavailable brochure remains visibly unavailable; no brochure, current test report, certificate package, approval document, or size/availability document was created.
- Retained assets: `/ars-assets/TMT-Bars.png` and `/ars-assets/CRS.png`. Both are relevant legacy visuals but low-resolution; final crop/usage approval and higher-resolution product, bar-detail, manufacturing, and application imagery remain required.
- Validation completed: targeted ESLint, TypeScript no-emit, production build, `git diff --check`, and a 1280 px built-page browser check with no horizontal overflow. Final post-change tablet/mobile visual QA and manual keyboard interaction checks remain outstanding.
- Metadata uses `createPageMetadata`; product structured data is not implemented. Preview remains index-safe, not production-approved.
- Technical, safety, performance, savings, standards, and certification claims require ARS documentary approval. Local BIS renewal evidence expired on 2025-10-31, and current SGS/SERC product-specific evidence was not supplied.
- See `docs/content-migration/ars-550d/implementation-qa-report.md`. Commit status: pending page-specific commit and push on `homepage-figma-refresh`.

### Audience solution pages

- Engineers & Architects, Civil Contractors, and Dealers & Distributors are implemented as source-led audience pages at `/tmt-steel-bar-guide-engineers-architects`, `/tmt-steel-bar-guide-civil-contractors`, and `/steel-distributors-dealers`.
- Each page preserves its controlling document’s publishing copy and source order. Unavailable brochures, business-support destinations, and approval-dependent downloads are not implied or exposed.
- Their shared audience shell maintains semantic tables and native FAQ disclosures; route metadata remains canonical/social complete and preview-safe.
- Remaining release blockers are ARS evidence approval for claims/certifications, approved higher-resolution imagery and Binders assets, plus dedicated desktop/tablet/mobile and keyboard review. See the page QA reports under `docs/content-migration/engineers-architects/`, `docs/content-migration/civil-contractors/`, and `docs/content-migration/dealer-distributor/`.

### ARS Binders product page

- Implemented the supplied ARS Binders source at `/products/ars-binders`; the controlling visible-copy source is `/Users/baburao/Downloads/ARS Web content/Products/Products - Binders.docx`.
- The route includes the approved hero, trust bar, overview/technical overview, eight reasons, applications, eight benefits, seven FAQs, selling actions, and final CTA. The source’s brochure actions remain visibly unavailable because no approved brochure file exists.
- Binders is included in the Products footer and sitemap. Metadata uses `createPageMetadata`; Product structured data is not implemented.
- At the user's explicit request, Applications and Key Benefits use temporary generated placeholders under `public/ars-assets/placeholders/`. Replace them with approved ARS product or manufacturing imagery before production release.
- Final shared-server desktop/tablet/mobile and manual keyboard review, the approved brochure, approved imagery, and source-owner claim approval remain outstanding.
- See `docs/content-migration/binders/implementation-qa-report.md`.

## Current worktree — preserve and do not stage by default

The following are currently untracked research/handoff materials or package-manager files:

- `docs/content-migration/README.md`
- `docs/content-migration/road-projects/`
- `docs/content-migration/bridges-flyovers/`
- `docs/content-migration/institutional-projects/`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`

Do not use `git add .`. Do not commit either pnpm file. Never overwrite or delete unrelated working-tree changes.

## SGBC standalone page — implemented, verification pending

- Route: `/sgbc`; controlling source: `/Users/baburao/Downloads/ARS Web content/Sustainability /Sustainability - SGBC.docx`.
- The Sustainability mega-menu link uses the exact `SGBC` label and points to `/sgbc`; the sitemap now includes `/sgbc`.
- All nine source publishing sections are implemented in order. Authoring instructions are excluded from visible copy.
- Evidence used: the badge embedded in the supplied DOCX (`public/ars-assets/sgbc/sgbc-4-ticks-leader-badge.png`) and the existing local SGBC certificate preview/PDF under `public/ars-assets/certifications/`.
- Remaining blockers: ARS confirmation of rating currency, certificate scope/date, citations, and third-party badge/logo permissions; no approved logos exist for the three evidence cards. Build, TypeScript, route, focused lint, and source-render checks pass; desktop/tablet/mobile browser, keyboard, focus, and reduced-motion review remains pending because the workspace Playwright browser executable is unavailable.
- See `docs/content-migration/sgbc/implementation-qa-report.md` for the content-parity matrix and QA status.

## Next task: Road Projects reference template

First inspect all three approved handoffs:

1. `docs/content-migration/road-projects/implementation-handoff.md`
2. `docs/content-migration/bridges-flyovers/implementation-handoff.md`
3. `docs/content-migration/institutional-projects/implementation-handoff.md`

Then implement **Road Projects** at its existing public route as the reference shared project-page template. Do not implement Bridges & Flyovers or Institutional Projects in the same task unless explicitly requested.

Keep their existing routes, do not introduce blocked Binders, Leadership Messages, SGBC, Embodied Carbon, or Green Steel-consolidation work, and do not invent technical claims, assets, project proof, or certifications.

## Required reading before page work

1. `PROJECT_HANDOFF.md`
2. `docs/content-migration/README.md`
3. `docs/content-migration/implemented-pages-audit.md`
4. `docs/content-migration/master-migration-matrix.md`
5. `docs/content-migration/revised-implementation-sequence.md`
6. The applicable page handoff(s)
7. `docs/content-migration/shared-foundation/qa-report.md`
8. `DESIGN_RULES.md` and `DESIGN_SYSTEM.md`

## Verification standard

Before any feature commit:

- Start with `git status --short`, branch, and HEAD verification.
- Explicitly stage only reviewed files.
- Run targeted lint for changed files; document existing unrelated lint failures without cleaning them up opportunistically.
- Run `pnpm --ignore-workspace qa:routes`.
- Run `pnpm --ignore-workspace exec tsc --noEmit` and `pnpm --ignore-workspace build`.
- For blog changes, also run `pnpm --ignore-workspace audit:blog-migration`.
- Use the relevant migration QA report template and document responsive/browser limitations.
- Do not commit, push, or deploy unless the user explicitly authorises each action.

## ARS content progress

- Documents audited: 22/22
- Shared migration foundation: committed
- Content items implemented: 18/22
- Content items fully verified: 0/22
- Ready for development: Road Projects, Bridges & Flyovers, Institutional Projects
- Blocked items: 5
- Estimated content completion: 40–45%
