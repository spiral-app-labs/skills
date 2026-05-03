---
name: restaurant-template-analysis
description: Deep-capture and audit a Framer restaurant template or live restaurant website before adding it to the restaurant-website-system catalog or using it as fork inspiration.
---

# Restaurant Template Analysis

**When to use:** any time a Framer restaurant template URL or live restaurant website URL needs to be analyzed before being added to the `restaurant-website-system` catalog as a recreation, OR before being used as inspiration for a fork.

**Goal:** turn an opaque rendered website into a complete, ground-truthed audit with measurable design tokens, structural insights, and motion behavior — suitable for faithful code recreation.

**Trigger words:** "analyze this template", "audit this restaurant site", "deep capture this URL", "before we recreate", "extract the design system from".

> Do NOT use for: simple "what does this site look like" questions (use WebFetch directly), or for sites that are not going to feed the restaurant-website-system catalog.

---

## Why this exists

A naive analysis approach is to fetch the URL with WebFetch and write impressions. This fails on Framer (and most modern restaurant sites) because:

1. **Framer is heavily JS-rendered** — WebFetch returns minimal HTML and misses 90% of visual structure.
2. **Static screenshots miss motion** — page-load reveals, scroll-driven sticky behavior, and hover transitions are invisible in single frames.
3. **Eyeballing colors and fonts is unreliable** — getting `#0A0B0A` vs `#000000` matters; mistaking `Forum` for `Canela` matters.
4. **One-viewport vs multi-viewport pages look identical at first glance** — without measuring `scrollHeight`, you can't tell if the design ends or continues.

This skill provides a deterministic capture pipeline that addresses all four.

---

## The four-pass capture pipeline

The pipeline is implemented in [`restaurant-website-system/scripts/shoot-template.sh`](../restaurant-website-system/scripts/shoot-template.sh) (wrapper) and [`shoot-template.mjs`](../restaurant-website-system/scripts/shoot-template.mjs) (Playwright script). It produces six artifact types per template:

### Pass 1: Full-page screenshots (desktop + mobile)
- Viewport: 1440×900 desktop @ 2x DPR; 390×844 mobile @ 2x DPR
- Scrolls programmatically through the entire page before capturing to trigger lazy-loaded images
- Output: `screenshots/{desktop,mobile}-{page}.png`

### Pass 2: Scroll-position frames
- Captures viewport-sized frames at 0% / 25% / 50% / 75% / 100% scroll
- **This is what reveals sticky/fixed elements** — if a left column appears in identical position across all 5 frames while the right column changes, you've found a sticky pattern.
- Output: `scroll-frames/desktop-{page}-scroll-{000,025,050,075,100}.png`

### Pass 3: Hover state captures
- Hovers the primary CTA (BOOK A TABLE / RESERVE / RESERVATIONS via fuzzy text match) and any thumbnail nav cards
- Captures a frame after a 700ms wait so transitions complete
- Output: `scroll-frames/desktop-{page}-hover-{cta,card-N}.png`

### Pass 4: Page-load video + frame extraction
- Records a `.webm` video of the entire page-load (Playwright `recordVideo`)
- Extracts frames at 0.3s / 1s / 2s / 3s / 5s using `ffmpeg`
- **This is what reveals load-in reveal sequences** — staged fades, lifts, stagger timing.
- Output: `videos/page@*.webm` + `motion-frames/{hash}-t{N}s.png`

### Bonus: Computed-style + asset extraction (per page)
- Reads `getComputedStyle()` from `body`, `h1`, `h2`, `h3`, `p`, nav links, and any button-like elements
- Scans 500 elements for declared CSS `animation` / `transition` / `transform`
- Captures all loaded font URLs (`woff2`/`ttf`/`otf`) and the first 40 image URLs
- Output: `meta/{page}.json`

This is the highest-value pass — it's the only way to get **exact ground truth** for color hex values, font family names, font sizes, line-heights, letter-spacing, and text-transform. Eyeballing these is wrong almost every time.

---

## Standard workflow

### 1. Set up the input folder

