# Steel price today content restoration

Reviewed: 27 September 2026

Source: `https://olive-magpie-988393.hostingersite.com/tmt-steel-price-today`

Destination: `https://arsgroup.in/tmt-steel-price-today`

Source evidence: live legacy page, `src/data/legacy-pages.json`, and the page implementation before commit `3377b7c`
Reviewer: Codex, with final publication review by ARS pending

## What went wrong

The original steel-price page contained three contextual paragraphs about TMT price factors, a calculator-benefits section, and legacy FAQ topics. Commit `3377b7c` ("Redesign steel price today page", 20 September 2026) replaced the page implementation with a new price-focused layout. A comparison of `src/app/steel-price-today/page.tsx` immediately before and after that commit shows that the original paragraphs and several supporting sections were omitted. The later Tamil Nadu price and form-contrast update in `4c9839a` was not the commit that removed them.

The mistake was treating a page redesign as permission to replace migrated content. The implementation was reviewed for the new price experience without a complete source-to-destination content inventory. Functional, build, and visual checks alone did not catch the missing crawlable copy. The omission was identified after ARS compared the redesigned page with the legacy staging page. We cannot attribute any measured ranking change to this one omission without search-performance evidence, but losing relevant page content can affect search visibility.

Commit `54c2fa8` restored the legacy editorial content, benefit topics, and FAQ coverage alongside the current pricing experience. Commit `5cbd15f` then implemented the ARS-approved factor-card design and removed only the "Detailed Order Planning" section at ARS's explicit request. The old floating ₹70,000 claim and unsupported real-time/compliance implications were not reintroduced; those intentional edits are listed below.

For future changes to this route, use this inventory as the content baseline. Compare the legacy source, the last approved redesigned page, and the proposed version section by section. A layout, icon, form, or price update must not silently remove body copy, headings, FAQs, links, or structured-data coverage. Record any approved omission or factual correction before implementation, then compare the rendered page and SEO metadata again before release. The same check applies to migrated blog posts.

## Parity inventory

| Legacy element | Restored destination | Status |
|---|---|---|
| Original page title and the three steel-price context paragraphs | Same route, around the price lookup, in the pre-redesign numbered editorial pattern | Restored |
| Product, state, city, and seven-diameter order calculation | Quick price lookup remains here; the dedicated `/tmt-steel-calculator` page supports multi-diameter planning | Detailed on-page estimator removed at ARS request |
| Bundle count, rod count, weight, and GST-inclusive amount | Available on the dedicated TMT calculator page | Removed from this page at ARS request |
| Four calculator-benefit topics and designed card layout | Benefits section after the price tools | Restored; two claims updated for accuracy |
| Nine original steel-price FAQ topics | Visible FAQ list and matching FAQ structured data | Restored with date- and quotation-aware answers |
| Enquiry path | Quick price enquiry and Request Quote link | Preserved without another submission endpoint |
| Calculator and product links | Internal production paths | Restored or preserved |

The current approved pricing additions remain: the 7 October 2026 ARS workbook rates for four regions, two grades and seven diameters; per-kg and per-tonne tables; per-rod estimates; price update date; delivery exclusions; and the current price-enquiry form. The old floating ₹70,000 retail claim is deliberately excluded because it conflicts with later ARS rate updates.

## Pricing formula history

The previous formula, retained here for audit only, used the earlier `Price - Formula workbook (Regionwise Vs Dia Vs Product) - New.xlsx` inputs plus a later Tamil Nadu override. It is no longer used by the site:

```text
GST = 18%
Fe 550D basic price/tonne = 58050.84745762712
CRS Fe 550D basic price/tonne = 60169.491525423735
Region adjustment/tonne: Tamil Nadu 0; Andhra Pradesh -1200; Kerala -2450; Karnataka -1250
Diameter adjustment/tonne: 8 mm and 32 mm +847.5; 10–25 mm 0
Tamil Nadu override = 76000 - (58050.84745762712 × 1.18) = 7500/tonne including GST
Old GST-inclusive price/tonne = (basic + region adjustment + diameter adjustment) × 1.18
                                + (Tamil Nadu ? 7500 : 0)
```

ARS approved `Price - Formula workbook (Regionwise Vs  Dia Vs Product) - New Up - 07-Oct-26.xlsx` on 7 October 2026. Its `Price Chart Per Ton!A2:J12` has Fe 550D basic price/tonne `66525.42372881356`, CRS Fe 550D `67372.8813559322`, the same four regional adjustments, `+1271` for 8 mm and 32 mm, zero for 10–25 mm, and 18% GST. The new formula is `(basic + region adjustment + diameter adjustment) × 1.18` for every region. There is no separate Tamil Nadu override. Displayed whole-rupee per-tonne values follow the existing site rounding; the workbook's unrounded 8 mm and 32 mm Tamil Nadu Fe rate is ₹79,999.78/tonne.

## Intentional editorial changes

