---
title: "Diagnostics एलियास: सिस्टम हेल्थ और सेल्फ-हीलिंग कमांड"
description: "आपके dotfiles एनवायरनमेंट में सिस्टम डायग्नोस्टिक्स, हेल्थ चेक, ड्रिफ्ट डिटेक्शन, और सेल्फ-हीलिंग के लिए शेल एलियास।"
lang: hi-IN
metaTitle: "Diagnostics एलियास | Dotfiles"
permalink: /aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "diagnostics aliases, system health check, dotfiles doctor, chezmoi verify, self-healing shell"
  - name: og:locale
    content: hi_IN
---

# Diagnostics एलियास

सेल्फ-हीलिंग और सिस्टम हेल्थ चेक के लिए टूल्स।

## अवलोकन

diagnostics एलियास सिस्टम हेल्थ मॉनिटरिंग, कॉन्फ़िगरेशन ड्रिफ्ट डिटेक्शन, और आपके dotfiles एनवायरनमेंट को स्वचालित रूप से रिपेयर करने के लिए कमांड प्रदान करते हैं। ये यूटिलिटीज chezmoi के साथ इंटीग्रेट होती हैं ताकि आपकी लोकल फाइलें आपकी प्रबंधित स्थिति के साथ सिंक में रहें।

## संदर्भ

### हेल्थ और रिपेयर

| एलियास | विवरण |
|-------|-------------|
| `doc`, `dot-doctor` | सिस्टम हेल्थ चेक स्क्रिप्ट (`doctor.sh`) चलाएं। |
| `drift`, `dot-drift` | जांचें कि लोकल फाइलें प्रबंधित स्थिति से ड्रिफ्ट हुई हैं (`chezmoi verify`)। |
| `heal`, `dot-heal` | ड्रिफ्ट रिपेयर करने के लिए प्रबंधित स्थिति लागू करें (`chezmoi apply`)। |
| `doc-full` | विस्तारित पाथ डीबगिंग जानकारी के साथ doctor चलाएं। |
