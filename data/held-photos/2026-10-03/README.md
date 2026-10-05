# Batch of 2026-10-03 — 42 pre-built cards, no photos yet

`batch-as-sent.json` is Oscar's paste exactly as supplied (42 entries, pretty-printed, values unedited;
"Some new card jsons strait from gpt", his first paste after PR #53 merged). `batch-corrected.json` is
the same 42 with the standing layout conventions applied (table below) plus two named exceptions.
**Nothing is in `timber.html` yet**: each card is added when its photo arrives, five at a time in batch
order — the routine of every batch since 2026-09-26d. To deal a group: split them out of
`batch-corrected.json`, `node tools/add-plants-bulk.js --quick a.json a.jpg …`, `photo-credits.js --set
<basename>` for each, restamp, update this file, the sequential `node tests/run-all.js`.

Checks run on 2026-10-03 against deck 491 / hold 75 (the merged head of PR #53, 5ebd536, r342).

**Doubles: none.** `tools/compare-double.js` finds no card for any of the 42. Ten PROBABLE word-hits are
different plants, so all 42 go in as new cards: #1 → Oenothera 'Rosy Jane' ("jane"), #4 and #5 → the dealt
Gentiana sino-ornata ("gentian" — a species card; these are two named cultivars, as Twinkie beside Toni),
#6 → Citrus × meyeri ("citrus"), #10 → Uncinia 'Everflame' ("sedge"), #13 → Caryopteris × clandonensis
("dark"), #24 → Agapanthus 'Ovatus' ("african"), #26 → Leucophyta brownii ("brown"), #29 → Lotus LITTLE
BOY BLUE ("canary"), #38 → the dealt Euonymus alatus ("winged" — the species; 'Compactus' is a cultivar
of it, a second card as Cordyline australis sits beside Charlie Boy), #42 → Hibiscus LAVENDER CHIFFON
("chiffon" — a sibling in the same series, different code). Nearest real neighbour in the deck:
#36 'LC NO19' beside the dealt 'LC NO21' (Groundbreaker Blush) — a different code, so a different card.

`tools/check-plant-json.js` on every entry of `batch-corrected.json`: **42 pass, 0 errors.** As sent, one
hard error: #27's hardiness "H1C" (the band list is case-sensitive; corrected to H1c, see below). Remaining
warnings, none acted on: ratings of 3–5 on the 20-scale as supplied (#4, #5, #6, #7, #9, #10, #11, #12,
#13, #14, #15, #17, #18, #19, #24, #25, #32, #33, #34, #38, #39, #40, #41, #42 — low-care, pest-free or
slow plants read as intended, the same call as every batch since 2026-09-29), and "moist" shared by
`water` and `soil` on #1, #2, #20 and #30.

