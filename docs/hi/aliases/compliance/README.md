---
title: "Compliance एलियास: गोपनीयता और ऑडिट नियंत्रण"
description: "आपके टर्मिनल एनवायरनमेंट में नियामक अनुपालन, गोपनीयता प्रवर्तन, और कॉन्फ़िगरेशन ऑडिटिंग के लिए शेल एलियास।"
lang: hi-IN
metaTitle: "Compliance एलियास | Dotfiles"
permalink: /aliases/compliance/
sidebar: true
meta:
  - name: keywords
    content: "compliance aliases, privacy mode, telemetry disable, audit trail, dotfiles, shell"
  - name: og:locale
    content: hi_IN
---

# Compliance एलियास

नियामक अनुपालन और गोपनीयता प्रवर्तन के लिए शेल टूल्स।

## अवलोकन

Compliance एलियास आपके शेल एनवायरनमेंट में गोपनीयता प्रबंधन और ऑडिट ट्रेल बनाए रखने के लिए आवश्यक नियंत्रण प्रदान करते हैं। ये एलियास सामान्य CLI टूल्स में टेलीमेट्री अक्षम करने और अनुपालन आवश्यकताओं के लिए कॉन्फ़िगरेशन परिवर्तनों को ट्रैक करने में मदद करते हैं।

## संदर्भ

### नियंत्रण

| एलियास | विवरण |
|-------|-------------|
| `privacy-mode` | वर्तमान सेशन के लिए CLI टूल्स (Homebrew, Dotnet, Azure, आदि) के लिए टेलीमेट्री अक्षम करता है। |
| `dot-audit` | हाल के कॉन्फ़िगरेशन ऑडिट ट्रेल (Git हिस्ट्री या ऑडिट लॉग) दिखाता है। |
