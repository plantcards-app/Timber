#!/usr/bin/env node
/* Write ph + phSource from plants.csv onto the matching cards in timber.html,
   in place, without a full csv import (which also rewrites every other field and
   currently refuses on held cards that carry sunMin:null). Each card gains two
   prose lines straight after its identity line. A card that already has a ph key
   is left alone. Verifies afterwards by re-reading both blocks. */
'use strict';
const fs=require('fs'),path=require('path');
const D=require('./plant-data.js');
const ROOT=path.join(__dirname,'..'),HTML=path.join(ROOT,'timber.html');
let html=fs.readFileSync(HTML,'utf8');
const rows=D.csvParse(fs.readFileSync(path.join(ROOT,'plants.csv'),'utf8'));
const h=rows[0],iL=h.indexOf('latin'),iP=h.indexOf('ph'),iS=h.indexOf('phSource');
const lit=v=>'"'+String(v).replace(/\\/g,'\\\\').replace(/"/g,'\\"')+'"';
let n=0;const miss=[];
for(const r of rows.slice(1)){
  if(!r[iP])continue;
  const key='latin:'+lit(r[iL])+',';
  const at=html.indexOf(key);
  if(at<0||html.indexOf(key,at+1)>=0){miss.push(r[iL]);continue;}
  const eol=html.indexOf('\n',at);
  const objEnd=html.indexOf('}',at);         // first close after identity: same card
  if(html.slice(at,objEnd).includes('ph:"'))continue;
  html=html.slice(0,eol)+`\n   ph:${lit(r[iP])},\n   phSource:${lit(r[iS])},`+html.slice(eol);n++;
}
if(miss.length){console.error('could not place uniquely:\n  '+miss.join('\n  '));process.exit(1);}
const deck=D.readDeck(html),hold=D.readHold(html);
const bad=[...deck,...hold].filter(p=>p.ph&&!D.parsePh(p.ph));
if(bad.length){console.error('unparseable after write',bad.map(p=>p.latin));process.exit(1);}
fs.writeFileSync(HTML,html);
console.log(`wrote ph on ${n} cards; deck ${deck.length} (${deck.filter(p=>p.ph).length} with ph), hold ${hold.length} (${hold.filter(p=>p.ph).length} with ph)`);
