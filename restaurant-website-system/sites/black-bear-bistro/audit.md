# Black Bear Bistro — Strategic Site Audit

> Accuracy note, 2026-04-27: this audit is useful internal context, but booking and chef-history assumptions are stale. Black Bear has a public TableAgent booking page, and the 1776 claim should not be used until verified. Use `pitch-battle-card.md` and `research/lead-qualification/pitch-readiness-2026-04-27.md` as the current pitch source of truth.
>
> Lead from `research/lead-qualification/build-queue.md` priority #1 (bistro vertical, slot #2 overall after Italian-first vertical-priority pivot).
>
> **Address:** 107 S Main St, Algonquin, IL 60102
> **Current site:** theblackbearbistro.com (Squarespace + Square online ordering)
> **Awards:** "the food is a wow." — *The Northwest Herald* Mystery Diner, May 2021
> **Avg entrée:** $24 (range $12–$36) — squarely $$
> **Reviews:** 4.8★ Tripadvisor
> **Chef:** Santiago Suarez — official site says nearly 30 years of food and hospitality experience; wife Estela co-founder/guest-experience signal
>
> **Decision:** BUILD on plate-01.
> **Framework:** `research/restaurant-website-strategic-principles.md`.
> **Pre-fork qualification:** `research/lead-qualification/batch-1-algonquin.md` (passed all 7 checks; priority-#1 conviction in batch).

---

## What the current site actually does (verbatim findings)

| Element | Current state |
|---|---|
| Hero copy | *"For me it is the best restaurant in Algonquin."* — a **Google Review quote** stands in as the headline. No restaurant-authored positioning sentence. |
| Primary CTA | **None above the fold.** Nav has a "Reservations" link; no button, no widget. |
| Reservation flow | Nav includes "Reservations" and the public TableAgent listing is bookable. The opportunity is making booking, menu scanning, and pickup ordering obvious in one first-screen decision path. |
| Menu access | **3 PDF links** (Dinner / Specials / Vegetarian & Vegan). No inline preview, no prices on the page. |
| Online ordering | `theblackbearbistro.square.site` (Square-hosted). Linked, not embedded. |
| Typography | Sans-serif throughout. No italic display, no heritage serif. |
| Palette | Cream / off-white + near-black + burgundy/wine accent (warm muted tones). Direction is OK; execution is Squarespace-default minimalist. |
| Hero photo | Filet Mignon + wine glass — actual restaurant photography, not stock. |
| Trust signals on home | One pull-quote ("the food is a wow." — *Northwest Herald*, **May 2021** — 5 years old). Chef bio mentions "nearly 30 years' experience" but **does not name 1776 Crystal Lake**. |
| Hours / address / phone | Footer + `#visit-us` section (mid-pack prominence). |
| Platform | Squarespace (CDN fingerprint). |

---

## Where it breaks the strategic principles

**§1.1 — Conversion surface ↔ revenue model: BROKEN.** Per the template-to-business map (§6), a bistro is reservation-essential — gusto / varro / 1776 / plate-class with widget or "Book a Table" above the fold. Black Bear has TableAgent, but the current homepage does not make booking feel like the primary action beside menu and pickup ordering.

**§1.3 — Menu access friction: WRONG DIRECTION.** Per §1.3, PDF-gated menus signal "the menu is casual enough not to matter" — bar / vibes-first register. Plate-01's signature move is the opposite: menu IS the home page (inline 5-section). Black Bear is priced as an accessible $$ bistro and hides the menu like a cocktail bar. Register-encoding error in the opposite direction from Da Baffone.

**§3.1 — Reviews placement: CONFUSED.** Putting a single Google Review quote in the hero is the gusto-neighborhood pattern ("we NEED to earn your trust before you scroll") executed without the gusto receipts (4.8★ / 1,240 reviews). Reads as "we don't have enough reviews to count, so we picked one quote." Either commit (numeric review count + rating) or drop (use a positioning sentence and route reviews to a mid-scroll testimonial section).

**§3.3 — Chef-gallery / chef-as-brand: OPPORTUNITY MISSED.** The current site says Chef Suarez brings nearly 30 years' experience in food and hospitality, but that credibility is not doing enough first-screen work. Use the verified version of his background only; do not use the 1776 claim until confirmed.

**§5.1 — First-viewport conversion floor: WEAK.** No primary CTA button. No reservation widget. No "Open today" indicator. Hero is a customer pull-quote. Conversion floor is at the floor.

**§5.3 — Copy specificity: BORROWED.** Hero is a customer review quote, not a restaurant-authored positioning statement. The strongest verified copy levers they own — named chef, owner-led hospitality, wild game, vegan options, Square ordering, and TableAgent proof — are underused.

**§4.3 — Booking path: UNDER-SURFACED.** Bistro target demo is couples / families / after-work — mixed-age, mostly online-native. TableAgent exists, but the homepage should make booking feel immediate rather than secondary.

**Anti-pattern #5 (PDF menu, no preview): COMMITTED.**
**Anti-pattern #15 (menu without prices): COMMITTED** — prices are PDF-gated.

**Part 10 — Aliveness: STALE.** Press quote dated May 2021 reads as "we haven't gotten press since." No "Open in Xh", no event/news block, no seasonal hero refresh.

---

## So why are we rebuilding it?

1. **The online reservation flow is not prominent enough for a small-room bistro.** TableAgent exists and should be treated as an asset. For a $24-avg accessible bistro in a couples / after-work segment, booking should sit beside menu and pickup ordering from the first screen.

2. **Chef Suarez's verified experience is underused.** The official site says nearly 30 years in food and hospitality. That is enough to build trust without making an unverified 1776 claim.

3. **Menu is PDF-gated despite being plate-class register.** Plate-01's signature move is inline-menu-on-home — exactly the pattern that matches their $$ accessible-bistro positioning and exactly what they're missing. Customers who want to know what's for dinner have to download a PDF.

4. **Hero is a customer-quoted review, not their own voice.** They've outsourced their positioning to a Google quote. Plate-01's "Better food on every plate / Bold flavours, local ingredients, crafted with love" pattern lets them stake their own ground — and lets the chef pedigree be the lead, not a stranger's compliment.

**Pitch sentence:** *"You already have the ingredients guests care about: a chef-owned story, adventurous menu, TableAgent proof, Square ordering, and a small room worth booking. The website should put those decisions in the order guests need them."*

---

## Risks to flag before fork

- **Verify any 1776 Crystal Lake claim** with Suarez before surfacing it. The current public site says "nearly 30 years industry experience"; keep the pitch to that wording until the exact role and timeline are confirmed.
- **Chef-attachment to current Squarespace site.** This is Suarez's first solo restaurant — likely his first website ever. Pitch the rebuild as "let's let your résumé do the talking," not "your site is dated."
- **Photography is already good.** Squarespace + actual restaurant photography meets plate-01's Tier-3 floor (bright daylight, dish close-ups). Don't insist on a re-shoot — use what they have.
- **Square ordering stays.** Don't try to migrate `theblackbearbistro.square.site` — embed or link to it from the new site. Migrating ordering is unnecessary scope and a switching-cost spike that would weaken the pitch.
- **Plate-01's hero photography expects bright + dish-led.** Black Bear's Filet Mignon hero photo is darker / steakhouse-leaning. Audit the photo set for bright daylight options before locking the hero — or accept a slightly warmer hero treatment than canonical plate-01.
