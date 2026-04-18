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

## What to look for during analysis (the good-eye checklist)

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

## Lineage

This skill was promoted from `restaurant-website-system/research/skill-seeds.md` after being executed once on `qitchen-01` and proving its value (it caught the sticky-left-image pattern that a screenshot-only audit missed, and produced exact ground-truth color and typography values that an eyeball-audit would have gotten wrong).

Future improvements (track in skill-seeds, promote when earned):
- `restaurant-template-fork` — once N templates exist, the parallel skill for forking one for a real restaurant
- `restaurant-photo-treatment-guidance` — the photo-grading subskill that pairs with this analysis
