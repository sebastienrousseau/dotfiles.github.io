---
description: ブックマーク、履歴追跡、スマートショートカットを備えたディレクトリナビゲーションエイリアス。ファイルシステムをより速くナビゲートします。
lang: ja-JP
metaTitle: CDエイリアス - Dotfiles (JP)
permalink: /ja/alias/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: ブックマーク、履歴追跡、スマートショートカットを備えたディレクトリナビゲーションエイリアス。ファイルシステムをより速くナビゲートします。
  - name: twitter:title
    content: CDエイリアス - Dotfiles
  - name: og:title
    content: CDエイリアス - Dotfiles
  - name: og:description
    content: ブックマーク、履歴追跡、スマートショートカットを備えたディレクトリナビゲーションエイリアス。ファイルシステムをより速くナビゲートします。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# CDエイリアス

ファイルシステムをより速くナビゲート。ブックマーク、履歴、スマートショートカット。

## 概要

これらのエイリアスは`cd.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### ナビゲーションショートカット

| エイリアス | 説明 |
|:---|:---|
| `-` | 前のディレクトリに切り替え |
| `..` | 1つ上のレベルへ移動 |
| `...` | 2つ上のレベルへ移動 |
| `....` | 3つ上のレベルへ移動 |
| `.....` | 4つ上のレベルへ移動 |
| `hom` | ホームディレクトリへ移動 |

### ディレクトリショートカット

| エイリアス | パス | 説明 |
|:---|:---|:---|
| `app` | `~/Applications` | アプリケーション |
| `cod` | `~/Code` | コードディレクトリ |
| `dsk` | `~/Desktop` | デスクトップ |
| `doc` | `~/Documents` | ドキュメント |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | ダウンロード |
| `mus` | `~/Music` | 音楽 |
| `pic` | `~/Pictures` | 画像 |
| `vid` | `~/Videos` | 動画 |

### システムディレクトリ

| エイリアス | パス | 説明 |
|:---|:---|:---|
| `etc` | `/etc` | システム設定 |
| `var` | `/var` | 可変ファイル |
| `tmp` | `/tmp` | 一時ファイル |
| `usr` | `/usr` | ユーザープログラム |

### ブックマーク

| コマンド | エイリアス | 説明 |
|:---|:---|:---|
| `bookmark [name]` | `bm` | ブックマークを作成 |
| `bookmark_list` | `bml` | ブックマークを一覧表示 |
| `bookmark_update` | `bmu` | ブックマークを更新 |
| `bookmark_remove` | `bmr` | ブックマークを削除 |
| `goto <name>` | `bmg` | ブックマークへ移動 |

```bash
bm work-project      # ブックマークを作成
bmg work-project     # ブックマークへ移動
bml                  # すべてのブックマークを一覧表示
```

### 履歴

| コマンド | エイリアス | 説明 |
|:---|:---|:---|
| `dirhistory` | `dh` | ディレクトリ履歴を表示 |
| `lwd` | `ld` | 最後のディレクトリに戻る |

### 高度な機能

| コマンド | エイリアス | 説明 |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | ディレクトリを作成して移動 |
| `proj` | `pr` | プロジェクトルートへ移動 |
| `pushd` | `pd` | ディレクトリをスタックにプッシュ |
| `popd` | - | スタックからポップ |
| `dirs` | - | ディレクトリスタックを一覧表示 |

## 設定

環境変数で動作をカスタマイズ：

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## ヘルプ

`cdhelp`ですべてのコマンドを表示、`cdversion`でバージョン情報を表示。
