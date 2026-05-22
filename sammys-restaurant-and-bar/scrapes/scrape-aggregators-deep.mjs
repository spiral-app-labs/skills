import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });

// 1) RestaurantGuru — has 424 reviews behind pagination/lazy-load
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
  const p = await ctx.newPage();
  p.setDefaultTimeout(30000);
  await p.goto('https://restaurantguru.com/Sammys-Bar-and-Grill-Huntley', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await p.waitForTimeout(3500);

  // Click "All reviews" link if present
  await p.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a, button'));
    const all = links.find(x => /All reviews/i.test(x.textContent || ''));
    if (all) all.click();
  });
  await p.waitForTimeout(3500);

  // Try to find pagination link that opens dedicated reviews page
  const reviewsHref = await p.evaluate(() => {
    const a = Array.from(document.querySelectorAll('a')).find(x => /reviews/i.test(x.getAttribute('href') || '') && /Sammys/i.test(x.getAttribute('href') || ''));
    return a ? a.href : null;
  });
  console.log('rg reviews href:', reviewsHref);
  if (reviewsHref) {
    await p.goto(reviewsHref, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await p.waitForTimeout(3500);
  }

  // Scroll heavily + click "Show more"
  for (let i = 0; i < 20; i++) {
    await p.evaluate(() => {
      window.scrollBy(0, 4000);
      document.querySelectorAll('button, a, span').forEach(b => {
        const t = (b.textContent || '').trim();
        if (/^(Show more|Read more|More reviews|Load more|See more)$/i.test(t)) try { b.click(); } catch {}
      });
    });
    await p.waitForTimeout(1300);
  }

  await p.screenshot({ path: 'screenshots/agg-rg-deep.png', fullPage: false });
  fs.writeFileSync('agg-rg-deep.html', await p.content());
  fs.writeFileSync('agg-rg-deep.txt', await p.evaluate(() => document.body.innerText));
  await ctx.close();
}

// 2) Wheree — should have menu items + reviews
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
  const p = await ctx.newPage();
  await p.goto('https://sammys-restaurant-bar-1.wheree.com/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await p.waitForTimeout(3500);
  for (let i = 0; i < 12; i++) {
    await p.evaluate(() => window.scrollBy(0, 3000));
    await p.waitForTimeout(900);
  }
  fs.writeFileSync('agg-wheree-full.html', await p.content());
  fs.writeFileSync('agg-wheree-full.txt', await p.evaluate(() => document.body.innerText));
  await p.screenshot({ path: 'screenshots/agg-wheree-deep.png', fullPage: false });
  // Reviews subpage
  await p.goto('https://sammys-restaurant-bar-1.wheree.com/reviews', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  await p.waitForTimeout(2500);
  fs.writeFileSync('agg-wheree-reviews.txt', await p.evaluate(() => document.body.innerText));
  await ctx.close();
}

// 3) Restaurantji reviews subpage
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' });
  const p = await ctx.newPage();
  await p.goto('https://www.restaurantji.com/il/huntley/sammys-bar-and-grill-/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await p.waitForTimeout(3500);
  // The reviews tab is a separate page
  const reviewsLink = await p.evaluate(() => {
    const a = Array.from(document.querySelectorAll('a')).find(x => /Read all .* reviews/i.test(x.textContent || '') || /reviews/i.test(x.getAttribute('href') || ''));
    return a ? a.href : null;
  });
  console.log('rji reviews link:', reviewsLink);
  if (reviewsLink) {
    await p.goto(reviewsLink, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
    await p.waitForTimeout(3500);
  }
  for (let i = 0; i < 10; i++) {
    await p.evaluate(() => window.scrollBy(0, 3000));
    await p.waitForTimeout(900);
  }
  fs.writeFileSync('agg-rji-reviews.html', await p.content());
  fs.writeFileSync('agg-rji-reviews.txt', await p.evaluate(() => document.body.innerText));
  await p.screenshot({ path: 'screenshots/agg-rji-reviews.png', fullPage: false });
  await ctx.close();
}

// 4) Tripadvisor with realistic UA + headers
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.83 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' }
  });
  const p = await ctx.newPage();
  await p.goto('https://www.tripadvisor.com/Restaurant_Review-g36156-d7259490-Reviews-Sammy_s_Restaurant_Bar-Huntley_Illinois.html', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(e => console.log('ta', e.message));
  await p.waitForTimeout(4500);
  // Try expanding More
  await p.evaluate(() => {
    document.querySelectorAll('button, span').forEach(b => {
      const t = (b.textContent || '').trim();
      if (/^(More|Read more)$/i.test(t)) try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(2000);
  fs.writeFileSync('agg-ta.html', await p.content());
  fs.writeFileSync('agg-ta.txt', await p.evaluate(() => document.body.innerText));
  await p.screenshot({ path: 'screenshots/agg-ta.png', fullPage: false });
  await ctx.close();
}

await browser.close();
console.log('done');
