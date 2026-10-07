# 2026-10-07 — two doubles: Crinodendron hookerianum and Viburnum × bodnantense 'Charles Lamont'

Oscar, just after midnight on 2026-10-07, one photo each, no JSON:

- "Double for the chilian lantern plant check i got the common name right latin begins with c"
- "Double for viburnum Charles lamiont"

"Double" is his word for a second photo of a dealt card. Under his 2026-10-01 rule that makes a
flash-between, never a replacement, so each went on with `tools/add-swap.js`. No card text changed.

| original (byte-identical) | card | camera, size, taken | frame | sha256 (first 16) |
|---|---|---|---|---|
| `crinodendron-hookerianum-lanterns.jpg` | Crinodendron hookerianum, Chile Lantern Tree | Galaxy S24, 3000x3298, 2026-09-26 17:01 | `photos/crinodendron-hookerianum-lanterns.jpg` | 8b0d4ac8f3df7ce3 |
| `viburnum-bodnantense-charles-lamont-autumn.jpg` | Viburnum × bodnantense 'Charles Lamont' | Galaxy S24, 3000x3026, 2026-09-26 12:39 | `photos/viburnum-bodnantense-charles-lamont-autumn.jpg` | f941c0ba56384432 |

A byte search for C2PA, JUMBF, content-credential and AI-generation markers found none in either file. Both
were staged as shot, with no crop.

## Chile lantern tree — the common name

"Chilean lantern plant, latin begins with C" is Crinodendron hookerianum, the deck's only lantern card. The
RHS plant page (rhs.org.uk/plants/4790) gives the common name as "Chile lantern tree", also "lantern tree".
The card already reads "Chile Lantern Tree", so nothing changed.

The new frame is three crimson lanterns, close up, with water droplets on the petals, hanging over the pot.
The card photo is his whole shrub hung with lanterns.

## Charles Lamont — the frame and the hand

The new frame is a pink flower cluster with buds over leaves turned red, orange and bronze. Suffix `autumn`;
the deck already holds a `-leaf` and a `-wide` spare for this card, neither in PHOTO_SWAP. The card photo is
his tighter crop of the flowering shoot (CARD-PROTOCOL v14.59).

A hand holding the shoot shows blurred at the left of the photo. On the card the window takes the middle 64%
of this near-square frame, so the hand falls behind the left leaves and mostly out of view. Like the
BIG & EASY PURPLE hand and the hand on the Campsis card photo, it is left as shot and raised with Oscar,
not cropped. The flower cluster sits high in the photo, behind the card's title. With a near-square frame
the full height is always shown, so no focus setting moves it.

## Checks

Both cards were rendered at 390x844 @2x, reached through `goToCard`, with each frame shot while the cycle was
frozen. Both frames are whole. Results: deck-audit PASS (550 cards), audit-layout "all cards clean", fast set
9/9, build r368.
