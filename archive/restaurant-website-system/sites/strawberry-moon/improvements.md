# Strawberry Moon improvement pass

Date: 2026-05-04

## Top 3 opportunities

1. Above-the-fold facts were still too soft for a mobile visitor deciding whether to stop in.
   Evidence/source basis: `audit.md` called out a conversion gap around hours, first-come seating, phone, map/directions, and event clarity. The official site and events evidence confirm Tuesday-Saturday from 4 pm, first-come seating, and Thursday-Saturday live music.

2. The below-fold mobile experience was losing clarity through weak contrast and awkward image rhythm.
   Evidence/source basis: `audit.md`, `qa-round-1.md`, and the captured `qa-round-2-mobile-2026-05-04.png` preview all pointed to mobile gallery spacing and low-contrast dark sections.

3. The first preview still needed more named review-backed proof to feel like Strawberry Moon instead of a generic lounge fork.
   Evidence/source basis: `scrapes/google-reviews-highest-30.json` repeatedly names Tuesday martini flights, the Strawberry Moon martini, dirty martinis, Stormy Night martinis, wine and cheese fondue, pretzel nuggets, the quiet upstairs, and Tom/bartender hospitality.

## What changed

1. Strengthened the hero conversion layer in `content.ts` and `components/MassiveWordmarkHero.tsx`.
   Added a compact fact strip for hours, seating, live-music cadence, and address.
   Rewrote the hero proof card to name Tuesday flights and the quiet upstairs instead of generic lounge language.

2. Tightened mobile clarity and image reliability in the home-page section components.
   Updated `components/CocktailPhotoRow.tsx`, `components/AsymmetricMiniGallery.tsx`, `components/NoPriceNamedList.tsx`, `components/OccasionsStaircase.tsx`, `components/BrandStoryParagraph.tsx`, and `components/EventsPreviewGrid.tsx` to improve mobile spacing, raise copy contrast, and give image tiles explicit canvas-backed containers so preview captures do not show stray strip artifacts as easily.

3. Replaced broad atmosphere copy with named, factual proof and cleaned up the contact framing.
   Revised `content.ts` to foreground Tuesday flights, signature martinis, fondue, pretzel nuggets, the upstairs conversation-friendly perch, and custom bartender-made drinks.
   Renamed the contact page’s booking-shaped language to direct-contact language in `app/contact/page.tsx` and `content.ts` so the page stays aligned with the first-come seating policy and the no-fake-booking constraint.

## Source basis

- Official homepage: Tuesday-Saturday open 4 pm, first-come seating, martinis/wine/nibbles/desserts, live music.
- Official events page evidence already captured in the audit: Thursday 6:30-9:30 pm, Friday-Saturday 7-10 pm.
- Google review packet: martini flights, signature martinis, wine and cheese fondue, pretzel nuggets, quiet upstairs, knowledgeable bartenders, Tom hospitality, live music that still allows conversation.

## Gate closeout — top 3 implemented evidence

- Build/typecheck evidence: `npm run typecheck` and `npm run build` passed during QA Round 3.
- Before/after evidence for improvement 1: Round 1/2 hero QA notes in `qa-round-1.md` and `qa-round-2.md`; final implementation and screenshots in `qa-round-3.md` plus `screenshots/qa-round-3-home-desktop-2026-05-04.png` and `screenshots/qa-round-3-home-mobile-2026-05-04.png`.
- Before/after evidence for improvement 2: Round 2 mobile gallery/contrast findings in `qa-round-2.md`; final pass in `qa-round-3.md` with home/menu/contact/about mobile screenshots.
- Before/after evidence for improvement 3: source/audit/review packet in `audit.md` and `scrapes/google-reviews-highest-30.json`; implemented copy in `content.ts` and final QA pass in `qa-round-3.md`.

Result: all three improvements are named, implemented, and backed by before/after QA or screenshot evidence. Mission Control heartbeat writeback succeeded as `c791097c-9730-43f6-988e-5467c82285f5`. Next canonical gate is `concierge`.
