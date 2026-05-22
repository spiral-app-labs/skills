---
name: restaurant-lead-opportunity-scoring
description: Score and prioritize restaurant website agency leads. Use when discovering restaurant prospects, running Evan/OpenClaw lead cron jobs, deciding whether a restaurant belongs in the CRM, computing opportunity scores, writing lead seed payloads for /api/agency/leads, or explaining why a lead should be built, skipped, re-routed, or blocked.
---

# Restaurant Lead Opportunity Scoring

Use this skill to find and score restaurant leads for Ethan's website agency CRM. The goal is not to find the "best" restaurants. The goal is to find restaurants where a better website is likely to create a clear sales opportunity.

Mission Control is the source of truth. This skill creates scored lead evidence and CRM-ready payloads. It does not start website builds.

## Workflow

1. Gather public evidence.
2. Reject bad-fit or thin-evidence leads early.
3. Score the lead with the 100-point rubric.
4. Write a plain-English opportunity reason.
5. Prepare a CRM upload packet.
6. Upload only through Mission Control APIs when auth is available.

Never use raw Supabase writes for lead discovery.

## Target Markets

Default geography:

- Chicago neighborhoods with strong dining demand.
- North Shore, northwest, and western Chicago suburbs.
- Nearby Illinois/Wisconsin/Indiana markets only when the assignment says to expand.

Best-fit restaurant types:

- reservation-driven bistros,
- Italian/trattoria,
- steakhouses,
- seafood/coastal,
- cocktail and wine bars,
- cafes, bakeries, brunch, and dessert concepts with strong local demand,
- catering, private-event, or multi-service restaurants,
- independent restaurants with strong reputation and weak digital presentation.

Lower-priority restaurant types:

- national chains,
- already-polished restaurant groups,
- restaurants whose current site is already excellent,
- businesses with no clear contact path,
- very low-review restaurants unless the current site is broken or the owner path is warm,
- Mexican/Latin leads unless there is a strong close reason, warm referral, no owned website, broken site, or a template-quality gap worth studying.

## Evidence To Collect

Use public sources only. Capture enough evidence to defend the score:

- restaurant name,
- city and state,
- current website URL or `no_owned_site`,
- Google rating and review count when available,
- menu price/register signals,
- reservation/order/catering/private-event signals,
- contact phone, email, form, or social DM path,
- current-site quality notes,
- screenshots or local notes path when available,
- why-switch sentence,
- recommended template or archetype,
- disqualification reasons if any.

Do not invent contacts, reviews, menu facts, owner names, availability, or revenue claims.

## Early Rejection

Skip or block before scoring when:

- the restaurant cannot be confidently identified,
- there is no public proof that it is open or operating,
- the website and brand are already very strong with no clear switch reason,
- the business is a chain or corporate group outside current scope,
- the lead has no usable public evidence,
- the restaurant type would be misrepresented by current templates.

Use `Blocked` when evidence is temporarily unavailable but the lead might be good. Use `Skip` when the lead is not worth CRM attention.

## Opportunity Score

Score every lead from 0 to 100. A high score means "worth Ethan's sales attention."

| Category | Points | How to score |
| --- | ---: | --- |
| Current-site opportunity gap | 25 | Bad mobile UX, weak hero, unclear menu, missing CTA, broken site, no owned site, slow site, weak trust basics. A worse site can score higher here. |
| Revenue fit | 20 | Reservations, catering, events, private dining, premium menu prices, strong dinner traffic, or high-margin offers. |
| Reputation demand | 15 | Healthy Google rating, meaningful review count, strong review language, appealing food/room photos, visible customer love. |
| Contactability | 15 | Owner/manager email, phone, contact form, social DM path, domain clues, or public business contact. |
| Independence/switchability | 10 | Not locked into a strong vendor site, or has a clear reason to switch from Toast, SpotHopper, BentoBox, Wix, Square, etc. |
| Template/content fit | 10 | Existing photos/menu/story can map cleanly to an agency template without misrepresenting the restaurant. |
| Market priority | 5 | Geography, niche, timing, and sales accessibility fit current agency priorities. |

Important: `current_site_gap` is an opportunity score, not a website quality score. A polished current site usually lowers the opportunity score.

## Decision Bands

