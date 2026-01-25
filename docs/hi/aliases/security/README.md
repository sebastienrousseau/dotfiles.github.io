---
description: फाइल इम्यूटेबिलिटी और कॉन्फ़िगरेशन प्रोटेक्शन के लिए सुरक्षा एलियास। क्रिटिकल शेल फाइलें लॉक और अनलॉक करें।
lang: hi-IN
metaTitle: Security एलियास - Dotfiles (HI)
permalink: /aliases/security/
sidebar: true

meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: फाइल इम्यूटेबिलिटी और कॉन्फ़िगरेशन प्रोटेक्शन के लिए सुरक्षा एलियास।
  - name: twitter:title
    content: Security एलियास - Dotfiles
  - name: og:title
    content: Security एलियास - Dotfiles
  - name: og:description
    content: फाइल इम्यूटेबिलिटी और कॉन्फ़िगरेशन प्रोटेक्शन के लिए सुरक्षा एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Security एलियास

इम्यूटेबिलिटी कंट्रोल के साथ क्रिटिकल कॉन्फ़िगरेशन फाइलों की सुरक्षा करें।

## अवलोकन

ये एलियास `security.aliases.sh` में परिभाषित हैं और Chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

### इम्यूटेबिलिटी

| एलियास | विवरण |
|:---|:---|
| `lock-configs` | मॉडिफिकेशन रोकने के लिए क्रिटिकल फाइलें लॉक करें |
| `unlock-configs` | एडिटिंग के लिए क्रिटिकल फाइलें अनलॉक करें |
| `check-locks` | क्रिटिकल फाइलों की लॉक स्थिति जांचें |
