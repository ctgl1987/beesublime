/* ══════════════════════════════════════════════
   BeeSublime — Empaques Module
   ══════════════════════════════════════════════ */
registerModule('empaques', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '  <h3 style="margin:0 0 6px">Cálculo de costos — Empaques</h3>',
    '  <div class="sep"></div>',
    '</div>',

    /* ── Costos directos ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Costos directos</h4>',

    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="emp_caja_on" type="checkbox"/> Caja</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_caja_cant" min="0" step="1" type="number" value="50"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_caja_precio" min="0" step="0.01" type="number" value="20"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_caja_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_caja_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_caja_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:8px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="emp_bolsa_on" type="checkbox"/> Bolsa</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_bolsa_cant" min="0" step="1" type="number" value="100"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_bolsa_precio" min="0" step="0.01" type="number" value="12"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_bolsa_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_bolsa_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_bolsa_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:8px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="emp_relleno_on" type="checkbox"/> Relleno / Protección</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_relleno_cant" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_relleno_precio" min="0" step="0.01" type="number" value="5"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_relleno_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_relleno_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_relleno_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:8px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="emp_etiqueta_on" type="checkbox"/> Etiqueta</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_etiqueta_cant" min="0" step="1" type="number" value="100"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_etiqueta_precio" min="0" step="0.01" type="number" value="8"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_etiqueta_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_etiqueta_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_etiqueta_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:8px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="emp_tarjeta_on" type="checkbox"/> Tarjeta de agradecimiento</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_tarjeta_cant" min="0" step="1" type="number" value="50"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_tarjeta_precio" min="0" step="0.01" type="number" value="6"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_tarjeta_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_tarjeta_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_tarjeta_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:8px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="emp_cinta_on" type="checkbox"/> Cinta adhesiva</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="emp_cinta_cant" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="emp_cinta_precio" min="0" step="0.01" type="number" value="2"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="emp_cinta_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="emp_cinta_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_cinta_used" readonly type="text"/></div>',
    '  </div>',
    '</div>',

    /* ── Depreciación ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Depreciación <span class="muted">(opcional)</span></h4>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="emp_impresora_on" type="checkbox"/> Impresora de etiquetas</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="emp_impresora_precio" min="0" step="0.01" type="number" value="200"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="emp_impresora_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="emp_impresora_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="emp_impresora_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="emp_impresora_used" readonly type="text"/></div>',
    '  </div>',
    '</div>',

    /* ── Costos indirectos ── */
    '<div class="card md-12 indA-card" id="emp_ind_card">',
    '  <h4>Costos indirectos</h4>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <label style="display:flex;align-items:center;gap:8px;margin:0"><input id="emp_ind_on" type="checkbox"/> Activar</label>',
    '    <div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="emp_ind_ud">$ 0,00</span></div>',
    '    <div style="margin-left:auto"><button class="btn" id="emp_ind_cfg_btn">Configurar</button></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div id="emp_ind_cfg" style="display:none">',
    '    <div class="row" style="gap:14px;flex-wrap:wrap">',
    '      <div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="emp_ind_alquiler" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="emp_ind_internet" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="emp_ind_suscripciones" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="emp_ind_transporte" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="emp_ind_electricidad" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="emp_ind_publicidad" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="emp_ind_otros" type="text" value="0,00"/></div>',
    '      <div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="emp_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '    </div>',
    '  </div>',
    '</div>',

    /* ── Totales / MO / GI ── */
    '<div class="card md-12" id="emp_totales_card">',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Total directos: <span class="result" id="emp_total_directos">$0.00</span></div>',
    '    <div class="pill">Total depreciación: <span class="result" id="emp_total_depr">$0.00</span></div>',
    '    <div class="pill">Total sin G/I: <span class="result" id="emp_subtotal_no_gi">$0.00</span></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '    <label style="display:flex;align-items:center;gap:8px;margin:0"><input id="emp_mo_on" type="checkbox"/> Mano de obra</label>',
    '    <button class="copy-btn" id="emp_mo_cfg_btn" type="button">Configurar</button>',
    '  </div>',
    '  <div class="row" id="emp_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '    <div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="emp_mo_sueldo" type="text" value="400,00"/></div>',
    '    <div style="min-width:160px"><label>Horas al mes</label><input id="emp_mo_horas_mes" type="text" value="176"/></div>',
    '    <div style="min-width:140px"><label>Setup (min)</label><input id="emp_mo_setup" type="text" value="5,00"/></div>',
    '    <div style="min-width:180px"><label>Ejecución (min/ud)</label><input id="emp_mo_run" type="text" value="2,00"/></div>',
    '    <div style="min-width:140px"><label>Unidades</label><input id="emp_mo_units" type="text" value="1"/></div>',
    '  </div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '    <div class="pill" id="emp_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="emp_mo_val">$ 0,00</span></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:160px"><label><input checked id="emp_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="emp_ganancia" min="0" step="1" type="number" value="30"/></div>',
    '    <div style="flex:1;min-width:160px"><label><input checked id="emp_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="emp_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '  </div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Subtotal: <span class="result" id="emp_subtotal">$0.00</span></div>',
    '    <div class="pill">+ Ganancia: <span class="result" id="emp_ganancia_val">$0.00</span></div>',
    '    <div class="pill">+ Impuestos: <span class="result" id="emp_impuestos_val">$0.00</span></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="tot">Precio de Venta: <span class="result" id="emp_total">$0.00</span></div>',
    '  <div class="center-actions">',
    '    <button class="copy-btn" id="btn_print_emp">Exportar a PDF / Imprimir</button>',
    '    <button class="copy-btn" id="btn_copy_emp">Copiar</button>',
    '    <button class="btn reset" id="btn_reset_emp">Reset</button>',
    '  </div>',
    '</div>',

    /* ── Cantidad de productos ── */
    '<div class="card md-12" id="emp_qty_card">',
    '  <h4 style="margin:0 0 10px">Cantidad de productos</h4>',
    '  <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0"><input type="checkbox" id="emp_qty_on"><span>Activar cantidad de productos</span></label>',
    '    <input type="number" id="emp_qty" min="1" step="1" value="1" style="max-width:100px">',
    '    <span class="muted">Multiplica los totales de Empaques por la cantidad Q (solo vista, no cambia los cálculos base).</span>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I ×Q</span> <span class="result mono" id="emp_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal ×Q</span> <span class="result mono" id="emp_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia ×Q</span> <span class="result mono" id="emp_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos ×Q</span> <span class="result mono" id="emp_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total ×Q</span> <span class="result mono" id="emp_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };
    var $span = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };

    function setText(id, n) { var el = $(id); if (el) el.value = fmtUSD(n); }
    function setSpan(id, n) { var el = $span(id); if (el) el.textContent = fmtUSD(n); }
    function valNum(id) { var el = $(id); var v = el ? numVal(el.value) : 0; return v < 0 ? 0 : v; }
    function unitCost(precio, cant) { return (!precio || !cant) ? 0 : precio / cant; }
    function safe(n) { n = Number(n); return (isFinite(n) && n >= 0) ? n : 0; }

    // --- Mano de obra ---
    function calcMO() {
      var on = $('emp_mo_on') && $('emp_mo_on').checked;
      var pill = $('emp_mo_pill');
      if (!on) { if (pill) pill.style.display = 'none'; return 0; }
      var sueldo  = parseEU($('emp_mo_sueldo') ? $('emp_mo_sueldo').value : '0');
      var horasMes = parseEU($('emp_mo_horas_mes') ? $('emp_mo_horas_mes').value : '176') || 176;
      var setup   = parseEU($('emp_mo_setup') ? $('emp_mo_setup').value : '0');
      var run     = parseEU($('emp_mo_run') ? $('emp_mo_run').value : '0');
      var units   = parseEU($('emp_mo_units') ? $('emp_mo_units').value : '1') || 1;
      var tarifaH = horasMes > 0 ? (sueldo / horasMes) : 0;
      var totalMin = setup + run * units;
      var costo = (tarifaH * (totalMin / 60)) / units;
      var valEl = $('emp_mo_val');
      if (valEl) valEl.textContent = fmtUSD(costo);
      if (pill) pill.style.display = 'inline-flex';
      return costo;
    }

    // --- Indirectos ---
    var indFields = ['emp_ind_alquiler','emp_ind_internet','emp_ind_suscripciones','emp_ind_transporte','emp_ind_electricidad','emp_ind_publicidad','emp_ind_otros'];

    function calcIndirectos() {
      var on = $('emp_ind_on') && $('emp_ind_on').checked;
      var units = Math.max(1, parseInt(($('emp_ind_units') ? $('emp_ind_units').value : '100'), 10) || 100);
      var sumMensual = 0;
      indFields.forEach(function(id) { var el = $(id); if (el) sumMensual += parseEU(el.value); });
      var ud = sumMensual / units;
      var outEl = $('emp_ind_ud');
      if (outEl) outEl.textContent = fmtUSD(on ? ud : 0);
      return on ? ud : 0;
    }

    // --- Main update ---
    function update() {
      function directRow(chk, cantId, precioId, udId, useId, usedId) {
        var ud = safe(unitCost(valNum(precioId), valNum(cantId)));
        setText(udId, ud);
        var use = safe(valNum(useId));
        var used = safe(ud * use);
        setText(usedId, used);
        return $(chk) && $(chk).checked ? used : 0;
      }

      var totalDirectos =
        directRow('emp_caja_on',     'emp_caja_cant',     'emp_caja_precio',     'emp_caja_ud',     'emp_caja_use',     'emp_caja_used') +
        directRow('emp_bolsa_on',    'emp_bolsa_cant',    'emp_bolsa_precio',    'emp_bolsa_ud',    'emp_bolsa_use',    'emp_bolsa_used') +
        directRow('emp_relleno_on',  'emp_relleno_cant',  'emp_relleno_precio',  'emp_relleno_ud',  'emp_relleno_use',  'emp_relleno_used') +
        directRow('emp_etiqueta_on', 'emp_etiqueta_cant', 'emp_etiqueta_precio', 'emp_etiqueta_ud', 'emp_etiqueta_use', 'emp_etiqueta_used') +
        directRow('emp_tarjeta_on',  'emp_tarjeta_cant',  'emp_tarjeta_precio',  'emp_tarjeta_ud',  'emp_tarjeta_use',  'emp_tarjeta_used') +
        directRow('emp_cinta_on',    'emp_cinta_cant',    'emp_cinta_precio',    'emp_cinta_ud',    'emp_cinta_use',    'emp_cinta_used');
      setSpan('emp_total_directos', safe(totalDirectos));

      // Depreciation
      var precio = safe(valNum('emp_impresora_precio'));
      var mes = safe(precio / 24);
      var udE = safe(mes / 100);
      setText('emp_impresora_mes', mes);
      setText('emp_impresora_ud', udE);
      var usesE = safe(valNum('emp_impresora_use'));
      var usedE = safe(udE * usesE);
      setText('emp_impresora_used', usedE);
      var dep = ($('emp_impresora_on') && $('emp_impresora_on').checked) ? usedE : 0;
      setSpan('emp_total_depr', safe(dep));

      // Indirectos + MO
      var indUd = calcIndirectos();
      var moUd = calcMO();
      var subtotal = safe(totalDirectos + dep + indUd + moUd);
      setSpan('emp_subtotal_no_gi', subtotal);

      // G/I
      var g = Math.max(0, numVal($('emp_ganancia') ? $('emp_ganancia').value : '0')) / 100;
      var i = Math.max(0, numVal($('emp_impuestos') ? $('emp_impuestos').value : '0')) / 100;
      var ganVal = $('emp_chk_ganancia') && $('emp_chk_ganancia').checked ? subtotal * g : 0;
      var subMasGan = subtotal + ganVal;
      var impVal = $('emp_chk_impuestos') && $('emp_chk_impuestos').checked ? subMasGan * i : 0;
      var total = subMasGan + impVal;

      setSpan('emp_subtotal', subtotal);
      setSpan('emp_ganancia_val', ganVal);
      setSpan('emp_impuestos_val', impVal);
      setSpan('emp_total', total);

      recalcQty();
      if (typeof window.resumen_update === 'function') window.resumen_update();
    }

    // --- Qty card ---
    function recalcQty() {
      var qtyOn = $('emp_qty_on');
      var qtyInput = $('emp_qty');
      if (!qtyOn || !qtyInput) return;
      var Q = parseInt(qtyInput.value, 10);
      if (!Q || Q < 1) Q = 1;

      function getNum(id) { var el = $span(id); return el ? parseEU(el.textContent || '0') : 0; }
      function setResult(id, val) { var el = $span(id); if (el) el.textContent = fmtUSD(val); }

      if (!qtyOn.checked) {
        setResult('emp_qty_base', 0); setResult('emp_qty_subtotal', 0);
        setResult('emp_qty_g', 0); setResult('emp_qty_i', 0); setResult('emp_qty_total', 0);
        return;
      }
      setResult('emp_qty_base',     getNum('emp_subtotal_no_gi') * Q);
      setResult('emp_qty_subtotal', getNum('emp_subtotal') * Q);
      setResult('emp_qty_g',        getNum('emp_ganancia_val') * Q);
      setResult('emp_qty_i',        getNum('emp_impuestos_val') * Q);
      setResult('emp_qty_total',    getNum('emp_total') * Q);
    }

    // --- Reset ---
    function reset() {
      removeKey('empaques_state');
      var d = {
        emp_caja_cant:50, emp_caja_precio:20, emp_bolsa_cant:100, emp_bolsa_precio:12,
        emp_relleno_cant:1, emp_relleno_precio:5, emp_etiqueta_cant:100, emp_etiqueta_precio:8,
        emp_tarjeta_cant:50, emp_tarjeta_precio:6, emp_cinta_cant:1, emp_cinta_precio:2,
        emp_impresora_precio:200, emp_ganancia:30, emp_impuestos:16
      };
      Object.keys(d).forEach(function(k) { var el = $(k); if (el) el.value = d[k]; });
      ['emp_caja_use','emp_bolsa_use','emp_relleno_use','emp_etiqueta_use','emp_tarjeta_use','emp_cinta_use','emp_impresora_use'].forEach(function(id) { var el = $(id); if (el) el.value = 1; });
      ['emp_caja_on','emp_bolsa_on','emp_relleno_on','emp_etiqueta_on','emp_chk_ganancia','emp_chk_impuestos'].forEach(function(id) { var el = $(id); if (el) el.checked = true; });
      ['emp_tarjeta_on','emp_cinta_on','emp_impresora_on','emp_mo_on','emp_ind_on','emp_qty_on'].forEach(function(id) { var el = $(id); if (el) el.checked = false; });
      var indCfg = $('emp_ind_cfg'); if (indCfg) indCfg.style.display = 'none';
      var moCfg = $('emp_mo_cfg'); if (moCfg) moCfg.style.display = 'none';
      var moPill = $('emp_mo_pill'); if (moPill) moPill.style.display = 'none';
      update();
    }

    // --- Persistence ---
    var EMP_KEYS = [
      'emp_caja_on','emp_caja_cant','emp_caja_precio','emp_bolsa_on','emp_bolsa_cant','emp_bolsa_precio',
      'emp_relleno_on','emp_relleno_cant','emp_relleno_precio','emp_etiqueta_on','emp_etiqueta_cant','emp_etiqueta_precio',
      'emp_tarjeta_on','emp_tarjeta_cant','emp_tarjeta_precio','emp_cinta_on','emp_cinta_cant','emp_cinta_precio',
      'emp_caja_use','emp_bolsa_use','emp_relleno_use','emp_etiqueta_use','emp_tarjeta_use','emp_cinta_use',
      'emp_impresora_on','emp_impresora_precio','emp_impresora_use',
      'emp_ganancia','emp_impuestos','emp_chk_ganancia','emp_chk_impuestos',
      'emp_mo_on','emp_mo_sueldo','emp_mo_horas_mes','emp_mo_setup','emp_mo_run','emp_mo_units',
      'emp_ind_on','emp_ind_alquiler','emp_ind_internet','emp_ind_suscripciones',
      'emp_ind_transporte','emp_ind_electricidad','emp_ind_publicidad','emp_ind_otros','emp_ind_units'
    ];

    function emp_save() {
      var d = {};
      EMP_KEYS.forEach(function(k) {
        var el = $(k); if (!el) return;
        d[k] = (el.type === 'checkbox') ? (el.checked ? 1 : 0) : el.value;
      });
      save('empaques_state', d);
    }

    function emp_load() {
      var d = load('empaques_state');
      if (!d) return;
      Object.keys(d).forEach(function(k) {
        var el = $(k); if (!el) return;
        if (el.type === 'checkbox') el.checked = !!d[k];
        else el.value = d[k];
      });
    }

    // --- Wire events ---
    view.querySelectorAll('input').forEach(function(el) {
      if (el.type === 'number' || el.type === 'checkbox' || el.type === 'text') {
        el.addEventListener('input', function() { update(); emp_save(); });
        el.addEventListener('change', function() { update(); emp_save(); });
      }
    });

    // MO config toggle
    var moCfgBtn = $('emp_mo_cfg_btn');
    if (moCfgBtn) moCfgBtn.addEventListener('click', function() {
      var panel = $('emp_mo_cfg');
      if (panel) panel.style.display = (panel.style.display === 'none') ? 'flex' : 'none';
    });
    var moChk = $('emp_mo_on');
    if (moChk) moChk.addEventListener('change', function() {
      var panel = $('emp_mo_cfg');
      if (panel && moChk.checked) panel.style.display = 'flex';
      update(); emp_save();
    });

    // Ind config toggle
    var indCfgBtn = $('emp_ind_cfg_btn');
    if (indCfgBtn) indCfgBtn.addEventListener('click', function() {
      var panel = $('emp_ind_cfg');
      if (panel) panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
    });
    var indChk = $('emp_ind_on');
    if (indChk) indChk.addEventListener('change', function() {
      var panel = $('emp_ind_cfg');
      if (panel && indChk.checked) panel.style.display = 'block';
      update(); emp_save();
    });

    // Actions
    if ($('btn_print_emp')) $('btn_print_emp').addEventListener('click', function() { window.print(); });
    if ($('btn_copy_emp')) $('btn_copy_emp').addEventListener('click', function() {
      var lines = [
        'Empaques — Directos = ' + ($span('emp_total_directos') ? $span('emp_total_directos').textContent : ''),
        'Depreciación = ' + ($span('emp_total_depr') ? $span('emp_total_depr').textContent : ''),
        'Total sin G/I = ' + ($span('emp_subtotal_no_gi') ? $span('emp_subtotal_no_gi').textContent : ''),
        'Subtotal = ' + ($span('emp_subtotal') ? $span('emp_subtotal').textContent : ''),
        'Ganancia (' + ($('emp_ganancia') ? $('emp_ganancia').value : '') + '%) = ' + ($span('emp_ganancia_val') ? $span('emp_ganancia_val').textContent : ''),
        'Impuestos (' + ($('emp_impuestos') ? $('emp_impuestos').value : '') + '%) = ' + ($span('emp_impuestos_val') ? $span('emp_impuestos_val').textContent : ''),
        'Precio de Venta = ' + ($span('emp_total') ? $span('emp_total').textContent : '')
      ];
      copyText(lines.join('\n'));
    });
    if ($('btn_reset_emp')) $('btn_reset_emp').addEventListener('click', reset);

    // Init
    emp_load();
    update();
  }
});
