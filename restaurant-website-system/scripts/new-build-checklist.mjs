#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const SITES_DIR = path.join(ROOT, 'sites')

const WORKFLOW_VERSION = '2026-05-04'

const CANONICAL_STAGES = [
  'queued',
  'claimed',
  'checklist',
  'auditing',
  'reviews',
  'routing',
  'forking',
  'building',
  'improving',
  'top_3_improvements',
  'concierge',
  'pitch',
  'battle_cards',
  'qa_round_1',
  'qa_round_2',
  'qa_round_3',
  'packaging',
  'delivered',
  'blocked',
]

const SKILL_PATHS = {
  'agency-mission-control-sync': 'restaurant-website-system/../agency-mission-control-sync/SKILL.md',
  'restaurant-build-checklist': 'restaurant-website-system/../restaurant-build-checklist/SKILL.md',
  'restaurant-fork-improvement': 'restaurant-website-system/../restaurant-fork-improvement/SKILL.md',
  'restaurant-pitch-doc': 'restaurant-website-system/../restaurant-pitch-doc/SKILL.md',
  'restaurant-qa-delivery': 'restaurant-website-system/../restaurant-qa-delivery/SKILL.md',
  'restaurant-site-router': 'restaurant-website-system/../restaurant-site-router/SKILL.md',
  'restaurant-template-fork': 'restaurant-website-system/../restaurant-template-fork/SKILL.md',
  'restaurant-website-audit': 'restaurant-website-system/../restaurant-website-audit/SKILL.md',
  'website-agency-system': '../../skills/website-agency-system/SKILL.md',
  'browser-automation': 'OpenClaw browser-automation skill',
}

function skill(name, operator = 'evan') {
  return { name, operator, path: SKILL_PATHS[name] ?? null }
}

