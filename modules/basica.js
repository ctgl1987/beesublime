/* ══════════════════════════════════════════════
   BeeSublime — Calculadora Basica Module
   ══════════════════════════════════════════════ */

registerModule('basica', {
  html: [
    '<div class="grid">',
    '<div class="card md-4">',
    '<h3>Calculadora Basica</h3>',
    '<input id="calc-display" placeholder="0" readonly type="text"/>',
    '<div class="sep"></div>',
    '<div class="grid" style="grid-template-columns:repeat(4,1fr);gap:8px">',
    '<button class="btn neutral" data-k="7">7</button>',
    '<button class="btn neutral" data-k="8">8</button>',
    '<button class="btn neutral" data-k="9">9</button>',
    '<button class="btn ok" data-k="/">/</button>',
    '<button class="btn neutral" data-k="4">4</button>',
    '<button class="btn neutral" data-k="5">5</button>',
    '<button class="btn neutral" data-k="6">6</button>',
    '<button class="btn ok" data-k="*">&times;</button>',
    '<button class="btn neutral" data-k="1">1</button>',
    '<button class="btn neutral" data-k="2">2</button>',
    '<button class="btn neutral" data-k="3">3</button>',
    '<button class="btn ok" data-k="-">&minus;</button>',
    '<button class="btn neutral" data-k="0">0</button>',
    '<button class="btn neutral" data-k=".">.</button>',
    '<button class="btn reset" id="calc-clear">C</button>',
    '<button class="btn ok" data-k="+">+</button>',
    '<button class="btn ok" id="calc-eq">=</button>',
    '</div>',
    '<div class="muted" style="margin-top:8px">Usa el teclado: Enter, Backspace.</div>',
    '</div>',
    '<div class="card md-8">',
    '<h3>Notas</h3>',
    '<p class="muted">Calculadora integrada para operaciones rapidas mientras trabajas con las otras vistas.</p>',
    '</div>',
    '</div>'
  ].join('\n'),

  init: function(view) {
    var disp = view.querySelector('#calc-display');
    if (!disp) return;

    // Button clicks
    view.querySelectorAll('[data-k]').forEach(function(b) {
      b.addEventListener('click', function() {
        disp.value = (disp.value === '0' ? '' : disp.value) + b.dataset.k;
      });
    });

    // Clear
    var btnClear = view.querySelector('#calc-clear');
    if (btnClear) {
      btnClear.addEventListener('click', function() { disp.value = ''; });
    }

    // Equals
    var btnEq = view.querySelector('#calc-eq');
    if (btnEq) {
      btnEq.addEventListener('click', function() {
        try {
          var expr = disp.value.replace(/[^0-9+\-*/().]/g, '');
          var out = Function('"use strict"; return (' + expr + ')')();
          disp.value = String(out);
        } catch (e) {
          disp.value = 'Error';
        }
      });
    }

    // Keyboard support (scoped: only when this view is active)
    document.addEventListener('keydown', function(e) {
      if (!view.classList.contains('active') && view.style.display === 'none') return;
      if (/^[0-9()+\-*/.]$/.test(e.key)) {
        disp.value = (disp.value === '0' ? '' : disp.value) + e.key;
      } else if (e.key === 'Enter') {
        if (btnEq) btnEq.click();
      } else if (e.key === 'Backspace') {
        disp.value = disp.value.slice(0, -1);
      }
    });
  }
});
