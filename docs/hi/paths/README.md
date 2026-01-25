---
description: Dotfiles आपकी PATH पदानुक्रम को कैसे प्रबंधित करता है ताकि सही टूल्स सही क्रम में लोड हों।
lang: hi-IN
metaTitle: पाथ - Dotfiles (HI)
permalink: /paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi, shell, configuration, पाथ
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles आपकी PATH पदानुक्रम को कैसे प्रबंधित करता है ताकि सही टूल्स सही क्रम में लोड हों।
  - name: twitter:title
    content: पाथ - Dotfiles
  - name: og:title
    content: पाथ - Dotfiles
  - name: og:description
    content: Dotfiles आपकी PATH पदानुक्रम को कैसे प्रबंधित करता है ताकि सही टूल्स सही क्रम में लोड हों।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# पाथ

मॉड्यूलर `PATH` मैनेजमेंट। सही टूल्स सही क्रम में लोड होना सुनिश्चित करें।

## खोजें

पाथ कॉन्फ़िगरेशन प्राथमिकता-आधारित फाइलों में विभाजित हैं। `chezmoi apply` के दौरान:

1. इस डायरेक्टरी में फाइलें अल्फाबेटिकली स्कैन होती हैं
2. सामग्री `~/.config/shell/paths.sh` में एकत्र होती है
3. स्टार्टअप पर `.zshrc` द्वारा स्रोत किया जाता है

## संदर्भ

| स्क्रिप्ट | विवरण |
|:---|:---|
| `00-default.paths.sh` | बेस सिस्टम पाथ (`/usr/bin`, `/sbin`) और Homebrew। पहले लोड होता है। |
| `99-custom.paths.sh` | कस्टम यूजर पाथ (लैंग्वेज SDKs, लोकल बिन)। प्राथमिकता के लिए अंत में लोड होता है। |

## शुरू करें

### यूजर पाथ जोड़ें

1. `99-custom.paths.sh` एडिट करें या नई फाइल बनाएं (उदा., `50-myproject.paths.sh`)
2. अपना पाथ जोड़ें:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. परिवर्तन लागू करें:
   ```bash
   chezmoi apply
   ```
4. सत्यापित करें:
   ```bash
   echo $PATH
   ```
