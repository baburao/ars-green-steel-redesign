# 12 mm rod weight calculation correction

## Scope and source

- Change ID: `COR01`; authorized on 2026-10-21 from `/Users/baburao/Downloads/ARS_Developer_Confirmed_Correction_v3.docx`.
- Public route: `https://arsgroup.in/blog/12mm-rod-weight-chart.html`.
- The SEO team's Revision 3 supersedes the earlier Revision 2 and week-one implementation requests. Only the calculation text below the existing TMT weight chart is approved for change. Earlier metadata, H1, introduction, price-page explanation, and contextual-link requests remain paused.
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
- [ ] Record the primary commit, ARS merge commit, Hostinger **Completed / Current** deployment reference, and live publication time in IST.
- [ ] Verify the live page shows the new text and retains the chart and surrounding content. Send before/after evidence and any unresolved issue to the ARS owner for the SEO team.

This record does not authorize the paused Revision 2 changes or a bulk metadata update.
