# Active website-agency blockers recheck — 2026-05-07T13:32Z

- Date: 2026-05-07T13:32Z
- Operator: Evan heartbeat
- Scope: Mission Control website-agency roots + public preview spot-checks
- Mode: read-only diagnosis / local evidence only
- MC planner result: blocked by auth
- Raw agency writes: **none**
- No raw Supabase agency mutation was performed.

## Planner/auth check

Attempted canonical planner first, per `HEARTBEAT.md`:

- Endpoint: `GET /api/agency/website-workflow/next?limit=5`
- Base: `https://hq.ethantalreja.com`
- Runtime header: `x-agency-runtime: openclaw`
- Credential state: no `AGENCY_AUTONOMY_API_KEY` and no `OPENCLAW_WEBHOOK_SECRET` in heartbeat shell
- Result: `HTTP 401 {"ok":false,"error":"Unauthorized."}`

Conclusion: protected agency planner/provisioning is still unavailable from this runtime. Continue only with read-only diagnosis and local evidence artifacts until scoped agency auth exists.

## Active root scan snapshot

Read-only Supabase fallback queried root epics where:

- `tasks.metadata.namespace == "agency_website_workflow"`
- `tasks.metadata.workflow_role == "root"`
- ordered by `updated_at desc`, limit `20`

Latest active/non-delivered roots observed:

| Root task | Status | Stage | Site slug | Current blocker |
| --- | --- | --- | --- | --- |
| `377dcee1-820a-4d94-a5b1-0740be57c92c` — Website: The Graceful Ordinary | `in_progress` | `qa_round_3` | not set on root metadata | PR preview/public route mismatch; public stable URL remains stale and factually unsafe. |
| `3ae4091c-c686-4270-8298-afd0cc5c913b` — Website: Als Cafe and Creamery | `in_progress` | `checklist` | `als-cafe-and-creamery` | Qualification/template gap: heritage-Americana diner/creamery in 1892 Victorian building does not fit current archetypes. |
| `173436b8-bcc1-4ebd-85ac-44b2541409dc` — Website: Tin Man's Pub | `in_progress` | `auditing` | `tin-man-s-pub` | Weak/unsafe fit: no obvious owned site, sparse proof, inconsistent/political reputation signals, thin menu proof. |
| `b19181d6-a00f-4d82-9c38-707c9dcb5372` — Website: Tasty Bistro | `in_progress` | `auditing` | `tasty-bistro` | Operating-status blocker: original Crystal Lake location appears temporarily closed/consolidated into Tasty Sushi/Cary. |
| `e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc` — Website: Sofia's Place Restaurant | `in_progress` | `reviews` | `sofia-s-place-restaurant` | Address/order-path mismatch: Wauconda vs Island Lake public-source conflict needs owner/founder confirmation. |

Recently delivered roots visible in the same scan included `b5ce710c-c4b4-431e-a258-82fb71ab60a0` (`sushi-u`), `28641d8b-ed9c-4fc3-9326-9c3436bbdc31` (`snuggery-river-roadhouse`), `cc4330f0-b3e9-4ed5-8036-292649576916` (`restaurante-hondure-o-bustillo-matute`), `6eb6cf29-eaf5-4751-8aab-3dc5f827e40e` (`main-street-tacos`), `0ee079ce-2e26-4d44-8fdf-96e0db2e4047` (`marys-mexican-grill`), and `216314e9-4af6-4f99-92ab-54e7912b9173` (`strawberry-moon`).

## The Graceful Ordinary public stable recheck

Rechecked public stable URL because it is the most advanced active root:

- URL tested: `https://graceful-ordinary-redesign.vercel.app/?_ocache=20260507T1333`
- HTTP status: `200`
- `x-vercel-cache`: `HIT`
- `age`: `105073`
- `etag`: `"8f2080097fe425b85be4d2db30022521"`
- `content-length`: `29070`

Stale/factually unsafe markers still present in HTML:

- `4.8` present
- `200+` present
- `AAA Three-Diamond` present
- `TripAdvisor` present
- `info@thegracefulordinary.com` present

Expected corrected/final markers still absent from this stable response:

- `yourfriends@thegracefulordinary.com` absent
- `Ask Graceful` absent
- `https://resy.com/cities/stc/the-graceful-ordinary` absent

Conclusion: The Graceful Ordinary should remain blocked at public/stable QA. Do not package or founder-share from `https://graceful-ordinary-redesign.vercel.app/` until the public stable deployment points at the corrected build or a verified shareable preview is approved.

## Region Kitchen and Bar local packet status

Region Kitchen and Bar is not yet a canonical MC root because protected agency provisioning auth is unavailable. Locally, however, the pre-build packet is now complete enough to attach once MC can provision it:

- Lead validation: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-seed-validation-2026-05-07.md`
- MC seed payload: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-mc-seed-payload-2026-05-07.json`
- Current-site R1 audit: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07.md`
- Current-site browser evidence: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r1-current-site-audit-2026-05-07/`
- Google reviews packet: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-highest-30-2026-05-07.md`
- Google reviews JSON: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-google-reviews-2026-05-07/region-google-reviews-highest-30-2026-05-07.json`
- R2 builder brief: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-r2-build-brief-2026-05-07.md`
- Founder pitch: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-founder-pitch-2026-05-07.md`
- Battle cards: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-battle-cards-2026-05-07.md`
- Checklist: `restaurant-website-system/sites/region-kitchen-and-bar/checklist.md` and `restaurant-website-system/sites/region-kitchen-and-bar/checklist.json`

Important: this local packet does **not** authorize build/fork work. MC must first create the canonical root and child tasks, mirror checklist paths/evidence, and set the workflow stage.

## Recommended next unblock actions

1. Provide scoped agency runtime auth to heartbeat shells (`AGENCY_AUTONOMY_API_KEY` or equivalent signed broker) so `GET /api/agency/website-workflow/next?limit=5` and provisioning routes work.
2. Provision Region Kitchen and Bar through the protected MC website-workflow route; attach the local checklist/evidence packet above.
3. Keep The Graceful Ordinary blocked until the public stable URL no longer serves the stale `x-vercel-cache: HIT` build with unsafe `4.8` / `200+` / `AAA Three-Diamond` / `TripAdvisor` / `info@` markers.
4. Ask founder/MC for explicit decisions on Al's Cafe, Tin Man's Pub, Tasty Bistro, and Sofia's Place before spending more build time on them.

## Status

All currently visible active MC roots are blocked by either deployment truth, qualification/template fit, operating-status ambiguity, address confirmation, or owner/founder decision. Region is the best prepared next candidate, but remains blocked on MC provisioning auth.
