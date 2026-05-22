# Inputs

Where source material lives before audits and recreations happen.

---

## Folder structure

```
inputs/
├── framer-templates/
│   └── [template-slug]/
│       ├── source.md              ← required: URL + author + license + notes
│       ├── screenshots/           ← desktop + mobile + key sections
│       └── html-export/           ← optional: if Framer HTML export available
└── reference-sites/
    └── [site-slug]/
        ├── source.md              ← required: URL + restaurant name + notes
        ├── screenshots/
        └── html-snapshot/         ← optional: saved page HTML
```

---

## How to add a Framer template

1. Pick a slug. Format: `[vibe]-[number]` (e.g., `editorial-luxury-01`, `moody-speakeasy-02`). Vibes should match an archetype from `research/restaurant-archetypes.md`.
2. Create `inputs/framer-templates/[slug]/`.
3. Drop in the source URL and any screenshots in:
   ```
   inputs/framer-templates/[slug]/source.md
   inputs/framer-templates/[slug]/screenshots/desktop-home.png
   inputs/framer-templates/[slug]/screenshots/mobile-home.png
   inputs/framer-templates/[slug]/screenshots/[section-name].png
   ```
4. If you have HTML export from Framer, drop it into `html-export/`.
5. Tell the agent: "audit `[slug]`" — it will run `scripts/new-audit.sh [slug]` and start the audit.

---

## How to add a non-Framer reference site

Same pattern, in `reference-sites/[site-slug]/`. Use the actual restaurant name as the slug (e.g., `via-carota`, `noma`, `frenchette`).

---

## `source.md` template

Every input folder must have a `source.md` with at minimum:

```markdown
# [Template or site name]

- **URL:** https://...
- **Type:** Framer template / Live restaurant site
- **Author / studio:** (if known)
- **License notes:** (Framer template paid? free? attribution required?)
- **Why we picked this:** (1–2 sentences on what's interesting about it)
- **First impression vibe:** (editorial / moody / warm / etc.)
- **Likely archetype match:** (from restaurant-archetypes.md)
```

This file's job is to give the auditor 30 seconds of orientation before they open the audit template.

---

## What "screenshot coverage" means

Minimum acceptable for an audit:
- Desktop homepage, full-page scroll capture
- Mobile homepage, full-page scroll capture
- Any sub-page that's structurally distinct (menu, story, contact, gallery)
- Any unique component (hero, nav, footer, gallery, modal)

If screenshots aren't possible, the source URL alone is acceptable but the audit must note that the analysis is URL-based only.
