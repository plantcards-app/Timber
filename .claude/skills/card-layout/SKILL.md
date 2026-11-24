---
name: card-layout
description: Use before changing anything a person SEES on a Timber card face (timber.html card CSS, the front template, panel art, badges, flags, tiles, labels) or when Oscar says something "looks off", "slapped on", "not central", "too small", "doesn't fit". A measure-mock-look-check routine so layout changes line up with the painted card art and are checked across the whole deck before they ship.
---

# Card layout: a keener eye

The card is painted art (frame, rail rosettes, panel parchment, gold linework) with
live HTML laid over it. Almost every "looks slapped on" complaint is the same bug: a
live element positioned by guesswork instead of by the painted feature under it.
Oscar's eye catches it on a phone. This routine catches it first.

## The rules

1. **Look before you touch.** Render the area as it is now, zoomed, before
   proposing anything. Never describe a layout you have not rendered.
2. **Find the painted anchor.** Every live element sits ON, IN or ALIGNED WITH
   something painted: a rosette, a rail centre line, a panel edge, a frame opening.
   Render the area WITH the element hidden too (`visibility:hidden`) so you can
   see exactly what it covers. Measure that feature's centre and extent in card %.
3. **Centre on the feature, cover it whole.** A badge over an ornament either
   covers all of it or none of it. Half-covered ornament reads as a mistake (the
   2026-11-24 safety flag: spikes of the rosette showed round its edges).
4. **Belong to the family.** New panels reuse the card's own art and palette: the
   SOIL frame through `border-image` (only its 18px edge, so no baked text shows),
   the parchment swatch `art/parch-swatch.png`, ink `#173B24` / `#3a2d12`, frame
   gold `#d3b264`, Georgia for values, the Trebuchet caps of SOIL for headings.
   A new colour needs a reason.
5. **Align edges with neighbours.** Same left/width as the panel it stacks with,
   the same ~4px gap the panels keep, tops or bottoms on a line already on the card.
6. **Offer variants side by side.** Two or three options, one change apart, in
   one strip. Oscar picks; do not ask him to imagine.
7. **Nudge in small steps.** When he says "too far left", move about 1-2px
   (0.3-0.5% of card width), not a new design.
8. **Check every variant of the card, not one.** Warning tiers (caution / harmful /
   severe), cards with no data for the element, holo cards (`HOLO`, their own panel
   art), edition cards (`EDITION`, outlined panels), fullart cards, long text.
9. **Make the check permanent.** If a layout rule matters, it goes in
   `design/audit-layout.js` as a measured rule (see rule G, the pH tile) and any new
   positioned element goes in `data/template-anchors.json`. Then the whole deck is
   checked on every run, not the one card you looked at.
10. **Report what was measured, not what "looks fine".** Gaps in px, centres in %.
    If something was judged by eye from a crop, say so.

## Tools

`tools/card-mock.js` renders any card from `timber.html` on disk (no server), with
optional CSS injected, and saves zoomed crops. Nothing in the repo is touched.

```sh
# what is there, what is under it, and a proposal, side by side
node tools/card-mock.js --out "$SCRATCH/m" --card "Winter Sun" --crop "0,0,20,14" --scale 4 \
  --variant "now|||" \
  --variant "bare|||.toxflag{visibility:hidden!important}" \
  --variant "try|||.toxflag{left:4.15%!important;width:7.2%!important}" \
  --strip "$SCRATCH/m/strip.png"
```

- `--card` matches a substring of latin or common name.
- `--crop "x,y,w,h"` is in % of the card face. Useful crops: top-left flag
  `0,0,20,14` · right column pH + soil `55,48,45,52` · pH tile `76,54,24,14` ·
  band `10,85,90,15` · whole card `0,0,100,100`.
- Read the strip with the Read tool, then send it to Oscar with SendUserFile
  (`display: render`) and a one-line caption naming each panel.

Card geometry to hand: the card face is 420x600 template px (rendered ~374 css px
wide on a 390 phone). Rail centre line x ≈ 7.5%; rail rosette centre ≈ (7.5%, 6.2%);
plaque 60.02-85.3%; SOIL 66.55-86.05% at x 80.33% w 15.59%; pH tile 56.4-65.9%;
growth rail "Slow" label ends ≈ 53.6%; band from 88.33%.

## Before you call it done

```sh
node tools/template-geometry.js --check   # anchors still where they are locked
node tools/build-stamp.js --write         # the app changed, so restamp
node tests/run-all.js --jobs 3            # includes audit-layout over every card
```

Then send Oscar the before/after strip, say which numbers changed, and what you
checked (which tiers, holo, edition, no-data cards).
