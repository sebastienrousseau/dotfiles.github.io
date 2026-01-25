---
description: eza、bat、ripgrep用モダンシェルエイリアス。レガシーUnixツールをより高速なRustベースの代替ツールに置き換え。
lang: ja-JP
metaTitle: モダンツールエイリアス - Dotfiles (JP)
permalink: /ja/alias/modern/
sidebar: true

meta:
  - name: keywords
    content: modern aliases, eza, bat, ripgrep, rust cli tools, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: eza、bat、ripgrep用モダンシェルエイリアス。レガシーUnixツールをより高速なRustベースの代替ツールに置き換え。
  - name: twitter:title
    content: モダンツールエイリアス - Dotfiles
  - name: og:title
    content: モダンツールエイリアス - Dotfiles
  - name: og:description
    content: eza、bat、ripgrep用モダンシェルエイリアス。レガシーUnixツールをより高速なRustベースの代替ツールに置き換え。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# モダンツールエイリアス

レガシーUnixコマンドのより高速でスマートな代替ツール。

## 概要

`modern.aliases.sh`で定義されたモダンエイリアスは、従来のUnixツールに対するRustベースの代替を提供します。これらのエイリアスは`chezmoi`によって自動的にロードされ、モダンツールが利用できない場合は標準コマンドに優雅にフォールバックします。

## リファレンス

### ezaによるファイルリスト表示

`eza`がインストールされている場合、`ls`を置き換えます。

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `ls` | `eza --icons` | アイコン付きでファイルを一覧表示 |
| `ll` | `eza -alF` | 長いリスト形式 |
| `la` | `eza -a` | 隠しファイルを含むすべてのファイルを一覧表示 |
| `lt` | `eza --tree` | ディレクトリツリーを表示 |

`eza`がインストールされていない場合は標準の`ls`にフォールバックします。

### batによるファイル内容表示

`bat`がインストールされている場合、`cat`を置き換えます。

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `cat` | `bat` | シンタックスハイライト付きでファイル内容を表示 |

### ripgrepによる検索

`rg`がインストールされている場合、`grep`を置き換えます。

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `grep` | `rg` | Ripgrepでファイル内容を検索 |
