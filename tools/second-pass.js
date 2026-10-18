#!/usr/bin/env node
/*
  second-pass.js — the bulk "double check on numbers and stats" (Oscar, 2026-10-18).

  A script cannot browse. What it can do is everything around the browsing, which is
  what the 2026-10-18b session did by hand for 52 Forge drafts: gather the cards, split
  them into briefs a checker with web access can work through in parallel, take the
  checkers' verdicts back, diff them against the cards, apply the corrections the
  protocol allows, and write the report. Three steps:

    node tools/second-pass.js prepare <source> [--chunks 6] [--out <dir>]
        source: a batch JSON (PLANT-BRIEF shape), --held (the hold block), --deck (every
        dealt card), or --latin "<name>" (one card); --skip N --limit N take a slice of a block. Writes claims.json and one
        brief-N.md per chunk under <dir> (default data/second-pass/<date>/). Each brief
        is the prompt for one checker agent and names the verdict schema.

    (the session runs one checker per brief — WebSearch, snippets allowed — and each
     writes <dir>/verdicts-N.json; SECOND-PASS.md has the exact instruction)

    node tools/second-pass.js apply <dir> [--write] [--batch <in.json> --out <out.json>]
        Diffs every verdict against the card it checked and prints the table. With
        --write, corrections go onto the cards in timber.html through compare-double's
        --set (held cards only: a dealt card keeps its value and the diff is reported,
        per the double rules in NEW-SESSION.md). With --batch, the same corrections are
        applied to a batch file instead, each with a line in `uncertain`. Always writes
        <dir>/REPORT.md.

    node tools/second-pass.js selftest
        Runs prepare + apply on a fixture, no network, no writes outside /tmp.

  What is corrected and what is only reported (the rules, so they are not re-litigated):
    hardiness   verdict band differs from the card's → corrected on a held card or batch
                entry; reported only on a dealt card.
    height/     blank on the card → filled from the verdict. Present but different →
    spread      corrected when the verdict is RHS-sourced; reported when it is not.
    peak        corrected when the verdict gives a Mon-Mon from an RHS source; a nursery's months are
                reported only (a plant in flower on a bench says nothing about the garden).
    toxicity    never rewritten (the sentence is Oscar's claim); the verdict's RHS/ASPCA
                flags are reported, and a mismatch with the card's printed rung is flagged.
    name        never rewritten (label rule); the accepted name and TRADE ('code') form
                are reported for the session to decide.
    compliance  reported.
  Every correction appends a line to `uncertain` (batch) or is listed in REPORT.md (cards)
  naming the source the checker gave. Nothing is applied from a verdict that names no source.
*/
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const D = require('./plant-data.js');

const ROOT = path.join(__dirname, '..');
const HTML = path.join(ROOT, 'timber.html');
const argv = process.argv.slice(2);
const cmd = argv[0];
const flag = n => { const i = argv.indexOf(n); return i === -1 ? null : (argv[i + 1] ?? true); };
const die = m => { console.error('ABORT: ' + m); process.exit(1); };

