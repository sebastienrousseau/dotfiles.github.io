---
description: chmodエイリアスでファイルとディレクトリの権限管理を簡素化。755、644などの一般的な権限パターンのクイックショートカット。
lang: ja-JP
metaTitle: Chmodエイリアス - Dotfiles (JP)
permalink: /ja/alias/chmod/
sidebar: true

meta:
  - name: keywords
    content: chmod aliases, file permissions, shell shortcuts, dotfiles, unix permissions
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Chmodエイリアス - Dotfiles
  - name: twitter:description
    content: chmodエイリアスでファイルとディレクトリの権限管理を簡素化。
  - name: og:title
    content: Chmodエイリアス - Dotfiles
  - name: og:description
    content: chmodエイリアスでファイルとディレクトリの権限管理を簡素化。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Chmodエイリアス

ファイルとディレクトリの権限管理のためのショートカット。

## 概要

chmodエイリアスは、コマンドラインからファイルとディレクトリの権限を管理する効率的な方法を提供します。数値の権限コードを覚える代わりに、`chmod_755`や`chmod_u+x`のような直感的なエイリアスを使用して、必要なアクセスモードを素早く設定できます。

これらのエイリアスは`chmod.aliases.sh`で定義され、chezmoiによって自動的にロードされます。

## リファレンス

### 一般的な権限エイリアス

| エイリアス | 権限 | 説明 |
|-------|-------------|-------------|
| `chmod_000` | `----------` | 誰にも権限なし |
| `chmod_400` | `r--------` | 所有者のみ読み取り専用 |
| `chmod_444` | `r--r--r--` | 全員読み取り専用 |
| `chmod_600` | `rw-------` | 所有者のみ読み書き |
| `chmod_644` | `rw-r--r--` | 所有者は読み書き、他は読み取り専用 |
| `chmod_666` | `rw-rw-rw-` | 全員読み書き |
| `chmod_755` | `rwxr-xr-x` | 所有者はフル、他は読み取り/実行 |
| `chmod_764` | `rwxrw-r--` | 所有者はフル、グループは読み書き |
| `chmod_777` | `rwxrwxrwx` | 全員フル権限 |

### 所有者権限エイリアス

| エイリアス | 説明 |
|-------|-------------|
| `chmod_u+x` | 所有者に実行権限を追加 |
| `chmod_u-x` | 所有者から実行権限を削除 |
| `chmod_u+w` | 所有者に書き込み権限を追加 |
| `chmod_u-w` | 所有者から書き込み権限を削除 |
| `chmod_u+r` | 所有者に読み取り権限を追加 |
| `chmod_u-r` | 所有者から読み取り権限を削除 |

### グループ権限エイリアス

| エイリアス | 説明 |
|-------|-------------|
| `chmod_g+x` | グループに実行権限を追加 |
| `chmod_g-x` | グループから実行権限を削除 |
| `chmod_g+w` | グループに書き込み権限を追加 |
| `chmod_g-w` | グループから書き込み権限を削除 |
| `chmod_g+r` | グループに読み取り権限を追加 |
| `chmod_g-r` | グループから読み取り権限を削除 |

### その他の権限エイリアス

| エイリアス | 説明 |
|-------|-------------|
| `chmod_o+x` | その他に実行権限を追加 |
| `chmod_o-x` | その他から実行権限を削除 |
| `chmod_o+w` | その他に書き込み権限を追加 |
| `chmod_o-w` | その他から書き込み権限を削除 |
| `chmod_o+r` | その他に読み取り権限を追加 |
| `chmod_o-r` | その他から読み取り権限を削除 |

### ファイルタイプエイリアス

| エイリアス | 説明 |
|-------|-------------|
| `chmod_755d` | すべてのディレクトリの権限を`rwxr-xr-x`に設定 |
| `chmod_644f` | すべてのファイルの権限を`rw-r--r--`に設定 |

### 再帰的権限関数

`change_permission`関数は、確認プロンプト付きで権限を再帰的に適用します：

```bash
change_permission 755 /path/to/directory -R
```
