# Concierge Kit

Reference scaffold for adding the AI concierge to a new restaurant template.
Drops integration time from ~45 min to ~15 min by isolating the two things
that actually differ per client (voice + theme tokens) from everything that
doesn't (parser, streaming, cards, prompt structure).

## When to use this

- Forking a new template from scratch that needs the concierge.
- Spinning up a per-client customization (paid tier).

## When NOT to use this

- Patching one of the three existing concierges (1776, alinea, bamzi). They
  predate the kit and stay as-is per PRD 03.
- Building a one-off that needs architectural changes (new marker types,
  new card shapes). Fork the kit, don't shoehorn.

## What's in the box

```
scaffold/
├── lib/concierge-voice.ts      REPLACE per fork (the voice — ~60 lines)
├── lib/concierge-config.ts     REPLACE per fork (tenant/site IDs + entrance prompts)
├── lib/concierge-analytics.ts  COPY verbatim (event logging + redaction)
├── lib/concierge-kb.ts          COPY verbatim (the prompt builder)
├── components/concierge-theme.ts  REPLACE per fork (~25 lines of classes)
├── components/ConciergeEntrance.tsx COPY verbatim (embedded entrance cards)
├── components/AskConcierge.tsx    COPY verbatim (parser + cards + streaming)
└── app/api/chat/route.ts        COPY verbatim (Anthropic proxy)
└── app/api/concierge-events/route.ts COPY verbatim (frontend event ingest)
examples/
├── voice-warm-finedining.ts    1776-style filled-in voice
└── voice-editorial.ts          alinea-style filled-in voice
RECIPE.md                        The 10-step integration checklist
```

## Philosophy

- **Templates are atomic.** No shared npm package, no runtime dependency.
  Each template owns its copy after forking.
- **Voice and theme are the only things that differ.** If you find yourself
  editing `concierge-kb.ts` or `AskConcierge.tsx` in a fork, stop — that's a
  signal the kit needs to evolve.
- **Entrances are distributed, panel is shared.** Home/menu/contact surfaces
  open the same concierge panel and pass surface/page/prompt context into
  analytics.
- **Reports are the product.** Event and message logging exists so monthly
  owner reports can say what guests asked, what the site failed to answer, and
  what to improve next.
- **Introspection over configuration.** The kit reads whatever's in
  `content.ts` and auto-composes the prompt. A template with no menu gets no
  menu section. A template with tiers gets tiers.

## Ship log

- 2026-04-21: initial kit shipped (PRD 03).
