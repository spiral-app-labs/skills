---
name: restaurant-website-audit
description: Use this skill any time you are about to audit a qualified restaurant lead's existing website before forking a new template from the catalog. Runs the five-block pre-fork audit (verbatim findings → secret sauce → principle violations → why-rebuild → risks). REQUIRES Google reviews packet + visual asset inventory + mobile preview access. Produces five locked outputs the fork consumes directly: a Hero Lock 4-tuple, a Photography Tier verdict, an Owner-Voice phrase bank, External Trust signals, and a Mobile-failure screenshot set. Triggers when the user says any of "audit X's old site", "audit X's current website", "let's audit X", "run a pre-fork audit", or asks you to plan a redesign for a real restaurant lead. Drops output at restaurant-website-system/sites/<slug>/audit.md.
---

# Restaurant Website Audit

The pre-fork strategic audit that converts "their site has problems" into a build brief the owner can read AND a fork the agent can ship without re-deriving any decisions.

## When to use

- A real restaurant lead has cleared the 7-check qualification (see `restaurant-website-system/research/lead-fit-qualification.md`)
- You are about to fork a template for them
- You need to plan the redesign — what to keep, what to fix, what to surface

## When not to use

- The lead is still being qualified — use `lead-fit-qualification.md` instead
- You are auditing a CATALOG template (not a real restaurant) — use `restaurant-website-system/research/template-audits/` instead

---

## Required inputs (HARD GATE — do not start without these)

1. **The current site URL** — for findings table + platform fingerprint + mobile capture
2. **A Google reviews packet** — minimum 15–25 recent reviews + owner-reply chain if visible. Powers Block 2 (Secret Sauce + Owner Voice).
3. **Visual asset inventory access** — at minimum the Google Maps photos page; ideally the restaurant's IG handle and FB page. Powers Block 5 photography-tier gate.
4. **Local mobile preview capability** — `preview_start` + `preview_resize` + `preview_screenshot` available. Powers Block 1 mobile capture.

If any of (1)(2)(3) are missing, **stop and get them** before opening Block 1. Item (4) you can skip with explicit flag if running headless.

### How to get reviews + owner replies

Priority order — **try every step**, don't bail at the first 403:

1. **Ask the user to paste them.** Phrasing: *"Before I run the audit, I need (a) 20+ recent Google reviews, (b) the restaurant's IG and FB handles, and (c) the URL of their Google Maps listing. The reviews ideally include any owner replies — those are gold for capturing brand voice."*
2. **Scrape via WebFetch first.** Try the live site, then aggregator pages: Restaurantji → Wanderboat → res-discover → Wheree → Trip.com → Foursquare → Tripadvisor (auto-redirects). WebFetch's server-side fingerprint clears some bot gates that headless Chromium does not.
3. **WebSearch for verbatim snippets.** Queries that surface review prose: *`"<name>" "<city>" review "the <signature dish>" OR "the broth"`*, *`"<name>" "<city>" Google review "5 stars" OR "loved" OR "recommend"`*, *`"<name>" "<city>" "we went" OR "had dinner" OR "happy hour"`*. Google's search-result snippets surface 1–4 sentences of review prose verbatim, which is enough to source named-staff and signature-dish quotes when direct scraping is blocked. **Especially valuable** for finding NAMED STAFF (e.g. surfaced "Neilla is exceptional" for V's House) — those names go straight into Block 2 category 2.
4. **Local-browser scrape via Playwright.** See the technique block below — Playwright + Chromium are already installed at `~/Library/Caches/ms-playwright/` and v1.59 is on PATH (`npx playwright`). Works reliably for the **target restaurant's own site** (live screenshots, mobile-viewport captures, deep-link page pulls). Gets blocked by **Yelp, Google Maps SPA, Google SERP, and Restaurantji** which all run aggressive bot detection (DataDome / reCAPTCHA / consent gates).
5. **Last resort: proceed with explicit flag** — only if user waives. Audit will be much weaker.

---

### Live-browser technique (Playwright) — installed and ready

**Use it for: live-target-site mobile/desktop screenshots, deep-link sub-page pulls, and any non-bot-walled aggregator (Wanderboat, res-menu, etc).**

**Don't use it for: Yelp, Google Maps direct, Google SERP, or Restaurantji direct** — all four return DataDome / reCAPTCHA / "verifying you are human" gates to headless Chromium even with stealth flags. Fall back to WebSearch snippets + WebFetch on aggregators for those sources.

