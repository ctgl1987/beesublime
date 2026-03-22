/* ══════════════════════════════════════════════
   BeeSublime — Papelería Module
   ══════════════════════════════════════════════ */
registerModule('papeleria', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Cálculo de costos — Papelería</h3>',
    '<div class="sep"></div>',
    '</div>',

    '<div class="card md-6" style="background:#fff">',
    '<h4>Costos directos</h4>',

    '<!-- Sustrato A -->',
    '<div class="row" style="gap:8px;align-items:center;">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_sustrato1_on" type="checkbox"/> Sustrato A (cartulina/papel)',
    '</label>',
    '<select id="pap_d_sustrato1_sel" style="min-width:220px">',
    '<option>Cartulina opalina</option><option>Cartulina glitter</option><option>Cartulina kraft</option>',
    '<option>Papel fotográfico</option><option>Papel adhesivo</option><option>Acetato</option><option>Otro</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_sustrato1_cant" type="number" value="50"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_sustrato1_precio" type="text" value="20,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_sustrato1_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_sustrato1_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_sustrato1_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Sustrato B -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_sustrato2_on" type="checkbox"/> Sustrato B (cartulina/papel)',
    '</label>',
    '<select id="pap_d_sustrato2_sel" style="min-width:220px">',
    '<option>Cartulina opalina</option><option>Cartulina glitter</option><option>Cartulina kraft</option>',
    '<option>Papel fotográfico</option><option>Papel adhesivo</option><option>Acetato</option><option>Otro</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_sustrato2_cant" type="number" value="0"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_sustrato2_precio" type="text" value="0,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_sustrato2_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_sustrato2_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_sustrato2_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Adhesivo A -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_adh1_on" type="checkbox"/> Adhesivos/montaje A',
    '</label>',
    '<select id="pap_d_adh1_sel" style="min-width:220px">',
    '<option>Cinta doble faz</option><option>Foam 3D</option><option>Barras de silicón</option>',
    '<option>Glue dots</option><option>Listón/cuerda</option><option>Otro</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_adh1_cant" type="number" value="1"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_adh1_precio" type="text" value="3,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_adh1_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_adh1_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_adh1_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Adhesivo B -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_adh2_on" type="checkbox"/> Adhesivos/montaje B',
    '</label>',
    '<select id="pap_d_adh2_sel" style="min-width:220px">',
    '<option>Cinta doble faz</option><option>Foam 3D</option><option>Barras de silicón</option>',
    '<option>Glue dots</option><option>Listón/cuerda</option><option>Otro</option>',
    '</select>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_adh2_cant" type="number" value="0"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_adh2_precio" type="text" value="0,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_adh2_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_adh2_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_adh2_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Extra shaker -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_extra_on" type="checkbox"/> Extra (shaker/acetato/lentejuelas)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_extra_cant" type="number" value="0"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_extra_precio" type="text" value="0,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_extra_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_extra_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_extra_used" readonly type="text"/></div>',
    '</div>',

    '<!-- Empaque -->',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="pap_d_pack_on" type="checkbox"/> Empaque (bolsa/funda)',
    '</label>',
    '</div>',
    '<div class="row">',
    '<div><label>Cant.</label><input id="pap_d_pack_cant" type="number" value="50"/></div>',
    '<div><label>Precio ($)</label><input id="pap_d_pack_precio" type="text" value="5,00"/></div>',
    '<div><label>Costo Ud.</label><input class="ud" id="pap_d_pack_ud" readonly type="text"/></div>',
    '<div><label>Cantidad a utilizar</label><input id="pap_d_pack_use" type="number" value="1" min="0" step="0.01"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_d_pack_used" readonly type="text"/></div>',
    '</div>',
    '</div>',

    '<!-- Depreciación -->',
    '<div class="card md-6" style="background:#fff">',
    '<h4>Depreciación de equipos <span class="muted">(base 2 años)</span></h4>',

    '<div class="row"><label class="chk-label"><input id="pap_e_plotter_on" type="checkbox"/> Plotter de corte</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_plotter_precio" type="text" value="400"/></div><div><label>costo x Mes</label><input class="ud" id="pap_e_plotter_mes" readonly type="text"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_plotter_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_plotter_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_plotter_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_imp_on" type="checkbox"/> Impresora</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_imp_precio" type="text" value="240"/></div><div><label>costo x Mes</label><input class="ud" id="pap_e_imp_mes" readonly type="text"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_imp_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_imp_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_imp_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_guillotina_on" type="checkbox"/> Guillotina</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_guillotina_precio" type="text" value="120"/></div><div><label>costo x Mes</label><input class="ud" id="pap_e_guillotina_mes" readonly type="text"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_guillotina_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_guillotina_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_guillotina_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_laminadora_on" type="checkbox"/> Laminadora</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_laminadora_precio" type="text" value="150"/></div><div><label>costo x Mes</label><input class="ud" id="pap_e_laminadora_mes" readonly type="text"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_laminadora_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_laminadora_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_laminadora_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_pc_on" type="checkbox"/> Computadora</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_pc_precio" type="text" value="350"/></div><div><label>costo x Mes</label><input class="ud" id="pap_e_pc_mes" readonly type="text"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_pc_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_pc_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_pc_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_cuchilla_on" type="checkbox"/> Cuchilla (vida en cortes)</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_cuchilla_precio" type="text" value="30"/></div><div><label>Vida útil (cortes)</label><input id="pap_e_cuchilla_vida" type="number" value="500"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_cuchilla_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_cuchilla_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_cuchilla_used" readonly type="text"/></div></div>',

    '<div class="row"><label class="chk-label"><input id="pap_e_tapete_on" type="checkbox"/> Tapete (vida en usos)</label></div>',
    '<div class="row"><div><label>Precio ($)</label><input id="pap_e_tapete_precio" type="text" value="12"/></div><div><label>Vida útil (usos)</label><input id="pap_e_tapete_vida" type="number" value="100"/></div><div><label>Costo Ud.</label><input class="ud" id="pap_e_tapete_ud" readonly type="text"/></div>',
    '<div><label>Cant. de usos</label><input id="pap_e_tapete_usos" type="number" value="1" min="0" step="1"/></div>',
    '<div><label>Costo utilizado</label><input class="ud" id="pap_e_tapete_used" readonly type="text"/></div></div>',
    '</div>',

    '<!-- Costos indirectos -->',
    '<div class="card md-12 indA-card" id="pap_ind_card">',
    '<h4>Costos indirectos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label><input id="pap_ind_on" type="checkbox"/> Activar</label>',
    '<div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="pap_ind_ud">$ 0,00</span></div>',
    '<div style="margin-left:auto"><button class="btn" id="pap_ind_cfg_btn" type="button">Configurar</button></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div id="pap_ind_cfg" style="display:none">',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div><label>Alquiler (mensual)</label><input id="pap_ind_alquiler" type="text" value="0,00"/></div>',
    '<div><label>Internet (mensual)</label><input id="pap_ind_internet" type="text" value="0,00"/></div>',
    '<div><label>Suscripciones (mensual)</label><input id="pap_ind_suscripciones" type="text" value="0,00"/></div>',
    '<div><label>Transporte (mensual)</label><input id="pap_ind_transporte" type="text" value="0,00"/></div>',
    '<div><label>Electricidad (mensual)</label><input id="pap_ind_electricidad" type="text" value="0,00"/></div>',
    '<div><label>Publicidad (mensual)</label><input id="pap_ind_publicidad" type="text" value="0,00"/></div>',
    '<div><label>Otros (mensual)</label><input id="pap_ind_otros" type="text" value="0,00"/></div>',
    '<div><label>Unidades/mes</label><input id="pap_ind_units" type="number" value="100"/></div>',
    '</div>',
    '</div>',
    '</div>',

    '<!-- Totales -->',
    '<div class="card md-12" id="pap_tot_card">',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Total directos: <span class="result" id="pap_total_directos">$ 0,00</span></div>',
    '<div class="pill">Total depreciación: <span class="result" id="pap_total_depr">$ 0,00</span></div>',
    '<div class="pill">Total sin G/I: <span class="result" id="pap_subtotal_no_gi">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="pap_mo_on" type="checkbox"/> Mano de obra</label>',
    '<button class="copy-btn" id="pap_mo_cfg_btn" type="button">Configurar</button>',
    '</div>',
    '<div class="row" id="pap_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '<div><label>Sueldo mensual ($)</label><input id="pap_mo_sueldo" type="text" value="400,00"/></div>',
    '<div><label>Horas al mes</label><input id="pap_mo_horas_mes" type="text" value="176"/></div>',
    '<div><label>Setup (min)</label><input id="pap_mo_setup" type="text" value="5,00"/></div>',
    '<div><label>Ejecución (min/ud)</label><input id="pap_mo_run" type="text" value="3,00"/></div>',
    '<div><label>Unidades</label><input id="pap_mo_units" type="text" value="1"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '<div class="pill" id="pap_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="pap_mo_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" id="pap_gi_row" style="gap:10px;align-items:flex-start;flex-wrap:wrap">',
    '<div style="flex:1;min-width:220px;display:flex;flex-direction:column">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0 0 4px"><input id="pap_chk_ganancia" type="checkbox"/> Ganancia (%)</label>',
    '<input id="pap_ganancia" min="0" step="1" type="number" value="40"/>',
    '</div>',
    '<div style="flex:1;min-width:220px;display:flex;flex-direction:column">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0 0 4px"><input id="pap_chk_impuestos" type="checkbox"/> Impuestos (%)</label>',
    '<input id="pap_impuestos" min="0" step="1" type="number" value="16"/>',
    '</div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Subtotal: <span class="result" id="pap_subtotal">$ 0,00</span></div>',
    '<div class="pill">+ Ganancia: <span class="result" id="pap_ganancia_val">$ 0,00</span></div>',
    '<div class="pill">+ Impuestos: <span class="result" id="pap_impuestos_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="tot">Precio de Venta: <span class="result" id="pap_total">$ 0,00</span></div>',
    '<div class="center-actions">',
    '<button class="copy-btn" id="pap_btn_print">Exportar a PDF / Imprimir</button>',
    '<button class="copy-btn" id="pap_btn_copy">Copiar</button>',
    '<button class="btn reset" id="pap_btn_reset">Reset</button>',
    '</div>',
    '</div>',

    '<!-- Cantidad de productos -->',
    '<div class="card md-12" id="pap_qty_card">',
    '  <div class="row" style="align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">',
    '    <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '      <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0">',
    '        <input type="checkbox" id="pap_qty_on"/>',
    '        <span>Cantidad de productos</span>',
    '      </label>',
    '      <input type="number" id="pap_qty" min="1" step="1" value="1" style="max-width:100px"/>',
    '      <span class="muted">Multiplica los totales por Q (solo vista, no cambia los cálculos base).</span>',
    '    </div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I ×Q</span><span class="result mono" id="pap_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal ×Q</span><span class="result mono" id="pap_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia ×Q</span><span class="result mono" id="pap_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos ×Q</span><span class="result mono" id="pap_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total ×Q</span><span class="result mono" id="pap_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id); };
    var UNITS_PER_MONTH = 100;

    /* ---------- Helpers ---------- */
    function p(v) {
      if (v == null) return 0;
      if (typeof v === 'number') return v;
      var s = String(v).trim().replace(/[^0-9.,\-]/g, '');
      if (s.indexOf(',') >= 0 && s.indexOf('.') >= 0) s = s.replace(/\./g, '').replace(',', '.');
      else if (s.indexOf(',') >= 0) s = s.replace(',', '.');
      var n = parseFloat(s);
      return isNaN(n) ? 0 : n;
    }

    function unitCostRow(onId, cantId, precioId, udId, useId, usedId) {
      var cant = p($(cantId).value);
      var precio = p($(precioId).value);
      var ud = cant > 0 ? (precio / cant) : 0;
      $(udId).value = fmt(ud);
      var useVal = p($(useId).value);
      var usedVal = ud * useVal;
      $(usedId).value = fmt(usedVal);
      return ($(onId).checked) ? usedVal : 0;
    }

    function depMonthRow(onId, precioId, mesId, udId, usosId, usedId) {
      var precio = p($(precioId).value);
      var mes = precio / 24;
      var ud = mes / UNITS_PER_MONTH;
      $(mesId).value = fmt(mes);
      $(udId).value = fmt(ud);
      var usos = p($(usosId).value);
      var used = ud * usos;
      $(usedId).value = fmt(used);
      return ($(onId).checked) ? used : 0;
    }

    function depLifeRow(onId, precioId, vidaId, udId, usosId, usedId) {
      var precio = p($(precioId).value);
      var vida = Math.max(1, p($(vidaId).value));
      var ud = precio / vida;
      $(udId).value = fmt(ud);
      var usos = p($(usosId).value);
      var used = ud * usos;
      $(usedId).value = fmt(used);
      return ($(onId).checked) ? used : 0;
    }

    /* ---------- Indirectos ---------- */
    function calcIndirectos() {
      if (!$('pap_ind_on') || !$('pap_ind_on').checked) {
        $('pap_ind_ud').textContent = fmt(0);
        return 0;
      }
      var fields = ['alquiler','internet','suscripciones','transporte','electricidad','publicidad','otros'];
      var mens = 0;
      fields.forEach(function(k) { mens += p($('pap_ind_' + k).value); });
      var units = Math.max(1, p($('pap_ind_units').value) || 100);
      var ud = mens / units;
      $('pap_ind_ud').textContent = fmt(ud);
      return ud;
    }

    /* ---------- Mano de obra ---------- */
    function calcMO() {
      if (!$('pap_mo_on').checked) return 0;
      var sueldo = p($('pap_mo_sueldo').value);
      var horas  = p($('pap_mo_horas_mes').value) || 176;
      var setupM = p($('pap_mo_setup').value);
      var runM   = p($('pap_mo_run').value);
      var uds    = Math.max(1, p($('pap_mo_units').value));
      var valorHora = horas > 0 ? (sueldo / horas) : 0;
      var totalMin = setupM + (runM * uds);
      return Math.max(0, (valorHora / 60) * totalMin);
    }

    /* ---------- MAIN RECALC ---------- */
    function recalc() {
      /* Directos */
      var d1 = unitCostRow('pap_d_sustrato1_on','pap_d_sustrato1_cant','pap_d_sustrato1_precio','pap_d_sustrato1_ud','pap_d_sustrato1_use','pap_d_sustrato1_used');
      var d2 = unitCostRow('pap_d_sustrato2_on','pap_d_sustrato2_cant','pap_d_sustrato2_precio','pap_d_sustrato2_ud','pap_d_sustrato2_use','pap_d_sustrato2_used');
      var d3 = unitCostRow('pap_d_adh1_on','pap_d_adh1_cant','pap_d_adh1_precio','pap_d_adh1_ud','pap_d_adh1_use','pap_d_adh1_used');
      var d4 = unitCostRow('pap_d_adh2_on','pap_d_adh2_cant','pap_d_adh2_precio','pap_d_adh2_ud','pap_d_adh2_use','pap_d_adh2_used');
      var d5 = unitCostRow('pap_d_extra_on','pap_d_extra_cant','pap_d_extra_precio','pap_d_extra_ud','pap_d_extra_use','pap_d_extra_used');
      var d6 = unitCostRow('pap_d_pack_on','pap_d_pack_cant','pap_d_pack_precio','pap_d_pack_ud','pap_d_pack_use','pap_d_pack_used');
      var directos = d1 + d2 + d3 + d4 + d5 + d6;

      /* Depreciación */
      var e1 = depMonthRow('pap_e_plotter_on','pap_e_plotter_precio','pap_e_plotter_mes','pap_e_plotter_ud','pap_e_plotter_usos','pap_e_plotter_used');
      var e2 = depMonthRow('pap_e_imp_on','pap_e_imp_precio','pap_e_imp_mes','pap_e_imp_ud','pap_e_imp_usos','pap_e_imp_used');
      var e3 = depMonthRow('pap_e_guillotina_on','pap_e_guillotina_precio','pap_e_guillotina_mes','pap_e_guillotina_ud','pap_e_guillotina_usos','pap_e_guillotina_used');
      var e4 = depMonthRow('pap_e_laminadora_on','pap_e_laminadora_precio','pap_e_laminadora_mes','pap_e_laminadora_ud','pap_e_laminadora_usos','pap_e_laminadora_used');
      var e5 = depMonthRow('pap_e_pc_on','pap_e_pc_precio','pap_e_pc_mes','pap_e_pc_ud','pap_e_pc_usos','pap_e_pc_used');
      var e6 = depLifeRow('pap_e_cuchilla_on','pap_e_cuchilla_precio','pap_e_cuchilla_vida','pap_e_cuchilla_ud','pap_e_cuchilla_usos','pap_e_cuchilla_used');
      var e7 = depLifeRow('pap_e_tapete_on','pap_e_tapete_precio','pap_e_tapete_vida','pap_e_tapete_ud','pap_e_tapete_usos','pap_e_tapete_used');
      var depr = e1 + e2 + e3 + e4 + e5 + e6 + e7;

      /* Indirectos + MO */
      var ind = calcIndirectos();
      var mo = calcMO();

      $('pap_total_directos').textContent = fmt(directos);
      $('pap_total_depr').textContent = fmt(depr);
      var noGI = directos + depr + ind + mo;
      $('pap_subtotal_no_gi').textContent = fmt(noGI);

      $('pap_mo_pill').style.display = $('pap_mo_on').checked ? 'inline-flex' : 'none';
      $('pap_mo_val').textContent = fmt(mo);

      /* G/I */
      var subtotal = noGI;
      var gOn = $('pap_chk_ganancia').checked;
      var iOn = $('pap_chk_impuestos').checked;
      var gPct = p($('pap_ganancia').value);
      var iPct = p($('pap_impuestos').value);
      var gVal = gOn ? (subtotal * (gPct / 100)) : 0;
      var iVal = iOn ? ((subtotal + gVal) * (iPct / 100)) : 0;
      var total = subtotal + gVal + iVal;

      $('pap_subtotal').textContent = fmt(subtotal);
      $('pap_ganancia_val').textContent = fmt(gVal);
      $('pap_impuestos_val').textContent = fmt(iVal);
      $('pap_total').textContent = fmt(total);

      recalcQty(noGI, subtotal, gVal, iVal, total);
      try { if (window.resumen_update) window.resumen_update(); } catch(e) {}
    }

    /* ---------- Qty ---------- */
    function recalcQty(noGI, subtotal, gVal, iVal, total) {
      if (!$('pap_qty_on') || !$('pap_qty_on').checked) {
        ['pap_qty_base','pap_qty_subtotal','pap_qty_g','pap_qty_i','pap_qty_total'].forEach(function(id) {
          $(id).textContent = fmt(0);
        });
        return;
      }
      var Q = Math.max(1, parseInt($('pap_qty').value, 10) || 1);
      $('pap_qty').value = Q;
      $('pap_qty_base').textContent = fmt(noGI * Q);
      $('pap_qty_subtotal').textContent = fmt(subtotal * Q);
      $('pap_qty_g').textContent = fmt(gVal * Q);
      $('pap_qty_i').textContent = fmt(iVal * Q);
      $('pap_qty_total').textContent = fmt(total * Q);
    }

    /* ---------- Events ---------- */
    view.querySelectorAll('input, select').forEach(function(el) {
      el.addEventListener('input', recalc);
      el.addEventListener('change', recalc);
    });

    $('pap_mo_cfg_btn').addEventListener('click', function() {
      var cfg = $('pap_mo_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'flex' : 'none';
      $('pap_mo_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    $('pap_ind_cfg_btn').addEventListener('click', function() {
      var cfg = $('pap_ind_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'block' : 'none';
      $('pap_ind_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    $('pap_btn_copy').addEventListener('click', function() {
      var lines = [
        'Papeleria',
        'Directos: ' + $('pap_total_directos').textContent,
        'Depreciacion: ' + $('pap_total_depr').textContent,
        'Sin G/I: ' + $('pap_subtotal_no_gi').textContent,
        $('pap_mo_on').checked ? ('Mano de obra: ' + $('pap_mo_val').textContent) : null,
        'Subtotal: ' + $('pap_subtotal').textContent,
        $('pap_chk_ganancia').checked ? ('+ Ganancia (' + $('pap_ganancia').value + '%): ' + $('pap_ganancia_val').textContent) : null,
        $('pap_chk_impuestos').checked ? ('+ Impuestos (' + $('pap_impuestos').value + '%): ' + $('pap_impuestos_val').textContent) : null,
        'Precio de Venta: ' + $('pap_total').textContent
      ].filter(Boolean).join('\n');
      copyText(lines);
    });

    $('pap_btn_print').addEventListener('click', function() { window.print(); });

    $('pap_btn_reset').addEventListener('click', function() {
      view.querySelectorAll('input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
      /* Reset use/usos fields to 1 */
      view.querySelectorAll('input[id$="_use"], input[id$="_usos"]').forEach(function(inp) { inp.value = '1'; });
      $('pap_mo_cfg').style.display = 'none';
      $('pap_ind_cfg').style.display = 'none';
      $('pap_mo_cfg_btn').textContent = 'Configurar';
      $('pap_ind_cfg_btn').textContent = 'Configurar';
      recalc();
    });

    /* Save/Load */
    var SAVE_KEY = 'bee_papeleria';
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

    loadState();
    recalc();
  }
});
