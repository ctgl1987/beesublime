/* ══════════════════════════════════════════════
   BeeSublime — Envíos Module
   ══════════════════════════════════════════════ */
registerModule('envios', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '  <h3 style="margin:0 0 6px">Costos de Envíos</h3>',
    '  <div class="sep"></div>',
    '</div>',

    /* ── Mensajería / Flete ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Mensajería / Flete</h4>',
    '  <div class="row" style="gap:8px;align-items:center">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '      <input id="env_mensajeria_on" type="checkbox"/> Activar mensajería',
    '    </label>',
    '  </div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Tipo</label>',
    '      <select id="env_tipo">',
    '        <option>Motorizado local</option><option>Mensajería urbana</option>',
    '        <option>Encomienda nacional</option><option>Internacional</option><option>Otro</option>',
    '      </select>',
    '    </div>',
    '    <div style="flex:1;min-width:120px"><label>Distancia (km)</label><input id="env_km" min="0" step="0.1" type="number" value="0"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Tarifa base</label><input id="env_base" min="0" step="0.01" type="number" value="0"/></div>',
    '  </div>',
    '  <div class="row" style="margin-top:8px">',
    '    <div style="flex:1;min-width:120px"><label>Tarifa por km</label><input id="env_tarifa_km" min="0" step="0.01" type="number" value="0"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Peso (kg)</label><input id="env_kg" min="0" step="0.1" type="number" value="0"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Tarifa por kg</label><input id="env_tarifa_kg" min="0" step="0.01" type="number" value="0"/></div>',
    '  </div>',
    '</div>',

    /* ── Extras ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Extras</h4>',
    '  <div class="row" style="gap:8px;align-items:center">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="env_embalaje_on" type="checkbox"/> Embalaje extra</label>',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="env_fragil_on" type="checkbox"/> Manejo frágil</label>',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="env_seguro_on" type="checkbox"/> Seguro (%)</label>',
    '  </div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Costo embalaje</label><input id="env_embalaje" min="0" step="0.01" type="number" value="0"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo frágil</label><input id="env_fragil" min="0" step="0.01" type="number" value="0"/></div>',
    '    <div style="flex:1;min-width:120px"><label>% Seguro</label><input id="env_seguro_pct" min="0" step="0.1" type="number" value="0"/></div>',
    '  </div>',
    '  <div class="row" style="margin-top:8px">',
    '    <div style="flex:1;min-width:120px"><label>Otros (monto)</label><input id="env_otros" min="0" step="0.01" type="number" value="0"/></div>',
    '  </div>',
    '</div>',

    /* ── Totals ── */
    '<div class="card md-12">',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Total mensajería: <span class="result" id="env_total_mensajeria">$0.00</span></div>',
    '    <div class="pill">Extras: <span class="result" id="env_total_extras">$0.00</span></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="tot">Total Envíos: <span class="result" id="env_total">$0.00</span></div>',
    '  <div class="center-actions">',
    '    <button class="copy-btn" id="btn_copy_env">Copiar</button>',
    '    <button class="copy-btn" id="btn_print_env">Exportar a PDF / Imprimir</button>',
    '    <button class="btn reset" id="btn_reset_env">Reset</button>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };

    function clamp0(n) { n = +n; return (isFinite(n) && n > 0) ? n : 0; }
    function setText(id, n) { var el = $(id); if (el) el.textContent = fmtUSD(n); }

    function calc() {
      var on  = !!($('env_mensajeria_on') && $('env_mensajeria_on').checked);
      var base = clamp0(numVal($('env_base') ? $('env_base').value : '0'));
      var km   = clamp0(numVal($('env_km') ? $('env_km').value : '0'));
      var tkm  = clamp0(numVal($('env_tarifa_km') ? $('env_tarifa_km').value : '0'));
      var kg   = clamp0(numVal($('env_kg') ? $('env_kg').value : '0'));
      var tkg  = clamp0(numVal($('env_tarifa_kg') ? $('env_tarifa_kg').value : '0'));
      var mens = on ? (base + km * tkm + kg * tkg) : 0;

      var embOn = !!($('env_embalaje_on') && $('env_embalaje_on').checked);
      var fraOn = !!($('env_fragil_on') && $('env_fragil_on').checked);
      var segOn = !!($('env_seguro_on') && $('env_seguro_on').checked);
      var emb   = embOn ? clamp0(numVal($('env_embalaje') ? $('env_embalaje').value : '0')) : 0;
      var fra   = fraOn ? clamp0(numVal($('env_fragil') ? $('env_fragil').value : '0')) : 0;
      var pct   = segOn ? clamp0(numVal($('env_seguro_pct') ? $('env_seguro_pct').value : '0')) : 0;
      var otros = clamp0(numVal($('env_otros') ? $('env_otros').value : '0'));
      var segVal = segOn ? ((mens + emb + fra + otros) * (pct / 100)) : 0;
      var extras = emb + fra + segVal + otros;

      setText('env_total_mensajeria', mens);
      setText('env_total_extras', extras);
      setText('env_total', mens + extras);

      if (typeof window.resumen_update === 'function') window.resumen_update();
    }

    function syncDisabled() {
      var on = !!($('env_mensajeria_on') && $('env_mensajeria_on').checked);
      ['env_base','env_km','env_tarifa_km','env_kg','env_tarifa_kg'].forEach(function(id) {
        var el = $(id); if (el) el.disabled = !on;
      });
      var embOn = !!($('env_embalaje_on') && $('env_embalaje_on').checked);
      var fraOn = !!($('env_fragil_on') && $('env_fragil_on').checked);
      var segOn = !!($('env_seguro_on') && $('env_seguro_on').checked);
      var e = $('env_embalaje');    if (e) e.disabled = !embOn;
      var f = $('env_fragil');      if (f) f.disabled = !fraOn;
      var s = $('env_seguro_pct');  if (s) s.disabled = !segOn;
    }

    function onInput() { syncDisabled(); calc(); }

    // Wire all inputs
    var allIds = [
      'env_mensajeria_on','env_km','env_base','env_tarifa_km','env_kg','env_tarifa_kg',
      'env_embalaje_on','env_fragil_on','env_seguro_on',
      'env_embalaje','env_fragil','env_seguro_pct','env_otros'
    ];
    allIds.forEach(function(id) {
      var el = $(id);
      if (el) {
        el.addEventListener('input', onInput);
        el.addEventListener('change', onInput);
      }
    });

    // Copy
    if ($('btn_copy_env')) $('btn_copy_env').addEventListener('click', function() {
      var t = $('env_total') ? $('env_total').textContent : '$ 0,00';
      copyText(t);
    });

    // Print
    if ($('btn_print_env')) $('btn_print_env').addEventListener('click', function() { window.print(); });

    // Reset
    if ($('btn_reset_env')) $('btn_reset_env').addEventListener('click', function() {
      var defaults = {
        env_mensajeria_on: false, env_km: 0, env_base: 0, env_tarifa_km: 0, env_kg: 0, env_tarifa_kg: 0,
        env_embalaje_on: false, env_fragil_on: false, env_seguro_on: false,
        env_embalaje: 0, env_fragil: 0, env_seguro_pct: 0, env_otros: 0
      };
      Object.keys(defaults).forEach(function(k) {
        var el = $(k);
        if (!el) return;
        if (el.type === 'checkbox') el.checked = !!defaults[k];
        else el.value = defaults[k];
      });
      syncDisabled();
      calc();
    });

    // Expose for resumen
    window.env_update = function() { syncDisabled(); calc(); };

    // Init
    syncDisabled();
    calc();
  }
});
