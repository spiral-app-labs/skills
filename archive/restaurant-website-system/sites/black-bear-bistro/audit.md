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

### Mobile state (iPhone 13, 390×844)

Captured via WebFetch HTML/CSS inspection of `theblackbearbistro.com`. *(Text-based-WebFetch-derived — no live preview server screenshots. Findings drawn from rendered DOM + Squarespace asset URLs.)*

1. **No primary CTA above the fold on iPhone 13.** Hero image fills the viewport; "Reservations," "Menu," and "Order Online" live in the nav and require scroll to surface as buttons. Per Principle 5.1 the conversion floor fails: no "Book a Table" widget, no visible reservation strip, no `Order Pickup` button on first paint.
2. **Reservation flow takes 3–4 taps.** Homepage → tap nav "Reservations" → scroll to in-page contact form → submit form. The bookable TableAgent page is *not* directly linked from the hero — it requires the user to either find it via Google or fall back to the form. Per Principle 1.1 + 4.3 this is under-surfaced for a reservation-essential bistro.
3. **Phone is properly linked.** `tel:2246789449` is a clickable tap-to-call link — passes Principle 4.3 mobile-phone baseline. (One of the few mobile wins.)
4. **Menu is PDF-gated** (`Dinner_Menu_12_5_2025.pdf`). On iOS Safari this typically renders inline in Quick Look, but the customer cannot scan a single dish or price without leaving the page first. Per Principle 1.3 + Anti-pattern #5 this is a register-encoding error for a $$ accessible bistro.
5. **No sticky bars / popups / cookie modals — passes** Part 8 anti-pattern #4. Hero image uses Squarespace responsive CDN sizing (passes mobile-fit baseline). Tap-target sizes default to Squarespace nav theme (typically below 44px without manual override — needs preview-capture verification).

**Net mobile state:** the booking funnel on mobile is "scroll past the hero, find the right nav item, fill out a form OR call." TableAgent — the actual bookable surface — is *not visible from the homepage on a 390×844 frame*. For a small-room bistro whose conversion model is reservation-first, that's the single most-citable mobile failure for the pitch. Phone-as-tel is good; everything else above it is hidden behind a scroll.

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

### Photography inventory + tier gate

Per Principle 5.2, photography is 40–60% of register fidelity, and tier-mismatch is the single biggest fork-risk in the system (Cucina Bella + Walnut both burned this).

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current website | ~5 (filet, roasted poblano, plated dish, molcajete, salmon) | ~4 (bottles, place settings) | 0 | 0 | ~1 (pumpkin pie) |
| Yelp (user-uploaded) | majority of 132 photos | several | 0 confirmed | unverified | unverified |
| Tripadvisor | included in 132+ aggregate | several | 0 confirmed | unverified | unverified |
| Facebook (270 reviews surface user photos) | many | several | unverified | unverified | unverified |
| Instagram `@theblackbearbistro` | could not extract — bio + feed inaccessible to WebFetch | — | — | — | — |
| Owner-supplied | **unknown — must ask** | | | | |
| **Total usable (current state)** | **~130+ user shots, mixed iPhone-quality** | abundant but mixed | **none confirmed** | unverified | unverified |

**Verdict: Tier-3 ready (confirmed). Tier-2 conditional. Tier-1 BLOCKED.** The current site already meets the plate-01 Tier-3 floor: bright daylight dish close-ups, actual restaurant photography (not stock), 5+ usable hero candidates (filet, roasted poblano, salmon, molcajete, plated dish). User-uploaded Yelp/Tripadvisor/FB photos are abundant but Tier-3-grading (mixed warmth, no curated composition, phone-shot). **No chef portrait, no exterior shot, no detail/process shots** — those are Tier-1 prerequisites the inventory does not currently support.

**Implication for template hypothesis (confirms existing plate-01 routing):**
- **Tier-3 (plate-01)** — VIABLE today on existing imagery. Bright dish-led hero matches plate-01's signature move. This is the recommendation already locked in the audit header — photo gate confirms it.
- **Tier-2 (gusto-01, labrisa-01, bramble-01)** — CONDITIONAL on warmer color-grading + 1 chef-portrait shot. Possible upgrade path if Suarez agrees to a portrait session.
- **Tier-1 (1776-redesign-01, varro-01, alinea-01)** — BLOCKED. No warm-low-light pro shoot, no chef portrait, no detail/process shots. Don't route here without a 30-shot pro session commitment.

**Recommended path:** ship plate-01 on existing photography with a single hero pick from the dish-5 set. Note a soft upsell ask — *"if you want to upgrade the room photography to warm-evening, here's what unlocks"* — for Phase 2 conversation, not Phase 1 ship.

### Existing risks (pre-upgrade)

- **Verify any 1776 Crystal Lake claim** with Suarez before surfacing it. The current public site says "nearly 30 years industry experience"; keep the pitch to that wording until the exact role and timeline are confirmed.
- **Chef-attachment to current Squarespace site.** This is Suarez's first solo restaurant — likely his first website ever. Pitch the rebuild as "let's let your résumé do the talking," not "your site is dated."
- **Photography is already good.** Squarespace + actual restaurant photography meets plate-01's Tier-3 floor (bright daylight, dish close-ups). Don't insist on a re-shoot — use what they have.
- **Square ordering stays.** Don't try to migrate `theblackbearbistro.square.site` — embed or link to it from the new site. Migrating ordering is unnecessary scope and a switching-cost spike that would weaken the pitch.
- **Plate-01's hero photography expects bright + dish-led.** Black Bear's Filet Mignon hero photo is darker / steakhouse-leaning. Audit the photo set for bright daylight options before locking the hero — or accept a slightly warmer hero treatment than canonical plate-01.

