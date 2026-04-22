import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('https://velvet-shaker.framer.website/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

// Find a 4-tile photo row (CocktailPhotoRow analog) — these are first occurrence
// of multiple images with similar height in a row
const rowInfo = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('img'));
  const tall = imgs.filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 200 && r.height > 200;
  });
  if (tall.length === 0) return null;
  const first = tall[0];
  const r = first.getBoundingClientRect();
  return {
    pageY: window.scrollY + r.top,
    width: r.width,
    height: r.height,
    siblingCount: tall.length,
  };
});
console.log('row:', JSON.stringify(rowInfo));

// Scroll to ~350px ABOVE the row so it's just below fold, then sample animation
const startY = Math.max(0, rowInfo.pageY - 1100);
await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), startY);
await page.waitForTimeout(400);

// Now scroll into view in small steps and sample
const samples = [];
for (let dy = 0; dy <= 600; dy += 60) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), startY + dy);
  await page.waitForTimeout(120);
  const snap = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 200 && r.height > 200;
    }).slice(0, 4);
    return imgs.map((el) => {
      const cs = getComputedStyle(el);
      const p = el.parentElement;
      const ps = p ? getComputedStyle(p) : null;
      const r = el.getBoundingClientRect();
      return {
        topInVp: Math.round(r.top),
        imgTransform: cs.transform.slice(0, 60),
        imgClip: cs.clipPath === 'none' ? null : cs.clipPath,
        parentClip: ps && ps.clipPath !== 'none' ? ps.clipPath : null,
        parentOverflow: ps?.overflow,
        opacity: cs.opacity,
      };
    });
  });
  samples.push({ scrollY: startY + dy, img0: snap[0], img1: snap[1], img2: snap[2], img3: snap[3] });
}
console.log(JSON.stringify(samples.slice(0, 12), null, 2));
await browser.close();
