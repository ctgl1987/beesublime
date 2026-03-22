/* ══════════════════════════════════════════════
   BeeSublime — Unified BCV Rate Service
   ══════════════════════════════════════════════ */

var BeeRates = (function() {
  var ONE_HOUR = 60 * 60 * 1000;
  var _rates = { usdBcv: NaN, eurBcv: NaN, paralelo: NaN, lastUpdated: 0, source: '' };
  var _listeners = [];
  var _hourlyStarted = false;

  function getRates() { return Object.assign({}, _rates); }
  function getUsdBcv() { return _rates.usdBcv; }
  function getEurBcv() { return _rates.eurBcv; }
  function getParalelo() { return _rates.paralelo; }

  function onUpdate(fn) { _listeners.push(fn); }
  function _emit() {
    var r = getRates();
    _listeners.forEach(function(fn) { try { fn(r); } catch(e) {} });
    // Update header badge
    var badge = document.getElementById('rateBadge');
    if (badge && isFinite(r.usdBcv)) {
      badge.textContent = '$ ' + r.usdBcv.toFixed(2) + ' BCV';
    }
  }

  function loadCached() {
    var cached = load('rates');
    if (cached) {
      _rates = Object.assign(_rates, cached);
      _emit();
    }
  }

  function fetchRates(force) {
    // Start hourly auto-refresh
    if (!_hourlyStarted) {
      _hourlyStarted = true;
      setTimeout(function tick() {
        fetchRates(false);
        setTimeout(tick, ONE_HOUR);
      }, ONE_HOUR);
    }

    // Throttle
    var now = Date.now();
    if (!force && _rates.lastUpdated && (now - _rates.lastUpdated) < ONE_HOUR) {
      _emit();
      return Promise.resolve(_rates);
    }

    var usdBcv = NaN, eurBcv = NaN, parRate = NaN, source = '';

    // 1) USD BCV + EUR BCV — Primary: DolarVZLA
    return fetch('https://corsproxy.io/?https://api.dolarvzla.com/public/exchange-rate')
      .then(function(r) { return r.json(); })
      .then(function(j) {
        var u = parseFloat(j && j.current && j.current.usd);
        var e = parseFloat(j && j.current && j.current.eur);
        if (isFinite(u) && u > 0) { usdBcv = u; source = 'DolarVZLA'; }
        if (isFinite(e) && e > 0) eurBcv = e;
      })
      .catch(function() {})
      // Fallback USD: DolarAPI
      .then(function() {
        if (isFinite(usdBcv)) return;
        return fetch('https://corsproxy.io/?https://ve.dolarapi.com/v1/dolares/oficial')
          .then(function(r) { return r.json(); })
          .then(function(j) {
            var v = parseFloat(j && j.promedio);
            if (isFinite(v)) { usdBcv = v; source = 'DolarAPI'; }
          }).catch(function() {});
      })
      // EUR cross rate if needed
      .then(function() {
        if (isFinite(eurBcv) || !isFinite(usdBcv)) return;
        return fetch('https://corsproxy.io/?https://open.er-api.com/v6/latest/EUR')
          .then(function(r) { return r.json(); })
          .then(function(j) {
            var eurUsd = parseFloat(j && j.rates && j.rates.USD);
            if (isFinite(eurUsd) && eurUsd > 0) eurBcv = usdBcv * eurUsd;
          })
          .catch(function() {
            return fetch('https://corsproxy.io/?https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
              .then(function(r) { return r.json(); })
              .then(function(j) {
                var eurUsd = parseFloat(j && j.eur && j.eur.usd);
                if (isFinite(eurUsd) && eurUsd > 0) eurBcv = usdBcv * eurUsd;
              }).catch(function() {});
          });
      })
      // 2) Paralelo — Binance P2P via CriptoYa
      .then(function() {
        return fetch('https://corsproxy.io/?https://criptoya.com/api/USDT/VES/1')
          .then(function(r) { return r.json(); })
          .then(function(j) {
            var b = j && j.binancep2p;
            var ask = parseFloat((b && (b.totalAsk || b.ask)) || NaN);
            if (isFinite(ask) && ask > 0) parRate = ask;
          }).catch(function() {});
      })
      // Fallback paralelo
      .then(function() {
        if (isFinite(parRate)) return;
        return fetch('https://corsproxy.io/?https://ve.dolarapi.com/v1/dolares/paralelo')
          .then(function(r) { return r.json(); })
          .then(function(j) {
            var c = parseFloat(j && j.compra);
            if (isFinite(c) && c > 0) parRate = c;
          }).catch(function() {});
      })
      // Save & emit
      .then(function() {
        if (isFinite(usdBcv) || isFinite(parRate)) {
          _rates = { usdBcv: usdBcv, eurBcv: eurBcv, paralelo: parRate, lastUpdated: Date.now(), source: source };
          save('rates', _rates);
          _emit();
        }
        return _rates;
      });
  }

  return {
    getRates: getRates,
    getUsdBcv: getUsdBcv,
    getEurBcv: getEurBcv,
    getParalelo: getParalelo,
    onUpdate: onUpdate,
    loadCached: loadCached,
    fetchRates: fetchRates
  };
})();

// Boot rates on load
document.addEventListener('DOMContentLoaded', function() {
  BeeRates.loadCached();
  BeeRates.fetchRates(false);
});
