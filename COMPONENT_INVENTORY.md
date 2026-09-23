# ARS Reusable Component Inventory

This is the shared component registry for Codex, Claude, and future contributors.

Before creating a new reusable component, check this file and `DESIGN_SYSTEM.md`.

After creating or materially changing a reusable component, update this file in the same commit.

## Component Governance Rules

- Reuse existing components before creating a new pattern.
- Extend a component with a clear variant only when the new use case belongs to the same pattern.
- Do not create parallel components for the same job.
- Do not hard-code brand colors if a token or component variant exists.
- Do not manually recreate `SectionKicker`; use the component.
- Keep reusable components small, documented by purpose, and safe across pages.

## Active Reusable Components

| Component | File | Purpose | Variants / Notes | Current Usage |
|---|---|---|---|---|
| `YoutubeFilm` | `src/components/youtube-film.tsx` | Click-to-load YouTube film with a responsive poster | Shared/Codex-owned; accepts video ID and descriptive title, loads privacy-enhanced iframe only on activation, moves focus to player, and avoids autoplay. Consumers provide a persistent YouTube fallback link. Reuse for future campaign films. | `/tv-commercials` |
| `SiteHeader` | `src/components/site-header.tsx` | Global header, navigation, mega menu, and primary enquiry actions | Shared across public pages; semantic direct-route links and menu-trigger buttons use pointer affordance, keyboard focus, route-aware active states, and the animated brand-red underline; includes the 76 px navigation row, 55 px logo, and home icon | Homepage and pages |
| `SiteFooter` | `src/components/site-footer.tsx` | Global footer with ARS trust, links, and contact pathways | Contact panel includes Customer Care, quote, dealer, and direct contact actions; rendered once by `src/app/layout.tsx`; page components and `ContactCta` must not render it | All routes |
| `AnalyticsInteractions` | `src/components/analytics-interactions.tsx` | Shared privacy-minimized telephone and WhatsApp click measurement plus Meta Pixel client-side PageView tracking | Uses delegated click listeners for `phone_click` and `whatsapp_click`; observes App Router pathname changes to send one Meta `PageView` per client-side route transition while the root script owns the initial PageView; sends source context without raw telephone URLs or visitor-entered data | Root layout across all routes |
| `FloatingWhatsAppButton` | `src/components/floating-whatsapp-button.tsx` | Global accessible WhatsApp support shortcut | Uses the React Icons `FaWhatsapp` brand mark, verified sales mobile number, prefilled project-support message, mobile safe-area spacing, a desktop tooltip, and obstruction detection so it does not cover footer, menu, modal, or mobile lead-form controls | Root layout across all public routes |
| `SectionKicker` | `src/components/section-kicker.tsx` | Standard section label with horizontal rule | `brand`, `light`, `green`; optional center/end-line mode | Homepage and page sections |
| `Breadcrumbs` / `BreadcrumbBar` | `src/components/breadcrumbs.tsx` | Accessible route-aware orientation trail and top-of-hero bar for public interior pages | Client-rendered within `SiteHeader`; uses canonical route labels, linked ancestors, decorative chevrons, a non-linked current page, dark/light tones, and mobile-safe label widths | All public interior routes except home, 404, thank-you, and APIs |
| `MotionSection` | `src/components/motion-section.tsx` | Scroll reveal wrapper for editorial sections | Uses no reveal transition when the visitor prefers reduced motion; use only when motion supports comprehension | Homepage and interior sections |
| `DistributorPageReveal` | `src/components/distributor-page-motion.tsx` | Page-specific layered editorial reveal wrapper | One-time opacity and 14–22 px upward reveal; reduced-motion and no-JavaScript states remain fully visible | `/become-a-steel-distributor` via `/become-a-dealer` |
| `ProductDetailSectionMotion` / `ProductDetailReveal` | `src/components/product-detail-motion.tsx` | Opt-in layered editorial reveal for ARS product-detail pages | One-time opacity/14–22px reveals; reduced-motion and no-JavaScript fallbacks remain fully visible | `/product-550d`, `/product-crs-550d`, `/ars-binders` |
| `HomeHero` | `src/components/home-hero.tsx` | Homepage hero with full-bleed video, animated word, and primary CTAs | Uses the shared 560px mobile, 600px tablet, and 680px desktop page-hero height baseline; simplified single-column composition; Codex-owned, do not reuse blindly for inner pages | Homepage |
| `ResponsiveHeroImage` | `src/components/responsive-hero-image.tsx` | Responsive above-the-fold image delivery for performance-sensitive editorial heroes | Shared/Codex-owned; serves pre-generated WebP mobile and desktop sources through native picture selection, keeps high fetch priority, and avoids the runtime image optimizer required by the current Hostinger direct-asset policy | Blog articles, product, rod-size, corporate, dealer, sustainability, and quality heroes |
| `AudienceJourneySection` | `src/components/audience-journey-section.tsx` | Four image-led audience cards for homepage journey routing | Square image-overlay cards with red/blue hover line, lift, and shadow treatment | Homepage Section 2 |
| `AudienceGuidePage` | `src/components/homeowners-guide-page.tsx` | Shared audience-page shell and source-led guide content | Contractor route uses an exact-copy, ordered contractor guide with semantic FAQs; homeowner and engineer TDS actions route to the dedicated privacy-safe Steel Testing form, and the homeowner closing enquiry delegates to the production quote flow | Audience solution routes |
| `AnimatedHeroWord` | `src/components/animated-hero-word.tsx` | Legacy rotating hero word helper | Uses brand red token | Available where needed |
| `AboutJourneyTimeline` | `src/components/about-journey-timeline.tsx` | Scroll-led visual timeline for ARS company milestones | Desktop uses a reduced-motion-safe horizontal rail; tablet and mobile use a semantic vertical timeline | `/about` |
| `ContactCta` | `src/components/contact-cta.tsx` | Reusable lead-generation CTA band rendered immediately before the global footer | Supports custom eyebrow, headline, body, primary CTA, an optional secondary CTA, optional page-specific primary-action colour treatment, and a `solid` tone for pages that require a no-gradient surface | Page shells and homepage ending |
| `SteelTestingProof` | `src/components/steel-testing-proof.tsx` | Shared engineering-proof section with local ARS test recordings | Native HTML5 videos with controls, metadata-only preload, responsive aspect ratio, and accessible test labels | All steel-size product pages |
| `LeadForm` | `src/components/lead-form.tsx` | Compatibility wrapper for the production quote enquiry flow | Every consumer delegates to `QuoteRequestForm`; there is no presentation-only or non-submitting fallback | Request Quote and homeowner guide closing enquiry |
| `QuoteRequestForm` | `src/components/quote-request-form.tsx` | Accessible Request Quote lead form with required contact, location, project, and product fields | Mobile-safe full-width controls and compact card padding; requirement is optional; submits to the server-owned quote-request endpoint and redirects confirmed appends to the shared Thank You page; validation, honeypot, duplicate, and provider failures remain inline | `/request-quote` and the homeowner guide closing enquiry |
| `ContactEnquiryForm` | `src/components/contact-enquiry-form.tsx` | Accessible Contact page enquiry form with full name, Indian mobile, email, enquiry type, city/location, and optional requirement | Mobile-safe full-width controls and compact card padding; submits through the server-owned Contact endpoint with strict client/server validation, source/timestamp tracking, honeypot and duplicate protection; confirmed appends redirect to the shared Thank You page while failures remain inline | `/contact` |
| `DistributorEnquiryForm` | `src/components/distributor-enquiry-form.tsx` | Accessible distributor/dealer partnership form with required contact, state, district, pincode, user type, enquiry type, and enquiry-detail fields | Mobile-safe full-width controls and compact panel padding; pincode input matches the six-digit validation; submits through the server-owned distributor endpoint with strict client/server validation, honeypot and duplicate protection | `/become-a-steel-distributor` via the shared `/become-a-dealer` implementation |
| `ProductLeadCaptureForm` | `src/components/product-lead-capture-form.tsx` | Product-specific quote capture form with trust proof, accessible validation, hidden product/source fields, and honeypot protection | Mobile-safe full-width controls and compact panel padding; required fields are full name, Indian mobile, email, approved state, and city/project location; requirement is optional; submits through the server-owned product-enquiry endpoint and redirects confirmed appends to the shared Thank You page | `/product-550d`, `/product-crs-550d`, `/ars-binders` |
| `SteelTestingEnquiryForm` | `src/components/steel-testing-enquiry-form.tsx` | Accessible steel and TDS testing enquiry form with project and location context | Mobile-safe full-width controls; clarifies Area / Locality without changing the server payload; submits through the server-owned steel-testing endpoint and redirects confirmed appends to the shared Thank You page | `/steel-testing` |
| `PageShell` | `src/components/page-sections.tsx` | Shared page wrapper with header, hero, content, and CTA | For structured interior pages | Multiple pages |
| `ProjectTypePage` | `src/components/project-type-page.tsx` | Shared project-category page shell | Optional `projectMotion` enables one-time project section reveals; default is static and unchanged | Metro opts in; other consumers remain unchanged |
| `PageHero` | `src/components/page-sections.tsx` | Shared editorial interior-page hero with eyebrow, H1, paragraph, and actions | Uses the `/about-us` reference composition with a responsive, localized navy text-protection gradient that exposes more industrial imagery on desktop while retaining stronger mobile contrast; supports video/image backgrounds and an optional accent title line | Multiple pages |
| `SectionIntro` | `src/components/page-sections.tsx` | Standard kicker, H2, body intro block | Uses `SectionKicker` internally | Multiple pages |
| `CardGrid` | `src/components/page-sections.tsx` | Reusable card grid for proof, product, service, and content cards | 2, 3, or 4 column modes | Multiple pages |
| `ContentBand` | `src/components/page-sections.tsx` | Image/text editorial content band | Use for page proof sections | Multiple pages |
| `ProofMetrics` | `src/components/page-sections.tsx` | Reusable metrics/proof row | Use for trust and capability proof | Multiple pages |
| `DealerLocatorExperience` | `src/components/dealer-locator-experience.tsx` | Searchable dealer discovery experience powered by supplied ARS dealer data | Results remain hidden until the visitor enters a query or selects a state or city; reset returns to the prompt. Popular city shortcuts, load-more results, call and map actions remain; dealer codes stay internal only | `/dealer-locator` |
| `BlogArchive` | `src/components/blog-archive.tsx` | Native blog discovery experience with search, topic filters, article cards, and progressive loading | Client-side filtering over static repository content; no CMS dependency | `/blog` |
| `CareerOpenings` | `src/components/career-openings.tsx` | Static reference grid for older ARS career-role profiles | Removes unnecessary search and department filters; presents closed profiles with a subdued status while preserving full role-detail links | Retained for future reuse; not currently rendered |
| `BlogArticleTemplate` | `src/components/blog-article-template.tsx` | Shared long-form article shell for migrated ARS blog posts | Uses a wide two-column desktop reading layout with a 280px white, numbered sticky page-index card, a native mobile “On this page” disclosure, accurate rendered navigation counts, and server-rendered unique fragment targets. Supports approved route-specific structured article bodies while preserving the default registry-backed HTML renderer. Includes the article-owned quick takeaway, category-specific post-reading CTA, related articles, and shared final contact band | All `/blog/[slug]` articles; structured weight-guide treatment on `/blog/tmt-steel-bar-weight.html` |
| `CertificationDocumentPreview` | `src/components/certification-document-preview.tsx` | Accessible image enlargement for available certificate and approval scans | Native dialog, Escape/close handling, scroll-safe preview, and focus restoration; accepts `title` and `image` props | `/certifications` |
| `EngineersArchitectsGuideContent` | `src/components/homeowners-guide-page.tsx` | Source-led technical guide content for the Engineers & Architects audience route | Page-specific composition with locked-copy cards, product comparison, semantic technical tables, certification cards, support pathway, and native FAQ disclosures | `/tmt-steel-bar-guide-engineers-architects` |
| `DealerDistributorPage` | `src/components/dealer-distributor-page.tsx` | Source-led commercial partnership page for Dealers & Distributors | XML-aligned hero, partnership and quality bands, canonical product/network links, three native FAQ disclosures, and shared contact/footer CTAs | `/steel-distributors-dealers` |
| `LegalPage` | `src/components/legal-page.tsx` | Shared legal page shell for readable policy and terms content | Dark legal hero, sticky section index, long-form content column, support CTA, and related-policy link | `/privacy-policy`, `/terms-of-use` |
| `SteelPriceLookup` | `src/components/steel-price-lookup.tsx` | Responsive workbook-backed price lookup for state-level region, product, diameter, and delivery-city context | Uses mobile price cards and a desktop table, resets city when region changes, exposes accessible selected-rate feedback, preserves two-decimal per-kg accuracy, and collects a selection-aware price enquiry with an inline kg/tonnes dropdown in the quantity field; displayed rates include GST while freight and handling remain excluded | `/steel-price-today`, `/tmt-steel-price-today` |
| `PriceCalculatorExperience` | `src/app/price-calculator/price-calculator-experience.tsx` | Shared interactive TMT requirement calculator | Uses the approved workbook-backed state, product, diameter, rods, bundles, mean-weight, and GST calculation rules; desktop table switches to stacked mobile results | `/tmt-steel-calculator`, `/tmt-calculator` |
| `FaqList` | `src/components/faq-list.tsx` | Shared accessible FAQ disclosure list for page-owned question and answer content | Supports multiple open answers, long React content, keyboard focus, stable IDs, and reduced-motion-safe interaction | FAQ sections across product, calculator, project, sustainability, audience, and informational pages |
| `ManufacturingProcessFlow` | `src/components/manufacturing-process-flow.tsx` | Ordered nine-stage manufacturing process grid with local ARS icons | Desktop uses two four-card rows with the ninth stage centred below; compact desktop icon/number sizing and single-column mobile flow; semantic ordered list; icon mapping remains presentation-owned | `/manufacturing` |
| `PhysicalChemicalPropertiesTable` | `src/components/physical-chemical-properties-table.tsx` | Shared ARS-branded Fe 550D and Fe 550D CRS physical and chemical property comparison tables | Uses the brand navy, white, light-surface, steel-grey, and restrained-red system; preserves the supplied two-table IS 1786–2008 structure and all values, highlights ARS results with a pale brand-blue comparison column, and retains semantic headers plus horizontal scrolling on small screens | `/product-550d`, `/product-crs-550d`, `/tmt-steel-bar-guide-engineers-architects` |

