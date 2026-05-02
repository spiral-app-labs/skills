import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
const p = await ctx.newPage();

// The base RG page mentions 70 photos with "All photos | Food | Interior | Drink" tabs
await p.goto('https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3500);

// Click "All photos" if present
await p.evaluate(() => {
  const a = Array.from(document.querySelectorAll('a, button, span')).find(x => /^All photos$/i.test((x.textContent || '').trim()));
  if (a) a.click();
});
await p.waitForTimeout(3500);

// Inspect img elements
const imgs = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('img').forEach(i => {
    const src = i.currentSrc || i.src;
    const alt = i.getAttribute('alt') || '';
    if (src && !/icon|logo|avatar/i.test(src)) out.push({ src, alt: alt.slice(0, 80) });
  });
  return out.slice(0, 200);
});
fs.writeFileSync('rg-photos-list.json', JSON.stringify(imgs, null, 2));
console.log('rg image elements:', imgs.length);

// Wheree all-photos page
await p.goto('https://sammys-restaurant-bar-1.wheree.com/photos/all', { waitUntil: 'domcontentloaded', timeout: 25000 }).catch(() => {});
await p.waitForTimeout(2500);
const wh = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('img').forEach(i => {
    const src = i.currentSrc || i.src;
    if (src && !/icon|logo|avatar/i.test(src)) out.push({ src, alt: i.alt?.slice(0,80) || '' });
  });
  return out.slice(0, 200);
});
fs.writeFileSync('wheree-photos-list.json', JSON.stringify(wh, null, 2));
console.log('wheree image elements:', wh.length);

await browser.close();
