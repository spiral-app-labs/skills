#!/usr/bin/env node
// Capture before/after viewport screenshots for an outbound pitch asset.
// Uses viewport-only (NOT full-page) so the captures stay small enough to view
// per feedback_restaurant_template_images.md.
//
// Usage:
//   node shoot-pitch-asset.mjs <out-dir> <before-url> <after-url>
// Example:
//   node shoot-pitch-asset.mjs ~/agency-forks/walnut-speakeasy-01/pitch-asset \
//     https://thewalnutspeakeasy.com https://walnut-speakeasy-01.vercel.app

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { homedir } from 'os';

const [, , outDirArg, beforeUrl, afterUrl] = process.argv;
if (!outDirArg || !beforeUrl || !afterUrl) {
  console.error('Usage: node shoot-pitch-asset.mjs <out-dir> <before-url> <after-url>');
  process.exit(1);
}
const outDir = resolve(outDirArg.replace(/^~/, homedir()));
mkdirSync(outDir, { recursive: true });

const VIEWPORTS = [
  { tag: 'desktop', width: 1440, height: 900,  deviceScaleFactor: 1 },
  { tag: 'mobile',  width: 390,  height: 844,  deviceScaleFactor: 2 },
];
const TARGETS = [
  { tag: 'before', url: beforeUrl },
  { tag: 'after',  url: afterUrl  },
];

const browser = await chromium.launch();
for (const t of TARGETS) {
  for (const v of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: v.width, height: v.height },
      deviceScaleFactor: v.deviceScaleFactor,
      userAgent: v.tag === 'mobile'
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    });
    const page = await ctx.newPage();
    console.log(`→ ${t.tag} ${v.tag} ${t.url}`);
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`  (networkidle timeout — capturing anyway)`);
    }
    await page.waitForTimeout(1500);
    const out = join(outDir, `${t.tag}-${v.tag}.png`);
    await page.screenshot({ path: out, fullPage: false });
    console.log(`  → ${out}`);
    await ctx.close();
  }
}
await browser.close();
console.log('Done.');
