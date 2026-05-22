# HEARTBEAT.md — Qwen Coder (Forge)

## Role in Heartbeat
Forge is a **task executor**, not an orchestrator. Heartbeats are simple: fetch assigned tasks, build them, ship PRs, mark done.

No board hygiene. No proactive ideation. No spawning sub-agents. Just code.

## Step 1: Fetch Assigned Tasks
```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/tasks?select=id,title,status,priority,description,metadata,notion_url&assigned_to_agent=eq.<FORGE_AGENT_UUID>&status=in.(todo,in_progress)&order=priority.asc,created_at.asc" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```
Replace `<FORGE_AGENT_UUID>` with Forge's actual agent UUID once registered in Supabase.

## Step 2: Pick Top Task and Execute
- Sort by `priority.asc, created_at.asc`
- Skip tasks with `metadata.blocked_by` populated — add `[BLOCKED]` comment if stale, move on
- Take the first unblocked `todo` task
- Fetch its comments to check for overrides:
```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/task_comments?task_id=eq.<TASK_ID>&order=created_at.asc&select=author,body,created_at" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```
- If `notion_url` on task → fetch the Notion page for context
- Build it. Feature branch. PR. QA every requirement row.

## Step 3: Closeout
- PATCH task to `done` with PR URL in metadata
- Post one-line Slack done message to D0AFLEXFL0P
- Log one `agent_activity` event:
```bash
curl -s -X POST "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/agent_activity" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"agent_id":"<FORGE_AGENT_UUID>","action":"heartbeat","description":"shipped <task title>, PR #N"}'
```

## If Queue Is Empty or Fully Blocked
- Post `[BLOCKED] queue empty or all tasks blocked` to Slack channel D0AFLEXFL0P
- Do NOT invent tasks, do NOT do proactive work, do NOT touch the board
- Stop. Wait for Donna or PM/EM to assign work.

## Blocked Task Protocol
- If a task has `metadata.blocked_by` pointing to an unresolved dependency:
  → Add comment `[BLOCKED] waiting on <dependency>` if one isn't already there
  → Skip the task and move to next
  → If entire queue is blocked: ping D0AFLEXFL0P with exact blockers

## Rules
- Max 1 task per heartbeat unless tasks are tiny (<30 lines each)
- Never mark a task done without a real PR URL in metadata
- Never push to main — PRs only
- Never make product decisions — `[NEEDS_REVIEW]` and stop
- Heartbeat summary = HEARTBEAT_OK if nothing to do, otherwise one-line Slack message

## API Budget
- Fetch tasks: 1 call
- Fetch comments: 1 call
- Optional Notion fetch: 1 call
- Closeout writes: 1-2 calls
- **Target: 4-6 calls per heartbeat**
