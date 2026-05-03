# DiBenedetto Trattoria — Pre-Fork Audit

**Slug:** `dibenedetto-trattoria`
**Date:** 2026-05-02
**Lead source:** Schaumburg-area lead pass 2026-05-02 (`research/lead-qualification/schaumburg-leads-2026-05-02.md`)
**Status:** Qualified A-tier — gusto-01 fork approved.

---

## Inputs Collected

| Input | File | Status |
|---|---|---|
| Current site DOM snapshot | `scrapes/current-site-dom-snapshot.html` | ✅ |
| Desktop full + fold screenshots | `screenshots/current-site-desktop-{full,fold}.png` | ✅ |
| Mobile full + fold screenshots | `screenshots/current-site-mobile-{full,fold}.png` | ✅ |
| Menu page mobile screenshots | `screenshots/menu-mobile-{full,fold}.png` | ✅ |
| Google Reviews — Highest, 30 written | `scrapes/google-reviews-raw.json` | ⚠️ **PARTIAL** — headless Playwright served stripped 2-tab Maps panel (Overview + About only) on 4 attempts (v1–v4 stealth). In-app browser MCP not connected. Reviews packet was assembled from Tripadvisor (15 verbatim + 2 owner replies), Birdeye/Facebook (8 verbatim + 2 owner replies), and Restaurantji thematic summary. **Audit proceeds with explicit gap noted.** Recommend manual Google packet for the v2 ReviewCarousel. |
| Aggregated review packet | `scrapes/review-packet-aggregated.json` | ✅ (substitute) |
| Visual asset inventory | Tripadvisor + Yelp + Restaurantji photo counts (143 / 105 / 107) | ✅ summary |

---

## Block 1 — Verbatim findings

| Field | Finding |
|---|---|
| Platform | SpotHopper (footer credit: *"Website design, Social Media marketing and Email marketing provided by SpotHopper"*) |
| Hero copy | Carousel: *"GREAT WINE SELECTION"* / *"PREMIUM ITALIAN CUISINE"* / *"SERVED TO PERFECTION"* + tagline *"Come Enjoy And Be Part Of The Family"* |
| Hero image | Photo of a man (likely chef-owner Vittorio) in black suit holding a flame — strong photo, but obscured by popup on first paint |
| Above-fold CTA | **Blocked by popup modal** *"CELEBRATE THAT SPECIAL GRAD!"* (desktop) / *"EL TAURINO Cinco de Mayo"* (mobile — see Block 3) |
| Primary CTAs | Order Online · Make Reservations · Book Private Parties · Catering |
| Address | 1766 W Algonquin Rd, Hoffman Estates, IL 60192 |
| Phone | (847) 496-5016 |
| Reservation flow | SpotHopper embedded widget + phone fallback |
| Menu format | HTML (not PDF) — 5 tabs: Main Menu / Dinner / Dinner Specials / Party Packages / Gourmet Catering. *"Everything is made to order, patience is appreciated"* sub-header |
| Hours displayed | Mon–Thu 4–9 PM · Fri–Sat 4–10 PM · Sun 4–8 PM (closed lunch) |
| Photography | ~34 site images, but several full-page sections render as solid black on capture (likely lazy-load failure or broken image refs); large photo gallery exists but appears platform-styled |
| Owner / chef story | One sentence: *"often times with the chef himself"*. Chef-owner Vittorio Di Benedetto is **invisible** as a named person. |
| Heritage signal | **None visible.** Founded ~2012 per oldest review ("opened about 5 months ago" Sep 2012), so ~13 years in operation — completely unsurfaced. |
| Reviews displayed | None on site. 4.5★/326 reviews aggregated across platforms — invisible to first-time visitor. |
| Aliveness elements | None: no LiveOpenStatus, no map embed, no real-time reservation availability, no upcoming live-music schedule on home |
| Social | Facebook + Instagram + Google links in nav |
| Copyright string | © 2026 DiBenedetto Trattoria. All Rights Reserved. |

### Mobile state — failure surfaces (iPhone 13, 390×844)

1. **Hero is buried under a third-party popup.** Mobile fold shows an *"EL TAURINO Cinco de Mayo"* promo modal — for **a different restaurant**, El Taurino Mexican Grill (4 Golf Center, Hoffman Estates). This is a SpotHopper cross-promo network ad served on DiBenedetto's own homepage. *(See `screenshots/current-site-mobile-fold.png`.)* This is a Principle 1.1 + 5.1 + 8 anti-pattern catastrophe — guests arriving to book at DiBenedetto's are pitched a Cinco de Mayo party at a different restaurant before they see DiBenedetto's name.

