/* ==============================================================
   BeeSublime -- Cotizador Module
   All element IDs prefixed with "cot_" to avoid collisions.
   Uses: registerModule, fmt, fmtBs, fmtUSD, parseEU, numVal,
         showToast, copyText, save, load, BeeRates
   ============================================================== */

registerModule('cotizador', {

  html: [
    '<div class="card" style="position:relative">',

    /* ── Header bar ── */
    '  <div style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap">',
    '    <div>',
    '      <h3 style="margin:0 0 4px">Cotizador de Productos</h3>',
    '      <div class="muted" style="font-size:12px">Precios fijos por Item/Descripcion. Selecciona el tipo de cliente y agrega lineas.</div>',
    '    </div>',
    '    <div style="display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 10px;font-size:12px">',
    '      Cliente: <strong id="cot_badgeCliente">Detal</strong><span class="muted" id="cot_badgeClienteNombre" style="margin-left:6px"></span>',
    '    </div>',
    '    <button class="btn neutral" id="cot_btnAdmin" style="font-size:13px;padding:8px 12px">Admin</button>',
    '  </div>',

    /* ── Config details ── */
    '  <details id="cot_cfg" open>',
    '    <summary style="cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border:1px solid var(--line);border-radius:12px;background:var(--card);margin-top:10px">',
    '      <span>Configuracion</span>',
    '      <span class="muted" style="font-size:12px">WhatsApp + tipo de cliente</span>',
    '    </summary>',
    '    <div class="row" style="margin:12px 0;gap:12px;flex-wrap:wrap">',

    /* tipo cliente */
    '      <div style="flex:1;min-width:160px">',
    '        <label>Tipo de cliente</label>',
    '        <select id="cot_tipoCliente" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px">',
    '          <option value="Detal" selected>Detal</option>',
    '          <option value="Mayor">Mayor</option>',
    '          <option value="Gran Mayor">Gran Mayor</option>',
    '        </select>',
    '      </div>',

    /* whatsapp */
    '      <div style="flex:1;min-width:160px">',
    '        <label>WhatsApp</label>',
    '        <input id="cot_telefono" placeholder="58412XXXXXXX" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '      </div>',

    /* nombre */
    '      <div style="flex:1;min-width:160px">',
    '        <label>Nombre del cliente</label>',
    '        <input id="cot_clienteNombre" placeholder="Ej: Daniel" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '      </div>',

    /* BCV */
    '      <div style="flex:1;min-width:160px">',
    '        <label>Dolar BCV</label>',
    '        <input id="cot_bcv" placeholder="Ej: 40,00" step="0.01" type="number" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '        <div style="display:flex;gap:8px;align-items:center;margin-top:6px">',
    '          <button class="btn neutral" id="cot_bcv_refresh" style="font-size:12px;padding:6px 10px">Actualizar BCV</button>',
    '          <span class="muted" id="cot_bcv_status" style="font-size:12px">--</span>',
    '        </div>',
    '      </div>',

    /* envio */
    '      <div style="flex:1;min-width:160px">',
    '        <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="cot_envioChk"> Incluir envio</label>',
    '        <div style="display:flex;gap:8px;align-items:center;margin-top:6px">',
    '          <span class="muted">$</span>',
    '          <input id="cot_envioMonto" type="number" step="0.01" min="0" value="2.00" style="flex:1;padding:10px 12px;border:1px solid var(--line);border-radius:12px" disabled/>',
    '        </div>',
    '        <span class="muted" style="font-size:11px">Precio de referencia: 2,00 $ (editable)</span>',
    '      </div>',

    /* delivery */
    '      <div style="flex:1;min-width:160px">',
    '        <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="cot_deliveryChk"> Incluir delivery</label>',
    '        <div style="display:flex;gap:8px;align-items:center;margin-top:6px">',
    '          <span class="muted">$</span>',
    '          <input id="cot_deliveryMonto" type="number" step="0.01" min="0" value="3.00" style="flex:1;padding:10px 12px;border:1px solid var(--line);border-radius:12px" disabled/>',
    '        </div>',
    '        <span class="muted" style="font-size:11px">Precio de referencia: 3,00 $ (editable)</span>',
    '      </div>',

    '    </div>',

    /* messages */
    '    <div class="row" style="gap:12px;flex-wrap:wrap;margin-bottom:8px">',
    '      <div style="flex:1;min-width:220px">',
    '        <label>Mensaje WhatsApp (inicio)</label>',
    '        <input id="cot_msgIni" value="Hola, te comparto la cotizacion de pijamas:" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '      </div>',
    '      <div style="flex:2;min-width:220px">',
    '        <label>Mensaje WhatsApp (final)</label>',
    '        <input id="cot_msgFin" value="Gracias por tu preferencia" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '      </div>',
    '    </div>',
    '    <div class="sep"></div>',
    '  </details>',

    /* ── Filter / product selector ── */
    '  <div class="row" style="margin:8px 0;gap:12px;flex-wrap:wrap;align-items:flex-end">',
    '    <div style="flex:2;min-width:220px">',
    '      <label>Filtro: Tipo de pijama</label>',
    '      <div id="cot_filtroTipo" style="display:flex;border:1px solid var(--line);border-radius:999px;overflow:hidden;flex-wrap:wrap">',
    '        <button class="active" data-k="ALL" style="flex:1;padding:8px 12px;border:0;border-right:1px solid var(--line);background:#fff;font-weight:600;cursor:pointer">Todos</button>',
    '        <button data-k="Manga Corta" style="flex:1;padding:8px 12px;border:0;border-right:1px solid var(--line);background:#fff;font-weight:600;cursor:pointer">Manga Corta</button>',
    '        <button data-k="Manga Larga" style="flex:1;padding:8px 12px;border:0;border-right:1px solid var(--line);background:#fff;font-weight:600;cursor:pointer">Manga Larga</button>',
    '        <button data-k="Otros" style="flex:1;padding:8px 12px;border:0;background:#fff;font-weight:600;cursor:pointer">Otros</button>',
    '      </div>',
    '    </div>',
    '    <div style="flex:1.5;min-width:180px">',
    '      <label>Item</label>',
    '      <select id="cot_item" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"></select>',
    '    </div>',
    '    <div style="flex:1;min-width:140px">',
    '      <label>Descripcion</label>',
    '      <select id="cot_talla" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"></select>',
    '    </div>',
    '    <div style="flex:0 0 80px">',
    '      <label>Cant.</label>',
    '      <input id="cot_cantidad" min="1" type="number" value="1" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '  </div>',

    /* ── Toolbar ── */
    '  <div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;position:sticky;top:8px;background:var(--card);padding:8px;border:1px solid var(--line);border-radius:12px;z-index:5">',
    '    <button class="btn" id="cot_agregar">+ Anadir</button>',
    '    <button class="btn neutral" id="cot_reset">Reset</button>',
    '    <button class="btn neutral" id="cot_copiar">Copiar WhatsApp</button>',
    '    <a class="btn" id="cot_whatsLink" href="#" target="_blank" rel="noopener" style="text-decoration:none;text-align:center;background:#ff4fa3;color:#fff;border-radius:10px;padding:10px 14px;font-weight:600">Abrir WhatsApp</a>',
    '  </div>',

    /* ── Quote table ── */
    '  <div style="overflow:auto;max-height:52vh;margin-top:8px;border:1px solid var(--line);border-radius:12px">',
    '    <table id="cot_tabla" style="width:100%;border-collapse:collapse">',
    '      <thead>',
    '        <tr>',
    '          <th style="width:68px;padding:8px;font-size:13px;text-align:left;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">Cant.</th>',
    '          <th style="padding:8px;font-size:13px;text-align:left;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">Item</th>',
    '          <th style="padding:8px;font-size:13px;text-align:left;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">Descripcion</th>',
    '          <th class="cot-col-cost" style="padding:8px;font-size:13px;text-align:right;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">Costo</th>',
    '          <th style="padding:8px;font-size:13px;text-align:right;width:120px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">P.Unit</th>',
    '          <th style="padding:8px;font-size:13px;text-align:right;width:120px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)">Total</th>',
    '          <th style="padding:8px;font-size:13px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--card)"></th>',
    '        </tr>',
    '      </thead>',
    '      <tbody></tbody>',
    '      <tfoot>',
    '        <tr id="cot_rowTotalUsd">',
    '          <td colspan="5" style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)">TOTAL ($)</td>',
    '          <td style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)" id="cot_granTotal">0,00</td>',
    '          <td style="padding:8px;border-bottom:1px solid var(--line)"></td>',
    '        </tr>',
    '        <tr id="cot_rowAbono">',
    '          <td colspan="5" style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)">ABONO (50%) -- Bs</td>',
    '          <td style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)" id="cot_abonoBs">0,00 Bs</td>',
    '          <td style="padding:8px;border-bottom:1px solid var(--line)"></td>',
    '        </tr>',
    '        <tr id="cot_rowRestante">',
    '          <td colspan="5" style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)">RESTANTE ($)</td>',
    '          <td style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)" id="cot_restanteUsd">0,00 $</td>',
    '          <td style="padding:8px;border-bottom:1px solid var(--line)"></td>',
    '        </tr>',
    '        <tr id="cot_rowTotalBs" style="display:none">',
    '          <td colspan="5" style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)">TOTAL (Bs)</td>',
    '          <td style="text-align:right;padding:8px;font-weight:800;font-size:16px;border-bottom:1px solid var(--line)" id="cot_granTotalBs">0,00 Bs</td>',
    '          <td style="padding:8px;border-bottom:1px solid var(--line)"></td>',
    '        </tr>',
    '      </tfoot>',
    '    </table>',
    '  </div>',

    '  <p class="muted" id="cot_texto" style="white-space:pre-wrap;margin-top:12px;font-size:13px"></p>',
    '</div>',

    /* ── Admin panel ── */
    '<div class="card" id="cot_modCatalogo" style="margin-top:16px;display:none">',
    '  <h3>Catalogo</h3>',
    '  <p class="muted" style="font-size:12px">Agrega/edita items y tallas con sus precios. Puedes guardar los cambios en este dispositivo y restaurar el catalogo original cuando quieras.</p>',
    '  <div class="row" style="margin-top:8px;gap:12px;flex-wrap:wrap">',

    '    <div style="flex:0 0 auto" id="cot_adminToggleCostoWrap">',
    '      <label style="display:flex;gap:8px;align-items:center"><input id="cot_toggleCosto" type="checkbox"/> Mostrar Costo</label>',
    '    </div>',

    '    <div style="flex:1;min-width:180px">',
    '      <label>Item (producto)</label>',
    '      <select id="cot_admin_item" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"></select>',
    '    </div>',
    '    <div style="flex:1;min-width:180px">',
    '      <label>Descripcion</label>',
    '      <select id="cot_admin_talla" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"></select>',
    '    </div>',
    '    <div style="flex:1;min-width:160px">',
    '      <label>Crear item nuevo</label>',
    '      <input id="cot_admin_newItem" placeholder="Ej: Pijama Premium" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:0 0 auto;align-self:flex-end">',
    '      <button class="btn" id="cot_admin_addItem">+ Crear item</button>',
    '    </div>',

    '  </div>',
    '  <div class="row" style="margin-top:12px;gap:12px;flex-wrap:wrap">',
    '    <div style="flex:1;min-width:120px">',
    '      <label>Costo (C)</label>',
    '      <input id="cot_admin_c" min="0" step="0.01" type="number" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:1;min-width:120px">',
    '      <label>Precio Gran Mayor (G)</label>',
    '      <input id="cot_admin_g" min="0" step="0.01" type="number" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:1;min-width:120px">',
    '      <label>Precio Mayor (M)</label>',
    '      <input id="cot_admin_m" min="0" step="0.01" type="number" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:1;min-width:120px">',
    '      <label>Precio Detal (D)</label>',
    '      <input id="cot_admin_d" min="0" step="0.01" type="number" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:0 0 auto;align-self:flex-end;display:flex;gap:8px">',
    '      <button class="btn" id="cot_admin_saveTall">Guardar descripcion</button>',
    '      <button class="btn neutral" id="cot_admin_delTall">Eliminar descripcion</button>',
    '    </div>',
    '  </div>',

    /* Import */
    '  <div style="margin-top:14px">',
    '    <label>Importar tabla (Color, Descripcion, GranMayor, Mayor, Detal) -- pega lineas sin encabezado</label>',
    '    <textarea id="cot_admin_import" placeholder="Colores&#9;6 cm&#9;1,60&#9;1,90&#9;2,30" style="width:100%;height:120px;border:1px solid var(--line);border-radius:12px;padding:10px;margin-top:6px"></textarea>',
    '  </div>',
    '  <div class="row" style="gap:12px;margin-top:8px;flex-wrap:wrap;align-items:flex-end">',
    '    <div style="flex:1;min-width:180px">',
    '      <label>Prefijo de item (familia)</label>',
    '      <input id="cot_admin_prefix" placeholder="Ej: Bambalinas" style="width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:12px"/>',
    '    </div>',
    '    <div style="flex:0 0 auto">',
    '      <button class="btn" id="cot_admin_runImport">Importar tabla</button>',
    '    </div>',
    '  </div>',

    '  <div class="sep"></div>',
    '  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">',
    '    <button class="btn" id="cot_btnGuardarCAT">Guardar Catalogo (este dispositivo)</button>',
    '    <button class="btn" id="cot_btnExportCAT">Exportar catalogo (JSON)</button>',
    '    <button class="btn neutral" id="cot_btnRestaurarCAT">Restaurar Catalogo Original</button>',
    '    <span class="muted" style="font-size:12px">Los cambios se guardan en el almacenamiento local del navegador.</span>',
    '  </div>',
    '</div>'
  ].join('\n'),

  /* ================================================================
     init — runs once when the view is first created
     ================================================================ */
  init: function(view) {

    // ── Scoped helpers ──
    var V = view;
    function el(id) { return V.querySelector('#' + id); }
    function elAll(sel) { return Array.prototype.slice.call(V.querySelectorAll(sel)); }

    // ── Catalog data (mutable object) ──
    var CAT = {};
    var CAT_ORIGINAL = {};
    var CAT_STORAGE_KEY = 'cot.catalogo';

    // ── Cached DOM refs ──
    var itemSel          = el('cot_item');
    var tallaSel         = el('cot_talla');
    var tipoClienteEl    = el('cot_tipoCliente');
    var badgeCliente     = el('cot_badgeCliente');
    var badgeNombre      = el('cot_badgeClienteNombre');
    var clienteNombreEl  = el('cot_clienteNombre');
    var bcvInput         = el('cot_bcv');
    var bcvBtn           = el('cot_bcv_refresh');
    var bcvStatus        = el('cot_bcv_status');
    var envioChk         = el('cot_envioChk');
    var envioMonto       = el('cot_envioMonto');
    var deliveryChk      = el('cot_deliveryChk');
    var deliveryMonto    = el('cot_deliveryMonto');
    var granTotalEl      = el('cot_granTotal');
    var abonoBsEl        = el('cot_abonoBs');
    var granTotalBsEl    = el('cot_granTotalBs');
    var restanteUsdEl    = el('cot_restanteUsd');
    var rowAbono         = el('cot_rowAbono');
    var rowRestante      = el('cot_rowRestante');
    var rowTotalBs       = el('cot_rowTotalBs');
    var textoEl          = el('cot_texto');
    var whatsLinkEl      = el('cot_whatsLink');
    var toggleCostoEl    = el('cot_toggleCosto');
    var modCatalogo      = el('cot_modCatalogo');
    var btnAdmin         = el('cot_btnAdmin');

    // Admin elements
    var admin_item       = el('cot_admin_item');
    var admin_talla      = el('cot_admin_talla');
    var admin_c          = el('cot_admin_c');
    var admin_g          = el('cot_admin_g');
    var admin_m          = el('cot_admin_m');
    var admin_d          = el('cot_admin_d');
    var admin_newItem    = el('cot_admin_newItem');

    // ================================================================
    //  Cost column visibility
    // ================================================================
    function applyCostVisibility() {
      var show = load('cot.showCost', false);
      var cells = elAll('.cot-col-cost');
      // Also hide cost cells in tbody
      var allCost = elAll('#cot_tabla th:nth-child(4), #cot_tabla td:nth-child(4)');
      allCost.forEach(function(c) {
        c.style.display = show ? '' : 'none';
      });
      if (toggleCostoEl) toggleCostoEl.checked = !!show;
    }

    if (toggleCostoEl) {
      toggleCostoEl.addEventListener('change', function() {
        save('cot.showCost', toggleCostoEl.checked);
        applyCostVisibility();
      });
    }

    // ================================================================
    //  Catalog loading
    // ================================================================
    function replaceCat(newData) {
      var k;
      for (k in CAT) { if (CAT.hasOwnProperty(k)) delete CAT[k]; }
      for (k in newData) { if (newData.hasOwnProperty(k)) CAT[k] = newData[k]; }
    }

    function loadCATFromStorage() {
      var saved = load(CAT_STORAGE_KEY, null);
      if (saved) replaceCat(saved);
    }

    function saveCATToStorage() {
      save(CAT_STORAGE_KEY, CAT);
      showToast('Catalogo guardado');
    }

    function restoreCATOriginal() {
      if (!confirm('Restaurar el catalogo original? Se perderan los cambios locales.')) return;
      try { localStorage.removeItem('bee.' + CAT_STORAGE_KEY); } catch(e) {}
      replaceCat(JSON.parse(JSON.stringify(CAT_ORIGINAL)));
      buildItems('ALL');
      admin_buildItemSelect();
      admin_loadTallas();
      admin_fillPrices();
      showToast('Catalogo original restaurado');
    }

    // Fetch catalog JSON, then bootstrap
    function bootCatalog(data) {
      replaceCat(data);
      CAT_ORIGINAL = JSON.parse(JSON.stringify(data));
      loadCATFromStorage();
      buildItems('ALL');
      admin_buildItemSelect();
      admin_loadTallas();
      admin_fillPrices();
      applyCostVisibility();
      recalcTotal();
    }

    // Attempt fetch; fallback to empty
    fetch('modules/catalogo.json', { cache: 'no-store' })
      .then(function(r) { return r.json(); })
      .then(function(data) { bootCatalog(data); })
      .catch(function() {
        console.warn('[cotizador] Could not load catalogo.json, using empty catalog');
        bootCatalog({});
      });

    // ================================================================
    //  Build item / talla selects
    // ================================================================
    function buildItems(filter) {
      if (!filter) filter = 'ALL';
      itemSel.innerHTML = '';
      var grupos = { 'Microdurazno': [], 'Algodon': [], 'Otros': [] };
      Object.keys(CAT).forEach(function(k) {
        var isCorta = k.indexOf('Manga Corta') !== -1;
        var isLarga = k.indexOf('Manga Larga') !== -1;
        if (filter === 'Manga Corta' && !isCorta) return;
        if (filter === 'Manga Larga' && !isLarga) return;
        if (filter === 'Otros' && (isCorta || isLarga)) return;
        var grupo = k.indexOf('Microdurazno') !== -1 ? 'Microdurazno' : (k.indexOf('Algod') !== -1 ? 'Algodon' : 'Otros');
        grupos[grupo].push(k);
      });
      Object.keys(grupos).forEach(function(g) {
        var arr = grupos[g];
        if (!arr.length) return;
        var og = document.createElement('optgroup');
        og.label = g;
        arr.forEach(function(k) {
          var o = document.createElement('option');
          o.textContent = k;
          og.appendChild(o);
        });
        itemSel.appendChild(og);
      });
      loadTallas();
    }

    function loadTallas() {
      tallaSel.innerHTML = '';
      var t = CAT[itemSel.value];
      if (!t) return;
      Object.keys(t).forEach(function(s) {
        var o = document.createElement('option');
        o.textContent = s;
        tallaSel.appendChild(o);
      });
    }

    // ================================================================
    //  Filter toggle
    // ================================================================
    var filtroTipo = el('cot_filtroTipo');
    if (filtroTipo) {
      filtroTipo.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') return;
        var btns = Array.prototype.slice.call(filtroTipo.querySelectorAll('button'));
        btns.forEach(function(b) {
          b.classList.remove('active');
          b.style.background = '#fff';
        });
        e.target.classList.add('active');
        e.target.style.background = 'var(--accent, #ff7aa2)';
        buildItems(e.target.getAttribute('data-k'));
      });
      // Set initial active style
      var firstBtn = filtroTipo.querySelector('button.active');
      if (firstBtn) firstBtn.style.background = 'var(--accent, #ff7aa2)';
    }

    itemSel.addEventListener('change', loadTallas);

    // ================================================================
    //  Badge nombre
    // ================================================================
    function updateBadgeNombre() {
      var n = (clienteNombreEl.value || '').trim();
      if (badgeNombre) badgeNombre.textContent = n ? '-- ' + n : '';
    }

    // ================================================================
    //  recalcTotal
    // ================================================================
    function recalcTotal() {
      var total = 0;
      var rows = elAll('#cot_tabla tbody tr');
      rows.forEach(function(tr) {
        total += parseFloat(tr.getAttribute('data-total') || 0);
      });

      // Delivery
      var dActive = deliveryChk && deliveryChk.checked;
      var dMonto = parseEU(deliveryMonto ? deliveryMonto.value : 0);
      if (dActive) total += dMonto;

      // Envio
      var eActive = envioChk && envioChk.checked;
      var eMonto = parseEU(envioMonto ? envioMonto.value : 0);
      if (eActive) total += eMonto;

      // Total USD
      if (granTotalEl) granTotalEl.textContent = fmt(total) + ' $';

      // BCV
      var bcv = bcvInput ? parseFloat(bcvInput.value) || 0 : 0;

      // Show/hide rows based on envio
      if (eActive) {
        if (rowAbono) rowAbono.style.display = 'none';
        if (rowRestante) rowRestante.style.display = 'none';
        if (rowTotalBs) rowTotalBs.style.display = '';
      } else {
        if (rowAbono) rowAbono.style.display = '';
        if (rowRestante) rowRestante.style.display = '';
        if (rowTotalBs) rowTotalBs.style.display = 'none';
      }

      // Abono 50% Bs
      var abono = total * 0.5 * bcv;
      if (abonoBsEl) abonoBsEl.textContent = fmt(abono) + ' Bs';

      // Total Bs (envio mode)
      if (granTotalBsEl) granTotalBsEl.textContent = fmt(total * bcv) + ' Bs';

      // Restante 50% USD
      var restante = total * 0.5;
      if (restanteUsdEl) restanteUsdEl.textContent = fmt(restante) + ' $';

      buildText();
      try { updateBadgeNombre(); } catch(e) {}
    }

    // ================================================================
    //  Add line
    // ================================================================
    function addLinea() {
      var it = itemSel.value;
      var ta = tallaSel.value;
      if (!it || !ta || !CAT[it] || !CAT[it][ta]) return;
      var cantEl = el('cot_cantidad');
      var q = Math.max(1, parseInt(cantEl ? cantEl.value : 1) || 1);
      var datos = CAT[it][ta];
      var tipo = tipoClienteEl.value;
      var pu;
      if (tipo === 'Gran Mayor') pu = datos.g || datos.m || datos.d || 0;
      else if (tipo === 'Mayor') pu = datos.m || datos.d || 0;
      else pu = datos.d || datos.m || 0;
      var lineTotal = pu * q;

      var tr = document.createElement('tr');
      tr.setAttribute('data-total', lineTotal);
      tr.innerHTML =
        '<td style="padding:8px;font-size:13px;border-bottom:1px solid var(--line)">' + q + '</td>' +
        '<td style="padding:8px;font-size:13px;border-bottom:1px solid var(--line)">' + it + '</td>' +
        '<td style="padding:8px;font-size:13px;border-bottom:1px solid var(--line)">' + ta + '</td>' +
        '<td style="padding:8px;font-size:13px;text-align:right;border-bottom:1px solid var(--line)">' + fmt(datos.c || 0) + ' $</td>' +
        '<td style="padding:8px;font-size:13px;text-align:right;border-bottom:1px solid var(--line)">' + fmt(pu) + ' $</td>' +
        '<td style="padding:8px;font-size:13px;text-align:right;border-bottom:1px solid var(--line)">' + fmt(lineTotal) + ' $</td>' +
        '<td style="padding:8px;border-bottom:1px solid var(--line)"><button class="btn neutral cot-del" style="padding:4px 10px;font-size:12px">X</button></td>';

      var tbody = V.querySelector('#cot_tabla tbody');
      if (tbody) tbody.appendChild(tr);

      applyCostVisibility();
      recalcTotal();
    }

    // Delete line (delegated)
    V.addEventListener('click', function(e) {
      if (e.target.classList.contains('cot-del')) {
        var tr = e.target.closest('tr');
        if (tr) tr.remove();
        recalcTotal();
      }
    });

    el('cot_agregar').addEventListener('click', addLinea);
    el('cot_reset').addEventListener('click', function() {
      var tbody = V.querySelector('#cot_tabla tbody');
      if (tbody) tbody.innerHTML = '';
      recalcTotal();
    });

    // ================================================================
    //  Build WhatsApp text
    // ================================================================
    function buildText() {
      if (badgeCliente) badgeCliente.textContent = tipoClienteEl.value;

      var rows = elAll('#cot_tabla tbody tr');
      var lines = rows.map(function(tr) {
        var t = tr.children;
        var cant  = t[0].textContent;
        var item  = t[1].textContent;
        var desc  = t[2].textContent;
        var pUnit = t[4].textContent;
        var total = t[5].textContent;
        return cant + 'x ' + item + ' ' + desc + '\nP.Unit: ' + pUnit + ' -> Total: ' + total;
      });

      var nombre = (clienteNombreEl.value || '').trim();
      var msgIni = el('cot_msgIni') ? el('cot_msgIni').value : '';
      var msgFin = el('cot_msgFin') ? el('cot_msgFin').value : '';

      var totalTxt = granTotalEl ? granTotalEl.textContent : '0,00';
      var totalNum = parseEU(totalTxt.replace(/[^\d.,]/g, ''));
      var eActive = envioChk && envioChk.checked;
      var eMonto = parseEU(envioMonto ? envioMonto.value : 0);
      var dActive = deliveryChk && deliveryChk.checked;
      var dMonto = parseEU(deliveryMonto ? deliveryMonto.value : 0);
      var bcvVal = bcvInput ? parseFloat(bcvInput.value) || 0 : 0;

      var txt = msgIni + '\nCliente: ' + tipoClienteEl.value + (nombre ? ' -- ' + nombre : '') + '\nProductos:\n' + lines.join('\n');

      if (eActive) txt += '\nEnvio: ' + fmt(eMonto) + ' $';
      if (dActive) txt += '\nDelivery: ' + fmt(dMonto) + ' $';

      txt += '\nTotal: ' + fmt(totalNum) + ' $';

      if (eActive) {
        txt += '\nTotal en Bs: ' + fmt(totalNum * bcvVal) + ' Bs';
      } else {
        var abonoUSD = totalNum * 0.5;
        var restanteUSD = totalNum - abonoUSD;
        var abonoBsTxt = abonoBsEl ? abonoBsEl.textContent : '0,00 Bs';
        txt += '\nAbono 50%: ' + fmt(abonoUSD) + ' $';
        txt += '\nAbono en Bs: ' + abonoBsTxt;
        txt += '\nRestante: ' + fmt(restanteUSD) + ' $';
      }

      txt += '\n' + msgFin;

      if (textoEl) textoEl.textContent = txt;

      // WhatsApp link
      var tel = el('cot_telefono') ? el('cot_telefono').value.trim() : '';
      var base = tel ? 'https://wa.me/' + tel + '?text=' : 'https://wa.me/?text=';
      if (whatsLinkEl) whatsLinkEl.href = base + encodeURIComponent(txt);
    }

    // ================================================================
    //  Copy button
    // ================================================================
    el('cot_copiar').addEventListener('click', function() {
      var txt = textoEl ? textoEl.textContent : '';
      copyText(txt, 'Mensaje copiado');
    });

    // ================================================================
    //  Tipo cliente change
    // ================================================================
    tipoClienteEl.addEventListener('change', function() {
      if (badgeCliente) badgeCliente.textContent = tipoClienteEl.value;
      save('cot.tipoCliente', tipoClienteEl.value);
      buildText();
    });

    // ================================================================
    //  BCV field: persistence + BeeRates integration
    // ================================================================
    function setBcvValue(val) {
      if (!bcvInput) return;
      bcvInput.value = val;
      save('cot.bcv', val);
      recalcTotal();
    }

    if (bcvInput) {
      bcvInput.addEventListener('input', function() {
        save('cot.bcv', bcvInput.value);
        recalcTotal();
      });
    }

    // Seed from BeeRates
    if (typeof BeeRates !== 'undefined') {
      var rate = BeeRates.getUsdBcv();
      if (isFinite(rate) && rate > 0) {
        setBcvValue(rate.toFixed(2));
        if (bcvStatus) bcvStatus.textContent = 'BCV cargado';
      } else {
        // Try cached value
        var cached = load('cot.bcv', '');
        if (cached && bcvInput) bcvInput.value = cached;
      }
      BeeRates.onUpdate(function(r) {
        if (isFinite(r.usdBcv) && r.usdBcv > 0) {
          setBcvValue(r.usdBcv.toFixed(2));
          if (bcvStatus) bcvStatus.textContent = 'Actualizado';
        }
      });
    }

    // Manual refresh button
    if (bcvBtn) {
      bcvBtn.addEventListener('click', function() {
        if (typeof BeeRates !== 'undefined') {
          bcvBtn.disabled = true;
          bcvBtn.textContent = 'Actualizando...';
          if (bcvStatus) bcvStatus.textContent = 'Buscando tasa...';
          BeeRates.fetchRates(true).then(function(r) {
            if (isFinite(r.usdBcv) && r.usdBcv > 0) {
              setBcvValue(r.usdBcv.toFixed(2));
              if (bcvStatus) bcvStatus.textContent = 'Actualizado';
            } else {
              if (bcvStatus) bcvStatus.textContent = 'No disponible';
            }
            bcvBtn.disabled = false;
            bcvBtn.textContent = 'Actualizar BCV';
          });
        }
      });
    }

    // ================================================================
    //  Cliente nombre persistence
    // ================================================================
    if (clienteNombreEl) {
      clienteNombreEl.addEventListener('input', function() {
        save('cot.clienteNombre', clienteNombreEl.value);
        buildText();
      });
    }

    // ================================================================
    //  Envio listeners & persistence
    // ================================================================
    (function() {
      if (!envioChk || !envioMonto) return;
      var savedOn = load('cot.envioOn', false);
      var savedMonto = load('cot.envioMonto', null);
      if (savedOn) { envioChk.checked = true; envioMonto.disabled = false; }
      if (savedMonto !== null) envioMonto.value = savedMonto;

      var sync = function() {
        envioMonto.disabled = !envioChk.checked;
        save('cot.envioOn', envioChk.checked);
        save('cot.envioMonto', envioMonto.value);
        recalcTotal();
      };
      envioChk.addEventListener('change', sync);
      envioMonto.addEventListener('input', sync);
    })();

    // ================================================================
    //  Delivery listeners & persistence
    // ================================================================
    (function() {
      if (!deliveryChk || !deliveryMonto) return;
      var savedOn = load('cot.deliveryOn', false);
      var savedMonto = load('cot.deliveryMonto', null);
      if (savedOn) { deliveryChk.checked = true; deliveryMonto.disabled = false; }
      if (savedMonto !== null) deliveryMonto.value = savedMonto;

      var sync = function() {
        deliveryMonto.disabled = !deliveryChk.checked;
        save('cot.deliveryOn', deliveryChk.checked);
        save('cot.deliveryMonto', deliveryMonto.value);
        recalcTotal();
      };
      deliveryChk.addEventListener('change', sync);
      deliveryMonto.addEventListener('input', sync);
    })();

    // ================================================================
    //  Admin panel — PIN auth
    // ================================================================
    var ADMIN_PIN = '2468';

    function setAdminUI(unlocked) {
      if (unlocked) {
        if (modCatalogo) modCatalogo.style.display = '';
        var w = el('cot_adminToggleCostoWrap'); if (w) w.style.display = '';
        if (btnAdmin) btnAdmin.textContent = 'Admin (ON)';
        save('cot.adminUnlocked', true);
      } else {
        if (modCatalogo) modCatalogo.style.display = 'none';
        var w2 = el('cot_adminToggleCostoWrap'); if (w2) w2.style.display = 'none';
        if (btnAdmin) btnAdmin.textContent = 'Admin';
        save('cot.adminUnlocked', false);
      }
    }

    setAdminUI(load('cot.adminUnlocked', false));

    if (btnAdmin) {
      btnAdmin.addEventListener('click', function() {
        var unlocked = load('cot.adminUnlocked', false);
        if (unlocked) {
          if (confirm('Cerrar modo Admin?')) setAdminUI(false);
          return;
        }
        var intento = prompt('Introduce el PIN de administrador:');
        if (intento === null) return;
        if (intento === ADMIN_PIN) {
          setAdminUI(true);
          showToast('Modo Admin habilitado');
        } else {
          showToast('PIN incorrecto');
        }
      });
    }

    // ================================================================
    //  Admin panel — CRUD
    // ================================================================
    function admin_buildItemSelect() {
      if (!admin_item) return;
      admin_item.innerHTML = '';
      Object.keys(CAT).forEach(function(k) {
        var o = document.createElement('option');
        o.textContent = k;
        admin_item.appendChild(o);
      });
    }

    function admin_loadTallas() {
      if (!admin_talla) return;
      admin_talla.innerHTML = '';
      var it = admin_item ? admin_item.value : '';
      if (!it || !CAT[it]) return;
      Object.keys(CAT[it]).forEach(function(t) {
        var o = document.createElement('option');
        o.textContent = t;
        admin_talla.appendChild(o);
      });
    }

    function admin_fillPrices() {
      var it = admin_item ? admin_item.value : '';
      var ta = admin_talla ? admin_talla.value : '';
      if (!it || !ta || !CAT[it] || !CAT[it][ta]) {
        if (admin_c) admin_c.value = '';
        if (admin_g) admin_g.value = '';
        if (admin_m) admin_m.value = '';
        if (admin_d) admin_d.value = '';
        return;
      }
      var row = CAT[it][ta];
      if (admin_c) admin_c.value = row.c != null ? row.c : '';
      if (admin_g) admin_g.value = row.g != null ? row.g : '';
      if (admin_m) admin_m.value = row.m != null ? row.m : '';
      if (admin_d) admin_d.value = row.d != null ? row.d : '';
    }

    if (admin_item) admin_item.addEventListener('change', function() { admin_loadTallas(); admin_fillPrices(); });
    if (admin_talla) admin_talla.addEventListener('change', admin_fillPrices);

    // Create item
    el('cot_admin_addItem').addEventListener('click', function() {
      var name = (admin_newItem.value || '').trim();
      if (!name) { showToast('Escribe un nombre para el nuevo item'); return; }
      if (CAT[name]) { showToast('Ya existe un item con ese nombre'); return; }
      CAT[name] = {};
      admin_newItem.value = '';
      admin_buildItemSelect();
      admin_item.value = name;
      admin_loadTallas();
      admin_fillPrices();
      buildItems('ALL');
      showToast('Item creado. Ahora agrega tallas y precios.');
    });

    // Save description
    el('cot_admin_saveTall').addEventListener('click', function() {
      var it = admin_item.value;
      var ta = admin_talla.value;
      if (!it) { showToast('Selecciona un item'); return; }
      if (!ta) {
        ta = prompt('Escribe la nueva descripcion (ej: "6 cm", "Adulto XL"):');
        if (!ta) return;
      }
      var c = parseFloat(admin_c.value || 0);
      var g = parseFloat(admin_g.value || 0);
      var m = parseFloat(admin_m.value || 0);
      var d = parseFloat(admin_d.value || 0);
      if (!CAT[it]) CAT[it] = {};
      CAT[it][ta] = { c: c || 0, g: g || undefined, m: m || 0, d: d || 0 };
      admin_loadTallas();
      admin_talla.value = ta;
      admin_fillPrices();
      buildItems('ALL');
      showToast('Descripcion guardada/actualizada');
    });

    // Delete description
    el('cot_admin_delTall').addEventListener('click', function() {
      var it = admin_item.value;
      var ta = admin_talla.value;
      if (!it || !ta) { showToast('Selecciona item y descripcion'); return; }
      if (!confirm('Eliminar la descripcion "' + ta + '" de "' + it + '"?')) return;
      delete CAT[it][ta];
      if (Object.keys(CAT[it]).length === 0) {
        if (confirm('Este item quedo vacio, eliminar tambien el item completo?')) {
          delete CAT[it];
        }
      }
      admin_buildItemSelect();
      admin_loadTallas();
      admin_fillPrices();
      buildItems('ALL');
      showToast('Eliminado');
    });

    // Save / Restore / Export catalog
    el('cot_btnGuardarCAT').addEventListener('click', saveCATToStorage);
    el('cot_btnRestaurarCAT').addEventListener('click', restoreCATOriginal);

    el('cot_btnExportCAT').addEventListener('click', function() {
      var blob = new Blob([JSON.stringify(CAT, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'catalogo.json';
      a.click();
    });

    // ================================================================
    //  Admin panel — Import from table
    // ================================================================
    el('cot_admin_runImport').addEventListener('click', function() {
      var prefEl = el('cot_admin_prefix');
      var importEl = el('cot_admin_import');
      var pref = (prefEl.value || '').trim();
      if (!pref) { showToast('Escribe un prefijo de item (familia)'); return; }
      var txt = (importEl.value || '').trim();
      if (!txt) { showToast('Pega la tabla (sin encabezados)'); return; }

      var toNum = function(s) {
        if (!s) return 0;
        s = String(s).replace(/[\$\s]/g, '').replace(/,/g, '.');
        var n = parseFloat(s);
        return isNaN(n) ? 0 : n;
      };

      var lines = txt.split(/\n+/);
      var creados = 0;
      lines.forEach(function(raw) {
        var cols = raw.split(/\t+|\s{2,}|\s\|\s/).map(function(c) { return c.trim(); }).filter(Boolean);
        if (cols.length < 5) return;
        var color = cols[0];
        var tamanio = cols[1];
        var g = toNum(cols[2]);
        var m = toNum(cols[3]);
        var d = toNum(cols[4]);
        var itemName = pref + ' - ' + color;
        if (!CAT[itemName]) CAT[itemName] = {};
        CAT[itemName][tamanio] = { c: 0, g: g || undefined, m: m || 0, d: d || 0 };
        creados++;
      });

      if (creados > 0) {
        buildItems('ALL');
        admin_buildItemSelect();
        admin_loadTallas();
        admin_fillPrices();
        showToast('Importacion completada: ' + creados + ' filas');
      } else {
        showToast('No se detectaron filas validas. Revisa el formato.');
      }
    });

    // ================================================================
    //  Restore persisted state
    // ================================================================
    // Cliente nombre
    var savedNombre = load('cot.clienteNombre', '');
    if (savedNombre && clienteNombreEl) clienteNombreEl.value = savedNombre;

    // Tipo cliente — force Detal as default
    var savedTipo = load('cot.tipoCliente', 'Detal');
    if (tipoClienteEl) tipoClienteEl.value = savedTipo || 'Detal';

    // BCV cached
    var savedBcv = load('cot.bcv', '');
    if (savedBcv && bcvInput && !bcvInput.value) bcvInput.value = savedBcv;

  } // end init
});