const WORKFLOW_STEPS = [
  {
    id: 'checklist_created',
    stage: 'checklist',
    title: 'Create and sync local + Mission Control checklist',
    requiredSkills: [skill('restaurant-build-checklist'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['checklist-md', 'Local checklist.md exists for this restaurant'],
      ['checklist-json', 'Local checklist.json exists for this restaurant'],
      ['checklist-mc-sync', 'Mission Control root + child task metadata mirrors checklist paths, requirements, evidence, and current stage'],
    ],
    evidenceRequired: ['checklist.md path', 'checklist.json path', 'MC root task metadata with checklist paths'],
  },
  {
    id: 'current_site_audit',
    stage: 'auditing',
    title: 'Audit current site with browser evidence',
    requiredSkills: [skill('restaurant-website-audit'), skill('browser-automation', 'browser_automation'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['current-site-screenshots', 'Desktop and mobile screenshots captured'],
      ['current-site-scrape', 'Live site DOM/text scrape captured'],
      ['current-site-opportunities', 'Audit names concrete conversion, credibility, mobile, and factual gaps'],
    ],
    evidenceRequired: ['audit.md', 'desktop screenshot', 'mobile screenshot', 'DOM/text scrape'],
  },
  {
    id: 'google_reviews_capture',
    stage: 'reviews',
    title: 'Capture Google Reviews evidence',
    requiredSkills: [skill('restaurant-website-audit'), skill('browser-automation', 'browser_automation'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['reviews-highest-filter', 'Google Reviews opened in browser and sorted by Highest'],
      ['reviews-thirty-written', '30 written reviews captured, or exact shortage/blocker documented'],
      ['reviews-themes', 'Review themes summary is usable for copy and pitch docs'],
    ],
    evidenceRequired: ['Google profile screenshot', 'Highest-filter screenshot', '30-review packet JSON/MD'],
  },
  {
    id: 'template_route_fork_build',
    stage: 'building',
    title: 'Route to one archetype, fork template, and build first preview',
    requiredSkills: [skill('website-agency-system'), skill('restaurant-site-router'), skill('restaurant-template-fork'), skill('restaurant-build-checklist'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['template-route-locked', 'Exactly one archetype/template route is chosen and justified'],
      ['fork-built', 'Template fork builds successfully with real content and preserved conversion links'],
      ['specificity', 'No generic restaurant copy, fake claims, fake menu items, fake reviews, or fake ordering paths'],
    ],
    evidenceRequired: ['routing rationale', 'source.md/content files', 'npm build/typecheck output', 'preview URL or local preview evidence'],
  },
  {
    id: 'website_improvement_pass',
    stage: 'improving',
    title: 'Run first full improvement pass',
    requiredSkills: [skill('restaurant-fork-improvement'), skill('website-agency-system'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['identity-specific', 'Copy/visual rhythm feels specific to the restaurant and selected archetype'],
      ['conversion-paths', 'Order/reserve/call/directions/catering/events paths are accurate as applicable'],
      ['mobile-check', 'Mobile pass is explicitly checked with evidence'],
    ],
    evidenceRequired: ['improvement notes', 'before/after screenshots or changed file list', 'mobile evidence'],
  },
  {
    id: 'top_three_improvements',
    stage: 'top_3_improvements',
    title: 'Identify and implement top 3 improvements',
    requiredSkills: [skill('restaurant-fork-improvement'), skill('restaurant-build-checklist'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['top-three-named', 'Top 3 concrete improvements are named from audit/preview/QA'],
      ['top-three-implemented', 'All three improvements are implemented'],
      ['top-three-evidence', 'Each improvement has before/after evidence'],
    ],
    evidenceRequired: ['top-3 improvements doc', 'before/after screenshots or diff evidence'],
  },
  {
    id: 'ai_concierge_added',
    stage: 'concierge',
    title: 'Add truthful AI concierge or record blocker',
    requiredSkills: [skill('website-agency-system'), skill('restaurant-build-checklist'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['concierge-kb-truthful', 'Concierge KB only uses verified restaurant facts'],
      ['concierge-tested', 'Short transcript proves useful behavior'],
      ['concierge-safe', 'Fallbacks prevent fake reservations, unsupported promises, or invented facts'],
    ],
    evidenceRequired: ['KB/source file', 'test transcript', 'blocker if concierge cannot be safely added'],
  },
  {
    id: 'pitch_doc',
    stage: 'pitch',
    title: 'Create sellable pitch doc',
    requiredSkills: [skill('restaurant-pitch-doc'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['pitch-specific', 'Pitch is specific to restaurant, neighborhood/cuisine, reviews, and conversion gaps'],
      ['pitch-before-after', 'Pitch explains before/after delta in owner language'],
      ['pitch-evidence', 'Evidence and preview links are embedded or linked'],
    ],
    evidenceRequired: ['pitch-doc.md', 'before/after evidence links'],
  },
  {
    id: 'battle_cards_doc',
    stage: 'battle_cards',
    title: 'Create owner battle cards',
    requiredSkills: [skill('restaurant-pitch-doc'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['battle-cards-objections', 'Likely owner objections have concise answers'],
      ['battle-cards-demo-path', 'Demo path and proof points are clear'],
      ['battle-cards-risks', 'Risks/unknowns are called out truthfully'],
    ],
    evidenceRequired: ['battle-cards.md'],
  },
  {
    id: 'qa_round_1',
    stage: 'qa_round_1',
    title: 'QA round 1',
    requiredSkills: [skill('restaurant-qa-delivery'), skill('browser-automation', 'browser_automation'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['qa-round-1', 'QA round 1 completed with screenshots, findings, fixes, and MC writeback'],
    ],
    evidenceRequired: ['qa-round-1.md', 'desktop screenshot', 'mobile screenshot', 'build/typecheck result'],
  },
  {
    id: 'qa_round_2',
    stage: 'qa_round_2',
    title: 'QA round 2',
    requiredSkills: [skill('restaurant-qa-delivery'), skill('browser-automation', 'browser_automation'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['qa-round-2', 'QA round 2 completed with screenshots, findings, fixes, and MC writeback'],
    ],
    evidenceRequired: ['qa-round-2.md', 'desktop screenshot', 'mobile screenshot', 'build/typecheck result'],
  },
  {
    id: 'qa_round_3',
    stage: 'qa_round_3',
    title: 'QA round 3 final sell-readiness QA',
    requiredSkills: [skill('restaurant-qa-delivery'), skill('website-agency-system'), skill('browser-automation', 'browser_automation'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['qa-round-3', 'QA round 3 completed with final sell-readiness screenshots, fixes, and MC writeback'],
    ],
    evidenceRequired: ['qa-round-3.md', 'desktop screenshots', 'mobile screenshots', 'build/typecheck result'],
  },
  {
    id: 'delivery',
    stage: 'packaging',
    title: 'Package and deliver only after all gates pass',
    requiredSkills: [skill('restaurant-qa-delivery'), skill('restaurant-pitch-doc'), skill('agency-mission-control-sync', 'donna')],
    requirements: [
      ['delivery-package', 'Preview URL, screenshots, pitch doc, battle cards, checklist, QA evidence, and requirement status are mirrored to MC'],
      ['delivery-no-missing-evidence', 'No delivery until MC has checklist paths, preview/artifact URL, and required gate evidence'],
    ],
    evidenceRequired: ['preview URL', 'pitch doc', 'battle cards', 'checklist.md/json', 'QA evidence', 'MC delivery writeback'],
  },
]

const REQUIREMENTS = WORKFLOW_STEPS.flatMap((step) => step.requirements.map(([id, title]) => ({
  id,
  title,
  qaState: 'pending',
  required: true,
  workflowStepId: step.id,
  stage: step.stage,
})))

const DONE_CRITERIA = [
  'Mission Control root task metadata.build_stage/currentStage matches this checklist currentStage.',
  'Mission Control root + child tasks mirror this checklist requirements, evidence_required, required_skills, and checklist paths.',
  'Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.',
  'Three QA rounds are logged with desktop/mobile screenshot evidence and MC writeback.',
  'Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.',
]

function printHelp() {
  console.log(`Usage:
  ./scripts/new-build-checklist.mjs --slug <site-slug> --lead-id <lead-id> --task-id <mc-task-id> --template <template-slug> [--stage checklist]

Creates or refreshes sites/<slug>/checklist.json and checklist.md from the canonical Mission Control website workflow.`)
}

function parseArgs(argv) {
  const args = { stage: 'checklist' }
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

function assertValidStage(value) {
  if (!CANONICAL_STAGES.includes(value)) {
    throw new Error(`stage must be one of: ${CANONICAL_STAGES.join(', ')}`)
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
        status: row.status === 'passed' || row.status === 'failed' || row.status === 'pending' ? row.status : row.qaState,
        notes: typeof row.notes === 'string' ? row.notes : base.notes,
        evidence: Array.isArray(row.evidence) ? row.evidence.filter((item) => typeof item === 'string') : base.evidence,
      })
    }
  }
  return Array.from(byId.values())
}

function mergeWorkflowSteps(existing) {
  const existingById = new Map()
  if (Array.isArray(existing)) {
    for (const step of existing) {
      if (step && typeof step === 'object' && typeof step.id === 'string') existingById.set(step.id, step)
    }
  }

  return WORKFLOW_STEPS.map((step, index) => {
    const prior = existingById.get(step.id) ?? {}
    return {
      ...step,
      order: index + 1,
      status: prior.status === 'passed' || prior.status === 'failed' || prior.status === 'in_progress' ? prior.status : 'pending',
      evidence: Array.isArray(prior.evidence) ? prior.evidence.filter((item) => typeof item === 'string') : [],
      blocker: prior.blocker ?? null,
    }
  })
}

function buildChecklist(args, existing) {
  const now = new Date().toISOString()
  const siteSlug = args.slug
  return {
    version: 2,
    workflowVersion: WORKFLOW_VERSION,
    sourceOfTruth: 'Mission Control tasks.metadata + this mirrored local checklist',
    leadId: args.leadId ?? existing?.leadId ?? null,
    mcParentTaskId: args.taskId ?? existing?.mcParentTaskId ?? null,
    siteSlug,
    templateSlug: args.template ?? existing?.templateSlug ?? null,
    currentStage: args.stage ?? existing?.currentStage ?? 'checklist',
    checklistArtifacts: {
      markdown: `restaurant-website-system/sites/${siteSlug}/checklist.md`,
      json: `restaurant-website-system/sites/${siteSlug}/checklist.json`,
    },
    missionControlSync: {
      required: true,
      rootMetadataMustMirror: [
        'build_stage/currentStage',
        'checklist_markdown_path',
        'checklist_json_path',
        'requirements',
        'evidence_required',
        'required_skills',
        'passed_requirement_ids',
        'blocker',
      ],
      childTasksMustMirror: ['workflow_step_id', 'requirements', 'evidence_required', 'required_skills', 'skill_contract', 'operator_contract'],
    },
    workflowSteps: mergeWorkflowSteps(existing?.workflowSteps),
    evidencePaths: Array.isArray(existing?.evidencePaths) ? existing.evidencePaths : [],
    qaRounds: Array.isArray(existing?.qaRounds) ? existing.qaRounds : [],
    deployUrl: args.deployUrl ?? existing?.deployUrl ?? null,
    pitchArtifacts: existing?.pitchArtifacts ?? {
      pitchDoc: null,
      battleCards: null,
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
    `- Workflow version: ${checklist.workflowVersion}`,
    `- Source of truth: ${checklist.sourceOfTruth}`,
    `- Lead ID: ${checklist.leadId ?? 'TBD'}`,
    `- MC parent task ID: ${checklist.mcParentTaskId ?? 'TBD'}`,
    `- Template slug: ${checklist.templateSlug ?? 'TBD'}`,
    `- Current stage: ${checklist.currentStage}`,
    `- Checklist MD: ${checklist.checklistArtifacts.markdown}`,
    `- Checklist JSON: ${checklist.checklistArtifacts.json}`,
    `- Deploy URL: ${checklist.deployUrl ?? 'TBD'}`,
    `- Updated: ${checklist.updatedAt}`,
    '',
    '## Mission Control Sync Contract',
    '',
    '- MC root task metadata must mirror currentStage/build_stage, checklist paths, requirements, evidence_required, required_skills, passed_requirement_ids, and blockers.',
    '- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.',
    '- Do not mark a later gate complete from local files alone. MC task status + MC requirement evidence must move with the checklist.',
    '',
    '## Canonical Gates / Skills',
    '',
    ...checklist.workflowSteps.flatMap((step) => [
      `### ${step.order}. ${step.id} — ${step.title}`,
      `- Stage: ${step.stage}`,
      `- Status: ${step.status}`,
      `- Required skills: ${step.requiredSkills.map((item) => item.name).join(', ')}`,
      `- Evidence required: ${step.evidenceRequired.join('; ')}`,
      ...step.requirements.map(([id, title]) => `- Requirement: ${id} — ${title}`),
      '',
    ]),
    '## Requirement Status',
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
    `- Battle cards: ${checklist.pitchArtifacts.battleCards ?? 'TBD'}`,
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
  assertValidStage(args.stage)

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
