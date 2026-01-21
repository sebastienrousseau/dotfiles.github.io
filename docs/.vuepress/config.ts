import { enNavbar } from "./config/nav"; // Import English navbar
import { enSidebar } from "./config/sidebar"; // Import English sidebar
import { frNavbar } from "./config/nav"; // Import French navbar
import { frSidebar } from "./config/sidebar"; // Import French sidebar
import { headers } from "./config/head"; // Import Headers for SEO

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
      lang: "fr-FR", // French
      title: "Les Dotfiles",
      description:
        "La prochaine génération de fichiers de configuration Bash pour macOS, Linux et Windows. Avec un Noyau Moderne (Atuin, Yazi, Zellij) et Sécurité SSH Native.",
    },
  },
  // Enable evergreen browsers support
  evergreen: true,
  // Headers for SEO
  head: headers,
  // Theme default color scheme
  theme: "default-prefers-color-scheme",
  // Theme configuration
  themeConfig: {
    // Search bar configuration
    search: false,
    // Logo configuration
    logo: "/dotfiles.webp",
    // The GitHub repo path
    repo: "sebastienrousseau/dotfiles.github.io",
    // The label linking to the repo
    repoLabel: "GitHub",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",
    // defaults to false, set to true to enable
    editLinks: true,
    // locale for edit link text
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // Aria Label for locale in the dropdown
        ariaLabel: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Edit this page on GitHub",
        // Custom navbar values
        nav: enNavbar,
        // Custom sidebar values
        sidebar: enSidebar,
      },
      "/fr/": {
        // text for the language dropdown
        selectText: "Langues",
        // Aria Label for locale in the dropdown
        ariaLabel: "Langues",
        // label for this locale in the language dropdown
        label: "Français",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Éditez cette page sur GitHub",
        // Custom navbar values
        nav: frNavbar,
        // Custom sidebar values
        sidebar: frSidebar,
      },
    },
    chainWebpack: (config: any) => {
      config.plugin("html").tap((args: any[]) => {
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
