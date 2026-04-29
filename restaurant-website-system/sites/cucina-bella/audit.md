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
