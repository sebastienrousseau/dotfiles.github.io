---
title: Dotfiles के बारे में
description: Chezmoi द्वारा प्रबंधित अगली पीढ़ी की शेल कॉन्फ़िगरेशन। उच्च प्रदर्शन, सुरक्षित, और AI-नेटिव। macOS, Linux और WSL पर Dotfiles के माध्यम से संगत।
lang: hi-IN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dotfiles के बारे में preview
canonical: /hi/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Dotfiles के बारे में
pageType: docs
schemaType: WebPage
metaTitle: Dotfiles के बारे में - Dotfiles (HI)
permalink: /hi/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, कॉन्फ़िगरेशन, ऑटोमेशन, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Chezmoi द्वारा प्रबंधित अगली पीढ़ी की शेल कॉन्फ़िगरेशन। उच्च प्रदर्शन, सुरक्षित, और AI-नेटिव।
  - name: twitter:title
    content: Dotfiles के बारे में
  - name: og:title
    content: Dotfiles के बारे में
  - name: og:description
    content: Chezmoi द्वारा प्रबंधित अगली पीढ़ी की शेल कॉन्फ़िगरेशन। उच्च प्रदर्शन, सुरक्षित, और AI-नेटिव।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Dotfiles के बारे में

शेल कॉन्फ़िगरेशन के लिए आधुनिक मानक। सुरक्षित, क्रॉस-प्लेटफ़ॉर्म एनवायरनमेंट मैनेजमेंट के लिए **Chezmoi** पर निर्मित।

## खोजें

Dotfiles v0.2.495 आपके टर्मिनल को एक शक्तिशाली, एकीकृत कार्यक्षेत्र में बदल देता है। जटिल Makefiles या symlink स्क्रिप्ट्स पर निर्भर पुरानी dotfiles के विपरीत, Dotfiles एक टेम्पलेट-आधारित दृष्टिकोण का उपयोग करता है जो एटॉमिक, तेज़, और पुनरुत्पादन योग्य है।

### नया क्या है

- **आधुनिक कोर** — उच्च-प्रदर्शन Rust विकल्प पुराने Unix टूल्स को रिप्लेस करते हैं:
  - **Atuin** शेल इतिहास के लिए
  - **Yazi** फाइल मैनेजमेंट के लिए
  - **Zellij** टर्मिनल मल्टीप्लेक्सिंग के लिए
  - **Ghostty** GPU-एक्सेलेरेटेड टर्मिनल के लिए
  - **NeoVim** आधुनिक एडिटिंग के लिए
- **नेटिव सुरक्षा** — थर्ड-पार्टी एजेंट्स के बिना पूर्ण नेटिव SSH साइनिंग
- **इंटरैक्टिव मोड** — नया `dot learn` कमांड आपको फीचर्स के माध्यम से गाइड करता है

## शुरू करें

### आवश्यकताएं

- **macOS**, **Linux (Ubuntu/Debian)**, या **Windows (WSL)**
- **Curl** और **Git**
- **Chezmoi** (स्वचालित रूप से इंस्टॉल)
- **Nerd Font** (टर्मिनल आइकन के लिए)

### इंस्टॉल करें

संपूर्ण सूट इंस्टॉल करने के लिए एक कमांड चलाएं:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

इंस्टॉलर:

1. `chezmoi` बाइनरी इंस्टॉल करेगा
2. रिपॉजिटरी क्लोन करेगा
3. Homebrew (macOS) या Apt (Linux) के माध्यम से आवश्यक पैकेज इंस्टॉल करेगा
4. आपकी कॉन्फ़िगरेशन लागू करेगा

### एक्सप्लोर करें

इंस्टॉलेशन के बाद, अपना टर्मिनल पुनः आरंभ करें और चलाएं:

```bash
dot learn
```

यह आपके नए एनवायरनमेंट का एक इंटरैक्टिव टूर शुरू करता है।

## अनुकूलित करें

आपकी कॉन्फ़िगरेशन `~/.local/share/chezmoi` में है:

```
~/.local/share/chezmoi
├── dot_zshenv              # शेल एंट्री पॉइंट
├── dot_config/             # XDG बेस कॉन्फिग (~/.config)
│   ├── atuin/              # शेल इतिहास
│   ├── ghostty/            # टर्मिनल एमुलेटर
│   ├── git/                # Git कॉन्फ़िगरेशन
│   ├── yazi/               # फाइल मैनेजर
│   ├── zellij/             # टर्मिनल मल्टीप्लेक्सर
│   ├── zsh/                # Zsh कॉन्फ़िगरेशन
│   └── shell/              # साझा एलियास और पाथ
├── provision/              # लाइफसाइकिल स्क्रिप्ट्स
├── install.sh              # यूनिवर्सल इंस्टॉलर
└── docs/                   # डॉक्यूमेंटेशन
```

## मुख्य कमांड

`dot` CLI 53 कमांड को श्रेणी के अनुसार प्रदान करता है।

### कोर

