# Lead-Fit Qualification

> Pre-build checklist for the speculative-outbound workflow. Catches register
> mismatches and "they don't actually need a new site" cases BEFORE we burn
> 2–3 hours on a fork. Lessons from the Walnut Speakeasy build (2026-04-22)
> baked in throughout — see `feedback_lead_fit_qualification.md` for the
> origin story.

The "we already built yours" GTM motion (`project_agency_pitch_and_gtm.md`)
gets its leverage from speed: fork → deploy → DM in <1hr per prospect. That
speed only pays off if the prospect actually fits. A bad fit either (a)
oversells the room — owner sees their place misrepresented and balks — or
(b) re-skins a working site with no clear improvement, so the owner has no
reason to switch.

This document is the pre-flight check that prevents both failure modes.

---

## When to run this

- Before opening a code editor for any new lead.
- Even if the lead doc says "STRONGEST match" or "pitch-ready." Treat those
  notes as hypotheses, not green lights.
- Time budget: **5–8 minutes per lead**. If you can't get through it that
  fast, the lead is too information-poor to qualify either way — gather
  more data or skip.

---

## The 7 checks

### 1. Visual-reality check (NON-NEGOTIABLE)

**Look at their actual photos and video.** Yelp + Google Business + Facebook
+ Instagram + any embedded site video. Sample 8–12 images that include:

- Exterior / signage
- Interior at peak hours (the room with people in it)
- Bar / counter area
- Plated food on real tables
- Staff at work

Ask: **does the room feel like the brand name suggests?** A name like
"Speakeasy" or "Bistro" or "Trattoria" can be aspirational marketing copy
laid over a fundamentally different operation. The Walnut Speakeasy is
named like a craft cocktail bar; the photos show slot machines, big
sports-bar seating, and regulars in baseball caps.

**Failure mode this catches:** picking a register-LIFT template that
overshoots the actual brand by 2+ levels. Per
`research/restaurant-website-strategic-principles.md` §1.2, overselling
is the worse failure — guests price themselves out and don't come at all.

### 2. Menu pricing register check

Pull their actual menu (most have it on the existing site or a delivery
platform). Sample 6–10 items across categories. Compute the rough average
entrée price and look at what the cheapest + most expensive items are.

Then map to the aesthetic-to-bill ladder in
`restaurant-website-strategic-principles.md` §1.2:

| Average entrée | Likely register | Templates that fit |
|---|---|---|
| $5–15  | $    | latte, pepper |
| $15–30 | $$   | plate, bramble, bamzi |
| $30–60 | $$-$$$ | gusto, varro, labrisa, velvet-shaker (cocktail-led) |
| $60–120 | $$$  | 1776, alinea (lower tiers) |
| $120+ | $$$$ | alinea (upper tiers), qitchen |

If the actual register is more than 1 step below the candidate template,
**downgrade the template choice** (or skip the lead).

### 3. Customer-review tone check

Open Yelp + Google Reviews. Skim 8–15 recent reviews. What WORDS do regulars
use to describe the place?

- "elegant," "intimate," "refined" → upscale register confirmed
- "cozy," "neighborhood," "regulars" → mid-register, heritage signal
- "fun," "great wings," "wing night," "watch the game" → casual / sports-bar
- "kid-friendly," "family," "birthday parties" → family casual

If reviews paint a clearly different register than the template suggests,
flag the mismatch.

### 4. Current-site quality check (be honest)

Open their current site on desktop AND mobile. Score 1–10 against:

- **Above-the-fold clarity** (do you understand the place in 5 seconds?)
- **Reservation friction** (how many taps to book a table?)
- **Menu access** (can you see prices without downloading a PDF?)
- **Mobile usability** (does it actually work at 390px wide?)
- **Trust signals** (hours, address, phone visible?)

A site that scores 6+/10 is "fine, just not great." A site that scores
≤4/10 is "broken" — the case for replacement is clear. Mid-pack sites
(5–6) are the danger zone: technically there's room to improve, but the
owner's incentive to switch is weak. The Walnut's SpotHopper site scores
~6 — does its job, has the features, just looks generic.

**Apparent platform footer text is a strong signal.** "Powered by SpotHopper
/ BentoBox / Square / Toast Sites" usually means the owner is paying
$50–200/mo for a managed solution they didn't build. Switching costs are
real (DNS, ordering integration, reservation embed) and the case has to
be strong.

### 5. The "why would they switch?" check

Write ONE concrete sentence answering:

> "If [Restaurant] saw our redesign, the specific reason they'd want to
> swap their current site is _______."

Acceptable answers:

- "Their site has a 5-second cookie modal popup that blocks the hero on
  every visit." (Walnut: yes, this was real — but a single-issue fix,
  not a full redesign justification)
- "They have no online reservation flow on mobile and customers DM them
  to book." (real conversion lift)
- "Their menu hasn't been updated since 2019 per the Wayback Machine."
- "Their photography is dish-in-fluorescent-light and kills appetite."

UNacceptable answers:

- "It looks dated." (so what — does it cost them bookings?)
- "We can make it look more premium." (only if the brand IS more premium)
- "Modern design." (vague)