```bash
SLUG=editorial-luxury-02   # vibe-NN convention; vibe must match an archetype
mkdir -p /Users/ethantalreja/skills/restaurant-website-system/inputs/framer-templates/$SLUG
```

Write `source.md` first (see existing examples). It captures URL, vibe first-impression, and likely archetype match — gives the auditor 30 seconds of orientation.

### 1.5 Collect reviews and identify the restaurant's secret sauce

For live restaurant-site audits, do not rely on the website alone. The old site
often shows what the owner *meant* to communicate; Google reviews show what
guests actually experienced and remembered. Collect both before writing copy,
proof sections, personalization notes, or pitch docs.

**How to collect review context:**

- First ask the user for pasted Google reviews if they have them.
- If the user does not provide reviews and browsing/browser tooling is
  available, manually scrape or capture representative Google reviews yourself.
- Capture a balanced review packet when possible: recent reviews, high-signal
  older reviews, repeat themes, and any named dishes/drinks/events.
- Record provenance in `source.md`: pasted by user, scraped manually, captured
  via browser, source URL if available, and capture date.

**What to extract from reviews plus website content:**

- What are they known for? Named dishes, drinks, specials, happy hours, patio,
  brunch, music, catering, value, portions, speed, or service rituals.
- Why do people like them? Food quality, price/value, staff warmth, owner
  presence, room/vibe, consistency, convenience, kid-friendliness, accessibility,
  late hours, local products, or community feeling.
- What does the website claim is special, and do reviews confirm it?
- What do reviews praise that the website currently hides?
- What operational details matter to guests: parking, wait time, wheelchair
  access, outdoor seating, laptop seating, vegetarian options, pup cups, or
  "open later" requests.
- What language do real guests use that the new site can echo without sounding
  generic?

**Required synthesis:**

Write a short "secret sauce" note in the audit/source notes before build:

```md
## Secret Sauce

- Owner/site claim:
- Review-confirmed strengths:
- Named items or experiences:
- Guest language worth echoing:
- Risks / do-not-overclaim:
- Website/pitch implications:
```

Use this synthesis to shape the redesigned site and the pitch docs. The goal is
not just to point out leaks; it is to make the owner feel accurately seen. If
the restaurant is beloved for staff, value, atmosphere, Wednesday happy hour,
seasonal drinks, generous portions, or a specific dish, the new site should make
that obvious.

Keep claims honest:

- Do not invent or freeze a rating count unless it was captured with a date.
- Prefer paraphrased themes and short attributed excerpts over long quotes.
- Mark any review-derived menu item, event, or proof claim as owner-confirm
  needed when it is not also present on the official site.
- Do not cherry-pick a single quote as the whole story if the review packet says
  something more nuanced.