2. **Hero CTA is below fold on iPhone 13.** Once the popup is dismissed, the Reserve / Order CTAs are not visible until 1–2 scrolls down.

3. **Mobile sticky bottom bar exists but is generic.** Bottom nav shows ORDER · RESERVE · JOBS · PARTIES · CATERING. JOBS is a low-intent action competing for tap-target space with the actual money path.

4. **Several content sections render black** (full-page mobile capture). Likely lazy-load failures or image hotlink breakage on the SpotHopper-managed asset paths.

5. **No tap-to-call or tap-to-directions in the visible header strip.** Phone (847) 496-5016 is buried in footer.

---

## Block 2 — Secret Sauce (review-derived)

What guests come back FOR: a chef-owner who personally walks the room, a kitchen that bends the menu for you, classic Italian in generous portions, and live music + dancing 3 nights a week in a small strip-mall room that out-cooks its zip code.

### 1. Owner / family story

The owner is the brand. Multiple verbatim mentions:

- *"The owner checked on us a few times and offered us complimentary desserts. We were stuffed, so he sent out two limoncellos on the house."* — Denise M, Sep 2023
- *"Owner is very gracious and makes you feel at home with every visit. ...feeling like visiting friends."* — MWG, Feb 2020
- *"Great food! Great owners! Great staff!"* — Nicole Zale
- *"Family owned. This is our second time here, and we will be back and take others!"* — Denise M

Owner-name confirmed: **Vittorio "Vito" Di Benedetto** (signs replies *"Mille Grazie! Vittorio Di Benedetto"*).

### 2. Named staff

- **Char** — server (*"knowledgeable and friendly. Proud to work there!"* — Denise M)
- **Elena** — server (*"met all my needs and was very patient when I asked many questions about the menu"* — Jim M)
- **Olga** — server (*"was very attentive and provided a great dining experience"* — José Manuel Lagunas)
- **Marty** — server (*"Marty is a good server."* — Dataman98)

### 3. Chef

Chef is the owner. *"the chef prepared something special for us that was not on the menu"* (Denise M) — kitchen will go off-menu for regulars. This is the defining proof point.

### 4. Signature dishes (consensus)

- **Veal Napoleon** with Supreme Sauce — *"the best Veal Napoleon we have ever tasted"* (Denise M)
- **Fettuccine Harry's Bar** — *"all of the pasta ingredients tasted fresh"* (Jim M)
- **Orecchiette Turiddu** ("Turridoo Specialty Pasta") — Ginger0529 + Restaurantji top-mention
- **Chicken Francese** — Ginger0529 + Restaurantji
- **Lasagna Romana** — Ginger0529 + Restaurantji
- **Limoncello Cake** — *"I loved the Lemoncello cake for dessert"* (LadyshipII) + Restaurantji
- **Chicken Piccata · Saltimbocca · Stuffed Mushrooms · Grilled Calamari · Smelt appetizer** — multi-source

### 5. Vibe / ambiance / room

*"smaller restaurant, which makes for nice ambiance"* (LadyshipII) · *"located in a small strip mall you wouldn't expect such great quality Italian food"* (Ginger0529) · *"Romantic atmosphere"* (Restaurantji aggregated)

### 7. Bar program

*"Our wine was good and reasonably priced for nice pours"* (Denise M) · *"Fine wine and a great atmosphere"* (Brad K) · *"Wine and bar specials"* (MWG) · spacious bar.

### 8. Heritage / years in operation

~13 years (opened mid-2012). Verbatim: *"This restaurant opened about 5 months ago and it has quickly become one of our favorites"* — tjel, Sep 2012. **Completely absent from current site.**

### 9. Occasions

Anniversary / birthday / out-of-town conventions (*"plan on making it an annual event while in Chicago Schaumburg area for a convention"* — Brad K) / parties / banquets (50-cap private room).

### 10. Service moments

- Chef going off-menu for a packed-room special (Denise M)
- Comp limoncellos for a stuffed table (Denise M)
- Birthday memorialized for an 8-person party (Brad K)
- Gluten-free accommodation rated *"absolutely most flavorful gluten free meals ever"* (drfate1)

### 11. Value

*"Portions were large. Last bite was as good as the first."* (drfate1) · *"Classic Italian food in generous quantities"* (Brad K) · *"portions are big, and the prices are reasonable"* (tjel)

### 12. Hospitality warmth

*"feeling like visiting friends"* (MWG) · *"makes you feel at home"* (MWG) · the site's own tagline *"Come Enjoy And Be Part Of The Family"* is owner-voice copy.

