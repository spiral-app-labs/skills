# MAAX Asian BBQ & Hot Pots — Pre-Fork Audit

**Slug:** `maax-asian-bbq`
**Date:** 2026-05-03
**Lead source:** Schaumburg-area lead pass + Woodfield-corridor pivot (`research/lead-qualification/schaumburg-leads-2026-05-02.md` Addendum)
**Status:** Qualified A-tier — bamzi-01 fork approved.

---

## Inputs Collected

| Input | File | Status |
|---|---|---|
| Current site DOM snapshot | `scrapes/current-site-dom-snapshot.html` | ✅ |
| Desktop full + fold screenshots | `screenshots/current-site-desktop-{full,fold}.png` | ✅ |
| Mobile screenshots | `screenshots/current-site-mobile-*.png` | ⚠️ TIMEOUT — Playwright `networkidle` exceeded 45s for the mobile viewport. The site never reaches network-idle on mobile — that's a Principle 5.4 + T1 finding in itself. |
| About page | `screenshots/about-desktop.png` | ⚠️ TIMEOUT — about page also never reaches network-idle. Combined with the prices 404 (below) this is a sub-page reliability problem. |
| Prices/Menu page | `screenshots/prices-mobile.png` | ⚠️ **404 NOT FOUND** — the navbar's "Prices" link returns "ERROR: PAGE NOT FOUND / 404 / This page isn't available." See screenshot. **This is the highest-leverage finding in the audit.** |
| Google Reviews — Highest, 30 written | `scrapes/google-reviews-raw.json` | ⚠️ PARTIAL — headless Playwright served stripped Maps panel (no Reviews tab). Aggregator fallback via Restaurantji + WebSearch SERP + OpenTable summary used. |
| Aggregated review packet | `scrapes/review-packet-aggregated.json` | ✅ (substitute) |

---

## Block 1 — Verbatim findings

| Field | Finding |
|---|---|
| Platform | Wix-flavored builder (404 page styling matches a generic builder template) |
| Hero copy | "Taste the Legend at Maax Asian BBQ & Hot Pots" — large white serif overlaid on a chopsticks-lifting-meat photo + a hot-pot-with-meat photo. |
| Hero image | Two-photo composite — chili-oil broth left, chopsticks-over-hot-pot right. Quality is decent. |
| Above-fold CTA | None obvious. The nav has "Reservation" but no hero-level Reserve button. |
| Primary CTAs | "Order Now" (page title), "Reservation" (nav, OpenTable), "Gift Cards" (nav). |
| Address | 222 E Algonquin Rd, Arlington Heights, IL 60005 (Woodfield corridor, ~4 mi from Woodfield Mall) |
| Phone | (847) 621-2018 |
| Email | info@maaxbbqhotpots.com |
| Reservation flow | OpenTable embed (preserve-stack candidate) |
| Menu format | **No HTML menu, no PDF menu, no menu visible from homepage. The "Prices" navigation link returns 404.** |
| Hours displayed | Daily 11:00 AM – 11:00 PM (last seating 10 PM); Mon–Fri lunch special 11–3. |
| Photography | Hero composite + 3-up grid (BBQ + hot pot + meat plates) + footer photo. **Two large empty blocks render mid-page** — a solid red rectangle and a solid black block — likely broken image embeds or missing assets that visibly degrade the scroll. |
| Owner / chef story | None. About page times out / fails to load. |
| Heritage signal | None — no founding year disclosed on any visible page. |
| Reviews displayed | None on site. 621 Google reviews / 4.7★ + 41 OpenTable / 4.8★ + 67+ Yelp — all invisible to a first-time visitor. |
| Aliveness elements | None: no LiveOpenStatus, no map embed, no "what's on this week," no real-time AYCE timer info. |
| Social | Instagram + Facebook + TikTok in header + footer. |
| Copyright string | © (footer) — text not surfaced in capture. |

### Mobile state — failure surfaces

Mobile capture timed out at `networkidle` after 45 seconds — the home page never reaches network-idle on iPhone 13 viewport. This is itself the headline mobile failure (Principle 5.4 + T1 + T2):

