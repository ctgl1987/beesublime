/* ══════════════════════════════════════════════
   BeeSublime — Producto Personalizable Module
   ══════════════════════════════════════════════ */
registerModule('personalizado', {
  html: [
    '<div class="grid">',

    /* ── Header / Save-Load ── */
    '<div class="card md-12">',
    '  <h3 style="margin:0 0 6px">Producto personalizable</h3>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div style="min-width:260px;flex:2"><label>Nombre del producto</label><input id="pers_name" type="text" placeholder="Ej. Taza Premium 11oz"></div>',
    '    <div class="row" style="gap:8px">',
    '      <button class="btn ok" id="pers_save">Guardar</button>',
    '      <select id="pers_load" style="min-width:220px"><option value="">— Cargar guardado —</option></select>',
    '      <button class="btn neutral" id="pers_delete">Borrar</button>',
    '      <button class="btn" id="pers_export_json">Exportar Producto</button>',
    '      <button class="btn" id="pers_export_csv">Exportar CSV</button>',
    '      <label class="btn" style="cursor:pointer">Importar Producto<input id="pers_import" type="file" accept="application/json" style="display:none"></label>',
    '      <span class="pill" style="background:#eef6ff">Catálogo</span>',
    '      <button class="btn" id="pers_export_catalog_json">Exportar Catálogo (JSON)</button>',
    '      <button class="btn" id="pers_export_catalog_csv">Exportar Catálogo (CSV)</button>',
    '      <select id="pers_import_mode" style="min-width:170px"><option value="merge" selected>Fusionar</option><option value="replace">Reemplazar</option></select>',
    '      <label class="btn" style="cursor:pointer">Importar Catálogo<input id="pers_import_catalog" type="file" accept=".json,.csv,application/json,text/csv" style="display:none"></label>',
    '    </div>',
    '  </div>',
    '</div>',

    /* ── Material por área ── */
    '<div class="card md-12" id="pers_area_card">',
    '  <div class="row" style="gap:10px;flex-wrap:wrap;align-items:center">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px;margin:0"><input id="pers_area_on" type="checkbox"/> Activar</label>',
    '    <div style="flex:1;min-width:220px"><h4 style="margin:0">Material por área (cm²)</h4></div>',
    '    <div class="pill">Total materiales por área: <strong id="pers_area_total">$ 0,00</strong></div>',
    '    <button class="btn" id="pers_area_cfg" type="button">Configurar</button>',
    '  </div>',
    '  <div id="pers_area_body" style="display:none;margin-top:10px">',
    '    <div class="muted" style="margin:0 0 10px">Calcula materiales con medidas variables usando cm² (pendones, vinil impreso, laminado, etc.).</div>',
    '    <div id="pers_area_list"></div>',
    '    <div class="row" style="gap:10px;flex-wrap:wrap;align-items:center;margin-top:10px">',
    '      <div style="flex:1"></div>',
    '      <button class="btn ok" id="pers_area_add" type="button">Agregar material por área</button>',
    '    </div>',
    '  </div>',
    '</div>',

    /* ── Costos directos ── */
    '<div class="card md-12" id="pers_directos_card">',
    '  <h4 style="margin:0 0 6px">Costos directos</h4>',
    '  <div id="pers_directos"></div>',
    '  <div class="center-actions"><button class="btn ok" id="pers_add_dir">Agregar línea</button></div>',
    '</div>',

    /* ── Depreciación ── */
    '<div class="card md-12" id="pers_depreciacion_card">',
    '  <h4 style="margin:0 0 6px">Depreciación de equipos</h4>',
    '  <div id="pers_depreciacion"></div>',
    '  <div class="center-actions"><button class="btn ok" id="pers_add_dep">Agregar equipo</button></div>',
    '</div>',

    /* ── Indirectos ── */
    '<div class="card md-12 indA-card" id="pers_ind_card">',
    '  <div class="row" style="align-items:center;gap:12px">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="pers_ind_on" type="checkbox"/> Activar</label>',
    '    <div class="pill indA-pill">Costo Ud. (indirectos): <span id="pers_ind_ud" class="result">—</span></div>',
    '    <button class="btn" id="pers_ind_cfg_btn" type="button">Configurar</button>',
    '  </div>',
    '  <div id="pers_ind_cfg" style="margin-top:8px;display:none">',
    '    <div class="row" style="gap:12px;flex-wrap:wrap">',
    '      <div style="min-width:180px;flex:1"><label>Alquiler (mensual)</label><input id="pers_ind_alquiler" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Internet (mensual)</label><input id="pers_ind_internet" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Suscripciones (mensual)</label><input id="pers_ind_suscripciones" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Transporte (mensual)</label><input id="pers_ind_transporte" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Electricidad (mensual)</label><input id="pers_ind_electricidad" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Publicidad (mensual)</label><input id="pers_ind_publicidad" type="text" value="0,00"></div>',
    '      <div style="min-width:180px;flex:1"><label>Otros (mensual)</label><input id="pers_ind_otros" type="text" value="0,00"></div>',
    '      <div style="min-width:160px;flex:1"><label>Unidades/mes</label><input id="pers_ind_units" type="text" value="100"></div>',
    '    </div>',
    '    <input id="pers_ind_mensual" type="text" value="0,00" style="display:none">',
    '  </div>',
    '</div>',

    /* ── Mano de obra ── */
    '<div class="card md-12" id="pers_mo_card">',
    '  <div class="row" style="align-items:center;gap:12px;flex-wrap:wrap">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="pers_mo_on" type="checkbox"/> Activar mano de obra</label>',
    '    <div class="pill">MO por Ud.: <span id="pers_mo_ud" class="result">—</span></div>',
    '    <button class="btn" id="pers_mo_cfg_btn" type="button">Configurar</button>',
    '  </div>',
    '  <div id="pers_mo_cfg" style="margin-top:8px;display:none">',
    '    <div class="muted" style="margin:0 0 8px">Agrega una línea por cada empleado o proceso adicional que participe en la elaboración.</div>',
    '    <div id="pers_mo_list"></div>',
    '    <div class="center-actions" style="margin-top:10px"><button class="btn ok" id="pers_mo_add" type="button">Agregar línea</button></div>',
    '  </div>',
    '</div>',

    /* ── G/I ── */
    '<div class="card md-12" id="pers_gi_card">',
    '  <h4 style="margin:0 0 6px">Ganancia / Impuestos</h4>',
    '  <div class="row" style="gap:12px;align-items:center;flex-wrap:wrap">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="pers_g_on" type="checkbox"/> Aplicar Ganancia</label>',
    '    <div><label>Modo</label><select id="pers_gmode"><option value="Margen">Margen</option><option value="Markup">Markup</option></select></div>',
    '    <div style="min-width:120px"><label>Ganancia (%)</label><input id="pers_g_pct" type="text" value="30"></div>',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="pers_i_on" type="checkbox"/> Aplicar Impuesto</label>',
    '    <div style="min-width:120px"><label>Impuesto (%)</label><input id="pers_i_pct" type="text" value="16"></div>',
    '  </div>',
    '</div>',

    /* ── Summary ── */
    '<div class="card md-12" id="pers_summary">',
    '  <h4 style="margin:0 0 6px">Resumen</h4>',
    '  <div class="row" style="gap:10px;flex-wrap:wrap">',
    '    <div class="pill">Directos: <strong id="pers_pill_dir">—</strong></div>',
    '    <div class="pill">Depreciación: <strong id="pers_pill_dep">—</strong></div>',
    '    <div class="pill">Indirectos: <strong id="pers_pill_ind">—</strong></div>',
    '    <div class="pill">Mano de obra: <strong id="pers_pill_mo">—</strong></div>',
    '    <div class="pill">Subtotal: <strong id="pers_pill_sub">—</strong></div>',
    '    <div class="pill">+ Ganancia: <strong id="pers_pill_g">—</strong></div>',
    '    <div class="pill">+ Impuestos: <strong id="pers_pill_i">—</strong></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="tot">Precio de Venta: <span id="pers_pv">$ 0,00</span></div>',
    '  <div class="center-actions" style="gap:10px;flex-wrap:wrap">',
    '    <button class="btn" id="pers_btn_print" type="button">Exportar a PDF / Imprimir</button>',
    '    <button class="btn reset" id="pers_reset" type="button">Reset</button>',
    '  </div>',
    '</div>',

    /* ── Qty card ── */
    '<div class="card md-12" id="pers_qty_card">',
    '  <h4 style="margin:0 0 6px">Cantidad de productos</h4>',
    '  <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0"><input type="checkbox" id="pers_qty_on"><span>Activar cantidad</span></label>',
    '    <input type="number" id="pers_qty" min="1" step="1" value="1" style="max-width:100px">',
    '    <span class="muted">Multiplica los valores finales del producto por la cantidad Q (solo vista).</span>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I ×Q</span><span class="result mono" id="pers_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal ×Q</span><span class="result mono" id="pers_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia ×Q</span><span class="result mono" id="pers_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos ×Q</span><span class="result mono" id="pers_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total ×Q</span><span class="result mono" id="pers_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(viewEl) {
    var LS_KEY = 'Suite.pers.products';
    var q = function(sel, root) { return (root || viewEl).querySelector(sel); };
    var $ = function(id) { return viewEl.querySelector('#' + id) || document.getElementById(id); };

    // EU helpers
    function pEU(str) {
      if (typeof str !== 'string') str = String(str == null ? '' : str);
      str = str.trim().replace(/\./g, '').replace(',', '.');
      var v = parseFloat(str);
      return isNaN(v) ? 0 : v;
    }
    function euro(num) { return fmtUSD(Number(num || 0)); }

    // Storage
    function loadAll()  { try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch(e) { return []; } }
    function saveAll(a) { localStorage.setItem(LS_KEY, JSON.stringify(a)); }

    // UI refs
    var nameI = $('pers_name');
    var dirWrap = $('pers_directos');
    var depWrap = $('pers_depreciacion');
    var areaOnEl = $('pers_area_on');
    var areaWrap = $('pers_area_list');
    var areaTotalEl = $('pers_area_total');
    var indOn = $('pers_ind_on');
    var indMensual = $('pers_ind_mensual');
    var indUnits = $('pers_ind_units');
    var moOn = $('pers_mo_on');
    var moWrap = $('pers_mo_list');
    var gMode = $('pers_gmode');
    var gOn = $('pers_g_on');
    var gPct = $('pers_g_pct');
    var iOn = $('pers_i_on');
    var iPct = $('pers_i_pct');
    var loaderSel = $('pers_load');
    var importI = $('pers_import');
    var importCatalogI = $('pers_import_catalog');
    var importModeSel = $('pers_import_mode');
    var pills = {
      dir: $('pers_pill_dir'), dep: $('pers_pill_dep'), ind: $('pers_pill_ind'),
      mo: $('pers_pill_mo'), sub: $('pers_pill_sub'), g: $('pers_pill_g'), i: $('pers_pill_i'),
      pv: $('pers_pv'), indUd: $('pers_ind_ud'), moUd: $('pers_mo_ud')
    };

    // Indirectos sum
    var indAlq = $('pers_ind_alquiler'), indInt = $('pers_ind_internet'), indSus = $('pers_ind_suscripciones'),
        indTra = $('pers_ind_transporte'), indEle = $('pers_ind_electricidad'), indPub = $('pers_ind_publicidad'),
        indOtr = $('pers_ind_otros');
    function recalcIndirectosMensual() {
      var sum = [indAlq, indInt, indSus, indTra, indEle, indPub, indOtr]
        .map(function(el) { return el ? pEU(el.value) : 0; }).reduce(function(a, b) { return a + b; }, 0);
      if (indMensual) indMensual.value = sum.toFixed(2).replace('.', ',');
    }

    // --- Dynamic rows ---
    function makeDirRow(data) {
      data = data || {};
      var row = document.createElement('div');
      row.className = 'row pers-dep-row';
      row.style.cssText = 'gap:8px;align-items:flex-end;margin-top:6px;flex-wrap:nowrap;overflow-x:auto';
      row.innerHTML =
        '<div style="min-width:220px;flex:2"><label>Descripción</label><input type="text" class="pers-dir-desc" value="' + (data.desc || '') + '"/></div>' +
        '<div style="min-width:100px;flex:1"><label>Cant.</label><input type="text" class="pers-dir-cant" value="' + (data.cant || '1') + '"/></div>' +
        '<div style="min-width:140px;flex:1"><label>Precio ($)</label><input type="text" class="pers-dir-precio" value="' + (data.precio || '0,00') + '"/></div>' +
        '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input type="text" class="ud pers-dir-ud" value="$ 0,00" readonly/></div>' +
        '<div style="min-width:140px;flex:1"><label>Cant. a utilizar</label><input type="text" class="pers-dir-utilcant" value="' + (data.utilcant || '1') + '"/></div>' +
        '<div style="min-width:170px;flex:1"><label>Costo utilizado</label><input type="text" class="ud pers-dir-used" value="$ 0,00" readonly/></div>' +
        '<div><button class="copy-btn" type="button">Eliminar</button></div>';
      q('.copy-btn', row).addEventListener('click', function() { row.remove(); update(); });
      row.addEventListener('input', function(e) { if (e.target.matches('input')) update(); }, true);
      return row;
    }

    function makeDepRow(data) {
      data = data || {};
      var modoVida = (data.modo || 'vida') === 'vida';
      var row = document.createElement('div');
      row.className = 'row pers-dep-row';
      row.style.cssText = 'gap:8px;align-items:flex-end;margin-top:6px;flex-wrap:nowrap;overflow-x:auto';
      row.innerHTML =
        '<div style="min-width:200px;flex:2"><label>Equipo</label><input type="text" class="pers-dep-desc" value="' + (data.desc || '') + '"/></div>' +
        '<div style="min-width:120px;flex:1"><label>Precio ($)</label><input type="text" class="pers-dep-precio" value="' + (data.precio || '0,00') + '"/></div>' +
        '<div style="min-width:150px;flex:1"><label>Modo</label><select class="pers-dep-modo"><option value="vida"' + (modoVida ? ' selected' : '') + '>Vida útil (usos)</option><option value="capacidad"' + (!modoVida ? ' selected' : '') + '>Capacidad/mes + meses</option></select></div>' +
        '<div class="pers-dep-vida-wrap" style="min-width:120px;flex:1;' + (modoVida ? '' : 'display:none') + '"><label>Vida (usos)</label><input type="text" class="pers-dep-vida" value="' + (data.vida || '100') + '"/></div>' +
        '<div class="pers-dep-cap-wrap" style="display:' + (modoVida ? 'none' : 'flex') + ';gap:8px;flex:0 0 auto;align-items:flex-end;min-width:10px"><div class="pers-dep-col-meses" style="min-width:72px;flex:0 0 72px"><label>Meses</label><input type="text" class="pers-dep-meses" value="' + (data.meses || '24') + '"/></div><div class="pers-dep-col-cap" style="min-width:96px;flex:0 0 96px"><label>Cap./mes (uds)</label><input type="text" class="pers-dep-capacidad" value="' + (data.capacidad || '100') + '"/></div></div>' +
        '<div style="min-width:130px;flex:1"><label>Costo Ud.</label><input type="text" class="ud pers-dep-ud" value="$ 0,00" readonly/></div>' +
        '<div style="min-width:120px;flex:1"><label>Cant. de usos</label><input type="text" class="pers-dep-usos" value="' + (data.usos || '1') + '"/></div>' +
        '<div style="min-width:140px;flex:1"><label>Costo utilizado</label><input type="text" class="ud pers-dep-used" value="$ 0,00" readonly/></div>' +
        '<div style="flex:0 0 auto"><button class="copy-btn" type="button">Eliminar</button></div>';
      var modoSel = q('.pers-dep-modo', row);
      var vidaWrap = q('.pers-dep-vida-wrap', row);
      var capWrap = q('.pers-dep-cap-wrap', row);
      modoSel.addEventListener('change', function() { vidaWrap.style.display = (modoSel.value === 'vida') ? 'block' : 'none'; capWrap.style.display = (modoSel.value === 'vida') ? 'none' : 'block'; update(); });
      q('.copy-btn', row).addEventListener('click', function() { row.remove(); update(); });
      row.addEventListener('input', function(e) { if (e.target.matches('input,select')) update(); }, true);
      return row;
    }

    function makeMoRow(data) {
      data = data || {};
      var row = document.createElement('div');
      row.className = 'row pers-mo-row';
      row.style.cssText = 'gap:8px;align-items:flex-end;margin-top:6px;flex-wrap:nowrap;overflow-x:auto';
      row.innerHTML =
        '<div style="min-width:150px;flex:1"><label>Empleado / Proceso</label><input type="text" class="pers-mo-name" value="' + (data.nombre || '') + '" placeholder="Opcional"/></div>' +
        '<div style="min-width:140px;flex:1"><label>Sueldo mensual ($)</label><input type="text" class="pers-mo-sueldo" value="' + (data.sueldo || '0,00') + '"/></div>' +
        '<div style="min-width:120px;flex:1"><label>Horas/mes</label><input type="text" class="pers-mo-horas" value="' + (data.horasMes || '160') + '"/></div>' +
        '<div style="min-width:120px;flex:1"><label>Setup (min)</label><input type="text" class="pers-mo-setup" value="' + (data.setupMin || '0') + '"/></div>' +
        '<div style="min-width:120px;flex:1"><label>Run (min)</label><input type="text" class="pers-mo-run" value="' + (data.runMin || '0') + '"/></div>' +
        '<div style="min-width:110px;flex:1"><label>Unidades</label><input type="text" class="pers-mo-units" value="' + (data.units || '1') + '"/></div>' +
        '<div style="min-width:140px;flex:1"><label>MO por Ud.</label><input type="text" class="ud pers-mo-ud" value="$ 0,00" readonly/></div>' +
        '<div style="flex:0 0 auto"><button class="copy-btn pers-mo-del" type="button">Eliminar</button></div>';
      row.addEventListener('input', function(e) { if (e.target.matches('input,select,textarea')) update(); }, true);
      return row;
    }

    function makeAreaRow(data) {
      data = data || {};
      var mode = data.modo || 'cm2';
      var row = document.createElement('div');
      row.className = 'row pers-area-row';
      row.style.cssText = 'gap:10px;align-items:flex-end;margin-top:10px;flex-wrap:wrap';
      row.innerHTML =
        '<div style="min-width:200px;flex:2"><label>Nombre del material</label><input type="text" class="pers-area-name" value="' + (data.nombre || '') + '" placeholder="Ej. Vinil adhesivo impreso"/></div>' +
        '<div style="min-width:170px;flex:0 0 auto"><label>Modo de precio</label><select class="pers-area-mode"><option value="cm2"' + (mode === 'cm2' ? ' selected' : '') + '>Precio por cm²</option><option value="rollo"' + (mode === 'rollo' ? ' selected' : '') + '>Precio por rollo</option></select></div>' +
        '<div class="pers-area-cm2" style="min-width:160px;flex:0 0 auto;' + (mode === 'cm2' ? '' : 'display:none') + '"><label>Precio por cm² ($)</label><input type="text" class="pers-area-pcm2" value="' + (data.precio_cm2 || '0,00') + '"/></div>' +
        '<div class="pers-area-rollo" style="display:' + (mode === 'rollo' ? 'flex' : 'none') + ';gap:8px;flex-wrap:wrap;align-items:flex-end"><div style="min-width:160px"><label>Precio del rollo ($)</label><input type="text" class="pers-area-prollo" value="' + (data.precio_rollo || '0,00') + '"/></div><div style="min-width:120px"><label>Ancho rollo (cm)</label><input type="text" class="pers-area-ancho" value="' + (data.ancho_rollo || '0') + '"/></div><div style="min-width:120px"><label>Largo rollo (m)</label><input type="text" class="pers-area-largo" value="' + (data.largo_rollo || '0') + '"/></div></div>' +
        '<div style="min-width:120px"><label>Ancho a usar (cm)</label><input type="text" class="pers-area-usoancho" value="' + (data.ancho_uso || '0') + '"/></div>' +
        '<div style="min-width:120px"><label>Alto a usar (cm)</label><input type="text" class="pers-area-usoalto" value="' + (data.alto_uso || '0') + '"/></div>' +
        '<div style="min-width:110px"><label>Cantidad</label><input type="text" class="pers-area-cant" value="' + (data.cantidad || '1') + '"/></div>' +
        '<div style="min-width:110px"><label>Merma (%)</label><input type="text" class="pers-area-merma" value="' + (data.merma || '0') + '"/></div>' +
        '<div style="min-width:170px;flex:1"><label>Precio por cm² (calc.)</label><div class="pill"><span class="pers-area-pill-pcm2">$ 0,00</span></div></div>' +
        '<div style="min-width:160px;flex:1"><label>Área total (cm²)</label><div class="pill"><span class="pers-area-pill-area">0</span></div></div>' +
        '<div style="min-width:170px;flex:1"><label>Costo del material</label><div class="pill"><strong class="pers-area-pill-cost">$ 0,00</strong></div></div>' +
        '<div style="flex:0 0 auto"><button class="copy-btn pers-area-del" type="button">Eliminar</button></div>';
      return row;
    }

    function ensureMoBaseRow() {
      if (!moWrap) return;
      if (!moWrap.querySelector('.pers-mo-row')) moWrap.appendChild(makeMoRow({}));
    }

    // --- Update calculations ---
    function update() {
      // Directos
      var dirTotal = 0;
      dirWrap.querySelectorAll('.row').forEach(function(r) {
        var cant = pEU(q('.pers-dir-cant', r).value);
        var precio = pEU(q('.pers-dir-precio', r).value);
        var ud = cant > 0 ? (precio / cant) : 0;
        q('.pers-dir-ud', r).value = euro(ud);
        var util = Math.max(0, pEU((q('.pers-dir-utilcant', r) || {}).value || '1'));
        var used = ud * util;
        q('.pers-dir-used', r).value = euro(used);
        dirTotal += used;
      });

      // Material por area
      var areaTotal = 0;
      if (areaWrap) {
        areaWrap.querySelectorAll('.pers-area-row').forEach(function(r) {
          var mode = (q('.pers-area-mode', r) || {}).value || 'cm2';
          var precioCm2 = 0;
          if (mode === 'cm2') {
            precioCm2 = pEU((q('.pers-area-pcm2', r) || {}).value);
          } else {
            var pr = pEU((q('.pers-area-prollo', r) || {}).value);
            var ancho = pEU((q('.pers-area-ancho', r) || {}).value);
            var largoM = pEU((q('.pers-area-largo', r) || {}).value);
            var areaRollo = ancho * (largoM * 100);
            precioCm2 = areaRollo > 0 ? (pr / areaRollo) : 0;
          }
          var usoA = pEU((q('.pers-area-usoancho', r) || {}).value);
          var usoH = pEU((q('.pers-area-usoalto', r) || {}).value);
          var cant = Math.max(0, pEU((q('.pers-area-cant', r) || {}).value || '1'));
          var merma = Math.max(0, pEU((q('.pers-area-merma', r) || {}).value || '0'));
          var areaPieza = usoA * usoH;
          var areaTotalBase = areaPieza * cant;
          var areaFinal = areaTotalBase * (1 + merma / 100);
          var costo = areaFinal * precioCm2;
          var pillPCM2 = q('.pers-area-pill-pcm2', r);
          var pillArea = q('.pers-area-pill-area', r);
          var pillCost = q('.pers-area-pill-cost', r);
          if (pillPCM2) { var v = isFinite(precioCm2) ? precioCm2 : 0; pillPCM2.textContent = '$ ' + v.toFixed(6).replace('.', ','); }
          if (pillArea) pillArea.textContent = (isFinite(areaFinal) ? areaFinal : 0).toLocaleString('es-ES', {minimumFractionDigits: 2, maximumFractionDigits: 2});
          if (pillCost) pillCost.textContent = euro(costo);
          areaTotal += costo;
        });
      }
      var _areaOn = areaOnEl ? !!areaOnEl.checked : true;
      if (areaTotalEl) areaTotalEl.textContent = euro(_areaOn ? areaTotal : 0);
      if (_areaOn) dirTotal += areaTotal;

      // Depreciacion
      var depTotal = 0;
      depWrap.querySelectorAll('.row').forEach(function(r) {
        var precio = pEU(q('.pers-dep-precio', r).value);
        var modo = q('.pers-dep-modo', r).value;
        var ud = 0;
        if (modo === 'vida') { var vida = pEU(q('.pers-dep-vida', r).value); ud = vida > 0 ? (precio / vida) : 0; }
        else { var meses = pEU(q('.pers-dep-meses', r).value); var cap = pEU(q('.pers-dep-capacidad', r).value); var porMes = meses > 0 ? (precio / meses) : 0; ud = cap > 0 ? (porMes / cap) : 0; }
        q('.pers-dep-ud', r).value = euro(ud);
        var usos = Math.max(0, pEU((q('.pers-dep-usos', r) || {}).value || '1'));
        var used = ud * usos;
        q('.pers-dep-used', r).value = euro(used);
        depTotal += used;
      });

      // Indirectos
      var indUd = 0;
      if (indOn && indOn.checked) {
        var mens = pEU(indMensual ? indMensual.value : '0');
        var units = pEU(indUnits ? indUnits.value : '100');
        indUd = units > 0 ? (mens / units) : 0;
      }
      pills.indUd.textContent = euro(indUd);

      // Mano de obra
      var moUd = 0;
      if (moWrap) {
        moWrap.querySelectorAll('.pers-mo-row').forEach(function(r) {
          var sueldo = pEU((q('.pers-mo-sueldo', r) || {}).value || '0,00');
          var horasMes = pEU((q('.pers-mo-horas', r) || {}).value || '160');
          var setup = pEU((q('.pers-mo-setup', r) || {}).value || '0');
          var run = pEU((q('.pers-mo-run', r) || {}).value || '0');
          var units = pEU((q('.pers-mo-units', r) || {}).value || '1');
          var valorMin = (horasMes > 0) ? (sueldo / (horasMes * 60)) : 0;
          var minsTot = setup + run;
          var rowUd = (units > 0) ? (valorMin * minsTot / units) : 0;
          var out = q('.pers-mo-ud', r);
          if (out) out.value = euro(rowUd);
          if (moOn && moOn.checked) moUd += rowUd;
        });
      }
      pills.moUd.textContent = euro(moUd);

      var subtotal = dirTotal + depTotal + (indOn && indOn.checked ? indUd : 0) + (moOn && moOn.checked ? moUd : 0);

      // GI
      var G = 0, I = 0;
      var gp = pEU(gPct ? gPct.value : '0') / 100;
      var ip = pEU(iPct ? iPct.value : '0') / 100;
      if (gOn && gOn.checked) {
        if (gMode && gMode.value === 'Margen') { G = (gp >= 1) ? 0 : (subtotal * gp / (1 - gp)); }
        else { G = subtotal * gp; }
      }
      var baseImp = subtotal + G;
      if (iOn && iOn.checked) { I = baseImp * ip; }
      var pv = subtotal + G + I;

      pills.dir.textContent = euro(dirTotal);
      pills.dep.textContent = euro(depTotal);
      pills.ind.textContent = euro(indOn && indOn.checked ? indUd : 0);
      pills.mo.textContent  = euro(moOn && moOn.checked ? moUd : 0);
      pills.sub.textContent = euro(subtotal);
      pills.g.textContent   = euro(G);
      pills.i.textContent   = euro(I);
      pills.pv.textContent  = euro(pv);

      recalcQty();
      if (typeof window.resumen_update === 'function') window.resumen_update();
    }

    // --- Qty card ---
    function recalcQty() {
      var onEl = $('pers_qty_on'), qEl = $('pers_qty');
      if (!onEl || !qEl) return;
      var Q = Math.max(1, parseInt(qEl.value, 10) || 1);
      function getNum(id) { var el = $(id); return el ? parseEU(el.textContent || '0') : 0; }
      function setR(id, v) { var el = $(id); if (el) el.textContent = euro(v); }
      if (!onEl.checked) { setR('pers_qty_base', 0); setR('pers_qty_subtotal', 0); setR('pers_qty_g', 0); setR('pers_qty_i', 0); setR('pers_qty_total', 0); return; }
      var dir = getNum('pers_pill_dir'), dep = getNum('pers_pill_dep'), ind = getNum('pers_pill_ind');
      var sub = getNum('pers_pill_sub'), g = getNum('pers_pill_g'), i = getNum('pers_pill_i'), pvVal = getNum('pers_pv');
      setR('pers_qty_base', (dir + dep + ind) * Q);
      setR('pers_qty_subtotal', sub * Q);
      setR('pers_qty_g', g * Q);
      setR('pers_qty_i', i * Q);
      setR('pers_qty_total', pvVal * Q);
    }

    // --- Save / Load / Export / Import ---
    function currentToJSON() {
      var data = { name: (nameI ? nameI.value.trim() : '') || 'Producto sin nombre', directos: [], materiales_area: [], depreciacion: [], indirectos: {}, mo: {}, gi: {} };
      if (dirWrap) dirWrap.querySelectorAll('.row').forEach(function(r) {
        data.directos.push({ desc: (q('.pers-dir-desc', r) || {}).value || '', cant: (q('.pers-dir-cant', r) || {}).value || '', precio: (q('.pers-dir-precio', r) || {}).value || '', utilcant: (q('.pers-dir-utilcant', r) || {}).value || '' });
      });
      if (areaWrap) areaWrap.querySelectorAll('.pers-area-row').forEach(function(r) {
        data.materiales_area.push({ nombre: (q('.pers-area-name', r) || {}).value || '', incluir: true, modo: (q('.pers-area-mode', r) || {}).value || 'cm2', precio_cm2: (q('.pers-area-pcm2', r) || {}).value || '', precio_rollo: (q('.pers-area-prollo', r) || {}).value || '', ancho_rollo: (q('.pers-area-ancho', r) || {}).value || '', largo_rollo: (q('.pers-area-largo', r) || {}).value || '', ancho_uso: (q('.pers-area-usoancho', r) || {}).value || '', alto_uso: (q('.pers-area-usoalto', r) || {}).value || '', cantidad: (q('.pers-area-cant', r) || {}).value || '', merma: (q('.pers-area-merma', r) || {}).value || '' });
      });
      if (depWrap) depWrap.querySelectorAll('.row').forEach(function(r) {
        var modo = (q('.pers-dep-modo', r) || {}).value || 'vida';
        var item = { desc: (q('.pers-dep-desc', r) || {}).value || '', precio: (q('.pers-dep-precio', r) || {}).value || '', modo: modo, usos: (q('.pers-dep-usos', r) || {}).value || '' };
        if (modo === 'vida') item.vida = (q('.pers-dep-vida', r) || {}).value || '';
        else { item.meses = (q('.pers-dep-meses', r) || {}).value || ''; item.capacidad = (q('.pers-dep-capacidad', r) || {}).value || ''; }
        data.depreciacion.push(item);
      });
      var ind = {}; if (indOn) ind.on = !!indOn.checked; if (indMensual) ind.mensual = indMensual.value || '0,00'; if (indUnits) ind.units = indUnits.value || '100';
      function grab(id, def) { var el = $(id); return el ? (el.value || def) : def; }
      ind.alquiler = grab('pers_ind_alquiler', '0,00'); ind.internet = grab('pers_ind_internet', '0,00'); ind.suscripciones = grab('pers_ind_suscripciones', '0,00'); ind.transporte = grab('pers_ind_transporte', '0,00'); ind.electricidad = grab('pers_ind_electricidad', '0,00'); ind.publicidad = grab('pers_ind_publicidad', '0,00'); ind.otros = grab('pers_ind_otros', '0,00');
      data.indirectos = ind;
      var moData = {}; if (moOn) moData.on = !!moOn.checked; moData.lineas = [];
      if (moWrap) moWrap.querySelectorAll('.pers-mo-row').forEach(function(r) {
        moData.lineas.push({ nombre: (q('.pers-mo-name', r) || {}).value || '', sueldo: (q('.pers-mo-sueldo', r) || {}).value || '0,00', horasMes: (q('.pers-mo-horas', r) || {}).value || '160', setupMin: (q('.pers-mo-setup', r) || {}).value || '0', runMin: (q('.pers-mo-run', r) || {}).value || '0', units: (q('.pers-mo-units', r) || {}).value || '1' });
      });
      data.mo = moData;
      var giData = {}; if (gMode) giData.modo = gMode.value || 'Margen'; if (gOn) { giData.gOn = !!gOn.checked; giData.gPct = gPct ? (gPct.value || '0') : '0'; } if (iOn) { giData.iOn = !!iOn.checked; giData.iPct = iPct ? (iPct.value || '0') : '0'; }
      data.gi = giData;
      return data;
    }

    function fillFromJSON(data) {
      data = data || {};
      if (nameI) nameI.value = data.name || '';
      if (dirWrap) { dirWrap.innerHTML = ''; (data.directos || []).forEach(function(d) { dirWrap.appendChild(makeDirRow(d || {})); }); if (!dirWrap.children.length) dirWrap.appendChild(makeDirRow({})); }
      if (areaWrap) { areaWrap.innerHTML = ''; (data.materiales_area || []).forEach(function(m) { areaWrap.appendChild(makeAreaRow(m || {})); }); if (!areaWrap.children.length) areaWrap.appendChild(makeAreaRow({})); }
      if (depWrap) { depWrap.innerHTML = ''; (data.depreciacion || []).forEach(function(d) { depWrap.appendChild(makeDepRow(d || {})); }); if (!depWrap.children.length) depWrap.appendChild(makeDepRow({})); }
      var ind = data.indirectos || {};
      if (indOn) indOn.checked = !!ind.on;
      var indCfgBox = $('pers_ind_cfg'); if (indCfgBox) indCfgBox.style.display = (indOn && indOn.checked) ? 'block' : 'none';
      function setVal(id, val, def) { var el = $(id); if (el) el.value = (val != null && val !== '') ? val : def; }
      if (indMensual) indMensual.value = (ind.mensual != null && ind.mensual !== '') ? ind.mensual : '0,00';
      if (indUnits) indUnits.value = (ind.units != null && ind.units !== '') ? ind.units : '100';
      setVal('pers_ind_alquiler', ind.alquiler, '0,00'); setVal('pers_ind_internet', ind.internet, '0,00'); setVal('pers_ind_suscripciones', ind.suscripciones, '0,00'); setVal('pers_ind_transporte', ind.transporte, '0,00'); setVal('pers_ind_electricidad', ind.electricidad, '0,00'); setVal('pers_ind_publicidad', ind.publicidad, '0,00'); setVal('pers_ind_otros', ind.otros, '0,00');
      recalcIndirectosMensual();
      var mo = data.mo || {};
      if (moOn) moOn.checked = !!mo.on;
      var moCfg = $('pers_mo_cfg'); if (moCfg) moCfg.style.display = (moOn && moOn.checked) ? 'block' : 'none';
      if (moWrap) { moWrap.innerHTML = ''; var moLines = (Array.isArray(mo.lineas) && mo.lineas.length) ? mo.lineas : [{ sueldo: mo.sueldo || '0,00', horasMes: mo.horasMes || '160', setupMin: mo.setupMin || '0', runMin: mo.runMin || '0', units: mo.units || '1' }]; moLines.forEach(function(item) { moWrap.appendChild(makeMoRow(item || {})); }); ensureMoBaseRow(); }
      var gi = data.gi || {};
      if (gMode) gMode.value = gi.modo || 'Margen';
      if (gOn) gOn.checked = !!gi.gOn;
      if (gPct) gPct.value = gi.gPct || '30';
      if (iOn) iOn.checked = !!gi.iOn;
      if (iPct) iPct.value = gi.iPct || '16';
      update();
    }

    function refreshLoader() {
      var all = loadAll();
      loaderSel.innerHTML = '<option value="">— Cargar guardado —</option>' + all.map(function(p, i) { return '<option value="' + i + '">' + (p.name || 'Sin nombre') + '</option>'; }).join('');
      loaderSel.onchange = function() { var idx = parseInt(loaderSel.value); if (!isNaN(idx)) fillFromJSON(all[idx]); };
    }

    function saveCurrent() { var data = currentToJSON(); var all = loadAll(); var idx = all.findIndex(function(p) { return (p.name || '').toLowerCase() === data.name.toLowerCase(); }); if (idx >= 0) { if (!confirm('Ya existe un producto con ese nombre. Reemplazar?')) return; all[idx] = data; } else { all.push(data); } saveAll(all); refreshLoader(); showToast('Guardado.'); }
    function deleteCurrent() { var name = (nameI.value || '').trim(); if (!name) { showToast('Asigna un nombre primero.'); return; } var all = loadAll(); var idx = all.findIndex(function(p) { return (p.name || '').toLowerCase() === name.toLowerCase(); }); if (idx < 0) { showToast('No existe guardado con ese nombre.'); return; } if (!confirm('Borrar "' + name + '"?')) return; all.splice(idx, 1); saveAll(all); refreshLoader(); showToast('Borrado.'); }

    function exportJSON() { var data = currentToJSON(); var blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}); var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'producto-' + (data.name || 'personalizado') + '.json'; a.click(); URL.revokeObjectURL(a.href); }
    function exportCSV() {
      var data = currentToJSON(); var rows = []; rows.push(['Tipo','Descripción','Cantidad','Precio','Vida','Meses','Capacidad','On','Valor']);
      (data.directos || []).forEach(function(d) { rows.push(['Directo', d.desc, d.cant, d.precio, '', '', '', '', '']); });
      (data.depreciacion || []).forEach(function(d) { if (d.modo === 'vida') rows.push(['Depreciacion', d.desc, '', d.precio, d.vida, '', '', '', '']); else rows.push(['Depreciacion', d.desc, '', d.precio, '', d.meses, d.capacidad, '', '']); });
      var csv = rows.map(function(r) { return r.map(function(x) { var s = (x == null) ? '' : String(x); if (/[",;\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"'; return s; }).join(';'); }).join('\n');
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'})); a.download = 'producto-' + (data.name || 'personalizado') + '.csv'; a.click(); URL.revokeObjectURL(a.href);
    }
    function exportCatalogJSON() { var all = loadAll(); var blob = new Blob([JSON.stringify(all, null, 2)], {type: 'application/json'}); var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'catalogo-productos-personalizable.json'; a.click(); URL.revokeObjectURL(a.href); }
    function exportCatalogCSV() { var all = loadAll(); var header = ['name','directos','materiales_area','depreciacion','indirectos','mo','gi']; var lines = [header.join(';')]; all.forEach(function(p) { lines.push([p.name || '', JSON.stringify(p.directos || []), JSON.stringify(p.materiales_area || []), JSON.stringify(p.depreciacion || []), JSON.stringify(p.indirectos || {}), JSON.stringify(p.mo || {}), JSON.stringify(p.gi || {})].map(function(x) { var s = (x == null) ? '' : String(x); if (/[\";\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"'; return s; }).join(';')); }); var csv = lines.join('\n'); var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'})); a.download = 'catalogo-productos-personalizable.csv'; a.click(); URL.revokeObjectURL(a.href); }

    function onImport(ev) { var file = ev.target.files && ev.target.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function() { try { var data = JSON.parse(String(reader.result || '{}')); if (!data || !data.name) { showToast('JSON inválido.'); return; } var all = loadAll(); var idx = all.findIndex(function(p) { return (p.name || '').toLowerCase() === (data.name || '').toLowerCase(); }); if (idx >= 0) { if (confirm('Ya existe. Reemplazar?')) all[idx] = data; else all.push(data); } else { all.push(data); } saveAll(all); refreshLoader(); fillFromJSON(data); showToast('Importado.'); } catch(e) { showToast('Error: ' + e.message); } }; reader.readAsText(file); ev.target.value = ''; }
    function onImportCatalog(ev) { var file = ev.target.files && ev.target.files[0]; if (!file) return; var mode = (importModeSel && importModeSel.value) || 'merge'; var reader = new FileReader(); reader.onload = function() { try { var raw = String(reader.result || ''); var incoming = JSON.parse(raw); if (!Array.isArray(incoming)) { if (incoming && Array.isArray(incoming.products)) incoming = incoming.products; else if (incoming && Array.isArray(incoming.catalog)) incoming = incoming.catalog; else throw new Error('Formato inválido.'); } if (mode === 'replace') { saveAll(incoming); } else { var existing = loadAll(); var map = new Map(); existing.forEach(function(p) { map.set((p.name || '').toLowerCase(), p); }); incoming.forEach(function(p) { map.set((p.name || '').toLowerCase(), p); }); saveAll(Array.from(map.values())); } refreshLoader(); if (incoming[0]) fillFromJSON(incoming[0]); showToast('Catálogo importado.'); } catch(e) { showToast('Error: ' + e.message); } }; reader.readAsText(file); ev.target.value = ''; }

    function reset() {
      if (nameI) nameI.value = '';
      if (dirWrap) { dirWrap.innerHTML = ''; dirWrap.appendChild(makeDirRow({})); }
      if (areaWrap) { areaWrap.innerHTML = ''; areaWrap.appendChild(makeAreaRow({})); }
      if (areaOnEl) areaOnEl.checked = false;
      var _areaBody = $('pers_area_body'); if (_areaBody) _areaBody.style.display = 'none';
      if (depWrap) { depWrap.innerHTML = ''; depWrap.appendChild(makeDepRow({})); }
      if (indOn) indOn.checked = false;
      var indCfgBox = $('pers_ind_cfg'); if (indCfgBox) indCfgBox.style.display = 'none';
      if (indMensual) indMensual.value = '0,00'; if (indUnits) indUnits.value = '100';
      if (moOn) moOn.checked = false;
      var moCfg = $('pers_mo_cfg'); if (moCfg) { moCfg.style.display = 'none'; }
      if (moWrap) { moWrap.innerHTML = ''; moWrap.appendChild(makeMoRow({})); }
      if (gMode) gMode.value = 'Margen'; if (gOn) gOn.checked = false; if (gPct) gPct.value = '30';
      if (iOn) iOn.checked = false; if (iPct) iPct.value = '16';
      update();
    }

    // --- Wire events ---
    $('pers_add_dir').addEventListener('click', function() { dirWrap.appendChild(makeDirRow()); update(); });
    $('pers_add_dep').addEventListener('click', function() { depWrap.appendChild(makeDepRow()); update(); });
    var moAddBtn = $('pers_mo_add');
    if (moAddBtn) moAddBtn.addEventListener('click', function() { if (moWrap) moWrap.appendChild(makeMoRow({})); var box = $('pers_mo_cfg'); if (box) { box.style.display = 'block'; } update(); });

    if (indOn) indOn.addEventListener('change', function() { var cfg = $('pers_ind_cfg'); if (cfg) cfg.style.display = indOn.checked ? 'block' : 'none'; update(); });
    [indMensual, indUnits].forEach(function(inp) { if (inp) inp.addEventListener('input', update); });
    [indAlq, indInt, indSus, indTra, indEle, indPub, indOtr].forEach(function(inp) { if (inp) inp.addEventListener('input', function() { recalcIndirectosMensual(); update(); }); });

    if (moOn) moOn.addEventListener('change', function() { var box = $('pers_mo_cfg'); if (!moOn.checked && box) box.style.display = 'none'; update(); });
    if (moWrap) {
      moWrap.addEventListener('click', function(e) { var btn = e.target.closest('.pers-mo-del'); if (!btn) return; var row = btn.closest('.pers-mo-row'); if (!row) return; if (moWrap.querySelectorAll('.pers-mo-row').length <= 1) { row.replaceWith(makeMoRow({})); } else { row.remove(); } update(); });
      moWrap.addEventListener('input', function(e) { if (e.target.matches('input,select,textarea')) update(); });
    }

    [gMode, gOn, gPct, iOn, iPct].forEach(function(inp) { if (inp) inp.addEventListener('input', update); });

    // Config toggles
    var indCfgBtn = $('pers_ind_cfg_btn');
    if (indCfgBtn) indCfgBtn.addEventListener('click', function() { var box = $('pers_ind_cfg'); if (box) box.style.display = (box.style.display !== 'block') ? 'block' : 'none'; });
    var moCfgBtn = $('pers_mo_cfg_btn');
    if (moCfgBtn) moCfgBtn.addEventListener('click', function(ev) { ev.preventDefault(); ev.stopPropagation(); var box = $('pers_mo_cfg'); if (box) box.style.display = (getComputedStyle(box).display === 'none') ? 'block' : 'none'; });

    // Area card
    if (areaOnEl) areaOnEl.addEventListener('change', update);
    var areaAddBtn = $('pers_area_add');
    if (areaAddBtn && areaWrap) areaAddBtn.addEventListener('click', function() { areaWrap.appendChild(makeAreaRow({})); update(); });
    var areaCard = $('pers_area_card');
    if (areaCard) {
      var areaHandler = function(ev) {
        var t = ev.target;
        if (ev.type === 'input' || ev.type === 'change') update();
        var row = t && t.closest ? t.closest('.pers-area-row') : null;
        if (ev.type === 'click') { var del = t.closest && t.closest('.pers-area-del'); if (del && row) { row.remove(); update(); return; } }
        if (row && t && t.classList && t.classList.contains('pers-area-mode')) {
          var mode = t.value;
          var cm2Box = q('.pers-area-cm2', row), rolloBox = q('.pers-area-rollo', row);
          if (cm2Box) cm2Box.style.display = (mode === 'cm2') ? 'block' : 'none';
          if (rolloBox) rolloBox.style.display = (mode === 'rollo') ? 'flex' : 'none';
          update();
        }
      };
      areaCard.addEventListener('input', areaHandler, true);
      areaCard.addEventListener('change', areaHandler, true);
      areaCard.addEventListener('click', areaHandler, true);
    }
    var areaCfgBtn = $('pers_area_cfg');
    var areaBody = $('pers_area_body');
    if (areaBody) areaBody.style.display = 'none';
    if (areaCfgBtn && areaBody) areaCfgBtn.addEventListener('click', function() { areaBody.style.display = (areaBody.style.display !== 'none') ? 'none' : 'block'; update(); });

    // Save / Load / Export / Import
    $('pers_save').addEventListener('click', saveCurrent);
    $('pers_delete').addEventListener('click', deleteCurrent);
    $('pers_export_json').addEventListener('click', exportJSON);
    $('pers_export_csv').addEventListener('click', exportCSV);
    if (importI) importI.addEventListener('change', onImport);
    $('pers_export_catalog_json').addEventListener('click', exportCatalogJSON);
    $('pers_export_catalog_csv').addEventListener('click', exportCatalogCSV);
    if (importCatalogI) importCatalogI.addEventListener('change', onImportCatalog);
    $('pers_reset').addEventListener('click', reset);
    var printBtn = $('pers_btn_print');
    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });

    // Qty card
    var qtyOn = $('pers_qty_on'), qtyInput = $('pers_qty');
    if (qtyOn) qtyOn.addEventListener('change', recalcQty);
    if (qtyInput) { qtyInput.addEventListener('input', recalcQty); qtyInput.addEventListener('change', recalcQty); }

    // Expose
    window.pers_update = update;
    window.pers_reset = reset;

    // Init
    ensureMoBaseRow();
    dirWrap.appendChild(makeDirRow({ desc: '', cant: '1', precio: '0,00' }));
    if (areaWrap) areaWrap.appendChild(makeAreaRow({}));
    depWrap.appendChild(makeDepRow({ desc: '', precio: '0,00', modo: 'vida', vida: '100' }));
    refreshLoader();
    update();
  }
});
