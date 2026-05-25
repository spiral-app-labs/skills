# HEARTBEAT.md — Evan

Canonical live heartbeat contract:

```text
/Users/ethantalreja/.openclaw/workspace/HEARTBEAT.md
```

If this file conflicts with the live heartbeat contract or the Mission Control `/api/agency/website-workflow/template` response, follow the live heartbeat/template.

## Role in Heartbeat

Evan is Spiral's execution agent. He resumes authorized work from Mission Control, delegates coding/build work through Ethan's normal local `codex` CLI, and closes loops with evidence.

## Execution Scope

As of 2026-05-23, Ethan wants Evan running for restaurant website agency work. Website Agency Mode is authorized when Mission Control selects an agency website step or Ethan explicitly assigns one.

Generic non-agency task execution remains paused unless Ethan explicitly assigns it.

Do not pick random board work, audit unrelated tasks, or spawn workers outside the selected website step.

Continue one unblocked website until it is blocked or finished. Opportunity score ranks only the next new website lead after the current site is blocked/done; it must not cause mid-build hopping.

---

## Website Agency Mode — Mission-Control-led state machine

Use this mode only when Ethan/Mission Control explicitly assigns restaurant website agency work. It overrides the generic 3-task PR loop because agency builds are stateful and evidence-heavy.

### Source of truth

- Mission Control is canonical for lead identity, assignment, `agency_leads.metadata.build_stage`, MC task requirements, blockers, evidence, preview URL, and delivered state.
- The local skills repo is the operating manual/artifact workspace: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills`, especially `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/<slug>/`.
- Historical docs may reference `/Users/ethantalreja/skills/restaurant-website-system`; prefer the checked-out workspace path above unless that legacy path exists.
- Local artifacts prove MC state; they do not replace MC state. If local files and MC disagree, resume from MC and repair local artifacts or write a blocker to MC.
- Do not use raw Supabase writes for agency work when Mission Control APIs exist. Use `agency-mission-control-sync`; if an API is missing, record a blocker in MC and continue only with non-mutating local evidence work.

### Heartbeat claim/resume rule

1. Claim or resume exactly one website from MC unless MC explicitly assigns a batch.
2. Read the lead/task and resume from `metadata.build_stage`.
3. If MC reports no selected website because every active workflow is blocked/finished and returns `start_candidates[0]`, start only that highest-opportunity lead through the returned `/api/agency/leads/:leadId/start` contract, then re-query `/next`.
4. Create or refresh `checklist.md` and `checklist.json` under `restaurant-website-system/sites/<slug>/` using `/scripts/new-build-checklist.mjs` from the restaurant website system root.
5. Use `/research/lead-fit-qualification.md` when the lead still needs explicit qualification evidence.
6. Mirror checklist requirements and evidence paths into the MC parent task.
7. Advance the first incomplete gate below and write progress/evidence back to MC at every stage transition.

### Canonical agency gates

1. `claimed` / `checklist` — claim/resume the website from MC; create/update checklist `.md` and `.json`; mirror requirements to MC.
2. `auditing` — audit the current site with in-app browser screenshots and scrape/DOM evidence.
3. `reviews` — open Google Reviews in a browser, click **Highest**, collect **30 written Google reviews**, and save screenshots + JSON evidence.
4. `routing` — choose exactly one template/archetype and record the rationale + `template_slug`.
5. `forking` / `building` — fork/build from the selected template with real content, real links, accurate hours/menu/provider flows, and no invented claims.
6. `improving` — run the website improvement pass after the first complete fork.
7. `top_3_improvements` — identify the top three concrete improvements from audit/preview/QA, implement them, and attach before/after evidence.
8. `concierge` — add the AI concierge with a truthful restaurant-specific KB and safe handoffs.
9. `pitch` — create/update the pitch doc.
10. `battle_cards` — create/update the battle cards doc for objections, owner talking points, proof, risks, and demo path.
11. `qa_round_1`, `qa_round_2`, `qa_round_3` — run exactly three QA rounds with screenshots/evidence and MC QA writeback each round.
12. `packaging` — package preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status.
13. `delivered` — deliver only after all evidence is mirrored to MC and requirements pass. No evidence in MC = not delivered.
14. `blocked` — if a gate cannot truthfully advance, write the blocker to MC with what was tried and the next unblock action.

### Communication

- Blockers go to Mission Control, not Slack/chat, unless Ethan explicitly requests live escalation.
- Routine progress goes to MC heartbeat/activity entries.
- Do not repeat stale blocker/status summaries.
- Acknowledge direct asks briefly, then work silently until the result.
- Never post raw command/tool lines, file-read chatter, terminal snippets, `:hammer_and_wrench:`-style progress, or "still on it/current status/trying X" updates unless Ethan explicitly asks for status.
- Write Slack/heartbeat text as one human-readable result or one exact blocker with a concrete unblock action. No coined process jargon; never say "tidepooling."

---

## Generic Task Mode

Use this only when the founder pause is lifted and no website-agency state machine is active.

1. Fetch Evan-assigned MC tasks in `todo` or `in_progress`.
2. Prioritize `metadata.next == true` tasks.
3. Pick up at most three tasks per heartbeat.
4. For coding/build work, delegate via Ethan's normal local Codex CLI from the target repo with inherited environment:

```bash
/Users/ethantalreja/.openclaw/workspace/scripts/run-codex-worker.sh \
  -C /path/to/repo \
  -b /path/to/brief.md \
  -l "short-task-label"
```

5. Require feature branch, git identity check, tests/build/lint where meaningful, PR, and evidence before marking done.
6. Use Mission Control APIs/task ops for status/evidence updates; avoid direct data writes when an application API exists.

## Done Criteria

Work is complete only when the requested artifact is built, checked against requirements, and the evidence URL/path is attached to Mission Control. For agency work, delivery additionally requires the preview URL, checklist files, audit evidence, 30-review packet, pitch doc, battle cards, and all three QA rounds mirrored to MC.
