---
description: システムフォントとフォントキャッシュを管理するためのシェルエイリアス。
lang: ja-JP
metaTitle: Fontsエイリアス - Dotfiles (JP)
permalink: /ja/alias/fonts/
sidebar: true

meta:
  - name: keywords
    content: fonts, font cache, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: システムフォントとフォントキャッシュを管理するためのシェルエイリアス。
  - name: twitter:title
    content: Fontsエイリアス - Dotfiles
  - name: og:title
    content: Fontsエイリアス - Dotfiles
  - name: og:description
    content: システムフォントとフォントキャッシュを管理するためのシェルエイリアス。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Fontsエイリアス

システムフォントとキャッシュを管理するためのショートカット。

## 概要

これらのエイリアスは`fonts.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

| エイリアス | 説明 |
|:---|:---|
| `update-fonts` | システムフォントキャッシュを更新（`fc-cache -fv`） |
| `list-fonts` | インストールされているすべてのフォントファミリーを一覧表示 |

## インストール済みフォント

- **JetBrainsMono Nerd Font**: プライマリターミナルフォント
- **Symbols Nerd Font**: アイコンフォールバック
