import { enNavbar, frNavbar } from "./config/nav";
import { enSidebar, frSidebar } from "./config/sidebar";
import { esNavbar } from "./config/nav/es";
import { esSidebar } from "./config/sidebar/es";
import { deNavbar } from "./config/nav/de";
import { deSidebar } from "./config/sidebar/de";
import { zhNavbar } from "./config/nav/zh";
import { zhSidebar } from "./config/sidebar/zh";
import { ptNavbar } from "./config/nav/pt";
import { ptSidebar } from "./config/sidebar/pt";
import { jaNavbar } from "./config/nav/ja";
import { jaSidebar } from "./config/sidebar/ja";
import { koNavbar } from "./config/nav/ko";
import { koSidebar } from "./config/sidebar/ko";
import { ruNavbar } from "./config/nav/ru";
import { ruSidebar } from "./config/sidebar/ru";
import { itNavbar } from "./config/nav/it";
import { itSidebar } from "./config/sidebar/it";
import { arNavbar } from "./config/nav/ar";
import { arSidebar } from "./config/sidebar/ar";
import { heNavbar } from "./config/nav/he";
import { heSidebar } from "./config/sidebar/he";
import { hiNavbar } from "./config/nav/hi";
import { hiSidebar } from "./config/sidebar/hi";
import { nlNavbar } from "./config/nav/nl";
import { nlSidebar } from "./config/sidebar/nl";
import { idNavbar } from "./config/nav/id";
import { idSidebar } from "./config/sidebar/id";
import { headers } from "./config/head"; // Import Headers for SEO

