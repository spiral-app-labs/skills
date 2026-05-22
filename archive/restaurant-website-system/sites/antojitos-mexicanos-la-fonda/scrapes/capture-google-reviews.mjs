import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const slug = 'antojitos-mexicanos-la-fonda';
const root = path.resolve(`restaurant-website-system/sites/${slug}`);
await mkdir(path.join(root, 'screenshots'), { recursive: true });
await mkdir(path.join(root, 'scrapes'), { recursive: true });

const targets = await (await fetch(`${cdp}/json/list`)).json();
const target = targets.find(t => t.url.includes('google.com/maps') && (t.url.includes('Antojitos') || t.title.includes('Antojitos')));
if (!target) throw new Error('Antojitos Google Maps tab not found');

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result);
    }
  };
  return new Promise((resolve, reject) => {
    ws.onerror = reject;
    ws.onopen = () => resolve({
      send(method, params = {}) {
        const callId = ++id;
        ws.send(JSON.stringify({ id: callId, method, params }));
        return new Promise((resolve, reject) => pending.set(callId, { resolve, reject }));
      },
      close: () => ws.close(),
    });
  });
}

const page = await connect(target.webSocketDebuggerUrl);
await page.send('Page.enable');
await page.send('Runtime.enable');
await page.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });

const result = await page.send('Runtime.evaluate', {
  awaitPromise: true,
  returnByValue: true,
  expression: `(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    const byText = (selector, text) => Array.from(document.querySelectorAll(selector)).find(el => (el.innerText || el.getAttribute('aria-label') || '').trim().toLowerCase().includes(text));
    const reviewsTab = Array.from(document.querySelectorAll('[role="tab"], button')).find(el => (el.getAttribute('aria-label') || el.innerText || '').toLowerCase().includes('reviews'));
    if (reviewsTab) { reviewsTab.click(); await delay(800); }
    const sort = Array.from(document.querySelectorAll('button')).find(b => (b.getAttribute('aria-label') || b.innerText || '').toLowerCase().includes('sort'));
    if (sort) { sort.click(); await delay(500); }
    const highest = Array.from(document.querySelectorAll('[role="menuitemradio"], div, span')).find(el => (el.innerText || '').trim() === 'Highest rating');
    if (highest) { highest.click(); await delay(1500); }
    const scroller = Array.from(document.querySelectorAll('div')).filter(el => el.scrollHeight > el.clientHeight + 500).sort((a,b)=>b.scrollHeight-a.scrollHeight)[0];
    const clickMore = () => document.querySelectorAll('button.w8nwRe, button[aria-label="See more"]').forEach(b => { try { b.click(); } catch {} });
    const seen = new Map();
    const stopPatterns = [/^Order type$/i, /^Meal type$/i, /^Price per person$/i, /^Food:/i, /^Service:/i, /^Atmosphere:/i, /^Recommended dishes$/i, /^Recommendation for vegetarians/i, /^Vegetarian offerings$/i, /^Parking/i, /^Wheelchair accessibility$/i, /^Kid-friendliness$/i, /^Dietary restrictions$/i, /^Dine in$/i, /^Take out$/i, /^Lunch$/i, /^Dinner$/i, /^Brunch$/i, /^Other$/i, /^\\+\\d+$/];
    const parse = txt => {
      const lines = txt.split('\\n').map(s => s.trim()).filter(Boolean).filter(s => !['','','','','Like','Share'].includes(s));
      const reviewer = lines[0] || '';
      const date = lines.find(s => /(ago|Edited|yesterday|today)/i.test(s)) || '';
      const rating = Math.min(5, (txt.match(//g) || []).length);
      const dateIndex = lines.indexOf(date);
      const bodyLines = [];
      for (let i = Math.max(0, dateIndex + 1); i < lines.length; i++) {
        const line = lines[i].replace(/… More$/,'').trim();
        if (!line || stopPatterns.some(re => re.test(line)) || line.startsWith('Response from the owner')) break;
        bodyLines.push(line);
      }
      const responseIndex = lines.findIndex(s => s.startsWith('Response from the owner'));
      return { reviewer, rating, date, text: bodyLines.join('\\n'), owner_reply: responseIndex >= 0 ? lines.slice(responseIndex).join('\\n') : null, raw: txt };
    };
    const harvest = () => {
      clickMore();
      for (const el of document.querySelectorAll('.jftiEf[data-review-id]')) {
        const id = el.getAttribute('data-review-id');
        const txt = el.innerText || '';
        if (!id || txt.length < 70) continue;
        const parsed = parse(txt);
        if (parsed.text.length >= 12 && parsed.rating >= 4) seen.set(id, parsed);
      }
    };
    for (let i=0; i<90 && seen.size<35; i++) {
      harvest();
      if (scroller) scroller.scrollBy(0, Math.max(620, scroller.clientHeight * 0.9));
      await delay(400);
    }
    harvest();
    return {
      captured_at: new Date().toISOString(),
      source: location.href,
      business: 'Antojitos Mexicanos La Fonda',
      sort: 'Highest rating',
      total_visible_reviews: seen.size,
      count: Math.min(30, seen.size),
      reviews: Array.from(seen.values()).slice(0,30)
    };
  })()`
});

if (result.exceptionDetails) {
  throw new Error(`Runtime evaluate failed: ${JSON.stringify(result.exceptionDetails, null, 2)}`);
}
const packet = result.result?.value;
if (!packet) {
  throw new Error(`Runtime evaluate returned no packet: ${JSON.stringify(result, null, 2).slice(0, 4000)}`);
}
await writeFile(path.join(root, 'scrapes', 'google-reviews-highest-30.json'), JSON.stringify(packet, null, 2) + '\n');
const md = ['# Antojitos Mexicanos La Fonda — Google Reviews Highest 30', '', `Captured: ${packet.captured_at}`, `Source: ${packet.source}`, `Sort: ${packet.sort}`, `Count: ${packet.count}`, ''].concat(packet.reviews.map((r, i) => `## ${i + 1}. ${r.reviewer}\n\n- Rating: ${r.rating}\n- Date: ${r.date}\n\n${r.text}${r.owner_reply ? `\n\nOwner reply:\n${r.owner_reply}` : ''}\n`)).join('\n');
await writeFile(path.join(root, 'scrapes', 'google-reviews-highest-30.md'), md);
const shot = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
await writeFile(path.join(root, 'screenshots', 'google-reviews-highest-2026-05-04.png'), Buffer.from(shot.data, 'base64'));
page.close();
console.log(JSON.stringify({ count: packet.reviews.length, total_visible_reviews: packet.total_visible_reviews, first: packet.reviews[0], screenshot: `restaurant-website-system/sites/${slug}/screenshots/google-reviews-highest-2026-05-04.png` }, null, 2));
