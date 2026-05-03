---
name: agency-website-design
description: Reference only for legacy restaurant/bar website design patterns. Do not use as the active agency workflow; prefer `website-agency-operator`, `restaurant-site-router`, `restaurant-template-fork`, `restaurant-fork-improvement`, and `restaurant-qa-delivery`.
---

# Agency Website Design System — Build Bible
**Version:** 2.3 | **Scope:** Restaurant & Bar Websites | **Stack:** Next.js 14 + Tailwind v3 + Framer Motion
**Source of Truth:** Deep analysis of 8 live Framer restaurant templates + exact HTML/CSS extraction

> **Cold-start brief:** Read this ENTIRE document before writing a single line of code. This is not a style guide — it is a complete build specification. Every component, every section variant, every animation, and every page is fully specced here. A world-class restaurant website ships from this document alone. Do not estimate values — use the exact pixel values extracted from live Framer templates documented throughout.

---

## Table of Contents

0. [Standard Agency Workflow — End-to-End Process](#0-standard-agency-workflow)
1. [Core Attributes — Non-Negotiable](#1-core-attributes)
2. [Quality Gate: What Separates Framer-Quality from Mediocre](#2-quality-gate)
3. [Extracted Values from Live Framer Templates](#3-extracted-values)
4. [Structural Philosophies — The 6 Core Patterns](#4-structural-philosophies)
5. [Video-First Component System](#5-video-first-component-system)
6. [Composable Theme System](#6-composable-theme-system)
6.9. [Restaurant-Type-to-Theme Matching Guide](#69-restaurant-type-to-theme-matching-guide)
6.10. [Same-Cuisine Differentiation Rules](#610-same-cuisine-differentiation-rules)
7. [Navigation & Header Variants](#7-navigation--header-variants)
8. [Hero Section Variants](#8-hero-section-variants)
9. [Menu Page Variants](#9-menu-page-variants)
10. [About / Story Page Variants](#10-about--story-page-variants)
11. [Contact Page Variants](#11-contact-page-variants)
12. [Supporting Section Components](#12-supporting-section-components)
13. [Full Component Library](#13-full-component-library)
14. [Page Templates — Complete Compositions](#14-page-templates)
15. [Page-by-Page Build Process](#15-page-by-page-build-process)
16. [Global Styles](#16-global-styles)
17. [Technical Stack & File Structure](#17-technical-stack--file-structure)
18. [Quality Checklist](#18-quality-checklist)
19. [Common Build Failure Patterns](#19-common-build-failure-patterns)
19.1. [Stock Image Sourcing by Cuisine](#191-stock-image-sourcing-by-cuisine)

---

## 0. Standard Agency Workflow — End-to-End Process

**This is the mandatory workflow for EVERY restaurant website build.** No shortcuts. Each phase produces artifacts that feed the next.

### Phase 1: Deep Research (before any code)

Research the restaurant thoroughly. Every design decision must be grounded in real data, not assumptions.

#### 1A. Current Website Audit
- **Fetch full HTML/CSS** of their current website (if they have one). Use `web_fetch` or browser tools.
- **Document every issue:** broken layouts, missing mobile responsiveness, outdated design, missing pages, slow load times, no SEO metadata, missing social links, bad typography, no menu online, etc.
- **Screenshot key pages** if browser tools are available.
- **Check network/performance:** load time, image optimization, broken assets.
- **Note what they DO well** — don't throw away anything that works.

#### 1B. Google Reviews & Reputation
- **Search Google reviews** for the restaurant. Pull:
  - Overall rating (e.g., 4.5 stars, 200+ reviews)
  - Common themes (e.g., "great brunch spot", "amazing cocktails", "family friendly", "farm-to-table")
  - Any negative patterns to be aware of (long waits, parking, etc.)
- **Scrape 20-30 reviews from Google, Yelp, and OpenTable. Keep only 4-5 star reviews. Strip real names (keep anonymous). Note the source platform for each review (Google / Yelp / OpenTable / TripAdvisor).** These populate the infinite-scroll testimonials carousel on the homepage.
- These quotes become **social proof content** on the site.

#### 1C. Social Media & Visual Identity
- **Instagram:** Check their feed (@handle). Note:
  - Visual style (warm/moody/bright/rustic)
  - What they post most (food, drinks, events, community, behind-the-scenes)
  - Follower count and engagement
  - Best-performing content themes
- **Facebook:** Check for events, community posts, additional info.
- Instagram feed embed goes on the homepage.

#### 1D. Menu & Offerings Research
- **Scrape or fetch their actual menu** from their website, Google listing, Yelp, or DoorDash/UberEats.
- **Get real menu items, real prices, real descriptions.** Do not invent menu items.
- Note menu structure: what categories, what's featured, specials, dietary options.
- This directly informs the Menu page build.

#### 1E. Competitive Context
- **Look at 2-3 nearby competitor restaurants' websites** in the same area/category.
- Note what competitors do well and where there are gaps.
- This informs differentiation in the pitch.

### Phase 2: Issue Documentation (Notion)

Create a Notion subpage under the main agency Notion page with:
- **Restaurant name + URL**
- **Current site issues** — bulleted list of every problem found in Phase 1A
- **Review highlights** — rating, best quotes, themes from Phase 1B
- **Social presence summary** — from Phase 1C
- **Menu overview** — from Phase 1D
- **Design direction** — recommended theme, structural philosophy, font pairing, color palette, justified by research

This doc is the research foundation and will be updated after the build with the pitch/improvements list.

### Phase 3: Design Planning

Based on research, decide:
- **Theme** (from Section 6 of this skill): which of the 6 themes fits this restaurant's vibe?
- **Structural philosophy** (from Section 4): bento, video-hero, split, editorial, narrative, or texture?
- **Font pairing:** specific serif display + sans body fonts
- **Color palette:** primary, accent, background, text colors — grounded in the restaurant's existing brand or vibe
- **Layout approach per page:** how each page uses the chosen structural philosophy
- **Content strategy:** what real content goes where (real menu items, real review quotes, real Instagram, real hours/location)
- **Image/video sourcing plan:** what can be pulled from their existing site/Instagram, what needs stock

### Phase 4: Build

Follow the rest of this skill document (Sections 1-18). Build page by page per Section 15.
- Use **real content** from research — real menu items, real review quotes, real hours, real addresses.
- Use **real Instagram handle** for the feed embed.
- Apply the chosen theme, structural philosophy, and font pairing from Phase 3.

### Phase 5: QA & Improvement

Run the full Quality Checklist (Section 18) after the build.
- Fix every failing check.
- **Run the 7 mobile-quality checks (Section 2.7) — non-negotiable.** Verify at 390×844 (iPhone 13). Mobile is where restaurant traffic decides; a "looks fine on desktop" pass is not enough.
- **Verify the ReviewWall ships per Section 2.8** — verbatim quotes from the audit, no reviewer names, aggregate banner, mobile 1-col / lg 4-col grid.
- Do a visual review at 390px (mobile) and 1440px (desktop).
- Test all links, CTAs, and interactive elements.
- Run `npm run build` — zero errors.
- Iterate on weak sections (hero impact, menu readability, animation smoothness).

### Phase 6: Deploy

- Deploy to Vercel with `vercel --prod`.
- Verify the live URL works, images load, videos play, all pages accessible.
- Test OG image / social preview using a link previewer.

### Phase 7: Pitch Document (Notion Update)

Go back to the Notion doc created in Phase 2 and add a new section: **"Improvements Made — Client Pitch"**

For each improvement, write it as a **value proposition for the restaurant owner**, not a technical description:

| What We Built | Why It Matters For Your Business |
|---|---|
| Mobile-responsive design with sticky navigation | 70%+ of your customers find you on their phones — now they get a beautiful experience |
| Full interactive menu with category tabs | Customers browse your menu before visiting — increases walk-ins and reduces "what do you have?" calls |
| Google review integration with real quotes | Social proof from real customers builds trust before someone walks through your door |
| Video hero showcasing your space | First impression in 2 seconds — visitors feel your atmosphere before they arrive |
| Instagram feed embedded on homepage | Your social content works double duty — every post updates your website automatically |
| SEO optimization with meta tags & OG images | When someone Googles "restaurants in [city]" or shares your link, you show up beautifully |
| Online event/private dining inquiry | Captures catering and event leads you're currently losing |
| Fast load times & modern design | Your website matches the quality of your food and space |

Frame every improvement as: **"Here's what was broken/missing → here's what we built → here's what it means for your bottom line."**

This Notion doc (issues found + improvements made + business value) becomes the pitch deck for the sales conversation with the restaurant owner.

### Workflow Summary

```
Research → Document Issues (Notion) → Plan Design → Build → QA → Deploy → Update Notion with Pitch
```

**Every website. Every time. No exceptions.**

---

## 1. Core Attributes

Every site built under this system must have ALL of the following, regardless of theme. These are non-negotiable.

| Attribute | Requirement | Failure Mode |
|-----------|-------------|--------------|
| **Dual-font typography** | Serif/script display + clean sans body. Always 2 fonts. Serif = personality. Sans = readability. | Single-font sites feel like landing pages, not restaurants. |
| **Overlapping/offset layouts** | Negative margins (`-mt-16` to `-mt-32`), explicit z-indexing, cards breaking out of containers. | Flat grid = generic. Breaking the grid = premium. |
| **Scroll-triggered animations** | Framer Motion `whileInView` reveals, stagger children, parallax via `useScroll` + `useTransform`. | Static pages feel unfinished and cheap. |
| **Full-viewport hero** | Video or image, cinematic overlays, animated title entry. Min-height: 100vh. | Small heroes don't command attention. |
| **Social proof** | Review cards, animated counters, Google rating display, stars. | Trust is earned, not assumed. |
| **Responsive mobile-first** | Every layout works at 375px. Flex/grid collapses correctly. No horizontal scroll. | Most restaurant visitors are on mobile. |
| **Menu page with category tabs** | Sticky tab bar, scroll-active highlight, dotted name/price leader, inline images. | Text-only menu lists are forgettable. |
| **SEO + OG images** | `<title>`, `<meta description>`, `og:image`, `og:title`, `og:type=restaurant.restaurant` on all pages. | Invisible on social shares and Google. |
| **Italic serif emotional moment** | At least one tagline/phrase in italic serif in the accent color, large scale (40px+). | The "soul" of the restaurant must be FELT somewhere. |
| **Asymmetric CTAs** | Primary = filled, Secondary = outline/ghost. Never two filled buttons. | Two filled buttons fight each other. |
| **Large rounded corners** | `border-radius: 14-16px` on cards, `48px` on bento containers. Never `border-radius: 4-8px` as default. | Small radius feels like a 2018 Bootstrap site. |
| **Image dominance** | Images must be LARGE. Hero overlay max `rgba(0,0,0,0.5)`. Featured dish images `min-height: 280px`. Text is secondary to atmosphere. | Text-heavy pages kill atmosphere. |
| **Breathing room** | Section `padding: 120px 0` minimum; 160px for hero/CTA moments. Never `py-16` as a default. | Tight padding makes luxury feel cheap. |
| **Video-first hero** | Every hero accepts either video or image. Video is DEFAULT. Static image is fallback. | Video creates life that static cannot match. |
| **Minimum image count** | MINIMUM 12 images on the homepage. Every section must have at least one image or video. Only the Welcome/Philosophy statement may be text-only. | Image-sparse pages feel empty and cheap regardless of layout quality. |
| **Menu page images** | Inline food images for at least 30% of menu items. Use Unsplash food stock if needed. | Text-only menus look like a PDF. |
| **Minimum parallax** | At least 3 parallax sections per homepage (not just the hero). Atmospheric images throughout should have scroll-triggered parallax via `useScroll` + `useTransform`. | One parallax element is a trick. Three+ is a design language. |
| **Minimum video count** | **Target 3 video elements per homepage:** hero + one atmospheric section break + video background in a third section (e.g. Private Events CTA or a bento cell). Hard minimum is 2. Always push for 3. | Two videos = acceptable. Three videos = immersive. One video = fails QA gate. |
| **Staggered card grids** | ALL card grids use stagger animation (not just featured dishes). Delay = `index * 0.12`. | Unstaggered grids feel robotic. |
| **Floating elements** | Badge/counter/quote elements should have subtle `translateY` oscillation (hover or idle). Breaks container boundaries (negative margins, absolute positioning). | Static floating elements betray the premium promise. |
| **Page transitions** | Smooth transitions between routes using Framer Motion `AnimatePresence`. | Hard cuts between pages feel amateurish. |
| **Dramatic counter animations** | Counters in StatsBar animate with large serif numbers. Easing should feel dramatic, not mechanical. | Small-number or sans-serif counters lose their emotional weight. |

---

## 2. Quality Gate

What separates a Framer-template-quality site from a generic restaurant website. Study these patterns until they're instinct.

### 2.1 Breathing Room — Exact Values

**DO THIS:**
```css
/* Section padding — minimum */
.section { padding: 120px 0; }     /* py-32 in Tailwind */

/* Hero/CTA moments */
.hero { padding: 160px 0; }        /* py-40 in Tailwind */

/* Card internal padding */
.card { padding: 40px; }           /* p-10 in Tailwind */

/* Typography gap (label → headline) */
.label-to-headline { margin-bottom: 8px; }   /* mb-2 */

/* Headline to body */
.headline-to-body { margin-bottom: 16px; }   /* mb-4 */

/* Major layout gap (bento, tiles) */
.grid-gap { gap: 16px; }           /* gap-4 */

/* Card inner gap */
.card-gap { gap: 8px; }            /* gap-2 */
```

**NEVER DO THIS:**
```css
/* These values create a generic site */
.section { padding: 64px 0; }   /* py-16 — too tight */
.card { padding: 16px; }         /* p-4 — feels like a list item */
.grid-gap { gap: 4px; }          /* no breathing room */
```

### 2.2 Image Dominance Rules

```tsx
// ✅ Hero overlay — MAX opacity 50%
<div className="absolute inset-0 bg-black/50" />

// ✅ Featured card — image takes 65%+ of card height
<div className="h-72 overflow-hidden">  {/* min 288px */}
  <img className="w-full h-full object-cover" />
</div>

// ✅ Full-bleed photo sections
<section className="relative h-[600px] overflow-hidden">
  <img className="absolute inset-0 w-full h-full object-cover" />
</section>

// ❌ WRONG — image as decoration
<img className="w-24 h-24 rounded" />  // too small, lost

// ❌ WRONG — overlay too dark
<div className="absolute inset-0 bg-black/75" />  // image disappears
```

### 2.3 Typography Contrast System

Every page needs 4 typography levels, sharply differentiated:

```
Level 1: Display (hero/page titles)
  - Size: 80-120px (clamp(64px, 10vw, 120px))
  - Font: Display serif
  - Weight: 400-500 (NOT 700 — heaviness kills elegance)
  - Tracking: 0.02-0.05em (tight to normal)

Level 2: Section headings
  - Size: 40-56px
  - Font: Display serif
  - Weight: 400-500
  - Tracking: 0.02em

Level 3: Sub-labels and tags
  - Size: 10-12px
  - Font: Sans-serif
  - Weight: 500-600
  - Tracking: 0.25-0.35em (VERY wide)
  - Transform: uppercase

Level 4: Body text
  - Size: 15-17px
  - Font: Sans-serif
  - Weight: 300-400
  - Line-height: 1.6-1.8
  - Color: 55-70% opacity of main text color
```

### 2.4 Animation Timing Rules

```tsx
// ✅ CORRECT — premium easing curve
transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}  // custom ease out

// ✅ CORRECT — stagger children
transition={{ duration: 0.6, delay: index * 0.12 }}

// ✅ CORRECT — spring for interactive elements
transition={{ type: 'spring', stiffness: 250, damping: 20 }}

// ✅ CORRECT — parallax range
const y = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])

// ❌ WRONG — linear is mechanical
transition={{ duration: 0.3, ease: 'linear' }}

// ❌ WRONG — too fast
transition={{ duration: 0.15 }}

// ❌ WRONG — too slow
transition={{ duration: 2.0 }}
```

### 2.5 Color Application Discipline

```
Accent color rules:
- Primary use: borders, labels, price text, dividers, icon fills
- Occasional use: button fills, hover states
- NEVER: entire section backgrounds (1-2 elements max per section)
- NEVER: body text (accent draws eye, all-accent = no hierarchy)

Dark background opacity layering (Framer pattern):
- Text on image: white at 100%
- Secondary text on image: white at 60%
- Tertiary/whisper text: white at 30-40%
- Card on dark bg: bg at 10-15% lighter than page bg
- Border accent: accent color at 10-20% opacity default, 30-40% on hover
```

### 2.6 The Overlapping Layout Imperative

**This is the #1 premium signal.** Elements that break out of their containers create depth and visual interest. Every page must have at least ONE of:

```tsx
// Pattern A: Card overlapping image (negative margin)
<div className="relative">
  <img className="w-full h-[480px] object-cover" />
  <div className="-mt-24 relative z-10 mx-6">  {/* pulls card up 96px */}
    <div className="bg-[var(--bg-elevated)] p-10 rounded-2xl shadow-2xl">
      {/* card content */}
    </div>
  </div>
</div>

// Pattern B: Absolutely positioned badge/element
<div className="relative">
  <img className="w-full h-[400px] object-cover rounded-2xl" />
  <div className="absolute -bottom-6 -right-6 bg-[var(--accent)] text-[var(--bg)] p-6 rounded-2xl">
    <span className="font-serif text-2xl font-bold">4.9★</span>
  </div>
</div>

// Pattern C: Translate-based offset (Roma pattern)
<div className="grid grid-cols-3 items-start gap-4">
  <div>  {/* item 1 — baseline */}
    <img className="w-full aspect-[3/4] object-cover rounded-2xl" />
  </div>
  <div className="translate-y-12">  {/* item 2 — offset down */}
    <img className="w-full aspect-[3/4] object-cover rounded-2xl" />
  </div>
  <div className="-translate-y-8">  {/* item 3 — offset up */}
    <img className="w-full aspect-[3/4] object-cover rounded-2xl" />
  </div>
</div>
```

### 2.7 Mobile-quality bar — non-negotiable

Mobile is where the majority of restaurant traffic decides whether to walk in. **A site that "looks fine on desktop" but is mediocre on mobile fails the build.** Verify every fork against this checklist before pitching:

**The 7 mobile-quality checks (every fork must pass):**

1. **First-viewport floor at 390×844 (iPhone 13).** Eyebrow + wordmark + sub + at least one CTA must be reachable without scrolling. The CTA is the conversion path (tap-to-call for diners, reservation widget for upscale, online-order for fast). If it's below the fold on iPhone 13, the hero fails.
2. **Sticky tap-to-call button on mobile.** Bottom-fixed, thumb-reach zone (bottom-left or bottom-right, never both — that is the AI Concierge's slot). Diner economics demand a single-tap dial path. Hide on `md:` and up.
3. **Inline HTML menu, never image-only.** A flattened JPG / PDF print menu is an automatic mobile failure (pinch-zoom, no allergen filter, screen-reader-invisible, search-invisible). Build the menu page from `content.menu.categories[].items[]`. Toast Tab / OpenTable order links may be additive but never the only menu surface.
4. **Wordmark wraps gracefully.** Long restaurant names (3+ words) must reduce h1 size at the `sm:` breakpoint instead of clipping or wrapping awkwardly. Use `clamp(40px, 9vw, 72px)` patterns. Test "The Black Bear Bistro"-class names — they're the failure case.
5. **Greek-key / divider / decorative elements responsive.** If the hero uses flanking dividers around the wordmark, **stack them above + below on mobile**, not left + right (left+right squeezes them to zero width). Use `flex-col md:flex-row`.
6. **Floating elements never collide.** If both an AI Concierge launcher AND a sticky tap-to-call button ship, place them on opposite bottom corners and verify they don't overlap any link they cover. Open the dialog and verify the launcher's exit animation does not strand a click target.
7. **Footer reachable on a single thumb scroll.** LiveOpenStatus pill, hours, tap-to-call phone, address, real social links, walk-in policy. Old sites usually fail steps 5–7 of this list (no socials, no live status, no walk-in policy).

**Verification workflow (before claiming the build is done):**
- `preview_resize` to 390×844, scroll the entire page, screenshot the hero, the menu (if inline), the review wall, the letter-from-us, and the footer.
- Tap-test the primary CTA on mobile (use `preview_click` on the tel: link target).
- Test the AI Concierge open/close + suggested-question flow on mobile.
- Open the Concierge dialog at 390×844 and verify it doesn't cover both the close button and the input simultaneously.

If any of these fail, **the site is not ready to pitch**, regardless of how good the desktop view looks.

### 2.8 The verbatim-review wall — every fork ships with one

Every restaurant fork must include a dedicated **ReviewWall** section on the home page, mid-funnel (between the menu and the secret-sauce / letter / story block). This is not optional — it is one of the highest-leverage conversion surfaces on the page.

**Hard rules:**

1. **Use the review packet truthfully.** If the packet contains full review quotes, use verbatim quotes only: no paraphrasing, no AI rewriting, no marketing-speak. If the available artifact is a Google-only review packet with aggregate stats, topic chips, and micro-excerpts rather than full quotes, build a Google Review Proof section from those exact micro-excerpts plus clearly labeled review-derived themes. Do not invent full testimonials from summaries.
2. **No reviewer names.** Privacy default — even though the names are public on Google, surfacing them on the cafe's own site implies endorsement and creates an opt-in question. Show the source platform + recency only (e.g. "Google · this month", "Tripadvisor"). This is the catalog convention. Override only with explicit owner permission AND ideally a written waiver from each named reviewer.
3. **Aggregate banner above the grid.** Show the headline rating + count from the strongest source ("Google · 4.6★ / 1,169 reviews"). Aggregate is the credibility anchor; individual quotes are the texture.
4. **Star icons explicit per quote.** Five filled stars per card (or fewer for a 4★ card). Visual rhythm of stars-then-quote-then-source is the pattern.
5. **Mobile = 1-column, tablet = 2-column, desktop = 4-column** stacked grid. Cards are uniform-height with the quote allowed to stretch — never truncate a verbatim quote with ellipsis.
6. **Source attribution is small-caps eyebrow at the bottom.** Same typography token as section eyebrows. No avatars, no "verified" badges, no profile links.

**Reference implementation:** `restaurant-website-system/sites/cafe-olympic/components/ReviewWall.tsx` (2026-04-30). Eight verbatim quotes from Google + Tripadvisor, anonymized, ochre quote-mark glyphs, aggregate banner, 4-up at lg.

**Google packet mode:** If the local site folder has `google-review-packet.md`, the homepage must include an anonymized Google proof section even when the packet only provides review themes. Use the packet's rating/count/date/topic chips, quote only recorded micro-excerpts, label cards as Google review themes, and omit all reviewer names. Multi-source quotes are preferred when available; never fabricate Yelp/Tripadvisor/Facebook proof to satisfy that preference.

**Composition note:** the ReviewWall is structurally distinct from the catalog's RatingChip (a hero pill that shows aggregate stars only) and from a "what regulars come back for" LovedGrid (synthesis of dish/hospitality categories, owner-voice paraphrase OK). Ship the trio when the secret-sauce packet supports it: chip in hero, LovedGrid above the menu, ReviewWall below the menu. The chip is the headline; LovedGrid is the editorial summary; ReviewWall is the proof.

**Anti-patterns to refuse:**
- A single hero testimonial card with one quote — too thin.
- A carousel that auto-advances — diners don't get to read.
- "Featured on" press logos in lieu of guest quotes (those belong in the trust strip, not the review wall).
- Stock-photo headshots next to quotes — never. Real or none.
- Full-sentence testimonials invented from review themes — never. Use theme cards instead.

---

## 3. Extracted Values from Live Framer Templates

These are EXACT values extracted from the DOM/CSS of live Framer restaurant templates. Use these, not estimates.

### 3.1 Border Radius Scale

```css
/* EXACT values from Framer templates */

/* Outer bento/layout containers */
--radius-bento-outer: 48px;      /* Qitchen main wrapper */

/* Cards, tiles, image cells */
--radius-card: 16px;             /* Qitchen tiles, Veloria cards */
--radius-card-alt: 14px;         /* Veloria "Open Card" */

/* Buttons — rectangular */
--radius-btn: 10px;              /* standard button */
--radius-btn-lg: 12px;           /* large CTA button */

/* Buttons — pill shape */
--radius-pill: 60px;             /* Veloria nav pill (EXACT) */
--radius-pill-inner: 50px;       /* nav inner toggle button */

/* Circular elements */
--radius-circle: 50%;            /* avatars, toggle icons */
```

**Tailwind equivalents:**
```
48px = rounded-[48px] (custom)
16px = rounded-2xl
14px = rounded-[14px] (custom)  
10-12px = rounded-xl
60px = rounded-[60px] (custom)
50px = rounded-full
```

### 3.2 Gap System (Exact)

```css
/* Major layout gaps */
--gap-major: 16px;    /* between bento cells, nav items, flex rows */

/* Card inner gaps */
--gap-card: 8px;      /* between elements inside a card */
--gap-card-lg: 10px;  /* alternative */

/* Typography gaps */
--gap-label-to-headline: 2-5px;   /* very tight — label sits close to headline */
--gap-headline-to-body: 8-12px;   /* small gap before body text */
--gap-elements: 16px;             /* between distinct content blocks */
```

### 3.3 Navigation Pill (Veloria — Exact)

```tsx
// EXACT nav pill implementation from Veloria
<nav style={{
  display: 'flex',
  width: '419px',  // max-content in practice
  height: '53px',
  borderRadius: '60px',
  background: 'rgb(31, 31, 31)',
  alignItems: 'center',
  gap: '16px',
  padding: '6px',
}}>
  {/* Menu toggle — dark inner circle */}
  <button style={{
    width: '41px',
    height: '41px',
    borderRadius: '50px',
    background: 'rgb(16, 16, 16)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  }}>
    {/* Lines — ultra-thin, cream */}
    <span style={{ width: '20px', height: '1px', background: 'rgb(239, 230, 210)' }} />
    <span style={{ width: '20px', height: '1px', background: 'rgb(239, 230, 210)' }} />
  </button>

  {/* Logo */}
  <span style={{ fontFamily: 'Forum', color: 'rgb(239, 230, 210)' }}>Veloria</span>

  {/* Nav links — inner pill */}
  <div style={{
    borderRadius: '60px',
    background: 'rgb(16, 16, 16)',
    padding: '8px 16px',
    display: 'flex',
    gap: '16px',
  }}>
    <a style={{ color: 'rgb(239, 230, 210)', fontSize: '14px' }}>Menu</a>
    <a style={{ color: 'rgb(239, 230, 210)', fontSize: '14px' }}>About</a>
    <a style={{ color: 'rgb(239, 230, 210)', fontSize: '14px' }}>Book A Table</a>
  </div>
</nav>
```

### 3.4 Video Element (Universal Framer Pattern — Exact)

```html
<!-- EXACT from Framer templates (Qitchen, Veloria) -->
<video
  loop
  muted
  playsinline
  style="
    cursor: auto;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    display: block;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0);
    object-position: 50% 50%;
  "
>
  <source src="/video/hero.mp4" type="video/mp4" />
</video>
```

**Next.js version (add autoPlay):**
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  }}
>
  <source src={src} type="video/mp4" />
</video>
```

### 3.5 Font Pairings (Exact)

```
Dark luxury (Qitchen, Veloria, Craving):
  Display: Forum (Google Fonts, weight 400)
  Body: Inter OR Outfit (Outfit = more geometric/modern)

Editorial light mode (Roma):
  Display: Bonny (medium serif, weight 500)
  Body: Switzer (medium sans, weight 500)

Classic luxury (Heavenpalate):
  Display: Playfair Display (italic-capable serif)
  Body: Inter

Warm editorial (Bamzi, Bramble):
  Display: Merriweather OR Lora
  Body: Nunito Sans OR Outfit

Google Fonts import URLs:
  Forum: @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap')
  Outfit: @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap')
  Playfair Display: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap')
  Cormorant Garamond: @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap')
  Lora: @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap')
  Merriweather: @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap')
  Bodoni Moda: @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400;1,6..96,700&display=swap')
  Cormorant: @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap')
  DM Sans: @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap')

NOTE: Bonny and Switzer are NOT on Google Fonts — they are Framer-exclusive fonts.
Substitute: Bonny → Cormorant Garamond (very similar character)
Substitute: Switzer → DM Sans (clean geometric sans)
```

### 3.6 Color Tokens (Exact from Templates)

```css
/* Veloria exact tokens */
--veloria-primary-dark: rgb(0, 0, 0);
--veloria-primary-light: rgb(255, 255, 255);
--veloria-accent: rgb(255, 214, 90);      /* warm yellow-gold */
--veloria-muted: rgb(234, 234, 234);
--veloria-nav-pill: rgb(31, 31, 31);
--veloria-nav-inner: rgb(16, 16, 16);
--veloria-text-warm: rgb(239, 230, 210);  /* warm cream for text */

/* Roma exact tokens */
--roma-bg: rgb(249, 247, 239);    /* #F9F7EF — warm parchment */
--roma-text: rgb(30, 28, 22);     /* very dark olive */
--roma-accent: rgb(40, 90, 50);   /* deep forest green */
--roma-separator: 1px solid rgb(249, 247, 239);  /* cream lines on dark */

/* Qitchen — inferred from Forum/dark aesthetic */
--qitchen-bg: #0a0a0a;
--qitchen-card: #111111;
--qitchen-accent: #c8b882;        /* muted warm gold */
--qitchen-text: #e8e0d4;
```

### 3.7 Qitchen Bento: Flexbox, NOT Grid

**CRITICAL:** Qitchen's "bento grid" is implemented with Flexbox, not CSS Grid.

```tsx
// EXACT structure (proportions from live DOM)
<div style={{
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  borderRadius: '48px',  // outer container
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  padding: '24px',       // outer padding
}}>
  {/* Left — ~75% width, sticky */}
  <div style={{
    flex: '3',
    position: 'sticky',
    top: 0,
    borderRadius: '16px',  // inner cell radius
    overflow: 'hidden',
  }}>
    {/* Hero image/video */}
  </div>

  {/* Right — ~25%, three stacked tiles */}
  <div style={{
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }}>
    <div style={{ flex: 1, borderRadius: '16px', overflow: 'hidden' }}>Tile 1</div>
    <div style={{ flex: 1, borderRadius: '16px', overflow: 'hidden' }}>Tile 2</div>
    <div style={{ flex: 1, borderRadius: '16px', overflow: 'hidden' }}>Tile 3</div>
  </div>
</div>
```

### 3.8 Split-Layout Sticky Panel (Qitchen Menu Page — Exact)

```tsx
// The sticky panel creates the "fixed left, scrolling right" effect
<div className="flex flex-row gap-4 min-h-screen">
  {/* Left panel — STICKY */}
  <div
    className="w-1/2 sticky top-0 h-screen overflow-hidden rounded-2xl"
    style={{ position: 'sticky', top: 0 }}  // CSS sticky, NOT fixed
  >
    {/* Hero image or video — fills the sticky panel */}
    <img className="w-full h-full object-cover" src={heroImage} alt="" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    <div className="absolute bottom-8 left-8">
      <h1 className="font-serif text-white text-8xl tracking-widest uppercase">MENU</h1>
    </div>
  </div>

  {/* Right panel — SCROLLABLE */}
  <div className="w-1/2 py-16 px-8">
    {/* Menu content scrolls here */}
    {/* The parent page scrolls naturally; sticky panel stays */}
  </div>
</div>
```

---

## 4. Structural Philosophies — The 6 Core Patterns

Each structural philosophy is a complete visual design approach, not just a layout. Choose the right philosophy for the client's venue type BEFORE writing any code.

---

### 4.1 Bento Grid (Qitchen / Craving)

**When to use:** Sushi bars, modern Asian cuisine, high-end cocktail bars, venues where the food is photogenic and art-directable. Works when you have 3+ excellent food/interior photographs.

**Core philosophy:** The browser viewport is a canvas, not a scroll track. Every pixel is assigned. The homepage is literally a visual sitemap — images ARE the navigation.

**Key characteristics:**
- Single viewport (100vh) — no scroll on desktop
- Flexbox with fixed proportions (not CSS Grid)
- 16px gap between all cells
- 48px outer border radius, 16px inner cell radius
- Minimal/no text — images carry the experience
- Navigation is embedded INTO the composition (nav tiles)

**Implementation:**

```tsx
// components/BentoLayout.tsx
'use client'
import { motion } from 'framer-motion'
import { VideoOrImage } from './VideoOrImage'

interface BentoNavTile {
  image: string
  label: string
  href: string
}

interface BentoHeroProps {
  media: { type: 'video' | 'image'; src: string; poster?: string }
  venueName: string
  tagline?: string
  navTiles: [BentoNavTile, BentoNavTile, BentoNavTile]
}

export function BentoHero({ media, venueName, tagline, navTiles }: BentoHeroProps) {
  return (
    <div
      className="flex flex-row h-screen overflow-hidden p-4 md:p-6"
      style={{ gap: '16px', borderRadius: '0px' }}  // full-bleed on the page itself
    >
      {/* Left panel — hero (~75%) */}
      <div
        className="flex-[3] relative overflow-hidden"
        style={{ borderRadius: '16px' }}
      >
        <VideoOrImage
          media={media}
          className="absolute inset-0 w-full h-full"
          objectFit="cover"
        />
        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

        {/* Overlaid nav bar */}
        <BentoNavPill venueName={venueName} />

        {/* Display headline — bottom-left */}
        <div className="absolute bottom-8 left-8 right-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-none"
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {venueName}
          </motion.h1>
          {tagline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/60 mt-3 text-base tracking-widest uppercase"
            >
              {tagline}
            </motion.p>
          )}
        </div>
      </div>

      {/* Right panel — nav tiles (25%) */}
      <div
        className="flex-1 flex flex-col"
        style={{ gap: '16px' }}
      >
        {navTiles.map((tile, i) => (
          <motion.a
            key={tile.href}
            href={tile.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative overflow-hidden group cursor-pointer"
            style={{ borderRadius: '16px' }}
          >
            <img
              src={tile.image}
              alt={tile.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            {/* Label + arrow — bottom right */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <span className="text-white font-serif uppercase tracking-widest text-sm">
                {tile.label}
              </span>
              <span className="text-white text-lg">→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

// Responsive: on mobile/tablet, collapse to vertical stack
// Add to tailwind.config.js if needed: 'aspect-[3/2]' for mobile tiles
```

**CSS Grid equivalent** (for pages WITHIN the bento pattern, like about/contact):
```tsx
// Multi-cell bento grid for interior pages (about, contact)
// These CAN use CSS Grid because they have more complex cell arrangements
<div
  className="grid h-screen p-4 md:p-6"
  style={{
    gap: '16px',
    gridTemplateColumns: '2fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  }}
>
  {/* Hero cell — spans 2 rows */}
  <div
    className="row-span-2 relative overflow-hidden"
    style={{ borderRadius: '16px' }}
  >
    {/* full-bleed image */}
  </div>
  {/* Info cell */}
  <div className="col-span-2 rounded-2xl bg-[var(--bg-elevated)] p-8">...</div>
  {/* Hours cell */}
  <div className="rounded-2xl bg-[var(--bg-elevated)] p-6">...</div>
  {/* Map cell */}
  <div className="rounded-2xl overflow-hidden">...</div>
</div>
```

---

### 4.2 Video Hero (Veloria)

**When to use:** Any restaurant or bar where atmosphere is the primary selling point. Upscale venues, date-night spots, cocktail bars. Most effective opening impression possible.

**Core philosophy:** Video creates life and movement that static images cannot match. The video does 100% of the atmosphere work. Text overlay is minimal — just brand name + tagline + location.

**Key characteristics:**
- Full-viewport video (`100vw × 100vh`)
- Video positioned absolutely, fills container with `object-fit: cover`
- Content layer floats above video on `z-index`
- Nav pill with exact values: `border-radius: 60px`, `background: rgb(31,31,31)`
- Bottom gradient overlay (~199px tall) — not full coverage
- Minimal text: venue name, tagline, address whisper

**Implementation:**

```tsx
// components/VideoHero.tsx
'use client'
import { motion } from 'framer-motion'
import { VideoOrImage } from './VideoOrImage'

interface VideoHeroProps {
  media: { type: 'video' | 'image'; src: string; poster?: string }
  venueName: string
  tagline: string
  address: string
  navLinks: Array<{ href: string; label: string }>
  reservationHref: string
}

export function VideoHero({
  media,
  venueName,
  tagline,
  address,
  navLinks,
  reservationHref,
}: VideoHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* VIDEO LAYER — absolute, full-bleed */}
      <div className="absolute inset-0 z-0">
        <VideoOrImage
          media={media}
          className="w-full h-full"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>

      {/* Bottom gradient shade — exact Veloria pattern (~199px) */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: '199px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        }}
      />

      {/* Content layer — above video */}
      <div className="relative z-10 w-full h-full flex flex-col">

        {/* Nav Pill — centered at top */}
        <div className="flex justify-center pt-6">
          <nav
            className="flex items-center"
            style={{
              height: '53px',
              borderRadius: '60px',
              background: 'rgb(31, 31, 31)',
              gap: '16px',
              padding: '6px',
            }}
          >
            {/* Menu toggle */}
            <button
              style={{
                width: '41px',
                height: '41px',
                borderRadius: '50px',
                background: 'rgb(16, 16, 16)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
              aria-label="Open menu"
            >
              <span style={{ width: '20px', height: '1px', background: 'rgb(239, 230, 210)' }} />
              <span style={{ width: '20px', height: '1px', background: 'rgb(239, 230, 210)' }} />
            </button>

            {/* Logo */}
            <span
              className="font-serif px-2"
              style={{ color: 'rgb(239, 230, 210)', fontFamily: 'Forum, serif', fontSize: '18px' }}
            >
              {venueName}
            </span>

            {/* Nav links inner pill */}
            <div
              className="hidden md:flex items-center"
              style={{
                borderRadius: '60px',
                background: 'rgb(16, 16, 16)',
                padding: '8px 20px',
                gap: '24px',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-70 transition-opacity duration-200"
                  style={{ color: 'rgb(239, 230, 210)', fontSize: '14px', fontFamily: 'Outfit, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={reservationHref}
                className="hover:opacity-80 transition-opacity"
                style={{
                  color: 'rgb(239, 230, 210)',
                  fontSize: '14px',
                  fontFamily: 'Outfit, sans-serif',
                  border: '1px solid rgba(239, 230, 210, 0.4)',
                  borderRadius: '60px',
                  padding: '4px 16px',
                }}
              >
                Book A Table
              </a>
            </div>
          </nav>
        </div>

        {/* Centered tagline */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center font-serif text-white uppercase tracking-[0.15em]"
            style={{ fontSize: 'clamp(36px, 5vw, 80px)', maxWidth: '900px' }}
          >
            {tagline}
          </motion.h1>
        </div>

        {/* Bottom address whisper — bottom left */}
        <div className="pb-8 px-8 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">/ FIND US</p>
            <p className="text-white/70 text-sm">{address}</p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

---

### 4.3 Split Layout (Qitchen/Craving/Veloria Menu Pages)

**When to use:** Menu pages, any long-content page where atmosphere must coexist with information.

**Core philosophy:** One side is pure atmosphere (fixed, never scrolls). The other side is pure utility (scrolls freely). The user's eye knows exactly where to look for what.

**Key characteristics:**
- 50/50 vertical split
- Left panel: `position: sticky; top: 0; height: 100vh;` — the EXACT CSS mechanism
- Right panel: normal document flow, scrolls naturally
- Left has "MENU" or page title in massive display type at bottom
- Right has tab bar at top, content below

**Full implementation:**

```tsx
// components/SplitLayout.tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import { VideoOrImage } from './VideoOrImage'

interface SplitLayoutProps {
  // Left panel
  heroMedia: { type: 'video' | 'image'; src: string; poster?: string }
  pageTitle: string  // "MENU" | "ABOUT" | "CONTACT"

  // Right panel content
  children: React.ReactNode
  rightClassName?: string
}

export function SplitLayout({ heroMedia, pageTitle, children, rightClassName }: SplitLayoutProps) {
  return (
    // Parent container — flex row, full width
    // Height is determined by right panel content
    <div className="flex flex-row w-full" style={{ gap: '16px', padding: '16px' }}>

      {/* LEFT PANEL — STICKY HERO */}
      <div
        className="w-1/2 relative overflow-hidden"
        style={{
          position: 'sticky',
          top: '16px',        // matches outer padding
          height: 'calc(100vh - 32px)',  // full viewport minus padding
          borderRadius: '16px',
        }}
      >
        {/* Media fills left panel */}
        <VideoOrImage
          media={heroMedia}
          className="absolute inset-0 w-full h-full"
          objectFit="cover"
        />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

        {/* Page title — bottom left, massive */}
        <div className="absolute bottom-8 left-8">
          <h1
            className="font-serif text-white uppercase leading-none"
            style={{
              fontSize: 'clamp(64px, 8vw, 120px)',
              letterSpacing: '0.06em',
              textShadow: '0 4px 40px rgba(0,0,0,0.4)',
            }}
          >
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* RIGHT PANEL — SCROLLABLE CONTENT */}
      <div className={`w-1/2 ${rightClassName ?? ''}`}>
        {children}
      </div>
    </div>
  )
}
```

**Responsive behavior:**
```tsx
// On mobile/tablet (<768px), split collapses to vertical stack
// Left panel becomes a tall banner, right panel scrolls below
// Implement with responsive classes:
<div className="flex flex-col md:flex-row w-full" style={{ gap: '16px' }}>
  {/* Left becomes full-width banner on mobile */}
  <div className="w-full md:w-1/2 h-[40vh] md:h-auto md:sticky md:top-4" ...>
```

---

### 4.4 Editorial Float (Roma)

**When to use:** Fine dining, wine bars, farm-to-table, anywhere that wants to feel like a Kinfolk magazine feature. Maximum restraint = maximum luxury.

**Core philosophy:** The white/cream canvas is THE design element. Images float like art in a gallery. What's NOT there matters as much as what is.

**Key characteristics:**
- Background: `rgb(249, 247, 239)` — Roma's EXACT warm parchment
- Elements placed asymmetrically with translate offsets
- Numbered navigation (01, 02, 03)
- Bonny/Cormorant Garamond serif, Switzer/DM Sans body
- 1px separator lines everywhere
- Generous whitespace between every element

**Implementation:**

```tsx
// The "Editorial Float" gallery arrangement (Roma's featured items section)
export function EditorialFloat({ items }: { items: Array<{ image: string; caption: string; price?: string }> }) {
  const offsets = ['translate-y-0', 'translate-y-12', '-translate-y-8']
  const sizes = ['aspect-[3/4]', 'aspect-[2/3]', 'aspect-[4/5]']

  return (
    <section
      className="py-40 px-8 md:px-16"
      style={{ background: 'rgb(249, 247, 239)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header — ultra-minimal */}
        <div className="flex justify-between items-baseline mb-24">
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgb(30, 28, 22)' }}>
            Featured
          </p>
          <div className="flex-1 mx-8 h-px" style={{ background: 'rgb(30, 28, 22)', opacity: 0.2 }} />
          <a
            href="/menu"
            className="text-xs tracking-[0.2em] uppercase flex items-center gap-2"
            style={{ color: 'rgb(40, 90, 50)' }}
          >
            Full Menu <span>→</span>
          </a>
        </div>

        {/* Floating image arrangement — NOT a grid */}
        <div className="flex items-start gap-8 md:gap-16">
          {items.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-1 ${offsets[i]}`}
            >
              <div className={`${sizes[i]} overflow-hidden`} style={{ borderRadius: '16px' }}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <p
                  className="font-serif text-sm"
                  style={{ color: 'rgb(30, 28, 22)' }}
                >
                  {item.caption}
                </p>
                {item.price && (
                  <p
                    className="text-sm"
                    style={{ color: 'rgb(40, 90, 50)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.price}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### 4.5 Narrative Alternation (Heavenpalate / Bamzi)

**When to use:** Story-heavy restaurants, places with a founder narrative, venues where the "why" matters as much as the "what." The site should feel like an editorial feature article.

**Core philosophy:** Dark zone = emotional/cinematic. Light zone = informational/readable. The alternation creates reading rhythm and prevents fatigue. Each zone change = a scene change.

**Zone structure:**
```
Dark Zone (opener)
  → Full-bleed hero image/video
  → Headline + emotional tagline
  → Stats bar

Light Zone (information)
  → About/story content
  → Menu preview
  → Featured items

Dark Zone (proof/social)
  → Testimonials
  → Chef spotlight
  → Media logos

[Full-width image separator] ← the "beat" between acts

Light Zone (practical)
  → Menu preview
  → Events

Dark Zone (closer)
  → Reservation CTA
  → Footer
```

**Zone implementation:**

```tsx
// Dark zone component
interface DarkZoneProps {
  children: React.ReactNode
  className?: string
}
export function DarkZone({ children, className }: DarkZoneProps) {
  return (
    <section
      className={`bg-[var(--bg)] ${className}`}
    >
      {children}
    </section>
  )
}

// Light zone component
export function LightZone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`${className}`}
      style={{ background: 'rgb(249, 247, 239)' }}  // Roma/Bamzi cream
    >
      {children}
    </section>
  )
}

// Full-width image beat (atmosphere break between zones)
export function AtmosphereBreak({ src, alt, height = '60vh' }: { src: string; alt: string; height?: string }) {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ height }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}
```

---

### 4.6 Texture & Soul (Bramble)

**When to use:** Bars, cocktail lounges, speakeasies, British-pub-style venues, anywhere where the PHYSICAL experience of the place needs to translate to digital.

**Core philosophy:** Warm photography + vintage layout elements + decorative details = soul. The design should feel like a printed event flyer come to life.

**Key characteristics:**
- Full-width atmospheric photography (warm candlelit, motion-blurred for energy)
- Massive all-caps display headline overlaid on hero image
- Horizontal marquee as rhythm/pacing device
- Physical menu card photo (picture of the actual printed menu — TRUST SIGNAL)
- Decorative oval/ellipse stack ornaments
- Opening times as a marquee (functional + decorative)
- Gift cards / Careers section — minimalist bordered cards

**Implementation:**

```tsx
// Horizontal Marquee (Bramble/Bamzi pattern)
'use client'
import { motion } from 'framer-motion'

interface MarqueeProps {
  text: string
  fontSize?: number
  speed?: number  // seconds per loop
  separator?: string
}

export function Marquee({ text, fontSize = 80, speed = 20, separator = '·' }: MarqueeProps) {
  const content = `${text} ${separator} ${text} ${separator} ${text} ${separator} `

  return (
    <div className="overflow-hidden py-6 border-y border-[var(--accent)]/15">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        <span
          className="font-serif italic text-[var(--accent)]"
          style={{ fontSize: `${fontSize}px`, lineHeight: 1, letterSpacing: '-0.02em' }}
        >
          {content}{content}
        </span>
      </motion.div>
    </div>
  )
}

// Decorative Oval Stack (Bramble ornamental separator)
export function OvalStack({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border border-[var(--accent)]/30"
          style={{
            width: `${80 + i * 40}px`,
            height: `${30 + i * 15}px`,
            borderRadius: '50%',
            marginTop: i === 0 ? 0 : `-${10 + i * 4}px`,
          }}
        />
      ))}
    </div>
  )
}

// Physical Menu Card section (Bramble trust signal)
export function PhysicalMenuSection({
  menuCardImage,
  foodMenuHref,
  drinksMenuHref,
}: {
  menuCardImage: string
  foodMenuHref: string
  drinksMenuHref: string
}) {
  return (
    <section className="py-20 px-6 text-center" style={{ background: 'rgb(249, 247, 239)' }}>
      <h2
        className="font-serif text-4xl mb-12 tracking-wide"
        style={{ color: 'rgb(30, 28, 22)', textTransform: 'uppercase' }}
      >
        The Menus
      </h2>

      {/* Menu card photo + flanking links */}
      <div className="flex items-center justify-center gap-16 max-w-3xl mx-auto">
        <a
          href={foodMenuHref}
          className="text-sm tracking-[0.3em] uppercase font-medium transition-opacity hover:opacity-60"
          style={{ color: 'rgb(30, 28, 22)' }}
        >
          Food →
        </a>

        {/* Physical menu card — photo of actual printed menu */}
        <div className="flex-shrink-0" style={{ width: '200px' }}>
          <img
            src={menuCardImage}
            alt="Our printed menu"
            className="w-full shadow-2xl"
            style={{ borderRadius: '8px' }}
          />
        </div>

        <a
          href={drinksMenuHref}
          className="text-sm tracking-[0.3em] uppercase font-medium transition-opacity hover:opacity-60"
          style={{ color: 'rgb(30, 28, 22)' }}
        >
          ← Drinks
        </a>
      </div>

      <div className="mt-10">
        <a
          href="/menu"
          className="inline-block border text-sm tracking-[0.3em] uppercase px-10 py-4 transition-colors hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)]"
          style={{ borderColor: 'rgb(30, 28, 22)', color: 'rgb(30, 28, 22)' }}
        >
          See The Full Menu
        </a>
      </div>
    </section>
  )
}
```

### 4.7 Best-In-Class Template Patterns — Veloria, Heaven Palate, Qitchen

> These three templates consistently produce the most stunning results. When in doubt, borrow from one of these.

---

**Veloria — Bento Cells + Extreme White Space**

Veloria's signature: oversized bento containers with generous negative space between them, video cells, and floating badge elements that break container boundaries.

Key patterns to codify:
- **Bento-box sections** — large rounded containers (`border-radius: 48px`) filling most of the screen width. Each cell is its own world.
- **Video in bento cells** — not just the hero. Individual bento cells have autoplay looping video backgrounds.
- **Extreme white space between sections** — `py-40` or `py-48` between major sections. More than feels comfortable. This is intentional.
- **Floating badge elements** — small circular or pill-shaped badges positioned `absolute` outside their parent container (negative margins, `z-index: 10`). They overlap two sections simultaneously.
- **QR code integration** — a QR code badge (via `api.qrserver.com`) linking to Google Reviews, floating at the edge of the reviews section.

```tsx
// Veloria-style floating badge pattern
<div className="relative">
  <div className="rounded-[48px] overflow-hidden ...">
    {/* cell content */}
  </div>
  {/* Badge breaks out of the container */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    className="absolute -top-6 -right-6 z-10 bg-[var(--accent)] rounded-full w-20 h-20 flex items-center justify-center shadow-xl"
  >
    <span className="font-serif text-2xl font-bold text-[var(--bg)]">4.9★</span>
  </motion.div>
</div>
```

---

**Heaven Palate — Cinematic Dark Mode + Gold Accent**

Heaven Palate's signature: everything is dark, one accent color (gold/warm), asymmetric heroes, circular badges, and stats as horizontal rhythm breaks.

Key patterns to codify:
- **Cinematic dark mode** — `#0a0a0a` or `#111` background throughout. Gold as the SOLE accent color. No competing colors.
- **Asymmetric 2-column heroes** — text left (60%), large portrait image right (40%), with the image overlapping the header. The image breaks out of the grid upward.
- **Editorial-style testimonials** — the quote IS the headline (large serif, 40-48px, italic). Attribution and source are supporting text below, small.
- **Circular floating badges** — perfect circles (`border-radius: 50%`) overlapping section boundaries. Often contain ratings, year, or a single word.
- **Stats as horizontal rhythm breaks** — the StatsBar sits between major sections as a visual pause. Numbers are large (80-120px), serif, gold.

```tsx
// Heaven Palate asymmetric hero pattern
<section className="min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
  <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-[3fr_2fr] gap-0 items-center">
    {/* Text — left column */}
    <div className="pr-16 z-10">
      <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-6">Est. 2018</p>
      <h1 className="font-serif text-[clamp(64px,8vw,120px)] text-[var(--cream)] leading-[0.9] mb-8">
        {headline}
      </h1>
    </div>
    {/* Image — right column, bleeds above and below */}
    <div className="relative h-[120vh] -mt-32 -mb-32">
      <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" style={{ borderRadius: '24px 0 0 24px' }} />
      {/* Circular badge overlapping the image/text boundary */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute top-1/3 -left-12 w-24 h-24 rounded-full border border-[var(--accent)] flex items-center justify-center"
      >
        <span className="font-serif text-[var(--accent)] text-sm text-center leading-tight">Fine<br/>Dining</span>
      </motion.div>
    </div>
  </div>
</section>
```

---

**Qitchen — Full-Viewport Bento + Images as Navigation**

Qitchen's signature: the entire homepage IS the navigation. Clicking food images takes you to the menu. Massive rounded containers, video in cells, sticky left panel on inner pages.

Key patterns to codify:
- **Full-viewport bento hero** — flexbox, NOT CSS Grid. `flex-direction: row`. Main cell: `flex: 3`. Side panel: `flex: 1`. Total height: `100vh`.
- **Images ARE the navigation** — clicking a food image navigates to that menu category. The hero IS the menu preview.
- **Massive rounded containers** — `border-radius: 48px` on outer wrapper. Inner cells: `border-radius: 16px`. The gap between cells: exactly `16px`.
- **Video in bento cells as default** — at least one bento cell has a looping video instead of a static image.
- **Sticky left panel on inner pages** — the about/menu pages use a sticky left column (position: sticky, top: 0, height: 100vh) with a hero image. Right side scrolls independently.

```tsx
// Qitchen bento hero — FLEXBOX, not grid
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    height: '100vh',
    padding: '16px',
    borderRadius: '48px',
    overflow: 'hidden',
    background: 'var(--bg)',
  }}
>
  {/* Main cell — 75% */}
  <div style={{ flex: 3, borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
    <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>

  {/* Side panel — 25% */}
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* Three nav tiles */}
    {['MENU', 'RESERVATIONS', 'ABOUT'].map((label) => (
      <a key={label} href={`/${label.toLowerCase()}`}
        style={{ flex: 1, borderRadius: '16px', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.3em', fontWeight: 600, textTransform: 'uppercase' }}>{label}</span>
      </a>
    ))}
  </div>
</div>
```

---

## 5. Video-First Component System

**Rule:** Every hero and background media component MUST accept either video or image. VIDEO IS THE DEFAULT. **Hero video is NON-NEGOTIABLE for the first build attempt.** Only fall back to a static image if no suitable stock video exists after exhausting the search terms below. If the restaurant has no video content, use curated stock video that matches the cuisine style (search terms listed in Section 5.2).

**Target: 3 video elements per homepage.** Hard minimum: 2.
- Video 1: Hero (non-negotiable)
- Video 2: Atmospheric section break (full-bleed, dark overlay, looping ambient)
- Video 3 (push for this): Background in the Private Events CTA section, a bento cell, or a Chef/Team highlight background

**If the hero is the only video, the site fails the QA gate. Always push for 3.**

### 5.1 VideoOrImage Component (Universal)

```tsx
// components/VideoOrImage.tsx
'use client'
import { useEffect, useRef } from 'react'

interface VideoOrImageProps {
  media: {
    type: 'video' | 'image'
    src: string
    poster?: string   // fallback/loading image for video
    alt?: string      // for image type
  }
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill'
  objectPosition?: string
  overlay?: string    // CSS gradient string for dark overlay
  reducedMotion?: boolean  // skip video, use poster
}

export function VideoOrImage({
  media,
  className = '',
  objectFit = 'cover',
  objectPosition = '50% 50%',
  overlay,
  reducedMotion = false,
}: VideoOrImageProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle prefers-reduced-motion
  useEffect(() => {
    if (!videoRef.current) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {media.type === 'video' && !reducedMotion ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={media.poster}
          // EXACT Framer pattern — these inline styles match the extracted values
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit,
            objectPosition,
            backgroundColor: 'rgba(0,0,0,0)',
          }}
        >
          <source src={media.src} type="video/mp4" />
          {/* Fallback to poster image if video fails */}
          {media.poster && (
            <img
              src={media.poster}
              alt={media.alt ?? 'Restaurant atmosphere'}
              style={{ width: '100%', height: '100%', objectFit, objectPosition }}
            />
          )}
        </video>
      ) : (
        <img
          src={media.type === 'image' ? media.src : (media.poster ?? media.src)}
          alt={media.alt ?? 'Restaurant atmosphere'}
          style={{ width: '100%', height: '100%', objectFit, objectPosition, display: 'block' }}
        />
      )}

      {/* Optional dark overlay */}
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlay }}
        />
      )}
    </div>
  )
}
```

### 5.2 Stock Video Sources for Clients Without Footage

When a client doesn't have video, use these royalty-free restaurant ambient videos as defaults. They are easy to swap via the `src` prop.

```tsx
// Default video assets — always have these available
// Replace with client-specific video once provided

export const DEFAULT_RESTAURANT_VIDEOS = {
  dark_dining: 'https://videos.pexels.com/video-files/3044081/3044081-uhd_2560_1440_25fps.mp4',
  // Candlelit dining scene, dark and warm
  // Credit: Pexels (free to use)

  food_preparation: 'https://videos.pexels.com/video-files/3298432/3298432-uhd_2560_1440_25fps.mp4',
  // Chef preparing food, atmospheric kitchen
  // Credit: Pexels (free to use)

  cocktail_bar: 'https://videos.pexels.com/video-files/5182895/5182895-uhd_2560_1440_25fps.mp4',
  // Bar scene, warm lighting, cocktails
  // Credit: Pexels (free to use)

  outdoor_dining: 'https://videos.pexels.com/video-files/2516161/2516161-uhd_2560_1440_25fps.mp4',
  // Outdoor/terrace dining, natural light
  // Credit: Pexels (free to use)
}

// Usage in site build:
// media={{ type: 'video', src: DEFAULT_RESTAURANT_VIDEOS.dark_dining, poster: '/images/hero-poster.jpg' }}
// When client provides video: just change the src. Interface doesn't change.
```

#### Cuisine-Type Video Search Terms (Pexels / Unsplash)

When searching for stock video, use these exact search terms per cuisine type to get the best results:

| Cuisine Type | Hero Video Search Terms | Atmospheric Break Search Terms |
|---|---|---|
| **Fine Dining / American** | "fine dining restaurant ambiance", "candlelit dinner dark" | "chef plating food cinematic", "restaurant kitchen fire" |
| **Italian / Trattoria** | "pasta cooking italian kitchen", "italian restaurant atmosphere" | "pizza wood fire oven", "olive oil pour slow motion" |
| **Japanese / Sushi** | "sushi chef preparation", "japanese restaurant minimal" | "ramen steam close up", "sake pour ceremonial" |
| **Mexican** | "mexican restaurant colorful", "tacos street food" | "margarita pour slow motion", "tortilla press" |
| **Steakhouse** | "steakhouse dark ambiance", "steak sizzle grill" | "whiskey pour slow motion", "beef cooking close up" |
| **Seafood** | "seafood restaurant coastal", "lobster cooking" | "ocean waves dining", "fish preparation chef" |
| **Brunch / Café** | "coffee shop morning light", "brunch table natural light" | "coffee latte art pour", "pancakes syrup drizzle" |
| **Bar / Cocktail** | "cocktail bar moody lighting", "bartender mixing drinks" | "whiskey ice sphere", "cocktail garnish slow motion" |
| **Pizza** | "pizza restaurant casual", "pizza oven wood fire" | "cheese pull pizza", "dough toss traditional" |
| **Asian Fusion** | "modern asian restaurant", "dim sum luxury" | "wok cooking flames", "dumpling fold close up" |

### 5.3 `prefers-reduced-motion` Handling

```tsx
// Hook — use in any component that has animation
import { useEffect, useState } from 'react'

export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}

// In VideoOrImage — if prefersReduced, render poster image instead of video
// In Framer Motion — if prefersReduced, skip animations:
const prefersReduced = usePrefersReducedMotion()
<motion.div
  animate={prefersReduced ? {} : { y: [0, -10, 0] }}
  transition={prefersReduced ? {} : { repeat: Infinity, duration: 2 }}
/>
```

---

## 6. Composable Theme System

Themes are NOT just color + font. Each theme is a complete **visual design language** composed of 7 traits. Traits can be mixed to create unique combinations.

### 6.1 The 7 Composable Traits

```typescript
interface ThemeTraits {
  // 1. Background Mode
  backgroundMode: 'dark-moody' | 'dark-minimal' | 'dark-warm' | 'light-cream' | 'light-linen'

  // 2. Container Style (how sections are bounded)
  containerStyle: 'edge-to-edge' | 'bento-rounded' | 'inset-padded' | 'frameless'

  // 3. Image Treatment
  imageTreatment: 'cinematic-dark' | 'warm-golden' | 'natural-bright' | 'editorial-neutral' | 'vintage-warm'

  // 4. Typography Pairing
  typographyPairing: 'forum-inter' | 'playfair-inter' | 'cormorant-dm' | 'bodoni-source' | 'lora-outfit' | 'merriweather-nunito'

  // 5. Spacing Rhythm
  spacingRhythm: 'tight-bento' | 'generous-editorial' | 'cinematic-breathe' | 'magazine-tight'

  // 6. Animation Style
  animationStyle: 'dramatic-reveal' | 'subtle-float' | 'editorial-fade' | 'none'

  // 7. Border Radius Philosophy
  borderRadiusPhilosophy: 'soft-16' | 'bento-48' | 'sharp-0' | 'pill-60'
}
```

### 6.2 Theme 1: Noir Luxe

> *Inspired by Heavenpalate, classic speakeasy aesthetic. The reference implementation.*

**Personality:** Dark, moody, warm amber. The speakeasy that never got busted. A secret worth keeping.

**Traits:**
```typescript
const NoirLuxeTraits: ThemeTraits = {
  backgroundMode: 'dark-moody',
  containerStyle: 'inset-padded',
  imageTreatment: 'cinematic-dark',
  typographyPairing: 'playfair-inter',
  spacingRhythm: 'cinematic-breathe',
  animationStyle: 'dramatic-reveal',
  borderRadiusPhilosophy: 'soft-16',
}
```

**CSS Variables:**
```css
:root {
  --bg: #1a1a1a;
  --bg-elevated: #242424;
  --bg-deep: #111111;
  --bg-section-alt: #1f1a14;    /* warm dark for alternating sections */
  --accent: #d4a574;             /* amber gold */
  --accent-dark: #c4956a;        /* hover state */
  --cream: #f5f0e8;              /* primary text */
  --cream-muted: rgba(245, 240, 232, 0.6);  /* secondary text */
  --cream-whisper: rgba(245, 240, 232, 0.35); /* tertiary text */
  --burgundy: #6b2d3e;           /* secondary accent */
  --card-border: rgba(212, 165, 116, 0.15);
  --card-border-hover: rgba(212, 165, 116, 0.35);
}
```

**Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

.font-serif { font-family: 'Playfair Display', serif; }
body { font-family: 'Inter', sans-serif; }
```

**Hero treatment:** Full-viewport parallax image. Cinematic multi-layer overlays. Animated ambient gold glow (radial gradient, slow pulse). 3D perspective on title entry. Particle field optional.

**Best for:** Cocktail bars, upscale lounges, steakhouses, speakeasy-style venues, jazz bars

**Mood:** intimate · moody · sophisticated · warm · clandestine

---

### 6.3 Theme 2: Zen

> *Inspired by Qitchen — bento grid, minimum viable text*

**Personality:** Silence as luxury. The food is the art. Every element earns its place.

**Traits:**
```typescript
const ZenTraits: ThemeTraits = {
  backgroundMode: 'dark-minimal',
  containerStyle: 'bento-48',
  imageTreatment: 'cinematic-dark',
  typographyPairing: 'forum-inter',
  spacingRhythm: 'tight-bento',
  animationStyle: 'subtle-float',
  borderRadiusPhilosophy: 'bento-48',
}
```

**CSS Variables:**
```css
:root {
  --bg: #0a0a0a;
  --bg-elevated: #141414;
  --bg-cell: #111111;            /* bento cell backgrounds */
  --accent: #c8b882;             /* muted warm gold (Qitchen-inspired) */
  --warm-white: rgb(239, 230, 210);  /* EXACT Veloria/Qitchen text color */
  --warm-white-muted: rgba(239, 230, 210, 0.55);
  --warm-white-whisper: rgba(239, 230, 210, 0.3);
  --card-border: rgba(200, 184, 130, 0.12);
  --card-border-hover: rgba(200, 184, 130, 0.3);
  --bento-gap: 16px;             /* EXACT from live templates */
  --bento-outer-radius: 48px;    /* EXACT from live templates */
  --bento-inner-radius: 16px;    /* EXACT from live templates */
}
```

**Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Outfit:wght@300;400;500;600&display=swap');

.font-serif { font-family: 'Forum', serif; }
body { font-family: 'Outfit', sans-serif; }
```

**Hero treatment:** Bento grid (flexbox, 75/25 split). No scroll. Nav tiles ARE the navigation. Food photography fills every cell.

**Best for:** Sushi bars, ramen, modern Asian cuisine, tasting-menu restaurants, minimalist fine dining

**Mood:** minimal · precise · contemplative · clean · austere

---

### 6.4 Theme 3: Terroir

> *Inspired by Bramble (texture) + Cuisine (natural warmth) + earthy botanical palettes*

**Personality:** The farm that became a restaurant. Earthy, grown, unhurried. Late afternoon in a garden.

**CSS Variables:**
```css
:root {
  --bg: #0d1f0f;
  --bg-elevated: #132b15;
  --bg-section-alt: #1a3a1c;
  --accent: #8fae7e;             /* sage green */
  --accent-dark: #7a9a6b;
  --cream: #f5f0e8;
  --cream-muted: rgba(245, 240, 232, 0.6);
  --moss: #4a6741;               /* deep moss */
  --warm-brown: #8b6f47;         /* earth tone */
  --card-border: rgba(143, 174, 126, 0.15);
  --card-border-hover: rgba(143, 174, 126, 0.4);
}
```

**Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');

.font-serif { font-family: 'Lora', serif; }
body { font-family: 'Outfit', sans-serif; }
```

**Best for:** Farm-to-table, garden dining, organic cafes, wine bars, brunch spots, seasonal menus

**Mood:** earthy · organic · fresh · natural · rustic-refined

---

### 6.5 Theme 4: Trattoria

> *Inspired by Roma — editorial restraint, light mode, magazine art direction*

**Personality:** European editorial. Light, airy, confident. Sunday in Rome.

**CSS Variables:**
```css
:root {
  --bg: rgb(249, 247, 239);      /* EXACT Roma color — #F9F7EF */
  --bg-elevated: rgb(242, 238, 228);
  --bg-dark-section: #1a1a1a;    /* for dark accent sections */
  --text: rgb(30, 28, 22);       /* EXACT Roma dark text */
  --text-muted: rgba(30, 28, 22, 0.55);
  --text-whisper: rgba(30, 28, 22, 0.3);
  --accent: rgb(40, 90, 50);     /* deep forest green (Roma) */
  --accent-warm: #b8860b;        /* dark gold alternative */
  --terracotta: #c4724e;
  --separator: rgba(30, 28, 22, 0.15);  /* 1px separator lines */
  --card-border: rgba(30, 28, 22, 0.12);
  --card-border-hover: rgba(40, 90, 50, 0.4);
}
```

**Fonts:**
```css
/* Cormorant Garamond = closest open-source equivalent to Bonny */
/* DM Sans = closest open-source equivalent to Switzer */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

.font-serif { font-family: 'Cormorant Garamond', serif; }
body { font-family: 'DM Sans', sans-serif; }
```

**Numbered navigation (Roma pattern):**
```tsx
const navItems = [
  { num: '01', label: 'Menu', href: '/menu' },
  { num: '02', label: 'Our Story', href: '/about' },
  { num: '03', label: 'Reserve', href: '/contact' },
]
```

**Best for:** Italian, French, Mediterranean, fine dining, hotel restaurants, wine-forward bistros

**Mood:** editorial · elegant · classic · refined · light

---

### 6.6 Theme 5: Hearth

> *Inspired by Bamzi (dark/light narrative) + Craving (bright energy)*

**Personality:** The restaurant that feels like home but elevated. Generous, energetic, inviting.

**CSS Variables:**
```css
:root {
  --bg: #111111;
  --bg-elevated: #1a1a1a;
  --bg-warm: #2a2520;            /* warm dark section */
  --bg-light: rgb(249, 247, 239); /* light zone (Bamzi cream) */
  --accent: #c9a96e;             /* warm rich gold */
  --cream: #f0ebe0;
  --cream-muted: rgba(240, 235, 224, 0.6);
  --warm-red: #c0392b;           /* Craving-inspired red accent option */
  --card-border: rgba(201, 169, 110, 0.15);
  --card-border-hover: rgba(201, 169, 110, 0.4);
}
```

**Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Nunito+Sans:wght@300;400;600;700&display=swap');

.font-serif { font-family: 'Merriweather', serif; }
body { font-family: 'Nunito Sans', sans-serif; }
```

**Structural note:** Uses Narrative Alternation pattern — dark sections for emotional beats, cream sections for information.

**Best for:** Asian fusion, gastropubs, comfort food, BBQ, family restaurants, casual upscale dining

**Mood:** inviting · energetic · warm · generous · bold

---

### 6.7 Theme 6: Velvet

> *Inspired by Veloria — romantic, cinematic, video-first*

**Personality:** A hush falls when you walk in. Romantic without trying. Every detail whispers luxury.

**CSS Variables:**
```css
:root {
  --bg: #1a0f1e;                 /* deep plum */
  --bg-elevated: #231526;
  --bg-deep: #120a14;
  --accent: #c4a07a;             /* warm dusty rose-gold */
  --accent-warm: rgb(255, 214, 90);  /* Veloria's EXACT warm gold accent */
  --cream: #f5f0e8;
  --cream-muted: rgba(245, 240, 232, 0.6);
  --soft-gold: #d4b896;
  --nav-pill: rgb(31, 31, 31);   /* EXACT Veloria nav pill bg */
  --nav-inner: rgb(16, 16, 16);  /* EXACT Veloria inner pill bg */
  --nav-text: rgb(239, 230, 210); /* EXACT Veloria nav text color */
  --card-border: rgba(196, 160, 122, 0.15);
  --card-border-hover: rgba(196, 160, 122, 0.4);
}
```

**Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap');

.font-serif { font-family: 'Cormorant', serif; }
body { font-family: 'Raleway', sans-serif; }
```

**Structural note:** Uses VideoHero as default. Veloria-style glass nav pill with EXACT extracted values.

**Best for:** Wine bars, date-night spots, French bistros, rooftop venues, dessert bars

**Mood:** romantic · luxurious · intimate · soft · dreamy

---

### 6.8 Theme Mixing Guide

Themes can be remixed by combining traits from 2 different presets. Always pick ONE theme for structure, ONE for color/typography. Never mix more than 2.

| Combination | Result |
|-------------|--------|
| Zen structure + Noir Luxe palette | Ultra-premium Japanese cocktail bar |
| Terroir palette + Trattoria layout | Rustic Italian-French wine country |
| Velvet palette + Hearth energy | Romantic high-energy rooftop |
| Zen structure + Velvet palette | Omakase with cinematic video hero |
| Trattoria light mode + Terroir greens | Botanical garden dining |

**TypeScript theme config interface:**
```typescript
// types/theme.ts
export interface ThemeConfig {
  name: string
  traits: ThemeTraits
  css: {
    bg: string
    bgElevated: string
    bgDeep?: string
    bgSectionAlt?: string
    accent: string
    accentDark?: string
    cream: string          // primary text color
    creamMuted: string     // secondary text (55-65% opacity)
    creamWhisper: string   // tertiary text (30-40% opacity)
    cardBorder: string
    cardBorderHover: string
    navPill?: string       // for glass pill nav
    navInner?: string
    navText?: string
  }
  fonts: {
    display: string        // CSS font-family value
    body: string           // CSS font-family value
    googleImport: string   // @import URL(s)
  }
}
```

---

## 6.9 Restaurant-Type-to-Theme Matching Guide

> **Built from 20+ restaurant builds.** Use this table to select the right theme + visual direction in Phase 3 (Design Planning). Do not estimate — use the exact recommended pairings below as your starting point.

| Restaurant Type | Recommended Primary Theme | Alt Themes | Key Visual Elements |
|---|---|---|---|
| Fine Dining | Noir Luxe or Velvet | Terroir | Dark backgrounds, gold accents, Cormorant Garamond |
| Italian (upscale) | Trattoria | Terroir | Terracotta/cream/charcoal, warm serif fonts |
| Italian (casual pizza) | Custom | Hearth | Can go burgundy/olive OR black+neon red — differentiate from upscale |
| Mexican (traditional) | Custom warm | Hearth | Terra cotta/sage OR deep red/amber — earthy, handmade feel |
| Mexican (street food) | Custom vibrant | — | Lime green/hot pink/tropical OR sunny yellow/turquoise |
| Greek/Mediterranean | Zen variant | — | Aegean blue/white/olive/warm stone |
| BBQ/Smokehouse | Custom dark | Hearth | Charcoal/ember orange/wood browns |
| Brewery/Ale House | Custom dark | Hearth | Deep charcoal/amber gold, craft-industrial |
| Speakeasy/Cocktail Bar | Noir Luxe variant | — | Dark charcoal/amber, moody, Cormorant Garamond |
| Sports Bar | Custom energetic | — | Dark + electric blue/orange/red accents, Bebas Neue |
| Classic Diner | Custom retro | Hearth | Warm yellows/cherry reds/cream/chrome |
| Pub/Tavern (neighborhood) | Hearth or Custom | — | Forest green/gold, warm Americana, crimson/dark wood |
| Saloon/Western | Custom rustic | Hearth | Whiskey amber/aged brass/leather brown |
| Vietnamese/Asian | Zen or Custom | — | Warm reds/antique gold OR cream/sage editorial |
| Seafood/Waterfront | Velvet or Custom nautical | Terroir | Deep navy/gold/cream |

**How to use this table:**
1. Identify the restaurant type in Phase 3.
2. Start with the recommended primary theme's CSS variables and font pairing (from Section 6.2–6.7).
3. Customize the color palette to the specific restaurant's brand — the table defines the direction, not the exact palette.
4. If a custom palette is warranted (see "Custom" in the table), choose from the Key Visual Elements column as your anchor colors, then apply the structural philosophy of the nearest theme.

---

## 6.10 Same-Cuisine Differentiation Rules

When building sites for multiple restaurants of the same cuisine type in the same batch, **differentiation is mandatory.** Restaurant owners compare notes. Two Italian sites with the same terracotta palette and Forum serif will be immediately noticed.

**Hard rules:**

- **NEVER use the same color palette for two restaurants of the same cuisine type.** Even if the palettes are both "warm," one must be terracotta-first and the other charcoal-first, or one must use deep forest green while the other uses cream.
- **NEVER use the same structural philosophy for two restaurants in the same batch.** Vary between Bento, Video Hero, Split Layout, Editorial Float, Narrative Alternation, and Texture & Soul.
- **If owners of same-cuisine restaurants saw each other's sites side by side, neither should feel copied.**

**Practical differentiation playbook by cuisine:**

| Cuisine | Site A Direction | Site B Direction | Site C Direction | Site D Direction |
|---|---|---|---|---|
| **Italian (2 sites)** | Warm terracotta/cream, Trattoria light mode | Modern charcoal/black + neon red accent, Hearth dark | — | — |
| **Mexican (4 sites)** | Deep red/amber earthy, Hearth dark | Terra cotta/sage handmade, Custom warm | Bright tropical lime/hot pink, Custom vibrant | Dark luxe charcoal/gold, Noir Luxe variant |
| **Bars/Pubs (4+ sites)** | Dark taproom charcoal, craft-industrial | Speakeasy amber/gold, Noir Luxe | Warm Americana green/crimson, Hearth | Sports energy dark + electric blue, Custom energetic |
| **Bars/Pubs (continued)** | Western saloon amber/brass, Custom rustic | — | — | — |

**Structural differentiation checklist:**
- Different font pairing per site (no two sites in a batch should share both the display and body font)
- Different hero variant (Video Hero / Bento / Split-Text / Full-Image Overlay / Minimal Editorial)
- Different nav style (Pill / Minimal Overlay / Editorial Numbered)
- Different homepage section order — don't copy-paste the canonical order verbatim across two sites in the same batch; reorder at least 3 sections

---

## 7. Navigation & Header Variants

### 7.1 Glass Pill Nav (Veloria — EXACT)

*Use with: Velvet theme, Zen theme, Video Hero pages*

```tsx
// components/NavPill.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavPillProps {
  venueName: string
  links: Array<{ href: string; label: string }>
  ctaHref: string
  ctaLabel?: string
  // Position: 'top-center' | 'top-left' | 'floating'
  position?: 'top-center' | 'top-left'
}

export function NavPill({ venueName, links, ctaHref, ctaLabel = 'Book A Table', position = 'top-center' }: NavPillProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const positionClass = position === 'top-center'
    ? 'fixed top-6 left-1/2 -translate-x-1/2 z-50'
    : 'fixed top-6 left-6 z-50'

  return (
    <>
      <nav
        className={`${positionClass} flex items-center transition-all duration-300`}
        style={{
          height: '53px',
          borderRadius: '60px',
          background: scrolled
            ? 'rgba(31, 31, 31, 0.95)'
            : 'rgb(31, 31, 31)',
          backdropFilter: 'blur(12px)',
          gap: '16px',
          padding: '6px',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        {/* Hamburger toggle — dark inner circle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            width: '41px',
            height: '41px',
            borderRadius: '50px',
            background: 'rgb(16, 16, 16)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            flexShrink: 0,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '20px',
              height: '1px',
              background: 'rgb(239, 230, 210)',
              display: 'block',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              width: '20px',
              height: '1px',
              background: 'rgb(239, 230, 210)',
              display: 'block',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none',
            }}
          />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif px-2 whitespace-nowrap"
          style={{ color: 'rgb(239, 230, 210)', fontFamily: 'Forum, serif', fontSize: '18px' }}
        >
          {venueName}
        </Link>

        {/* Nav links + CTA — inner pill (desktop only) */}
        <div
          className="hidden md:flex items-center"
          style={{
            borderRadius: '60px',
            background: 'rgb(16, 16, 16)',
            padding: '8px 20px',
            gap: '24px',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
              style={{
                color: 'rgb(239, 230, 210)',
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            style={{
              color: 'rgb(239, 230, 210)',
              fontSize: '13px',
              fontFamily: 'Outfit, sans-serif',
              border: '1px solid rgba(239, 230, 210, 0.4)',
              borderRadius: '60px',
              padding: '5px 16px',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 230, 210, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(239, 230, 210, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(239, 230, 210, 0.4)'
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      </nav>

      {/* Mobile fullscreen overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ background: 'rgba(10, 10, 10, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-5xl text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: 'Forum, serif', letterSpacing: '0.05em' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setMenuOpen(false)}
              className="mt-8 font-serif text-xl border border-[var(--accent)] text-[var(--accent)] px-10 py-4"
              style={{ borderRadius: '60px' }}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
```

### 7.2 Minimal Overlay Nav (Bramble/Heavenpalate)

*Use with: Noir Luxe, Hearth, Terroir themes*

```tsx
// components/NavMinimal.tsx
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface NavMinimalProps {
  venueName: string
  links: Array<{ href: string; label: string }>
  ctaHref: string
}

export function NavMinimal({ venueName, links, ctaHref }: NavMinimalProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--bg)]/95 backdrop-blur-md shadow-lg border-b border-[var(--accent)]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl text-[var(--cream)] hover:text-[var(--accent)] transition-colors"
          style={{ letterSpacing: '0.06em' }}
        >
          {venueName}
        </Link>

        {/* Center links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--cream)]/60 hover:text-[var(--cream)] text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href={ctaHref}
          className="hidden md:inline-block btn-primary text-xs px-6 py-3"
        >
          Reserve
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[var(--cream)]" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
```

### 7.3 Editorial Numbered Nav (Roma)

*Use with: Trattoria theme*

```tsx
// Roma-style numbered navigation overlay
export function NavEditorial({ venueName, links }: { venueName: string; links: Array<{ num: string; href: string; label: string }> }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
        style={{ background: 'rgb(249, 247, 239)' }}
      >
        {/* Left: logo mark */}
        <Link href="/" className="font-serif text-lg" style={{ color: 'rgb(30, 28, 22)', fontFamily: 'Cormorant Garamond, serif' }}>
          {venueName}
        </Link>

        {/* Center: main nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href}
              className="text-sm transition-opacity hover:opacity-50"
              style={{ color: 'rgb(30, 28, 22)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: MENU button */}
        <button
          onClick={() => setOpen(true)}
          className="text-sm tracking-[0.3em] uppercase flex items-center gap-3"
          style={{ color: 'rgb(30, 28, 22)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <span>MENU</span>
          <div className="flex flex-col gap-1">
            <span className="w-5 h-px block" style={{ background: 'rgb(30, 28, 22)' }} />
            <span className="w-5 h-px block" style={{ background: 'rgb(30, 28, 22)' }} />
          </div>
        </button>
      </header>

      {/* Full-screen numbered overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between p-12"
          style={{ background: 'rgb(30, 28, 22)' }}
        >
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl text-white/70">{venueName}</span>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white text-sm tracking-widest uppercase">
              Close ✕
            </button>
          </div>

          {/* Large numbered nav items — editorial table of contents */}
          <nav className="flex flex-col gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-6 group"
              >
                <span className="font-serif italic text-white/30 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {link.num}
                </span>
                <span
                  className="font-serif text-5xl md:text-7xl text-white/80 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {link.label}
                </span>
                {/* 1px separator line (Roma pattern) */}
                <div className="flex-1 h-px self-center" style={{ background: 'rgba(249,247,239,0.1)' }} />
              </Link>
            ))}
          </nav>

          <div className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()}</div>
        </div>
      )}
    </>
  )
}
```

---

## 8. Hero Section Variants

### 8.1 Hero Variant A: Video Hero (Veloria-style)

*See Section 4.2 for full implementation.* Summary:
- Full-viewport `VideoOrImage` component
- Glass pill nav (Section 7.1)
- Centered tagline in large serif, `tracking: 0.15em`
- Bottom gradient (199px, `linear-gradient(to top, rgba(0,0,0,0.8), transparent)`)
- Address whisper bottom-left
- No CTA in hero — pure atmosphere first

### 8.2 Hero Variant B: Bento Grid (Qitchen-style)

*See Section 4.1 for full implementation.* Summary:
- Flexbox `flex-row`, NOT CSS Grid
- Outer `border-radius: 48px`, inner cells `border-radius: 16px`
- Gap: `16px` exactly
- Left ~75%: hero media + title
- Right ~25%: 3 nav tiles (image + label + arrow)
- No scroll needed — single viewport composition

### 8.3 Hero Variant C: Split-Text (Heavenpalate-style)

*2-column layout. Left: headline + CTA. Right: hero image.*

```tsx
// components/heroes/SplitTextHero.tsx
'use client'
import { motion } from 'framer-motion'
import { VideoOrImage } from '../VideoOrImage'

interface SplitTextHeroProps {
  media: { type: 'video' | 'image'; src: string; poster?: string }
  headlineLines: string[]       // ["Great Moments", "With Great", "Tastes"]
  tagline?: string
  socialProofLine?: string      // "We served over 5000+ happy customers"
  ctaLabel: string
  ctaHref: string
  secondaryCTALabel?: string
  secondaryCTAHref?: string
}

export function SplitTextHero({
  media,
  headlineLines,
  tagline,
  socialProofLine,
  ctaLabel,
  ctaHref,
  secondaryCTALabel,
  secondaryCTAHref,
}: SplitTextHeroProps) {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-24 md:py-0 bg-[var(--bg)]">
        {/* Small location/category tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-8"
        >
          Since 2015 · Fine Dining
        </motion.p>

        {/* Display headline — large serif, natural line breaks */}
        <div className="mb-10">
          {headlineLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="font-serif text-[var(--cream)] leading-tight"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: '1.05' }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        {tagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[var(--cream-muted,rgba(245,240,232,0.6))] text-base md:text-lg leading-relaxed max-w-sm mb-10 italic font-serif"
          >
            {tagline}
          </motion.p>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a href={ctaHref} className="btn-primary flex items-center gap-3">
            {ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
          {secondaryCTALabel && (
            <a href={secondaryCTAHref ?? '#menu'} className="btn-outline">{secondaryCTALabel}</a>
          )}
        </motion.div>

        {/* Social proof whisper line */}
        {socialProofLine && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-[var(--cream-whisper,rgba(245,240,232,0.35))] text-xs tracking-widest uppercase"
          >
            {socialProofLine}
          </motion.p>
        )}
      </div>

      {/* Right: Full-height media */}
      <div className="w-full md:w-[45%] lg:w-[50%] min-h-[50vh] md:min-h-screen relative overflow-hidden">
        <VideoOrImage
          media={media}
          className="absolute inset-0 w-full h-full"
          objectFit="cover"
          overlay="linear-gradient(to right, var(--bg) 0%, transparent 20%)"
        />
      </div>
    </section>
  )
}
```

### 8.4 Hero Variant D: Full-Image Overlay (Bramble-style)

*Huge atmospheric image. Title overlaid massive and bold. No CTA in hero — description line below.*

```tsx
// components/heroes/FullImageHero.tsx
'use client'
import { motion } from 'framer-motion'
import { VideoOrImage } from '../VideoOrImage'

interface FullImageHeroProps {
  media: { type: 'video' | 'image'; src: string; poster?: string }
  venueName: string           // rendered MASSIVE, all-caps, overlaid
  descriptionLine?: string    // spaced caps description below image
}

export function FullImageHero({ media, venueName, descriptionLine }: FullImageHeroProps) {
  return (
    <div>
      {/* Full-width atmospheric media — fills viewport */}
      <section className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
        <VideoOrImage
          media={media}
          className="absolute inset-0 w-full h-full"
          objectFit="cover"
          objectPosition="50% 40%"
        />

        {/* Light overlay — just enough for text, not too dark */}
        <div className="absolute inset-0 bg-black/35" />

        {/* VENUE NAME — massive, full-width, all-caps */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-center font-serif uppercase"
            style={{
              fontSize: 'clamp(80px, 12vw, 160px)',
              letterSpacing: '0.08em',
              lineHeight: 1,
              textShadow: '0 4px 60px rgba(0,0,0,0.3)',
            }}
          >
            {venueName}
          </motion.h1>
        </div>
      </section>

      {/* Description line below — centered, spaced caps */}
      {descriptionLine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="py-8 px-6 text-center bg-[var(--bg)]"
        >
          <p
            className="text-[var(--cream-muted,rgba(245,240,232,0.6))] text-xs md:text-sm tracking-[0.3em] uppercase max-w-3xl mx-auto leading-relaxed"
          >
            {descriptionLine}
          </p>
        </motion.div>
      )}
    </div>
  )
}
```

### 8.5 Hero Variant E: Minimal Editorial (Roma-style)

*Brand name in massive display. One beautiful image. Nothing else.*

```tsx
// components/heroes/MinimalHero.tsx
'use client'
import { motion } from 'framer-motion'

interface MinimalHeroProps {
  venueName: string       // "RO. MA." style — can include punctuation for effect
  heroImage: string
  heroImageAlt?: string
}

export function MinimalHero({ venueName, heroImage, heroImageAlt }: MinimalHeroProps) {
  return (
    <section style={{ background: 'rgb(249, 247, 239)' }}>
      {/* Brand name — full width, massive */}
      <div className="px-8 pt-24 pb-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-serif"
          style={{
            fontSize: 'clamp(80px, 14vw, 180px)',
            color: 'rgb(30, 28, 22)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          {venueName}
        </motion.h1>
      </div>

      {/* Single hero image — takes up most of viewport below name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mx-8 overflow-hidden"
        style={{ borderRadius: '16px', height: 'calc(100vh - 200px)' }}
      >
        <img
          src={heroImage}
          alt={heroImageAlt ?? venueName}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  )
}
```

---

## 9. Menu Page Variants

### 9.1 Menu Variant A: Split Layout (Qitchen/Craving/Veloria — RECOMMENDED DEFAULT)

*See Section 4.3 for the SplitLayout component.* This section covers the RIGHT PANEL content.

```tsx
// app/menu/page.tsx — using SplitLayout
import { SplitLayout } from '@/components/SplitLayout'

export default function MenuPage({ menuData }: { menuData: MenuData }) {
  return (
    <SplitLayout
      heroMedia={{ type: 'image', src: '/images/menu-hero.jpg' }}
      pageTitle="MENU"
      rightClassName="py-8"
    >
      <MenuContent menuData={menuData} />
    </SplitLayout>
  )
}

// Right panel content
function MenuContent({ menuData }: { menuData: MenuData }) {
  const [activeId, setActiveId] = useState(menuData.categories[0]?.id ?? null)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  // Intersection observer to update active tab on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    )
    Object.values(sectionRefs.current).forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* Sticky tab bar */}
      <div
        className="sticky top-0 z-20 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--accent)]/10 py-3"
      >
        <div className="flex gap-2 overflow-x-auto px-6 pb-1 scrollbar-none">
          {menuData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                const el = document.getElementById(cat.id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 flex-shrink-0"
              style={{
                borderRadius: '60px',
                border: activeId === cat.id
                  ? '1px solid var(--accent)'
                  : '1px solid rgba(var(--cream-rgb, 245, 240, 232), 0.15)',
                background: activeId === cat.id ? 'var(--accent)' : 'transparent',
                color: activeId === cat.id ? 'var(--bg)' : 'var(--cream-muted)',
                fontWeight: activeId === cat.id ? 600 : 400,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu categories */}
      <div className="px-6 pb-24">
        {menuData.categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el }}
            className="pt-16"
          >
            {/* Category heading with ornamental lines (Qitchen pattern) */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-[var(--accent)]/20" />
              <h2 className="font-serif text-xl text-[var(--accent)] uppercase tracking-[0.3em] px-4">
                {category.label}
              </h2>
              <div className="flex-1 h-px bg-[var(--accent)]/20" />
            </div>

            {/* Menu items */}
            <div className="space-y-0">
              {category.items.map((item, i) => (
                <MenuItemRow key={item.name} item={item} index={i} showImage={true} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
```

**MenuItemRow with inline image (Qitchen pattern):**
```tsx
// components/MenuItemRow.tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface MenuItem {
  name: string
  description?: string
  price: string | number
  tags?: string[]          // ['🌿 Vegan', '⊘ GF', 'Spicy']
  image?: string           // small inline photo
}

export function MenuItemRow({ item, index, showImage = true }: { item: MenuItem; index: number; showImage?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05, ease: 'easeOut' }}
      className="flex items-start gap-4 py-4 border-b border-[var(--accent)]/8 group hover:border-[var(--accent)]/25 transition-colors duration-300"
    >
      {/* Inline image — Qitchen style */}
      {showImage && item.image && (
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{ width: '64px', height: '64px', borderRadius: '10px' }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      {/* Text content */}
      <div className="flex-1 min-w-0">
        {/* Name + price row with dotted leader */}
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-base md:text-lg text-[var(--cream)] group-hover:text-[var(--accent)] transition-colors duration-300 flex-shrink-0">
            {item.name}
          </span>
          {/* Dotted leader line */}
          <span className="flex-1 mx-2 border-b border-dotted border-[var(--cream)]/20 mb-[3px]" />
          <span className="text-[var(--accent)] font-semibold text-base flex-shrink-0">
            ${item.price}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-sm mt-1 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Dietary tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 text-[var(--accent)]/70"
                style={{ border: '1px solid var(--accent, #d4a574)', borderOpacity: 0.3, borderRadius: '4px' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
```

### 9.2 Menu Variant B: Organized Grid (Cuisine-style)

*Use when clarity and navigation > atmosphere. Family restaurants, casual dining.*

```tsx
// Category icon cards at top, then scrollable item grid
export function MenuGrid({ categories }: { categories: MenuCategory[] }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto">
      {/* Category navigation cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 p-6 text-center transition-all duration-300"
            style={{
              borderRadius: '16px',
              background: activeCategory === i ? 'var(--accent)' : 'var(--bg-elevated)',
              border: `1px solid ${activeCategory === i ? 'var(--accent)' : 'var(--card-border)'}`,
            }}
          >
            <span className="text-3xl">{cat.icon}</span>
            <span
              className="font-serif text-sm tracking-wider"
              style={{ color: activeCategory === i ? 'var(--bg)' : 'var(--cream)' }}
            >
              {cat.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Active category items — card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories[activeCategory]?.items.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex items-start gap-4 p-5"
      style={{ borderRadius: '16px', background: 'var(--bg-elevated)', border: '1px solid var(--card-border)' }}
    >
      {item.image && (
        <div className="flex-shrink-0 overflow-hidden" style={{ width: '80px', height: '80px', borderRadius: '12px' }}>
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-serif text-base text-[var(--cream)]">{item.name}</h3>
          <span className="text-[var(--accent)] font-semibold text-sm flex-shrink-0">${item.price}</span>
        </div>
        {item.description && (
          <p className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-xs leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}
```

### 9.3 Menu Variant C: Editorial (Roma-style, Light Mode)

*Full Trattoria/editorial treatment. Items as art-directed text, generous spacing.*

```tsx
// Editorial menu — minimal, magazine-style
export function MenuEditorial({ categories }: { categories: MenuCategory[] }) {
  return (
    <div style={{ background: 'rgb(249, 247, 239)', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* Page header */}
      <div className="max-w-4xl mx-auto px-8 pt-32 pb-16">
        <div className="flex items-center gap-6 mb-4">
          <div className="h-px flex-1" style={{ background: 'rgba(30,28,22,0.2)' }} />
          <span className="text-xs tracking-[0.4em] uppercase" style={{ color: 'rgb(40, 90, 50)' }}>
            The Menu
          </span>
          <div className="h-px flex-1" style={{ background: 'rgba(30,28,22,0.2)' }} />
        </div>
        <h1
          className="font-serif text-center"
          style={{
            fontSize: 'clamp(48px, 8vw, 100px)',
            color: 'rgb(30, 28, 22)',
            fontFamily: 'Cormorant Garamond, serif',
            letterSpacing: '0.02em',
          }}
        >
          À La Carte
        </h1>
      </div>

      {/* Categories */}
      {categories.map((category, ci) => (
        <section key={category.id} className="max-w-4xl mx-auto px-8 mb-20">
          {/* Category heading with Roma ornamental style */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgb(40, 90, 50)' }} />
            <h2
              className="font-serif text-2xl"
              style={{
                color: 'rgb(30, 28, 22)',
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {category.label}
            </h2>
            <div className="flex-1 h-px" style={{ background: 'rgba(30,28,22,0.15)' }} />
          </div>

          {/* Items — editorial list style */}
          <div>
            {category.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="py-6 flex justify-between items-start gap-8"
                style={{ borderBottom: '1px solid rgba(30,28,22,0.1)' }}
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3
                      className="font-serif"
                      style={{ fontSize: '22px', color: 'rgb(30, 28, 22)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                    >
                      {item.name}
                    </h3>
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs"
                        style={{ color: 'rgb(40, 90, 50)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.description && (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(30,28,22,0.55)', fontFamily: 'DM Sans, sans-serif', maxWidth: '420px' }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
                <span
                  className="font-serif flex-shrink-0"
                  style={{ fontSize: '20px', color: 'rgb(40, 90, 50)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  ${item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
```

---

## 10. About / Story Page Variants

### 10.1 About Variant A: Bento Grid (Qitchen/Veloria — single viewport)

```tsx
// app/about/page.tsx — Bento about page
// Fits in one viewport: left hero + right content grid
export function BentoAbout({ data }: { data: AboutData }) {
  return (
    <div
      className="flex flex-row h-screen p-4 md:p-6"
      style={{ gap: '16px' }}
    >
      {/* Left: full-height hero — same sticky pattern */}
      <div
        className="flex-[2] relative overflow-hidden"
        style={{ borderRadius: '16px' }}
      >
        <img src={data.heroImage} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <h1
            className="font-serif text-white uppercase"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            ABOUT
          </h1>
        </div>
      </div>

      {/* Right: content grid */}
      <div
        className="flex-[3] grid"
        style={{
          gap: '16px',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto auto',
        }}
      >
        {/* Story text card */}
        <div
          className="col-span-2 p-8 flex flex-col justify-center"
          style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="font-serif text-2xl text-[var(--cream)] mb-4">{data.headline}</h2>
          <p className="text-[var(--cream-muted,rgba(245,240,232,0.6))] text-sm leading-relaxed">{data.story}</p>
        </div>

        {/* Rating cards — 3 in a row (Qitchen about page pattern) */}
        {data.awards?.map((award) => (
          <div
            key={award.source}
            className="p-6 flex flex-col items-center justify-center text-center"
            style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
          >
            <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-2">{award.source}</p>
            <p className="text-[var(--cream-muted,rgba(245,240,232,0.6))] text-xs mb-3">{award.title}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[var(--accent)] text-sm">★</span>
              ))}
            </div>
          </div>
        ))}

        {/* Opening hours card */}
        <div
          className="p-6"
          style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
        >
          <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-4">Hours</p>
          {data.hours?.map((h) => (
            <div key={h.days} className="flex justify-between text-sm mb-2">
              <span className="text-[var(--cream-muted,rgba(245,240,232,0.6))]">{h.days}</span>
              <span className="text-[var(--cream)]">{h.time}</span>
            </div>
          ))}
        </div>

        {/* QR Code for Google Reviews (Veloria innovation) */}
        {data.googleReviewUrl && (
          <div
            className="p-6 flex flex-col items-center justify-center text-center"
            style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
          >
            <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-3">Review Us</p>
            <div
              className="w-20 h-20 mb-3"
              style={{ borderRadius: '8px', background: 'white', padding: '4px' }}
            >
              {/* QR code — generate via qrcode.react or similar */}
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(data.googleReviewUrl)}`} alt="QR code" className="w-full h-full" />
            </div>
            <p className="text-[var(--cream-muted)] text-xs">Scan to leave a review</p>
          </div>
        )}
      </div>
    </div>
  )
}
```

### 10.2 About Variant B: Narrative Scroll (Heavenpalate/Bamzi — dark/light alternation)

*Use when the restaurant has a strong founder story or cultural identity.*

```tsx
// app/about/page.tsx — Narrative scroll
// Sections alternate: Dark → Light → Dark → Light
export function NarrativeAbout({ data }: { data: AboutData }) {
  return (
    <div>
      {/* Dark opener — full-bleed hero image + founding statement */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={data.heroImage} alt="Our story" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end pb-16 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase mb-4">Est. {data.foundedYear}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">{data.foundingHeadline}</h1>
          </motion.div>
        </div>
      </section>

      {/* Light zone — story text + image */}
      <section className="py-32 px-8 md:px-16" style={{ background: 'rgb(249, 247, 239)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgb(40, 90, 50)' }}>Our Story</p>
            <h2 className="font-serif text-4xl mb-8" style={{ color: 'rgb(30, 28, 22)' }}>{data.storyHeadline}</h2>
            {data.storyParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed mb-6" style={{ color: 'rgba(30,28,22,0.7)' }}>{para}</p>
            ))}
          </div>
          <div className="relative">
            <img src={data.storyImage} alt="Our kitchen" className="w-full object-cover" style={{ borderRadius: '16px', aspectRatio: '3/4' }} />
            {/* Floating stat badge */}
            <div
              className="absolute -bottom-6 -right-6 flex flex-col items-center justify-center"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgb(40, 90, 50)',
                color: 'white',
              }}
            >
              <span className="font-serif text-2xl font-bold">{data.yearsOpen}+</span>
              <span className="text-xs tracking-wider uppercase">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark zone — chef testimonial / values */}
      <section className="py-32 px-8 md:px-16 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Two photos stacked + offset (Bamzi pattern) */}
            <div className="relative">
              <img src={data.chefImage1} alt="" className="w-3/4 object-cover" style={{ borderRadius: '16px', aspectRatio: '1/1' }} />
              <img
                src={data.chefImage2}
                alt=""
                className="w-1/2 object-cover absolute -bottom-8 -right-4"
                style={{ borderRadius: '16px', aspectRatio: '1/1', border: '4px solid var(--bg)' }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase mb-6">Chef's Note</p>
            <blockquote className="font-serif text-3xl text-[var(--cream)] italic leading-snug mb-8">
              "{data.chefQuote}"
            </blockquote>
            <div className="flex items-center gap-4">
              {data.chefAvatar && (
                <img src={data.chefAvatar} alt={data.chefName} className="w-12 h-12 object-cover rounded-full" />
              )}
              <div>
                <p className="text-[var(--cream)] font-medium">{data.chefName}</p>
                <p className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-sm">{data.chefRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 px-8 bg-[var(--bg-deep,#111111)] border-t border-[var(--accent)]/10">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-16">
          {data.stats?.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-4xl text-[var(--accent)] mb-1">{stat.value}</div>
              <div className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

### 10.3 About Variant C: Editorial Float (Roma — light mode)

*Use with Trattoria theme. Maximum restraint.*

```tsx
export function EditorialAbout({ data }: { data: AboutData }) {
  return (
    <div style={{ background: 'rgb(249, 247, 239)', minHeight: '100vh' }}>
      {/* Brand name hero — same as minimal hero */}
      <div className="px-8 pt-24 pb-0">
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(80px, 14vw, 160px)',
            color: 'rgb(30, 28, 22)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 400,
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          Our Story
        </h1>
      </div>

      {/* "What Defines Us" — Roma-style grid */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-baseline mb-16">
          <div className="h-px flex-1 mr-8" style={{ background: 'rgba(30,28,22,0.15)' }} />
          <h2
            className="font-serif text-center whitespace-nowrap px-4"
            style={{ fontSize: '13px', color: 'rgb(30, 28, 22)', letterSpacing: '0.3em', textTransform: 'uppercase' }}
          >
            What Defines Us
          </h2>
          <div className="h-px flex-1 ml-8" style={{ background: 'rgba(30,28,22,0.15)' }} />
        </div>

        {/* 3-up float layout */}
        <EditorialFloat items={data.featuredImages ?? []} />
      </section>

      {/* Story text — editorial two-column */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-serif text-3xl leading-snug mb-8" style={{ color: 'rgb(30, 28, 22)', fontStyle: 'italic' }}>
              {data.missionStatement}
            </p>
          </div>
          <div>
            {data.storyParagraphs.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(30,28,22,0.65)', fontFamily: 'DM Sans, sans-serif' }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## 11. Contact Page Variants

### 11.1 Contact Variant A: Bento Grid (Craving — RECOMMENDED DEFAULT)

*Single viewport. All info visible without scrolling: hours, map, address, social, phone.*

```tsx
// app/contact/page.tsx — Bento contact page
export function BentoContact({ data }: { data: ContactData }) {
  return (
    <div
      className="flex flex-row min-h-screen p-4 md:p-6"
      style={{ gap: '16px' }}
    >
      {/* Left: hero image + "CONTACT" title */}
      <div
        className="w-2/5 relative overflow-hidden"
        style={{ borderRadius: '16px', position: 'sticky', top: '24px', height: 'calc(100vh - 48px)' }}
      >
        <img src={data.heroImage} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <h1 className="font-serif text-white uppercase" style={{ fontSize: 'clamp(48px, 5vw, 72px)', letterSpacing: '0.06em', lineHeight: 1 }}>
            CONTACT
          </h1>
        </div>
      </div>

      {/* Right: info grid */}
      <div
        className="flex-1 grid"
        style={{
          gap: '16px',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto auto',
          alignContent: 'start',
        }}
      >
        {/* Opening hours — top left */}
        <div
          className="p-6"
          style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
        >
          <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-4">Opening Hours</p>
          {data.hours.map((h) => (
            <div key={h.days} className="flex justify-between items-baseline py-2 border-b border-[var(--accent)]/8 last:border-0">
              <span className="text-[var(--cream-muted,rgba(245,240,232,0.6))] text-sm">{h.days}</span>
              <span className={`text-sm font-medium ${h.time === 'Closed' ? 'text-[var(--cream-whisper)]' : 'text-[var(--cream)]'}`}>
                {h.time}
              </span>
            </div>
          ))}
        </div>

        {/* Two small atmosphere photos — top right */}
        <div className="grid grid-rows-2" style={{ gap: '16px' }}>
          <div className="overflow-hidden" style={{ borderRadius: '16px' }}>
            <img src={data.atmosphereImage1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden" style={{ borderRadius: '16px' }}>
            <img src={data.atmosphereImage2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Map — spans full width */}
        <div className="col-span-2 overflow-hidden" style={{ borderRadius: '16px', height: '300px' }}>
          <iframe
            src={data.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(80%) contrast(1.1) brightness(0.7)', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          />
        </div>

        {/* Get in touch — address, phone, email, social */}
        <div
          className="col-span-2 p-6"
          style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
        >
          <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-4">Get In Touch</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[var(--cream-muted)] text-xs uppercase tracking-wider mb-2">Address</p>
              <p className="text-[var(--cream)] text-sm">{data.address.street}</p>
              <p className="text-[var(--cream-muted)] text-sm">{data.address.city}</p>
            </div>
            <div>
              <p className="text-[var(--cream-muted)] text-xs uppercase tracking-wider mb-2">Phone</p>
              <a href={`tel:${data.phone}`} className="text-[var(--accent)] text-sm hover:opacity-70 transition-opacity">
                {data.phone}
              </a>
            </div>
            <div>
              <p className="text-[var(--cream-muted)] text-xs uppercase tracking-wider mb-2">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {data.social.instagram && (
                  <a href={data.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--cream-muted)] hover:text-[var(--accent)] text-xs uppercase tracking-widest transition-colors"
                  >
                    Instagram →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 11.2 Contact Variant B: Form + Info (Heavenpalate-style)

*Traditional form with generous vertical space. For venues where reservations are the primary conversion.*

```tsx
export function FormContact({ data }: { data: ContactData }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="py-40 px-6 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-4">Reservations</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--cream)] mb-4">Book Your Table</h1>
          <p className="text-[var(--cream-muted,rgba(245,240,232,0.6))]">
            Or call us at{' '}
            <a href={`tel:${data.phone}`} className="text-[var(--accent)] hover:opacity-70">{data.phone}</a>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your name' },
              { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'you@email.com' },
              { label: 'Date', key: 'date', type: 'date', placeholder: '' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-transparent border border-[var(--accent)]/20 text-[var(--cream)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none transition-colors placeholder-[var(--cream-whisper)]"
                  style={{ borderRadius: '10px' }}
                  required
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mb-2">Time</label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--accent)]/20 text-[var(--cream)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none transition-colors"
                style={{ borderRadius: '10px' }}
              >
                {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mb-2">Guests</label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--accent)]/20 text-[var(--cream)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
                style={{ borderRadius: '10px' }}
              >
                {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                  <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mb-2">Special Requests</label>
            <textarea
              rows={4}
              placeholder="Allergies, celebrations, seating preferences..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-[var(--accent)]/20 text-[var(--cream)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none transition-colors placeholder-[var(--cream-whisper)] resize-none"
              style={{ borderRadius: '10px' }}
            />
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="btn-primary px-16 py-4 text-sm tracking-[0.2em]">
              {submitted ? 'Request Sent ✓' : 'Reserve Your Table'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

---

## 12. Supporting Section Components

### 12.1 Testimonials — Primary + Secondary Variants

> **DEFAULT: Use the Infinite Scroll Carousel (below). Variants A and B are secondary options for edge cases.**

**⭐ PRIMARY VARIANT: Infinite Horizontal Scroll Carousel**

Reviews are scraped during Phase 1B research (20-30 total, 4-5 stars only, anonymous, source-labeled). The array is duplicated so the CSS scroll loops seamlessly. Cards pause on hover.

```tsx
// components/sections/TestimonialsCarousel.tsx
'use client'

interface Testimonial {
  quote: string
  rating: number
  source: 'Google' | 'Yelp' | 'OpenTable' | 'TripAdvisor'
}

const SOURCE_ICONS = {
  Google: (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Yelp: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF1A1A">
      <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.621.094-.85-.09-.148-.12-.265-.24-2.534-4.19l-.648-1.111a.75.75 0 0 1 .069-.839c.199-.253.538-.364.872-.286l.073.021c4.421 1.263 4.574 1.354 4.717 1.487.273.254.382.625.33.969v.192zM12.69 13.767l-.022.079c-.074.292-.005.607.193.836l4.007 4.69c.222.264.564.372.895.283.331-.089.573-.36.626-.701.053-.34-.092-.682-.378-.876l-4.607-3.146a.748.748 0 0 0-.714-.165zM2.062 14.449c.24.906 2.694 3.079 3.649 3.249.331.059.644-.065.832-.326.12-.169.179-.272 1.049-4.764l.24-1.249a.75.75 0 0 0-.349-.783.745.745 0 0 0-.868.034l-.059.047c-3.695 2.946-3.814 3.068-3.916 3.227a.944.944 0 0 0-.578.565zM11.29 11.69l.07-.042c.263-.165.419-.459.409-.767L11.47 5.12a.748.748 0 0 0-.505-.681.748.748 0 0 0-.822.214c-.218.26-.241.628-.059.912l2.032 5.705c.099.28.36.464.652.464.181 0 .356-.073.482-.206l.04-.041zM13.437 11.19l.022-.079c.074-.292.005-.607-.193-.836L9.259 5.585a.748.748 0 0 0-.895-.283.748.748 0 0 0-.626.701c-.053.34.092.682.378.876l4.607 3.146c.197.135.455.175.68.099l.034-.013z"/>
    </svg>
  ),
  OpenTable: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#DA3743">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="white"/>
    </svg>
  ),
  TripAdvisor: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#34E0A1">
      <circle cx="12" cy="12" r="10"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TA</text>
    </svg>
  ),
}

export function TestimonialsCarousel({ reviews }: { reviews: Testimonial[] }) {
  // Split reviews across 3 rows. Duplicate each chunk for seamless loop.
  const half = Math.ceil(reviews.length / 2)
  const rows = [
    reviews.slice(0, half),
    reviews.slice(half),
  ]

  return (
    <section className="py-32 overflow-hidden bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-4">Guest Reviews</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)]">What Our Guests Say</h2>
      </div>

      {/* 3 rows, alternating scroll direction */}
      <div
        className="flex flex-col gap-4"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        {rows.map((rowReviews, rowIndex) => {
          // Row 0 → left, Row 1 → right, Row 2 → left
          const direction = rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'
          // Slightly vary speed per row so they don't sync up
          const duration = rowIndex === 0 ? 45 : 50
          const doubled = [...rowReviews, ...rowReviews]

          return (
            <div key={rowIndex} className="relative w-full overflow-hidden">
              <div
                className="flex gap-4"
                style={{
                  animation: `${direction} ${duration}s linear infinite`,
                  width: 'max-content',
                }}
              >
                {doubled.map((review, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 bg-[var(--bg-elevated)] p-6 flex flex-col gap-3"
                    style={{
                      width: '320px',
                      borderRadius: '16px',
                      border: '1px solid var(--card-border)',
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j} className="text-[var(--accent)] text-sm">★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[var(--cream-muted,rgba(245,240,232,0.7))] leading-relaxed italic text-sm flex-1">
                      "{review.quote}"
                    </p>

                    {/* Source badge */}
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--card-border)]">
                      {SOURCE_ICONS[review.source]}
                      <span className="text-[var(--cream-muted)] text-xs">{review.source} Reviews</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
```

Add to `globals.css`:
```css
/* Multi-row carousel — always scrolling, no pause, alternating directions */
@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

**Key rules for the carousel:**
- **Always scrolling** — do NOT pause on viewport exit, do NOT use IntersectionObserver to stop it. It runs continuously.
- **Speed:** 26-32s per cycle (moderate — readable but always moving). Do NOT use 60s (too slow) or 10s (too fast).
- **2 rows** — split reviews evenly across 2 rows. Row 1 scrolls left, Row 2 scrolls right.
- **Speed:** 45-50s per cycle (slow, comfortable reading pace). Row 1: 45s, Row 2: 50s — slightly offset so they don't sync.
- **Alternating directions:** Row 1 → left, Row 2 → right. Creates depth and visual interest.

**Variant A (Secondary): Editorial Pull-Quote (Heavenpalate — large serif quote card)**

```tsx
// components/sections/TestimonialsEditorial.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  rating: number
  source: 'Google' | 'Yelp' | 'OpenTable' | 'TripAdvisor'
  avatar?: string
}

export function TestimonialsEditorial({ reviews }: { reviews: Testimonial[] }) {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-32 px-6 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: large editorial text block */}
        <div>
          <p className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-6">What Our Guests Say</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Large serif quote headline — the emotional moment */}
              <blockquote
                className="font-serif text-3xl md:text-4xl text-[var(--cream)] italic leading-snug mb-8"
              >
                "{reviews[current]?.quote}"
              </blockquote>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[current]?.rating ?? 5 }).map((_, i) => (
                  <span key={i} className="text-[var(--accent)]">★</span>
                ))}
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {reviews[current]?.avatar && (
                  <img src={reviews[current].avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                )}
                <div>
                  <p className="text-[var(--cream)] text-sm font-medium">{reviews[current]?.author}</p>
                  {reviews[current]?.source && (
                    <p className="text-[var(--cream-muted)] text-xs">{reviews[current].source}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex gap-3 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--accent)' : 'rgba(var(--cream-rgb, 245,240,232), 0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: floating rating badge (Heavenpalate pattern) */}
        <div className="relative flex items-center justify-center">
          {/* Large circular floating badge */}
          <div
            className="relative overflow-hidden"
            style={{ width: '320px', height: '320px', borderRadius: '50%' }}
          >
            <img
              src="/images/restaurant-atmosphere.jpg"
              alt="Restaurant atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* Overlapping rating card — breaks out of circle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -right-8 bottom-8 bg-[var(--bg-elevated)] p-5 shadow-2xl"
            style={{ borderRadius: '16px', border: '1px solid var(--card-border)' }}
          >
            <p className="text-[var(--accent)] font-serif text-3xl font-bold">4.9</p>
            <div className="flex gap-0.5 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[var(--accent)] text-sm">★</span>
              ))}
            </div>
            <p className="text-[var(--cream-muted)] text-xs">Google Reviews</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

**Variant B (Secondary): Card Grid (standard 2×2 or 3-col)**

```tsx
export function ReviewCards({ reviews }: { reviews: Testimonial[] }) {
  return (
    <section className="py-32 px-6 bg-[var(--bg-deep,#111111)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-4">Guest Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)]">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[var(--bg-elevated)] p-8 group hover:border-[var(--accent)]/30 transition-all duration-500"
              style={{ borderRadius: '16px', border: '1px solid var(--card-border)' }}
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute top-4 left-6 font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: '80px', color: 'var(--accent)', opacity: 0.08 }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-[var(--accent)] text-sm">★</span>
                ))}
              </div>

              <p className="text-[var(--cream-muted,rgba(245,240,232,0.7))] leading-relaxed italic mb-6 relative z-10">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div>
                  {review.source && <p className="text-[var(--cream-muted)] text-xs">{review.source} Reviews</p>}
                </div>
                {/* Google G icon */}
                <div className="ml-auto opacity-20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 12.2 Stats / Animated Counters Bar

```tsx
// components/sections/StatsBar.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 px-6 bg-[var(--bg-deep,#111111)] border-y border-[var(--accent)]/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {/* Stat */}
              <div className="text-center px-8 md:px-16 py-4">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-xs tracking-[0.2em] uppercase mt-2">
                  {stat.label}
                </p>
              </div>
              {/* Divider — except last */}
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-[var(--accent)]/20 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Animated counter — eases out cubic
function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const step = (ts: number) => {
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl text-[var(--accent)] tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}
```

**Default stats suggestions:**
```typescript
const defaultStats = [
  { value: 175, suffix: '+', label: 'Google Reviews' },
  { value: 4, suffix: '.9★', label: 'Average Rating' },
  { value: 2015, label: 'Est.' },
  { value: 5000, suffix: '+', label: 'Happy Guests' },
]
```

### 12.3 Gallery / Image Sections

**Full-bleed atmosphere break (Roma/Bramble pattern):**
```tsx
export function AtmosphereImage({ src, alt, height = '80vh' }: { src: string; alt: string; height?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className="w-full overflow-hidden" style={{ height }}>
      <motion.img
        style={{ y, width: '100%', height: '110%', objectFit: 'cover', marginTop: '-5%' }}
        src={src}
        alt={alt}
      />
    </div>
  )
}
```

**Horizontal photo strip (Bramble pattern):**
```tsx
export function PhotoStrip({ photos }: { photos: string[] }) {
  return (
    <section className="py-12 px-8">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {photos.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden"
            style={{ width: '280px', height: '380px', borderRadius: '16px' }}
          >
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Masonry-style gallery:**
```tsx
export function GalleryMasonry({ images }: { images: string[] }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="columns-2 md:columns-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="mb-4 overflow-hidden"
            style={{ borderRadius: '16px', breakInside: 'avoid' }}
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

### 12.4 Featured Dish Cards

```tsx
// components/FeaturedCard.tsx
'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface FeaturedCardProps {
  name: string
  description: string
  image: string
  tag: string         // 'Chef's Pick' | 'Most Popular' | 'New'
  price: string
  index: number
}

export function FeaturedCard({ name, description, image, tag, price, index }: FeaturedCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
      style={{ borderRadius: '16px', background: 'var(--bg-elevated)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '280px' }}>
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span
          className="absolute top-4 right-4 text-xs font-semibold tracking-wider uppercase px-3 py-1 text-[var(--bg)]"
          style={{ borderRadius: '8px', background: 'var(--accent)' }}
        >
          {tag}
        </span>
      </div>

      {/* Shimmer on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, var(--accent, #d4a574)08 0%, transparent 60%)' }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-[var(--cream)]">{name}</h3>
          <span className="text-[var(--accent)] font-semibold ml-4 flex-shrink-0">{price}</span>
        </div>
        <p className="text-[var(--cream-muted,rgba(245,240,232,0.55))] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bottom accent line — animated on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
      />
    </motion.div>
  )
}
```

### 12.5 Reservation CTA Section

```tsx
// components/sections/ReservationCTA.tsx
'use client'
import { motion } from 'framer-motion'
import { VideoOrImage } from '../VideoOrImage'

interface ReservationCTAProps {
  backgroundMedia: { type: 'video' | 'image'; src: string; poster?: string }
  headline: string        // italic serif — the emotional moment
  subheadline?: string
  ctaLabel: string
  ctaHref: string
  phone?: string
}

export function ReservationCTA({ backgroundMedia, headline, subheadline, ctaLabel, ctaHref, phone }: ReservationCTAProps) {
  return (
    <section className="relative overflow-hidden text-center" style={{ padding: '160px 24px' }}>
      {/* Background media */}
      <div className="absolute inset-0">
        <VideoOrImage media={backgroundMedia} className="w-full h-full" objectFit="cover" />
      </div>

      {/* Multi-layer cinematic overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg, #1a1a1a)60 0%, transparent 30%, transparent 70%, var(--bg, #1a1a1a)60 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg, #1a1a1a)25 0%, transparent 15%, transparent 85%, var(--bg, #1a1a1a)25 100%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-6"
        >
          Reservations
        </motion.p>

        {/* Large italic serif — THE emotional centerpiece */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-white italic"
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            lineHeight: '1.05',
            marginBottom: '24px',
            textShadow: '0 4px 40px rgba(0,0,0,0.4)',
          }}
        >
          {headline}
        </motion.h2>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-white/60 mb-12 text-lg"
          >
            {subheadline}
          </motion.p>
        )}

        {/* Asymmetric CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={ctaHref} className="btn-primary px-12 py-4 text-sm tracking-[0.2em]">
            {ctaLabel}
          </a>
          {phone && (
            <a href={`tel:${phone}`} className="btn-outline px-12 py-4 text-sm tracking-[0.2em]">
              Call to Reserve
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
```

### 12.6 FAQ / Accordion

```tsx
// components/sections/FAQAccordion.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[var(--cream)]">{title}</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden transition-all duration-300"
              style={{
                borderRadius: '12px',
                background: openIndex === i ? 'var(--bg-elevated)' : 'transparent',
                border: '1px solid',
                borderColor: openIndex === i ? 'var(--card-border-hover)' : 'var(--card-border)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="font-serif text-lg text-[var(--cream)] group-hover:text-[var(--accent)] transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--accent)] text-2xl font-light ml-4 flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="px-6 pb-6 text-[var(--cream-muted,rgba(245,240,232,0.6))] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### 12.7 Instagram / Social Feed Grid

```tsx
// components/sections/InstagramGrid.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function InstagramGrid({
  posts,
  handle,
  profileUrl,
}: {
  posts: Array<{ src: string; likes?: string; caption?: string }>
  handle: string
  profileUrl: string
}) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--accent)] text-xs tracking-[0.35em] uppercase mb-3">Follow Us</p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-2xl text-[var(--cream)] hover:text-[var(--accent)] transition-colors"
          >
            @{handle}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative aspect-square overflow-hidden cursor-pointer"
              style={{ borderRadius: '12px' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={post.src}
                alt={post.caption ?? `Post ${i + 1}`}
                className="w-full h-full object-cover"
                animate={{ scale: hovered === i ? 1.08 : 1 }}
                transition={{ duration: 0.5 }}
              />

              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
                    style={{ background: 'rgba(0,0,0,0.7)' }}
                  >
                    {post.likes && (
                      <span className="text-[var(--accent)] text-2xl mb-2">♥ {post.likes}</span>
                    )}
                    {post.caption && (
                      <p className="text-white/90 text-xs leading-snug">{post.caption}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 px-8 py-4"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @{handle}
          </a>
        </div>
      </div>
    </section>
  )
}
```

### 12.8 Footer Component

```tsx
// components/Footer.tsx
'use client'
import Link from 'next/link'

interface FooterProps {
  venueName: string
  tagline?: string
  address: { street: string; city: string; building?: string }
  phone: string
  email?: string
  hours: Array<{ days: string; time: string }>
  social: { instagram?: string; facebook?: string; twitter?: string }
  nav: Array<{ href: string; label: string }>
}

export function Footer({ venueName, tagline, address, phone, email, hours, social, nav }: FooterProps) {
  return (
    <footer
      className="border-t border-[var(--accent)]/10 pt-20 pb-8"
      style={{ background: 'var(--bg-deep, #0a0a0a)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl text-[var(--cream)] tracking-wider block mb-4">
              {venueName}
            </span>
            {tagline && (
              <p className="text-[var(--cream-muted,rgba(245,240,232,0.4))] text-sm leading-relaxed mb-6 italic font-serif">
                {tagline}
              </p>
            )}
            {/* Social icons */}
            <div className="flex gap-3">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center text-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-300"
                  style={{
                    border: '1px solid var(--card-border)',
                    borderRadius: '10px',
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[var(--accent)] text-xs tracking-widest uppercase mb-5 font-semibold">Hours</h4>
            <div className="space-y-2.5">
              {hours.map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-6 text-sm">
                  <span className="text-[var(--cream-muted,rgba(245,240,232,0.5))]">{days}</span>
                  <span className={time === 'Closed' ? 'text-[var(--cream-whisper)]' : 'text-[var(--cream)]/80'}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-[var(--accent)] text-xs tracking-widest uppercase mb-5 font-semibold">Find Us</h4>
            <div className="space-y-1.5 text-sm text-[var(--cream-muted,rgba(245,240,232,0.55))]">
              <p>{address.street}</p>
              <p>{address.city}</p>
              {address.building && <p className="text-[var(--cream-whisper)] text-xs">{address.building}</p>}
              <a href={`tel:${phone}`} className="block text-[var(--accent)] hover:opacity-70 transition-opacity mt-3">
                {phone}
              </a>
              {email && (
                <a href={`mailto:${email}`} className="block text-[var(--cream-muted)] hover:text-[var(--accent)] transition-colors text-xs">
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[var(--accent)] text-xs tracking-widest uppercase mb-5 font-semibold">Navigate</h4>
            <div className="space-y-3">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-[var(--cream-muted,rgba(245,240,232,0.55))] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/40" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--accent)]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--cream-whisper)] text-xs">
            © {new Date().getFullYear()} {venueName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {nav.slice(0, 4).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[var(--cream-whisper)] hover:text-[var(--accent)] text-xs tracking-wider uppercase transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## 13. Full Component Library

The components built so far cover the full build surface. Summary index:

| Component | File | Use |
|-----------|------|-----|
| `VideoOrImage` | `components/VideoOrImage.tsx` | Universal media — video with image fallback |
| `NavPill` | `components/NavPill.tsx` | Veloria-style glass pill nav |
| `NavMinimal` | `components/NavMinimal.tsx` | Standard sticky overlay nav |
| `NavEditorial` | `components/NavEditorial.tsx` | Roma numbered nav |
| `BentoHero` | `components/heroes/BentoHero.tsx` | Qitchen/Craving bento home |
| `VideoHero` | `components/heroes/VideoHero.tsx` | Veloria video hero |
| `SplitTextHero` | `components/heroes/SplitTextHero.tsx` | Heavenpalate 2-col hero |
| `FullImageHero` | `components/heroes/FullImageHero.tsx` | Bramble overlay hero |
| `MinimalHero` | `components/heroes/MinimalHero.tsx` | Roma minimal hero |
| `SplitLayout` | `components/SplitLayout.tsx` | Menu/long-content 50/50 split |
| `MenuItemRow` | `components/MenuItemRow.tsx` | Dotted-leader menu item |
| `MenuGrid` | `components/MenuGrid.tsx` | Category card + item grid |
| `MenuEditorial` | `components/MenuEditorial.tsx` | Roma editorial menu |
| `BentoAbout` | `components/about/BentoAbout.tsx` | Qitchen single-viewport about |
| `NarrativeAbout` | `components/about/NarrativeAbout.tsx` | Bamzi dark/light narrative |
| `EditorialAbout` | `components/about/EditorialAbout.tsx` | Roma editorial about |
| `EditorialFloat` | `components/EditorialFloat.tsx` | Roma asymmetric image float |
| `BentoContact` | `components/contact/BentoContact.tsx` | Craving bento contact |
| `FormContact` | `components/contact/FormContact.tsx` | Heavenpalate form contact |
| `TestimonialsEditorial` | `components/sections/Testimonials.tsx` | Large pull-quote testimonials |
| `ReviewCards` | `components/sections/ReviewCards.tsx` | Card grid testimonials |
| `StatsBar` | `components/sections/StatsBar.tsx` | Animated counters horizontal bar |
| `FeaturedCard` | `components/FeaturedCard.tsx` | 3D tilt dish card |
| `ReservationCTA` | `components/sections/ReservationCTA.tsx` | Full-bleed cinematic CTA |
| `FAQAccordion` | `components/sections/FAQAccordion.tsx` | Expandable FAQ |
| `InstagramGrid` | `components/sections/InstagramGrid.tsx` | Social feed hover grid |
| `AtmosphereImage` | `components/sections/AtmosphereImage.tsx` | Full-bleed parallax section break |
| `PhotoStrip` | `components/sections/PhotoStrip.tsx` | Horizontal scroll photo row |
| `Marquee` | `components/Marquee.tsx` | Bramble/Bamzi text ticker |
| `OvalStack` | `components/OvalStack.tsx` | Decorative oval ornament |
| `Footer` | `components/Footer.tsx` | Standard 4-col footer |

---

## 14. Page Templates — Complete Compositions

### 14.1 Homepage Composition (Default — Noir Luxe Theme)

**MINIMUM 14-16 sections. Every section except Welcome/Philosophy must have at least one image or video.**

```
root/
  layout.tsx → NavMinimal (sticky, transparent → solid on scroll)
  page.tsx →
    ├── VideoHero or ParallaxHero (Section 4.1/4.2)             [VIDEO — non-negotiable]
    ├── StatsBar (4 animated counters: reviews, rating, years, guests)
    │     └── Counters use large serif font, dramatic easing
    ├── Welcome/Philosophy Statement
    │     └── Full-width, generous padding (py-40), text-centered
    │     └── Large serif text block with restaurant's mission/philosophy
    │     └── Editorial magazine intro feel — think Kinfolk or Bon Appétit
    │     └── (text-only section is permitted here only)
    ├── Story/About Section:
    │     ├── Left: text (label, headline, story paragraph, 2 CTAs)
    │     └── Right: image with OverlappingCard (-mt-24 floating quote)
    ├── AtmosphereImage (full-bleed parallax section break)       [PARALLAX #2]
    ├── Featured Dishes:
    │     └── FeaturedCard grid (4 cards, 2×2 on desktop) — staggered entry
    ├── Signature Dishes Spotlight
    │     └── 2-3 hero-sized dish images with overlapping text cards
    │     └── Full-bleed parallax images with floating detail cards  [PARALLAX #3]
    │     └── Cards break container boundaries (negative margins)
    ├── Chef/Team Highlight
    │     └── Split layout: large photo left, story text right
    │     └── The human element — name, role, short quote
    │     └── Subtle floating badge with chef's signature or years of experience
    ├── Marquee (tagline repeating — rhythm/pace break)
    ├── Private Events/Catering CTA
    │     └── Full-bleed atmospheric image                        [VIDEO or IMAGE]
    │     └── Centered overlay text + single CTA button
    │     └── "Host your next event with us" or equivalent
    ├── TestimonialsCarousel (infinite horizontal scroll — PRIMARY)
    │     └── 15-30 anonymous reviews scraped from Google/Yelp/OpenTable
    │     └── CSS animated, pauses on hover
    ├── Awards/Press Section
    │     └── Horizontal row of press logos or award badges
    │     └── "As Featured In" or "Awards & Recognition"
    │     └── Grayscale logos with hover → full color
    ├── InstagramGrid
    ├── Location Preview
    │     └── Split layout: map embed (left) + hours/address/phone (right)
    │     └── Beautiful large typography for the address
    │     └── Inline hours with open/closed indicator
    ├── ReservationCTA (full-bleed cinematic — before footer)
    └── Footer
```

**Canonical section order:**
```
VideoHero → StatsBar → Welcome/Philosophy → Story/About → AtmosphereImage →
Featured Dishes → Signature Dishes Spotlight → Chef/Team → Marquee →
Private Events CTA → TestimonialsCarousel → Awards/Press →
InstagramGrid → Location Preview → ReservationCTA → Footer
```

### 14.2 Homepage Composition (Bento — Zen/Qitchen Theme)

```
page.tsx →
  ├── BentoHero (full page, flexbox, 75/25, sticky left)
  │   └── Nav overlaid at top
  │   └── Three nav tiles on right (MENU → RESERVATION → ABOUT)
  [No scroll on desktop]
  [Mobile: collapses to vertical stack]
```

### 14.3 Menu Page Composition

```
app/menu/page.tsx →
  SplitLayout (wrapper):
    ├── Left: sticky hero image + "MENU" title
    └── Right (scrollable):
          ├── Sticky MenuTabBar (category pills)
          └── [per category]:
                ├── Ornamental category heading (— CATEGORY —)
                ├── MenuItemRow × N (with inline images)
                └── [optional] AtmosphereImage between categories
```

### 14.4 About Page Composition

```
app/about/page.tsx →
  Choose variant based on theme:
  
  Zen/Velvet → BentoAbout (single viewport)
  Noir Luxe/Hearth → NarrativeAbout (dark/light scroll)
  Trattoria → EditorialAbout (cream canvas)
  
  All variants end with:
  └── Footer
```

### 14.5 Contact Page Composition

```
app/contact/page.tsx →
  Choose variant:
  
  Zen/Velvet → BentoContact (single viewport, all info visible)
  All others → FormContact + separate map/hours sections
  
  Both end with:
  └── Footer
```

---

## 15. Page-by-Page Build Process

**CRITICAL RULE: Sub-agents build ONE PAGE at a time. Not full websites.** Each sub-agent gets this skill + restaurant content + one page assignment.

### 15.1 Build Order

```
Pass 1 — Global (required before all pages)
  Sub-Agent 1A: Global setup
    - next.config.js (image domains, etc.)
    - tailwind.config.js (custom colors, fonts, extend)
    - app/globals.css (CSS variables, button classes, scrollbar, grain)
    - app/layout.tsx (root layout with NavX + Footer)
    - types/theme.ts + types/restaurant.ts
    - components/VideoOrImage.tsx
    - components/Nav[X].tsx (appropriate for theme)
    - components/Footer.tsx
  
  ✅ Quality gate: `npm run build` passes. Nav + footer render at /

Pass 2 — Homepage (highest priority)
  Sub-Agent 2A: Homepage
    - app/page.tsx
    - All hero component for chosen variant
    - StatsBar, FeaturedCard grid, Story section
    - ReservationCTA, TestimonialsEditorial or ReviewCards
    
  ✅ Quality gate: Hero animates on load. Scroll reveals work. Mobile at 375px.

Pass 3 — Menu (second priority)
  Sub-Agent 3A: Menu page
    - app/menu/page.tsx
    - SplitLayout component
    - MenuTabBar + MenuItemRow components
    - All menu data wired up
    
  ✅ Quality gate: Sticky left panel works. Tab bar highlights active on scroll. Dotted leaders visible.

Pass 4 — About (third priority)
  Sub-Agent 4A: About page
    - app/about/page.tsx
    - About variant component
    
  ✅ Quality gate: Responsive. Overlapping elements correct.

Pass 5 — Contact (fourth priority)
  Sub-Agent 5A: Contact page
    - app/contact/page.tsx
    - Contact variant + form
    - Map embed
    
  ✅ Quality gate: Map loads. Form submits (even if just console.log for now).

Pass 6 — Polish
  Sub-Agent 6A: Polish pass
    - SEO: all page metadata (title, description, og:image, og:type)
    - prefers-reduced-motion handling in VideoOrImage
    - Loading states / skeleton screens if needed
    - Fine-tune animation timings
    - Fix any mobile issues found
    - Favicon + og:image assets
    
  ✅ Quality gate: Lighthouse SEO ≥ 90. All pages have og:image.
```

### 15.2 What Each Sub-Agent Receives in Brief

Every sub-agent brief MUST include:

```markdown
## Sub-Agent Brief Template

**Page:** [homepage / menu / about / contact / global]
**Theme:** [Noir Luxe / Zen / Trattoria / Terroir / Hearth / Velvet]
**Structural Philosophy:** [Bento Grid / Video Hero / Split Layout / Editorial / Narrative / Texture]

**Restaurant Content:**
- Name: [e.g., "Lounge 51"]
- Tagline: [e.g., "Where every evening becomes a memory"]
- Address: [full address]
- Phone: [number]
- Hours: [Mon-Sun hours]
- Google Reviews URL: [URL]
- Social: Instagram: @handle, Facebook: /handle
- Menu items: [list or JSON file path]
- Photos: [list of image paths/URLs]
- Video: [mp4 URL or null → use DEFAULT_RESTAURANT_VIDEOS.dark_dining]

**Skill File:** /Users/ethantalreja/.openclaw/workspace/skills/agency-website-design/SKILL.md
**Component:** [exact component name from Section 13 to use]
**Hero variant:** [e.g., VideoHero from Section 8.1]
**Quality gate:** [from Section 15.1 Pass N]

**Done when:** `npm run build` passes, page renders correctly at 375px / 768px / 1440px, 
  all animations trigger on scroll, and hero media autoplays.
```

### 15.3 Shared Dependencies Between Pages

Sub-agents MUST check these files exist before creating their page (Global Pass creates them):

- `app/globals.css` — CSS variables for active theme
- `app/layout.tsx` — root layout with nav + footer
- `components/VideoOrImage.tsx` — required by all hero variants
- `types/restaurant.ts` — shared data types

If Global Pass hasn't run yet, run it first.

### 15.4 Quality Gate Per Page

Before marking a page done:

| Check | Tool | Pass criteria |
|-------|------|---------------|
| TypeScript | `npm run build` | Zero type errors |
| Renders | Chrome | No layout breaks at 375px, 768px, 1440px |
| Animations | Chrome | `whileInView` triggers on scroll |
| Hero media | Chrome | Video autoplays muted, or image loads |
| Sticky behavior | Chrome | Menu sticky left panel works |
| Mobile nav | iPhone sim | Nav opens/closes, links work |
| SEO | Lighthouse | Score ≥ 90 (Polish pass only) |

---

## 16. Global Styles

```css
/* ═══════════════════════════════════════════════════════════
   globals.css — Paste at top, then choose ONE theme block
   ═══════════════════════════════════════════════════════════ */

/* Choose theme font imports — one of these blocks: */

/* NOIR LUXE */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

/* ZEN */
/* @import url('https://fonts.googleapis.com/css2?family=Forum&family=Outfit:wght@300;400;500;600&display=swap'); */

/* TRATTORIA */
/* @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap'); */

/* TERROIR */
/* @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap'); */

/* HEARTH */
/* @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Nunito+Sans:wght@300;400;600;700&display=swap'); */

/* VELVET */
/* @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap'); */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════════════════
   CSS VARIABLES — Active theme (replace entire :root block)
   ═══════════════════════════════════════════════════════════ */
:root {
  /* NOIR LUXE — DEFAULT */
  --bg: #1a1a1a;
  --bg-elevated: #242424;
  --bg-deep: #111111;
  --bg-section-alt: #1f1a14;
  --accent: #d4a574;
  --accent-dark: #c4956a;
  --cream: #f5f0e8;
  --cream-muted: rgba(245, 240, 232, 0.6);
  --cream-whisper: rgba(245, 240, 232, 0.3);
  --burgundy: #6b2d3e;
  --card-border: rgba(212, 165, 116, 0.15);
  --card-border-hover: rgba(212, 165, 116, 0.35);

  /* Bento system (Zen/Qitchen — activate if using bento) */
  --bento-gap: 16px;
  --bento-outer-radius: 48px;
  --bento-inner-radius: 16px;

  /* Nav pill (Velvet — activate if using glass pill nav) */
  --nav-pill: rgb(31, 31, 31);
  --nav-inner: rgb(16, 16, 16);
  --nav-text: rgb(239, 230, 210);
}

/* ═══════════════════════════════════════════════════════════
   TYPOGRAPHY
   ═══════════════════════════════════════════════════════════ */
* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg);
  color: var(--cream);
  font-family: 'Inter', 'Outfit', 'DM Sans', sans-serif; /* replaced by theme */
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-serif {
  font-family: 'Playfair Display', serif; /* replaced by theme */
}

/* ═══════════════════════════════════════════════════════════
   BUTTONS — primary and outline
   ═══════════════════════════════════════════════════════════ */
.btn-primary {
  background-color: var(--accent);
  color: var(--bg);
  font-weight: 600;
  padding: 0.875rem 2.5rem;
  font-size: 0.8125rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  border: 2px solid var(--accent);
  display: inline-block;
  text-align: center;
  border-radius: 10px;
}
.btn-primary:hover {
  background-color: transparent;
  color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212, 165, 116, 0.25);
}

.btn-outline {
  background-color: transparent;
  color: var(--accent);
  font-weight: 600;
  padding: 0.875rem 2.5rem;
  font-size: 0.8125rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  border: 2px solid var(--accent);
  display: inline-block;
  text-align: center;
  border-radius: 10px;
}
.btn-outline:hover {
  background-color: var(--accent);
  color: var(--bg);
  transform: translateY(-2px);
}

/* Pill variant */
.btn-pill {
  border-radius: 60px;
}

/* ═══════════════════════════════════════════════════════════
   SCROLLBAR
   ═══════════════════════════════════════════════════════════ */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent-dark, var(--accent)); }

/* Hide scrollbar utility */
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

/* ═══════════════════════════════════════════════════════════
   SELECTION
   ═══════════════════════════════════════════════════════════ */
::selection {
  background: var(--accent);
  color: var(--bg);
}

/* ═══════════════════════════════════════════════════════════
   GRAIN TEXTURE OVERLAY (subtle, premium)
   ═══════════════════════════════════════════════════════════ */
body::after {
  content: '';
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: 9999;
}

/* ═══════════════════════════════════════════════════════════
   CARD HOVER UTILITY
   ═══════════════════════════════════════════════════════════ */
.card-hover {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

/* ═══════════════════════════════════════════════════════════
   SECTION DIVIDER
   ═══════════════════════════════════════════════════════════ */
.section-divider {
  width: 4rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  margin: 1.5rem auto;
}

/* ═══════════════════════════════════════════════════════════
   HERO TITLE SHADOW
   ═══════════════════════════════════════════════════════════ */
.hero-title {
  text-shadow: 0 2px 60px rgba(0, 0, 0, 0.5);
}

/* ═══════════════════════════════════════════════════════════
   LIGHT MODE OVERRIDE (Trattoria/Roma)
   Only add this block for light-mode themes
   ═══════════════════════════════════════════════════════════ */
/* 
.theme-light body {
  background-color: rgb(249, 247, 239);
  color: rgb(30, 28, 22);
}
.theme-light .font-serif {
  font-family: 'Cormorant Garamond', serif;
}
*/
```

---

## 17. Technical Stack & File Structure

### 17.1 Stack

```
Framework:     Next.js 14 (App Router, src/ directory)
Styling:       Tailwind CSS v3
Animation:     framer-motion (^10 or ^11)
Fonts:         Google Fonts via @import in globals.css
Images:        Unsplash (free, attribution in code comments)
Video:         Client-provided MP4 OR Pexels stock (royalty-free)
Icons:         Inline SVG only (zero icon library dependencies)
TypeScript:    Required on all files — no .js files
QR codes:      qrcode.react or api.qrserver.com (for Google review QR)
```

### 17.2 File Structure

```
src/
  app/
    layout.tsx           # Root layout: nav + footer + font class
    globals.css          # Theme variables, buttons, scrollbar, grain
    page.tsx             # Homepage
    menu/
      page.tsx           # Menu page
    about/
      page.tsx           # About page
    contact/
      page.tsx           # Contact page

  components/
    # Media
    VideoOrImage.tsx

    # Navigation
    NavPill.tsx          # Veloria glass pill (Zen/Velvet themes)
    NavMinimal.tsx       # Standard sticky (Noir/Hearth/Terroir)
    NavEditorial.tsx     # Roma numbered (Trattoria theme)

    # Heroes
    heroes/
      BentoHero.tsx
      VideoHero.tsx
      SplitTextHero.tsx
      FullImageHero.tsx
      MinimalHero.tsx

    # Layout
    SplitLayout.tsx      # 50/50 split (menu pages)

    # Menu
    MenuItemRow.tsx
    MenuGrid.tsx
    MenuEditorial.tsx

    # About
    about/
      BentoAbout.tsx
      NarrativeAbout.tsx
      EditorialAbout.tsx

    # Contact
    contact/
      BentoContact.tsx
      FormContact.tsx

    # Shared
    EditorialFloat.tsx
    FeaturedCard.tsx
    Marquee.tsx
    OvalStack.tsx

    # Sections
    sections/
      StatsBar.tsx
      TestimonialsEditorial.tsx
      ReviewCards.tsx
      ReservationCTA.tsx
      FAQAccordion.tsx
      InstagramGrid.tsx
      AtmosphereImage.tsx
      PhotoStrip.tsx

    # Footer
    Footer.tsx

  types/
    restaurant.ts        # MenuData, ContactData, AboutData, etc.
    theme.ts             # ThemeConfig, ThemeTraits
```

### 17.3 next.config.js / next.config.mjs

**Always include these image domains — missing them causes broken images on deploy:**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'videos.pexels.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'api.qrserver.com' },
    ],
  },
}

module.exports = nextConfig
```

For `.mjs` projects:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'videos.pexels.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'api.qrserver.com' },
    ],
  },
}

export default nextConfig
```

### 17.4 tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        cream: 'var(--cream)',
        'bg-elevated': 'var(--bg-elevated)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'bento-outer': '48px',
        'bento-inner': '16px',
        'nav-pill': '60px',
      },
      spacing: {
        'bento-gap': '16px',
        'section': '120px',
        'section-lg': '160px',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 17.5 TypeScript Types

```typescript
// types/restaurant.ts

export interface MenuItem {
  name: string
  description?: string
  price: string | number
  tags?: string[]         // ['🌿 Vegan', '⊘ GF', 'Spicy']
  image?: string
}

export interface MenuCategory {
  id: string
  label: string
  icon?: string           // emoji or character
  items: MenuItem[]
}

export interface MenuData {
  categories: MenuCategory[]
}

export interface HoursEntry {
  days: string
  time: string            // '5pm – 11pm' or 'Closed'
}

export interface ContactData {
  heroImage: string
  hours: HoursEntry[]
  address: { street: string; city: string; building?: string }
  phone: string
  email?: string
  mapEmbedUrl: string
  social: { instagram?: string; facebook?: string; twitter?: string }
  atmosphereImage1?: string
  atmosphereImage2?: string
  googleReviewUrl?: string
}

export interface AboutData {
  heroImage: string
  foundedYear?: number
  foundingHeadline?: string
  storyHeadline: string
  storyParagraphs: string[]
  storyImage: string
  yearsOpen?: number
  missionStatement?: string
  chefName?: string
  chefRole?: string
  chefQuote?: string
  chefImage1?: string
  chefImage2?: string
  chefAvatar?: string
  awards?: Array<{ source: string; title: string }>
  stats?: Array<{ value: string; label: string }>
  hours?: HoursEntry[]
  featuredImages?: Array<{ image: string; caption: string; price?: string }>
  googleReviewUrl?: string
}

export interface RestaurantConfig {
  name: string
  tagline: string
  theme: 'noir-luxe' | 'zen' | 'trattoria' | 'terroir' | 'hearth' | 'velvet'
  structuralPhilosophy: 'bento' | 'video-hero' | 'split' | 'editorial' | 'narrative' | 'texture'
  heroMedia: { type: 'video' | 'image'; src: string; poster?: string }
  address: { street: string; city: string; building?: string }
  phone: string
  email?: string
  hours: HoursEntry[]
  social: { instagram?: string; facebook?: string; twitter?: string }
  googleReviewUrl?: string
  menu: MenuData
  about: AboutData
  contact: ContactData
}
```

---

## 18. Quality Checklist

Run this checklist before marking ANY site complete.

### 18.1 Non-Negotiables

- [ ] `npm run build` passes with ZERO TypeScript errors
- [ ] `npm run build` passes with ZERO ESLint errors  
- [ ] All 4 pages render: `/`, `/menu`, `/about`, `/contact`
- [ ] No horizontal scroll at any viewport width
- [ ] Mobile layout works at 375px (no text overflow, no broken flex)
- [ ] Desktop layout renders at 1440px (no stretched images)

### 18.2 Core Attribute Checks

- [ ] Hero has video OR parallax image — fills full viewport
- [ ] Hero video autoplays muted (check network tab, confirm request made)
- [ ] At least ONE overlapping/negative-margin layout element per page
- [ ] At least ONE italic serif emotional moment in accent color (≥40px)
- [ ] Primary CTA is filled, secondary CTA is outline — NEVER both filled
- [ ] All cards/images use `border-radius: 14px` minimum
- [ ] Section padding ≥ `py-24` (96px) on desktop, never `py-16` as default
- [ ] Menu page has sticky tab bar that highlights active section on scroll
- [ ] Menu items have dotted leader line between name and price
- [ ] Review cards show Google G icon

### 18.3 Animation Checks

- [ ] Hero title animates on page load (opacity + y transform)
- [ ] Section content triggers on scroll (`whileInView`)
- [ ] Featured cards stagger in (each with delay: index * 0.12)
- [ ] Hover states work on cards (scale image, change text color)
- [ ] Animated counters trigger once when stats bar enters viewport
- [ ] Marquee (if used) scrolls infinitely without jank

### 18.4 Framer-Quality Patterns

- [ ] At least one section has an absolute-positioned floating element (badge, card, quote)
- [ ] Images are large — hero at least `60vh`, featured cards at least `280px` tall
- [ ] Typography hierarchy is clear: display / section / label / body — all clearly differentiated
- [ ] Nav pill or sticky nav works on scroll
- [ ] ReservationCTA section before footer (cinematic full-bleed moment)
- [ ] Footer has: logo, hours, address, phone, social icons, nav links

### 18.5 SEO (Polish Pass)

- [ ] `<title>` on all pages: `{Venue Name} — {Tag} | {City}`
- [ ] `<meta description>` on all pages (120-155 chars)
- [ ] `og:title`, `og:description`, `og:image` on all pages
- [ ] `og:type = "restaurant.restaurant"` on homepage
- [ ] Favicon present (min: 32×32 ico or svg)
- [ ] `og:image` is at least 1200×630

### 18.6 Video/Media

- [ ] Video uses `autoPlay muted loop playsInline` (NOT just `muted loop`)
- [ ] Video has `object-fit: cover` and `object-position: 50% 50%`
- [ ] Video has `poster` attribute for loading state fallback
- [ ] `prefers-reduced-motion` pauses video
- [ ] All `<img>` tags have meaningful `alt` attributes
- [ ] Homepage has **at least 2 video elements** (hero + atmospheric break) — **push for 3** (hero + break + Private Events CTA or bento cell)
- [ ] If only 1 video present → site **fails this check**, add a second before proceeding

### 18.7 Three-Round QA Gate (MANDATORY before delivery)

After initial build, run 3 full rounds of QA. Each round:

1. Run the FULL checklist (18.1–18.6)
2. Additionally check:
   - [ ] OG images meet best practices (1200×630, compelling, branded)
   - [ ] Homepage has minimum 12 images/videos total
   - [ ] Homepage has minimum 2 video elements (target: 3)
   - [ ] Animations are smooth and impactful — not just generic fade-in
   - [ ] Social proof carousel: 3 rows, alternating directions, always scrolling, 15+ reviews populated
   - [ ] Is this visually STUNNING? Would a restaurant owner be impressed on first load?
   - [ ] Homepage has 14+ sections with enough scroll depth
   - [ ] At least 3 parallax sections (not just the hero)
   - [ ] Mobile experience feels premium — not just "responsive"
   - [ ] Counter animations are dramatic (large serif numbers, expressive easing)
3. Fix ALL identified issues before the next round
4. Re-run the full checklist

All three rounds must pass before the site is marked ready.
**If the same issue appears across multiple builds, update this SKILL.md to prevent it from recurring.**

---

## 19. Common Build Failure Patterns

> **Sourced from 20+ restaurant builds.** These are recurring failure modes that caused broken builds, visual bugs, or QA failures. Document new failures here after every batch session — this section is the institutional memory that prevents repeating the same mistakes.

### 19.1 Technical Failures

**Tailwind v3 vs v4 mismatch**
- **Symptom:** Styles don't apply, `border-radius` utilities are wrong, unexpected CSS output.
- **Cause:** Next.js default installs Tailwind v4 as of 2025. The skill is written for **v3**.
- **Fix:** Always pin Tailwind v3 explicitly: `npm install tailwindcss@3 postcss autoprefixer --save-dev`. Confirm `package.json` shows `"tailwindcss": "^3.x.x"` before any coding pass. If a sub-agent installs v4, downgrade before proceeding.
- **Prevention:** Include in every sub-agent brief: "Use Tailwind CSS v3 explicitly — do not let npm install v4."

---

**AnimatedCounter not triggering on viewport entry**
- **Symptom:** Stats counters stay at 0, never animate.
- **Cause:** `useInView` from Framer Motion requires the element to be in the DOM before the observer attaches. SSR hydration mismatch or missing `once: true` causes silent failure.
- **Fix:** Use `whileInView` on the wrapper instead of manual `useInView` + `useEffect`, OR ensure `useInView` is called with `{ once: true, margin: '-40px' }` on the ref. Also confirm the component is rendered client-side (`'use client'` at top of file).
- **Correct pattern:**
  ```tsx
  // Preferred — no manual useEffect needed
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-40px' }}
  >
    <AnimatedCounter end={175} suffix="+" />
  </motion.div>
  ```

---

**`app/` vs `src/app/` directory conflicts in Next.js**
- **Symptom:** Pages not found, route collisions, duplicate layouts.
- **Cause:** Next.js 14 supports both `app/` (root) and `src/app/` structures. Sub-agents sometimes create files in `app/` when the project uses `src/app/`, or vice versa.
- **Fix:** At project init, decide ONCE: use `src/app/` (preferred for this skill's structure). Never create files in both. Check the project root before writing any page file.
- **Prevention:** Include in the global setup brief: "Use `src/app/` directory structure. Never create an `app/` directory at the project root."

---

**Missing video poster fallback images**
- **Symptom:** Hero area is black/blank while video loads, especially on slow connections. Layout shift when video starts.
- **Cause:** `<video>` tags without a `poster` attribute show nothing until the video loads.
- **Fix:** Always provide a `poster` attribute on every `<video>` element. Use a still frame from the video or a matching Unsplash image. The `VideoOrImage` component accepts `poster` — always pass it.
- **Correct pattern:**
  ```tsx
  media={{
    type: 'video',
    src: '/video/hero.mp4',
    poster: 'https://images.unsplash.com/photo-XXXXX?w=1920&q=80'
    // poster = first frame or matching still
  }}
  ```

---

**Menu sticky panel too tall on mobile**
- **Symptom:** On 375px–428px devices, the sticky left panel takes up most of the screen, leaving almost no room for the scrollable content.
- **Cause:** `height: calc(100vh - 32px)` on the sticky panel is fine on desktop but overwhelming on mobile.
- **Fix:** On mobile (`< md`), convert the split layout to a vertical stack. The left panel becomes a fixed-height banner, not a full-viewport sticky panel.
- **Correct pattern:**
  ```tsx
  // Desktop: sticky full-height panel
  // Mobile: banner at top, content scrolls below
  <div className="flex flex-col md:flex-row gap-4 p-4">
    <div
      className="w-full md:w-1/2 overflow-hidden rounded-2xl"
      style={{
        height: '40vh', // mobile: banner
        // md: overridden by sticky + full height via inline style below
      }}
    >
  ```
  On mobile, keep the sticky panel under **30vh** (approx 200px on 375px screens) so the user's primary viewport is the scrollable content.

---

**Hero text too large on 375px mobile**
- **Symptom:** Display headline overflows its container, clips, or wraps awkwardly at mobile width.
- **Cause:** `clamp(64px, 10vw, 120px)` resolves to `37.5px` on 375px — which is usually fine — but if the minimum is set too high (e.g., `clamp(80px, 10vw, 120px)`), mobile gets `80px` text that fills the entire screen.
- **Fix:** Always use sensible `clamp()` minimums for hero text. Test at 375px.
- **Correct ranges:**
  ```css
  /* Display headline — section hero */
  font-size: clamp(40px, 8vw, 96px);  /* min 40px, max 96px */

  /* Page title (MENU, ABOUT) */
  font-size: clamp(48px, 8vw, 120px); /* min 48px, max 120px */

  /* Full-image overlay title (FullImageHero) */
  font-size: clamp(60px, 12vw, 160px); /* min 60px ensures impact */
  ```
  Never set a minimum above `64px` unless the text is 1–2 characters (like "RO. MA.").

---

### 19.2 Visual/QA Failures

**All counters in the same section animate simultaneously instead of staggering**
- **Fix:** Add `delay: index * 0.1` to each counter's `whileInView` transition, or stagger at the parent level with `staggerChildren`.

**Instagram grid images all the same aspect ratio (look like a template)**
- **Fix:** Mix portrait (3×4) and landscape (4×3) images in the grid, or use `aspect-square` for all 6 but vary the image content dramatically.

**Footer nav links lead to `#` placeholders instead of real routes**
- **Fix:** Wire every footer link to its real page route before QA pass. `/menu`, `/about`, `/contact` — no `#` placeholders in delivered sites.

**Google Maps embed shows default styling (blue roads, green parks) that clashes with dark theme**
- **Fix:** Apply `filter: grayscale(80%) contrast(1.1) brightness(0.7)` to the iframe. This darkens the map to match dark themes without requiring a Maps API key.

---

## 19.3 Stock Image Sourcing by Cuisine

Use these Unsplash search terms directly in the URL `https://unsplash.com/s/photos/[search-term]`. Replace spaces with hyphens. These have been validated across 20+ builds for producing high-quality, on-brand hero and section images.

**Format for direct use in code:**
```
https://images.unsplash.com/photo-[ID]?w=1920&q=85&auto=format&fit=crop
```

| Cuisine / Venue Type | Hero / Atmosphere Search Terms | Food Close-Up Terms | Interior Terms |
|---|---|---|---|
| **Italian** | `italian restaurant warm`, `trattoria interior evening` | `pasta handmade`, `pizza oven fire`, `pasta carbonara closeup` | `italian restaurant interior warm`, `brick arch restaurant` |
| **Mexican** | `mexican restaurant colorful`, `cantina interior` | `tacos street food`, `guacamole fresh`, `enchiladas plate` | `Mexican restaurant interior`, `hacienda dining` |
| **BBQ / Smokehouse** | `smokehouse interior`, `bbq restaurant rustic` | `smoked brisket`, `bbq ribs grill`, `pulled pork sandwich` | `wood paneled restaurant`, `industrial bbq interior` |
| **Vietnamese / Asian** | `vietnamese restaurant`, `asian restaurant minimal` | `pho bowl steaming`, `banh mi sandwich`, `spring rolls fresh` | `vietnamese restaurant interior`, `lantern restaurant` |
| **Greek / Mediterranean** | `greek taverna`, `mediterranean restaurant exterior` | `gyros souvlaki`, `hummus pita plate`, `greek salad` | `whitewashed restaurant`, `mediterranean dining` |
| **Seafood / Waterfront** | `waterfront restaurant`, `coastal dining exterior` | `lobster dinner`, `fresh oysters`, `grilled salmon plate` | `nautical restaurant interior`, `harbor restaurant` |
| **American Diner** | `retro diner exterior`, `classic american diner` | `diner breakfast plate`, `pancakes syrup`, `burger and fries diner` | `retro diner interior`, `diner booth seats chrome` |
| **Pub / Bar (neighborhood)** | `pub interior wood`, `british pub evening` | `craft beer taps`, `bar food wings`, `fish and chips` | `pub interior warm`, `tavern fireplace` |
| **Sports Bar** | `sports bar tvs`, `game day bar crowd` | `buffalo wings beer`, `nachos game day`, `stadium food` | `sports bar interior screens`, `bar stools sports` |
| **Brewery / Ale House** | `craft brewery interior`, `taproom evening` | `craft beer pint`, `brewery equipment copper`, `beer flight` | `industrial brewery interior`, `exposed brick taproom` |
| **Speakeasy / Cocktail Bar** | `speakeasy bar dark`, `cocktail bar moody` | `cocktail garnish`, `whiskey glass amber`, `old fashioned cocktail` | `dark bar interior`, `intimate cocktail lounge` |
| **Fine Dining** | `fine dining restaurant evening`, `upscale restaurant dark` | `chef plating food`, `steak fine dining`, `elegant dessert plate` | `fine dining interior chandeliers`, `upscale restaurant decor` |
| **Saloon / Western** | `western saloon bar`, `rustic bar wood` | `whiskey bottle rustic`, `steak cowboy`, `bbq western` | `saloon interior wood`, `western bar decor` |
| **Brunch / Café** | `brunch cafe morning`, `coffee shop natural light` | `avocado toast brunch`, `eggs benedict plate`, `coffee latte art` | `cafe interior plants`, `brunch restaurant bright` |

**Tips for sourcing:**
- Always download at `w=1920&q=85` for hero images, `w=800&q=80` for inline food images.
- Prefer photos with warm tones (golden hour, candlelight, tungsten) for dark-themed sites.
- For light-mode sites (Trattoria), prefer bright/airy images with natural daylight.
- Avoid stock photos with visible text, branded cups, or recognizable restaurant signage.
- Mix close-up food shots with wide interior/atmosphere shots — never all of one type.
- Credit Unsplash photographers in code comments (good practice), but no in-page attribution needed for free tier.

---

## Appendix: Known Anti-Patterns (NEVER DO)

```
❌ Glass/backdrop-blur quote cards overlaid on images — text becomes illegible
   → Use solid-background card instead

❌ Two filled (non-outline) CTA buttons side by side
   → Always: one filled, one outline

❌ Section padding less than py-24 (96px) as a default
   → Minimum py-24, prefer py-32 or py-40 for hero moments

❌ Rounded corners less than 14px on cards
   → Cards: 14-16px. Containers: 48px. Never 4px or 8px.

❌ Using CSS Grid for Qitchen-style bento layout
   → It's FLEXBOX. flex-direction: row. flex: 3 and flex: 1.

❌ Adding autoplay attribute without muted — browsers block it
   → Always: autoPlay muted playsInline loop

❌ Dark overlay opacity > 50% on hero images
   → Max: bg-black/50. The image must breathe.

❌ Same border-radius on all elements (e.g., rounded-full on everything)
   → Use the radius scale: 48px outer, 16px cards, 10px buttons, 60px pills

❌ Using inter-medium (500) or bold (700) for display headlines
   → Display serif = 400 or 500. Weight kills elegance.

❌ Building multiple pages before the global layout (nav/footer/globals) is done
   → Global Pass ALWAYS first.

❌ Text-only menu items with no images
   → Every menu item gets a small inline image (64×64, rounded-10)

❌ Hero with no animation — static on load
   → Title must animate in (opacity + y transform) on mount

❌ Nested glass/translucent effects throughout the UI
   → One glass element max (nav pill). Everything else: solid backgrounds.

❌ Marquee with CSS animation-direction: reverse or step timing
   → Marquee: linear, infinite, -50% translateX. Nothing else.

❌ All-centered layout on every page
   → Mix centered (hero, CTA) with left-aligned (story, menu) — creates rhythm

❌ Using accent color for body text
   → Accent = labels, prices, borders, dividers. Body text = cream/dark
```

---

*This skill is the canonical build bible for all restaurant/bar websites built by the agency. Version 2.3 incorporates exact structural data extracted from live Framer templates (Qitchen, Veloria, Roma, Heavenpalate, Bamzi, Bramble, Craving, Cuisine) plus the 2026-04-02 HTML/CSS extraction confirming exact pixel values. v2.3 adds: Restaurant-Type-to-Theme Matching Guide (Section 6.9), Same-Cuisine Differentiation Rules (Section 6.10), Common Build Failure Patterns (Section 19), and Stock Image Sourcing by Cuisine (Section 19.3) — sourced from 20+ production builds. Update when new patterns are proven in production.*
