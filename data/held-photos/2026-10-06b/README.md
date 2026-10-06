# Batch of 2026-10-06b — 8 pre-built cards, no photos yet

`batch-as-sent.json` is Oscar's paste exactly as supplied (8 entries, values unedited; GPT output headed
"Worked for 1m 17s", with GPT's own notes: "'Tleshopofho' is almost certainly supplier text from Little Shop
of Horrors, so I've logged it as standard Dionaea muscipula rather than fabricating a cultivar. Sarracenia
'Maroon' is the compact purpurea × rubra hybrid, and 'Fiona' is confirmed H5." and "The Rowan
dimensions/hardiness and Cornus canadensis H7 rating are aligned to current RHS profiles. Pinguicula
cultivation is based on the species record plus specialist cultivation guidance."). His second paste of the
day, after the rose. `batch-corrected.json` is the same 8 with the standing layout conventions applied (table
below), two validator-required fixes and six toxicity sentences reworded to land on the tier they mean.
**Nothing is in `timber.html` yet**: each card is added when its photo arrives, four at a time in batch order
(Oscar's cadence since 2026-10-05). To deal a group: split them out of `batch-corrected.json`, `node
tools/add-plants-bulk.js --quick a.json a.jpg …`, `photo-credits.js --set <basename>` for each, restamp,
update this file, the sequential `node tests/run-all.js`.

Checks run on 2026-10-06 against deck 539 / hold 75 (5b74741, r358, the rose head on the feature branch).

**Doubles: none.** `tools/compare-double.js` finds no card for any of the 8. Three PROBABLE word-hits are
different plants: #5 and #7 → the dealt `Sorbus AUTUMN SPIRE ('Flanrock')` ("rowan" in that card's common
name — a different cultivar; the deck's only Sorbus), #6 → `Clematis JOSEPHINE ('Evijohill')` ("joseph").
No Dionaea, Sarracenia or Pinguicula card exists; the deck's one carnivore is `Drosera capensis`, whose soil
line ("Acid carnivorous compost; Rainwater only; never fertilised compost") set the form for the four here.

**To add when photos arrive (8):** all of them, #1–#8. First ask: #1–#4, the carnivores.

`tools/check-plant-json.js` on every entry of `batch-corrected.json`: **8 pass, 0 errors.** As sent, two
hard errors: #1's peak "Spring-Summer" (not a `Mon-Mon`) and #3's foliage "Perennial · …" (names none of the
four classes). Remaining warnings, none acted on: ratings of 5 on the 20-scale as supplied (#1 and #8
pestRisk; #5, #6, #7 careLevel — the same call as every batch since 2026-09-29), `container` values with a
qualifier after the yes/no (a record-only field, as supplied), and "moist" or "compost" shared by one field
pair on #2 and #8.

**`plant-sense` pre-check.** The 8 fitted rows appended to the hold block of a scratch copy of `timber.html`
(`tools/plant-data.js` `writeBlock`, deck 539 / hold 83 re-read) and `plant-sense.js` run on it: no new
contradiction, `--strict` exits 0; one new **warning**, #7 Sorbus vilmorinii "described as compact but size
reaches 4m — check the band is not a step too high" (its resilience line says "compact rowan" against the
supplied 2.5-4 m band; the deck carries five such warnings already, e.g. Meyer's Lemon). Left as supplied;
noted for Oscar. Not checked: `tests/deck-audit.js` (needs the photo), which runs with the bulk tool on dealing.

## Conventions applied in `batch-corrected.json`

The fields that differ from `batch-as-sent.json`: `soil`, `soilWarning` and `aspect` on all eight; `toxicity`
on six (#1, #2, #3, #4, #5, #8); `peak` on #1; `foliage` on #3. Every other field is as supplied, including
`common`, `cvs`, `hue`, `hardiness`, `hardinessNote`, prose, sizes (all already in cm or at 1 m and above,
hyphens as supplied) and all ratings.

- `soil` cut to one short line (≤26 chars) plus one short warning (≤44), written from the supplied sentences;
  lengths asserted by the build script, not counted by hand. The four carnivores take the Drosera card's form.
- `aspect`: every entry states a facing ahead of the light level; the facing is kept and the light level
  dropped (light is `sunNeed`). #1 "East or west-facing" → `East / West`; #2–#4 "South or west-facing" →
  `South / West`; #5–#8 name all four points → `Any aspect`, the deck's word for it.
- **#1 `peak` "Spring-Summer" → `Mar-Aug`.** The validator takes only `Mon-Mon`; the two seasons' months are
  March to August. A literal translation of GPT's words, not a flowering-time claim — [Inference]; Oscar's
  call if the butterwort's season should be narrower.
- **#3 `foliage` "Perennial · compact tubular carnivorous pitchers…" → "Evergreen to semi-dormant · compact
  tubular…".** The validator rejects a foliage value naming none of evergreen / semi-evergreen / deciduous /
  herbaceous. The class prefix is copied from #4, the other Sarracenia in the same paste ("Evergreen to
  semi-dormant"), [Inference] — the card reads the first class word and prints the rest; Oscar's call if
  'Maroon' loses its pitchers in winter.
- Trade/cultivar names as supplied: `Sarracenia 'Maroon'`, `Sarracenia 'Fiona'`, `Sorbus 'Joseph Rock'`,
  `Sorbus commixta 'Embley'`; no CAPS trade-name sibling in these genera sets another form (the dealt
  `Sorbus AUTUMN SPIRE ('Flanrock')` is a code-plus-trade-name case; these are plain cultivar names).

| # | latin (as it will go in) | soil | warning | aspect (sunNeed) | size H / W |
|---|---|---|---|---|---|
| 1 | Pinguicula agnata | Open, nutrient-poor mix | Rainwater only; no compost, feed or lime | East / West (65, stated) | 5-15 cm / 10-20 cm |
| 2 | Dionaea muscipula | Acid carnivorous compost | Tap water, feed, lime or compost can kill it | South / West (90, stated) | 5-10 cm / 10-30 cm |
| 3 | Sarracenia 'Maroon' | Acid carnivorous compost | No feed, lime or tap water; never let it dry | South / West (95, stated) | 15-30 cm / 30-50 cm |
| 4 | Sarracenia 'Fiona' | Acid carnivorous compost | No hard tap water, feed or lime; never dry | South / West (95, stated) | 10-50 cm / Up to 10 cm (as supplied) |
| 5 | Sorbus commixta 'Embley' | Humus-rich, acid-neutral | No waterlogged or very alkaline ground | Any aspect (70, all four stated) | 8-12 m / 4-8 m |
| 6 | Sorbus 'Joseph Rock' | Humus-rich, acid-neutral | No waterlogged or strongly alkaline soil | Any aspect (70, all four stated) | 8-12 m / 4-8 m |
| 7 | Sorbus vilmorinii | Well-drained; lime OK | No waterlogging; shallow chalk cuts its life | Any aspect (65, all four stated) | 2.5-4 m / 2.5-4 m |
| 8 | Cornus canadensis | Humus-rich, moist, acidic | No hot, dry or alkaline ground; no drought | Any aspect (45, all four stated) | 5-15 cm / 0.5-1 m |

## Toxicity text — run through the card's ladder (`TOX_LADDER`); six reworded

The card picks its SAFETY tier by keyword and does not read meaning. Every supplied sentence was run through
the ladder copied from `timber.html`. All eight carry text.
- **The "toxic" trap, four times.** #1–#4 arrive as "Not generally regarded as toxic." — a sentence that
  declares the plant safe and would print the orange **Toxic** rung because it contains the word. Each went in
  as "No known hazard; not generally regarded as toxic." (the ladder tests its clear phrase first), printing
  **No known hazard**.
- **#5 under-warned.** "Ornamental fruits are not intended for eating." matches no keyword and would print
  the amber default; the sentence means the deck's standard fruit warning. Now "Ornamental fruits are not to
  be eaten." → **Toxic**, as #6 and #7 ("Fruit is ornamental and should not be eaten.", as supplied) and the
  deck's rowans and roses print.
- **#8 both ways.** "Not generally regarded as significantly toxic; ornamental berries should not be treated
  as food unless positively identified and appropriately used." prints Toxic through "toxic" while its
  berry clause matches nothing. Now "Low hazard overall; treat the ornamental berries as not to be eaten." →
  **Toxic** through "not to be eaten", the tier the berry clause means ([Inference]); both of GPT's claims
  kept, the hedge about identification dropped as a card cannot carry it.

## GPT's own flags — carried here, not resolved

- #2 Dionaea muscipula: the label read "Tleshopofho"; GPT reads it as supplier text ("Little Shop of
  Horrors") and files the plain species, no cultivar invented. The photo should show the label; if it names a
  cultivar, the label wins.
- #3 Sarracenia 'Maroon': the RHS lists the name as unresolved with no cultivar-level hardiness; H3 as
  supplied, with GPT's note that some sellers call it frost tender despite its *S. purpurea* parentage.
  [Unverified] from here (the RHS site is blocked from the build container).
- #4 Sarracenia 'Fiona': H5 "confirmed" by GPT — [Unverified] from here. Spread "Up to 10 cm" is as
  supplied and unusual beside a 10-50 cm height for a clump-former; [Unverified], the label may settle it.
- #1 Pinguicula agnata: H2 is GPT's conservative estimate (no RHS rating); the peak is a translation (above).
- #8 Cornus canadensis: H7 as supplied, GPT citing the RHS profile; [Unverified] from here.
- #7 Sorbus vilmorinii: the plant-sense "compact" warning (above).

## Photo order and the filename each photo should match

Asked for four at a time, in batch order. The slug is what `photos/<slug>.jpg` will be called (NEW-SESSION.md
slug rule). First ask, 2026-10-06: #1–#4.

1. Pinguicula agnata → `pinguicula-agnata`
2. Dionaea muscipula → `dionaea-muscipula`
3. Sarracenia 'Maroon' → `sarracenia-maroon`
4. Sarracenia 'Fiona' → `sarracenia-fiona`
5. Sorbus commixta 'Embley' → `sorbus-commixta-embley`
6. Sorbus 'Joseph Rock' → `sorbus-joseph-rock`
7. Sorbus vilmorinii → `sorbus-vilmorinii`
8. Cornus canadensis → `cornus-canadensis`
