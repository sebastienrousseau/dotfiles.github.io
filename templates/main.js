// Antigravity ServiceWorker + Theme Switcher + Search Engine + Mobile Nav Drawer
"use strict";
class ServiceWorkerSetup {
  constructor() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => { this.registerServiceWorker(); });
    }
  }
  registerServiceWorker() {
    navigator.serviceWorker.register("/sw.js", { scope: "./" }).catch(() => {});
  }
}
window.serviceWorkerSetup = new ServiceWorkerSetup();

(function() {
  const storedTheme = localStorage.getItem("theme-mode") || "system";
  function applyTheme(mode) {
    if (mode === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme-mode", isDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme-mode", mode);
    }
    localStorage.setItem("theme-mode", mode);
    document.querySelectorAll(".theme-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-theme-mode") === mode);
    });
  }

  applyTheme(storedTheme);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if ((localStorage.getItem("theme-mode") || "system") === "system") {
      applyTheme("system");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem("theme-mode") || "system");
    document.querySelectorAll(".theme-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        applyTheme(btn.getAttribute("data-theme-mode"));
      });
    });

    const navToggle = document.getElementById("navbarToggle");
    const navMenu = document.getElementById("navbarMenu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("show");
      });
    }

    let searchIndex = null;
    const modal = document.getElementById("searchModal");
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");
    const trigger = document.getElementById("searchTrigger") || document.getElementById("searchTriggerMobile");
    const closeBtn = document.getElementById("searchClose");

    async function loadSearch() {
      if (!searchIndex) {
        try {
          const res = await fetch("/search-index.json");
          if (res.ok) {
            const data = await res.json();
            searchIndex = Array.isArray(data) ? data : (data.entries || []);
          }
        } catch (e) {
          searchIndex = [];
        }
      }
    }

    function openSearch() {
      if (!modal) return;
      modal.classList.add("active");
      loadSearch();
      setTimeout(() => input && input.focus(), 50);
    }

    function closeSearch() {
      if (!modal) return;
      modal.classList.remove("active");
      if (input) input.value = "";
      if (results) results.innerHTML = "<div class=\"search-empty\">Type to search...</div>";
    }

    document.querySelectorAll("#searchTrigger, #searchTriggerMobile").forEach(btn => {
      btn.addEventListener("click", openSearch);
    });
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);
    if (modal) {
      const backdrop = modal.querySelector(".search-backdrop");
      if (backdrop) backdrop.addEventListener("click", closeSearch);
    }

    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape" && modal && modal.classList.contains("active")) {
        closeSearch();
      }
    });

    if (input) {
      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        if (!query || !searchIndex || searchIndex.length === 0) {
          results.innerHTML = "<div class=\"search-empty\">Type to search...</div>";
          return;
        }
        const matches = searchIndex.filter(item => {
          const t = (item.title || "").toLowerCase();
          const d = (item.description || "").toLowerCase();
          const c = (item.content || "").toLowerCase();
          return t.includes(query) || d.includes(query) || c.includes(query);
        }).slice(0, 8);

        if (matches.length === 0) {
          results.innerHTML = "<div class=\"search-empty\">No results found for \"" + query + "\"</div>";
          return;
        }

        results.innerHTML = matches.map(item => `
          <a class="search-item" href="${item.url}">
            <div class="search-item-title">${item.title}</div>
            <div class="search-item-desc">${(item.description || item.content || "").replace(/<[^>]+>/g, "").slice(0, 100)}...</div>
          </a>
        `).join("");
      });
    }
  });
})();
