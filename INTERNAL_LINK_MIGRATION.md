# ARS Internal Link Migration

## Release

- Date: 2026-08-05
- Commit: `faa072f`
- Production deployment: `dpl_3By4xPLn7zLdTKC4J7BSuksAkRxW`
- Status: Ready

## Changes applied

Internal component, navigation, and CTA links were rewritten to point directly to canonical WordPress routes:

| Previous path | Canonical path |
|---|---|
| `/products/ars-550d` | `/product-550d` |
| `/products/ars-crs-550d` | `/product-crs-550d` |
| `/products/ars-binders` | `/ars-binders` |
| `/about` | `/about-us` |
| `/certifications` | `/our-certification` |
| `/dealer-locator` | `/our-network` |
| `/become-a-dealer` | `/steel-distributors-dealers` |
| `/tmt-calculator` | `/tmt-steel-calculator` |
| `/steel-price-today` | `/tmt-steel-price-today` |

The migrated blog registry also had 61 broken page links repaired. These included product, quality, certification, contact, and buy `.html` links. Existing blog article `.html` URLs were preserved.

## Safety and verification

- `next.config.ts` redirect sources were not changed.
- The redirected `/about` entry was removed from `src/app/sitemap.ts`; `/about-us` remains listed.
- TypeScript passed.
- Internal route and asset QA passed: 154 routes checked.
- Production build passed.
- Live calculator routes, sitemap, favicon, and product logo returned HTTP 200.

## Source

This record follows `Interal urls mapping.zip`, specifically `ARS_Internal_Links_Fix_Brief.md` and `ARS_Internal_Link_Rewrite_Map.csv`.