## Cross-page consistency rules

- FAQ presentation must use `FaqList`; page-specific FAQ data and SEO JSON-LD remain separate.
- Visible product lists use the approved order: ARS CRS Fe 550D, ARS Fe 550D, ARS BINDERS. Forms and application data display these names while server validation normalizes supported legacy product values for backward compatibility.
- Page-level H1s inherit the global standard from `src/app/globals.css`: Title Case, `clamp(2.65rem, 6vw, 4rem)`, IBM Plex Sans display typography, 800 weight, consistent line height/tracking, and responsive wrapping. Hero variants may change only color and layout context.

## Shared Data Sources

| Data Source | File | Purpose | Current Usage | Verification Notes |
|---|---|---|---|---|
| `analyticsConfig` | `src/lib/analytics-config.ts` | Single source-controlled GA4, GTM, and Meta Pixel public IDs with independent enable switches | Root layout, shared interaction-event dispatch, and Meta PageView routing | Rebuild all hosts from the same commit after changing a switch; prevent duplicate GA4 or Meta measurement when GTM contains overlapping tags |
| `dealerRecords` | `src/data/dealers.ts` | Normalized ARS dealer list generated from the updated region-wise dealer workbook | `/dealer-locator` | Dealer active status, phone numbers, and city/state spelling should be verified by ARS before final launch |
| `clientLogos` | `src/data/client-logos.ts` | Single list of the nine supplied high-resolution client marks, their display names, and intrinsic dimensions | Homepage and `/clients` | Assets are optimized from the client-supplied PNGs; replace this list when ARS supplies an updated client set |
| `getBlogArchiveArticles` | `src/lib/blog-content.ts` | Normalizes the 88 migrated ARS articles into typed archive records with category, excerpt, image, date, and read-time metadata | `/blog` | Dates and excerpts are derived from migrated source content and should receive editorial verification during article-template migration |

## New Component Checklist

When adding a reusable component, document:

- Component name
- File path
- Purpose
- Variants or props
- Ownership: Codex, Claude, or shared
- Where it is used today
- Where it should be used in future

## Ownership Defaults

- Codex owns global system components: header, footer, tokens, shared section primitives, navigation, forms, and QA.
- Claude may create page-specific components, but should register any component that is useful across more than one page.
- Shared components should be reviewed by Codex before merge.
