# Cucina Bella Algonquin — Strategic Site Audit

> **Lead source:** [next-3-deep-research-audits-2026-04-27.md](../../research/lead-qualification/next-3-deep-research-audits-2026-04-27.md) #1 (highest-priority remaining vertical: Italian).
> **Pre-fork qualification:** Conditional build promoted to #1 by vertical economics; flagged in deep-research doc as "B+ tier by leak severity, promoted to #1 by vertical priority."
>
> **Address:** 220 South Main Street, Algonquin, IL 60102
> **Phone:** (847) 458-2504 main · (847) 456-1012 catering
> **Reservation provider:** Toast Tables (active above-fold, preserve)
> **Current site:** [cucinabellaalgonquin.com](https://cucinabellaalgonquin.com/) (custom static site, JS-loaded menu shell)
> **Public proof:** Tripadvisor 4.5 / 428 reviews / **#2 of 121 in Algonquin** (per deep-research doc; verify before pitch)
> **Origin:** Sannicandro, Italy. Tony's parents started a family of eight children. The kitchen is the inspiration.
> **Sister venues:** [cucinabellagalena.com](https://cucinabellagalena.com) (Galena, IL) + [bellaswoodfirepizza.com](https://bellaswoodfirepizza.com) (Algonquin, IL). All three are separate sites that cross-link.
>
> **Decision:** BUILD on `gusto-01`, **register-softened toward family-trattoria** (conservative softening — copy / photo / composition only; palette + type lock preserved).
> **Framework:** [research/restaurant-website-strategic-principles.md](../../research/restaurant-website-strategic-principles.md).
> **Critical guardrail:** Walnut failure mode applies if we let gusto-01's date-night lever run. Cucina Bella is family-casual Italian-American (~$17.50 avg entrée), not $$-$$$ date-night.

---

## What the current site actually does (verbatim findings, live-fetched 2026-04-27)

| Element | Current state |
|---|---|
| Hero copy | *"Experience authentic Italian flavors crafted with passion and tradition."* |
| Page title / tagline | *"Cucina Bella Algonquin — Award-Winning Italian Cuisine"* |
| Award claim | *"Award-Winning Italian Cuisine"* — **no specific award named** anywhere on the homepage. |
| Heritage / story | *"From Sannicandro Italy, where Tony's parents started their large family with 8 children is where the inspiration to bring authentic Italian food to Algonquin comes from."* (Section: "A TASTE OF HOME: CUCINA BELLA RESTAURANT") |
| Founding year | **Not present** on homepage, contact page, or anywhere I could fetch. No "Since YYYY" stamp. |
| Above-fold CTAs | *"View Menu"* + *"Make an RSVP"* (RSVP links to Toast Tables — preserve). |
| Reservation provider | Toast Tables, deep-link captured: `tables.toasttab.com/restaurants/192542ce-26a3-475f-a72a-745e78307085/reserve`. |
| Hours | **Not on homepage. Not on contact page.** Customers cannot answer "are you open?" without calling. |
| Address on homepage | **Not present.** Surfaced only on `/contact.html`. |
| Phone on homepage | **Not present.** Surfaced only on `/contact.html`. |
| Menu access | `/menu.html` — HTML shell with section labels visible, but item names/descriptions/prices are JS/CSV-loaded. No item or pricing text in the static HTML. |
| Menu sections (verbatim) | Antipasti · Zuppa & Insalate · Specials Della Casa · Personalizza La Tua Pasta · Pollo & Vitello · Pesce · Kids Menu & Dessert · Hot Drinks, Dessert Martinis & Liqueurs · Catering Menu |
| Trust signals on home | Sannicandro heritage paragraph. **No review count, no rating, no Tripadvisor/Yelp surface, no founding year.** |
| Photography | 9 in-house food photos (`algonquinfood1-9.jpg`) at 500×500 or 1000×500 — useful warm-graded plates, dining-room, and bar shots. |
| Sister-venue cross-link | "Galena" → [cucinabellagalena.com](https://cucinabellagalena.com) and "Bella's Woodfire" → [bellaswoodfirepizza.com](https://bellaswoodfirepizza.com) are surfaced as buttons. Each venue has its own separate site. |
| Social links on home | **None visible.** No Tripadvisor / Yelp / Facebook / Instagram badges or icons. |
| Schema | **No `Restaurant` / `LocalBusiness` JSON-LD detected** on homepage (audit `D5` flag in deep-research doc). |
| Email | Not listed publicly. |

> **Correction note for the deep-research doc.** The 2026-04-27 deep-research finding describes Cucina Bella as a "multi-location family wrapper." That is not how the current sites are structured: Algonquin, Galena, and Bella's Woodfire each run on their own separate website and link to each other via small sister-venue buttons. The build mirrors that pattern (standalone Algonquin site + slim sister-venues module).

### Mobile state (back-filled 2026-04-29)

WebFetch-derived; live-device capture not available this pass. Findings inferred from rendered DOM + observed-on-desktop layout patterns + Block 1 verbatim findings above.

1. **Hero CTA pair likely usable; hero copy is a wall on small viewports.** *"Experience authentic Italian flavors crafted with passion and tradition"* is centered over a background photo with no condensed mobile composition signal in the HTML — on a 390-wide viewport this is the kind of hero that pushes the *View Menu / Make an RSVP* button pair below the first fold once the navigation eats ~64px and the heading wraps to 3–4 lines.
2. **Address, phone, and hours are not on the homepage at all** (Block 1 verbatim finding) — so they are not on mobile homepage either. A diner deciding tonight has zero of the four basics in the first viewport. This is a Principle 5.4 floor-fail regardless of breakpoint.
3. **Reservation is one tap once the RSVP button is in view, but the button is below a copy-heavy hero** — phone tap-target sufficient (it is the deep-link to Toast Tables); friction is *finding* it, not pressing it.
4. **Menu page is a JS shell** (Block 1 anti-pattern #5) — on mobile this means a phone diner sees section labels (*Antipasti, Pollo & Vitello*, etc.) but waits for client-side hydration to read items + prices. Slow LTE = blank menu = bounce.
5. **No sticky call-to-call bar, no sticky reserve bar.** Once the hero scrolls past, no persistent conversion surface. Principle 5.4 + 1.1 violation on mobile specifically.
6. **No Google Maps embed on contact page surfaced in HTML** — phone user trying to navigate must copy the address out and paste into Maps.

**Net mobile state:** Below the floor on three of four Principle 5.4 checks (hero CTA above fold, hours/phone/address visible without zoom, sticky conversion surface). The reservation deep-link is the one thing that works. Recommend live-device capture pass before pitch deck (not blocking for the build because the failures are diagnosable from the rendered HTML).

---

## External trust signals (back-filled 2026-04-29)

These do not currently live on cucinabellaalgonquin.com. The rebuild surfaces them as a press strip below hero or in the proof block. Verified via WebSearch + WebFetch 2026-04-29.

```
[
  {
    source: "Tripadvisor",
    year: 2026,
    claim: "4.5 stars / 428 reviews / #2 of 121 in Algonquin / Travelers' Choice",
    url: "https://www.tripadvisor.com/Restaurant_Review-g29247-d929918-Reviews-Cucina_Bella-Algonquin_Illinois.html"
  },
  {
    source: "Yelp",
    year: 2026,
    claim: "509 reviews / 208 photos (live count, April 2026)",
    url: "https://www.yelp.com/biz/cucina-bella-algonquin"
  },
  {
    source: "Northwest Herald (Shaw Local)",
    year: 2025,
    claim: "Feature: 'Algonquin's Cucina Bella celebrates 20 years of serving up Italian family recipes' — confirms founding year 2005, owner Tony Colatorti, Bari/Sannicandro family heritage, Suprema sauce origin story",
    url: "https://www.shawlocal.com/northwest-herald/2025/07/24/algonquins-cucina-bella-celebrates-20-years-of-serving-up-italian-family-recipes/"
  },
  {
    source: "Best of the Fox (Northwest Herald reader poll)",
    year: 2018,
    claim: "Voted Best Italian Restaurant in McHenry County",
    url: "https://huntleyvoice.com/22383/thevoice/cucina-bella-the-go-to-place-for-italian-food/"
  },
  {
    source: "Huntley Voice",
    year: 2018,
    claim: "Student-press feature: 'Cucina Bella: The Go-to Place for Italian Food'",
    url: "https://huntleyvoice.com/22383/thevoice/cucina-bella-the-go-to-place-for-italian-food/"
  },
  {
    source: "McHenry Life",
    claim: "Local dining-directory listing (low-weight)",
    url: "https://mchenrylife.com/dining-entertainment/restaurants/algonquin/cucina-bella/"
  }
]
```

**Net upgrade vs existing audit:** existing audit named only Tripadvisor 4.5/428/#2. This pass adds (a) **founding year 2005 verified** by Northwest Herald — `since` field can now be filled, removing the placeholder caveat from Block 5; (b) **owner name verified** as Tony Colatorti; (c) **the "award-winning" claim is real** — Best of the Fox / Best Italian in McHenry County 2018 — but it is 7+ years old, so frame as "voted Best Italian, Best of the Fox 2018" with the year visible rather than evergreen "award-winning"; (d) **Travelers' Choice on Tripadvisor** is a current-year Tripadvisor honor; (e) **a 20-year heritage feature** in regional press is the highest-leverage proof asset and was not in the prior pass.

Owner-response signal: deferred — Tripadvisor + Yelp owner-reply cadence not captured this pass. Add to pre-pitch checklist.

---

## Owner voice — verbatim phrase bank (back-filled 2026-04-29)

Formalized from existing strong material in `content.example.ts` + augmented via Northwest Herald 2025 feature + current site About copy. Fork uses these as seed copy for hero sub, About paragraph, footer tagline, "Letter from chef" component, and 404 voice.

```
[
  {
    phrase: "From Sannicandro, Italy — where Tony's parents started a family of eight children — is where the inspiration to bring authentic Italian food to Algonquin comes from.",
    source: "current site About section (cucinabellaalgonquin.com)",
    tone: "heritage"
  },
  {
    phrase: "A taste of home, made for a table that keeps growing.",
    source: "fork content.example.ts (story.quote, derived from review themes + heritage signal)",
    tone: "warm"
  },
  {
    phrase: "Nonna's meat lasagna — Tony's favorite.",
    source: "fork content.example.ts menu (Specials Della Casa); echoes review-pattern of named-dish + named-person",
    tone: "specific"
  },
  {
    phrase: "Bold garlic, the kind regulars come back for.",
    source: "fork content.example.ts hero testimonial body, distilled from Betty Torres + Mark Halverson reviews",
    tone: "proud"
  },
  {
    phrase: "I peeked in the window and I saw the brick, and I was like, 'All right, this is it.'",
    source: "Tony Colatorti, Northwest Herald 2025 (founding-of-Algonquin story)",
    tone: "specific"
  },
  {
    phrase: "I think it's the best sauce. It's like a pink. Not a vodka, but the blend on it is just amazing. Lots of people try to duplicate it.",
    source: "Tony Colatorti, Northwest Herald 2025 (Suprema sauce origin)",
    tone: "proud"
  },
  {
    phrase: "Hopefully, it can stay and be a staple in Algonquin for as long as possible.",
    source: "Tony Colatorti, Northwest Herald 2025 (closing line)",
    tone: "warm"
  },
  {
    phrase: "Just like Nonna's — you won't leave dissatisfied and hungry.",
    source: "current site offering copy (cucinabellaalgonquin.com)",
    tone: "playful"
  }
]
```

**Use map for the fork:**
- Hero sub → Sannicandro line, condensed (already in fork as testimonial body).
- Story section → "table that keeps growing" + "I peeked in the window and saw the brick."
- Suprema build-your-own pasta description → quote Tony's "best sauce / pink blend" line directly.
- Footer tagline → *"A taste of home, made for a table that keeps growing."*
- 404 / empty-state voice → *"Just like Nonna's — you won't leave dissatisfied."*

This is the antidote to the *"Experience authentic Italian flavors crafted with passion and tradition"* generic-filler hero. Every prose block now sounds like Tony or a regular wrote it.

---

## Where it breaks the strategic principles

**§1.1 — Conversion surface ↔ revenue model: PARTIAL.** The right action (Toast Tables RSVP) is wired up above the fold, but the homepage doesn't surface hours, address, phone, or "open today?" — so a guest deciding tonight has to scroll, navigate, or call. Toast lives, but the rest of the conversion surface is thin.

**§1.2 — Aesthetic ↔ bill: WEAK.** *"Award-Winning Italian Cuisine"* without a named award reads as generic claim, not earned credibility. The homepage looks like a small-business static site rather than a #2-of-121-in-Algonquin restaurant. Not the Walnut over-shoot — an under-sell.

**§3.1 — Reviews placement: HIDDEN.** The single most valuable asset on this property is the public Tripadvisor signal (4.5★ / 428 reviews / #2 of 121 in Algonquin). The homepage surfaces zero of it. No star count, no review number, no ranking, no link to Tripadvisor.

**§3.2 — "Since YYYY": MISSED (and unverifiable).** No founding year is published anywhere on current site. The free 15–20% price-perception boost from a heritage stamp is left on the table — and we cannot honestly add a year until the owner confirms one. Cucina Bella deviation: `HeritageStamp` renders city-only until verified.

**§4.x — Trust basics on the homepage: BELOW FLOOR.** Address missing. Phone missing. Hours missing. No "Open today" indicator. A diner browsing on a phone has none of the four basics in the first viewport.

**§5.1 — First-viewport conversion floor: ACCEPTABLE for the CTA, LOW for proof.** Toast button + View Menu button are in the right place. But the hero copy is *"Experience authentic Italian flavors crafted with passion and tradition"* — the most generic sentence Italian-American hospitality writing produces. No specificity, no proof, no reason to choose this room over the next one.

**§5.3 — Copy specificity: GENERIC.** *"Authentic Italian flavors"*, *"passion and tradition"*. The Sannicandro paragraph is the one specific thing on the page; it should be a hero anchor, not a buried section.

**Anti-pattern #5 (menu-without-content): COMMITTED.** The `/menu.html` page loads section labels server-side but waits for JS to fetch + render the actual items + prices. Search engines and AI models cannot crawl the menu. A diner deciding between this and another Algonquin restaurant on a phone cannot pre-read the menu without waiting for client-side hydration.

**§Aliveness — Homepage: FLAT.** No hours indicator, no "open in Xh", no recent-event block, no news. No live signal of any kind that the restaurant is currently in business and serving today.

---

## So why are we rebuilding it?

The case is not "your site is broken." It isn't. The case is sharper:

1. **Earned proof is hidden.** Tripadvisor 4.5★ / 428 reviews / #2 of 121 Algonquin restaurants belongs in the first viewport. The redesign surfaces it as a proof strip and binds it into the hero. This is the single biggest lift available.

2. **Trust basics are missing.** Address, phone, and hours don't appear above the fold (or anywhere on the homepage). The redesign surfaces all four, plus a live "open now" indicator and a click-to-call.

3. **Menu is invisible to search and AI.** The `/menu.html` page is a JS shell. A server-rendered menu with verbatim section labels, item names, and prices closes the audit's `V3` leak.

4. **Schema is missing.** The redesign ships full `Restaurant` JSON-LD (address, geo, hours, `acceptsReservations`, `priceRange: "$$"`, `aggregateRating`, sister-venue `sameAs`), addressing `D5`.

5. **gusto-01 is the right register IF softened.** Heritage Italian + warm brick room + family ownership + Toast Tables active = gusto-01's core hypothesis. The risk is gusto-01's date-night intensity lever (testimonial-overlay, "intimate" copy, candlelit dish photography). The build pulls those levers down: hero copy is family-run + Algonquin + Sannicandro; signature dishes are red-sauce classics; "Wine Bar & Date Night" becomes "Wine, Bar, Dessert Martinis"; Toast preservation replaces phone-first.

6. **Switching cost is low.** Toast Tables stays. The custom static site has no SpotHopper/Wix/Squarespace lock-in. Photography is already on the current site and re-usable.

**Pitch sentence:** *"Your site has the reservation path, but it hides the proof. Tripadvisor puts you #2 of 121 in Algonquin and the homepage doesn't surface a star, a number, or the Sannicandro story that earned it. The site is the only thing underselling you."*

---

## Photography inventory + tier gate (back-filled 2026-04-29)

Per Principle 5.2, photography is 40–60% of register fidelity, and tier-mismatch is the single biggest fork-risk in the system. The existing audit flagged this implicitly ("Photo bank is sufficient but small"); this subsection makes the verdict explicit.

| Source | Dish shots | Interior shots | Chef / owner portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site (cucinabellaalgonquin.com) | 9 (`algonquinfood1-9.jpg`, 500×500 / 1000×500, warm-graded) | 1 brick dining room (`food9.jpg`) + 1 wine bar | 0 | 0 | 0 |
| Google Maps / Tripadvisor | uncatalogued this pass | uncatalogued | uncatalogued | uncatalogued | uncatalogued |
| Yelp | 208 photos listed (uncatalogued) | — | — | — | — |
| Instagram / Facebook | not captured this pass | — | — | — | — |
| Owner-supplied | 0 | 0 | 0 | 0 | 0 |
| Unsplash CC0 stock-pad (currently in fork) | 8 (carbonara, pappardelle-mushroom, red-sauce-pasta, tiramisu, panna-cotta, dessert-martini, cocktails, bar) | 0 | 0 | 0 | 0 |
| **Total first-party usable** | **~9** | **2** | **0** | **0** | **0** |

**Quality assessment of the 9 first-party shots:** Warm-graded, low-to-mid-resolution (500×500 / 1000×500 — adequate for cards, not for full-bleed hero), reasonable composition, register-correct (red-sauce-Italian-American, not date-night-trattoria). Two of the 11 original "interior" assets on the current site are decorative pizza illustrations — not photographs — and have already been discarded.

**Tier ladder verdict (Principle 5.2):**
- **Tier-1** (≥30 usable + chef portrait + process): BLOCKED. Inventory is ~9 dish + 2 interior + 0 portrait + 0 process.
- **Tier-2** (15–20 usable, consistent warm grading): **CONDITIONAL** — only with current Unsplash stock-pad in place (8 generic Italian shots filling pasta/dessert/bar slots). This is the existing fork's posture.
- **Tier-3** (8–12 bright daylight signature shots): satisfied with first-party alone, but mismatches gusto-01's warm-low-light register.

**Verdict: Tier-2 with stock-pad caveat (current posture is correct).** The fork ships at Tier-2 by leaning on warm-graded Unsplash CC0 for items where first-party shots don't exist (carbonara, tiramisu, dessert martinis, etc.). This is honest stock-padding, not register-shifting — all stock shots are red-sauce / Italian-American / warm-toned, register-consistent with first-party. **However**, hero remains a stock shot (`hero-dinner.jpg`), which is the single highest-risk slot for stock-pad detection.

**Recommended owner ask (pre-pitch, in Block 5 risks):**
1. Hero photograph — one warm-light, brick-wall-visible, plated-dish-with-glass shot (the 1776/gusto signature composition). Replaces stock `hero-dinner.jpg`.
2. Tony portrait — 1 owner shot, behind the bar or in dining room. Unlocks an About-page anchor and Owner-Voice quote attribution.
3. Suprema sauce process shot — 1 detail shot. Powers the Northwest-Herald-derived Suprema story (single most ownable signature on the property).
4. Nonna's meat lasagna — 1 signature dish hero (currently mapped to stock `red-sauce-pasta.jpg`). This is Tony's favorite and a review-anchor; deserves first-party.
5–6. Two more dining-room shots in service (people, candles, plates mid-meal) — replace the 0-count "in-service interior" gap.

Four to six additional first-party shots moves this from Tier-2-with-stock-pad to clean Tier-2 and unlocks the Tier-1.5 hero treatment gusto-01 was designed for. Template hypothesis (gusto-01) does NOT need to be reduced — the verdict supports the existing build — but the pre-pitch ask is real, not optional.

---

## Risks to flag before fork

- **Walnut over-shoot risk.** gusto-01 is a date-night-trattoria template by default. Cucina Bella is family-casual. **Mitigation:** conservative softening locked at the plan level (copy + photo + composition; palette + type stays). Register sanity check is a verification step before the pitch is sent.
- **Founding year is not verified.** No year appears anywhere on the current site or sister sites. Ship `HeritageStamp` as city-only until confirmed; do not invent a year. Same applies to "Award-Winning" copy — current site does not name an award, so the build avoids award claims entirely.
- **Hours are placeholder.** Hours are not on the current homepage or contact page. The build uses a reasonable lunch+dinner Italian-casual schedule (Tue–Sun 11:00 / closed Mon) to drive `LiveOpenStatus` and JSON-LD. **Verify with owner before pitch.** This is the single biggest content guardrail.
- **Menu items + prices are placeholders.** Section labels are verified verbatim from `/menu.html`. Item names + descriptions are representative Italian-American family classics for layout fidelity; prices are intentionally omitted. Owner's current dinner menu PDF should replace these before the pitch deck is finalized.
- **Photo bank is sufficient but small.** Nine real food photos + one bar/wine shot + one brick-dining-room-with-people shot = enough for hero, story, signature dishes, wine, and menu hero. Two of the original "interior" assets on the current site are decorative pizza illustrations, not photographs — discarded. If the owner has additional warm-graded interior shots, those should be added to elevate the hero.
- **Multi-location handling.** The deep-research doc described this as a "multi-location wrapper" — incorrect. The three venues run separate sites that cross-link. The build mirrors that pattern with a low-weight `SisterVenues` module before the visit/contact block, plus a "Family" column in the footer.
- **Toast Tables URL drift.** Captured deep-link from current homepage. If the owner re-creates their Toast venue, the URL will change. Validate before deploy.

## Secret Sauce

The redesign should not just expose Tripadvisor proof. It should echo why guests like Cucina Bella: Sannicandro family roots, bold garlic/red sauce, big portions, fair value, warm service, catering/event care, and the brick-room family-table feel. The pitch should say the site is hiding the restaurant's generosity, not that the restaurant needs a new personality.

---

> Audit upgraded 2026-04-29 — added Mobile state (Block 1), External Trust signals + Owner Voice phrase bank (Block 2), Photography Tier Gate (Block 5) per the five-block standard at `restaurant-website-audit/SKILL.md`.
