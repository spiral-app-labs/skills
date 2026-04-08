---
name: delegation
description: 'Orchestration protocol for multi-agent delegation. Use before any non-trivial delegation to Donna, Nina, Leo, or coding sub-agents. Defines agent roster, delegation decision tree, cross-agent handoff contracts, and context sharing rules.'
metadata:
  { "openclaw": { "emoji": "🎯" } }
---

# Agent Delegation Skill — Orchestration Protocol

## Agent Roster + Constraints

### Donna (Orchestrator)
- **Lives on:** Mac mini (primary), MacBook (secondary session)
- **Model:** Claude Sonnet 4.6 / Opus 4.6 (OpenClaw, Ethan's subscription)
- **Access:** Full workspace, Supabase, Notion, GitHub, Slack, web search, file system
- **Role:** Orchestration, synthesis, proposals, MC management, coding sub-agent spawning, Ethan-facing comms
- **Constraint:** Two-device split — Mac mini and MacBook do NOT share local workspace files. Notion/MC/GitHub are the only shared state.

### Nina (Research Agent)
- **Lives on:** Max Studio
- **Model:** Local Qwen 3.5 (no external API cost, runs offline)
- **Access:** Web research, Notion write access, MC task updates, local file system on Max Studio
- **Role:** Market research, competitor analysis, content research, trend monitoring, SEO research
- **Constraint:** Local model — no Claude-level reasoning. Best for structured research, NOT synthesis or architectural decisions. Cannot access Mac mini workspace files.
- **Handoff channel:** MC task (Donna writes brief → Nina executes → output lands in Notion + MC comment)

### Leo (Prototype Agent — Coming)
- **Lives on:** TBD (separate device/instance)
- **Model:** ChatGPT subscription (GPT-4o / GPT-5 series)
- **Access:** GitHub (spiral-app-labs), file system for Flutter repos, TestFlight upload
- **Role:** Rapid Flutter prototyping, TestFlight builds, Spiral App Lab prototypes
- **Constraint:** No shared memory with Donna. Operates purely from locked prototype brief in MC task description. Notion URL must be included for any supporting context.
- **Handoff channel:** MC task with complete prototype brief (see prototype-brief-template)

### Coding Sub-Agents (Donna-spawned)
- **Spawned by:** Donna (exec, background, claude --print)
- **Model:** Claude Code (Sonnet 4.6)
- **Access:** Mac mini file system, GitHub, Supabase (credentials passed in prompt)
- **Role:** Binky Flutter work, MC web app, any repo-level code changes
- **Constraint:** Same session as Donna — shares Mac mini file access but NOT Donna's conversation context. Full brief in prompt required.

---

## Task vs Epic vs Phased Epic — MC Structure

### Task
Single deliverable, single agent, completable in one session (typically <4 hours). Has one clear done state and one evidence link.

### Epic
A named body of work with 3-10 child tasks that together produce a shipped feature or outcome. The epic is the parent container — it has no agent assignment itself. Child tasks are the executable units. Epic is done when all children are done.

### Phased Epic
An epic where phases must complete in order because each phase's output is the input for the next. Phase 2 tasks have `blocked_by` pointing at Phase 1 tasks. Used for the Spiral App Factory pipeline: research → synthesis → build. Each phase can have parallel tasks within it, but phases themselves are sequential.

**RULE:** Never model a phased epic as a flat task list. Use `blocked_by` to encode the dependency chain explicitly.

---

## Delegation Decision Tree

Before acting on any request, run this decision tree silently:

1. Is this a greeting, banter, or casual question? → Answer inline, zero tool calls.
2. Is this a single tool call (file read, web search, quick MC update)? → Do it inline.
3. Is this research (market analysis, competitor research, trend research)? → Create MC task, assign to Nina. Write full brief. Notion output required.
4. Is this repo code work (Flutter, MC web app, bug fix, feature)? → Spawn coding sub-agent. Full brief in prompt. Never code directly in main Slack thread.
5. Is this a new app prototype? → Donna writes prototype brief → MC task for Leo → Leo builds to TestFlight.
6. Is this synthesis, architecture, or a product proposal? → Donna does it inline or as a focused subagent session. Output goes to Notion.
7. Does this require Ethan's approval before proceeding? → Binary ask first. Do not build around the decision.

---

## Cross-Agent Handoff Protocol

Core principle: no agent should ever need to read another agent's memory files or session history. Every handoff is a complete, self-contained brief.

### Donna → Nina
- **Channel:** MC task (Nina reads task description as brief)
- **Brief must include:** research questions (numbered), output format, output destination (Notion page title + parent, local path), done signal (post to Slack D0AFLEXFL0P)
- **Output:** Notion (primary) + local research/ path (cache)
- Donna reads Notion URL from task metadata to pick up Nina's output — never reads Nina's local files

### Donna → Coding Sub-Agent
- **Channel:** exec (claude --permission-mode bypassPermissions --print)
- **Brief must include:** repo path, exact files to change, acceptance criteria, git identity, branch name, PR title, Supabase task ID + PATCH command, Slack done message format
- Sub-agent posts PR URL to Supabase task metadata on completion
- Donna picks up evidence from Supabase task metadata — never relies on session context from sub-agent

### Donna → Leo
- **Channel:** MC task (Leo reads task description as prototype brief)
- **Brief must match prototype-brief-template:** app name, tagline, core mechanic, screen list, tech stack, bundle ID, success metric, out of scope
- Supporting context linked via Notion URL — Leo does not read local markdown files
- Leo delivers: GitHub repo + TestFlight link + delivery message to Slack D0AFLEXFL0P

---

## Context Sharing Rules (Multi-Device)

Mac mini and MacBook run separate OpenClaw instances. Local workspace files are NOT shared. Context that needs to survive device switches or agent handoffs must live in:

1. **Notion** — specs, research, proposals, pipeline docs, agent specs
2. **Mission Control (Supabase)** — task state, requirements, blockers, evidence URLs, agent assignment
3. **GitHub** — code, PRs, commit history

Workspace markdown (memory/*.md, research/*.md) = regenerable cache. Not source of truth. If it's not in Notion/MC/GitHub, it does not exist for cross-device or cross-agent work.

**RULE:** Any time Donna writes a doc another agent will need, it goes to Notion immediately.

---

## When NOT to Delegate
- Single tool call or read — just do it inline
- Writing a spec or doc (<30 min) — Donna does it inline
- MC board hygiene (status updates, task creation) — Donna inline
- Any work where writing the brief takes longer than doing the work — just do it
- Ethan is present and asking for a quick answer — answer, don't delegate
