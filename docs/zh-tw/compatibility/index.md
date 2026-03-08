---
title: 跨平台相容性矩陣 | Dotfiles
description: Dotfiles v0.2.495 中 Shell、工具、終端和別名分類的已測試平台支援。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 跨平台相容性矩陣預覽
canonical: /zh-tw/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 相容性
pageType: docs
schemaType: TechArticle
permalink: /zh-tw/compatibility/
---

# 跨平台相容性矩陣

本頁記錄 Dotfiles v0.2.495 在 macOS、Linux 和 WSL2 上的已測試平台支援。

## 標誌說明

| 標誌 | 含義 |
|-------|---------|
| ✅ | 完整測試且支援 |
| ⚠️ | 部分支援 — 請參閱備註 |
| ❌ | 不支援 |
| — | 不適用 |

## Shell 環境

| 元件 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 備註 |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS 需要 Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOS 預設 |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | 別名支援有限 |
| PowerShell | — | — | ⚠️ | 僅限 WSL 互通 |

## 現代核心工具

| 工具 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 安裝方式 |
|------|:---:|:---:|:---:|---------|
| Atuin（歷史記錄） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat（cat 替代） | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza（ls 替代） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd（find 替代） | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf（模糊搜尋） | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep（grep 替代） | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship（提示字元） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide（cd 替代） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi（檔案管理器） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij（多工終端） | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## 終端模擬器

| 終端 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 備註 |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Linux 上原生 Wayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPU 加速 |
| WezTerm | ✅ | ✅ | ✅ | Lua 配置 |
| iTerm2 | ✅ | — | — | 僅限 macOS |
| Windows Terminal | — | — | ✅ | WSL 主機 |

## 套件管理器

| 管理器 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 備註 |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS 主要使用 |
| apt | — | ✅ | ✅ | 系統套件 |
| Cargo | ✅ | ✅ | ✅ | Rust 工具 |
| npm / pnpm | ✅ | ✅ | ✅ | Node 工具 |
| pip / pipx | ✅ | ✅ | ✅ | Python 工具 |

## 安全性與簽章

| 功能 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 備註 |
|---------|:---:|:---:|:---:|-------|
| SSH 提交簽章 | ✅ | ✅ | ✅ | 原生，無需 GPG |
| age 加密 | ✅ | ✅ | ✅ | Chezmoi 整合 |
| SOPS | ✅ | ✅ | ✅ | age 或 GPG 後端 |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL 需要橋接 |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit 掛鉤 |

## 別名分類

| 分類 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 備註 |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | 需要 API 金鑰 |
| 壓縮檔 | ✅ | ✅ | ✅ | — |
| cd（zoxide） | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| 清除 | ✅ | ✅ | ✅ | — |
| 配置 | ✅ | ✅ | ✅ | — |
| 預設 | ✅ | ✅ | ✅ | — |
| 診斷 | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| 磁碟用量 | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | 需要 Docker |
| 編輯器 | ✅ | ✅ | ✅ | — |
| 搜尋（fd） | ✅ | ✅ | ✅ | — |
| 字型 | ✅ | ⚠️ | ⚠️ | 無圖形介面時有限 |
| gcloud | ✅ | ✅ | ✅ | 需要 SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS 需要 coreutils |
| Go | ✅ | ✅ | ✅ | 需要 Go |
| Heroku | ✅ | ✅ | ✅ | 需要 CLI |
| 互動式 | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | 需要 kubectl |
| Lua | ✅ | ✅ | ✅ | 需要 Lua |
| macOS | ✅ | — | — | 僅限 macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| 現代工具 | ✅ | ✅ | ✅ | Rust 替代方案 |
| npm | ✅ | ✅ | ✅ | 需要 Node |
| 權限 | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | 需要 pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | 需要 Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | 需要 Rust |
| 安全性 | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | 需要 svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | 需要 Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| 更新 | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | 需要 Yarn |

## 相關連結

- [關於](/zh-tw/about/)
- [別名](/zh-tw/aliases/)
- [機密管理最佳實務](/zh-tw/guides/secret-management/)
