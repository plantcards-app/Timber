# 2026-10-08c — Cordyline australis 'Red Star': the red-leaved card takes Oscar's JSON; three flash frames

Oscar, 2026-10-08, sent a GPT JSON for Cordyline australis 'Red Star' with this message: "There's a cordyline
australis card in the deck that is clearly a red leafed card so that shojld be unde this json / Here's 3 flash
between photos to keep things full and fresh".

## The card

The deck's plain `Cordyline australis` card ("Cordyline / Cabbage palm", hue 110) had a red-leaved photo. That
photo is a collage of crops from two of his bench photos, the same two that arrived today as frames 1 and 2. On his
instruction the card now *is* the JSON, edited in place, so it keeps its deck position:
- latin `Cordyline australis 'Red Star'`, common "Red Star Cabbage Palm", hue 350
- every field from the fitted JSON, including H3 (it had been H4) and 2.5–4 m × 1.5–2.5 m (it had been 4–8 m ×
  2.5–4 m)
- its photo files renamed to the new slug (`git mv`, same bytes), with the CREDITS entry renamed and noted
- the rename recorded in `data/renames.json`, and plants.csv re-exported with `plants-tool.js export`

Fitting (scratch `fit.js`): visual, water and resilience were cut at sentence boundaries to the deck budgets
(fit-incoming `BUDGET`). The facing was derived from sunNeed 85, giving East / South / West, which is also what RHS
lists. Soil is "Fertile, drained, any pH" and the warning "No heavy, wet soil or winter waterlogging". The band is
split from the note, sizes take the "a–b m" form, and uses are joined with " · ". check-plant-json's row leaves out
`foliage`, so "evergreen" was carried in by hand. The fitted JSON and the deck card match field for field.

Fact check: a research agent worked from search snippets, because the proxy blocks fetches. Nothing is wrong.
- RHS gives H3 for 'Red Star', the species and the Purpurea Group.
- RHS gives 2.5–4 m × 1.5–2.5 m and south, west or east facing.
- ASPCA's "Giant Dracaena" entry is *Cordyline australis*, toxic to dogs, cats and horses (saponins).
- Cordyline slime flux is a real RHS-listed disease.

Doubtful: "good wind … tolerance" in resilience, where RHS lists exposure as sheltered only. It is left as sent.

## Flash frames

| file | frame | camera, size, taken | sha256 (first 16) |
|---|---|---|---|
| `cordyline-australis-red-star-fan.jpg` | 2: the upper fan of leaves, cropped | Galaxy S24, 4000x3000 (rot 6), 2026-10-02 14:43:57 | 238dbb3e190b2403 |
| `cordyline-australis-red-star-crown.jpg` | 3: the crown, backlit | Galaxy S24, 4000x3000 (rot 6), 2026-10-02 14:44:29 | cf8f7a082424e58e |
| `cordyline-australis-red-star-leaf.jpg` | 4: one leaf held forward, ribbed with an orange edge | Galaxy S24, 4000x3000 (rot 6), 2026-10-02 14:44:28 | 577bc64a56518e05 |

None of the three has C2PA or AI-edit markers, and all are byte-identical to what he sent.

The first photo has his hand holding a leaf at the left edge, and several pot and nursery labels. Fingers and
labels never go on a customer card (v14.34), so it was cropped with `tools/reframe-photo.js` to
`cordyline-australis-red-star-fan-crop.json`. The crop is 1800x2400 at 640,0, aspect 0.75, original pixels only.
The tool confirmed all five labels are outside the crop. The hand sits at x < 0.19, y > 0.63, so it is out too.

add-swap names every frame "Second frame", so frames 3 and 4 were corrected in CREDITS. The card now cycles four
frames. All four were rendered at 390x844 and are whole, with no hand or label showing.

At r389: data-audit 0 problems (deck 578, hold 75), plant-sense --strict "No card contradicts itself", deck-audit
PASS, audit-layout "all cards clean", check-boot OK, fast set 9/9.