- On 11 November 2026, ARS approved a first-load Tamil Nadu ARS Fe 550D 12 mm reference-rate block directly below the existing H1, with links to the grade/size price table and the existing per-12-metre-rod section. The reference block reuses the workbook-backed price source and the existing automatic three-day Tamil Nadu date display; no selector, quotation, route, canonical, SEO title, H1, or pricing-formula behaviour changed.
- The same approval corrected only the existing “TMT steel prices” and “TMT steel bar price” link destinations in two migrated blog posts from `/our-network` to `/tmt-steel-price-today`. Their anchor text, surrounding article copy, routes, metadata, H1s, and other links remain unchanged. Both corrections are recorded as approved editorial improvements in `src/data/blog-migration-registry.json`.
- On 7 October 2026, ARS approved the new price workbook for all 56 region/grade/diameter combinations. The shared pricing formula and workbook source date changed; the site retains the same page structure and migrated editorial content. The old formula is recorded above.
- On 5 October 2026, ARS requested that “Price updated on” remain the label while its displayed Tamil Nadu date advances every three days to the previous day of each refresh (for example, on 10 October it shows 9 October). The schedule starts on 7 October; until then the displayed date remains 5 October. The date is calculated in India time at request time. This display cadence does not modify rates, which still require ARS confirmation.
- On 5 October 2026, ARS requested that the “2 ARS grades” price-coverage strip appear immediately after the hero, followed by the complete “Today's ARS TMT steel prices by bar size” section. Only their positions changed; the price lookup, migrated copy, supporting sections, links, FAQs, and metadata remain intact.
- On 5 October 2026, ARS requested that the displayed Tamil Nadu price-update date be changed from 24 September to 5 October 2026. No numeric rates, workbook formulas, other state prices, or page content changed with this date-only request.
- The older “real-time data” benefit now says “latest ARS reference rates published on this website” and identifies the update date. The site does not have a live market feed.
- The older “Compliance to Ministry of Steel Norms” benefit retains its topic heading, but its description no longer claims that a calculator itself certifies product or project compliance. Product specifications and certification must be checked separately.
- Original FAQ questions are retained. Their answers now point to dated reference rates and a confirmed ARS quotation rather than implying a guaranteed future rate, current national market price, or included freight.
- The original separate enquiry fields are represented by the current price enquiry and Request Quote form. Calculator data pre-fills the existing Request Quote form; no new lead-storage or Salesforce integration was added.
- The legacy staging-domain calculator link is an internal `/tmt-steel-calculator` link on the redesigned site.
- ARS later requested removal of the entire “Detailed Order Planning” section. The seven-size estimator and its quote handoff were removed from this page; the existing quick lookup, editorial content, benefits, FAQs, and dedicated calculator route remain.
- The “Understanding Steel Prices” section now pairs the original crawlable heading, paragraph, and calculator link with five informational factor cards from the ARS-supplied SVG set. ARS requested no background photograph. The icons use the site’s brand red; the standards card says “IS 1786:2008 standard” without implying that the local 2025 licence attachment proves current certification.

## Local verification completed

- For the 11 November first-load reference block, the displayed ₹78.50/kg and ₹78,500/tonne values were verified against the existing Tamil Nadu ARS Fe 550D 12 mm source row while retaining `getPriceUpdatedOnLabel()`. Both fragment links landed below the sticky header, both corrected blog links resolved to the canonical price URL, and the route, canonical, SEO title, and H1 remained unchanged. ESLint, TypeScript through the production build, route/asset QA, blog migration audit, `git diff --check`, and the production build passed. The 390 px mobile and 1440 px desktop layouts had no horizontal overflow; the mobile rate card kept the region, grade, size, rate, and update date together below the H1.
- For the 7 October workbook, all 56 site rates matched the workbook's cached GST-inclusive prices to floating-point tolerance. The Tamil Nadu 10 mm one-rod calculator total matched the workbook example; the new approval-date floor and three-day display cadence passed boundary checks. ESLint on the changed pricing source, route/asset QA, `git diff --check`, and the production build passed. No page component or migrated editorial copy changed.
- TypeScript, ESLint on changed source files, production build, route/asset QA, and `git diff --check` passed.
- Desktop and 390 px mobile layouts were reviewed locally. After the ARS-requested removal, the rendered page has no “Detailed Order Planning” section or horizontal overflow.
- The rendered page retains one H1, the existing title and description, canonical `https://arsgroup.in/tmt-steel-price-today`, and FAQ structured data for 14 visible questions (including the nine legacy topics).
- Before ARS requested removal, the detailed estimator and its Request Quote handoff were tested. They are no longer part of this page.
- After removal, TypeScript, ESLint, route/asset QA, and the production build passed. The original editorial copy, canonical URL, single H1, and dedicated calculator link remain in the rendered page.
- After the factor-card redesign, all five supplied SVGs loaded locally. The desktop panel and single-column mobile layout were reviewed; the same text, link, and canonical URL remain. TypeScript, ESLint, route/asset QA, and the production build passed again.

## Release checks remaining

- Check the rendered steel-price page and TMT calculator on desktop and mobile after deployment, including the new values, date label and price-enquiry summary. The browser automation session was blocked by its URL policy during this local review.
- After deployment, verify the production page and compare indexed/crawlable content with the legacy inventory. Content restoration alone cannot guarantee a ranking recovery.

No blog page was edited as part of the original restoration. The later 11 November 2026 approved internal-link corrections are recorded above and in the migration registry. The migration parity rule in `AGENTS.md` continues to apply to future page and blog edits.