const BANDS = ['H1a', 'H1b', 'H1c', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7'];
const band = s => { const m = String(s || '').match(/\bH(1[abc]|[2-7])\b/i); return m ? ('H' + m[1].toLowerCase()) : ''; };
/* The deck's standard hardinessNote per band; written with a corrected band so plant-sense's
   hardiness-vs-prose rule does not then read the old temperatures against the new crest. */
const BAND_NOTE = {
  H7: 'Very hardy: withstands below −20°C, so hardy anywhere in the UK',
  H6: 'Hardy in most of the UK, approximately −20 to −15°C',
  H5: 'Hardy through a cold UK winter, approximately −15 to −10°C',
  H4: 'Hardy through an average UK winter, approximately −10 to −5°C',
  H3: 'Half-hardy, approximately −5 to 1°C; shelter or protect in cold areas',
  H2: 'Tender, approximately 1 to 5°C; frost-free over winter',
  H1c: 'Tender, 5 to 10°C minimum; a conservatory or houseplant, outside in summer only',
  H1b: 'Tender, 10 to 15°C minimum; a houseplant',
  H1a: 'Tender, above 15°C; a heated-glasshouse plant',
};
const MON = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;
const RHS = /\brhs\b|rhs\.org\.uk/i;

/* The card's TOX_LADDER, as compare-double carries it; the rung a sentence prints. */
const TOX_LADDER = [
  ['clear', /\bno (?:known )?hazard/i],
  ['severe', /highly (?:toxic|poison)|particularly (?:dangerous|poisonous)|potentially dangerous|fatal|deadly/i],
  ['harmful', /toxic|poison|harmful|cyanogenic/i],
  ['harmful', /not (?:be )?(?:treated as |considered )?edible|should not be eaten|not to be eaten|do not eat/i],
  ['edible', /\bedible\b|cooked for|for preserves/i],
  ['caution', /irritant|irritat|sap\b|allerg|spine|sharp|glove|hairs/i],
];
const toxTier = t => { if (!t || !String(t).trim()) return 'blank'; for (const [k, re] of TOX_LADDER) if (re.test(t)) return k; return 'caution'; };

/* A card or batch entry reduced to the claims a checker verifies. `size` on a card is
   "H × W"; a batch entry has height/spread. */
function splitSize(size) {
  const m = String(size || '').match(/^(.*?)\s*H\s*×\s*(.*?)\s*W$/);
  return m ? { height: m[1].trim(), spread: m[2].trim() } : { height: '', spread: '' };
}
function claimsOf(p, where) {
  const hs = p.height !== undefined ? { height: p.height || '', spread: p.spread || '' } : splitSize(p.size);
  return {
    latin: p.latin, common: p.common || '', where,
    hardiness: band(p.hardiness), height: hs.height, spread: hs.spread, peak: p.peak || '',
    foliage: String(p.foliage || '').split(/[;:]/)[0].trim(),
    toxicity: p.toxicity || '', toxTier: toxTier(p.toxicity), compliance: p.compliance || '',
  };
}

function loadSource() {
  const html = fs.readFileSync(HTML, 'utf8');
  const lim = Number(flag('--limit') || 0), skip = Number(flag('--skip') || 0);   /* a slice of the block: --skip 27 --limit 9 */
  const slice = a => lim ? a.slice(skip, skip + lim) : a.slice(skip);
  if (flag('--held')) return slice(D.readHold(html)).map(p => claimsOf(p, 'held'));
  if (flag('--deck')) return slice(D.readDeck(html)).map(p => claimsOf(p, 'dealt'));
  if (flag('--latin')) {
    const l = flag('--latin');
    const d = D.readDeck(html).find(p => p.latin === l); if (d) return [claimsOf(d, 'dealt')];
    const h = D.readHold(html).find(p => p.latin === l); if (h) return [claimsOf(h, 'held')];
    die(`no card "${l}" in either block`);
  }
  const file = argv.slice(1).find(a => !a.startsWith('--') && fs.existsSync(a));
  if (!file) die('give a batch JSON, --held, --deck or --latin "<name>"');
  let b = JSON.parse(fs.readFileSync(file, 'utf8')); if (!Array.isArray(b)) b = [b];
  return b.map(p => claimsOf(p, 'batch:' + path.basename(file)));
}

const VERDICT_SCHEMA = `[
  {
    "latin": "<exactly as given>",
    "hardiness": { "value": "H5", "source": "RHS 12345" },
    "height":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "spread":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "peak":      { "value": "Jun-Aug", "source": "RHS 12345" },
    "toxicity":  { "rhs": "harmful if eaten; skin irritant", "aspca": "toxic to dogs, cats", "source": "..." },
    "name":      { "accepted": "Genus species 'Cultivar'", "trade": "Genus species TRADE ('code')", "exists": true, "source": "..." },
    "compliance": { "value": "...", "source": "..." },
    "notes": ["anything else the session should know, one line each"]
  }
]`;

function brief(chunk, n, dir) {
  const lines = chunk.map((c, i) => `${i + 1}. ${c.latin} (${c.common}) [${c.where}] — claimed: hardiness ${c.hardiness || 'blank'}; ` +
    `height ${c.height || 'blank'}; spread ${c.spread || 'blank'}; peak ${c.peak || 'blank'}; foliage ${c.foliage || 'blank'}; ` +
    `toxicity "${c.toxicity}" (prints ${c.toxTier}); compliance "${c.compliance || 'none'}"`);
  return `# Second-pass brief ${n} — ${chunk.length} plants

You are fact-checking UK garden-centre plant cards. Use WebSearch (load it with ToolSearch "select:WebSearch,WebFetch" first).
rhs.org.uk pages are blocked by the proxy: search-result snippets of RHS pages are acceptable evidence; say when you relied on
one. Do NOT edit any file except the one named below. Never invent: a value you cannot find is "" with source "not found".

For EACH plant find: (1) the RHS hardiness band H1a–H7 (give the RHS plant id), else the best other source and say so;
(2) RHS ultimate height and spread, written as the deck writes them ("1–1.5 m", "30–50 cm", ">12 m", "8 m+");
(3) flowering or peak-interest months as Mon-Mon (e.g. "Jun-Aug"); (4) toxicity: the RHS flags (harmful if eaten / skin
irritant / toxic to pets) and the ASPCA listing, or "no listing found"; (5) the accepted name, whether the cultivar exists,
and the TRADE ('code') form if it is a PBR plant; (6) any UK compliance point (Xylella host, Schedule 9, plant passport).

${lines.join('\n')}

Write your verdicts as JSON to: ${path.join(dir, `verdicts-${n}.json`)}
Schema (one object per plant, every field present, "" where not found, every value with its source):
${VERDICT_SCHEMA}
Then reply with a five-line summary: how many agreed, which disagreed and on what.
`;
}

function prepare() {
  const claims = loadSource();
  const chunks = Math.max(1, Number(flag('--chunks') || Math.ceil(claims.length / 9)));
  const dir = flag('--out') || path.join(ROOT, 'data', 'second-pass', new Date().toISOString().slice(0, 10));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'claims.json'), JSON.stringify(claims, null, 2) + '\n');
  const per = Math.ceil(claims.length / chunks);
  let n = 0;
  for (let i = 0; i < claims.length; i += per) fs.writeFileSync(path.join(dir, `brief-${n}.md`), brief(claims.slice(i, i + per), n++, dir));
  console.log(`${claims.length} plants → ${n} brief(s) in ${dir}`);
  console.log(`next: one checker agent per brief (see SECOND-PASS.md), then: node tools/second-pass.js apply ${dir} [--write | --batch in.json --out out.json]`);
}

