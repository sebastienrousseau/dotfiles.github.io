---
title: "Editor एलियास: सुव्यवस्थित टेक्स्ट एडिटिंग शॉर्टकट"
description: "Neovim, VS Code, Vim, Nano, Emacs, और Sublime Text के लिए शेल एलियास। यूनिवर्सल शॉर्टकट से फाइलें तेज़ी से एडिट करें।"
lang: hi-IN
metaTitle: "Editor एलियास | Dotfiles"
permalink: /aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: editor aliases, neovim, vim, vscode, nano, emacs, sublime text, shell shortcuts, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Neovim, VS Code, Vim, Nano, Emacs, और Sublime Text के लिए शेल एलियास।
  - name: twitter:title
    content: Editor एलियास | Dotfiles
  - name: og:title
    content: Editor एलियास | Dotfiles
  - name: og:description
    content: Neovim, VS Code, Vim, Nano, Emacs, और Sublime Text के लिए शेल एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Editor एलियास

अपना पसंदीदा टेक्स्ट एडिटर लॉन्च और कॉन्फ़िगर करने के लिए शॉर्टकट।

## अवलोकन

Editor एलियास कई एप्लिकेशन में टेक्स्ट एडिटिंग के लिए एक एकीकृत इंटरफेस प्रदान करते हैं। `editor.aliases.sh` में परिभाषित और chezmoi द्वारा स्वचालित रूप से लोड होते हैं, ये शॉर्टकट आपके सिस्टम पर सबसे अच्छा उपलब्ध एडिटर पता लगाने और कॉन्फ़िगर करने के लिए `editor.sh` के साथ मिलकर काम करते हैं।

सिस्टम Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text, और Atom को सपोर्ट करता है।

## संदर्भ

### यूनिवर्सल एलियास

ये एलियास `editor.sh` द्वारा कॉन्फ़िगर किए गए किसी भी एडिटर के साथ काम करते हैं।

| एलियास | विवरण |
|-------|-------------|
| `e` | त्वरित एडिट कमांड |
| `edit` | स्टैंडर्ड एडिट कमांड |
| `editor` | पूर्ण एडिटर कमांड |
| `n` | शॉर्ट एडिट एलियास |
| `v` | Vim-जैसा एडिट एलियास |

### Neovim एलियास

Neovim प्राइमरी एडिटर होने पर उपलब्ध।

| एलियास | विवरण |
|-------|-------------|
| `vi` | Neovim पर रीडायरेक्ट |
| `vim` | Neovim पर रीडायरेक्ट |
| `nvimrc` | Neovim Vimscript कॉन्फ़िगरेशन एडिट करें |
| `nvimlua` | Neovim Lua कॉन्फ़िगरेशन एडिट करें |
| `nvimconf` | Neovim कॉन्फ़िगरेशन डायरेक्टरी खोलें |

### Visual Studio Code एलियास

VS Code इंस्टॉल होने पर उपलब्ध।

| एलियास | विवरण |
|-------|-------------|
| `vsc` | VS Code लॉन्च करें |
| `vsca` | वर्तमान विंडो में फोल्डर जोड़ें |
| `vscd` | दो फाइलों की तुलना करें |
| `vscn` | नई विंडो खोलें |
| `vscex` | VS Code एक्सटेंशन इंस्टॉल करें |
| `vsclist` | इंस्टॉल एक्सटेंशन सूची |

### कॉन्फ़िगरेशन एडिटिंग

`editrc` फंक्शन सामान्य कॉन्फ़िगरेशन फाइलों तक त्वरित पहुंच प्रदान करता है।

| कमांड | टारगेट फाइल |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Neovim init फाइल |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
