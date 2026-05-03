---
name: restaurant-build-checklist
description: Generate and maintain the local per-site checklist contract for autonomous restaurant website builds, including lead ID, MC parent task ID, template slug, evidence paths, QA rounds, deploy URL, pitch artifacts, blockers, and done criteria.
---

# Restaurant Build Checklist

Every build must have both local checklist files:

- `restaurant-website-system/sites/<slug>/checklist.json`
- `restaurant-website-system/sites/<slug>/checklist.md`

## Command

```bash
cd /Users/ethantalreja/skills/restaurant-website-system
./scripts/new-build-checklist.mjs --slug restaurant-slug --lead-id lead-id --task-id mc-task-id --template gusto-01 --stage queued
```

## Required Fields

- lead ID
- Mission Control parent task ID
- site slug
- template slug
- current build stage
- checklist evidence paths
- QA rounds
- deploy URL
- pitch artifacts
- blocker log
- done criteria
- requirement rows mirrored to MC task `metadata.requirements`

## Update Discipline

Update the checklist whenever:

- stage changes
- evidence is captured
- QA round completes
- preview/deploy URL changes
- pitch artifact is created
- blocker appears or clears

Mission Control owns status. The checklist explains and proves the status.
