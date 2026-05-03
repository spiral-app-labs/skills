#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const SITES_DIR = path.join(ROOT, 'sites')

const REQUIREMENTS = [
  ['lead-fit-qualified', 'Lead passed the restaurant lead-fit qualification gate'],
  ['current-site-audit', 'Current site audit captured desktop, mobile, menu, reviews, and asset evidence'],
  ['template-route-locked', 'Template route and modifiers are locked from the restaurant site router'],
  ['fork-built', 'Template fork is built with real content, preserved links, and no placeholder copy'],
  ['qa-round-1', 'QA round 1 completed with findings and fixes logged'],
  ['qa-round-2', 'QA round 2 completed with findings and fixes logged'],
  ['qa-round-3', 'QA round 3 completed with findings and fixes logged'],
  ['delivery-package', 'Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached'],
].map(([id, title]) => ({ id, title, qaState: 'pending', required: true }))

const DONE_CRITERIA = [
  'Mission Control lead has a simple sales status and current metadata.build_stage.',
  'Mission Control parent task metadata.requirements mirrors this checklist.',
  'All required checklist rows are passed.',
  'Three QA rounds are logged with screenshot evidence.',
  'Preview URL, pitch doc, outreach draft, and delivery evidence are attached.',
]

function printHelp() {
  console.log(`Usage:
  ./scripts/new-build-checklist.mjs --slug <site-slug> --lead-id <lead-id> --task-id <mc-task-id> --template <template-slug> [--stage queued]

Creates or refreshes sites/<slug>/checklist.json and checklist.md.`)
}

function parseArgs(argv) {
  const args = { stage: 'queued' }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') args.help = true
    else if (arg === '--slug') args.slug = argv[++i]
    else if (arg.startsWith('--slug=')) args.slug = arg.slice('--slug='.length)
    else if (arg === '--lead-id') args.leadId = argv[++i]
    else if (arg.startsWith('--lead-id=')) args.leadId = arg.slice('--lead-id='.length)
    else if (arg === '--task-id') args.taskId = argv[++i]
    else if (arg.startsWith('--task-id=')) args.taskId = arg.slice('--task-id='.length)
    else if (arg === '--template') args.template = argv[++i]
    else if (arg.startsWith('--template=')) args.template = arg.slice('--template='.length)
    else if (arg === '--stage') args.stage = argv[++i]
    else if (arg.startsWith('--stage=')) args.stage = arg.slice('--stage='.length)
    else if (arg === '--deploy-url') args.deployUrl = argv[++i]
    else if (arg.startsWith('--deploy-url=')) args.deployUrl = arg.slice('--deploy-url='.length)
  }
  return args
}

function assertSafeSlug(value) {
  if (!value || !/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(value)) {
    throw new Error('slug is required and must be lowercase, e.g. "little-star".')
  }
}

async function readJsonIfExists(filePath) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf8'))
  } catch (error) {
    if (error && error.code === 'ENOENT') return null
    return null
  }
}

function mergeRequirements(existing) {
  const byId = new Map()
  for (const requirement of REQUIREMENTS) byId.set(requirement.id, { ...requirement })
  if (Array.isArray(existing)) {
    for (const row of existing) {
      if (!row || typeof row !== 'object' || typeof row.id !== 'string') continue
      const base = byId.get(row.id)
      if (!base) continue
      byId.set(row.id, {
        ...base,
        qaState: row.qaState === 'passed' || row.qaState === 'failed' ? row.qaState : base.qaState,
        notes: typeof row.notes === 'string' ? row.notes : base.notes,
        evidence: Array.isArray(row.evidence) ? row.evidence.filter((item) => typeof item === 'string') : base.evidence,
      })
    }
  }
  return Array.from(byId.values())
}

function buildChecklist(args, existing) {
  const now = new Date().toISOString()
  return {
    version: 1,
    leadId: args.leadId ?? existing?.leadId ?? null,
    mcParentTaskId: args.taskId ?? existing?.mcParentTaskId ?? null,
    siteSlug: args.slug,
    templateSlug: args.template ?? existing?.templateSlug ?? null,
    currentStage: args.stage ?? existing?.currentStage ?? 'queued',
    evidencePaths: Array.isArray(existing?.evidencePaths) ? existing.evidencePaths : [],
    qaRounds: Array.isArray(existing?.qaRounds) ? existing.qaRounds : [],
    deployUrl: args.deployUrl ?? existing?.deployUrl ?? null,
    pitchArtifacts: existing?.pitchArtifacts ?? {
      pitchDoc: null,
      outreachDraft: null,
      beforeAfterScreenshots: [],
    },
    blockers: Array.isArray(existing?.blockers) ? existing.blockers : [],
    requirements: mergeRequirements(existing?.requirements),
    doneCriteria: Array.isArray(existing?.doneCriteria) ? existing.doneCriteria : DONE_CRITERIA,
    updatedAt: now,
  }
}

function checkbox(state) {
  return state === 'passed' ? 'x' : ' '
}

function renderMarkdown(checklist) {
  const lines = [
    `# ${checklist.siteSlug} Build Checklist`,
    '',
    `- Lead ID: ${checklist.leadId ?? 'TBD'}`,
    `- MC parent task ID: ${checklist.mcParentTaskId ?? 'TBD'}`,
    `- Template slug: ${checklist.templateSlug ?? 'TBD'}`,
    `- Current stage: ${checklist.currentStage}`,
    `- Deploy URL: ${checklist.deployUrl ?? 'TBD'}`,
    `- Updated: ${checklist.updatedAt}`,
    '',
    '## Requirements',
    '',
    ...checklist.requirements.map((row) => `- [${checkbox(row.qaState)}] ${row.id}: ${row.title}${row.notes ? ` - ${row.notes}` : ''}`),
    '',
    '## Evidence Paths',
    '',
    ...(checklist.evidencePaths.length > 0 ? checklist.evidencePaths.map((item) => `- ${item}`) : ['- TBD']),
    '',
    '## QA Rounds',
    '',
    ...(checklist.qaRounds.length > 0
      ? checklist.qaRounds.map((round) => `- Round ${round.roundNumber ?? round.round_number}: ${round.summary ?? 'logged'}`)
      : ['- Round 1: pending', '- Round 2: pending', '- Round 3: pending']),
    '',
    '## Pitch Artifacts',
    '',
    `- Pitch doc: ${checklist.pitchArtifacts.pitchDoc ?? 'TBD'}`,
    `- Outreach draft: ${checklist.pitchArtifacts.outreachDraft ?? 'TBD'}`,
    '',
    '## Blockers',
    '',
    ...(checklist.blockers.length > 0 ? checklist.blockers.map((blocker) => `- ${blocker.reason ?? blocker}`) : ['- None']),
    '',
    '## Done Criteria',
    '',
    ...checklist.doneCriteria.map((item) => `- ${item}`),
    '',
  ]
  return `${lines.join('\n')}\n`
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return
  }

  assertSafeSlug(args.slug)

  const siteDir = path.join(SITES_DIR, args.slug)
  await fs.mkdir(siteDir, { recursive: true })

  const jsonPath = path.join(siteDir, 'checklist.json')
  const mdPath = path.join(siteDir, 'checklist.md')
  const existing = await readJsonIfExists(jsonPath)
  const checklist = buildChecklist(args, existing)

  await fs.writeFile(jsonPath, `${JSON.stringify(checklist, null, 2)}\n`)
  await fs.writeFile(mdPath, renderMarkdown(checklist))

  console.log(`Wrote sites/${args.slug}/checklist.json`)
  console.log(`Wrote sites/${args.slug}/checklist.md`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
