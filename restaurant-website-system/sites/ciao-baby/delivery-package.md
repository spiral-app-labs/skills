# Ciao Baby! delivery package

Date: 2026-05-04  
Site slug: `ciao-baby`  
Template: `gusto-01`  
Status: local package complete; final delivery blocked on public preview + MC remote sync + owner/founder verification

## Preview

- Local preview used for QA: `http://127.0.0.1:3084`
- Public preview URL: TBD

## Sales posture

This is a `clarify-and-convert` pitch for a loved Barrington family-run Italian-American restaurant whose public web presence is fragmented across multiple official-looking domains. Do not pitch it as “no website.” Pitch it as: “Your restaurant already has local love; this makes the web experience feel as warm, clear, and trustworthy as guests already say it is.”

## Core demo assets

- Pitch doc: `restaurant-website-system/sites/ciao-baby/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/ciao-baby/battle-cards.md`
- Checklist: `restaurant-website-system/sites/ciao-baby/checklist.md`
- Checklist JSON: `restaurant-website-system/sites/ciao-baby/checklist.json`
- Routing rationale: `restaurant-website-system/sites/ciao-baby/routing-rationale.md`
- First preview notes: `restaurant-website-system/sites/ciao-baby/first-preview-build-notes.md`
- Improvement pass: `restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md`
- Top-three improvements: `restaurant-website-system/sites/ciao-baby/top-3-improvements-2026-05-04.md`
- Concierge proof: `restaurant-website-system/sites/ciao-baby/ai-concierge.md`
- Concierge transcript: `restaurant-website-system/sites/ciao-baby/ai-concierge-transcript.md`

## QA evidence

- QA round 1: `restaurant-website-system/sites/ciao-baby/qa-round-1.md`
- QA round 2: `restaurant-website-system/sites/ciao-baby/qa-round-2.md`
- QA round 3: `restaurant-website-system/sites/ciao-baby/qa-round-3.md`
- QA3 browser capture: `restaurant-website-system/sites/ciao-baby/scrapes/qa-round-3-browser-checks-2026-05-04.json`
- QA3 screenshot manifest: `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-3-2026-05-04.json`

## Screenshots captured locally

PNG files are intentionally ignored by git, but the tracked manifests record paths, sizes, and hashes:

- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-first-preview-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-improvement-pass-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-concierge-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-1-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-2-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-3-2026-05-04.json`

## Verification

- `npm ci` completed earlier; inherited Next.js audit warnings remain (`1 moderate`, `1 critical`) from Next.js 14.2.15 dependency lineage.
- `npm run typecheck` passed after QA3 final fixes.
- `npm run build` passed after QA3 final fixes, including dynamic `/api/concierge` route.
- QA3 captured `/`, `/menu`, `/about`, `/contact` at desktop and mobile with zero horizontal overflow offenders.
- Final visual sell-readiness QA passed with delivery caveats.

## Requirement status summary

Passed locally:

- checklist created
- current-site audit evidence
- Google Reviews evidence
- template route/fork/build
- improvement pass
- top-three improvements
- concierge
- pitch
- battle cards
- QA round 1
- QA round 2
- QA round 3

Pending/blocked:

- public preview URL
- Mission Control remote evidence sync through official agency API
- owner/founder verification of preferred domain, exact current hours, and any changed menu pricing
- final delivery state

## What not to claim

- Do not say Ciao Baby has no website.
- Do not choose a final owner domain until the owner confirms whether `ciaobabyonline.com` or `ciaobaby.net` should be authoritative.
- Do not promise reservations, table holds, online ordering, delivery, exact current hours, current prices, specials, allergy safety, private-party packages, or same-day availability.
- Do not invent awards, review counts, menu items, ownership details, or domain facts.

## Final delivery blocker

This package is ready for PR/public-preview creation and Mission Control sync when auth is available. It is not final-delivered until the public preview URL and MC evidence mirror exist, and Ethan/founder verification clears the remaining factual/domain caveats.
