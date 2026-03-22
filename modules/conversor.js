/* ══════════════════════════════════════════════
   BeeSublime — Conversor de Unidades Module
   ══════════════════════════════════════════════ */

registerModule('conversor', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Conversor de Unidades</h3>',
    '<p class="muted">Herramientas rapidas para convertir longitudes, areas, pesos, temperaturas y pixeles&harr;tamano fisico (DPI). Todo en un mismo lugar.</p>',
    '<div class="sep"></div>',
    '</div>',

    /* Longitud */
    '<div class="card md-6">',
    '<h4 style="margin:0 0 8px">Longitud</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:140px"><label>Valor</label><input id="len_val" step="0.0001" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:160px"><label>De</label>',
    '<select id="len_from"><option value="mm">mm</option><option selected value="cm">cm</option><option value="m">m</option><option value="in">in</option><option value="ft">ft</option><option value="yd">yd</option></select></div>',
    '<div style="flex:1;min-width:160px"><label>A</label>',
    '<select id="len_to"><option value="mm">mm</option><option value="cm">cm</option><option value="m">m</option><option selected value="in">in</option><option value="ft">ft</option><option value="yd">yd</option></select></div>',
    '<div style="flex:1;min-width:180px"><label>Resultado</label><input class="ud" id="len_out" readonly type="text"/></div>',
    '</div></div>',

    /* Area */
    '<div class="card md-6">',
    '<h4 style="margin:0 0 8px">Area</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:140px"><label>Valor</label><input id="area_val" step="0.0001" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:160px"><label>De</label>',
    '<select id="area_from"><option selected value="cm2">cm&sup2;</option><option value="m2">m&sup2;</option><option value="in2">in&sup2;</option><option value="ft2">ft&sup2;</option></select></div>',
    '<div style="flex:1;min-width:160px"><label>A</label>',
    '<select id="area_to"><option value="cm2">cm&sup2;</option><option value="m2">m&sup2;</option><option value="in2">in&sup2;</option><option selected value="ft2">ft&sup2;</option></select></div>',
    '<div style="flex:1;min-width:180px"><label>Resultado</label><input class="ud" id="area_out" readonly type="text"/></div>',
    '</div></div>',

    /* Peso */
    '<div class="card md-6">',
    '<h4 style="margin:0 0 8px">Peso</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:140px"><label>Valor</label><input id="mass_val" step="0.0001" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:160px"><label>De</label>',
    '<select id="mass_from"><option selected value="g">g</option><option value="kg">kg</option><option value="lb">lb</option><option value="oz">oz</option></select></div>',
    '<div style="flex:1;min-width:160px"><label>A</label>',
    '<select id="mass_to"><option value="g">g</option><option value="kg">kg</option><option selected value="lb">lb</option><option value="oz">oz</option></select></div>',
    '<div style="flex:1;min-width:180px"><label>Resultado</label><input class="ud" id="mass_out" readonly type="text"/></div>',
    '</div></div>',

    /* Temperatura */
    '<div class="card md-6">',
    '<h4 style="margin:0 0 8px">Temperatura</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:140px"><label>Valor</label><input id="tmp_val" step="0.01" type="number" value="0"/></div>',
    '<div style="flex:1;min-width:160px"><label>De</label>',
    '<select id="tmp_from"><option selected value="C">&deg;C</option><option value="F">&deg;F</option><option value="K">K</option></select></div>',
    '<div style="flex:1;min-width:160px"><label>A</label>',
    '<select id="tmp_to"><option value="C">&deg;C</option><option selected value="F">&deg;F</option><option value="K">K</option></select></div>',
    '<div style="flex:1;min-width:180px"><label>Resultado</label><input class="ud" id="tmp_out" readonly type="text"/></div>',
    '</div></div>',

    /* Pixeles <-> DPI */
    '<div class="card md-12">',
    '<h4 style="margin:0 0 8px">Pixeles &harr; Tamano fisico (DPI)</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:140px"><label>Anchura (cm)</label><input id="dpi_w_cm" step="0.01" type="number" value="10"/></div>',
    '<div style="flex:1;min-width:140px"><label>Altura (cm)</label><input id="dpi_h_cm" step="0.01" type="number" value="10"/></div>',
    '<div style="flex:1;min-width:140px"><label>DPI</label><input id="dpi_dpi" step="1" type="number" value="300"/></div>',
    '<div style="flex:1;min-width:180px"><label>Salida (px)</label><input class="ud" id="dpi_px_out" readonly type="text"/></div>',
    '</div>',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap;margin-top:8px">',
    '<div style="flex:1;min-width:140px"><label>Anchura (px)</label><input id="px_w" step="1" type="number" value="1181"/></div>',
    '<div style="flex:1;min-width:140px"><label>Altura (px)</label><input id="px_h" step="1" type="number" value="1181"/></div>',
    '<div style="flex:1;min-width:140px"><label>DPI</label><input id="px_dpi" step="1" type="number" value="300"/></div>',
    '<div style="flex:1;min-width:220px"><label>Salida (cm)</label><input class="ud" id="px_cm_out" readonly type="text"/></div>',
    '</div>',
    '<p class="muted" style="margin-top:6px">Formulas: px = cm &times; (DPI / 2.54); cm = px &times; (2.54 / DPI).</p>',
    '</div>',
    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id); };

    function fmtR(x) {
      if (Number.isNaN(x) || !isFinite(x)) return '\u2014';
      return (Math.round(x * 10000) / 10000).toString();
    }

    // ---- Longitud ----
    var lenVal  = $('len_val');
    var lenFrom = $('len_from');
    var lenTo   = $('len_to');
    var lenOut  = $('len_out');
    var lenFactors = { mm: 0.1, cm: 1, m: 100, 'in': 2.54, ft: 30.48, yd: 91.44 };

    function updLen() {
      var v   = parseFloat(lenVal.value || '0');
      var cm  = v * (lenFactors[lenFrom.value] || 1);
      var res = cm / (lenFactors[lenTo.value] || 1);
      lenOut.value = fmtR(res);
    }
    ['input', 'change'].forEach(function(evt) {
      if (lenVal)  lenVal.addEventListener(evt, updLen);
      if (lenFrom) lenFrom.addEventListener(evt, updLen);
      if (lenTo)   lenTo.addEventListener(evt, updLen);
    });

    // ---- Area ----
    var areaVal  = $('area_val');
    var areaFrom = $('area_from');
    var areaTo   = $('area_to');
    var areaOut  = $('area_out');
    var areaFactors = { cm2: 1, m2: 10000, in2: 6.4516, ft2: 929.0304 };

    function updArea() {
      var v   = parseFloat(areaVal.value || '0');
      var cm2 = v * (areaFactors[areaFrom.value] || 1);
      var res = cm2 / (areaFactors[areaTo.value] || 1);
      areaOut.value = fmtR(res);
    }
    ['input', 'change'].forEach(function(evt) {
      if (areaVal)  areaVal.addEventListener(evt, updArea);
      if (areaFrom) areaFrom.addEventListener(evt, updArea);
      if (areaTo)   areaTo.addEventListener(evt, updArea);
    });

    // ---- Peso ----
    var massVal  = $('mass_val');
    var massFrom = $('mass_from');
    var massTo   = $('mass_to');
    var massOut  = $('mass_out');
    var massFactors = { g: 1, kg: 1000, lb: 453.59237, oz: 28.349523125 };

    function updMass() {
      var v   = parseFloat(massVal.value || '0');
      var g   = v * (massFactors[massFrom.value] || 1);
      var res = g / (massFactors[massTo.value] || 1);
      massOut.value = fmtR(res);
    }
    ['input', 'change'].forEach(function(evt) {
      if (massVal)  massVal.addEventListener(evt, updMass);
      if (massFrom) massFrom.addEventListener(evt, updMass);
      if (massTo)   massTo.addEventListener(evt, updMass);
    });

    // ---- Temperatura ----
    var tmpVal  = $('tmp_val');
    var tmpFrom = $('tmp_from');
    var tmpTo   = $('tmp_to');
    var tmpOut  = $('tmp_out');

    function toK(v, u) {
      if (u === 'C') return v + 273.15;
      if (u === 'F') return (v - 32) * 5 / 9 + 273.15;
      return v; // K
    }
    function fromK(k, u) {
      if (u === 'C') return k - 273.15;
      if (u === 'F') return (k - 273.15) * 9 / 5 + 32;
      return k; // K
    }
    function updTmp() {
      var v   = parseFloat(tmpVal.value || '0');
      var K   = toK(v, tmpFrom.value);
      var res = fromK(K, tmpTo.value);
      tmpOut.value = fmtR(res);
    }
    ['input', 'change'].forEach(function(evt) {
      if (tmpVal)  tmpVal.addEventListener(evt, updTmp);
      if (tmpFrom) tmpFrom.addEventListener(evt, updTmp);
      if (tmpTo)   tmpTo.addEventListener(evt, updTmp);
    });

    // ---- DPI: cm -> px ----
    var dpiWcm  = $('dpi_w_cm');
    var dpiHcm  = $('dpi_h_cm');
    var dpiDpi  = $('dpi_dpi');
    var dpiPxOut = $('dpi_px_out');

    function updPx() {
      var wcm = parseFloat(dpiWcm.value || '0');
      var hcm = parseFloat(dpiHcm.value || '0');
      var dpi = parseFloat(dpiDpi.value || '0');
      var pxf = dpi / 2.54;
      var pW  = Math.round(wcm * pxf);
      var pH  = Math.round(hcm * pxf);
      dpiPxOut.value = (isFinite(pW) && isFinite(pH)) ? pW + ' \u00d7 ' + pH : '\u2014';
    }
    ['input', 'change'].forEach(function(evt) {
      if (dpiWcm)  dpiWcm.addEventListener(evt, updPx);
      if (dpiHcm)  dpiHcm.addEventListener(evt, updPx);
      if (dpiDpi)  dpiDpi.addEventListener(evt, updPx);
    });

    // ---- DPI: px -> cm ----
    var pxW    = $('px_w');
    var pxH    = $('px_h');
    var pxDpi  = $('px_dpi');
    var pxCmOut = $('px_cm_out');

    function updCm() {
      var w   = parseFloat(pxW.value || '0');
      var h   = parseFloat(pxH.value || '0');
      var dpi = parseFloat(pxDpi.value || '0');
      var cmf = 2.54 / dpi;
      var cmW = w * cmf;
      var cmH = h * cmf;
      pxCmOut.value = (isFinite(cmW) && isFinite(cmH)) ? fmtR(cmW) + ' \u00d7 ' + fmtR(cmH) : '\u2014';
    }
    ['input', 'change'].forEach(function(evt) {
      if (pxW)   pxW.addEventListener(evt, updCm);
      if (pxH)   pxH.addEventListener(evt, updCm);
      if (pxDpi) pxDpi.addEventListener(evt, updCm);
    });

    // Initial calculations
    if (lenVal)  updLen();
    if (areaVal) updArea();
    if (massVal) updMass();
    if (tmpVal)  updTmp();
    if (dpiWcm)  updPx();
    if (pxW)     updCm();
  }
});
