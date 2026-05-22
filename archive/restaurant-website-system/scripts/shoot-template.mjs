#!/usr/bin/env node
// Deep-capture a template's visual + motion + computed-style data.
//
// Usage:
//   node shoot-template.mjs <slug> <base-url> [path1 path2 ...]
// Example:
//   node shoot-template.mjs qitchen-01 https://qitchen-template.framer.website / /menu /about /reservation
//
// Captures (under inputs/framer-templates/<slug>/):
//   screenshots/desktop-<page>.png          full-page desktop @ 2x
//   screenshots/mobile-<page>.png           full-page mobile @ 2x
//   scroll-frames/desktop-<page>-scroll-NNN.png   at 0/25/50/75/100% scroll
//   scroll-frames/desktop-<page>-hover-book.png   on BOOK A TABLE / RESERVE hover
//   videos/page@<hash>.webm                 page-load video for each page
//   motion-frames/<hash>-tNs.png            extracted frames at 0.3/1/2/3/5s
//   meta/<page>.json                        dims, computed styles, animations, font + image URLs
//
// Requires: Node 18+, playwright (npm install -g playwright + npx playwright install chromium),
//           and ffmpeg in PATH for motion-frame extraction.

import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

// Args: <slug> <base-url> [paths...]
// Type folder is auto-detected from URL: anything with "framer" goes to
// framer-templates, anything else to reference-sites. Override with
// RWS_TYPE=framer-templates|reference-sites env var.
const [, , slug, baseUrl, ...paths] = process.argv;
if (!slug || !baseUrl) {
  console.error('Usage: node shoot-template.mjs <slug> <base-url> [path1 path2 ...]');
  console.error('Override input type with: RWS_TYPE=reference-sites node shoot-template.mjs ...');
  process.exit(1);
}
const PATHS = paths.length ? paths : ['/'];

const TYPE = process.env.RWS_TYPE
  || (/framer/i.test(baseUrl) ? 'framer-templates' : 'reference-sites');
const ROOT = join(REPO_ROOT, 'inputs', TYPE, slug);
console.log(`→ Capturing into inputs/${TYPE}/${slug}/`);
const SHOTS = join(ROOT, 'screenshots');
const SCROLL = join(ROOT, 'scroll-frames');
const VIDEOS = join(ROOT, 'videos');
const MOTION = join(ROOT, 'motion-frames');
const META   = join(ROOT, 'meta');
[SHOTS, SCROLL, VIDEOS, MOTION, META].forEach(d => mkdirSync(d, { recursive: true }));

function pageName(path) {
  return path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-') || 'home';
}

const browser = await chromium.launch();

