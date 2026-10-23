# SEO recovery tickets COR01–COR05

Source: `ARS_Confirmed_Recovery_Developer_Tickets.docx`, received 23 October 2026. This consolidated packet supersedes the earlier Revision 2 and Revision 3 scope. It authorizes only the five specified corrections. The legacy extraction in `src/data/legacy-pages.json` remains unchanged as migration evidence.

| Ticket | Source status | Implemented local result | Publication status |
| --- | --- | --- | --- |
| COR01 | Already present on the live 12 mm article from the 21 October release | No new edit. The two approved kg/m and 12 m paragraphs and original table remain intact. | Previously published; verified unchanged 23 October 2026. |
| COR02 | The weight guide displayed `7.527 × 7 = 52.692 kg`, which is false using its rounded per-bar display. | Replaced only that equation with `0.617 kg/m × 12.2 m × 7 = 52.6918 kg, or approximately 52.692 kg` and added the approved separate-rounding explanation. The chart and following nominal-bundle sentence remain. | Published and verified 23 October 2026. |
| COR03 | The GST article's contextual link targeted `/about-us.html#aboutTheGroup`. | Changed only its href to `https://arsgroup.in/about-us`. Anchor words and surrounding article copy remain. | Published and verified 23 October 2026. |
| COR04 | The first steel-price explanatory paragraph linked `steel price today` to the calculator. | Removed only that inline anchor. The words remain plain text; the separate Calculate steel action remains. | Published and verified 23 October 2026. |
| COR05 | No contextual link appeared between the 12 mm weight table and the COR01 paragraphs. | Added the approved sentence and a normal anchor on `complete TMT steel bar weight chart` to the broader guide, once, directly below the table. | Published and verified 23 October 2026. |

## Content and SEO guardrails

The source diff must not change approved price data or the GST basis, calculators, article tables, existing headings, metadata, canonical URLs, robots policy, tracking, or unrelated copy. The COR01 calculation is already published and must not be re-applied. The GST article's old href included a fragment absent from the packet's abbreviated destination; the approved replacement is the live About route without a fragment. No redirect from the old route is assigned.

## Local verification

- `npm run audit:blog-migration`: passed with zero issues.
- `npm run qa:routes`: passed.
- `npx tsc --noEmit`: passed.
- Targeted ESLint on the two changed TSX files: passed.
- `npm run build`: passed.
- `git diff --check`: passed.
- Desktop browser review: the 12 mm article retains its original table and COR01 calculation with one COR05 link directly between them; the weight guide shows the corrected equation and explanatory paragraph in its existing card; the GST article's anchor points to `/about-us`; the steel-price paragraph shows the target phrase as plain text.
- Mobile browser review at 390 px: the added cross-link sits below the unchanged 12 mm table and wraps clearly; the corrected bundle equation fits within its existing card; the GST anchor resolves to `/about-us`; the steel-price paragraph remains readable. The pre-existing 12 mm table has narrow cells at this width, but this ticket does not alter it.
- Before/after content audit: only the approved COR02–COR05 text or href changed; COR01, tables, metadata and price logic stayed intact.

## Production release evidence

- Development commit: `110d8ab435b01bba6760f2662534f4a4f4778b68` on `baburao/ars-green-steel-redesign:main`.
- Production review: `Arsgroup476/ars-green-steel` pull request #4, merged by the ARS account on 23 October 2026 at 15:48 IST. Production commit: `4604bcb993feaf9a2e2a936de86b7f0ac9dddb15`.
- Hostinger deployment `01a16844-fcbb-73d5-aab0-e2bb075ef5a4` built from `Arsgroup476/ars-green-steel:main` at `4604bcb`, marked **Completed / Current**, deployed 23 October 2026 at 15:50 IST.
- [12 mm rod weight article](https://arsgroup.in/blog/12mm-rod-weight-chart.html): original table and COR01 paragraphs remain; the single COR05 contextual link appears immediately below the table and targets the broader weight guide.
- [TMT bar weight guide](https://arsgroup.in/blog/tmt-steel-bar-weight.html): COR02 displays `0.617 kg/m × 12.2 m × 7 = 52.6918 kg, or approximately 52.692 kg`, with the separate-rounding explanation; the surrounding chart and section remain.
- [GST article](https://arsgroup.in/blog/effects-of-gst-on-the-steel-industries-in-india.html): the existing `manufacturing of Iron and Steel` link resolves to `/about-us` (COR03).
- [Steel price page](https://arsgroup.in/steel-price-today): the first explanatory paragraph retains `steel price today` as plain text; the separate `Calculate steel` action still links to the calculator (COR04).