- `dot apply` — कॉन्फ़िगरेशन परिवर्तन लागू करता है.
- `dot sync` — नवीनतम रिपॉजिटरी स्थिति प्राप्त करता है और लागू करता है.
- `dot update` — रिपॉजिटरी अपडेट करता है और कैश को वार्म करता है.
- `dot add` — Chezmoi स्रोत में नई फ़ाइलें जोड़ता है.
- `dot diff` — लागू करने से पहले लंबित परिवर्तन दिखाता है.
- `dot status` — प्रबंधित फ़ाइलों की स्थिति दिखाता है.
- `dot remove` — फ़ाइल को प्रबंधन से हटाता है और स्रोत प्रविष्टि मिटाता है.
- `dot cd` — Chezmoi स्रोत निर्देशिका में Shell खोलता है.
- `dot edit` — प्रबंधित फ़ाइल को आपके संपादक में खोलता है.
- `dot clean-cache` — अस्थायी कैश साफ़ करता है.
- `dot prewarm` — तेज़ Shell स्टार्टअप के लिए कैश पहले से भरता है.

### निदान

- `dot doctor` — पथ, उपकरण और Shell स्थिति को सत्यापित करता है.
- `dot heal` — गुम या टूटी स्थिति को स्वचालित रूप से ठीक करता है.
- `dot health` — हल्का स्वास्थ्य जांच चलाता है.
- `dot verify` — स्रोत के विरुद्ध फ़ाइल अखंडता जांचता है.
- `dot scorecard` — कॉन्फ़िगरेशन गुणवत्ता स्कोर प्रिंट करता है.
- `dot snapshot` — बाद की तुलना के लिए वर्तमान स्थिति कैप्चर करता है.
- `dot smoke-test` — कोर टूलचेन को शुरू से अंत तक सत्यापित करता है.
- `dot chaos` — स्व-उपचार परीक्षण के लिए दोष इंजेक्ट करता है.
- `dot bundle` — पोर्टेबल कॉन्फ़िगरेशन बंडल निर्यात करता है.
- `dot rollback` — पिछले स्नैपशॉट पर वापस जाता है.
- `dot drift` — प्रबंधित फ़ाइलों में अप्रत्याशित परिवर्तन का पता लगाता है.
- `dot history` — apply/sync इतिहास लॉग दिखाता है.
- `dot benchmark` — Shell स्टार्टअप समय मापता है.
- `dot perf` — धीमी Shell आरंभीकरण को प्रोफ़ाइल करता है.

### दिखावट

- `dot theme` — टर्मिनल रंग योजना बदलता है.
- `dot wallpaper` — डेस्कटॉप वॉलपेपर सेट करता है (macOS).
- `dot fonts` — Nerd Fonts इंस्टॉल या अपडेट करता है.
- `dot tune` — UI घनत्व और प्रॉम्प्ट शैली समायोजित करता है.

### सुरक्षा

- `dot backup` — एन्क्रिप्टेड कॉन्फ़िगरेशन बैकअप बनाता है.
- `dot encrypt-check` — स्थिर अवस्था में गोपनीय एन्क्रिप्शन सत्यापित करता है.
- `dot firewall` — होस्ट फ़ायरवॉल नियम कॉन्फ़िगर करता है.
- `dot telemetry` — अनाम उपयोग टेलीमेट्री नियंत्रित करता है.
- `dot dns-doh` — DNS-over-HTTPS सक्षम करता है.
- `dot lock-screen` — स्क्रीन तुरंत लॉक करता है.
- `dot usb-safety` — USB मास-स्टोरेज ऑटो-माउंट प्रतिबंधित करता है.

### गोपनीय

- `dot secrets-init` — गोपनीय बैकएंड आरंभ करता है (age / GPG).
- `dot secrets` — एन्क्रिप्टेड गोपनीय प्रविष्टियाँ सूचीबद्ध करता है.
- `dot secrets-create` — नया एन्क्रिप्टेड गोपनीय बनाता है.
- `dot ssh-key` — SSH कुंजी जोड़े उत्पन्न या रोटेट करता है.
- `dot ssh-cert` — CA से SSH प्रमाणपत्र का अनुरोध करता है.

### AI

- `dot ai` — इंटरैक्टिव AI सहायक सत्र खोलता है.
- `dot ai-setup` — AI प्रदाताओं के लिए API कुंजियाँ कॉन्फ़िगर करता है.
- `dot ai-query` — AI मॉडल को एक-शॉट प्रॉम्प्ट भेजता है.
- AI उपकरण रैपर: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### उपकरण

- `dot tools` — बंडल किए गए CLI प्रतिस्थापन और उनकी स्थिति सूचीबद्ध करता है.
- `dot new` — नई एलियास या फ़ंक्शन फ़ाइल बनाता है.
- `dot sandbox` — डिस्पोज़ेबल सैंडबॉक्स Shell खोलता है.
- `dot keys` — वर्तमान की बाइंडिंग दिखाता है.
- `dot learn` — इंटरैक्टिव ट्यूटोरियल शुरू करता है.

### मेटा

- `dot upgrade` — Dotfiles को नवीनतम रिलीज़ में अपग्रेड करता है.
- `dot packages` — Dotfiles द्वारा प्रबंधित इंस्टॉल किए गए पैकेज सूचीबद्ध करता है.
- `dot version` / `dot help` — संस्करण या उपयोग जानकारी प्रिंट करता है

## योगदान करें

समुदाय में शामिल हों। हमारी [आचार संहिता][code-of-conduct-url] और [योगदान दिशानिर्देश][contributing-url] देखें।

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
