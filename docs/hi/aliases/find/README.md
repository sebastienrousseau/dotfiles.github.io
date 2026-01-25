---
title: "Find एलियास: तेज़ फाइल सर्च कमांड"
description: "fd-आधारित एलियास के साथ फाइल सर्च को सुव्यवस्थित करें। Unix सिस्टम के लिए तेज़, रंगीन आउटपुट और सहज कमांड।"
lang: hi-IN
metaTitle: "Find एलियास | Dotfiles"
permalink: /aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "find aliases, fd command, file search, shell aliases, dotfiles, unix find"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Find एलियास | Dotfiles
  - name: twitter:description
    content: fd-आधारित एलियास के साथ फाइल सर्च को सुव्यवस्थित करें।
  - name: og:title
    content: Find एलियास | Dotfiles
  - name: og:description
    content: fd-आधारित एलियास के साथ फाइल सर्च को सुव्यवस्थित करें।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Find एलियास

fd का उपयोग करते हुए शक्तिशाली फाइल सर्च शॉर्टकट, find का आधुनिक विकल्प।

## अवलोकन

ये एलियास `fd` के लिए एक सुव्यवस्थित इंटरफेस प्रदान करते हैं, पारंपरिक `find` कमांड का तेज़ और उपयोगकर्ता-अनुकूल विकल्प। `find.aliases.sh` में परिभाषित, वे chezmoi द्वारा स्वचालित रूप से लोड होते हैं और सामान्य फाइल सर्च ऑपरेशन के लिए रंगीन आउटपुट, सहज सिंटैक्स, और याद रखने योग्य कमांड प्रदान करते हैं।

जब आपके सिस्टम पर `fd` उपलब्ध है, तो `find` कमांड स्वचालित रूप से `fd` का उपयोग करने के लिए एलियास हो जाता है।

## संदर्भ

### कोर कमांड

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `fd` | `fd --color always` | रंगीन आउटपुट के साथ फाइलें खोजें |
| `find` | `fd` | fd को डिफ़ॉल्ट find रिप्लेसमेंट के रूप में उपयोग करें |

### सर्च ऑप्शन

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | पूर्ण पाथ के साथ परिणाम प्रदर्शित करें |
| `fdc` | `fd --ignore-case` | केस-इनसेंसिटिव सर्च करें |
| `fdd` | `fd --list-details` | विस्तृत फाइल जानकारी दिखाएं |
| `fde` | `fd --extension` | फाइल एक्सटेंशन द्वारा फ़िल्टर करें |
| `fdf` | `fd --follow` | सर्च के दौरान symbolic links फॉलो करें |
| `fdh` | `fd --hidden` | परिणामों में छिपी फाइलें शामिल करें |
| `fdn` | `fd --glob` | glob पैटर्न का उपयोग करके फाइलें मैच करें |
| `fdo` | `fd --owner` | फाइल ओनर द्वारा फ़िल्टर करें |
| `fds` | `fd --size` | फाइल साइज़ द्वारा फ़िल्टर करें |
| `fdu` | `fd --exclude` | पैटर्न मैच करने वाली फाइलें बाहर करें |
| `fdx` | `fd --exec` | प्रत्येक परिणाम के लिए कमांड एक्ज़ीक्यूट करें |
