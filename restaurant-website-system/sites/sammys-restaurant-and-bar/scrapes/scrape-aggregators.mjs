import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });

async function pull(url, slug) {
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
    const p = await ctx.newPage();
    p.setDefaultTimeout(25000);
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await p.waitForTimeout(3500);
    // expand "more" / "read more"
    await p.evaluate(() => {
      document.querySelectorAll('button, a, span').forEach(b => {
        const t = (b.textContent || '').trim();
        if (/^(More|Read more|Show more|See more)$/i.test(t)) { try { b.click(); } catch {} }
      });
    });
    await p.waitForTimeout(2000);
    await p.screenshot({ path: `screenshots/agg-${slug}.png`, fullPage: false });
    const html = await p.content();
    fs.writeFileSync(`agg-${slug}.html`, html);
    const text = await p.evaluate(() => document.body.innerText);
    fs.writeFileSync(`agg-${slug}.txt`, text);
    await ctx.close();
    console.log('ok', slug, 'len', text.length);
  } catch (e) { console.log('err', slug, e.message); }
}

await pull('https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley', 'restaurantguru');
await pull('https://www.tripadvisor.com/Restaurant_Review-g36156-d7259490-Reviews-Sammy_s_Restaurant_Bar-Huntley_Illinois.html', 'tripadvisor');
await pull('https://www.yelp.com/biz/sammys-bar-and-grill-huntley-2', 'yelp');
await pull('https://sammys-restaurant-bar-1.wheree.com/', 'wheree');
await pull('https://www.restaurantji.com/il/huntley/sammys-bar-and-grill-/', 'restaurantji');

await browser.close();
