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
| 4 | Sarracenia 'Fiona' | Acid carnivorous compost | No hard tap water, feed or lime; never dry | South / West (95, stated) | 10-50 cm / ≤10 cm (shortened from "Up to 10 cm" at deal time for the rail, below) |
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
- #4 Sarracenia 'Fiona': H5 "confirmed" by GPT — [Unverified] from here. Spread "Up to 10 cm" as
  supplied (written "≤10 cm" at deal time, same claim, because the long form overran the rail) is unusual beside a
  10-50 cm height for a clump-former; [Unverified], the label may settle it.
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

## Cards 1–4 dealt (2026-10-06): the carnivores

Oscar's four photos, no text, in the order asked (#1–#4), each matching its entry on sight. All Galaxy S24 shots
of 2026-10-06: the Pinguicula of 13:55:30, trimmed nearly square on the phone (3000x3078, EXIF orientation 1,
staged 1200x1231); the Dionaea of 13:55:03 and the two Sarracenia of 12:03 and 12:04, each 4000x3000 with EXIF
orientation 6, staged upright 1200x1600. Byte scans found no C2PA, JUMBF or `trainedAlgorithmicMedia` markers.
One `add-plants-bulk.js --quick` run with the entries split out of `batch-corrected.json`; conventions exactly
as in that file, every other field as supplied. Deck 539 -> 543, hold 75 unchanged; derivatives built in the run;
credits by basename; restamped r359. Originals here are byte-identical to the files Oscar sent. The bulk run's
data checks: data-audit green, plant-sense --strict green with the four in the deck (no new contradiction); its
credits check failed only because the entries had not been written yet, and passed once they were; deck-audit
PASS on 543 cards after; audit-layout clean after the Fiona spread fix below.

| # | card | notes |
|---|---|---|
| 1 | Pinguicula agnata | matches: a rosette of broad pale yellow-green leaves dense with glistening sticky glands, small gnats caught on them, moss and a stone in a terracotta pot. No flower in frame. Rosette whole in the well at default framing (the nearly square frame cropped at the sides). |
| 2 | Dionaea muscipula | matches: two open traps with long marginal teeth, a fly standing in the upper one, in a terracotta pot. The trap faces are green rather than the "flushed pink to deep red within" the card describes as typical; flytraps colour up in strong light, so a green bench plant in October is consistent with the species ([Inference]). No label in frame, so "Tleshopofho" stays unread and the plain species stands as filed. The upper trap with the fly whole above the plaque at default framing, the lower trap's teeth arcing into view. |
| 3 | Sarracenia 'Maroon' | matches: a dense clump of stocky burgundy-red pitchers with darker veining, hooded lids over the mouths, green bases. Fills the well at default framing. The colour fits the card; the cultivar name is the label's and [Unverified] from the photo. |
| 4 | Sarracenia 'Fiona' | matches: a slender upright pitcher with a ruffled pink hood, red-veined over a paler pink net, a younger green pitcher curling beside it, a tall pitcher out of focus at the right edge; glasshouse glazing behind. **Reframed before the push**, and its spread shortened for the rail — both below. The cultivar name is the label's and [Unverified] from the photo. |

**#4 Sarracenia 'Fiona' reframed (2026-10-06).** Rendered at phone size (390x780, 2x) from a `?cards=4` deck, the
hood — the feature the card sells — sat at 51–64% down the frame, on the PLANT POWER POINTS line at 62%, with
blurred glazing filling the well above it. The 3:4 master fills the well's full height under `object-fit: cover`,
so `PHOTO_FOCUS` cannot lift it; only a crop can (the Polygala and Leycesteria precedents). The hood was measured as
the bounding box of strongly pink-red pixels in the left 60% of the displayed 3000x4000 frame, rows 0.50–0.64 so
the tube below it is excluded: x 0.140–0.485, y 0.511–0.640 (centre 31% across, 58% down).
`tools/reframe-photo.js` with `sarracenia-fiona-crop.json` (stored here) took the 3:4 window x 0.000–0.700,
y 0.300–1.000 of the camera original: 2100x2800 at exactly 0.750, hood centre at 45% across and 39% down the crop
(inside the tool's safe box), top at 30%, no rotation, no exposure change, no pixels generated. The tool's output is
stored here as `sarracenia-fiona-crop.jpg`; the master `photos/sarracenia-fiona.jpg` is that file downscaled to
1200x1600 at JPEG 85 through the same canvas pipeline `add-plants-bulk.js` stages with, and the derivative was
rebuilt with `optimise-photos.js --only`. The original here is untouched (sha256 dbc25b9e341e… before and after).
Re-rendered: the hood sits in the middle of the visible well between the title block and the plaque, the young
curling pitcher beside it. Credits entry updated.

**#4 spread shortened for the rail (2026-10-06).** `design/audit-layout.js`, run on the deal before the push:
"rail-s value 'Up to 10 cm' overruns its patch by 8.9px and crosses the baked label — shorten the spread value".
The only "Up to" size in the deck. Written "≤10 cm", the same claim in the notation family of the deck's ">12 m",
on the dealt card (`compare-double.js --card "Sarracenia 'Fiona'" --set size="10-50 cm H × ≤10 cm W"`) and in
`batch-corrected.json`; audit-layout then "all cards clean", deck-audit PASS, the rail re-rendered clear of its
label. Restamped at r359 (the revision had not been committed). The value itself stays [Unverified] (flags above).

Rendered at phone size from a `?cards=4` deck after both fixes: all four frame whole, no `PHOTO_FOCUS` override.
Next to deal: #5 Sorbus commixta 'Embley', #6 Sorbus 'Joseph Rock', #7 Sorbus vilmorinii, #8 Cornus canadensis —
asked for 2026-10-06.
