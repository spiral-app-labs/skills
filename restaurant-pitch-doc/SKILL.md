---
name: restaurant-pitch-doc
description: Create concise restaurant website redesign pitch documents from audits, lead-research notes, prototype READMEs, and built site code. Use when preparing a 1-minute pre-call brief, battle card, sales pitch, outreach summary, or before/after narrative for a restaurant prospect; especially when the pitch must explain revenue leaks, broken standard practices, and how the redesign fixes the pre-dining experience.
---

# Restaurant Pitch Doc

## Output Goal

Produce a markdown doc the seller can read in 60 seconds before a call. It must be specific enough to sound grounded, but short enough to use under pressure.

The pitch is not "your site is bad." The pitch is "your current site already has valuable demand, but these specific web-path leaks make guests hesitate or hand off too early; the prototype preserves what works and repairs the pre-dining path."

## Workflow

1. Read the prospect site's local artifacts first:
   - `audit.md`
   - `pitch-battle-card.md` if it exists
   - source lead/audit research referenced by `audit.md`
   - `README.md`
   - `content.example.ts`
   - key routes/components touched by the redesign
   - any `Secret Sauce` / Google review synthesis in `source.md`, `audit.md`,
     or lead research

2. Identify the pitch posture:
   - **Hard leak:** broken domain, dead menu, missing reservation/order, missing hours/address.
   - **Soft leak:** current stack works but menu, proof, story, mobile flow, or provider handoff weakens intent.
   - **Preserve-stack:** Toast, OpenTable, Resy, Wix forms, gift cards, or ordering already work; pitch keeping them and improving the owned path around them.

3. Identify what makes the restaurant lovable, not just what is broken:
   - Cross-check the old website's self-description against Google review themes.
   - Name the restaurant's "secret sauce": value, staff, vibe, signature dish,
     happy hour, patio, speed, community feeling, owner story, local goods, etc.
   - Include that in the pitch so the owner feels seen, not judged.
   - Explain how the prototype makes that strength more visible on the new site.

4. Write the doc using `references/pitch-doc-template.md`.

5. Keep every claim traceable to either the local audit/prototype or clearly mark it as a hypothesis. Do not invent awards, press, review counts, provider details, menu items, or credentials.

6. End with a tight demo path: what to show first, what to scroll to, and which provider handoff proves revenue preservation.

## Quality Bar

- One page, scannable in about a minute.
- Lead with revenue/pre-dining experience, not aesthetics.
- Name 3-5 specific leaks.
- Name 1-3 specific strengths that guests already love.
- For each leak, explain the standard practice it violates and the concrete fix.
- Include the strongest caveat or risk so the caller does not overclaim.
- Use plain language an owner/operator would recognize.

## Local Restaurant-Website-System Notes

For folders under `restaurant-website-system/sites/{slug}/`, prefer these sources:

- `audit.md` for the core sales thesis.
- `research/lead-qualification/*.md` for original live-site findings.
- `content.example.ts` for preserved links, menu strategy, hours, proof, and CTA wording.
- `app/layout.tsx` for schema/metadata improvements.
- route files under `app/` for demo path and crawlable pages.

If a pitch doc already exists, update it instead of creating a parallel artifact unless the user asks for a different format.
