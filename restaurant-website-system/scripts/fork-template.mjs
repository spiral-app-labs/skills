#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const ROOT = path.resolve(new URL('..', import.meta.url).pathname)
const TEMPLATES_DIR = path.join(ROOT, 'templates')
const SITES_DIR = path.join(ROOT, 'sites')

function printHelp() {
  console.log(`Usage:
  ./scripts/fork-template.sh --template <template-slug> --slug <site-slug> [--force]
  node scripts/fork-template.mjs <template-slug> <site-slug> [--force]

Copies restaurant-website-system/templates/<template-slug> into sites/<site-slug>
without generated dependencies, build output, screenshots, videos, or capture frames.`)
}

function parseArgs(argv) {
  const args = { force: false }
  const positional = []

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') args.help = true
    else if (arg === '--force') args.force = true
    else if (arg === '--template') args.template = argv[++i]
    else if (arg.startsWith('--template=')) args.template = arg.slice('--template='.length)
    else if (arg === '--slug') args.slug = argv[++i]
    else if (arg.startsWith('--slug=')) args.slug = arg.slice('--slug='.length)
    else positional.push(arg)
  }

  if (!args.template && positional[0]) args.template = positional[0]
  if (!args.slug && positional[1]) args.slug = positional[1]
  return args
}

function assertSafeSlug(label, value) {
  if (!value || !/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(value)) {
    throw new Error(`${label} must be a lowercase slug like "gusto-01" or "little-star".`)
  }
}

function shouldCopy(src) {
  const parts = src.split(path.sep)
  const basename = parts.at(-1) ?? ''
  const blockedDirs = new Set([
    'node_modules',
    '.next',
    'out',
    'dist',
    '.vercel',
    'screenshots',
    'scroll-frames',
    'motion-frames',
    'videos',
    'recreation-screenshots',
  ])

  if (parts.some((part) => blockedDirs.has(part))) return false
  if (basename.endsWith('.tsbuildinfo')) return false
  if (basename === '.DS_Store') return false
  return true
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function updatePackageName(targetDir, slug) {
  const packagePath = path.join(targetDir, 'package.json')
  if (!(await pathExists(packagePath))) return

  const pkg = JSON.parse(await fs.readFile(packagePath, 'utf8'))
  pkg.name = slug
  await fs.writeFile(packagePath, `${JSON.stringify(pkg, null, 2)}\n`)
}

async function writeTemplateMetadata(targetDir, template, slug) {
  const metadata = {
    site_slug: slug,
    template_slug: template,
    created_at: new Date().toISOString(),
    source: `restaurant-website-system/templates/${template}`,
  }
  await fs.writeFile(
    path.join(targetDir, '.agency-template.json'),
    `${JSON.stringify(metadata, null, 2)}\n`,
  )
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return
  }

  assertSafeSlug('template', args.template)
  assertSafeSlug('slug', args.slug)

  const sourceDir = path.join(TEMPLATES_DIR, args.template)
  const targetDir = path.join(SITES_DIR, args.slug)

  if (!(await pathExists(sourceDir))) {
    throw new Error(`Template not found: ${path.relative(ROOT, sourceDir)}`)
  }

  if (await pathExists(targetDir)) {
    if (!args.force) {
      throw new Error(`Site already exists: ${path.relative(ROOT, targetDir)}. Re-run with --force only when MC explicitly approves overwrite.`)
    }
    await fs.rm(targetDir, { recursive: true, force: true })
  }

  await fs.mkdir(SITES_DIR, { recursive: true })
  await fs.cp(sourceDir, targetDir, {
    recursive: true,
    filter: shouldCopy,
  })
  await updatePackageName(targetDir, args.slug)
  await writeTemplateMetadata(targetDir, args.template, args.slug)

  console.log(`Forked ${args.template} -> sites/${args.slug}`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
