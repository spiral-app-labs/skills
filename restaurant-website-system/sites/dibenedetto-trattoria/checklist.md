# Checklist — DiBenedetto Trattoria

Build state, pre-pitch checklist, ship-checklist, post-ship follow-ups.
Update inline as you progress.

---

## Build state — 2026-05-02

| Phase | Status | Files |
|---|---|---|
| Lead qualification (15 candidates ranked) | ✅ | `research/lead-qualification/schaumburg-leads-2026-05-02.md` |
| 7-check qualification (visual reality + why-switch) | ✅ | inline in audit + lead doc |
| Site capture (desktop + mobile + DOM) | ✅ | `screenshots/`, `scrapes/current-site-dom-snapshot.html` |
| Google Reviews — Highest filter, 30 written | ⚠️ partial — see "Open follow-ups" | `scrapes/review-packet-aggregated.json` |
| Aggregator review fallback (Tripadvisor + Birdeye + Restaurantji + WebSearch) | ✅ | `scrapes/review-packet-aggregated.json` |
| Five-block audit | ✅ | `audit.md` |
| Fork gusto-01 (cucina-bella v2 base) | ✅ | `app/`, `components/`, `content.example.ts`, `theme.ts` |
| Content schema with verified facts + verbatim quotes | ✅ | `content.example.ts` |
| LiveMusicStrip improvement | ✅ | `components/LiveMusicStrip.tsx` |
| OwnerQuotePanel improvement | ✅ | `components/OwnerQuotePanel.tsx` |
| PressStrip improvement | ✅ | `components/PressStrip.tsx` |
| AI Concierge — system prompt | ✅ | `app/api/concierge/route.ts` |
| AI Concierge — UI rebrand (DB pill + DiBenedetto greeting) | ✅ | `components/Concierge.tsx` |
| Restaurant + Menu JSON-LD | ✅ | `app/layout.tsx` |
| Typecheck clean (`npm run typecheck`) | ✅ | — |
| Dev server running on port 3129 | ✅ | `.claude/launch.json` entry "dibenedetto" |
| Pitch doc | ✅ | `pitch-doc.md` |
| Battle cards | ✅ | `battle-cards.md` |
| Checklist (this file) | ✅ | `checklist.md` |

---

## Pre-pitch checklist (before sending the DM)

- [ ] Set `ANTHROPIC_API_KEY` in `.env.local` and verify the concierge streams a real reply ("What's on the menu tonight?" → live response).
- [ ] Replace the 19 cucina-bella placeholder JPGs in `public/images/dibenedetto/` with real DiBenedetto photography. Priority order:
  - [ ] `hero-dinner.jpg` — replace with the chef-flambé hero from the current site (or a fresh shoot).
  - [ ] `food6.jpg` — replace with a real Veal Napoleon plated shot.
  - [ ] `food7.jpg` — replace with a real DiBenedetto multi-plate spread.
  - [ ] `wine-bar.jpg` — replace with a real shot of the bar where the live music plays.
  - [ ] `food9.jpg` — replace with a wide dining-room shot (used for `/about` + `/contact` heroes).
  - [ ] `red-sauce-pasta.jpg` — Orecchiette Turiddu or Lasagna Romana close-up.
  - [ ] Carbonara, pappardelle, tiramisu, panna-cotta, dessert-martini, cocktails, food5 — secondary, can stay for v1 if needed.
- [ ] Ask Vittorio (or check the existing site) for the actual SpotHopper widget URL and replace the placeholder `https://www.spothopperapp.com/widgets/reservation/dibenedettotrattoria` in `content.example.ts` if it differs.
- [ ] Confirm founding year (best estimate 2012). If wrong, update everywhere: `content.brand.since`, hero eyebrow, story section, footer stamp, concierge system prompt.
- [ ] Confirm chef-name surfacing with Vittorio. If he prefers third-person ("Chef-Owner"), swap throughout: hero sub, story heading, owner-quote panel signature, concierge system prompt.
- [ ] Confirm the active live-music schedule (Wed/Fri/Sat) and whether named performers should appear.
- [ ] Confirm Marketing Director Denise's role + last name + whether she should be named publicly.
- [ ] Re-run Google Reviews scrape with in-app browser (when Claude in Chrome MCP is connected) — pull 30 verbatim Highest-filtered reviews + owner replies, refresh the ReviewCarousel `home.reviews.items` array in `content.example.ts`.
- [ ] Add 3 actual press hits if any surface (re-run WebSearch for `"DiBenedetto" "Daily Herald"`, `"DiBenedetto" "Chicago Tribune"`, `"DiBenedetto" "Best Of"`). If none, leave the PressStrip as aggregator scores.
- [ ] Replace pricing placeholders in `pitch-doc.md` ($X,XXX / $XX/mo) with actual numbers.
- [ ] Generate the before/after pitch screenshots:
  - [ ] Before — `screenshots/current-site-mobile-fold.png` already captured, with the El Taurino modal visible.
  - [ ] After — Vercel deploy a 4-shot before/after via `scripts/shoot-pitch-asset.mjs` (catalog tool).

---

## Ship-checklist (the day of pitch)

