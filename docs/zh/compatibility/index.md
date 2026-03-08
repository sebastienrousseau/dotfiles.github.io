---
title: 跨平台兼容性矩阵 | Dotfiles
description: Dotfiles v0.2.495 中 shell、工具、终端和别名类别的已测试平台支持。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 跨平台兼容性矩阵 preview
canonical: /zh/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 兼容性
pageType: docs
schemaType: TechArticle
permalink: /zh/compatibility/
---

# 跨平台兼容性矩阵

本页记录了 Dotfiles v0.2.495 在 macOS、Linux 和 WSL2 上的已测试平台支持。

## 徽章图例

| 徽章 | 含义 |
|-------|---------|
| ✅ | 完全测试并支持 |
| ⚠️ | 部分支持 — 见备注 |
| ❌ | 不支持 |
| — | 不适用 |

## Shell 环境

| 组件 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 备注 |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS 需要 Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOS 默认 |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | 别名支持有限 |
| PowerShell | — | — | ⚠️ | 仅 WSL 互操作 |

## 现代核心工具

| 工具 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 安装 |
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

## 终端模拟器

| 终端 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 备注 |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Linux 原生 Wayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPU 加速 |
| WezTerm | ✅ | ✅ | ✅ | Lua 配置 |
| iTerm2 | ✅ | — | — | 仅 macOS |
| Windows Terminal | — | — | ✅ | WSL 主机 |

## 包管理器

| 管理器 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 备注 |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS 主要 |
| apt | — | ✅ | ✅ | 系统包 |
| Cargo | ✅ | ✅ | ✅ | Rust 工具 |
| npm / pnpm | ✅ | ✅ | ✅ | Node 工具 |
| pip / pipx | ✅ | ✅ | ✅ | Python 工具 |

## 安全与签名

| 功能 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 备注 |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | 原生，无需 GPG |
| age encryption | ✅ | ✅ | ✅ | Chezmoi 集成 |
| SOPS | ✅ | ✅ | ✅ | age 或 GPG 后端 |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL 需要桥接 |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit 钩子 |

## 别名类别

| 类别 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 备注 |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | 需要 API 密钥 |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | 需要 Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | 无头模式受限 |
| gcloud | ✅ | ✅ | ✅ | 需要 SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS 需要 coreutils |
| Go | ✅ | ✅ | ✅ | 需要 Go |
| Heroku | ✅ | ✅ | ✅ | 需要 CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | 需要 kubectl |
| Lua | ✅ | ✅ | ✅ | 需要 Lua |
| macOS | ✅ | — | — | 仅 macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust 替代工具 |
| npm | ✅ | ✅ | ✅ | 需要 Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | 需要 pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | 需要 Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | 需要 Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | 需要 svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | 需要 Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | 需要 Yarn |

## 相关页面

- [关于](/zh/about/)
- [别名](/zh/aliases/)
- [密钥管理最佳实践](/zh/guides/secret-management/)
