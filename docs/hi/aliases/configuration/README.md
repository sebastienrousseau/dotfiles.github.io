---
title: "Configuration एलियास: कॉन्फ़िग फाइलों तक त्वरित पहुंच"
description: "Bash और Zsh के लिए इन शेल एलियास के साथ शेल, Git, SSH, और सर्वर कॉन्फ़िगरेशन फाइलें तुरंत खोलें।"
lang: hi-IN
metaTitle: "Configuration एलियास | Dotfiles"
permalink: /aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Configuration एलियास | Dotfiles
  - name: twitter:description
    content: इन शेल एलियास के साथ शेल, Git, SSH, और सर्वर कॉन्फ़िगरेशन फाइलें तुरंत खोलें।
  - name: og:title
    content: Configuration एलियास | Dotfiles
  - name: og:description
    content: इन शेल एलियास के साथ शेल, Git, SSH, और सर्वर कॉन्फ़िगरेशन फाइलें तुरंत खोलें।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Configuration एलियास

एक कमांड से अपने डिफ़ॉल्ट एडिटर में कॉन्फ़िगरेशन फाइलें खोलें।

## अवलोकन

Configuration एलियास अक्सर संपादित की जाने वाली कॉन्फ़िगरेशन फाइलों को खोलने के लिए शॉर्टकट प्रदान करते हैं। ये एलियास `configuration.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

प्रत्येक एलियास आपके सिस्टम के डिफ़ॉल्ट टेक्स्ट एडिटर में संबंधित फाइल लॉन्च करता है, फाइल पाथ याद रखने या लंबे कमांड टाइप करने की आवश्यकता समाप्त करता है।

## संदर्भ

### शेल कॉन्फ़िगरेशन

| एलियास | विवरण |
|-------|-------------|
| `bshrc` | Bash कॉन्फ़िगरेशन फाइल (~/.bashrc) खोलें |
| `bshp` | Bash प्रोफाइल (~/.bash_profile) खोलें |
| `zshrc` | Zsh कॉन्फ़िगरेशन फाइल (~/.zshrc) खोलें |
| `zshp` | Zsh प्रोफाइल (~/.zprofile) खोलें |

### वर्जन कंट्रोल

| एलियास | विवरण |
|-------|-------------|
| `gcfg` | Git कॉन्फ़िगरेशन फाइल (~/.gitconfig) खोलें |
| `gign` | Git इग्नोर फाइल (~/.gitignore) खोलें |

### नेटवर्क और सर्वर

| एलियास | विवरण |
|-------|-------------|
| `apconf` | Apache कॉन्फ़िगरेशन फाइल खोलें |
| `ngconf` | Nginx कॉन्फ़िगरेशन फाइल खोलें |
| `sshconf` | SSH कॉन्फ़िगरेशन फाइल (~/.ssh/config) खोलें |
| `hosts` | hosts फाइल (/etc/hosts) खोलें |

### डेवलपमेंट टूल्स

| एलियास | विवरण |
|-------|-------------|
| `dockcomp` | Docker Compose फाइल खोलें |
| `eddir` | वर्तमान डायरेक्टरी को डिफ़ॉल्ट एडिटर में खोलें |