### 13. Second register

**Live music + dancing Wed/Fri/Sat nights.** Repeated reviews (Brad K, jimpinman, tjel, Moneysal, LadyshipII, francesvk) — this is a load-bearing brand attribute that is buried in nav.

**Private dining room — 50 capacity.** Banquet + party packages — own menu tab. High-margin events surface.

### Owner voice — verbatim phrase bank

```
[
  { phrase: "Mille Grazie!", source: "Tripadvisor reply (Vittorio)", tone: "warm + heritage" },
  { phrase: "Hope to see you again soon!", source: "Birdeye reply", tone: "warm" },
  { phrase: "Look forward to seeing you again!", source: "Birdeye reply", tone: "warm" },
  { phrase: "Come Enjoy And Be Part Of The Family", source: "Current site hero", tone: "warm + family" },
  { phrase: "Everything is made to order, patience is appreciated", source: "Current site menu", tone: "proud + specific" },
  { phrase: "often times with the chef himself", source: "Current site about", tone: "specific + chef-as-brand" }
]
```

### External trust signals

```
[
  { source: "Tripadvisor", year: 2026, claim: "#7 of 104 Hoffman Estates restaurants", url: "https://www.tripadvisor.com/Restaurant_Review-g36141-d3472618" },
  { source: "OpenTable", claim: "4.6★ / 257 diners", url: "https://www.opentable.com/r/di-benedetto-trattoria" },
  { source: "Yelp", claim: "4.5★ / 143 reviews", url: "https://www.yelp.com/biz/dibenedetto-trattoria-hoffman-estates" },
  { source: "Birdeye aggregate", claim: "4.5★ / 326 reviews across platforms", url: "https://reviews.birdeye.com/dibenedetto-trattoria-146780029646124" }
]
```

