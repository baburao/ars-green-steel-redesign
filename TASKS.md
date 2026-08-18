# ARS Green Steel Execution Tasks

## Source Documents Followed

This task plan is based on:

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_RULES.md`
- `ROADMAP.md`
- `ARS-DESIGN-HANDOFF.md` supplied by the client team
- Approved Figma Make website direction

The execution order prioritizes:

1. Business impact
2. UX improvements
3. Design consistency
4. Technical improvements

## Status Legend

- `Not started`
- `In progress`
- `Partially done`
- `Blocked`
- `Done`

## Priority Legend

- `Critical`: Required for client-facing approval or lead generation
- `High`: Important for UX, brand consistency, or credibility
- `Medium`: Improves quality, scalability, or content depth
- `Low`: Optional cleanup or future enhancement

## Latest Release Status — 2026-08-02

- Branch: codex/metadata-seo
- Production commit: 4d5c4fc
- Privacy Policy and Terms of Use redesigned with the shared legal-page experience.
- Dealer locator updated from the region-wise workbook with 1,566 records.
- State selection filters city options; dealer codes and the public dealer pill are removed.
- Mobile menu remains visible below the viewport header while the visitor is mid-page.
- Duplicate React keys in Green Steel impact cards were resolved.
- TypeScript, route QA, and production build passed before release.

## Internal URL Mapping Release — 2026-08-05

- Status: Done
- Commit: `faa072f`
- Production deployment: `dpl_3By4xPLn7zLdTKC4J7BSuksAkRxW`
- Rewrote internal component, navigation, and CTA links to canonical WordPress routes.
- Repaired 61 broken page links in `src/data/blog-migration-registry.json`.
- Removed the redirected `/about` entry from the sitemap.
- Preserved `next.config.ts` redirect sources for external legacy traffic.
- Validation passed: TypeScript, route/asset QA, and production build.

## FAQ and product consistency release — 2026-08-07

- Status: Done
- Commit: `79a3438`
- Production deployment: `dpl_E1w66Nt94QfCwQsRqnvPU7jMTmaN`
- Replaced inconsistent FAQ accordion implementations with the shared accessible `FaqList` pattern across the converted site sections.
- Standardized FAQ question controls, answer panels, dividers, spacing, icon treatment, focus states, stable IDs, and multiple-open interaction.
- Preserved page-owned FAQ copy and FAQ structured-data sources.
- Confirmed visible product order everywhere the shared product lists are used: ARS CRS 550D, ARS 550D, ARS BINDERS.
- Removed the temporary homepage CTA refresh while preserving the original homepage navigation and content paths.
- Checks passed: `npx tsc --noEmit`, `npm run qa:routes`, and `npm run build`.

## Solution content and asset release — 2026-08-08

- Status: Done
- Commit: `871462f`
- Production deployment: `dpl_4sYbBETKM1uS632v8SMm8ymMSaDt`
- Refreshed Roads, Bridges, Institutions, Contractors, Engineers & Architects, Dealers & Distributors, and Home Owners solution experiences.
- Added local solution imagery and available brochure/download assets.
- Checks passed: TypeScript, route/asset QA, and production build.

---

## Latest Implementation Status - 2026-06-28

Current branch:

- `homepage-figma-refresh`

Latest live deployment:

- https://ars-green-steel.vercel.app/

Recent completed work:

- Native Next.js blog archive has been started.
- `/blog` now has a bespoke archive experience with hero, featured articles, topic filters, search, progressive loading, and links to all 88 preserved blog article URLs.
- `/blog.html` now permanently redirects to `/blog` through `next.config.ts`.
- Header/footer blog links now point to `/blog`.
- `src/lib/blog-content.ts` normalizes legacy blog article data for archive discovery.
- `src/components/blog-archive.tsx` provides reusable client-side filtering and article cards.
- `/dealer-locator` now uses the supplied ARS dealer CSV data.
- Dealer search supports city, pincode, dealer code, dealer name, phone, city filter, state filter, popular city shortcuts, load-more results, phone CTA, and map directions.
- The dealer locator intro cards were removed per feedback, so the page moves directly from hero into dealer discovery.
- `/ars-green-steel` was redesigned from a document-style page into a modern section-led page using the approved ARS visual system.
- `/green-steel` was aligned section-by-section with the approved Green Steel reference, including the 60vh inner-page hero, concept section, process/proof sections, environmental impact cards, certification table, impact block, and compact blue CTA band.
- Inner-page heroes should remain around `60vh`; the homepage remains the exception with a taller cinematic hero.
- Section-level H2 headings should use `clamp(2rem, 3.4vw, 2.25rem)`.
- The reusable `SectionKicker` should remain the standard section label component, with `font-weight: 500`.

Current caveats:

- Blog archive work is currently local unless it has been explicitly committed and pushed after this note.
- The 88 individual blog article pages still use the migrated article renderer and need the next redesign pass.
- `pnpm-lock.yaml` and `pnpm-workspace.yaml` may appear as untracked local files. Do not commit them unless the package manager strategy is intentionally changed.
- Final steel prices, calculator formulas, WhatsApp number, and any missing PDFs/brochures/certificates still require ARS/client confirmation.
- Dealer data is now implemented from the supplied CSV, but ARS should still confirm phone numbers, city naming, and active dealer status before final domain launch.

---

## Phase 1 - Design Foundation

### Approved Design System Sync - 2026-06-23

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `design-system-sync` branch from current working state | Critical | Done | Current `main` branch and existing local UI edits | Approved design-system work is isolated for review and GitHub tracking. |
| Align global CSS tokens to approved Figma Make theme | Critical | Done | `ARS-DESIGN-HANDOFF.md` | Site foundation now supports dark navy, royal blue, crimson accents, light blue surfaces, glass overlays, and IBM Plex Sans. |
| Keep existing class names backward compatible during migration | Critical | Done | Current component usage | Existing pages continue building while the visual system is migrated step by step. |
| Update `DESIGN_SYSTEM.md` and `DESIGN_RULES.md` to the approved client direction | Critical | Done | Approved Figma Make handoff | Future page work follows the same client-approved visual rules. |
| Run production build after token update | Critical | Done | Updated tokens and docs | Build passes before the branch is considered ready for review. |

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Add primary brand blue `#0D2B6E` into the active design token system | Critical | Done | `DESIGN_RULES.md` | Blue becomes the clear primary brand color across the site. |
| Replace legacy primary red usage where red behaves like the main brand color | Critical | Done | Color audit of current UI | Red stops dominating buttons, links, highlights, and section identity. |
| Replace legacy coral red with single secondary red `#DE121A` | High | Done | Brand hierarchy update | Red supports conversion and editorial emphasis through one consistent approved token. |
| Define final CTA color rules for primary, secondary, ghost, and text links | Critical | Done | Color system | All calls to action feel consistent, premium, and conversion-focused. |
| Standardize typography scale for display, H1, H2, H3, body, and captions | High | Done | `DESIGN_RULES.md` | Headings and section copy follow a controlled editorial hierarchy. |
| Apply final ARS font stack with IBM Plex Sans, Inter, and IBM Plex Sans Condensed | High | Done | Typography recommendation | The site uses an engineered, readable industrial font stack with safe fallbacks; self-hosted font files can be added when available. |
| Define reusable spacing rhythm for hero, sections, cards, and grids | High | Done | Typography scale | Sections feel related instead of visually disconnected. |
| Define card style rules for product, proof, tool, and audience cards | High | Done | Color and spacing rules | Cards feel industrial and editorial, not SaaS-like. |
| Audit current homepage against the design rules | High | Done | Current implementation | Clear list of UI areas that need brand and layout correction. |

