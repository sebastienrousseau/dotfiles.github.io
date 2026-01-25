---
title: "Make एलियास: अपने बिल्ड वर्कफ़्लो को सुव्यवस्थित करें"
description: "Make कमांड के लिए शॉर्टकट एलियास। बिल्ड, टेस्ट, और प्रोजेक्ट ऑटोमेशन सरल करें।"
lang: hi-IN
metaTitle: Make एलियास | Dotfiles
permalink: /aliases/make/
sidebar: true
meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make एलियास | Dotfiles
  - name: twitter:description
    content: Make कमांड के लिए शॉर्टकट एलियास। बिल्ड, टेस्ट, और प्रोजेक्ट ऑटोमेशन सरल करें।
  - name: og:title
    content: Make एलियास | Dotfiles
  - name: og:description
    content: Make कमांड के लिए शॉर्टकट एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Make एलियास

Make के लिए शॉर्टहैंड कमांड के साथ अपने बिल्ड वर्कफ़्लो को सरल करें।

## अवलोकन

ये एलियास सामान्य Make टारगेट तक त्वरित पहुंच प्रदान करते हैं। `make.aliases.sh` में परिभाषित और Universal Dotfiles कॉन्फ़िगरेशन के हिस्से के रूप में chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `mk` | `make` | डिफ़ॉल्ट Make टारगेट चलाएं |
| `mka` | `make all` | सभी टारगेट बिल्ड करें |
| `mkc` | `make clean` | बिल्ड आर्टिफैक्ट्स साफ करें |
| `mkd` | `make doc` | डॉक्यूमेंटेशन जनरेट करें |
| `mkf` | `make format` | सोर्स फाइलें फॉर्मेट करें |
| `mkh` | `make help` | सहायता जानकारी प्रदर्शित करें |
| `mki` | `make install` | प्रोजेक्ट इंस्टॉल करें |
| `mkr` | `make run` | प्रोजेक्ट चलाएं |
| `mkt` | `make test` | टेस्ट चलाएं |
