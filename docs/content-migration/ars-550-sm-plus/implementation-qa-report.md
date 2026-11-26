# ARS 550 SM+ product page revision

The 23 November 2026 review covers `/product-550-sm-plus`. The comparison baseline is staging commit `ebb8c67` and the original SEO brief, `ARS 550 SM+ Product Page.docx`. The client feedback in `ARS 550D SM+.docx` and the subsequent approval cover the changes below.

## Approved changes

- The product overview, enquiry panel and Product structured data list 8 mm, 10 mm, 12 mm and 16 mm. The approval resolves the 19 mm entry in the feedback note.
- The product page, catalogue cards, technical table, FAQs and structured data use “above 1.15” for the ARS TS/YS ratio. The Fe 550 comparison value of 1.06 remains identified as a minimum.
- The meta description uses “a TS/YS ratio above 1.15” in place of “a 1.15+ TS/YS ratio”. The product title and canonical identify the approved ARS 550 SM+ TMT Bars page.
- The hero places the original product logo from the supplied brochure before the H1. The desktop artwork is framed to keep its embedded badge out of view, and the mobile hero uses the same standalone logo.
- The product's standards section references IS 1786:2008 and retains the brochure download. The client requested BIS only. The available ARS renewal shows validity through 31 October 2025, so the page describes the standard. Any grade-specific certification claim requires current documentation for this product. [BIS product manual](https://bis.gov.in/wp-content/uploads/2020/07/PM-IS-1786-JULY-2020-Revised-4.pdf), [ARS renewal PDF](https://arsgroup.in/ars-assets/certifications/1786-renewal-certificate-1.pdf)

The existing benefits, applications, properties, FAQs, brochure and contact links were checked against the staging baseline. The approved brochure PDF still uses the original ratio notation in its comparison and specifications tables.

## Local verification

- Reviewed the hero and standards panel at desktop, tablet and mobile widths. Checked the product logo, quote and brochure actions, and horizontal overflow at 1440, 820, 390 and 320 px.
- Checked default-motion reveals and reduced-motion visibility. The shared product reveals now start with matching server and browser markup. A media rule keeps product content visible for visitors who prefer reduced motion.
- Verified the title, description, social tags, canonical, preview robots directives and single sitemap entry. All six displayed questions and answers matched the FAQPage data. The Product data matched the displayed sizes and ratio.
- Opened the quote enquiry from the hero, checked keyboard focus on an invalid submission, and exercised the existing success redirect with a mocked local response.
- The production build, lint on changed code, route and asset checks, and diff whitespace check passed.

## November 25 production release

[PR #8](https://github.com/Arsgroup476/ars-green-steel/pull/8) brought the approved Vercel snapshot into ARS `main` as `ae477269`. Hostinger lists that deployment as Current and Completed at 13:03 IST on 25 November 2026. The public product page and brochure returned HTTP 200. The product title, canonical, ratio wording and `index, follow` directive were verified. [Hostinger deployment record](https://hpanel.hostinger.com/websites/arsgroup.in/node/deployments/01a2119c-a21b-71a9-ac26-c8996ad1cba9/details)

## November 26 thumbnail and brochure follow-up

- The homepage product card and product catalogue use the approved ARS 550 SM+ logo for the thumbnail. The homepage card adds a Download brochure link to the approved PDF.
- The homepage card and all three product-page brochure links open the PDF viewer in a new tab. The link names announce the new tab to screen readers.
- The local production build, targeted lint, route and asset checks, and desktop, tablet and mobile review passed. The homepage card and hero links each opened a separate tab with the PDF.