### 2. Run the capture pipeline

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
./scripts/shoot-template.sh $SLUG https://example.framer.website / /menu /about /contact
```

First run takes ~3 min (installs Playwright + Chromium). Subsequent runs ~30-60s per template. Output lands in `inputs/framer-templates/$SLUG/{screenshots,scroll-frames,videos,motion-frames,meta}/`.

### 3. Verify capture quality

Quick sanity checks before doing the audit:

- **Were full pages captured?** Check `screenshots/desktop-*.png` dimensions with `sips -g pixelWidth -g pixelHeight *.png`. If a page is exactly 1800px tall (= 900 viewport × 2x DPR), confirm via `meta/{page}.json` `dims.scrollHeight === dims.clientHeight` whether the page is one-viewport-by-design or whether `fullPage: true` failed.
- **Did the videos record?** Each page should produce a `.webm`. If missing, the `recordVideo` context option failed.
- **Did `meta/*.json` populate?** If `computed.h1` is `null`, the page uses a non-standard heading element — adjust the selector list in the script.

### 4. Scaffold the audit

```bash
./scripts/new-audit.sh $SLUG
# Opens research/template-audits/$SLUG.md from _TEMPLATE.md
```

### 5. Fill the audit using the captured artifacts

For each audit section, use the artifact that's authoritative:

| Audit section | Authoritative artifact | What to extract |
|---|---|---|
| §1 Summary, §2 Vibe | `screenshots/desktop-home.png` + `meta/home.json` (imageUrls give you photo subjects) | First-impression interpretation |
| §3 Structure | All `screenshots/*.png` (page-by-page) + `scroll-frames/desktop-*-scroll-*.png` | Section order, sticky behavior, info architecture |
| §4 Visual system → typography | `meta/*.json` `computed.{h1,h2,h3,p}.fontFamily / fontSize / lineHeight / letterSpacing / textTransform` | Exact font names + pixel sizes — DO NOT EYEBALL |
| §4 Visual system → color | `meta/*.json` `computed.bodyBg`, `computed.h1.color` (and inspect screenshots for surface/elevated colors) | Convert `rgb(N,N,N)` to hex — note even 1-channel asymmetry (qitchen's `#0A0B0A` has G one notch above R/B = warm) |
| §4 Visual system → animation/motion | `motion-frames/*.png` + `meta/*.json` `animations` array | Reveal sequence (which elements appear at which times); CSS animations vs Framer/JS-driven |
| §5 Conversion / UX | All screenshots + scroll frames + hover states | Whether CTA stays accessible during scroll, mobile behavior |
| §6 Reusable ideas | Cross-reference with other audits' patterns | Look for repetition before declaring a pattern reusable |
| §11 Component mapping | Synthesize from §3 + §4 | What primitives the recreation would need |
| §12 Personalization manifest | Synthesize the locked vs swappable from §4 + first-impression cohesion testing | What breaks if changed vs what's free to swap |

### 6. Tag every visual claim `[observed]` or `[inferred]`

This is the audit's quality discipline. If the claim came from a `meta/*.json` value or a screenshot you actually looked at, it's `[observed]`. If you're filling a gap with reasonable guess (e.g., "motion is probably subtle because no parallax is visible in scroll frames"), it's `[inferred]`. The `_TEMPLATE.md` audit template enforces this convention.

### 7. Promote the audit to `locked` only when

- All 12 sections filled (no `TBD` left)
- Every visual claim tagged
- Component mapping (§11) and personalization manifest (§12) populated — these are non-negotiable; they're what makes the template usable downstream

### 8. Update downstream files

- **`research/template-inventory.md`** — add row with all scores; slot into ranking categories; update coverage map.
- **`research/site-router.md`** — if this template fills a route that was `TBD`, populate.
- **`research/pattern-library.md`** — if any pattern observed in this template now appears in ≥2 templates, document it (with cross-references).
- **`research/design-tokens-and-variants.md`** — if a new color palette / type class / motion intensity emerges, add to the catalog.

---

## The designer-eye lens (read this BEFORE the technical checklist)

The capture pipeline gives you data. Data alone produces shallow audits. To produce world-class recreations, you also need to look at the captured artifacts the way a senior designer would. This section is the bottle for that thinking.

### What world-class designers actually notice

Pure programmer-thinking sees: "this is a div with these properties." Designer-thinking sees: "this design is making a deliberate choice to *exclude* something — and the absence is what's communicating."

Train yourself to notice the *absences* and *disciplines* as much as the elements:

- **What's NOT there?**
  - Qitchen has no brand accent color. That's not a blank — it's a discipline. The absence of accent is what signals "we don't need to convince you with hue, the typography and photography do the work."
  - Qitchen has no scroll on most pages. That's not laziness — it's editorial restraint signaling "we have less to say than we have substance."
  - 1776 has no Instagram embed, no newsletter signup, no "follow us." That's intentional — those would dilute the warm-fine-dining register.
- **What's repeated relentlessly?**
  - 1776 uses the italic-on-serif emphasis 7+ times across every page. ONE pattern, used everywhere. That's a discipline-as-brand decision. A weaker template would use 3 different emphasis patterns and feel inconsistent.
  - Qitchen uses uppercase for nearly every text element including UI labels and section headers. That's not a typography choice — that's a worldview.
- **What's the design *assuming* about the viewer?**
  - Qitchen assumes you already know what kind of restaurant you're looking for and you'll act deliberately. That's why single CTA, no urgency, no upsell, no "join our list."
  - 1776 assumes you might be on the fence and benefits from multiple proof points (4.9★, Wine Spectator badge, gluten-free callout, testimonials, story timeline). That's why the rich, multi-section homepage.
  - These assumptions ARE the brand positioning. Recreating without understanding them produces components that work but don't *cohere*.
- **What's the design saying without words?**
  - The centered floating header pill (1776) signals tradition / formality / "we have nothing to hide."
  - The upper-left floating header pill (qitchen) signals editorial / modern / "we're confident the work speaks for itself."
  - These are 100-pixel decisions that carry brand weight.

### The narrative lens — what story is the design telling?

Every world-class restaurant site tells a *story* through its design. Before writing the audit, ask:

1. **What's the opening sentence?** (The hero — not the words, the visual move.)
   - Qitchen: "We exist. Here is one perfect dish, one perfect headline, one perfect action. The rest is for inside."
   - 1776: "We're refined and we're warm. Here are the dishes you might love, here are the awards we've earned, here's where to find us, here are voices saying what they thought, here's the story of how we got here."
2. **What's the middle?** (The sections — what arc do they walk you through?)
   - Qitchen: there is no middle. The page IS the opening. That IS the story.
   - 1776: signature dishes → marquee positioning → "we're more than a meal" manifesto → reviews → quote-on-photo → reservation. A classic five-act conversion arc.
3. **What's the closing?** (The footer — what's the last thing you see?)
   - Qitchen: a single line. "We don't beg. We're done." (The discipline reinforces the brand.)
   - 1776: hours, address, phone, badges. "Here's how to find us, when we're open, what makes us safe to choose. Now go book." (Service reinforces the warmth.)
4. **What does the design *promise* about the actual restaurant experience?**
   - Qitchen promises: "When you arrive, every dish will be deliberate. The space will be quiet. You'll feel small in the best way."
   - 1776 promises: "When you arrive, you'll be greeted. The food will be excellent. You'll relax."
   - These promises are encoded in the design. Mismatches between promise and reality are why some good-looking restaurant sites convert poorly — the site signals fine dining and the actual restaurant is casual, or vice versa.

### Cohesion testing — the most important diagnostic

The single biggest difference between an okay restaurant site and a world-class one is **cohesion** — every element supports the same story. Testing for cohesion as you analyze:

For each element you note (a button style, a photo treatment, a heading size, a section pattern), ask:

> **"Could this element be from a different template? Would it feel out of place if dropped into a sibling section?"**

If yes, the design is loose. If no, the design is cohesive — it's making the same world over and over again.

Examples of cohesion-critical elements you'll spot during audits:
- A button that uses a different border-radius than the cards on the same page (incoherent).
- A photo with brighter daylight than the photos two scroll-screens up (incoherent).
- A heading that uses a different display font than the page title (incoherent).
- An italic emphasis on one heading and not the others (incoherent — should be all-or-nothing).
- A reserve button on five places, but the colors slightly differ across them (incoherent).

When auditing, flag every cohesion-break you find. Most templates have at least one — qitchen and 1776 both have very few, which is part of why they're catalog-worthy.

### Reading the design language

Each template has a *design language* — its specific dialect of editorial / warm / playful / etc. To articulate it (which you must, in audit §2):

- Pick 3-5 adjectives. Make sure they pull in the same direction (don't say "warm AND minimalist" — those fight). Examples that work: "ceremonial / restrained / dark / quiet / Japanese-influenced." "Refined / welcoming / dark-warm / confident / classical-American."
- Identify the 1-2 design moves doing the most semantic work. These are the moves you must preserve in recreation. Removing them changes the brand.
  - Qitchen: floating-pill nav + uppercase Forum at hero scale + image-left-with-overlay + single-CTA-discipline.
  - 1776: italic-on-serif emphasis + amber accent + multi-section narrative + multi-channel CTA.
- Identify what the language is in *opposition* to. Every design language defines itself partly by what it's not.
  - Qitchen is in opposition to: warm, busy, accented, conversion-optimized.
  - 1776 is in opposition to: ceremonial, monastic, single-viewport, minimal.
  - Knowing the opposition helps you route briefs correctly — if a brief leans toward what the template opposes, route elsewhere.

### When to override the data with judgment

The capture pipeline gives you `meta.computed.h1.fontSize = "115.2px"`. The data says one thing. Designer-judgment sometimes says: "but on a smaller viewport that becomes 56px and the line breaks weirdly — the *intent* is `clamp(56px, 9vw, 115px)`." Always recover the *intent* from the *measurement*, not just the measurement.

Same for color: `rgb(13, 27, 42)` is the data. The intent is "deep cool navy that reads as serious without being cold." A token name like `canvas` captures the intent; the hex captures the measurement. Always name tokens by intent in `theme.ts` so future swaps preserve meaning.

### The three questions to answer before writing any audit section

1. **What is this design choosing to BE?** (The positive identity.)
2. **What is this design choosing to NOT be?** (The opposition / discipline.)
3. **What's the smallest set of elements that, if changed, would shift the answer to #1 or #2?** (The cohesion-critical core — the locked items in the personalization manifest.)

If you can answer these for the audit's subject template, the audit will be world-class. If you can only answer them with hand-waving, do another pass through the captures.

---

## What to look for during analysis (the good-eye technical checklist)

When opening the captured artifacts for a new template, deliberately look for these — they're the high-leverage reusable patterns:

### Layout signatures
- Does the page use a multi-column layout, and is there a column that stays constant across all pages? (qitchen: yes, image-left)
- Is there sticky/fixed behavior? (Capture: do scroll-frames show identical regions across 0%/50%/100%?)
- Does the design fit one viewport, or does it scroll? (Check `meta.dims.scrollHeight` vs `clientHeight`.)

### Header / nav patterns
- Is the nav full-width or compact? Sticky or fixed? Where on screen?
- How many CTAs? (Single-CTA discipline is a strong fine-dining signal.)
- Does mobile nav use a hamburger overlay, bottom-bar, or compact pill?

### Typography signatures
- How many fonts? (One = strong discipline. Two = display + body. Three+ = warning — usually bloat.)
- What's the type scale ratio? (Big ratios = editorial; tight ratios = utility.)
- Is text uppercase or mixed case? (Check `textTransform` in `meta`.)
- What's the largest text on the page? (Page title usually, but where on screen?)

### Color signatures
- How many colors do the work? (3 = restraint. 5+ = expressive. Note which color is the "accent" — if any.)
- Is the dark a true `#000` or warm/cool? (Check the channel asymmetry in `bodyBg`.)
- Does the design rely on photography for warmth, or on a brand accent?

### Motion signatures
- Are there CSS animations declared, or is everything JS-driven? (Check `meta.animations` vs `transitions`.)
- Is there a load-in reveal sequence? (Check `motion-frames` at t=0.3s vs t=2s — if content appears between frames, there's a reveal.)
- Are scroll-position frames identical for any region? (That region is sticky/fixed.)
- Are hover frames different from default frames? (Hover transitions exist.)

### Conversion signatures
- How many clicks from landing to reserved? (Lower = better fine-dining.)
- Is the CTA visible on every page? (Test by checking each page's screenshot for the CTA.)
- Is the menu accessible without a click? (Some templates surface menu preview on home; others gate it.)

---

## Common failure modes and how to recognize them

### "I think it's Canela" → it's actually Forum
Eyeballing serif fonts is unreliable. Always check `meta.computed.h1.fontFamily`. Forum, Canela, GT Sectra, Lyon, Cormorant, and DM Serif Display all look similar at hero scale.

### "Looks like one viewport" → it's actually 5
And vice versa. Check `meta.dims.scrollHeight` before declaring "this is a one-viewport design." Never trust the screenshot if it's exactly 1800px (1×900 viewport × 2x DPR) without confirming.

### "Subtle hover effect" → there's no hover effect
Single hover frames at +700ms can miss transitions that are too fast to capture. Check `meta.animations.transitions` — if `transition: all` or any duration is declared, transitions exist; if not, they don't.

### "It's all Framer Motion magic" → it's CSS keyframes you missed
Always check `meta.animations.animations[]`. If non-empty, there are declared CSS animations. Framer-Motion-driven animations show up as `transform: matrix(...)` in `meta.animations.transforms[]`.

### "The page has parallax" → it has a sticky element
Sticky positioning often gets misread as parallax. The diagnostic: in scroll-position frames, parallax shows progressive offset (image moves slightly relative to scroll); sticky shows zero movement (image stays exactly fixed).

### "Hero image fades in slowly" → it's actually a 3-stage staggered reveal
Page-load reveals are usually staggered, not unified. Look at `motion-frames` at 0.3s, 1s, 2s. If different elements appear between frames, there's a sequence — not a single fade.

---

## Anti-patterns to avoid

- **Don't audit before capturing.** The audit template assumes you have the artifacts. Filling §4 from imagination produces inferred-everything audits that need redoing later.
- **Don't promote to `locked` without `meta/*.json` data.** That's eyeballing pretending to be ground truth.
- **Don't skip mobile screenshots.** Two-column layouts collapse interestingly on mobile and the collapse pattern is part of the template's reusable design.
- **Don't capture without scroll.** You'll miss the entire scroll experience and any sticky behavior.
- **Don't skip the video.** Page-load motion is invisible in static frames; the load-in sequence is often the only motion the template has.

---

## Outputs this skill produces

For a single template URL, this skill produces:

1. **In `inputs/framer-templates/{slug}/`:**
   - `source.md` (auditor-written)
   - `screenshots/`, `scroll-frames/`, `videos/`, `motion-frames/`, `meta/` (script-generated)
2. **In `research/template-audits/{slug}.md`:**
   - Locked 12-section audit with every visual claim tagged `[observed]` / `[inferred]`
3. **Updates to `research/`:**
   - `template-inventory.md` — new row + ranking slots
   - `site-router.md` — route assignments updated
   - `pattern-library.md` — new patterns or cross-references
   - `design-tokens-and-variants.md` — new variant classes if applicable

Total time per template: ~45-90 minutes depending on template complexity.

---

## Tools required

- **Node 18+ + npm** — for Playwright
- **Chromium** — auto-installed by Playwright on first run
- **ffmpeg** — for motion-frame extraction from videos. Install via `brew install ffmpeg` on macOS.

The script handles dependency installation transparently.

---

## Session-handoff brief

If you're a fresh agent picking this up cold, here's the minimum you need to know:

1. **Read `restaurant-website-system/README.md` first** — the catalog-and-fork mental model and the two-phase operating mode are the foundation. Without that, this skill makes less sense.
2. **Read the existing audits in `research/template-audits/`** as worked examples. `qitchen-01.md` and `1776-redesign-01.md` are the canonical references for what a good audit looks like.
3. **Run the pipeline on a new template before writing anything** — the captures change what you'd write.
4. **Use the designer-eye lens (above) before the technical checklist.** The technical checklist tells you what's there; the designer-eye lens tells you what it MEANS.
5. **The three questions** at the end of the designer-eye section are the test for whether you understand the template well enough to recreate it. If you can't answer them, capture more / look harder before writing.
6. **Cohesion is the goal.** Every audit decision, every recreation choice, every personalization-manifest entry should serve cohesion. Fragmented audits produce fragmented templates produce fragmented restaurant sites.

When in doubt, the audits and the system README contain enough context to act independently. Don't try to recover conversation history — the artifacts are designed to be the source of truth.

## Lineage

This skill was promoted from `restaurant-website-system/research/skill-seeds.md` after being executed once on `qitchen-01` and once on `1776-redesign-01`. The qitchen pass caught the sticky-left-image pattern and produced exact ground-truth values that an eyeball-audit would have gotten wrong (Forum vs Canela, `#0A0B0A` vs `#000`). The 1776 pass uncovered the italic-on-serif emphasis pattern as the highest-leverage cross-template insight — a designer-eye observation, not a technical one. Both proves the value of pairing the technical pipeline with deliberate designer-eye reading.

Future improvements (track in skill-seeds, promote when earned):
- `restaurant-template-fork` — once N templates exist, the parallel skill for forking one for a real restaurant
- `restaurant-photo-treatment-guidance` — the photo-grading subskill that pairs with this analysis