// ------ Pass 1: full-page screenshots (desktop + mobile) ------
const VIEWPORTS = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile',  { width: 390,  height: 844 }],
];
for (const [vpName, vp] of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  for (const path of PATHS) {
    const name = pageName(path);
    const url = baseUrl.replace(/\/$/, '') + path;
    console.log(`[${vpName}] ${name} → ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(2500);
      await page.evaluate(async () => {
        const total = document.documentElement.scrollHeight;
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < total; y += step) {
          window.scrollTo(0, y);
          await new Promise(r => setTimeout(r, 250));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: join(SHOTS, `${vpName}-${name}.png`), fullPage: true });
    } catch (e) {
      console.error(`  failed: ${e.message}`);
    }
  }
  await ctx.close();
}

// ------ Pass 2: desktop deep — scroll frames, hover, computed styles, motion ------
const desktopVp = { width: 1440, height: 900 };
for (const path of PATHS) {
  const name = pageName(path);
  const url = baseUrl.replace(/\/$/, '') + path;
  console.log(`[deep] ${name}`);
  const ctx = await browser.newContext({
    viewport: desktopVp,
    deviceScaleFactor: 2,
    recordVideo: { dir: VIDEOS, size: desktopVp },
  });
  const page = await ctx.newPage();

  const fontUrls = [], imgUrls = [];
  page.on('response', r => {
    const u = r.url();
    if (/\.(woff2?|ttf|otf)/i.test(u)) fontUrls.push(u);
    if (/\.(jpg|jpeg|png|webp|avif)/i.test(u)) imgUrls.push(u);
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(2500);

  const dims = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  const computed = await page.evaluate(() => {
    const grab = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        selector: sel,
        text: el.textContent?.trim().slice(0, 80),
        fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing, lineHeight: cs.lineHeight,
        color: cs.color, backgroundColor: cs.backgroundColor, textTransform: cs.textTransform,
      };
    };
    return {
      bodyBg: getComputedStyle(document.body).backgroundColor,
      htmlBg: getComputedStyle(document.documentElement).backgroundColor,
      h1: grab('h1'), h2: grab('h2'), h3: grab('h3'), p: grab('p'),
      buttonAny: grab('button, a[role=button], [class*=button]'),
      navLink: grab('nav a, header a'),
    };
  });

  const animations = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('*')).slice(0, 500);
    const a = new Set(), t = new Set(), tx = new Set();
    for (const el of els) {
      const cs = getComputedStyle(el);
      if (cs.animation && !cs.animation.startsWith('none')) a.add(cs.animation);
      if (cs.transition && cs.transition !== 'all 0s ease 0s' && !cs.transition.startsWith('all 0s')) t.add(cs.transition);
      if (cs.transform && cs.transform !== 'none') tx.add(cs.transform);
    }
    return { animations: [...a].slice(0, 20), transitions: [...t].slice(0, 20), transforms: [...tx].slice(0, 20) };
  });

  // Scroll-position frames
  const positions = [0, 0.25, 0.5, 0.75, 1.0];
  const scrollMax = dims.scrollHeight - dims.clientHeight;
  if (scrollMax > 0) {
    for (const pct of positions) {
      const y = Math.round(scrollMax * pct);
      await page.evaluate(yy => window.scrollTo({ top: yy, behavior: 'instant' }), y);
      await page.waitForTimeout(800);
      await page.screenshot({
        path: join(SCROLL, `desktop-${name}-scroll-${Math.round(pct * 100).toString().padStart(3, '0')}.png`),
        fullPage: false,
      });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
  } else {
    // Single-viewport page — just shoot the one frame
    await page.screenshot({ path: join(SCROLL, `desktop-${name}-scroll-000.png`), fullPage: false });
  }

  // Hover the primary CTA
  for (const ctaText of [/book a table/i, /reserve/i, /reservations?/i]) {
    try {
      const btn = await page.$(`text=${ctaText}`);
      if (btn) {
        await btn.hover();
        await page.waitForTimeout(700);
        await page.screenshot({ path: join(SCROLL, `desktop-${name}-hover-cta.png`), fullPage: false });
        break;
      }
    } catch {}
  }

  writeFileSync(join(META, `${name}.json`), JSON.stringify({
    url, dims, computed, animations,
    fontUrls: [...new Set(fontUrls)],
    imgUrls: [...new Set(imgUrls)].slice(0, 40),
  }, null, 2));

  await page.close();
  await ctx.close();
}

await browser.close();

// ------ Pass 3: extract motion frames from videos ------
console.log('\n[ffmpeg] extracting motion frames...');
try {
  for (const f of readdirSync(VIDEOS)) {
    if (!f.endsWith('.webm')) continue;
    const base = f.replace(/^page@/, '').slice(0, 8);
    for (const t of [0.3, 1, 2, 3, 5]) {
      const out = join(MOTION, `${base}-t${t}s.png`);
      if (existsSync(out)) continue;
      try {
        execSync(`ffmpeg -y -ss ${t} -i "${join(VIDEOS, f)}" -frames:v 1 "${out}"`, { stdio: 'pipe' });
      } catch {}
    }
  }
} catch (e) {
  console.error(`ffmpeg extraction skipped: ${e.message}`);
}

console.log('\nDone.');
console.log(`  screenshots: ${SHOTS}`);
console.log(`  scroll frames: ${SCROLL}`);
console.log(`  videos: ${VIDEOS}`);
console.log(`  motion frames: ${MOTION}`);
console.log(`  meta: ${META}`);
