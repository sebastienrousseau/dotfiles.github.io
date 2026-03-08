---
title: Vagrant リファレンス付録 | Dotfiles
description: Dotfiles v0.2.495 の Vagrant の完全なエイリアスおよびヘルパー関数リファレンス。macOS、Linux、WSL 向けのすべてのショートカット、使用例、シェル関数を含みます。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Vagrant リファレンス付録 | Dotfiles preview
canonical: /ja/aliases/vagrant/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Vagrant Reference
pageType: docs
schemaType: WebPage
metaTitle: Vagrant Reference | Dotfiles
permalink: /ja/aliases/vagrant/reference/
sidebar: true
meta:
  - name: keywords
    content: vagrant, リファレンス, エイリアス, シェル, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 の Vagrant の完全なエイリアスリファレンス。
  - name: twitter:title
    content: Vagrant Reference | Dotfiles
  - name: og:title
    content: Vagrant Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 の Vagrant の完全なエイリアスリファレンス。
  - name: og:image:alt
    content: Dotfiles – あなたのシェルライフにフィット
  - name: og:locale
    content: ja_JP
---

# Vagrant リファレンス付録

## ソースファイル

- `.chezmoitemplates/aliases/vagrant/vagrant.aliases.sh`

## エイリアスリファレンス

| エイリアス | コマンド |
| :--- | :--- |
| `vg` | `vagrant` |

## 検証

- エイリアスの更新後に `chezmoi apply` を実行してください。
- `dot doctor` を実行してシェルの状態を検証してください。
