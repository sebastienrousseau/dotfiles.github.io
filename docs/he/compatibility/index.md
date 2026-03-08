---
title: מטריצת תאימות חוצת פלטפורמות | Dotfiles
description: תמיכה בפלטפורמות שנבדקו עבור shells, כלים, מסופים וקטגוריות alias ב-Dotfiles v0.2.495.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: מטריצת תאימות חוצת פלטפורמות preview
canonical: /he/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: תאימות
pageType: docs
schemaType: TechArticle
permalink: /he/compatibility/
---

# מטריצת תאימות חוצת פלטפורמות

עמוד זה מתעד את תמיכת הפלטפורמות שנבדקו עבור Dotfiles v0.2.495 על macOS, Linux ו-WSL2.

## מקרא תגים

| תג | משמעות |
|-------|---------|
| ✅ | נבדק במלואו ונתמך |
| ⚠️ | תמיכה חלקית — ראה הערות |
| ❌ | לא נתמך |
| — | לא רלוונטי |

## סביבת Shell

| רכיב | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | הערות |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS דורש Bash של Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | ברירת מחדל ב-macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | תמיכה מוגבלת ב-alias |
| PowerShell | — | — | ⚠️ | יכולת פעולה הדדית עם WSL בלבד |

## כלי ליבה מודרניים

| כלי | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | התקנה |
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

## אמולטורי מסוף

| מסוף | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | הערות |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland מקורי ב-Linux |
| Alacritty | ✅ | ✅ | ⚠️ | מואץ GPU |
| WezTerm | ✅ | ✅ | ✅ | הגדרת Lua |
| iTerm2 | ✅ | — | — | macOS בלבד |
| Windows Terminal | — | — | ✅ | מארח WSL |

## מנהלי חבילות

| מנהל | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | הערות |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | ראשי עבור macOS |
| apt | — | ✅ | ✅ | חבילות מערכת |
| Cargo | ✅ | ✅ | ✅ | כלי Rust |
| npm / pnpm | ✅ | ✅ | ✅ | כלי Node |
| pip / pipx | ✅ | ✅ | ✅ | כלי Python |

## אבטחה וחתימה

| תכונה | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | הערות |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | מקורי, ללא GPG |
| age encryption | ✅ | ✅ | ✅ | אינטגרציית Chezmoi |
| SOPS | ✅ | ✅ | ✅ | backend של age או GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL דורש bridge |
| git-secrets | ✅ | ✅ | ✅ | hook לפני commit |

## קטגוריות Alias

| קטגוריה | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | הערות |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | דורש מפתחות API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | דורש Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | מוגבל ב-headless |
| gcloud | ✅ | ✅ | ✅ | דורש SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS צריך coreutils |
| Go | ✅ | ✅ | ✅ | דורש Go |
| Heroku | ✅ | ✅ | ✅ | דורש CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | דורש kubectl |
| Lua | ✅ | ✅ | ✅ | דורש Lua |
| macOS | ✅ | — | — | macOS בלבד |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | תחליפי Rust |
| npm | ✅ | ✅ | ✅ | דורש Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | דורש pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | דורש Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | דורש Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | דורש svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | דורש Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | דורש Yarn |

## קישורים קשורים

- [אודות](/he/about/)
- [Aliases](/he/aliases/)
- [שיטות עבודה מומלצות לניהול סודות](/he/guides/secret-management/)
