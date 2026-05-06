---
name: restaurant-template-fork
description: Fork a selected restaurant catalog template into `restaurant-website-system/sites/<slug>/` using the local fork script, preserve catalog structure, avoid generated files, and hand off to the build checklist.
---

# Restaurant Template Fork

Use after the route is locked.

## Command

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system
./scripts/fork-template.sh --template gusto-01 --slug restaurant-slug
```

Historical docs may reference `/Users/ethantalreja/skills/restaurant-website-system`; prefer the checked-out workspace path above unless that legacy path exists.

Use `--force` only when Mission Control explicitly says to overwrite an existing local fork.

## Workflow

1. Update MC build stage to `forking`.
2. Run the fork script.
3. Run `restaurant-build-checklist` immediately after the fork.
4. Install dependencies inside the fork only if needed.
5. Keep template code style and content boundaries intact.
6. Do not copy `node_modules`, `.next`, screenshots, videos, or capture frames into the new fork.

## Fork Output

The fork should create:

- `restaurant-website-system/sites/<slug>/`
- package name updated to `<slug>`
- `.agency-template.json` describing template source and creation time
- no generated dependencies or build output
