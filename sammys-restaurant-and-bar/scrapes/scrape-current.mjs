import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const out = 'screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });

// 1) Dead-domain attempt: capture what a guest actually sees when typing the referenced URL
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const resp = await p.goto('http://www.sammysbarandgrill.com/', { waitUntil: 'load', timeout: 20000 }).catch(e => ({ error: e.message }));
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${out}/dead-domain-desktop.png`, fullPage: false });
  fs.writeFileSync('dead-domain-status.txt', JSON.stringify({ url: 'http://www.sammysbarandgrill.com/', error: resp?.error || null, status: typeof resp?.status === 'function' ? resp.status() : null, finalUrl: p.url() }, null, 2));
  await ctx.close();
} catch (e) { fs.writeFileSync('dead-domain-status.txt', `error: ${e.message}`); }

// 2) Facebook page (closest "owned" presence)
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto('https://www.facebook.com/sammyhuntleyil/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: `${out}/facebook-page-desktop.png`, fullPage: false });
  await ctx.close();
} catch (e) { console.log('FB desktop fail', e.message); }

// 3) Facebook mobile
try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto('https://www.facebook.com/sammyhuntleyil/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: `${out}/facebook-page-mobile.png`, fullPage: false });
  await ctx.close();
} catch (e) { console.log('FB mobile fail', e.message); }

// 4) res-menu page (the menu surface guests fall back to)
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto('https://sammys-bar-and-grill.res-menu.com/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${out}/res-menu-desktop-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/res-menu-desktop-full.png`, fullPage: true });
  const html = await p.content();
  fs.writeFileSync('res-menu-dom.html', html);
  await ctx.close();
} catch (e) { console.log('res-menu desktop fail', e.message); }

try {
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  await p.goto('https://sammys-bar-and-grill.res-menu.com/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${out}/res-menu-mobile-fold.png`, fullPage: false });
  await p.screenshot({ path: `${out}/res-menu-mobile-full.png`, fullPage: true });
  await ctx.close();
} catch (e) { console.log('res-menu mobile fail', e.message); }

// 5) Restaurantji (likely first call only, then 429)
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
  const p = await ctx.newPage();
  await p.goto('https://www.restaurantji.com/il/huntley/sammys-bar-and-grill-/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/restaurantji-desktop.png`, fullPage: false });
  const html = await p.content();
  fs.writeFileSync('restaurantji-dom.html', html);
  await ctx.close();
} catch (e) { console.log('Restaurantji fail', e.message); }

await browser.close();
console.log('done');