---

## Phase 2 - Homepage Refinement

### Approved Homepage Theme Refresh - 2026-06-23

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `homepage-figma-refresh` branch from approved design-system branch | Critical | Done | `design-system-sync` | Homepage work is isolated for review and GitHub tracking. |
| Commit and push shared homepage/design-system baseline for Claude/Codex collaboration | Critical | Done | Current reviewed homepage work | Both agents can start from the same GitHub checkpoint without overwriting local work. |
| Create reusable component registry for multi-agent coordination | Critical | Done | `AGENTS.md`, `DESIGN_SYSTEM.md` | Codex and Claude can check `COMPONENT_INVENTORY.md` before creating or reusing shared components. |
| Verify homepage responsive QA after shared kicker extraction | Critical | Done | `SectionKicker`, homepage sections | Desktop, tablet, and mobile checks confirm no horizontal scroll and consistent red/light kicker variants. |
| Apply approved dark navy, royal blue, and crimson hierarchy to homepage hero | Critical | Done | `ARS-DESIGN-HANDOFF.md`, `HomeHero` | Hero now reflects the approved premium industrial theme while preserving existing content and animation. |
| Refresh homepage section rhythm with dark navy feature bands and light blue-tinted surfaces | High | Done | Updated global tokens | Homepage reads closer to the approved Figma Make direction without rebuilding structure. |
| Update audience, buying, product, trust, green steel, testimonials, and blog section surfaces | High | Done | Existing homepage components | Key sections feel more consistent with the approved design language. |
| Run production build after homepage refresh | Critical | Done | Updated homepage files | Build passes before local preview and branch push. |

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Update homepage CTAs to follow the blue-primary hierarchy | Critical | Done | Phase 1 CTA rules | Main actions immediately communicate trust and brand consistency. |
| Refine the hero headline scale and animated accent word | High | Done | Current hero structure | Hero remains bold but avoids oversized or crowded typography. |
| Pair hero animated words with synchronized proof cards | High | Done | Hero concept feedback | Strength, safety, trust, and green steel each have matching right-side proof content while CTAs stay stable. |
| Keep the approved background video as the hero media | Critical | Done | Existing `ars-intro.mp4` | Hero continues using the client-provided visual direction. |
| Remove proof metrics from inside the hero if still visually attached | High | Done | Hero audit | Hero becomes cleaner and the proof content gets its own section. |
| Redesign the proof / track-record section in light mode | Critical | Done | Phase 1 color hierarchy | Proof feels premium and consistent with the rest of the page. |
| Refine the product range section to match the blue-led system | High | Done | Card and CTA rules | Product cards support faster product understanding and next actions. |
| Add or refine the Buying Assistant section | Critical | Done | Homepage conversion journey | Visitors can quickly choose price, calculator, dealer, or quote paths. |
| Refine Audience Paths section using the agreed editorial tab/card style | High | Done | Audience journey content | Home owners, engineers, contractors, and dealers each see a clear path. |
| Redesign Audience Paths with premium image cards and hover interactions | High | Done | Visual reference and existing audience routes | The second section now uses a modern image-card system with blue pills, arrow motion, CTA line animation, and a proof metric strip. |
| Add width-expansion hover behavior to Audience Paths cards | High | Done | Premium image-card section | Hovering or focusing a desktop audience card expands it horizontally while nearby cards adjust smoothly. |
| Refine post-hero homepage title scale for industrial readability | High | Done | Visual designer review | Section titles now use restrained title case and smaller display sizing so content scans better after the hero. |
| Rebuild homepage around the approved user journey | Critical | Done | Client journey feedback | Homepage now flows from hero to audience cards, fastest route actions, product paths, merged trust proof, testimonials, blogs, and footer. |
| Replace hero word animation with synchronized motion treatment | High | Done | Hero animation QA | Hero word and proof card animate together with reduced-motion fallback and no horizontal overflow across desktop, tablet, and mobile. |
| Add Quality and Manufacturing homepage section | High | Done | Proof content and media | Manufacturing credibility becomes visible before the user reaches contact. |
| Recover critical homepage content from `CONTENT_RECOVERY_PLAN.md` | Critical | Done | `CONTENT_RECOVERY_PLAN.md`, current homepage | Homepage now surfaces critical price, calculator, dealer, quote, product proof, rod-size, certification, contact, and client/project proof placeholders without visual clutter. |
| Add Green Steel / Sustainability homepage section | Medium | Not started | Sustainability content | ARS green positioning becomes a visible part of the homepage story. |
| Add Applications homepage section | Medium | Not started | Application categories | Users can connect products to real construction use cases. |
| Redesign final CTA and footer so they do not feel like a separate dark-mode section | High | Done | Phase 1 color hierarchy | The homepage ends with a consistent, high-trust conversion area. |