/* ---- apply ---- */
function loadVerdicts(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir).filter(f => /^verdicts-\d+\.json$/.test(f)).sort()) {
    let v; try { v = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { die(`${f}: not valid JSON — ${e.message}`); }
    if (!Array.isArray(v)) die(`${f}: expected an array`);
    v.forEach(x => { if (!x.latin) die(`${f}: a verdict has no latin`); out.push(x); });
  }
  if (!out.length) die(`no verdicts-N.json in ${dir}`);
  return out;
}
const val = (v, k) => (v && v[k] && typeof v[k] === 'object') ? { value: String(v[k].value || '').trim(), source: String(v[k].source || '').trim() } : { value: '', source: '' };
const sourced = s => s && !/^not found$/i.test(s);

function judge(claim, v) {
  const dealt = claim.where === 'dealt';
  const fixes = {}, rows = [];
  const say = (field, was, now, verdict, src) => rows.push({ field, was, now, verdict, source: src });

  const h = val(v, 'hardiness'); const hb = band(h.value);
  if (hb && sourced(h.source)) {
    if (hb === claim.hardiness) say('hardiness', claim.hardiness, hb, 'agrees', h.source);
    else {
      say('hardiness', claim.hardiness || 'blank', hb, dealt ? 'differs (dealt card keeps)' : 'corrected', h.source);
      if (!dealt) { fixes.hardiness = hb; fixes.hardinessNote = `${BAND_NOTE[hb]} (${h.source}).`; }
    }
  } else say('hardiness', claim.hardiness || 'blank', '', 'unverified', h.source || 'not found');

  for (const k of ['height', 'spread']) {
    const s = val(v, k);
    if (!s.value || !sourced(s.source)) { say(k, claim[k] || 'blank', '', 'unverified', s.source || 'not found'); continue; }
    if (!claim[k]) { say(k, 'blank', s.value, dealt ? 'blank on dealt card (fill by hand)' : 'filled', s.source); if (!dealt) fixes[k] = s.value; }
    else if (sizeNorm(claim[k]) === sizeNorm(s.value)) say(k, claim[k], s.value, 'agrees', s.source);
    else if (RHS.test(s.source) && !dealt) { say(k, claim[k], s.value, 'corrected (RHS)', s.source); fixes[k] = s.value; }
    else say(k, claim[k], s.value, dealt ? 'differs (dealt card keeps)' : 'differs (non-RHS, kept)', s.source);
  }

  const pk = val(v, 'peak');
  if (MON.test(pk.value) && sourced(pk.source)) {
    if (pk.value === claim.peak) say('peak', claim.peak, pk.value, 'agrees', pk.source);
    else if (RHS.test(pk.source) && !/\bonly\b|says '|no months|\bper\b|nursery|retail/i.test(pk.source) && !dealt) { say('peak', claim.peak || 'blank', pk.value, 'corrected (RHS)', pk.source); fixes.peak = pk.value; }
    else say('peak', claim.peak || 'blank', pk.value, dealt ? 'differs (dealt card keeps)' : 'differs (non-RHS months, kept)', pk.source);
  } else say('peak', claim.peak || 'blank', pk.value, 'unverified', pk.source || 'not found');

  const t = v.toxicity || {};
  const flags = [t.rhs, t.aspca].filter(Boolean).join(' / ');
  if (flags) {
    const saysHarm = /toxic|harmful|poison/i.test(flags) && !/non-toxic|no listing|not toxic/i.test(flags);
    const saysClear = /non-toxic/i.test(flags) && !/skin|irrit|allerg/i.test(flags);
    let verdict = 'noted';
    if (saysHarm && ['clear', 'blank', 'caution'].includes(claim.toxTier)) verdict = `RUNG? card prints ${claim.toxTier}, sources say harmful`;
    if (saysClear && ['harmful', 'severe'].includes(claim.toxTier)) verdict = `RUNG? card prints ${claim.toxTier}, sources say non-toxic`;
    say('toxicity', claim.toxTier, flags, verdict, t.source || '');
  } else say('toxicity', claim.toxTier, '', 'no listing found', '');

  const nm = v.name || {};
  if (nm.accepted && !sameName(nm.accepted, claim.latin)) say('name', claim.latin, nm.accepted, 'accepted name differs (label rule: not changed)', nm.source || '');
  if (nm.trade && norm(nm.trade) !== norm(claim.latin)) say('name', claim.latin, nm.trade, "TRADE ('code') form available", nm.source || '');
  if (nm.exists === false) say('name', claim.latin, '', 'NOT FOUND as a cultivar', nm.source || '');

  const c = val(v, 'compliance');
  if (c.value && norm(c.value) !== norm(claim.compliance)) say('compliance', claim.compliance || 'none', c.value, 'noted', c.source);
  return { fixes, rows, notes: Array.isArray(v.notes) ? v.notes : [] };
}
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').replace(/[‘’']/g, "'").trim();
/* "4-8m", "4–8 m" and "4 – 8m" are one size; "12m+" and ">12 m" are one size. */
const sizeNorm = s => norm(s).replace(/\s+/g, '').replace(/[–—]/g, '-').replace(/^>(.+)$/, '$1+');
/* RHS writes group letters and authors after the name: "Rhododendron luteum (A)", "Fallopia baldschuanica (Regel)
   Holub", "Clematis montana var. rubens E.H.Wilson". The card's name is the same name when it is that text minus those. */
