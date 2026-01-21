// @ts-ignore
export const headers: any[] = [
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
  ["link", { rel: "mask-icon", href: "/icons/dotfiles.svg", color: "#ffffff" }],
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
  ["meta", { itemprop: "accessibilityControl", content: "fullMouseControl" }],
  ["meta", { itemprop: "accessibilityHazard", content: "noFlashingHazard" }],
  [
    "meta",
    { itemprop: "accessibilityHazard", content: "noMotionSimulationHazard" },
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
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
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
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "ejvjin4amu");
`,
  ],
  [
    "script",
    { type: "application/ld+json" },
    `
{
  "@context": "https://schema.org",
    "@type": "WebSite",
      "name": "Dotfiles",
        "url": "https://dotfiles.io/",
          "potentialAction": {
    "@type": "SearchAction",
      "target": "https://dotfiles.io/?q={search_term_string}",
        "query-input": "required name=search_term_string"
  }
}
`,
  ],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
];
