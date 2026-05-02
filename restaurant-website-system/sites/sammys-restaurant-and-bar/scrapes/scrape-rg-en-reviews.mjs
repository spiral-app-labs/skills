import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15', extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' } });
const p = await ctx.newPage();

// Try various review-page URLs
const urls = [
  'https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley/reviews',
  'https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley/reviews?bylang=1',
  'https://www.restaurantguru.com/Sammys-Bar-and-Grill-Huntley/reviews',
];
for (const url of urls) {
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await p.waitForTimeout(3500);
    // Click any "Show more" iteratively
    for (let i = 0; i < 25; i++) {
      const clicked = await p.evaluate(() => {
        let any = false;
        document.querySelectorAll('button, a, span, div').forEach(b => {
          const t = (b.textContent || '').trim();
          if (/^(Show more|Show 10 more|Load more|More reviews|See more|Show all)$/i.test(t)) { try { b.click(); any = true; } catch {} }
        });
        return any;
      });
      await p.evaluate(() => window.scrollBy(0, 4000));
      await p.waitForTimeout(1100);
    }
    const txt = await p.evaluate(() => document.body.innerText);
    const slug = url.replace(/[^a-z0-9]+/gi, '-').slice(-40);
    fs.writeFileSync(`rg-en-${slug}.txt`, txt);
    console.log(slug, txt.length);
  } catch (e) { console.log('err', url, e.message); }
}

// Also force English subdomain
try {
  await p.goto('https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley?utm_source=lang_en', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(2500);
  // Click "All reviews" then scroll
  await p.evaluate(() => {
    const a = Array.from(document.querySelectorAll('a, button')).find(x => /All reviews/i.test(x.textContent || ''));
    if (a) a.click();
  });
  await p.waitForTimeout(2500);
  for (let i = 0; i < 20; i++) {
    await p.evaluate(() => window.scrollBy(0, 4000));
    await p.evaluate(() => {
      document.querySelectorAll('button, a, span').forEach(b => {
        if (/Show more|Load more|More reviews/i.test((b.textContent || '').trim())) try { b.click(); } catch {}
      });
    });
    await p.waitForTimeout(1100);
  }
  fs.writeFileSync('rg-deep-final.txt', await p.evaluate(() => document.body.innerText));
  fs.writeFileSync('rg-deep-final.html', await p.content());
  console.log('rg-deep-final', (await p.evaluate(() => document.body.innerText)).length);
} catch (e) { console.log('rg-deep err', e.message); }

await browser.close();
