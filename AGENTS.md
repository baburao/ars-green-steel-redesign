<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ARS Green Steel Website - Agent Instructions

## Project Overview

Project Name: ARS Green Steel Website Redesign

Objective:

Redesign the existing ARS Green Steel website into a premium industrial digital experience that communicates:

* Trust
* Manufacturing strength
* Engineering excellence
* Infrastructure capability
* Industry leadership

The website should feel modern, premium, editorial, and industrial.

It must NOT feel like:

* SaaS software
* Startup landing page
* Dashboard application
* Generic template website

---

# Current Tech Stack

Core

* Next.js 16.2.6
* React 19.2.4
* TypeScript
* App Router

Styling

* Tailwind CSS v4
* Custom design tokens in src/app/globals.css

Animation

* Framer Motion

Visual Libraries

* Three.js
* React Three Fiber
* Drei

Icons

* Lucide React

Assets

* ARS light logo SVG
* ARS Green Steel logo SVG
* Hero video: public/videos/ars-intro.mp4

Build

* npm
* ESLint
* Webpack mode

---

# Design Philosophy

ARS is an industrial company.

ARS is not a technology startup.

ARS is not a SaaS platform.

ARS is not a dashboard application.

The visual language should communicate:

* Strength
* Scale
* Reliability
* Precision
* Manufacturing quality
* Trust

Preferred characteristics:

* Editorial layouts
* Strong typography
* Large visual storytelling
* Structured content hierarchy
* Generous whitespace
* Premium photography
* Industrial imagery
* Modern motion

Avoid:

* Cartoon illustrations
* Startup illustrations
* Excessive gradients
* Glassmorphism
* Neumorphism
* Random decorative effects
* Overuse of animations

---

# Brand Direction

## Brand Personality

ARS Green Steel represents:

* Trust
* Engineering Excellence
* Industrial Strength
* Reliability
* Scale
* Precision

The visual identity should feel:

* Premium
* Modern
* Industrial
* Professional
* Confident

---

## Color System

### Primary Brand Blue

HEX: #0D2B6E

Usage:

* Primary CTAs
* Navigation highlights
* Links
* Trust-oriented sections
* Key interaction states

Represents:

* Trust
* Reliability
* Professionalism
* Engineering confidence

---

### Accent Red

HEX: #DE121A

Usage:

* Strategic emphasis
* Secondary CTAs
* Important metrics
* Highlights
* Interactive moments

Represents:

* Energy
* Innovation
* Action

Rules:

Use sparingly.

Do not allow red to overpower the blue brand identity.

---

### Dark Navy

HEX: #060D1E

Usage:

* Hero overlays
* Footer
* Dark sections
* Typography emphasis

Represents:

* Strength
* Authority
* Industrial confidence

---

### Steel Grey

HEX: #64748B

Usage:

* Secondary text
* Supporting UI
* Dividers
* Technical information

Represents:

* Engineering
* Steel materials
* Precision

---

### Light Surface

HEX: #F8FAFC

Usage:

* Section backgrounds
* Cards
* Light surfaces

Purpose:

Maintain clean editorial layouts and visual breathing room.

---

### White

HEX: #FFFFFF

Usage:

* Primary page background
* Cards
* Content surfaces

Purpose:

Create clarity, readability and premium whitespace.

---

## Color Hierarchy

Priority Order:

1. White
2. Light Surface
3. Brand Blue
4. Dark Navy
5. Steel Grey
6. Accent Red

Important:

Accent Red should never become the dominant website color.

The visual identity should primarily feel Blue + White + Industrial.

Red should act as a supporting accent.

---

## Visual Ratio

Approximate color distribution:

60% White
20% Light Surface
10% Brand Blue
5% Dark Navy
3% Steel Grey
2% Accent Red

This balance should be maintained throughout the website.


---

# Important Technical Constraints

Three.js, React Three Fiber and Drei are installed.

However:

Current approved homepage hero uses:

public/videos/ars-intro.mp4

Rules:

* Do not replace hero video with 3D scenes without approval.
* Do not introduce decorative 3D.
* Use 3D only if it adds meaningful storytelling value.
* Prefer real industrial media over synthetic 3D visuals.

---

# Agent Team

## 1. Website Audit Agent

Responsibilities:

* Analyze current implementation
* Find UX issues
* Find design inconsistencies
* Identify missing content
* Identify missing pages
* Identify reusable components

Before building anything new:

Always review existing implementation first.

---

## 2. Industry Research Agent

Responsibilities:

Study:

* Steel manufacturers
* Construction companies
* Infrastructure companies
* Industrial brands

Focus:

* Layout patterns
* Content structure
* Trust-building methods
* Lead generation techniques

Never directly copy competitor designs.

---

## 3. UX Architect Agent

Responsibilities:

* Improve information architecture
* Improve user journeys
* Improve navigation
* Improve CTA placement
* Improve enquiry conversion

Primary Goal:

Generate more enquiries and business opportunities.

---

## 4. Design System Agent

Responsibilities:

* Typography consistency
* Spacing consistency
* Color consistency
* Component consistency
* Motion consistency

Rules:

Always reuse existing design patterns before creating new ones.

---

## 5. Brand Guardian Agent

Responsibilities:

Ensure every page feels like ARS.

Prevent:

* Generic SaaS layouts
* Startup patterns
* Inconsistent branding
* Visual drift

Maintain:

* Industrial identity
* Editorial presentation
* Professional credibility

---

## 6. Frontend Agent

Responsibilities:

* Build reusable components
* Avoid duplicate code
* Follow architecture
* Improve maintainability

Rules:

Always check existing components before creating new components.

Read `COMPONENT_INVENTORY.md` before creating or extracting a reusable component.

If a reusable component is created or materially changed, update `COMPONENT_INVENTORY.md` in the same commit.

Use `SectionKicker` for section labels instead of manually rebuilding kicker line/text markup.

Do not introduce new component variants unless the use case cannot be solved by an existing component or token.

---

## 7. SEO Agent

Responsibilities:

* Semantic structure
* Metadata
* Internal linking
* Crawlability
* Search optimization

Every page should be SEO-friendly.

---

## 8. QA Agent

Responsibilities:

Review:

* Desktop
* Tablet
* Mobile

Check:

* Responsiveness
* Accessibility
* Consistency
* Visual quality
* Performance

No task is complete until reviewed.

---

## 9. UI/UX Director Agent

Responsibilities:

* UX audits
* UI audits
* Accessibility reviews
* Design system governance
* Conversion optimization
* Information architecture reviews

Before approving any screen:

1. UX Review
2. Visual Review
3. Accessibility Review
4. Mobile Review
5. Conversion Review

No page is complete until all reviews pass.

---

# Page Creation Workflow

For every page:

Step 1:
Audit current implementation

Step 2:
Research industry references

Step 3:
Plan improvements

Step 4:
Build or improve components

Step 5:
Review UX

Step 6:
Review responsiveness

Step 7:
Review SEO

Step 8:
Review brand consistency

Step 9:
Mark task complete

Never skip review steps.

---

# Decision Priority

When multiple solutions exist:

Priority 1:
User Experience

Priority 2:
Business Conversion

Priority 3:
Brand Consistency

Priority 4:
Visual Quality

Priority 5:
Technical Elegance

Always choose the solution that improves trust, credibility, and enquiry generation.

---

# Project Goal

Create the best ARS Green Steel website possible while maintaining:

* Premium industrial branding
* Modern UX
* Strong lead generation
* Excellent performance
* Excellent maintainability
* Consistent design system