const sameName = (accepted, latin) => {
  const a = norm(accepted).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim(), l = norm(latin);
  return a === l || a.startsWith(l + ' ') || l.startsWith(a + ' ');
};

function apply() {
  const dir = argv[1]; if (!dir || !fs.existsSync(dir)) die('apply needs the prepare directory');
  const claims = JSON.parse(fs.readFileSync(path.join(dir, 'claims.json'), 'utf8'));
  const verdicts = loadVerdicts(dir);
  const write = !!flag('--write'), batchIn = flag('--batch'), batchOut = flag('--out');
  if (batchIn && !batchOut) die('--batch needs --out');
  let batch = batchIn ? JSON.parse(fs.readFileSync(batchIn, 'utf8')) : null;

  const report = [`# Second pass — ${path.basename(dir)}`, '', `${claims.length} claims, ${verdicts.length} verdicts. Verdict sources are the checkers’ (snippets unless they say otherwise).`, ''];
  const tally = { agrees: 0, corrected: 0, filled: 0, differs: 0, unverified: 0, rung: 0 };
  const missing = claims.filter(c => !verdicts.find(v => norm(v.latin) === norm(c.latin)));
  for (const claim of claims) {
    const v = verdicts.find(x => norm(x.latin) === norm(claim.latin)); if (!v) continue;
    const { fixes, rows, notes } = judge(claim, v);
    report.push(`## ${claim.latin}  [${claim.where}]`, '', '| field | card | checked | verdict | source |', '|---|---|---|---|---|');
    for (const r of rows) {
      report.push(`| ${r.field} | ${r.was} | ${r.now} | ${r.verdict} | ${r.source} |`);
      if (/^agrees/.test(r.verdict)) tally.agrees++; else if (/^corrected/.test(r.verdict)) tally.corrected++; else if (/^filled/.test(r.verdict)) tally.filled++;
      else if (/^differs|blank on dealt/.test(r.verdict)) tally.differs++; else if (/^unverified/.test(r.verdict)) tally.unverified++; if (/^RUNG/.test(r.verdict)) tally.rung++;
    }
    notes.forEach(n => report.push(`| note | | | ${n} | |`));
    report.push('');
    if (!Object.keys(fixes).length) continue;
    if (batch) {
      const p = batch.find(x => norm(x.latin) === norm(claim.latin)); if (!p) { report.push(`_not in --batch file; nothing applied_`, ''); continue; }
      for (const [k, v2] of Object.entries(fixes)) {
        const src = rows.find(r => r.field === k)?.source || '';
        p.uncertain = [...(p.uncertain || []), `${k}: was ${JSON.stringify(p[k] ?? '')}, second pass set ${JSON.stringify(v2)} (${src}).`];
        p[k] = v2;
      }
      report.push(`_applied to batch: ${Object.keys(fixes).join(', ')}_`, '');
    } else if (write) {
      const changes = { ...fixes };
      if (changes.height || changes.spread) {
        /* the dimension not corrected keeps its value, written in the deck's form when the verdict agrees with it */
        const same = k => { const r = rows.find(x => x.field === k); return (r && /^agrees/.test(r.verdict) && r.now) ? r.now : claim[k]; };
        const hgt = changes.height || same('height'), spr = changes.spread || same('spread');
        changes.size = `${hgt} H × ${spr} W`; delete changes.height; delete changes.spread;
      }
      const args = [path.join(__dirname, 'compare-double.js'), '--card', claim.latin];
      for (const [k, v2] of Object.entries(changes)) args.push('--set', `${k}=${v2}`);
      try { execFileSync(process.execPath, args, { stdio: 'pipe', cwd: ROOT }); report.push(`_written to the card: ${Object.keys(changes).join(', ')}_`, ''); }
      catch (e) { report.push(`_write failed: ${String(e.stderr || e.message).trim().split('\n').pop()}_`, ''); }
    } else report.push(`_would apply (${Object.keys(fixes).join(', ')}); pass --write or --batch_`, '');
  }
  if (missing.length) report.push(`## No verdict returned for ${missing.length}`, '', ...missing.map(m => `- ${m.latin}`), '');
  report.push('## Tally', '', `agrees ${tally.agrees} · corrected ${tally.corrected} · filled ${tally.filled} · differs/reported ${tally.differs} · unverified ${tally.unverified} · safety rung questions ${tally.rung}`, '');
  fs.writeFileSync(path.join(dir, 'REPORT.md'), report.join('\n'));
  if (batch) fs.writeFileSync(batchOut, JSON.stringify(batch, null, 2) + '\n');
  console.log(report.slice(-3).join('\n'));
  console.log(`report: ${path.join(dir, 'REPORT.md')}${batch ? `\nbatch: ${batchOut}` : ''}${!write && !batch ? '\n(dry: nothing written to cards; pass --write)' : ''}`);
}

