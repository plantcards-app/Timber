#!/usr/bin/env node
/* forge-deck-index.js — the deck as the Timber Card Forge artifact sees it.

   Prints one JSON document: every dealt and held card's latin, slugged by the
   app's own rule, with its state. The Forge reads it (document "deck/index")
   to flag a name that is already a card before anyone researches it twice.

     node tools/forge-deck-index.js              # to stdout
     node tools/forge-deck-index.js --out x.json # to a file

   Refresh it after every batch is dealt: in a Claude Code session, write the
   output to the artifact with the ArtifactData tool (collection "deck", doc
   "index", set, pinned to the version last read). See CARD-FORGE.md. */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const D = require('./plant-data.js');

const html = fs.readFileSync(path.join(__dirname, '..', 'timber.html'), 'utf8');
const deck = D.readDeck(html);
const hold = D.readHold(html);
const slug = l => String(l || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const cards = {};
hold.forEach(p => { cards[slug(p.latin)] = 'held'; });
deck.forEach(p => { cards[slug(p.latin)] = 'dealt'; });   /* dealt wins if a slug is somehow in both */

let rev = '';
try { rev = execSync('git rev-parse --short HEAD', { cwd: path.join(__dirname, '..') }).toString().trim(); } catch (e) { /* no git: leave blank */ }

const out = {
  updatedAt: Date.now(),
  rev: (rev ? rev + ' · ' : '') + new Date().toISOString().slice(0, 10),
  dealt: deck.length,
  held: hold.length,
  cards,
};
const json = JSON.stringify(out);
const outArg = process.argv.indexOf('--out');
if (outArg > -1 && process.argv[outArg + 1]) {
  fs.writeFileSync(process.argv[outArg + 1], json);
  console.error(`deck index: ${deck.length} dealt, ${hold.length} held, ${Object.keys(cards).length} slugs, ${json.length} bytes -> ${process.argv[outArg + 1]}`);
} else {
  process.stdout.write(json + '\n');
}
