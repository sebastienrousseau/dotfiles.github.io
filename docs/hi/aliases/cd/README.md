---
description: बुकमार्क्स, हिस्ट्री ट्रैकिंग, और स्मार्ट शॉर्टकट के साथ डायरेक्टरी नेविगेशन एलियास। अपने फाइल सिस्टम को तेज़ी से नेविगेट करें।
lang: hi-IN
metaTitle: CD एलियास - Dotfiles (HI)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: बुकमार्क्स, हिस्ट्री ट्रैकिंग, और स्मार्ट शॉर्टकट के साथ डायरेक्टरी नेविगेशन एलियास।
  - name: twitter:title
    content: CD एलियास - Dotfiles
  - name: og:title
    content: CD एलियास - Dotfiles
  - name: og:description
    content: बुकमार्क्स, हिस्ट्री ट्रैकिंग, और स्मार्ट शॉर्टकट के साथ डायरेक्टरी नेविगेशन एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# CD एलियास

अपने फाइल सिस्टम को तेज़ी से नेविगेट करें। बुकमार्क्स, हिस्ट्री, और स्मार्ट शॉर्टकट।

## अवलोकन

ये एलियास `cd.aliases.sh` में परिभाषित हैं और Chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

### नेविगेशन शॉर्टकट

| एलियास | विवरण |
|:---|:---|
| `-` | पिछली डायरेक्टरी पर स्विच करें |
| `..` | एक लेवल ऊपर जाएं |
| `...` | दो लेवल ऊपर जाएं |
| `....` | तीन लेवल ऊपर जाएं |
| `.....` | चार लेवल ऊपर जाएं |
| `hom` | होम डायरेक्टरी पर नेविगेट करें |

### डायरेक्टरी शॉर्टकट

| एलियास | पाथ | विवरण |
|:---|:---|:---|
| `app` | `~/Applications` | एप्लीकेशन |
| `cod` | `~/Code` | कोड डायरेक्टरी |
| `dsk` | `~/Desktop` | डेस्कटॉप |
| `doc` | `~/Documents` | डॉक्यूमेंट्स |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | डाउनलोड्स |
| `mus` | `~/Music` | म्यूज़िक |
| `pic` | `~/Pictures` | पिक्चर्स |
| `vid` | `~/Videos` | वीडियोज़ |

### सिस्टम डायरेक्टरी

| एलियास | पाथ | विवरण |
|:---|:---|:---|
| `etc` | `/etc` | सिस्टम कॉन्फ़िगरेशन |
| `var` | `/var` | वेरिएबल फाइलें |
| `tmp` | `/tmp` | टेम्पोरेरी फाइलें |
| `usr` | `/usr` | यूजर प्रोग्राम |

### बुकमार्क्स

| कमांड | एलियास | विवरण |
|:---|:---|:---|
| `bookmark [name]` | `bm` | बुकमार्क बनाएं |
| `bookmark_list` | `bml` | बुकमार्क्स सूची |
| `bookmark_update` | `bmu` | बुकमार्क अपडेट करें |
| `bookmark_remove` | `bmr` | बुकमार्क हटाएं |
| `goto <name>` | `bmg` | बुकमार्क पर जाएं |

```bash
bm work-project      # बुकमार्क बनाएं
bmg work-project     # बुकमार्क पर नेविगेट करें
bml                  # सभी बुकमार्क्स सूची
```

### हिस्ट्री

| कमांड | एलियास | विवरण |
|:---|:---|:---|
| `dirhistory` | `dh` | डायरेक्टरी हिस्ट्री दिखाएं |
| `lwd` | `ld` | अंतिम डायरेक्टरी पर लौटें |

### एडवांस्ड

| कमांड | एलियास | विवरण |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | डायरेक्टरी बनाएं और उसमें जाएं |
| `proj` | `pr` | प्रोजेक्ट रूट पर जाएं |
| `pushd` | `pd` | डायरेक्टरी को स्टैक में पुश करें |
| `popd` | — | स्टैक से पॉप करें |
| `dirs` | — | डायरेक्टरी स्टैक सूची |

## कॉन्फ़िगरेशन

एनवायरनमेंट वेरिएबल्स के साथ व्यवहार कस्टमाइज़ करें:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## सहायता

सभी कमांड देखने के लिए `cdhelp` चलाएं या वर्जन जानकारी के लिए `cdversion`।
