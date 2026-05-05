---
name: restaurant-build-checklist
description: Generate and maintain the local per-site checklist contract for autonomous restaurant website builds, including lead ID, MC parent task ID, template slug, audit/review evidence paths, top-three improvements, AI concierge status, QA rounds, preview URL, pitch/battle-card artifacts, blockers, and done criteria.
---

# Restaurant Build Checklist

Every build must have both local checklist files:

- `restaurant-website-system/sites/<slug>/checklist.json`
- `restaurant-website-system/sites/<slug>/checklist.md`

## Command

Use the checked-out workspace copy when present:

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system
./scripts/new-build-checklist.mjs --slug restaurant-slug --lead-id lead-id --task-id mc-task-id --template gusto-01 --stage queued
```

Reference paths:

- Legacy/root path seen in older docs: `/Users/ethantalreja/skills/restaurant-website-system`
- Checklist generator within the repo: `/scripts/new-build-checklist.mjs`
- Lead qualification reference: `/research/lead-fit-qualification.md`

## Required Fields

- lead ID
- Mission Control parent task ID
- site slug
- template slug
- current build stage / exact gate
- structured lead metadata mirrored from the audit (`owner_name`, `owner_email`, `contact_email`, `phone`, `hours`, `address_location`, `website_url`, `order_url`, `reservation_url`, `catering_events_url`, `google_rating`, `google_review_count`, `metadata_source_notes`, outreach draft path/status, and field evidence)
- checklist evidence paths
- current-site browser screenshot paths and scrape/DOM snapshot path
- Google Reviews evidence path: **Highest** filter, 30 written reviews JSON, screenshots
- template route rationale
- fork/build evidence
- website improvement pass notes
- top 3 improvements: rationale, implementation notes, before/after evidence
- AI concierge evidence or blocker
- pitch doc path
- battle cards doc path
- QA rounds
- deploy/preview URL
- blocker log
- done criteria
- requirement rows mirrored to MC task `metadata.requirements`

## Canonical Requirement Rows

At minimum, mirror requirement rows for:

1. checklist `.md` and `.json` created/updated
2. current-site browser audit screenshots + scrape captured
3. Google Reviews opened, **Highest** selected, 30 written reviews captured with evidence
4. template route locked
5. template fork/build complete
6. website improvement pass complete
7. top 3 improvements identified and implemented
8. AI concierge added with truthful KB and safe handoffs
9. pitch doc created/updated
10. battle cards doc created/updated
11. QA round 1 complete with evidence
12. QA round 2 complete with evidence
13. QA round 3 complete with evidence
14. delivery package mirrored to MC

## Update Discipline

Update the checklist whenever:

- stage/gate changes
- evidence is captured
- structured lead metadata changes or a metadata blocker is cleared
- Google review packet changes
- top-three-improvement decision or implementation changes
- QA round completes
- preview/deploy URL changes
- pitch or battle-card artifact is created
- blocker appears or clears

Mission Control owns status. The checklist explains and proves the status.
