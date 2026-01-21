var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) =>
  function __init() {
    return (fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res);
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };

// docs/.vuepress/config/nav/en.ts
var enNavbar;
var init_en = __esm({
  "docs/.vuepress/config/nav/en.ts"() {
    enNavbar = [
      { text: "Aliases", link: "/aliases/", ariaLabel: "Aliases - Dotfiles" },
      { text: "About", link: "/about/", ariaLabel: "About - Dotfiles" },
    ];
  },
});

// docs/.vuepress/config/nav/fr.ts
var frNavbar;
var init_fr = __esm({
  "docs/.vuepress/config/nav/fr.ts"() {
    frNavbar = [
      { text: "Alias", link: "/fr/alias/", ariaLabel: "Les Alias - Dotfiles" },
      {
        text: "\xC0 propos",
        link: "/fr/apropos/",
        ariaLabel: "\xC0 propos - Dotfiles",
      },
    ];
  },
});

// docs/.vuepress/config/nav/index.ts
var init_nav = __esm({
  "docs/.vuepress/config/nav/index.ts"() {
    init_en();
    init_fr();
  },
});

// docs/.vuepress/config/aliases/en.ts
var aliases;
var init_en2 = __esm({
  "docs/.vuepress/config/aliases/en.ts"() {
    aliases = {
      ariaLabel: "Aliases - Dotfiles",
      children: [
        ["/aliases/archives/", "Archives aliases"],
        ["/aliases/cd/", "Cd aliases"],
        ["/aliases/chmod/", "Chmod aliases"],
        ["/aliases/clear/", "Clear aliases"],
        ["/aliases/configuration/", "Configuration aliases"],
        ["/aliases/default/", "Default aliases"],
        ["/aliases/dig/", "Dig aliases"],
        ["/aliases/dot/", "Dot Command"],
        ["/aliases/du/", "Disk usage aliases"],
        ["/aliases/editor/", "Editor aliases"],
        ["/aliases/find/", "Find aliases"],
        ["/aliases/gcloud/", "GCloud aliases"],
        ["/aliases/git/", "Git aliases"],
        ["/aliases/gnu/", "GNU Core Utilities aliases"],
        ["/aliases/heroku/", "Heroku aliases"],
        ["/aliases/interactive/", "Interactive aliases"],
        ["/aliases/jekyll/", "Jekyll aliases"],
        ["/aliases/list/", "List aliases"],
        ["/aliases/make/", "Make aliases"],
        ["/aliases/mkdir/", "Mkdir aliases"],
        ["/aliases/modern-core/", "Modern Core"],
        ["/aliases/npm/", "NPM aliases"],
        ["/aliases/pnpm/", "pnpm aliases"],
        ["/aliases/ps/", "PS aliases"],
        ["/aliases/rsync/", "Rsync aliases"],
        ["/aliases/rust/", "Rust aliases"],
        ["/aliases/subversion/", "Subversion aliases"],
        ["/aliases/sudo/", "Sudo aliases"],
        ["/aliases/tmux/", "Tmux aliases"],
        ["/aliases/update/", "Update aliases"],
        ["/aliases/uuid/", "UUID aliases"],
        ["/aliases/wget/", "Wget aliases"],
      ],
      collapsable: false,
      path: "/aliases/",
      title: "Aliases",
    };
  },
});

// docs/.vuepress/config/about/en.ts
var about;
var init_en3 = __esm({
  "docs/.vuepress/config/about/en.ts"() {
    about = {
      ariaLabel: "About Dotfiles",
      title: "About Dotfiles",
      path: "/about/",
      collapsable: false,
    };
  },
});

// docs/.vuepress/config/sidebar/en.ts
var enSidebar;
var init_en4 = __esm({
  "docs/.vuepress/config/sidebar/en.ts"() {
    init_en2();
    init_en3();
    enSidebar = [
      about,
      ["/paths/", "Path Management"],
      ["/functions/", "Shell Functions"],
      {
        title: "Aliases",
        collapsable: false,
        children: aliases.children,
      },
    ];
  },
});

// docs/.vuepress/config/aliases/fr.ts
var alias;
var init_fr2 = __esm({
  "docs/.vuepress/config/aliases/fr.ts"() {
    alias = {
      ariaLabel: "Les alias Dotfiles",
      children: [
        ["/fr/alias/archives/", "les alias d'archivage"],
        ["/fr/alias/cd/", "les alias cd"],
        ["/fr/alias/chmod/", "les alias chmod"],
        ["/fr/alias/clear/", "les alias clear"],
        ["/fr/alias/configuration/", "les alias de configuration"],
        ["/fr/alias/default/", "les alias par d\xE9faut"],
        ["/fr/alias/dig/", "les alias dig"],
        ["/fr/alias/dot/", "la commande dot"],
        ["/fr/alias/du/", "les alias du"],
        ["/fr/alias/editeur/", "les alias de l'\xE9diteur syst\xE8me"],
        ["/fr/alias/gcloud/", "les alias gcloud"],
        ["/fr/alias/git/", "les alias git"],
        ["/fr/alias/gnu/", "les alias gnu coreutils"],
        ["/fr/alias/heroku/", "les alias heroku"],
        ["/fr/alias/jekyll/", "les alias jekyll"],
        ["/fr/alias/liste/", "les alias de liste"],
        ["/fr/alias/make/", "les alias make"],
        ["/fr/alias/mise-a-jour/", "les alias de mise \xE0 jour"],
        ["/fr/alias/mkdir/", "les alias mkdir"],
        ["/fr/alias/mode-interactif/", "les alias en mode interactif"],
        ["/fr/alias/modern-core/", "le noyau moderne"],
        ["/fr/alias/npm/", "les alias npm"],
        ["/fr/alias/pnpm/", "les alias pnpm"],
        ["/fr/alias/ps/", "les alias ps"],
        ["/fr/alias/recherche/", "les alias de recherche"],
        ["/fr/alias/rsync/", "les alias rsync"],
        ["/fr/alias/rust/", "les alias rust"],
        ["/fr/alias/subversion/", "les alias subversion"],
        ["/fr/alias/sudo/", "les alias sudo"],
        ["/fr/alias/tmux/", "les alias tmux"],
        ["/fr/alias/uuid/", "les alias uuid"],
        ["/fr/alias/wget/", "les alias wget"],
      ],
      collapsable: false,
      path: "/fr/alias/",
      title: "Les alias Dotfiles",
    };
  },
});

