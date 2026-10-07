# 2026-10-07e — flash frames for Ginkgo biloba and Parrotia persica 'Bella'

Oscar, the evening of 2026-10-07: "A flash between photo for ginkgo biloba", with one photo (Galaxy S24, taken
2026-10-07 13:05). A byte search for C2PA, JUMBF, content-credential and AI-edit markers found none.

The Maidenhair Tree card (Ginkgo biloba) was dealt with one photo and had no flash. This photo was added with
`tools/add-swap.js --as autumn`: fan-shaped leaves turning golden yellow among green ones, with water droplets.
The card photo is his earlier one, a single green leaf on a dark ground (credited 2026-08-09). No card text changed.

| file | camera, size, taken | sha256 (first 16) | |
|---|---|---|---|
| `ginkgo-biloba-autumn.jpg` | Galaxy S24, 3000x4000, 2026-10-07 13:05 | 8f50e132228bdcdf | flash frame |

The file is byte-identical to what he sent. Both frames were rendered at 390x844 @2x and are whole. At r380:
deck-audit PASS (577 cards), audit-layout "all cards clean", fast set 9/9.

## Parrotia persica 'Bella'

"Some flash between photos for patrotia persica Bella", four photos, all Galaxy S24, taken 2026-10-07 between
13:12:06 and 13:12:33. A byte search found no C2PA, JUMBF, content-credential or AI-edit markers. None is a copy of
the card photo. The Persian ironwood 'Bella' card had one photo and no flash. The four went on with
`tools/add-swap.js` in the order sent, so the card now cycles five frames (`buildSwapCSS` builds the cycle for
any frame count, and one card already ran four).

| file | frame | camera, size, taken | sha256 (first 16) |
|---|---|---|---|
| `parrotia-persica-bella-droplets.jpg` | 2: a curling red-and-purple leaf beaded with water droplets | Galaxy S24, 3000x4000, 13:12:26 | a7321b390c7ddf5b |
| `parrotia-persica-bella-leaf-tip.jpg` | 3: a leaf tip with a water drop hanging from it | Galaxy S24, 3000x4000, 13:12:28 | d87c2c07e9ff9069 |
| `parrotia-persica-bella-backlit.jpg` | 4: leaves lit from behind, red and orange from green, against a pale sky | Galaxy S24, his crop 2432x4000, 13:12:33 | 3c9ae178ab0cb3d6 |
| `parrotia-persica-bella-crimson.jpg` | 5: wet glossy crimson, wine-purple and green leaves | Galaxy S24, 3000x4000, 13:12:06 | a01137f6f23d817c |

The backlit frame is his phone crop, narrower than 3:4 (0.61). That is about the card window's own shape, so
it fills the window with almost no cropping. add-swap's credit template calls every added frame the "Second
frame", so frames 3–5 were corrected to third, fourth and fifth in `photos/CREDITS.json`. No card text changed.
Every file here is byte-identical to what he sent. All five frames were rendered at 390x844 @2x with the cycle
frozen, and all are whole. At r381: deck-audit PASS (577 cards), audit-layout "all cards clean", check-boot OK
(PHOTO_SWAP 32), fast set 9/9.
