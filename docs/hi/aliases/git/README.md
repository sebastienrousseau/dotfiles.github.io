---
title: "Git एलियास: अपने वर्जन कंट्रोल वर्कफ़्लो को सुव्यवस्थित करें"
description: "तेज़ कमिट, ब्रांच, डिफ, और रिमोट के लिए 80+ Git शेल एलियास। अपने दैनिक वर्जन कंट्रोल कार्यों को तेज़ करें।"
lang: hi-IN
metaTitle: Git एलियास | Dotfiles
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "तेज़ कमिट, ब्रांच, डिफ, और रिमोट के लिए 80+ Git शेल एलियास।"
  - name: twitter:title
    content: Git एलियास | Dotfiles
  - name: og:title
    content: Git एलियास | Dotfiles
  - name: og:description
    content: "तेज़ कमिट, ब्रांच, डिफ, और रिमोट के लिए 80+ Git शेल एलियास।"
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Git एलियास

शक्तिशाली शॉर्टकट के साथ अपने वर्जन कंट्रोल वर्कफ़्लो को सुव्यवस्थित करें।

## अवलोकन

Git एलियास अक्सर उपयोग किए जाने वाले Git कमांड के लिए शॉर्टकट बनाते हैं। [Dotfiles](https://github.com/sebastienrousseau/dotfiles) कॉन्फ़िगरेशन का हिस्सा, ये एलियास Chezmoi के माध्यम से स्वचालित रूप से लोड होते हैं।

`git.aliases.sh` और `signing.aliases.sh` में परिभाषित, एलियास इंस्टॉल होने के बाद किसी भी Bash या Zsh सेशन में उपलब्ध हैं।

## संदर्भ

### कोर

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `g` | `git` | git के लिए शॉर्टहैंड |
| `gtp` | `git rev-parse --show-toplevel` | रिपॉजिटरी की टॉप-लेवल डायरेक्टरी प्रिंट करें |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | वर्तमान ब्रांच नाम प्रिंट करें |

### वर्किंग एरिया

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `ga` | `git add` | फाइलें स्टेज करें |
| `gaa` | `git add --all` | सभी परिवर्तन स्टेज करें |
| `gad` | `git add .` | वर्तमान डायरेक्टरी में सब कुछ स्टेज करें |
| `gcl` | `git clone` | रिपॉजिटरी क्लोन करें |
| `gin` | `git init` | नया Git रिपॉजिटरी आरंभ करें |
| `gco` | `git checkout` | ब्रांच स्विच करें |
| `gcb` | `git checkout -b` | नई ब्रांच बनाएं और स्विच करें |
| `gst` | `git status` | वर्किंग ट्री स्थिति दिखाएं |

### कमिट

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `gc` | `git commit -a` | सभी ट्रैक परिवर्तन कमिट करें |
| `gca` | `git commit --amend` | अंतिम कमिट में संशोधन करें |
| `gcm` | `git commit --message` | इनलाइन मैसेज के साथ कमिट करें |
| `gcane` | `git commit --amend --no-edit` | मैसेज बदले बिना कमिट में संशोधन करें |

### डिफ और हिस्ट्री

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `gd` | `git diff` | अनस्टेज परिवर्तन दिखाएं |
| `gdh` | `git diff HEAD` | अंतिम कमिट के बाद सभी परिवर्तन दिखाएं |
| `gdstaged` | `git diff --staged` | स्टेज परिवर्तन दिखाएं |
| `gl` | `git log --since="last month" --oneline` | पिछले महीने का वन-लाइन लॉग |
| `glg` | `git log --graph --all --oneline --decorate` | सभी ब्रांच का ग्राफ लॉग |

### ब्रांच

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `gb` | `git branch` | लोकल ब्रांच सूचीबद्ध करें |
| `gbd` | `git branch -d` | मर्ज ब्रांच हटाएं |
| `gbr` | `git branch -r` | रिमोट ब्रांच सूचीबद्ध करें |
| `gswb` | `git switch` | ब्रांच स्विच करें (मॉडर्न) |

### रिमोट और Push/Pull

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `gf` | `git fetch` | रिमोट से फेच करें |
| `gp` | `git pull` | रिमोट से पुल करें |
| `gph` | `git push` | रिमोट पर पुश करें |
| `gpo` | `git push origin` | origin पर पुश करें |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | वर्तमान ब्रांच के लिए पुश और अपस्ट्रीम सेट करें |

### रिवर्ट और रीसेट

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `grev` | `git revert` | कमिट रिवर्ट करें |
| `grb` | `git rebase` | वर्तमान ब्रांच रीबेस करें |
| `grbk` | `git reset --soft HEAD^` | अंतिम कमिट अनडू करें, परिवर्तन स्टेज रखें |
| `gresh` | `git reset --hard HEAD~1` | पिछले कमिट पर हार्ड रीसेट |

### साइनिंग और सुरक्षा

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `enable-signing` | *(इंटरैक्टिव विज़ार्ड)* | GPG या SSH कमिट साइनिंग कॉन्फ़िगर करें |
| `verify-signatures` | `git log --show-signature -n 10` | अंतिम 10 कमिट के सिग्नेचर वेरिफाई करें |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | वर्तमान साइनिंग कॉन्फ़िगरेशन जांचें |
