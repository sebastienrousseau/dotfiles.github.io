---
description: Chezmoiで管理される次世代の設定ファイル。高性能、安全、AIネイティブ。
lang: ja-JP
metaTitle: 概要 - Dotfiles (JA)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, 設定, 自動化, macos, linux, rust, zellij
---

# Dotfiles v0.2.472 について

## はじめに

Dotfilesは環境設定のモダンスタンダードです。**Chezmoi**上に構築され、シェル、アプリケーション、シークレットを安全かつ信頼性高くクロスプラットフォームで管理できます。

複雑なMakefileやシンボリックリンクスクリプトに依存するレガシーなdotfilesとは異なり、Dotfilesはアトミックで高速なテンプレートベースのアプローチを使用します。

## v0.2.472の新機能

- **モダンコア**: レガシーUnixツールを高性能Rust代替品に置き換え:
  - **Atuin** (`history`を置換)
  - **Yazi** (`ls`/`ranger`を置換)
  - **Zellij** (`tmux`を置換)
  - **Ghostty** (モダンGPUアクセラレーテッドターミナル)
  - **NeoVim** (モダンVimベースエディタ)
- **ネイティブセキュリティ**: サードパーティエージェントなしの完全ネイティブSSH署名。
- **インタラクティブモード**: 新しい`dot learn`コマンドで機能をガイド。
