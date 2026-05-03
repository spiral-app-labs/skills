---
name: restaurant-fork-improvement
description: Use when polishing a freshly-built fork in `restaurant-website-system/sites/<name>/` from "demo-shippable" to "pitch-ready." Distinct from `restaurant-website-audit` (which tells you what to build) and `restaurant-template-animations` (which is the catalog of animation primitives). This skill is the post-fork-v1 improvement pass: copy tightening, animation upgrades, and the proof-pattern set (review carousel, press marquee, parallax hero). Loads when the user asks to "improve / polish / level up / make it better" an already-built fork.
---

# Restaurant fork improvement — the post-v1 polish pass

When a fork ships from the audit-driven first pass, it covers the audit (Hero Lock, real text menu, ReviewWall, PressStrip, LiveOpenStatus, etc.) but typically reads as **competent, not magnetic**. This skill is the v1 → v2 polish pass that closes that gap without redesigning.

The improvement pass has **three categories**, in this priority order:

## Section 1 — Proof patterns (do these first)

These convert the static "trust block" into a live, scrollable proof surface. They are the highest-leverage moves on the page, because they convert the audit's collected reviews/press from "wall of text" into something a guest *interacts with*.

### Section 1.1 — ReviewCarousel (auto-moving horizontal marquee, anonymized)

**This is the signature pattern for the improvement pass.** Every fork ships an auto-moving horizontal review carousel.

**Locked behavior contract — applies to every fork in the catalog:**
- **Auto-scroll + user-scroll, both at once.** The carousel auto-advances continuously AND the user can drag/swipe horizontally at any time. This is a JS-driven `scrollLeft` increment (~60px/sec via `requestAnimationFrame`), NOT a CSS `transform: translateX` marquee. The transform-marquee pattern blocks user interaction; the scrollLeft pattern doesn't.
- **Pause-on-interaction:** `mouseenter` pauses indefinitely (resumes on `mouseleave`). `touchstart` / `pointerdown` / `wheel` pauses for 4 seconds, then resumes — long enough for the user to read the card they swiped to, short enough that the marquee feels alive again.
- **Seamless wrap:** cards duplicated 2× in JSX (`[...REVIEWS, ...REVIEWS]`). When `scrollLeft` passes half the track width, subtract half — invisible jump because the second half is identical to the first.
- **`prefers-reduced-motion`: auto-scroll disabled entirely.** User can still manually scroll. Detect via `window.matchMedia('(prefers-reduced-motion: reduce)').matches` inside the `useEffect`.
- **Hide the scrollbar** so the auto-scroll doesn't render a visible track moving on its own — `.no-scrollbar::-webkit-scrollbar { display: none; }` + inline `style={{ scrollbarWidth: 'none' }}` for Firefox.
- **No JS timers other than `requestAnimationFrame`.** No `setInterval`, no IntersectionObserver gating, no "pause when out of view." The animation is cheap (one scrollLeft write per frame) and doesn't need observation.
- **Card width:** `w-[85vw] md:w-[440px]` — one full card visible on mobile, two-and-change on desktop.
- **No framer-motion `whileInView` wrappers** on the carousel or its children. `whileInView` fails to fire reliably in some preview tooling and on slow mobile, leaving cards stuck at `opacity:0`.
- **Edge fades:** the section's left and right edges have a `bg-gradient-to-r/l` overlay matching the section background, so cards melt in/out of frame instead of hard-cropping. `pointer-events-none` so they don't block drag.
- **No prev/next chevrons or progress dots.** Drag/swipe is the navigation. The auto-scroll is the discovery.

**NO NAMES — locked rule.** Each card renders **only**:
- A 5-star row (`★★★★★`)
- The verbatim quote in quotation marks
- A small uppercase platform tag at the bottom: *"Google Review"* / *"OpenTable Review"* / *"Yelp Review"* / *"Tripadvisor Review"*

**Do NOT render:** reviewer first names, last names, initials, avatars, dates, themes/categories, or "verified buyer" badges. Names invite name-mining, "is this review real?" friction, and (in some jurisdictions) republication-consent friction. The platform tag is the credibility signal; the quote is the proof. The reviewer's identity is never the pitch.

