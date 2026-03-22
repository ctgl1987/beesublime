/* ══════════════════════════════════════════════
   BeeSublime — Dashboard Module
   ══════════════════════════════════════════════ */
registerModule('dashboard', {
  html: [
    '<div class="grid">',
    '<div class="card md-12" style="text-align:center;padding:32px 16px">',
    '  <h2 style="font-size:28px;margin:0 0 4px">BeeSublime</h2>',
    '  <div class="muted" style="font-size:14px">Suite de herramientas para tu negocio</div>',
    '</div>',

    '<!-- Tasa actual -->',
    '<div class="card md-4" id="dash-rate-card" style="cursor:pointer" onclick="navigate(\'divisas\')">',
    '  <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.1em">Dólar BCV</div>',
    '  <div style="font-size:28px;font-weight:800;margin:6px 0" id="dash-usd-bcv">--,--</div>',
    '  <div class="muted" id="dash-rate-time">Sin datos</div>',
    '</div>',
    '<div class="card md-4" id="dash-eur-card" style="cursor:pointer" onclick="navigate(\'divisas\')">',
    '  <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.1em">Euro BCV</div>',
    '  <div style="font-size:28px;font-weight:800;margin:6px 0" id="dash-eur-bcv">--,--</div>',
    '  <div class="muted">Tasa oficial</div>',
    '</div>',
    '<div class="card md-4" style="cursor:pointer" onclick="navigate(\'divisas\')">',
    '  <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.1em">Dólar Paralelo</div>',
    '  <div style="font-size:28px;font-weight:800;margin:6px 0" id="dash-paralelo">--,--</div>',
    '  <div class="muted">Binance P2P</div>',
    '</div>',

    '<!-- Accesos directos -->',
    '<div class="card md-12"><h3>Accesos rápidos</h3>',
    '<div class="row" style="gap:10px;flex-wrap:wrap">',
    '  <button class="btn accent" onclick="navigate(\'vinil\')">🎨 Vinil</button>',
    '  <button class="btn accent" onclick="navigate(\'sublimacion\')">☕ Sublimación</button>',
    '  <button class="btn accent" onclick="navigate(\'etiquetas\')">🏷️ Etiquetas</button>',
    '  <button class="btn accent" onclick="navigate(\'cotizador\')">📋 Cotizador</button>',
    '  <button class="btn accent" onclick="navigate(\'divisas\')">💱 Divisas</button>',
    '  <button class="btn accent" onclick="navigate(\'dtf\')">👕 DTF</button>',
    '  <button class="btn accent" onclick="navigate(\'resumen\')">📊 Resumen</button>',
    '</div>',
    '</div>',

    '</div>'
  ].join('\n'),

  init: function(view) {
    function updateDash(r) {
      var usd = view.querySelector('#dash-usd-bcv');
      var eur = view.querySelector('#dash-eur-bcv');
      var par = view.querySelector('#dash-paralelo');
      var time = view.querySelector('#dash-rate-time');
      if (usd && isFinite(r.usdBcv)) usd.textContent = 'Bs ' + r.usdBcv.toFixed(2);
      if (eur && isFinite(r.eurBcv)) eur.textContent = 'Bs ' + r.eurBcv.toFixed(2);
      if (par && isFinite(r.paralelo)) par.textContent = 'Bs ' + r.paralelo.toFixed(2);
      if (time && r.lastUpdated) {
        var d = new Date(r.lastUpdated);
        time.textContent = 'Actualizado: ' + d.toLocaleString('es-VE');
      }
    }
    BeeRates.onUpdate(updateDash);
    updateDash(BeeRates.getRates());
  }
});
