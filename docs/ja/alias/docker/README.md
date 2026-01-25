---
description: Docker、Docker Compose、Docker Swarmのためのシェルエイリアス。コンテナ、イメージ、ボリューム、ネットワークを効率的に管理します。
lang: ja-JP
metaTitle: Dockerエイリアス - Dotfiles (JP)
permalink: /ja/alias/docker/
sidebar: true

meta:
  - name: keywords
    content: docker, docker-compose, container, shell aliases, dotfiles, devops
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Docker、Docker Compose、Docker Swarmのためのシェルエイリアス。コンテナ、イメージ、ボリューム、ネットワークを効率的に管理します。
  - name: twitter:title
    content: Dockerエイリアス - Dotfiles
  - name: og:title
    content: Dockerエイリアス - Dotfiles
  - name: og:description
    content: Docker、Docker Compose、Docker Swarmのためのシェルエイリアス。コンテナ、イメージ、ボリューム、ネットワークを効率的に管理します。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Dockerエイリアス

Docker、Docker Compose、Docker Swarmのためのシェルショートカット。

## 概要

これらのエイリアスは`docker.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### 基本コマンド

| エイリアス | 説明 |
|:---|:---|
| `dk` | Dockerショートカット |
| `dkv` | Dockerバージョンを表示 |
| `dki` | システム情報を表示 |
| `dkl` | Dockerレジストリにログイン |
| `dklo` | Dockerレジストリからログアウト |

### コンテナ操作

| エイリアス | 説明 |
|:---|:---|
| `dkps` | 実行中のコンテナを一覧表示 |
| `dkpsa` | すべてのコンテナを一覧表示 |
| `dkr` | 新しいコンテナでコマンドを実行 |
| `dkri` | 対話型コンテナを実行 |
| `dkrd` | バックグラウンドでコンテナを実行 |
| `dks` | コンテナを開始 |
| `dkst` | コンテナを停止 |
| `dkrs` | コンテナを再起動 |
| `dkrm` | コンテナを削除 |
| `dkrma` | すべてのコンテナを削除 |

### イメージ

| エイリアス | 説明 |
|:---|:---|
| `dki` | イメージを一覧表示 |
| `dkia` | すべてのイメージを一覧表示 |
| `dkb` | イメージをビルド |
| `dkbt` | イメージをビルドしてタグ付け |
| `dkpu` | イメージをプッシュ |
| `dkpl` | イメージをプル |
| `dkrmi` | イメージを削除 |

### Docker Compose

| エイリアス | 説明 |
|:---|:---|
| `dc` | Docker Composeショートカット |
| `dcu` | コンテナを作成して開始 |
| `dcud` | バックグラウンドで開始 |
| `dcd` | コンテナを停止して削除 |
| `dcr` | サービスを再起動 |
| `dcps` | コンテナを一覧表示 |
| `dcl` | ログを表示 |
| `dclf` | ログを追跡 |

### ボリュームとネットワーク

| エイリアス | 説明 |
|:---|:---|
| `dkvls` | ボリュームを一覧表示 |
| `dkvc` | ボリュームを作成 |
| `dkvrm` | ボリュームを削除 |
| `dknls` | ネットワークを一覧表示 |
| `dknc` | ネットワークを作成 |
| `dknrm` | ネットワークを削除 |
