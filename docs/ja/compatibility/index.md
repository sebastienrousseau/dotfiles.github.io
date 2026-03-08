---
title: クロスプラットフォーム互換性マトリックス | Dotfiles
description: Dotfiles v0.2.495におけるシェル、ツール、ターミナル、エイリアスカテゴリのテスト済みプラットフォームサポート。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: クロスプラットフォーム互換性マトリックス preview
canonical: /ja/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 互換性
pageType: docs
schemaType: TechArticle
permalink: /ja/compatibility/
---

# クロスプラットフォーム互換性マトリックス

このページでは、macOS、Linux、WSL2におけるDotfiles v0.2.495のテスト済みプラットフォームサポートを文書化しています。

## バッジの凡例

| バッジ | 意味 |
|-------|---------|
| ✅ | 完全にテスト済みでサポート |
| ⚠️ | 部分的サポート — 注記参照 |
| ❌ | 非サポート |
| — | 該当なし |

## シェル環境

| コンポーネント | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 注記 |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOSはHomebrew Bashが必要 |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOSのデフォルト |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | エイリアスサポートが限定的 |
| PowerShell | — | — | ⚠️ | WSL相互運用のみ |

## モダンコアツール

| ツール | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | インストール |
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

## ターミナルエミュレータ

| ターミナル | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 注記 |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | LinuxでネイティブWayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPUアクセラレーション |
| WezTerm | ✅ | ✅ | ✅ | Lua設定 |
| iTerm2 | ✅ | — | — | macOS専用 |
| Windows Terminal | — | — | ✅ | WSLホスト |

## パッケージマネージャ

| マネージャ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 注記 |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS用プライマリ |
| apt | — | ✅ | ✅ | システムパッケージ |
| Cargo | ✅ | ✅ | ✅ | Rustツール |
| npm / pnpm | ✅ | ✅ | ✅ | Nodeツール |
| pip / pipx | ✅ | ✅ | ✅ | Pythonツール |

## セキュリティと署名

| 機能 | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 注記 |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | ネイティブ、GPG不要 |
| age encryption | ✅ | ✅ | ✅ | Chezmoi統合 |
| SOPS | ✅ | ✅ | ✅ | ageまたはGPGバックエンド |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSLにはブリッジが必要 |
| git-secrets | ✅ | ✅ | ✅ | プリコミットフック |

## エイリアスカテゴリ

| カテゴリ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | 注記 |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | APIキーが必要 |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Dockerが必要 |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | ヘッドレスでは制限あり |
| gcloud | ✅ | ✅ | ✅ | SDKが必要 |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOSにはcoreutilsが必要 |
| Go | ✅ | ✅ | ✅ | Goが必要 |
| Heroku | ✅ | ✅ | ✅ | CLIが必要 |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | kubectlが必要 |
| Lua | ✅ | ✅ | ✅ | Luaが必要 |
| macOS | ✅ | — | — | macOS専用 |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust代替ツール |
| npm | ✅ | ✅ | ✅ | Nodeが必要 |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | pnpmが必要 |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Pythonが必要 |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Rustが必要 |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | svnが必要 |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Terraformが必要 |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Yarnが必要 |

## 関連ページ

- [概要](/ja/about/)
- [エイリアス](/ja/alias/)
- [シークレット管理のベストプラクティス](/ja/guides/secret-management/)
