# Second-pass brief 0 — 9 plants

You are fact-checking UK garden-centre plant cards. Use WebSearch (load it with ToolSearch "select:WebSearch,WebFetch" first).
rhs.org.uk pages are blocked by the proxy: search-result snippets of RHS pages are acceptable evidence; say when you relied on
one. Do NOT edit any file except the one named below. Never invent: a value you cannot find is "" with source "not found".

For EACH plant find: (1) the RHS hardiness band H1a–H7 (give the RHS plant id), else the best other source and say so;
(2) RHS ultimate height and spread, written as the deck writes them ("1–1.5 m", "30–50 cm", ">12 m", "8 m+");
(3) flowering or peak-interest months as Mon-Mon (e.g. "Jun-Aug"); (4) toxicity: the RHS flags (harmful if eaten / skin
irritant / toxic to pets) and the ASPCA listing, or "no listing found"; (5) the accepted name, whether the cultivar exists,
and the TRADE ('code') form if it is a PBR plant; (6) any UK compliance point (Xylella host, Schedule 9, plant passport).

1. Vitis coignetiae (Crimson Glory Vine) [batch:batch-as-sent.json] — claimed: hardiness H6; height >12 m; spread 4–8 m; peak Sep-Nov; foliage deciduous; toxicity "The berries are related to grapes, which are toxic to dogs and can cause kidney failure, so keep dogs away from fallen fruit. The berries are sour and should not be eaten." (prints harmful); compliance "Vitis is a known host genus of Xylella fastidiosa. A plant passport is required for trade movement."
2. Coronilla 'Temptations Fabulous Fragrance' (Coronilla) [batch:batch-as-sent.json] — claimed: hardiness H4; height blank; spread blank; peak Feb-Apr; foliage evergreen; toxicity "Some Coronilla species contain cardiac glycosides, so treat all parts as harmful if eaten and keep away from children, dogs and cats." (prints harmful); compliance "none"
3. Hedera algeriensis 'Gloire de Marengo' (Variegated Algerian Ivy) [batch:batch-as-sent.json] — claimed: hardiness H3; height 4–8 m; spread 2.5–4 m; peak Jan-Dec; foliage evergreen; toxicity "All parts are toxic if eaten, causing stomach upset in children, dogs and cats. Sap can irritate skin, so wear gloves when pruning." (prints harmful); compliance "none"
4. Diervilla KODIAK MIXX (Bush Honeysuckle) [batch:batch-as-sent.json] — claimed: hardiness H6; height 1–1.2 m; spread 1–1.2 m; peak Apr-Oct; foliage deciduous; toxicity "No known hazard." (prints clear); compliance "none"
5. Helichrysum italicum 'Korma' (Curry Plant) [batch:batch-as-sent.json] — claimed: hardiness H4; height blank; spread blank; peak Jan-Dec; foliage evergreen; toxicity "No known hazard." (prints clear); compliance "none"
6. Cotoneaster × suecicus 'Coral Beauty' (Cotoneaster 'Coral Beauty') [batch:batch-as-sent.json] — claimed: hardiness H6; height 0.5–1 m; spread 1.5–2.5 m; peak Sep-Dec; foliage evergreen; toxicity "Berries are mildly toxic if eaten, causing stomach upset; keep children and pets from eating them." (prints harmful); compliance "Fireblight (Erwinia amylovora) host; moved in trade with a plant passport."
7. Berberis thunbergii f. atropurpurea 'Rose Glow' (Japanese Barberry 'Rose Glow') [batch:batch-as-sent.json] — claimed: hardiness H7; height 1–1.5 m; spread 1–1.5 m; peak Apr-Oct; foliage deciduous; toxicity "Sharp spines pierce skin easily, so wear gloves when handling or pruning. Discourage children from eating the berries, which may cause stomach upset if eaten in quantity." (prints caution); compliance "none"
8. Euonymus alatus (Winged Spindle) [batch:batch-as-sent.json] — claimed: hardiness H7; height blank; spread blank; peak Oct-Nov; foliage deciduous; toxicity "All parts, especially the fruits and seeds, are toxic if eaten and can cause vomiting and diarrhoea. Keep away from children, dogs and cats." (prints harmful); compliance "none"
9. Acer × conspicuum 'Red Flamingo' (Snakebark Maple 'Red Flamingo') [batch:batch-as-sent.json] — claimed: hardiness H6; height 4–8 m; spread 2.5–4 m; peak Nov-Mar; foliage deciduous; toxicity "Not known to harm people or pets. Some maple species have leaves and seeds that are toxic to horses, so keep it away from grazing paddocks." (prints harmful); compliance "Plant passport required for trade movement: Acer is a regulated host of Asian longhorn beetle."

Write your verdicts as JSON to: data/second-pass/2026-10-19/verdicts-0.json
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
