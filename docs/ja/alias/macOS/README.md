---
description: macOSシステム管理、Finder制御、メンテナンスタスク用シェルエイリアス。
lang: ja-JP
metaTitle: macOSエイリアス - Dotfiles (JP)
permalink: /ja/alias/macOS/
sidebar: true

meta:
  - name: keywords
    content: macOS aliases, shell shortcuts, Finder aliases, Mac terminal, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: macOSシステム管理、Finder制御、メンテナンスタスク用シェルエイリアス。
  - name: twitter:title
    content: macOSエイリアス - Dotfiles
  - name: og:title
    content: macOSエイリアス - Dotfiles
  - name: og:description
    content: macOSシステム管理、Finder制御、メンテナンスタスク用シェルエイリアス。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# macOSエイリアス

macOSシステム管理とメンテナンスのためのシェルショートカット。

## 概要

これらのエイリアスは`macOS.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。Finder制御、システムメンテナンス、開発者ツールを含む一般的なmacOS操作に素早くアクセスできます。

## リファレンス

### システム管理

| エイリアス | 説明 |
|:---|:---|
| `lockScreen` | 画面をロック |
| `wifiOn` | Wi-Fiをオン |
| `wifiOff` | Wi-Fiをオフ |
| `vp` | macOSのパーミッションを検証 |
| `vv` | macOSのボリュームを検証 |

### Finder

| エイリアス | 説明 |
|:---|:---|
| `ofd` | 現在のディレクトリをFinderで開く |
| `finderShowHidden` | Finderで隠しファイルを表示 |
| `finderHideHidden` | Finderで隠しファイルを非表示 |
| `showDesktopIcons` | デスクトップ上のすべてのアイコンを表示 |
| `hideDesktopIcons` | デスクトップ上のすべてのアイコンを非表示 |

### クリーンアップ

| エイリアス | 説明 |
|:---|:---|
| `clds` | .DS_Storeファイルを再帰的に削除 |
| `clls` | LaunchServicesをクリーンアップして「このアプリケーションで開く」メニューの重複を削除 |
| `trash` | すべてのマウントされたボリュームとメインHDDのゴミ箱を空にする |

### 開発者ツール

| エイリアス | 説明 |
|:---|:---|
| `xcode` | Xcodeを起動 |
| `purge` | XcodeのDerivedDataをパージ |
| `iphone` | デバイスシミュレータを開く |
| `safariSafeMode` | Safariをセーフモードで起動 |

### ディスプレイ

| エイリアス | 説明 |
|:---|:---|
| `screensaverDesktop` | デスクトップでスクリーンセーバーを実行 |
