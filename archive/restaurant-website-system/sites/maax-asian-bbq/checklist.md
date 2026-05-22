# Checklist — MAAX Asian BBQ & Hot Pots

Build state, pre-pitch checklist, ship-checklist, post-ship follow-ups.

---

## Build state — 2026-05-03

| Phase | Status | Files |
|---|---|---|
| Lead pivot from Shabu-Yo (chain) to MAAX (independent) | ✅ | `research/lead-qualification/schaumburg-leads-2026-05-02.md` (Addendum 2026-05-03) |
| Site capture (desktop + DOM + about + prices) | ✅ | `screenshots/`, `scrapes/current-site-dom-snapshot.html` |
| Google Reviews — Highest, 30 written | ⚠️ partial — see "Open follow-ups" | `scrapes/google-reviews-raw.json` (empty), `scrapes/review-packet-aggregated.json` (substitute) |
| Five-block audit | ✅ | `audit.md` |
| Fork bamzi-01 (cucina-/cb-/v2 base) | ✅ | `app/`, `components/`, `content.example.ts`, `theme.ts` |
| Content schema with verified facts + AYCE pricing tiers | ✅ | `content.example.ts` |
| AYCEPricingCard improvement #1 (replaces /prices 404) | ✅ | `components/AYCEPricingCard.tsx` |
| HowItWorksFormat improvement #2 (4-step AYCE explainer) | ✅ | `components/HowItWorksFormat.tsx` |
| AggregateProofStrip improvement #3 (4-stat count-up) | ✅ | `components/AggregateProofStrip.tsx` |
| AI Concierge — system prompt grounded in MAAX content | ✅ | `app/api/chat/route.ts` (dynamic from `content`) |
| AskConcierge UI rebranded ("Ask MAAX Asian BBQ & Hot Pots") | ✅ | `components/AskConcierge.tsx` (uses `restaurantName` prop) |
| LiveOpenStatus + LiveMapEmbed (catalog primitives) | ✅ | wired in nav + contact |
| Typecheck clean (`npm run typecheck`) | ✅ | — |
| Dev server running on port 3130 | ✅ | `.claude/launch.json` entry "maax" |
| Pitch doc | ✅ | `pitch-doc.md` |
| Battle cards | ✅ | `battle-cards.md` |
| Checklist (this file) | ✅ | `checklist.md` |

---

## Pre-pitch checklist (before sending the DM)

- [ ] Set `ANTHROPIC_API_KEY` in `.env.local` and verify the concierge streams a real reply ("How much is AYCE?" → live tier response).
- [ ] **Confirm actual AYCE pricing tiers** with the owner — the seeded numbers ($32–35 / $42–45 / $58–65) are estimates from the audit's review packet. Replace in `content.example.ts` `menuPage.categories[0]` and `components/AYCEPricingCard.tsx` `TIERS`.
- [ ] **Confirm Mon–Fri lunch starts at $20** — verify the actual lunch price.
- [ ] **Confirm founding year.** If owner provides, replace eyebrow + add a "Since YYYY" callout.
- [ ] **Confirm chef-as-brand vs format-as-brand decision.** Current build is format-as-brand. If owner wants chef surfaced, add a chef section.
- [ ] Replace 9+ Unsplash placeholder photos in `content.example.ts` with real MAAX photography:
  - [ ] `hero.plateImage` — primary hero shot (interactive grill or hot-pot moment)
  - [ ] `mission.image` — secondary "format" shot
  - [ ] `categoryStrip.categories[*].image` — beef short ribs, Szechuan broth, malatang
  - [ ] `featured[*].image` — Korean BBQ section + Hot Pot section
  - [ ] `testimonial.chefImage` — table-spread shot
  - [ ] `blog.posts[*].image` — lunch / malatang / events
  - [ ] `timelessFooter.image` — hero closer
  - [ ] `about.immerse.chefImage` + `about.hours.image` + `about.chefs.team[*].image`
  - [ ] `contactPage.photos[*]` — three contact-page photos
- [ ] Replace the placeholder pricing in `pitch-doc.md` ($X,XXX / $XX/mo) with actual numbers.
- [ ] **Have owner claim the Tripadvisor listing.** It's currently unclaimed → 0 reviews showing. Free trust signal.
- [ ] Generate before/after screenshots:
  - [ ] Before — `screenshots/prices-mobile.png` (the 404)
  - [ ] Before — `screenshots/current-site-desktop-full.png` (showing the red + black render holes mid-page)
  - [ ] After — Vercel deploy URL screenshots from desktop + mobile

---

## Ship-checklist (the day of pitch)