---

## Phase 3 - Navigation & Mega Menu

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Extract the current header into a reusable navigation component | High | Done | Current homepage header | Navigation becomes easier to maintain across future pages. |
| Define final top-level navigation labels | Critical | Done | Required pages from `PROJECT_BRIEF.md` | Users can understand the site structure quickly. |
| Create desktop mega menu structure for products, tools, applications, and resources | High | Done | Navigation labels | Important pages are discoverable without cluttering the header. |
| Design mobile navigation pattern | High | Done | Desktop navigation structure | Mobile users can access products, tools, contact, and dealer paths easily. |
| Add priority navigation CTAs: Get Quote, Steel Price, Dealer Locator | Critical | Done | Conversion page routes | High-intent actions stay visible from every page. |
| Use `#0D2B6E` for active, hover, and focus states | High | Done | Phase 1 design tokens | Navigation follows the updated brand hierarchy. |
| Add accessible keyboard and focus behavior | High | Done | Navigation component | Navigation uses visible focus states and keyboard-reachable links. |

---

## Phase 4 - Product Experience

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `/products` listing page | Critical | Done | Product content | Visitors can compare ARS product categories in one place. |
| Create `/products/ars-550d` detail page | High | Done | Product specifications | Engineers and buyers can evaluate ARS 550D clearly. |
| Create `/products/ars-crs-550d` detail page | High | Done | Product specifications | Coastal and corrosion-resistant product use cases are explained clearly. |
| Add reusable product specification table component | High | Done | Product data | Technical information is scannable and ready for verified values. |
| Add product comparison module | Medium | Done | Product data | Users can understand core 550D vs CRS product fit. |
| Add product application cards | Medium | Done | Application taxonomy | Product pages connect steel grades to real construction needs. |
| Add brochure or certificate download CTA pattern | Medium | Blocked | Client-provided assets | Technical users can download supporting material. |
| Add related conversion CTAs to product pages | High | Done | Quote, calculator, dealer routes | Product interest can convert into enquiry or dealer discovery. |

