# 2026-10-06d — two flash-between frames: The Lark Ascending rose and Campsis 'Tropical Summer'

Oscar, evening of 2026-10-06, one photo each with one line of text, no JSON:

- "Flash between photo for Rosa the acending"
- "Flash between photo for CAMPSIS gran. 'TROPCCA SUMMER autumn colour"

Both cards are dealt and each had one photo, so each got a second frame with `tools/add-swap.js`. That
follows the 2026-10-01 rule: a second photo is a flash-between, never a replacement. The originals are here
byte-identical. The masters went through the canvas pipeline at 1200 px wide, the card derivatives were built,
and the CREDITS entries were written. No card text changed.

| original (byte-identical) | card | camera, size, taken | frame | sha256 (first 16) |
|---|---|---|---|---|
| `rosa-ausursula-bloom.jpg` | Rosa 'Ausursula', English rose The Lark Ascending | Galaxy S24, 3000x3854, 2026-10-06 14:00 | `photos/rosa-ausursula-bloom.jpg` | 5b1c459222d3f703 |
| `campsis-grandiflora-autumn.jpg` | Campsis grandiflora, Tropical Summer Trumpet Creeper | Galaxy S24, 2510x2814, 2026-10-06 17:11 | `photos/campsis-grandiflora-autumn.jpg` | 1d379de3e59c2748 |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in either file.
Both have orientation 1 and were staged as shot, with no crop.

## Which cards

- **"Rosa the acending"** is the deck's Rosa 'Ausursula' (The Lark Ascending), the only card with "Ascending"
  in its name. [Inference] That is the card he means. The new frame is one open bloom, close up:
  apricot-pink outer petals over a butter-yellow centre and golden stamens, in sun. The card's own photo is his
  collage of bud, open flower and foliage, with the same semi-double apricot form. [Unverified] from the photo
  alone that it is the same plant or cultivar.
- **"CAMPSIS gran. 'TROPCCA SUMMER"** is Campsis grandiflora 'Tropical Summer', the deck's only Campsis. The
  new frame shows the same serrated pinnate leaflets as the card photo, turned orange-red. The card's foliage
  line reads "Deciduous; mid to dark green leaves divided into 7-9 leaflets" and says nothing about autumn
  colour. It stays as written, because prose on a dealt card stays. [Unverified] whether orange-red autumn
  colour is typical of the cultivar. The photo shows it on this plant.

## Checks

Both cards were rendered at 390x844 @2x, reached through `goToCard`, with each frame shot while the cycle was
frozen. Both new frames sit whole in the photo window. A first capture caught the `.pblack` fade between
frames mid-blink and read as a dim photo; it was reshot with the fade held off. Results: deck-audit PASS
(549 cards), audit-layout "all cards clean", fast set 9/9, build r362.
