# Second-pass brief 0 — 7 plants

You are fact-checking UK garden-centre plant cards. Use WebSearch (load it with ToolSearch "select:WebSearch,WebFetch" first).
rhs.org.uk pages are blocked by the proxy: search-result snippets of RHS pages are acceptable evidence; say when you relied on
one. Do NOT edit any file except the one named below. Never invent: a value you cannot find is "" with source "not found".

For EACH plant find: (1) the RHS hardiness band H1a–H7 (give the RHS plant id), else the best other source and say so;
(2) RHS ultimate height and spread, written as the deck writes them ("1–1.5 m", "30–50 cm", ">12 m", "8 m+");
(3) flowering or peak-interest months as Mon-Mon (e.g. "Jun-Aug"); (4) toxicity: the RHS flags (harmful if eaten / skin
irritant / toxic to pets) and the ASPCA listing, or "no listing found"; (5) the accepted name, whether the cultivar exists,
and the TRADE ('code') form if it is a PBR plant; (6) any UK compliance point (Xylella host, Schedule 9, plant passport).

1. Viola 'Columbine' (Viola 'Columbine') [batch:batch-new.json] — claimed: hardiness H5; height 15–20 cm; spread 20–30 cm; peak Apr-Sep; foliage semi-evergreen; toxicity "No known hazard." (prints clear); compliance "none"
2. × Heucherella 'Hopscotch Any' (Foamy Bells) [batch:batch-new.json] — claimed: hardiness H6; height blank; spread blank; peak blank; foliage semi-evergreen; toxicity "No known hazard." (prints clear); compliance "none"
3. × Heucherella 'Kimono' (Foamy Bells Kimono) [batch:batch-new.json] — claimed: hardiness H6; height 30–40 cm; spread 40–50 cm; peak Apr-Oct; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"
4. Heuchera 'Lime Marmalade' (Coral Bells) [batch:batch-new.json] — claimed: hardiness H6; height 30–45 cm; spread 40–45 cm; peak Mar-Nov; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"
5. Heuchera 'Caramel' (Coral Bells) [batch:batch-new.json] — claimed: hardiness H6; height 30-45 cm; spread 45 cm; peak Apr-Oct; foliage semi-evergreen; toxicity "No known hazard." (prints clear); compliance "none"
6. Lewisia 'Little Plum' (Lewisia) [batch:batch-new.json] — claimed: hardiness H4; height 15 cm; spread 20 cm; peak Apr-Jun; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"
7. Heuchera 'Wild Any' (Coral Bells) [batch:batch-new.json] — claimed: hardiness H5; height blank; spread blank; peak blank; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"

Write your verdicts as JSON to: data/second-pass/2026-10-24b/verdicts-0.json
Schema (one object per plant, every field present, "" where not found, every value with its source):
[
  {
    "latin": "<exactly as given>",
    "hardiness": { "value": "H5", "source": "RHS 12345" },
    "height":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "spread":    { "value": "1–1.5 m", "source": "RHS 12345" },
    "peak":      { "value": "Jun-Aug", "source": "RHS 12345" },
    "toxicity":  { "rhs": "harmful if eaten; skin irritant", "aspca": "toxic to dogs, cats", "source": "..." },
    "name":      { "accepted": "Genus species 'Cultivar'", "trade": "Genus species TRADE ('code')", "exists": true, "source": "..." },
    "compliance": { "value": "...", "source": "..." },
    "notes": ["anything else the session should know, one line each"]
  }
]
Then reply with a five-line summary: how many agreed, which disagreed and on what.
