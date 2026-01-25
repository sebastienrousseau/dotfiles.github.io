---
title: "Go एलियास: अपने Go डेवलपमेंट वर्कफ़्लो को सुव्यवस्थित करें"
description: "Go डेवलपमेंट के लिए शेल एलियास। सरल शॉर्टकट के साथ रन, बिल्ड, टेस्ट, और Go मॉड्यूल प्रबंधित करें।"
lang: hi-IN
metaTitle: "Go एलियास | Dotfiles"
permalink: /aliases/go/
sidebar: true
meta:
  - name: keywords
    content: "go aliases, go shell shortcuts, go development, dotfiles, golang commands"
  - name: og:locale
    content: hi_IN
---

# Go एलियास

सहज शेल शॉर्टकट के साथ अपने Go डेवलपमेंट वर्कफ़्लो को सुव्यवस्थित करें।

## अवलोकन

ये एलियास `go.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं। वे रनिंग, बिल्डिंग, टेस्टिंग, और मॉड्यूल प्रबंधित करने के लिए सामान्य Go कमांड तक त्वरित पहुंच प्रदान करते हैं।

## संदर्भ

| एलियास    | कमांड       | विवरण                        |
|----------|---------------|-----------------------------------|
| `go`     | `go`          | Go शॉर्टकट                        |
| `gor`    | `go run`      | Go प्रोग्राम चलाएं                     |
| `gob`    | `go build`    | Go पैकेज बिल्ड करें                   |
| `got`    | `go test`     | Go टेस्ट चलाएं                       |
| `gomt`   | `go mod tidy` | Go मॉड्यूल डिपेंडेंसी टाइडी करें        |
| `goget`  | `go get`      | Go पैकेज डाउनलोड और इंस्टॉल करें   |