**`plant-sense` pre-check, new this batch.** The Dissectum maple failed `plant-sense --strict` only at
deal time (PR #53), so this batch was checked first: the 42 fitted rows were appended to the hold block of
a scratch copy of `timber.html` (`tools/plant-data.js` `writeBlock`, deck 491 / hold 117 re-read) and
`plant-sense.js` run on it. Its issue list is byte-identical to the live deck's — no new contradiction, no
new warning — and `--strict` exits 0. Not checked: `tests/deck-audit.js` (it judges the rendered card and
needs the photo), which runs with the bulk tool on dealing.

## Conventions applied in `batch-corrected.json` (Oscar's standing "go")

Only the layout fields change, plus the two named exceptions. Every other field is as supplied, including
`hardinessNote`, `cvs`, `common`, prose, foliage class and all ratings. The fields that differ from
`batch-as-sent.json`: `soil`, `soilWarning`, `aspect`, `height`/`spread` where sub-metre, `latin` on eight
entries, `hardiness` on one.

- `soil` cut to one short line (≤26 chars) plus one short warning (≤44), written from the supplied
  sentences; lengths asserted by the build script, not counted by hand.
- `aspect`: all 42 state light levels only ("Full sun to partial shade", "Bright light to partial shade"),
  no facings, so the facing is derived from the sun band exactly as `tools/fit-incoming.js` `deriveFacing`
  does it (the function itself was called): sunNeed ≥90 → `South / West`; ≥60 → `East / South / West`;
  ≥40 → `East / West`; below 40 → `North / East` (#18 Skimmia and #28 Hosta, both 35).
- Sub-metre sizes in cm with an en dash ("40–50 cm"); any range that reaches 1 m is unchanged, hyphen
  included (#7's spread stays "0.5-1 m" beside a cm height, as the Ajuga of 2026-10-01). "12 m+" and
  "8 m+" on #29, #39 and #40 match the deck's Akebia quinata and Prunus pissardii.
- **Trade names take the deck's form** (the Geranium lesson of 2026-10-02b: a breeder code alone reads as
  a mistake on the card). Every genus concerned already carries a CAPS trade-name card, so its form is
  copied: #1 `Hydrangea paniculata LITTLE LIME ('Jane')` and #36 `Hydrangea paniculata LIVING RED VELVET
  ('LC NO19')` after `Hydrangea DAREDEVIL ('Jpd01')`; #8 `Rosa CUTIE PIE ('Rop007')` after `Rosa ROYAL
  WILLIAM ('Korzaun')`; #19 `Echinacea MOOODZ FEARLESS ('Hilmofear')` after `Echinacea SUNSEEKERS ROSY
  ('Ifecssrosy')`; #30 `Clematis BIG & EASY PURPLE ('Tumaini')` after `Clematis JOSEPHINE ('Evijohill')`;
  #33 `Cordyline obtecta SUPERSTAR ('Albatross')` after `Cordyline australis CHARLIE BOY ('Ric01')`; #34
  `Physocarpus opulifolius MAGIC BALL ('Lp1')` after `LITTLE DEVIL ('Donna May')`; #42 `Hibiscus syriacus
  STARBURST CHIFFON ('Rwoods6')` after `LAVENDER CHIFFON ('Notwoodone')`. The code-to-trade-name pairings
  are GPT's own (its `cvs` field names both) and are **[Unverified]** from here — the RHS site is blocked
  from the build container; the label photo settles each when it arrives. Cultivar names that are not
  codes stay in quotes as supplied, including #24's `'Dalina Compact White Pink Blush'` (Dalina is a
  series name — [Inference]; no Osteospermum sibling in the deck sets a form) and #26's `'Toncka Green &
  Brown'`. `common` and `cvs` untouched.
- **#27 hardiness "H1C" → `H1c`.** The validator's band list is `H1a H1b H1c …` and rejects the capital;
  the band itself is as supplied (keep above about 5°C, glasshouse or indoors in winter), as is the note.
- `hue` 0 on #16 Delphinium 'Pure White' kept: white flowers; 53 cards, dealt and held, carry hue 0, the
  2026-10-02b Rhododendron 'Cunningham’s White' among them.
- Foliage classes as supplied. Three carry a qualifier the parser reads past: #9 "deciduous to
  semi-evergreen" reads **deciduous**, #22 "evergreen in frost-free conditions" reads **evergreen**, #25
  "semi-evergreen to deciduous" reads **semi-evergreen** (the app takes the first class word to appear;
  checked against `FOLIAGE_WORD` in `timber.html`). Several herbaceous perennials arrived as "deciduous"
  (#13, #16, #17, #28, #37); the deck carries both words for such plants (Hosta 'Broadband' deciduous,
  the held 'Halcyon' herbaceous), so nothing was changed.
- #11 Vinca major: "ground cover" in its prose with a 2.5 m spread sits exactly on `plant-sense`'s
  dwarf/ground-cover size ceiling (the rule fires above 2.5 m, not at it). Noted so nobody widens the
  spread later without knowing why the check then fails.

| # | latin (as it will go in) | soil | warning | aspect (sunNeed) | size H / W |
|---|---|---|---|---|---|
| 1 | Hydrangea paniculata LITTLE LIME ('Jane') — trade-name form | Fertile, moist, drained | No severe drought; no waterlogging | East / South / West (75) | 1-1.5 m / 1-1.5 m (unchanged) |
| 2 | Rhododendron 'Ramapo' | Humus-rich, moist, acid | No alkaline or chalky soil | East / South / West (60) | 0.5-1 m / 0.5-1 m (unchanged) |
| 3 | Robinia pseudoacacia 'Frisia' | Any well-drained soil | No persistently waterlogged ground | South / West (95) | 8-12 m / 4-8 m (unchanged) |
| 4 | Gentiana 'The Caley' | Moist, drained, lime-free | No drought; no stagnant wet soil | East / South / West (65) | 10 cm / 10–50 cm |
| 5 | Gentiana 'Berrybank Dome' | Moist, drained, lime-free | No drought or waterlogging | East / South / West (65) | 10 cm / 10–50 cm |
| 6 | Echinacea 'Princess Citrus' | Fertile, well-drained | No heavy wet winter soil | South / West (95) | 40–50 cm / 40–50 cm |
| 7 | Amsonia 'Blue Ice' | Moist or well-drained | No prolonged waterlogging | East / South / West (75) | 30–50 cm / 0.5-1 m |
| 8 | Rosa CUTIE PIE ('Rop007') — trade-name form | Fertile, humus-rich, moist | No prolonged waterlogging | South / West (90) | 15–30 cm / 30 cm |
| 9 | Oenothera lindheimeri 'Gambit Variegata Rose' | Fertile, well-drained | No wet heavy winter soil | South / West (95) | 40–60 cm / 40–50 cm |
| 10 | Carex oshimensis 'Evergold' | Moist but well-drained | No permanently waterlogged ground | East / West (55) | 30–40 cm / 40–50 cm |
| 11 | Vinca major 'Variegata' | Any soil, even damp ground | Spreads strongly by rooting stems | East / West (50) | 30–45 cm / 1.5-2.5 m |
| 12 | Vinca minor 'Illumination' | Moist or well-drained | Spreads by rooting stems | East / West (45) | 10–20 cm / 0.5-1.5 m |
| 13 | Symphyotrichum novae-angliae 'Dark Purple' | Fertile, moist, drained | No severe summer drought | South / West (90) | 1-1.5 m / 0.5-1 m (unchanged) |
| 14 | Hesperantha coccinea 'Pink Princess' | Fertile, moist, drained | No long drought; no winter waterlogging | South / West (90) | 50–70 cm / 30–50 cm |
| 15 | Hesperantha coccinea 'Major' | Fertile, moist, drained | No severe drought or stagnant winter wet | South / West (90) | 50–70 cm / 30–50 cm |
| 16 | Delphinium 'Pure White' | Rich, moist, well-drained | No waterlogging or exposed windy sites | East / South / West (85) | 60–80 cm / 30–50 cm |
| 17 | Crocosmia × crocosmiiflora 'Babylon' | Moist but well-drained | No heavy stagnant winter soil | East / South / West (80) | 0.5-1 m / 30–50 cm |
| 18 | Skimmia japonica 'Perosa' | Humus-rich, moist, drained | No hot dry sun or poor dry soil | North / East (35) | 0.5-1 m / 0.5-1 m (unchanged) |
| 19 | Echinacea MOOODZ FEARLESS ('Hilmofear') — trade-name form | Fertile, well-drained | No wet winter soil | South / West (95) | 35–45 cm / 35–45 cm |
| 20 | Hydrangea macrophylla 'HI Ocean' | Humus-rich, moist, drained | No drought; soil pH shifts flower colour | East / South / West (60) | 0.8-1.2 m / 0.8-1.2 m (unchanged) |
| 21 | Acer palmatum 'Moonfire' | Moist, drained, lime-free | No drought, waterlogging or drying wind | East / South / West (70) | 2.5-4 m / 2.5-4 m (unchanged) |
| 22 | Lantana camara | Fertile, sharply drained | Frost tender; no waterlogged roots | South / West (95) | 0.5-1.5 m / 0.5-1.5 m (unchanged) |
| 23 | Polygala myrtifolia | Fertile, free-draining | Frost tender; no wet winter roots | South / West (90) | 1-2 m / 1-1.5 m (unchanged) |
| 24 | Osteospermum ecklonis 'Dalina Compact White Pink Blush' | Well-drained soil | No heavy wet clay or winter waterlogging | South / West (95) | 30 cm / 30 cm |
| 25 | Cynara cardunculus | Fertile, well-drained | No winter waterlogging | South / West (95) | 1.5-2.5 m / 1-1.5 m (unchanged) |
| 26 | Heuchera 'Toncka Green & Brown' | Fertile, moist, drained | No waterlogging around the crown | East / South / West (60) | 30 cm / 30–40 cm |
| 27 | Scadoxus katherinae 'Flame' — H1c, see above | Rich, drained loam compost | Frost tender; no cold wet conditions | East / South / West (70) | 1-1.2 m / 30–50 cm |
| 28 | Hosta 'Autumn Frost' | Humus-rich, moist, drained | No prolonged drought | North / East (35) | 30–50 cm / 0.5-1 m |
| 29 | Phoenix canariensis | Loam-based, free-draining | Not reliably frost hardy in the UK | East / South / West (80) | 12 m+ / 8 m+ (unchanged) |
| 30 | Clematis BIG & EASY PURPLE ('Tumaini') — trade-name form | Fertile, moist, drained | No hot dry roots; no waterlogging | East / South / West (70) | 1.2-1.8 m / 0.5-1 m (unchanged) |
| 31 | Clematis 'Niobe' | Moist but well-drained | Keep the roots cool and shaded | East / South / West (70) | 1.5-2.5 m / 0.5-1 m (unchanged) |
| 32 | Schisandra sphenanthera | Fertile, moist, drained | No severe drought | East / South / West (65) | 4-8 m / 2.5-4 m (unchanged) |
| 33 | Cordyline obtecta SUPERSTAR ('Albatross') — trade-name form | Fertile, free-draining | Shelter pots from hard frost and winter wet | South / West (90) | 1.5 m / 80 cm |
| 34 | Physocarpus opulifolius MAGIC BALL ('Lp1') — trade-name form | Most soils, moist, drained | No prolonged waterlogging | East / South / West (75) | 0.8-1.2 m / 0.8-1.2 m (unchanged) |
| 35 | Hydrangea paniculata 'Little Fresco' | Fertile, moist, drained | No prolonged drought | East / South / West (75) | 70–80 cm / 60–70 cm |
| 36 | Hydrangea paniculata LIVING RED VELVET ('LC NO19') — trade-name form | Fertile, moist, drained | No prolonged drought | East / South / West (75) | 1 m / 80 cm |
| 37 | Alstroemeria 'Valley Beach' — label read 2026-10-03, see below | Fertile, moist, drained | No severe winter waterlogging | East / South / West (80) | 40–80 cm / 30–60 cm |
| 38 | Euonymus alatus 'Compactus' | Any well-drained soil | Needs good light for autumn colour | East / South / West (75) | 0.5-1 m / 1-1.5 m (unchanged) |
| 39 | Acer platanoides 'Crimson King' | Moist or well-drained | Needs substantial space at maturity | East / South / West (80) | 8-12 m / 8 m+ (unchanged) |
| 40 | Acer pseudoplatanus 'Drummondii' | Fertile, moist, drained | Cut out reverted all-green shoots at once | East / South / West (70) | 8-12 m / 8 m+ (unchanged) |
| 41 | Abelia × grandiflora 'Radiance' | Moist but well-drained | Shelter from hard cold and drying winds | South / West (90) | 0.5-1 m / 1-1.5 m (unchanged) |
| 42 | Hibiscus syriacus STARBURST CHIFFON ('Rwoods6') — trade-name form | Fertile, moist, drained | Flowers best in a warm sunny sheltered spot | South / West (95) | 1.5-2.5 m / 1-1.5 m (unchanged) |


## Toxicity text — run through the card's ladder (`TOX_LADDER`), nothing changed

The card picks its SAFETY tier by keyword and does not read meaning. Every supplied sentence, checked
against the ladder copied from `timber.html`:
- **Toxic** (orange, "harmful" / "toxic" / "should not be eaten"): #1, #2, #3, #11, #12, #16, #18 ("Plant
  material should not be eaten."), #20, #22, #27, #28, #30, #31, #33, #35, #36, #38, #40 — 18 cards. Each
  sentence means a plant not to eat, which is the tier it prints. #27 Scadoxus "potentially toxic" lands
  on Toxic, not Highly toxic (the red rung needs "highly toxic" or "potentially dangerous"); as supplied.
- **Handle with care** (amber): #7 Amsonia ("Milky sap may irritate sensitive skin."), #29 Phoenix ("Sharp
  leaf bases and spines can cause physical injury."), #37 Alstroemeria ("Sap can irritate sensitive
  skin.") — each a contact hazard, the tier it means.
- 21 of 42 have no toxicity text and print nothing, the deck's norm (#4, #5, #6, #8, #9, #10, #13, #14,
  #15, #17, #19, #21, #23, #24, #25, #26, #32, #34, #39, #41, #42).

## GPT's own `uncertain` flags — carried here, not resolved

The JSON was read from bench labels, so the label names are the card names (NEW-SESSION.md, Oscar
2026-10-02) and these are notes for the record, not holds:

- **OCR corrections GPT made and declared** — #1 "Little Line" → Little Lime; #12 "Illuminations" →
  'Illumination'; #14 "Pirik Princess" → 'Pink Princess'; #15 "Maior" → 'Major'; #20 "Hi Ocean Blue" →
  'HI Ocean' (blue read as the flower-colour presentation, not a cultivar); #26 "Tonka Green" → 'Toncka
  Green & Brown'; #27 "x katherinae" → katherinae (label formatting, not a hybrid sign); #29 "canadensis"
  → canariensis, with "Ciotola" read as a pot description; #32 "Schigndsa Spedtandra" → Schisandra
  sphenanthera; #34 "Magic Ba" → Magic Ball; #40 "pesudoplaanus" → pseudoplatanus. Each photo should
  show the label; if a label disagrees with the correction, the label wins.
- **Identity doubts GPT declared** — #8 Rose Cutie Pie: the RHS lists two roses under that name
  ('Rop007' and 'Wekruruwel'); GPT assumed the low thornless pink-edged 'Rop007'. #13 'Dark Purple':
  cultivar-level registration thin; values are the species'. #16 'Pure White': no breeding series on the
  label, not assumed to be Magic Fountains. #22 Lantana camara: no cultivar on the label, generic yellow.
  #23 Polygala: label gave the genus only; P. myrtifolia is GPT's choice of the usual UK retail plant —
  species **[Unverified]**, confirm from the photo. #9 Gaura filed under Oenothera (the deck's form, four
  Oenothera lindheimeri cards). #26 Heuchera 'Toncka Green & Brown': trade records only, thin
  documentation. #6 Echinacea H6 is GPT's reading of a stated cold-hardiness range.
- **#37 Alstroemeria "Valley Paper" was named by the label the same day** — see "Label read" below.
  GPT had deliberately not invented a cultivar: a nursery production list carries Valley Girl, Valley River,
  Valley Spring, Valley Time and Valley Wild with "Paper" in an adjacent packaging column, and the label
  bears that out.
- #20 'HI Ocean' is kept as a quoted cultivar as supplied; whether HI Ocean is a cultivar or a trade name
  over a code is **[Unverified]** from here.

Not checked against the RHS from here (its site is blocked from the build container). Hardiness bands,
sizes and peaks are as supplied; two worth a glance when the labels arrive: #36 H7 on a Hydrangea
paniculata (the deck's paniculatas are H5–H6; GPT cites the breeder's −30°C) and #6 H6 on an Echinacea
(the deck's three are H5).

## Photo order and the filename each photo should match

Asked for five at a time, in batch order. The slug is what `photos/<slug>.jpg` will be called.

1. Hydrangea paniculata LITTLE LIME ('Jane') → `hydrangea-paniculata-little-lime-jane`
2. Rhododendron 'Ramapo' → `rhododendron-ramapo`
3. Robinia pseudoacacia 'Frisia' → `robinia-pseudoacacia-frisia`
4. Gentiana 'The Caley' → `gentiana-the-caley`
5. Gentiana 'Berrybank Dome' → `gentiana-berrybank-dome`
6. Echinacea 'Princess Citrus' → `echinacea-princess-citrus`
7. Amsonia 'Blue Ice' → `amsonia-blue-ice`
8. Rosa CUTIE PIE ('Rop007') → `rosa-cutie-pie-rop007`
9. Oenothera lindheimeri 'Gambit Variegata Rose' → `oenothera-lindheimeri-gambit-variegata-rose`
10. Carex oshimensis 'Evergold' → `carex-oshimensis-evergold`
11. Vinca major 'Variegata' → `vinca-major-variegata`
12. Vinca minor 'Illumination' → `vinca-minor-illumination`
13. Symphyotrichum novae-angliae 'Dark Purple' → `symphyotrichum-novae-angliae-dark-purple`
14. Hesperantha coccinea 'Pink Princess' → `hesperantha-coccinea-pink-princess`
15. Hesperantha coccinea 'Major' → `hesperantha-coccinea-major`
16. Delphinium 'Pure White' → `delphinium-pure-white`
17. Crocosmia × crocosmiiflora 'Babylon' → `crocosmia-crocosmiiflora-babylon`
18. Skimmia japonica 'Perosa' → `skimmia-japonica-perosa`
19. Echinacea MOOODZ FEARLESS ('Hilmofear') → `echinacea-mooodz-fearless-hilmofear`
20. Hydrangea macrophylla 'HI Ocean' → `hydrangea-macrophylla-hi-ocean`
21. Acer palmatum 'Moonfire' → `acer-palmatum-moonfire`
22. Lantana camara → `lantana-camara`
23. Polygala myrtifolia → `polygala-myrtifolia`
24. Osteospermum ecklonis 'Dalina Compact White Pink Blush' → `osteospermum-ecklonis-dalina-compact-white-pink-blush`
25. Cynara cardunculus → `cynara-cardunculus`
26. Heuchera 'Toncka Green & Brown' → `heuchera-toncka-green-brown`
27. Scadoxus katherinae 'Flame' → `scadoxus-katherinae-flame`
28. Hosta 'Autumn Frost' → `hosta-autumn-frost`
29. Phoenix canariensis → `phoenix-canariensis`
30. Clematis BIG & EASY PURPLE ('Tumaini') → `clematis-big-easy-purple-tumaini`
31. Clematis 'Niobe' → `clematis-niobe`
32. Schisandra sphenanthera → `schisandra-sphenanthera`
33. Cordyline obtecta SUPERSTAR ('Albatross') → `cordyline-obtecta-superstar-albatross`
34. Physocarpus opulifolius MAGIC BALL ('Lp1') → `physocarpus-opulifolius-magic-ball-lp1`
35. Hydrangea paniculata 'Little Fresco' → `hydrangea-paniculata-little-fresco`
36. Hydrangea paniculata LIVING RED VELVET ('LC NO19') → `hydrangea-paniculata-living-red-velvet-lc-no19`
37. Alstroemeria 'Valley Beach' → `alstroemeria-valley-beach`
38. Euonymus alatus 'Compactus' → `euonymus-alatus-compactus`
39. Acer platanoides 'Crimson King' → `acer-platanoides-crimson-king`
40. Acer pseudoplatanus 'Drummondii' → `acer-pseudoplatanus-drummondii`
41. Abelia × grandiflora 'Radiance' → `abelia-grandiflora-radiance`
42. Hibiscus syriacus STARBURST CHIFFON ('Rwoods6') → `hibiscus-syriacus-starburst-chiffon-rwoods6`

## Label read: #37 is Alstroemeria 'Valley Beach'

Oscar's label text, pasted 2026-10-03: `P40-060 / Alstroem Valley Beach# Paper / 40 / U126 11 01715601`.
The name on the label is **Valley Beach**; "Paper" is the packaging field GPT predicted sat beside the name
(the earlier OCR had run the two together as "Valley Paper"). By the label rule the card is `Alstroemeria
'Valley Beach'`, common "Alstroemeria Valley Beach", slug `alstroemeria-valley-beach`; written into
`batch-corrected.json` with the label text added to its `uncertain`. [Unverified] whether Valley Beach is a
cultivar or a trade name over a code (the deck's Alstroemeria INDIAN SUMMER ('Tesronto') form would then
apply); its H4 and hardiness note are GPT's genus-level values from before the label was read, as supplied.
The other label fields (P40-060, 40, U126 11 01715601) are kept here as sent and not interpreted.

## Cards 2, 3 and 4 dealt (2026-10-03)

Oscar's three photos, with: "P40-060 … [the label above] … is on the pause on little lime im not sure the
plant in the photo is right, the other gentalia in the deck alright is the berrybankdome".

- **#1 LITTLE LIME is paused** at Oscar's word: he is not sure the plant he photographed is the right one,
  so no photo, and the card waits for one he is sure of.
- **The gentian collage is filed as #4 'The Caley'.** [Inference] from the note: the two missing photos of
  the five asked for are Little Lime (paused, above) and "the other gentian", which Oscar says is already in
  the deck as the Berrybank Dome, so the one gentian he sent is The Caley. The photo itself cannot settle
  it: deep blue trumpets with pale, dark-spotted throats over narrow grassy leaves fit both GPT entries.
  If the reading is wrong the fix is the photo's name and its CREDITS entry; the card text is untouched.
- **#5 'Berrybank Dome' is a double of the dealt `Gentiana sino-ornata`** (Oscar's 2026-09-19 photo, batch
  2026-09-27b), per the same note, and was resolved with `compare-double.js --card "Gentiana sino-ornata"`
  under the NEW-SESSION rules: `cvs` was blank on the card and is filled incoming, so it took "Berrybank
  Dome" (rule 1; it also makes the label name searchable, since search reads cultivars). Everything else
  stays with the dealt card: hue 225 (incoming 220), peak Sep-Nov (Aug-Oct; no sibling settles it), size
  5–10 cm band (10 cm), hardinessNote, prose, every rating within an icon. Nothing was added for #5.
  **Not done, Oscar's call:** renaming the card itself to `Gentiana 'Berrybank Dome'`. That is a deliberate
  rename (`data/renames.json`, photo and CREDITS renamed, saved progress keyed by latin) and the standing
  rules keep a dealt card's name, so it waits for a "rename it".

The three dealt, in one `add-plants-bulk.js --quick` run (Ramapo and Frisia Galaxy S24 shots of 2026-10-03
12:20 and 11:51, 4000x3000 with EXIF orientation 6, staged upright 1200x1600; The Caley a two-panel collage
from the collage app, 2160x3151, no camera EXIF beyond a 14:27 timestamp, staged 1200x1751; byte scans of
all three found no C2PA, JUMBF or `trainedAlgorithmicMedia` markers). Conventions exactly as in
`batch-corrected.json`; every other field as supplied. Deck 491 -> 494, hold 75 unchanged; credits by
basename; card derivatives built with sharp (not present in this container until installed; the bulk tool
warned and the derivatives were built after); restamped r343. Originals here are byte-identical to the
files Oscar sent; the collage is kept whole. The bulk run's data checks were green (data-audit, plant-sense
--strict with the three in the deck: no new contradiction); its credits check failed only because the
entries had not been written yet, and passed once they were.

