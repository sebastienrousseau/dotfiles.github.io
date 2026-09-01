'use strict';

// 1. Theme Engine
(function() {
  var storedTheme = localStorage.getItem('theme-mode') || 'system';

  function applyTheme(mode) {
    var effectiveTheme = mode;
    if (mode === 'system') {
      var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = isDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme-mode', mode);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    localStorage.setItem('theme-mode', mode);

    var buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(function(btn) {
      if (btn.getAttribute('data-theme-mode') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Apply immediately
  applyTheme(storedTheme);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
      if ((localStorage.getItem('theme-mode') || 'system') === 'system') {
        applyTheme('system');
      }
    });
  }

  function initApp() {
    applyTheme(localStorage.getItem('theme-mode') || 'system');

    // Attach theme toggle buttons
    var themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var mode = btn.getAttribute('data-theme-mode');
        if (mode) applyTheme(mode);
      });
    });

    // Mobile Navbar toggle
    var navToggle = document.getElementById('navbarToggle');
    var navMenu = document.getElementById('navbarMenu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('show');
      });
    }

    // FAQ Expand / Collapse All Engine
    var toggleBtn = document.getElementById('toggleAllBtn');
    var toggleText = document.getElementById('toggleAllText');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var allDetails = document.querySelectorAll('.apple-faq-list-exact details, .apple-faq-accordion details, details.apple-faq-item');
        if (!allDetails.length) return;
        var allOpen = Array.from(allDetails).every(function(d) { return d.open; });
        var nextState = !allOpen;
        allDetails.forEach(function(d) { d.open = nextState; });
        if (toggleText) toggleText.textContent = nextState ? 'Collapse all' : 'Expand all';
        toggleBtn.setAttribute('aria-expanded', String(nextState));
        var icon = toggleBtn.querySelector('svg');
        if (icon) {
          icon.style.transform = nextState ? 'rotate(180deg)' : 'rotate(0deg)';
          icon.style.transition = 'transform 0.25s ease';
        }
      });

      document.querySelectorAll('.apple-faq-list-exact details, .apple-faq-accordion details, details.apple-faq-item').forEach(function(detail) {
        detail.addEventListener('toggle', function() {
          var allDetails = document.querySelectorAll('.apple-faq-list-exact details, .apple-faq-accordion details, details.apple-faq-item');
          var allOpen = Array.from(allDetails).every(function(d) { return d.open; });
          if (toggleText) toggleText.textContent = allOpen ? 'Collapse all' : 'Expand all';
          toggleBtn.setAttribute('aria-expanded', String(allOpen));
          var icon = toggleBtn.querySelector('svg');
          if (icon) {
            icon.style.transform = allOpen ? 'rotate(180deg)' : 'rotate(0deg)';
          }
        });
      });
    }

    // Search Engine Modal
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
      setTimeout(function() {
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
    triggers.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openSearch();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    if (modal) {
      var backdrop = modal.querySelector('.search-backdrop');
      if (backdrop) backdrop.addEventListener('click', closeSearch);
    }

    window.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeSearch();
      }
    });

    if (input) {
      input.addEventListener('input', function() {
        var query = input.value.trim().toLowerCase();
        if (!query) {
          results.innerHTML = '<div class="search-empty">Type to search...</div>';
          return;
        }
        if (!searchIndex) {
          results.innerHTML = '<div class="search-empty">Loading search index...</div>';
          loadSearch().then(function() {
            input.dispatchEvent(new Event('input'));
          });
          return;
        }
        if (searchIndex.length === 0) {
          results.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
          return;
        }
        var tokens = query.split(/\s+/).filter(Boolean);
        var matches = searchIndex.filter(function(item) {
          var t = (item.title || '').toLowerCase();
          var d = (item.description || '').toLowerCase();
          var c = (item.content || '').toLowerCase();
          var u = (item.url || '').toLowerCase();
          var target = t + ' ' + d + ' ' + c + ' ' + u;
          return tokens.every(function(tok) { return target.includes(tok); });
        }).slice(0, 10);

        if (matches.length === 0) {
          results.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
          return;
        }
        results.innerHTML = matches.map(function(item) {
          return '<a class="search-item" href="' + item.url + '">' +
            '<div class="search-item-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="search-item-desc">' + escapeHtml((item.description || item.content || '').replace(/<[^>]+>/g, '').slice(0, 140)) + '...</div>' +
          '</a>';
        }).join('');
      });
    }

    // 5. Photo Lightbox Modal Engine with Left/Right Arrows & Keyboard Nav
    var galleryPhotos = [];
    var currentPhotoIndex = -1;

    function refreshGalleryPhotos() {
      var imgElements = document.querySelectorAll('.photo-gallery-grid img, .photo-grid img, .gallery-grid img, .photo-card img, .gallery-card img');
      galleryPhotos = [];
      imgElements.forEach(function(img) {
        if (img.src && !img.closest('.navbar') && !img.closest('footer') && !img.classList.contains('hero-banner-img') && !img.classList.contains('navbar-brand')) {
          galleryPhotos.push({
            src: img.src,
            alt: img.alt || 'Photograph'
          });
        }
      });
    }

    var lightboxModal = document.getElementById('photoLightboxModal');
    if (!lightboxModal) {
      lightboxModal = document.createElement('div');
      lightboxModal.id = 'photoLightboxModal';
      lightboxModal.className = 'photo-lightbox-modal';
      lightboxModal.setAttribute('role', 'dialog');
      lightboxModal.setAttribute('aria-modal', 'true');
      lightboxModal.setAttribute('aria-label', 'Photo Preview');
      lightboxModal.innerHTML = '<div class="photo-lightbox-backdrop"></div>' +
        '<div class="photo-lightbox-content">' +
        '  <div class="photo-lightbox-media-wrap">' +
        '    <button type="button" class="photo-lightbox-close" aria-label="Close photo preview">✕</button>' +
        '    <button type="button" class="photo-lightbox-nav photo-lightbox-prev" aria-label="Previous photograph">' +
        '      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
        '    </button>' +
        '    <button type="button" class="photo-lightbox-nav photo-lightbox-next" aria-label="Next photograph">' +
        '      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
        '    </button>' +
        '    <img src="" alt="" class="photo-lightbox-img" id="lightboxImg" />' +
        '  </div>' +
        '  <div class="photo-lightbox-footer">' +
        '    <div class="photo-lightbox-caption" id="lightboxCaption"></div>' +
        '    <div class="photo-lightbox-counter" id="lightboxCounter"></div>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(lightboxModal);
    }

    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var lightboxCounter = document.getElementById('lightboxCounter');
    var lightboxClose = lightboxModal.querySelector('.photo-lightbox-close');
    var lightboxPrev = lightboxModal.querySelector('.photo-lightbox-prev');
    var lightboxNext = lightboxModal.querySelector('.photo-lightbox-next');
    var lightboxBackdrop = lightboxModal.querySelector('.photo-lightbox-backdrop');

    function showPhotoAtIndex(idx) {
      if (!galleryPhotos.length) return;
      if (idx < 0) idx = galleryPhotos.length - 1;
      if (idx >= galleryPhotos.length) idx = 0;
      currentPhotoIndex = idx;
      var item = galleryPhotos[idx];
      if (lightboxImg) {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = item.alt;
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = (idx + 1) + ' / ' + galleryPhotos.length;
      }
    }

    function openLightbox(src, alt) {
      refreshGalleryPhotos();
      var foundIdx = galleryPhotos.findIndex(function(p) { return p.src === src; });
      if (foundIdx === -1) {
        galleryPhotos.push({ src: src, alt: alt || 'Photograph' });
        foundIdx = galleryPhotos.length - 1;
      }
      showPhotoAtIndex(foundIdx);
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightboxModal) return;
      lightboxModal.classList.remove('active');
      if (lightboxImg) lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    function prevPhoto(e) {
      if (e) e.stopPropagation();
      showPhotoAtIndex(currentPhotoIndex - 1);
    }

    function nextPhoto(e) {
      if (e) e.stopPropagation();
      showPhotoAtIndex(currentPhotoIndex + 1);
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevPhoto);
    if (lightboxNext) lightboxNext.addEventListener('click', nextPhoto);

    document.addEventListener('keydown', function(e) {
      if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      }
    });

    document.addEventListener('click', function(e) {
      var photoTarget = e.target.closest('.photo-card, .photo-img-wrapper, .gallery-card, .gallery-img-wrapper, .photo-gallery-item, figure');
      if (photoTarget) {
        var img = photoTarget.querySelector('img');
        if (img && img.src && !img.classList.contains('hero-banner-img')) {
          e.preventDefault();
          openLightbox(img.src, img.alt);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
