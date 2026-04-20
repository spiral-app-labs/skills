# Audit: La Brisa

> Ground-truthed from `inputs/framer-templates/labrisa-01/meta/*.json` + downscaled screenshot pass (home + menu + about + contact) + `source.md`. Visual claims tagged `[observed]` or `[inferred]`.

**Slug:** `labrisa-01`
**Source URL:** https://labrisa.framer.website
**Source type:** Framer marketplace template
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/labrisa-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A **French-Riviera / Saint-Tropez coastal-upscale** restaurant site that reads like a bistro-bourgeois brochure — cream paper stock, deep cocoa ink, variable-serif display, hand-drawn nautical illustrations, and French-captioned journal vignettes. The site's job is to (1) sell a *destination-romance* experience ("A Taste of the Riviera"), (2) route diners across **three parallel revenue streams** — Main Reservation, Dine at Home, Private Dining — rather than a single booking funnel, and (3) convey editorial warmth through storytelling (Journal block, French captions, illustrated brand marks) rather than photography alone. `[observed]`
- **What kind of restaurant it fits:** French/Mediterranean coastal-upscale restaurants; destination seaside restaurants (Côte d'Azur / Amalfi / Balearic / Mallorca / Hamptons / Mendocino); wine-country restaurants with a brochure-editorial sensibility; **venues with multiple service lines** — catering + at-home meal delivery + private events alongside dine-in; small luxury-hotel restaurants; journal/content-marketing-driven venues.
- **What it does especially well (3 things, specific):**
  1. **Three-card multi-service selector near the mid-page fold** — "Main Reservation | Dine at Home | Private Dining" as three equal-weight cream cards on the cream canvas. First template in the catalog to treat *service type* as the primary selector rather than time/party-size. This is the pattern for any venue with a catering arm, at-home meal program, or private-events business alongside dine-in. `[observed]`
  2. **Hand-drawn "Bienvenue!" + sailboat lockup** — a small illustrated nautical wordmark sits between the hero and the 4-photo vignette strip. First catalog template to use illustration (not photography) to carry brand character. Gives the site a "curated editorial-brochure" feel no stock-photo grid can match. `[observed]`
  3. **French-captioned 4-photo vignette strip** — four 1:1 photos in a row, each with a script-italic French caption ("La vie de la rivieré" / "Une nuit d'été…" / "L'ameublement de la cave" / "La maison"). Editorial/journal aesthetic — photos stop being *gallery* and become *vignettes*, little essays. `[observed]`
- **What is weak / generic / overdesigned:**
  - **Framer template tells.** The nav-link computed style shows `font-family: sans-serif; color: rgb(0, 0, 238)` — Framer's default unstyled hyperlink leakage, meaning the template's live nav is styled inline rather than through a stylesheet. Forks should nail down nav typography rather than inherit this. `[observed]`
  - **Source.md overstates serif-only discipline.** `fontUrls` on every page include `geist` (Vercel's sans) and `labelleaurore` (a script). The template is **Imbue-serif-dominant** (every H1/H2/H3 and body label is Imbue) but Geist is almost certainly used for form inputs / small UI text (Framer form defaults), and La Belle Aurore is the script used for the French vignette captions. Not a pure serif-only stack. `[observed]`
  - **The "Rendez-Vous Émails" block mixes subscribe form and hours-picker on a dark cocoa band.** Unclear whether this is a newsletter signup, an email-reminder for reservations, or a decorative pseudo-form. Combining "give us your email" with what looks like a time-slot picker makes the CTA ambiguous. `[observed]`
  - **Menu page is content-dense and could feel listy.** 150px Imbue "Our Menu" hero over photography, then four category sections (Starters / Main Courses / Desserts / Wines & Spirits) with ~5 items each — bullet-list rhythm. Works but doesn't have the editorial flair the home page earns. `[observed]`

---

## 2. Positioning + vibe

- **Aesthetic register:** French-Riviera coastal-upscale / editorial-brochure / warm-romantic / bistro-bourgeois / journal-driven / illustrated-whimsy / destination-luxury.
- **Emotional tone:** Warm, romantic, curated, unhurried, multilingual-charming. Not ceremonial like alinea (too warm), not rustic like bramble (too polished), not modern like qitchen (too playful). Reads like a printed travel-magazine spread from Condé Nast Traveler or Kinfolk.
- **Perceived price point:** **$$$–$$$$.** Entrees ~$38-65 range. Destination-upscale, not ceremonial-fine-dining. You'd book this for an anniversary in Saint-Tropez or a "we're on vacation" dinner, not for a work meal.
- **Audience signal:** 30-60, travelers, romance-occasion, couples, wine-interested, multilingual-comfortable (French copy scattered throughout — doesn't translate, trusts audience to enjoy the register). Also second-home owners, hotel guests, private-events buyers.

---

## 3. Structure

- **Homepage section order (top to bottom, ~7801px tall):** `[observed]`
  1. **Top nav strip** — cream bg with La Brisa wordmark center or left + nav links; persistent. Appears above the hero image.
  2. **Hero** — large editorial photo of chef's hands plating a steak (warm-brown grading); H1 "A Taste of the Riviera" at **150px Imbue Variable weight 400, line-height 150px, letter-spacing -1.5px**, color deep cocoa `rgb(69,45,38)` on cream. Small paragraph of intro copy + small CTA to upper-right.
  3. **Illustrated dish vignette + "Bienvenue!" lockup** — a small circular plated-steak illustration/photograph above a block of intro prose, then a hand-drawn sailboat + "Bienvenue!" script-style H2 at **100px Imbue Variable**. Brand-storybook moment between hero and gallery.
  4. **French-captioned 4-photo vignette strip** — four square photos side-by-side, each with an italic/script French caption underneath. Editorial journal aesthetic.
  5. **Large center dish photograph** — single wide hero-secondary photo (signature dish, warm overhead shot) with a small inset illustration/card (probably a tiny menu-card or "our story" card) layered in front.
  6. **Multi-service 3-up selector** — three equal cream-on-cream cards: **Make Reservation | Dine at Home | Private Dining**. Each has H3 at 40px Imbue + small body line + outlined button ("Reserve Now" / etc.). Primary conversion surface.
  7. **"The Journal" block** — H2 "The Journal" at 100px Imbue + 2-3 article cards below (photo + headline + snippet). Content-marketing / story block.
  8. **"Rendez-Vous Émails" dark-cocoa band** — mode-flip to deep-cocoa `rgb(69,45,38)` background with cream text. H2 "Rendez-Vous Émails" + subscribe / time-slot input row + submit button. Mode-switching like bramble/gusto: cream → dark → cream.
  9. **Closing "A Bientôt by the Riviera" footer hero** — full-bleed dark food photo (overhead shot of multiple plates) with "A Bientôt by the Riviera" headline overlaid. Brand sign-off before footer.
  10. **Footer** — nav + social + address (Saint-Tropez) + newsletter reprise + legal.

- **Information architecture:** 4 first-party routes (`/`, `/menu`, `/about`, `/contact`). Simpler than bamzi (5 internal pages), richer than bramble (2). No dedicated `/private-events` or `/journal` index pages captured — the 3-up selector and Journal block are entry points that either modal or route to pages not included in the audit scrape. `[observed]`
- **Navigation style:** **Persistent top strip on cream.** Not floating pill (qitchen/1776/bramble) and not warm-gray strip (alinea). Sits flat on the cream canvas, inherits body color at deep cocoa. Nav-link computed style leaks `sans-serif` / `rgb(0,0,238)` (Framer default link) — meaning the live nav is styled via inline overrides; recreation should nail down a deliberate nav type (likely Imbue or a sans matching Geist body-label use). `[observed]`
- **Reservation/CTA placement:** **Distributed conversion surface** — there is no single sticky-bar. Instead: (1) small CTA button in hero upper-right, (2) the **three-card service selector mid-page** (primary), (3) "Rendez-Vous Émails" band (secondary, time-driven), (4) repeat CTAs on `/menu` footer ("Make Reservation / Dine at Home / Private Dining" three-up appears again at the bottom of the menu page). The three-card selector is the signature conversion pattern. `[observed]`
- **How menu is handled:** **Dedicated `/menu` page.** H1 "Our Menu" 150px Imbue in cream over a warm-brown food-grid photo hero. Below: left rail category nav (Starters / Main Courses / Desserts / Wines & Spirits) + right rail of item rows — each row has a small circular food photo, dish name, brief description, and price on the right. Traditional dish-row layout with editorial polish. Three-card service selector repeats at the bottom of the menu page. `[observed]`
- **How story / events / catering / contact handled:** `[observed]`
  - Story: dedicated `/about` page with H1 "From Coast to Cuisine" (150px Imbue) + H2 pull-quote "La Brisa isn't just a restaurant — it's a love letter to the Riviera" (75px) + multiple prose blocks + dedicated section "Moments by the Saint-Tropez Seaside" with editorial photography + a small hand-drawn separator/illustration (sailboat or anchor). Heavy editorial prose, clearly-narrated brand story.
  - Events / private dining: one of three service-selector cards, labeled "Private Dining." Appears to route to a dedicated flow; the three-card selector re-appears on `/menu` bottom.
  - Catering / at-home: "Dine at Home" is one of the three service cards — this is the catering/meal-program lane. Unique to labrisa among catalog templates.
  - Contact: dedicated `/contact` page — H1 "Join Us in Saint-Tropez" (150px Imbue) on a warm dinner-table photo; two side-by-side cards **"Call us" | "Write us"** (both H3 40px Imbue); dark cocoa band with H2 "Opening hours" (75px Imbue) + day/hour rows; small inset map card.
  - Hours: exposed on `/contact` inside the dark cocoa band. Not on home (home uses the ambient "Rendez-Vous Émails" band instead).

---

## 4. Visual system

> Ground-truthed from `meta/home.json` + `meta/{menu,about,contact}.json` computed styles + downscaled screenshots.

- **Typography:**
  - **Display: `Imbue` + `Imbue Variable`** (Google Fonts). Variable-axis serif with pronounced high-contrast / flared-terminal character (similar to a modern Didone-adjacent but with softer humanist quirks). Used at every heading level. `[observed]`
    - **H1** (home "A Taste of the Riviera" / menu "Our Menu" / about "From Coast to Cuisine" / contact "Join Us in Saint-Tropez"): **150px** / 150px LH / weight 400 / letter-spacing **-1.5px** / color deep cocoa `rgb(69,45,38)` on cream OR cream `rgb(250,247,237)` on dark photo. Massive, tightly-set, editorial-display.
    - **H2** (home "Bienvenue!"): 100px / 100px LH / weight 400. H2 (about "La Brisa isn't just a restaurant…" / contact "Opening hours"): 75px / 75px LH / weight 400. H2 (menu "Starters"): 50px / 50px LH / weight 400. Scale varies by page — display-weight at every stop.
    - **H3** (card labels "Make Reservation" / "Call us"): 40px / 40px LH / weight 400 / letter-spacing **-0.4px** / color cocoa.
  - **Body / eyebrow label: `Imbue` at weight 900, tracked-out uppercase.** The `p` computed style is the wordmark "La Brisa" at 20px / 24px LH / **weight 900** / letter-spacing **12px** / `text-transform: uppercase`. This is the site's only *structural body pattern* captured in meta — meaning Imbue-black tracked-uppercase is used as the eyebrow/wordmark label system. Actual paragraph body (the intro prose, about prose) is likely Imbue at lighter weight + natural case `[inferred]` — meta only captures the first `p` match, which is the wordmark. `[observed for wordmark, inferred for paragraph body]`
  - **Sans inclusion: `Geist`** (Vercel's geometric sans, loaded on every page). Almost certainly used for form inputs and small UI (Framer's form-primitive default). Not visually prominent. `[observed in fontUrls, inferred use]`
  - **Script accent: `La Belle Aurore`** (Google Fonts, handwritten script). Loaded on every page — used for the French vignette captions under the 4-photo strip ("La vie de la rivieré" etc.) and likely the "Bienvenue!" lockup if not Imbue-italic. `[observed in fontUrls, inferred use]`
  - **Misc: `Roboto`** loaded only on `/contact` — likely Google Maps iframe default. `[observed]`
  - **Notable type behavior:**
    - **150px H1 is the single largest display size in the catalog.** Bigger than alinea's 64px Cormorant wordmark, bigger than 1776's mid-sized Cormorant italic. Locked at 150px across every first-page H1 — this is a *scale discipline* (every entry page opens at the same display size).
    - **Imbue is a humanist variable serif with high-contrast flared terminals** — reads as Didone-adjacent when set large but with softer curves than Bodoni/Didot. Characterful italic. `[observed via screenshots + Google Fonts specimen]`
    - Letter-spacing -1.5px on 150px H1 is tight — lets the Imbue flared terminals lock together. Intentional.
    - **No uppercase in display** (unlike qitchen/bramble). All H1/H2/H3 mixed case. Uppercase is reserved for the 12px-tracked-out wordmark label.
    - Heading weight is 400 throughout — Imbue carries the visual weight from contrast/terminals, not from font-weight.
  - **Pairing logic:** *Imbue-dominant with script + sans accents.* Imbue carries all structural type (display + headings + wordmark label). La Belle Aurore carries French-caption flourish. Geist is incidental/utility. **Not truly serif-only** — but the visual impression is *serif-dominant coastal-editorial* because the sans and script are small/accent usage.
- **Color strategy:** **Two-token cream + cocoa, no accent.** `[observed]`
  - **Canvas:** `rgb(250, 247, 237)` = `#FAF7ED` — warm cream / paper / linen. Slightly yellow-warm (R > G > B), not cool-gray-white.
  - **Ink:** `rgb(69, 45, 38)` = `#452D26` — deep cocoa brown. Red-leaning (R > G > B by a healthy margin), distinctly warm. Not black, not charcoal.
  - **Dark-mode band background:** same cocoa `#452D26` used as full-width section background for "Rendez-Vous Émails" + "Opening hours" (contact). Mode-inversion via the same two tokens.
  - **Illustrations & hand-drawn marks:** same cocoa `#452D26` ink on cream — the sailboat and "Bienvenue!" lockup are monochrome cocoa line-work, not colored. `[observed]`
  - **No bright accent color anywhere.** Not a gold, not a sea-blue (despite the nautical motif), not a tomato-red. Pure restraint — same discipline as velvet-shaker and alinea, but warmer. `[observed]`
  - **Photography warm-grades into the palette** — chef's hands over warm-brown steak, overhead brown-toned dishes, sun-warmed coastal scenes. Photography reinforces the cocoa+cream tone so the color discipline holds even when photos dominate.
- **Spacing rhythm:** **Generous editorial-loose.** 7801px home scroll with ~10 sections = ~780px per section average. Sections breathe. Prose columns narrow; photo blocks wide. Similar to alinea's editorial pace. `[observed]`
- **Grid / layout behavior:** `[observed]`
  - Hero: asymmetric — H1 left, small intro + CTA upper-right.
  - Vignette strip: 4-column equal.
  - Service selector: 3-column equal cream cards.
  - Journal: 2-3 column article cards.
  - Dark cocoa band: centered single-column form.
  - Menu page: 2-column (left category rail + right item rows).
  - About page: single-column with mixed photo/prose offsets + pull-quote centering.
- **Image treatment:** **Warm-graded editorial food + coastal photography + illustration.** Food shots are warm-brown overhead plating hero-shots (steak, pasta, crudo). Coastal shots are sun-warmed, natural-light Saint-Tropez scenes (aerial sea, a yacht, a market scene). Illustrations (sailboat, "Bienvenue!") are cocoa monochrome hand-drawn line-work. Consistent warm grading across all photography; illustrations sit as pause-beats between photo blocks. `[observed]`
- **Animation / motion:** `[observed via meta.animations]`
  - **Rotation transforms are prominent** — multiple `matrix(0.707107, 0.707107, …)` (45° rotation), `matrix(0.866025, 0.5, …)` (30° rotation), and small-angle rotations (`0.984808, 0.173648` = ~10°). Suggests illustrations, stamps, or polaroid-style photo-cards rotate slightly on reveal / on scroll. Signature coastal-scrapbook feel. `[observed]`
  - **Scale transforms** — `matrix(1.1, 0, 0, 1.1, 0, 0)` (110% scale) and `matrix(0.35, 0, 0, 0.35, 0, 0)` (35% scale) → hover-zoom on photos + small illustration scaling.
  - **Translate reveals** — `matrix(1, 0, 0, 1, 0, 10)` / `matrix(1, 0, 0, 1, -300, -300)` / `matrix(1, 0, 0, 1, -60, 0)` → subtle scroll-reveal slide-ins, horizontal drift (the -300/-300 likely a large parallax or pre-animation hidden state).
  - **Transitions:** `all` + `color 0.4s cubic-bezier(0.44, 0, 0.56, 1)`. 400ms ease-in-out (sine-ish) — gentle, editorial pace.
  - **No CSS keyframes declared.** Motion comes from Framer's built-in scroll triggers + hover transitions.
  - **Motion intensity rating: 3 (moderate).** More motion than alinea (1-2) or qitchen (2). Slight rotations and photo-card drift feel scrapbook-y, not stiff.
- **Texture / depth / borders / cards / overlays:**
  - **Cream cards on cream canvas** — the 3-up service selector uses cards that are slightly darker / outlined / lightly shadowed against the body cream. Almost tone-on-tone, relying on thin borders or hairline shadows for separation. `[inferred]`
  - **Dark cocoa band is full-bleed** — no rounded corners, runs edge-to-edge. Hard section break.
  - **Photos sit as rectangles without heavy borders.** Vignette strip uses clean rectangular crops with text below, scrapbook-style. Some photos may have subtle rotated / polaroid-card treatment (per the rotation transforms). `[inferred]`
  - **Illustrations are monochrome cocoa line-work on cream**, no fill, no color — treats illustration as *ink on paper*.

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~3 seconds. "A Taste of the Riviera" at 150px Imbue + chef's-hands-plating photo + cream-and-cocoa palette signals *destination French coastal-upscale* instantly. The multilingual charm ("Bienvenue!" / French captions) reinforces within another beat. `[observed]`
- **Reservation path strength:** **7/10.** Three-card service selector mid-page is visually clear, but: (1) no persistent nav CTA visible — users must scroll to hit the selector, (2) the three equal-weight cards force a choice before engaging booking (some users just want to "reserve" and won't want to evaluate three options), (3) the "Rendez-Vous Émails" band confuses subscribe-vs-book. Small CTA in hero upper-right partially compensates. Strong for venues with real multi-service offerings; weaker for diners who just want dine-in. `[observed]`
- **Menu access clarity:** **8/10.** Dedicated `/menu` page linked from top nav; hero image is clearly food-forward; category rail + dish rows is legible. Item descriptions are short but sufficient; prices on the right. Only friction: four categories compete for attention via left rail — users may scroll past sections. `[observed]`
- **Location / hours / trust signals:** **7/10.** Saint-Tropez is signaled in the /contact H1 and likely in footer. Hours are pushed to `/contact` rather than home — good for clean home layout, worse if a walk-in diner is checking "are they open." Inset map card on contact. No press logos / awards / credibility strip visible on home — the template trusts atmosphere over third-party validation. `[observed]`
- **Mobile conversion path quality:** **7/10** `[inferred from mobile screenshots existing + typical Framer mobile behavior]`. 150px H1 will need aggressive responsive-down to ~56-72px on mobile. Three-card selector should stack to 1-col. Multi-photo vignette strip stacks to 2x2. Form inputs (Geist) should scale cleanly. Unverified: whether the hand-drawn illustrations and small-rotation motion survive the mobile viewport gracefully.

---

## 6. Reusable ideas

- **🔑 Three-card multi-service selector (Main Reservation / Dine at Home / Private Dining).** `ServiceTypeSelector` — first catalog template to treat *service type* as the primary conversion surface rather than party-size/time. Unlocks the entire sub-segment of restaurants with multiple revenue streams (catering + dine-in + private events + at-home meal programs). **Strong promotion candidate — promote now.**
- **🔑 Illustrated brand lockup ("Bienvenue!" + sailboat).** `BrandIllustration` — first template with hand-drawn iconography carrying brand weight. Reusable for any venue where illustration beats photography at conveying character (coastal, rustic-countryside, old-world, family-owned-with-history).
- **🔑 French-captioned 4-photo vignette strip.** `JournalVignetteStrip` — 4 equal photos with italic/script captions beneath, used as editorial pause-beat between hero and service selector. Reusable for any venue wanting *journal* feel rather than *gallery* feel.
- **🔑 Two-token cream + cocoa, no accent.** First catalog template at this specific warm-paper warm-ink combo. Extends the accent-free vocabulary (qitchen dark, alinea white-black, velvet-shaker black-white) to *warm cream + deep brown*. New palette primitive.
- **🔑 Imbue Variable at 150px display with -1.5px letter-spacing.** First Imbue-family template; distinctive modern serif with flared terminals. Pairs with alinea's Cormorant Garamond, qitchen's Forum, 1776's Cormorant Garamond italic, bramble's Crimson Pro to give the catalog full serif coverage.
- **Hand-drawn separator / marginalia.** The sailboat, anchor, and other small hand-drawn marks appear as dividers on the about page — a pattern like Kinfolk / old travel books. Reusable.
- **Mode-switching dark cocoa band for time-sensitive CTA** ("Rendez-Vous Émails"). Similar to bramble/gusto pattern but at a warmer color. Reusable as `DarkCocoaEmailBand`.
- **Closing full-bleed food-photo + sign-off headline** ("A Bientôt by the Riviera"). Reusable as a pre-footer brand moment on any destination-upscale venue.
- **Multilingual-charm content pattern** — interleaving French phrases without translation trusts audience sophistication. Reusable for any venue with a cultural identity (trattoria with Italian phrases, Japanese izakaya with Japanese phrases, etc.) — see gusto for the Italian parallel.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Three-card service selector (multi-revenue-stream venues).
  - Illustrated brand lockup.
  - French-captioned 4-photo vignette strip.
  - Cream + cocoa two-token palette.
  - Imbue at 150px H1 as scale discipline across all entry pages.
  - Mode-switching dark cocoa band for secondary CTA.
  - Closing full-bleed sign-off headline.
- **Steal but tone down:**
  - The unlocalized French copy — works for a Riviera venue, would feel affected for a New York coastal restaurant. Match language register to restaurant's actual cultural positioning.
  - The 150px H1 — locked at 150px only works on desktop. Forks must set deliberate responsive ramp (150 → 96 → 72 → 56).
  - The rotated photo/illustration motion — a little scrapbook-drift is charming, too much feels like a tumblr theme. Keep subtle.
- **Too template-y / overused — avoid:**
  - The Framer unstyled nav-link default (`sans-serif` / blue). Forks must style nav deliberately.
  - The three equal-weight service cards risk "choose your own adventure" friction if copied without thought for a venue that *doesn't* have three real service lines. A single-service venue shouldn't use a three-card selector to pad the page.
- **Would hurt originality if copied literally:**
  - The exact "Bienvenue!" + sailboat illustration — it's specific to La Brisa's Côte-d'Azur identity. Forks should commission their own hand-drawn mark (an anchor, a wheat sheaf, a wine glass, a coffee cup — whatever matches the venue's locus).
  - The name "La Brisa" at 150px Imbue — the wordmark move only works for names with the right syllable rhythm and vowel-mix. A 5-word restaurant name at 150px Imbue would collapse.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6.** Simple two-token palette and conservative overall structure keep this approachable, but: (1) 150px H1 responsive ramp needs careful work, (2) the hand-drawn illustrations must be SVG-authored (can't stock-photo them) — either commission or recreate Labrisa's for the demo, (3) Imbue Variable font setup requires variable-axis handling in Next.js font loader, (4) the rotated / small-drift motion on scroll needs deliberate tuning with Framer Motion, (5) three-card service selector needs distinct routing logic per card (each service likely goes to a different flow — form modal or routed page).
- **Components needed:**
  - `CreamStripNav` — flat cream-bg persistent top nav with cocoa Imbue links (**new nav variant**)
  - `RivieraHero` — 150px Imbue H1 + warm-graded chef-hands photo + small intro card upper-right
  - `BrandIllustrationLockup` — centered SVG illustration + script headline ("Bienvenue!") (**shared candidate — illustrated brand iconography**)
  - `JournalVignetteStrip` — 4 square photos + La Belle Aurore script captions (**shared candidate**)
  - `ServiceTypeSelector` — 3 equal cream cards (Main Reservation / Dine at Home / Private Dining) with H3 + body + outline button each (**strong shared candidate — promote now**)
  - `JournalBlock` — H2 "The Journal" + 2-3 article cards with photo + headline + snippet (**shared candidate**)
  - `DarkCocoaEmailBand` — full-bleed cocoa section with centered subscribe/time-slot form (**shared candidate**)
  - `FullBleedFoodSignOff` — closing full-bleed food photo + "A Bientôt by the Riviera" display headline (**shared candidate**)
  - `CreamFooter` — cream-on-cocoa or cream-bg footer with nav + social + Saint-Tropez address
  - `MenuCategoryRailPage` — `/menu` 2-column layout with left category rail + right item rows (circle photo + name + description + price)
  - `AboutPageLayout` — `/about` 150px H1 + 75px H2 pull-quote + editorial prose + hand-drawn separator marginalia + coastal photography
  - `ContactCardsGrid` — `/contact` 2-card Call/Write grid + cocoa hours band + inset map
- **Tokens / variants needed:**
  - **New palette class:** warm cream canvas + deep cocoa ink, no accent (`#FAF7ED` / `#452D26`). Distinct from all 5 existing templates — warmer than alinea, lighter than 1776, no brand-orange like bamzi.
  - Display: Imbue Variable weight 400, H1 150px, letter-spacing -1.5px.
  - Eyebrow label: Imbue weight 900, 20px, letter-spacing 12px, uppercase (wordmark discipline).
  - Script accent: La Belle Aurore for French captions only.
  - Utility sans: Geist for form inputs only (not visual).
  - Motion intensity 3 (moderate — scroll reveals + subtle rotations on photo-cards / illustrations).
- **Verdict:** **Full template recreation.** Fills the French-Riviera / multi-service / illustrated-brand register cleanly. `ServiceTypeSelector`, `JournalVignetteStrip`, and `BrandIllustration` deserve to graduate as shared primitives.

---

## 9. Restaurant fit

- **Best fit (top 2-3 archetypes):**
  1. **French / Mediterranean coastal-upscale** (primary) — Côte d'Azur, Saint-Tropez, Cannes, Nice, Amalfi, Mallorca, Balearic, Sicily, Greek islands. Destination-romance restaurants at hotels or in walking districts.
  2. **Multi-service venue with dine-in + catering + private dining + at-home meal program** (secondary) — any restaurant with 2+ real service lines where the selector is the honest representation of the business. Can be French, Italian, Spanish, or American coastal — the service-selector pattern extends beyond the French register.
  3. **Wine-country / Hamptons / Mendocino / seaside destination upscale** (tertiary) — warm-editorial restaurants in travel destinations where the brochure-journal feel lands.
- **Workable fit:** small luxury-hotel restaurants; bistros with an upscale brunch program that runs separately from dinner; catering-forward venues that also do walk-in; second-generation family restaurants with a "story" to tell; wine bars with a private-events arm.
- **Bad fit:** American-casual; dark moody speakeasy; fast-casual; ceremonial-Michelin (too warm and whimsical — route to alinea); rustic-bramble (too polished/brochure-y — route to bramble); Italian trattoria (route to gusto); anything at $ or $$ price point; anywhere the French register would read as affected.
- **Why:** labrisa owns a specific combination — French-Riviera / warm-editorial / illustrated-brand / multi-service / two-token-cream-cocoa. No other template combines these. alinea handles ceremonial-Michelin but in white-black light-mode. 1776 handles warm-upscale but American. bramble handles cream palette but at rustic-wine-country register with single-service. gusto handles Italian but with bright modern polish. labrisa is the only template in the catalog for the French-coastal-destination venue with multiple revenue streams.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template; `ServiceTypeSelector`, `JournalVignetteStrip`, `BrandIllustrationLockup`, `DarkCocoaEmailBand`, `FullBleedFoodSignOff` all deserve to ship as tested primitives.
- **Catalog rank (1–10) — how often will we reach for this?** **7.** Fewer briefs than gusto/1776/bramble, but when the brief is "French coastal destination" or "venue with dine-in + catering + private events," labrisa is the only answer. Multi-service register is underserved across the catalog — this template's `ServiceTypeSelector` alone will get reused.
- **Why it matters:** (1) **First catalog template with multi-service 3-up selector** — unlocks venues with real revenue-stream diversity (catering, private events, meal-kit/at-home) that a single-CTA template can't honestly represent. (2) **First catalog template with illustrated brand iconography** — opens a whole character vocabulary (hand-drawn marks, marginalia, scrapbook drift) distinct from photo-driven templates. (3) **First French-Riviera / European-coastal register** — fills a destination-upscale vertical gap. (4) **First Imbue-family template** — completes the catalog's modern-serif coverage alongside Cormorant, Forum, Prata, Crimson. (5) **First cream + cocoa two-token palette** — warm-paper-and-deep-brown combo reusable for any old-world / editorial-brochure brand.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `CreamStripNav` | persistent flat cream-bg top nav | logo-position (left/center); link-count; with/without CTA; with/without language-switcher | New nav variant — Framer leakage means fork must style deliberately. |
| `RivieraHero` | 150px Imbue H1 + warm-graded photo + inset intro card | H1-font-size; photo-grading (warm-brown/coastal-sun/mixed); card-position (UR/UL/below); with/without CTA | Template-specific. |
| `BrandIllustrationLockup` | centered SVG illustration + script headline | illustration-asset (sailboat/anchor/wheat/wine-glass/etc.); headline-font (script/italic-serif); background (cream/photo) | **Shared candidate — promote now.** First illustrated-brand primitive. |
| `JournalVignetteStrip` | 4 square photos + script French/multilingual captions | photo-count (3/4/5); caption-language (FR/IT/EN/JA); caption-font (script/italic-serif); aspect (square/portrait) | **Shared candidate — promote now.** |
| `ServiceTypeSelector` | 3 equal cards — Make Reservation / Dine at Home / Private Dining | service-count (2/3/4); card-bg (cream/photo/cocoa); with/without icon; button-style (outline/filled); route-target (modal/page) | **Strong shared candidate — promote now.** First multi-revenue-stream primitive; huge reuse potential. |
| `JournalBlock` | "The Journal" H2 + 2-3 article cards | card-count (2/3/4); card-layout (photo-top/photo-left); with/without snippet; with/without date | **Shared candidate after 2nd appearance.** |
| `DarkCocoaEmailBand` | full-bleed cocoa section with subscribe/time-slot form | band-color (cocoa/charcoal/navy); form-type (email-only/email+time/email+party-size); headline-font | **Shared candidate after 2nd appearance.** |
| `FullBleedFoodSignOff` | closing full-bleed food photo + display headline | headline-language (EN/FR/IT); photo-grading; headline-position (center/left) | **Shared candidate.** |
| `MenuCategoryRailPage` | /menu 2-col layout with left rail + right rows | category-count; row-layout (photo-dot/no-photo); price-alignment (right/dot-leader) | Template-specific. |
| `AboutEditorialPage` | /about H1 + pull-quote H2 + prose + hand-drawn marginalia | prose-block-count; illustration-density; pull-quote-weight | Template-specific but pattern-reusable. |
| `ContactCardsGrid` | /contact 2-card Call/Write + cocoa hours band + inset map | card-count (1/2/3); hours-band-position; with/without-map | Template-specific. |
| `CreamFooter` | cream or cocoa footer with nav + social + Saint-Tropez address | bg (cream/cocoa); with/without newsletter-reprise; with/without sitemap | New footer variant. |

**Cross-template promotion candidates after this audit:**
- `ServiceTypeSelector` — **promote now** (first appearance, unlocks entire multi-revenue-stream register)
- `BrandIllustrationLockup` — **promote now** (first appearance, broadly useful character primitive)
- `JournalVignetteStrip` — **promote now** (reusable across any multilingual / editorial-brochure venue — gusto's Italian, labrisa's French, future Japanese izakaya)
- `DarkCocoaEmailBand` — promote after 2nd appearance (bramble and gusto have cousin patterns)
- `FullBleedFoodSignOff` — promote after 2nd appearance

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe)
- **Cream canvas** — shift within warm-paper family: `#FAF7ED` → `#F7F2E4` (deeper linen) / `#FCFAF1` (paler chalk) / `#F5EFDE` (oatmeal). Stay warm; do not go cool-white.
- **Cocoa ink** — shift within deep-brown family: `#452D26` → `#3A251F` (darker bittersweet) / `#5A3B31` (warmer chestnut) / `#4A2C25` (redder cocoa) / `#3D2921` (muted espresso). Stay red-warm; do not go charcoal/black.
- **Display font** — other variable/high-contrast modern serifs at weight 400: Imbue Variable (keep), EB Garamond (warmer), Fraunces (more quirky), Cormorant Infant (softer), Bodoni Moda (colder/sharper). Keep weight 400 — display weight comes from contrast, not bold.
- **Script accent** — La Belle Aurore → Caveat / Dancing Script / Homemade Apple / Shadows Into Light. Keep handwritten, not calligraphic-formal.
- **Utility sans** — Geist → Inter / DM Sans / Neue Haas Grotesk. Only used for form inputs; visual impact low.
- **Hero photo** — any warm-graded food shot (chef's hands, overhead plate, crudo, steak) OR sun-warmed coastal scene. Match warm-brown tonal range.
- **Vignette strip photos** — 4 editorial-journal shots covering: dining room / a dish close-up / a small story moment (hands, a glass, a detail) / a venue exterior or location cue. Keep consistent warm grading.
- **Illustration asset** — sailboat → anchor / wheat sheaf / wine glass / olive branch / coffee cup / lighthouse / vintage car / farmhouse silhouette. Monochrome cocoa line-work on cream only.

### 12.2 Content-swap (safe)
- Restaurant name (short, wordmark-worthy at 150px display; 4-10 characters best; two words with vowels works — "La Brisa" / "Pomarola" / "Aperitivo" / "Mer Blanche").
- Location ("A Taste of the Riviera" → "A Taste of Amalfi" / "A Taste of Mallorca" / "A Taste of the Hudson").
- Vignette captions — swap language to match cultural positioning (French / Italian / Spanish / Japanese / English). Keep 4-6 words, italic/script.
- Three service types — rename and reroute: "Main Reservation | Dine at Home | Private Dining" → "Dine In | Catering | Private Events" / "Reservations | Market | Weddings" / "Dinner | Tasting Menu | Chef's Table". Any 3-way service split works as long as each is a real business line.
- Menu categories + items + prices — standard swap.
- Hours + Saint-Tropez address + phone + email.
- About-page prose ("love letter to the Riviera" → any location-love-letter).
- Journal article cards — swap to real content pieces or cut to 2 cards.
- Reservation system — link Tock / Resy / OpenTable / direct form to each service card.

### 12.3 Structural-swap (Phase 2)
- **Safe additions:** dedicated `/private-events` page routed from the Private Dining service card; `/catering` or `/at-home` page for the Dine-at-Home service card; `/journal` index page linked from the Journal block; `/press` page if the venue has earned coverage; `/gift-cards` page.
- **Removable without losing identity:** the `JournalBlock` on home (if the venue has no content program); the `DarkCocoaEmailBand` (if newsletter isn't a real channel); the `FullBleedFoodSignOff` before footer (aesthetic flourish, not load-bearing); the second service-selector reprise on `/menu` bottom.
- **Add from other templates:** alinea's `TockWidgetEmbed` could slot into the Main Reservation flow for Tock/Resy restaurants. 1776's marquee strip could sit above the service-selector as a press/hours ticker. bramble's mailing-list block could replace the ambiguous `DarkCocoaEmailBand`.

### 12.4 Locked (do not touch — cohesion-critical)
- **Two-token cream + cocoa palette.** Adding an accent color (gold, sea-blue, tomato-red) destroys the "paper and ink" discipline — this is the signature.
- **Imbue (or equivalent variable/high-contrast modern serif) at 150px display H1 across all entry pages.** Downsizing to ≤100px shifts the register from editorial-brochure to standard web. Swapping to a different serif family is fine; downsizing is not.
- **Imbue weight 900 + 12px tracked-uppercase as the wordmark/eyebrow label.** This is the only structural body pattern — its weight/tracking carries the coastal-editorial tone.
- **The three-card multi-service selector.** Collapsing to a single "Reserve" CTA erases the multi-revenue-stream positioning (the entire reason to use this template). If the venue doesn't have 2+ real service lines, **route to a different template**.
- **The illustrated brand lockup** (Bienvenue! + sailboat or equivalent). Replacing with a photo or a typographic logo removes the "hand-made character" that distinguishes labrisa from alinea/qitchen/bramble.
- **The French-captioned vignette strip (or multilingual-equivalent script captions).** The captions are the editorial voice — removing them reduces the template to a photo gallery.
- **No uppercase in display headings.** Uppercasing H1/H2 would shift toward qitchen's ceremonial register (wrong).
- **Warm-graded photography only.** Bright-daylight, cool-blue, or moody-dark photography fights the cream+cocoa palette and breaks cohesion.
- **The mode-flip dark cocoa band in mid-page rhythm.** Cream → cocoa → cream → cocoa (on the sign-off) is the rhythmic spine. Removing the dark band flattens the page.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like:** American-casual; fast-casual; neighborhood diner; dark-moody speakeasy; modern-minimal/Scandinavian; bright-daylight/brunch; sports-bar; family-pizzeria; ceremonial-Michelin (too warm); rustic-countryside (too polished/brochure-y).
- **Restaurants that should be routed elsewhere:**
  - Ceremonial-Michelin / tasting-menu → `alinea-01`
  - Dark ceremonial fine dining → `qitchen-01`
  - Warm-upscale American / wine-forward → `1776-redesign-01`
  - Rustic wine-country / hospitality-forward → `bramble-01`
  - Accessible casual with brand-color → `bamzi-01`
  - Italian trattoria / modern Italian → `gusto-01` (in-flight)
  - Casual coffee / daytime cafe → `latte-01` / `pepper-01` (in-flight)
  - Single-service dine-in only (no catering, no private events) → any of the above depending on register; labrisa's three-card selector would feel padded.
