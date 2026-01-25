---
description: chmod、chown、chgrpコマンド用シェルエイリアス。755、644、777などの数値ショートカットでファイルパーミッションを素早く設定。
lang: ja-JP
metaTitle: パーミッションエイリアス - Dotfiles (JP)
permalink: /ja/alias/permission/
sidebar: true

meta:
  - name: keywords
    content: permission aliases, chmod shortcuts, file permissions, chown, chgrp, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: chmod、chown、chgrpコマンド用シェルエイリアス。755、644、777などの数値ショートカットでファイルパーミッションを素早く設定。
  - name: twitter:title
    content: パーミッションエイリアス - Dotfiles
  - name: og:title
    content: パーミッションエイリアス - Dotfiles
  - name: og:description
    content: chmod、chown、chgrpコマンド用シェルエイリアス。755、644、777などの数値ショートカットでファイルパーミッションを素早く設定。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# パーミッションエイリアス

シェル環境でファイルとディレクトリのパーミッションを管理するためのショートカット。

## 概要

これらのエイリアスは`permission.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。一般的なパーミッションパターンと所有権コマンドに素早くアクセスできます。

## リファレンス

### 数値パーミッションショートカット

| エイリアス | 説明 |
|:---|:---|
| `000` | ユーザー、グループ、その他に対して読み取り、書き込み、実行のパーミッションなし |
| `400` | 読み取りまたは書き込みなし、ユーザーのみ実行を許可 |
| `444` | 書き込みまたは実行なし、全員に読み取りを許可 |
| `600` | ユーザーのみに読み取りと書き込み |
| `644` | 全員に読み取り、ユーザーのみ書き込み |
| `666` | 全員に読み取りと書き込み |
| `755` | ユーザーに読み取り、書き込み、実行、グループとその他に読み取りと実行 |
| `764` | ユーザーとグループに読み取りと書き込み、その他に読み取りのみ |
| `777` | 全員に読み取り、書き込み、実行 |

### ファイルモードコマンド

| エイリアス | 説明 |
|:---|:---|
| `chmod` | ファイルモードビットを変更 |
| `chmodr` | ファイルモードビットを再帰的に変更 |
| `chmodu` | ファイルモードビットを再帰的に現在のユーザーに変更 |
| `chmox` | ファイルを実行可能にする |

### 所有権コマンド

| エイリアス | 説明 |
|:---|:---|
| `chown` | ファイルの所有者とグループを変更 |
| `chownr` | ファイルの所有者とグループを再帰的に変更 |
| `chownu` | ファイルの所有者とグループを再帰的に現在のユーザーに変更 |
| `chgrp` | ファイルまたはディレクトリのグループ所有権を変更 |
| `chgrpr` | ファイルまたはディレクトリのグループ所有権を再帰的に変更 |
| `chgrpu` | ファイルまたはディレクトリのグループ所有権を再帰的に現在のユーザーに変更 |