---

## Phase 5 - Services Experience

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `/steel-price-today` page | Critical | Done | Pricing content/source | Visitors can check the prepared steel price path without calling first. |
| Define pricing display model and update process | Critical | Partially done | Client/business input | Price rows and confirmation requirements are centralized; final rates, update frequency, region logic, and disclaimer still need ARS input. |
| Create `/tmt-calculator` page | Critical | Done | Calculator logic | Users can see the calculator flow; final formula remains blocked by client input. |
| Define TMT calculator formula and assumptions | Critical | Partially done | Engineering/business input | Calculator input fields and formula requirements are centralized; final formula, units, output format, assumptions, and disclaimer still need ARS input. |
| Create `/dealer-locator` page | Critical | Done | Supplied ARS dealer CSV | Users can search ARS dealers by location, pincode, dealer name, dealer code, city, and state. |
| Define dealer data format and source | Critical | Done | `Dealer locator (website).xlsx - Sheet2.csv` | Dealer data is normalized into `src/data/dealers.ts`; ARS should verify active dealer status before final launch. |
| Create service/tool cards for homepage and navigation reuse | High | Done | Services page routes | Price, calculator, and dealer tools feel connected across the site. |
| Add result-to-lead actions inside each service tool | High | Done | Contact and quote flow | Tool usage naturally leads to quote, call, or dealer enquiry. |

