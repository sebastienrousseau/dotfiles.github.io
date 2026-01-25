---
description: Makeコマンドのショートカットエイリアス。ビルド、テスト、プロジェクト自動化を簡素化。
lang: ja-JP
metaTitle: Makeエイリアス - Dotfiles (JP)
permalink: /ja/alias/make/
sidebar: true

meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Makeコマンドのショートカットエイリアス。ビルド、テスト、プロジェクト自動化を簡素化。
  - name: twitter:title
    content: Makeエイリアス - Dotfiles
  - name: og:title
    content: Makeエイリアス - Dotfiles
  - name: og:description
    content: Makeコマンドのショートカットエイリアス。ビルド、テスト、プロジェクト自動化を簡素化。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Makeエイリアス

Make用のショートハンドコマンドでビルドワークフローを簡素化。

## 概要

これらのエイリアスは一般的なMakeターゲットへの素早いアクセスを提供します。`make.aliases.sh`で定義され、ChezmoiによってUniversal Dotfiles設定の一部として自動的にロードされます。

## リファレンス

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `mk` | `make` | デフォルトのMakeターゲットを実行 |
| `mka` | `make all` | すべてのターゲットをビルド |
| `mkc` | `make clean` | ビルド成果物をクリーン |
| `mkd` | `make doc` | ドキュメントを生成 |
| `mkf` | `make format` | ソースファイルをフォーマット |
| `mkh` | `make help` | ヘルプ情報を表示 |
| `mki` | `make install` | プロジェクトをインストール |
| `mkr` | `make run` | プロジェクトを実行 |
| `mkt` | `make test` | テストを実行 |
