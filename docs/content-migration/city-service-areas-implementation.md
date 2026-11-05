# City service-area pages — implementation and launch audit

## Scope and approval

ARS requested eight city landing pages for Coimbatore, Madurai, Salem, Tiruppur, Vellore, Kochi / Ernakulam, Puducherry, and Nellore. The reviewed implementation scope adds a ninth canonical URL, `/service-areas`, as the user-facing directory and internal-linking hub.

Development proceeded after the client accepted the revised recommendation on 5 November 2026. The implementation intentionally corrects the original brief where it conflicted with the current website or relied on unverified commercial claims.

## Canonical route matrix

| Purpose | Canonical route |
|---|---|
| Service-area hub | `/service-areas` |
| Coimbatore | `/tmt-bars-coimbatore` |
| Madurai | `/tmt-bars-madurai` |
| Salem | `/tmt-bars-salem` |
| Tiruppur | `/tmt-bars-tiruppur` |
| Vellore | `/tmt-bars-vellore` |
| Kochi / Ernakulam | `/tmt-bars-kochi` |
| Puducherry / Pondicherry | `/tmt-bars-puducherry` |
| Nellore | `/tmt-bars-nellore` |

The App Router and metadata use the site's established no-trailing-slash convention. No alternate Kochi / Ernakulam or Puducherry / Pondicherry routes are created.

## Content and UX decisions

- One typed city-content configuration holds metadata, the H1, hero copy, two-part introduction, local context, benefits, applications, support copy, four FAQs, and related-city links.
- Eight explicit route files render one reusable, ARS-branded `CityServiceAreaPage` template.
- Product names and approved general applications remain consistent. Intros, local context, benefits, project examples, FAQs, and support guidance are unique to each city.
- The pages do not state that ARS has a city office, warehouse, guaranteed dealer, live stock, guaranteed delivery, fixed pricing, or automatic small- or bulk-order availability.
- Kochi and Ernakulam share one canonical page. Puducherry is the canonical spelling, with Pondicherry included naturally in visible copy.
- Existing product, dealer, quote, and contact routes are used: `/product-crs-550d`, `/product-550d`, `/ars-binders`, `/our-network`, `/request-quote`, and `/contact`.

## Enquiry flow

The existing `QuoteRequestForm` is reused. City pages prefill the approved state or Union Territory and city value; bar diameters, quantity, site locality, and project-stage details remain in the existing requirement field.

Puducherry is added to the shared state / Union Territory allowlist used by the form and server validation. Each city route is added to the server-owned source-page allowlist so Google Sheets and Meta lead attribution retain the originating city page. No duplicate form or unsupported backend field is introduced.

## Structured data

Each city page emits:

- `Organization`, using verified website identity, logo, contact, address, and social data;
- `WebPage`;
- `BreadcrumbList`; and
- `FAQPage`, generated directly from the same records rendered by `FaqList`.

The service-area hub emits `Organization`, `WebPage`, `BreadcrumbList`, and `ItemList`.

City pages deliberately omit `Product`, `Offer`, price, price currency, availability, reviews, aggregate ratings, and `LocalBusiness`. The page is a multi-product city enquiry pathway, not a canonical single-product page, and no city-level commercial facts have been supplied for those properties.

## Discoverability

- The hub and eight city paths are included in `sitemap.ts`.
- The shared breadcrumb registry contains the hub and all city routes.
- The global footer contains one Service Areas hub link under Resources. Individual city links remain on the hub and are intentionally not exposed as a large global-footer group.
- Each city page links to canonical product pages, the dealer locator, its embedded enquiry form, the contact pathway, the service-area hub, and three related city pages.

## Cannibalisation review before publication

The new routes target city-level discovery and enquiry intent. Existing state-level ARS routes must retain broader state intent:

- Tamil Nadu pages: state-level availability and buying guidance;
- Kerala page: state-level availability and buying guidance;
- Andhra Pradesh page: state-level availability and buying guidance;
- Chennai page: Chennai-specific intent only;
- new pages: the named city and its project-location enquiry context.

Do not copy city H1s, titles, or city-specific FAQ wording onto state pages. Before production publication, compare Search Console query ownership and internal anchors for the state and city route groups. Consolidate or redirect only with a separate approved migration decision; this implementation does not alter existing location URLs.

## Implementation verification — 5 November 2026

- Next.js production build passed and statically generated the hub and all eight city routes.
- TypeScript and targeted ESLint checks passed with no errors or warnings in the implementation files.
- Full-project ESLint completed with zero errors; its fourteen warnings are pre-existing and outside this scope.
- The internal route and asset checker passed: 34 internal hrefs, 273 local assets, and 171 routes.
- All nine pages returned HTTP 200, one H1, unique title and description lengths, self-referencing canonical and Open Graph URLs, and a large-image Twitter card.
- All city pages emitted four FAQ records that matched the server-rendered visible questions and answers. No Product, Offer, LocalBusiness, Review, or AggregateRating node was present.
- The sitemap contained every new canonical URL exactly once. The hub linked to all eight cities, while the footer exposed only the hub link to keep the global navigation concise.
- All nine pages were tested at a 390 px viewport with no horizontal overflow. Representative desktop and mobile visual reviews covered the hub, city hero, local content, product section, enquiry form, and prefilled Puducherry Union Territory value.
- The browser reported no console errors. Server validation accepted the approved Puducherry city source through a non-delivering honeypot request and rejected an unapproved source path.

## Required launch checks

- Confirm one visible H1 and logical heading order on every route.
- Confirm unique titles and descriptions, self-referencing canonicals, Open Graph data, and Twitter cards.
- Confirm visible FAQ text exactly matches `FAQPage` JSON-LD.
- Validate JSON-LD and ensure no Product, Offer, review, rating, or LocalBusiness nodes are introduced.
- Verify sitemap uniqueness, footer links, breadcrumbs, product links, related-city links, and enquiry-source attribution.
- Review desktop, tablet, and mobile layouts, keyboard focus, form errors, and reduced-motion behaviour.
- Confirm with ARS before replacing conservative language with any dealer, availability, delivery, stock, or technical-performance statement.