Drop a Node ESM script in `restaurant-website-system/sites/<slug>/scrapes/`. Set `package.json` to `{"type":"module"}`. Reference snippet (live-site capture, iPhone 13 + desktop):

```js
import { chromium, devices } from 'playwright';
const browser = await chromium.launch({ headless: true });

// iPhone 13 mobile capture
const m = await browser.newContext({ ...devices['iPhone 13'] });
const mp = await m.newPage();
await mp.goto('https://restaurant.example/', { waitUntil: 'networkidle', timeout: 60000 });
await mp.waitForTimeout(2000);
await mp.screenshot({ path: 'screenshots/mobile-home.png', fullPage: true });
await mp.screenshot({ path: 'screenshots/mobile-home-fold.png', fullPage: false });

// Desktop capture
const d = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dp = await d.newPage();
await dp.goto('https://restaurant.example/', { waitUntil: 'networkidle' });
await dp.screenshot({ path: 'screenshots/desktop-home.png', fullPage: true });

await browser.close();
```

**After capturing**: full-page mobile screenshots are routinely 1170×11000+ on iPhone 13 viewports — load them at full resolution and you'll exhaust the read window. **Always downscale before reading**: `sips -Z 600 input.png --out input-thumb.png` (matches the existing rule in `feedback_restaurant_template_images.md`).

Stable selector contract for live target sites: most restaurant sites are Squarespace / WordPress / Wix / Webflow with predictable layouts. Mobile-screenshot inspection beats DOM scraping for findings; only fall to DOM scraping if you need to count something exactly (photos, menu items).

### Bot-block matrix (treat as cached knowledge)

| Source | WebFetch | Playwright headless | Pull strategy |
|---|---|---|---|
| Target restaurant site | ✅ usually | ✅ usually | Either; Playwright for screenshots, WebFetch for text |
| Wanderboat | ✅ | ✅ | WebFetch is cheaper |
| Restaurantji | ⚠️ first call only (later 429) | ❌ "verifying you are human" page | First WebFetch call wins; don't retry many times |
| res-menu, res-discover, Wheree, Trip.com | ✅ | ✅ | WebFetch |
| Foursquare | ↪ redirects to login wall | ❌ login wall | Skip — not worth it |
| Yelp | ❌ 403 | ❌ DataDome CAPTCHA | WebSearch snippets only |
| Google Maps (direct) | ⚠️ landing-page only | ❌ Maps SPA hides reviews behind a JS-only Reviews tab that headless can't reach | WebSearch snippets only |
| Google SERP / Knowledge Panel | ⚠️ partial | ❌ reCAPTCHA gate | WebSearch is the right tool |
| TripAdvisor | ⚠️ wrong-page redirects common | not tested | Verify URL belongs to the right business before trusting output |
| Fort Worth / Dallas Observer / local press | usually 403 in WebFetch | not tested | WebSearch surfaces the byline + headline; the press feature itself only matters for the External Trust strip — usually you don't need the article body |

Outcome: for review packets, **WebSearch + WebFetch (aggregators) covers Yelp + Google indirectly**. Direct Yelp/Google scraping is not worth the time investment unless the user provides a paid bot-bypass.

---

## The five blocks

Drop the artifact at `restaurant-website-system/sites/<restaurant-slug>/audit.md`.

### Block 1 — Verbatim findings

A table of what the site actually does, quoted, with no interpretation yet. Capture the standard fields (platform, hero, CTAs, address, phone, reservation flow, menu format, hours, photography count, owner/chef story, heritage signal, reviews displayed, aliveness elements, social, copyright string).

**NEW subsection: Mobile state** — required, not optional.

Run `preview_start` against the live site, then `preview_resize` to 390×844 (iPhone 13). Capture 3–5 screenshots of specific failure surfaces:

