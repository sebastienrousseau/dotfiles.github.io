---
description: GNU Coreutilsエイリアス。ファイル管理、テキスト処理、チェックサムユーティリティのショートカット。
lang: ja-JP
metaTitle: GNU Coreutilsエイリアス - Dotfiles (JP)
permalink: /ja/alias/gnu/
sidebar: true

meta:
  - name: keywords
    content: gnu coreutils, shell aliases, linux utilities, file management, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: GNU Coreutilsエイリアス。ファイル管理、テキスト処理、チェックサムユーティリティのショートカット。
  - name: twitter:title
    content: GNU Coreutilsエイリアス - Dotfiles
  - name: og:title
    content: GNU Coreutilsエイリアス - Dotfiles
  - name: og:description
    content: GNU Coreutilsエイリアス。ファイル管理、テキスト処理、チェックサムユーティリティのショートカット。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# GNU Coreutilsエイリアス

標準Unixユーティリティへのショートカットでコマンドラインワークフローを高速化。

## 概要

GNU Coreutilsエイリアスは標準Unixユーティリティのショートハンドコマンドを提供します。`gnu.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。ファイル操作、テキスト処理、データ検証タスクを簡素化します。

## リファレンス

### ファイル管理

| エイリアス | 説明 |
|:---|:---|
| `basename` | ファイル名からディレクトリとサフィックスを削除 |
| `cp` | ファイルとディレクトリをコピー |
| `dirname` | ファイル名から非ディレクトリサフィックスを削除 |
| `ln` | ファイル間にリンクを作成 |
| `loname` | リンクの名前を表示 |
| `ls` | ディレクトリの内容を一覧表示 |
| `mkdir` | ディレクトリを作成 |
| `mkfifo` | 名前付きパイプ（FIFO）を作成 |
| `mknod` | ブロックまたは文字特殊ファイルを作成 |
| `mv` | ファイルまたはディレクトリを移動または名前変更 |
| `pathchk` | ファイル名の有効性と移植性をチェック |
| `pwd` | 現在の作業ディレクトリ名を表示 |
| `readlink` | 解決されたシンボリックリンクを表示 |
| `realpath` | 解決された物理パスを表示 |
| `rm` | ファイルまたはディレクトリを削除 |
| `rmdir` | 空のディレクトリを削除 |
| `unlink` | ファイルまたはディレクトリを削除 |

### テキスト処理

| エイリアス | 説明 |
|:---|:---|
| `awk` | パターン検索と処理言語 |
| `cat` | ファイルを連結して表示 |
| `csplit` | ファイルをコンテキストで分割 |
| `cut` | ファイルの各行からセクションを削除 |
| `diff` | ファイルを行ごとに比較 |
| `fold` | 各入力行を指定幅に折り返し |
| `grep` | パターンに一致する行を表示 |
| `head` | ファイルの最初の部分を出力 |
| `nl` | ファイルの行番号を付ける |
| `paste` | ファイルの行をマージ |
| `patch` | 元のファイルに差分を適用 |
| `ptx` | ファイル内容の順列インデックスを生成 |
| `sed` | テキストをフィルタリング・変換するストリームエディタ |
| `sort` | テキストファイルの行をソート |
| `split` | ファイルを部分に分割 |
| `tail` | ファイルの最後の部分を出力 |
| `tr` | 文字を変換または削除 |

### チェックサムユーティリティ

| エイリアス | 説明 |
|:---|:---|
| `b2sum` | BLAKE2メッセージダイジェストを表示またはチェック |
| `cksum` | CRCチェックサムとバイト数を表示 |
| `sha1sum` | SHA1メッセージダイジェストを表示またはチェック |
| `sha224sum` | SHA224メッセージダイジェストを表示またはチェック |
| `sha256sum` | SHA256メッセージダイジェストを表示またはチェック |
| `sha384sum` | SHA384メッセージダイジェストを表示またはチェック |
| `sha512sum` | SHA512メッセージダイジェストを表示またはチェック |

### エンコーディングユーティリティ

| エイリアス | 説明 |
|:---|:---|
| `base32` | base32データを表示または変換 |
| `base64` | base64データをエンコードまたはデコード |
| `basenc` | 様々な形式でデータをエンコードまたはデコード |
