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

## Fact check (2026-10-10)

Two research agents checked all eight entries, using search snippets because the proxy blocks most fetches.
No field is shown wrong, so nothing changed. These are doubtful and left as sent:
- **Golden Rock holly:** RHS describes "glossy dark green to golden yellow" leaves, gold on the outer growth,
  rather than "gold-splashed". RHS lists any pH for the cultivar, against "Acidic / Avoid lime"; the species
  prefers acid soil.
- **Leea 'Burgundy':** no reliable source supports "Leaves and berries are toxic". ASPCA has no Leea entry, and a
  genus review reports low toxicity. As written, the card prints the Harmful rung. 1 m × 65 cm looks like a
  sale size, since indoor plants reach about 1.5 m. H1a against H1b is not settled.
- **FOREVER RED:** RHS confirms H5, white flowers, all-year red and vine weevil/rust. The US patent is PP29,644
  ('TNHEUFR', Terra Nova). Nothing indexed links EU PVR 51881 to it. No FOREVER 'Sweet' was found; Terra Nova
  has FOREVER 'Midnight'. Its spread of 40–50 cm is on the high side, with about 35 cm quoted.
- **Phlox 'Mardi Gras':** every field checks out. RHS gives dark green leaves and fragrant iridescent purple
  flowers, H7, 0.5–1 m.
- **Aster 'Indigo':** the spread of 40–50 cm compares with 20–30 cm from a German retailer. The cultivar is
  carried only by German retailers.
- **Ivory Blush:** × glandorfensis and the breeder's white flowers, dark stems, November start and 50–60 cm
  are confirmed. 'HG 1416' is a real Heuger patent (PP36158) for a white-to-greenish-white hellebore, but no
  source ties that code to Ivory Blush. The 80 cm spread is a planting distance. 'White Ivory' and
  'Red Romance' are retailer labels; the RHS names are 'White' and 'Red'.
- **Photinia 'Red Ballcoon':** sellers spell it 'Ballcoon', 'Balcoon' and 'Ballcon', and there is no RHS or
  registry entry, so the label decides. Berries on a 50 cm dwarf are unconfirmed. The autumn colour comes
  from one retailer.
- **Pieris 'Prelude':** RHS 92004 confirms every card field (H5, AGM, 0.5–1 m, creamy-white late-spring
  flowers, pink young leaves, east or west facing, acid soil). Only the truncated `uncertain` and `sources`
  are incomplete.

## Photos (2026-10-10) — all eight dealt

Fifteen photos came with no text. All were taken on a Galaxy S24 on 2026-10-09 between 13:04 and 15:48. None has
C2PA or AI-edit markers, and every file here is byte-identical to what he sent. They were matched to the eight
fitted entries by eye ([Inference]), and the Heuchera match is confirmed by the label in photo 9, which reads
"Heuchera 'Forever Red'". The first photo sent for each plant is its card photo; the rest are flash frames, in
the order sent.

| sent | file | card / frame |
|---|---|---|
| 1 | `helleborus-…-hg-1416.jpg` | Ice N’ Roses Ivory Blush, card (cropped) |
| 2 | `helleborus-…-hg-1416-green.jpg` | flash `green`: an aged flower gone green, pink rim (landscape, EXIF rot 3) |
| 3 | `symphyotrichum-dumosum-indigo.jpg` | Aster 'Indigo', card |
| 4 | `pieris-japonica-prelude.jpg` | Pieris 'Prelude', card: autumn flower-bud panicles, toothed leaves |
| 5 | `phlox-paniculata-mardi-gras.jpg` | Phlox 'Mardi Gras', card |
| 6 | `phlox-paniculata-mardi-gras-buds.jpg` | flash `buds` (cropped) |
| 7 | `heuchera-forever-red-tnheufr.jpg` | FOREVER RED, card (cropped) |
| 8 | `heuchera-forever-red-tnheufr-crown.jpg` | flash `crown` |
| 9 | `heuchera-forever-red-tnheufr-leaves.jpg` | flash `leaves` (cropped) |
| 10 | `ilex-crenata-golden-rock.jpg` | Golden Rock holly, card |
| 11 | `photinia-fraseri-red-ballcoon.jpg` | Photinia 'Red Ballcoon', card (cropped) |
| 12–14 | `…-shoots`, `…-stems`, `…-tip` | flash frames 2–4 |
| 15 | `leea-guineensis-burgundy.jpg` | Leea 'Burgundy', card |

**No labels on customer cards (v14.34).** Five photos had something to remove. Each was cropped with
`tools/reframe-photo.js` to the `*-crop.json` beside it, using original pixels only, and every crop is
between 0.75 and 1.0:
- the hellebore (bottom 500 px, a blank label stake)
- the first Heuchera (top 580 px, a "£3…" price sticker)
- the third Heuchera (left 320 px, the "Gardeners Choice … Forever Red" label)
- the second Phlox (both edges, two nursery labels)
- the first Photinia (bottom 300 px, unidentified white/red objects)

The blue shapes in the background of the Photinia photos are out-of-focus blobs with nothing readable, so they
were left. The three cropped card photos carry a note in CREDITS. add-swap's "Second frame" wording was
corrected to Third/Fourth on the extra frames.

[Unverified], carried as written under the label rule:
- **Hellebore:** the flowers shown are pink-red flushed over green, and one has aged to green. The card text says
  "soft ivory-white", and the breeder describes white petals. Hellebore sepals do colour as they age, but these
  photos alone don't confirm the cultivar.
- **Photinia:** the plant shown is upright with long red stems, while the card describes a "tiny rounded" 50 cm
  dwarf.
- **Aster:** the disc florets in the photo are magenta-red, while the card text says "yellow centres". Aster
  discs often redden with age.

Deck 580 -> 588 at r393. data-audit 0 problems (deck 588, hold 74), plant-sense --strict "No card contradicts
itself", deck-audit PASS, audit-layout "all cards clean", check-boot OK, fast set 9/9. The eight dealt cards
match `batch-corrected.json` field for field. Every card and frame was rendered at 390x844 and is whole, with no
label showing.
