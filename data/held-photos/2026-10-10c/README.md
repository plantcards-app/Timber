# 2026-10-10c — "New builds": eleven-entry GPT JSON, fitted; nine dealt from his eleven photos; the Ceanothus pair waits on his word

Oscar, 2026-10-10: "New builds", with one JSON array of eleven entries in the PLANT-BRIEF shape and no photos. Then,
in a second message, eleven photos with: "Not all of these photos may have JSONs, in the order they are uploaded we
have a Choisya, an Echium, a Ceanothus, a Hydrangea, an Azalea, a Hellebore, a grass, a Lonicera, a Nandina lime, a
grass and one more Hellebore; may or may not have that last Hellebore in the JSONs, the first Hellebore defo is."

Files:
- `batch-as-sent.json` is his JSON as received (one valid array, eleven entries).
- `batch-corrected.json` is the fitted copy, made by a scratch `fit-2026-10-10c.js` that asserts the 26/44 soil
  budgets and the prose budgets (visual 190, water 120, prune 165, resilience 165, uses 150).
- the ten `*.jpg` are his photographs, byte-identical to what he sent, named by the card's slug. The eleventh photo is
  not stored again (see below).
- `hydrangea-paniculata-little-lime-punch-smnhph-crop.json` is the one crop, applied with `tools/reframe-photo.js`.

The eleven entries: Echium candicans; Ceanothus 'Victoria'; Ceanothus impressus; Choisya × dewitteana WHITE DAZZLER
('Londaz'); Hydrangea paniculata LITTLE LIME PUNCH ('SMNHPH'); Rhododendron 'Silver Sword'; Carex brunnea 'Jenneke';
Helleborus × sternii 'Silver Star'; Lomandra longifolia MINER’S GOLD ('KM-MG24'); Nandina domestica MAGICAL LEMON AND
LIME ('Lemlim'); Lonicera × heckrottii 'Gold Flame'.

compare-double: all eleven are new. The PROBABLE hits were one shared word each: "greater" (Vinca major 'Variegata'),
"miner" (Euphorbia MINER’S MERLOT) and "magical" (Salvia Magical Mississippi), all different plants.

## Fitting changes (as-sent -> corrected)

- **Names** take the deck's CAPS trade-name form: `[White Dazzler]` -> `WHITE DAZZLER ('Londaz')`, `[Little Lime
  Punch]` -> `LITTLE LIME PUNCH ('SMNHPH')`, `[Miner's Gold]` -> `MINER’S GOLD ('KM-MG24')` (curly apostrophe, as with
  Baggesen’s Gold and Anna’s Red, because a straight one fails the quote check), `[Magical Lemon and Lime]` ->
  `MAGICAL LEMON AND LIME ('Lemlim')`. Commons and cvs stay as sent.
- **Sizes** take the "a–b m" / "a–b cm" form.
- **Aspect** becomes the compass facing the research states: South / West for the Echium and both Ceanothus; East /
  South / West for the Choisya, Carex, Lomandra, Nandina and Lonicera; North / East / West for the azalea; "Any
  aspect" for the hydrangea (all four facings) and the hellebore (east, west, south or sheltered north).