- [ ] Vercel deploy from `sites/dibenedetto-trattoria/`.
- [ ] Set Vercel env: `ANTHROPIC_API_KEY` (production scope).
- [ ] Verify the deployed URL renders correctly: home, /menu, /about, /contact.
- [ ] Verify all routes return HTTP 200.
- [ ] Verify the SpotHopper reservation link opens correctly from desktop + mobile.
- [ ] Verify the AI Concierge streams a reply on the deployed URL (not just dev).
- [ ] Smoke test the JSON-LD with Google Rich Results Test: `https://search.google.com/test/rich-results?url=<deploy-url>`.
- [ ] Run Lighthouse mobile audit — target Performance ≥ 85, Accessibility ≥ 95, SEO 100.
- [ ] Open the deployed URL on a real iPhone — confirm no popup, hero CTA visible at first paint.
- [ ] Generate the 4-shot before/after asset for the DM.
- [ ] Draft the DM in Instagram or email per `pitch-doc.md` "opening line" section.

---

## Post-ship follow-up cadence

- **Day 1:** send DM with the Vercel preview URL + 4-shot before/after.
- **Day 3:** if no reply, follow up with the El Taurino screenshot only ("Just wanted to flag this — happens to be running on your site right now").
- **Day 7:** if no reply, send Card 10 from `battle-cards.md` (the "even if you don't hire us" opener).
- **Day 14:** archive lead unless conversation has started.

---

## Open follow-ups (technical TODOs)

1. **Google Reviews — re-scrape via in-app browser.** Headless Playwright served the stripped 2-tab Maps panel (Overview + About only) on 4 attempts. The audit ships with aggregator-derived reviews (Tripadvisor + Birdeye + Restaurantji). Next session: connect Claude in Chrome MCP and re-pull the Highest-filtered 30 + owner replies, then refresh `content.example.ts` `home.reviews.items`.
2. **PressStrip lite-press hits.** If Daily Herald or Crain's surfaces a DiBenedetto mention via owner outreach, switch a few PressStrip rows from aggregator scores to actual press logos.
3. **Chef-portrait photo.** Tier-2 → Tier-1 lift requires one warm low-light Vittorio portrait. 30-min shoot.
4. **OG image.** Currently uses `food9.jpg`; consider a custom 1200×630 OG image with the wordmark + "Family Italian Since 2012" overlay.
5. **Sitemap.xml + robots.txt.** Not yet shipped — add before pitch.

---

## Files this build produced

```
sites/dibenedetto-trattoria/
├── audit.md                          # 5-block pre-fork audit
├── pitch-doc.md                      # the actual pitch
├── battle-cards.md                   # objection responses
├── checklist.md                      # this file
├── content.example.ts                # verified content schema
├── theme.ts                          # gusto-01 design tokens
├── tailwind.config.ts
├── package.json                      # name: dibenedetto-trattoria
├── app/
│   ├── layout.tsx                    # metadata + JSON-LD
│   ├── page.tsx                      # ScrollableHomePage host
│   ├── globals.css
│   ├── api/concierge/route.ts        # Haiku 4.5 streaming, DiBenedetto system prompt
│   ├── menu/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ScrollableHomePage.tsx        # composition with the 3 new improvement components wired
│   ├── LiveMusicStrip.tsx            # NEW improvement #1
│   ├── OwnerQuotePanel.tsx           # NEW improvement #2
│   ├── PressStrip.tsx                # NEW improvement #3
│   ├── Concierge.tsx                 # rebranded (DB pill, DiBenedetto greeting)
│   ├── ReviewCarousel.tsx            # carries 8 verbatim quotes from review packet
│   ├── StatCounter.tsx               # animates 4.6★/257, 326 reviews, etc.
│   ├── HeroPhoto.tsx
│   ├── HeroTestimonialCard.tsx
│   ├── HeroHoursSidebar.tsx
│   ├── HeroMultiCardAsymmetric.tsx
│   ├── HeritageStamp.tsx
│   ├── PhotoCardWithChip.tsx
│   ├── OpeningHoursTable.tsx
│   ├── LiveOpenStatus.tsx
│   ├── LiveMapEmbed.tsx
│   ├── MenuDishRow.tsx
│   ├── MenuStickyTestimonial.tsx
│   ├── BookATableButton.tsx
│   ├── TopNavBar.tsx                 # DB pill in top-right
│   ├── FooterMinimalRich.tsx
│   ├── ContactPage.tsx
│   ├── MobileCallBar.tsx             # bottom mobile bar (Reserve + Menu)
│   ├── ScrollReveal.tsx
│   ├── SisterVenues.tsx              # renders null (sisterVenues = [])
│   └── StarRating.tsx
├── public/images/dibenedetto/        # 19 placeholder JPGs (replace before pitch)
├── scrapes/
│   ├── current-site-dom-snapshot.html
│   ├── google-reviews-raw.json       # empty — Google blocked headless
│   ├── google-maps-reviews-final.html
│   ├── review-packet-aggregated.json # the actual 23-quote packet
│   ├── place-url.txt
│   ├── package.json                  # playwright dep
│   └── scrape-*.mjs                  # 4 scrape scripts (current site + 3 google variants)
└── screenshots/                      # current-site captures + Google attempt evidence
```

---

## Sign-off

- **Audit complete:** ✅
- **Site v1 + 3 improvements + concierge wired:** ✅ (running at http://localhost:3129)
- **Pitch + battle cards + checklist:** ✅
- **Ready to pitch:** after the pre-pitch checklist above is checked through.

— Ethan · 2026-05-02