1. **Homepage doesn't finish loading on mobile.** Playwright's `networkidle` timeout means the page is still firing requests 45 seconds after first contentful paint — the LCP / INP scores are almost certainly outside Core Web Vitals thresholds. A mobile guest may bounce before the fold settles.
2. **Prices/menu page is broken on every device.** The screenshot at `screenshots/prices-mobile.png` is the literal "ERROR: PAGE NOT FOUND / 404 / This page isn't available / Go to Homepage" page. **This is the headline pitch screenshot.**
3. **No mobile sticky bar surfacing Order / Reserve / Call.** Mobile guests have to dig into the header menu for actions.
4. **Mid-page render holes.** The desktop full-page screenshot shows a solid red rectangle and a solid black block where images should be — these will render the same way on mobile and trigger Principle 5.2 + 5.3 violations (broken photo + empty copy slots).

---

## Block 2 — Secret Sauce (review-derived)

What guests come back FOR: an interactive AYCE format that's actually fun (BBQ at the table + hot-pot in front of you), a kitchen that does Korean BBQ + Chinese hot pot under one roof, broths that read flavorful (Szechuan spicy gets named), and a price-per-person that lands in the family + group + date-night sweet spot.

### 1. Format / experience

The hot-pot + BBQ-at-the-table combo IS the brand. *"Great combination of Hot Pot and Korean BBQ — buffet of veggies and sauces, unlimited meat, attentive service."* (anonymous, WebSearch SERP) · *"My first Asian BBQ and hot pot experience — amazing. A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything."* · Smokeless grills built into each table + tableside hot-pot burners.

### 4. Signature dishes (consensus)

- **Beef boneless short ribs** — *"a favorite when it comes to BBQ"*
- **Malatang** — *"recommended for the hot pot"*
- **Szechuan spicy broth** — *"flavorful"* (specifically named in reviews)
- **Juicy AYCE meats** — *"tons of options, from juicy meats to fresh veggies"* (Ivan Layese)
- **Fresh seafood** + **sushi** rolls (multi-cuisine cross-over)
- **Fries** — *"items like fries that kids love"* (family-friendly signal)

### 9. Occasions

Reviews explicitly cite: *"family, friends, date night, honestly anything."* That's a four-occasion brand signal. The current site surfaces zero of those occasions visually.

### 10. Service moments

*"Outstanding service"* + *"attentive service"* + *"Service was great and the quality of the food was good"* — service is the second-most-named asset after the format itself.

### 11. Value

$20–30 per person (lunch tier) up to $30–50 (dinner / premium). Mon–Fri lunch special is the value proof point. The current site doesn't surface AYCE pricing at all — that's a Principle 1.2 + V3 violation since AYCE pricing IS the conversion question for this concept.

### 13. Second register

**Full liquor bar** with extensive draft selection and cocktails. Mentioned in OpenTable amenities, completely buried on the site. Would be load-bearing for date-night + group occasions.

### Owner voice — verbatim phrases

The owner doesn't surface a voice anywhere reachable on the current site (About times out). Recommend asking the owner for:
- Founding year + origin story
- Family/owner names (Korean? Chinese? mixed background — the menu is pan-Asian)
- Why the multi-cuisine + AYCE format (a deliberate choice, not a default)

For v1, the site uses brand-voice copy from Tripadvisor's own one-liner: *"a modern Asian Hot Pot and BBQ restaurant that brings the rich, interactive dining traditions of East Asia to the heart of Arlington Heights."*

### External trust signals

```
[
  { source: "Google", claim: "4.7★ / 621 reviews" },
  { source: "OpenTable", claim: "4.8★ / 41 diners" },
  { source: "Restaurantji", claim: "#2 of 65 BBQs in Arlington Heights" },
  { source: "Yelp", claim: "67+ reviews" }
]
```

