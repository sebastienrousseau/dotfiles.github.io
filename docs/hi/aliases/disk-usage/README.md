---
title: "Disk Usage एलियास: शेल कमांड से स्टोरेज मॉनिटर करें"
description: "डिस्क उपयोग मॉनिटरिंग के लिए शेल एलियास। फाइल साइज़ प्रदर्शित करें, बड़ी डायरेक्टरी खोजें, और स्टोरेज कुशलता से प्रबंधित करें।"
lang: hi-IN
metaTitle: Disk Usage एलियास | Dotfiles
permalink: /aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: disk usage aliases, du command, storage monitoring, file size, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: डिस्क उपयोग मॉनिटरिंग के लिए शेल एलियास।
  - name: twitter:title
    content: Disk Usage एलियास | Dotfiles
  - name: og:title
    content: Disk Usage एलियास | Dotfiles
  - name: og:description
    content: डिस्क उपयोग मॉनिटरिंग के लिए शेल एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Disk Usage एलियास

अपने फाइल सिस्टम में स्टोरेज खपत को त्वरित रूप से मॉनिटर और विश्लेषण करें।

## अवलोकन

disk usage एलियास Unix-आधारित सिस्टम पर स्टोरेज खपत मॉनिटरिंग के लिए सुव्यवस्थित कमांड प्रदान करते हैं। `disk-usage.aliases.sh` में परिभाषित, ये शॉर्टकट सामान्य `du` ऑपरेशन को सरल करते हैं और Dotfiles कॉन्फ़िगरेशन के हिस्से के रूप में chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

निम्नलिखित तालिका सभी उपलब्ध disk usage एलियास और उनके फंक्शन सूचीबद्ध करती है।

| एलियास | विवरण |
|-------|-------------|
| `du` | वर्तमान डायरेक्टरी का डिस्क उपयोग प्रदर्शित करें |
| `du1` | वर्तमान डायरेक्टरी में फाइलों और डायरेक्टरी का साइज़ दिखाएं |
| `duh` | मानव-पठनीय फॉर्मेट में फाइलों और डायरेक्टरी का साइज़ दिखाएं |
| `ducks` | वर्तमान डायरेक्टरी में शीर्ष 10 सबसे बड़ी फाइलें और डायरेक्टरी प्रदर्शित करें |
| `dus` | साइज़ के अनुसार क्रमबद्ध मानव-पठनीय फॉर्मेट में फाइल साइज़ दिखाएं |
| `dusym` | symlinks सहित फाइलों और डायरेक्टरी का साइज़ दिखाएं |
| `dut` | वर्तमान डायरेक्टरी का कुल फाइल साइज़ दिखाएं |