// docs/.vuepress/config/about/fr.ts
var apropos;
var init_fr3 = __esm({
  "docs/.vuepress/config/about/fr.ts"() {
    apropos = {
      ariaLabel: "\xC0 propos des Dotfiles",
      title: "\xC0 propos des Dotfiles",
      path: "/fr/apropos/",
      collapsable: false,
    };
  },
});

// docs/.vuepress/config/sidebar/fr.ts
var frSidebar;
var init_fr4 = __esm({
  "docs/.vuepress/config/sidebar/fr.ts"() {
    init_fr2();
    init_fr3();
    frSidebar = [
      apropos,
      ["/fr/paths/", "Gestion des Chemins"],
      ["/fr/functions/", "Fonctions Shell"],
      {
        title: "Les alias",
        collapsable: false,
        children: alias.children,
      },
    ];
  },
});

// docs/.vuepress/config/sidebar/index.ts
var init_sidebar = __esm({
  "docs/.vuepress/config/sidebar/index.ts"() {
    init_en4();
    init_fr4();
  },
});

// docs/.vuepress/config/head/index.ts
var headers;
var init_head = __esm({
  "docs/.vuepress/config/head/index.ts"() {
    headers = [
      ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: "/icons/dotfiles-180x180.png",
          sizes: "180x180",
        },
      ],
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
      ],
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
      ],
      [
        "link",
        { rel: "mask-icon", href: "/icons/dotfiles.svg", color: "#ffffff" },
      ],
      ["link", { rel: "manifest", href: "/manifest.json" }],
      [
        "link",
        {
          rel: "preload",
          href: "https://unpkg.com/skeletonic-stylus@1.0.5/css/skeletonic-fonts.min.css",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
      ["meta", { name: "charset", content: "utf-8" }],
      ["meta", { name: "theme-color", content: "#9e00a3" }],
      [
        "meta",
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      ["meta", { itemprop: "accessibilityAPI", content: "ARIA" }],
      [
        "meta",
        { itemprop: "accessibilityControl", content: "fullKeyboardControl" },
      ],
      [
        "meta",
        { itemprop: "accessibilityControl", content: "fullMouseControl" },
      ],
      [
        "meta",
        { itemprop: "accessibilityHazard", content: "noFlashingHazard" },
      ],
      [
        "meta",
        {
          itemprop: "accessibilityHazard",
          content: "noMotionSimulationHazard",
        },
      ],
      ["meta", { itemprop: "accessibilityHazard", content: "noSoundHazard" }],
      [
        "meta",
        {
          "http-equiv": "Cache-Control",
          content: "no-cache, no-store, must-revalidate",
        },
      ],
      ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
      ["meta", { "http-equiv": "Expires", content: "0" }],
      ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      [
        "meta",
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
      ["meta", { name: "apple-mobile-web-app-title", content: "Dotfiles" }],
      ["meta", { name: "application-name", content: "Dotfiles" }],
      ["meta", { name: "author", content: "Sebastien Rousseau" }],
      ["meta", { name: "format-detection", content: "telephone=no" }],
      ["meta", { name: "msapplication-tap-highlight", content: "no" }],
      ["meta", { name: "msapplication-config", content: "/browserconfig.xml" }],
      ["meta", { name: "robots", content: "all" }],
      ["meta", { name: "og:image:height", content: "627" }],
      ["meta", { name: "og:image:type", content: "image/png" }],
      ["meta", { name: "og:image:width", content: "1200" }],
      ["meta", { name: "og:image", content: "/logo.png" }],
      ["meta", { name: "og:locale", content: "en_GB" }],
      ["meta", { name: "og:robots", content: "all" }],
      ["meta", { name: "og:site_name", content: "Dotfiles" }],
      ["meta", { name: "og:type", content: "website" }],
      ["meta", { name: "og:url", content: "https://dotfiles.io/" }],
      ["meta", { name: "twitter:creator", content: "@wwdseb" }],
      ["meta", { name: "twitter:site", content: "@wwdseb" }],
      ["meta", { name: "twitter:url", content: "https://dotfiles.io/" }],
      ["meta", { name: "twitter:image", content: "/logo.png" }],
      [
        "script",
        {},
        `
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ejvjin4amu");
    `,
      ],
    ];
  },
});

