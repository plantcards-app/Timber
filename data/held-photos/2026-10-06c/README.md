# Batch of 2026-10-06c — two cards, dealt the same day

`batch-as-sent.json` is Oscar's paste exactly as supplied (2 entries, values unedited), sent with its two photos in
one message: "In order with photos". `batch-corrected.json` is the same two with the standing layout conventions
applied (below), two validator-required fixes on the fern and the fern's toxicity sentence reworded. Dealt the same
day with one `add-plants-bulk.js --quick` run; deck 543 -> 545, hold 75 unchanged; derivatives built in the run;
credits by basename; restamped r360.

Checks run on 2026-10-06 against deck 543 / hold 75 (3652389, r359).

**Doubles: none.** `tools/compare-double.js` finds no card for either. The deck carries five dealt Skimmias
(OBSESSION, 'Mystic Marlot', 'Nymans', × confusa 'Kew Green', 'Perosa') and one held ('Rubella'); 'Pabella' is a
new cultivar beside them. Ferns: Dryopteris erythrosora and Dicksonia antarctica are dealt; no Pteris.

`tools/check-plant-json.js`: as sent, the Skimmia passes; the fern has two hard errors — hardiness "H1C" (the band
list is case-sensitive) and peak "Year-round" (not a `Mon-Mon`). On `batch-corrected.json`: 2/2 pass. Remaining
warnings, none acted on: the Skimmia's careLevel 5 on the 20-scale (as supplied), "moist" shared by its `water` and
`soil`, "compost" shared by the fern's, and the fern's `container` "Yes · ideal" (a record-only field).

## Conventions applied in `batch-corrected.json`

Fields that differ from as-sent: `soil`, `soilWarning` and `aspect` on both; on the fern also `hardiness`, `peak`,
`height`, `spread` and `toxicity`. Everything else as supplied, including `common`, `cvs`, `hue`, `hardinessNote`,
prose, foliage class and all ratings.

- `soil` (≤26) plus one short warning (≤44), written from the supplied sentences; lengths asserted by the build
  script. The Skimmia takes "Humus-rich, moist, drained", the line its 'Nymans', 'Kew Green' and 'Perosa' siblings
  carry.
- `aspect`: both state "North, east or (sheltered) west-facing" ahead of the light level → `North / East / West`, the
  form three of the Skimmia siblings carry; light is `sunNeed`.
- **Fern hardiness "H1C" → `H1c`**, the 2026-10-03 Scadoxus precedent; the band as supplied, the note as supplied
  (its own "H1C" included).
- **Fern peak "Year-round" → `Jan-Dec`**, plant-sense's own prescription for year-round interest; 89 cards carry it.
- Fern sizes "0.1-0.5 m" → "10–50 cm", the deck's sub-metre convention.
- **Fern toxicity reworded, the "toxicity" trap.** "No significant toxicity is widely documented, but the plant is
  ornamental and not intended for consumption." prints the orange Toxic rung through "toxicity" on a sentence that
  says nothing hazardous is known. Went in as "No known hazard; no significant toxicity is widely documented, but the
  plant is ornamental and not intended for consumption." — both claims kept, printing **No known hazard**. The
  Skimmia's "Fruit are ornamental and should not be eaten; ingestion may cause stomach upset." is as supplied and
  prints Toxic, the tier it means, as the deck's berrying Skimmias do ('Nymans' carries nearly the same sentence).
- **Noted, not changed:** the Skimmia's peak "Mar-Dec" spans spring flower to winter berry, where the deck's berrying
  Skimmias carry the berry season only (Oct-Mar or Oct-Apr) and the brief asks for one band, "the season it is sold
  on". As supplied; Oscar's call.

| # | latin | soil | warning | aspect (sunNeed) | size H / W |
|---|---|---|---|---|---|
| 1 | Skimmia japonica 'Pabella' | Humus-rich, moist, drained | No poor dry soil, waterlogging or hot sun | North / East / West (25, stated) | 1-1.5 m / 0.5-1 m (unchanged) |
| 2 | Pteris nipponica | Humus-rich fern compost | No drought, dry air, wet roots or hot sun | North / East / West (30, stated) | 10–50 cm / 10–50 cm |

## Photos

Originals here are byte-identical to the files Oscar sent; byte scans of both found no C2PA, JUMBF or
`trainedAlgorithmicMedia` markers.

| # | card | notes |
|---|---|---|
| 1 | Skimmia japonica 'Pabella' | Galaxy S24, 2026-10-06 17:00, 4000x3000 with EXIF orientation 6, staged upright 1200x1600. Matches: dense clusters of glossy scarlet berries over glossy dark green elliptic leaves, block paving below — the berrying plant the card describes. In berry on 6 October, inside the Mar-Dec band. Berries and leaves fill the visible well at default framing, the paving under the plaque. The cultivar name is the label's and [Unverified] from the photo. |
| 2 | Pteris nipponica | a two-panel collage from the phone's collage app, 2160x3840 with no camera EXIF, staged 1200x2133. Matches: upright stems of narrow wavy pinnae, each with a broad silvery-white central band and green margins, backlit; staging and a crate of pink-flowered plants behind. Kept whole, as the Gentiana 'The Caley' and Delphinium collages were; the app's blurred fill falls under the plaque. Both panels in the well at default framing, the right panel's foot under the plaque. The species is GPT's and [Unverified] from the photo, which shows a silver-banded Pteris; GPT's own note: "Silver Ribbon Fern" is a trade name, not a cultivar. |

Rendered at phone size (390x780, 2x) from a `?cards=2` deck: both frame whole, no `PHOTO_FOCUS` override. Checks after
the deal: data-audit, plant-sense --strict (no new contradiction), deck-audit (545 cards) and audit-layout (all cards
clean) green; fast set 9/9 on r360. The full sequential gate's result is in the ledger.
