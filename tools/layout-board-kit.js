#!/usr/bin/env node
/* layout-board-kit.js — cut a real card into a base image + one transparent layer per
   movable part, for the Card Layout Board artifact (design/layout-board/).

     node tools/layout-board-kit.js [--card "Winter Sun"] [--out design/layout-board]

   Writes base.jpg (the card with every movable part hidden), <part>.png for each
   part present on that card, and parts.json: each part's box in % of the card face,
   measured off getBoundingClientRect (a rotated element gets its rotated bounding
   box, which is what is drawn). Loads timber.html from disk; no server needed. */
'use strict';
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i < 0 ? d : args[i + 1]; };
const CARD = opt('--card', 'Winter Sun');
const OUT = path.resolve(opt('--out', path.join(__dirname, '..', 'design', 'layout-board')));
const SCALE = 2;

/* id, label, selector inside the card face. Order = paint order in the board. */
const PARTS = [
  ['title', 'Name, latin and Listen', '.thead'],
  ['crest', 'Hardiness crest', '.crest'],
  ['growth', 'Growth speed rail', '.growth'],
  ['railH', 'Height rail', '.rail-h'],
  ['railS', 'Spread rail', '.rail-s'],
  ['flag', 'Safety flag', '.toxflag'],
  ['caption', 'Photo caption', '.pcap'],
  ['plaque', 'Stats plaque', '.plaque'],
  ['ph', 'pH tile', '.phtile'],
  ['soil', 'Soil panel', '.soilp'],
  ['band', 'Aspect and light band', '.band'],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: SCALE });
  p.setDefaultNavigationTimeout(90000);
  await p.goto('file://' + path.join(__dirname, '..', 'timber.html'));
  await p.waitForTimeout(4000);
  const name = await p.evaluate(q => {
    q = q.toLowerCase();
    const i = PLANTS.findIndex(x => (x.latin + ' ' + x.common).toLowerCase().includes(q));
    if (i < 0) return null;
    buildAllCards();
    const cards = [...document.querySelectorAll('.card')];
    const c = cards.find(el => +el.dataset.idx === i);
    for (const o of cards) if (o !== c) o.style.display = 'none';
    c.classList.remove('deep'); c.dataset.kit = '1';
    c.style.transform = 'none';
    const st = document.createElement('style');
    st.id = '__kit';
    st.textContent = '.card[data-kit] .tcard>*{visibility:visible}.stamp{display:none!important}';
    document.head.appendChild(st);
    c.querySelectorAll('img[data-psrc]').forEach(im => { if (!im.getAttribute('src')) im.src = im.dataset.psrc; });
    return PLANTS[i].common + ' — ' + PLANTS[i].latin;
  }, CARD);
  if (!name) { console.error('no card matches ' + CARD); process.exit(1); }
  await p.waitForTimeout(2500);

  const face = await p.evaluate(() => {
    const r = document.querySelector('.card[data-kit] .tcard').getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  /* measure every part */
  const parts = [];
  for (const [id, label, sel] of PARTS) {
    const box = await p.evaluate(sel => {
      const el = document.querySelector('.card[data-kit] .tcard ' + sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return r.width > 1 ? { x: r.x, y: r.y, w: r.width, h: r.height } : null;
    }, sel);
    if (box) parts.push({ id, label, sel, box });
  }
  /* base: every part hidden */
  const hideAll = parts.map(x => '.card[data-kit] .tcard ' + x.sel + '{visibility:hidden!important}').join('');
  await p.evaluate(css => { const s = document.createElement('style'); s.id = '__hide'; s.textContent = css; document.head.appendChild(s); }, hideAll);
  await p.waitForTimeout(300);
  await p.screenshot({ path: path.join(OUT, 'base.jpg'), type: 'jpeg', quality: 86, clip: { x: face.x, y: face.y, width: face.w, height: face.h } });
  /* each part alone on a transparent page */
  await p.evaluate(() => {
    document.getElementById('__hide').remove();
    document.documentElement.style.background = 'transparent';
    document.body.style.background = 'transparent';
  });
  for (const part of parts) {
    await p.evaluate(sel => {
      let s = document.getElementById('__solo');
      if (!s) { s = document.createElement('style'); s.id = '__solo'; document.head.appendChild(s); }
      s.textContent = 'body *{visibility:hidden!important}' +
        '.card[data-kit] .tcard ' + sel + ',.card[data-kit] .tcard ' + sel + ' *{visibility:visible!important}' +
        'body,html,.card,.tcard,.face,.card-inner,.tscale,#deck,.deck{background:transparent!important;box-shadow:none!important}';
    }, part.sel);
    await p.waitForTimeout(150);
    const pad = 2;
    await p.screenshot({ path: path.join(OUT, part.id + '.png'), omitBackground: true,
      clip: { x: part.box.x - pad, y: part.box.y - pad, width: part.box.w + pad * 2, height: part.box.h + pad * 2 } });
    part.pct = {
      left: +(((part.box.x - pad - face.x) / face.w) * 100).toFixed(3),
      top: +(((part.box.y - pad - face.y) / face.h) * 100).toFixed(3),
      width: +(((part.box.w + pad * 2) / face.w) * 100).toFixed(3),
      height: +(((part.box.h + pad * 2) / face.h) * 100).toFixed(3),
    };
  }
  await b.close();
  const manifest = {
    card: name, made: new Date().toISOString().slice(0, 10),
    face: { w: Math.round(face.w), h: Math.round(face.h), ratio: +(face.w / face.h).toFixed(5) },
    parts: parts.map(({ id, label, sel, pct }) => ({ id, label, selector: sel, file: id + '.png', ...pct })),
  };
  fs.writeFileSync(path.join(OUT, 'parts.json'), JSON.stringify(manifest, null, 1));
  console.log(`${name}: base + ${parts.length} parts -> ${OUT}`);
  for (const x of manifest.parts) console.log(`  ${x.id.padEnd(8)} left ${x.left}% top ${x.top}% w ${x.width}% h ${x.height}%`);
})();
