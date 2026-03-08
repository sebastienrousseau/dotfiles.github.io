---
title: System エイリアス | Dotfiles
description: Dotfiles v0.2.495 の System エイリアスをご覧ください。macOS、Linux、WSL 向けの短く覚えやすい system コマンド。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System エイリアス | Dotfiles preview
canonical: /ja/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System エイリアス
pageType: docs
schemaType: WebPage
metaTitle: System エイリアス | Dotfiles
permalink: /ja/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, エイリアス, シェル, Bash, Zsh, Dotfiles, Chezmoi, system コマンド
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 の System エイリアス。短く覚えやすい system コマンド。
  - name: twitter:title
    content: System エイリアス | Dotfiles
  - name: og:title
    content: System エイリアス | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 の System エイリアス。短く覚えやすい system コマンド。
  - name: og:image:alt
    content: Dotfiles – あなたのシェルライフにフィット
  - name: og:locale
    content: ja_JP
---

# System エイリアス

system の短縮コマンド。

このページでは、エイリアスグループとよく使うコマンドショートカットを紹介します。まずこのページを読んで、命名規則、想定される入力、安全な実行パターンを理解してください。次にリファレンス付録を開いて、コマンドの完全な一覧と正確な構文を確認してください。これらのエイリアスにより、繰り返しの入力が減り、macOS、Linux、WSL で一貫したワークフローが維持されます。

## 使用するタイミング

予測可能なコマンドパターンが必要な日常のシェル作業の前に、このページをご利用ください。

## 内容

- エイリアス: 24
- ヘルパー関数: 0
- ソースファイル: 1

## 簡単な例

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## 次のステップ

完全なリストを開く:

- [System リファレンス付録](./reference.md)