---

## Phase 6 - Trust & Proof

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `/about` trust and credibility page | High | Done | `PROJECT_BRIEF.md`, `SITEMAP.md`, homepage patterns | First-time visitors can understand ARS legacy, manufacturing strength, dealer confidence, and proof-led positioning. |
| Recover critical About-page proof from `CONTENT_RECOVERY_PLAN.md` | Critical | Done | `CONTENT_RECOVERY_PLAN.md`, current About page | About now includes critical product, certification, testing, buyer-path, contact, office, and plant recovery content while preserving the trust narrative. |
| Create `/quality-certifications` page | High | Done | Certification content/assets | ARS proof and compliance are available through `/certifications`. |
| Create `/manufacturing` page | High | Done | Plant/process content | Manufacturing strength is a dedicated trust story. |
| Create `/green-steel` page | High | Done | Sustainability content | Green steel positioning is supported with clear proof rules. |
| Build certification strip component | High | Done | Certification labels | SGS, ISO, EPD/GRIHA/LEED, and approval proof appear consistently. |
| Build proof metric component | Medium | Done | Current proof section | Metrics can be reused without redesigning each section. |
| Add testing and quality process content blocks | High | Blocked | Client technical input | Engineers and contractors see clear quality assurance evidence. |
| Add client/project/testimonial section | Medium | Blocked | Client proof content | Social proof supports buyer confidence before enquiry. |
| Add downloadable certificates or technical documents | Medium | Blocked | Approved files | Technical stakeholders can verify claims independently. |

---

## Phase 7 - Contact & Lead Generation

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Create `/contact` page | Critical | Done | Contact details | Visitors have one clear place to reach ARS. |
| Design request quote form structure | Critical | Done | Sales requirements | The quote flow captures useful lead details without friction. |
| Build reusable lead form component | Critical | Done | Form structure | Quote and contact forms can be reused across pages. |
| Define form submission destination | Critical | Partially done | Client/business decision | Lead forms and routing copy are ready; final endpoint, inbox, CRM, or API still needs ARS input. |
| Add validation, helper text, and error states | High | In progress | Lead form component | Forms include helper text; full validation awaits submission endpoint. |
| Add WhatsApp and phone CTA system | High | Partially done | Official contact numbers | Phone CTAs are active; WhatsApp can be added after ARS confirms the official WhatsApp number. |
| Add repeated conversion CTAs across product and service pages | High | Done | Page routes and CTA rules | Users always have a next step after reading. |
| Add dealer and distributor enquiry path | Medium | Done | Dealer onboarding requirements | Dealer interest is captured separately from buyer enquiries. |
| Surface verified-contact recovery placeholders on Home and About | Critical | Done | `CONTENT_RECOVERY_PLAN.md` | Critical phone, project enquiry, office, and plant proof are visible as verification-ready content blocks before dedicated Contact/Enquiry pages are built. |

---

## Phase 8 - SEO & Performance

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Add page metadata for all priority pages | High | Done | Pages created | Search engines and shared links communicate the right page purpose. |
| Create SEO structure for steel price, calculator, dealer, product, and application pages | High | Done | Page content | High-intent search traffic has dedicated landing pages. |
| Add FAQ sections to high-intent pages | Medium | Not started | Customer questions and content | Pages answer common objections and support long-tail SEO. |
| Add internal linking strategy | High | Done | Core pages created | Users and search engines can move through the site logically. |
| Optimize hero video loading and fallback | High | Done | Existing video implementation | Background videos now use lighter metadata preload while preserving the premium hero direction. |
| Audit image and media performance | High | Partially done | Media assets | Current video/image loading has been improved; final optimization depends on the remaining authentic assets. |
| Review unused 3D code and remove or defer if not needed | Medium | Not started | 3D decision | Project stays focused and avoids unnecessary weight. |
| Run lint and production build after code changes | Critical | Done | Any implementation work | Final implementation is technically stable before review. |