If you can't write a concrete sentence, the lead doesn't pass.

### 6. Switching-cost / inertia check

Quick scan for:

- Existing reservation system (OpenTable / Resy / Tock / SpotHopper /
  in-house) — switching has technical cost
- Existing online ordering integration (Toast / SkyTab / DoorDash white-label)
  — same
- Apparent active marketing on current site (recent blog posts, recent
  menu updates, active Instagram links to the site)
- Multi-location vs single-location (multi = more decision-makers, harder
  to close)

A heavily-integrated existing site means the prospect has BOTH financial
sunk cost AND technical re-platforming cost. The redesign has to be
clearly worth it.

### 7. The "would I personally eat here?" pitch test

Final sanity check: read your proposed redesign's home-page hero copy
out loud, then look at the prospect's interior photos. Do the two things
read as the same place?

If your hero says "craft cocktails and a kitchen with character" and
the photos show slot machines and sports on TVs, you're misrepresenting
the brand. Owner will sense it within 5 seconds of opening your DM.

---

## Decision matrix

| Visual fit | Site quality | Switch reason | Decision |
|---|---|---|---|
| ✓ matches | ≤4/10 | concrete | **Build it.** Highest priority. |
| ✓ matches | 5–6/10 | concrete | Build, but lead the pitch with the specific failure you're solving. |
| ✓ matches | 5–6/10 | vague | Skip. Find a higher-conviction lead. |
| ✗ mismatch | any | any | Skip OR re-route to a different template that DOES match. |
| ✓ matches | 7+/10 | any | Skip. They're doing fine without us. |

---

## Walnut Speakeasy — worked example (the failure mode)

| Check | Walnut Speakeasy |
|---|---|
| 1. Visual reality | **FAIL.** Photos show slot machines, big bar seating, sports-bar register. Name is "speakeasy" but operation is casino-bar-with-Greek-American-food. velvet-shaker-01 oversold by ~2 registers. |
| 2. Menu pricing | $14–22 entrées, $1.65 wings, $20.99 fish fry. Solidly $$ casual. velvet-shaker-01 sits at $$$. |
| 3. Review tone | "Great wings," "fun atmosphere," "wing nights," "fish fry crew." Casual / regulars language, not "intimate / refined." |
| 4. Current site | SpotHopper template. Cookie modal is annoying but the site has menu, reservation form, online ordering, party booking, daily specials — scores ~6/10. |
| 5. Why switch | **Vague.** "Theirs looks dated" doesn't pass. The cookie modal is real but a single fix, not a redesign case. |
| 6. Switching cost | High. SpotHopper handles reservations + marketing emails. SkyTab handles ordering. Owner has to re-platform reservations + ordering to switch. |
| 7. Would-I-eat-here test | **FAIL.** Our redesign reads as Lan Kwai Fong cocktail bar. Their photos read as Elgin neighborhood sports bar. Completely different rooms. |

**Verdict:** Walnut should have been deprioritized at check 1. The build
shipped (`~/agency-forks/walnut-speakeasy-01/`) and is a fine craft
exercise, but it's an unlikely close. We'll pitch it anyway — sunk cost
is sunk — but it's no longer the speculative-outbound flagship.

---

## Re-evaluating the existing 20-lead doc

The lead doc at `~/.claude/plans/do-research-on-algonquin-modular-lamport.md`
was written against the paper rubric only. Each remaining lead should be
re-scored through this checklist before any further fork work. Highest-
risk-of-mismatch candidates from a quick re-read:

- **#4 Lone Buffalo (Tangled Roots Brewing Co)** — brewpub. Routed to
  bramble-01 (light retro cocktail-bar-with-food). Brewpubs are usually
  much more casual than retro cocktail bars — likely register-LIFT mismatch.
- **#10 The Barn Steakhouse** — name says steakhouse, routing assumed
  destination 1776-class. Must check actual photos before assuming.
- **#15 Martini Room** — "drag shows + dance floor" → routed to bramble-01.
  Entertainment-heavy venue is plausibly fine for bramble, but verify.
- **#18 Bleuroot** — farm-to-table → 1776-redesign-01. Plausible match but
  needs visual confirmation.

Highest-confidence candidates to keep on deck:

- **#5 Da Baffone Cucina Italiana** — verified Best Italian + Best Wine
  Bar McHenry County, brick walls, southern Italian. gusto-01 is a clean
  register-match. Pass on reality check by name + awards.
- **#19 Taylor Street Pizza** — Slice white-label is a hard-cap-bad
  current site (white-label = no brand identity). pepper-01 is a clean
  register-match. Pass.

Recommend running the full 7-check on each remaining lead before any next
build. ~10 min × 19 = ~3hrs of qualification, but saves the next 2–3
mismatched-fork builds.

---

## Cross-references

- `restaurant-website-strategic-principles.md` §1.2 (aesthetic-to-bill ladder),
  §7.1 (5 business-model questions)
- `project_agency_pitch_and_gtm.md` (the GTM workflow this gates)
- `feedback_lead_fit_qualification.md` (memory entry — load when re-applying)
- `feedback_design_vs_conversion_principle.md` (related: hard conversion floor)
