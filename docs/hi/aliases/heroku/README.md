---
title: "Heroku एलियास: Heroku CLI के लिए शेल शॉर्टकट"
description: "ऐप्स, डेटाबेस, पाइपलाइन, और डिप्लॉयमेंट के लिए 200+ शेल एलियास के साथ Heroku वर्कफ़्लो तेज़ करें।"
lang: hi-IN
metaTitle: Heroku एलियास | Dotfiles
permalink: /aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku एलियास | Dotfiles
  - name: twitter:description
    content: ऐप्स, डेटाबेस, पाइपलाइन, और डिप्लॉयमेंट के लिए 200+ शेल एलियास के साथ Heroku वर्कफ़्लो तेज़ करें।
  - name: og:title
    content: Heroku एलियास | Dotfiles
  - name: og:description
    content: ऐप्स, डेटाबेस, पाइपलाइन, और डिप्लॉयमेंट के लिए 200+ शेल एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Heroku एलियास

Heroku CLI के लिए शेल शॉर्टकट, `heroku.aliases.sh` में परिभाषित और chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## अवलोकन

यह संग्रह [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) के लिए 200+ एलियास प्रदान करता है, जिसमें ऐप मैनेजमेंट, एड-ऑन, डेटाबेस, पाइपलाइन, कंटेनर, और अधिक शामिल हैं।

## संदर्भ

### सामान्य कमांड

| एलियास | विवरण |
|-------|-------------|
| `hkk` | Heroku CLI कमांड शॉर्टकट |
| `hka` | अपने ऐप में नए यूजर जोड़ें |
| `hkh` | Heroku के लिए सहायता प्रदर्शित करें |
| `hkl` | सभी कमांड सूचीबद्ध करें |
| `hklg` | हाल का लॉग आउटपुट प्रदर्शित करें |
| `hkp` | डेटाबेस के लिए psql शेल खोलें |
| `hks` | Heroku प्लेटफॉर्म की वर्तमान स्थिति प्रदर्शित करें |
| `hku` | Heroku CLI अपडेट करें |

### ऐप्स

| एलियास | विवरण |
|-------|-------------|
| `hkapc` | नया ऐप बनाएं |
| `hkape` | ऐप एरर देखें |
| `hkapi` | विस्तृत ऐप जानकारी दिखाएं |
| `hkapk` | ऐप स्थायी रूप से नष्ट करें |
| `hkapl` | अपने ऐप्स सूचीबद्ध करें |
| `hkapo` | वेब ब्राउज़र में ऐप खोलें |
| `hkapr` | ऐप का नाम बदलें |

### PostgreSQL

| एलियास | विवरण |
|-------|-------------|
| `hkpg` | डेटाबेस जानकारी दिखाएं |
| `hkpgbk` | डेटाबेस बैकअप सूचीबद्ध करें |
| `hkpgbkc` | नया बैकअप कैप्चर करें |
| `hkpgbkdw` | डेटाबेस बैकअप डाउनलोड करें |
| `hkpgbkr` | डेटाबेस में बैकअप रीस्टोर करें |
| `hkpgpsql` | डेटाबेस के लिए psql शेल खोलें |

### पाइपलाइन

| एलियास | विवरण |
|-------|-------------|
| `hkpipe` | आपके पास पहुंच वाली पाइपलाइन सूचीबद्ध करें |
| `hkpipec` | नई पाइपलाइन बनाएं |
| `hkpipei` | पाइपलाइन में ऐप्स की सूची दिखाएं |
| `hkpipep` | इस ऐप की नवीनतम रिलीज़ को उसके डाउनस्ट्रीम ऐप में प्रमोट करें |

### कंटेनर

| एलियास | विवरण |
|-------|-------------|
| `hkct` | Heroku ऐप्स बिल्ड और डिप्लॉय करने के लिए कंटेनर उपयोग करें |
| `hkctin` | Heroku Container Registry में लॉगइन |
| `hkctpush` | अपना Heroku ऐप डिप्लॉय करने के लिए Docker इमेज बिल्ड करें, फिर पुश करें |
| `hkctrelease` | पहले से पुश की गई Docker इमेज अपने Heroku ऐप पर रिलीज़ करें |