No press hits found in WebSearch (Daily Herald · Crain's · Eater Chicago all silent). For the build, the trust strip surfaces aggregator scores rather than press logos.

**Owner-response signal:** Vittorio replies on Tripadvisor (signs *"Mille Grazie!"*) and Marketing Director Denise A handles longer service-recovery replies. Owner does respond — the new site should mirror that liveness via a Press / Reviews wall + an "owner reply" badge on the ReviewCarousel.

---

## Block 3 — Per-principle violations

**Principle 1.1 — Conversion CTA: BROKEN.** Money path is hidden behind a popup on first paint. On mobile, the popup advertises a different restaurant entirely. Reserve and Order CTAs render below fold once the modal is dismissed.

**Principle 1.2 — Aesthetic-to-bill: WEAK.** The hero photo (chef + flame) signals $$$ ceremony, but the SpotHopper template layout pulls it back to $-$$ casual. Actual register is solid $$ heritage Italian — gusto-01 will tighten this.

**Principle 1.3 — Menu access friction: PASS.** HTML menu, multi-tab, no PDF wall. (One of the few wins on the current site.)

**Principle 2.1 — Typography register: UNDERSELLS.** SpotHopper default sans serif throughout content, with a script wordmark in the header. The wordmark works; the body copy doesn't. Heritage Italian register expects a serif + warmth.

**Principle 2.2 — Palette restraint: WEAK.** Black/white/orange chips with no warm accent. The actual room photos are warm-low-light — the site palette should mirror cream + ochre, not dark-orange CTAs.

**Principle 2.3 — Photography fidelity: MISSED.** Site photos are present but several render black on capture (likely lazy-load / asset-path failures). Photo Tier verdict in Block 5.

**Principle 3.1 — Reviews placement: HIDDEN.** 326 aggregated reviews, 4.5★ across platforms, owner replies are warm and personal — and **none of it appears on the site**. Direct contradiction with Block 2 secret sauce.

**Principle 3.2 — "Since YYYY": MISSING.** ~13 years in operation, completely unsurfaced. Free trust signal left on the table.

**Principle 3.3 — Chef-as-brand: HIDDEN.** Chef-owner Vittorio Di Benedetto is the strongest single asset in the review packet (multiple "the owner came over" stories) — the site mentions "the chef" once, never names him. Block 2 cross-reference: this is the highest-leverage hidden asset.

**Principle 4.1 — Sub-page count: PASS** (Menu / Specials / Catering / Events / Parties / Gift / Jobs / Order / Reserve).

**Principle 4.2 — Hours: PASS** (visible).

**Principle 4.3 — Phone vs widget: WEAK** — phone in footer only, no header tap-to-call.

**Principle 5.1 — First-viewport floor: BROKEN.** Popup destroys the fold. (See Block 1 mobile failure 1.)

**Principle 5.2 — First-viewport photo: WEAK.** Strong hero photo exists but is obscured.

**Principle 5.3 — First-viewport copy: WEAK.** Three carousel slides ("GREAT WINE SELECTION" / "PREMIUM ITALIAN CUISINE" / "SERVED TO PERFECTION") are generic — could appear on any restaurant site (Principle 8 anti-pattern #3).

**Principle 5.4 — Mobile: BROKEN.** Cross-promo modal for competitor restaurant (Block 1 mobile failure 1) is the headline failure. Compounded by missing image renders (failure 4) and JOBS in sticky-nav (failure 3).

**Principle 5.5 — Repeat-visit aliveness: DEAD.** No LiveOpenStatus, no upcoming-music schedule, no "what's on this weekend" surface. Repeat visitors get the same static page.

**Part 8 — Anti-patterns:** triggers anti-pattern #3 (generic hero copy that could appear on any restaurant site) and the cross-promo modal triggers an unlisted-but-obvious anti-pattern (advertising another business on your homepage).

**Part 10 — Aliveness layer: DEAD.** No real-time anything. Live music nights are listed in Events tab text but not surfaced.

---

## Block 4 — So why are we rebuilding it?

1. **The mobile homepage advertises a different restaurant.** SpotHopper's cross-promo network is serving El Taurino's Cinco de Mayo modal as the first thing a guest sees on dibenedettotrattoria.com. This is the single screenshot that will close the pitch. *(`screenshots/current-site-mobile-fold.png`)*

2. **Chef-owner Vittorio Di Benedetto is invisible.** He's the asset 6 of the 15 verbatim reviews credit by name or by the act of "the owner came over." The site mentions "the chef" exactly once, and never names him. A chef-as-brand placement plus a verbatim quote of his *"Mille Grazie!"* sign-off would convert this from a generic Italian listing into a specific person you're going to dinner with.

3. **13 years in business, zero heritage surface.** No "Since 2012," no "Hoffman Estates' family Italian for 13 years" — the strongest credibility asset (you don't survive 13 years in a strip-mall Italian without doing it right) is left unsurfaced.

4. **326 aggregated reviews, 4.5★, no proof on site.** Tripadvisor #7 of 104 + OpenTable 4.6★ + warm owner replies — and a guest landing on the homepage sees none of it. ReviewWall is the highest-leverage missing component.

5. **Live music + dancing 3 nights a week, buried in Events tab.** This is the second register that drives the Wed/Fri/Sat covers. Belongs on the homepage as a recurring live-schedule strip.

6. **Private dining for 50 has no homepage hook.** Margin-positive surface deserves at minimum an EventsCard above the fold-3 mark.

**Pitch sentence:** *"Right now your homepage shows a Cinco de Mayo ad for El Taurino on mobile and a 'Celebrate That Special Grad' popup on desktop — and Chef Vittorio's name doesn't appear once. We rebuilt it so the first thing guests see is the room you cook in, your name on the door, the **Veal Napoleon** Denise wrote a paragraph about, and the live-music schedule for this weekend."*

### Hero Lock

```
{
  wordmark: "Di Benedetto Trattoria — script wordmark, current 'Di Benedetto' italic + 'trattoria' under-rule kept; lowercase 'trattoria' tracked-out beneath",
  eyebrow: "HOFFMAN ESTATES — FAMILY ITALIAN SINCE 2012",
  sub: "Chef Vittorio cooks the room he owns. Pasta made-to-order, live music Wed · Fri · Sat. Mille grazie for 13 years.",
  hero_photo_subject: "Primary: Chef Vittorio plating at the pass under warm low light (replicates the current-site flambé shot but cleaner — needs confirmation it exists in the inventory; if not, propose a 1-hour shoot). Fallbacks: (a) the dining room at peak hour with the bar visible; (b) a top-down shot of the Veal Napoleon plated.",
  cta_primary: { label: "Reserve a Table", action: "open SpotHopper widget (preserve-stack) — fall back to Resy if owner agrees to migrate" },
  cta_secondary: { label: "See This Week's Music", action: "scroll to live-schedule strip" },
  rationale: "Drawn from: Brad K's 'female singer that was WONDERFUL', Denise M's 'the owner checked on us a few times', and Vittorio's own sign-off 'Mille Grazie!' Eyebrow surfaces the missing heritage year. Sub combines chef-as-brand + the live-music second register + a literal owner-voice phrase."
}
```

Notes:
- Wordmark is the existing script wordmark — kept as the visual anchor (gusto-01's Sorts Mill Goudy will replace it as a typographic register match if owner approves; otherwise we keep the script and wrap it in the gusto-01 layout).
- Eyebrow naming the city + heritage year is the highest-leverage 7-word slot — both signals are 100% absent from the current site.
- Sub uses *"Mille grazie"* (verbatim from owner), *"Chef Vittorio"* (named chef-as-brand), and *"live music Wed · Fri · Sat"* (second register surfaced).
- `cta_primary` preserves SpotHopper to keep switching cost low — pitch is a front-end refresh, not a platform rip.

---

## Block 5 — Risks before fork

### Photography inventory + tier gate

| Source | Dish | Interior | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site | ~10 | ~6 (some render black) | 1 (the flambé hero) | 1 | ~3 |
| Google Maps | ~50 (per Yelp 105 photos) | ~20 | 1 | ~5 | ~5 |
| Yelp | 143 photos available | mixed | unknown | yes | yes |
| Tripadvisor | 41 photos (mostly user-uploaded plated dishes) | ~10 | 0 | 0 | 0 |
| Instagram / Facebook | Facebook page exists, photo volume unknown | unknown | unknown | unknown | unknown |
| **Total usable estimate** | **~30–40 dish shots** | **~25–35 interior** | **1–2** | **5–6** | **5–10** |

Quality assessment: aggregated photo volume is sufficient for **Tier-2** (gusto-01's class) — dish shots are the strength, interior shots are mixed quality, chef portrait is the weak point. Warm-low-light grading is consistent across most plated-dish photos. The flambé hero shot is strong; if it features Vittorio it doubles as the chef portrait.

**Verdict: Tier-2 ready (gusto-01 class). Tier-1 (1776 / varro / labrisa class) blocked unless owner agrees to a focused chef-portrait shoot (~30 min, single setup).**

### Register risk

Heritage Italian trattoria + intimate strip-mall room + chef-owner who walks the floor + live music = textbook **gusto-01** fit. Cross-check with `template-inventory.md`:

> gusto-01 — Heritage Italian trattoria (Bella Cucina class) — Sorts Mill Goudy italic + Figtree, dark-monolithic #0F110C + cream + ochre, HeroTestimonialCard + asymmetric multi-card hero + hours sidebar.

**Direct match.** No re-route needed. Avoid varro-01 (oversells — chef-driven institution register) and avoid plate-01 (undersells — modern casual workhorse).

### Owner-emotional risk

- **Wordmark replacement:** owner may be attached to the existing script wordmark. Build with the existing script preserved inside the gusto-01 chrome by default; offer a Sorts Mill Goudy variant as A/B option, not a replacement.
- **Removing SpotHopper:** keep it. Preserve the reservation widget and email-marketing engine. Pitch is a front-end refresh on top of existing infrastructure.
- **Removing the popups:** the cross-promo modal must go. The "celebrate that grad" popup is owner-driven seasonal — replace with an inline EventsCard pattern that doesn't block the hero.
- **Surfacing the chef name:** confirm Vittorio is comfortable being named on the homepage before writing his name into Hero Lock sub. If he prefers third-person ("Chef-Owner"), accommodate.

### Heritage data unknowns (to confirm with owner)

- **Founded year** — best estimate 2012 from oldest review; verify exact opening date.
- **Heritage region in Italy** — owner surname suggests Southern Italian / Campania; confirm before writing into About copy.
- **Marketing Director Denise A** — confirm role, last name, and whether she's content with being the public service-recovery contact.
- **Live-music programming** — confirm current Wed/Fri/Sat schedule, named performers if available.

### Reservations-platform decision

Stay on SpotHopper (preserve-stack pitch). If owner requests upgrade later, recommend OpenTable (matches existing 4.6★ presence + 257 diners signal that's already live there).

### Register-split risk

The live-music + dancing surface and the private-dining-50 surface are both Wed/Fri/Sat / banquet operations that share the same room. They should appear as adjacent strips on the homepage, not two separate sub-pages — surfacing them on the home is the lift; sub-pages stay as detail.

---

## Status footer

**Qualified A-tier.** Recommended template: **gusto-01**. Photo Tier-2 ready. Pre-flight asks for owner: (1) confirm founding year, (2) approve chef-name surfacing, (3) opt-in to a 30-min chef-portrait shoot, (4) approve preserve-stack approach (keep SpotHopper res widget). Build proceeds.

**Open follow-up: re-run Google Reviews scrape via in-app browser** when MCP Chrome is connected, for the v2 ReviewCarousel verbatim quote pool. Aggregator-derived 23 quotes are sufficient for v1.
