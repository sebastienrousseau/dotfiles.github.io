---
description: npmワークフローを高速化する直感的なシェルエイリアス。インストール、ビルド、テスト、公開コマンドのショートカット。
lang: ja-JP
metaTitle: NPMエイリアス - Dotfiles (JP)
permalink: /ja/alias/npm/
sidebar: true

meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: npmワークフローを高速化する直感的なシェルエイリアス。インストール、ビルド、テスト、公開コマンドのショートカット。
  - name: twitter:title
    content: NPMエイリアス - Dotfiles
  - name: og:title
    content: NPMエイリアス - Dotfiles
  - name: og:description
    content: npmワークフローを高速化する直感的なシェルエイリアス。インストール、ビルド、テスト、公開コマンドのショートカット。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# NPMエイリアス

npmパッケージマネージャー用のショートハンドコマンドでNode.js開発を簡素化。

## 概要

これらのエイリアスは`npm.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。一般的なnpm操作に素早くアクセスできます。

## リファレンス

### パッケージ管理

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `npi` | `npm install` | npmパッケージをインストール |
| `npg` | `npm install -g` | グローバルnpmパッケージ |
| `nprm` | `npm uninstall` | npmパッケージを削除 |
| `npu` | `npm update` | npmパッケージを更新 |
| `npl` | `npm list` | npmパッケージを一覧表示 |
| `npc` | `npm cache` | npmパッケージをキャッシュ |

### スクリプト

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `npr` | `npm run` | npmスクリプトを実行 |
| `nps` | `npm start` | npmスクリプトを開始 |
| `npb` | `npm run build` | npmスクリプトをビルド |
| `npd` | `npm run dev` | 開発npmスクリプト |
| `npt` | `npm test` | npmスクリプトをテスト |
| `nprw` | `npm run watch` | npmスクリプトを監視モードで実行 |
| `npsv` | `npm run serve` | npmスクリプトを提供 |

### 公開と分析

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `npp` | `npm publish` | npmパッケージを公開 |
| `npa` | `npm audit` | npmパッケージを監査 |
| `npx` | `npm exec` | npmパッケージを実行 |
| `npy` | `npm why` | npmパッケージがインストールされている理由 |