- `80-100`: Priority lead. Upload if evidence is solid.
- `65-79`: Good lead. Upload when contact path and switch reason are clear.
- `50-64`: Maybe/nurture. Upload only if the assignment asks for volume or a niche sample.
- `<50`: Skip unless there is a warm path or unusually strong strategic reason.

Lead-fit decision:

- `Build`: Strong score, clear switch reason, enough evidence.
- `Re-route`: Restaurant is real and interesting, but the likely template/archetype should change.
- `Skip`: Not worth CRM attention right now.
- `Blocked`: Evidence is too thin or a public source is inaccessible.

## Required Score Object

Use this shape in `lead.scores`:

```json
{
  "composite": 82,
  "opportunity": 24,
  "current_site_gap": 22,
  "revenue_fit": 17,
  "reputation_demand": 12,
  "contactability": 13,
  "switchability": 8,
  "template_fit": 8,
  "market_priority": 2,
  "version": "restaurant-lead-opportunity-scoring:2026-05-16"
}
```

`composite` must be the sum of the seven category scores. `opportunity` may mirror `current_site_gap` until Mission Control adds a separate server-side opportunity-score field.

## Plain-English Explanation

Write one short explanation that Ethan can read fast:

```text
High score because the restaurant has strong review demand and premium dinner traffic, but the mobile site hides menu/reservation actions and the homepage does not show the room or signature dishes.
```

Also write one why-switch sentence:

```text
The owner would switch because the current site makes it harder to book, inspect the menu, and trust the room than the public reputation deserves.
```

## CRM Upload Packet

Until Mission Control exposes a batch import endpoint, upload proposed leads one at a time through `POST /api/agency/leads`.

Use this body shape:

```json
{
  "type": "restaurant_lead_discovery",
  "source": "openclaw_lead_cron",
  "proposed_by": "evan",
  "created_at": "<iso-timestamp>",
  "evidence_paths": [
    "archive/restaurant-website-system/research/leads/<batch-id>/example-restaurant.md"
  ],
  "public_source_summary": {
    "search_area": "Chicago northwest suburbs",
    "query": "reservation restaurant weak website",
    "sources_checked": ["Google Maps", "restaurant website", "public social/profile pages"]
  },
  "lead": {
    "business_name": "Example Restaurant",
    "site_slug": "example-restaurant",
    "city": "Chicago",
    "state": "IL",
    "current_website_url": "https://example.com",
    "google_rating": 4.5,
    "review_count": 412,
    "phone": "+1-312-555-0100",
    "contact_email": "hello@example.com",
    "recommended_template_slug": "qitchen-01",
    "recommended_archetype": "Qitchen",
    "category": "Italian restaurant",
    "lead_fit": "Build",
    "priority_reason": "Strong reviews and premium dinner fit, but the mobile site buries reservations and menu proof.",
    "scores": {
      "composite": 82,
      "opportunity": 24,
      "current_site_gap": 22,
      "revenue_fit": 17,
      "reputation_demand": 12,
      "contactability": 13,
      "switchability": 8,
      "template_fit": 8,
      "market_priority": 2,
      "version": "restaurant-lead-opportunity-scoring:2026-05-16"
    },
    "metadata": {
      "score_explanation": "Strong restaurant and weak mobile conversion path.",
      "why_switch_sentence": "The owner would switch because the current site makes it harder to book, inspect the menu, and trust the room than the public reputation deserves.",
      "no_owned_site": false,
      "disqualification_reasons": []
    }
  }
}
```

Create proposed leads with `status=lead` only. Do not set `in_progress` from discovery. Do not provision website workflow tasks from discovery.

## Batch Notes

For every discovery run, write a local batch note under:

```text
archive/restaurant-website-system/research/leads/<YYYY-MM-DD>-<market-or-theme>/
```

Each lead note should include:

- source URLs checked,
- score breakdown,
- score explanation,
- why-switch sentence,
- evidence gaps,
- final decision.

If auth is missing, save the upload payload locally and record an auth blocker through heartbeat. Do not silently call the batch complete.

## Mission Control Rules

- Mission Control ranks leads. Evan supplies evidence and scores.
- Discovery creates `lead` rows only.
- Website builds start only when Mission Control transitions a specific lead to `in_progress`.
- Deduplicate by `site_slug`, then by name/city/state.
- A `409` duplicate response is not a failure; record it and continue.
- A `401` or `403` auth response stops the run.