---

## Phase 9 - Final QA

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Desktop visual QA | Critical | Done | Homepage and priority pages complete | Products and quote pages render with consistent header, hero, CTA, and footer patterns. |
| Tablet visual QA | High | Done | Responsive layouts complete | Header, mobile menu, hero, and quote form remain readable around tablet width. |
| Mobile visual QA | Critical | Done | Responsive layouts complete | Mobile menu opens correctly and quote page remains readable without major overlap. |
| Accessibility contrast audit | Critical | Partially done | Final color implementation | Static color and focus pass completed; browser/device review remains before final launch. |
| Keyboard navigation audit | High | Partially done | Interactive components complete | Header Escape handling, mobile states, skip link, and selector states improved; full manual keyboard pass remains. |
| CTA and form flow QA | Critical | Partially done | Lead generation features complete | CTA routes are live, route checker passes, and copy is cleaned; final form submission depends on ARS endpoint decision. |
| Content accuracy review | High | Partially done | Client approval/input | Internal cleanup is complete and `CLIENT_VERIFICATION_CHECKLIST.md` lists the remaining ARS approvals needed for product, price, dealer, certification, and company claims. |
| Cross-browser review | High | In progress | Final implementation | Build and route QA passed; manual browser review remains because sandbox port binding is currently denied. |
| Client presentation readiness review | Critical | Partially done | Final QA pass | `FINAL_QA_REPORT.md` captures current readiness and remaining client/input dependencies. |
| Deployment readiness check | High | Partially done | GitHub/deployment setup | Build, sitemap, robots, and route checks pass; hosting/GitHub deployment setup remains. |

---

## Content Parity Pass - Original ARS Sitemap Recovery

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Compare original ARS sitemap against current redesign routes | Critical | Done | Original `arsgroup.in` page list and local source snapshots | Missing source pages are identified before further UI expansion. |
| Restore dedicated quality page route | Critical | Done | Original Our Quality content | `/our-quality` preserves quality control, laboratory testing, product features, and SGS proof. |
| Restore dedicated steel testing page route | Critical | Done | Original Steel Testing content | `/steel-testing` preserves on-site spectrometer testing and quality verification flow. |
| Restore core team route | High | Done | Original Our Team content and asset audit rules | `/our-team` preserves leadership structure without inventing people photos. |
| Restore CSR route | Medium | Done | Original CSR content | `/csr` preserves health, infrastructure, and sports responsibility areas. |
| Restore careers route | Medium | Done | Original Careers content | `/careers` preserves why-work-with-ARS, benefits, culture, and apply flow. |
| Restore blog and article routes | High | Done | Original Blog content map | `/blog` and all preserved article URLs resolve without disappearing. |
| Restore video/media route | Medium | Done | Original Video Gallery content | `/video` preserves future media-gallery structure. |
| Restore segment routes | Critical | Done | Original Homeowner, Engineers, Contractors, Dealer pages | Buyer journeys now exist for home owners, engineers/architects, civil contractors, and dealers/distributors. |
| Redesign audience guide pages with approved Figma system | Critical | Done | Homeowners page pattern, legacy audience content, approved design tokens | Homeowners, engineers/architects, civil contractors, and dealers now use one reusable modern audience template instead of raw legacy page blocks. |
| Restore application routes | Critical | Done | Original Institutions, Bridges, Road Projects pages | Application-specific project pages now resolve with modern layouts. |
| Restore rod-size routes | Critical | Done | Original 8mm to 32mm pages | Individual 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, and 32mm routes preserve SEO and buyer intent. |
| Add original-site navigation coverage | High | Done | Site header and footer | Header/footer now expose Products, Segments, Applications, Green Steel, Buy, About, Media, and Contact. |
| Preserve legacy URL aliases | High | Done | Existing modern pages | Old ARS URLs such as `about-us`, `product-550d`, and `tmt-steel-price-today` route users to the modern destination. |
| Verify route build coverage | Critical | Done | Next production build | Build now generates 56 pages, including restored original-site pages. |