/* ---- selftest: a fixture batch and a fixture verdict, under /tmp ---- */
function selftest() {
  const os = require('os');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'second-pass-'));
  const batch = [{ latin: "Testus plantus 'Fixture'", common: 'Fixture plant', hardiness: 'H5', height: '', spread: '1–1.5 m', peak: 'Jul-Sep', foliage: 'deciduous', toxicity: 'No known hazard.', compliance: '', uncertain: [] }];
  const bf = path.join(dir, 'batch.json'); fs.writeFileSync(bf, JSON.stringify(batch));
  process.argv = ['node', 'second-pass.js', 'prepare', bf, '--out', dir, '--chunks', '1'];
  argv.length = 0; argv.push(...process.argv.slice(2)); prepare();
  fs.writeFileSync(path.join(dir, 'verdicts-0.json'), JSON.stringify([{
    latin: "Testus plantus 'Fixture'",
    hardiness: { value: 'H4', source: 'RHS 1' }, height: { value: '0.5–1 m', source: 'RHS 1' }, spread: { value: '1–1.5 m', source: 'RHS 1' },
    peak: { value: 'Jun-Aug', source: 'RHS 1' }, toxicity: { rhs: 'harmful if eaten', aspca: 'toxic to dogs', source: 'RHS 1' },
    name: { accepted: "Testus plantus 'Fixture'", trade: '', exists: true, source: '' }, compliance: { value: '', source: '' }, notes: ['fixture'],
  }]));
  const out = path.join(dir, 'out.json');
  argv.length = 0; argv.push('apply', dir, '--batch', bf, '--out', out); apply();
  const got = JSON.parse(fs.readFileSync(out, 'utf8'))[0];
  const ok = got.hardiness === 'H4' && got.height === '0.5–1 m' && got.peak === 'Jun-Aug' && got.uncertain.length === 4 && fs.readFileSync(path.join(dir, 'REPORT.md'), 'utf8').includes('RUNG?');
  console.log(ok ? `selftest OK (${dir})` : `selftest FAILED (${dir})`); process.exit(ok ? 0 : 1);
}

if (cmd === 'prepare') prepare();
else if (cmd === 'apply') apply();
else if (cmd === 'selftest') selftest();
else { console.error('usage: node tools/second-pass.js prepare <batch.json | --held | --deck | --latin "<name>"> [--chunks N] [--out dir]\n       node tools/second-pass.js apply <dir> [--write | --batch in.json --out out.json]\n       node tools/second-pass.js selftest'); process.exit(2); }
