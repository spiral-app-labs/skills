// Pull all DSC*-class photos from vshouse.net /space, /food, /bar pages.
// Outputs to ../public/images/vs-house/{space,food,bar}/<filename>.
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const PAGES = [
  { url: 'https://www.vshouse.net/space', dir: 'space' },
  { url: 'https://www.vshouse.net/food', dir: 'food' },
  { url: 'https://www.vshouse.net/bar', dir: 'bar' },
  { url: 'https://www.vshouse.net/',     dir: 'home' },
];

const OUT_ROOT = path.resolve(process.cwd(), '../public/images/vs-house');

async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const allUrls = new Set();
  const byDir = {};

  for (const { url, dir } of PAGES) {
    byDir[dir] = byDir[dir] || new Set();
    console.log(`→ visiting ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.warn(`   timeout/skip on ${url}: ${e.message}`);
      continue;
    }
    // scroll to lazy-load
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0; const step = 800;
        const id = setInterval(() => {
          window.scrollBy(0, step); y += step;
          if (y >= document.body.scrollHeight) { clearInterval(id); res(); }
        }, 200);
      });
    });
    await page.waitForTimeout(1500);
    const urls = await page.$$eval('img', (imgs) =>
      imgs
        .map((i) => i.src || i.getAttribute('data-src') || '')
        .filter((u) => u && u.includes('squarespace-cdn.com'))
    );
    for (const u of urls) {
      const clean = u.split('?')[0]; // strip query for de-dup
      byDir[dir].add(clean);
      allUrls.add(clean);
    }
    console.log(`   ${urls.length} imgs (deduped: ${byDir[dir].size})`);
  }

  await browser.close();

  // Download
  await mkdir(OUT_ROOT, { recursive: true });
  let count = 0;
  for (const [dir, urls] of Object.entries(byDir)) {
    const outDir = path.join(OUT_ROOT, dir);
    await mkdir(outDir, { recursive: true });
    for (const url of urls) {
      // ask for a reasonable size from squarespace
      const sized = url + '?format=2500w';
      const filename = path.basename(url);
      const outPath = path.join(outDir, filename);
      if (existsSync(outPath)) { count++; continue; }
      try {
        const res = await fetch(sized);
        if (!res.ok) { console.warn(`   ! ${res.status} ${filename}`); continue; }
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(outPath, buf);
        count++;
        process.stdout.write(`.`);
      } catch (e) {
        console.warn(`   ! download fail ${filename}: ${e.message}`);
      }
    }
  }
  console.log(`\n✓ downloaded ${count} images to ${OUT_ROOT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
