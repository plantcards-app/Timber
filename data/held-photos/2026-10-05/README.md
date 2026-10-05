# Batch of 2026-10-05 — 10 entries, 8 pre-built cards, no photos yet

`batch-as-sent.json` is Oscar's paste exactly as supplied (10 entries, pretty-printed, values unedited;
GPT output headed "Worked for 1m 52s" and "Cross-checked against current RHS/Kew data, including the cultivar
identities, UK hardiness and the important toxicity flags", his first paste after PR #54 merged).
`batch-corrected.json` is the 8 entries that will go in, with the standing layout conventions applied (table
below) and four toxicity sentences reworded to land on the safety tier they mean. The other two entries are
doubles of dealt cards and were resolved on those cards (below). **Nothing new is in `timber.html` yet**:
each card is added when its photo arrives, **four at a time** in batch order (Oscar, 2026-10-05: "Start asking
4 new cards from trusted recent batch" — four, not the five of every batch since 2026-09-26d). To deal a group: split them out of `batch-corrected.json`, `node tools/add-plants-bulk.js
--quick a.json a.jpg …`, `photo-credits.js --set <basename>` for each, restamp, update this file, the
sequential `node tests/run-all.js`.

Checks run on 2026-10-05 against deck 531 / hold 75 (the merged head of PR #54, 749c2ec, r354).

**Doubles: two, resolved with `tools/compare-double.js` under the NEW-SESSION protocol.** Nothing was added
for them; each dealt card took the incoming only where it was blank, or where the rules say the deck decides
and the genus sibling sided with the incoming. Three writes, build restamped r355, `plants.csv` re-exported
by the tool each time. The RHS site is blocked from the build container, so neither card was checked against
it; both changes rest on the stated rules and the deck's own siblings.
- #3 `Rhus typhina 'Dissecta'` — exact latin, dealt. Took `toxicity` "Sap may irritate sensitive skin; avoid
  unnecessary contact and ingestion." (ladder: Handle with care, the tier the sentence means; the card was
  blank) and `growthSpeed` 11 → 15 (an icon apart; the one genus sibling, the held `Rhus typhina`, carries
  17 and sides with the incoming — **[Unverified]** against the RHS). Kept: hue 20 (incoming 18 — hue
  stays), peak Sep-Nov (incoming Sep-Oct; the sibling's Sep-Nov sides with the card), hardinessNote "RHS H6
  for the exact cultivar" (prose on a dealt card stays), `common`, `cvs`, every prose field; pestRisk,
  thirst, sunNeed and sunMin all within an icon; size the same band both sides.
- #4 `Caryopteris × clandonensis` — exact latin, dealt. The card is the 'Dark Knight' filed under the
  species name; the incoming is a species-level write-up whose own `uncertain` says hardiness and dimensions
  vary by cultivar. Took `hardiness` H6 → **H4**: the one genus sibling, `'Worcester Gold'`, is H4 and sides
  with the incoming, and the card's own note ("Fully hardy in much of the UK, though a warm sheltered
  position is preferable in colder areas") reads as an H4 description. **[Unverified]** against the RHS from
  here; if the label says otherwise, the label wins. Took `toxicity`, reworded: the incoming "No significant
  toxicity commonly reported." prints the orange **Toxic** rung (the ladder matches "toxic" inside
  "toxicity"), so it went in as "No known hazard; no significant toxicity commonly reported." — the same
  claim, opening with the ladder's clear phrase, prints No known hazard. Kept: hue 265 (incoming 235), size
  1-1.5m H × 1-1.5m W (incoming 0.5–1 m × 0.5–1.5 m; the sibling's 0.5–1 m H × 1–1.5 m W sides with the
  incoming on height and with the card on spread — mixed, so the dealt card keeps; **[Unverified]** the
  'Dark Knight' height band), hardinessNote (prose stays, and it reads correctly under H4), `common`, `cvs`,
  prose; ratings all within an icon.

**PROBABLE hits that are not doubles (3).** The tool's last matching step — a word found in one card only —
and each is a different plant, so all three go in as new cards:
- #1 Choisya ternata 'Sundance' → the dealt `Choisya ternata` ("sundance" in that card's `cvs`). The
  cultivar beside the species, a second card as Euonymus alatus 'Compactus' sits beside Euonymus alatus.
- #5 Lycianthes rantonnetii 'Variegata' → `Solanum laxum 'Album'` ("potato" in White potato vine).
- #8 Agave americana 'Marginata' → `Ilex aquifolium 'Argentea Marginata'` ("marginata").
Nearest real neighbour with no hit: #2 Leycesteria formosa, the species beside the dealt `'Golden Lanterns'`
cultivar (as the held `Rhus typhina` sits beside the dealt 'Dissecta').

**To add when photos arrive (8):** #1, #2, #5–#10. A photo of #3 or #4 becomes a **second frame on the dealt
card** with `tools/add-swap.js "<latin>" photo.jpg --as <suffix>` — never a replacement, never a question.

`tools/check-plant-json.js` on every entry of `batch-corrected.json`: **8 pass, 0 errors.** As sent, three
hard errors, all the compass rule: #2 and #9 "Any aspect · full sun to partial shade · preferably sheltered"
and #7 "Full sun to partial shade" (light levels with no facing the validator can read; the other seven state
a facing ahead of the light level and pass). Remaining warnings, none acted on: ratings of 2–5 on the
20-scale as supplied (#1 careLevel 5; #2 pestRisk 3, careLevel 3; #7 pestRisk 3; #8 pestRisk 5, thirst 2,
growthSpeed 4; #10 thirst 3 — low-care, pest-free, drought-proof or slow plants read as intended, the same
call as every batch since 2026-09-29), and "moist" or "drained" shared by `water` and `soil` on #2, #5, #9.

**`plant-sense` pre-check.** The 8 fitted rows were appended to the hold block of a scratch copy of
`timber.html` (`tools/plant-data.js` `writeBlock`, deck 531 / hold 83 re-read) and `plant-sense.js` run on
it: issue list identical to the live deck's bar the rating-coverage counts (+8 everywhere), no new
contradiction, no new warning, `--strict` exits 0. Not checked: `tests/deck-audit.js` (it judges the rendered
card and needs the photo), which runs with the bulk tool on dealing.

## Conventions applied in `batch-corrected.json` (Oscar's standing "go")

The fields that differ from `batch-as-sent.json`: `soil`, `soilWarning` and `aspect` on all eight;
`toxicity` on four (#1, #5, #6, #10 — ladder section below); `spread` on #6. Every other field is as
supplied, including `hardinessNote`, `cvs`, `common`, prose, foliage class, `hue`, `peak` and all ratings.

- `soil` cut to one short line (≤26 chars) plus one short warning (≤44), written from the supplied
  sentences; lengths asserted by the build script, not counted by hand.
- `aspect`: eight of ten state a compass facing ahead of the light level ("East / South / West · full sun to
  partial shade · sheltered"); the facing is kept and the light level dropped (light is `sunNeed`). #2 and
  #9 open "Any aspect · …" → `Any aspect`. #7 states a light level only, so the facing is derived from the
  sun band exactly as `tools/fit-incoming.js` `deriveFacing` does it (the function itself was called):
  sunNeed 72 → `East / South / West`. The stated facing wins over the derivation where the two differ (#3
  and #10 say East / South / West at sunNeed 92 and 98, where the derivation alone would say South / West).
- Sub-metre sizes in cm with an en dash: one case, #6's spread "0.1–0.5 m" → "10–50 cm". Every range that
  reaches 1 m is unchanged, en dashes as supplied. #9's ">12 m" / ">8 m" matches the deck's Fagus sylvatica
  and Parthenocissus tricuspidata.
- Names as supplied. #1 keeps the quoted `'Sundance'`: GPT's `cvs` says Sundance is the trade name over
  'Lich' (synonyms 'Brica', 'Moonsleeper'), but the deck's Choisya card writes ‘Sundance’ in quotes and the
  genus carries no CAPS trade-name card, so nothing sets a different form. #10 `Lavandula spp.` as supplied
  (see the flags below). `common` and `cvs` untouched.
- Foliage classes as supplied. #6 (an annual) and #7 (an herbaceous perennial — its own `visual` says so)
  arrive as "deciduous"; the deck carries both words for such plants (Gomphrena globosa is "herbaceous",
  five herbaceous perennials of the 2026-10-03 batch are "deciduous"), so nothing was changed.
- #8 peak `Jan-Dec`: year-round foliage interest, the brief's answer for a plant with no single season; 89
  cards carry it.

| # | latin (as it will go in) | soil | warning | aspect (sunNeed) | size H / W |
|---|---|---|---|---|---|
| 1 | Choisya ternata 'Sundance' | Any well-drained soil | No standing wet; exposed sites scorch it | East / South / West (72, stated) | 1.5–2.5 m / 1.5–2.5 m (unchanged) |
| 2 | Leycesteria formosa | Fertile, moist, drained | No winter waterlogging; roots rot | Any aspect (65, stated) | 1.5–2.5 m / 1.5–2.5 m (unchanged) |
| 3 | Rhus typhina 'Dissecta' — **double**, not going in | — | — | — | — |
| 4 | Caryopteris × clandonensis — **double**, not going in | — | — | — | — |
| 5 | Lycianthes rantonnetii 'Variegata' | Fertile, moist, drained | Shelter; cold exposed sites need protection | South / West (95, stated) | 1.5–2.5 m / 1.5–2.5 m (unchanged) |
| 6 | Hibiscus trionum | Well-drained, acid-neutral | No cold wet soil; plant out after last frost | South / West (95, stated) | 0.5–1 m / 10–50 cm |
| 7 | Phytolacca americana | Any moist, drained soil | Self-seeds aggressively; weed out early | East / South / West (72, derived) | 1.2–3 m / 0.9–1.5 m (unchanged) |
| 8 | Agave americana 'Marginata' | Gritty, very free-draining | Cold and winter wet kill it; drain sharply | East / South / West (98, stated) | 1–1.5 m / 1–1.5 m (unchanged) |
| 9 | Acer negundo | Any moist, drained soil | Needs a lot of room; no waterlogged ground | Any aspect (68, stated) | >12 m / >8 m (unchanged) |
| 10 | Lavandula spp. — label names it, see flags | Very well-drained, any pH | No heavy wet soil; keep mulch off the crown | East / South / West (98, stated) | 0.5–1 m / 0.1–1 m (unchanged) |

## Toxicity text — run through the card's ladder (`TOX_LADDER`); four reworded, one taken on a double

The card picks its SAFETY tier by keyword and does not read meaning. Every supplied sentence was run through
the ladder copied from `timber.html`. All ten carry text — the first batch with no blank.
- **The trap PLANT-BRIEF.md documents, four times.** As sent, #1, #4 and #6 declare the plant safe ("No
  significant toxicity commonly reported.", "No significant toxicity warning listed by RHS.") and #10 says
  "Not generally regarded as significantly toxic as a garden plant; ingestion of concentrated aromatic oils
  can cause problems." Each contains "toxic", so each would print the orange **Toxic** rung on a plant it
  calls safe. The ladder tests its clear phrase first, so each was reworded to open with it and keep GPT's
  own words after the semicolon: #1 and #4 "No known hazard; no significant toxicity commonly reported.", #6
  "No known hazard; no significant toxicity warning listed by RHS.", #10 "No known hazard as a garden plant;
  ingestion of concentrated aromatic oils can cause problems." All four print **No known hazard**. (#4 is the
  double; its sentence went onto the dealt card with `--set`.)
- **#5 under-warned.** "All parts can cause severe discomfort if eaten; wear gloves when handling." matches
  nothing on the Toxic rung and lands on amber Handle with care through "glove", under the tier it means —
  "severe discomfort if eaten" is the RHS harmful-if-eaten class. Reworded "Harmful if eaten: all parts can
  cause severe discomfort; wear gloves when handling." → **Toxic**. Same claim, one keyword added.
- **As supplied, landing where they mean to:** #2 Toxic ("should not be eaten"); #3 Handle with care
  ("irritate", "sap"; taken onto the dealt card); #7 Toxic ("TOXIC", "poisonous" — not the red rung, which
  needs "highly toxic" or "potentially dangerous"; as supplied, Oscar's call if pokeweed should be red); #8
  Toxic ("harmful").
- **#9 Acer negundo** prints Toxic through "toxicity" in "No major human toxicity warning from RHS" — an
  accidental match — but the sentence's second half (seeds and seedlings and atypical myopathy in horses) is
  a real hazard the orange rung fairly flags on a card a garden centre sells to horse owners, so it is as
  supplied. [Inference] that Toxic is the right tier for a horse hazard with no human one; if Oscar wants it
  amber, the fix is `--set toxicity=` at deal time with the horse hazard first and a "handle" word.

## GPT's own `uncertain` flags — carried here, not resolved

The JSON came from GPT with no label text this time, so these are notes for the record, not holds; the
label is the card's name when the photo comes (NEW-SESSION.md, Oscar 2026-10-02):

- **#10 "Lavandula spp." — the one entry without a plant name.** GPT could not resolve the cultivar from
  "Variegated lavender" and names two candidates in `cvs` and `uncertain`: Lavandula angustifolia 'Platinum
  Blonde' ('Momparler') and Lavandula × intermedia 'Walberton's Silver Edge' ('Walvera'), both RHS H5 by its
  account, the first narrower-leaved and more compact. "spp." is the plural abbreviation (several species)
  and is kept as supplied. It passes the validator (the 2026-10-01 "Viburnum sp." did not, and was never a
  card), so it is stored and the label decides: when the photo arrives, deal it under the label's name; if
  the label says only "Variegated lavender", deal it as supplied with the two candidates in `cvs`, and
  **[Unverified]** which it is. Slug as supplied: `lavandula-spp`.
- #5 Lycianthes: the RHS marks the 'Variegata' name status unresolved, though 'Variegata' is widely used;
  also sold as Solanum rantonnetii 'Variegatum' (`cvs`). Goes in under the JSON's name.
- #7 Phytolacca americana: the **H6 is GPT's inference** from the plant's North American range — no RHS
  species-level profile retrievable; the deck has no Phytolacca sibling to settle it. **[Unverified]**.
- #4 Caryopteris: hardiness and dimensions vary between cultivars (the double, above).
- #1 Choisya: Sundance is the trade name over 'Lich' per GPT's `cvs`; as supplied in quotes.

Not checked against the RHS from here (its site is blocked from the build container). Hardiness bands, sizes
and peaks are as supplied; three worth a glance when the labels arrive: #7's inferred H6; #2 Leycesteria
formosa H5 where the dealt 'Golden Lanterns' cultivar card is H4; #6 Hibiscus trionum H2, an annual,
"deciduous" as supplied.

## Photo order and the filename each photo should match

Asked for four at a time, in batch order, new cards only (the doubles are not in the count). First ask,
2026-10-05: #1, #2, #5, #6. The slug is what `photos/<slug>.jpg` will be called
(NEW-SESSION.md slug rule). The two doubles' photos become a **second frame on the dealt card** with
`tools/add-swap.js "<latin>" photo.jpg --as <suffix>` — never a replacement, never a question.

1. Choisya ternata 'Sundance' → `choisya-ternata-sundance`
2. Leycesteria formosa → `leycesteria-formosa`
3. Rhus typhina 'Dissecta' → second frame on the dealt `Rhus typhina 'Dissecta'`
4. Caryopteris × clandonensis → second frame on the dealt `Caryopteris × clandonensis` (Bluebeard 'Dark Knight')
5. Lycianthes rantonnetii 'Variegata' → `lycianthes-rantonnetii-variegata`
6. Hibiscus trionum → `hibiscus-trionum`
7. Phytolacca americana → `phytolacca-americana`
8. Agave americana 'Marginata' → `agave-americana-marginata`
9. Acer negundo → `acer-negundo`
10. Lavandula spp. → `lavandula-spp`, or the label's name (see flags)
