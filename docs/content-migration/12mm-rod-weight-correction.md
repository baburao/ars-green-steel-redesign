# 12 mm rod weight calculation correction

## Scope and source

- Change ID: `COR01`; authorized on 2026-10-21 from `/Users/baburao/Downloads/ARS_Developer_Confirmed_Correction_v3.docx`.
- Public route: `https://arsgroup.in/blog/12mm-rod-weight-chart.html`.
- At the time of the 21 October COR01 release, Revision 3 superseded the earlier Revision 2 and week-one requests and approved only the calculation text below the chart. The later consolidated packet authorizes the separate COR02–COR05 corrections; broad metadata, H1, and introduction rewrites remain outside the work order.
- The article's published body is sourced from its `fullContentHtml` entry in `src/data/blog-migration-registry.json`. The original WordPress extraction in `src/data/legacy-pages.json` remains unchanged as migration evidence.

## Before and approved after

The previous block began “The formula to calculate the 12 mm steel rod weight” and ended “You can employ this formula for calculating the weight of bars of various diameters.” It described unit weight as kilograms per square metre, equated the formula estimate with the table's nominal `0.888` value, and claimed a general `±7%` tolerance.

The approved replacement is exactly two paragraphs:

> Rod unit weight is expressed in kilograms per metre (kg/m). The estimating formula is D² ÷ 162 kg/m, where D is the nominal diameter in millimetres. The table above lists 0.888 kg/m as the published nominal unit weight for a 12 mm bar.

> Using that published nominal value, a 12 m bar weighs 0.888 × 12 = 10.656 kg, or approximately 10.66 kg. The formula gives approximately 0.889 kg/m when rounded to three decimal places; the worked example uses the table’s nominal value. Confirm supplied bar length, delivery weight and applicable tolerances against ARS order documents and product specifications.

The existing chart, other article content, URL, title, description, H1, canonical, indexing policy, links, layout, quote paths, calculator, pricing source, and product data remain unchanged. The registry now marks this limited content difference as an approved editorial improvement; it does not overwrite the legacy source snapshot.

## Verification and release record

- [x] Check the source diff contains only this article's content and approval record, plus task documentation.
- [x] Verify `0.888 × 12 = 10.656`, `144 ÷ 162` rounds to `0.889`, and no square-metre unit or blanket `7%` claim remains in the replacement block.
- [x] Confirm the chart, metadata, H1, canonical, links, indexing and enquiry paths retain their previous values in source and the local rendered page.
- [x] Run the blog migration audit, route check, TypeScript, lint, and a production build; review the rendered article on desktop.
- [x] Review the rendered article at mobile (427 px) and tablet (768 px) widths; the two replacement paragraphs remain separate and readable beneath the unchanged chart.
- [x] Record the primary commit, ARS merge commit, Hostinger **Completed / Current** deployment reference, and live publication time in IST.
- [x] Verify the live page shows the new text and retains the chart and surrounding content. Share this before/after record and [live screenshot](evidence/ars-cor01-live-2026-10-21.png) with the ARS owner for the SEO team. No issue was found in the corrected block.

Release evidence (21 October 2026, IST):

- Development `main` commit: [`62a9a7c`](https://github.com/baburao/ars-green-steel-redesign/commit/62a9a7cc8c41d7360eea87f5c5686c4de4f2f3f9). The focused production branch was rebased on ARS `main` as `0c143d1` to exclude an unrelated prior build-setting commit.
- ARS production: [PR #2](https://github.com/Arsgroup476/ars-green-steel/pull/2), rebased and merged as [`02a4d82`](https://github.com/Arsgroup476/ars-green-steel/commit/02a4d82e886367eb6a593ce8c2ef11bdea668758) at 11:54 IST.
- Hostinger: [deployment `01a15d22-683c-7059-a385-d9a89f709c1d`](https://hpanel.hostinger.com/websites/arsgroup.in/node/deployments/01a15d22-683c-7059-a385-d9a89f709c1d/details) became **Completed / Current** at 11:57 IST, publishing `02a4d82` from `Arsgroup476/ars-green-steel:main`.
- Live check: at approximately 11:58 IST, the public route showed both approved paragraphs directly below the unchanged chart. The 12 mm row still reads `0.844 / 0.888 / 0.932`; the article H1, route, surrounding content, and next-step links remain present. The old square-metre and blanket `±7%` wording was absent.

This record covered only the 21 October COR01 release. The later consolidated COR01–COR05 packet authorizes four additional limited corrections, recorded in [the SEO recovery ticket record](seo-recovery-tickets-2026-10-23.md). It does not authorize a bulk metadata update.
