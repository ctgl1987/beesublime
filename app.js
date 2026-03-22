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
  return el ? parseEU(el.value) : 0;
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

// ── Money Input Formatter (POS-style) ──
// Typing digits auto-places the comma: 1→0,01 | 100→1,00 | 1050→10,50
// Applied automatically to price/cost inputs based on ID heuristics.

var _MONEY_ID_YES = ['precio','costo','monto','tarifa','sueldo','_ud','ud_','base','bcv','extra','empaque','flete','seguro','delivery','envio_m','alquiler','internet','electricidad','celular','gas','agua','comision','otros_m'];
var _MONEY_ID_NO  = ['cant','qty','usos','uses','vida','hora','_mes','mes_','meses','unid','cols','km','merma','pct','porc','markup','margen','gg_pct','gi_pct','gp_pct','cantidad','setup','ejec','min_','ancho'];

function _isBeeMoneyInput(el) {
  if (!el || el.tagName !== 'INPUT') return false;
  if (el.dataset.noMoney !== undefined) return false;
  if (el.dataset.money !== undefined || el.classList.contains('bee-money')) return true;
  var id = (el.id || '').toLowerCase();
  for (var i = 0; i < _MONEY_ID_NO.length; i++)  { if (id.indexOf(_MONEY_ID_NO[i])  !== -1) return false; }
  for (var i = 0; i < _MONEY_ID_YES.length; i++) { if (id.indexOf(_MONEY_ID_YES[i]) !== -1) return true;  }
  // Fallback: check nearby label text
  var lbl = el.closest('div,td')  && el.closest('div,td').querySelector('label');
  if (lbl) {
    var lt = lbl.textContent.toLowerCase();
    if (lt.indexOf('($)') !== -1 || lt.indexOf('precio') !== -1 || lt.indexOf('costo') !== -1 ||
        lt.indexOf('monto') !== -1 || lt.indexOf('tarifa') !== -1 || lt.indexOf('sueldo') !== -1 ||
        lt.indexOf('dólar') !== -1 || lt.indexOf('bcv') !== -1) return true;
  }
  return false;
}

function _posFormat(cents) {
  if (isNaN(cents) || cents < 0) cents = 0;
  var s = String(Math.floor(cents)).padStart(3, '0');
  return s.slice(0, -2) + ',' + s.slice(-2);
}

function _attachMoneyFmt(el) {
  if (el._beeFmt) return;
  el._beeFmt = true;
  // Convert type=number → text so commas are allowed
  if (el.type === 'number') {
    var oldStep = el.step, oldMin = el.min, oldMax = el.max;
    el.type = 'text';
    el.inputMode = 'numeric';
    el.autocomplete = 'off';
    el.setAttribute('data-old-step', oldStep || '');
  }
  // Init from existing value
  var existing = parseEU(el.value || '0');
  el.dataset.beeCents = Math.round(existing * 100);
  if (el.value !== '') el.value = _posFormat(el.dataset.beeCents);

  el.addEventListener('keydown', function(e) {
    if (e.key >= '0' && e.key <= '9') {
      e.preventDefault();
      var c = parseInt(el.dataset.beeCents || '0', 10) * 10 + parseInt(e.key, 10);
      if (c > 999999999) return; // cap ~9.999.999,99
      el.dataset.beeCents = c;
      el.value = _posFormat(c);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      var c = Math.floor(parseInt(el.dataset.beeCents || '0', 10) / 10);
      el.dataset.beeCents = c;
      el.value = _posFormat(c);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    } else if (e.key === 'Delete' || e.key === 'Escape') {
      e.preventDefault();
      el.dataset.beeCents = 0;
      el.value = _posFormat(0);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
    // Allow Tab, arrows, etc. to pass through
  });

  el.addEventListener('paste', function(e) {
    e.preventDefault();
    var pasted = (e.clipboardData || window.clipboardData).getData('text');
    var num = parseEU(pasted.replace(/[^0-9,\.]/g, ''));
    if (!isNaN(num) && num >= 0) {
      var c = Math.round(num * 100);
      el.dataset.beeCents = c;
      el.value = _posFormat(c);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  el.addEventListener('focus', function() { el.select && el.select(); });
}

function _scanMoneyInputs(root) {
  var inputs = (root || document).querySelectorAll('input');
  inputs.forEach(function(el) { if (_isBeeMoneyInput(el)) _attachMoneyFmt(el); });
}

// Watch dynamic module renders
var _moneyObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(m) {
    m.addedNodes.forEach(function(node) {
      if (node.nodeType !== 1) return;
      _scanMoneyInputs(node);
      if (node.tagName === 'INPUT' && _isBeeMoneyInput(node)) _attachMoneyFmt(node);
    });
  });
});

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
  _moneyObserver.observe(document.body, { childList: true, subtree: true });

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

  // Start router only after login
  window.addEventListener('hashchange', handleRoute);

  // If already authenticated, start now
  if (window._beeAuthenticated) {
    _startRouter();
  }
  // Otherwise, login script will call _startRouter() after success
});

function _startRouter() {
  var startRoute = window.location.hash.replace('#', '') || load('lastRoute', 'dashboard');
  if (!window.location.hash) window.location.hash = startRoute;
  else handleRoute();
  // First-visit tip
  if (!load('seenFmtTip')) {
    setTimeout(function() {
      showToast('💡 Escribe los dígitos — la coma se pone sola', 4000);
      save('seenFmtTip', true);
    }, 1200);
  }
}
