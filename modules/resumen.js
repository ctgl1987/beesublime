/* ══════════════════════════════════════════════
   BeeSublime — Resumen General Module
   ══════════════════════════════════════════════ */
registerModule('resumen', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '  <h3 style="margin:0 0 6px">Resumen General</h3>',
    '  <div class="sep"></div>',

    '  <div class="row" style="gap:12px;flex-wrap:wrap;align-items:center">',
    '    <label class="chk-label"><input checked id="sum_incluir_vinil" type="checkbox"/> Incluir Vinil</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_sublim" type="checkbox"/> Incluir Sublimación</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_etiq" type="checkbox"/> Incluir Etiquetas</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_emp" type="checkbox"/> Incluir Empaques</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_pap" type="checkbox"/> Incluir Papelería</label>',
    '    <label class="chk-label"><input id="sum_incluir_env" type="checkbox"/> Incluir Envíos</label>',
    '    <label class="chk-label"><input id="sum_incluir_dtf" type="checkbox"/> Incluir DTF</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_esf" type="checkbox"/> Incluir Esferas navideñas</label>',
    '    <label class="chk-label"><input checked id="sum_incluir_pers" type="checkbox"/> Incluir Producto personalizable</label>',
    '  </div>',
    '  <div class="sep"></div>',

    '  <div class="grid">',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Vinil</h4><div class="pill">Total: <span id="sum_vinil">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">DTF</h4><div class="pill">Total: <span id="sum_dtf">$ 0,00</span></div></div>',
    '    <div class="sep"></div>',
    '    <div class="card md-12"><h4 style="margin:0 0 6px">Envíos</h4><div class="pill">Total: <span id="sum_env">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Sublimación</h4><div class="pill">Total: <span id="sum_sublim">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Etiquetas</h4><div class="pill">Total: <span id="sum_etiq">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Empaques</h4><div class="pill">Total: <span id="sum_emp">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Papelería</h4><div class="pill">Total: <span id="sum_pap">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Esferas navideñas</h4><div class="pill">Total: <span id="sum_esf">$ 0,00</span></div></div>',
    '    <div class="card md-3"><h4 style="margin:0 0 6px">Producto personalizable</h4><div class="pill">Total: <span id="sum_pers">$ 0,00</span></div></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="tot">Total General Seleccionado: <span class="result" id="sum_total">$ 0,00</span></div>',
    '  <div class="sep"></div>',
    '  <div class="center-actions">',
    '    <button class="copy-btn" id="btn_copy_sum">Copiar</button>',
    '    <button class="copy-btn" id="btn_print_sum">Exportar a PDF / Imprimir</button>',
    '  </div>',
    '</div>',
    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };

    // Source total IDs from other modules
    var SRC = {
      vinil:  'vin_total',
      sublim: 'sub_v15_total',
      etiq:   'eti_total',
      emp:    'emp_total',
      env:    'env_total',
      dtf:    'dtf_total',
      pap:    'pap_total',
      esf:    'esf_total',
      pers:   'pers_pv'
    };

    function text(id) {
      var el = document.getElementById(id);
      return el ? (el.textContent || '') : '';
    }

    function parseEUtxt(t) {
      var s = String(t || '').replace(/[^0-9.,-]/g, '');
      if (s.indexOf(',') >= 0) {
        return parseFloat(s.replace(/\./g, '').replace(',', '.')) || 0;
      }
      return parseFloat(s) || 0;
    }

    function mirrorText() {
      var set = function(id, srcId) { var el = $(id); if (el) el.textContent = text(srcId); };
      set('sum_vinil',  SRC.vinil);
      set('sum_sublim', SRC.sublim);
      set('sum_etiq',   SRC.etiq);
      set('sum_emp',    SRC.emp);
      set('sum_env',    SRC.env);
      set('sum_dtf',    SRC.dtf);
      set('sum_pap',    SRC.pap);
      set('sum_esf',    SRC.esf);
      set('sum_pers',   SRC.pers);
    }

    function compute() {
      var incV  = $('sum_incluir_vinil') && $('sum_incluir_vinil').checked;
      var incS  = $('sum_incluir_sublim') && $('sum_incluir_sublim').checked;
      var incE  = $('sum_incluir_etiq') && $('sum_incluir_etiq').checked;
      var incM  = $('sum_incluir_emp') && $('sum_incluir_emp').checked;
      var incN  = $('sum_incluir_env') && $('sum_incluir_env').checked;
      var incD  = $('sum_incluir_dtf') && $('sum_incluir_dtf').checked;
      var incP  = $('sum_incluir_pap') && $('sum_incluir_pap').checked;
      var incEs = $('sum_incluir_esf') && $('sum_incluir_esf').checked;
      var incPr = $('sum_incluir_pers') && $('sum_incluir_pers').checked;

      var v   = parseEUtxt(text(SRC.vinil));
      var s   = parseEUtxt(text(SRC.sublim));
      var e   = parseEUtxt(text(SRC.etiq));
      var m   = parseEUtxt(text(SRC.emp));
      var n   = parseEUtxt(text(SRC.env));
      var d   = parseEUtxt(text(SRC.dtf));
      var p   = parseEUtxt(text(SRC.pap));
      var esf = parseEUtxt(text(SRC.esf));
      var pr  = parseEUtxt(text(SRC.pers));

      var total = (incV ? v : 0) + (incS ? s : 0) + (incE ? e : 0) + (incM ? m : 0) +
                  (incN ? n : 0) + (incD ? d : 0) + (incP ? p : 0) + (incEs ? esf : 0) + (incPr ? pr : 0);

      var totalEl = $('sum_total');
      if (totalEl) totalEl.textContent = fmtUSD(total);
    }

    function doUpdate() {
      mirrorText();
      compute();
    }

    // Expose globally so other modules can trigger refresh
    window.resumen_update = doUpdate;

    // Watch source elements for mutations
    Object.values(SRC).forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var obs = new MutationObserver(doUpdate);
      obs.observe(el, { childList: true, characterData: true, subtree: true });
    });

    // Checkbox listeners
    ['sum_incluir_vinil','sum_incluir_sublim','sum_incluir_etiq','sum_incluir_emp',
     'sum_incluir_env','sum_incluir_dtf','sum_incluir_pap','sum_incluir_esf','sum_incluir_pers']
      .forEach(function(id) {
        var el = $(id);
        if (el) el.addEventListener('change', doUpdate);
      });

    // Copy
    if ($('btn_copy_sum')) $('btn_copy_sum').addEventListener('click', function() {
      var lines = [
        'Resumen General',
        'Vinil = ' + ($('sum_vinil') ? $('sum_vinil').textContent : '') + ($('sum_incluir_vinil') && $('sum_incluir_vinil').checked ? '' : ' (omitido)'),
        'Sublimación = ' + ($('sum_sublim') ? $('sum_sublim').textContent : '') + ($('sum_incluir_sublim') && $('sum_incluir_sublim').checked ? '' : ' (omitida)'),
        'Etiquetas = ' + ($('sum_etiq') ? $('sum_etiq').textContent : '') + ($('sum_incluir_etiq') && $('sum_incluir_etiq').checked ? '' : ' (omitidas)'),
        'Empaques = ' + ($('sum_emp') ? $('sum_emp').textContent : '') + ($('sum_incluir_emp') && $('sum_incluir_emp').checked ? '' : ' (omitidos)'),
        'Envíos = ' + ($('sum_env') ? $('sum_env').textContent : '') + ($('sum_incluir_env') && $('sum_incluir_env').checked ? '' : ' (omitidos)'),
        'DTF = ' + ($('sum_dtf') ? $('sum_dtf').textContent : '') + ($('sum_incluir_dtf') && $('sum_incluir_dtf').checked ? '' : ' (omitido)'),
        'Papelería = ' + ($('sum_pap') ? $('sum_pap').textContent : '') + ($('sum_incluir_pap') && $('sum_incluir_pap').checked ? '' : ' (omitida)'),
        'Esferas navideñas = ' + ($('sum_esf') ? $('sum_esf').textContent : '') + ($('sum_incluir_esf') && $('sum_incluir_esf').checked ? '' : ' (omitidas)'),
        'Producto personalizable = ' + ($('sum_pers') ? $('sum_pers').textContent : '') + ($('sum_incluir_pers') && $('sum_incluir_pers').checked ? '' : ' (omitido)'),
        'Total General = ' + ($('sum_total') ? $('sum_total').textContent : '')
      ];
      copyText(lines.join('\n'));
    });

    // Print
    if ($('btn_print_sum')) $('btn_print_sum').addEventListener('click', function() { window.print(); });

    // First load
    doUpdate();
  }
});
