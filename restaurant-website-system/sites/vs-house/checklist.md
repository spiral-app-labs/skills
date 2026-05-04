# vs-house Build Checklist

- Lead ID: 1006c1ea-5a06-4703-9994-117bc90d9dba
- MC parent task ID: 41da188d-4629-4cb2-91f3-6be31d6b9b6d
- Template slug: bamzi-01
- Current stage: qa_round_1
- Deploy URL: TBD
- Updated: 2026-05-04T04:32:23.750Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Audit identifies V's House as a high-fit restaurant with strong review volume, press, family heritage, and existing conversion flows.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Pre-fork audit exists at restaurant-website-system/sites/vs-house/audit.md with screenshots/scrapes and review/proof inventory.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Route locked to bamzi-01 in audit/source.md for accessible-casual modern Asian restaurant with menu depth and saturated accent potential.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Local Next.js fork exists at restaurant-website-system/sites/vs-house with bamzi-01 source, real content.ts, preserved contact/reservation/order flows.
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/vs-house/pitch-doc.md
- restaurant-website-system/sites/vs-house/audit.md
- restaurant-website-system/sites/vs-house/scrapes/google.json
- restaurant-website-system/sites/vs-house/battle-cards.md
- restaurant-website-system/sites/vs-house/qa-round-1.md

## QA Rounds

- Round 1: Factual/source QA found and fixed unsupported past-midnight bar claim; build/typecheck passed; screenshots blocked by unavailable browser.

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/vs-house/pitch-doc.md
- Outreach draft: TBD

## Blockers

- Fresh QA screenshots cannot be captured because the OpenClaw managed browser cannot start on this host (No supported browser found). Source/build QA advanced; next unblock action is enabling browser/Chromium capture for desktop + mobile screenshots.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.

