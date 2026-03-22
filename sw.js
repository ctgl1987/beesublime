// BeeSublime — Service Worker v1
var CACHE_NAME = 'beesublime-v1';
var CORE_ASSETS = [
  './',
  './index.html',
  './app.js',
  './rates.js',
  './manifest.json',
  './modules/dashboard.js',
  './modules/divisas.js',
  './modules/vinil.js',
  './modules/sublimacion.js',
  './modules/esferas.js',
  './modules/dtf.js',
  './modules/papeleria.js',
  './modules/etiquetas.js',
  './modules/empaques.js',
  './modules/envios.js',
  './modules/personalizado.js',
  './modules/cotizador.js',
  './modules/catalogo.json',
  './modules/conversor.js',
  './modules/basica.js',
  './modules/resumen.js',
  './modules/instrucciones.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);

  // Network-only for API calls (rates)
  if (url.hostname !== location.hostname) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Network-first for navigation, cache-first for assets
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(function(r) {
        var clone = r.clone();
        caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
        return r;
      }).catch(function() {
        return caches.match(e.request).then(function(r) { return r || caches.match('./index.html'); });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(r) {
        return r || fetch(e.request).then(function(resp) {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
          return resp;
        });
      })
    );
  }
});
