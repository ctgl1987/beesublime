/* ══════════════════════════════════════════════
   BeeSublime — Etiquetas Module
   ══════════════════════════════════════════════ */
registerModule('etiquetas', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '  <h3 style="margin:0 0 6px">Cálculo de costos — Etiquetas</h3>',
    '  <div class="sep"></div>',
    '</div>',

    /* ── Costos directos ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Costos directos</h4>',

    '  <div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '    <label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '      <input checked id="eti_d_prod_on" type="checkbox"/>',
    '      <span id="eti_d_prod_label">Sustrato (papel / vinil / BOPP / térmico): <select id="eti_d_prod_select">',
    '        <option>Vinil imprimible</option><option>Papel fotográfico adhesivo</option>',
    '        <option>Etiqueta PVC</option><option>Etiqueta BOPP</option>',
    '        <option>Holográfico</option><option>Transparente</option>',
    '        <option>Kraft</option><option>Otros</option>',
    '      </select></span>',
    '    </label>',
    '  </div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_prod_cant" min="0" step="1" type="number" value="50"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_prod_precio" min="0" step="0.01" type="number" value="20"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_prod_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_prod_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_prod_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_adhesivo_on" type="checkbox"/> Adhesivo</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_adhesivo_cant" min="0" step="1" type="number" value="500"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_adhesivo_precio" min="0" step="0.01" type="number" value="15"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_adhesivo_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_adhesivo_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_adhesivo_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_liner_on" type="checkbox"/> Liner / backing</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_liner_cant" min="0" step="1" type="number" value="1000"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_liner_precio" min="0" step="0.01" type="number" value="20"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_liner_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_liner_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_liner_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_tinta_on" type="checkbox"/> Tinta</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_tinta_cant" min="0" step="1" type="number" value="1000"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_tinta_precio" min="0" step="0.01" type="number" value="30"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_tinta_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_tinta_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_tinta_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_merma_on" type="checkbox"/> Merma y pruebas</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_merma_cant" min="0" step="1" type="number" value="500"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_merma_precio" min="0" step="0.01" type="number" value="5"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_merma_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_merma_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_merma_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_laminado_on" type="checkbox"/> Laminado / barniz</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_laminado_cant" min="0" step="1" type="number" value="20"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_laminado_precio" min="0" step="0.01" type="number" value="10"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_laminado_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_laminado_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_laminado_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_d_empaque_on" type="checkbox"/> Empaque</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:110px"><label>Cant.</label><input id="eti_d_empaque_cant" min="0" step="1" type="number" value="200"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="eti_d_empaque_precio" min="0" step="0.01" type="number" value="8"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="eti_d_empaque_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="eti_d_empaque_use" min="0" step="0.01" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:110px"><label>Costo utilizado</label><input class="ud" id="eti_d_empaque_used" readonly type="text"/></div>',
    '  </div>',
    '</div>',

    /* ── Depreciación ── */
    '<div class="card md-6" style="background:#fff">',
    '  <h4 style="margin:0 0 10px">Depreciación</h4>',

    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_impresora_on" type="checkbox"/> Impresora de etiquetas</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_impresora_precio" min="0" step="0.01" type="number" value="240"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_impresora_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_impresora_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_impresora_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_impresora_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_plotter_on" type="checkbox"/> Plotter de corte</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_plotter_precio" min="0" step="0.01" type="number" value="400"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_plotter_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_plotter_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_plotter_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_plotter_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_guillotina_on" type="checkbox"/> Guillotina</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_guillotina_precio" min="0" step="0.01" type="number" value="120"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_guillotina_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_guillotina_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_guillotina_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_guillotina_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_tapete_on" type="checkbox"/> Tapete de corte</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_tapete_precio" min="0" step="0.01" type="number" value="15"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_tapete_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_tapete_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_tapete_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_tapete_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_cuchilla_on" type="checkbox"/> Cuchilla de corte</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_cuchilla_precio" min="0" step="0.01" type="number" value="30"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Vida útil (cortes)</label><input id="eti_e_cuchilla_vida" min="1" step="1" type="number" value="100"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo por corte</label><input class="ud" id="eti_e_cuchilla_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_cuchilla_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_cuchilla_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_troqueladora_on" type="checkbox"/> Troqueladora</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_troqueladora_precio" min="0" step="0.01" type="number" value="300"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_troqueladora_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_troqueladora_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_troqueladora_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_troqueladora_used" readonly type="text"/></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input checked id="eti_e_pc_on" type="checkbox"/> Computadora (PC)</label></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:120px"><label>Precio ($)</label><input id="eti_e_pc_precio" min="0" step="0.01" type="number" value="350"/></div>',
    '    <div style="flex:1;min-width:120px"><label>costo x Mes</label><input class="ud" id="eti_e_pc_mes" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo Ud.</label><input class="ud" id="eti_e_pc_ud" readonly type="text"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Cant. de usos</label><input id="eti_e_pc_use" min="0" step="1" type="number" value="1"/></div>',
    '    <div style="flex:1;min-width:120px"><label>Costo utilizado</label><input class="ud" id="eti_e_pc_used" readonly type="text"/></div>',
    '  </div>',
    '</div>',

    /* ── Costos indirectos ── */
    '<div class="card md-12 indA-card" id="eti_ind_card">',
    '  <h4>Costos indirectos</h4>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <label style="display:flex;align-items:center;gap:8px;margin:0"><input id="eti_ind_on" type="checkbox"/> Activar</label>',
    '    <div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="eti_ind_ud">$ 0,00</span></div>',
    '    <div style="margin-left:auto"><button class="btn" id="eti_ind_cfg_btn">Configurar</button></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div id="eti_ind_cfg" style="display:none">',
    '    <div class="row" style="gap:14px;flex-wrap:wrap">',
    '      <div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="eti_ind_alquiler" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="eti_ind_internet" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="eti_ind_suscripciones" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="eti_ind_transporte" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="eti_ind_electricidad" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="eti_ind_publicidad" type="text" value="0,00"/></div>',
    '      <div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="eti_ind_otros" type="text" value="0,00"/></div>',
    '      <div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="eti_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '    </div>',
    '  </div>',
    '</div>',

    /* ── Totales / MO / GI ── */
    '<div class="card md-12">',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Total directos: <span class="result" id="eti_total_directos">$0.00</span></div>',
    '    <div class="pill">Total depreciación: <span class="result" id="eti_total_depr">$0.00</span></div>',
    '    <div class="pill">Total sin G/I: <span class="result" id="eti_subtotal_no_gi">$0.00</span></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '    <label style="display:flex;align-items:center;gap:8px;margin:0"><input id="eti_mo_on" type="checkbox"/> Mano de obra</label>',
    '    <button class="copy-btn" id="eti_mo_cfg_btn" type="button">Configurar</button>',
    '  </div>',
    '  <div class="row" id="eti_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '    <div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="eti_mo_sueldo" type="text" value="400,00"/></div>',
    '    <div style="min-width:160px"><label>Horas al mes</label><input id="eti_mo_horas_mes" type="text" value="176"/></div>',
    '    <div style="min-width:140px"><label>Setup (min)</label><input id="eti_mo_setup" type="text" value="5,00"/></div>',
    '    <div style="min-width:180px"><label>Ejecución (min/ud)</label><input id="eti_mo_run" type="text" value="2,00"/></div>',
    '    <div style="min-width:140px"><label>Unidades</label><input id="eti_mo_units" type="text" value="1"/></div>',
    '  </div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '    <div class="pill" id="eti_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="eti_mo_val">$ 0,00</span></div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div class="row">',
    '    <div style="flex:1;min-width:160px"><label><input checked id="eti_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="eti_ganancia" min="0" step="1" type="number" value="40"/></div>',
    '    <div style="flex:1;min-width:160px"><label><input checked id="eti_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="eti_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '  </div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Subtotal: <span class="result" id="eti_subtotal">$0.00</span></div>',
    '    <div class="pill">+ Ganancia: <span class="result" id="eti_ganancia_val">$0.00</span></div>',
    '    <div class="pill">+ Impuestos: <span class="result" id="eti_impuestos_val">$0.00</span></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="tot">Precio de Venta: <span class="result" id="eti_total">$0.00</span></div>',
    '  <div class="center-actions">',
    '    <button class="copy-btn" id="btn_print_eti">Exportar a PDF / Imprimir</button>',
    '    <button class="copy-btn" id="btn_copy_eti">Copiar</button>',
    '    <button class="btn reset" id="btn_reset_eti">Reset</button>',
    '  </div>',
    '</div>',

    /* ── Cantidad de productos ── */
    '<div class="card md-12" id="eti_qty_card">',
    '  <h4 style="margin:0 0 10px">Cantidad de productos</h4>',
    '  <div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '    <div style="min-width:160px"><label style="display:flex;align-items:center;gap:8px;margin:0"><input id="eti_qty_on" type="checkbox"> Cantidad de productos</label></div>',
    '    <div style="min-width:120px;max-width:140px"><label>Cantidad (Q)</label><input id="eti_qty" type="number" min="1" step="1" value="1"></div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '    <div class="pill">Base sin G/I × Q: <span class="result mono" id="eti_qty_base">$ 0,00</span></div>',
    '    <div class="pill">Subtotal × Q: <span class="result mono" id="eti_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill">Ganancia × Q: <span class="result mono" id="eti_qty_g">$ 0,00</span></div>',
    '    <div class="pill">Impuestos × Q: <span class="result mono" id="eti_qty_i">$ 0,00</span></div>',
    '    <div class="pill">Total × Q: <span class="result mono" id="eti_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };
    var $span = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };

    // Presets for sustrato selector
    var ETI_PRESETS = {
      'Vinil imprimible':            { cant: 20,   precio: 13 },
      'Papel fotográfico adhesivo':  { cant: 50,   precio: 13 },
      'Etiqueta PVC':                { cant: 20,   precio: 15 },
      'Etiqueta BOPP':               { cant: 20,   precio: 16 },
      'Holográfico':                 { cant: 20,   precio: 18 },
      'Transparente':                { cant: 20,   precio: 14 },
      'Kraft':                       { cant: 20,   precio: 12 },
      'Otros':                       { cant: 1,    precio: 2.5 }
    };

    function setText(id, n) { var el = $(id); if (el) el.value = fmtUSD(n); }
    function setSpan(id, n) { var el = $span(id); if (el) el.textContent = fmtUSD(n); }
    function valNum(id) { var el = $(id); var v = el ? numVal(el.value) : 0; return v < 0 ? 0 : v; }
    function unitCost(precio, cant) { return (!precio || !cant) ? 0 : precio / cant; }

    function applyPreset() {
      var sel = $('eti_d_prod_select');
      var p = ETI_PRESETS[sel.value];
      if (!p) return;
      $('eti_d_prod_cant').value = p.cant;
      $('eti_d_prod_precio').value = p.precio;
      update();
    }

    // --- Mano de obra ---
    function calcMO() {
      var on = $('eti_mo_on') && $('eti_mo_on').checked;
      var pill = $('eti_mo_pill');
      if (!on) { if (pill) pill.style.display = 'none'; return 0; }
      var sueldo  = parseEU($('eti_mo_sueldo') ? $('eti_mo_sueldo').value : '0');
      var horasMes = parseEU($('eti_mo_horas_mes') ? $('eti_mo_horas_mes').value : '176') || 176;
      var setup   = parseEU($('eti_mo_setup') ? $('eti_mo_setup').value : '0');
      var run     = parseEU($('eti_mo_run') ? $('eti_mo_run').value : '0');
      var units   = parseEU($('eti_mo_units') ? $('eti_mo_units').value : '1') || 1;
      var tarifaH = horasMes > 0 ? (sueldo / horasMes) : 0;
      var totalMin = setup + run * units;
      var costo = (tarifaH * (totalMin / 60)) / units;
      var valEl = $('eti_mo_val');
      if (valEl) valEl.textContent = fmtUSD(costo);
      if (pill) pill.style.display = 'inline-flex';
      return costo;
    }

    // --- Indirectos ---
    var indFields = ['eti_ind_alquiler','eti_ind_internet','eti_ind_suscripciones','eti_ind_transporte','eti_ind_electricidad','eti_ind_publicidad','eti_ind_otros'];

    function calcIndirectos() {
      var on = $('eti_ind_on') && $('eti_ind_on').checked;
      var units = Math.max(1, parseInt(($('eti_ind_units') ? $('eti_ind_units').value : '100'), 10) || 100);
      var sumMensual = 0;
      indFields.forEach(function(id) { var el = $(id); if (el) sumMensual += parseEU(el.value); });
      var ud = sumMensual / units;
      var outEl = $('eti_ind_ud');
      if (outEl) outEl.textContent = fmtUSD(on ? ud : 0);
      return on ? ud : 0;
    }

    // --- Main update ---
    function update() {
      var useNum = function(id) { var el = $(id); var v = el ? numVal(el.value) : 1; return v < 0 ? 0 : v; };

      // Direct costs (always compute ud and used; only add to total if checkbox on)
      function directRow(chk, cantId, precioId, udId, useId, usedId) {
        var raw = unitCost(valNum(precioId), valNum(cantId));
        setText(udId, raw);
        var used = raw * useNum(useId);
        setText(usedId, used);
        return $(chk) && $(chk).checked ? used : 0;
      }

      var d0 = directRow('eti_d_prod_on',     'eti_d_prod_cant',     'eti_d_prod_precio',     'eti_d_prod_ud',     'eti_d_prod_use',     'eti_d_prod_used');
      var d1 = directRow('eti_d_adhesivo_on',  'eti_d_adhesivo_cant', 'eti_d_adhesivo_precio', 'eti_d_adhesivo_ud', 'eti_d_adhesivo_use', 'eti_d_adhesivo_used');
      var d2 = directRow('eti_d_liner_on',     'eti_d_liner_cant',    'eti_d_liner_precio',    'eti_d_liner_ud',    'eti_d_liner_use',    'eti_d_liner_used');
      var d3 = directRow('eti_d_tinta_on',     'eti_d_tinta_cant',    'eti_d_tinta_precio',    'eti_d_tinta_ud',    'eti_d_tinta_use',    'eti_d_tinta_used');
      var d4 = directRow('eti_d_merma_on',     'eti_d_merma_cant',    'eti_d_merma_precio',    'eti_d_merma_ud',    'eti_d_merma_use',    'eti_d_merma_used');
      var d5 = directRow('eti_d_laminado_on',  'eti_d_laminado_cant', 'eti_d_laminado_precio', 'eti_d_laminado_ud', 'eti_d_laminado_use', 'eti_d_laminado_used');
      var d6 = directRow('eti_d_empaque_on',   'eti_d_empaque_cant',  'eti_d_empaque_precio',  'eti_d_empaque_ud',  'eti_d_empaque_use',  'eti_d_empaque_used');
      var totalDirectos = d0 + d1 + d2 + d3 + d4 + d5 + d6;
      setSpan('eti_total_directos', totalDirectos);

      // Cuchilla (por cortes, not monthly)
      var cuchPrecio = valNum('eti_e_cuchilla_precio');
      var cuchVida = Math.max(1, parseInt(($('eti_e_cuchilla_vida') ? $('eti_e_cuchilla_vida').value : '100'), 10));
      var cuchPorCorte = cuchPrecio / cuchVida;
      setText('eti_e_cuchilla_ud', cuchPorCorte);
      var cuchUsed = cuchPorCorte * useNum('eti_e_cuchilla_use');
      setText('eti_e_cuchilla_used', cuchUsed);
      var e1 = $('eti_e_cuchilla_on') && $('eti_e_cuchilla_on').checked ? cuchUsed : 0;

      // Depreciation (monthly / 24 months / 100 units)
      function dep(chk, precioId, mesId, udId, useId, usedId) {
        var en = $(chk) && $(chk).checked;
        var precio = valNum(precioId);
        var mes = precio / 24;
        var ud = mes / 100;
        setText(mesId, mes);
        setText(udId, ud);
        var used = ud * useNum(useId);
        setText(usedId, used);
        return en ? used : 0;
      }

      var e2 = dep('eti_e_plotter_on',      'eti_e_plotter_precio',      'eti_e_plotter_mes',      'eti_e_plotter_ud',      'eti_e_plotter_use',      'eti_e_plotter_used');
      var e3 = dep('eti_e_impresora_on',     'eti_e_impresora_precio',    'eti_e_impresora_mes',    'eti_e_impresora_ud',    'eti_e_impresora_use',    'eti_e_impresora_used');
      var e4 = dep('eti_e_guillotina_on',    'eti_e_guillotina_precio',   'eti_e_guillotina_mes',   'eti_e_guillotina_ud',   'eti_e_guillotina_use',   'eti_e_guillotina_used');
      var e5 = dep('eti_e_tapete_on',        'eti_e_tapete_precio',       'eti_e_tapete_mes',       'eti_e_tapete_ud',       'eti_e_tapete_use',       'eti_e_tapete_used');
      var e6 = dep('eti_e_troqueladora_on',  'eti_e_troqueladora_precio', 'eti_e_troqueladora_mes', 'eti_e_troqueladora_ud', 'eti_e_troqueladora_use', 'eti_e_troqueladora_used');
      var e7 = dep('eti_e_pc_on',            'eti_e_pc_precio',           'eti_e_pc_mes',           'eti_e_pc_ud',           'eti_e_pc_use',           'eti_e_pc_used');
      var totalDepr = e1 + e2 + e3 + e4 + e5 + e6 + e7;
      setSpan('eti_total_depr', totalDepr);

      // Indirectos + MO
      var indUd = calcIndirectos();
      var moUd = calcMO();
      var subtotal = totalDirectos + totalDepr + indUd + moUd;
      setSpan('eti_subtotal_no_gi', subtotal);

      // Ganancia / Impuestos
      var g = Math.max(0, numVal($('eti_ganancia') ? $('eti_ganancia').value : '0')) / 100;
      var i = Math.max(0, numVal($('eti_impuestos') ? $('eti_impuestos').value : '0')) / 100;
      var ganVal = $('eti_chk_ganancia') && $('eti_chk_ganancia').checked ? subtotal * g : 0;
      var subMasGan = subtotal + ganVal;
      var impVal = $('eti_chk_impuestos') && $('eti_chk_impuestos').checked ? subMasGan * i : 0;
      var total = subMasGan + impVal;

      setSpan('eti_subtotal', subtotal);
      setSpan('eti_ganancia_val', ganVal);
      setSpan('eti_impuestos_val', impVal);
      setSpan('eti_total', total);

      // Qty card
      recalcQty();

      // Notify resumen
      if (typeof window.resumen_update === 'function') window.resumen_update();
    }

    // --- Qty card ---
    function recalcQty() {
      var qtyOn = $('eti_qty_on');
      var qtyInput = $('eti_qty');
      if (!qtyOn || !qtyInput) return;
      var Q = parseInt(qtyInput.value, 10);
      if (!Q || Q < 1) Q = 1;

      function getNum(id) {
        var el = $span(id);
        if (!el) return 0;
        return parseEU(el.textContent || '0');
      }
      function setResult(id, val) {
        var el = $span(id);
        if (el) el.textContent = fmtUSD(val);
      }

      if (!qtyOn.checked) {
        setResult('eti_qty_base', 0); setResult('eti_qty_subtotal', 0);
        setResult('eti_qty_g', 0); setResult('eti_qty_i', 0); setResult('eti_qty_total', 0);
        return;
      }
      setResult('eti_qty_base',     getNum('eti_subtotal_no_gi') * Q);
      setResult('eti_qty_subtotal', getNum('eti_subtotal') * Q);
      setResult('eti_qty_g',        getNum('eti_ganancia_val') * Q);
      setResult('eti_qty_i',        getNum('eti_impuestos_val') * Q);
      setResult('eti_qty_total',    getNum('eti_total') * Q);
    }

    // --- Reset ---
    function reset() {
      removeKey('etiquetas_state');
      var d = {
        eti_d_prod_cant:50, eti_d_prod_precio:20,
        eti_d_adhesivo_cant:500, eti_d_adhesivo_precio:15,
        eti_d_liner_cant:1000, eti_d_liner_precio:20,
        eti_d_tinta_cant:1000, eti_d_tinta_precio:30,
        eti_d_merma_cant:500, eti_d_merma_precio:5,
        eti_d_laminado_cant:20, eti_d_laminado_precio:10,
        eti_d_empaque_cant:200, eti_d_empaque_precio:8,
        eti_e_impresora_precio:240, eti_e_plotter_precio:400,
        eti_e_guillotina_precio:120, eti_e_tapete_precio:15,
        eti_e_cuchilla_precio:30, eti_e_cuchilla_vida:100,
        eti_e_troqueladora_precio:300, eti_e_pc_precio:350,
        eti_ganancia:40, eti_impuestos:16
      };
      Object.keys(d).forEach(function(k) { var el = $(k); if (el) el.value = d[k]; });

      ['eti_d_prod_use','eti_d_adhesivo_use','eti_d_liner_use','eti_d_tinta_use','eti_d_merma_use',
       'eti_d_laminado_use','eti_d_empaque_use','eti_e_impresora_use','eti_e_plotter_use',
       'eti_e_guillotina_use','eti_e_tapete_use','eti_e_cuchilla_use','eti_e_troqueladora_use','eti_e_pc_use'
      ].forEach(function(id) { var el = $(id); if (el) el.value = 1; });

      ['eti_d_prod_on','eti_d_adhesivo_on','eti_d_liner_on','eti_d_tinta_on','eti_d_merma_on',
       'eti_d_laminado_on','eti_d_empaque_on','eti_e_impresora_on','eti_e_plotter_on',
       'eti_e_guillotina_on','eti_e_tapete_on','eti_e_cuchilla_on','eti_e_troqueladora_on','eti_e_pc_on',
       'eti_chk_ganancia','eti_chk_impuestos'
      ].forEach(function(id) { var el = $(id); if (el) el.checked = false; });

      if ($('eti_d_prod_select')) $('eti_d_prod_select').value = 'Vinil imprimible';
      if ($('eti_mo_on')) $('eti_mo_on').checked = false;
      if ($('eti_ind_on')) $('eti_ind_on').checked = false;
      var indCfg = $('eti_ind_cfg'); if (indCfg) indCfg.style.display = 'none';
      var moCfg = $('eti_mo_cfg'); if (moCfg) moCfg.style.display = 'none';
      var moPill = $('eti_mo_pill'); if (moPill) moPill.style.display = 'none';
      update();
    }

    // --- Persistence ---
    var ETI_KEYS = [
      'eti_d_prod_on','eti_d_prod_cant','eti_d_prod_precio','eti_d_prod_select',
      'eti_d_adhesivo_on','eti_d_adhesivo_cant','eti_d_adhesivo_precio',
      'eti_d_liner_on','eti_d_liner_cant','eti_d_liner_precio',
      'eti_d_tinta_on','eti_d_tinta_cant','eti_d_tinta_precio',
      'eti_d_merma_on','eti_d_merma_cant','eti_d_merma_precio',
      'eti_d_laminado_on','eti_d_laminado_cant','eti_d_laminado_precio',
      'eti_d_empaque_on','eti_d_empaque_cant','eti_d_empaque_precio',
      'eti_e_impresora_on','eti_e_impresora_precio',
      'eti_e_plotter_on','eti_e_plotter_precio',
      'eti_e_guillotina_on','eti_e_guillotina_precio',
      'eti_e_tapete_on','eti_e_tapete_precio',
      'eti_e_troqueladora_on','eti_e_troqueladora_precio',
      'eti_e_pc_on','eti_e_pc_precio',
      'eti_e_cuchilla_on','eti_e_cuchilla_precio','eti_e_cuchilla_vida',
      'eti_d_prod_use','eti_d_adhesivo_use','eti_d_liner_use','eti_d_tinta_use',
      'eti_d_merma_use','eti_d_laminado_use','eti_d_empaque_use',
      'eti_e_impresora_use','eti_e_plotter_use','eti_e_guillotina_use',
      'eti_e_tapete_use','eti_e_troqueladora_use','eti_e_pc_use','eti_e_cuchilla_use',
      'eti_ganancia','eti_impuestos','eti_chk_ganancia','eti_chk_impuestos',
      'eti_mo_on','eti_mo_sueldo','eti_mo_horas_mes','eti_mo_setup','eti_mo_run','eti_mo_units',
      'eti_ind_on','eti_ind_alquiler','eti_ind_internet','eti_ind_suscripciones',
      'eti_ind_transporte','eti_ind_electricidad','eti_ind_publicidad','eti_ind_otros','eti_ind_units'
    ];

    function eti_save() {
      var d = {};
      ETI_KEYS.forEach(function(k) {
        var el = $(k); if (!el) return;
        d[k] = (el.type === 'checkbox') ? (el.checked ? 1 : 0) : el.value;
      });
      save('etiquetas_state', d);
    }

    function eti_load() {
      var d = load('etiquetas_state');
      if (!d) return;
      Object.keys(d).forEach(function(k) {
        var el = $(k); if (!el) return;
        if (el.type === 'checkbox') el.checked = !!d[k];
        else if (el.tagName === 'SELECT') el.value = d[k];
        else el.value = d[k];
      });
    }

    // --- Wire events ---
    if ($('eti_d_prod_select')) $('eti_d_prod_select').addEventListener('change', function() { applyPreset(); eti_save(); });
    view.querySelectorAll('input').forEach(function(el) {
      if (el.type === 'number' || el.type === 'checkbox' || el.type === 'text') {
        el.addEventListener('input', function() { update(); eti_save(); });
        el.addEventListener('change', function() { update(); eti_save(); });
      }
    });

    // MO config toggle
    var moCfgBtn = $('eti_mo_cfg_btn');
    if (moCfgBtn) moCfgBtn.addEventListener('click', function() {
      var panel = $('eti_mo_cfg');
      if (panel) panel.style.display = (panel.style.display === 'none') ? 'flex' : 'none';
    });
    var moChk = $('eti_mo_on');
    if (moChk) moChk.addEventListener('change', function() {
      var panel = $('eti_mo_cfg');
      if (panel && moChk.checked) panel.style.display = 'flex';
      update(); eti_save();
    });

    // Ind config toggle
    var indCfgBtn = $('eti_ind_cfg_btn');
    if (indCfgBtn) indCfgBtn.addEventListener('click', function() {
      var panel = $('eti_ind_cfg');
      if (panel) panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
    });
    var indChk = $('eti_ind_on');
    if (indChk) indChk.addEventListener('change', function() {
      var panel = $('eti_ind_cfg');
      if (panel && indChk.checked) panel.style.display = 'block';
      update(); eti_save();
    });

    // Qty card
    var qtyOn = $('eti_qty_on');
    var qtyInput = $('eti_qty');
    if (qtyOn) qtyOn.addEventListener('change', function() { recalcQty(); });
    if (qtyInput) {
      qtyInput.addEventListener('input', function() { recalcQty(); });
      qtyInput.addEventListener('change', function() { recalcQty(); });
    }

    // Actions
    if ($('btn_print_eti')) $('btn_print_eti').addEventListener('click', function() { window.print(); });
    if ($('btn_copy_eti')) $('btn_copy_eti').addEventListener('click', function() {
      var lines = [
        'Etiquetas — ' + ($('eti_d_prod_select') ? $('eti_d_prod_select').value : ''),
        'Directos = ' + ($span('eti_total_directos') ? $span('eti_total_directos').textContent : ''),
        'Depreciación = ' + ($span('eti_total_depr') ? $span('eti_total_depr').textContent : ''),
        'Total sin G/I = ' + ($span('eti_subtotal_no_gi') ? $span('eti_subtotal_no_gi').textContent : ''),
        'Subtotal = ' + ($span('eti_subtotal') ? $span('eti_subtotal').textContent : ''),
        'Ganancia (' + ($('eti_ganancia') ? $('eti_ganancia').value : '') + '%) = ' + ($span('eti_ganancia_val') ? $span('eti_ganancia_val').textContent : ''),
        'Impuestos (' + ($('eti_impuestos') ? $('eti_impuestos').value : '') + '%) = ' + ($span('eti_impuestos_val') ? $span('eti_impuestos_val').textContent : ''),
        'Precio de Venta = ' + ($span('eti_total') ? $span('eti_total').textContent : '')
      ];
      copyText(lines.join('\n'));
    });
    if ($('btn_reset_eti')) $('btn_reset_eti').addEventListener('click', reset);

    // Init
    eti_load();
    applyPreset();
    update();
  }
});
