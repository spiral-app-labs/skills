import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const out = '../screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const URL = 'https://dibenedettotrattoria.com/';

// Desktop full-page + fold
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/current-site-desktop-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/current-site-desktop-full.png`, fullPage: true });
  const html = await p.content();
  fs.writeFileSync('current-site-dom-snapshot.html', html);
  await ctx.close();
  console.log('desktop OK');
} catch (e) { console.log('desktop fail', e.message); }

// Mobile (iPhone 13)
try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/current-site-mobile-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/current-site-mobile-full.png`, fullPage: true });
  await ctx.close();
  console.log('mobile OK');
} catch (e) { console.log('mobile fail', e.message); }

// Menu page
try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto('https://dibenedettotrattoria.com/hoffman-estates-dibenedetto-trattoria-food-menu', { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${out}/menu-mobile-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/menu-mobile-full.png`, fullPage: true });
  await ctx.close();
  console.log('menu mobile OK');
} catch (e) { console.log('menu mobile fail', e.message); }

await browser.close();
console.log('done');