No press hits found via WebSearch (Daily Herald, Crain's, Eater Chicago all silent for MAAX). The trust strip surfaces aggregator scores rather than press logos.

**Owner-response signal:** Tripadvisor listing is unclaimed (0 reviews surfaced). OpenTable presence is active (41 diners). Google review responses unknown (couldn't crawl). This is a soft signal that owner-side review engagement is light — the rebuild should include an "owner replies" cue and a recommendation to claim Tripadvisor.

---

## Block 3 — Per-principle violations

**Principle 1.1 — Conversion CTA: WEAK.** No above-fold Reserve / Order CTA. The action surfaces are in the nav strip only, competing with Hiring + Gift Cards.

**Principle 1.2 — Aesthetic-to-bill: WEAK.** Hero photography signals premium ($$$ wagyu-style imagery) but the actual bill is $$$ AYCE ($20–50 per person). Hero is mildly oversold; AYCE pricing should be on-page.

**Principle 1.3 — Menu access friction: BROKEN.** *"Prices"* nav link returns 404. Menu is inaccessible from the homepage. Direct V3 + C1 violation.

**Principle 2.1 — Typography register: WEAK.** Hero serif is decent but the brand wordmark + body type are generic builder defaults. Pan-Asian register expects either Prata/Inter (bamzi-01 spec) or a confident sans-serif system.

**Principle 2.3 — Photography fidelity: MISSED.** Hero food shots are good. Mid-page **renders solid red and solid black blocks where images should be** — broken asset embeds. Footer photo is okay. Overall photography supports Tier-2 / bamzi-01-class but the broken blocks need to be removed before fork.

**Principle 3.1 — Reviews placement: HIDDEN.** 621 Google reviews + 4.7★, completely absent from the site. Largest unconverted trust asset in the audit.

**Principle 3.2 — "Since YYYY": MISSING.** No founding year anywhere. Even the About page is unreachable.

**Principle 3.3 — Chef-as-brand: HIDDEN.** No chef, no owner, no family — completely faceless brand.

**Principle 4.1 — Sub-page count: BROKEN.** Home / Prices(404) / Reservation / Hiring / Gift Cards / About(timeout) / Contact / More dropdown. Two of the eight nav links are inaccessible — a 25% navigation failure rate.

**Principle 4.2 — Hours: PASS** — Daily 11–11 visible.

**Principle 4.3 — Phone vs widget: WEAK.** Phone is footer-only, no header tap-to-call.

**Principle 5.1 — First-viewport floor: WEAK.** Hero is busy (two photos + serif overlay) but no Reserve / Order CTA at first paint.

**Principle 5.2 — First-viewport photo: PASS** — hero photography reads Asian-BBQ correctly. (But mid-page image holes drag the overall photography score down.)

**Principle 5.3 — First-viewport copy: WEAK.** "Taste the Legend" is generic — could appear on any restaurant site (Principle 8 anti-pattern #3). Doesn't surface AYCE pricing, doesn't name the format.

**Principle 5.4 — Mobile: BROKEN.** Mobile load times out at 45s. Mobile menu (Prices) is 404. No mobile sticky bar.

**Principle 5.5 — Repeat-visit aliveness: DEAD.** No live anything. Same static page on every visit.

**Part 8 — Anti-patterns:** generic hero copy + faceless brand + broken nav links.

**Part 10 — Aliveness layer: DEAD.**

---

## Block 4 — So why are we rebuilding it?

1. **The menu is a dead link.** The nav's *"Prices"* button returns 404 — guests cannot see AYCE pricing or item lists anywhere on the site. For a pricing-led concept (AYCE), this is the conversion question hidden behind a broken page. *(`screenshots/prices-mobile.png` — the literal 404 screen.)*
2. **The mobile homepage doesn't finish loading.** Playwright's headless `networkidle` exceeds 45s — real guests will hit blank-white-screen-while-stuff-loads territory. Core Web Vitals scores will be poor.
3. **Two render-holes (solid red + solid black blocks) sit mid-page where images should be.** These are not stylistic choices — they're broken asset embeds. They actively degrade the scroll.
4. **621 Google reviews + 4.7★ + 41 OpenTable diners + 4.8★ + #2 of 65 Arlington Heights BBQs — none of it on the site.** The strongest external trust block in the audit is invisible to first-time visitors.
5. **No AYCE pricing anywhere.** *"How much for AYCE?"* is the #1 conversion question for this category and the site doesn't answer it.
6. **No owner / chef / family / founding-year story.** Faceless brand against a competitor (Shabu-Yo Schaumburg) that has Skylark Group's 50-year heritage in its footer.

**Pitch sentence:** *"Right now your 'Prices' button returns a 404 — guests can't see AYCE pricing or your menu from the homepage. We rebuilt the site so the first thing guests see is the AYCE-Hot-Pot-and-BBQ pitch, the Mon–Fri lunch deal, the 4.7★/621 review proof, and the OpenTable button — the menu loads inline, no broken nav."*

### Hero Lock

```
{
  wordmark: "MAAX Asian BBQ & Hot Pots — kept as-is in the existing logo treatment",
  eyebrow: "ARLINGTON HEIGHTS — AYCE HOT POT + KOREAN BBQ",
  sub: "Smokeless grills at every table. Szechuan spicy broth, malatang, and beef short ribs called out by name in 600+ public reviews. Mon–Fri lunch from $20.",
  hero_photo_subject: "Primary: a hands-at-the-grill or hands-at-the-hotpot interactive shot — the format IS the brand. Fallbacks: (a) the chopsticks-lifting-meat shot from current hero (already exists); (b) a wide table-spread shot showing AYCE volume.",
  cta_primary: { label: "Reserve a Table", action: "open OpenTable widget (preserve-stack)" },
  cta_secondary: { label: "See AYCE Pricing", action: "scroll to inline pricing card (REPLACES the 404 prices page)" },
  rationale: "Drawn from: the 'Szechuan spicy broth was flavorful' SERP quote, the 'beef boneless short ribs are a favorite' SERP line, and Ivan Layese's 'all-you-can-eat buffet had tons of options' OpenTable review. Eyebrow names the city + the actual format. Sub answers the AYCE-pricing question the current site refuses to answer."
}
```

Notes:
- Wordmark stays in the existing red/black logo treatment unless the owner wants a refresh. bamzi-01's Prata 400 + orange accent will still chrome the layout around it.
- Eyebrow surfaces AYCE format as the primary register signal — this is the highest-leverage 7-word slot.
- `cta_secondary` literally replaces the broken /prices page with an inline pricing card on the home — the audit's #1 finding becomes the build's #1 fix.

---

## Block 5 — Risks before fork

### Photography inventory + tier gate

| Source | Dish | Interior | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site | ~6 (hero composite + 3-grid + footer) | 0 visible | 0 | 0 | 1 |
| Google Maps photos | 815 photos available | mixed | 0 | yes | many process (grill + hot pot) |
| Yelp | 150 photos | mixed | 0 | yes | yes |
| Instagram | active feed | yes | unknown | yes | yes |
| Facebook | active feed | yes | unknown | yes | yes |
| **Total usable** | **~30+ dish + process** | **~10–15 interior** | **0** | **3–5** | **~10 process** |

Quality assessment: photo volume is excellent for **Tier-2** (bamzi-01 / latte-01 class). The interactive-format process shots (grill + hot pot + meat slices) are the strongest asset and align with the bamzi accent register. Chef portrait is the missing asset — and may not be needed if the brand stays faceless by choice.

**Verdict: Tier-2 ready (bamzi-01 class). Tier-1 (1776 / qitchen / varro) overshoots — MAAX is a $$ AYCE concept, not a $$$ ceremonial one.**

### Register risk

AYCE Korean BBQ + hot pot + accessible-casual + family-friendly + group occasions = textbook **bamzi-01** fit (accessible-casual pan-asian with saturated accent). Cross-check `template-inventory.md`:

> bamzi-01 — Accessible-casual pan-asian with saturated accent — Prata 400 + Inter, #0F1A1A + #DD5903 orange — Orange-dot eyebrow + dark-leaf hero.

**Direct match.** No re-route needed. Avoid qitchen-01 (oversells — fine-dining sushi register) and avoid pepper-01 (undersells — pizza takeout register).

### Owner-emotional risk

- **Removing the broken /prices page** is the #1 ask. Replace with an inline AYCE pricing card on home + a real /menu page.
- **Adding the chef/owner story** is the #2 ask. If the owner prefers to stay faceless, build with a "Story" section that names the format choice + heritage instead of a person.
- **Tripadvisor unclaimed listing** — recommend the owner claim it during the rebuild.

### Heritage data unknowns (to confirm with owner)

- Founding year (likely 2023–2024 — verify)
- Owner / family names + heritage region
- Origin story for the Korean BBQ + Chinese hot pot + sushi multi-cuisine choice
- Whether to surface a chef name or stay format-as-brand

### Reservations-platform decision

Stay on OpenTable (preserve-stack). 41 OpenTable diners + 4.8★ is too valuable to migrate.

### Register-split risk

Full liquor bar + cocktails are a second register that should appear as an adjacent strip (group occasions + date-night). Don't bury under Catering/Events.

---

## Status footer

**Qualified A-tier.** Recommended template: **bamzi-01**. Photo Tier-2 ready. Pre-flight asks for owner: (1) confirm founding year, (2) approve replacing /prices 404 with inline pricing + real /menu, (3) decide on chef-name surfacing vs format-as-brand, (4) approve preserve-stack approach (keep OpenTable), (5) claim the Tripadvisor listing.

**Open follow-up: re-run Google Reviews scrape via in-app browser** for the v2 ReviewCarousel. Aggregator-derived 6 quotes are usable for v1.
