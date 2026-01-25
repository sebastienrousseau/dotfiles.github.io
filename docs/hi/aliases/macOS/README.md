---
title: "macOS एलियास: Mac के लिए शेल शॉर्टकट"
description: "Dotfiles में macOS सिस्टम मैनेजमेंट, Finder कंट्रोल, और मेंटेनेंस कार्यों के लिए शेल एलियास।"
lang: hi-IN
metaTitle: "macOS एलियास | Dotfiles"
permalink: /aliases/macOS/
sidebar: true
meta:
  - name: keywords
    content: "macOS aliases, shell shortcuts, Finder aliases, Mac terminal, dotfiles"
  - name: og:locale
    content: hi_IN
---

# macOS एलियास

macOS सिस्टम मैनेजमेंट और मेंटेनेंस के लिए शेल शॉर्टकट।

## अवलोकन

ये एलियास `macOS.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं। वे Finder कंट्रोल, सिस्टम मेंटेनेंस, और डेवलपर टूल्स सहित सामान्य macOS ऑपरेशन तक त्वरित पहुंच प्रदान करते हैं।

## संदर्भ

### सिस्टम मैनेजमेंट

| एलियास | विवरण |
|-------|-------------|
| `lockScreen` | स्क्रीन लॉक करें |
| `wifiOn` | Wi-Fi चालू करें |
| `wifiOff` | Wi-Fi बंद करें |
| `vp` | macOS अनुमतियां वेरिफाई करें |
| `vv` | macOS वॉल्यूम वेरिफाई करें |

### Finder

| एलियास | विवरण |
|-------|-------------|
| `ofd` | वर्तमान डायरेक्टरी को Finder में खोलें |
| `finderShowHidden` | Finder में छिपी फाइलें दिखाएं |
| `finderHideHidden` | Finder में छिपी फाइलें छिपाएं |
| `showDesktopIcons` | Desktop पर सभी आइकन दिखाएं |
| `hideDesktopIcons` | Desktop पर सभी आइकन छिपाएं |

### क्लीनअप

| एलियास | विवरण |
|-------|-------------|
| `clds` | .DS_Store फाइलें रिकर्सिवली हटाएं |
| `clls` | Open With मेनू में डुप्लीकेट हटाने के लिए LaunchServices साफ करें |
| `trash` | सभी माउंटेड वॉल्यूम और मुख्य HDD पर Trash खाली करें |

### डेवलपर टूल्स

| एलियास | विवरण |
|-------|-------------|
| `xcode` | Xcode लॉन्च करें |
| `purge` | Xcode DerivedData पर्ज करें |
| `iphone` | डिवाइस सिमुलेटर खोलें |
| `safariSafeMode` | Safari को Safe Mode में लॉन्च करें |

### डिस्प्ले

| एलियास | विवरण |
|-------|-------------|
| `screensaverDesktop` | Desktop पर स्क्रीनसेवर चलाएं |
