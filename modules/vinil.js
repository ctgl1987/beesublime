/* ══════════════════════════════════════════════
   BeeSublime — Calculadora de Costo de Vinil
   ══════════════════════════════════════════════ */

registerModule('vinil', {
  html: [
    '<div class="grid">',

    /* ── Encabezado ── */
    '<div class="card md-12">',
    '<h3 style="margin:0 0 2px">Calculadora de Costo de Vinil</h3>',
    '<div class="muted">Precio basado en vinil de ancho estandar (editable) &times; 100 cm de largo</div>',
    '<div style="margin-top:10px;max-width:420px">',
    '<label>Ancho estandar del vinil (cm)</label>',
    '<input id="ancho_estandar" min="1" type="number" value="51"/>',
    '</div>',
    '</div>',

    /* ── Bloques de color ── */
    '<div class="card md-12">',
    '<div class="row" style="justify-content:space-between;align-items:center">',
    '<div class="row" style="gap:8px;align-items:center">',
    '<button class="btn ok" id="btn_add_color">Agregar color</button>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label style="min-width:120px">Merma (%)</label>',
    '<input id="merma_pct" max="30" min="0" step="1" style="max-width:120px" type="number" value="0"/>',
    '<input id="merma_range" max="30" min="0" step="1" style="flex:1;min-width:160px" type="range" value="0"/>',
    '<label style="min-width:160px;margin-left:10px">Borde por lado (cm)</label>',
    '<input id="borde_lado" min="0" step="0.1" style="max-width:120px" type="number" value="1"/>',
    '<div class="pill">Ancho efectivo: <span id="ancho_efectivo">&mdash;</span></div>',
    '</div></div>',
    '<button class="btn reset" id="btn_reset_vinil">Reset</button>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="grid" id="bloques"></div>',
    '<div class="sep"></div>',

    /* ── Costos directos ── */
    '<div class="card md-12" id="vinil_costos_directos">',
    '<h3 style="margin:0 0 6px">Costos directos</h3>',
    '<div class="row" style="align-items:center;gap:10px;margin-bottom:8px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0"><input id="cd_enabled" type="checkbox"/> Activar</label>',
    '<select id="cd_item" style="max-width:220px">',
    '<option value="algodon" data-ud="3.50">Camiseta de algodon</option>',
    '<option value="poliester" data-ud="2.50">Camiseta de poliester</option>',
    '<option value="bolsa" data-ud="1.80">Bolsa ecologica (tela)</option>',
    '<option value="delantal" data-ud="3.00">Delantal</option>',
    '<option value="gorra" data-ud="2.20">Gorra</option>',
    '<option value="taza_blanca" data-ud="1.20">Taza blanca</option>',
    '<option value="taza_magica" data-ud="2.80">Taza magica</option>',
    '<option value="termo_metalico" data-ud="6.50">Termo metalico</option>',
    '<option value="botella_plastica" data-ud="2.50">Botella plastica</option>',
    '<option value="vaso_acrilico" data-ud="1.80">Vaso acrilico</option>',
    '<option value="caja_pequena" data-ud="0.60">Caja de carton peque&ntilde;a</option>',
    '<option value="caja_mediana" data-ud="1.00">Caja de carton mediana</option>',
    '<option value="carpeta" data-ud="0.90">Carpeta escolar</option>',
    '<option value="libreta" data-ud="1.20">Libreta</option>',
    '<option value="cuaderno" data-ud="1.50">Cuaderno</option>',
    '<option value="llavero_acrilico" data-ud="0.70">Llavero acrilico</option>',
    '<option value="portavasos" data-ud="0.90">Portavasos</option>',
    '<option value="tabla_mdf_peq" data-ud="1.80">Tabla MDF peque&ntilde;a</option>',
    '<option value="acrilico_plano" data-ud="2.20">Acrilico plano</option>',
    '<option value="otros" data-ud="0">Otros</option>',
    '</select></div>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:130px;flex:1"><label>Cant.</label><input id="cd_cant" type="text" value="36"/></div>',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input id="cd_precio" type="text" value="90"/></div>',
    '<div style="min-width:200px;flex:1"><label>Costo Ud.</label><input id="cd_costo_ud" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Cantidad a utilizar</label><input id="cd_qty_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:200px;flex:1"><label>Costo utilizado</label><input class="ud" id="cd_costo_util" readonly type="text" value="$ 0,00"/></div>',
    '</div>',
    '<div class="sep"></div>',

    /* Papel sublimacion */
    '<div class="row" style="gap:8px;align-items:center"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="vin_d_papel_on" type="checkbox"/> Papel de sublimacion</label></div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="vin_d_papel_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="vin_d_papel_precio" step="0.01" type="text" value="10,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="vin_d_papel_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="vin_d_papel_qty_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="vin_d_papel_util" readonly type="text" value="$ 0,00"/></div>',
    '</div>',

    /* Cinta termica */
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="vin_d_cinta_on" type="checkbox"/> Cinta termica</label></div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="vin_d_cinta_cant" min="0" step="1" type="number" value="100"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="vin_d_cinta_precio" step="0.01" type="text" value="3,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="vin_d_cinta_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="vin_d_cinta_qty_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="vin_d_cinta_util" readonly type="text" value="$ 0,00"/></div>',
    '</div>',

    /* Tinta sublimacion */
    '<div class="row" style="gap:8px;align-items:center;margin-top:10px"><label class="chk-label" style="display:flex;align-items:center;gap:8px"><input id="vin_d_tinta_on" type="checkbox"/> Tinta de sublimacion</label></div>',
    '<div class="row">',
    '<div style="flex:1;min-width:110px"><label>Cant.</label><input id="vin_d_tinta_cant" min="0" step="1" type="number" value="300"/></div>',
    '<div style="flex:1;min-width:110px"><label>Precio ($)</label><input id="vin_d_tinta_precio" step="0.01" type="text" value="40,00"/></div>',
    '<div style="flex:1;min-width:110px"><label>Costo Ud.</label><input class="ud" id="vin_d_tinta_ud" readonly type="text"/></div>',
    '<div style="flex:1;min-width:110px"><label>Cantidad a utilizar</label><input id="vin_d_tinta_qty_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:130px"><label>Costo utilizado</label><input class="ud" id="vin_d_tinta_util" readonly type="text" value="$ 0,00"/></div>',
    '</div>',
    '</div>',

    /* ── Depreciacion ── */
    '</div><div class="card md-12" id="vinil_depreciacion">',
    '<h3 style="margin:0 0 6px">Depreciacion de equipos <span class="muted">(base 2 a&ntilde;os)</span></h3>',

    /* Impresora */
    '<div style="margin-top:6px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="impresora" type="checkbox"/> Impresora</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="impresora" type="text" value="240"/></div>',
    '<div style="min-width:160px;flex:1"><label>costo x Mes</label><input class="dep_mes" data-row="impresora" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="impresora" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="impresora" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="impresora" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',

    /* Plancha */
    '<div style="margin-top:12px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="plancha" type="checkbox"/> Plancha termica</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="plancha" type="text" value="400"/></div>',
    '<div style="min-width:160px;flex:1"><label>costo x Mes</label><input class="dep_mes" data-row="plancha" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="plancha" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="plancha" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="plancha" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',

    /* PC */
    '<div style="margin-top:12px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="pc" type="checkbox"/> Computadora</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="pc" type="text" value="350"/></div>',
    '<div style="min-width:160px;flex:1"><label>costo x Mes</label><input class="dep_mes" data-row="pc" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="pc" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="pc" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="pc" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',

    /* Plotter */
    '<div style="margin-top:12px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="plotter" type="checkbox"/> Plotter de corte</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="plotter" type="text" value="400"/></div>',
    '<div style="min-width:160px;flex:1"><label>costo x Mes</label><input class="dep_mes" data-row="plotter" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="plotter" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="plotter" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="plotter" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',

    /* Cuchilla */
    '<div style="margin-top:12px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="cuchilla" type="checkbox"/> Cuchilla de corte</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="cuchilla" type="text" value="30"/></div>',
    '<div style="min-width:160px;flex:1"><label>Vida util (cortes)</label><input class="dep_vida" data-row="cuchilla" type="text" value="500"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="cuchilla" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="cuchilla" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="cuchilla" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',

    /* Tapete */
    '<div style="margin-top:12px">',
    '<label style="display:inline-flex;align-items:center;gap:8px;margin:0 0 6px"><input class="dep_enabled" data-row="tapete" type="checkbox"/> Tapete de corte (vida en usos)</label>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input class="dep_precio" data-row="tapete" type="text" value="12"/></div>',
    '<div style="min-width:160px;flex:1"><label>Vida util (usos)</label><input class="dep_vida" data-row="tapete" type="text" value="500"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" data-row="tapete" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:140px;flex:1"><label>Cant. de usos</label><input class="dep_uses" data-row="tapete" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud dep_util" data-row="tapete" readonly type="text" value="$ 0,00"/></div>',
    '</div></div>',
    '</div>',

    /* ── Resumen de Vinil ── */
    '<div class="card md-12" id="vinil_summary" style="padding:12px 16px">',
    '<h3 style="margin:0">Resumen de Vinil</h3>',
    '<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px">',
    '<div class="pill">Directos: <span class="result" id="vinil_pro_directos">$0.00</span></div>',
    '<div class="pill">Depreciacion: <span class="result" id="vinil_pro_dep">$0.00</span></div>',
    '<div class="pill">Adicionales (aj.): <span class="result" id="vinil_pro_adic">$0.00</span></div>',
    '<div class="pill">Merma: <span class="result" id="vinil_pro_merma">0%</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="tot">Total Vinil: <span class="result" id="vinil_pro_total">$0.00</span></div>',
    '</div>',

    /* ── Costos indirectos ── */
    '<div class="card md-12 indA-card" id="vin_ind_card">',
    '<h4>Costos indirectos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="vin_ind_on" type="checkbox"/> Activar</label>',
    '<div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="vin_ind_ud">$ 0,00</span></div>',
    '<div style="margin-left:auto"><button class="btn" id="vin_ind_cfg_btn">Configurar</button></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div id="vin_ind_cfg" style="display:none">',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="vin_ind_alquiler" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="vin_ind_internet" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="vin_ind_suscripciones" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="vin_ind_transporte" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="vin_ind_electricidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="vin_ind_publicidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="vin_ind_otros" type="text" value="0,00"/></div>',
    '<div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="vin_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '</div></div></div>',

    /* ── Ganancia e Impuestos ── */
    '<div class="card md-12" id="vinil_gi_card">',
    '<h4 style="margin:0 0 10px">Ganancia e Impuestos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Total sin G/I: <span class="result" id="vin_subtotal_no_gi">$0.00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    /* Mano de obra */
    '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="vin_mo_on" type="checkbox"/> Mano de obra</label>',
    '<button class="copy-btn" id="vin_mo_cfg_btn" type="button">Configurar</button>',
    '</div>',
    '<div class="row" id="vin_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '<div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="vin_mo_sueldo" type="text" value="400,00"/></div>',
    '<div style="min-width:160px"><label>Horas al mes</label><input id="vin_mo_horas_mes" type="text" value="176"/></div>',
    '<div style="min-width:140px"><label>Setup (min)</label><input id="vin_mo_setup" type="text" value="5,00"/></div>',
    '<div style="min-width:180px"><label>Ejecucion (min/ud)</label><input id="vin_mo_run" type="text" value="2,00"/></div>',
    '<div style="min-width:140px"><label>Unidades</label><input id="vin_mo_units" type="text" value="1"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '<div class="pill" id="vin_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="vin_mo_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row">',
    '<div style="flex:1;min-width:160px"><label><input checked id="vin_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="vin_ganancia" min="0" step="1" type="number" value="40"/></div>',
    '<div style="flex:1;min-width:160px"><label><input checked id="vin_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="vin_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Subtotal: <span class="result" id="vin_subtotal">$0.00</span></div>',
    '<div class="pill">+ Ganancia: <span class="result" id="vin_ganancia_val">$0.00</span></div>',
    '<div class="pill">+ Impuestos: <span class="result" id="vin_impuestos_val">$0.00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="tot">Precio de Venta: <span class="result" id="vin_total">$0.00</span></div>',
    '<div class="row" style="gap:8px;justify-content:center">',
    '<button class="copy-btn" id="vinil_pro_copy">Copiar</button>',
    '<button class="copy-btn" id="vinil_pro_print">Exportar PDF / Imprimir</button>',
    '</div>',
    '</div>',

    /* ── Cantidad de productos ── */
    '<div class="card md-12" id="vinil_qty_card">',
    '  <div class="row" style="align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">',
    '    <div class="row" style="align-items:center;gap:8px;flex-wrap:wrap">',
    '      <label class="chk-label" style="display:flex;align-items:center;gap:6px;margin:0">',
    '        <input type="checkbox" id="vinil_qty_on"/>',
    '        <span>Cantidad de productos</span>',
    '      </label>',
    '      <input type="number" id="vinil_qty" min="1" step="1" value="1" style="max-width:100px"/>',
    '      <span class="muted">Multiplica los totales por Q (solo vista, no cambia los calculos base).</span>',
    '    </div>',
    '  </div>',
    '  <div class="sep"></div>',
    '  <div class="row" style="flex-wrap:wrap;gap:8px">',
    '    <div class="pill"><span>Base sin G/I &times;Q</span><span class="result mono" id="vinil_qty_base">$ 0,00</span></div>',
    '    <div class="pill"><span>Subtotal &times;Q</span><span class="result mono" id="vinil_qty_subtotal">$ 0,00</span></div>',
    '    <div class="pill"><span>Ganancia &times;Q</span><span class="result mono" id="vinil_qty_g">$ 0,00</span></div>',
    '    <div class="pill"><span>Impuestos &times;Q</span><span class="result mono" id="vinil_qty_i">$ 0,00</span></div>',
    '    <div class="pill"><span>Total &times;Q</span><span class="result mono" id="vinil_qty_total">$ 0,00</span></div>',
    '  </div>',
    '</div>',

    /* Hidden legacy spans */
    '<div id="vinil_legacy_hidden" style="display:none">',
    '<strong class="mono" id="vinil_directos">$ 0,00</strong>',
    '<strong class="mono" id="vinil_dep">$ 0,00</strong>',
    '<strong class="mono" id="vinil_adicionales">$ 0,00</strong>',
    '<div class="tot" id="totalFinal">Total Vinil: $ 0,00</div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    /* ── Helpers ── */
    var $ = function(sel) { return view.querySelector(sel); };
    var $$ = function(sel) { return Array.from(view.querySelectorAll(sel)); };
    var byId = function(id) { return view.querySelector('#' + id); };

    var fmtEUplain = function(n) {
      if (!isFinite(n)) n = 0;
      return n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    var fmtEU = function(n) {
      return '$ ' + fmtEUplain(isFinite(n) ? n : 0);
    };
    var fmtUSDshort = function(n) {
      return '$' + (Math.round((n || 0) * 100) / 100).toFixed(2);
    };

    // Use global parseEU if available, otherwise local
    var _parseEU = function(v) {
      if (typeof parseEU === 'function') { try { return parseEU(v); } catch(e) {} }
      if (v == null) return 0;
      if (typeof v === 'number') return v;
      v = ('' + v).trim().replace(/[^\d.,-]/g, '');
      if (!v) return 0;
      if (v.indexOf(',') >= 0 && v.indexOf('.') >= 0) { v = v.replace(/\./g, '').replace(',', '.'); }
      else if (v.indexOf(',') >= 0) { v = v.replace(',', '.'); }
      return parseFloat(v) || 0;
    };

    var setMoney = function(el, n) { if (el) el.value = fmtEU(n); };
    var setMoneyText = function(el, n) { if (el) el.textContent = fmtEU(n); };
    var costoUd = function(cant, precio) {
      var c = Math.max(0, _parseEU(cant));
      var p = Math.max(0, _parseEU(precio));
      return c > 0 ? p / c : 0;
    };

    /* ── Color palette & blocks ── */
    var colores = {
      'Blanco':'#ffffff','Negro':'#000000','Rojo':'#ff0000','Azul':'#0000ff','Verde':'#008000',
      'Amarillo':'#ffff00','Naranja':'#ffa500','Morado':'#800080','Rosa':'#ffc0cb','Turquesa':'#40e0d0',
      'Gris':'#808080','Marron':'#8b4513','Beige':'#f5f5dc','Plateado':'#c0c0c0','Dorado':'#ffd700',
      'Celeste':'#87ceeb','Lima':'#00ff00','Ninguno':'#ffffff'
    };
    var contador = 0;

    function onlyEUInput(el) {
      if (!el) return;
      el.addEventListener('input', function() { el.value = el.value.replace(/[^\d.,-]/g, ''); });
      el.addEventListener('blur', function() { el.value = fmtEUplain(_parseEU(el.value)); recompute(); });
    }

    function blockHTML(id) {
      var opts = Object.keys(colores).map(function(c) { return '<option value="' + c + '">' + c + '</option>'; }).join('');
      return '<div class="calc-block" id="block' + id + '" style="border:1px solid #eee;border-radius:12px;padding:12px;background:#fff">' +
        '<div class="row" style="align-items:center;justify-content:space-between">' +
        '<label style="margin:0">Color</label>' +
        '<button class="copy-btn" data-remove="' + id + '">Eliminar</button></div>' +
        '<div class="row" style="align-items:center;margin:6px 0 8px">' +
        '<span class="color-preview" id="preview' + id + '" style="background:#fff"></span>' +
        '<select id="color' + id + '" style="flex:1;padding:10px;border-radius:12px;border:1px solid #e5e7eb">' + opts + '</select></div>' +
        '<div class="row" style="gap:12px;flex-wrap:wrap">' +
        '<div style="min-width:160px;flex:1"><label>Precio/m ($)</label><input type="text" id="precio' + id + '" placeholder="0,00"/></div>' +
        '<div style="min-width:160px;flex:1"><label>Alto (cm)</label><input type="text" id="alto' + id + '" placeholder="0"/></div>' +
        '<div style="min-width:160px;flex:1"><label>Ancho (cm)</label><input type="text" id="ancho' + id + '" placeholder="0"/></div></div>' +
        '<div class="row" style="margin-top:8px">' +
        '<div class="md-12" id="resultado' + id + '" style="font-weight:600">Costo: $ 0,00</div>' +
        '<button class="copy-btn" data-copy="' + id + '">Copiar</button></div></div>';
    }

    function cambiarColor(id) {
      var sel = byId('color' + id);
      if (!sel) return;
      var color = colores[sel.value] || '#fff';
      var block = byId('block' + id);
      var preview = byId('preview' + id);
      if (preview) preview.style.backgroundColor = color;
      if (block) { block.style.borderColor = color + '55'; block.style.boxShadow = '0 3px 10px ' + color + '25'; }
    }

    function calcularBloque(id) {
      var anchoStd = _parseEU(byId('ancho_estandar') ? byId('ancho_estandar').value : 0);
      var precio = _parseEU(byId('precio' + id) ? byId('precio' + id).value : 0);
      var alto = _parseEU(byId('alto' + id) ? byId('alto' + id).value : 0);
      var ancho = _parseEU(byId('ancho' + id) ? byId('ancho' + id).value : 0);
      var resEl = byId('resultado' + id);
      if (!anchoStd || !precio || !alto || !ancho) {
        if (resEl) resEl.textContent = 'Costo: $ 0,00';
        recompute();
        return;
      }
      var base = anchoStd * 100;
      var precioCm2 = precio / base;
      var total = precioCm2 * alto * ancho;
      if (resEl) resEl.textContent = 'Costo: $ ' + fmtEUplain(total);
      recompute();
    }

    function agregarBloque() {
      contador++;
      var wrap = document.createElement('div');
      wrap.className = 'md-4';
      wrap.innerHTML = blockHTML(contador);
      var cont = byId('bloques');
      if (cont) cont.appendChild(wrap);

      var cid = contador;
      var colorSel = byId('color' + cid);
      if (colorSel) colorSel.addEventListener('change', function() { cambiarColor(cid); });
      ['precio', 'alto', 'ancho'].forEach(function(p) {
        var el = byId(p + cid);
        onlyEUInput(el);
        if (el) el.addEventListener('input', function() { calcularBloque(cid); });
      });
      var copyBtn = wrap.querySelector('[data-copy]');
      if (copyBtn) copyBtn.addEventListener('click', function() {
        var r = byId('resultado' + cid);
        if (r && typeof copyText === 'function') copyText(r.textContent);
        else if (r && navigator.clipboard) navigator.clipboard.writeText(r.textContent);
      });
      var removeBtn = wrap.querySelector('[data-remove]');
      if (removeBtn) removeBtn.addEventListener('click', function() {
        wrap.remove();
        recompute();
        vinilSave();
      });
      cambiarColor(cid);
    }

    /* ── Persistence ── */
    function vinilSave() {
      var data = {
        ancho_estandar: byId('ancho_estandar') ? byId('ancho_estandar').value : '51',
        bloques: $$('[id^="block"]').map(function(b) {
          var id = b.id.replace('block', '');
          return {
            color: byId('color' + id) ? byId('color' + id).value : 'Ninguno',
            precio: byId('precio' + id) ? byId('precio' + id).value : '',
            alto: byId('alto' + id) ? byId('alto' + id).value : '',
            ancho: byId('ancho' + id) ? byId('ancho' + id).value : ''
          };
        })
      };
      save('vinil_state', data);
    }

    function vinilLoad() {
      var data = load('vinil_state');
      if (!data) {
        contador = 0;
        var cont = byId('bloques');
        if (cont) cont.replaceChildren();
        agregarBloque();
        return;
      }
      if (byId('ancho_estandar')) byId('ancho_estandar').value = data.ancho_estandar || '51';
      var cont = byId('bloques');
      if (cont) cont.replaceChildren();
      contador = 0;
      (data.bloques || []).forEach(function(b) {
        agregarBloque();
        var id = contador;
        if (byId('color' + id)) byId('color' + id).value = b.color || 'Ninguno';
        ['precio', 'alto', 'ancho'].forEach(function(k) {
          var el = byId(k + id);
          if (el) el.value = b[k] || '';
        });
        cambiarColor(id);
        calcularBloque(id);
      });
    }

    /* ── Depreciacion rows ── */
    var depRowKeys = ['impresora', 'plancha', 'pc', 'plotter', 'cuchilla', 'tapete'];
    function getDepRows() {
      var cont = byId('vinil_depreciacion');
      if (!cont) return [];
      var rows = [];
      cont.querySelectorAll('.dep_enabled').forEach(function(chk) {
        var row = chk.getAttribute('data-row');
        rows.push({
          chk: chk,
          row: row,
          precio: cont.querySelector('.dep_precio[data-row="' + row + '"]'),
          vida: cont.querySelector('.dep_vida[data-row="' + row + '"]'),
          mes: cont.querySelector('.dep_mes[data-row="' + row + '"]'),
          ud: cont.querySelector('.dep_ud[data-row="' + row + '"]'),
          uses: cont.querySelector('.dep_uses[data-row="' + row + '"]'),
          util: cont.querySelector('.dep_util[data-row="' + row + '"]')
        });
      });
      return rows;
    }

    /* ── Indirectos refs ── */
    var indFields = ['vin_ind_alquiler', 'vin_ind_internet', 'vin_ind_suscripciones',
      'vin_ind_transporte', 'vin_ind_electricidad', 'vin_ind_publicidad', 'vin_ind_otros'];

    /* ── Core recompute ── */
    var scheduled = false;

    function recompute() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function() {
        scheduled = false;

        // === ADICIONALES (color blocks sum) ===
        var adicionales = 0;
        $$('[id^="resultado"]').forEach(function(el) {
          var t = (el.textContent || '').replace('Costo:', '').replace(/[^0-9.,-]/g, '');
          if (t.indexOf(',') >= 0) t = t.replace(/\./g, '').replace(',', '.');
          adicionales += parseFloat(t) || 0;
        });

        // === DIRECTOS ===
        var directos = 0;
        var cdOn = byId('cd_enabled');
        var cd_ud = costoUd(byId('cd_cant') ? byId('cd_cant').value : 0, byId('cd_precio') ? byId('cd_precio').value : 0);
        setMoney(byId('cd_costo_ud'), cd_ud);
        var cdQty = Math.max(0, _parseEU(byId('cd_qty_use') ? byId('cd_qty_use').value : 0));
        var cdUtil = cd_ud * cdQty;
        setMoney(byId('cd_costo_util'), cdUtil);
        if (cdOn && cdOn.checked) directos += cdUtil;

        // Extras: papel, cinta, tinta
        ['papel', 'cinta', 'tinta'].forEach(function(k) {
          var ud = costoUd(
            byId('vin_d_' + k + '_cant') ? byId('vin_d_' + k + '_cant').value : 0,
            byId('vin_d_' + k + '_precio') ? byId('vin_d_' + k + '_precio').value : 0
          );
          setMoney(byId('vin_d_' + k + '_ud'), ud);
          var qty = Math.max(0, _parseEU(byId('vin_d_' + k + '_qty_use') ? byId('vin_d_' + k + '_qty_use').value : 0));
          var util = ud * qty;
          setMoney(byId('vin_d_' + k + '_util'), util);
          var chk = byId('vin_d_' + k + '_on');
          if (chk && chk.checked) directos += util;
        });

        // === DEPRECIACION ===
        var depTotal = 0;
        var UNITS_PER_MONTH = 100;
        getDepRows().forEach(function(r) {
          var on = r.chk ? r.chk.checked : false;
          var P = _parseEU(r.precio ? r.precio.value : 0);
          var cMes = 0, cUd = 0;
          if (r.vida) {
            var V = Math.max(1, _parseEU(r.vida.value));
            cUd = P / V;
          } else {
            cMes = P / 24;
            cUd = cMes / UNITS_PER_MONTH;
          }
          if (r.mes) r.mes.value = '$ ' + fmtEUplain(cMes);
          if (r.ud) r.ud.value = '$ ' + fmtEUplain(cUd);
          var u = Math.max(0, _parseEU(r.uses ? r.uses.value : 0));
          var cUtil = cUd * u;
          if (r.util) r.util.value = '$ ' + fmtEUplain(cUtil);
          if (on) depTotal += cUtil;
        });

        // === MERMA ===
        var merma = Math.max(0, _parseEU(byId('merma_pct') ? byId('merma_pct').value : 0));
        var baseVinil = directos + depTotal + (adicionales * (1 + merma / 100));

        // Paint summary
        var prDir = byId('vinil_pro_directos');
        var prDep = byId('vinil_pro_dep');
        var prAdic = byId('vinil_pro_adic');
        var prMerma = byId('vinil_pro_merma');
        var prTotal = byId('vinil_pro_total');
        if (prDir) prDir.textContent = fmtEU(directos);
        if (prDep) prDep.textContent = fmtEU(depTotal);
        if (prAdic) prAdic.textContent = fmtEU(adicionales * (1 + merma / 100));
        if (prMerma) prMerma.textContent = merma.toFixed(0) + '%';
        if (prTotal) prTotal.textContent = fmtEU(baseVinil);

        // === INDIRECTOS ===
        var indOn = byId('vin_ind_on');
        var indUd = 0;
        if (indOn && indOn.checked) {
          var units = Math.max(1, _parseEU(byId('vin_ind_units') ? byId('vin_ind_units').value : 100));
          var monthly = 0;
          indFields.forEach(function(id) { monthly += _parseEU(byId(id) ? byId(id).value : 0); });
          indUd = monthly / units;
        }
        var indPill = byId('vin_ind_ud');
        if (indPill) indPill.textContent = fmtEU(indUd);

        // === MANO DE OBRA ===
        var moOn = byId('vin_mo_on');
        var moUd = 0;
        if (moOn && moOn.checked) {
          var sueldo = _parseEU(byId('vin_mo_sueldo') ? byId('vin_mo_sueldo').value : 0);
          var horas = Math.max(1, _parseEU(byId('vin_mo_horas_mes') ? byId('vin_mo_horas_mes').value : 176));
          var setupM = Math.max(0, _parseEU(byId('vin_mo_setup') ? byId('vin_mo_setup').value : 0));
          var runM = Math.max(0, _parseEU(byId('vin_mo_run') ? byId('vin_mo_run').value : 0));
          var moUnits = Math.max(1, _parseEU(byId('vin_mo_units') ? byId('vin_mo_units').value : 1));
          var rateMin = (sueldo / horas) / 60;
          moUd = rateMin * ((setupM / moUnits) + runM);
          var moPill = byId('vin_mo_pill');
          if (moPill) moPill.style.display = 'inline-flex';
          var moVal = byId('vin_mo_val');
          if (moVal) moVal.textContent = fmtEU(moUd);
        } else {
          var moPill2 = byId('vin_mo_pill');
          if (moPill2) moPill2.style.display = 'none';
          var moVal2 = byId('vin_mo_val');
          if (moVal2) moVal2.textContent = fmtEU(0);
        }

        // === TOTAL sin G/I ===
        var subtotalNoGI = baseVinil + indUd;

        // === GANANCIA / IMPUESTOS ===
        var baseMO = subtotalNoGI + moUd;
        var gOn = byId('vin_chk_ganancia');
        var iOn = byId('vin_chk_impuestos');
        var gPct = Math.max(0, _parseEU(byId('vin_ganancia') ? byId('vin_ganancia').value : 0));
        var iPct = Math.max(0, _parseEU(byId('vin_impuestos') ? byId('vin_impuestos').value : 0));
        var G = (gOn && gOn.checked) ? baseMO * (gPct / 100) : 0;
        var I = (iOn && iOn.checked) ? (baseMO + G) * (iPct / 100) : 0;
        var totalFinal = baseMO + G + I;

        // Paint GI
        setMoneyText(byId('vin_subtotal_no_gi'), subtotalNoGI);
        setMoneyText(byId('vin_subtotal'), baseMO);
        setMoneyText(byId('vin_ganancia_val'), G);
        setMoneyText(byId('vin_impuestos_val'), I);
        setMoneyText(byId('vin_total'), totalFinal);

        // Legacy spans
        setMoneyText(byId('vinil_directos'), directos);
        setMoneyText(byId('vinil_dep'), depTotal);
        setMoneyText(byId('vinil_adicionales'), adicionales);
        var tfEl = byId('totalFinal');
        if (tfEl) tfEl.textContent = 'Total Vinil: ' + fmtEU(subtotalNoGI);

        // Ancho efectivo display
        updateAncho();

        // === CANTIDAD DE PRODUCTOS ===
        recalcQty(subtotalNoGI, baseMO, G, I, totalFinal);
      });
    }

    /* ── Ancho efectivo ── */
    function updateAncho() {
      var anchoEl = byId('ancho_estandar');
      var bordeEl = byId('borde_lado');
      var effSpan = byId('ancho_efectivo');
      if (!anchoEl || !bordeEl || !effSpan) return;
      var ancho = parseFloat(anchoEl.value || 0);
      var borde = parseFloat(bordeEl.value || 0);
      var eff = Math.max(0, ancho - 2 * borde);
      effSpan.textContent = (isFinite(ancho) && isFinite(borde)) ? ancho + ' - 2x' + borde + ' = ' + eff.toFixed(1) + ' cm' : '\u2014';
      effSpan.style.color = eff > 0 ? '' : '#ef4444';
      effSpan.style.fontWeight = eff > 0 ? '' : '700';
    }

    /* ── Merma sync ── */
    function syncMerma(e) {
      var pctEl = byId('merma_pct');
      var rangeEl = byId('merma_range');
      if (!pctEl || !rangeEl) return;
      if (e && e.target === rangeEl) pctEl.value = rangeEl.value;
      else rangeEl.value = pctEl.value;
      recompute();
    }

    /* ── Qty block ── */
    function recalcQty(subtotalNoGI, baseMO, G, I, total) {
      var qtyOn = byId('vinil_qty_on');
      var qtyInput = byId('vinil_qty');
      if (!qtyOn || !qtyInput) return;

      if (!qtyOn.checked) {
        ['vinil_qty_base', 'vinil_qty_subtotal', 'vinil_qty_g', 'vinil_qty_i', 'vinil_qty_total'].forEach(function(id) {
          var el = byId(id); if (el) el.textContent = fmtEU(0);
        });
        return;
      }

      var Q = parseInt(qtyInput.value || '1', 10);
      if (!isFinite(Q) || Q < 1) Q = 1;

      var bBase = byId('vinil_qty_base');
      var bSub = byId('vinil_qty_subtotal');
      var bG = byId('vinil_qty_g');
      var bI = byId('vinil_qty_i');
      var bTotal = byId('vinil_qty_total');
      if (bBase) bBase.textContent = fmtEU(subtotalNoGI * Q);
      if (bSub) bSub.textContent = fmtEU(baseMO * Q);
      if (bG) bG.textContent = fmtEU(G * Q);
      if (bI) bI.textContent = fmtEU(I * Q);
      if (bTotal) bTotal.textContent = fmtEU(total * Q);
    }

    /* ── Reset ── */
    function vinilReset() {
      removeKey('vinil_state');

      // Reset color blocks
      var cont = byId('bloques');
      if (cont) cont.replaceChildren();
      contador = 0;
      agregarBloque();

      // Uncheck all checkboxes
      ['cd_enabled', 'vin_d_papel_on', 'vin_d_cinta_on', 'vin_d_tinta_on',
       'vin_ind_on', 'vin_mo_on', 'vin_chk_ganancia', 'vin_chk_impuestos',
       'vinil_qty_on'].forEach(function(id) {
        var el = byId(id);
        if (el && el.type === 'checkbox') el.checked = false;
      });

      // Reset qty_use fields
      ['cd_qty_use', 'vin_d_papel_qty_use', 'vin_d_cinta_qty_use', 'vin_d_tinta_qty_use'].forEach(function(id) {
        var el = byId(id); if (el) el.value = '1';
      });
      ['cd_costo_util', 'vin_d_papel_util', 'vin_d_cinta_util', 'vin_d_tinta_util'].forEach(function(id) {
        var el = byId(id); if (el) el.value = '$ 0,00';
      });

      // Depreciation uses reset
      view.querySelectorAll('#vinil_depreciacion .dep_uses').forEach(function(el) { el.value = '1'; });
      view.querySelectorAll('#vinil_depreciacion .dep_util').forEach(function(el) { el.value = '$ 0,00'; });
      view.querySelectorAll('#vinil_depreciacion .dep_enabled').forEach(function(el) { el.checked = false; });

      // Merma reset
      var mp = byId('merma_pct'); if (mp) mp.value = '0';
      var mr = byId('merma_range'); if (mr) mr.value = '0';
      var bl = byId('borde_lado'); if (bl) bl.value = '1';

      // MO reset
      var moCfg = byId('vin_mo_cfg'); if (moCfg) moCfg.style.display = 'none';
      var moPill = byId('vin_mo_pill'); if (moPill) moPill.style.display = 'none';
      var moVal = byId('vin_mo_val'); if (moVal) moVal.textContent = fmtEU(0);

      // Indirectos reset
      var indCfg = byId('vin_ind_cfg'); if (indCfg) indCfg.style.display = 'none';

      // Zero out all totals
      ['vinil_directos', 'vinil_dep', 'vinil_adicionales',
       'vinil_pro_directos', 'vinil_pro_dep', 'vinil_pro_adic',
       'vin_subtotal_no_gi', 'vin_subtotal',
       'vin_ganancia_val', 'vin_impuestos_val', 'vin_total',
       'vinil_pro_total', 'vin_ind_ud', 'vin_mo_val'].forEach(function(id) {
        var el = byId(id); if (el) el.textContent = fmtEU(0);
      });
      var prMerma = byId('vinil_pro_merma'); if (prMerma) prMerma.textContent = '0%';
      var tfEl = byId('totalFinal'); if (tfEl) tfEl.textContent = 'Total Vinil: $ 0,00';

      recompute();
    }

    /* ── Bind everything ── */

    // Color blocks
    var btnAdd = byId('btn_add_color');
    if (btnAdd) btnAdd.addEventListener('click', function() { agregarBloque(); vinilSave(); });
    var btnReset = byId('btn_reset_vinil');
    if (btnReset) btnReset.addEventListener('click', vinilReset);

    // Ancho estandar
    var anchoEl = byId('ancho_estandar');
    if (anchoEl) anchoEl.addEventListener('input', function() { recompute(); vinilSave(); });

    // Merma sync
    var mermaPctEl = byId('merma_pct');
    var mermaRangeEl = byId('merma_range');
    if (mermaPctEl) mermaPctEl.addEventListener('input', syncMerma);
    if (mermaRangeEl) mermaRangeEl.addEventListener('input', syncMerma);

    // Borde
    var bordeEl = byId('borde_lado');
    if (bordeEl) bordeEl.addEventListener('input', function() { recompute(); });

    // cd_item preset
    var cdItem = byId('cd_item');
    if (cdItem) cdItem.addEventListener('change', function() {
      try {
        var opt = cdItem.options[cdItem.selectedIndex];
        var udVal = _parseEU(opt ? opt.getAttribute('data-ud') : '');
        if (isFinite(udVal) && udVal > 0) {
          var cantEl = byId('cd_cant');
          var cant = _parseEU(cantEl ? cantEl.value : 0);
          if (cant <= 0) cant = 1;
          var precioEl = byId('cd_precio');
          if (precioEl) precioEl.value = fmtEUplain(udVal * cant);
        }
      } catch(e) {}
      recompute();
    });

    // Delegate input/change on cost sections
    ['#vinil_costos_directos', '#vinil_depreciacion', '#vin_ind_card', '#vinil_gi_card', '#vinil_qty_card'].forEach(function(sel) {
      var el = $(sel);
      if (!el) return;
      el.addEventListener('input', recompute, true);
      el.addEventListener('change', recompute, true);
    });

    // Toggle panels
    var moCfgBtn = byId('vin_mo_cfg_btn');
    var moCfgPanel = byId('vin_mo_cfg');
    if (moCfgBtn && moCfgPanel) {
      moCfgBtn.addEventListener('click', function() {
        moCfgPanel.style.display = (moCfgPanel.style.display === 'none' || !moCfgPanel.style.display) ? 'flex' : 'none';
      });
    }

    var indCfgBtn = byId('vin_ind_cfg_btn');
    var indCfgPanel = byId('vin_ind_cfg');
    if (indCfgBtn && indCfgPanel) {
      indCfgBtn.addEventListener('click', function() {
        indCfgPanel.style.display = (indCfgPanel.style.display === 'none' || !indCfgPanel.style.display) ? 'block' : 'none';
      });
    }

    // Copy / Print
    var copyBtn = byId('vinil_pro_copy');
    if (copyBtn) copyBtn.addEventListener('click', function() {
      var t = [
        'Resumen de Vinil',
        'Directos: ' + (byId('vinil_pro_directos') ? byId('vinil_pro_directos').textContent : '-'),
        'Depreciacion: ' + (byId('vinil_pro_dep') ? byId('vinil_pro_dep').textContent : '-'),
        'Adicionales (aj.): ' + (byId('vinil_pro_adic') ? byId('vinil_pro_adic').textContent : '-'),
        'Merma: ' + (byId('vinil_pro_merma') ? byId('vinil_pro_merma').textContent : '-'),
        'Total Vinil: ' + (byId('vinil_pro_total') ? byId('vinil_pro_total').textContent : '-'),
        '',
        'Total sin G/I: ' + (byId('vin_subtotal_no_gi') ? byId('vin_subtotal_no_gi').textContent : '-'),
        'Subtotal: ' + (byId('vin_subtotal') ? byId('vin_subtotal').textContent : '-'),
        '+ Ganancia: ' + (byId('vin_ganancia_val') ? byId('vin_ganancia_val').textContent : '-'),
        '+ Impuestos: ' + (byId('vin_impuestos_val') ? byId('vin_impuestos_val').textContent : '-'),
        'Precio de Venta: ' + (byId('vin_total') ? byId('vin_total').textContent : '-')
      ].join('\n');
      if (typeof copyText === 'function') copyText(t);
      else if (navigator.clipboard) navigator.clipboard.writeText(t);
      if (typeof showToast === 'function') showToast('Copiado al portapapeles');
    });

    var printBtn = byId('vinil_pro_print');
    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });

    /* ── Initial load ── */
    vinilLoad();
    updateAncho();
    recompute();
  }
});
