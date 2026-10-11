# 2026-10-11 — Vitex 'Flip Side': a second photo, so the card flashes

Oscar, 2026-10-11: "here's a flash between for vitex flipside", then with the photo: "This was the vitex it shows
it in such a different vibe both photos will make a great card." One photo, no JSON. The card
(Chaste tree 'Flip Side', `Vitex × 'Bailtexone'`) has been dealt since 2026-08-21 with his leaf shot, so this is
the standing second-photo protocol of NEW-SESSION.md: `tools/add-swap.js`, never replace, never ask.

- `vitex-bailtexone-sunlit.jpg` is his photo byte-identical (sha256 04a28c6c…, 3,560,473 bytes): Galaxy S24,
  4000x3000, EXIF orientation 6, taken 2026-10-10 17:15:15. No C2PA, JUMBF, SynthID or AI-edit markers found
  (the same strings `tools/reframe-photo.js` refuses on).

## What the frame shows, against the card photo

Low evening sun on the bench, the plant lit from behind: olive-green leaf tops, the **purple undersides and
pink-flushed petioles the Flip Side name is for**, and the first flower spike at the tip, in bud, not open.
Paving behind, a second plant to the right. The card photo (2026-08-21, CREDITS) is the same broad-leaflet
foliage in flat light with rain on it and no bloom, so the two frames tell different halves of the card's
own visual line ("deep lavender-blue flower panicles · olive-green leaves with purple undersides").

Identity: his word is the assignment. [Inference] the photo agrees with it: broad leaflets with purple reverses
are the *V. trifolia* 'Purpurea' parent showing, where 'Delta Blues' (dealt the same August day, told apart by
the leaves, VERIFY-QUEUE 58) carries narrow grey-green leaflets with no purple.

The bud spike on 10 October is **not** evidence of flowering time (Oscar, 2026-10-02: nursery stock on a bench
says nothing about when it flowers in a garden). Peak stays Jul-Sep.

## Done

```sh
NODE_PATH=/opt/node22/lib/node_modules node tools/add-swap.js "Vitex × 'Bailtexone'" \
  data/held-photos/2026-10-11/vitex-bailtexone-sunlit.jpg --as sunlit --note "…"
```

- `photos/vitex-bailtexone-sunlit.jpg` staged 1200x1600 through the canvas pipeline, rotation baked in, no crop;
  `photos/card/vitex-bailtexone-sunlit.webp` 1000x1333 built by optimise-photos.
- `PHOTO_SWAP['vitex-bailtexone']` added: alt the sunlit frame, focus `50% 45%`, hold `3.5s`.
- CREDITS entry written by the tool; its trailing double full stop (the note already ended in one) tidied by hand.
- Restamped r403 → r404. Deck unchanged at 609, hold 74.
- Container note, not a repo change: `sharp` was absent from `/opt/node22/lib/node_modules` in this session's
  container and was installed with `npm install -g sharp` (0.35.5) before the derivative could be built.

## Rendered and looked at

The card was brought to the top of the live deck at 390x844 (`deck.appendChild` + the app's own `markHot()`),
both frames confirmed loaded (`naturalWidth > 0`), then screenshotted thirteen times over 14.5 s. The alt's
computed opacity read 0 for the first 3.5 s, 1 for the next 3.5 s, 0 again, 1 again: the cut cycles as the
other 43 swap cards do. No page errors. Both frames render whole: the bud spike sits just under the LISTEN
button, the stats plaque covers the lower leaves, the purple undersides fill the band between.

## Doubt for Oscar, not blocking

- **A blurred shop sign** (reddish, unreadable) sits in the master's top-left corner, x 0–16%, y 0–13%. On the
  card it lands under the title head and reads as a faint red blur beside "Chaste tree"; the detail sheet shows
  only the card's own photo, never the alt. It is not a plant label, price ticket or pot tag, so the master was
  left whole on PHOTO-REFRAME-BRIEF's "masters stay generous" rule. [Unverified] whether he wants it gone: a 16%
  crop off the left would remove it entirely (with ~12% off the top and ~4% off the bottom to keep the 0.75
  aspect the brief requires), one `reframe-photo.js` run on the stored original.

## Gate

Fast set 9/9 after the restamp. Full gate on this head (`node tests/run-all.js --jobs 3`): **18/18**, 713 s of
work across 3 jobs, slowest suite edge-test at 315 s; perf-test passed under load this time (22.6 s), where the
2026-10-10d run had needed it alone. `design/baseline-cards.png`, which `design/verify-cards.js` rewrites as a
side effect of every run, was reverted: it is not part of this change and no batch commit carries it.