module.exports = {
  base: "/",
  locales: {
    // Sorted alphabetically by display label
    "/ar/": {
      lang: "ar-SA",
      title: "Dotfiles",
      description:
        "الجيل القادم من ملفات تكوين Bash لنظام macOS و Linux و Windows.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Dotfiles",
      description: "适用于 macOS、Linux 和 Windows 的下一代 Bash 配置文件。",
    },
    "/nl/": {
      lang: "nl-NL",
      title: "Dotfiles",
      description:
        "De volgende generatie Bash-configuratiebestanden voor macOS, Linux en Windows.",
    },
    "/": {
      lang: "en-GB",
      title: "Dotfiles",
      description:
        "The next generation of Bash configuration files for macOS, Linux and Windows. Featuring a Modern Core (Atuin, Yazi, Zellij) and Native SSH Security.",
    },
    "/es/": {
      lang: "es-ES",
      title: "Dotfiles",
      description:
        "La próxima generación de archivos de configuración Bash para macOS, Linux y Windows.",
    },
    "/fr/": {
      lang: "fr-FR", // French
      title: "Les Dotfiles",
      description:
        "La prochaine génération de fichiers de configuration Bash pour macOS, Linux et Windows. Avec un Noyau Moderne (Atuin, Yazi, Zellij) et Sécurité SSH Native.",
    },
    "/de/": {
      lang: "de-DE",
      title: "Dotfiles",
      description:
        "Die nächste Generation von Bash-Konfigurationsdateien für macOS, Linux und Windows.",
    },
    "/he/": {
      lang: "he-IL",
      title: "Dotfiles",
      description:
        "הדור הבא של קבצי תצורת Bash עבור macOS, Linux ו-Windows.",
    },
    "/hi/": {
      lang: "hi-IN",
      title: "Dotfiles",
      description:
        "macOS, Linux और Windows के लिए Bash कॉन्फ़िगरेशन फ़ाइलों की अगली पीढ़ी।",
    },
    "/id/": {
      lang: "id-ID",
      title: "Dotfiles",
      description:
        "Generasi baru file konfigurasi Bash untuk macOS, Linux, dan Windows.",
    },
    "/it/": {
      lang: "it-IT",
      title: "Dotfiles",
      description:
        "La prossima generazione di file di configurazione Bash per macOS, Linux e Windows.",
    },
    "/ja/": {
      lang: "ja-JP",
      title: "Dotfiles",
      description:
        "macOS、Linux、Windows向けの次世代Bash設定ファイル。",
    },
    "/ko/": {
      lang: "ko-KR",
      title: "Dotfiles",
      description:
        "macOS, Linux, Windows를 위한 차세대 Bash 구성 파일.",
    },
    "/pt/": {
      lang: "pt-BR",
      title: "Dotfiles",
      description:
        "A próxima geração de arquivos de configuração Bash para macOS, Linux e Windows.",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Dotfiles",
      description:
        "Конфигурационные файлы Bash нового поколения для macOS, Linux и Windows.",
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
      // Sorted alphabetically by display label
      "/ar/": {
        selectText: "اللغات",
        ariaLabel: "اللغات",
        label: "🇸🇦 العربية",
        editLinkText: "تحرير هذه الصفحة على GitHub",
        nav: arNavbar,
        sidebar: arSidebar,
      },
      "/zh/": {
        selectText: "语言",
        ariaLabel: "语言",
        label: "🇨🇳 简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        nav: zhNavbar,
        sidebar: zhSidebar,
      },
      "/nl/": {
        selectText: "Talen",
        ariaLabel: "Talen",
        label: "🇳🇱 Nederlands",
        editLinkText: "Bewerk deze pagina op GitHub",
        nav: nlNavbar,
        sidebar: nlSidebar,
      },
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // Aria Label for locale in the dropdown
        ariaLabel: "Languages",
        // label for this locale in the language dropdown
        label: "🇬🇧 English",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Edit this page on GitHub",
        // Custom navbar values
        nav: enNavbar,
        // Custom sidebar values
        sidebar: enSidebar,
      },
      "/es/": {
        selectText: "Idiomas",
        ariaLabel: "Idiomas",
        label: "🇪🇸 Español",
        editLinkText: "Editar esta página en GitHub",
        nav: esNavbar,
        sidebar: esSidebar,
      },
      "/fr/": {
        // text for the language dropdown
        selectText: "Langues",
        // Aria Label for locale in the dropdown
        ariaLabel: "Langues",
        // label for this locale in the language dropdown
        label: "🇫🇷 Français",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Éditez cette page sur GitHub",
        // Custom navbar values
        nav: frNavbar,
        // Custom sidebar values
        sidebar: frSidebar,
      },
      "/de/": {
        selectText: "Sprachen",
        ariaLabel: "Sprachen",
        label: "🇩🇪 Deutsch",
        editLinkText: "Bearbeiten Sie diese Seite auf GitHub",
        nav: deNavbar,
        sidebar: deSidebar,
      },
      "/he/": {
        selectText: "שפות",
        ariaLabel: "שפות",
        label: "🇮🇱 עברית",
        editLinkText: "ערוך דף זה ב-GitHub",
        nav: heNavbar,
        sidebar: heSidebar,
      },
      "/hi/": {
        selectText: "भाषाएं",
        ariaLabel: "भाषाएं",
        label: "🇮🇳 हिंदी",
        editLinkText: "इस पृष्ठ को GitHub पर संपादित करें",
        nav: hiNavbar,
        sidebar: hiSidebar,
      },
      "/id/": {
        selectText: "Bahasa",
        ariaLabel: "Bahasa",
        label: "🇮🇩 Bahasa Indonesia",
        editLinkText: "Edit halaman ini di GitHub",
        nav: idNavbar,
        sidebar: idSidebar,
      },
      "/it/": {
        selectText: "Lingue",
        ariaLabel: "Lingue",
        label: "🇮🇹 Italiano",
        editLinkText: "Modifica questa pagina su GitHub",
        nav: itNavbar,
        sidebar: itSidebar,
      },
      "/ja/": {
        selectText: "言語",
        ariaLabel: "言語",
        label: "🇯🇵 日本語",
        editLinkText: "GitHub でこのページを編集",
        nav: jaNavbar,
        sidebar: jaSidebar,
      },
      "/ko/": {
        selectText: "언어",
        ariaLabel: "언어",
        label: "🇰🇷 한국어",
        editLinkText: "GitHub에서 이 페이지 편집",
        nav: koNavbar,
        sidebar: koSidebar,
      },
      "/pt/": {
        selectText: "Idiomas",
        ariaLabel: "Idiomas",
        label: "🇧🇷 Português",
        editLinkText: "Editar esta página no GitHub",
        nav: ptNavbar,
        sidebar: ptSidebar,
      },
      "/ru/": {
        selectText: "Языки",
        ariaLabel: "Языки",
        label: "🇷🇺 Русский",
        editLinkText: "Редактировать эту страницу на GitHub",
        nav: ruNavbar,
        sidebar: ruSidebar,
      },
    },
    chainWebpack: (
      // @ts-expect-error: suppress implicit any for webpack config
      config,
    ) => {
      config.plugin("html").tap(
        (
          // @ts-expect-error: suppress implicit any for html plugin args
          args,
        ) => {
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
        },
      );
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
