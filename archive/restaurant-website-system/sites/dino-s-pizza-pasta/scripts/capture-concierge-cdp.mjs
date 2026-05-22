import fs from 'node:fs/promises';
import path from 'node:path';
const cdpBase = 'http://127.0.0.1:18800';
const siteUrl = `http://127.0.0.1:3073/?concierge=${Date.now()}`;
const outDir = path.resolve(process.cwd(), 'screenshots');
await fs.mkdir(outDir, { recursive: true });
async function createTarget(url) {
  const res = await fetch(`${cdpBase}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  if (!res.ok) throw new Error(`create target failed ${res.status}`);
  return res.json();
}
async function cdp(wsUrl) {
  let seq=0; const pending=new Map(); const ws=new WebSocket(wsUrl);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  ws.addEventListener('message',ev=>{const msg=JSON.parse(ev.data); if(msg.id&&pending.has(msg.id)){const p=pending.get(msg.id); pending.delete(msg.id); msg.error?p.reject(new Error(JSON.stringify(msg.error))):p.resolve(msg.result);}});
  return {send(method,params={}){const id=++seq; ws.send(JSON.stringify({id,method,params})); return new Promise((resolve,reject)=>pending.set(id,{resolve,reject}));}, close(){ws.close();}};
}
const target=await createTarget(siteUrl);
const client=await cdp(target.webSocketDebuggerUrl);
await client.send('Page.enable'); await client.send('Runtime.enable'); await client.send('Network.enable'); await client.send('Network.setCacheDisabled',{cacheDisabled:true});
await client.send('Emulation.setDeviceMetricsOverride',{width:390,height:900,deviceScaleFactor:2,mobile:true});
await client.send('Page.navigate',{url:siteUrl});
await new Promise(r=>setTimeout(r,2500));
const scrollResult = await client.send('Runtime.evaluate',{expression:`(() => { const needle = 'source-locked concierge'; const label = [...document.querySelectorAll('p,h2,h3')].find(s => (s.innerText || '').toLowerCase().includes(needle)); const found = label?.closest('section') || label; if (found) { window.scrollTo(0, Math.max(0, found.getBoundingClientRect().top + window.scrollY + 520)); } const text = document.body.innerText; const lower = text.toLowerCase(); const idx = lower.indexOf(needle); return { hasText: idx >= 0, y: window.scrollY, foundTag: found?.tagName || null, snippet: idx >= 0 ? text.slice(idx, idx + 300) : null }; })()`, returnByValue:true});
await new Promise(r=>setTimeout(r,900));
const data=await client.send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});
const filePath=path.join(outDir,'preview-concierge-mobile-2026-05-05.png');
await fs.writeFile(filePath,Buffer.from(data.data,'base64'));
const evalResult=await client.send('Runtime.evaluate',{expression:`(() => { const text = document.body.innerText; const idx = text.toLowerCase().indexOf('source-locked concierge'); return idx >= 0 ? text.slice(idx, idx + 900) : null; })()`,returnByValue:true});
client.close();
console.log(JSON.stringify({ok:true,filePath,scroll:scrollResult.result.value,text:evalResult.result.value},null,2));
