# Batch of 2026-10-06 — one card, dealt the same day

`batch-as-sent.json` is Oscar's paste exactly as supplied (one entry, values unedited), sent with its photo
in one message. `batch-corrected.json` is the same entry with the standing layout conventions applied (below).
Dealt the same day with `node tools/add-plants-bulk.js --quick`; deck 538 -> 539, hold 75 unchanged;
derivative built in the run; credits by basename; restamped r358.

Checks run on 2026-10-06 against deck 538 / hold 75 (the merged head of PR #55, 14dd131, r357).

**Doubles: none.** `tools/compare-double.js` finds no card — no exact or stripped latin, no Rosa card with the
code 'Peafanfare', no common-name or single-word hit. 29 Rosa cards in the deck; this is the thirtieth.

`tools/check-plant-json.js`: as sent, 0 errors (the facing "South, east or west-facing · full sun · preferably
sheltered" carries compass words, so the compass rule passes); warnings on `soil` (120 chars) and `soilWarning`
(170) over the panel budgets, and on `container` "Yes · large container" (a record-only field, as supplied).
On `batch-corrected.json`: pass, the `container` warning only.

## Conventions applied in `batch-corrected.json`

Fields that differ from as-sent: `latin`, `aspect`, `soil`, `soilWarning`, `toxicity`, `height`, `spread`.
Everything else as supplied, including `common`, `cvs` ("Peafanfare"), `hue`, `peak`, `hardinessNote`, prose,
foliage class and all ratings.

- **`latin` takes the deck's trade-name form**: `Rosa [A Whiter Shade of Pale] ('Peafanfare')` →
  `Rosa A WHITER SHADE OF PALE ('Peafanfare')`, after the dealt `Rosa ROYAL WILLIAM ('Korzaun')`, `Rosa
  PRECIOUS LOVE ('Kirlowo')` and `Rosa CUTIE PIE ('Rop007')` (the 2026-10-02b Geranium lesson: the genus's
  CAPS form is copied where one exists). Slug `rosa-a-whiter-shade-of-pale-peafanfare`.
- `aspect`: the research states a facing ahead of the light level ("South, east or west-facing"), so the
  facing is kept in the deck's order, `East / South / West`; the light level is `sunNeed` (90).
- `soil` "Fertile, drained, any pH" (24) from "fertile, humus-rich, moist but well-drained … clay, loam, chalk
  and sandy soils across a broad pH range"; `soilWarning` "No waterlogging; renew old rose soil" (36) from
  "avoid waterlogged ground … avoid planting directly into exhausted soil where roses have recently grown" —
  the line twenty of the deck's roses already carry. Lengths asserted by the build script.
- Sub-metre sizes in cm: "0.6–0.9 m" → "60–90 cm" for both height and spread.
- **`toxicity` reworded, the "toxicity" trap again.** As sent, "Generally low toxicity; thorny stems can
  cause physical injury." prints the orange **Toxic** rung because the ladder matches "toxic" inside
  "toxicity", on a sentence that says the plant is barely toxic and warns only of thorns. Went in as "Low
  hazard if eaten; the thorny stems are sharp and can injure skin, so wear gloves when handling." — the same
  two claims, landing on amber **Handle with care** through "sharp" and "gloves". Noted for Oscar: the deck's
  other roses print Toxic because their sentences add that the hips are not to be eaten; this JSON makes no
  claim about hips, so none was added.

| # | latin (as it went in) | soil | warning | aspect (sunNeed) | size H / W |
|---|---|---|---|---|---|
| 1 | Rosa A WHITER SHADE OF PALE ('Peafanfare') — trade-name form | Fertile, drained, any pH | No waterlogging; renew old rose soil | East / South / West (90, stated) | 60–90 cm / 60–90 cm |

## Photo

Oscar's Galaxy S24 shot of 2026-10-06 13:58, trimmed nearly square on the phone (3000x3208, EXIF orientation
1), staged 1200x1283; byte scan found no C2PA, JUMBF or `trainedAlgorithmicMedia` markers. The original here
(`rosa-a-whiter-shade-of-pale-peafanfare.jpg`) is byte-identical to the file sent. It matches the entry: one
large, very pale blush-pink double flower, near white at the petal edges with a hint of yellow at the heart,
scrolled inner petals, over glossy dark green leaves; a fence behind. In flower on 6 October, inside the
Jun-Oct band. Rendered at phone size (390x780, 2x) from a `?cards=1` deck: the flower fills the well whole at
default framing, the nearly square frame cropped at the sides under `object-fit: cover`; no `PHOTO_FOCUS`.

Checks after the deal: data-audit, plant-sense --strict (no new contradiction) and deck-audit (539 cards)
green; fast set 9/9 on r358. The full sequential gate's result is in the ledger.