**SHORT QUOTES — locked rule.** Each card carries **8–18 words**. No card should run more than ~3 short lines on mobile. Long verbatim reviews must be **truncated with an ellipsis** (`…`) to the most quotable fragment, not pasted in full. Reasons:
- Long cards force the marquee card height taller than the viewport on mobile (vertical overflow).
- Long cards lose the "scannable proof" effect — guests skim the marquee, they don't read it.
- A truncated 12-word fragment with `…` reads as "real review, edited for the wall." A 60-word block reads as "the agency dumped the JSON."

**How to trim well:** keep one concrete noun (a dish, a moment, an adjective). Drop conjunctions, throat-clearing, and personal anecdotes. Examples:
- ✅ *"The Szechuan spicy broth was flavorful."* (7 words, one concrete noun)
- ✅ *"Family, friends, date night… honestly anything."* (7 words, ellipsis trims the original)
- ❌ *"My first Asian BBQ and hot pot experience — amazing. A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything."* (32 words, 4+ lines on mobile)

If a quote *must* run longer to land its specific dish/moment, cap at 18 words and let the rest go. The marquee carries 8–12 cards anyway — there's no scarcity that requires hoarding text on a single card.

**Source priority:** Google Maps reviews are the strongest signal because they're the highest-volume review surface for any local restaurant. Scrape them via the Codex/Claude in-app browser per the audit skill (`scrapes/google.json`), strip to verbatim quotes only (drop `name`, `date`, `id`, `theme` fields entirely), and feed into the carousel's local `REVIEWS` array or into `content.ts` as `home.reviewsAnon = [{quote, source}, ...]`. Yelp / OpenTable / Tripadvisor / Restaurantji are good supplements; tag each card with its actual source platform.

**Reference implementation:** `restaurant-website-system/sites/maax-asian-bbq/components/AnonReviewCarousel.tsx` is the canonical anonymous-marquee implementation. Same shape applies to every fork — only the `REVIEWS` array contents and theme tokens (canvas colour, accent colour) change.

**Older reference (DEPRECATED for new forks):** `sites/cucina-bella/components/ReviewCarousel.tsx` and `sites/dibenedetto-trattoria/components/ReviewCarousel.tsx` use the older auto-advance-with-prev/next + named-attribution pattern. Existing forks can keep the older pattern, but **all new forks ship the AnonReviewCarousel pattern**. When polishing one of those older forks for v2+, swap to AnonReviewCarousel.

**Why not the older auto-advance + named pattern:**
- The auto-advance + IntersectionObserver "pause when out of view" was unreliable across preview tools and on iOS Safari (cards stuck at `opacity:0`). The pure-CSS marquee always works.
- Named attribution opens up name-republication concerns and creates "is this person real?" doubt for a fraction of guests. The platform tag carries the credibility without that overhead.
- "Show one, hint at more" was the original logic, but the marquee actually shows ALL of them in motion — guests scan the verbatim flow without having to click.

### Section 1.2 — PressMarquee (continuous-scroll press strip)

Replace the static 4-column press grid with a continuous left-scrolling marquee of all press logos + ratings + named press quotes. Doubles the apparent press density (8–10 visible vs 4) and adds aliveness to a section that otherwise reads as a tombstone.

- Pure CSS animation: `animate-marquee` keyframes, 40s duration, hover-to-pause via `group-hover:[animation-play-state:paused]`.
- Duplicate the array twice in JSX so the loop seams visually.
- Each item: source name + one-line quote, with `text-gold` source / `text-text-muted-dark` quote.

### Section 1.3 — StatCounter (animated count-up)

Surface the rating numbers (Google 4.4 · 1,154 / OpenTable 4.6 · 116) as count-up animations triggered when the block enters viewport. `useReducedMotion` short-circuits to the final number for accessibility.

## Section 2 — Copy tightening

