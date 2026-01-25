---
title: "Dig एलियास: टर्मिनल के लिए DNS लुकअप शॉर्टकट"
description: "dig एलियास के साथ DNS क्वेरी सरल करें। इन शेल शॉर्टकट का उपयोग करके IPv4, IPv6, और DNS रिकॉर्ड तेज़ी से देखें।"
lang: hi-IN
metaTitle: "Dig एलियास | Dotfiles"
permalink: /aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: dig एलियास के साथ DNS क्वेरी सरल करें।
  - name: twitter:title
    content: "Dig एलियास | Dotfiles"
  - name: og:title
    content: "Dig एलियास | Dotfiles"
  - name: og:description
    content: dig एलियास के साथ DNS क्वेरी सरल करें।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Dig एलियास

शेल एलियास के संक्षिप्त सेट के साथ DNS लुकअप को सुव्यवस्थित करें।

## अवलोकन

ये एलियास Unix-आधारित सिस्टम पर `dig` कमांड का उपयोग करके DNS (Domain Name System) क्वेरी के साथ काम करना सरल करते हैं। `dig.aliases.sh` में परिभाषित, ये Universal Dotfiles कॉन्फ़िगरेशन के हिस्से के रूप में chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

निम्नलिखित तालिका सभी उपलब्ध dig एलियास और उनके फंक्शन सूचीबद्ध करती है।

| एलियास  | विवरण                                |
|--------|--------------------------------------------|
| `d`    | डिफ़ॉल्ट ऑप्शन के साथ dig कमांड चलाएं  |
| `d4`   | IPv4 एड्रेस के लिए DNS लुकअप करें  |
| `d6`   | IPv6 एड्रेस के लिए DNS लुकअप करें  |
| `dga`  | सभी रिकॉर्ड के लिए DNS लुकअप करें      |
| `dgs`  | संक्षिप्त उत्तर के लिए DNS लुकअप करें   |
| `digg` | Google DNS का उपयोग करके dig क्वेरी करें      |
| `ip4`  | आपका पब्लिक IPv4 एड्रेस प्राप्त करें         |
| `ip6`  | आपका पब्लिक IPv6 एड्रेस प्राप्त करें         |
| `ips`  | आपके पब्लिक IPv4 और IPv6 एड्रेस प्राप्त करें |
| `wip`  | आपका पब्लिक IP एड्रेस प्राप्त करें           |
