# 2026-10-06h — Cornus alba Miracle ('Verpaalen2') dealt

Oscar, late on 2026-10-06: one photo and one JSON, no other text.

`batch-as-sent.json` is the paste exactly as supplied. `batch-corrected.json` is the same card with the deck's
conventions applied. `tools/compare-double.js` found no match in the deck or the hold block. The nearest
cards are its Verpaalen sibling, Cornus alba Nightfall ('Verpaalen3'), and Cornus alba 'Minbat', both
different cultivars.

| field | as supplied | as it went in |
|---|---|---|
| latin | Cornus alba [Miracle] ('Verpaalen2') | Cornus alba Miracle ('Verpaalen2') |
| aspect | East / North / South / West | Any aspect |
| soil | Fertile, humus-rich, moist but well-drained soil (48) | Humus-rich, well-drained (24) |
| soilWarning | Avoid very dry or permanently waterlogged soil (46) | No drought or permanent waterlogging (36) |
| hardiness | H6 · −20 to −15°C | H6 |
| hardinessNote | Fully hardy throughout the UK | H6 · −20 to −15°C; fully hardy throughout the UK |
| height / spread | 1.5-2.5m / 1-1.5m | 1.5–2.5 m / 1–1.5 m |

Why each change:

- **latin.** No card in the deck uses square brackets. The Verpaalen sibling carries the plain form, so this
  card follows it. [Inference] The brackets are the JSON's way of marking the trade name, and "Miracle" is the
  name on the label.
- **aspect.** The four facings together are the deck's "Any aspect".
- **soil and warning.** These are the measured panel budgets (26 / 44). The soil keeps type and drainage. The
  moisture sits in the water line ("Keep evenly moist"), which the checker asks for. The warning keeps both
  limits without repeating "soil".
- **hardiness.** The validator takes the rating alone. The temperature band moves to the note, and the
  supplied note is kept after it.

Every other field is as supplied, including the prune line, the blank toxicity, cvs and compliance, and the
ratings. pestRisk 5 and careLevel 5 are flagged by the checker as possible 0-5 values. They match the
sibling 'Minbat' (5 and 5) on the 0-20 scale, so they stand. `container` and `uncertain` are not card fields.

## Photo

| original (byte-identical) | camera, size, taken | sha256 (first 16) |
|---|---|---|
| `cornus-alba-miracle-verpaalen2.jpg` | Galaxy S24, 4000x3000 orientation 6 (upright 3000x4000), 2026-10-05 11:28 | feeeba1901027187 |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none. The file was
staged upright at 1200x1600 through the canvas pipeline, as shot, with no crop.

The photo shows pink-edged green and cream leaves on red stems, the card's "pink-flushed" variegation, taken
in October. [Unverified] from the photo alone that it is Miracle rather than another pink-variegated
Cornus alba. It is dealt under the JSON's name, which is the label's.

## Checks

check-plant-json PASS, data-audit, plant-sense --strict and deck-audit PASS (550 cards), audit-layout "all
cards clean", fast set 9/9, build r367. Rendered at 390x844 @2x from a `?cards=1` deck: the card is whole,
the soil panel fits, and the pink-edged leaf sits above the stats plaque.
