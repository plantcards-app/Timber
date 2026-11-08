'use strict';
/*
  forge-handover.js — lays out a Card Forge handover as a batch folder, the first step of HANDOVER.md.

  The Forge (the shop-floor artifact) keeps its batches in its own store. "Hand over" there only stamps handedAt on
  the batch and on every card not yet dealt; nothing is sent. A Claude Code session pulls the cards with ArtifactData
  (`query` on "cards", `out_dir` set, so each card lands as <out>/cards/<id>.json) and the photos with the Artifact
  tool (`read` with `path: <asset id>`, which saves <id>.<ext>). This script turns those files into the folder every
  other batch has:

    data/held-photos/<batch>/forge-cards.json     the raw card documents, keyed by id (the write-back pins to these)
    data/held-photos/<batch>/batch-as-sent.json   the drafted plants that pass the page's own required fields
    data/held-photos/<batch>/to-research.json     names with no usable draft: research these online from scratch
    data/held-photos/<batch>/<slug>.jpg …         photos, card first then -flash-2, -flash-3 (NEW-SESSION.md slug rule)
    data/held-photos/<batch>/HANDOVER-PLAN.md     one line per card: what it is and what happens to it

  Usage: node tools/forge-handover.js <cards-dir> [--photos <dir>] [--batch <id>] [--dry]
  Cards already dealt (dealtAt set) or never handed over (no handedAt) are skipped and listed.
*/
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const cardsDir = args.find((a, i) => !a.startsWith('--') && !['--photos', '--batch'].includes(args[i - 1]));
if (!cardsDir) { console.error('usage: node tools/forge-handover.js <cards-dir> [--photos <dir>] [--batch <id>] [--dry]'); process.exit(2); }
const photosDir = opt('--photos');
const onlyBatch = opt('--batch');
const DRY = args.includes('--dry');
const ROOT = path.join(__dirname, '..');

const slug = l => String(l || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const dir = fs.existsSync(path.join(cardsDir, 'cards')) ? path.join(cardsDir, 'cards') : cardsDir;
const docs = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => {
  const raw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const c = raw && raw.data && raw.batch === undefined ? raw.data : raw;   // a bare document, or {data: …}
  return Object.assign({ id: path.basename(f, '.json') }, c);
});

const photoFiles = photosDir && fs.existsSync(photosDir) ? fs.readdirSync(photosDir) : [];
const findPhoto = id => photoFiles.find(f => f.startsWith(id + '.') || f === id);

const byBatch = {};
const skipped = [];
for (const c of docs) {
  if (onlyBatch && c.batch !== onlyBatch) continue;
  if (c.dealtAt) { skipped.push(`${c.name} (already ${c.dealtAs || 'dealt'})`); continue; }
  if (!c.handedAt) { skipped.push(`${c.name} (not handed over)`); continue; }
  (byBatch[c.batch] = byBatch[c.batch] || []).push(c);
}

const usable = p => p && String(p.latin || '').trim() && String(p.common || '').trim() && String(p.hardiness || '').trim();

for (const [batch, list] of Object.entries(byBatch)) {
  list.sort((a, b) => (a.order || 0) - (b.order || 0));
  const out = path.join(ROOT, 'data', 'held-photos', batch);
  const drafted = [], research = [], plan = [], missing = [];
  const raw = {};
  for (const c of list) {
    raw[c.id] = c;
    const name = usable(c.plant) ? c.plant.latin : c.name;
    const s = slug(name);
    const photos = (c.photos || []).map((ph, i) => {
      const file = findPhoto(ph.id);
      if (!file) { missing.push(`${name}: asset ${ph.id}`); return null; }
      const ext = path.extname(file) || '.jpg';
      const to = i === 0 ? `${s}${ext}` : `${s}-flash-${i + 1}${ext}`;
      if (!DRY) { fs.mkdirSync(out, { recursive: true }); fs.copyFileSync(path.join(photosDir, file), path.join(out, to)); }
      return to;
    }).filter(Boolean);
    if (usable(c.plant)) drafted.push(c.plant);
    else research.push({ id: c.id, name: c.name, label: c.label || '', notes: c.notes || '', draft: c.plant || null });
    const fate = photos.length ? `deal with ${photos[0]}` + (photos.length > 1 ? ` (+${photos.length - 1} flash)` : '') : 'hold (no photo)';
    const what = usable(c.plant) ? `drafted${c.research && c.research.checkedOnline ? ', checked online' : ', unchecked'}` : 'name only: research online';
    plan.push(`- ${name} [${c.id}] — ${what}; ${fate}${c.label ? ` · label: ${c.label.slice(0, 80)}` : ''}`);
  }
  console.log(`batch ${batch}: ${list.length} card(s) → ${path.relative(ROOT, out)}/`);
  plan.forEach(l => console.log('  ' + l));
  if (missing.length) console.log('  photos not downloaded yet: ' + missing.join('; '));
  if (DRY) continue;
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'forge-cards.json'), JSON.stringify(raw, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'batch-as-sent.json'), JSON.stringify(drafted, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'to-research.json'), JSON.stringify(research, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'HANDOVER-PLAN.md'),
    `# Forge handover ${batch}\n\n${plan.join('\n')}\n` + (missing.length ? `\nPhotos not downloaded: ${missing.join('; ')}\n` : ''));
}
if (skipped.length) console.log('skipped: ' + skipped.join('; '));
if (!Object.keys(byBatch).length) console.log('nothing waiting: no card with handedAt and no dealtAt.');
