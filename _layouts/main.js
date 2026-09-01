/* ==========================================================================
   Bank Statement Parser — Enterprise Client Interaction Engine
   ========================================================================== */

'use strict';

(function () {
  /* 1. Theme Switcher Engine */
  var storedTheme = 'system';
  try {
    storedTheme = localStorage.getItem('theme-mode') || 'system';
  } catch (e) {}

  function applyTheme(mode) {
    var effectiveTheme = mode;
    if (mode === 'system') {
      var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = isDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme-mode', mode);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    try {
      localStorage.setItem('theme-mode', mode);
    } catch (e) {}

    var buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-theme-mode') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  applyTheme(storedTheme);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      var cur = 'system';
      try {
        cur = localStorage.getItem('theme-mode') || 'system';
      } catch (e) {}
      if (cur === 'system') {
        applyTheme('system');
      }
    });
  }

  /* 2. Main Application Initializer */
  function initApp() {
    applyTheme(storedTheme);

    var themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var mode = btn.getAttribute('data-theme-mode');
        if (mode) applyTheme(mode);
      });
    });

    /* Mobile Navbar Toggle */
    var navToggle = document.getElementById('navbarToggle');
    var navMenu = document.getElementById('navbarMenu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('open');
      });
    }

    /* Apple FAQ Accordion Controller */
    var expandBtn = document.getElementById('faqExpandAllBtn');
    var faqItems = document.querySelectorAll('.apple-faq-item');
    if (expandBtn && faqItems.length > 0) {
      var isAllExpanded = false;

      function updateBtnState() {
        var allOpen = true;
        faqItems.forEach(function (item) {
          if (!item.hasAttribute('open')) allOpen = false;
        });
        isAllExpanded = allOpen;
        expandBtn.setAttribute('aria-expanded', String(isAllExpanded));
        var label = expandBtn.querySelector('.apple-faq-btn-text');
        var chevron = expandBtn.querySelector('.apple-faq-expand-chevron');
        if (label) label.textContent = isAllExpanded ? 'Collapse all' : 'Expand all';
        if (chevron) chevron.style.transform = isAllExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }

      expandBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var newState = !isAllExpanded;
        faqItems.forEach(function (item) {
          if (newState) {
            item.setAttribute('open', '');
          } else {
            item.removeAttribute('open');
          }
        });
        updateBtnState();
      });

      faqItems.forEach(function (item) {
        item.addEventListener('toggle', updateBtnState);
      });
    }

    /* Search Modal Engine */
    var searchIndex = null;
    var isFetching = false;
    var modal = document.getElementById('searchModal');
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var closeBtn = document.getElementById('searchClose');

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    async function loadSearch() {
      if (searchIndex || isFetching) return;
      isFetching = true;
      try {
        var res = await fetch('/search-index.json');
        if (res.ok) {
          var data = await res.json();
          searchIndex = Array.isArray(data) ? data : (data.entries || []);
        } else {
          searchIndex = [];
        }
      } catch (e) {
        searchIndex = [];
      } finally {
        isFetching = false;
      }
    }

    function openSearch() {
      if (!modal) return;
      modal.classList.add('active');
      loadSearch();
      setTimeout(function () {
        if (input) {
          input.focus();
          if (input.value.trim()) {
            input.dispatchEvent(new Event('input'));
          }
        }
      }, 50);
    }

    function closeSearch() {
      if (!modal) return;
      modal.classList.remove('active');
      if (input) input.value = '';
      if (results) results.innerHTML = '<div class="search-empty">Type to search...</div>';
    }

    var triggers = document.querySelectorAll('#searchTrigger, #searchTriggerMobile, .search-trigger');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openSearch();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    if (modal) {
      var backdrop = modal.querySelector('.search-backdrop');
      if (backdrop) backdrop.addEventListener('click', closeSearch);
    }

    window.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeSearch();
      }
    });

    if (input) {
      input.addEventListener('input', function () {
        var query = input.value.trim().toLowerCase();
        if (!query) {
          results.innerHTML = '<div class="search-empty">Type to search...</div>';
          return;
        }
        if (!searchIndex) {
          results.innerHTML = '<div class="search-empty">Loading search index...</div>';
          loadSearch().then(function () {
            input.dispatchEvent(new Event('input'));
          });
          return;
        }
        if (searchIndex.length === 0) {
          results.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
          return;
        }

        var tokens = query.split(/\s+/).filter(Boolean);
        var matches = searchIndex.filter(function (item) {
          var t = (item.title || '').toLowerCase();
          var d = (item.description || '').toLowerCase();
          var c = (item.content || '').toLowerCase();
          var u = (item.url || '').toLowerCase();
          var target = t + ' ' + d + ' ' + c + ' ' + u;
          return tokens.every(function (tok) {
            return target.includes(tok);
          });
        }).slice(0, 10);

        if (matches.length === 0) {
          results.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
          return;
        }

        results.innerHTML = matches.map(function (item) {
          return '<a class="search-item" href="' + item.url + '">' +
            '<div class="search-item-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="search-item-desc">' + escapeHtml((item.description || item.content || '').replace(/<[^>]+>/g, '').slice(0, 140)) + '...</div>' +
            '</a>';
        }).join('');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
