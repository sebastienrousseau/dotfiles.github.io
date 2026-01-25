---
description: fdユーティリティを使用したファイルとディレクトリの検索エイリアス。高速でユーザーフレンドリーなfind代替。
lang: ja-JP
metaTitle: Findエイリアス - Dotfiles (JP)
permalink: /ja/alias/find/
sidebar: true

meta:
  - name: keywords
    content: find, fd, file search, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: fdユーティリティを使用したファイルとディレクトリの検索エイリアス。高速でユーザーフレンドリーなfind代替。
  - name: twitter:title
    content: Findエイリアス - Dotfiles
  - name: og:title
    content: Findエイリアス - Dotfiles
  - name: og:description
    content: fdユーティリティを使用したファイルとディレクトリの検索エイリアス。高速でユーザーフレンドリーなfind代替。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Findエイリアス

ファイルとディレクトリを高速に検索するためのショートカット。

## 概要

これらのエイリアスは`find.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。`fd`ユーティリティ（高速なfind代替）を使用します。

## リファレンス

| エイリアス | 説明 |
|:---|:---|
| `fd` | 色付き出力ですべてのファイルを一覧表示 |
| `fda` | 絶対パスですべてのファイルを一覧表示 |
| `fdc` | 大文字小文字を区別しない検索 |
| `fdd` | 詳細ですべてのファイルを一覧表示 |
| `fde` | 指定された拡張子でファイルを一覧表示 |
| `fdf` | シンボリックリンクをたどって一覧表示 |
| `fdh` | fdのヘルプを表示 |
| `fdn` | globパターンに一致するファイルを一覧表示 |
| `fdo` | 所有者情報付きで一覧表示 |
| `fds` | サイズ付きで一覧表示 |
| `fdu` | 除外ルール付きで一覧表示 |
| `fdv` | fdのバージョンを表示 |
| `fdx` | 各検索結果に対してコマンドを実行 |
