# KEM Engineering & Design — Site Enhancement Plan

This is a large scope (8 new route types, SEO, schema, blog, accessibility, trust elements). I'll execute it in phases so each ships verifiable value without destabilizing the existing landing page. Nothing currently on the site will be removed — only added to or fixed.

## Phase 1 — Foundation (routes, SEO, fixes)
Highest leverage, unblocks every later page.

- Convert site from single-page to multi-route TanStack architecture while keeping the current landing page intact at `/`.
- Add per-route `head()` with unique title, description, OG and Twitter tags (fixes "Lovable App" preview).
- Add `LocalBusiness` JSON-LD on root (name, Iron-City Kasoa address, phone 0208450327, email, geo, hours).
- Add `src/routes/sitemap[.]xml.ts` (server route) and `public/robots.txt`.
- Custom branded 404 via root `notFoundComponent`.
- Fix homepage stat counters (verify they actually animate; replace zero defaults with real numbers).
- Fix dead footer social links (replace `#` with real URLs or remove).
- Add © 2025 line and footer quick links to new routes.
- Add skip-to-main-content link + ensure single `<main>` in root layout.

## Phase 2 — Service & Project detail pages
- Service data file (`src/data/services.ts`) with 8 services (slug, title, description, who-it's-for, deliverables, CTA).
- `src/routes/services.tsx` (index list, clickable cards) + `src/routes/services.$slug.tsx` (detail with CTA + cross-link to projects).
- Project data file (`src/data/projects.ts`) with 6 projects (slug, name, location, category, scope, challenge, outcome, images).
- `src/routes/projects.tsx` + `src/routes/projects.$slug.tsx`.
- Update homepage Services + Projects sections to link into the new detail pages instead of `#contact`.

## Phase 3 — About, Contact, Careers
- `src/routes/about.tsx` — story, mission, vision, team grid (placeholder team — I'll need names/photos from you later; will use neutral placeholders meanwhile).
- `src/routes/contact.tsx` — full contact card, Google Map embed (Iron-City Kasoa), WhatsApp CTA, consultation form (reuse existing `ContactForm`).
- `src/routes/careers.tsx` — "We're growing — no open roles right now" + general application CTA.

## Phase 4 — Blog
- `src/data/posts.ts` with 4 placeholder articles (titles you listed, ~400-word lorem-style bodies you can replace).
- `src/routes/blog.tsx` listing + `src/routes/blog.$slug.tsx` article page with Article JSON-LD.

## Phase 5 — Trust & polish
- Star ratings + role/title on existing testimonials (photos stay as initials avatars unless you supply images).
- "Why Choose KEM" differentiators block on homepage (4 items).
- Google Reviews static snippet (5 sample reviews — swap for live widget later if you want).
- Certifications/accreditation placeholder badges row (will use neutral text badges; replace with real logos when you provide them).
- Image lazy-loading (`loading="lazy"`, `decoding="async"`) on all below-fold imagery.
- Alt text audit on every `<img>`.
- Smooth scroll behavior on anchor links.

## Technical notes
- Stack stays TanStack Start + Tailwind v4. No new heavy deps.
- WebP conversion: existing `src/assets/*.jpg` will be re-imported via `?format=webp&w=...` query (vite-imagetools is built into Vite-served images? if not I'll add `vite-imagetools`). Will confirm during Phase 1.
- HTTPS, mobile responsiveness, and page-speed (unused CSS/JS) — Lovable hosting + Tailwind already cover these; I'll spot-check at the end.
- Canonical tags added per leaf route (not root, to avoid duplicate concatenation).

## What I need from you (can proceed without — will use placeholders)
1. Real team member names, roles, photos (for About).
2. Real project photos, names, locations (currently using generated images labeled Project 1–6).
3. Social media URLs (Facebook / Instagram / LinkedIn).
4. Any real Google review screenshots or text.
5. Certifications (GhIE membership #, etc.).

If you approve, I'll start with **Phase 1** and ship it before moving on, so you can review at each checkpoint.