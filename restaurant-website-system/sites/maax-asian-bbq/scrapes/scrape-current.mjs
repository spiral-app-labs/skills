import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const out = '../screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const URL = 'https://www.maaxbbqhotpots.com/';

try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(3000);
  await p.screenshot({ path: `${out}/current-site-desktop-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/current-site-desktop-full.png`, fullPage: true });
  fs.writeFileSync('current-site-dom-snapshot.html', await p.content());
  await ctx.close();
  console.log('desktop OK');
} catch (e) { console.log('desktop fail', e.message); }

try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(3000);
  await p.screenshot({ path: `${out}/current-site-mobile-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/current-site-mobile-full.png`, fullPage: true });
  await ctx.close();
  console.log('mobile OK');
} catch (e) { console.log('mobile fail', e.message); }

// About page
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto('https://www.maaxbbqhotpots.com/about', { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${out}/about-desktop.png`, fullPage: true });
  fs.writeFileSync('about-dom.html', await p.content());
  await ctx.close();
} catch (e) { console.log('about fail', e.message); }

// Prices/Menu
try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto('https://www.maaxbbqhotpots.com/prices', { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${out}/prices-mobile.png`, fullPage: true });
  fs.writeFileSync('prices-dom.html', await p.content());
  await ctx.close();
} catch (e) { console.log('prices fail', e.message); }

await browser.close();
console.log('done');