- **Soil and warning, within 26 / 44.** Every incoming soil line was 56–92 characters and every warning 47–88, so all
  eleven were hand-written short. Soil keeps type and drainage; the warning keeps the constraint:
  - Echium: "Poor, sharply drained" / "Winter wet and frost kill it; no heavy soil". The neutral-to-alkaline pH did
    not fit; it is in the as-sent file.
  - Ceanothus 'Victoria': "Fertile, drained, any pH" / "No waterlogging, wet clay or frost pockets".
  - Ceanothus impressus: "Sand or loam, well-drained" / "Poor drainage brings root problems".
  - Choisya: "Any well-drained soil" / "Avoid cold waterlogged ground and exposure" ("ground" rather than "soil"
    clears the checker's soil-word overlap).
  - Hydrangea: "Fertile, moisture-holding" / "No drought in sun; deep shade cuts flowers".
  - Azalea: "Acidic, humus-rich, moist" / "No chalk or lime; no drought or waterlogging".
  - Carex: "Moist fertile loam or clay" / "Avoid drought and scorching afternoon sun".
  - Hellebore: "Fertile, drained, lime OK" / "No winter wet, root disturbance or acid soil".
  - Lomandra: "Well-drained loam or sand" / "Avoid waterlogging and heavy, wet clay".
  - Nandina: "Fertile, moist, drained" / "Avoid winter wet and drought in containers".
  - Lonicera: "Fertile, moisture-holding" / "Avoid dry roots; stress brings aphids".
- **Prose** is all inside the deck budgets; nothing was cut.
- **Safety sentences that print the wrong rung.** "No major toxicity warning identified." contains "toxic", so the card
  prints the orange Toxic rung for a plant he says has no warning. It becomes "No known hazard." (the deck's clear
  rung) on both Ceanothus, the Carex and the Lomandra. The Choisya's "No major toxicity warning identified; aromatic
  foliage may irritate sensitive skin." becomes "Aromatic foliage may irritate sensitive skin; no other hazard known."
  (Handle with care). The other six print the rung he means: Toxic for the hydrangea, azalea, hellebore, Nandina and
  the honeysuckle berries ("not edible"); Handle with care for the Echium's hairs.
- **`pest` is an icon key, not prose** (registry: `slugs`). The Echium and the hellebore name slugs and take the key;
  the rest are blank. So the pest prose is not lost, it moves into `resilience` as a last sentence, "Pests: …", verbatim
  from his JSON (all within 165). That is the one change here that adds text to a card field; say the word and it comes
  out.
- **`pollination`** must name a class (needs partner / self-fertile / not applicable) or the checker refuses the card.
  None of these is sold on fruit set, so each takes "not applicable; " in front of his prose, unchanged.
- **`clay`** was "with care" on five entries (Echium, 'Victoria', Choisya, azalea, hellebore). The checker allows only
  yes / no / blank, so those are blank on the card; the as-sent file keeps "with care".
- `hue` 0 on the white Choisya is kept (the deck's white Scabiosa and Hot Lips carry 0).

check-plant-json passes all eleven with 0 errors. It warns on the low ratings (pestRisk 3–5 on seven, thirst 4–5 on the
Echium and Ceanothus, careLevel 3–4 on four): trouble-free, drought-tolerant or plant-and-forget plants, where the low
end of the 0–20 scale is the meaning, so they stand.

## Photos — nine dealt, one waits on a question, one is a resend

All eleven are Galaxy S24 frames, 4000x3000 with EXIF rotation 6 (the eleventh rotation 3). None carries C2PA or
AI-edit markers. Photos 1–10 were taken on 2026-10-10 between 11:26 and 17:14 and were sent newest first; the
eleventh is from 2026-10-09. They were matched to the entries by his order list and by eye ([Inference] throughout;
no label is readable in any frame):

| sent | taken | file | card |
|---|---|---|---|
| 1 | 17:14:55 | `choisya-dewitteana-white-dazzler-londaz.jpg` | WHITE DAZZLER, card: slender leaflets, buds at the tips |
| 2 | 17:14:21 | `echium-candicans.jpg` | Pride of Madeira, card: grey-hairy rosette |
| 3 | 16:35:30 | `ceanothus-victoria-or-impressus.jpg` | **not dealt** — one Ceanothus photo, two Ceanothus JSONs |
| 4 | 16:28:11 | `hydrangea-paniculata-little-lime-punch-smnhph.jpg` | LITTLE LIME PUNCH, card (cropped) |
| 5 | 15:30:07 | `rhododendron-silver-sword.jpg` | 'Silver Sword', card: cream-edged leaves, pink new growth |
| 6 | 15:24:59 | `helleborus-sternii-silver-star.jpg` | 'Silver Star', card: silver marbled toothed leaves, red stems |
| 7 | 14:37:31 | `carex-brunnea-jenneke.jpg` | 'Jenneke', card: fine yellow leaves edged green |
| 8 | 11:58:51 | `lonicera-heckrottii-gold-flame.jpg` | 'Gold Flame', card: pink buds, orange-yellow throats |
| 9 | 11:27:13 | `nandina-domestica-magical-lemon-and-lime-lemlim.jpg` | MAGICAL LEMON AND LIME, card |
| 10 | 11:26:26 | `lomandra-longifolia-miner-s-gold-km-mg24.jpg` | MINER’S GOLD, card: plain lime-yellow strap leaves |
| 11 | 2026-10-09 15:48:40 | not stored | byte-identical (sha256 05b4ca6b…) to `../2026-10-10/helleborus-glandorfensis-ice-n-roses-ivory-blush-hg-1416-green.jpg`, the Ivory Blush "green" flash frame dealt this morning; nothing to do |

The two grasses were told apart by his JSON: photo 7 has yellow leaves with green margins ('Jenneke'), photo 10 plain
lime-yellow strap leaves (MINER’S GOLD). [Inference] from the photos; the labels were not in frame.

**The Ceanothus.** He sent one Ceanothus photo and two Ceanothus JSONs ('Victoria' and the species impressus), so it
is not dealt: a photo on the wrong card is worse than no photo. The frame shows small glossy leaves with deeply
impressed veins and a crinkled surface. [Inference] that reads more like the species (tiny, puckered, sunken-veined
leaves) than 'Victoria' (larger, flatter, glossy ovals), but the two are close relatives and nothing in the frame
settles it. Both JSONs are fitted and ready in `batch-corrected.json`; whichever he names is dealt with
`add-plants-bulk.js --quick` from this folder's photo, and the other waits for its own photo.

**No labels on customer cards (v14.34).** The hydrangea frame held a white pictorial plant label (a pink hydrangea
photograph; no text legible even at full resolution) at the bottom left, and a window frame. It was cropped with
`tools/reframe-photo.js` to the `*-crop.json` beside it: the bottom 31% and the left 10% go, aspect 0.978, original
pixels only, the lowest florets of the panicle tip trimmed. The hellebore frame has an out-of-focus blue-purple shape
behind the leaves at the left, nothing readable, left as the Photinia blobs were. Nothing else needed removing.

Deck 600 -> 609 at r402. data-audit 0 problems (deck 609, hold 74), plant-sense --strict "No card contradicts
itself", deck-audit PASS, audit-layout "all cards clean", check-boot OK, photo-credits OK (the nine new entries, the
hydrangea's with the crop note), fast set 9/9. The nine dealt cards match `batch-corrected.json` field for field.
Every dealt card was rendered at 390x844 and is whole, with no label showing.

## Fact check (2026-10-10)

Two research agents checked all eleven entries. The proxy blocked every direct page read (rhs.org.uk and the
nurseries alike), so everything below rests on search-result snippets of the named pages, not the pages themselves:
[Unverified] by direct read, every line. By the batch rule nothing was changed; the sourced fixes below are his call.

Confirmed in the snippets, nothing to do: Echium (RHS 6290, H1c, 1.5–2.5 m, fastuosum misapplied; RHS also lists
white and pale-blue forms); both Ceanothus (RHS 140503 'Victoria' with impressus 'Victoria' as its synonym, RHS 3263
impressus; H4, the sizes, the facings; June in 'Victoria' peak is a Hayloft figure, RHS says mid-to-late spring);
Choisya 'Londaz' (H4, 0.5–1 m, spring flowers "often in late summer and autumn"); Carex 'Jenneke' (RHS 194498,
yellow leaves edged green, H4, 40 x 30 cm, evergreen to semi-evergreen); Lonicera 'Gold Flame' (RHS 74914 'Gold Flame'
hort., AGM, H5, 4–8 m x 2.5–4 m, Jun–Aug, deciduous or semi-evergreen); Nandina 'Lemlim' (RHS 349320 and 360977,
H4, 0.5–1 m, harmful if eaten).

Doubtful, left as sent:
- **Rhododendron 'Silver Sword':** the snippets show an RHS record (182823, "(EA/v)") rating it **H5**, so his
  `uncertain` note that RHS has no cultivar assessment looks wrong in his favour. The same snippets give **0.5–1 m
  height and 0.5–1 m spread** against the card's 0.6–1.2 m x 0.9–1.5 m, and **"bright red"** flowers against "bright
  rose-pink to reddish-pink". Proposed fix, on his yes: size 0.5–1 m x 0.5–1 m, visual "bright red to reddish-pink",
  RHS 182823 added to sources.
- **LITTLE LIME PUNCH:** 'SMNHPH' is confirmed (US patent PP33,207) and LITTLE LIME = 'Jane' (RHS 336749). But the
  RHS record 535579 in his sources could not be found by any search; H6 is Roots Plants' rating, not the RHS's
  (RHS rates the related 'Jane' H5); Proven Winners say the blooms age "white … rich red" where the card says
  "cream … rich reddish-pink". His own `uncertain` note says the input may have been plain Little Lime; the photo
  (pink-aged panicle, label unreadable) fits either, and the card carries the JSON's name under the label rule.
- **Choisya:** the AGM record is RHS 261101, which his sources omit; no source was found for "aromatic foliage may
  irritate sensitive skin".
- **Helleborus 'Silver Star':** RHS 89850 is the × sternii hybrid record, not a 'Silver Star' record; no RHS record and
  no raiser was found for the cultivar, and morelflowers.com (his source) is not indexed, so "breeder information" in
  his `uncertain` note is unsupported. Hybrid-level H4, "to 35 cm" and creamy-green pink-flushed flowers are confirmed;
  the 50 cm upper size and Jan start are retailer figures.
- **Lomandra MINER’S GOLD:** H6 is genuinely the RHS rating (537847; 'KM-MG24' confirmed by US patent PP33984), but
  the breeder's agent Plantipp says hardy to −10 °C and Hayloft's product page says H4. Foliage is "bright golden
  yellow" (RHS), chartreuse in part shade, which is how photo 10 reads.
- **Nandina:** RHS says "evergreen or semi-evergreen"; "poultry" in the safety line is not RHS wording (NC State says
  birds). **Echium:** the May–Jul band is not RHS-sourced at month level (RHS: spring and summer).
