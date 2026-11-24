#!/usr/bin/env node
/* card-mock.js — render a card, optionally with CSS injected, and save zoomed crops.
   The tool behind .claude/skills/card-layout: try layout ideas on the REAL card
   without touching timber.html, and look at them side by side before choosing.

     node tools/card-mock.js --out <dir> [--card "<latin or common substring>"]
          [--crop "x,y,w,h"]            # crop in % of the card face (default: whole card)
          [--variant "name|||css"] ...  # one image per variant; "bare" css = nothing
          [--scale 3]                   # device pixel ratio of the screenshots
          [--strip strip.png]           # also join all variant images left-to-right

   Examples
     # the safety flag corner, now vs hidden vs a proposal
     node tools/card-mock.js --out /tmp/m --card "Winter Sun" --crop "0,0,20,14" \
       --variant "now|||" --variant "bare|||.toxflag{visibility:hidden}" \
       --variant "big|||.toxflag{width:7.2%!important}" --strip /tmp/m/strip.png

   Loads timber.html from disk (file://), so no server is needed. The chosen card is
   moved to the top of the deck and built; the crop is taken off its .tcard box.
   Writes only to --out. */
'use strict';
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i < 0 ? d : args[i + 1]; };
const all = k => args.flatMap((a, i) => (a === k ? [args[i + 1]] : []));
const OUT = opt('--out');
if (!OUT) { console.error('need --out <dir>'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });
const CARD = opt('--card', '');
const CROP = (opt('--crop', '0,0,100,100')).split(',').map(Number);
const SCALE = Number(opt('--scale', 3));
const VARIANTS = all('--variant').map(v => { const [n, c = ''] = v.split('|||'); return { n, c }; });
if (!VARIANTS.length) VARIANTS.push({ n: 'now', c: '' });

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: SCALE });
  p.setDefaultNavigationTimeout(90000);
  await p.goto('file://' + path.join(__dirname, '..', 'timber.html'));
  await p.waitForTimeout(4000);
  if (CARD) {
    const ok = await p.evaluate(q => {
      q = q.toLowerCase();
      const i = PLANTS.findIndex(x => (x.latin + ' ' + x.common).toLowerCase().includes(q));
      if (i < 0) return false;
      buildAllCards();
      const cards = [...document.querySelectorAll('.card')];
      const c = cards.find(el => +el.dataset.idx === i);
      if (!c) return false;
      /* hide every other card rather than re-ordering the stack: the deck positions
         cards by their place in it, so a moved card can sit under the old top one */
      for (const o of cards) if (o !== c) o.style.visibility = 'hidden';
      c.style.zIndex = 9999; c.style.visibility = 'visible';
      c.dataset.mock = '1';
      /* a buried card is a 'deep' card: its face paints nothing (timber.html .card.deep)
         and its photo has not been fetched. Undo both for the mock only. */
      c.classList.remove('deep');
      const st = document.createElement('style');
      st.textContent = '.card[data-mock] .tcard>*{visibility:visible!important}';
      document.head.appendChild(st);
      c.querySelectorAll('img[data-psrc]').forEach(im => { if (!im.getAttribute('src')) im.src = im.dataset.psrc; });
      return PLANTS[i].common;
    }, CARD);
    if (!ok) { console.error('no card matches ' + CARD); process.exit(1); }
    console.log('card: ' + ok);
    await p.waitForTimeout(1500);
  }
  await p.evaluate(() => { const s = document.createElement('style'); s.id = '__mock'; document.head.appendChild(s); });
  const files = [];
  for (const v of VARIANTS) {
    await p.evaluate(css => { document.getElementById('__mock').textContent = css; }, v.c);
    await p.waitForTimeout(250);
    const r = await p.evaluate(() => {
      const t = (document.querySelector('.card[data-mock]') || [...document.querySelectorAll('.card')].pop()).querySelector('.tcard');
      const b = t.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height };
    });
    const clip = { x: r.x + r.w * CROP[0] / 100, y: r.y + r.h * CROP[1] / 100, width: r.w * CROP[2] / 100, height: r.h * CROP[3] / 100 };
    const f = path.join(OUT, `mock-${v.n}.png`);
    await p.screenshot({ path: f, clip });
    files.push(f); console.log(f);
  }
  await b.close();
  const strip = opt('--strip');
  if (strip && files.length > 1) {
    /* join with a 10px gutter, using the browser as the image library */
    const b2 = await chromium.launch(); const q = await b2.newPage();
    const imgs = files.map(f => 'data:image/png;base64,' + fs.readFileSync(f).toString('base64'));
    await q.setContent(`<body style="margin:0;background:#14201a;display:flex;gap:10px;align-items:flex-start">${imgs.map(s => `<img src="${s}">`).join('')}</body>`);
    await q.waitForTimeout(300);
    const box = await q.evaluate(() => ({ w: document.body.scrollWidth, h: Math.max(...[...document.images].map(i => i.naturalHeight)) }));
    await q.setViewportSize({ width: box.w, height: box.h });
    await q.screenshot({ path: strip, fullPage: true });
    await b2.close(); console.log(strip);
  }
})();
