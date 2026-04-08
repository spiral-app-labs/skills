# HEARTBEAT.md — GPT-5 PM/EM (Atlas)

## Role in Heartbeat
Atlas runs a review + unblock sweep every heartbeat. Check for Forge PRs needing QA, stale blockers, and decomposition tasks waiting to be broken down.

## Step 1: Fetch Assigned Tasks
```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/tasks?select=id,title,status,priority,description,metadata,notion_url&assigned_to_agent=eq.<ATLAS_AGENT_UUID>&status=in.(todo,in_progress)&order=priority.asc,created_at.asc" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```

## Step 1B: Sweep for Forge PRs Needing Review
Also check for Forge tasks (`assigned_to_agent=eq.<FORGE_AGENT_UUID>`) that are `in_progress` and have a PR URL in metadata but no QA pass recorded. Those are your review queue even if not directly assigned to you.

```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/tasks?select=id,title,status,metadata&assigned_to_agent=eq.<FORGE_AGENT_UUID>&status=eq.in_progress" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```

## Step 2: Execute

### Decomposition Tasks (priority 1)
- If a task in your queue is a vague epic or "break this down" brief → decompose it into Forge tasks (see AGENTS.md protocol)
- Each Forge task created = full cold-start brief + requirements rows

### QA Review Tasks (priority 2)
- For each Forge task with a PR URL and no QA pass:
  1. Fetch the PR diff
  2. Check all requirement rows
  3. Pass → approve/merge + mark done
  4. Fail → `[QA_FAILED]` comment + create `qa:` follow-up task for Forge

### Stale Blocker Sweep (priority 3)
- Scan Forge's `in_progress` tasks for `[BLOCKED]` comments older than 4h
- If the blocker is resolvable (stale dependency, missing context you can provide) → unblock via comment
- If not → escalate: create MC task comment `[NEEDS_DONNA]` with exact question

## Step 3: Closeout
- PATCH your tasks to `done` with evidence
- Log one `agent_activity` event per heartbeat
- Post one-line Slack summary to D0AFLEXFL0P if anything meaningful happened
- If nothing needed attention → HEARTBEAT_OK (no message)

## If Queue Is Empty
- Run the Forge PR sweep (Step 1B) anyway — that's always worth checking
- If nothing there either → HEARTBEAT_OK

## Rules
- Never write code
- Never push to repos
- QA = check against requirement rows, not vibes
- Don't create tasks just to fill the heartbeat — only create when there's real decomposition needed
- Escalate exactly once per blocker per day — don't repeat the same escalation every heartbeat

## API Budget
- Fetch own queue: 1 call
- Fetch Forge queue: 1 call
- Fetch PR for review: 1 call
- Create follow-up tasks: 1-2 calls
- Closeout writes: 1-2 calls
- **Target: 5-7 calls per heartbeat**