| # | card | notes |
|---|---|---|
| 2 | Rhododendron 'Ramapo' | matches: one open violet-purple flower with a long pink style and brown anthers over small oval leaves, blue-green with bronze-purple tints; a bench label at the lower left, unreadable. In flower on the bench on 3 October against an Apr-May band — a bench photo says nothing about flowering time. Flower and foliage whole in the well at default framing. |
| 3 | Robinia pseudoacacia 'Frisia' | matches: golden-yellow pinnate leaves on a staked young tree, a label at the foot of the frame, unreadable. Leaflets fill the well at default framing. |
| 4 | Gentiana 'The Caley' (reading above) | two-panel collage: a trumpet opening wide at the left, closed and half-open ones at the right, deep blue with pale, dark-spotted throats over narrow grassy leaves; the collage app's blurred fill behind the stats panel. Both panels in the well at default framing. In flower on 3 October, inside the Sep-Nov band. |

Rendered at phone size (390x780, 2x) from a `?cards=3` deck after the derivatives were built: all three frame
whole, no `PHOTO_FOCUS` override. Next to deal after this section was written: #6 and #7, dealt below on 2026-10-04.

## Cards 6 and 7 dealt (2026-10-04), and the first photo caption

Oscar's two photos, with: "The amsonia needs like a little lable at the bottom saying autumnal colour".
Both Galaxy S24 shots of 2026-10-03 (the Echinacea 12:30:10, the Amsonia 12:29:13), 4000x3000 with EXIF
orientation 6, staged upright 1200x1600; byte scans found no C2PA, JUMBF or `trainedAlgorithmicMedia`
markers. One `add-plants-bulk.js --quick` run, derivatives built in the run (sharp now present), credits
by basename, conventions exactly as in `batch-corrected.json`, every other field as supplied. Deck 494 ->
496, hold 75 unchanged. Originals here are byte-identical to the files Oscar sent. The data checks were
green after the insert; the bulk run's credits check failed only because the entries were not yet
written, and passed once they were. Restamped r344 together with the caption below.

