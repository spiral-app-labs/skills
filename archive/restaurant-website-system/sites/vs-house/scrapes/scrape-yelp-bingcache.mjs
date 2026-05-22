// Last-ditch: try Bing cache and Yandex for an unblocked Yelp snapshot
import { chromium } from 'playwright';
import fs from 'node:fs';

const TARGETS = [
  'https://cc.bingj.com/cache.aspx?q=v%27s+house+north+richland+hills+yelp&d=4670533358030339&mkt=en-US',
  'https://webcache.googleusercontent.com/search?q=cache:yelp.com/biz/v-s-house-north-richland-hills',
  'https://www.bing.com/search?q=site%3Ayelp.com+%22v%27s+house%22+%22north+richland+hills%22',
];
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp-cache.json';
const HTML_DIR = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 900 },
});
const page = await ctx.newPage();

const results = [];
for (let i = 0; i < TARGETS.length; i++) {
  try {
    await page.goto(TARGETS[i], { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2500);
    const html = await page.content();
    fs.writeFileSync(`${HTML_DIR}/yelp-cache-${i}.html`, html);
    const text = await page.evaluate(() => document.body.innerText.slice(0, 8000));
    results.push({ url: TARGETS[i], length: html.length, snippet: text.slice(0, 1500) });
  } catch (e) {
    results.push({ url: TARGETS[i], error: String(e).slice(0, 200) });
  }
}

fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results.map((r) => ({ url: r.url, len: r.length, err: r.error })), null, 2));
await browser.close();
