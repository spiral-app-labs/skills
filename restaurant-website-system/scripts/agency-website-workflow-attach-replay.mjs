#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const DEFAULT_BASE_URL = process.env.MC_API_BASE_URL || process.env.HQ_BASE || 'https://hq.ethantalreja.com'

function printHelp() {
  console.log(`Usage:
  node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \\
    --lead-id <agency-lead-id> \\
    --payload <path-to-attach-payload.json> \\
    [--apply] [--trigger <trigger>]

Purpose:
  Replays a local website-workflow attach payload through Mission Control's protected
  canonical workflow provisioning/backfill route:

    POST /api/agency/leads/:leadId/website-workflow

  Dry-run is the default. --apply requires AGENCY_AUTONOMY_API_KEY or
  OPENCLAW_WEBHOOK_SECRET and sends the bearer token plus x-agency-runtime: openclaw.

Environment:
  MC_API_BASE_URL=${DEFAULT_BASE_URL}
  AGENCY_AUTONOMY_API_KEY=***  Preferred bearer token
  OPENCLAW_WEBHOOK_SECRET=***  Fallback bearer token
`)
}

function parseArgs(argv) {
  const flags = {
    apply: false,
    help: false,
    leadId: null,
    payloadPath: null,
    trigger: 'workflow-attach-replay',
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') {
      flags.help = true
      continue
    }
    if (arg === '--apply') {
      flags.apply = true
      continue
    }
    if (arg === '--lead-id') {
      flags.leadId = argv[++index]
      continue
    }
    if (arg === '--payload') {
      flags.payloadPath = argv[++index]
      continue
    }
    if (arg === '--trigger') {
      flags.trigger = argv[++index]
      continue
    }
    throw new Error(`Unknown argument: ${arg}`)
  }

  if (flags.help) return flags
  if (!flags.leadId) throw new Error('--lead-id is required.')
  if (!flags.payloadPath) throw new Error('--payload is required.')
  if (!flags.trigger) throw new Error('--trigger cannot be empty.')
  return flags
}

function asRecord(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
}

function stringValue(value) {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null
}

function stringArray(value) {
  return Array.isArray(value) ? value.filter((entry) => typeof entry === 'string' && entry.trim().length > 0) : []
}

function evidencePathsFromPayload(payload) {
  const candidates = [
    payload.local_evidence_to_mirror,
    payload.local_evidence_to_mirror_after_provisioning,
    payload.evidence_paths,
    payload.evidencePaths,
  ]
  for (const candidate of candidates) {
    const paths = stringArray(candidate)
    if (paths.length > 0) return paths
  }
  return []
}

function normalizePayloadForReplay(payload) {
  const evidencePaths = evidencePathsFromPayload(payload)
  return {
    ...payload,
    ...(evidencePaths.length > 0 ? { local_evidence_to_mirror: evidencePaths } : {}),
  }
}

function summarizePayload(payload) {
  const checklist = asRecord(payload.checklist_artifacts || payload.checklistArtifacts)
  const evidence = evidencePathsFromPayload(payload)

  return {
    site_slug: stringValue(payload.site_slug || payload.siteSlug),
    restaurant_name: stringValue(payload.restaurant_name || payload.restaurantName),
    template_slug: stringValue(payload.template_slug || payload.templateSlug || payload.selected_archetype || payload.selectedArchetype),
    current_stage: stringValue(payload.currentStage || payload.current_stage || payload.build_stage),
    checklist_markdown_path: stringValue(checklist.markdown || checklist.markdown_path || checklist.markdownPath),
    checklist_json_path: stringValue(checklist.json || checklist.json_path || checklist.jsonPath),
    evidence_path_count: evidence.length,
    has_canonical_status: Object.keys(asRecord(payload.canonical_status || payload.canonicalStatus)).length > 0,
    has_planner_blocker: Boolean(stringValue(payload.planner_blocker)),
  }
}

async function readPayload(payloadPath) {
  const absolutePath = path.resolve(payloadPath)
  const raw = await fs.readFile(absolutePath, 'utf8')
  const payload = JSON.parse(raw)
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error(`Payload must be a JSON object: ${payloadPath}`)
  }
  return { absolutePath, payload }
}

function buildRequest(baseUrl, leadId, trigger, payload) {
  const url = new URL(`/api/agency/leads/${encodeURIComponent(leadId)}/website-workflow`, baseUrl)
  return {
    url: url.toString(),
    body: {
      trigger,
      attach_payload: payload,
    },
  }
}

async function applyRequest(request) {
  const token = process.env.AGENCY_AUTONOMY_API_KEY?.trim() || process.env.OPENCLAW_WEBHOOK_SECRET?.trim()
  if (!token) {
    throw new Error('AGENCY_AUTONOMY_API_KEY or OPENCLAW_WEBHOOK_SECRET is required when --apply is set.')
  }

  const response = await fetch(request.url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      'x-agency-runtime': 'openclaw',
    },
    body: JSON.stringify(request.body),
  })

  const text = await response.text()
  let parsed = null
  try {
    parsed = text ? JSON.parse(text) : null
  } catch {
    parsed = { raw: text }
  }

  if (!response.ok) {
    const error = new Error(`Mission Control returned HTTP ${response.status}.`)
    error.response = parsed
    throw error
  }

  return { status: response.status, body: parsed }
}

async function main() {
  const flags = parseArgs(process.argv.slice(2))
  if (flags.help) {
    printHelp()
    return
  }

  const { absolutePath, payload } = await readPayload(flags.payloadPath)
  const replayPayload = normalizePayloadForReplay(payload)
  const request = buildRequest(DEFAULT_BASE_URL, flags.leadId, flags.trigger, replayPayload)
  const summary = summarizePayload(replayPayload)

  const dryRun = !flags.apply
  const output = {
    ok: true,
    mode: dryRun ? 'dry-run' : 'apply',
    endpoint: request.url,
    lead_id: flags.leadId,
    payload_path: absolutePath,
    payload_summary: summary,
    request_body_keys: Object.keys(request.body),
  }

  if (dryRun) {
    console.log(JSON.stringify(output, null, 2))
    return
  }

  const result = await applyRequest(request)
  console.log(JSON.stringify({ ...output, mission_control: result }, null, 2))
}

main().catch((error) => {
  console.error(JSON.stringify({
    ok: false,
    error: error.message,
    response: error.response,
  }, null, 2))
  process.exit(1)
})