## Secret Sauce

The sales angle should make Black Bear feel seen as a chef-owned hidden gem, not merely a site with PDF friction. Review themes in the prototype point to adventurous dishes, wild game, sauces, artistic plating, accommodating service, and a cozy small room. The new site should make those strengths obvious before it asks for the reservation, pickup order, or menu download.

### Owner voice — verbatim phrases

Source: WebFetch of `theblackbearbistro.com` About / Story copy. **Limitation:** Google Maps owner replies are not accessible via WebFetch (lazy-loaded). IG bio (`@theblackbearbistro`) and FB "About" (`TheBlackBearBistro`) returned only structural markup, not rendered bio text. Direct owner outreach required to capture review-reply voice + social bios. The phrases below are drawn from current-site About copy + verified press copy.

```
[
  {
    phrase: "Head Chef Santiago Suarez brings nearly 30 years' experience in the food and hospitality industry to Main Street in Downtown Algonquin.",
    source: "current website About copy",
    tone: "specific, proud"
  },
  {
    phrase: "Firm believers in warm hospitality, Estela and Santiago are committed to providing an exceptional dining experience.",
    source: "current website About copy",
    tone: "warm, first-person plural (paraphrased about the owners)"
  },
  {
    phrase: "Modern American restaurant serving classic and inventive dishes with a focus on locally-sourced ingredients and wild game.",
    source: "current website / aggregator listing copy",
    tone: "plain-spoken, declarative"
  },
  {
    phrase: "Vegan, vegetarian, and gluten-free options are always available.",
    source: "current website / aggregator copy",
    tone: "specific, accommodating"
  }
]
```

**Voice signature:** the owner-authored register on the current site is short, plain-spoken, third-person about Santiago and Estela, and leans on *"warm hospitality"* + *"nearly 30 years"* as the recurring proof points. Fork should adopt *"warm hospitality"* and *"locally-sourced + wild game"* as load-bearing copy in the hero sub and About paragraph. Real owner-voice gold (Google replies, IG captions, FB posts) is gated behind direct owner outreach — added as a pre-flight ask in Block 5.

### External trust signals

Searched: Northwest Herald / Shaw Local, Tripadvisor, Yelp, Facebook, Restaurant Guru, Naturally McHenry County, McHenry County / Algonquin Chamber listings, regional "Best Of" lists.

```
[
  {
    source: "Northwest Herald (Shaw Local) Mystery Diner",
    year: 2021,
    claim: "\"the food is a wow\" — feature review (STALE 2021, 5 yrs old)",
    url: "https://www.shawlocal.com/best-of-the-fox/restaurants/2021/05/19/mystery-diner-in-algonquin-black-bear-bistro-serves-delicious-sometimes-decadent-offerings/"
  },
  {
    source: "Tripadvisor",
    year: 2026,
    claim: "4.8 rating · ranked #11 of 86 restaurants in Algonquin",
    url: "https://www.tripadvisor.com/Restaurant_Review-g29247-d15681334-Reviews-The_Black_Bear_Bistro-Algonquin_Illinois.html"
  },
  {
    source: "Yelp",
    year: 2026,
    claim: "178 reviews · 132 photos · New American category",
    url: "https://www.yelp.com/biz/the-black-bear-bistro-algonquin-2"
  },
  {
    source: "Facebook",
    year: 2026,
    claim: "96% recommendation rate · 270 reviews",
    url: "https://www.facebook.com/TheBlackBearBistro/"
  },
  {
    source: "Restaurant Guru",
    year: 2026,
    claim: "4.7 rating · 813 reviews aggregated",
    url: "https://restaurantguru.com/Black-Bear-Bistro-Algonquin"
  },
  {
    source: "Naturally McHenry County",
    year: "current",
    claim: "tourism listing",
    url: "https://www.naturallymchenrycounty.com/listing/the-black-bear-bistro/615/"
  },
  {
    source: "TableAgent",
    year: "current",
    claim: "active reservation listing",
    url: "https://tableagent.com/chicago/the-black-bear-bistro/"
  }
]
```

**Honest no-finds:** no formal awards, "Best Of" reader-poll wins, OpenTable Diners' Choice, Wine Spectator, James Beard, or curated regional press recognition surfaced beyond the 2021 Northwest Herald Mystery Diner quote. The trust strip the fork can build is **aggregator-rating-and-tourism-listing tier** (Tripadvisor #11/86 + 4.7–4.8★ across platforms + Naturally McHenry tourism + the 2021 NW Herald quote with explicit recency tag), not award-tier. Don't claim what isn't there. The freshest trust signal is the rating-volume-across-platforms — that's what the press strip should lead with, not the stale 2021 quote.

**Owner-response signal:** unconfirmed via WebFetch — Google Maps owner replies and FB post cadence not extractable in this pass. Add to Block 5 owner-outreach asks.

---

**Audit upgraded 2026-04-29** — Phase 1 captures added: Mobile state (Block 1) · Owner voice phrase bank (Block 2) · External trust signals (Block 2) · Photography tier gate (Block 5, first subsection). Hero Lock subsection deferred — existing audit pre-dates the Hero-Lock spec; flagged for Phase 2 if/when the build session opens. Owner-outreach asks generated by this pass: (1) confirm owner-reply cadence on Google + IG/FB so we can capture real owner-voice phrases, (2) confirm willingness for a single chef-portrait shot to unlock Tier-2 routing, (3) re-confirm the "nearly 30 years experience" wording as the canonical About claim (no 1776 Crystal Lake claim until verified).
