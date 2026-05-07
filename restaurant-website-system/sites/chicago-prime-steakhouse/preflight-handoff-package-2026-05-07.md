# Chicago Prime Steakhouse — preflight handoff package

- Date: 2026-05-07
- Status: **internal handoff / preflight only**
- Canonical position: seed-ready with local evidence through internal `pitch` / `battle_cards`; **not build-authorized** and **not delivery/packaging-complete**
- Required archetype: **Heaven Palate**
- Current hard blockers: protected Mission Control agency API returns `401`; founder approval, MC root/child workflow provisioning, owner confirmations, owner-approved media, preview authorization, and Heaven Palate source/template mapping remain pending.

## Purpose

This package gives the next agency worker one place to resume Chicago Prime Steakhouse without re-reading every artifact first. It consolidates what is complete, what is blocked, what must be attached to Mission Control when auth is restored, and what must not be said publicly yet.

This is **not** an owner-facing deliverable and not permission to build, publish, contact the restaurant, or perform raw Supabase writes. No raw Supabase writes were performed.

## Current state in one paragraph

Chicago Prime Steakhouse is a strong premium-steakhouse lead in Schaumburg with local evidence through seed validation, official-site audit, Google Reviews packet, Heaven Palate routing, non-build-authorized builder brief, founder decision brief, and sales battle cards. The business has strong sellable assets — OpenTable reservations, private dining rooms, steak/seafood/wine positioning, live lounge music, a family-owned hospitality story, and George A. Kalkounos legacy — while the current site leaks trust through visible template residue and weak conversion hierarchy. The work is still blocked from MC execution and owner-facing use because protected MC agency workflow auth is unauthorized and owner/founder gates have not cleared.

## Merged local artifact ledger

| Gate / purpose | Artifact | Current use | Notes |
| --- | --- | --- | --- |
| Seed/provisioning | `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json` | MC provisioning request | Pending API auth and founder approval. |
| Seed research | `restaurant-website-system/sites/chicago-prime-steakhouse/research/build-readiness-seed-brief-2026-05-07.md` | Source packet | Seed-ready, not build-ready. |
| Official-site audit | `restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md` | Audit evidence | Local only until MC attach works. |
| Google Reviews | `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md` | Review evidence/theme source | Captured by browser; do not publish ratings/quotes without approved sourced placement. |
| Routing | `restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md` | Template route | Locks `template_slug` to Heaven Palate. |
| Builder brief | `restaurant-website-system/sites/chicago-prime-steakhouse/builder-implementation-brief-2026-05-07.md` | Future build brief | Explicitly not build authorization. |
| Founder decision | `restaurant-website-system/sites/chicago-prime-steakhouse/outreach/founder-seed-decision-brief-2026-05-07.md` | Internal founder decision support | Do not send externally without Ethan approval. |
| Battle cards | `restaurant-website-system/sites/chicago-prime-steakhouse/battle-cards-2026-05-07.md` | Sales/demo objections | Not owner-facing yet. |

## Pending Mission Control writeback payloads

Replay these only through approved MC agency APIs after auth/provisioning is restored. Do not raw-write Supabase.

1. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json`
2. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-audit-evidence-writeback-pending-2026-05-07.json`
3. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-routing-writeback-pending-2026-05-07.json`
4. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-builder-brief-writeback-pending-2026-05-07.json`
5. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-sales-assets-writeback-pending-2026-05-07.json`
6. `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-preflight-handoff-writeback-pending-2026-05-07.json`

## Canonical gate status

| Gate | Local status | MC status | Resume instruction |
| --- | --- | --- | --- |
| claimed/checklist | Seed/provisioning request exists; checklist cannot be finalized without MC lead/root IDs. | Blocked by API auth/provisioning. | Provision canonical root/children first, then generate checklist with MC IDs. |
| auditing | Official-site audit and screenshot/text evidence exist locally. | Pending attach. | Attach evidence/writeback to auditing child task once MC exists. |
| reviews | 30 written Google reviews and browser screenshot evidence exist locally. | Pending attach. | Attach review packet; keep direct ratings/quotes owner-approved only. |
| routing | Heaven Palate routing decision exists locally. | Pending attach. | Write `template_slug: Heaven Palate` to MC routing child/root metadata. |
| building | Builder brief exists locally. | Not authorized. | Do not fork/build until founder approval, MC workflow, owner confirmations, and Heaven Palate source mapping clear. |
| improving/top_3/concierge | Not started. | Not authorized. | Requires preview/build first. |
| pitch | Internal founder decision brief exists locally. | Pending attach. | Attach as future pitch child artifact; do not send owner-facing yet. |
| battle_cards | Internal battle cards exist locally. | Pending attach. | Attach as future battle_cards child artifact; do not use externally yet. |
| qa_round_1/2/3 | Not started. | Not authorized. | Requires preview URL and screenshot evidence. |
| packaging/delivered | Not started. | Not authorized. | This preflight package is not final packaging; it only helps resume. |

## Known public facts to preserve

- Business name: Chicago Prime Steakhouse.
- Official site: `https://www.chicagoprimesteakhouse.com/`
- Address: 1444 E. Algonquin Road, Schaumburg, IL 60173.
- Phone: `847.969.9900`.
- Dining room hours snapshot: Monday–Saturday 3PM–10PM; Sunday 3PM–9PM.
- OpenTable reservation path snapshot: `https://secure.opentable.com/chicago-prime-steakhouse-reservations-schaumburg?restref=36475`.
- Private dining email snapshot: `events@chicagoprimesteakhouse.com`.
- Private dining room/capacity snapshot: Main Dining Room 130, Bar & Lounge 80, Walnut & State Room 85, Walnut Room 32, State Room 35.
- Live entertainment snapshot: Wednesday–Saturday 7PM–11PM on live entertainment page, with Tuesday–Saturday conflict in private dining text.
- Current source positioning: family-owned Prime Steakhouse in the Northwest Suburbs; personal touch; outstanding cuts of meat, seafood, chops; cigar-friendly outdoor covered patio; service and quality.
- Order provider snapshots: Uber Eats, Grubhub, Toast.
- Google summary visible at review capture: `4.4 · 1,191 reviews`.

