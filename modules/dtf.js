/* ══════════════════════════════════════════════
   BeeSublime — DTF (servicio externo) Module
   ══════════════════════════════════════════════ */
registerModule('dtf', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Cálculo de costos — DTF (servicio externo)</h3>',
    '<div class="sep"></div>',
    '</div>',

    '<div class="card md-6" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Costos directos del servicio</h4>',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<div style="flex:1;min-width:180px">',
    '<label>Modalidad</label>',
    '<select id="dtf_modalidad" title="Cómo te cobra el proveedor">',
    '<option data-price="15" value="metro">Metro lineal (ancho 57 cm)</option>',
    '<option data-price="7.5" value="tramo30">Tramo de 30 cm (ancho 57 cm)</option>',
    '<option data-price="5" value="a3">Hoja A3</option>',
    '</select>',
    '</div>',
    '<div style="flex:1;min-width:160px">',
    '<label>Precio por unidad ($)</label>',
    '<input id="dtf_precio_unit" min="0" step="0.01" type="number" value="15"/>',
    '</div>',
    '<div style="flex:1;min-width:160px">',
    '<label><input checked id="dtf_resp_min" type="checkbox"/> Respetar mínimo de compra</label>',
    '</div>',
    '</div>',
    '<div class="sep"></div>',

    '<h4 style="margin:0 0 8px">Medida requerida</h4>',
    '<div class="row" style="gap:8px;align-items:flex-end">',
    '<div style="flex:1;min-width:160px">',
    '<label>Largo requerido (cm)</label>',
    '<input id="dtf_largo_cm" min="0" step="0.1" type="number" value="0"/>',
    '</div>',
    '<div style="flex:1;min-width:160px">',
    '<label><input id="dtf_calc_por_diseno" type="checkbox"/> Calcular largo por diseños</label>',
    '</div>',
    '</div>',
    '<div id="dtf_por_diseno" style="display:none;margin-top:8px">',
    '<div class="row" style="gap:8px;align-items:flex-end;flex-wrap:wrap">',
    '<div style="flex:1;min-width:130px"><label>N° de diseños</label><input id="dtf_n" min="1" step="1" type="number" value="1"/></div>',
    '<div style="flex:1;min-width:130px"><label>Ancho diseño (cm)</label><input id="dtf_w" min="0" step="0.1" type="number" value="10"/></div>',
    '<div style="flex:1;min-width:130px"><label>Alto diseño (cm)</label><input id="dtf_h" min="0" step="0.1" type="number" value="10"/></div>',
    '<div class="pill">Ancho útil: 57 cm</div>',
    '</div>',
    '<div class="muted" style="margin-top:6px">Colocación simple (sin rotación): columnas = floor(57 / ancho); filas = ceil(N / columnas); largo = filas × alto.</div>',
    '</div>',
    '</div>',

    '<div class="card md-6" style="background:#fff">',
    '<h4 style="margin:0 0 10px">Costos directos — Prenda</h4>',
    '<div class="row" style="gap:8px;align-items:center;margin-top:6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="dtf_prenda_on" type="checkbox"/> Activar',
    '</label>',
    '<select id="dtf_prenda_tipo" style="max-width:220px">',
    '<option value="algodon">Camiseta de algodón</option>',
    '<option value="poliester">Camiseta de poliéster</option>',
    '</select>',
    '</div>',
    '<div style="min-width:120px"><label>Cant. de Diseños</label><input id="dtf_prenda_disenos" type="text" value="1"/></div>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:130px;flex:1"><label>Cant. de prendas</label><input id="dtf_prenda_cant" min="0" step="1" type="number" value="0"/></div>',
    '<div style="min-width:160px;flex:1"><label>Precio paquete ($)</label><input id="dtf_prenda_precio" min="0" step="0.01" type="number" value="0"/></div>',
    '<div style="min-width:200px;flex:1"><label>Costo Ud. prenda</label><input id="dtf_prenda_costo_ud" readonly type="text" value="$ 0,00"/></div>',
    '</div>',
    '<div class="sep"></div>',

    '<h4 style="margin:0 0 10px">Depreciación de equipos <span class="muted">(base 2 años)</span></h4>',
    '<div class="row" style="gap:8px;align-items:center;margin:4px 0 6px">',
    '<label class="chk-label" style="display:flex;align-items:center;gap:8px">',
    '<input id="dtf_dep_on" type="checkbox"/> <strong>Plancha térmica</strong>',
    '</label>',
    '</div>',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Precio ($)</label><input id="dtf_dep_plancha_precio" type="text" value="400,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>costo x Mes</label><input class="dep_mes" id="dtf_dep_plancha_mes" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo Ud.</label><input class="dep_ud" id="dtf_dep_plancha_ud" readonly type="text" value="$ 0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Cant. de usos</label><input id="dtf_plancha_use" min="0" step="1" type="number" value="1"/></div>',
    '<div style="min-width:160px;flex:1"><label>Costo utilizado</label><input class="ud" id="dtf_plancha_used" readonly type="text" value="$ 0,00"/></div>',
    '</div>',

    '<h4 style="margin:0 0 10px">Extras</h4>',
    '<div class="row" style="gap:8px;align-items:center">',
    '<div style="flex:1;min-width:160px"><label>Envío del proveedor ($)</label><input id="dtf_extra_envio" min="0" step="0.01" type="number" value="0"/></div>',
    '<div style="flex:1;min-width:160px"><label>Diseño / retoques ($)</label><input id="dtf_extra_diseno" min="0" step="0.01" type="number" value="0"/></div>',
    '<div style="flex:1;min-width:160px"><label>Plancha térmica (costo por estampado) ($)</label><input id="dtf_extra_plancha" min="0" step="0.01" type="number" value="0"/></div>',
    '</div>',
    '<div class="row" style="gap:8px;align-items:center;margin-top:8px">',
    '<div style="flex:1;min-width:160px"><label>Otros ($)</label><input id="dtf_extra_otros" min="0" step="0.01" type="number" value="0"/></div>',
    '</div>',
    '</div>',

    '<!-- Costos indirectos -->',
    '<div class="card md-12 indA-card" id="dtf_ind_card">',
    '<h4>Costos indirectos</h4>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0"><input id="dtf_ind_on" type="checkbox"/> Activar</label>',
    '<div style="margin-left:auto"><button class="btn" id="dtf_ind_cfg_btn">Configurar</button></div>',
    '<div class="pill indA-pill">Costo Ud. (indirectos): <span class="result" id="dtf_ind_ud">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div id="dtf_ind_cfg" style="display:none">',
    '<div class="row" style="gap:14px;flex-wrap:wrap">',
    '<div style="min-width:160px;flex:1"><label>Alquiler (mensual)</label><input id="dtf_ind_alquiler" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Internet (mensual)</label><input id="dtf_ind_internet" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Suscripciones (mensual)</label><input id="dtf_ind_suscripciones" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Transporte (mensual)</label><input id="dtf_ind_transporte" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Electricidad (mensual)</label><input id="dtf_ind_electricidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Publicidad (mensual)</label><input id="dtf_ind_publicidad" type="text" value="0,00"/></div>',
    '<div style="min-width:160px;flex:1"><label>Otros (mensual)</label><input id="dtf_ind_otros" type="text" value="0,00"/></div>',
    '<div style="min-width:120px"><label>Unidades/mes</label><input class="indA-small" id="dtf_ind_units" min="1" step="1" type="number" value="100"/></div>',
    '</div>',
    '</div>',
    '</div>',

    '<!-- Totales / G&I / MO -->',
    '<div class="card md-12">',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Cantidad de diseños: <span class="result" id="dtf_unidades">0</span></div>',
    '<div class="pill">Cantidad de camisetas: <span class="result" id="dtf_camisetas">0</span></div>',
    '<div class="pill">Total directos: <span class="result" id="dtf_total_directos">$ 0,00</span></div>',
    '<div class="pill">Prendas: <span class="result" id="dtf_total_prenda">$ 0,00</span></div>',
    '<div class="pill">Depreciación plancha: <span class="result" id="dtf_total_dep">$ 0,00</span></div>',
    '<div class="pill">Extras: <span class="result" id="dtf_total_extras">$ 0,00</span></div>',
    '<div class="pill">Total sin G/I: <span class="result" id="dtf_subtotal_no_gi">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;margin-top:6px">',
    '<label style="display:flex;align-items:center;gap:8px;margin:0">',
    '<input id="dtf_mo_on" type="checkbox"/> Mano de obra',
    '</label>',
    '<button class="copy-btn" id="dtf_mo_cfg_btn" type="button">Configurar</button>',
    '</div>',
    '<div class="row" id="dtf_mo_cfg" style="display:none;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:6px">',
    '<div style="min-width:160px"><label>Sueldo mensual ($)</label><input id="dtf_mo_sueldo" type="text" value="400,00"/></div>',
    '<div style="min-width:160px"><label>Horas al mes</label><input id="dtf_mo_horas_mes" type="text" value="176"/></div>',
    '<div style="min-width:140px"><label>Setup (min)</label><input id="dtf_mo_setup" type="text" value="5,00"/></div>',
    '<div style="min-width:180px"><label>Ejecución (min/ud)</label><input id="dtf_mo_run" type="text" value="2,00"/></div>',
    '<div style="min-width:140px"><label>Unidades</label><input id="dtf_mo_units" type="text" value="1"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px">',
    '<div class="pill" id="dtf_mo_pill" style="display:none">+ Mano de obra: <span class="result" id="dtf_mo_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row">',
    '<div style="flex:1;min-width:160px"><label><input checked id="dtf_chk_ganancia" type="checkbox"/> Ganancia (%)</label><input id="dtf_ganancia" min="0" step="1" type="number" value="40"/></div>',
    '<div style="flex:1;min-width:160px"><label><input checked id="dtf_chk_impuestos" type="checkbox"/> Impuestos (%)</label><input id="dtf_impuestos" min="0" step="1" type="number" value="16"/></div>',
    '</div>',
    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Subtotal: <span class="result" id="dtf_subtotal">$ 0,00</span></div>',
    '<div class="pill">+ Ganancia: <span class="result" id="dtf_ganancia_val">$ 0,00</span></div>',
    '<div class="pill">+ Impuestos: <span class="result" id="dtf_impuestos_val">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',

    '<div class="row" style="gap:10px;align-items:center;flex-wrap:wrap">',
    '<div class="pill">Material a solicitar: <span class="result" id="dtf_mat_solicitar">—</span></div>',
    '<div class="pill">Costo DTF por unidad: <span class="result" id="dtf_costo_ud_dtf">$ 0,00</span></div>',
    '<div class="pill">Precio de Venta por camiseta: <span class="result" id="dtf_costo_por_camiseta">$ 0,00</span></div>',
    '</div>',
    '<div class="sep"></div>',
    '<div class="tot">Precio de Venta: <span class="result" id="dtf_total">$ 0,00</span></div>',
    '<div class="center-actions">',
    '<button class="copy-btn" id="dtf_btn_print">Exportar a PDF / Imprimir</button>',
    '<button class="copy-btn" id="dtf_btn_copy">Copiar</button>',
    '<button class="btn reset" id="dtf_btn_reset">Reset</button>',
    '</div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id); };

    var ANCHO_CM = 57;
    var MODO = { metro:'metro', tramo30:'tramo30', a3:'a3' };

    /* ---------- Helpers ---------- */
    function num(el) { return parseEU(el ? el.value : '0'); }
    function clamp(n) { return isFinite(n) ? n : 0; }

    function unidadesCobradas(mod, largo_cm, respMin) {
      if (mod === MODO.a3) {
        var hojaEquiv = 42;
        var u = largo_cm / hojaEquiv;
        if (respMin) u = Math.ceil(Math.max(1, u));
        return Math.max(0, u);
      }
      var unidad = (mod === MODO.metro) ? 100 : 30;
      var u2 = largo_cm / unidad;
      if (respMin) u2 = Math.ceil(Math.max(1, u2));
      return Math.max(0, u2);
    }

    /* ---------- Indirectos ---------- */
    function calcIndirectos() {
      if (!$('dtf_ind_on') || !$('dtf_ind_on').checked) {
        $('dtf_ind_ud').textContent = fmt(0);
        return 0;
      }
      var fields = ['alquiler','internet','suscripciones','transporte','electricidad','publicidad','otros'];
      var mens = 0;
      fields.forEach(function(k) { mens += parseEU($('dtf_ind_' + k).value); });
      var units = Math.max(1, parseEU($('dtf_ind_units').value) || 100);
      var ud = mens / units;
      $('dtf_ind_ud').textContent = fmt(ud);
      return ud;
    }

    /* ---------- MO ---------- */
    function calcMO() {
      if (!$('dtf_mo_on').checked) return 0;
      var sueldo = parseEU($('dtf_mo_sueldo').value);
      var horas  = parseEU($('dtf_mo_horas_mes').value) || 176;
      var setupM = parseEU($('dtf_mo_setup').value);
      var runM   = parseEU($('dtf_mo_run').value);
      var uds    = Math.max(1, parseEU($('dtf_mo_units').value));
      var valorHora = horas > 0 ? (sueldo / horas) : 0;
      var totalMin = setupM + (runM * uds);
      return Math.max(0, (valorHora / 60) * totalMin);
    }

    /* ---------- MAIN RECOMPUTE ---------- */
    function recompute() {
      var mod = $('dtf_modalidad').value;
      var respMin = $('dtf_resp_min').checked;
      var largo = num($('dtf_largo_cm'));

      /* Calc by design dimensions */
      if ($('dtf_calc_por_diseno').checked) {
        var N = Math.max(1, Math.floor(num($('dtf_n'))));
        var w = Math.max(0, num($('dtf_w')));
        var h = Math.max(0, num($('dtf_h')));
        var cols = Math.max(1, Math.floor(ANCHO_CM / Math.max(1, w)));
        var filas = Math.ceil(N / cols);
        largo = filas * h;
        $('dtf_largo_cm').value = String(largo.toFixed(1));
      }

      var punit = num($('dtf_precio_unit'));
      var u = unidadesCobradas(mod, largo, respMin);
      $('dtf_unidades').textContent = isFinite(u) ? u.toString() : '0';

      var directos = clamp(u * punit);
      var extras = clamp(num($('dtf_extra_envio')) + num($('dtf_extra_diseno')) + num($('dtf_extra_plancha')) + num($('dtf_extra_otros')));

      /* Prenda */
      var prenda_ud = 0, prenda_total = 0;
      if ($('dtf_prenda_on') && $('dtf_prenda_on').checked) {
        var pcant = Math.max(0, num($('dtf_prenda_cant')));
        var pprecio = Math.max(0, num($('dtf_prenda_precio')));
        prenda_ud = pcant > 0 ? (pprecio / pcant) : 0;
        $('dtf_prenda_costo_ud').value = fmt(prenda_ud);
        prenda_total = prenda_ud * pcant;
        $('dtf_camisetas').textContent = String(pcant);
      } else {
        $('dtf_prenda_costo_ud').value = '$ 0,00';
        $('dtf_camisetas').textContent = '0';
      }

      /* Depreciación plancha */
      var dep_precio = parseEU($('dtf_dep_plancha_precio').value);
      var dep_mes = dep_precio / 24;
      var dep_ud_base = dep_mes / 100;
      $('dtf_dep_plancha_mes').value = fmt(dep_mes);
      $('dtf_dep_plancha_ud').value = fmt(dep_ud_base);
      var dep_uses = Math.max(0, num($('dtf_plancha_use')));
      var dep_used = dep_ud_base * dep_uses;
      $('dtf_plancha_used').value = fmt(dep_used);
      var dep_total = ($('dtf_dep_on') && $('dtf_dep_on').checked) ? dep_used : 0;

      /* Indirectos + MO */
      var ind = calcIndirectos();
      var mo = calcMO();

      var sinGI = directos + extras + prenda_total + dep_total + ind + mo;

      /* G/I */
      var useG = $('dtf_chk_ganancia').checked;
      var useI = $('dtf_chk_impuestos').checked;
      var gPct = useG ? num($('dtf_ganancia')) / 100 : 0;
      var iPct = useI ? num($('dtf_impuestos')) / 100 : 0;
      var subtotal = sinGI;
      var gVal = subtotal * gPct;
      var iVal = (subtotal + gVal) * iPct;
      var total = subtotal + gVal + iVal;

      /* Material a solicitar */
      var matLabel = '—';
      if (mod === 'metro') matLabel = largo.toFixed(1) + ' cm (' + u.toFixed(1) + ' metro' + (u !== 1 ? 's' : '') + ')';
      else if (mod === 'tramo30') matLabel = u + ' tramo(s) de 30 cm';
      else if (mod === 'a3') matLabel = u + ' hoja(s) A3';
      $('dtf_mat_solicitar').textContent = matLabel;

      /* Costos unitarios */
      var nDesigns = parseFloat($('dtf_n') ? $('dtf_n').value : '0') || 0;
      var costo_ud_dtf = nDesigns > 0 ? (directos / nDesigns) + (nDesigns > 0 ? (extras / nDesigns) : 0) : 0;
      $('dtf_costo_ud_dtf').textContent = fmt(costo_ud_dtf);
      var camisetas = parseFloat($('dtf_camisetas').textContent) || 0;
      $('dtf_costo_por_camiseta').textContent = fmt(camisetas > 0 ? (total / camisetas) : 0);

      /* UI */
      $('dtf_total_directos').textContent = fmt(directos);
      $('dtf_total_extras').textContent = fmt(extras);
      $('dtf_total_prenda').textContent = fmt(prenda_total);
      $('dtf_total_dep').textContent = fmt(dep_total);
      $('dtf_subtotal_no_gi').textContent = fmt(sinGI);
      $('dtf_subtotal').textContent = fmt(subtotal);
      $('dtf_ganancia_val').textContent = fmt(gVal);
      $('dtf_impuestos_val').textContent = fmt(iVal);
      $('dtf_total').textContent = fmt(total);

      $('dtf_mo_pill').style.display = $('dtf_mo_on').checked ? 'inline-flex' : 'none';
      $('dtf_mo_val').textContent = fmt(mo);

      try { if (window.resumen_update) window.resumen_update(); } catch(e) {}
    }

    /* ---------- Events ---------- */
    $('dtf_modalidad').addEventListener('change', function() {
      var mod = $('dtf_modalidad').value;
      if (mod === 'metro') $('dtf_precio_unit').value = '15';
      else if (mod === 'tramo30') $('dtf_precio_unit').value = (15 * 0.3).toFixed(2);
      else if (mod === 'a3') $('dtf_precio_unit').value = '5';
      recompute();
    });

    $('dtf_calc_por_diseno').addEventListener('change', function() {
      $('dtf_por_diseno').style.display = $('dtf_calc_por_diseno').checked ? 'block' : 'none';
      recompute();
    });

    view.querySelectorAll('input, select').forEach(function(el) {
      el.addEventListener('input', recompute);
      el.addEventListener('change', recompute);
    });

    /* MO toggle */
    $('dtf_mo_cfg_btn').addEventListener('click', function() {
      var cfg = $('dtf_mo_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'flex' : 'none';
      $('dtf_mo_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    /* Indirectos toggle */
    $('dtf_ind_cfg_btn').addEventListener('click', function() {
      var cfg = $('dtf_ind_cfg');
      var open = getComputedStyle(cfg).display === 'none';
      cfg.style.display = open ? 'block' : 'none';
      $('dtf_ind_cfg_btn').textContent = open ? 'Ocultar' : 'Configurar';
    });

    /* Copy */
    $('dtf_btn_copy').addEventListener('click', function() {
      var txt = [
        'DTF (terceros)',
        'Modalidad: ' + ($('dtf_modalidad').selectedOptions[0] || {}).text,
        'Precio por unidad: ' + ($('dtf_precio_unit').value || '0'),
        'Unidades cobradas: ' + $('dtf_unidades').textContent,
        'Total directos: ' + $('dtf_total_directos').textContent,
        'Extras: ' + $('dtf_total_extras').textContent,
        'Subtotal sin G/I: ' + $('dtf_subtotal_no_gi').textContent,
        'Subtotal: ' + $('dtf_subtotal').textContent,
        '+ Ganancia: ' + $('dtf_ganancia_val').textContent,
        '+ Impuestos: ' + $('dtf_impuestos_val').textContent,
        'Precio de Venta: ' + $('dtf_total').textContent
      ].join('\n');
      copyText(txt);
    });

    /* Print */
    $('dtf_btn_print').addEventListener('click', function() { window.print(); });

    /* Reset */
    $('dtf_btn_reset').addEventListener('click', function() {
      $('dtf_modalidad').value = 'metro';
      $('dtf_precio_unit').value = '15';
      $('dtf_resp_min').checked = true;
      $('dtf_largo_cm').value = '0';
      $('dtf_calc_por_diseno').checked = false;
      $('dtf_por_diseno').style.display = 'none';
      $('dtf_n').value = '1';
      $('dtf_w').value = '10';
      $('dtf_h').value = '10';
      $('dtf_prenda_cant').value = '0';
      $('dtf_prenda_precio').value = '0';
      $('dtf_dep_plancha_precio').value = '400';
      $('dtf_extra_envio').value = '0';
      $('dtf_extra_diseno').value = '0';
      $('dtf_extra_plancha').value = '0';
      $('dtf_extra_otros').value = '0';
      $('dtf_ganancia').value = '40';
      $('dtf_impuestos').value = '16';
      view.querySelectorAll('input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
      $('dtf_mo_cfg').style.display = 'none';
      $('dtf_ind_cfg').style.display = 'none';
      $('dtf_mo_cfg_btn').textContent = 'Configurar';
      $('dtf_ind_cfg_btn').textContent = 'Configurar';
      recompute();
    });

    /* Save/Load */
    var SAVE_KEY = 'bee_dtf';
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
      if ($('dtf_calc_por_diseno').checked) {
        $('dtf_por_diseno').style.display = 'block';
      }
    }
    view.addEventListener('input', saveState);
    view.addEventListener('change', saveState);

    loadState();
    recompute();
  }
});
