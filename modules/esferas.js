/* ══════════════════════════════════════════════
   BeeSublime — Esferas Navideñas Module
   ══════════════════════════════════════════════ */
registerModule('esferas', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Cálculo de costos — Esferas navideñas</h3>',
    '</div>',

    '<!-- Costos directos -->',
    '<div class="card md-6" id="esf_costos_directos" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Costos directos</h4>',

    '<!-- Producto -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input checked id="esf_d_prod_on" type="checkbox"/>',
    '<span>Producto</span>',
    '</label>',
    '<select id="esf_d_prod_select" style="min-width:240px">',
    '<option value="colores6">Esfera colores 6 cm</option>',
    '<option value="colores7">Esfera colores 7 cm</option>',
    '<option value="colores8">Esfera colores 8 cm</option>',
    '<option value="blanca8">Esfera blanca 8 cm</option>',
    '<option value="transparente8">Esfera transparente 8 cm</option>',
    '<option value="rellena8">Rellena (foto) 8 cm</option>',
    '<option value="rellena10">Rellena (foto) 10 cm</option>',
    '<option value="glitter8">Esfera glitter 8 cm</option>',
    '<option value="mate8">Esfera mate 8 cm</option>',
    '<option value="vidrio8">Esfera de vidrio 8 cm</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="esf_d_prod_cant" min="0" step="1" type="number" value="12"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_prod_precio" type="text" value="24,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_prod_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_prod_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_prod_used" readonly type="text"/></div>',
    '</div>',
    '<div class="sep"></div>',

    '<!-- Vinil adhesivo -->',
    '<div class="row" style="gap:8px;align-items:center">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_vinil_on" type="checkbox"/> Vinil adhesivo (cortes/uds)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="esf_d_vinil_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_vinil_precio" type="text" value="8,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_vinil_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_vinil_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_vinil_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Papel fotográfico -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_papel_on" type="checkbox"/> Papel fotográfico (para foto interior)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="esf_d_papel_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_papel_precio" type="text" value="10,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_papel_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_papel_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_papel_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Nieve artificial -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_nieve_on" type="checkbox"/> Nieve artificial (bolsa/unid.)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="esf_d_nieve_cant" min="0" step="1" type="number" value="50"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_nieve_precio" type="text" value="6,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_nieve_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_nieve_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_nieve_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Rellenos extra -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_extra_on" type="checkbox"/> Rellenos extra (confeti, perlas, etc.)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="esf_d_extra_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_extra_precio" type="text" value="8,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_extra_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_extra_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_extra_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Cinta/Lazo -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_cinta_on" type="checkbox"/> Cinta/Lazo (rollo 22,86 m, 0,5 m por esfera)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Unidades por rollo</label><input id="esf_d_cinta_udxrollo" min="1" step="1" type="number" value="45"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio del rollo ($)</label><input id="esf_d_cinta_precio" type="text" value="3,50"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_cinta_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_cinta_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_cinta_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Silicón en barra -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="esf_d_silicon_on" type="checkbox"/> Silicón en barra (mini 11×100 mm aprox.)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant. de barras</label><input id="esf_d_silicon_cant" min="1" step="1" type="number" value="50"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="esf_d_silicon_precio" type="text" value="5,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="esf_d_silicon_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cant. a utilizar</label><input id="esf_d_silicon_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="esf_d_silicon_used" readonly type="text"/></div>',
    '</div>',
    '</div>',

    '<!-- Depreciación -->',
    '<div class="card md-6" id="esf_depreciacion" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Depreciación de equipos <span class="muted">(base 2 años)</span></h4>',
    '<div id="esf_dep_rows">',
    '</div>',
    '</div>',

    '<!-- Costos indirectos -->',
    '<div class="card md-12 indA-card" id="esf_ind_card">',
    '<h4>Costos indirectos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="esf_ind_on" type="checkbox"/> Activar</label>',
    '<div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="esf_ind_ud">$ 0,00</span></div>',
    '<div style="margin-left:auto"><button class="btn" id="esf_ind_cfg_btn">Configurar</button></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div id="esf_ind_cfg" style="display:none">',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="esf_ind_alquiler" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="esf_ind_internet" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="esf_ind_suscripciones" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="esf_ind_transporte" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="esf_ind_electricidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="esf_ind_publicidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="esf_ind_otros" type="text" value="0,00"/></div>',
    '<div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="esf_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '</div>',
    '</div>',
    '</div>',

    '<!-- Totales / G&I / MO -->',
    '<div class="card md-12" id="esf_gi_card">',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Total directos: <span class="result" id="esf_total_directos">$ 0,00</span></div>',
    '<div class="pill">Total depreciación: <span class="result" id="esf_total_depr">$ 0,00</span></div>',
    '<div class="pill">Total sin G/I: <span class="result" id="esf_subtotal_no_gi">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="esf_mo_on" type="checkbox"/> Mano de obra</label>',
    '<button class="copy-btn" id="esf_mo_cfg_btn" type="button">Configurar</button>',
    '</div>',
    '<div class="row" id="esf_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '<div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="esf_mo_sueldo" type="text" value="400,00"/></div>',
    '<div style="min-width:160px"><label>Horas al mes</label><input id="esf_mo_horas_mes" type="text" value="176"/></div>',
    '<div style="min-width:140px"><label>Setup (min)</label><input id="esf_mo_setup" type="text" value="5,00"/></div>',
    '<div style="min-width:180px"><label>Ejecución (min/ud)</label><input id="esf_mo_run" type="text" value="2,00"/></div>',
    '<div style="min-width:140px"><label>Unidades</label><input id="esf_mo_units" type="text" value="1"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '<div class="pill" id="esf_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="esf_mo_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row">',
    '<div style="flex:1;min-width:160px"><label><input checked id="esf_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="esf_ganancia" min="0" step="1" type="number" value="40"/>',
    '<label style="margin-top:6px">Modo ganancia:</label>',
    '<select id="esf_modo_ganancia">',
    '<option value="markup">Markup</option>',
    '<option selected value="margen">Margen</option>',
    '</select>',
    '</div>',
    '<div style="flex:1;min-width:160px"><label><input checked id="esf_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="esf_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Subtotal: <span class="result" id="esf_subtotal">$ 0,00</span></div>',
    '<div class="pill">+ Ganancia: <span class="result" id="esf_ganancia_val">$ 0,00</span></div>',
    '<div class="pill">+ Impuestos: <span class="result" id="esf_impuestos_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="row" style="justify-content:space-between;align-items:center">',
    '<div class="tot">Precio de Venta: <span class="result" id="esf_total">$ 0,00</span></div>',
    '<button class="btn reset" id="esf_btn_reset">Reset</button>',
    '<div class="center-actions">',
    '  <button class="copy-btn" id="esf_btn_print" type="button">Exportar a PDF / Imprimir</button>',
    '</div>',
    '</div>',
    '</div>',

    '<!-- Cantidad de productos -->',
    '<div class="card md-12" id="esf_qty_card">',
    '  <div class="row" style="align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">',
    '    <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '      <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0">',
    '        <input type="checkbox" id="esf_qty_on"/>',
    '        <span>Cantidad de productos</span>',
    '      </label>',
    '      <input type="number" id="esf_qty" min="1" step="1" value="1" style="max-width:100px"/>',
    '      <span class="muted">Multiplica los totales por Q (solo vista, no cambia los cálculos base).</span>',
    '    </div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I ×Q</span><span class="result mono" id="esf_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal ×Q</span><span class="result mono" id="esf_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia ×Q</span><span class="result mono" id="esf_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos ×Q</span><span class="result mono" id="esf_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total ×Q</span><span class="result mono" id="esf_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id); };
    var $cls = function(cls, attr) {
      return view.querySelector('.' + cls + (attr ? ('[data-row="' + attr + '"]') : ''));
    };

    /* ---------- Build depreciation rows dynamically ---------- */
    var DEP_EQUIP = [
      { row:'impresora', label:'Impresora', price:'240', hasVida:false },
      { row:'plancha',   label:'Plancha térmica', price:'400', hasVida:false },
      { row:'pc',        label:'Computadora', price:'350', hasVida:false },
      { row:'plotter',   label:'Plotter de corte', price:'400', hasVida:false },
      { row:'cuchilla',  label:'Cuchilla de corte', price:'30', hasVida:true, vidaLabel:'Vida útil (cortes)', vidaVal:'500' },
      { row:'tapete',    label:'Tapete de corte (vida en usos)', price:'12', hasVida:true, vidaLabel:'Vida útil (usos)', vidaVal:'500' },
      { row:'pistola',   label:'Pistola de silicón', price:'18', hasVida:false }
    ];

    var depContainer = view.querySelector('#esf_dep_rows');
    DEP_EQUIP.forEach(function(eq, idx) {
      var mt = idx > 0 ? 'margin-top:10px' : '';
      var html = '<div class="row" style="gap:8px;align-items:center;' + mt + '">' +
        '<label class="chk-label" style="display:flex;align-items:center;gap:8px">' +
        '<input class="esf_dep_on" data-row="' + eq.row + '" type="checkbox"/> ' + eq.label +
        '</label></div><div class="row">' +
        '<div style="flex:1;min-width:120px"><label>Precio ($)</label><input class="esf_dep_precio" data-row="' + eq.row + '" type="text" value="' + eq.price + '"/></div>';
      if (eq.hasVida) {
        html += '<div style="flex:1;min-width:120px"><label>' + eq.vidaLabel + '</label><input class="esf_dep_vida" data-row="' + eq.row + '" type="text" value="' + eq.vidaVal + '"/></div>';
      } else {
        html += '<div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud esf_dep_mes" data-row="' + eq.row + '" readonly type="text"/></div>';
      }
      html += '<div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud esf_dep_ud" data-row="' + eq.row + '" readonly type="text"/></div>' +
        '<div style="flex:1;min-width:120px"><label>Cant. de usos</label><input class="esf_dep_usos" data-row="' + eq.row + '" min="0" step="1" type="number" value="1"/></div>' +
        '<div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud esf_dep_used" data-row="' + eq.row + '" readonly type="text"/></div>' +
        '</div>';
      depContainer.insertAdjacentHTML('beforeend', html);
    });

    /* ---------- Helpers ---------- */
    function p(txt) {
      if (typeof txt !== 'string') return Number(txt) || 0;
      var t = txt.replace(/[^\d,.\-]/g, '');
      if (t.indexOf(',') >= 0 && t.lastIndexOf(',') > t.lastIndexOf('.')) {
        t = t.replace(/\./g, '').replace(',', '.');
      } else if (t.indexOf(',') >= 0) {
        t = t.replace(',', '.');
      }
      var v = parseFloat(t);
      return isNaN(v) ? 0 : v;
    }
    function unit(c, pr) { var cc = p(c), pp = p(pr); return cc > 0 ? pp / cc : 0; }

    /* ---------- Directos ---------- */
    function calcDirectos() {
      var tot = 0;
      var simple = [
        { on:'esf_d_prod_on', cant:'esf_d_prod_cant', precio:'esf_d_prod_precio', ud:'esf_d_prod_ud', use:'esf_d_prod_use', used:'esf_d_prod_used' },
        { on:'esf_d_vinil_on', cant:'esf_d_vinil_cant', precio:'esf_d_vinil_precio', ud:'esf_d_vinil_ud', use:'esf_d_vinil_use', used:'esf_d_vinil_used' },
        { on:'esf_d_papel_on', cant:'esf_d_papel_cant', precio:'esf_d_papel_precio', ud:'esf_d_papel_ud', use:'esf_d_papel_use', used:'esf_d_papel_used' },
        { on:'esf_d_nieve_on', cant:'esf_d_nieve_cant', precio:'esf_d_nieve_precio', ud:'esf_d_nieve_ud', use:'esf_d_nieve_use', used:'esf_d_nieve_used' },
        { on:'esf_d_extra_on', cant:'esf_d_extra_cant', precio:'esf_d_extra_precio', ud:'esf_d_extra_ud', use:'esf_d_extra_use', used:'esf_d_extra_used' },
        { on:'esf_d_silicon_on', cant:'esf_d_silicon_cant', precio:'esf_d_silicon_precio', ud:'esf_d_silicon_ud', use:'esf_d_silicon_use', used:'esf_d_silicon_used' }
      ];
      simple.forEach(function(r) {
        var udVal = unit($(r.cant).value, $(r.precio).value);
        $(r.ud).value = fmt(udVal);
        var useVal = p($(r.use).value || '1');
        var usedVal = udVal * useVal;
        $(r.used).value = fmt(usedVal);
        if ($(r.on).checked) tot += usedVal;
      });

      /* Cinta/Lazo: special (units per roll) */
      var uds = Math.max(1, parseInt($('esf_d_cinta_udxrollo').value || '45', 10));
      var cinPr = p($('esf_d_cinta_precio').value);
      var cinUd = cinPr / uds;
      $('esf_d_cinta_ud').value = fmt(cinUd);
      var cinUse = p($('esf_d_cinta_use').value || '1');
      var cinUsed = cinUd * cinUse;
      $('esf_d_cinta_used').value = fmt(cinUsed);
      if ($('esf_d_cinta_on').checked) tot += cinUsed;

      $('esf_total_directos').textContent = fmt(tot);
      return tot;
    }

    /* ---------- Depreciación ---------- */
    function calcDepr() {
      var tot = 0;
      var unitsPerMonth = 100;
      DEP_EQUIP.forEach(function(eq) {
        var on = $cls('esf_dep_on', eq.row);
        var precioEl = $cls('esf_dep_precio', eq.row);
        var precio = p(precioEl ? precioEl.value : '0');
        var ud = 0, mes = 0;
        if (eq.hasVida) {
          var vidaEl = $cls('esf_dep_vida', eq.row);
          var vida = p(vidaEl ? vidaEl.value : '0');
          ud = vida > 0 ? (precio / vida) : 0;
        } else {
          mes = precio / 24;
          ud = mes / unitsPerMonth;
          var mesEl = $cls('esf_dep_mes', eq.row);
          if (mesEl) mesEl.value = fmt(mes);
        }
        var udEl = $cls('esf_dep_ud', eq.row);
        if (udEl) udEl.value = fmt(ud);
        var usosEl = $cls('esf_dep_usos', eq.row);
        var usos = p(usosEl ? usosEl.value : '1');
        var usedVal = ud * usos;
        var usedEl = $cls('esf_dep_used', eq.row);
        if (usedEl) usedEl.value = fmt(usedVal);
        if (on && on.checked) tot += usedVal;
      });
      $('esf_total_depr').textContent = fmt(tot);
      return tot;
    }

    /* ---------- Indirectos ---------- */
    function calcIndirectos() {
      var on = $('esf_ind_on') && $('esf_ind_on').checked;
      var fields = ['alquiler','internet','suscripciones','transporte','electricidad','publicidad','otros'];
      var mens = 0;
      fields.forEach(function(k) { mens += p($('esf_ind_' + k).value); });
      var units = Math.max(1, parseInt($('esf_ind_units').value || '100', 10));
      var ud = mens / units;
      $('esf_ind_ud').textContent = fmt(ud);
      return on ? ud : 0;
    }

    /* ---------- Mano de obra ---------- */
    function calcMO() {
      var sueldo = p($('esf_mo_sueldo').value);
      var horasMes = p($('esf_mo_horas_mes').value) || 176;
      var setupMin = p($('esf_mo_setup').value);
      var runMin = p($('esf_mo_run').value);
      var units = Math.max(1, p($('esf_mo_units').value || '1'));
      var costoMin = horasMes > 0 ? (sueldo / (horasMes * 60)) : 0;
      var totalMin = setupMin + (runMin * units);
      var val = (totalMin * costoMin) / units;
      $('esf_mo_val').textContent = fmt(val);
      var pill = $('esf_mo_pill');
      if (pill) pill.style.display = ($('esf_mo_on').checked && val > 0) ? '' : 'none';
      return $('esf_mo_on').checked ? val : 0;
    }

    /* ---------- MAIN RECALC ---------- */
    function recalc() {
      var d = calcDirectos();
      var e = calcDepr();
      var i = calcIndirectos();
      var mo = calcMO();
      var subNoGI = d + e + i + mo;

      $('esf_subtotal_no_gi').textContent = fmt(subNoGI);
      $('esf_subtotal').textContent = fmt(subNoGI);

      var ganOn = $('esf_chk_ganancia').checked;
      var impOn = $('esf_chk_impuestos').checked;
      var ganPct = p($('esf_ganancia').value);
      var impPct = p($('esf_impuestos').value);
      var mode = $('esf_modo_ganancia').value || 'markup';

      var ganVal = ganOn
        ? (mode === 'margen' ? subNoGI * (ganPct / (100 - ganPct)) : subNoGI * (ganPct / 100))
        : 0;
      var impVal = impOn ? (subNoGI + ganVal) * (impPct / 100) : 0;

      $('esf_ganancia_val').textContent = fmt(ganVal);
      $('esf_impuestos_val').textContent = fmt(impVal);
      var total = subNoGI + ganVal + impVal;
      $('esf_total').textContent = fmt(total);

      recalcQty(subNoGI, subNoGI, ganVal, impVal, total);
      try { if (window.resumen_update) window.resumen_update(); } catch(ex) {}
    }

    /* ---------- Qty ---------- */
    function recalcQty(noGI, subtotal, gVal, iVal, total) {
      if (!$('esf_qty_on') || !$('esf_qty_on').checked) {
        ['esf_qty_base','esf_qty_subtotal','esf_qty_g','esf_qty_i','esf_qty_total'].forEach(function(id) {
          $(id).textContent = fmt(0);
        });
        return;
      }
      var Q = Math.max(1, parseInt($('esf_qty').value, 10) || 1);
      $('esf_qty').value = Q;
      $('esf_qty_base').textContent = fmt(noGI * Q);
      $('esf_qty_subtotal').textContent = fmt(subtotal * Q);
      $('esf_qty_g').textContent = fmt(gVal * Q);
      $('esf_qty_i').textContent = fmt(iVal * Q);
      $('esf_qty_total').textContent = fmt(total * Q);
    }

    /* ---------- Events ---------- */
    view.querySelectorAll('input, select').forEach(function(el) {
      el.addEventListener('input', recalc);
      el.addEventListener('change', recalc);
    });

    $('esf_mo_cfg_btn').addEventListener('click', function() {
      var cfg = $('esf_mo_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'flex' : 'none';
      $('esf_mo_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    $('esf_ind_cfg_btn').addEventListener('click', function() {
      var cfg = $('esf_ind_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'block' : 'none';
      $('esf_ind_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    $('esf_btn_print').addEventListener('click', function() { window.print(); });

    $('esf_btn_reset').addEventListener('click', function() {
      view.querySelectorAll('input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
      $('esf_mo_cfg').style.display = 'none';
      $('esf_ind_cfg').style.display = 'none';
      $('esf_mo_cfg_btn').textContent = 'Configurar';
      $('esf_ind_cfg_btn').textContent = 'Configurar';
      recalc();
    });

    /* Save/Load */
    var SAVE_KEY = 'bee_esferas';
    function saveState() {
      var data = {};
      view.querySelectorAll('input, select').forEach(function(el) {
        if (!el.id && !el.getAttribute('data-row')) return;
        var key = el.id || (el.className.split(' ')[0] + '_' + el.getAttribute('data-row'));
        data[key] = el.type === 'checkbox' ? (el.checked ? 1 : 0) : el.value;
      });
      save(SAVE_KEY, data);
    }
    function loadState() {
      var data = load(SAVE_KEY);
      if (!data) return;
      Object.keys(data).forEach(function(k) {
        var el = $(k) || view.querySelector('[id="' + k + '"]');
        if (!el) return;
        if (el.type === 'checkbox') el.checked = !!data[k];
        else el.value = data[k];
      });
    }
    view.addEventListener('input', saveState);
    view.addEventListener('change', saveState);

    loadState();
    recalc();
  }
});