| # | card | notes |
|---|---|---|
| 6 | Echinacea 'Princess Citrus' | matches: one open flower, lemon-yellow petals with green-tinted tips around a golden-green cone, a second flower still green at the lower right. In flower on the bench on 3 October, just past the Jun-Sep band — a bench photo says nothing about flowering time. Flower whole in the well at default framing. |
| 7 | Amsonia 'Blue Ice' | the plant in autumn: upright stems of narrow willow-like leaves gone gold with bronze tips, the "yellow-gold autumn foliage" the card's visual names; no flowers (the periwinkle stars are May-Jun). Foliage fills the well at default framing. Carries the tag below. |

**Photo caption, new card feature (CARD-PROTOCOL v14.62).** The card had no way to say which season or
feature a photograph shows, and Oscar asked for one on this card in so many words. A text registry
`PHOTO_CAPTION` in `timber.html`, keyed by latin-slug like `PHOTO_FOCUS`, prints one short italic tag on
a dark pill in the photo's bottom-left corner, just above the PLANT POWER POINTS line; cards without an
entry are unchanged. `tools/check-boot.js` validates its keys as current slugs. First and only entry:
`amsonia-blue-ice` → "Autumnal colour", his words. Rendered at phone size: the tag reads over the gold
foliage, clear of the growth rail and the HEIGHT value on the left spine. audit-layout, verify-cards,
deck-audit and perf-test green on the build; the full sequential gate on the pushed head is in the ledger.

