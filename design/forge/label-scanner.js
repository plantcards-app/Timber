/* label-scanner.js: the Plant Label Scanner's on-device reader (https://claude.ai/artifact/Y3iNay4N9khv2nQNFCqZuE, version 5),
   lifted unchanged except for its status line, which now reports through TimberLabelScanner.onProgress.
   Needs ort.wasm.min.js loaded first and the model files beside the page. Nothing leaves the device. */
(function () {
  'use strict';
  // ---------- constants ----------
  var DICT = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u00c0", "\u00c1", "\u00c2", "\u00c3", "\u00c4", "\u00c5", "\u00c6", "\u00c7", "\u00c8", "\u00c9", "\u00ca", "\u00cb", "\u00cc", "\u00cd", "\u00ce", "\u00cf", "\u00d0", "\u00d1", "\u00d2", "\u00d3", "\u00d4", "\u00d5", "\u00d6", "\u00d7", "\u00d8", "\u00d9", "\u00da", "\u00db", "\u00dc", "\u00dd", "\u00de", "\u00df", "\u00e0", "\u00e1", "\u00e2", "\u00e3", "\u00e4", "\u00e5", "\u00e6", "\u00e7", "\u00e8", "\u00e9", "\u00ea", "\u00eb", "\u00ec", "\u00ed", "\u00ee", "\u00ef", "\u00f0", "\u00f1", "\u00f2", "\u00f3", "\u00f4", "\u00f5", "\u00f6", "\u00f7", "\u00f8", "\u00f9", "\u00fa", "\u00fb", "\u00fc", "\u00fd", "\u00fe", "\u00ff", "\u0100", "\u0101", "\u0102", "\u0103", "\u0104", "\u0105", "\u0106", "\u0107", "\u0108", "\u0109", "\u010a", "\u010b", "\u010c", "\u010d", "\u010e", "\u010f", "\u0110", "\u0111", "\u0112", "\u0113", "\u0114", "\u0115", "\u0116", "\u0117", "\u0118", "\u0119", "\u011a", "\u011b", "\u011c", "\u011d", "\u011e", "\u011f", "\u0120", "\u0121", "\u0122", "\u0123", "\u0124", "\u0125", "\u0126", "\u0127", "\u0128", "\u0129", "\u012a", "\u012b", "\u012c", "\u012d", "\u012e", "\u012f", "\u0130", "\u0131", "\u0132", "\u0133", "\u0134", "\u0135", "\u0136", "\u0137", "\u0138", "\u0139", "\u013a", "\u013b", "\u013c", "\u013d", "\u013e", "\u013f", "\u0140", "\u0141", "\u0142", "\u0143", "\u0144", "\u0145", "\u0146", "\u0147", "\u0148", "\u0149", "\u014a", "\u014b", "\u014c", "\u014d", "\u014e", "\u014f", "\u0150", "\u0151", "\u0152", "\u0153", "\u0154", "\u0155", "\u0156", "\u0157", "\u0158", "\u0159", "\u015a", "\u015b", "\u015c", "\u015d", "\u015e", "\u015f", "\u0160", "\u0161", "\u0162", "\u0163", "\u0164", "\u0165", "\u0166", "\u0167", "\u0168", "\u0169", "\u016a", "\u016b", "\u016c", "\u016d", "\u016e", "\u016f", "\u0170", "\u0171", "\u0172", "\u0173", "\u0174", "\u0175", "\u0176", "\u0177", "\u0178", "\u0179", "\u017a", "\u017b", "\u017c", "\u017d", "\u017e", "\u017f", "\u0180", "\u0181", "\u0182", "\u0183", "\u0184", "\u0185", "\u0186", "\u0187", "\u0188", "\u0189", "\u018a", "\u018b", "\u018c", "\u018d", "\u018e", "\u018f", "\u0190", "\u0191", "\u0192", "\u0193", "\u0194", "\u0195", "\u0196", "\u0197", "\u0198", "\u0199", "\u019a", "\u019b", "\u019c", "\u019d", "\u019e", "\u019f", "\u01a0", "\u01a1", "\u01a2", "\u01a3", "\u01a4", "\u01a5", "\u01a6", "\u01a7", "\u01a8", "\u01a9", "\u01aa", "\u01ab", "\u01ac", "\u01ad", "\u01ae", "\u01af", "\u01b0", "\u01b1", "\u01b2", "\u01b3", "\u01b4", "\u01b5", "\u01b6", "\u01b7", "\u01b8", "\u01b9", "\u01ba", "\u01bb", "\u01bc", "\u01bd", "\u01be", "\u01bf", "\u01c0", "\u01c1", "\u01c2", "\u01c3", "\u01c4", "\u01c5", "\u01c6", "\u01c7", "\u01c8", "\u01c9", "\u01ca", "\u01cb", "\u01cc", "\u01cd", "\u01ce", "\u01cf", "\u01d0", "\u01d1", "\u01d2", "\u01d3", "\u01d4", "\u01d5", "\u01d6", "\u01d7", "\u01d8", "\u01d9", "\u01da", "\u01db", "\u01dc", "\u01dd", "\u01de", "\u01df", "\u01e0", "\u01e1", "\u01e2", "\u01e3", "\u01e4", "\u01e5", "\u01e6", "\u01e7", "\u01e8", "\u01e9", "\u01ea", "\u01eb", "\u01ec", "\u01ed", "\u01ee", "\u01ef", "\u01f0", "\u01f1", "\u01f2", "\u01f3", "\u01f4", "\u01f5", "\u01f6", "\u01f7", "\u01f8", "\u01f9", "\u01fa", "\u01fb", "\u01fc", "\u01fd", "\u01fe", "\u01ff", "\u0200", "\u0201", "\u0202", "\u0203", "\u0204", "\u0205", "\u0206", "\u0207", "\u0208", "\u0209", "\u020a", "\u020b", "\u020c", "\u020d", "\u020e", "\u020f", "\u0210", "\u0211", "\u0212", "\u0213", "\u0214", "\u0215", "\u0216", "\u0217", "\u0218", "\u0219", "\u021a", "\u021b", "\u021c", "\u021d", "\u021e", "\u021f", "\u0220", "\u0221", "\u0222", "\u0223", "\u0224", "\u0225", "\u0226", "\u0227", "\u0228", "\u0229", "\u022a", "\u022b", "\u022c", "\u022d", "\u022e", "\u022f", "\u0230", "\u0231", "\u0232", "\u0233", "\u0234", "\u0235", "\u0236", "\u0237", "\u0238", "\u0239", "\u023a", "\u023b", "\u023c", "\u023d", "\u023e", "\u023f", "\u0240", "\u0241", "\u0242", "\u0243", "\u0244", "\u0245", "\u0246", "\u0247", "\u0248", "\u0249", "\u024a", "\u024b", "\u024c", "\u024d", "\u024e", "\u024f", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "_", "`", "{", "|", "}", "^", "~", "\u00a9", "\u00ae", "\u2109", "\u2116", "\u2126", "\u212e", "\u2122", "\u2206", "\u2713", "\u2714", "\u2717", "\u2718", "\u2715", "\u2611", "\u2612", "\u25cf", "\u25aa", "\u25ab", "\u25fc", "\u25b6", "\u25c0", "\u2b06", "\u00a4", "\u00a6", "\u00a7", "\u00a8", "\u00aa", "\u00ab", "\u00ac", "\u00af", "\u00b0", "\u00b2", "\u00b3", "\u00b4", "\u00b5", "\u00b6", "\u00b8", "\u00b9", "\u00ba", "\u00bb", "\u00bc", "\u00bd", "\u00be", "\u00bf", "\u00d7", "\u2010", "\u2011", "\u2012", "\u2014", "\u2015", "\u2016", "\u2017", "\u2018", "\u2019", "\u201a", "\u201b", "\u201c", "\u201d", "\u201e", "\u201f", "\u2020", "\u2021", "\u2023", "\u2024", "\u2026", "\u2027", "\u2030", "\u2034", "\u2035", "\u2036", "\u2037", "\u2038", "\u2039", "\u203a", "\u203b", "\u203c", "\u203d", "\u203e", "\u2212", "\u20a4", "\u20a1", "\u20b9", "\u20bd", "\u20b4", "\u20bf", "\u00a2", "\u20ac", "\u00a3", "\u00a5", "\u2160", "\u2161", "\u2162", "\u2163", "\u2164", "\u2165", "\u2166", "\u2167", "\u2168", "\u2169", "\u216a", "\u216b", "\u2170", "\u2171", "\u2172", "\u2173", "\u2174", "\u2175", "\u2176", "\u2177", "\u2178", "\u2179", "\u217a", "\u217b", "\u2780", "\u2781", "\u2782", "\u2783", "\u2784", "\u2785", "\u2786", "\u2787", "\u2788", "\u2789", "\u278a", "\u278b", "\u278c", "\u278d", "\u278e", "\u278f", "\u2790", "\u2791", "\u2792", "\u2793", "\u2776", "\u2777", "\u2778", "\u2779", "\u277a", "\u277b", "\u277c", "\u277d", "\u277e", "\u277f", "\u2460", "\u2461", "\u2462", "\u2463", "\u2464", "\u2465", "\u2466", "\u2467", "\u2468", "\u2469", "\u2191", "\u2192", "\u2193", "\u2195", "\u2190", "\u2194", "\u21d2", "\u21d0", "\u21d4", "\u2200", "\u2203", "\u2204", "\u2234", "\u2235", "\u221d", "\u221e", "\u2229", "\u222a", "\u2202", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230", "\u2211", "\u220f", "\u221a", "\u221b", "\u221c", "\u2231", "\u2232", "\u2233", "\u2236", "\u2237", "\u223c", "\u2216", "\u2217", "\u2248", "\u2260", "\u2261", "\u2264", "\u2265", "\u2282", "\u2283", "\u22a5", "\u22be", "\u22bf", "\u25a1", "\u2225", "\u220b", "\u0192", "\u2032", "\u2033", "\u00c0", "\u00c1", "\u00c2", "\u00c3", "\u00c4", "\u00c5", "\u00c6", "\u00c7", "\u00c8", "\u00c9", "\u00ca", "\u00cb", "\u00cc", "\u00cd", "\u00ce", "\u00cf", "\u00d0", "\u00d1", "\u00d2", "\u00d3", "\u00d4", "\u00d5", "\u00d6", "\u00d8", "\u00d9", "\u00da", "\u00db", "\u00dc", "\u00dd", "\u00de", "\u00e0", "\u00e1", "\u00e2", "\u00e3", "\u00e4", "\u00e5", "\u00e6", "\u00e7", "\u00e8", "\u00e9", "\u00ea", "\u00eb", "\u00ec", "\u00ed", "\u00ee", "\u00ef", "\u00f0", "\u00f1", "\u00f2", "\u00f3", "\u00f4", "\u00f5", "\u00f6", "\u00f8", "\u00f9", "\u00fa", "\u00fb", "\u00fc", "\u00fd", "\u00fe", "\u00ff", "\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396", "\u0397", "\u0398", "\u0399", "\u039a", "\u039b", "\u039c", "\u039d", "\u039e", "\u039f", "\u03a0", "\u03a1", "\u03a3", "\u03a4", "\u03a5", "\u03a6", "\u03a7", "\u03a8", "\u03a9", "\u03b1", "\u03b2", "\u03b3", "\u03b4", "\u03b5", "\u03b6", "\u03b7", "\u03b8", "\u03b9", "\u03ba", "\u03bb", "\u03bc", "\u03bd", "\u03be", "\u03bf", "\u03c0", "\u03c1", "\u03c3", "\u03c2", "\u03c4", "\u03c5", "\u03c6", "\u03c7", "\u03c8", "\u03c9", "\u212b", "\u210f", "\u2300", "\u237a", "\u2375", "\ud835\udc62", "\ud835\udf13", "\u0966", "\u2025", "\ufe3d", "\ufe65", "\u2022", "\u00f7", "\u2215", "\u2219", "\u22c5", "\u00b7", "\u00b1", "\u2213", "\u221f", "\u2220", "\u2221", "\u2222", "\u2127", "\u263a", " "];               // recognition alphabet; index 0 is the CTC blank
  var FILES = [
    { key: 'wasm', url: 'ort-wasm-simd.wasm', size: 10551547 },
    { key: 'det', url: 'det.b64.txt', size: 6327356, b64: true },   // model weights, stored as base64 text
    { key: 'rec', url: 'rec.b64.txt', size: 10755360, b64: true }
  ];
  var NAME_ONLY_BOXES = 18;
  var ALL_TEXT_BOXES = 60;

  var engine = null;
  var enginePromise = null;
  var progress = function () {};

  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms || 0); }); }
  function setStatus(kind, html, pct) { progress({ kind: kind, text: String(html).replace(/<[^>]+>/g, ''), pct: pct }); }
  function esc(s) { return String(s); }
  function mb(n) { return (n / 1048576).toFixed(0); }

  // ---------- engine ----------
  async function fetchBytes(f, onChunk) {
    var res = await fetch(f.url);
    if (!res.ok) throw new Error('could not fetch ' + f.url + ' (HTTP ' + res.status + ')');
    if (!res.body || !res.body.getReader) {
      var buf = new Uint8Array(await res.arrayBuffer()); onChunk(buf.length); return buf;
    }
    var reader = res.body.getReader(), chunks = [], n = 0;
    for (;;) {
      var step = await reader.read();
      if (step.done) break;
      chunks.push(step.value); n += step.value.length; onChunk(step.value.length);
    }
    var out = new Uint8Array(n), o = 0;
    for (var i = 0; i < chunks.length; i++) { out.set(chunks[i], o); o += chunks[i].length; }
    return out;
  }

  function b64ToBytes(a) {
    var T = b64ToBytes.t;
    if (!T) {
      T = b64ToBytes.t = new Uint8Array(256);
      var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var k = 0; k < 64; k++) T[abc.charCodeAt(k)] = k;
    }
    var n = a.length;
    while (n && (a[n - 1] === 61 || a[n - 1] === 10 || a[n - 1] === 13)) n--;   // drop padding and newlines
    var out = new Uint8Array(Math.floor(n * 3 / 4)), o = 0, i = 0;
    for (; i + 3 < n; i += 4) {
      var v = (T[a[i]] << 18) | (T[a[i + 1]] << 12) | (T[a[i + 2]] << 6) | T[a[i + 3]];
      out[o++] = v >> 16; out[o++] = (v >> 8) & 255; out[o++] = v & 255;
    }
    if (n - i === 2) { out[o++] = ((T[a[i]] << 2) | (T[a[i + 1]] >> 4)) & 255; }
    else if (n - i === 3) { var u = (T[a[i]] << 10) | (T[a[i + 1]] << 4) | (T[a[i + 2]] >> 2); out[o++] = u >> 8; out[o++] = u & 255; }
    return out;
  }

  async function blobFetchWorks() {
    try {
      var u = URL.createObjectURL(new Blob(['ok']));
      var r = await fetch(u); var t = await r.text(); URL.revokeObjectURL(u);
      return t === 'ok';
    } catch (e) { return false; }
  }

  async function startEngine() {
    if (typeof ort === 'undefined') throw new Error('the recognition library did not load');
    if (typeof WebAssembly === 'undefined') throw new Error('this browser has no WebAssembly');
    var total = FILES.reduce(function (a, f) { return a + f.size; }, 0), got = 0;
    var bytes = {};
    function tick(n) {
      got += n;
      setStatus('', '<strong>Getting the scanner ready.</strong> ' + mb(Math.min(got, total)) + ' of ' + mb(total) + ' MB', 100 * got / total);
    }
    for (var i = 0; i < FILES.length; i++) {
      var raw = await fetchBytes(FILES[i], tick);
      bytes[FILES[i].key] = FILES[i].b64 ? b64ToBytes(raw) : raw;
    }
    setStatus('', '<strong>Getting the scanner ready.</strong> Starting up\u2026', 100);
    await pause(30);

    ort.env.wasm.numThreads = 1;
    ort.env.wasm.simd = true;
    ort.env.wasm.proxy = false;
    ort.env.logLevel = 'error';
    var wasmUrl = 'ort-wasm-simd.wasm';
    if (await blobFetchWorks()) wasmUrl = URL.createObjectURL(new Blob([bytes.wasm], { type: 'application/wasm' }));
    ort.env.wasm.wasmPaths = { 'ort-wasm-simd.wasm': wasmUrl, 'ort-wasm.wasm': wasmUrl };
    bytes.wasm = null;

    var opts = { executionProviders: ['wasm'], graphOptimizationLevel: 'all' };
    var det = await ort.InferenceSession.create(bytes.det, opts);
    var rec = await ort.InferenceSession.create(bytes.rec, opts);
    return { det: det, rec: rec };
  }

  function ensureEngine() {
    if (!enginePromise) {
      enginePromise = startEngine().then(function (e) { engine = e; setStatus('ok', 'Scanner ready.'); return e; });
      enginePromise.catch(function () { enginePromise = null; });
    }
    return enginePromise;
  }


  // Word lists the name picker leans on. They are aids, not a complete flora:
  // a name that is not listed still gets picked by its size and position on the label.
  var PlantWords = (function () {
    var GENERA = (
      'Abelia Abeliophyllum Abies Abutilon Acacia Acaena Acanthus Acca Acer Achillea Acidanthera Aconitum Acorus Actaea Actinidia Adiantum Aechmea Aegopodium Aeonium Aesculus Aethionema Agapanthus Agastache Agave Ageratum Aglaonema Agrostemma Ailanthus Ajuga Akebia Albizia Alcea Alchemilla Allium Alnus Alocasia Aloe Aloysia Alstroemeria Althaea Alyssum Amaranthus Amarine Amaryllis Amelanchier Ammi Ampelodesmos Ampelopsis Amsonia Anacyclus Anagallis Anaphalis Anchusa Andromeda Andropogon Androsace Anemanthele Anemone Anemonella Anethum Angelica Anisodontea Antennaria Anthemis Anthriscus Anthurium Antirrhinum Apium Aponogeton Aquilegia Arabis Aralia Araucaria Arbutus Arctostaphylos Arctotis Areca Arenaria Argyranthemum Arisaema Aristolochia Armeria Armoracia Aronia Artemisia Arum Aruncus Arundo Asarum Asclepias Asparagus Asperula Asphodeline Asphodelus Aspidistra Asplenium Astelia Aster Astilbe Astilboides Astrantia Athyrium Atriplex Aubrieta Aucuba Aurinia Azalea Azara Azolla Azorella ' +
      'Bacopa Ballota Bambusa Banksia Baptisia Beaucarnea Beesia Begonia Bellis Berberidopsis Berberis Bergenia Beta Betula Bidens Billardiera Blechnum Bletilla Bolax Borago Bougainvillea Bouteloua Brachyglottis Brachyscome Brassica Briza Brugmansia Brunnera Buddleja Buddleia Bupleurum Butomus Buxus ' +
      'Caladium Calamagrostis Calamintha Calathea Calceolaria Calendula Calibrachoa Calla Callicarpa Callistemon Callistephus Calluna Calocedrus Caltha Calycanthus Camassia Camellia Campanula Campsis Canna Capsicum Caragana Cardamine Cardiocrinum Carex Carpenteria Carpinus Carya Caryopteris Cassiope Castanea Catalpa Catananche Cattleya Cautleya Ceanothus Cedrus Celastrus Celosia Cenolophium Centaurea Centranthus Cephalanthus Cephalaria Cephalotaxus Cerastium Ceratostigma Cercidiphyllum Cercis Cerinthe Ceropegia Cestrum Chaenomeles Chaerophyllum Chamaecyparis Chamaedorea Chamaemelum Chamaenerion Chamaerops Chasmanthium Cheiranthus Chelone Chimonanthus Chionanthus Chionochloa Chionodoxa Chitalpa Chlorophytum Choisya Chrysanthemum Cichorium Cimicifuga Cineraria Cirsium Cissus Cistus Citrus Clarkia Clematis Cleome Clerodendrum Clethra Clianthus Clivia Cobaea Codiaeum Codonopsis Colchicum Coleus Colletia Colocasia Colutea Convallaria Convolvulus Coprosma Cordyline Coreopsis Coriandrum Cornus Corokia Coronilla Correa Cortaderia Corydalis Corylopsis Corylus Cosmos Cotinus Cotoneaster Cotula Crambe Crassula Crataegus Crinodendron Crinum Crocosmia Crocus Cryptomeria Ctenanthe Cucumis Cucurbita Cunninghamia Cuphea Cupressocyparis Cupressus Cuprocyparis Curio Cyclamen Cydonia Cymbidium Cymbopogon Cynara Cynoglossum Cyperus Cyrtomium Cytisus ' +
      'Daboecia Dactylorhiza Dahlia Daphne Darmera Datisca Datura Daucus Davallia Davidia Decaisnea Delosperma Delphinium Dendrobium Deschampsia Desfontainia Deutzia Dianella Dianthus Diascia Dicentra Dichondra Dicksonia Dictamnus Dieffenbachia Dierama Diervilla Digitalis Dionaea Diospyros Dipelta Dipsacus Disanthus Disporopsis Disporum Distylium Dodecatheon Doronicum Draba Dracaena Dracocephalum Drimys Drosera Dryas Dryopteris Dypsis ' +
      'Eccremocarpus Echeveria Echinacea Echinocactus Echinops Echinopsis Echium Edgeworthia Edraianthus Elaeagnus Elymus Embothrium Enkianthus Epilobium Epimedium Epipactis Epipremnum Equisetum Eragrostis Eranthis Eremurus Erica Erigeron Erinus Eriobotrya Eriophorum Erodium Eruca Eryngium Erysimum Erythronium Escallonia Eschscholzia Eucalyptus Eucomis Eucryphia Euonymus Eupatorium Euphorbia Euryops Eutrochium Exochorda ' +
      'Fagus Fallopia Farfugium Fargesia Fascicularia Fatshedera Fatsia Feijoa Felicia Ferula Festuca Ficus Filipendula Fittonia Foeniculum Forsythia Fothergilla Fragaria Francoa Frankenia Fraxinus Freesia Fremontodendron Fritillaria Fuchsia ' +
      'Gaillardia Galanthus Galega Galium Galtonia Garrya Gasteria Gaultheria Gaura Gazania Genista Gentiana Geranium Gerbera Geum Gillenia Ginkgo Gladiolus Glandora Glaucium Glechoma Gleditsia Globularia Glyceria Goeppertia Gomphrena Grevillea Griselinia Gunnera Guzmania Gypsophila ' +
      'Haberlea Hacquetia Hakea Hakonechloa Halesia Halimiocistus Halimium Hamamelis Haworthia Hebe Hedera Hedychium Helenium Helianthemum Helianthus Helichrysum Helictotrichon Heliopsis Heliotropium Helleborus Hemerocallis Hepatica Heptacodium Hesperaloe Hesperantha Hesperis Heuchera Heucherella Hibiscus Hippeastrum Hippophae Hoheria Holboellia Holcus Hordeum Hosta Houttuynia Howea Hoya Humulus Hyacinthoides Hyacinthus Hydrangea Hylotelephium Hypericum Hypoestes Hyssopus ' +
      'Iberis Ilex Illicium Impatiens Imperata Incarvillea Indigofera Inula Ipheion Ipomoea Iresine Iris Isolepis Isotoma Itea Ixia ' +
      'Jarava Jasminum Jovibarba Juglans Juncus Juniperus ' +
      'Kalanchoe Kalimeris Kalmia Kerria Kirengeshoma Knautia Kniphofia Koelreuteria Kolkwitzia ' +
      'Laburnum Lactuca Lagerstroemia Lagurus Lamium Lamprocapnos Lantana Lapageria Larix Lathyrus Laurentia Laurus Lavandula Lavatera Ledum Leonotis Leontopodium Leptinella Leptospermum Lespedeza Leucadendron Leucanthemum Leucojum Leucophyta Leucothoe Levisticum Lewisia Leycesteria Leymus Liatris Libertia Ligularia Ligustrum Lilium Limnanthes Limonium Linaria Lindera Linnaea Linum Liquidambar Liriodendron Liriope Lithodora Lithops Lobelia Lobularia Lomandra Lonicera Lophomyrtus Loropetalum Lotus Luma Lunaria Lupinus Luzula Lychnis Lycium Lycopersicon Lysichiton Lysimachia Lythrum ' +
      'Macleaya Magnolia Mahoberberis Mahonia Maianthemum Malus Malva Mammillaria Mandevilla Maranta Matteuccia Matthiola Mazus Meconopsis Melianthus Melica Melissa Mentha Menyanthes Mertensia Mespilus Metasequoia Metrosideros Microbiota Milium Miltonia Mimulus Mirabilis Miscanthus Molinia Monarda Monstera Morina Morus Muehlenbeckia Muhlenbergia Mukdenia Musa Muscari Myosotis Myrica Myrrhis Myrtus ' +
      'Nandina Narcissus Nassella Nasturtium Nectaroscordum Nemesia Nemophila Nepenthes Nepeta Nephrolepis Nerine Nerium Nicotiana Nierembergia Nigella Nothofagus Nymphaea Nyssa ' +
      'Ocimum Oenothera Olea Olearia Omphalodes Oncidium Onoclea Ophiopogon Opuntia Origanum Ornithogalum Osmanthus Osmunda Osteospermum Ostrya Othonna Oxalis Oxydendrum Ozothamnus ' +
      'Pachira Pachyphragma Pachysandra Paeonia Panicum Papaver Paphiopedilum Parahebe Parrotia Parthenocissus Passiflora Pastinaca Patrinia Paulownia Pelargonium Pellaea Pennisetum Penstemon Pentas Peperomia Perovskia Persicaria Petasites Petroselinum Petunia Phacelia Phalaenopsis Phalaris Phaseolus Philadelphus Phillyrea Philodendron Phlebodium Phlomis Phlox Phoenix Phormium Photinia Phuopsis Phygelius Phyllostachys Physalis Physocarpus Physostegia Phyteuma Picea Pieris Pilea Pileostegia Pimpinella Pinguicula Pinus Pisum Pittosporum Plantago Platanus Platycerium Platycladus Platycodon Plectranthus Pleioblastus Pleione Plumbago Podocarpus Podophyllum Polemonium Polygala Polygonatum Polypodium Polyscias Polystichum Poncirus Pontederia Populus Portulaca Potentilla Pratia Primula Prostanthera Protea Prunella Prunus Pseudolarix Pseudopanax Pseudosasa Pseudotsuga Pseudowintera Psidium Ptelea Pteris Pterocarya Pulmonaria Pulsatilla Punica Puschkinia Pyracantha Pyrus ' +
      'Quercus ' +
      'Radermachera Ramonda Ranunculus Raoulia Raphanus Ratibida Rehmannia Reseda Rhamnus Rhaphiolepis Rheum Rhipsalis Rhodanthemum Rhodochiton Rhododendron Rhodohypoxis Rhus Ribes Ricinus Robinia Rodgersia Romneya Rosa Roscoea Rosmarinus Rubus Rudbeckia Rumex Ruscus Ruta ' +
      'Sagina Sagittaria Saintpaulia Salix Salpiglossis Salvia Sambucus Sanguisorba Sansevieria Santolina Sanvitalia Saponaria Sarcococca Sarracenia Sasa Satureja Saxifraga Scabiosa Scaevola Schefflera Schisandra Schizachyrium Schizanthus Schizophragma Schizostylis Schlumbergera Schoenoplectus Sciadopitys Scilla Scindapsus Scirpus Scleranthus Scrophularia Scutellaria Sedum Selaginella Selinum Semiarundinaria Sempervivum Senecio Sequoia Sequoiadendron Sesleria Shibataea Sidalcea Silene Silphium Sinningia Sisyrinchium Skimmia Smilacina Solanum Soldanella Soleirolia Solenostemon Solidago Sollya Sophora Sorbaria Sorbaronia Sorbus Sparaxis Spartium Spathiphyllum Spinacia Spiraea Sporobolus Stachys Stachyurus Staphylea Stauntonia Stephanandra Stephanotis Sternbergia Stevia Stewartia Stipa Stokesia Strelitzia Streptocarpus Strobilanthes Stromanthe Styrax Succisa Sunpatiens Surfinia Sutera Symphoricarpos Symphyotrichum Symphytum Syneilesis Syngonium Syringa ' +
      'Tagetes Tamarix Tanacetum Taxodium Taxus Tellima Teucrium Thalictrum Thermopsis Thuja Thujopsis Thunbergia Thymus Tiarella Tibouchina Tigridia Tilia Tillandsia Tithonia Tolmiea Torenia Trachelospermum Trachycarpus Tradescantia Tricyrtis Trifolium Trillium Triteleia Trollius Tropaeolum Tsuga Tulbaghia Tulipa Typha ' +
      'Ugni Ulex Ulmus Uncinia Uvularia ' +
      'Vaccinium Valeriana Vanda Veratrum Verbascum Verbena Vernonia Veronica Veronicastrum Vestia Viburnum Vicia Vinca Viola Viscum Vitex Vitis Vriesea ' +
      'Waldsteinia Watsonia Weigela Westringia Wisteria Wollemia Woodwardia ' +
      'Xanthoceras Xerochrysum Yucca Yushania ' +
      'Zaluzianskya Zamioculcas Zantedeschia Zanthoxylum Zauschneria Zea Zelkova Zenobia Zephyranthes Zingiber Zinnia Zizia Ziziphus'
    ).split(/\s+/);

    // Everyday names that stand in for a genus on some labels. Used only when no botanical genus is found.
    var COMMON = (
      'Rose Roses Lavender Rosemary Thyme Sage Mint Basil Parsley Chives Coriander Fennel Oregano Bamboo Fern Ivy Holly Heather Jasmine Honeysuckle Peony Pansy Primrose Polyanthus Daffodil Tulip Lily Hyacinth Snowdrop Bluebell ' +
      'Apple Pear Plum Cherry Damson Greengage Fig Olive Strawberry Raspberry Blackberry Blueberry Gooseberry Blackcurrant Redcurrant Rhubarb Grape Grapevine Tomato Chilli Cucumber Courgette ' +
      'Lupin Foxglove Hollyhock Sunflower Sweetpea Wallflower Marigold Poinsettia Lilac Maple Birch Willow Hawthorn Laurel Privet Conifer Pine Spruce Cedar Juniper Cypress Passionflower Grass Orchid Cactus Succulent Palm'
    ).split(/\s+/);

    // Species words. Used to spot the botanical line and to set its capitals correctly.
    var EPITHETS = (
      'acutiflora alba album albus alpina alpinum alpinus alternifolia amabilis americana angustifolia annua aquatica aquifolium arborea arborescens argentea armandii arundinacea atropurpurea atropurpureum aurea aureum aureus australis austriaca avium axillaris azurea ' +
      'baccata barbatus betulus bodnantense bonariensis brachybotrys bulbosa burkwoodii buxifolia byzantina caerulea calycinum cambrica canadensis candicans capensis capillaris cardunculus carnea cashmeriana cerasifera cespitosa chamaecyparissus chinensis cineraria cirrhosa citriodora coccinea coccineum communis compacta contorta cordata cordifolia coronarius crispa cyanus ' +
      'dactylifera damascena darwinii davidii decumbens delavayi deltoidea dentata dioica domestica dumosa elata elatum elegans erecta ericoides erythrosora europaea europaeus excelsa excelsior fastigiata filipendulina flammula flexuosa floribunda florida foetidus fontanesiana formosa fortunei fragrans fragrantissima fraseri fruticans fruticosa fruticosus fulgida ' +
      'garganica gigantea glabra glauca glaucum globosa glomerata gracilis grandiflora grandiflorum grandiflorus gunnii haageana hastata heterophylla heterophyllus hirta hispanica horizontalis hortensis humilis hupehensis hybrida hybridum ilicifolia incana indica intermedia involucrata ' +
      'japonica japonicum japonicus juliae keiskei kousa lactea lactiflora lanata lanceolata latifolia laurocerasus lawsoniana leylandii liliiflora longifolia lucida lusitanica lutea lutescens luteum ' +
      'macrantha macrocarpa macrophylla macrophyllum maculata maculatum magnifica majalis major majus maritima maritimum mascula maxima maximum media microphylla millefolium minor mollis montana moschata mucronata multiflora muralis ' +
      'nemorosa nepalensis niger nigra nigrescens nitida nivalis nobilis nudiflorum obassia occidentalis odorata odoratum officinale officinalis oppositifolia orientalis ottawensis ovata ' +
      'palmatum paniculata paniculatum patens peltata pendula perenne perennis persica persicifolia pinnata plicata plumosa polyphyllus pontica portenschlagiana poscharskyana praecox pratensis procumbens pseudacorus pseudoplatanus psilostemon pulchella pumila pungens purpurea purpureum purpureus pyramidalis ' +
      'quinquefolia radicans regalis repens reptans reticulata rigida ritro robur robusta rosea roseum rotundifolia rubra rubrum rugosa ' +
      'sanguinea sanguineum sasanqua sativa sativum scandens schmidtiana scolopendrium sempervirens serrata serrulata setiferum sibirica sinensis soulangeana speciosa speciosum spectabilis spicant spicata spinosa splendens stellata stenophylla stolonifera stricta suaveolens sylvatica sylvestris ' +
      'telephium tenax tenuifolia tenuissima ternata terrestris tetragona thalictroides thunbergii tinctoria tinus tobira tomentosa trichomanes tricolor trifoliata triloba tuberosa uniflora ' +
      'varia veitchii verna vernalis verticillata villosa vinifera virginiana viridis vitalba viticella vulgare vulgaris wallichiana whittallii williamsii yakushimanum yedoensis zebrinus'
    ).split(/\s+/);

    function set(list) { var s = Object.create(null); list.forEach(function (w) { s[w.toLowerCase()] = w; }); return s; }
    return { genera: set(GENERA), generaList: GENERA, common: set(COMMON), epithets: set(EPITHETS), epithetList: EPITHETS };
  })();
  if (typeof module !== 'undefined') module.exports = PlantWords;

  // Turns the lines read off a label into one plant name.
  // Input: lines in reading order, each { text, conf, words:[{t,c}], u, v, w, h, turned }.
  var NamePicker = (function (PW) {
    function deaccent(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
    function letters(s) { return deaccent(s).toLowerCase().replace(/[^a-z]/g, ''); }

    function lev(a, b, max) {
      if (Math.abs(a.length - b.length) > max) return max + 1;
      var prev = [], cur = [], i, j;
      for (j = 0; j <= b.length; j++) prev[j] = j;
      for (i = 1; i <= a.length; i++) {
        cur = [i]; var rowMin = i;
        for (j = 1; j <= b.length; j++) {
          cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
          if (cur[j] < rowMin) rowMin = cur[j];
        }
        if (rowMin > max) return max + 1;
        prev = cur;
      }
      return prev[b.length];
    }

    function lookup(word, set, list, fuzzy, minLen) {
      var w = letters(word);
      if (w.length < 4) return null;
      if (set[w]) return { name: set[w], d: 0 };
      if (fuzzy && w.length === 5 && minLen === 6) {       // a species word that lost its last letter: "gunni"
        for (var p = 0; p < list.length; p++) if (list[p].length === 6 && list[p].indexOf(w) === 0) return { name: list[p], d: 1 };
      }
      if (!fuzzy || w.length < (minLen || 7)) return null;
      var max = w.length >= 10 ? 2 : 1, best = null;
      for (var i = 0; i < list.length; i++) {
        var g = list[i].toLowerCase();
        if (g[0] !== w[0] && g[1] !== w[1] && g[1] !== w[0] && g[0] !== w[1]) continue;
        var d = lev(w, g, max);
        if (d <= max && (!best || d < best.d)) best = { name: list[i], d: d };
      }
      return best;
    }
    function genusOf(word, fuzzy) { return lookup(word, PW.genera, PW.generaList, fuzzy); }
    function epithetOf(word, fuzzy) { return lookup(word, PW.epithets, PW.epithetList, fuzzy, 6); }

    function cleanWord(t) {
      t = t.replace(/[\u2018\u2019\u201b`\u00b4]/g, "'").replace(/[\u201c\u201d]/g, '"');
      t = t.replace(/[\u00ae\u2122\u00a9\u00b0\u2022\u00b7|*_~^<>=+\\]/g, '');
      t = t.replace(/^[.,;:!?\-]+/, '');
      var m = /^([A-Za-z]{1,6})\.$/.exec(t);          // keep the stop on short abbreviations: cir. var. Atrop.
      if (!m) t = t.replace(/[.,;:!?\-]+$/, '');
      t = t.replace(/^([A-Z][a-z]{2,})(tm|TM)$/, '$1');  // a trademark sign read as letters
      if (t.length > 1 && t === t.toUpperCase() && /[^\x00-\x7f]/.test(t)) t = deaccent(t);   // specks read as accents on capitals
      return t;
    }

    var BOILER = [
      /passport/, /\buk ?grown\b/, /grown ?in/, /^in ?the( uk)?$/, /british/, /peat/, /^(grown|free)$/, /pollinat/, /\brhs\b/, /recyc/, /label/, /together/,
      /^\d+([.,]\d+)?\s*(l|lt|ltr|litres?)\b/, /\blitres?\b/, /\bpot$/, /^pot\b/, /^\d+ ?l ?pot/,
      /^for\b/, /^for ?(shad|sun|pots|borders|bees|containers|patios|hedging|ground ?cover)/, /^perf/, /^variety$/,
      /^(fragrant|scented|new|hardy|evergreen|deciduous|perennial|perennials|shrub|shrubs|climber|climbers|alpine|alpines|herb|herbs|grasses|uk|gb|eu|bee friendly|easy to grow|great for|ideal for)$/,
      /cent(re|er)s?$/, /^knights?$/, /david ?austin/, /proven ?winners/, /colou?r ?choice/, /^colou?r$/, /plants? ?(and|&) ?life/, /www\.|\.co\.|\.com/,
      /^(height|spread|position|soil|care|flowering|flowers|plant|water|prune|feed)\b.*[:\d]/, /^(plants?|garden|gardens|nursery|nurseries|quality|collection|range|premium|grower|growers)$/
    ];
    var STOP = set('the and with in on for to of a an all into is are from this that will its it at by as or when be has have very your our can also which then than per');
    var DESC = set('flowers flowering flower blooms bloom blooming foliage leaves leaved grows growing height spread summer autumn spring winter sunny shade soil water lasting grafted stem stems petals stamens variety varieties fragrance fragrant scented colour colours color compact habit hardy plant plants planted ideal perfect suitable attractive beautiful stunning masses clusters berries fruit fruits evergreen deciduous');
    var STRIP = set('pbr pp ltr litre litres tm eu knights');
    var BOILWORDS = set('grown free peat uk gb eu in the british pot label recycle together and plant plants passport rhs for pollinators garden gardens centre centres nursery home quality');
    var TYPEWORDS = set('english shrub shrubs rose roses climbing climber rambling rambler hybrid tea floribunda patio standard bush tree trees hedging hedge perennial grass grasses fern ferns herb conifer alpine bedding plant plants collection');
    var JOINERS = set('x de la le du van von der des of the and up in');   // small words that may sit lower-case inside a name
    function set(s) { var o = Object.create(null); s.split(' ').forEach(function (w) { o[w] = 1; }); return o; }

    function analyse(line, idx) {
      var trimmed = 0;
      var words = [];
      (line.words || line.text.split(/\s+/).map(function (t) { return { t: t, c: line.conf }; })).forEach(function (w) {
        var t = w.t, cs = w.cs;
        // a trademark or registered sign is often read as one or two shaky letters stuck on the end of a word
        if (cs && cs.length === t.length && /^[A-Z][a-z]{3,}[tTrR][mM]$/.test(t) && Math.min(cs[t.length - 1], cs[t.length - 2]) < 0.9) { t = t.slice(0, -2); cs = cs.slice(0, -2); trimmed++; }
        if (cs && cs.length === t.length && t.length >= 5) {
          for (var k = t.length - 1; k >= t.length - 2; k--) {
            if (cs[k] < 0.6) {
              var head = cs.slice(0, k), ok = head.every(function (c) { return c >= 0.9; });
              if (ok && k >= 4) { t = t.slice(0, k); trimmed++; }
              break;
            }
          }
        }
        t = cleanWord(t);
        if (!t) return;
        // "BERBERISTHUNBERGII": a genus and its species word read without the space between them
        var lw = letters(t), split = null;
        if (lw.length >= 9 && lw.length === t.length) {
          for (var cut = 4; cut <= lw.length - 4 && !split; cut++) {
            if (PW.genera[lw.slice(0, cut)] && epithetOf(lw.slice(cut), true)) split = cut;
          }
        }
        if (split) { words.push({ raw: w.t, t: t.slice(0, split), c: w.c }); words.push({ raw: w.t, t: t.slice(split), c: w.c }); }
        else words.push({ raw: w.t, t: t, c: w.c });
      });
      if (words.length) {
        var f = words[0], l = words[words.length - 1];
        var opens = /^['"]/.test(f.t), closes = /['"]$/.test(l.t) && l.t.length > 1;
        var marks = (words.map(function (w) { return w.t; }).join(' ').match(/['"]/g) || []).length;
        if (marks % 2 === 1 && words.length <= 4) {          // one quote mark of a pair was lost
          if (closes && !opens) f.t = l.t.slice(-1) + f.t;
          else if (opens && !closes) l.t = l.t + f.t[0];
        }
      }
      var text = words.map(function (w) { return w.t; }).join(' ');
      var low = deaccent(text).toLowerCase();
      var nLetters = (low.match(/[a-z]/g) || []).length, nDigits = (low.match(/\d/g) || []).length;
      var L = { i: idx, line: line, words: words, text: text, low: low, n: words.length, conf: line.conf,
        size: Math.max(1, line.w - 0.8 * line.h) / Math.max(1, line.text.length), kind: 'name', genus: null, trimmed: trimmed };
      L.quoted = /^['"]/.test(text) && words.length <= 4;

      if (nLetters < 3) { L.kind = 'junk'; return L; }
      if (/[\u00a3\u20ac$]/.test(text) || nDigits / (nLetters + nDigits) > 0.35) { L.kind = 'junk'; return L; }
      for (var b = 0; b < BOILER.length; b++) if (BOILER[b].test(low)) { L.kind = 'boiler'; return L; }
      if (words.every(function (w) { return BOILWORDS[letters(w.t)] || letters(w.t).length < 2; })) { L.kind = 'boiler'; return L; }

      for (var k = 0; k < words.length; k++) {
        var g = genusOf(words[k].t, false);
        if (g) { L.genus = { at: k, name: g.name, d: 0 }; break; }
      }
      var stop = 0, desc = 0, lower = 0;
      words.forEach(function (w, j) {
        var lw = letters(w.t);
        if (STOP[lw]) stop++;
        if (DESC[lw]) desc++;
        if (j > 0 && /^[a-z]/.test(w.t)) lower++;
      });
      var lowerFrac = words.length > 1 ? lower / (words.length - 1) : 0;
      var secondIsEpithet = words.length > 1 && !!epithetOf(words[1].t, true);
      var measure = /\d\s*(cm|mm|m|ft)\b/.test(low);
      L.sentence = measure || stop >= 2 || words.length >= 7 ||
        (!L.quoted && !L.genus && !secondIsEpithet && ((words.length >= 3 && lowerFrac >= 0.5) || (words.length >= 2 && desc >= 1 && lowerFrac >= 0.5) || (stop >= 1 && desc >= 1)));
      if (L.sentence) { L.kind = 'desc'; return L; }
      if (!L.genus && words.every(function (w) { return TYPEWORDS[letters(w.t)]; })) { L.kind = 'type'; return L; }   // "English Shrub Rose"

      // A name starts with a capital or a quote mark. A line that starts lower-case is a caption,
      // a strapline or a clipped scrap of a logo, unless it is a species word on its own line.
      var first = words[0].t;
      var hasQuoted = words.length <= 4 && words.some(function (w) { return /^['"].*['"]$/.test(w.t) && w.t.length > 3; });
      if (!L.genus && !/^[A-Z'"\u00c0-\u00de]/.test(first) && !epithetOf(first, true) && !/^[a-z]{1,6}\.$/.test(first) && !hasQuoted) L.kind = 'scrap';
      return L;
    }

    function span(L) { return [L.line.u - L.line.w / 2, L.line.u + L.line.w / 2]; }
    function overlaps(A, B) { var a = span(A), b = span(B); return Math.min(a[1], b[1]) - Math.max(a[0], b[0]) > 0; }
    function hgap(A, B) { var a = span(A), b = span(B); return Math.max(a[0], b[0]) - Math.min(a[1], b[1]); }

    function titleCase(t) {
      return t.toLowerCase().replace(/(^|[\s\-'"(])([a-z\u00e0-\u00ff])/g, function (m, p, c) { return p + c.toUpperCase(); })
        .replace(/([a-z])'([A-Z])(?=[a-z]*\b)/g, function (m, a, c) { return a + "'" + c.toLowerCase(); });
    }
    function isAllCaps(t) { return /[A-Z]/.test(t) && !/[a-z]/.test(t) && letters(t).length > 1; }
    function score(x) { return x.size * (0.5 + x.conf / 2) * (x.genus && x.genus.at === 0 ? 1.15 : 1) * (x.line.turned ? 0.9 : 1); }

    // Build the name around one anchor line.
    function build(A, L) {
      var hasGenus = !!A.genus;
      var species = null, used = [A], included = [], rest = [];
      function sameGenus(x) {
        if (!hasGenus) return null;
        var target = A.genus.name.toLowerCase();
        for (var k = 0; k < x.words.length; k++) {
          var g = genusOf(x.words[k].t, true), lw = letters(x.words[k].t);
          if (g && g.name === A.genus.name) return k;
          if (lw.length >= 4 && lw.length < target.length && target.indexOf(lw) === 0) return k;                 // clipped: "Berbe"
          if (lw.length === target.length + 1 && lw.slice(1) === target) return k;                               // "ABERBERIS": passport letter stuck on
        }
        return null;
      }
      // other lines carrying the same genus are the same name printed twice (a price sticker, the plant passport)
      L.forEach(function (x) {
        if (x === A || x.kind === 'junk' || x.kind === 'boiler') return;
        var k = sameGenus(x);
        if (k !== null) {
          var nxt = x.words[k + 1];
          if (nxt && !species) { var e = epithetOf(nxt.t, true); if (e && nxt.c >= 0.6) species = e.name; }
          used.push(x);
          return;
        }
        if (x.kind !== 'name' || x.conf < 0.55) return;
        if (x.genus && hasGenus && x.genus.at === 0) return;        // a different plant's label in shot
        if (x.n === 1 && letters(x.text).length < 3) return;
        rest.push(x);
      });

      function rel(x) { return x.size / A.size; }
      function take(x) { if (included.indexOf(x) < 0) included.push(x); }
      var below = rest.filter(function (x) { return !x.line.turned && x.line.v > A.line.v + 0.35 * A.line.h; }).sort(function (a, b) { return a.line.v - b.line.v; });
      var above = rest.filter(function (x) { return !x.line.turned && x.line.v < A.line.v - 0.35 * A.line.h; }).sort(function (a, b) { return b.line.v - a.line.v; });
      var prev = A, count = 0, i, x, gap;
      for (i = 0; i < below.length && count < 3; i++) {
        x = below[i]; gap = (x.line.v - prev.line.v) / Math.max(prev.line.h, x.line.h);
        if (gap > 1.9) break;
        if (rel(x) >= 0.33 && x.n <= 5 && (overlaps(A, x) || hgap(A, x) < A.line.h)) { take(x); prev = x; count++; }
        else if (gap > 1.0) break;
      }
      prev = A; count = 0;
      for (i = 0; i < above.length && count < 2; i++) {     // trade name printed above the genus
        x = above[i]; gap = (prev.line.v - x.line.v) / Math.max(prev.line.h, x.line.h);
        if (gap > 1.7) break;
        if (rel(x) >= 0.7 && x.n <= 4 && overlaps(A, x)) { take(x); prev = x; count++; } else break;
      }
      rest.forEach(function (x) {
        var dv = Math.abs(x.line.v - A.line.v) / A.line.h;
        var alike = Math.min(x.line.h, A.line.h) / Math.max(x.line.h, A.line.h) >= 0.6;
        if (!x.line.turned && dv < 0.35 && alike && hgap(A, x) < 2 * Math.max(A.line.h, x.line.h)) take(x);   // same printed line
        else if (rel(x) >= 0.75 && x.n <= 4 && (x.line.turned || (dv <= 3 && overlaps(A, x)))) take(x);       // lettering as big as the name
        else if (x.quoted && (rel(x) >= 0.12 || x.line.h >= 0.3 * A.line.h)) take(x);                          // a cultivar in quotes
        else if (x.line.turned && x.n <= 3 && x.conf >= 0.85 && x.line.h >= 0.6 * A.line.h && letters(x.text).length >= 4) take(x);   // the variety printed down the side
      });
      included.sort(function (a, b) { return a.i - b.i; });

      var toks = [], dropped = 0;
      function push(x, from, to, strict) {
        for (var k = from; k < to; k++) {
          var w = x.words[k];
          if (w.c < 0.5 && x.words.length > 1) { dropped++; continue; }
          if (strict && (w.c < 0.8 || !/^[A-Z'"]/.test(w.t))) { dropped++; continue; }
          toks.push({ t: w.t, c: w.c, solo: x.words.length === 1 });
        }
      }
      if (hasGenus) { push(A, A.genus.at, A.words.length); push(A, 0, A.genus.at, true); } else push(A, 0, A.words.length);
      included.forEach(function (x) { push(x, 0, x.words.length); used.push(x); });

      var joined = toks.map(function (w) { return w.t; }).join(' ').replace(/\s*\([^)]*\d[^)]*\)/g, ' ');   // breeder codes in brackets
      var keep = {}; joined.split(/\s+/).forEach(function (t) { keep[t] = (keep[t] || 0) + 1; });
      toks = toks.filter(function (w) { if (keep[w.t]) { keep[w.t]--; return true; } return false; });
      var seen = {};
      toks = toks.filter(function (w, j) {
        var lw = letters(w.t), bare = w.t.replace(/[()'".]/g, '');
        if (/\d/.test(w.t)) return false;
        if (STRIP[lw]) return false;
        if (bare.length < 2 && !/^[x&]$/i.test(bare)) return false;
        if (lw === 'pot' && j === toks.length - 1) return false;
        if (lw.length > 2 && seen[lw]) return false;
        if (lw.length >= 5) for (var prevWord in seen) if (prevWord.length >= 5 && lev(lw, prevWord, 2) <= 2) return false;   // the same word read twice
        seen[lw] = 1;
        return true;
      });
      if (!toks.length) return null;

      if (hasGenus) {
        toks[0].t = A.genus.name;
        var second = toks[1] && epithetOf(toks[1].t, true);
        if (second && second.d <= 1) toks[1] = { t: second.name, c: toks[1].c, ep: true };
        else {
          var at = -1;
          for (var j = 2; j < toks.length; j++) if (toks[j].solo && epithetOf(toks[j].t, false)) { at = j; break; }
          if (at > 0) { var mv = toks.splice(at, 1)[0]; mv.t = mv.t.toLowerCase(); mv.ep = true; toks.splice(1, 0, mv); }
          else if (species) toks.splice(1, 0, { t: species, c: 0.9, ep: true });
        }
      }
      // words that look wrong for a name: lower-case starts outside a quoted cultivar
      var odd = 0, inQuote = false;
      toks.forEach(function (w, j) {
        if (/^['"]/.test(w.t)) inQuote = true;
        if (j > 0 && !w.ep && !inQuote && /^[a-z]/.test(w.t) && !JOINERS[letters(w.t)]) odd++;
        if (/['"]$/.test(w.t) && w.t.length > 1) inQuote = false;
      });
      var conf = Math.min.apply(null, toks.map(function (w) { return w.c; }));
      var trimmed = used.reduce(function (a, x) { return a + (x.trimmed || 0); }, 0);
      return { A: A, toks: toks, used: used, conf: conf, odd: odd, dropped: dropped, trimmed: trimmed, hasGenus: hasGenus,
        quality: 0.6 * Math.min(toks.length, 4) + conf - 2 * odd - 0.5 * dropped };
    }

    function pick(rawLines) {
      var L = rawLines.map(analyse);
      var names = L.filter(function (x) { return x.kind === 'name' && x.conf >= 0.55; });
      var out = { name: '', conf: 0, check: true, why: 'nothing on the label read as a name', used: [] };
      if (!names.length) return out;

      // anchors: lines carrying a known genus (exact spelling first, then near misses), else the largest lettering
      var withGenus = names.filter(function (x) { return x.genus; }), fuzzyGenus = false;
      if (!withGenus.length) {
        L.forEach(function (x) {
          if (x.kind !== 'name' && x.kind !== 'scrap') return;
          for (var k = 0; k < x.words.length && !x.genus; k++) {
            var g = genusOf(x.words[k].t, true);
            if (g) { x.genus = { at: k, name: g.name, d: g.d }; if (x.kind === 'scrap') x.kind = 'name'; }
          }
        });
        withGenus = L.filter(function (x) { return x.kind === 'name' && x.genus && x.conf >= 0.55; });
        fuzzyGenus = withGenus.length > 0;
      }
      var pool = (withGenus.length ? withGenus : names).slice().sort(function (a, b) { return score(b) - score(a); });
      var cands = [];
      pool.slice(0, withGenus.length ? 3 : 1).forEach(function (A, rank) {
        var c = build(A, L);
        if (c) { c.quality += rank === 0 ? 0.6 : 0; cands.push(c); }
      });
      if (!cands.length) return out;
      var best = cands.slice().sort(function (a, b) { return b.quality - a.quality; })[0];

      // the name printed twice, one copy cut short: take the fuller copy if it agrees with the short one
      cands.forEach(function (c) {
        if (c === best || c.odd || c.conf < 0.8 || c.toks.length <= best.toks.length) return;
        var agrees = best.toks.every(function (w) {
          var a = letters(w.t);
          return c.toks.some(function (o) { var b = letters(o.t); return a === b || (a.length >= 3 && b.indexOf(a) === 0) || (a.length >= 5 && lev(a, b, 2) <= 2); });
        });
        if (agrees) best = c;
      });

      // the same word read twice (tag and sticker): keep the clearer reading
      cands.forEach(function (c) {
        if (c === best) return;
        best.toks.forEach(function (w) {
          if (w.ep || letters(w.t).length < 5) return;
          c.toks.forEach(function (o) {
            var a = letters(w.t), b = letters(o.t);
            if (a !== b && o.c > w.c + 0.02 && lev(a, b, 2) <= 2) { w.t = o.t; w.c = o.c; }
          });
        });
      });

      var hasGenus = best.hasGenus;
      var name = best.toks.map(function (w, j) {
        if (w.ep) return w.t.toLowerCase();
        if (j === 0 && hasGenus) return w.t;
        return isAllCaps(w.t) ? titleCase(w.t) : w.t;
      }).join(' ').replace(/\s+/g, ' ').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')').trim();

      out.name = name; out.conf = Math.min.apply(null, best.toks.map(function (w) { return w.c; }));
      out.genus = hasGenus;
      var usedIdx = {}; cands.forEach(function (c) { c.used.forEach(function (x) { usedIdx[x.i] = 1; }); });
      out.used = Object.keys(usedIdx).map(Number);
      var reasons = [];
      if (!hasGenus) reasons.push('no known plant genus on the label');
      if (fuzzyGenus || (best.A.genus && best.A.genus.d > 0)) reasons.push('genus spelling was corrected');
      if (out.conf < 0.8) reasons.push('some lettering was unclear');
      if (best.dropped) reasons.push('unclear words were left out');
      if (best.odd) reasons.push('one word looks wrong');
      if (hasGenus && best.toks.length === 1) reasons.push('only the genus was found; the variety may be printed elsewhere on the label');
      out.check = reasons.length > 0; out.why = reasons.join('; ');
      return out;
    }

    return { pick: pick, analyse: analyse };
  })(typeof PlantWords !== 'undefined' ? PlantWords : require('./lexicon.js'));
  if (typeof module !== 'undefined') module.exports = NamePicker;

  // ---------- image loading ----------
  var FULL_SIDE = 4000;   // photos are decoded to at most this size
  var FIND_SIDE = 736;    // first pass: find where the lettering is and which way it runs
  var VIEW_SIDE = 2400;   // second pass: the whole photo turned level, at up to this size
  var READ_SIDE = 1280;   // text-finding size for the second pass

  async function fileToCanvas(file) {
    var src;
    try { src = await createImageBitmap(file, { imageOrientation: 'from-image' }); }
    catch (e) {
      src = await new Promise(function (resolve, reject) {
        var url = URL.createObjectURL(file), img = new Image();
        img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
        img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('this photo format could not be opened')); };
        img.src = url;
      });
    }
    var w = src.width || src.naturalWidth, h = src.height || src.naturalHeight;
    var s = Math.min(1, FULL_SIDE / Math.max(w, h));
    var c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w * s)); c.height = Math.max(1, Math.round(h * s));
    var ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(src, 0, 0, c.width, c.height);
    if (src.close) src.close();
    return c;
  }

  function makeThumb(canvas) {
    var s = Math.min(1, 360 / Math.max(canvas.width, canvas.height));
    var c = document.createElement('canvas');
    c.width = Math.round(canvas.width * s); c.height = Math.round(canvas.height * s);
    var ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(canvas, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', 0.6);
  }

  // ---------- text detection ----------
  function convexHull(pts) {
    pts.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    var cross = function (o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); };
    var lower = [], upper = [], i;
    for (i = 0; i < pts.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pts[i]) <= 0) lower.pop();
      lower.push(pts[i]);
    }
    for (i = pts.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pts[i]) <= 0) upper.pop();
      upper.push(pts[i]);
    }
    lower.pop(); upper.pop();
    return lower.concat(upper);
  }

  // Smallest rotated rectangle around a convex hull, grown outward the way PaddleOCR "unclips" boxes.
  function minRect(hull, unclip) {
    var best = null;
    for (var i = 0; i < hull.length; i++) {
      var p = hull[i], q = hull[(i + 1) % hull.length];
      var ex = q[0] - p[0], ey = q[1] - p[1], len = Math.hypot(ex, ey);
      if (!len) continue;
      ex /= len; ey /= len;
      var minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
      for (var k = 0; k < hull.length; k++) {
        var u = hull[k][0] * ex + hull[k][1] * ey, v = -hull[k][0] * ey + hull[k][1] * ex;
        if (u < minU) minU = u; if (u > maxU) maxU = u; if (v < minV) minV = v; if (v > maxV) maxV = v;
      }
      var area = (maxU - minU) * (maxV - minV);
      if (!best || area < best.area) best = { area: area, ex: ex, ey: ey, minU: minU, maxU: maxU, minV: minV, maxV: maxV };
    }
    if (!best) return null;
    var w = best.maxU - best.minU, h = best.maxV - best.minV;
    if (Math.min(w, h) < 3) return null;
    var d = (w * h * unclip) / (2 * (w + h));
    var a = best.minU - d, b = best.maxU + d, c = best.minV - d, e = best.maxV + d;
    return [[a, c], [b, c], [b, e], [a, e]].map(function (uv) {
      return [uv[0] * best.ex - uv[1] * best.ey, uv[0] * best.ey + uv[1] * best.ex];
    });
  }

  // Order corners as top-left, top-right, bottom-right, bottom-left (PaddleOCR's convention).
  function orderQuad(pts) {
    var s = pts.slice().sort(function (a, b) { return a[0] - b[0]; });
    var left = s.slice(0, 2).sort(function (a, b) { return a[1] - b[1]; });
    var right = s.slice(2).sort(function (a, b) { return a[1] - b[1]; });
    return [left[0], right[0], right[1], left[1]];
  }
  function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }

  async function detect(work, side, dilate) {
    var s = side / Math.max(work.width, work.height);
    if (s > 1) s = 1;
    var w = Math.max(32, Math.round(work.width * s / 32) * 32);
    var h = Math.max(32, Math.round(work.height * s / 32) * 32);
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(work, 0, 0, w, h);
    var px = ctx.getImageData(0, 0, w, h).data, n = w * h;
    var input = new Float32Array(3 * n);
    for (var i = 0, j = 0; i < n; i++, j += 4) {
      input[i] = (px[j + 2] / 255 - 0.485) / 0.229;          // PaddleOCR feeds blue first
      input[n + i] = (px[j + 1] / 255 - 0.456) / 0.224;
      input[2 * n + i] = (px[j] / 255 - 0.406) / 0.225;
    }
    var feeds = {}; feeds[engine.det.inputNames[0]] = new ort.Tensor('float32', input, [1, 3, h, w]);
    var out = await engine.det.run(feeds);
    var prob = out[engine.det.outputNames[0]].data;

    // threshold, then a 2x2 dilation so letters in one word join up
    var bin = new Uint8Array(n), x, y;
    for (i = 0; i < n; i++) bin[i] = prob[i] > 0.3 ? 1 : 0;
    var dil = new Uint8Array(n);
    for (y = 0; y < h; y++) for (x = 0; x < w; x++) {
      i = y * w + x;
      dil[i] = bin[i] | (x > 0 ? bin[i - 1] : 0) | (y > 0 ? bin[i - w] : 0) | (x > 0 && y > 0 ? bin[i - w - 1] : 0);
    }
    if (dilate === false) dil = bin;      // at close range the dilation glues neighbouring lines together

    // connected components
    var seen = new Uint8Array(n), stack = new Int32Array(n), quads = [];
    var sx = work.width / w, sy = work.height / h;
    for (var start = 0; start < n; start++) {
      if (!dil[start] || seen[start]) continue;
      var top = 0, count = 0, sum = 0, rows = {}, cols = {};
      stack[top++] = start; seen[start] = 1;
      while (top) {
        var cur = stack[--top], cx = cur % w, cy = (cur / w) | 0;
        count++; sum += prob[cur];
        var r = rows[cy];
        if (!r) rows[cy] = [cx, cx]; else { if (cx < r[0]) r[0] = cx; if (cx > r[1]) r[1] = cx; }
        var cl = cols[cx];
        if (!cl) cols[cx] = [cy, cy]; else { if (cy < cl[0]) cl[0] = cy; if (cy > cl[1]) cl[1] = cy; }
        for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          var nx = cx + dx, ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          var ni = ny * w + nx;
          if (dil[ni] && !seen[ni]) { seen[ni] = 1; stack[top++] = ni; }
        }
      }
      if (count < 12 || sum / count < 0.6) continue;
      var pts = [];
      for (var ry in rows) {
        var yy = +ry, rr = rows[ry];
        pts.push([rr[0], yy], [rr[1] + 1, yy], [rr[0], yy + 1], [rr[1] + 1, yy + 1]);
      }
      var rect = minRect(convexHull(pts), 1.6);
      if (!rect) continue;
      var q = orderQuad(rect.map(function (p) { return [p[0] * sx, p[1] * sy]; }));
      var qw = Math.max(dist(q[0], q[1]), dist(q[3], q[2])), qh = Math.max(dist(q[0], q[3]), dist(q[1], q[2]));
      if (Math.min(qw, qh) < 8) continue;
      var acrossBox = qw >= 1.3 * qh;
      if (qh / qw >= 1.5) { q = [q[1], q[2], q[3], q[0]]; var t = qw; qw = qh; qh = t; }   // sideways text
      var box = { q: q, w: qw, h: qh, across: acrossBox, ang: Math.atan2(q[1][1] - q[0][1], q[1][0] - q[0][0]) };
      if (dilate === false) bend(box, cols, sx, sy);
      quads.push(box);
    }
    return quads;
  }

  // A line printed on a round pot photographs as an arc. A straight box around an arc is tall and
  // mostly empty, and the lettering in it comes out small and sloping. Where a line is clearly bent,
  // fit a curve through its middle so it can be cropped along the curve instead.
  function bend(box, cols, sx, sy) {
    var xs = Object.keys(cols).map(Number).sort(function (a, b) { return a - b; });
    if (xs.length < 24) return;
    var thick = xs.map(function (x) { return cols[x][1] - cols[x][0] + 1; }).sort(function (a, b) { return a - b; });
    var T = thick[thick.length >> 1];
    var ang = Math.abs(Math.atan2(box.q[1][1] - box.q[0][1], box.q[1][0] - box.q[0][0]));
    if (ang > 0.6 || xs.length < 5 * T) return;
    // least-squares parabola through the column mid-points
    var n = xs.length, x0 = xs[0], S = [0, 0, 0, 0, 0], R = [0, 0, 0];
    xs.forEach(function (x) {
      var t = x - x0, y = (cols[x][0] + cols[x][1] + 1) / 2, t2 = t * t;
      S[0] += 1; S[1] += t; S[2] += t2; S[3] += t2 * t; S[4] += t2 * t2; R[0] += y; R[1] += y * t; R[2] += y * t2;
    });
    var m = [[S[0], S[1], S[2], R[0]], [S[1], S[2], S[3], R[1]], [S[2], S[3], S[4], R[2]]];
    for (var i = 0; i < 3; i++) {
      var piv = m[i][i]; if (Math.abs(piv) < 1e-9) return;
      for (var j = i; j < 4; j++) m[i][j] /= piv;
      for (var k = 0; k < 3; k++) if (k !== i) { var f = m[k][i]; for (j = i; j < 4; j++) m[k][j] -= f * m[i][j]; }
    }
    var c0 = m[0][3], c1 = m[1][3], c2 = m[2][3], span = xs[n - 1] - x0;
    function fit(x) { var t = x - x0; return c0 + c1 * t + c2 * t * t; }
    // thickness of the line once the curve is taken out (its envelope, as a straight box would measure it)
    var tops = xs.map(function (x) { return cols[x][0] - fit(x); }).sort(function (p, q) { return p - q; });
    var bots = xs.map(function (x) { return cols[x][1] + 1 - fit(x); }).sort(function (p, q) { return p - q; });
    var lo = tops[Math.floor(0.02 * (n - 1))], hi = bots[Math.ceil(0.98 * (n - 1))];
    var Te = Math.max(T, hi - lo), mid = (hi + lo) / 2;
    var sag = Math.abs(c2) * span * span / 4;     // how far the middle bows away from the chord between the ends
    var tilt = Math.abs(c1 + c2 * span);
    if (sag < 0.5 * Te && tilt < 0.15) return;    // straight and level enough: the plain box is fine
    var d = (span * Te * 1.6) / (2 * (span + Te)), H = 1.15 * (Te + 2 * d);
    box.curve = { x0: (x0 - 1.3 * d) * sx, x1: (xs[n - 1] + 1 + 1.3 * d) * sx, H: H * sy,
      y: function (x) { return (fit(x / sx) + mid) * sy; } };
    var yMid = box.curve.y((box.curve.x0 + box.curve.x1) / 2);
    box.q = [[box.curve.x0, yMid - H * sy / 2], [box.curve.x1, yMid - H * sy / 2], [box.curve.x1, yMid + H * sy / 2], [box.curve.x0, yMid + H * sy / 2]];
    box.w = box.curve.x1 - box.curve.x0; box.h = H * sy;
    box.ang = Math.atan((c1 + c2 * span / 2) * sy / sx);
  }

  // The text finder is far better at lettering that runs across than lettering that runs up or down,
  // so a sideways photo is also searched turned a quarter turn and the two results are combined.
  async function detectTurned(full, side) {
    var s = Math.min(1, side / Math.max(full.width, full.height));
    var ws = Math.round(full.width * s), hs = Math.round(full.height * s);
    var c = document.createElement('canvas'); c.width = hs; c.height = ws;
    var ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingQuality = 'high';
    ctx.translate(hs, 0); ctx.rotate(Math.PI / 2); ctx.drawImage(full, 0, 0, ws, hs);
    var boxes = await detect(c, side);
    c.width = c.height = 0;
    var k = full.width / ws;
    boxes.forEach(function (b) { b.q = b.q.map(function (p) { return [p[1] * k, (hs - p[0]) * k]; }); b.w *= k; b.h *= k; b.turnedPass = true; });
    return boxes;
  }
  function mass(boxes, acrossOnly) {
    return boxes.reduce(function (a, b) { return a + ((!acrossOnly || b.across) ? b.w * b.h : 0); }, 0);
  }
  async function findText(full) {
    var a = await detect(full, FIND_SIDE);
    var area = full.width * full.height;
    var across = mass(a, true), all = mass(a, false);
    if (across >= 0.025 * area && across >= 0.7 * all) return a;      // plenty of lettering running across: done
    var b = await detectTurned(full, FIND_SIDE);
    var keepB = b.filter(function (x) { return x.across && !a.some(function (y) { return y.across && inside(y.q, centre(x.q)); }); });
    var keepA = a.filter(function (y) { return y.across || !keepB.some(function (x) { return inside(x.q, centre(y.q)) || inside(y.q, centre(x.q)); }); });
    return keepA.concat(keepB);
  }

  // ---------- level and zoom ----------
  // Which way does the lettering run? Long thin boxes are the trustworthy ones.
  function mainAngle(boxes) {
    var maxArea = 0, cs = 0, sn = 0;
    boxes.forEach(function (b) { maxArea = Math.max(maxArea, b.w * b.h); });
    boxes.forEach(function (b) {
      var a = b.w * b.h; if (a < 0.15 * maxArea) return;
      if (b.w < 2 * b.h) a *= 0.3;
      var ang = Math.atan2(b.q[1][1] - b.q[0][1], b.q[1][0] - b.q[0][0]);
      cs += a * Math.cos(2 * ang); sn += a * Math.sin(2 * ang);   // doubled angle: direction without sense
    });
    return Math.atan2(sn, cs) / 2;
  }

  // The photo redrawn with the lettering level. When the label only fills part of the frame the view
  // closes in on it, with a wide margin because the first pass often misses the ends of lines.
  function planView(full, theta, rough, closeIn) {
    var ca = Math.cos(theta), sa = Math.sin(theta);
    function bounds(pts) {
      var b = [Infinity, -Infinity, Infinity, -Infinity];
      pts.forEach(function (p) {
        var x = p[0] * ca + p[1] * sa, y = -p[0] * sa + p[1] * ca;
        if (x < b[0]) b[0] = x; if (x > b[1]) b[1] = x; if (y < b[2]) b[2] = y; if (y > b[3]) b[3] = y;
      });
      return b;
    }
    var B = bounds([[0, 0], [full.width, 0], [full.width, full.height], [0, full.height]]);
    if (closeIn && rough.length) {
      var maxH = 0, pts = [];
      rough.forEach(function (r) { if (r.w >= 2 * r.h) maxH = Math.max(maxH, r.h); });
      rough.forEach(function (r) { if (r.w >= 2 * r.h && r.h >= 0.2 * maxH) pts = pts.concat(r.q); });
      if (!pts.length) pts = [[0, 0], [full.width, 0], [full.width, full.height], [0, full.height]];
      var R = bounds(pts), mx = 0.35 * (R[1] - R[0]) + 2 * maxH, my = 0.35 * (R[3] - R[2]) + 2 * maxH;
      R = [Math.max(B[0], R[0] - mx), Math.min(B[1], R[1] + mx), Math.max(B[2], R[2] - my), Math.min(B[3], R[3] + my)];
      if ((R[1] - R[0]) * (R[3] - R[2]) < 0.6 * (B[1] - B[0]) * (B[3] - B[2])) B = R;
    }
    var rw = B[1] - B[0], rh = B[3] - B[2];
    return { theta: theta, minX: B[0], minY: B[2], w: rw, h: rh, s: Math.min(1, VIEW_SIDE / Math.max(rw, rh)) };
  }

  function toView(plan, p) {
    var ca = Math.cos(plan.theta), sa = Math.sin(plan.theta);
    return [(p[0] * ca + p[1] * sa - plan.minX) * plan.s, (-p[0] * sa + p[1] * ca - plan.minY) * plan.s];
  }
  function inside(q, p) {
    for (var i = 0; i < 4; i++) {
      var a = q[i], b = q[(i + 1) % 4];
      if ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) < 0) return false;
    }
    return true;
  }
  function centre(q) { return [(q[0][0] + q[2][0]) / 2, (q[0][1] + q[2][1]) / 2]; }

  function drawView(full, plan) {
    var c = document.createElement('canvas');
    c.width = Math.max(32, Math.round(plan.w * plan.s)); c.height = Math.max(32, Math.round(plan.h * plan.s));
    var ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, c.width, c.height);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    var ca = Math.cos(plan.theta), sa = Math.sin(plan.theta), s = plan.s;
    ctx.setTransform(s * ca, -s * sa, s * sa, s * ca, -s * plan.minX, -s * plan.minY);
    ctx.drawImage(full, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return c;
  }

  // ---------- text recognition ----------
  var cropCanvas = document.createElement('canvas');
  var flipCanvas = document.createElement('canvas');

  function cropLine(work, box) {
    if (box.curve) return cropCurve(work, box);
    var q = box.q, tl = q[0];
    var ux = [(q[1][0] - tl[0]), (q[1][1] - tl[1])], ul = Math.hypot(ux[0], ux[1]) || 1;
    var uy = [(q[3][0] - tl[0]), (q[3][1] - tl[1])], vl = Math.hypot(uy[0], uy[1]) || 1;
    ux = [ux[0] / ul, ux[1] / ul]; uy = [uy[0] / vl, uy[1] / vl];
    var s = 48 / box.h;
    var W = Math.max(8, Math.min(1920, Math.ceil(box.w * s)));
    cropCanvas.width = W; cropCanvas.height = 48;
    var ctx = cropCanvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.setTransform(ux[0] * s, uy[0] * s, ux[1] * s, uy[1] * s, -(tl[0] * ux[0] + tl[1] * ux[1]) * s, -(tl[0] * uy[0] + tl[1] * uy[1]) * s);
    ctx.drawImage(work, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return cropCanvas;
  }

  function cropCurve(work, box) {
    var cv = box.curve, s = 48 / cv.H;
    var W = Math.max(8, Math.min(1920, Math.ceil((cv.x1 - cv.x0) * s)));
    cropCanvas.width = W; cropCanvas.height = 48;
    var ctx = cropCanvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, W, 48);
    var step = 4;
    for (var X = 0; X < W; X += step) {
      var sxl = cv.x0 + X / s, sw = step / s, yc = cv.y(sxl + sw / 2);
      ctx.drawImage(work, sxl, yc - cv.H / 2, sw, cv.H, X, 0, step, 48);
    }
    return cropCanvas;
  }

  function flipped(c) {
    flipCanvas.width = c.width; flipCanvas.height = c.height;
    var ctx = flipCanvas.getContext('2d', { willReadFrequently: true });
    ctx.setTransform(-1, 0, 0, -1, c.width, c.height);
    ctx.drawImage(c, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return flipCanvas;
  }

  async function readCrop(c) {
    var W = c.width, H = 48, TW = Math.max(320, W), n = H * TW;
    var px = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, W, H).data;
    var input = new Float32Array(3 * n);   // zero = the padding value PaddleOCR uses
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      var j = (y * W + x) * 4, i = y * TW + x;
      input[i] = (px[j + 2] / 255 - 0.5) / 0.5;
      input[n + i] = (px[j + 1] / 255 - 0.5) / 0.5;
      input[2 * n + i] = (px[j] / 255 - 0.5) / 0.5;
    }
    var feeds = {}; feeds[engine.rec.inputNames[0]] = new ort.Tensor('float32', input, [1, 3, H, TW]);
    var out = (await engine.rec.run(feeds))[engine.rec.outputNames[0]];
    var T = out.dims[1], C = out.dims[2], d = out.data;
    var chars = [], prev = 0;
    for (var t = 0; t < T; t++) {
      var best = 0, bv = d[t * C];
      for (var k = 1; k < C; k++) { var v = d[t * C + k]; if (v > bv) { bv = v; best = k; } }
      if (best !== 0 && best !== prev) chars.push([best < DICT.length ? DICT[best] : ' ', bv]);
      prev = best;
    }
    // words, each with its own confidence, so a shaky fragment can be dropped without losing the line
    var words = [], cur = null, sum = 0;
    chars.forEach(function (ch) {
      sum += ch[1];
      if (/\s/.test(ch[0])) { cur = null; return; }
      if (!cur) { cur = { t: '', c: 0, n: 0, cs: [] }; words.push(cur); }
      cur.t += ch[0]; cur.c += ch[1]; cur.n++; cur.cs.push(Math.round(ch[1] * 100) / 100);
    });
    words.forEach(function (w) { w.c = w.c / w.n; delete w.n; });
    return { text: words.map(function (w) { return w.t; }).join(' '), conf: chars.length ? sum / chars.length : 0, words: words };
  }

  function letterCount(s) { var m = s.match(/\p{L}/gu); return m ? m.length : 0; }

  function worth(r) { return r.conf * Math.min(12, letterCount(r.text)); }

  async function readBothWays(work, box) {
    var c = cropLine(work, box);
    var a = await readCrop(c); a.flip = false;
    var b = await readCrop(flipped(c)); b.flip = true;
    box.both = [a, b];
    return box.both;
  }

  // Is the levelled view the right way up? Read its biggest lines both ways and see which makes more sense.
  async function upsideDown(work, boxes) {
    var big = boxes.filter(function (b) { return b.w >= 2 * b.h; }).sort(function (p, q) { return q.w * q.h - p.w * p.h; }).slice(0, 3);
    var up = 0, down = 0;
    for (var i = 0; i < big.length; i++) { var r = await readBothWays(work, big[i]); up += worth(r[0]); down += worth(r[1]); }
    return down > up * 1.05;
  }

  async function readLine(work, box, down) {
    var a, b;
    if ((box.fromFirst || box.fromSide) && !box.both) {
      // lettering running across the label: its direction is anyone's guess, so read it both ways and keep the fuller result
      var two = await readBothWays(work, box);
      return worth(two[1]) > worth(two[0]) ? two[1] : two[0];
    }
    if (box.both) { a = box.both[down ? 1 : 0]; b = box.both[down ? 0 : 1]; }
    else {
      var c = cropLine(work, box);
      a = await readCrop(down ? flipped(c) : c); a.flip = !!down;
      if (a.conf >= 0.8 && letterCount(a.text) >= 3) return a;
      b = await readCrop(down ? cropLine(work, box) : flipped(c)); b.flip = !down;   // this line may run the other way
    }
    if (a.conf >= 0.8 && letterCount(a.text) >= 3) return a;
    return (b.conf > a.conf + 0.05 && letterCount(b.text) >= letterCount(a.text)) || worth(b) > 2 * worth(a) ? b : a;
  }

  // ---------- lay the lines out in reading order ----------
  function layout(lines) {
    if (!lines.length) return lines;
    var wsum = 0, sxs = 0, sys = 0, flipW = 0;
    lines.forEach(function (l) {
      var q = l.box.q; sxs += (q[1][0] - q[0][0]); sys += (q[1][1] - q[0][1]); wsum += l.box.w;
      if (l.flip) flipW += l.box.w;
    });
    var ang = Math.atan2(sys, sxs);
    if (flipW > wsum / 2) ang += Math.PI;      // most lettering only made sense upside down: read bottom-up
    var ca = Math.cos(ang), sa = Math.sin(ang);
    lines.forEach(function (l) {
      var q = l.box.q, cx = (q[0][0] + q[2][0]) / 2, cy = (q[0][1] + q[2][1]) / 2;
      l.u = cx * ca + cy * sa; l.v = -cx * sa + cy * ca; l.w = l.box.w; l.h = l.box.h;
      // how far this line's own direction is from the label's main direction (0 = same way, 2 = opposite)
      var dx = q[1][0] - q[0][0], dy = q[1][1] - q[0][1], dl = Math.hypot(dx, dy) || 1;
      var along = (dx * ca + dy * sa) / dl * (l.flip ? -1 : 1);
      l.turned = Math.abs(along) < 0.7 ? 1 : (along < 0 ? 2 : 0);
    });
    var sorted = lines.slice().sort(function (a, b) { return a.v - b.v; }), rows = [], row = null;
    sorted.forEach(function (l) {
      if (row && Math.abs(l.v - row.v) < 0.5 * Math.max(l.h, row.h)) row.items.push(l);
      else { row = { v: l.v, h: l.h, items: [l] }; rows.push(row); }
    });
    var out = [];
    rows.forEach(function (r) {
      r.items.sort(function (a, b) { return a.u - b.u; });
      // pieces of one printed line that were found separately are joined back together
      var merged = [];
      r.items.forEach(function (l) {
        var p = merged[merged.length - 1];
        var gap = p ? (l.u - l.w / 2) - (p.u + p.w / 2) : Infinity;
        var alike = p && Math.min(p.h, l.h) / Math.max(p.h, l.h) >= 0.6 && p.turned === l.turned;
        if (p && alike && gap < 1.2 * Math.max(p.h, l.h)) {
          var left = p.u - p.w / 2, right = l.u + l.w / 2, n1 = p.text.length, n2 = l.text.length;
          p.conf = (p.conf * n1 + l.conf * n2) / Math.max(1, n1 + n2);
          p.text = p.text + ' ' + l.text; p.words = p.words.concat(l.words);
          p.u = (left + right) / 2; p.w = right - left; p.v = (p.v + l.v) / 2; p.h = Math.max(p.h, l.h);
        } else merged.push(l);
      });
      out = out.concat(merged);
    });
    return out;
  }

  // ---------- one photo, start to finish ----------
  async function attempt(full, rough, theta, smallPrint, closeIn) {
    var plan = planView(full, theta, rough, closeIn), view = drawView(full, plan);
    await pause();
    // tallest lettering, judged from long thin boxes only (a photo of flowers can throw up one huge false box)
    var maxH = 0; rough.forEach(function (r) { if (r.w >= 2.5 * r.h) maxH = Math.max(maxH, r.h); });
    // size this pass so the tallest lettering lands near 52 px: big enough to read, small enough to be quick
    var longSide = Math.max(view.width, view.height);
    var side = maxH ? Math.max(736, Math.min(READ_SIDE, Math.round(longSide * 52 / (maxH * plan.s)))) : READ_SIDE;
    var boxes = await detect(view, side, false);
    // lettering the first pass found but this pass lost or only caught a piece of (usually text running another way)
    rough.forEach(function (r) {
      if (r.h < 0.2 * maxH || r.w < 1.5 * r.h) return;
      var q = r.q.map(function (p) { return toView(plan, p); });
      var w = r.w * plan.s, h = r.h * plan.s;
      var within = boxes.filter(function (b) { return inside(q, centre(b.q)); });
      var over = boxes.some(function (b) { return inside(b.q, centre(q)); });
      var offAxis = Math.abs(Math.sin(Math.atan2(q[1][1] - q[0][1], q[1][0] - q[0][0]))) > 0.5;
      var got = within.reduce(function (a, b) { return a + b.w * b.h; }, 0);
      if (!within.length && !over) boxes.push({ q: q, w: w, h: h, fromFirst: true });
      else if (offAxis && got < 0.9 * w * h) {
        boxes = boxes.filter(function (b) { return within.indexOf(b) < 0; });
        boxes.push({ q: q, w: w, h: h, fromFirst: true });
      }
    });
    var found = boxes.length;
    boxes.sort(function (a, b) { return b.h - a.h; });
    if (!smallPrint && boxes.length) { var tall = boxes[0].h; boxes = boxes.filter(function (b) { return b.h >= 0.28 * tall; }); }
    boxes = boxes.slice(0, smallPrint ? ALL_TEXT_BOXES : NAME_ONLY_BOXES);
    var lines = [], down = await upsideDown(view, boxes);
    for (var i = 0; i < boxes.length; i++) {
      var r = await readLine(view, boxes[i], down);
      if (r.text && r.conf >= 0.5) lines.push({ text: r.text, conf: r.conf, words: r.words, flip: r.flip, box: boxes[i] });
      if (i % 3 === 2) await pause();
    }
    // how far off level the confidently read lines still are
    var cs = 0, sn = 0, sure = 0;
    lines.forEach(function (l) {
      if (l.conf < 0.8 || letterCount(l.text) < 4 || l.box.fromFirst || l.box.fromSide || l.box.ang === undefined) return;
      cs += l.box.w * Math.cos(2 * l.box.ang); sn += l.box.w * Math.sin(2 * l.box.ang); sure++;
    });
    var residual = sure ? Math.atan2(sn, cs) / 2 : 0;
    var laid = layout(lines).map(function (l) {
      return { text: l.text, conf: l.conf, words: l.words, u: l.u, v: l.v, w: l.w, h: l.h, turned: l.turned };
    });
    var picked = NamePicker.pick(laid);
    var quality = (picked.name ? 1 : 0) + (picked.genus ? 1 : 0) + (picked.name ? picked.conf : 0) + 0.1 * Math.min(5, sure);
    var viewUrl = null;
    if (window.__keepView) {
      var vctx = view.getContext('2d'); vctx.lineWidth = 4;
      vctx.strokeStyle = '#ffe600'; vctx.setLineDash([8, 6]);
      rough.forEach(function (r) { vctx.beginPath(); r.q.map(function (p) { return toView(plan, p); }).forEach(function (p, i) { if (i) vctx.lineTo(p[0], p[1]); else vctx.moveTo(p[0], p[1]); }); vctx.closePath(); vctx.stroke(); });
      vctx.setLineDash([]);
      boxes.forEach(function (b) { vctx.strokeStyle = b.fromFirst ? '#00e5ff' : (b.curve ? '#35ff6b' : '#ff2d75'); vctx.beginPath(); b.q.forEach(function (p, i) { if (i) vctx.lineTo(p[0], p[1]); else vctx.moveTo(p[0], p[1]); }); vctx.closePath(); vctx.stroke(); });
      viewUrl = view.toDataURL('image/jpeg', 0.6);
    }
    view.width = view.height = 0;
    return { picked: picked, lines: laid, residual: residual, sure: sure, quality: quality, found: found, theta: theta, viewUrl: viewUrl, side: side, scale: plan.s };
  }

  async function scanPhoto(file, smallPrint) {
    var full = await fileToCanvas(file);
    var thumb = makeThumb(full);
    await pause();
    var t0 = performance.now();
    var rough = await findText(full);
    var theta = rough.length ? mainAngle(rough) : 0;
    var best = await attempt(full, rough, theta, smallPrint, true), tries = 1;
    var offLevel = Math.abs(best.residual) > 0.14;      // about 8 degrees
    var weak = !best.picked.name || (!best.picked.genus && best.picked.conf < 0.85);
    if (offLevel || weak) {
      // a second look: straighten by what was actually read, or failing that try a quarter turn
      var theta2 = (offLevel && best.sure) ? theta + best.residual : theta + Math.PI / 2;
      var again = await attempt(full, rough, theta2, smallPrint, false); tries = 2;
      if (again.quality > best.quality + 0.05) best = again;
    }
    var ms = Math.round(performance.now() - t0);
    full.width = full.height = 0;
    var picked = best.picked, lines = best.lines;
    var other = lines.filter(function (l, i) { return picked.used.indexOf(i) < 0; }).map(function (l) { return l.text; });
    return { thumb: thumb, name: picked.name, conf: picked.conf, check: picked.check, why: picked.why, other: other,
      detMs: ms, boxes: best.found, tries: tries, side: best.side, viewUrl: best.viewUrl, turnedDeg: Math.round(best.theta * 180 / Math.PI), zoom: +best.scale.toFixed(2), lines: lines };
  }

  window.TimberLabelScanner = {
    ensure: ensureEngine,
    scan: function (file, smallPrint) { return ensureEngine().then(function () { return scanPhoto(file, !!smallPrint); }); },
    set onProgress(fn) { progress = typeof fn === 'function' ? fn : function () {}; }
  };
})();
