---
title: 概要 | Dotfiles
description: Chezmoiで管理される次世代の設定ファイル。高性能、安全、AIネイティブ。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 概要 preview
canonical: /ja/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 概要
pageType: docs
schemaType: WebPage
metaTitle: 概要 - Dotfiles (JA)
permalink: /ja/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, 設定, 自動化, macos, linux, rust, zellij
---

# Dotfiles v0.2.481 について

## はじめに

Dotfilesは環境設定のモダンスタンダードです。**Chezmoi**上に構築され、シェル、アプリケーション、シークレットを安全かつ信頼性高くクロスプラットフォームで管理できます。

複雑なMakefileやシンボリックリンクスクリプトに依存するレガシーなdotfilesとは異なり、Dotfilesはアトミックで高速なテンプレートベースのアプローチを使用します。

## v0.2.481の新機能

- **モダンコア**: レガシーUnixツールを高性能Rust代替品に置き換え:
  - **Atuin** (`history`を置換)
  - **Yazi** (`ls`/`ranger`を置換)
  - **Zellij** (`tmux`を置換)
  - **Ghostty** (モダンGPUアクセラレーテッドターミナル)
  - **NeoVim** (モダンVimベースエディタ)
- **ネイティブセキュリティ**: サードパーティエージェントなしの完全ネイティブSSH署名。
- **インタラクティブモード**: 新しい`dot learn`コマンドで機能をガイド。

## インストール

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## 検証

```bash
dot doctor
```

## コアコマンド

- `dot apply` 設定変更を適用します。
- `dot update` リポジトリを更新し、キャッシュをウォームアップします。
- `dot doctor` パス、ツール、シェルの状態を検証します。
- `dot heal` 欠落または壊れた状態を修復します。
- `dot smoke-test` コアツールチェーンを検証します。

## 関連ページ

- [エイリアス](/ja/alias/)
- [関数](/ja/functions/)
- [パス](/ja/paths/)