## Content and Asset Parity Pass - Round 1

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Restore available original ARS product images into product journeys | Critical | Done | Local `public/ars-assets` source files | `/products`, homepage product cards, rod-size routes, and segment routes now use real ARS product imagery instead of generic placeholders. |
| Restore available original ARS quality/testing imagery | Critical | Done | Local `our-quality-1.png`, product assets | `/our-quality`, `/steel-testing`, `/certifications`, and homepage quality proof now show available ARS quality assets. |
| Restore available original ARS leadership/team photos | High | Done | Local team photo assets | `/our-team` uses only available ARS team photos and avoids invented people imagery. |
| Restore available original ARS awards/certificate imagery | High | Done | Local award/certificate source assets | Homepage trust section and `/certifications` now surface available award/certificate visuals. |
| Restore available original ARS contact/network image | High | Done | Local `Contact_banner.png` | `/contact` and `/our-network` now use the existing ARS contact/network source asset. |
| Preserve old-site blog/topic coverage on homepage | Medium | Done | Existing content audit | Homepage includes a compact blog/topic preview linked to the modern archive. |
| Validate implementation after parity updates | Critical | Done | Lint and production build | ESLint passes and production build generates all 56 routes successfully. |
| Add missing original PDFs, brochures, certificates, client logos, and remaining team photos | Critical | Blocked | Source files not available locally | These assets must be added only when authentic client/source files are provided. |

## Content and Asset Parity Pass - Round 2

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Add original ARS visual assets to Industries page | High | Done | Local `public/ars-assets` source files | Audience and application cards now use ARS homeowner, product, quality, manufacturing, and infrastructure imagery. |
| Add original ARS visual assets to Projects page | High | Done | Local `ARSHOME` and certificate assets | Project and trust cards now carry ARS project, infrastructure, manufacturing, certification, and dealer-network visuals. |
| Add original ARS visual assets to Services page | High | Done | Local product, contact, and quality assets | Price, calculator, dealer, quote, quality support, and sales contact cards now show source ARS imagery. |
| Add original ARS visual assets to Manufacturing page | High | Done | Local manufacturing, product, quality, and certificate assets | Process and buyer-confidence sections now use available ARS plant, product, testing, and certificate visuals. |
| Revalidate after second parity update | Critical | Done | Lint and production build | ESLint passes and production build still generates all 56 routes successfully. |

## Strict Content Parity Pass - Original Website Recovery

