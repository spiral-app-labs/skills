# Da Baffone Cucina Italiana — Strategic Site Audit

> Accuracy note, 2026-04-27: this audit is useful internal context, but the OpenTable assumption is stale. Use `pitch-battle-card.md` and `research/lead-qualification/pitch-readiness-2026-04-27.md` as the current pitch source of truth.
>
> Lead from `research/lead-qualification/build-queue.md` priority #2; promoted to overall #1 after vertical-priority pivot to Italian-first (2026-04-25).
>
> **Address:** 111 N Main St, Crystal Lake, IL
> **Current site:** dabaffonecucinaitaliana.com (WordPress + WooCommerce)
> **Awards:** Best Italian + Best Wine Bar McHenry County
> **Avg entrée:** $36.55 (range $24.95–$52.95) — solidly $$-$$$
> **Reviews:** 289 Yelp / 922 FB / 96% recommend
> **Heritage:** 15+ years operating, family-run Southern Italian
>
> **Decision:** BUILD on gusto-01.
> **Framework:** `research/restaurant-website-strategic-principles.md`.
> **Pre-fork qualification:** `research/lead-qualification/batch-2-crystal-lake-a.md` #5 (passed all 7 checks).

---

## What the current site actually does (verbatim findings)

| Element | Current state |
|---|---|
| Hero copy | "Da Baffone is a cozy little getaway, a family owned Italian Restaurant in downtown Crystal Lake" + "traditional Southern Italian Cuisine" |
| Primary CTA | Text line: *"Reservations are highly recommended"* + phone `815-893-6149`. **No button. No widget.** |
| Reservation flow | **Phone-first on homepage** — *"Phone lines go live at 2:30pm Tue-Sun for Pre-orders & Reservations."* The checked OpenTable listing is not bookable. |
| Menu access | 6 separate sub-pages (Dinner / Wine / Dessert / Catering / etc.) — no inline preview, no signature-dish cards |
| Typography | Standard generic web serif/sans pairing — no italic display, no heritage serif voice |
| Palette | White wordmark on dark + warm photography (direction OK, execution generic) |
| Hours | One row reads literally `"4pm – 8..ish"` |
| Footer | Copyright **2014–2021** |
| Trust signals on home | Family-ownership narrative, TripAdvisor + FB links. **No award, no review count, no founding year.** |
| Platform | WordPress + WooCommerce (gift cards) |

---

## Where it breaks the strategic principles

**§1.1 — Conversion surface ↔ revenue model: BROKEN.** A $$-$$$ trattoria should make the reservation path clear above the fold. The checked OpenTable listing is not bookable, so the safe pitch is phone-first clarity: call CTA, live hours, address, menu, and reservation context in one mobile path.

**§1.2 — Aesthetic ↔ bill: UNDERSELLS by ~one register.** $36.55 avg entrée puts them in the heritage-serif / "Since 19XX" / atmospheric-hero band. Current "cozy little getaway" + generic web type reads $$ casual. They're charging $$-$$$ and signaling $$. Opposite of the Walnut failure — and it costs them the price-tier reservations they've already earned.

**§3.1 — Reviews placement: HIDDEN.** Best Italian + Best Wine Bar McHenry County is the single most valuable asset on this property, and it's nowhere on the homepage. Gusto's hero pattern bakes review count + rating into the hero card; Da Baffone has 922 FB / 289 Yelp / county-press authority and surfaces none of it.

**§3.2 — "Since YYYY": MISSED.** 15+ years operating, southern-Italian family heritage. No founding year stamp anywhere visible. Free 15–20% price-perception boost left on the table.

**§5.1 — First-viewport conversion floor: WEAK.** No primary CTA button. No award line. No reservation widget. No "Open today" indicator. Hero is text-heavy positioning prose with a phone number.

**§5.3 — Copy specificity: GENERIC.** "Cozy little getaway" / "traditional Southern Italian Cuisine" — no named chef, no named region, no named dish, no founding year. Per the principles' specificity rule: "the zucchini came from Marco's farm" beats "seasonal local produce."

**§4.2 — Hours sloppiness: TRUST HIT.** `"4pm – 8..ish"` is the kind of detail customers read as "they don't care about your time." Casual to the point of unreliable.

**Anti-pattern #5 (PDF/sub-page menu without preview): COMMITTED.** 6 separate menu pages, no signature-dish cards on the home, no prices visible without navigating away.

**Part 10 — Aliveness: DEAD.** Footer copyright `2014–2021` (5 years stale). No "Open in Xh", no seasonal hero refresh, no event/news block. Reads as abandoned, even though the business is thriving.

---

## So why are we rebuilding it?

The fork is justified — but **not** for the usual reason ("the site looks dated"). The case is sharper:

1. **The site is structurally underselling them.** Best Italian + Best Wine Bar McHenry County, $36.55 avg entrée. Site presents at $$ casual. Register-encoding error costing them the upper-tier reservations their food and reviews already qualify for. Concrete switch reason — not vague.

2. **The reservation funnel is phone-first but underpowered.** The homepage demands a phone call after 2:30 pm, without making the call path feel like the primary action. Anyone comparing dinner options on a phone has to hunt for hours, menu, and reservation context.

3. **gusto-01 is an honest register match.** Heritage Italian + intimate brick room + family ownership + $$-$$$ entrées + Best Wine Bar credential = exactly gusto's hypothesis (date-night trattoria). Pitch test passes — we're not overselling Walnut-style; we're correcting an under-sell.

4. **Switching cost is medium, not high.** Phone-first reservations, WooCommerce gift cards, email, map, and social links can be preserved or linked. No SpotHopper / Toast lock-in is visible from the current site.

**Pitch sentence:** *"You've already earned Best Italian in McHenry County — your homepage hides the award, hides the reviews, and routes reservations to a phone line that goes live at 2:30 pm. The site is the only thing underselling you."*

---

## Risks to flag before fork

- **Owner-operator emotional attachment** to 15 years of family-business WordPress content. Polarized review thread includes owner-conduct complaints about table-time limits — not a site problem, but a tell that the owner is opinionated. Pitch must lead with *"you've already earned this; your site is hiding it"* — NOT *"your site looks dated."* The first preserves their pride; the second triggers it.
- **Photography tier check before hero lock.** gusto-01 is Tier-2 acceptable (good phone + warm grading). Confirm Da Baffone has 15–20 usable warm-graded shots of dish + interior + brick wall before locking the hero treatment. If Tier-3 only, plan to insist on a shoot OR stage the hero as wordmark + mood rather than dish-led.
- **Reservation-provider verification.** Do not pitch OpenTable. If the owner confirms a different booking provider later, wire that link in; otherwise keep v1 phone-first.

## Secret Sauce

The site should sell what Da Baffone has already earned: family-owned Southern Italian cooking, a cozy brick room, sauces, pasta, seafood, desserts, wine, martinis, and local award proof. The pitch should start from pride - "you have the reputation" - and frame the rebuild as making the website act like a warmer, clearer host.
