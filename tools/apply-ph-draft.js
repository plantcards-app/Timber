#!/usr/bin/env node
/* Fill blank ph/phSource cells in plants.csv from data/ph/ph-draft-table.json.
   Never overwrites a ph that is already there (a checked value beats a draft).
   Longest matching latin prefix wins: species beats genus. Prints rows it could
   not match and rows whose soil prose contradicts the drafted figure, so a human
   can look rather than trust the table. Then: node plants-tool.js check && import. */
'use strict';
const fs=require('fs'),path=require('path');
const D=require('./plant-data.js');
const ROOT=path.join(__dirname,'..');
const T=JSON.parse(fs.readFileSync(path.join(ROOT,'data/ph/ph-draft-table.json'),'utf8'));
const norm=s=>String(s).replace(/[×]/g,'× ').replace(/\s+/g,' ').replace(/^× /,'').trim();
const keys=[...Object.entries(T.species),...Object.entries(T.genus)].map(([k,v])=>[norm(k),v]).sort((a,b)=>b[0].length-a[0].length);
const rows=D.csvParse(fs.readFileSync(path.join(ROOT,'plants.csv'),'utf8'));
const h=rows[0],iL=h.indexOf('latin'),iP=h.indexOf('ph'),iS=h.indexOf('phSource'),iSoil=h.indexOf('soil'),iC=h.indexOf('common');
let filled=0,kept=0;const miss=[],clash=[];
for(const r of rows.slice(1)){
  if(r[iP]&&r[iP].trim()){kept++;continue;}
  const lat=norm(r[iL]);
  const hit=keys.find(([k])=>lat===k||lat.startsWith(k+' '));
  if(!hit){miss.push(r[iL]);continue;}
  if(!D.parsePh(hit[1]))throw new Error('bad table value '+hit[0]+' '+hit[1]);
  r[iP]=hit[1];r[iS]=`drafted: general horticultural range for ${hit[0]}, not yet checked against a source (2026-11-24)`;filled++;
  const v=D.parsePh(hit[1]),soil=(r[iSoil]||'').toLowerCase();
  if(/ericaceous|lime-free|acid(ic)? soil|acidic|acid\b/.test(soil)&&!/tolerat|any|adaptable|acid to alk|acid or alk|acid–alk|acid-alk|including acid|neutral to acid|acid to neutral/.test(soil)&&v.opt>6.2)clash.push(`${r[iC]} (${r[iL]}): soil "${r[iSoil]}" vs ${hit[1]}`);
  if(/chalk|alkaline|lime/.test(soil)&&!/lime-free|tolerat|any|adaptable|acid|not chalk|avoid chalk|avoid lime/.test(soil)&&v.opt<6.3)clash.push(`${r[iC]} (${r[iL]}): soil "${r[iSoil]}" vs ${hit[1]}`);
}
const out=rows.map(r=>r.map(c=>/[",\n]/.test(c)||c===''?'"'+String(c).replace(/"/g,'""')+'"':'"'+c+'"').join(',')).join('\n')+'\n';
fs.writeFileSync(path.join(ROOT,'plants.csv'),out);
console.log(`filled ${filled}, kept ${kept} existing, unmatched ${miss.length}`);
if(miss.length)console.log('UNMATCHED:\n  '+miss.join('\n  '));
if(clash.length)console.log('SOIL PROSE DISAGREES — check:\n  '+clash.join('\n  '));
