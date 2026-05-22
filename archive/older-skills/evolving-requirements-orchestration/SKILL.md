---
name: evolving-requirements-orchestration
description: Orchestrate changing requirements without task sprawl by reconciling new asks against the active epic/spec, updating the source-of-truth brief before task edits, applying supersession precedence for newer approved requirements, deciding when to edit vs split vs create net-new tasks, and handling ambiguous founder requests with a decision-first decomposition flow.
---

# evolving-requirements-orchestration

Keep execution aligned to the latest approved intent while preventing duplicate or stale task trees.

## core outcome

Turn fuzzy or changing requirements into one clean execution path:
1. identify what changed
2. resolve ambiguity before task churn
3. update source-of-truth artifacts in the right order
4. mutate task structure only as much as needed

## thinking model for ambiguity (use before touching tasks)

Use this 5-step loop for ambiguous asks (adapted from nina decomposition patterns).

### step 1: find the real decision

Ask: **what founder decision is this request trying to unlock?**
- if this answer changed, what would we do differently?
- what outcome must be true when this is done?

If no clear decision exists, do not retask yet.

### step 2: classify ambiguity type

Tag the request with one or more ambiguity types:
- **goal ambiguity**: unclear end state or success metric
- **scope ambiguity**: unclear boundaries or non-goals
- **constraint ambiguity**: unknown deadline, quality bar, risk tolerance, compliance
- **ownership ambiguity**: unclear owner or handoff
- **sequence ambiguity**: unclear order/dependencies

### step 3: decompose into execution questions

Break vague asks into 4-7 concrete questions:
1. what exact output is required?
2. what is explicitly out of scope?
3. what constraints are hard vs soft?
4. what evidence/acceptance will count as done?
5. who owns each deliverable?
6. what must happen first?
7. what can run in parallel?

### step 4: generate two execution shapes

When interpretation is still ambiguous, propose exactly two valid paths:
- **option a**: fastest safe path
- **option b**: higher-upside or lower-risk path

For each option, include one-line tradeoff on:
- alignment to intended outcome
- speed to ship
- reversibility

Recommend one option. request binary approval. do not fork task trees preemptively.

### step 5: lock a minimum executable brief

Before mutating tasks, capture this output contract:
- decision being made
- chosen outcome + non-goals
- acceptance criteria/evidence
- owner(s)
- sequence/dependencies
- artifact update plan (notion, mission control, or both)

## scenario classifier for requirement changes

Classify the change after ambiguity is reduced.

- **type a: clarification**
  - same outcome, clearer wording/acceptance
  - default action: edit existing task/spec
- **type b: bounded expansion**
  - same epic outcome, extra deliverable/constraint
  - default action: split subtasks if independent; else edit existing
- **type c: directional pivot**
  - outcome or success metric changes materially
  - default action: update source-of-truth doc, supersede old requirement, then retask
- **type d: cross-epic collision**
  - overlap with another lane/shared dependency
  - default action: create or adjust shared dependency task; avoid duplicate ownership
- **type e: urgency override**
  - interrupt/hotfix that preempts planned work
  - default action: create focused interrupt task and mark what it preempts

## source-of-truth routing: notion vs mission control

Use this routing every time scope changes.

### update notion first when
- the requirement narrative changes (problem framing, goals, constraints, success metric)
- assumptions/decisions that multiple tasks depend on change
- supersession history must be explicit for future context

### update mission control first when
- no requirement narrative changed, but execution changed (owner, status, sequencing, dependencies, priority)
- work is purely operational triage (reassign, reorder, unblock, rescope within same approved brief)

### update both when
- requirement meaning changed **and** execution plan must change
- order: **notion first, mission control second**
  - notion: set canonical brief + supersession notes
  - mission control: align tasks to the updated brief

Rule: if there is any conflict, Notion holds the planning truth, Mission Control holds execution truth.

## edit vs split vs net-new task decision

Apply in order.

### edit existing task when all are true
- same outcome and same success metric
- same primary owner/context
- changes fit as acceptance-criteria or scope refinement

**tradeoff:** fastest and lowest coordination overhead, but can hide meaningful complexity if overused.

### split into subtasks when any are true
- multiple independently shippable deliverables now exist
- distinct owners/skills are required
- sequencing branches or risk/test strategies diverge
- parent task becomes too broad to track clearly

**tradeoff:** better visibility and parallelism, but more coordination cost and potential board noise.

### create net-new task when any are true
- new requirement creates a distinct outcome not implied by current epic
- work belongs to different epic/project lane
- interrupt/hotfix needs separate accountability/priority tracking
- success metric differs materially from parent lane

**tradeoff:** clean accountability and reporting, but can fragment context if not linked back.

### hard guardrails
- never create net-new tasks to avoid editing a messy brief
- never split just to make progress look larger
- always link split/new tasks to originating epic/spec context
- mark superseded work explicitly (do not cancel unless founder says so)

## supersession precedence

When requirements conflict, highest precedence wins:
1. newest **approved** requirement in active source-of-truth doc/task
2. newer approved founder directive captured in decision log/comments
3. older approved requirements
4. unapproved proposals/drafts

When newer approved guidance conflicts with older guidance, mark old requirement as superseded in the canonical brief.

## execution workflow

1. **anchor source-of-truth**
   - read active epic/spec + latest approved updates + active implementation tasks
   - if no approved source exists, request approval before retasking

2. **run ambiguity loop**
   - perform decision-first decomposition (5-step model above)

3. **update artifacts in the right order**
   - notion vs mission control routing rules
   - establish one canonical requirement block

4. **mutate task structure**
   - apply edit vs split vs net-new rules with tradeoffs

5. **anti-sprawl check before finalize**
   - no duplicate active tasks for same outcome
   - each task has distinct owner + deliverable
   - superseded items are marked clearly

## reusable response templates

### template: ambiguity escalation
- decision to make:
- option a (fastest safe):
- option b (higher-upside/lower-risk):
- recommendation:
- binary ask: approve a or b

### template: mutation note (for task/comment updates)
- change type:
- what changed:
- what was superseded:
- why edit/split/new was chosen:
- links to canonical brief + affected tasks:

## mission control task hygiene rule
when mutating or creating Mission Control tasks:
- keep the description focused on executable brief/context/where/blockers
- put acceptance criteria / QA checks into the task requirements metadata/table (`metadata.requirements`), one requirement per row
- prefer updating requirement rows over bloating description prose when founder changes the QA bar

## default usage posture

Use this skill as the default orchestration layer whenever founder asks evolve mid-flight. prioritize clarity, canonical truth, and minimal task churn over reactive retasking.