- [ ] Vercel deploy from `sites/maax-asian-bbq/`.
- [ ] Set Vercel env: `ANTHROPIC_API_KEY` (production scope).
- [ ] Verify the deployed URL renders correctly: home, /menu, /about, /news, /contact.
- [ ] Verify the OpenTable reservation link opens correctly from desktop + mobile.
- [ ] Verify the AI Concierge streams a reply on the deployed URL.
- [ ] Smoke test the JSON-LD with Google Rich Results Test.
- [ ] Run Lighthouse mobile audit — target Performance ≥ 85, Accessibility ≥ 95, SEO 100. Compare to current site (which times out at networkidle on mobile).
- [ ] Open the deployed URL on a real iPhone — confirm hero CTA visible at first paint, no 404 on Prices, AYCE pricing card visible above the fold-3 mark.
- [ ] Generate the 4-shot before/after asset for the DM.

---

## Post-ship follow-up cadence

- **Day 1:** send DM with the Vercel preview URL + the /prices 404 screenshot.
- **Day 3:** if no reply, follow up with the AYCE pricing card screenshot only ("Wanted to send you the pricing card — your guests are looking for this and your current site doesn't have it").
- **Day 7:** if no reply, send Card 10 from `battle-cards.md` (the "even if you don't hire us" opener with the free 404 fix).
- **Day 14:** archive lead unless conversation has started.

---

## Open follow-ups (technical TODOs)

1. **Google Reviews — re-scrape via in-app browser.** Headless Playwright served the stripped Maps panel (no Reviews tab) for MAAX too. Aggregator-derived 6 quotes are usable for v1; re-pull via Claude in Chrome MCP for v2 to get 30 verbatim Highest-filtered reviews + owner replies if any.
2. **Concierge env var.** Currently uses `Anthropic()` which auto-reads `ANTHROPIC_API_KEY` from environment. Needs the env var set in dev (.env.local) and prod (Vercel) before the chat will stream.
3. **Mobile screenshot capture.** Current-site mobile capture timed out at `networkidle` — that's a finding in itself but means we don't have a mobile fold screenshot of the live site. For the pitch deck, capture via real iPhone Safari instead.
4. **Tripadvisor listing claim.** Recommend in-pitch.
5. **Replace placeholder Unsplash with real photos.** 815 Google Maps photos available — easiest path is owner sends a Dropbox of 10 favorites.
6. **Sitemap.xml + robots.txt.** Not yet shipped.
7. **MissionSplit copy still has bamzi placeholder copy ("Immerse yourself in an asian experience") in some downstream sections** — sweep `components/MissionSplit.tsx` and `components/CategoryStrip.tsx` for any remaining bamzi defaults that didn't pick up from `content.example.ts`.

---

## Files this build produced

```
sites/maax-asian-bbq/
├── audit.md                          # 5-block pre-fork audit
├── pitch-doc.md                      # the actual pitch
├── battle-cards.md                   # objection responses
├── checklist.md                      # this file
├── content.example.ts                # verified content schema (MAAX-specific)
├── theme.ts                          # bamzi-01 design tokens
├── tailwind.config.ts
├── package.json                      # name: maax-asian-bbq
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      # homepage with 3 improvements wired
│   ├── globals.css
│   ├── api/chat/route.ts             # AI concierge — dynamic system prompt
│   ├── menu/page.tsx
│   ├── about/page.tsx
│   ├── news/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── AYCEPricingCard.tsx           # NEW improvement #1
│   ├── HowItWorksFormat.tsx          # NEW improvement #2
│   ├── AggregateProofStrip.tsx       # NEW improvement #3
│   ├── AskConcierge.tsx              # rebranded with restaurantName prop
│   ├── DarkLeafHero.tsx              # bamzi-01 signature hero
│   ├── SplitHeader.tsx               # M logo + nav
│   ├── MissionSplit.tsx
│   ├── CategoryStrip.tsx
│   ├── BigHeadline.tsx
│   ├── MenuListDotLeader.tsx
│   ├── TestimonialChefBlock.tsx
│   ├── BlogCardGrid.tsx
│   ├── TimelessFooterSection.tsx
│   ├── ContactStripFooter.tsx
│   ├── LiveOpenStatus.tsx
│   ├── LiveMapEmbed.tsx
│   ├── ScrollReveal.tsx
│   └── (other catalog primitives — chef grid, contact form, etc)
├── public/                           # bamzi-01 default public assets
└── scrapes/
    ├── current-site-dom-snapshot.html
    ├── about-dom.html
    ├── prices-dom.html               # the 404 page
    ├── google-reviews-raw.json       # empty — Google blocked headless
    ├── review-packet-aggregated.json # the actual 6-quote packet
    ├── place-url.txt
    ├── package.json
    └── scrape-current.mjs + scrape-google-reviews.mjs
```

---

## Sign-off

- **Audit complete:** ✅
- **Site v1 + 3 improvements + concierge wired:** ✅ (running at http://localhost:3130)
- **Pitch + battle cards + checklist:** ✅
- **Ready to pitch:** after the pre-pitch checklist above is checked through (especially: confirm AYCE pricing, set ANTHROPIC_API_KEY, replace placeholder photos).

— Ethan · 2026-05-03
