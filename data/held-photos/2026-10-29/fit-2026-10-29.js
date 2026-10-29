'use strict';
/* fit-2026-10-29.js — Forge handover 2026-10-29 (four drafts, researched online by a cloud run). Only gap: the
   Pittosporum came back with no soil. Reads batch-as-sent.json, writes batch-new.json. Usage: node fit-2026-10-29.js */
const fs = require('fs');
const dir = __dirname + '/';
const batch = JSON.parse(fs.readFileSync(dir + 'batch-as-sent.json', 'utf8'));
const FIX = {
  "Pittosporum tobira 'Nanum'": {
    soil: 'Well-drained, any pH',
    u: ["soil: blank as returned by the cloud run; RHS 61258 gives moist but well-drained or well-drained, chalk, loam or sand, acid to alkaline (search snippet)."]
  }
};
const out = batch.map(p => {
  const f = FIX[p.latin]; if (!f) return p;
  const { u, ...set } = f;
  return Object.assign({}, p, set, { uncertain: (p.uncertain || []).concat(u), sources: (p.sources || []).concat(['RHS 61258 Pittosporum tobira \'Nanum\', search snippet: soil']) });
});
fs.writeFileSync(dir + 'batch-new.json', JSON.stringify(out, null, 2) + '\n');
console.log('wrote batch-new.json');
