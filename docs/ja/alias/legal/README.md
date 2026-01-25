---
description: オープンソースコンプライアンスツール用シェルエイリアス。ライセンススキャン、著作権ヘッダー、帰属管理。
lang: ja-JP
metaTitle: 法的エイリアス - Dotfiles (JP)
permalink: /ja/alias/legal/
sidebar: true

meta:
  - name: keywords
    content: legal aliases, license scanning, copyright headers, open source compliance, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: オープンソースコンプライアンスツール用シェルエイリアス。ライセンススキャン、著作権ヘッダー、帰属管理。
  - name: twitter:title
    content: 法的エイリアス - Dotfiles
  - name: og:title
    content: 法的エイリアス - Dotfiles
  - name: og:description
    content: オープンソースコンプライアンスツール用シェルエイリアス。ライセンススキャン、著作権ヘッダー、帰属管理。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# 法的エイリアス

オープンソースコンプライアンス、ライセンススキャン、帰属管理のためのシェルツール。

## 概要

法的エイリアスは、プロジェクト全体でオープンソースコンプライアンスを維持するための効率的なワークフローを提供します。これらのツールはライセンススキャン、著作権ヘッダー管理、依存関係の帰属を処理します。

## リファレンス

### ライセンススキャン

| エイリアス | 説明 | タイプ |
|:---|:---|:---|
| `fossology-start` | ポート8081でローカルのFOSSologyサーバーを起動 | Docker |
| `fossology-stop` | FOSSologyサーバーを停止 | Docker |
| `license-scan` | Trivyによる現在のディレクトリのクイックライセンススキャン | バイナリ |

### 著作権ヘッダー

| エイリアス | 説明 | タイプ |
|:---|:---|:---|
| `add-headers` | すべてのソースファイルにMITライセンスヘッダーを再帰的に追加 | Docker (google/addlicense) |

### 帰属

| エイリアス | 説明 | タイプ |
|:---|:---|:---|
| `gen-notice` | 依存関係のNOTICEファイルを生成（初期はGoサポート） | Docker |

### 貢献

| エイリアス | 説明 | タイプ |
|:---|:---|:---|
| `check-cla` | CLAステータスを含むGitHub PRチェックを監視 | CLI (gh) |

## 要件

- **Docker** - コンプライアンスツールの分離に必要
- **GitHub CLI (gh)** - PRおよびCLAチェックに必要
- **Trivy** - 高速スキャン用に自動インストールまたは推奨
