# SEO recovery tickets COR01–COR05

Source: `ARS_Confirmed_Recovery_Developer_Tickets.docx`, received 23 October 2026. This consolidated packet supersedes the earlier Revision 2 and Revision 3 scope. It authorizes only the five specified corrections. The legacy extraction in `src/data/legacy-pages.json` remains unchanged as migration evidence.

| Ticket | Source status | Implemented local result | Publication status |
| --- | --- | --- | --- |
| COR01 | Already present on the live 12 mm article from the 21 October release | No new edit. The two approved kg/m and 12 m paragraphs and original table remain intact. | Previously published; verify unchanged after this release. |
| COR02 | The weight guide displayed `7.527 × 7 = 52.692 kg`, which is false using its rounded per-bar display. | Replaced only that equation with `0.617 kg/m × 12.2 m × 7 = 52.6918 kg, or approximately 52.692 kg` and added the approved separate-rounding explanation. The chart and following nominal-bundle sentence remain. | Pending release. |
| COR03 | The GST article's contextual link targeted `/about-us.html#aboutTheGroup`. | Changed only its href to `https://arsgroup.in/about-us`. Anchor words and surrounding article copy remain. | Pending release. |
| COR04 | The first steel-price explanatory paragraph linked `steel price today` to the calculator. | Removed only that inline anchor. The words remain plain text; the separate Calculate steel action remains. | Pending release. |
| COR05 | No contextual link appeared between the 12 mm weight table and the COR01 paragraphs. | Added the approved sentence and a normal anchor on `complete TMT steel bar weight chart` to the broader guide, once, directly below the table. | Pending release. |

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

## Release evidence to complete

Record the development and production commit IDs, successful Hostinger **Completed / Current** deployment reference, live publication date/time in IST, and public-page checks for COR01–COR05. A Git push is not publication evidence. Do not claim the four pending changes are live until those checks pass.
