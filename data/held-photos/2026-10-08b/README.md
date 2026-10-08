# 2026-10-08b — three-entry GPT batch; Hibiscus 'Fiji' dealt

Oscar, 2026-10-08: a GPT JSON of three entries (Dasiphora MANDARIN TANGO, Hibiscus syriacus FIJI, Nematanthus
gregarius), then "Also / Hibiscus photo attached". `batch-as-sent.json` is his JSON verbatim, and
`batch-corrected.json` is the fitted copy. compare-double found none of the three in the deck. The cinquefoil's
"PROBABLE" match to Rosa 'Summer Song' ('Austango') was the word "tango" alone, so it is not a double.

Fitting changes (scratch `fit.js`; no fact changed):
- The trade designations are in capitals: `Dasiphora fruticosa MANDARIN TANGO ('Jefman')` and
  `Hibiscus syriacus FIJI ('Minspot')`.
- H1B became H1b. The goldfish plant's note became "H1b · 10 to 15°C; keep above 10°C".
- Sizes take the "a–b cm" / "a–b m" form.
- The goldfish plant's facing, "Bright filtered light / East or West window", became East / West, the facing
  it states.
- Soil and warning are cut to the panel budgets (26 / 44): "Drained, neutral-alkaline" / "No wet, compacted or
  heavy clay"; "Fertile, moist, drained" / "No waterlogging; cold or shade cuts flowers"; "Airy, free-draining
  mix" / "No waterlogging, dense mix or cold wet roots".
- "No known hazard; " goes ahead of both "Non-toxic to dogs and cats" lines, because without it "non-toxic"
  matches the ladder's /toxic/ and the card prints Toxic. The cinquefoil's line already lands on Caution
  (/glove/).
- `uses` is joined with " · " in lower case, and `foliage` and `container` are in lower case.

check-plant-json passes all three. On the cinquefoil it notes that pestRisk 4 and careLevel 4 look like 0–5
values. On the 0–20 scale, 4 is "trouble-free" and "plant-and-forget", which fits a shrubby cinquefoil, so both
stand.

## Hibiscus syriacus FIJI ('Minspot') — dealt

The photo was taken on a Galaxy S24 at 14:05:12 on 2026-10-07, at 4000x3000 with EXIF rotation 6, so it is
staged upright at 1200x1600. It has no C2PA or AI-edit markers. Dealt with `add-plants-bulk.js --quick`, which
stopped at the missing credit as it always does. The credit was then set with photo-credits. The deck goes from
577 to 578 at r388.

| file | camera, size, taken | sha256 (first 16) |
|---|---|---|
| `hibiscus-syriacus-fiji-minspot.jpg` | Galaxy S24, 4000x3000 (rot 6), 2026-10-07 14:05 | 622236fab0e1c1c1 |

The photo shows white-to-blush semi-double flowers with pink-flushed edges and crimson rays from a red
centre. That matches RHS's description of 'Minspot', which it lists under its UK/EU trade name PINKY SPOT:
"Semi-double, white flowers with pink shading and central, cherry red splashes" (rhs.org.uk/plants/346676).
So the photo fits the name. It is the card text, "semi-double pink flowers", that differs from RHS. Chicago
Botanic's archived page says pink, so sources disagree, but RHS is the UK authority.

Mandarin Tango and the goldfish plant wait for photos.

At r388: data-audit 0 problems (deck 578, hold 75), plant-sense --strict "No card contradicts itself",
deck-audit PASS, fast set 9/9. The fitted JSON and the dealt card match field for field. The card was rendered
at 390x844 and is whole.

## Fact check (2026-10-08)

A research agent checked all three entries against outside sources, using search snippets only because the proxy
blocks fetches. The disputed points were re-checked by hand. Nothing below has been changed; it waits for Oscar.

- **Fiji, visual:** "pink flowers" should read white flowers brushed pink, with a cherry-red centre (RHS, as above).
  RHS gives a spread of 1–1.5 m, where the card has 1.2–2.1 m, the US First Editions figure. RHS lists south or
  west facing. The UK trade name PINKY SPOT is not on the card. RHS gives it an AGM.
- **Mandarin Tango, toxicity:** "Ornamental fruit not for eating; gloves advised" is not supported. ASPCA lists
  cinquefoil (Potentilla spp., shrubby cinquefoil among its names) as non-toxic to dogs, cats and horses, and the
  fruit is tiny dry achenes. On the visual, the patent (USPP29830) has flowers opening orange-red and fading to
  orange then yellow. On soil, RHS lists the species for any pH.
- **Goldfish plant:** no errors. RHS gives H1b, summer flowers and the same size bands. Its non-toxic line rests on
  NCSU, because ASPCA's "Gold-Fish Plant" is a different species.
