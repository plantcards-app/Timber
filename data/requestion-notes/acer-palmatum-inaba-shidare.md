# Acer palmatum 'Inaba-shidare' — the JSON tail never arrived

**Card now (deck 611, r407, batch 2026-10-11b):** front complete (H6, 1.5–2.5 m, Apr–Nov, ratings, aspect, soil,
water, prune). Back blank: toxicity, cvs, uses, foliage, stockForm, pollination, clay. `resilience` holds your pest
line ("Pests: aphids, Acer gall mites, caterpillars and scale insects. Potential diseases include Verticillium wilt
and honey fungus.") because the card's `pest` field is an icon key.

**Why:** your message broke off at `"tox`. Nothing was filled in.

**Ask:** paste the rest of the same JSON from `"toxicity"` to `"sources"`, or run PLANT-BRIEF.md again for
Acer palmatum 'Inaba-shidare' and send only those fields.

**Then:** `compare-double … --apply toxicity,cvs,uses,foliage,stockForm,pollination,clay` takes every blank; if the
new JSON carries a `resilience`, say whether the pest line stays in it.
