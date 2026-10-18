# Second-pass brief 0 — 9 plants

You are fact-checking UK garden-centre plant cards. Use WebSearch (load it with ToolSearch "select:WebSearch,WebFetch" first).
rhs.org.uk pages are blocked by the proxy: search-result snippets of RHS pages are acceptable evidence; say when you relied on
one. Do NOT edit any file except the one named below. Never invent: a value you cannot find is "" with source "not found".

For EACH plant find: (1) the RHS hardiness band H1a–H7 (give the RHS plant id), else the best other source and say so;
(2) RHS ultimate height and spread, written as the deck writes them ("1–1.5 m", "30–50 cm", ">12 m", "8 m+");
(3) flowering or peak-interest months as Mon-Mon (e.g. "Jun-Aug"); (4) toxicity: the RHS flags (harmful if eaten / skin
irritant / toxic to pets) and the ASPCA listing, or "no listing found"; (5) the accepted name, whether the cultivar exists,
and the TRADE ('code') form if it is a PBR plant; (6) any UK compliance point (Xylella host, Schedule 9, plant passport).

1. Syringa vulgaris (Common lilac) [held] — claimed: hardiness H6; height 4–8 m; spread 4–8 m; peak May-Jun; foliage deciduous; toxicity "" (prints blank); compliance "none"
2. Clematis viticella 'Purpurea Plena Elegans' (Clematis 'Purpurea Plena Elegans') [held] — claimed: hardiness H5; height 1.5–2.5 m; spread 0.5–1 m; peak Jul-Sep; foliage blank; toxicity "" (prints blank); compliance "none"
3. Clematis montana var. rubens (Clematis montana var. rubens) [held] — claimed: hardiness H5; height 8–12 m; spread 4–8 m; peak May-Jun; foliage blank; toxicity "" (prints blank); compliance "none"
4. Clematis armandii (Evergreen Clematis) [held] — claimed: hardiness H4; height 4–8 m; spread 1.5–2.5 m; peak Mar-Apr; foliage evergreen; toxicity "" (prints blank); compliance "none"
5. Fallopia baldschuanica (Russian Vine) [held] — claimed: hardiness H5; height 8–12 m; spread 4–8 m; peak Jul-Oct; foliage blank; toxicity "" (prints blank); compliance "none"
6. Rhus typhina (Stag's Horn Sumach) [held] — claimed: hardiness H6; height 4-8m; spread 4-8m+; peak Sep-Nov; foliage deciduous; toxicity "Sap may irritate sensitive skin. Wear gloves when pruning or handling cut stems." (prints caution); compliance "none"
7. Rodgersia 'Bronze Peacock' (Rodgersia 'Bronze Peacock') [held] — claimed: hardiness H6; height 0.5-1m; spread 0.5-1m; peak May-Aug; foliage deciduous; toxicity "" (prints blank); compliance "none"
8. Rhododendron luteum (Yellow Azalea) [held] — claimed: hardiness H6; height 2.5-4m; spread 2.5-4m; peak May-Jun; foliage deciduous; toxicity "All parts are poisonous if eaten and are potentially dangerous to people, pets and livestock." (prints severe); compliance "Listed in Schedule 9 Part II of the Wildlife and Countryside Act 1981 in England and Wales. Do not plant or otherwise cause this species to grow in the wild, and prevent garden material from escaping into natural habitats."
9. Trachycarpus fortunei (Chusan Palm) [held] — claimed: hardiness H5; height 12m+; spread 1.5-2.5m; peak Jan-Dec; foliage evergreen; toxicity "" (prints blank); compliance "none"

Write your verdicts as JSON to: data/second-pass/2026-10-18/verdicts-0.json
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
