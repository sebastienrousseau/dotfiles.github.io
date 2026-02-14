---
description: Chezmoi द्वारा प्रबंधित अगली पीढ़ी की शेल कॉन्फ़िगरेशन। उच्च प्रदर्शन, सुरक्षित, और AI-नेटिव।
lang: hi-IN
metaTitle: Dotfiles के बारे में - Dotfiles (HI)
permalink: /about/

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

Dotfiles v0.2.481 आपके टर्मिनल को एक शक्तिशाली, एकीकृत कार्यक्षेत्र में बदल देता है। जटिल Makefiles या symlink स्क्रिप्ट्स पर निर्भर पुरानी dotfiles के विपरीत, Dotfiles एक टेम्पलेट-आधारित दृष्टिकोण का उपयोग करता है जो एटॉमिक, तेज़, और पुनरुत्पादन योग्य है।

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
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

## योगदान करें

समुदाय में शामिल हों। हमारी [आचार संहिता][code-of-conduct-url] और [योगदान दिशानिर्देश][contributing-url] देखें।

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