The first pass often ships press-style copy ("A Vu family kitchen since 1982 — pho hand-made over 24 hours, an upscale-Vietnamese room designed by Hatsumi Kuzuu, and a cocktail bar that runs from Saigon Sidecars to a Vietnamese-coffee espresso martini."). This is fine as a press release but reads dense for a hero pitch. The improvement pass:

- **Hero pitch:** Cut from 38 → 22–28 words. Lead with one concrete proof noun, follow with one concrete sensory noun. Drop conjunction-heavy lists. *Example: "A Vu family kitchen on Bedford-Euless Road since 1982. Pho hand-made over 24 hours. A Saigon-coded bar that pours past midnight."*
- **Eyebrow:** keep 4–6 words, all caps tracked-out. Don't change unless the audit version is imprecise.
- **Section h2:** prefer concrete-noun + verb statements over abstract claims. *"The dishes guests come back for"* > *"What we're known for"*.
- **Meta lines on signature tiles:** include the *number*: "cited in 28 Google reviews" beats "popular." Numbers convert.
- **Menu sub-headers:** sensory + specific. *"Six varieties. Broth simmered 24 hours."* beats *"Our pho selection."*
- **Footer copy:** the closing line under the wordmark is the parting impression — make it the heritage hook, not boilerplate.

## Section 3 — Animation upgrades

Use the [restaurant-template-animations](../.claude/skills/restaurant-template-animations/SKILL.md) skill for the catalog of patterns. The improvement pass typically applies these on top of the v1 baseline:

- **Parallax hero photo** — `transform: translateY(scrollY * 0.3)` on the hero background image. Keeps the photo grounded as content scrolls over.
- **Reveal stagger refinement** — children of a grid get `delay={idx * 0.08}` (NOT `idx * 60`; framer-motion's delay is **seconds**). Easy v1 bug.
- **Hover lift on cards** — `hover:-translate-y-1 hover:shadow-xl transition-transform duration-300`. Don't apply to text-only sections — feels overproduced.
- **Image zoom on hover** — `group-hover:scale-105 transition-transform duration-700` inside `overflow-hidden` parent. Works on signature tiles, gallery cards.
- **Cursor-follow gradient on hero** — subtle radial gradient that tracks `mousemove`. Optional; only if the register is upscale-modern. Skip for traditional/heritage registers.

## Anti-patterns

- **Don't redesign.** This is polish, not rework. If you're rebuilding the hero, stop and re-run the audit's Hero Lock instead.
- **Don't add new sections.** If the v1 has 6 sections, the v2 has 6 sections. Improvement is *within-section*.
- **Don't add a third animation library.** Stick with framer-motion (already in the template) + CSS keyframes for marquees.
- **Don't add a carousel for things that aren't review/press content.** Menu items belong in a grid; gallery photos belong in a grid; the carousel pattern is reserved for *proof* content.

## Workflow

1. Read the audit at `sites/<name>/audit.md` to confirm the v1 covered everything.
2. Diff the current `components/` against the catalog of improvement patterns above.
3. Build the ReviewCarousel first. It's the highest-leverage move and it changes how the rest of the page reads.
4. Tighten copy in `content.ts` only — never inline copy in components.
5. Add animation upgrades last (parallax, stagger fix, hover lifts).
6. Run typecheck + dev server + verify all routes return 200 in the preview tool.
7. Commit with a single squashed message: `vs-house: v2 polish — ReviewCarousel + tightened copy + parallax hero`.

## What this skill is NOT

- It's not the **audit skill** (`~/skills/restaurant-website-audit/`). The audit tells you what's broken before the fork. This skill polishes after.
- It's not the **animation skill** (`~/.claude/skills/restaurant-template-animations/`). That's the primitive catalog. This skill curates which primitives to apply.
- It's not a **redesign skill**. If the register is wrong, the audit + a new template fork is the right tool, not this one.

## Reference forks

- `sites/cucina-bella/components/ReviewCarousel.tsx` — canonical carousel implementation.
- `sites/vs-house/components/` — first fork built with this skill in mind from day one.

---

*Created 2026-04-30 alongside the V's House v2 polish pass.*
