# 2026-10-10 — eight-entry GPT JSON, stored and fitted; all wait for photos

Oscar, 2026-10-10: "More jsons", with no photos. The message held three JSON values back to back:
- an array of six entries: Ilex crenata 'Golden Rock', Leea guineensis 'Burgundy', Heuchera FOREVER RED, Phlox
  paniculata 'Mardi Gras', Symphyotrichum dumosum 'Indigo', and Helleborus Ice N' Roses Ivory Blush
- one object: Photinia × fraseri 'Red Ballcoon'
- one object that is **cut off**: Pieris japonica 'Prelude'

Files:
- `batch-as-sent.txt` is the message text verbatim, up to where it breaks off inside the Pieris `uncertain`
  list at `"Sun`. The concatenation is not valid JSON, so it is kept as text.
- `batch-parsed.json` holds the eight entries as parsed. The Pieris is closed after its last complete
  `uncertain` line and carries a `_truncated` note. Its other `uncertain` lines and all its `sources` never
  arrived, and nothing was filled in for them. Every card field of the Pieris did arrive.
- `batch-corrected.json` is the fitted copy, made by scratch `fit.js`.

compare-double found all eight are new. Each "PROBABLE" match was one shared word: "burgundy" (an Ajuga),
"forever" (Heuchera FOREVER PURPLE, a different cultivar), "indigo" (an Indigofera) and "ivory" (a Weigela).

Fitting changes:
- **Names:** the trade designations take the deck's form. Heuchera 'TNHEUFR' (FOREVER RED) becomes
  `Heuchera FOREVER RED ('Tnheufr')`, as with FOREVER PURPLE ('Tnheufp'). Helleborus × glandorfensis 'HG 1416'
  (HGC ICE N' ROSES IVORY BLUSH) becomes `Helleborus × glandorfensis ICE N’ ROSES IVORY BLUSH ('HG 1416')`. It
  uses a curly apostrophe like the deck's Ice N’ Roses Early Rose, because the straight one fails the quote
  check. The HGC series name stays in cvs.
- **Sizes** take the "a–b cm" / "a–b m" form.
- **Soil, within 26:** Phlox "Fertile, moisture-retentive" (27) becomes "Fertile, moisture-holding". Pieris
  "Acidic, moist, well-drained" (27) becomes "Acidic, well-drained"; dropping "moist" also clears the
  checker's water/soil overlap warning.
- **Prose over the deck budgets** (water 120, resilience 165). A cut at a sentence boundary is the default:
  - Phlox loses the mulch tip and "Good airflow improves foliage health".
  - Pieris loses "Avoid waterlogging, especially in containers" and "Avoid alkaline soil and prolonged
    drought", which its soil warning already says.

  Where a cut would have dropped real advice for a few characters, the wording was shortened instead:
  - Golden Rock resilience (173): "Can suffer in dry, hot conditions or unsuitable alkaline soils" becomes "…in
    hot, dry conditions or alkaline soils", which keeps the pest sentence.
  - Leea water (148): "Keep compost lightly moist in growth, letting the surface dry slightly between
    waterings. Reduce watering in winter." This keeps the winter advice.
  - Leea resilience (166): "excessively damp" becomes "very damp".
  - FOREVER RED water (121): "require additional watering" becomes "need extra water", which keeps the
    dry-spell advice.
  - FOREVER RED resilience (167): "tolerates moderate sun" becomes "takes moderate sun", which keeps the pests.
  - Ivory Blush water (134): the second sentence becomes "Keep pots lightly moist, never standing in water."
  - Ivory Blush resilience (176): "winter-flowering" is dropped from the first sentence (the peak months show
    it), which keeps the slugs and drainage sentence.

check-plant-json passes all eight with 0 errors. It warns on some low ratings: growthSpeed 5 on Golden Rock
and Pieris, and growthSpeed 3 and careLevel 5 on 'Red Ballcoon'. These are slow and dwarf shrubs, where low
scores on the 0–20 scale fit, so they stand.

None is dealt. Each waits for a photo.
