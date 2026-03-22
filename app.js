/* ══════════════════════════════════════════════
   BeeSublime — App Core (Router, Theme, Utils)
   ══════════════════════════════════════════════ */

// ── DOM Helpers ──
const qs  = (s, r) => (r || document).querySelector(s);
const qsa = (s, r) => [...(r || document).querySelectorAll(s)];

function fmt(n, dec) {
  if (dec === undefined) dec = 2;
  if (n == null || isNaN(n)) return '—';
  return Number(n).toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
function fmtBs(n) { return 'Bs ' + fmt(n); }
function fmtUSD(n) { return '$ ' + fmt(n); }
function parseEU(s) {
  if (!s) return 0;
  return parseFloat(String(s).replace(/\./g, '').replace(',', '.')) || 0;
}
function numVal(sel, root) {
  var el = typeof sel === 'string' ? qs(sel, root) : sel;
  return el ? (parseFloat(el.value) || 0) : 0;
}
function showToast(msg, dur) {
  var t = qs('#appToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(function(){ t.classList.remove('show'); }, dur || 2000);
}
function copyText(text, msg) {
  navigator.clipboard.writeText(text).then(function(){ showToast(msg || 'Copiado'); }).catch(function(){});
}

// ── Storage (namespaced) ──
var STORE_PREFIX = 'bee.';
function save(key, data) {
  try { localStorage.setItem(STORE_PREFIX + key, JSON.stringify(data)); } catch(e) {}
}
function load(key, fallback) {
  try {
    var raw = localStorage.getItem(STORE_PREFIX + key);
    return raw ? JSON.parse(raw) : (fallback !== undefined ? fallback : null);
  } catch(e) { return fallback !== undefined ? fallback : null; }
}
function removeKey(key) { localStorage.removeItem(STORE_PREFIX + key); }

// ── Theme ──
function initTheme() {
  if (load('darkMode', false)) document.body.classList.add('dark');
  updateThemeIcon();
}
function toggleTheme() {
  document.body.classList.toggle('dark');
  save('darkMode', document.body.classList.contains('dark'));
  updateThemeIcon();
}
function updateThemeIcon() {
  var btn = qs('#themeToggle');
  if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// ── Drawer ──
function openDrawer() {
  qs('#drawer').classList.add('open');
  qs('#overlay').classList.add('open');
}
function closeDrawer() {
  qs('#drawer').classList.remove('open');
  qs('#overlay').classList.remove('open');
}

// ── Router ──
var _modules = {};
var _currentRoute = '';

function registerModule(name, mod) {
  _modules[name] = mod;
}

function navigate(route) {
  window.location.hash = route;
}

function handleRoute() {
  var hash = window.location.hash.replace('#', '') || 'dashboard';
  var mod = _modules[hash];
  if (!mod) { hash = 'dashboard'; mod = _modules[hash]; }
  if (!mod) return;

  _currentRoute = hash;
  var main = qs('#mainContent');

  // Deactivate current
  var cur = qs('.module-view.active', main);
  if (cur) cur.classList.remove('active');

  // Find or create view container
  var viewId = 'view-' + hash;
  var view = qs('#' + viewId, main);
  if (!view) {
    view = document.createElement('section');
    view.id = viewId;
    view.className = 'module-view';
    // Add back button for all modules except dashboard
    var backBtn = '';
    if (hash !== 'dashboard') {
      backBtn = '<div class="module-topbar"><button class="back-btn" onclick="navigate(\'dashboard\')" title="Volver al Dashboard">&times;</button></div>';
    }
    view.innerHTML = backBtn + (mod.html || '');
    main.appendChild(view);
    // Init once
    if (mod.init) mod.init(view);
  }
  view.classList.add('active');

  // Update drawer
  qsa('.menu .item').forEach(function(el) {
    el.dataset.active = el.dataset.route === hash ? 'true' : 'false';
  });

  // Save last route
  save('lastRoute', hash);
  window.scrollTo(0, 0);
}

// ── Header scroll compact ──
function initHeaderScroll() {
  var header = qs('#appHeader');
  var last = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (y > 60) header.classList.add('compact');
    else header.classList.remove('compact');
    last = y;
  }, { passive: true });
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initHeaderScroll();

  // Drawer events
  qs('#btnMenu').addEventListener('click', openDrawer);
  qs('#overlay').addEventListener('click', closeDrawer);
  qs('#themeToggle').addEventListener('click', toggleTheme);

  // Rate badge → navigate to divisas
  qs('#rateBadge').addEventListener('click', function() { navigate('divisas'); });

  // Menu item clicks
  qsa('.menu .item').forEach(function(el) {
    el.addEventListener('click', function() {
      navigate(el.dataset.route);
      closeDrawer();
    });
  });

  // Start router
  window.addEventListener('hashchange', handleRoute);

  // Navigate to last route or dashboard
  var startRoute = window.location.hash.replace('#', '') || load('lastRoute', 'dashboard');
  if (!window.location.hash) window.location.hash = startRoute;
  else handleRoute();
});
