---
description: ファイルの不変性と設定保護のためのセキュリティエイリアス。重要なシェルファイルのロックとロック解除。
lang: ja-JP
metaTitle: セキュリティエイリアス - Dotfiles (JP)
permalink: /ja/alias/security/
sidebar: true

meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: ファイルの不変性と設定保護のためのセキュリティエイリアス。重要なシェルファイルのロックとロック解除。
  - name: twitter:title
    content: セキュリティエイリアス - Dotfiles
  - name: og:title
    content: セキュリティエイリアス - Dotfiles
  - name: og:description
    content: ファイルの不変性と設定保護のためのセキュリティエイリアス。重要なシェルファイルのロックとロック解除。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# セキュリティエイリアス

不変性コントロールで重要な設定ファイルを保護。

## 概要

これらのエイリアスは`security.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### 不変性

| エイリアス | 説明 |
|:---|:---|
| `lock-configs` | 重要なファイルをロックして変更を防止 |
| `unlock-configs` | 編集のために重要なファイルのロックを解除 |
| `check-locks` | 重要なファイルのロック状態を確認 |