## Owner/founder confirmations still required

These are blockers for public preview, build, and sales use:

1. Founder approval to seed/provision this lead and whether speculative pre-MC preview work is allowed.
2. Heaven Palate build source/template mapping.
3. Owner-approved image rights for exterior, dining room, bar/lounge, patio, private rooms, food, wine/cocktails, and legacy imagery.
4. Current hours and reservation URL.
5. Current menu/full-menu/PDF paths and whether item-level content/prices may be shown.
6. Private dining room names, capacities, packages, policies, inquiry form, and `events@...` use.
7. Live entertainment schedule: Wednesday–Saturday vs. Tuesday–Saturday.
8. Use of “award-winning,” wine-selection claims, rating/review counts, and direct review quotes.
9. Preferred tone and permissions for George A. Kalkounos legacy story.
10. Current provider links for Uber Eats, Grubhub, Toast, gift cards, club, socials, and directions.

## Truth-safety and sales guardrails

Do not say or publish:

- “Award-winning” without approved wording.
- A Google rating/review count unless approved and sourced in the preview.
- Direct Google review quotes unless approved and source-linked/permission-safe.
- Private dining capacities, room names, minimums, packages, or policies without owner confirmation.
- Live music schedule until the source conflict is resolved.
- Menu prices or detailed item claims unless currentness is confirmed.
- Stock or scraped images as if they are restaurant-owned.
- Any wording that makes the George legacy story feel exploitative or overly mournful.

## Recommended next unblocked action when MC auth returns

1. Provision the root and child workflow from `canonical-workflow-provisioning-request-2026-05-07.json`.
2. Generate/refresh `checklist.md` and `checklist.json` after MC lead/task IDs exist.
3. Attach local audit, reviews, routing, builder brief, pitch, battle cards, and this handoff package to the appropriate child tasks.
4. Set root `metadata.build_stage` / `metadata.currentStage` to the first incomplete canonical gate that MC agrees is incomplete.
5. Resolve Heaven Palate source mapping before assigning a builder.
6. Only then decide whether to authorize building/forking.

## Recommended next truth-safe local action if MC auth remains blocked

If no MC auth and no owner approval are available, the only safe local work left is implementation-readiness support, such as:

- Create or refresh the future developer handoff checklist for the Heaven Palate fork.
- Prepare a QA readiness rubric for the future preview, clearly marked “not run.”
- Verify source artifact links and screenshot paths after branch merges.
- Research/seed a different unblocked restaurant lead if Mission Control has no active executable website and Ethan wants fresh agency targets.

## Stop conditions

Stop and ask Ethan / wait for MC if the next action would require any of the following:

- Contacting the restaurant or owner.
- Publishing or sharing a preview.
- Using protected MC APIs without auth.
- Writing directly to Supabase to bypass MC agency APIs.
- Claiming ratings, awards, photo rights, private dining details, menu details, live schedules, or ordering paths that are not confirmed.

## Handoff verdict

Chicago Prime Steakhouse is well-prepared for an MC-backed build decision, but it should remain internal until the operational gates clear. The local artifact stack is strong enough that the next authorized worker should be able to provision, attach evidence, resolve the Heaven Palate source mapping, and brief a builder without redoing research.
