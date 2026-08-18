# ARS Green Steel Deployment Guide

This is the deployment source of truth for the ARS Green Steel redesign.

## Live Project

- Live website: https://ars-green-steel.vercel.app/
- GitHub repository: https://github.com/baburao/ars-green-steel-redesign
- Vercel project: `ars-green-steel`
- Vercel team/account: `baburaos-projects-1c568830`
- Main branch: `main`
- Active working branch for current redesign work: `homepage-figma-refresh`
- Current release branch: `codex/metadata-seo`
- Deployment method: GitHub push plus Vercel production deploy when a reviewed branch needs to go live immediately.

## Latest Internal-Link Release — 2026-08-05

- Commit: `faa072f`
- Production deployment: `dpl_3By4xPLn7zLdTKC4J7BSuksAkRxW`
- Status: `READY`
- Internal links now point directly to canonical WordPress routes, avoiding internal 301 hops.
- 61 broken page links in `src/data/blog-migration-registry.json` were corrected.
- `/about` was removed from the sitemap; redirect sources in `next.config.ts` remain unchanged.
- TypeScript, internal route/asset QA, production build, calculator routes, sitemap, favicon, and logo checks passed.

## Latest Production Deployment

Latest confirmed live update:

- Date: 2026-08-08
- Commit: `871462f` — `Refresh solution page assets and content`
- Vercel deployment: `dpl_4sYbBETKM1uS632v8SMm8ymMSaDt`
- Status: `READY`
- Verified routes: `/`, `/road-projects-tmt-steel-bars`, `/bridges-projects-tmt-steel-bars`, `/institutions-projects-tmt-steel-bars`, `/steel-distributors-dealers`, `/tmt-steel-bar-guide-homeowners`
- All verified routes returned HTTP 200.

What went live:

- Refreshed solution-page content and local ARS imagery.
- Added local solution assets for Roads, Bridges, Contractors, Dealers, Engineers & Architects, and related page sections.
- Added available local Binders and CRS brochure assets.

## Previous Production Deployment

Latest confirmed live update:

- Date: 2026-08-07
- Commit: `79a3438` — `Standardize FAQ presentation`
- Vercel deployment: `dpl_E1w66Nt94QfCwQsRqnvPU7jMTmaN`
- Status: `READY`
- Verified routes: `/`, `/products`, `/our-quality`, `/ars-green-steel`, `/10-mm-steel-rod`, `/tmt-steel-calculator`
- All verified routes returned HTTP 200.

What went live:

- Shared accessible FAQ presentation and interaction pattern.
- Consistent FAQ spacing, dividers, typography, focus states, open/closed icon states, and multi-answer behavior.
- Canonical product ordering: ARS CRS 550D → ARS 550D → ARS BINDERS.
- Homepage CTA refresh rollback, preserving the original homepage CTA layer.

## Previous Production Deployment

Latest confirmed live update:

- Date: 2026-08-02
- Commit: `4d5c4fc` - `Refine legal pages and dealer locator`
- Production URL: https://ars-green-steel.vercel.app/
- Dealer locator URL: https://ars-green-steel.vercel.app/our-network
- Vercel deployment: `dpl_4AfuvJQX2BCCENKX5ds8HxHuEw5Q`
- Status: `READY`

What went live:

- Dealer locator updated from the supplied region-wise workbook with 1,566 unique records.
- State selection filters the city options; dealer codes remain internal only.
- Dealer cards include call and map direction actions.
- Privacy Policy and Terms of Use use the shared legal-page system.
- Mobile menu viewport positioning and duplicate React keys were fixed.

## Current Recommended Deployment Flow

Use GitHub push deployment as the normal process when working from `main`.

For the active redesign branch, use this flow:

1. Commit reviewed changes on `homepage-figma-refresh`.
2. Push `homepage-figma-refresh`.
3. Run a production deploy only after the user approves the reviewed work.

Current caution:

- The native `/blog` archive work may be local-only until committed and pushed.
- Do not include accidental package-manager files such as `pnpm-lock.yaml` or `pnpm-workspace.yaml` unless the package-manager strategy is intentionally changing.

### 1. Run Local Site

