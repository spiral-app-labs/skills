#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()

const ACTIVE_AGENCY_SKILLS = new Set([
  'agency-mission-control-sync',
  'restaurant-build-checklist',
  'restaurant-fork-improvement',
  'restaurant-lead-qualification',
  'restaurant-pitch-doc',
  'restaurant-qa-delivery',
  'restaurant-site-router',
  'restaurant-template-analysis',
  'restaurant-template-fork',
  'restaurant-website-audit',
  'website-agency-operator',
])

const REFERENCE_AGENCY_SKILLS = new Set([
  'agency-overnight',
  'agency-website-design',
])

const GENERAL_SKILLS = new Set([
  'agent-foundation-files',
  'amazon-narrative-memo',
  'codex-subagent-recovery',
  'delegation',
  'donna-orchestration-core',
  'evolving-requirements-orchestration',
  'heartbeat-execution',
  'mission-control-task-ops',
  'nina-binky-in-app-resource-writing',
  'nina-binky-seo-article-writing',
  'nina-mission-control-insight-ops',
  'nina-research-decomposition',
  'nina-research-to-copy-pipeline',
  'notion-spec-ops',
  'product-audit',
  'subagent-orchestration',
])

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return null
  const end = text.indexOf('\n---', 4)
  if (end === -1) return null
  const body = text.slice(4, end).trim()
  const fields = new Map()
  for (const line of body.split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/)
    if (match) fields.set(match[1], match[2].replace(/^["']|["']$/g, '').trim())
  }
  return fields
}

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const failures = []
  const entries = await fs.readdir(ROOT, { withFileTypes: true })
  const skillDirs = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('.') || entry.name === 'archive' || entry.name === 'agents' || entry.name === 'restaurant-website-system' || entry.name === 'scripts') continue
    const skillPath = path.join(ROOT, entry.name, 'SKILL.md')
    if (await exists(skillPath)) skillDirs.push(entry.name)
  }

  for (const dir of skillDirs) {
    const skillPath = path.join(ROOT, dir, 'SKILL.md')
    const text = await fs.readFile(skillPath, 'utf8')
    const fm = parseFrontmatter(text)
    if (!fm) {
      failures.push(`${dir}/SKILL.md is missing YAML frontmatter.`)
      continue
    }
    if (!fm.get('name')) failures.push(`${dir}/SKILL.md frontmatter is missing name.`)
    if (!fm.get('description')) failures.push(`${dir}/SKILL.md frontmatter is missing description.`)
    if (fm.get('name') !== dir) failures.push(`${dir}/SKILL.md name should match directory name.`)
  }

  for (const dir of ACTIVE_AGENCY_SKILLS) {
    if (!skillDirs.includes(dir)) failures.push(`Active agency skill missing: ${dir}`)
    if (!(await exists(path.join(ROOT, dir, 'agents', 'openai.yaml')))) {
      failures.push(`Active agency skill missing agents/openai.yaml: ${dir}`)
    }
  }

  for (const dir of skillDirs) {
    const agencyLike = dir.startsWith('agency-') || dir.startsWith('restaurant-') || dir === 'website-agency-operator'
    if (!agencyLike) continue
    if (ACTIVE_AGENCY_SKILLS.has(dir) || REFERENCE_AGENCY_SKILLS.has(dir)) continue
    failures.push(`Unexpected active agency-surface skill: ${dir}`)
  }

  for (const dir of skillDirs) {
    if (ACTIVE_AGENCY_SKILLS.has(dir) || REFERENCE_AGENCY_SKILLS.has(dir) || GENERAL_SKILLS.has(dir)) continue
    failures.push(`Unclassified top-level skill: ${dir}`)
  }

  const agencyWebsiteDesign = await fs.readFile(path.join(ROOT, 'agency-website-design', 'SKILL.md'), 'utf8')
  if (!agencyWebsiteDesign.includes('Reference only')) {
    failures.push('agency-website-design must remain explicitly demoted to reference-only.')
  }

  const agencyOvernight = await fs.readFile(path.join(ROOT, 'agency-overnight', 'SKILL.md'), 'utf8')
  if (!agencyOvernight.includes('Compatibility shim')) {
    failures.push('agency-overnight must remain a compatibility shim.')
  }

  if (failures.length > 0) {
    console.error('Skill validation failed:')
    for (const failure of failures) console.error(`- ${failure}`)
    process.exit(1)
  }

  console.log(`Validated ${skillDirs.length} skills (${ACTIVE_AGENCY_SKILLS.size} active agency skills).`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