// docs/.vuepress/config.ts
var require_config = __commonJS({
  "docs/.vuepress/config.ts"(exports, module) {
    init_nav();
    init_sidebar();
    init_nav();
    init_sidebar();
    init_head();
    module.exports = {
      base: "/",
      locales: {
        "/": {
          lang: "en-GB",
          title: "Dotfiles",
          description:
            "The next generation of Bash configuration files for macOS, Linux and Windows. Featuring a Modern Core (Atuin, Yazi, Zellij) and Native SSH Security.",
        },
        "/fr/": {
          lang: "fr-FR",
          title: "Les Dotfiles",
          description:
            "La prochaine g\xE9n\xE9ration de fichiers de configuration Bash pour macOS, Linux et Windows. Avec un Noyau Moderne (Atuin, Yazi, Zellij) et S\xE9curit\xE9 SSH Native.",
        },
      },
      evergreen: true,
      head: headers,
      theme: "default-prefers-color-scheme",
      themeConfig: {
        search: false,
        logo: "/dotfiles.webp",
        repo: "sebastienrousseau/dotfiles.github.io",
        repoLabel: "GitHub",
        docsDir: "docs",
        docsBranch: "main",
        editLinks: true,
        locales: {
          "/": {
            selectText: "Languages",
            ariaLabel: "Languages",
            label: "English",
            editLinkText: "Edit this page on GitHub",
            nav: enNavbar,
            sidebar: enSidebar,
          },
          "/fr/": {
            selectText: "Langues",
            ariaLabel: "Langues",
            label: "Fran\xE7ais",
            editLinkText: "\xC9ditez cette page sur GitHub",
            nav: frNavbar,
            sidebar: frSidebar,
          },
        },
        chainWebpack: (config) => {
          config.plugin("html").tap((args) => {
            args[0].minify = {
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true,
              removeComments: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
              removeAttributeQuotes: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
            };
            return args;
          });
        },
      },
      plugins: [
        [
          "@vuepress/google-analytics",
          {
            ga: "UA-116339011-1",
          },
        ],
        [
          "vuepress-plugin-sitemap",
          {
            hostname: "https://dotfiles.io",
            outFile: "sitemap.xml",
            exclude: ["/404.html"],
          },
        ],
        [
          "@vuepress/pwa",
          {
            serviceWorker: true,
            updatePopup: true,
          },
        ],
        ["vuepress-plugin-code-copy", true],
        [
          "html-webpack-plugin",
          {
            minify: {
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true,
              removeComments: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
              removeAttributeQuotes: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
            },
          },
        ],
      ],
    };
  },
});
export default require_config();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnL25hdi9lbi50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvbmF2L2ZyLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9uYXYvaW5kZXgudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL2FsaWFzZXMvZW4udHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL2Fib3V0L2VuLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9zaWRlYmFyL2VuLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9hbGlhc2VzL2ZyLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9hYm91dC9mci50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvc2lkZWJhci9mci50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvc2lkZWJhci9pbmRleC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvaGVhZC9pbmRleC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgTmF2YmFyQ29uZmlnIH0gZnJvbSBcIkB2dWVwcmVzcy90aGVtZS1kZWZhdWx0XCI7XG5cbmltcG9ydCB7IGFsaWFzZXMgfSBmcm9tIFwiLi4vYWxpYXNlcy9lblwiO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tIFwiLi4vYWJvdXQvZW5cIjtcblxuZXhwb3J0IGNvbnN0IGVuTmF2YmFyOiBOYXZiYXJDb25maWcgPSBbXG4gIHsgdGV4dDogXCJBbGlhc2VzXCIsIGxpbms6IFwiL2FsaWFzZXMvXCIsIGFyaWFMYWJlbDogXCJBbGlhc2VzIC0gRG90ZmlsZXNcIiB9LFxuICB7IHRleHQ6IFwiQWJvdXRcIiwgbGluazogXCIvYWJvdXQvXCIsIGFyaWFMYWJlbDogXCJBYm91dCAtIERvdGZpbGVzXCIgfSxcbl07XG4iLCAiaW1wb3J0IHR5cGUgeyBOYXZiYXJDb25maWcgfSBmcm9tIFwiQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHRcIjtcblxuaW1wb3J0IHsgYWxpYXMgfSBmcm9tIFwiLi4vYWxpYXNlcy9mclwiO1xuaW1wb3J0IHsgYXByb3BvcyB9IGZyb20gXCIuLi9hYm91dC9mclwiO1xuXG5leHBvcnQgY29uc3QgZnJOYXZiYXI6IE5hdmJhckNvbmZpZyA9IFtcbiAgeyB0ZXh0OiBcIkFsaWFzXCIsIGxpbms6IFwiL2ZyL2FsaWFzL1wiLCBhcmlhTGFiZWw6IFwiTGVzIEFsaWFzIC0gRG90ZmlsZXNcIiB9LFxuICB7IHRleHQ6IFwiXHUwMEMwIHByb3Bvc1wiLCBsaW5rOiBcIi9mci9hcHJvcG9zL1wiLCBhcmlhTGFiZWw6IFwiXHUwMEMwIHByb3BvcyAtIERvdGZpbGVzXCIgfSxcbl07XG4iLCAiZXhwb3J0IHsgZW5OYXZiYXIgfSBmcm9tIFwiLi9lblwiO1xuZXhwb3J0IHsgZnJOYXZiYXIgfSBmcm9tIFwiLi9mclwiO1xuIiwgImV4cG9ydCBjb25zdCBhbGlhc2VzID0ge1xuICBhcmlhTGFiZWw6IFwiQWxpYXNlcyAtIERvdGZpbGVzXCIsXG4gIGNoaWxkcmVuOiBbXG4gICAgW1wiL2FsaWFzZXMvYXJjaGl2ZXMvXCIsIFwiQXJjaGl2ZXMgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9jZC9cIiwgXCJDZCBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL2NobW9kL1wiLCBcIkNobW9kIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvY2xlYXIvXCIsIFwiQ2xlYXIgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9jb25maWd1cmF0aW9uL1wiLCBcIkNvbmZpZ3VyYXRpb24gYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9kZWZhdWx0L1wiLCBcIkRlZmF1bHQgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9kaWcvXCIsIFwiRGlnIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvZG90L1wiLCBcIkRvdCBDb21tYW5kXCJdLFxuICAgIFtcIi9hbGlhc2VzL2R1L1wiLCBcIkRpc2sgdXNhZ2UgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9lZGl0b3IvXCIsIFwiRWRpdG9yIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvZmluZC9cIiwgXCJGaW5kIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvZ2Nsb3VkL1wiLCBcIkdDbG91ZCBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL2dpdC9cIiwgXCJHaXQgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9nbnUvXCIsIFwiR05VIENvcmUgVXRpbGl0aWVzIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvaGVyb2t1L1wiLCBcIkhlcm9rdSBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL2ludGVyYWN0aXZlL1wiLCBcIkludGVyYWN0aXZlIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvamVreWxsL1wiLCBcIkpla3lsbCBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL2xpc3QvXCIsIFwiTGlzdCBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL21ha2UvXCIsIFwiTWFrZSBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL21rZGlyL1wiLCBcIk1rZGlyIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvbW9kZXJuLWNvcmUvXCIsIFwiTW9kZXJuIENvcmVcIl0sXG4gICAgW1wiL2FsaWFzZXMvbnBtL1wiLCBcIk5QTSBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL3BucG0vXCIsIFwicG5wbSBhbGlhc2VzXCJdLFxuICAgIFtcIi9hbGlhc2VzL3BzL1wiLCBcIlBTIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvcnN5bmMvXCIsIFwiUnN5bmMgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9ydXN0L1wiLCBcIlJ1c3QgYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9zdWJ2ZXJzaW9uL1wiLCBcIlN1YnZlcnNpb24gYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy9zdWRvL1wiLCBcIlN1ZG8gYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy90bXV4L1wiLCBcIlRtdXggYWxpYXNlc1wiXSxcbiAgICBbXCIvYWxpYXNlcy91cGRhdGUvXCIsIFwiVXBkYXRlIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvdXVpZC9cIiwgXCJVVUlEIGFsaWFzZXNcIl0sXG4gICAgW1wiL2FsaWFzZXMvd2dldC9cIiwgXCJXZ2V0IGFsaWFzZXNcIl0sXG4gIF0sXG4gIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgcGF0aDogXCIvYWxpYXNlcy9cIixcbiAgdGl0bGU6IFwiQWxpYXNlc1wiLFxufTtcbiIsICJleHBvcnQgY29uc3QgYWJvdXQgPSB7XG4gIGFyaWFMYWJlbDogXCJBYm91dCBEb3RmaWxlc1wiLFxuICB0aXRsZTogXCJBYm91dCBEb3RmaWxlc1wiLFxuICBwYXRoOiBcIi9hYm91dC9cIixcbiAgY29sbGFwc2FibGU6IGZhbHNlLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IFNpZGViYXJDb25maWcgfSBmcm9tIFwiQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHRcIjtcblxuaW1wb3J0IHsgYWxpYXNlcyB9IGZyb20gXCIuLi9hbGlhc2VzL2VuXCI7XG5pbXBvcnQgeyBhYm91dCB9IGZyb20gXCIuLi9hYm91dC9lblwiO1xuXG5leHBvcnQgY29uc3QgZW5TaWRlYmFyOiBTaWRlYmFyQ29uZmlnID0gW1xuICAgIGFib3V0LFxuICAgIFtcIi9wYXRocy9cIiwgXCJQYXRoIE1hbmFnZW1lbnRcIl0sXG4gICAgW1wiL2Z1bmN0aW9ucy9cIiwgXCJTaGVsbCBGdW5jdGlvbnNcIl0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJBbGlhc2VzXCIsXG4gICAgICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW46IGFsaWFzZXMuY2hpbGRyZW4sXG4gICAgfSxcbl07XG4iLCAiZXhwb3J0IGNvbnN0IGFsaWFzID0ge1xuICBhcmlhTGFiZWw6IFwiTGVzIGFsaWFzIERvdGZpbGVzXCIsXG4gIGNoaWxkcmVuOiBbXG4gICAgW1wiL2ZyL2FsaWFzL2FyY2hpdmVzL1wiLCBcImxlcyBhbGlhcyBkJ2FyY2hpdmFnZVwiXSxcbiAgICBbXCIvZnIvYWxpYXMvY2QvXCIsIFwibGVzIGFsaWFzIGNkXCJdLFxuICAgIFtcIi9mci9hbGlhcy9jaG1vZC9cIiwgXCJsZXMgYWxpYXMgY2htb2RcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL2NsZWFyL1wiLCBcImxlcyBhbGlhcyBjbGVhclwiXSxcbiAgICBbXCIvZnIvYWxpYXMvY29uZmlndXJhdGlvbi9cIiwgXCJsZXMgYWxpYXMgZGUgY29uZmlndXJhdGlvblwiXSxcbiAgICBbXCIvZnIvYWxpYXMvZGVmYXVsdC9cIiwgXCJsZXMgYWxpYXMgcGFyIGRcdTAwRTlmYXV0XCJdLFxuICAgIFtcIi9mci9hbGlhcy9kaWcvXCIsIFwibGVzIGFsaWFzIGRpZ1wiXSxcbiAgICBbXCIvZnIvYWxpYXMvZG90L1wiLCBcImxhIGNvbW1hbmRlIGRvdFwiXSxcbiAgICBbXCIvZnIvYWxpYXMvZHUvXCIsIFwibGVzIGFsaWFzIGR1XCJdLFxuICAgIFtcIi9mci9hbGlhcy9lZGl0ZXVyL1wiLCBcImxlcyBhbGlhcyBkZSBsJ1x1MDBFOWRpdGV1ciBzeXN0XHUwMEU4bWVcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL2djbG91ZC9cIiwgXCJsZXMgYWxpYXMgZ2Nsb3VkXCJdLFxuICAgIFtcIi9mci9hbGlhcy9naXQvXCIsIFwibGVzIGFsaWFzIGdpdFwiXSxcbiAgICBbXCIvZnIvYWxpYXMvZ251L1wiLCBcImxlcyBhbGlhcyBnbnUgY29yZXV0aWxzXCJdLFxuICAgIFtcIi9mci9hbGlhcy9oZXJva3UvXCIsIFwibGVzIGFsaWFzIGhlcm9rdVwiXSxcbiAgICBbXCIvZnIvYWxpYXMvamVreWxsL1wiLCBcImxlcyBhbGlhcyBqZWt5bGxcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL2xpc3RlL1wiLCBcImxlcyBhbGlhcyBkZSBsaXN0ZVwiXSxcbiAgICBbXCIvZnIvYWxpYXMvbWFrZS9cIiwgXCJsZXMgYWxpYXMgbWFrZVwiXSxcbiAgICBbXCIvZnIvYWxpYXMvbWlzZS1hLWpvdXIvXCIsIFwibGVzIGFsaWFzIGRlIG1pc2UgXHUwMEUwIGpvdXJcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL21rZGlyL1wiLCBcImxlcyBhbGlhcyBta2RpclwiXSxcbiAgICBbXCIvZnIvYWxpYXMvbW9kZS1pbnRlcmFjdGlmL1wiLCBcImxlcyBhbGlhcyBlbiBtb2RlIGludGVyYWN0aWZcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL21vZGVybi1jb3JlL1wiLCBcImxlIG5veWF1IG1vZGVybmVcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL25wbS9cIiwgXCJsZXMgYWxpYXMgbnBtXCJdLFxuICAgIFtcIi9mci9hbGlhcy9wbnBtL1wiLCBcImxlcyBhbGlhcyBwbnBtXCJdLFxuICAgIFtcIi9mci9hbGlhcy9wcy9cIiwgXCJsZXMgYWxpYXMgcHNcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3JlY2hlcmNoZS9cIiwgXCJsZXMgYWxpYXMgZGUgcmVjaGVyY2hlXCJdLFxuICAgIFtcIi9mci9hbGlhcy9yc3luYy9cIiwgXCJsZXMgYWxpYXMgcnN5bmNcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3J1c3QvXCIsIFwibGVzIGFsaWFzIHJ1c3RcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3N1YnZlcnNpb24vXCIsIFwibGVzIGFsaWFzIHN1YnZlcnNpb25cIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3N1ZG8vXCIsIFwibGVzIGFsaWFzIHN1ZG9cIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3RtdXgvXCIsIFwibGVzIGFsaWFzIHRtdXhcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3V1aWQvXCIsIFwibGVzIGFsaWFzIHV1aWRcIl0sXG4gICAgW1wiL2ZyL2FsaWFzL3dnZXQvXCIsIFwibGVzIGFsaWFzIHdnZXRcIl0sXG4gIF0sXG4gIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgcGF0aDogXCIvZnIvYWxpYXMvXCIsXG4gIHRpdGxlOiBcIkxlcyBhbGlhcyBEb3RmaWxlc1wiLFxufTtcbiIsICJleHBvcnQgY29uc3QgYXByb3BvcyA9IHtcbiAgYXJpYUxhYmVsOiBcIlx1MDBDMCBwcm9wb3MgZGVzIERvdGZpbGVzXCIsXG4gIHRpdGxlOiBcIlx1MDBDMCBwcm9wb3MgZGVzIERvdGZpbGVzXCIsXG4gIHBhdGg6IFwiL2ZyL2Fwcm9wb3MvXCIsXG4gIGNvbGxhcHNhYmxlOiBmYWxzZSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTaWRlYmFyQ29uZmlnIH0gZnJvbSBcIkB2dWVwcmVzcy90aGVtZS1kZWZhdWx0XCI7XG5cbmltcG9ydCB7IGFsaWFzIH0gZnJvbSBcIi4uL2FsaWFzZXMvZnJcIjtcbmltcG9ydCB7IGFwcm9wb3MgfSBmcm9tIFwiLi4vYWJvdXQvZnJcIjtcblxuZXhwb3J0IGNvbnN0IGZyU2lkZWJhcjogU2lkZWJhckNvbmZpZyA9IFtcbiAgICBhcHJvcG9zLFxuICAgIFtcIi9mci9wYXRocy9cIiwgXCJHZXN0aW9uIGRlcyBDaGVtaW5zXCJdLFxuICAgIFtcIi9mci9mdW5jdGlvbnMvXCIsIFwiRm9uY3Rpb25zIFNoZWxsXCJdLFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTGVzIGFsaWFzXCIsXG4gICAgICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW46IGFsaWFzLmNoaWxkcmVuLFxuICAgIH0sXG5dO1xuIiwgImV4cG9ydCB7IGVuU2lkZWJhciB9IGZyb20gXCIuL2VuXCI7XG5leHBvcnQgeyBmclNpZGViYXIgfSBmcm9tIFwiLi9mclwiO1xuIiwgImV4cG9ydCBjb25zdCBoZWFkZXJzOiBzdHJpbmdbXSA9IFtcbiAgW1wibGlua1wiLCB7IHJlbDogXCJhcHBsZS10b3VjaC1pY29uXCIsIGhyZWY6IFwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgfV0sXG4gIFtcbiAgICBcImxpbmtcIixcbiAgICB7XG4gICAgICByZWw6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgaHJlZjogXCIvaWNvbnMvZG90ZmlsZXMtMTgweDE4MC5wbmdcIixcbiAgICAgIHNpemVzOiBcIjE4MHgxODBcIixcbiAgICB9LFxuICBdLFxuICBbXG4gICAgXCJsaW5rXCIsXG4gICAge1xuICAgICAgcmVsOiBcImljb25cIixcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICBocmVmOiBcIi9mYXZpY29uLTMyeDMyLnBuZ1wiLFxuICAgICAgc2l6ZXM6IFwiMzJ4MzJcIixcbiAgICB9LFxuICBdLFxuICBbXG4gICAgXCJsaW5rXCIsXG4gICAge1xuICAgICAgcmVsOiBcImljb25cIixcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICBocmVmOiBcIi9mYXZpY29uLTE2eDE2LnBuZ1wiLFxuICAgICAgc2l6ZXM6IFwiMTZ4MTZcIixcbiAgICB9LFxuICBdLFxuICBbXCJsaW5rXCIsIHsgcmVsOiBcIm1hc2staWNvblwiLCBocmVmOiBcIi9pY29ucy9kb3RmaWxlcy5zdmdcIiwgY29sb3I6IFwiI2ZmZmZmZlwiIH1dLFxuICBbXCJsaW5rXCIsIHsgcmVsOiBcIm1hbmlmZXN0XCIsIGhyZWY6IFwiL21hbmlmZXN0Lmpzb25cIiB9XSxcbiAgW1xuICAgIFwibGlua1wiLFxuICAgIHtcbiAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL3NrZWxldG9uaWMtc3R5bHVzQDEuMC41L2Nzcy9za2VsZXRvbmljLWZvbnRzLm1pbi5jc3NcIixcbiAgICAgIGFzOiBcInN0eWxlXCIsXG4gICAgICBvbmxvYWQ6IFwidGhpcy5vbmxvYWQ9bnVsbDt0aGlzLnJlbD0nc3R5bGVzaGVldCdcIixcbiAgICB9LFxuICBdLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJjaGFyc2V0XCIsIGNvbnRlbnQ6IFwidXRmLThcIiB9XSxcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwidGhlbWUtY29sb3JcIiwgY29udGVudDogXCIjOWUwMGEzXCIgfV0sXG4gIFtcbiAgICBcIm1ldGFcIixcbiAgICB7IG5hbWU6IFwidmlld3BvcnRcIiwgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIH0sXG4gIF0sXG4gIFtcIm1ldGFcIiwgeyBpdGVtcHJvcDogXCJhY2Nlc3NpYmlsaXR5QVBJXCIsIGNvbnRlbnQ6IFwiQVJJQVwiIH1dLFxuICBbXG4gICAgXCJtZXRhXCIsXG4gICAgeyBpdGVtcHJvcDogXCJhY2Nlc3NpYmlsaXR5Q29udHJvbFwiLCBjb250ZW50OiBcImZ1bGxLZXlib2FyZENvbnRyb2xcIiB9LFxuICBdLFxuICBbXCJtZXRhXCIsIHsgaXRlbXByb3A6IFwiYWNjZXNzaWJpbGl0eUNvbnRyb2xcIiwgY29udGVudDogXCJmdWxsTW91c2VDb250cm9sXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBpdGVtcHJvcDogXCJhY2Nlc3NpYmlsaXR5SGF6YXJkXCIsIGNvbnRlbnQ6IFwibm9GbGFzaGluZ0hhemFyZFwiIH1dLFxuICBbXG4gICAgXCJtZXRhXCIsXG4gICAgeyBpdGVtcHJvcDogXCJhY2Nlc3NpYmlsaXR5SGF6YXJkXCIsIGNvbnRlbnQ6IFwibm9Nb3Rpb25TaW11bGF0aW9uSGF6YXJkXCIgfSxcbiAgXSxcbiAgW1wibWV0YVwiLCB7IGl0ZW1wcm9wOiBcImFjY2Vzc2liaWxpdHlIYXphcmRcIiwgY29udGVudDogXCJub1NvdW5kSGF6YXJkXCIgfV0sXG4gIFtcbiAgICBcIm1ldGFcIixcbiAgICB7XG4gICAgICBcImh0dHAtZXF1aXZcIjogXCJDYWNoZS1Db250cm9sXCIsXG4gICAgICBjb250ZW50OiBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlXCIsXG4gICAgfSxcbiAgXSxcbiAgW1wibWV0YVwiLCB7IFwiaHR0cC1lcXVpdlwiOiBcIlByYWdtYVwiLCBjb250ZW50OiBcIm5vLWNhY2hlXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBcImh0dHAtZXF1aXZcIjogXCJFeHBpcmVzXCIsIGNvbnRlbnQ6IFwiMFwiIH1dLFxuICBbXCJtZXRhXCIsIHsgXCJodHRwLWVxdWl2XCI6IFwiWC1VQS1Db21wYXRpYmxlXCIsIGNvbnRlbnQ6IFwiSUU9ZWRnZVwiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIsIGNvbnRlbnQ6IFwieWVzXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiwgY29udGVudDogXCJibGFja1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiLCBjb250ZW50OiBcIkRvdGZpbGVzXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxpY2F0aW9uLW5hbWVcIiwgY29udGVudDogXCJEb3RmaWxlc1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhdXRob3JcIiwgY29udGVudDogXCJTZWJhc3RpZW4gUm91c3NlYXVcIiB9XSxcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwiZm9ybWF0LWRldGVjdGlvblwiLCBjb250ZW50OiBcInRlbGVwaG9uZT1ub1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJtc2FwcGxpY2F0aW9uLXRhcC1oaWdobGlnaHRcIiwgY29udGVudDogXCJub1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiLCBjb250ZW50OiBcIi9icm93c2VyY29uZmlnLnhtbFwiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJyb2JvdHNcIiwgY29udGVudDogXCJhbGxcIiB9XSxcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwib2c6aW1hZ2U6aGVpZ2h0XCIsIGNvbnRlbnQ6IFwiNjI3XCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcIm9nOmltYWdlOnR5cGVcIiwgY29udGVudDogXCJpbWFnZS9wbmdcIiB9XSxcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwib2c6aW1hZ2U6d2lkdGhcIiwgY29udGVudDogXCIxMjAwXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcIm9nOmltYWdlXCIsIGNvbnRlbnQ6IFwiL2xvZ28ucG5nXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcIm9nOmxvY2FsZVwiLCBjb250ZW50OiBcImVuX0dCXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcIm9nOnJvYm90c1wiLCBjb250ZW50OiBcImFsbFwiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJvZzpzaXRlX25hbWVcIiwgY29udGVudDogXCJEb3RmaWxlc1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJvZzp1cmxcIiwgY29udGVudDogXCJodHRwczovL2RvdGZpbGVzLmlvL1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIiwgY29udGVudDogXCJAd3dkc2ViXCIgfV0sXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6c2l0ZVwiLCBjb250ZW50OiBcIkB3d2RzZWJcIiB9XSxcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjp1cmxcIiwgY29udGVudDogXCJodHRwczovL2RvdGZpbGVzLmlvL1wiIH1dLFxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmltYWdlXCIsIGNvbnRlbnQ6IFwiL2xvZ28ucG5nXCIgfV0sXG4gIFtcbiAgICBcInNjcmlwdFwiLFxuICAgIHt9LFxuICAgIGBcbiAgICAgICAgKGZ1bmN0aW9uKGMsbCxhLHIsaSx0LHkpe1xuICAgICAgICBjW2FdPWNbYV18fGZ1bmN0aW9uKCl7KGNbYV0ucT1jW2FdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9O1xuICAgICAgICB0PWwuY3JlYXRlRWxlbWVudChyKTt0LmFzeW5jPTE7dC5zcmM9XCJodHRwczovL3d3dy5jbGFyaXR5Lm1zL3RhZy9cIitpO1xuICAgICAgICB5PWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUocilbMF07eS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHkpO1xuICAgIH0pKHdpbmRvdywgZG9jdW1lbnQsIFwiY2xhcml0eVwiLCBcInNjcmlwdFwiLCBcImVqdmppbjRhbXVcIik7XG4gICAgYCxcbiAgXSxcbl07XG4iLCAiaW1wb3J0IHsgZW5OYXZiYXIgfSBmcm9tIFwiLi9jb25maWcvbmF2XCI7IC8vIEltcG9ydCBFbmdsaXNoIG5hdmJhclxuaW1wb3J0IHsgZW5TaWRlYmFyIH0gZnJvbSBcIi4vY29uZmlnL3NpZGViYXJcIjsgLy8gSW1wb3J0IEVuZ2xpc2ggc2lkZWJhclxuaW1wb3J0IHsgZnJOYXZiYXIgfSBmcm9tIFwiLi9jb25maWcvbmF2XCI7IC8vIEltcG9ydCBGcmVuY2ggbmF2YmFyXG5pbXBvcnQgeyBmclNpZGViYXIgfSBmcm9tIFwiLi9jb25maWcvc2lkZWJhclwiOyAvLyBJbXBvcnQgRnJlbmNoIHNpZGViYXJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tIFwiLi9jb25maWcvaGVhZFwiOyAvLyBJbXBvcnQgSGVhZGVycyBmb3IgU0VPXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBiYXNlOiBcIi9cIixcbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICBsYW5nOiBcImVuLUdCXCIsXG4gICAgICB0aXRsZTogXCJEb3RmaWxlc1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIG5leHQgZ2VuZXJhdGlvbiBvZiBCYXNoIGNvbmZpZ3VyYXRpb24gZmlsZXMgZm9yIG1hY09TLCBMaW51eCBhbmQgV2luZG93cy4gRmVhdHVyaW5nIGEgTW9kZXJuIENvcmUgKEF0dWluLCBZYXppLCBaZWxsaWopIGFuZCBOYXRpdmUgU1NIIFNlY3VyaXR5LlwiLFxuICAgIH0sXG4gICAgXCIvZnIvXCI6IHtcbiAgICAgIGxhbmc6IFwiZnItRlJcIiwgLy8gRnJlbmNoXG4gICAgICB0aXRsZTogXCJMZXMgRG90ZmlsZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxhIHByb2NoYWluZSBnXHUwMEU5blx1MDBFOXJhdGlvbiBkZSBmaWNoaWVycyBkZSBjb25maWd1cmF0aW9uIEJhc2ggcG91ciBtYWNPUywgTGludXggZXQgV2luZG93cy4gQXZlYyB1biBOb3lhdSBNb2Rlcm5lIChBdHVpbiwgWWF6aSwgWmVsbGlqKSBldCBTXHUwMEU5Y3VyaXRcdTAwRTkgU1NIIE5hdGl2ZS5cIixcbiAgICB9LFxuICB9LFxuICAvLyBFbmFibGUgZXZlcmdyZWVuIGJyb3dzZXJzIHN1cHBvcnRcbiAgZXZlcmdyZWVuOiB0cnVlLFxuICAvLyBIZWFkZXJzIGZvciBTRU9cbiAgaGVhZDogaGVhZGVycyxcbiAgLy8gVGhlbWUgZGVmYXVsdCBjb2xvciBzY2hlbWVcbiAgdGhlbWU6IFwiZGVmYXVsdC1wcmVmZXJzLWNvbG9yLXNjaGVtZVwiLFxuICAvLyBUaGVtZSBjb25maWd1cmF0aW9uXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gU2VhcmNoIGJhciBjb25maWd1cmF0aW9uXG4gICAgc2VhcmNoOiBmYWxzZSxcbiAgICAvLyBMb2dvIGNvbmZpZ3VyYXRpb25cbiAgICBsb2dvOiBcIi9kb3RmaWxlcy53ZWJwXCIsXG4gICAgLy8gVGhlIEdpdEh1YiByZXBvIHBhdGhcbiAgICByZXBvOiBcInNlYmFzdGllbnJvdXNzZWF1L2RvdGZpbGVzLmdpdGh1Yi5pb1wiLFxuICAgIC8vIFRoZSBsYWJlbCBsaW5raW5nIHRvIHRoZSByZXBvXG4gICAgcmVwb0xhYmVsOiBcIkdpdEh1YlwiLFxuICAgIC8vIGlmIHlvdXIgZG9jcyBhcmUgbm90IGF0IHRoZSByb290IG9mIHRoZSByZXBvOlxuICAgIGRvY3NEaXI6IFwiZG9jc1wiLFxuICAgIC8vIGlmIHlvdXIgZG9jcyBhcmUgaW4gYSBzcGVjaWZpYyBicmFuY2ggKGRlZmF1bHRzIHRvICdtYXN0ZXInKTpcbiAgICBkb2NzQnJhbmNoOiBcIm1haW5cIixcbiAgICAvLyBkZWZhdWx0cyB0byBmYWxzZSwgc2V0IHRvIHRydWUgdG8gZW5hYmxlXG4gICAgZWRpdExpbmtzOiB0cnVlLFxuICAgIC8vIGxvY2FsZSBmb3IgZWRpdCBsaW5rIHRleHRcbiAgICBsb2NhbGVzOiB7XG4gICAgICBcIi9cIjoge1xuICAgICAgICAvLyB0ZXh0IGZvciB0aGUgbGFuZ3VhZ2UgZHJvcGRvd25cbiAgICAgICAgc2VsZWN0VGV4dDogXCJMYW5ndWFnZXNcIixcbiAgICAgICAgLy8gQXJpYSBMYWJlbCBmb3IgbG9jYWxlIGluIHRoZSBkcm9wZG93blxuICAgICAgICBhcmlhTGFiZWw6IFwiTGFuZ3VhZ2VzXCIsXG4gICAgICAgIC8vIGxhYmVsIGZvciB0aGlzIGxvY2FsZSBpbiB0aGUgbGFuZ3VhZ2UgZHJvcGRvd25cbiAgICAgICAgbGFiZWw6IFwiRW5nbGlzaFwiLFxuICAgICAgICAvLyBDdXN0b20gdGV4dCBmb3IgZWRpdCBsaW5rLiBEZWZhdWx0cyB0byBcIkVkaXQgdGhpcyBwYWdlXCJcbiAgICAgICAgZWRpdExpbmtUZXh0OiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxuICAgICAgICAvLyBDdXN0b20gbmF2YmFyIHZhbHVlc1xuICAgICAgICBuYXY6IGVuTmF2YmFyLFxuICAgICAgICAvLyBDdXN0b20gc2lkZWJhciB2YWx1ZXNcbiAgICAgICAgc2lkZWJhcjogZW5TaWRlYmFyLFxuICAgICAgfSxcbiAgICAgIFwiL2ZyL1wiOiB7XG4gICAgICAgIC8vIHRleHQgZm9yIHRoZSBsYW5ndWFnZSBkcm9wZG93blxuICAgICAgICBzZWxlY3RUZXh0OiBcIkxhbmd1ZXNcIixcbiAgICAgICAgLy8gQXJpYSBMYWJlbCBmb3IgbG9jYWxlIGluIHRoZSBkcm9wZG93blxuICAgICAgICBhcmlhTGFiZWw6IFwiTGFuZ3Vlc1wiLFxuICAgICAgICAvLyBsYWJlbCBmb3IgdGhpcyBsb2NhbGUgaW4gdGhlIGxhbmd1YWdlIGRyb3Bkb3duXG4gICAgICAgIGxhYmVsOiBcIkZyYW5cdTAwRTdhaXNcIixcbiAgICAgICAgLy8gQ3VzdG9tIHRleHQgZm9yIGVkaXQgbGluay4gRGVmYXVsdHMgdG8gXCJFZGl0IHRoaXMgcGFnZVwiXG4gICAgICAgIGVkaXRMaW5rVGV4dDogXCJcdTAwQzlkaXRleiBjZXR0ZSBwYWdlIHN1ciBHaXRIdWJcIixcbiAgICAgICAgLy8gQ3VzdG9tIG5hdmJhciB2YWx1ZXNcbiAgICAgICAgbmF2OiBmck5hdmJhcixcbiAgICAgICAgLy8gQ3VzdG9tIHNpZGViYXIgdmFsdWVzXG4gICAgICAgIHNpZGViYXI6IGZyU2lkZWJhcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFpbldlYnBhY2s6IChjb25maWc6IGFueSkgPT4ge1xuICAgICAgY29uZmlnLnBsdWdpbihcImh0bWxcIikudGFwKChhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBhcmdzWzBdLm1pbmlmeSA9IHtcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTY3JpcHRUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVRdW90ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBbXG4gICAgICBcIkB2dWVwcmVzcy9nb29nbGUtYW5hbHl0aWNzXCIsXG4gICAgICB7XG4gICAgICAgIGdhOiBcIlVBLTExNjMzOTAxMS0xXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgXCJ2dWVwcmVzcy1wbHVnaW4tc2l0ZW1hcFwiLFxuICAgICAge1xuICAgICAgICBob3N0bmFtZTogXCJodHRwczovL2RvdGZpbGVzLmlvXCIsXG4gICAgICAgIG91dEZpbGU6IFwic2l0ZW1hcC54bWxcIixcbiAgICAgICAgZXhjbHVkZTogW1wiLzQwNC5odG1sXCJdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIFwiQHZ1ZXByZXNzL3B3YVwiLFxuICAgICAge1xuICAgICAgICBzZXJ2aWNlV29ya2VyOiB0cnVlLFxuICAgICAgICB1cGRhdGVQb3B1cDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJ2dWVwcmVzcy1wbHVnaW4tY29kZS1jb3B5XCIsIHRydWVdLFxuICAgIFtcbiAgICAgIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiLFxuICAgICAge1xuICAgICAgICBtaW5pZnk6IHtcbiAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgbWluaWZ5SlM6IHRydWUsXG4gICAgICAgICAgbWluaWZ5VVJMczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVTY3JpcHRUeXBlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVRdW90ZXM6IHRydWUsXG4gICAgICAgICAgcmVtb3ZlRW1wdHlBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIHJlbW92ZVN0eWxlTGlua1R5cGVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBd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