```bash
cd /Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign
npm run dev -- --hostname 127.0.0.1 --port 3032
```

Local preview:

```txt
http://127.0.0.1:3032/
```

If this URL says "This site can't be reached", the local dev server is not running.

### 2. Verify Before Push

Run these checks before deploying:

```bash
npm run build -- --webpack
git status
```

If available, also run:

```bash
npm run lint
npm run qa:routes
```

### 3. Commit And Push

```bash
git add .
git commit -m "Describe the update"
git push origin main
```

After `git push origin main`, Vercel automatically starts a production deployment.

### 4. Confirm Deployment

Open Vercel dashboard and check:

- Deployment status should become `Ready`.
- Production domain should point to the latest commit.
- Live site should update at https://ars-green-steel.vercel.app/

## Important GitHub And Vercel Notes

The repo is connected to Vercel through the GitHub app.

GitHub app access must include:

```txt
baburao/ars-green-steel-redesign
```

If deployment does not start after a push, check:

1. GitHub repo is connected in Vercel.
2. Vercel GitHub app has access to the repository.
3. The pushed branch is `main`.
4. The latest commit appears in Vercel Deployments.

GitHub app permissions page:

```txt
https://github.com/settings/installations
```

## Previous Deployment Issue And Fix

We had a blocked production deployment after commit:

```txt
b8556c5 Refine ARS homepage journey and typography
```

Vercel showed:

```txt
Deployment Blocked
The deployment was blocked because the commit author did not have contributing access to the project on Vercel.
The Hobby Plan does not support collaboration for private repositories.
```

Root cause:

- Vercel checks the GitHub commit author and repo access, not only the browser login.
- The commit author appeared as `baburao7772`.
- Vercel/project access was being evaluated separately.
- The repo had been private earlier, so Vercel treated the deployment as a private-repo collaboration case.
- Existing blocked deployments do not automatically unblock after permissions change.

What fixed it:

1. GitHub repository was made public.
2. Vercel GitHub app access was confirmed for `baburao/ars-green-steel-redesign`.
3. A fresh commit was created and pushed:

```txt
f41c180 Trigger production deployment
```

After that fresh push, Vercel deployed successfully.

## If Vercel Shows Blocked Again

Do not keep retrying the same blocked deployment.

Follow this checklist:

1. Confirm GitHub app access:

```txt
https://github.com/settings/installations
```

2. Confirm Vercel has access to:

```txt
baburao/ars-green-steel-redesign
```

3. Check local Git author:

```bash
git config --get user.name
git config --get user.email
```

Expected current author:

```txt
baburao7772
166382500+baburao7772@users.noreply.github.com
```

4. Create a fresh commit and push:

```bash
git commit --allow-empty -m "Trigger production deployment"
git push origin main
```

5. Check Vercel Deployments again.

If it still blocks, the remaining issue is account identity mismatch between GitHub commit author and Vercel project access.

## Clean Working Tree Before Deploy

Before pushing, always run:

```bash
git status
```

If `CLAUDE.md` appears as deleted but that deletion is not intentional, restore it:

```bash
git restore CLAUDE.md
```

Do not deploy with accidental deleted files.

## Vercel CLI Use

GitHub push is preferred.

Use Vercel CLI only when needed:

```bash
vercel link
vercel deploy --prod
```

If Vercel CLI asks to upgrade itself and fails with npm cache errors, skip the upgrade and continue with GitHub deployment instead.

## Production Domain Later

When the client approves the website:

1. Add the real domain in Vercel project settings.
2. Update DNS records from the domain provider.
3. Confirm HTTPS is active.
4. Recheck:
   - `/robots.txt`
   - `/sitemap.xml`
   - old URLs
   - blog URLs
   - enquiry/contact flows
5. Keep https://ars-green-steel.vercel.app/ as the staging/preview reference unless the client wants a different preview URL.

## Items That Can Be Added Later

These do not block preview deployment:

- Final client-approved contact details
- WhatsApp number
- Live steel price data
- Calculator formulas
- Final ARS verification of dealer active status and phone numbers
- Remaining original legacy assets
- PDFs, brochures, certificates, downloadable documents, and videos
