---
description: pnpmワークフローを効率化するエイリアス。インストール、ビルド、テスト、Node.js依存関係の管理。
lang: ja-JP
metaTitle: Pnpmエイリアス - Dotfiles (JP)
permalink: /ja/alias/pnpm/
sidebar: true

meta:
  - name: keywords
    content: pnpm aliases, package manager, node.js, npm alternative, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: pnpmワークフローを効率化するエイリアス。インストール、ビルド、テスト、Node.js依存関係の管理。
  - name: twitter:title
    content: Pnpmエイリアス - Dotfiles
  - name: og:title
    content: Pnpmエイリアス - Dotfiles
  - name: og:description
    content: pnpmワークフローを効率化するエイリアス。インストール、ビルド、テスト、Node.js依存関係の管理。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Pnpmエイリアス

高速でディスク効率の良いパッケージマネージャーのためのショートカット。

## 概要

これらのエイリアスは`pnpm.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。Node.jsパッケージ管理のための一般的な[pnpm](https://pnpm.io/)コマンドに素早くアクセスできます。

## リファレンス

### プロジェクト初期化

| エイリアス | 説明 |
|:---|:---|
| `pni` | 新しいプロジェクトを初期化 |
| `pnc` | 新しいプロジェクトを作成 |
| `pnin` | プロジェクトの依存関係をインストール |
| `pnun` | プロジェクトの依存関係をアンインストール |

### 開発

| エイリアス | 説明 |
|:---|:---|
| `pnb` | プロジェクトをビルド |
| `pnrun` | プロジェクトからスクリプトを実行 |
| `pnd` | プロジェクトを開発モードで実行 |
| `pns` | プロジェクトをサービスモードで実行 |
| `pnst` | プロジェクトを開始 |
| `pnsv` | プロジェクトをサーバーモードで実行 |

### テストと品質

| エイリアス | 説明 |
|:---|:---|
| `pnt` | プロジェクトをテスト |
| `pntc` | カバレッジ付きでプロジェクトをテスト |
| `pnln` | プロジェクトをlint |
| `pndoc` | プロジェクトのドキュメントを生成 |

### 依存関係管理

| エイリアス | 説明 |
|:---|:---|
| `pnls` | すべての依存関係を一覧表示 |
| `pnout` | 古い依存関係をチェック |
| `pnwhy` | 依存関係がインストールされている理由をチェック |
| `pnad` | 開発依存関係を追加 |
| `pnap` | ピア依存関係を追加 |
| `pnrm` | 依存関係を削除 |
| `pnup` | 依存関係を更新 |
| `pnui` | 依存関係を対話的に更新 |
| `pnuil` | 依存関係を対話的に最新バージョンに更新 |

### グローバルパッケージ

| エイリアス | 説明 |
|:---|:---|
| `pnga` | グローバル依存関係を追加 |
| `pngls` | すべてのグローバル依存関係を一覧表示 |
| `pngrm` | グローバル依存関係を削除 |
| `pngu` | グローバル依存関係を更新 |

### 公開とユーティリティ

| エイリアス | 説明 |
|:---|:---|
| `pnpub` | プロジェクトを公開 |
| `pnx` | pnpxのショートカット |
| `pnh` | ヘルプを表示 |
