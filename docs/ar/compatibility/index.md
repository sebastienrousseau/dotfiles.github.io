---
title: مصفوفة التوافق عبر المنصات | Dotfiles
description: دعم المنصات المختبرة للأصداف والأدوات والمحطات وفئات الأسماء المستعارة في Dotfiles v0.2.495.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: مصفوفة التوافق عبر المنصات preview
canonical: /ar/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: التوافق
pageType: docs
schemaType: TechArticle
permalink: /ar/compatibility/
---

# مصفوفة التوافق عبر المنصات

توثق هذه الصفحة دعم المنصات المختبرة لـ Dotfiles v0.2.495 عبر macOS و Linux و WSL2.

## دليل الشارات

| الشارة | المعنى |
|-------|---------|
| ✅ | مختبر بالكامل ومدعوم |
| ⚠️ | دعم جزئي — انظر الملاحظات |
| ❌ | غير مدعوم |
| — | لا ينطبق |

## بيئة الشل

| المكون | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ملاحظات |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | يتطلب macOS تثبيت Bash عبر Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | الافتراضي على macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | دعم محدود للأسماء المستعارة |
| PowerShell | — | — | ⚠️ | التشغيل البيني مع WSL فقط |

## الأدوات الأساسية الحديثة

| الأداة | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | التثبيت |
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

## محاكيات المحطة

| المحطة | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ملاحظات |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland أصلي على Linux |
| Alacritty | ✅ | ✅ | ⚠️ | مسرّع بوحدة معالجة الرسومات |
| WezTerm | ✅ | ✅ | ✅ | تكوين Lua |
| iTerm2 | ✅ | — | — | macOS فقط |
| Windows Terminal | — | — | ✅ | مضيف WSL |

## مديرو الحزم

| المدير | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ملاحظات |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | الأساسي لـ macOS |
| apt | — | ✅ | ✅ | حزم النظام |
| Cargo | ✅ | ✅ | ✅ | أدوات Rust |
| npm / pnpm | ✅ | ✅ | ✅ | أدوات Node |
| pip / pipx | ✅ | ✅ | ✅ | أدوات Python |

## الأمان والتوقيع

| الميزة | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ملاحظات |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | أصلي، بدون GPG |
| age encryption | ✅ | ✅ | ✅ | تكامل Chezmoi |
| SOPS | ✅ | ✅ | ✅ | واجهة age أو GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | يتطلب WSL جسرًا |
| git-secrets | ✅ | ✅ | ✅ | خطاف ما قبل الالتزام |

## فئات الأسماء المستعارة

| الفئة | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ملاحظات |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | يتطلب مفاتيح API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | يتطلب Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | محدود على الأنظمة بدون واجهة |
| gcloud | ✅ | ✅ | ✅ | يتطلب SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | يحتاج macOS إلى coreutils |
| Go | ✅ | ✅ | ✅ | يتطلب Go |
| Heroku | ✅ | ✅ | ✅ | يتطلب CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | يتطلب kubectl |
| Lua | ✅ | ✅ | ✅ | يتطلب Lua |
| macOS | ✅ | — | — | macOS فقط |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | بدائل Rust |
| npm | ✅ | ✅ | ✅ | يتطلب Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | يتطلب pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | يتطلب Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | يتطلب Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | يتطلب svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | يتطلب Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | يتطلب Yarn |

## ذو صلة

- [حول](/ar/about/)
- [الأسماء المستعارة](/ar/aliases/)
- [أفضل ممارسات إدارة الأسرار](/ar/guides/secret-management/)
