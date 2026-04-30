---
name: restaurant-fork-improvement
description: Use when polishing a freshly-built fork in `restaurant-website-system/sites/<name>/` from "demo-shippable" to "pitch-ready." Distinct from `restaurant-website-audit` (which tells you what to build) and `restaurant-template-animations` (which is the catalog of animation primitives). This skill is the post-fork-v1 improvement pass: copy tightening, animation upgrades, and the proof-pattern set (review carousel, press marquee, parallax hero). Loads when the user asks to "improve / polish / level up / make it better" an already-built fork.
---

# Restaurant fork improvement — the post-v1 polish pass

When a fork ships from the audit-driven first pass, it covers the audit (Hero Lock, real text menu, ReviewWall, PressStrip, LiveOpenStatus, etc.) but typically reads as **competent, not magnetic**. This skill is the v1 → v2 polish pass that closes that gap without redesigning.

The improvement pass has **three categories**, in this priority order:

## Section 1 — Proof patterns (do these first)

These convert the static "trust block" into a live, scrollable proof surface. They are the highest-leverage moves on the page, because they convert the audit's collected reviews/press from "wall of text" into something a guest *interacts with*.

### Section 1.1 — ReviewCarousel (horizontal scroll-snap, Google reviews)

**This is the signature pattern for the improvement pass.** Replace the static 3×N `ReviewWall` grid with a horizontal scroll-snap carousel of 8–12 verbatim Google reviews.

**Behavior contract:**
- Auto-advances every 5.5s when the section is in viewport AND not hovered AND not paused.
- Pauses on hover; pauses for 9s after a manual prev/next click.
- Active card scales to 100% opacity + scale-100; inactive cards sit at scale-0.97 + opacity-60 with a 700ms ease-out transition. Subtle — reads as polish, not motion-heavy.
- Mobile: native swipe via `snap-x snap-mandatory`. Desktop: prev/next chevrons + clickable progress dots.
- Card width: `basis-[85%] md:basis-[42%] lg:basis-[32%]` — 1 / 2 / 3 cards visible per breakpoint.
- IntersectionObserver tracks the most-visible card to drive `activeIndex`.

**Source priority:** Google Maps reviews are the strongest signal because they're the highest-volume review surface for any local restaurant. Scrape them via the Codex in-app browser per the audit skill (`scrapes/google.json`), strip to verbatim quotes + first-name-only attribution, and feed into `content.ts`. Yelp / OpenTable / Restaurantji are good supplements but Google is the lead.

**Reference implementation:** `restaurant-website-system/sites/cucina-bella/components/ReviewCarousel.tsx`. Same shape applies to every fork — only the `content.ts` shape and theme tokens change.

**Why not just ReviewWall:** A static 9-card grid asks the guest to read 9 reviews. A carousel asks them to read one, and offers 8 more if they want. Conversion-pattern-wise, "show one, hint at more" beats "show everything" — same logic that drove the audit's `MenuListDotLeader` over a fully-expanded menu page.

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