Next to deal after this section was written: #8–#12, dealt below on 2026-10-04.

## Cards 8–12 dealt (2026-10-04)

Oscar's five photos, sent with one word, "In order", so they are filed in batch order. All five are Galaxy
S24 shots of 2026-10-03 12:25–12:27 with EXIF orientation 1, already trimmed on the phone (none is the
sensor's 4000x3000); byte scans found no C2PA, JUMBF or `trainedAlgorithmicMedia` markers. One
`add-plants-bulk.js --quick` run, derivatives built in the run, credits by basename, conventions exactly as
in `batch-corrected.json`, every other field as supplied. Deck 496 -> 501, hold 75 unchanged; restamped
r345. Originals here are byte-identical to the files Oscar sent. Data checks green after the insert (the
credits check failed only until the entries were written). Rendered at phone size from a `?cards=5` deck:
all five frame whole at default framing, no `PHOTO_FOCUS` override.

| # | card | notes |
|---|---|---|
| 8 | Rosa CUTIE PIE ('Rop007') | 3000x3498, staged 1200x1399: glossy, sharply serrated pinnate rose foliage filling the frame, fresh pale shoots at the centre; no flower on the bench on 3 October, so the white-edged-pink flowers the card leads on are not in this frame (the Jun-Sep band). The cultivar is Oscar's label and GPT's identification, not the photograph's — any small rose reads like this out of flower. |
| 9 | Oenothera lindheimeri 'Gambit Variegata Rose' | 2758x2292, landscape, staged 1200x997: magenta four-petalled flowers with long stamens on red stems over narrow cream-margined leaves — the variegation and the pink flowers are the cultivar's two claims and both are in the frame. In flower on 3 October, inside the Jun-Oct band. The well keeps the centre column of a landscape frame: flowers top, variegated leaves below, the sides cropped. |
| 10 | Carex oshimensis 'Evergold' | 3000x3348, staged 1200x1339: arching blades with the broad creamy-yellow centre stripe and green margins filling the frame; a few older blades browning at the base. Matches. |
| 11 | Vinca major 'Variegata' | 1580x2766, staged 1200x2101: green leaves broadly margined cream-yellow, the fine hairs on the leaf edge visible on the top leaves (the greater periwinkle's ciliate margin); no flower. Matches. |
| 12 | Vinca minor 'Illumination' | 1934x3534, staged 1200x2193: trailing stems with gold leaves narrowly edged dark green, one leaf at the foot of the frame green-centred; no flower. Matches the card's "bright golden-yellow leaves narrowly edged green". The tall frame's lower third falls behind the plaque at the default focus, which keeps the gold leaves in the well. |

Next to deal after this section was written: #13–#15, dealt below on 2026-10-04.

## Cards 13–15 dealt (2026-10-04)

Oscar's three photos, no text, filed in batch order; each matches its entry on sight. All three Galaxy S24
shots of 2026-10-03 12:24–12:25, 4000x3000 with EXIF orientation 6, staged upright 1200x1600; byte scans
found no C2PA, JUMBF or `trainedAlgorithmicMedia` markers. One `add-plants-bulk.js --quick` run,
derivatives built in the run, credits by basename, conventions exactly as in `batch-corrected.json`, every
other field as supplied. Deck 501 -> 504, hold 75 unchanged; restamped r346. Originals here are
byte-identical to the files Oscar sent. Data checks green after the insert (the credits check failed only
until the entries were written). Rendered at phone size from a `?cards=3` deck: all three frame whole at
default framing, no `PHOTO_FOCUS` override.

| # | card | notes |
|---|---|---|
| 13 | Symphyotrichum novae-angliae 'Dark Purple' | one open violet-purple daisy with a gold-and-red disc, a furry purple bud and hairy stems below — the hairy stem and clasping leaves are the New England aster's marks. In flower on 3 October, inside the Aug-Oct band. The cultivar is Oscar's label and GPT's name, not the photograph's (its own `uncertain` says 'Dark Purple' is thinly documented). |
| 14 | Hesperantha coccinea 'Pink Princess' | a spike of pale blush-pink starry flowers with yellow anthers over grassy leaves, buds behind; matches the card's "large, delicate pale blush-pink autumn flowers". In flower on 3 October, inside the Sep-Nov band. |
| 15 | Hesperantha coccinea 'Major' | one large scarlet flower with dark anthers filling the frame, a second flower and a bud behind; matches "large crimson-scarlet flowers". In flower on 3 October, inside the Aug-Nov band. |

Next to deal after this section was written: #16–#20, dealt below on 2026-10-04.

## Cards 16–20 dealt (2026-10-04)

Oscar's five photos with "In order", filed in batch order; each matches its entry on sight. Four are Galaxy
S24 shots of 2026-10-03 12:22–12:23, 4000x3000 with EXIF orientation 6, staged upright 1200x1600; the
Delphinium is a two-panel collage from the collage app (2160x2021, no camera EXIF, a 2026-10-04 23:10
timestamp from the collage, staged 1200x1123, kept whole). Byte scans found no C2PA, JUMBF or
`trainedAlgorithmicMedia` markers. One `add-plants-bulk.js --quick` run, derivatives built in the run,
credits by basename, conventions exactly as in `batch-corrected.json`, every other field as supplied.
Deck 504 -> 509, hold 75 unchanged; restamped r347. Originals here are byte-identical to the files Oscar
sent. Data checks green after the insert (the credits check failed only until the entries were written).

Rendered at phone size from a `?cards=5` deck: four frame whole at default framing. **The Delphinium
collage takes `PHOTO_FOCUS` 0% 40%** (the Freckles clematis precedent, with a comment in the registry): the
collage is nearly square, its flower spike is the left panel and the leaf panel sits lower right under
the app's green fill, so the centred default showed the fill, cut the spike on the left and caught half
the leaf; at 0% the spike is whole with a strip of the leaf panel beside it.

| # | card | notes |
|---|---|---|
| 16 | Delphinium 'Pure White' | collage: a dense double white spike with black "bees" at the centre of each floret, left; a palmate, deeply cut hairy leaf on a stone slab, right. In flower on the bench in October against a Jun-Aug band — a bench photo says nothing about flowering time. The cultivar is the label's name; GPT's own `uncertain` says not to equate it with Magic Fountains Pure White. |
| 17 | Crocosmia × crocosmiiflora 'Babylon' | arching spray of orange-red trumpets with golden throats and long orange stamens, buds along the stem, grassy leaves soft below; matches. In flower on 3 October, just past the Jul-Sep band. |
| 18 | Skimmia japonica 'Perosa' | dense heads of red-pink buds over glossy green leaves with a fine pale margin; the "red-pink buds" of the card, in bud on 3 October inside the Oct-Apr band. The card's "grey-green leaves edged yellow" reads as plain green with a narrow pale edge in this frame — noted only, the label's name stands. |
| 19 | Echinacea MOOODZ FEARLESS ('Hilmofear') | one strong orange flower with a dark red-and-green cone, a second orange flower below; matches "strong orange flowers with fresh green tones in the developing central cone". In flower on 3 October, just past the May-Sep band. |
| 20 | Hydrangea macrophylla 'HI Ocean' | a mophead in deep magenta-purple with blue-white fertile florets, over green leaves bronzing at the edges. The label GPT read said "Hi Ocean Blue"; this plant is in the pinker presentation the card's own visual describes for higher pH — the colour is the soil's, not a different cultivar. Hue 225 (blue) kept as supplied. In flower on 3 October, past the Jun-Aug band. |

Next to deal after this section was written: #21–#24, dealt below on 2026-10-04.

## Cards 21–24 dealt (2026-10-04)

Oscar's four photos, sent with "OSTEOSPERMUM Dalina White" (the Osteospermum came first, out of batch
order, and the note names it); filed to #21–#24, no Cardoon photo yet. All four Galaxy S24 shots of
2026-10-03 12:00–12:21 (three 4000x3000 with EXIF orientation 6, staged upright 1200x1600; the Lantana
already upright, 3000x4000 orientation 1); byte scans found no C2PA, JUMBF or `trainedAlgorithmicMedia`
markers. One `add-plants-bulk.js --quick` run, derivatives built in the run, credits by basename,
conventions exactly as in `batch-corrected.json`, every other field as supplied. Deck 509 -> 513, hold 75
unchanged; restamped r348. Originals here are byte-identical to the files Oscar sent. Data checks green
after the insert (the credits check failed only until the entries were written). Rendered at phone size
from a `?cards=4` deck: all four frame whole at default framing, no `PHOTO_FOCUS` override.

| # | card | notes |
|---|---|---|
| 21 | Acer palmatum 'Moonfire' | **the photograph does not show the card's colour.** Seven-lobed, sharply serrated Acer palmatum leaves, yellow-green with pink-bronze tips and a few brown spots, on a staked young plant in a pot; the card describes "deep reddish-purple" leaves turning crimson in autumn. Dealt under the label's name by the label rule (NEW-SESSION, the Cordyline australis precedent), with the doubt here: [Unverified] that the plant photographed is 'Moonfire'. [Speculation] a red-leaved form faded to green-gold under shade cloth by October, a nursery mislabel, or a different plant on the bench — the photo cannot say which. Flagged to Oscar in the reply; if it is the wrong plant the fix is a replacement photo (the Eve Price routine), card text untouched. |
| 22 | Lantana camara | a shoot tip of rough, hairy, serrated leaves with a flower bud just forming at the centre; no open flower on 3 October against a May-Oct band, so the yellow the card is named for is not in the frame. Genus is safe on the leaf ([Inference]); the species is the label's. |
| 23 | Polygala myrtifolia | one magenta pea flower with the fringed white keel, small oval leaves behind; matches "purple-pink pea-like flowers". In flower on 3 October, inside the Apr-Oct band. GPT's species choice (label gave the genus only) is consistent with the leaf and flower but [Unverified]. |
| 24 | Osteospermum ecklonis 'Dalina Compact White Pink Blush' | one creamy-white daisy, the petals washed pink on the backs and tips, around a blue-grey disc rimmed orange; the "white flowers flushed and blushed soft pink around darker centres" of the card. In flower on 3 October, just past the May-Sep band. Oscar's note reads "OSTEOSPERMUM Dalina White"; [Unverified] whether that is the label's full wording or his shorthand — the card keeps GPT's name, which the pink blush in the frame supports. If the label says only Dalina White, the latin is a one-line rename before merge. |

**Polygala reframed after the deal (2026-10-04).** Oscar: "Shake rhe sweet pea shrub photo wasn't slightly
higher so the floer was in the centre of rhe plsnt box" — read as *shame the sweet pea shrub photo wasn't
slightly higher, so the flower was in the centre of the plant box* ([Inference] from the typing). The 3:4
master fills the well's full height under `object-fit: cover`, so `PHOTO_FOCUS` cannot lift it; only a crop
can. The flower was measured as the bounding box of strongly magenta pixels in the displayed 3000x4000 frame
(x 0.293–0.750, y 0.252–0.623; centre 52% across, 44% down). `tools/reframe-photo.js` with
`polygala-myrtifolia-crop.json` (stored here) took the 3:4 window x 0.106–0.936, y 0.170–1.000 of the camera
original: 2490x3320 at exactly 0.750, feature centre at 50% across and 32% down the crop (inside the tool's
safe box), no rotation, no exposure change, no pixels generated. The tool's output is stored here as
`polygala-myrtifolia-crop.jpg`; the master `photos/polygala-myrtifolia.jpg` is that file downscaled to
1200x1600 at JPEG 85, as `add-plants-bulk.js` stages, and the derivative was rebuilt with
`optimise-photos.js --only`. The original here is untouched (md5 13a18691336fe44a69e065cdcb4d8594 before and
after). Re-rendered at phone size: the flower spans 10–55% of the well's height (was 25–62%), its centre at
32% against the PLANT POWER POINTS line at 60%, so it sits in the middle of the visible part of the well and
the keel fringe clears the plaque. Credits entry updated. Restamped r349.

## Cards 25–29 dealt (2026-10-05)

Oscar's five photos, sent with no text in the order Heuchera, Cardoon, Scadoxus, Hosta, Phoenix; filed to
#25–#29 by sight (each matches its entry's leaf, below). All five Galaxy S24 shots of 2026-10-03 11:55–11:59
(four 4000x3000 with EXIF orientation 6, staged upright 1200x1600; the Heuchera trimmed on the phone to
2758x3448, orientation 1, staged 1200x1500); byte scans found no C2PA, JUMBF or `trainedAlgorithmicMedia`
markers; XMP carries a Samsung Ultra HDR gain map, as on earlier frames. One `add-plants-bulk.js --quick` run
in batch order, derivatives built in the run, credits by basename, conventions exactly as in
`batch-corrected.json`, every other field as supplied. Deck 513 -> 518, hold 75 unchanged; restamped r350.
Originals here are byte-identical to the files Oscar sent (md5 checked). Data checks green after the insert
(the credits check failed only until the entries were written); fast set 9/9. Rendered at phone size from a
`?cards=5` deck: all five frame whole at default framing, no `PHOTO_FOCUS` override. No flower in any of the
five: the Cardoon (Jun–Sep), Scadoxus (Jul–Sep) and Hosta (Apr–Sep) were photographed on 3 October, past or
at the end of their bands; the Heuchera and Phoenix cards are foliage plants with a Jan–Dec band.

| # | card | notes |
|---|---|---|
| 25 | Cynara cardunculus | a mass of deeply cut, grey-green leaves with spiny lobe tips and pale midribs, potted under glass; no flower stem. The leaves read mid green rather than the card's "silvery-grey" ([Inference] young nursery foliage under glass). Consistent with Cynara on the leaf ([Inference]); species as labelled. |
| 26 | Heuchera 'Toncka Green & Brown' | two hairy, lobed, scallop-edged green leaves with dark brown-purple veining and a purple flush at the leaf base, older leaves gone orange-brown around them; matches "green leaves with contrasting darker brown-toned markings". The cultivar is the label's and [Unverified]: GPT's two flags stand (the label's 'Tonka Green' may be abbreviated; cultivar-level documentation thin). Oscar's fingertips are in the bottom-left corner of the frame; on the card they sit under the stats plaque and the aspect bar (at most a few pixels show between them at phone size). Not cropped: a crop that removed them would cut the left leaf or fall outside the reframe tool's aspect gate. |
| 27 | Scadoxus katherinae 'Flame' | a thick pale green pseudostem with broad, bright green, wavy-edged leaves showing a fine cross-hatched vein pattern, under green shade netting; one dead leaf caught in the crown. No flower, so the scarlet head the card is named for is not in the frame. [Inference] consistent with Scadoxus multiflorus subsp. katherinae in leaf; the cultivar is the label's and [Unverified]. GPT's two flags stand (Haemanthus synonymy; "x katherinae" read as label formatting). |
| 28 | Hosta 'Autumn Frost' | top-down of a potted clump: blue-green leaf centres with wide cream-yellow margins, leaf tips scorched brown, a pale residue on the blades ([Inference] hard-water or spray marks); matches "blue-green heart-shaped leaves edged broad yellow in spring, fading to creamy white" — cream now, as the card says for late season. No flower. |
| 29 | Phoenix canariensis | close-up of a young crown: stiff, narrow, V-folded pinnate leaflets, deep green with pale midribs, brown fibre strands between them; matches "deep-green pinnate fronds"; no trunk in the frame. Genus plausible on the leaflet ([Inference]); species is the label's (GPT's flags stand: 'canadensis' corrected to canariensis, 'Ciotola' read as the pot). |

Next to deal: #1 when Oscar has a photo he is sure of; then #30–#34 in batch order (Clematis BIG & EASY PURPLE
('Tumaini'), Clematis 'Niobe', Schisandra sphenanthera, Cordyline obtecta SUPERSTAR ('Albatross'), Physocarpus
opulifolius MAGIC BALL ('Lp1')).
