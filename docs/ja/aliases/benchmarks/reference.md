---
title: Benchmarks リファレンス付録 | Dotfiles
description: Dotfiles v0.2.495 の Benchmarks の完全なエイリアスおよびヘルパー関数リファレンス。macOS、Linux、WSL 向けのすべてのショートカット、使用例、シェル関数を含みます。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks リファレンス付録 | Dotfiles preview
canonical: /ja/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /ja/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, リファレンス, エイリアス, シェル, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 の Benchmarks の完全なエイリアスリファレンス。
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 の Benchmarks の完全なエイリアスリファレンス。
  - name: og:image:alt
    content: Dotfiles – あなたのシェルライフにフィット
  - name: og:locale
    content: ja_JP
---

# Benchmarks リファレンス付録

## ソースファイル

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## エイリアスリファレンス

| エイリアス | コマンド |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## 検証

- エイリアスの更新後に `chezmoi apply` を実行してください。
- `dot doctor` を実行してシェルの状態を検証してください。
