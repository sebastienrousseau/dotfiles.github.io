---
title: "NPM एलियास: अपने Node पैकेज मैनेजमेंट को सुव्यवस्थित करें"
description: "install, build, test, और publish कमांड के लिए सहज शेल एलियास के साथ npm वर्कफ़्लो तेज़ करें।"
lang: hi-IN
metaTitle: "NPM एलियास | Dotfiles"
permalink: /aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles, npm commands
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM एलियास | Dotfiles
  - name: twitter:description
    content: install, build, test, और publish कमांड के लिए सहज शेल एलियास के साथ npm वर्कफ़्लो तेज़ करें।
  - name: og:title
    content: NPM एलियास | Dotfiles
  - name: og:description
    content: npm वर्कफ़्लो के लिए सहज शेल एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# NPM एलियास

npm पैकेज मैनेजर के लिए शॉर्टहैंड कमांड के साथ अपने Node.js डेवलपमेंट को सरल करें।

## अवलोकन

ये एलियास `npm.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं। वे सामान्य npm ऑपरेशन तक त्वरित पहुंच प्रदान करते हैं।

## संदर्भ

### पैकेज मैनेजमेंट

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `npi` | `npm install` | npm पैकेज इंस्टॉल करें |
| `npg` | `npm install -g` | ग्लोबल npm पैकेज |
| `nprm` | `npm uninstall` | npm पैकेज हटाएं |
| `npu` | `npm update` | npm पैकेज अपडेट करें |
| `npl` | `npm list` | npm पैकेज सूचीबद्ध करें |
| `npc` | `npm cache` | npm पैकेज कैश करें |

### स्क्रिप्ट्स

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `npr` | `npm run` | npm स्क्रिप्ट चलाएं |
| `nps` | `npm start` | npm स्क्रिप्ट स्टार्ट करें |
| `npb` | `npm run build` | npm स्क्रिप्ट बिल्ड करें |
| `npd` | `npm run dev` | npm dev स्क्रिप्ट |
| `npt` | `npm test` | npm स्क्रिप्ट टेस्ट करें |
| `nprw` | `npm run watch` | npm स्क्रिप्ट watch चलाएं |
| `npsv` | `npm run serve` | npm स्क्रिप्ट serve करें |

### पब्लिशिंग और एनालिसिस

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `npp` | `npm publish` | npm पैकेज पब्लिश करें |
| `npa` | `npm audit` | npm पैकेज ऑडिट करें |
| `npx` | `npm exec` | npm पैकेज exec करें |
| `npy` | `npm why` | npm पैकेज why |
