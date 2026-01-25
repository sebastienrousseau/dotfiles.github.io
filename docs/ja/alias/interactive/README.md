---
description: 破壊的操作の前に確認プロンプトを追加する安全なシェルエイリアス。rm、mv、cpの誤操作を防止。
lang: ja-JP
metaTitle: インタラクティブエイリアス - Dotfiles (JP)
permalink: /ja/alias/interactive/
sidebar: true

meta:
  - name: keywords
    content: interactive aliases, shell safety, rm confirmation, cp interactive, mv prompt, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 破壊的操作の前に確認プロンプトを追加する安全なシェルエイリアス。rm、mv、cpの誤操作を防止。
  - name: twitter:title
    content: インタラクティブエイリアス - Dotfiles
  - name: og:title
    content: インタラクティブエイリアス - Dotfiles
  - name: og:description
    content: 破壊的操作の前に確認プロンプトを追加する安全なシェルエイリアス。rm、mv、cpの誤操作を防止。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# インタラクティブエイリアス

破壊的操作の前に確認プロンプトを表示する安全なシェルコマンド。

## 概要

インタラクティブエイリアスは、ファイルを永続的に変更または削除する可能性のある一般的なシェルコマンドに確認プロンプトを追加します。`interactive.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。潜在的に破壊的な操作を実行する前にユーザー確認を要求することで、誤ったデータ損失を防ぎます。

## リファレンス

### ファイル操作

| エイリアス | 説明 |
|:---|:---|
| `cp` | ファイルとディレクトリを対話的にコピー。上書き前に確認し、詳細出力を表示 |
| `mv` | ファイルを対話的に移動または名前変更。上書き前に確認し、詳細出力を表示 |
| `ln` | シンボリックリンクを対話的に作成。上書き前に確認し、詳細出力を表示 |

### ファイル削除

| エイリアス | 説明 |
|:---|:---|
| `rm` | ファイルまたはディレクトリを対話的に削除。各削除前に確認し、詳細出力を表示 |
| `del` | ファイルまたはディレクトリを対話的かつ再帰的に削除。各削除前に確認し、詳細出力を表示 |
| `zap` | `rm`のエイリアス。ファイルまたはディレクトリを対話的に削除 |

### ゴミ箱管理

| エイリアス | 説明 |
|:---|:---|
| `bin` | ゴミ箱ディレクトリ（`~/.Trash`）内のすべてのファイルを強制的に再帰的に削除 |

### パーミッションとユーティリティ

| エイリアス | 説明 |
|:---|:---|
| `chmod` | ファイルまたはディレクトリのパーミッションを詳細出力で変更 |
| `chown` | ファイルまたはディレクトリの所有者とグループを詳細出力で変更 |
| `diff` | 2つのファイルの差分を統合された形式で比較して表示 |
| `grep` | ファイルまたは出力内のパターンを検索し、行番号を表示して大文字小文字を区別しない |
| `mkdir` | 必要に応じて親ディレクトリを作成し、詳細出力で新しいディレクトリを作成 |