- Hero at first paint (CTA visible? phone tap-target size?)
- Reservation flow — count taps from landing to a bookable surface
- Menu page (does it require horizontal scroll? PDF that won't open inline?)
- Hours / location section (visible without zooming?)
- Any sticky bar / popup / cookie modal that breaks viewport

Output a numbered list of mobile failures with screenshots inline. Example: *"1. Hero CTA below fold on iPhone 13 (screenshot). 2. Reservation requires 4 taps to surface phone number (screenshot). 3. PDF menu won't open inline on iOS Safari (screenshot)."* These screenshots become pitch ammunition — they are referenced verbatim in Block 4.

### Block 2 — Secret Sauce (review-derived)

What guests already love. **The owner has to feel seen here**, not just diagnosed. This is the block that converts the audit from a diagnostic to a pitch.

Open with one paragraph synthesizing what guests come back FOR, then break out by category. Use 2–4 verbatim quotes per category — verbatim in the audit, paraphrased in the pitch doc later.

**The 13-category extraction checklist** (omit empty categories):

1. **Owner / family story** — named owners, family ties, "feels like home"
2. **Named staff** — servers, bartenders, hosts mentioned by name across reviews
3. **Chef** — named, "S/O to [chef name]"
4. **Signature dishes** — items with 3+ mentions
5. **Vibe / ambiance / room** — guests' words for the room
6. **Outdoor seating / patio / view** — explicit callouts
7. **Bar program** — named drinks, wine praise
8. **Heritage / years in operation** — "since 19XX," "been coming X years"
9. **Occasions** — what guests come FOR (anniversaries, dates, kids, business, memorial, holidays)
10. **Service moments** — accommodation stories, kid-friendliness, dietary, language barrier, big-party
11. **Value** — portion + price callouts
12. **Hospitality warmth** — "feels like family," "made us feel welcome"
13. **Second register** — sports-bar back room, private events, day/night split, brunch tier

**NEW subsection: Owner voice — verbatim phrases.** Required.

Pull verbatim phrases from the owner's own words: Google review owner replies, FB "About" copy, IG bio, any handwritten menu descriptions on the current site, "Letter from the chef" copy, voice-driven nav labels. Tag each by tone: warm / proud / specific / heritage / playful.

Format:
```
[
  { phrase: "Cheers!", source: "Google reply", tone: "warm" },
  { phrase: "...", source: "IG bio", tone: "specific" },
  ...
]
```

Aim for 4–8 phrases. Fork uses these as seed copy for hero sub, About paragraph, footer tagline, "Letter from the chef" component, and 404 page voice. **This is the antidote to AI-filler copy** — the goal is that every prose block in the new site sounds like the owner wrote it.

**NEW subsection: External trust signals.** Required.

These do NOT live on the restaurant's own site — that's why the rebuild surfaces them. Search beyond the site:

- Local press hits (Daily Herald, Crain's, Eater, regional food blogs, "Best Of" lists)
- Industry awards (Wine Spectator, James Beard semifinalist, OpenTable Diners' Choice, Yelp Top 100)
- Chamber of commerce / "Best of [Town]" reader-polls
- TV / podcast / YouTube features
- Long-tail review-aggregator rankings if reputable

Use `WebSearch` for *"<restaurant name> <city>"* + *"<restaurant name> best of"* + *"<restaurant name> press"* + *"<restaurant name> award"*.

Output:
```
[
  { source: "Daily Herald", year: 2024, claim: "Top 10 McHenry steakhouses", url: "..." },
  { source: "OpenTable", claim: "Diners' Choice 2023", url: "..." }
]
```

Fork builds a press strip below the hero or in footer. If nothing is found, state that explicitly — don't invent.

End Block 2 with a one-line note on owner-response signal (does the owner reply to Google reviews? when last? — this is itself an aliveness signal the new site should mirror).

### Block 3 — Per-principle violations

Bold the Principle reference + verdict (BROKEN / UNDERSELLS / HIDDEN / MISSED / WEAK / DEAD), one paragraph each. Cite specific sections of `restaurant-website-system/research/restaurant-website-strategic-principles.md`:

- **Part 1** — business-model fit (1.1 conversion CTA, 1.2 aesthetic-to-bill, 1.3 menu-access friction)
- **Part 2** — register signaling (2.1 typography, 2.2 palette restraint, 2.3 photography fidelity)
- **Part 3** — trust strategy (3.1 reviews placement, 3.2 "Since YYYY," 3.3 chef-as-brand)
- **Part 4** — operational signals (4.1 sub-page count, 4.2 hours, 4.3 phone vs widget)
- **Part 5** — first-viewport floor (5.1) + photo (5.2) + copy (5.3) + mobile (5.4) + repeat-visit (5.5)
- **Part 8** — anti-patterns (cite by number)
- **Part 10** — aliveness layer

**Cross-reference Block 2 here.** When the site fails to surface something guests already praise, that's a HIDDEN verdict — much sharper for being review-grounded. **Cross-reference Block 1 mobile state here too** — Principle 5.4 violations should cite the specific mobile failures captured.

### Block 4 — So why are we rebuilding it?

Numbered list answering qualification check 5: *"if they saw our redesign, the specific reason they'd want to swap is ___"*. Each item connects a site failure (Block 3) to a guest-loved asset (Block 2) to a mobile failure (Block 1). End with a verbatim pitch sentence that names at least one Block-2 asset by name.

**NEW subsection: Hero lock.** Required, comes after the pitch sentence.

This is the highest-leverage component data the entire audit produces. The fork pastes this into the template's content config without modification.

**The two-tier hero rule (non-negotiable):** the restaurant name is the visual anchor, NOT a slot for a positioning sentence. Set the name as the wordmark / h1 — large, display typeface, register-coded — and put the positioning work in the **eyebrow above** and **sub below**. A giant restaurant name in a well-chosen display typeface is itself a register signal (Cormorant italic = heritage Italian, Bodoni-narrow = Michelin-ceremonial, Cherry Bomb = casual takeout). Replacing the name with a tagline trades brand-recognition + typographic register for copy — typically a wash or net-negative. See `feedback_hero_pattern_name_anchor.md`.

```
{
  wordmark: "Restaurant Name (as it appears in marks, exact casing)",
  eyebrow: "positioning line — 5-8 words, small caps treatment",
  sub: "supporting line, 12-18 words, owner-voice register, carries trust signals",
  hero_photo_subject: "primary subject (e.g. 'bone-in ribeye, plated, warm low-light')
                       + 1-2 fallbacks if primary not available",
  cta_primary: { label: "...", action: "open Resy widget" | "scroll to menu" | etc },
  cta_secondary: { label: "...", action: "..." } | null,
  rationale: "drawn from [3 specific Block-2 quotes]"
}
```

Constraints:
- `wordmark` is ALWAYS the restaurant name. Never substitute a tagline. If the brand has a stylized logo, the wordmark field documents the spelling/casing/typographic treatment (e.g., *"VINE & PLATE — serif all-caps, ampersand at center"*).
- `eyebrow` is the highest-leverage copy slot — it's what tells the customer *why this place is different in 5 seconds*. MUST be drawn from Secret Sauce signals (signature dish, occasion, hospitality warmth, heritage, owner voice). No filler. Run it through Principle 8 anti-pattern #3 — if it could appear on any restaurant site, rewrite.
- `sub` SHOULD use at least one phrase from the Owner-Voice phrase bank (Block 2 new subsection) and SHOULD carry an external-trust signal (rating, ranking, press claim) drawn from Block 2 External Trust signals.
- `hero_photo_subject` MUST be a real photo we know exists in the visual asset inventory (Block 5 photo gate). If it doesn't exist yet, state that and propose a shoot.
- `cta_primary` MUST match the conversion model per Principle 1.1.

**Edge case — long restaurant names:** if the name wraps awkwardly on mobile (e.g., "The Black Bear Bistro" wraps to 4 lines on plate-01's default h1 size), reduce the type size at mobile breakpoints rather than shortening the name. Wrapping is a typography failure, not a copy failure.

**Templates that already do the two-tier pattern correctly** (no fork-time component work needed): gusto-01, velvet-shaker-01, bramble-01, qitchen-01, labrisa-01, varro-01. **Templates where the h1 slot was originally designed as a tagline slot and needs explicit promotion of the wordmark** (component-level work in the fork): plate-01.

### Block 5 — Risks before fork

**NEW subsection (FIRST in this block, before template hypothesis): Photography inventory + tier gate.**

Per Principle 5.2, photography is 40–60% of register fidelity, and tier-mismatch is the single biggest fork-risk in the system. Cucina Bella + Walnut both burned this. Audit the actual photo inventory across all available sources:

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site | | | | | |
| Google Maps photos | | | | | |
| Instagram | | | | | |
| Facebook | | | | | |
| Owner-supplied (if any) | | | | | |
| **Total usable** | | | | | |

Rate each shot on usability — *not just count, but warm-light-grading + composition + resolution*. Then emit a binary verdict against the tier ladder (Principle 5.2):

- **Tier-1** (alinea / 1776 / qitchen / varro / labrisa): requires ≥30 usable shots, warm-natural-low-light grading, 2-3 shots per signature dish, chef portrait, detailed process shots
- **Tier-2** (gusto / labrisa / bramble class): 15–20 usable shots, consistent warm grading
- **Tier-3** (pepper / latte / plate / saladify class): 8–12 bright daylight signature dish shots

State the verdict explicitly: *"Tier-2 ready. Tier-1 blocked until owner agrees to a 30-shot pro shoot. Recommended template hypothesis routes from 1776-redesign-01 (Tier-1) DOWN to gusto-01 (Tier-2) if owner declines shoot."*

This verdict CONSTRAINS the template hypothesis below — don't recommend a template tier the photography can't support.

**Then the standard risk subsections** (after the photo gate):

- **Register risk** — natural template fit oversells/undersells the bill? Cross-check `template-inventory.md`. Include explicit template hypothesis with rationale.
- **Owner-emotional risk** — anything requiring owner buy-in (Wix-dashboard control, removing legacy nav, surfacing names, etc.)
- **Heritage-data unknowns** — founding year, owner names, chef name (don't invent — ask)
- **Reservations-platform decision** — OpenTable / Resy / Tock recommendation if migrating from phone
- **Register-split risk** — second-register surfaces from Block 2 that could be misintegrated (sports-bar, private events, brunch tier)

End with a one-line **status footer**: qualified pre-fork status + recommended template hypothesis (consistent with photo tier) + 3–5 pre-flight asks for the owner.

---

## Hard gates

**Gate 1 — Input gate.** Don't start blocks 1–5 without URL + reviews packet + visual inventory access. Mobile preview optional but recommended.

**Gate 2 — Hero lock gate.** Block 4 must end with the Hero Lock 4-tuple drawn from real Secret Sauce data + owner voice + verified photo inventory. If `h1` could appear on any restaurant site, rewrite. If `hero_photo_subject` doesn't exist in the inventory, propose a shoot in Block 5 and reroute the template hypothesis down a tier.

**Gate 3 — Photography tier gate.** Block 5 must include the photo inventory table + tier verdict BEFORE the template hypothesis. Template hypothesis must respect the verdict — no Tier-1 templates with Tier-3 photography.

**Gate 4 — Pitch sentence gate.** Block 4's pitch sentence must name at least one Block-2 asset by name (chef, owner, signature dish, named staff, occasion, owner-voice phrase). If it doesn't, the reviews + owner-voice work weren't actually used — rewrite Block 4.

---

## Reference docs to load

1. `restaurant-website-system/research/restaurant-website-strategic-principles.md` — principles cited in Block 3
2. `restaurant-website-system/research/template-inventory.md` — Block 5 template hypothesis
3. `restaurant-website-system/research/aliveness-patterns.md` — Part 10 violations
4. `restaurant-website-system/research/lead-qualification/review-secret-sauce-pass-2026-04-28.md` — origin of Secret Sauce pattern (background only)
5. `~/skills/agency-website-design/SKILL.md` Section 2.7 (mobile-quality bar) + Section 2.8 (ReviewWall mandate) — what the BUILD must do with the audit's outputs. The audit's review packet is the source for the build's ReviewWall component (verbatim, anonymized). The audit's mobile-failure screenshots feed the build's mobile-quality verification step.

---

## Style rules

- **No `§` character.** Use "Principle 1.1" / "Section 1.1" / "Part 1" — the strategic-principles doc uses "Part X" for top-level and "X.Y" for subsections.
- **Verbatim quotes from reviews** go in single asterisks (`*"..."*`), with reviewer first name + recency where useful.
- **Paraphrase quotes in pitch doc**, but keep them verbatim in the audit so Block 3 can cite them precisely.
- **Don't invent facts.** Founding year, chef name, owner names, awards — list as "unknown — ask owner" in Block 5, never as guesses anywhere else.

---

## Validated examples

- **Da Baffone** (`sites/da-baffone/audit.md`, 2026-04-25) — original four-block validated.
- **Bistro Wasabi** (`sites/bistro-wasabi/audit.md`, 2026-04-29) — first audit with Secret Sauce as a formal block.
- **Addison's Steakhouse** (`sites/addisons-steakhouse/audit.md`, 2026-04-29) — first audit running the five-block standard from the start; surfaced the gap that prompted promoting this from memory to a real skill, AND prompted the five-improvement upgrade (Hero Lock + Photo Tier Gate + Owner Voice + Mobile Capture + External Trust) shipped 2026-04-29.
