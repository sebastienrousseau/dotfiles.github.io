---
title: क्रॉस-प्लेटफ़ॉर्म संगतता मैट्रिक्स | Dotfiles
description: Dotfiles v0.2.495 में शेल, टूल, टर्मिनल और एलियास श्रेणियों के लिए परीक्षित प्लेटफ़ॉर्म समर्थन। macOS, Linux और WSL पर Dotfiles के माध्यम से संगत।
lang: hi-IN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: क्रॉस-प्लेटफ़ॉर्म संगतता मैट्रिक्स preview
canonical: /hi/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: संगतता
pageType: docs
schemaType: TechArticle
permalink: /hi/compatibility/
---

# क्रॉस-प्लेटफ़ॉर्म संगतता मैट्रिक्स

यह पृष्ठ macOS, Linux और WSL2 पर Dotfiles v0.2.495 के लिए परीक्षित प्लेटफ़ॉर्म समर्थन का दस्तावेज़ीकरण करता है।

## बैज लीजेंड

| बैज | अर्थ |
|-------|---------|
| ✅ | पूरी तरह परीक्षित और समर्थित |
| ⚠️ | आंशिक समर्थन — नोट्स देखें |
| ❌ | समर्थित नहीं |
| — | लागू नहीं |

## शेल वातावरण

| कंपोनेंट | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | नोट्स |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS को Homebrew Bash चाहिए |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOS पर डिफ़ॉल्ट |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | सीमित एलियास समर्थन |
| PowerShell | — | — | ⚠️ | केवल WSL इंटरऑप |

## आधुनिक कोर टूल

| टूल | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | इंस्टॉल |
|------|:---:|:---:|:---:|---------|
| Atuin (history) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (file mgr) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## टर्मिनल एमुलेटर

| टर्मिनल | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | नोट्स |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Linux पर नेटिव Wayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPU-त्वरित |
| WezTerm | ✅ | ✅ | ✅ | Lua कॉन्फ़िग |
| iTerm2 | ✅ | — | — | केवल macOS |
| Windows Terminal | — | — | ✅ | WSL होस्ट |

## पैकेज मैनेजर

| मैनेजर | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | नोट्स |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS के लिए प्राथमिक |
| apt | — | ✅ | ✅ | सिस्टम पैकेज |
| Cargo | ✅ | ✅ | ✅ | Rust टूल |
| npm / pnpm | ✅ | ✅ | ✅ | Node टूलिंग |
| pip / pipx | ✅ | ✅ | ✅ | Python टूलिंग |

## सुरक्षा और साइनिंग

| फ़ीचर | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | नोट्स |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | नेटिव, GPG नहीं |
| age encryption | ✅ | ✅ | ✅ | Chezmoi इंटीग्रेशन |
| SOPS | ✅ | ✅ | ✅ | age या GPG बैकएंड |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL को bridge चाहिए |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit hook |

## एलियास श्रेणियाँ

| श्रेणी | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | नोट्स |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | API कुंजियाँ आवश्यक |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Docker आवश्यक |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | हेडलेस पर सीमित |
| gcloud | ✅ | ✅ | ✅ | SDK आवश्यक |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS को coreutils चाहिए |
| Go | ✅ | ✅ | ✅ | Go आवश्यक |
| Heroku | ✅ | ✅ | ✅ | CLI आवश्यक |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | kubectl आवश्यक |
| Lua | ✅ | ✅ | ✅ | Lua आवश्यक |
| macOS | ✅ | — | — | केवल macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust प्रतिस्थापन |
| npm | ✅ | ✅ | ✅ | Node आवश्यक |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | pnpm आवश्यक |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Python आवश्यक |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Rust आवश्यक |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | svn आवश्यक |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Terraform आवश्यक |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Yarn आवश्यक |

## संबंधित

- [के बारे में](/hi/about/)
- [एलियास](/hi/aliases/)
- [गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ](/hi/guides/secret-management/)