| Task | Priority | Status | Dependencies | Expected Outcome |
|---|---|---|---|---|
| Generate source-of-truth legacy content dataset | Critical | Done | Full `arsgroup.in` sitemap crawl | 122 old pages are stored with source URL, title, copy, section headings, assets, videos, and contact data. |
| Preserve old top-level URLs as real content pages | Critical | Done | Legacy content dataset | Old routes such as `/our-quality`, `/steel-testing`, `/our-team`, `/csr`, `/careers`, rod-size pages, and application pages render restored source content. |
| Preserve `/blog.html` route | Critical | Done | Legacy content dataset | Old blog hub URL renders as a restored resource page instead of disappearing. |
| Preserve `/blog/...` article URLs | Critical | Done | Legacy blog route | 88 old nested blog article URLs now prerender through `/blog/[slug]`. |
| Replace summarized legacy pages with detailed old-site content blocks | Critical | Done | Extracted old page copy | Legacy pages now show original section structure, copy blocks, source media references, downloads, video embeds, and verification notes. |
| Restore exact old contact details | Critical | Done | Old contact page crawl | Contact page and footer now include mobile, office phone, fax, corporate office address, plant address, and plant phone numbers from the old site. |
| Restore original contact form city list | High | Done | Old contact form crawl | Enquiry form now includes the old Tamil Nadu city/district dropdown options. |
| Map old images, PDFs, and video references | Critical | Done | Full old sitemap crawl | `public/legacy-assets/legacy-asset-manifest.json` tracks 411 source asset references and intended local paths. |
| Download old images, PDFs, and videos locally | Critical | Partially done | Network access to `arsgroup.in` assets or client asset pack | 16 authentic ARS assets are local; 395 remaining assets are still blocked by DNS/network access and need a network-enabled pass or client-supplied originals. |
| Add legacy asset download utility | High | Done | Asset manifest | `scripts/download-legacy-assets.mjs` can populate `public/legacy-assets` when network access is available. |
| Verify production build after strict parity pass | Critical | Done | All parity implementation work | Production build passes and now prerenders 139 pages, including old top-level and nested blog routes. |
| Clean migrated legacy copy | Critical | Done | Legacy content dataset | Repeated calculator text, form dropdown dumps, breadcrumb fragments, old footer copy, and article metadata noise are removed from restored pages. |
| Rewrite legacy intros and section text for readability | High | Done | Cleaned source copy | Restored pages now use clearer intros and cleaner section summaries while preserving original business meaning. |
| Improve restored blog article layout | High | Done | Blog route and cleaned article sections | Blog pages now render as readable article pages with a section index instead of raw migration cards. |
| Build native Next.js blog archive | High | Done | Preserved article dataset and approved design system | `/blog` now provides featured content, topic filters, search, progressive loading, and links to all 88 preserved posts without a third-party CMS. |
| Replace the migrated article renderer with a reusable editorial template | High | Pending | Native blog archive | Every article uses a polished shared hero, body, contents, related-content, and conversion pattern while retaining its existing URL. Recommended first test article: `/blog/corrosion-resistance-steel.html`. |
| Improve restored legacy page layout | High | Done | Legacy renderer | Non-blog legacy pages now use cleaner two-column restored section layouts and supporting copy blocks. |
| Prevent broken remote image display | High | Done | Legacy asset manifest | Original image references are shown as mapped source assets until local downloads are available, avoiding broken image blocks. |
| Replace available source asset references with local project files | High | Done | Local asset reconciliation | Legacy pages now render local ARS images where available and link downloads to local files when present. |
| Create client verification checklist for business-critical content | Critical | Done | Contact, price, calculator, dealer, and migrated copy review | `CLIENT_VERIFICATION_CHECKLIST.md` separates ready implementation from items requiring ARS business approval. |
| Polish public-facing pending-data language | High | Done | Price, calculator, dealer, contact, and lead form pages | Pages now use client-ready wording such as ARS confirmation required instead of raw blocked/pending language. |
| Centralize business verification data | High | Done | Contact, pricing, calculator, and dealer pages | Contact details, price rows, calculator inputs, dealer data needs, and verification notes now live in `src/data/business-verification.ts`. |
| Run final visual/SEO/accessibility/performance QA pass | Critical | Done | Current implementation | Shared visual scale, accessibility basics, SEO files, performance preload, route QA, lint, and production build were completed and documented in `FINAL_QA_REPORT.md`. |
| Revalidate after copy and layout polish | Critical | Done | Renderer and content cleanup | ESLint passes and production build still prerenders 139 pages. |

---

## Immediate Next Actions

1. Commit and push the native `/blog` archive work after review, excluding unintentional package-manager files.
2. Build the reusable blog article template and start with `/blog/corrosion-resistance-steel.html`.
3. Continue migrating the remaining 88 blog articles into the polished editorial template.
4. Review `/ars-green-steel`, `/green-steel`, and `/dealer-locator` with the client for content accuracy.
5. Confirm live dealer data, phone numbers, active locations, pricing data, calculator formulas, WhatsApp number, PDFs, brochures, and certificate downloads with ARS before final domain launch.
