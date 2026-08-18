# Client Verification Checklist

This file tracks business-critical items that are prepared in the redesign but must be confirmed by ARS before final launch.

Media assets are intentionally excluded from this pass and will be handled later.

## Migrated Legacy Copy

| Area | Current Status | Client Action Needed | Launch Risk |
|---|---|---|---|
| Product claims for ARS 550D and ARS CRS 550D | Restored and rewritten from old-site context | Confirm grade claims, technical language, and final positioning | High |
| Rod-size pages from 8mm to 32mm | Restored as legacy routes with cleaned copy | Confirm size applications, use cases, and any weight/specification language | High |
| Quality and steel-testing content | Restored from original quality/testing pages | Confirm process descriptions, equipment references, and proof claims | High |
| Certifications and approvals | Restored as proof categories | Confirm exact active certifications, renewal status, and approved wording | High |
| Green Steel content | Restored as sustainability positioning | Confirm environmental claims and any compliance language | Medium |
| Blog and article copy | Restored into preserved blog routes | Confirm whether articles should remain as-is, be rewritten, or be archived | Medium |
| CSR, careers, team, and legacy company pages | Restored into modern route coverage | Confirm final HR/company wording before production | Medium |

## Contact Details

| Detail | Restored Value | Source Status | Client Action Needed |
|---|---|---|---|
| Mobile / sales number | +91 9710411111 | Found across old-site pages | Confirm this remains the primary sales number |
| Corporate office telephone | 044-4560 6700 | Restored from old contact page | Confirm active number and formatting |
| Corporate office fax | 044-4350 0597 | Restored from old contact page | Confirm whether fax should remain visible |
| Corporate office address | 2nd Floor, Building No./Flat No.: D-109, LBR Complex, Chinthamani, Chennai, Tamil Nadu, PIN Code: 600102 | Restored from old contact page | Confirm address accuracy and preferred display format |
| Steel plant address | B-1/S, Sipcot Industrial Complex, Gummidipoondi, Chennai - 601 201 | Restored from old contact page | Confirm address accuracy and preferred display format |
| Steel plant telephone | 044-2792 2552, 2846, 1749 | Restored from old contact page | Confirm which numbers are active |
| Email inbox | Protected in old site markup | Not visible in crawl | Provide final public email inbox |
| WhatsApp number | Not confirmed | Not finalized | Confirm whether mobile number should also be used for WhatsApp |

## Price, Calculator, and Dealer Data

| Item | Current Implementation | Client Action Needed | Destination |
|---|---|---|---|
| Steel price table | UI and rod-size rows are ready; live prices are not published | Provide current prices, update frequency, region logic, and disclaimer | `/steel-price-today` |
| Price update ownership | Not finalized | Confirm who updates pricing and how often | Admin/content process |
| Calculator inputs | Front-end fields are ready | Confirm required inputs and final labels | `/tmt-calculator` |
| Calculator formula | Not implemented to avoid invented engineering assumptions | Provide approved formula, units, assumptions, and disclaimer | `/tmt-calculator` |
| Calculator output | Placeholder output area is ready | Confirm output format: kg, tons, bundles, rods, or estimate range | `/tmt-calculator` |
| Dealer locator data | Updated region-wise workbook is integrated with 1,566 unique records; state filters city options | Confirm active dealer status, phone numbers, city naming, and product availability | `/our-network` |
| Dealer enquiry routing | Form path is ready | Confirm recipient, CRM/email endpoint, and internal owner | `/become-a-dealer` |
| Lead form submission | UI is ready but does not submit | Confirm final endpoint: email, CRM, WhatsApp, or API | `/request-quote`, `/contact`, `/become-a-dealer` |

## Recommended Approval Order

1. Confirm contact details and public email inbox.
2. Confirm lead form destination.
3. Confirm price update process.
4. Confirm TMT calculator formula and disclaimer.
5. Provide dealer list.
6. Review product, certification, and quality claims.
7. Review blog and legacy informational pages.
