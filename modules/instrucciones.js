/* ══════════════════════════════════════════════
   BeeSublime — Instrucciones Module
   ══════════════════════════════════════════════ */
registerModule('instrucciones', {
  html: [
    '<div class="grid">',
    '<div class="card md-12">',
    '<h3 style="margin:0 0 6px">Instrucciones / Configuración — Guía rápida para toda la Suite</h3>',

    '<div class="sep"></div>',
    '<h4>¿Qué es BeeSublime?</h4>',
    '<p>Es un conjunto de calculadoras para estimar costos y precios de venta por tipo de trabajo',
    '  (Vinil, Sublimación, DTF, Papelería, Etiquetas, Empaques y Envíos). Puedes usar un solo módulo',
    '  o varios a la vez y luego ver el total combinado en <b>Resumen General</b>. Todos los importes',
    '  se ingresan en <b>formato europeo</b> (coma decimal), por ejemplo: <code>20,00</code>.</p>',

    '<div class="sep"></div>',
    '<h4>Actualizaciones</h4>',
    '<p style="margin:6px 0 0">Si tienes la Suite instalada como app (PWA), puedes buscar y aplicar actualizaciones desde aquí.</p>',
    '<div class="row pwa-actions" style="margin-top:10px;gap:8px;align-items:center;flex-wrap:wrap">',
    '  <button class="btn neutral" id="btn_pwa_check_updates" type="button">Buscar actualizaciones</button>',
    '  <button class="btn ok" id="btn_pwa_apply_update" type="button" style="display:none">Actualizar ahora</button>',
    '  <button class="btn" id="btn_restore_factory_defaults" type="button">Restablecer valores predeterminados</button>',
    '  <span class="muted" id="pwa_update_status" style="margin-left:6px">—</span>',
    '</div>',
    '<p class="muted" style="margin:8px 0 0">Este botón restablece los valores visibles de la Suite a sus predeterminados, pero no borra la data local ni el catálogo guardado.</p>',

    '<div class="sep"></div>',
    '<h4>Cómo funciona en general</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li>En cada módulo verás <b>filas con checkbox</b>. Al activarlas, esa fila entra en el cálculo.</li>',
    '  <li>Cada fila activa calcula <b>Costo Ud.</b> = Precio ÷ Cantidad (ayuda a prorratear packs).</li>',
    '  <li>Usa <b>Reset</b> del módulo para volver a los valores iniciales (apaga todas las casillas).</li>',
    '  <li>El <b>Modo ganancia</b> permite elegir entre <b>Markup</b> o <b>Margen</b> (explicación abajo).</li>',
    '  <li>Si necesitas, activa <b>Mano de obra</b> y/o <b>Costos indirectos</b> (más abajo se explica).</li>',
    '  <li>En varios módulos verás el card <b>Cantidad de productos</b>: ajusta los precios cuando produces más de 1 unidad.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Formato de números (muy importante)</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li>Siempre usa <b>coma decimal</b>: escribe <code>10,50</code> en lugar de <code>10.50</code>.</li>',
    '  <li>No uses separadores de miles: en vez de <code>1.500,00</code> coloca <code>1500,00</code>.</li>',
    '  <li>Si colocas punto en vez de coma, el sistema puede interpretar mal el valor o dejarlo en 0.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Explicación por módulo</h4>',

    '<h5>1) Vinil</h5>',
    '<p>Calcula el costo para trabajos en vinil. Define el ancho efectivo (merma/bordes), agrega colores,',
    '  y usa <b>Costos directos</b> (por ejemplo camisetas), <b>Depreciación de equipos</b> (plancha, plotter, PC, etc.).',
    '  Luego aplica Ganancia/Impuestos y, si deseas, <b>Mano de obra</b>. El bloque "Resumen de Vinil" te muestra',
    '  directos, depreciación, adicionales y el total del módulo. El card de <b>Cantidad de productos</b> te permite ver',
    '  cuánto cambia el precio cuando haces varias piezas.</p>',

    '<h5>2) Sublimación</h5>',
    '<p>Pensado para tazas, termos, camisetas y otros productos de sublimación. Activa los insumos que uses',
    '  (papel, tinta, cinta, empaque, funda retráctil, etc.) y la <b>Depreciación</b> (impresora, plancha, PC, prensa, resistencias, horno).',
    '  Al final aplica Ganancia/Impuestos y, si corresponde, <b>Mano de obra</b>.</p>',

    '<h5>3) Esferas navideñas</h5>',
    '<p>Diseñado para calcular el costo de tus esferas navideñas personalizadas. Activa los insumos que uses',
    '  (esfera, relleno, lazos, vinil o impresión, empaque, etc.), suma si corresponde <b>Depreciación</b> y <b>Mano de obra</b>,',
    '  y usa el card de <b>Cantidad de productos</b> para ver cómo cambia el costo por unidad cuando haces tandas para la temporada.</p>',

    '<h5>4) DTF (terceros)</h5>',
    '<p>Para cuando compras DTF a terceros: registra las cantidades/precios y deja que el módulo calcule el costo por unidad.',
    '  Puedes sumar <b>Costos indirectos</b> (si aplica) y luego <b>Ganancia/Impuestos</b>.</p>',

    '<h5>5) Papelería</h5>',
    '<p>Enfocado en cajitas, toppers, tarjetas, shakers, etc. Incluye <b>Sustrato A/B</b> y <b>Adhesivo A/B</b>,',
    '  además de <b>Extras</b> (shaker/acetato/lentejuelas) y <b>Empaque</b>. En <b>Depreciación</b> contempla plotter, impresora, guillotina, laminadora, PC',
    '  y por vida útil cuchilla/tapete. Puedes añadir <b>Costos indirectos</b> y <b>Mano de obra</b>.</p>',

    '<h5>6) Etiquetas</h5>',
    '<p>Para etiquetas adhesivas (vinil imprimible, PVC, BOPP, holográfico, transparente, kraft, etc.). Activa insumos (tinta, laminado en frío, etc.),',
    '  configura <b>Depreciación</b> (cuchilla/plotter/impresora) y usa <b>Costos indirectos</b> y <b>Mano de obra</b> si te aplican.</p>',

    '<h5>7) Empaques</h5>',
    '<p>Para costos de cajas, bolsas, rellenos u otros materiales de empaque. Activa lo que uses, prorratea cantidades,',
    '  añade <b>Costos indirectos</b> y luego Ganancia/Impuestos.</p>',

    '<h5>8) Envíos</h5>',
    '<p>Registra costos de envío (tarifas, extras, seguro, otros) y prorratéalo si es por lote. Este módulo no calcula impresión,',
    '  solo logística. El resultado puede sumarse en el <b>Resumen General</b> junto a otros módulos.</p>',

    '<h5>9) Resumen General</h5>',
    '<p>Refleja el total de cada módulo. Puedes <b>incluir/omitir</b> módulos con sus toggles.',
    '  El <b>Total General</b> suma solo los activados. Ideal para cotizaciones con múltiples técnicas.</p>',

    '<h5>10) Producto personalizable</h5>',
    '<p>Úsalo para cotizar cualquier producto/servicio que no encaje al 100% en los otros módulos (combos, packs, pedidos especiales, etc.).</p>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li><b>Ficha</b>: nombre, versión y notas.</li>',
    '  <li><b>Estructura</b>: arma el costo con <b>Costos directos</b>, <b>Depreciación</b>, <b>Indirectos</b>, <b>Mano de obra</b> y <b>Ganancia/Impuestos</b>.</li>',
    '  <li><b>Material por área (cm²)</b>: activa el checkbox. Usa <b>Configurar</b> para desplegar. Elige modo (<b>Precio por cm²</b> o <b>Precio por rollo</b>).</li>',
    '  <li><b>Guardar / Cargar</b>: conserva tus productos para reutilizarlos.</li>',
    '  <li><b>Exportar / Importar</b>: respalda listas en JSON o CSV.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4 style="color:#312664">📦 ¿Qué es la Depreciación? (explicación simple)</h4>',
    '<p style="margin:6px 0 8px">Cuando compras una plancha, una impresora o un plotter, no los usas solo para <em>un</em> producto — los usas en cientos o miles de trabajos.',
    '  La depreciación es la forma de <b>repartir ese costo entre todos los productos que ese equipo te va a ayudar a hacer</b>.</p>',
    '<p style="background:#eee8f7;border-radius:10px;padding:10px 14px;margin:8px 0"><b>Ejemplo real:</b> Compras una plancha por <b>$150</b>.',
    '  Calculas que te durará unos <b>36 meses</b>. Eso es $150 ÷ 36 = <b>$4,17 por mes</b>.',
    '  Si en un mes haces <b>50 trabajos</b>, el costo de la plancha por trabajo es $4,17 ÷ 50 = <b>$0,08</b> por unidad.',
    '  Eso es exactamente lo que la app calcula sola cuando llenas esos campos.</p>',
    '<p style="margin:0 0 6px">Hay <b>dos modos</b>:</p>',
    '<ul style="margin:0 0 0 18px">',
    '  <li><b>Por mes (impresora, plancha, PC…)</b>: colocas el precio del equipo y cuántos meses crees que te dura. La app calcula cuánto cuesta ese equipo por unidad producida.</li>',
    '  <li><b>Por vida útil (cuchilla, tapete…)</b>: colocas el precio y la cantidad de usos que aguanta (ej: 200 cortes). La app calcula el costo por uso.</li>',
    '</ul>',
    '<p class="muted" style="margin:8px 0 0">💡 Si no quieres incluir depreciación, simplemente <b>deja el checkbox desactivado</b>. No es obligatorio.</p>',

    '<div class="sep"></div>',
    '<h4 style="color:#312664">💰 Costos directos, indirectos y mano de obra</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li><b>Costos directos</b>: lo que compras específicamente para ese producto (taza, papel, tinta, vinil, etc.). Si activas el checkbox, entra en el cálculo.</li>',
    '  <li><b>Costos indirectos</b>: gastos mensuales que no son de un producto específico (alquiler, internet, luz, etc.). Los repartes entre cuántas unidades produces al mes. Ej: si pagas $30 de luz y produces 100 piezas/mes → $0,30 por pieza.</li>',
    '  <li><b>Mano de obra</b>: el valor de tu tiempo. Colocas tu sueldo mensual objetivo y cuántas horas trabajas al mes — la app calcula cuánto cobrar por el tiempo que te toma hacer cada pieza (preparación + ejecución).</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4 style="color:#312664">📈 Ganancia: Markup vs Margen</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li><b>Markup</b>: sumas un % sobre el costo. Ej: costo $10, markup 50% → vendes a $15. Fácil de calcular, pero el 50% no es tu ganancia real sobre la venta.</li>',
    '  <li><b>Margen</b>: garantiza que del precio final, ese % sea tu ganancia real. Ej: costo $10, margen 50% → vendes a $20. La mitad del precio de venta es ganancia.</li>',
    '  <li style="margin-top:6px">Con el <b>mismo número</b>, el Margen siempre da un precio más alto. La mayoría de negocios usa Margen para precios de venta reales.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Ejemplo rápido: Markup vs Margen</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li>Si tu costo es <b>10,00</b> y quieres <b>50% de Markup</b> → Precio = 10,00 × (1 + 0,50) = <b>15,00</b>.</li>',
    '  <li>Si tu costo es <b>10,00</b> y quieres <b>50% de Margen</b> → Precio = 10,00 ÷ (1 − 0,50) = <b>20,00</b>.</li>',
    '  <li>Conclusión: con el mismo porcentaje, el <b>Margen</b> siempre da un precio más alto que el <b>Markup</b>.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Cantidad de productos (cómo leer ese card)</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li>Te permite ver el precio por unidad y por lote cuando produces varias piezas.</li>',
    '  <li>Si colocas, por ejemplo, 1 / 10 / 50 unidades, verás cómo mejora el costo unitario al subir la cantidad.</li>',
    '  <li>Úsalo para decidir descuentos por volumen sin perder tu margen real.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Preguntas frecuentes</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li><b>1. ¿Qué sueldo coloco si trabajo yo solo?</b><br/>Puedes tomar un sueldo "objetivo" (lo que quieres ganar al mes) y usarlo en Mano de obra como referencia.</li>',
    '  <li><b>2. ¿Qué hago si el precio me sale muy alto?</b><br/>Revisa si activaste insumos que no usas, si la cantidad es muy baja o si estás usando Margen con un porcentaje muy alto.</li>',
    '  <li><b>3. ¿Qué uso: Markup o Margen?</b><br/>Markup es más sencillo de entender; Margen es más preciso para asegurar el porcentaje de ganancia real. Puedes probar ambos.</li>',
    '  <li><b>4. ¿Debo activar siempre los impuestos?</b><br/>Actívalos solo si realmente facturas con impuestos y quieres que el precio final ya los incluya.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<h4>Consejos finales</h4>',
    '<ul style="margin:6px 0 0 18px">',
    '  <li>Activa solo lo que uses (evita inflar costos).</li>',
    '  <li>Guarda precios reales para obtener <b>Costo Ud.</b> precisos.</li>',
    '  <li>Usa <b>Imprimir</b> o <b>Copiar</b> para compartir cotizaciones.</li>',
    '  <li>Para tandas/lotes, usa <b>Resumen General</b> y combina módulos según el proyecto.</li>',
    '  <li>Revisa de vez en cuando tus costos (insumos, sueldos, alquiler, etc.) para mantener tus precios actualizados.</li>',
    '</ul>',

    '<div class="sep"></div>',
    '<div class="center-actions">',
    '  <button class="copy-btn" id="btn_instr_top" type="button">Volver arriba</button>',
    '  <button class="copy-btn" id="btn_instr_print" type="button">Exportar a PDF / Imprimir</button>',
    '</div>',

    '</div>',
    '</div>'
  ].join('\n'),

  init: function(view) {
    var $ = function(id) { return view.querySelector('#' + id) || document.getElementById(id); };

    // Scroll to top
    var topBtn = $('btn_instr_top');
    if (topBtn) topBtn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Print
    var printBtn = $('btn_instr_print');
    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });

    // PWA update check
    var checkBtn = $('btn_pwa_check_updates');
    var applyBtn = $('btn_pwa_apply_update');
    var status   = $('pwa_update_status');
    var waitingWorker = null;

    if (checkBtn) checkBtn.addEventListener('click', function() {
      if (status) status.textContent = 'Buscando...';
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          if (reg) {
            reg.update().then(function() {
              if (reg.waiting) {
                waitingWorker = reg.waiting;
                if (status) status.textContent = 'Actualización disponible.';
                if (applyBtn) applyBtn.style.display = 'inline-flex';
              } else {
                if (status) status.textContent = 'Ya tienes la última versión.';
              }
            }).catch(function() {
              if (status) status.textContent = 'Error al buscar.';
            });
          } else {
            if (status) status.textContent = 'No hay Service Worker registrado.';
          }
        });
      } else {
        if (status) status.textContent = 'PWA no disponible.';
      }
    });

    if (applyBtn) applyBtn.addEventListener('click', function() {
      if (waitingWorker) {
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
        if (status) status.textContent = 'Actualizando...';
        setTimeout(function() { location.reload(); }, 500);
      }
    });

    // Factory defaults
    var restoreBtn = $('btn_restore_factory_defaults');
    if (restoreBtn) restoreBtn.addEventListener('click', function() {
      if (!confirm('¿Restablecer todos los valores visibles a sus predeterminados? (No borra datos guardados ni catálogo)')) return;
      // Trigger resets on all known modules
      ['vin_reset','sub_reset','eti_reset','emp_reset','dtf_reset','pap_reset','esf_reset','pers_reset','env_update']
        .forEach(function(fn) {
          if (typeof window[fn] === 'function') {
            try { window[fn](); } catch(e) {}
          }
        });
      showToast('Valores restablecidos.');
    });
  }
});
