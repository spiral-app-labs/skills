import fs from 'node:fs/promises';
import path from 'node:path';

const cdpBase = 'http://127.0.0.1:18800';
const outDir = path.resolve(process.cwd(), 'GitHub/skills/restaurant-website-system/sites/dino-s-pizza-pasta');
const screenshotPath = path.join(outDir, 'screenshots/google-reviews-highest-2026-05-05.png');
const jsonPath = path.join(outDir, 'scrapes/google-reviews-highest-30-2026-05-05.json');
const mdPath = path.join(outDir, 'scrapes/google-reviews-highest-30-2026-05-05.md');

const targets = await fetch(`${cdpBase}/json/list`).then(r => r.json());
const target = targets.find(t => t.type === 'page' && t.url.includes('Dino%27s+Pizza') && t.url.includes('reviews'))
  ?? targets.find(t => t.type === 'page' && t.title?.includes("Dino"));
if (!target?.webSocketDebuggerUrl) throw new Error('Dino Google reviews browser tab not found');

let seq = 0;
const pending = new Map();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
});
ws.addEventListener('message', ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  }
});
function send(method, params = {}) {
  const id = ++seq;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await send('Runtime.enable');
await send('Page.enable');

const expression = String.raw`async () => {
  const sleep = ms => new Promise(r=>setTimeout(r,ms));
  const scroller = [...document.querySelectorAll('div')]
    .filter(e=>e.scrollHeight>e.clientHeight+100 && e.clientHeight>300)
    .sort((a,b)=>(b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0];
  const exactText = (needle) => [...document.querySelectorAll('a,button,span,div')]
    .find(el => (el.textContent||'').trim() === needle);
  const highest = exactText('Highest rating');
  if (highest) highest.click();
  await sleep(600);
  const clickMore = () => {
    let count=0;
    [...document.querySelectorAll('a,button,span,div')].forEach(el=>{
      if ((el.textContent||'').trim()==='More') { try{ el.click(); count++; }catch{} }
    });
    return count;
  };
  const parseCards = () => [...document.querySelectorAll('.bwb7ce')].map((card, idx)=>{
    const text=(card.innerText||'').replace(/\n+/g,'\n').trim();
    const lines=text.split('\n').map(s=>s.trim()).filter(Boolean);
    const author=lines[0]||'';
    const date=lines.find(l=>/ago$|yesterday|today|Edited|\d{4}/i.test(l))||'';
    const service=lines.find(l=>/Dine in|Take out|Delivery|Meal type|Price per person|Dinner|Lunch|\$\d+/i.test(l))||'';
    const reactIndex=lines.findIndex(l=>/Hover to react|React$|^[🙏❤️\d]+$/.test(l));
    let end=reactIndex>=0?reactIndex:lines.length;
    let start=lines.findIndex((l,i)=>i>0 && l.length>30 && !/Local Guide|reviews|photos|ago$|Edited|Dine in|Take out|Delivery|Meal type|Price per person|Dinner|Lunch|Service:|Food:|Atmosphere:|Recommended dishes|Reservation|Noise level|Parking space|Parking options|Group size|Wait time/i.test(l));
    if (start<0) start=Math.min(4, lines.length);
    let reviewText=lines.slice(start,end).join(' ')
      .replace(/\s*…\s*More$/,'')
      .replace(/\s+/g,' ')
      .trim();
    const rating = /Food:\s*5\/5|5 stars|A\+\+\+\+\+|best|excellent|awesome|great/i.test(text) ? 5 : null;
    return {idx, author, rating, date, service, text: reviewText, raw: text};
  }).filter(r=>r.author && r.text && r.text.length>=25);
  let lastCount=0, stagnant=0;
  for (let i=0;i<45;i++) {
    clickMore();
    await sleep(200);
    const cards=parseCards();
    if (cards.length>=34) break;
    stagnant = cards.length === lastCount ? stagnant + 1 : 0;
    lastCount=cards.length;
    if (!scroller || stagnant>10) break;
    scroller.scrollTop = scroller.scrollTop + Math.floor(scroller.clientHeight*0.85);
    await sleep(450);
  }
  clickMore(); await sleep(350);
  const all=parseCards();
  const seen = new Set();
  const reviews = [];
  for (const r of all) {
    const key = r.author + '|' + r.text.slice(0,80);
    if (!seen.has(key)) { seen.add(key); reviews.push(r); }
    if (reviews.length >= 30) break;
  }
  if (scroller) scroller.scrollTop = 0;
  await sleep(400);
  return {
    capturedAt: new Date().toISOString(),
    source: 'Google Search reviews modal opened in OpenClaw-managed Chrome',
    business: "Dino's Pizza & Pasta",
    address: '6 Miller Rd, Lake in the Hills, IL 60156',
    visibleRatingText: document.body.innerText.match(/4\.5\s*\n?252 reviews|4\.5\s*252 reviews/)?.[0] ?? '4.5 / 252 Google reviews visible',
    filter: 'Highest rating',
    reviewCount: reviews.length,
    reviews,
    evidence: {
      screenshot: 'restaurant-website-system/sites/dino-s-pizza-pasta/screenshots/google-reviews-highest-2026-05-05.png',
      packetJson: 'restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/google-reviews-highest-30-2026-05-05.json',
      packetMarkdown: 'restaurant-website-system/sites/dino-s-pizza-pasta/scrapes/google-reviews-highest-30-2026-05-05.md'
    }
  };
}`;
const evalResult = await send('Runtime.evaluate', {
  expression: `(${expression})()`,
  awaitPromise: true,
  returnByValue: true,
  timeout: 45000
});
if (evalResult.exceptionDetails) throw new Error(JSON.stringify(evalResult.exceptionDetails));
const packet = evalResult.result.value;
if (!packet || packet.reviewCount < 30) throw new Error(`Only captured ${packet?.reviewCount ?? 0} reviews`);

const shot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
await fs.writeFile(screenshotPath, Buffer.from(shot.data, 'base64'));
await fs.writeFile(jsonPath, JSON.stringify(packet, null, 2));
const md = [`# Dino's Pizza & Pasta — Google Reviews Highest Packet`, '', `- Captured at: ${packet.capturedAt}`, `- Source: ${packet.source}`, `- Visible rating: ${packet.visibleRatingText}`, `- Filter: ${packet.filter}`, `- Written reviews captured: ${packet.reviewCount}`, `- Screenshot: ${packet.evidence.screenshot}`, '', ...packet.reviews.map((r, i) => `## ${i + 1}. ${r.author}\n\n- Rating: ${r.rating ?? 'visible in Highest-filtered Google list'}\n- Date: ${r.date || 'not captured'}\n- Service: ${r.service || 'not captured'}\n\n> ${r.text}\n`)].join('\n');
await fs.writeFile(mdPath, md);
ws.close();
console.log(JSON.stringify({ ok: true, reviewCount: packet.reviewCount, screenshotPath, jsonPath, mdPath }, null, 2));
