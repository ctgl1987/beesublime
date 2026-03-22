/* ══════════════════════════════════════════════
   BeeSublime — Divisas BCV Module
   ══════════════════════════════════════════════ */

var COPY_ICON_SVG = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="3"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>';
var REFRESH_ICON_SVG = '<svg aria-hidden="true" class="btn-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg>';

registerModule('divisas', {
  html: [
    '<div class="grid">',

    /* ── Card 1: Tasas ── */
    '<div class="card md-6 primary">',
    '  <h3 style="display:flex;align-items:center;justify-content:space-between">Tasas',
    '    <button class="btn neutral" id="div_btn_refresh_rates" style="margin-left:auto;font-size:12px;padding:6px 10px">' + REFRESH_ICON_SVG + '<span>Actualizar tasas</span></button>',
    '  </h3>',
    '  <div class="muted" id="div_rates_last_update" style="margin:-6px 0 6px">Actualizado: —</div>',
    '  <div class="rate-meta-row"><span class="chip" id="div_chip_online">—</span><span class="chip" id="div_chip_source">Fuente Paralelo: Binance P2P</span></div>',

    '  <div class="row">',
    '    <div style="flex:1;min-width:220px">',
    '      <label>Moneda de cálculo (BCV)</label>',
    '      <select id="div_moneda_bcv" style="width:100%;padding:12px;border-radius:12px;font-size:14px">',
    '        <option selected value="USD">Dólar (USD)</option>',
    '        <option value="EUR">Euro (EUR)</option>',
    '      </select>',
    '    </div>',
    '  </div>',

    '  <div class="row">',
    '    <div style="flex:1;min-width:220px">',
    '      <label>Precio BCV (Bs por $)</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill">Bs</span>',
    '        <input class="rate-input auto-rate" id="div_tasa_bcv" min="0" step="0.01" type="number" value="0.00"/>',
    '      </div>',
    '    </div>',
    '    <div style="flex:1;min-width:220px">',
    '      <label>Precio Euro BCV (Bs por €)</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill">Bs</span>',
    '        <input class="rate-input auto-rate" id="div_tasa_euro_bcv" min="0" step="0.01" type="number" value=""/>',
    '      </div>',
    '    </div>',
    '    <div style="flex:1;min-width:220px">',
    '      <label>Precio Paralelo (Bs por $)</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill">Bs</span>',
    '        <input class="rate-input auto-rate" id="div_tasa_paralelo" min="0" step="0.01" type="number" value="0.00"/>',
    '      </div>',
    '    </div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row"><div class="pill">Equivalente en Paralelo: <span id="div_equiv_paralelo">—</span></div></div>',
    '</div>',

    /* ── Card 2: Conversión rápida ── */
    '<div class="card md-6 secondary">',
    '  <h3>Conversión rápida</h3>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:220px">',
    '      <label id="div_label_monto">Monto en $</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill" id="div_symbol_monto">$</span>',
    '        <input id="div_monto_usd" min="0" step="0.01" type="number"/>',
    '      </div>',
    '    </div>',
    '    <div style="flex:1;min-width:220px">',
    '      <label>Monto en Bs (BCV)</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill">Bs</span>',
    '        <input id="div_monto_bs_bcv" min="0" step="0.01" type="number"/>',
    '      </div>',
    '    </div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">En Bs (BCV): <span id="div_bs_bcv">—</span><button class="icon-copy-btn" id="div_btn_copy_bs_bcv" type="button" title="Copiar En Bs (BCV)">' + COPY_ICON_SVG + '</button></div>',
    '    <div class="pill">En Bs (Paralelo): <span id="div_bs_paralelo">—</span><button class="icon-copy-btn" id="div_btn_copy_bs_paralelo" type="button" title="Copiar En Bs (Paralelo)">' + COPY_ICON_SVG + '</button></div>',
    '    <div class="pill" id="div_usd_desde_bs_wrapper">En $ desde Bs(BCV): <span id="div_usd_desde_bs">—</span><button class="icon-copy-btn" id="div_btn_copy_usd_desde_bs" type="button" title="Copiar En divisa desde Bs(BCV)">' + COPY_ICON_SVG + '</button></div>',
    '    <button class="copy-btn" id="div_btn_copy_div">Copiar resultados</button>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="margin-top:12px">',
    '    <button class="btn reset" id="div_btn_reset">Reset</button>',
    '  </div>',
    '</div>',

    /* ── Card 3: Conversión extendida paralelo/BCV ── */
    '<div class="card" style="padding:14px">',
    '  <h4 style="margin:0 0 8px">Conversión rápida — modo paralelo / BCV</h4>',
    '  <div class="row" style="gap:12px;flex-wrap:wrap">',
    '    <div style="flex:1;min-width:260px">',
    '      <label id="div_label_valor_paralelo_ext">Valor en dólar Paralelo:</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill" id="div_symbol_paralelo_ext">$</span>',
    '        <input id="div_usd_paralelo_input" min="0" placeholder="Ingrese monto en Paralelo" step="0.01" type="number"/>',
    '      </div>',
    '      <div class="muted" style="margin-top:8px">Equivalente en BCV: <span id="div_equiv_en_bcv_ext">-</span><button class="icon-copy-btn" id="div_btn_copy_equiv_en_bcv_ext" type="button" title="Copiar Equivalente en BCV">' + COPY_ICON_SVG + '</button></div>',
    '    </div>',
    '    <div style="flex:1;min-width:260px">',
    '      <label id="div_label_valor_bcv_ext">Valor en dólar BCV:</label>',
    '      <div class="row" style="align-items:center;gap:6px">',
    '        <span class="pill" id="div_symbol_bcv_ext">$</span>',
    '        <input id="div_usd_bcv_input" min="0" placeholder="Ingrese monto en BCV" step="0.01" type="number"/>',
    '      </div>',
    '      <div class="muted" style="margin-top:8px">Equivalente en Paralelo: <span id="div_equiv_en_paralelo_ext">-</span><button class="icon-copy-btn" id="div_btn_copy_equiv_en_paralelo_ext" type="button" title="Copiar Equivalente en Paralelo">' + COPY_ICON_SVG + '</button></div>',
    '      <div class="muted" style="margin-top:6px"><strong>Valor en Bs tasa BCV:</strong> <span id="div_valor_bs_tasa_bcv_ext">-</span><button class="icon-copy-btn" id="div_btn_copy_valor_bs_tasa_bcv_ext" type="button" title="Copiar Valor en Bs tasa BCV">' + COPY_ICON_SVG + '</button></div>',
    '    </div>',
    '  </div>',
    '</div>',

    /* ── Card 4: Detalle adicional ── */
    '<div class="card md-12 neutral">',
    '  <h3>Detalle adicional</h3>',
    '  <div class="row" style="gap:14px;flex-wrap:wrap">',
    '    <div class="pill" id="div_diff_label">Diferencia (Paralelo - BCV) en Bs por <span id="div_diff_currency_symbol">$</span>: <span id="div_diff_bs">—</span></div>',
    '    <div class="pill">Brecha %: <span id="div_gap_pct">—</span></div>',
    '    <div class="center-actions" style="margin-top:10px">',
    '      <button class="copy-btn" id="div_btn_copy_resumen">Copiar resumen</button>',
    '    </div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    // ── Local querySelector shorthand ──
    var V = view;
    function el(id) { return V.querySelector('#' + id); }

    // ── Persistence keys (all div_ prefixed) ──
    var DIV_KEYS = ['div_tasa_bcv', 'div_tasa_paralelo', 'div_tasa_euro_bcv', 'div_moneda_bcv', 'div_monto_usd', 'div_monto_bs_bcv'];

    function divisas_save() {
      var d = {};
      DIV_KEYS.forEach(function(id) {
        var e = el(id);
        if (e) d[id] = e.value;
      });
      save('divisas_state', d);
    }

    function divisas_load() {
      var d = load('divisas_state');
      if (!d) return;
      DIV_KEYS.forEach(function(id) {
        var e = el(id);
        if (e && d[id] !== undefined) e.value = d[id];
      });
    }

    // ── Enforce fixed decimals on blur ──
    function enforceDecimals(input, decimals) {
      if (decimals === undefined) decimals = 2;
      var valStr = input.value;
      if (valStr === '') return;
      valStr = valStr.replace(/,/g, '.');
      var val = parseFloat(valStr);
      if (isFinite(val)) {
        input.value = val.toFixed(decimals);
      }
    }

    // ── Update labels/symbols for selected currency ──
    function updateLabels() {
      var moneda = el('div_moneda_bcv') ? el('div_moneda_bcv').value : 'USD';
      var isEUR = moneda === 'EUR';

      var lm = el('div_label_monto');
      if (lm) lm.textContent = isEUR ? 'Monto en €' : 'Monto en $';

      var sm = el('div_symbol_monto');
      if (sm) sm.textContent = isEUR ? '€' : '$';

      var lbe = el('div_label_valor_bcv_ext');
      if (lbe) lbe.textContent = isEUR ? 'Valor en euro BCV:' : 'Valor en dólar BCV:';

      var sbe = el('div_symbol_bcv_ext');
      if (sbe) sbe.textContent = isEUR ? '€' : '$';

      // Update "En $ desde Bs(BCV)" wrapper text
      var wrapper = el('div_usd_desde_bs_wrapper');
      if (wrapper) {
        var prefix = isEUR ? 'En € desde Bs(BCV): ' : 'En $ desde Bs(BCV): ';
        var node = wrapper.childNodes[0];
        if (node && node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = prefix;
        } else {
          wrapper.insertBefore(document.createTextNode(prefix), wrapper.firstChild);
          if (node) wrapper.removeChild(node);
        }
      }

      var dcs = el('div_diff_currency_symbol');
      if (dcs) dcs.textContent = isEUR ? '€' : '$';
    }

    // ── Main calculation engine ──
    function divisas_update(origen) {
      var moneda = el('div_moneda_bcv') ? el('div_moneda_bcv').value : 'USD';
      var isEUR = moneda === 'EUR';

      // Active BCV rate based on selected currency
      var bcvRate = parseFloat(isEUR ? el('div_tasa_euro_bcv').value : el('div_tasa_bcv').value);
      var par = parseFloat(el('div_tasa_paralelo').value);
      var monto = parseFloat(el('div_monto_usd').value);
      var bs_bcv_input = parseFloat(el('div_monto_bs_bcv').value);

      // Equivalencia paralelo/oficial
      var equiv = (isFinite(par) && isFinite(bcvRate) && bcvRate !== 0) ? (par / bcvRate) : null;
      el('div_equiv_paralelo').textContent = equiv ? (equiv.toFixed(4) + '\u00d7') : '—';

      // Conversión de Bs a divisa seleccionada
      if (origen === 'desde_bs' && isFinite(bcvRate) && bcvRate !== 0) {
        var div_from_bs = bs_bcv_input / bcvRate;
        el('div_usd_desde_bs').textContent = isEUR ? fmtUSD(div_from_bs).replace('$', '€') : fmtUSD(div_from_bs);
      } else if (origen === 'desde_bs') {
        el('div_usd_desde_bs').textContent = '—';
      }

      // Conversión a Bs
      var bsBCV = (isFinite(bcvRate) && isFinite(monto)) ? monto * bcvRate : null;
      var bsPar = (isFinite(par) && isFinite(monto)) ? monto * par : null;
      el('div_bs_bcv').textContent = bsBCV ? fmtBs(bsBCV) : '—';
      el('div_bs_paralelo').textContent = bsPar ? fmtBs(bsPar) : '—';

      // Diferencia y brecha
      var diff = (isFinite(par) && isFinite(bcvRate)) ? (par - bcvRate) : null;
      el('div_diff_bs').textContent = diff ? fmtBs(diff) : '—';
      el('div_gap_pct').textContent = (isFinite(par) && isFinite(bcvRate) && bcvRate !== 0)
        ? (((par - bcvRate) / bcvRate) * 100).toFixed(2) + '%'
        : '—';

      // Conversión extendida paralelo <-> BCV
      var usdParIn = parseFloat(el('div_usd_paralelo_input').value);
      var usdBcvIn = parseFloat(el('div_usd_bcv_input').value);

      if (isFinite(usdParIn) && isFinite(par) && isFinite(bcvRate) && bcvRate !== 0) {
        var equivBCV = usdParIn * (par / bcvRate);
        el('div_equiv_en_bcv_ext').textContent = fmtUSD(equivBCV).replace('$', isEUR ? '€' : '$');
      } else {
        el('div_equiv_en_bcv_ext').textContent = '-';
      }

      if (isFinite(usdBcvIn) && isFinite(par) && isFinite(bcvRate) && par !== 0) {
        var equivPar = usdBcvIn * (bcvRate / par);
        el('div_equiv_en_paralelo_ext').textContent = fmtUSD(equivPar);
        el('div_valor_bs_tasa_bcv_ext').textContent = fmtBs(usdBcvIn * bcvRate);
      } else {
        el('div_equiv_en_paralelo_ext').textContent = '-';
        el('div_valor_bs_tasa_bcv_ext').textContent = '-';
      }

      divisas_save();
    }

    // ── Build text summary for clipboard ──
    function divisas_toText() {
      var items = [
        ['Moneda de cálculo', el('div_moneda_bcv') ? el('div_moneda_bcv').value : 'USD'],
        ['Precio BCV (USD)', el('div_tasa_bcv').value],
        ['Precio Euro BCV (EUR)', el('div_tasa_euro_bcv').value],
        ['Precio Paralelo (USD)', el('div_tasa_paralelo').value],
        ['Equivalente en Paralelo', el('div_equiv_paralelo').textContent],
        ['En Bs (BCV)', el('div_bs_bcv').textContent],
        ['En Bs (Paralelo)', el('div_bs_paralelo').textContent],
        ['En divisa desde Bs(BCV)', el('div_usd_desde_bs').textContent],
        ['Equiv. en BCV (desde Paralelo)', el('div_equiv_en_bcv_ext').textContent],
        ['Equiv. en Paralelo (desde BCV)', el('div_equiv_en_paralelo_ext').textContent],
        ['Valor en Bs tasa BCV (bloque ext.)', el('div_valor_bs_tasa_bcv_ext').textContent]
      ];
      return items.map(function(pair) { return pair[0] + ': ' + pair[1]; }).join('\n');
    }

    // ── Reset all fields ──
    function divisas_reset() {
      DIV_KEYS.forEach(function(id) {
        var e = el(id);
        if (e) e.value = '';
      });
      if (el('div_moneda_bcv')) el('div_moneda_bcv').value = 'USD';

      // Clear extended inputs too
      var extIds = ['div_usd_paralelo_input', 'div_usd_bcv_input'];
      extIds.forEach(function(id) { var e = el(id); if (e) e.value = ''; });

      // Reset result texts
      var resultIds = ['div_equiv_paralelo', 'div_bs_bcv', 'div_bs_paralelo', 'div_usd_desde_bs', 'div_diff_bs', 'div_gap_pct'];
      resultIds.forEach(function(id) { var e = el(id); if (e) e.textContent = '—'; });

      var extResultIds = ['div_equiv_en_bcv_ext', 'div_equiv_en_paralelo_ext', 'div_valor_bs_tasa_bcv_ext'];
      extResultIds.forEach(function(id) { var e = el(id); if (e) e.textContent = '-'; });

      removeKey('divisas_state');
      updateLabels();
    }

    // ── Utility: extract clean text from a span ──
    function getTextById(id) {
      var e = el(id);
      if (!e) return '';
      var t = (e.textContent || '').trim();
      return t.replace(/^[-—]\s*$/, '').trim();
    }

    // ── Bind a copy icon button ──
    function bindCopyBtn(btnId, textFn) {
      var b = el(btnId);
      if (!b) return;
      b.addEventListener('click', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var t = (typeof textFn === 'function') ? textFn() : String(textFn || '');
        if (t) copyText(t);
      });
    }

    // ── Pulse animation on rate inputs ──
    function rates_pulse_inputs() {
      ['div_tasa_bcv', 'div_tasa_euro_bcv', 'div_tasa_paralelo'].forEach(function(id) {
        var e = el(id);
        if (!e) return;
        e.classList.remove('rate-updated');
        void e.offsetWidth;
        e.classList.add('rate-updated');
        setTimeout(function() { try { e.classList.remove('rate-updated'); } catch(ex) {} }, 750);
      });
    }

    // ── Render last update timestamp ──
    function renderLastUpdate(ts) {
      var e = el('div_rates_last_update');
      if (!e) return;
      if (!ts) { e.textContent = 'Actualizado: —'; return; }
      var d = new Date(ts);
      function pad(n) { return String(n).padStart(2, '0'); }
      var txt = pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
      e.textContent = 'Actualizado: ' + txt;
    }

    // ── Online/Offline chip ──
    function updateOnlineChip() {
      var chip = el('div_chip_online');
      if (!chip) return;
      var on = navigator.onLine;
      chip.textContent = on ? 'Online' : 'Offline';
      chip.classList.toggle('ok', !!on);
      chip.classList.toggle('warn', !on);
    }
    window.addEventListener('online', updateOnlineChip);
    window.addEventListener('offline', updateOnlineChip);
    updateOnlineChip();

    // ── BeeRates integration: populate rates from shared service ──
    function applyRates(r) {
      if (isFinite(r.usdBcv) && r.usdBcv > 0) el('div_tasa_bcv').value = r.usdBcv.toFixed(2);
      if (isFinite(r.eurBcv) && r.eurBcv > 0) el('div_tasa_euro_bcv').value = r.eurBcv.toFixed(2);
      if (isFinite(r.paralelo) && r.paralelo > 0) el('div_tasa_paralelo').value = r.paralelo.toFixed(2);
      renderLastUpdate(r.lastUpdated);
      rates_pulse_inputs();
      divisas_update();
    }

    BeeRates.onUpdate(applyRates);

    // ── Wire up input events ──
    el('div_tasa_bcv').addEventListener('input', function() { divisas_update(); });
    el('div_tasa_paralelo').addEventListener('input', function() { divisas_update(); });
    el('div_tasa_euro_bcv').addEventListener('input', function() { divisas_update(); });
    el('div_monto_usd').addEventListener('input', function() { divisas_update(); });
    el('div_monto_bs_bcv').addEventListener('input', function() { divisas_update('desde_bs'); });
    el('div_usd_paralelo_input').addEventListener('input', function() { divisas_update(); });
    el('div_usd_bcv_input').addEventListener('input', function() { divisas_update(); });
    el('div_moneda_bcv').addEventListener('change', function() { updateLabels(); divisas_update(); });

    // Enforce two decimals on rate fields when losing focus
    el('div_tasa_bcv').addEventListener('blur', function() { enforceDecimals(el('div_tasa_bcv'), 2); });
    el('div_tasa_paralelo').addEventListener('blur', function() { enforceDecimals(el('div_tasa_paralelo'), 2); });
    el('div_tasa_euro_bcv').addEventListener('blur', function() { enforceDecimals(el('div_tasa_euro_bcv'), 2); });

    // ── Button events ──
    el('div_btn_refresh_rates').addEventListener('click', function() {
      BeeRates.fetchRates(true);
    });

    el('div_btn_reset').addEventListener('click', divisas_reset);

    el('div_btn_copy_div').addEventListener('click', function() {
      copyText(divisas_toText());
    });

    el('div_btn_copy_resumen').addEventListener('click', function() {
      copyText(divisas_toText());
    });

    // Copy icon buttons
    bindCopyBtn('div_btn_copy_bs_bcv', function() { return getTextById('div_bs_bcv'); });
    bindCopyBtn('div_btn_copy_bs_paralelo', function() { return getTextById('div_bs_paralelo'); });
    bindCopyBtn('div_btn_copy_usd_desde_bs', function() { return getTextById('div_usd_desde_bs'); });
    bindCopyBtn('div_btn_copy_equiv_en_bcv_ext', function() { return getTextById('div_equiv_en_bcv_ext'); });
    bindCopyBtn('div_btn_copy_equiv_en_paralelo_ext', function() { return getTextById('div_equiv_en_paralelo_ext'); });
    bindCopyBtn('div_btn_copy_valor_bs_tasa_bcv_ext', function() { return getTextById('div_valor_bs_tasa_bcv_ext'); });

    // ── Initialize: load persisted state, apply cached rates, compute ──
    divisas_load();
    updateLabels();

    // Apply any rates already available from the shared service
    var cached = BeeRates.getRates();
    if (isFinite(cached.usdBcv) || isFinite(cached.paralelo)) {
      applyRates(cached);
    }

    // Enforce decimals on loaded values
    enforceDecimals(el('div_tasa_bcv'), 2);
    enforceDecimals(el('div_tasa_paralelo'), 2);
    enforceDecimals(el('div_tasa_euro_bcv'), 2);

    divisas_update();
  }
});
