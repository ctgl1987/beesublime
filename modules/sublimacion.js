/* ══════════════════════════════════════════════
   BeeSublime — Sublimación Module
   ══════════════════════════════════════════════ */
registerModule('sublimacion', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Cálculo de costos — Sublimación</h3>',
    '<div class="sep"></div>',
    '</div>',

    '<!-- Costos directos -->',
    '<div class="card md-6" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Costos directos</h4>',

    '<!-- Producto principal -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_prod_on" type="checkbox"/>',
    '<span>Producto</span>',
    '</label>',
    '<select id="sub_d_prod_select" style="min-width:240px">',
    '<option value="taza11">Taza 11oz (pack 36)</option>',
    '<option value="tazaMagica11">Taza mágica 11oz (pack 12)</option>',
    '<option value="jarra">Jarra / Beer stein (pack 24)</option>',
    '<option value="termo20">Termo 20oz (pack 24)</option>',
    '<option value="camisetaPoly">Camiseta poliéster 100% (unidad)</option>',
    '<option value="llavero50">Llavero (pack 50)</option>',
    '<option value="mousepad50">Mousepad (pack 50)</option>',
    '<option value="otros">Otros</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_prod_cant" min="0" step="1" type="number" value="36"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_prod_precio" min="0" step="0.01" type="text" value="60,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_prod_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:140px"><label>Cantidad a utilizar</label><input id="sub_d_prod_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_d_prod_used" readonly type="text"/></div>',
    '</div>',
    '<div class="sep"></div>',

    '<!-- Papel -->',
    '<div class="row" style="gap:8px;align-items:center">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_papel_on" type="checkbox"/> Papel',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_papel_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_papel_precio" min="0" step="0.01" type="text" value="10,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_papel_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:140px"><label>Cantidad a utilizar</label><input id="sub_d_papel_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_d_papel_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Tinta -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_tinta_on" type="checkbox"/> Tinta de sublimación',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_tinta_cant" min="0" step="1" type="number" value="300"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_tinta_precio" min="0" step="0.01" type="text" value="40,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_tinta_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:140px"><label>Cantidad a utilizar</label><input id="sub_d_tinta_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_d_tinta_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Cinta térmica -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_cinta_on" type="checkbox"/> Cinta térmica',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_cinta_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_cinta_precio" min="0" step="0.01" type="text" value="3,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_cinta_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:140px"><label>Cantidad a utilizar</label><input id="sub_d_cinta_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_d_cinta_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Funda Retráctil -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_funda_on" type="checkbox"/> Funda Retráctil',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_funda_cant" min="0" step="1" type="number" value="50"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_funda_precio" min="0" step="0.01" type="text" value="15,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_funda_ud" readonly type="text"/></div>',
    '</div>',

    '<!-- Empaque -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_d_empaque_on" type="checkbox"/> Empaque',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="sub_d_empaque_cant" min="0" step="1" type="number" value="50"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="sub_d_empaque_precio" min="0" step="0.01" type="text" value="5,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="sub_d_empaque_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:140px"><label>Cantidad a utilizar</label><input id="sub_d_empaque_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_d_empaque_used" readonly type="text"/></div>',
    '</div>',
    '</div>',

    '<!-- Depreciación -->',
    '<div class="card md-6" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Depreciación de equipos <span class="muted">(base 2 años)</span></h4>',

    '<!-- Impresora -->',
    '<div class="row" style="gap:8px;align-items:center">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_e_impresora_on" type="checkbox"/> Impresora',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input data-prod="100" id="sub_e_impresora_precio" min="0" step="0.01" type="text" value="240"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_impresora_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_impresora_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="sub_e_impresora_uses" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_e_impresora_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Plancha -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_e_plancha_on" type="checkbox"/> Plancha térmica',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input data-prod="100" id="sub_e_plancha_precio" min="0" step="0.01" type="text" value="400"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_plancha_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_plancha_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="sub_e_plancha_uses" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_e_plancha_used" readonly type="text"/></div>',
    '</div>',

    '<!-- PC -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_e_pc_on" type="checkbox"/> Computadora',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input data-prod="100" id="sub_e_pc_precio" min="0" step="0.01" type="text" value="350"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_pc_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_pc_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="sub_e_pc_uses" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_e_pc_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Prensa para tazas -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_e_prensa_on" type="checkbox"/> Prensa para tazas',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input data-prod="100" id="sub_e_prensa_precio" min="0" step="0.01" type="text" value="180"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_prensa_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_prensa_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="sub_e_prensa_uses" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_e_prensa_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Resistencia -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="sub_e_res_on" type="checkbox"/> Resistencia para tazas o termos',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input data-prod="100" id="sub_e_res_precio" min="0" step="0.01" type="text" value="50"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_res_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_res_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="sub_e_res_uses" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:140px"><label>Costo utilizado</label><input class="ud" id="sub_e_res_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Horno de Sublimación -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="sub_e_horno_on" type="checkbox"/> Horno de Sublimación',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="sub_e_horno_precio" min="0" step="0.01" type="text" value="350,00"/></div>',
    '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="sub_e_horno_mes" readonly type="text"/></div>',
    '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="sub_e_horno_ud" readonly type="text"/></div>',
    '</div>',
    '</div>',

    '<!-- Costos indirectos -->',
    '<div class="card md-12 indA-card" id="sub_ind_card">',
    '<h4>Costos indirectos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="sub_ind_on" type="checkbox"/> Activar</label>',
    '<div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="sub_ind_ud">$ 0,00</span></div>',
    '<div style="margin-left:auto"><button class="btn" id="sub_ind_cfg_btn">Configurar</button></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div id="sub_ind_cfg" style="display:none">',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="sub_ind_alquiler" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="sub_ind_internet" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="sub_ind_suscripciones" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="sub_ind_transporte" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="sub_ind_electricidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="sub_ind_publicidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="sub_ind_otros" type="text" value="0,00"/></div>',
    '<div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="sub_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '</div>',
    '</div>',
    '</div>',

    '<!-- Totales / G&I / Mano de obra -->',
    '<div class="card md-12">',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Total directos: <span class="result" id="sub_total_directos">$ 0,00</span></div>',
    '<div class="pill">Total depreciación: <span class="result" id="sub_total_depr">$ 0,00</span></div>',
    '<div class="pill">Total sin G/I: <span class="result" id="sub_subtotal_no_gi">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0">',
    '<input id="sub_mo_on" type="checkbox"/> Mano de obra',
    '</label>',
    '<button class="copy-btn" id="sub_mo_cfg_btn" type="button">Configurar</button>',
    '</div>',
    '<div class="row" id="sub_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '<div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="sub_mo_sueldo" type="text" value="400,00"/></div>',
    '<div style="min-width:160px"><label>Horas al mes</label><input id="sub_mo_horas_mes" type="text" value="176"/></div>',
    '<div style="min-width:140px"><label>Setup (min)</label><input id="sub_mo_setup" type="text" value="5,00"/></div>',
    '<div style="min-width:180px"><label>Ejecución (min/ud)</label><input id="sub_mo_run" type="text" value="2,00"/></div>',
    '<div style="min-width:140px"><label>Unidades</label><input id="sub_mo_units" type="text" value="1"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '<div class="pill" id="sub_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="sub_mo_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row">',
    '<div style="flex:1;min-width:160px"><label><input checked id="sub_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="sub_ganancia" min="0" step="1" type="number" value="40"/></div>',
    '<div style="flex:1;min-width:160px"><label><input checked id="sub_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="sub_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Subtotal: <span class="result" id="sub_subtotal">$ 0,00</span></div>',
    '<div class="pill">+ Ganancia: <span class="result" id="sub_ganancia_val">$ 0,00</span></div>',
    '<div class="pill">+ Impuestos: <span class="result" id="sub_impuestos_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="tot">Precio de Venta: <span class="result" id="sub_total">$ 0,00</span></div>',
    '<div class="center-actions">',
    '<button class="copy-btn" id="sub_btn_print">Exportar a PDF / Imprimir</button>',
    '<button class="copy-btn" id="sub_btn_copy">Copiar</button>',
    '<button class="btn reset" id="sub_btn_reset">Reset</button>',
    '</div>',
    '</div>',

    '<!-- Cantidad de productos -->',
    '<div class="card md-12" id="sub_qty_card">',
    '  <div class="row" style="align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">',
    '    <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '      <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0">',
    '        <input type="checkbox" id="sub_qty_on"/>',
    '        <span>Cantidad de productos</span>',
    '      </label>',
    '      <input type="number" id="sub_qty" min="1" step="1" value="1" style="max-width:100px"/>',
    '      <span class="muted">Multiplica los totales por Q (solo vista, no cambia los cálculos base).</span>',
    '    </div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I ×Q</span><span class="result mono" id="sub_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal ×Q</span><span class="result mono" id="sub_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia ×Q</span><span class="result mono" id="sub_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos ×Q</span><span class="result mono" id="sub_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total ×Q</span><span class="result mono" id="sub_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id); };

    /* ---------- Producto presets ---------- */
    var PRODUCTOS = {
      taza11:       { qty:36,  price:60.00 },
      tazaMagica11: { qty:12,  price:24.99 },
      jarra:        { qty:24,  price:139.95 },
      termo20:      { qty:24,  price:203.00 },
      camisetaPoly: { qty:1,   price:3.55 },
      llavero50:    { qty:50,  price:65.00 },
      mousepad50:   { qty:50,  price:50.00 },
      otros:        { qty:1,   price:0.00 }
    };

    function applyPreset() {
      var key = $('sub_d_prod_select').value;
      var p = PRODUCTOS[key] || PRODUCTOS.otros;
      $('sub_d_prod_cant').value = p.qty;
      $('sub_d_prod_precio').value = fmt(p.price).replace('$ ', '');
      recalc();
    }

    /* ---------- Helpers ---------- */
    function clampPos(n) { return (isFinite(n) && n > 0) ? n : 0; }
    function unitCost(cantEl, precioEl) {
      var c = clampPos(parseEU(cantEl.value));
      var p = clampPos(parseEU(precioEl.value));
      return c > 0 ? (p / c) : 0;
    }
    function depMes(precio) { return clampPos(precio) / 24.0; }
    function depUd(precio, prodMes) {
      var mes = depMes(precio);
      var u = clampPos(prodMes);
      return u > 0 ? (mes / u) : 0;
    }

    /* ---------- Mano de obra ---------- */
    function calcMO() {
      if (!$('sub_mo_on').checked) return 0;
      var sueldo = parseEU($('sub_mo_sueldo').value);
      var horas  = parseEU($('sub_mo_horas_mes').value) || 176;
      var setupM = parseEU($('sub_mo_setup').value);
      var runM   = parseEU($('sub_mo_run').value);
      var uds    = Math.max(1, parseEU($('sub_mo_units').value));
      var valorHora = (horas > 0) ? (sueldo / horas) : 0;
      var totalMin = setupM + (runM * uds);
      return clampPos((valorHora / 60.0) * totalMin);
    }

    /* ---------- Indirectos ---------- */
    function calcIndirectos() {
      if (!$('sub_ind_on').checked) {
        $('sub_ind_ud').textContent = fmt(0);
        return 0;
      }
      var fields = ['alquiler','internet','suscripciones','transporte','electricidad','publicidad','otros'];
      var mens = 0;
      fields.forEach(function(k) { mens += parseEU($('sub_ind_' + k).value); });
      var units = Math.max(1, parseEU($('sub_ind_units').value) || 100);
      var ud = mens / units;
      $('sub_ind_ud').textContent = fmt(ud);
      return ud;
    }

    /* ---------- MAIN RECALC ---------- */
    function recalc() {
      /* Directos: compute unit cost and used cost */
      var directRows = [
        { on:'sub_d_prod_on', cant:'sub_d_prod_cant', precio:'sub_d_prod_precio', ud:'sub_d_prod_ud', use:'sub_d_prod_use', used:'sub_d_prod_used' },
        { on:'sub_d_papel_on', cant:'sub_d_papel_cant', precio:'sub_d_papel_precio', ud:'sub_d_papel_ud', use:'sub_d_papel_use', used:'sub_d_papel_used' },
        { on:'sub_d_tinta_on', cant:'sub_d_tinta_cant', precio:'sub_d_tinta_precio', ud:'sub_d_tinta_ud', use:'sub_d_tinta_use', used:'sub_d_tinta_used' },
        { on:'sub_d_cinta_on', cant:'sub_d_cinta_cant', precio:'sub_d_cinta_precio', ud:'sub_d_cinta_ud', use:'sub_d_cinta_use', used:'sub_d_cinta_used' },
        { on:'sub_d_empaque_on', cant:'sub_d_empaque_cant', precio:'sub_d_empaque_precio', ud:'sub_d_empaque_ud', use:'sub_d_empaque_use', used:'sub_d_empaque_used' }
      ];

      var directos = 0;
      directRows.forEach(function(r) {
        var udVal = unitCost($(r.cant), $(r.precio));
        $(r.ud).value = fmt(udVal);
        var useVal = clampPos(parseEU($(r.use).value));
        var usedVal = udVal * useVal;
        $(r.used).value = fmt(usedVal);
        if ($(r.on).checked) directos += usedVal;
      });

      /* Funda (no "use" column) */
      var funda_cant = clampPos(parseEU($('sub_d_funda_cant').value));
      var funda_prec = clampPos(parseEU($('sub_d_funda_precio').value));
      var funda_ud = funda_cant > 0 ? (funda_prec / funda_cant) : 0;
      $('sub_d_funda_ud').value = fmt(funda_ud);
      if ($('sub_d_funda_on').checked) directos += funda_ud;

      /* Depreciación */
      var depRows = [
        { on:'sub_e_impresora_on', precio:'sub_e_impresora_precio', mes:'sub_e_impresora_mes', ud:'sub_e_impresora_ud', uses:'sub_e_impresora_uses', used:'sub_e_impresora_used' },
        { on:'sub_e_plancha_on', precio:'sub_e_plancha_precio', mes:'sub_e_plancha_mes', ud:'sub_e_plancha_ud', uses:'sub_e_plancha_uses', used:'sub_e_plancha_used' },
        { on:'sub_e_pc_on', precio:'sub_e_pc_precio', mes:'sub_e_pc_mes', ud:'sub_e_pc_ud', uses:'sub_e_pc_uses', used:'sub_e_pc_used' },
        { on:'sub_e_prensa_on', precio:'sub_e_prensa_precio', mes:'sub_e_prensa_mes', ud:'sub_e_prensa_ud', uses:'sub_e_prensa_uses', used:'sub_e_prensa_used' },
        { on:'sub_e_res_on', precio:'sub_e_res_precio', mes:'sub_e_res_mes', ud:'sub_e_res_ud', uses:'sub_e_res_uses', used:'sub_e_res_used' }
      ];

      var depr = 0;
      depRows.forEach(function(r) {
        var precio = clampPos(parseEU($(r.precio).value));
        var prodMes = parseEU($(r.precio).getAttribute('data-prod') || '100') || 100;
        var mes = depMes(precio);
        var ud = depUd(precio, prodMes);
        $(r.mes).value = fmt(mes);
        $(r.ud).value = fmt(ud);
        var usesVal = clampPos(parseEU($(r.uses).value));
        var usedVal = ud * usesVal;
        $(r.used).value = fmt(usedVal);
        if ($(r.on).checked) depr += usedVal;
      });

      /* Horno (no "uses" column) */
      var horno_prec = clampPos(parseEU($('sub_e_horno_precio').value));
      var horno_mes = depMes(horno_prec);
      var horno_ud = horno_mes / 100;
      $('sub_e_horno_mes').value = fmt(horno_mes);
      $('sub_e_horno_ud').value = fmt(horno_ud);
      if ($('sub_e_horno_on').checked) depr += horno_ud;

      /* Indirectos + MO */
      var ind = calcIndirectos();
      var mo = calcMO();

      /* Totals */
      $('sub_total_directos').textContent = fmt(directos);
      $('sub_total_depr').textContent = fmt(depr);
      var noGI = directos + depr + ind + mo;
      $('sub_subtotal_no_gi').textContent = fmt(noGI);

      /* MO pill */
      $('sub_mo_pill').style.display = $('sub_mo_on').checked ? 'inline-flex' : 'none';
      $('sub_mo_val').textContent = fmt(mo);

      /* G/I */
      var subtotal = noGI;
      var gOn = $('sub_chk_ganancia').checked;
      var iOn = $('sub_chk_impuestos').checked;
      var gPct = parseEU($('sub_ganancia').value);
      var iPct = parseEU($('sub_impuestos').value);
      var gVal = gOn ? (subtotal * (gPct / 100)) : 0;
      var iVal = iOn ? ((subtotal + gVal) * (iPct / 100)) : 0;
      var total = subtotal + gVal + iVal;

      $('sub_subtotal').textContent = fmt(subtotal);
      $('sub_ganancia_val').textContent = fmt(gVal);
      $('sub_impuestos_val').textContent = fmt(iVal);
      $('sub_total').textContent = fmt(total);

      /* Cantidad de productos */
      recalcQty(noGI, subtotal, gVal, iVal, total);

      /* Persist key for resumen */
      try { if (window.resumen_update) window.resumen_update(); } catch(e) {}
    }

    /* ---------- Cantidad de productos (Q) ---------- */
    function recalcQty(noGI, subtotal, gVal, iVal, total) {
      var qtyOn = $('sub_qty_on');
      var qtyInp = $('sub_qty');
      if (!qtyOn || !qtyInp) return;
      if (!qtyOn.checked) {
        ['sub_qty_base','sub_qty_subtotal','sub_qty_g','sub_qty_i','sub_qty_total'].forEach(function(id) {
          $(id).textContent = fmt(0);
        });
        return;
      }
      var Q = Math.max(1, parseInt(qtyInp.value, 10) || 1);
      qtyInp.value = Q;
      $('sub_qty_base').textContent = fmt(noGI * Q);
      $('sub_qty_subtotal').textContent = fmt(subtotal * Q);
      $('sub_qty_g').textContent = fmt(gVal * Q);
      $('sub_qty_i').textContent = fmt(iVal * Q);
      $('sub_qty_total').textContent = fmt(total * Q);
    }

    /* ---------- Events ---------- */
    $('sub_d_prod_select').addEventListener('change', applyPreset);

    view.querySelectorAll('input, select').forEach(function(el) {
      el.addEventListener('input', recalc);
      el.addEventListener('change', recalc);
    });

    /* MO config toggle */
    $('sub_mo_cfg_btn').addEventListener('click', function() {
      var cfg = $('sub_mo_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'flex' : 'none';
      $('sub_mo_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    /* Indirectos config toggle */
    $('sub_ind_cfg_btn').addEventListener('click', function() {
      var cfg = $('sub_ind_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'block' : 'none';
      $('sub_ind_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    /* Copy */
    $('sub_btn_copy').addEventListener('click', function() {
      var lines = [
        'Sublimacion',
        'Producto: ' + ($('sub_d_prod_select').selectedOptions[0]||{}).text,
        'Directos: ' + $('sub_total_directos').textContent,
        'Depreciacion: ' + $('sub_total_depr').textContent,
        'Sin G/I: ' + $('sub_subtotal_no_gi').textContent,
        $('sub_mo_on').checked ? ('Mano de obra: ' + $('sub_mo_val').textContent) : null,
        'Subtotal: ' + $('sub_subtotal').textContent,
        $('sub_chk_ganancia').checked ? ('+ Ganancia (' + $('sub_ganancia').value + '%): ' + $('sub_ganancia_val').textContent) : null,
        $('sub_chk_impuestos').checked ? ('+ Impuestos (' + $('sub_impuestos').value + '%): ' + $('sub_impuestos_val').textContent) : null,
        'Precio de Venta: ' + $('sub_total').textContent
      ].filter(Boolean).join('\n');
      copyText(lines);
    });

    /* Print */
    $('sub_btn_print').addEventListener('click', function() { window.print(); });

    /* Reset */
    $('sub_btn_reset').addEventListener('click', function() {
      view.querySelectorAll('input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
      $('sub_mo_cfg').style.display = 'none';
      $('sub_ind_cfg').style.display = 'none';
      $('sub_mo_cfg_btn').textContent = 'Configurar';
      $('sub_ind_cfg_btn').textContent = 'Configurar';
      recalc();
    });

    /* Save/Load state */
    var SAVE_KEY = 'bee_sublimacion';
    function saveState() {
      var data = {};
      view.querySelectorAll('input, select').forEach(function(el) {
        if (!el.id) return;
        data[el.id] = el.type === 'checkbox' ? (el.checked ? 1 : 0) : el.value;
      });
      save(SAVE_KEY, data);
    }
    function loadState() {
      var data = load(SAVE_KEY);
      if (!data) return;
      Object.keys(data).forEach(function(k) {
        var el = $(k);
        if (!el) return;
        if (el.type === 'checkbox') el.checked = !!data[k];
        else el.value = data[k];
      });
    }

    view.addEventListener('input', saveState);
    view.addEventListener('change', saveState);

    /* Boot */
    loadState();
    recalc();
  }
});
