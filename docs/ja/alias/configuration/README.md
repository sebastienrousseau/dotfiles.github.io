---
description: BashとZsh用のシェルエイリアスで、シェル、Git、SSH、サーバー設定ファイルを即座に開きます。
lang: ja-JP
metaTitle: Configurationエイリアス - Dotfiles (JP)
permalink: /ja/alias/configuration/
sidebar: true

meta:
  - name: keywords
    content: configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Configurationエイリアス - Dotfiles
  - name: twitter:description
    content: シェルエイリアスで、シェル、Git、SSH、サーバー設定ファイルを即座に開きます。
  - name: og:title
    content: Configurationエイリアス - Dotfiles
  - name: og:description
    content: シェルエイリアスで、シェル、Git、SSH、サーバー設定ファイルを即座に開きます。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Configurationエイリアス

1つのコマンドでデフォルトエディタで設定ファイルを開きます。

## 概要

Configurationエイリアスは、頻繁に編集する設定ファイルを開くためのショートカットを提供します。これらのエイリアスは`configuration.aliases.sh`で定義され、chezmoiによって自動的にロードされます。

各エイリアスは、システムのデフォルトテキストエディタで対応するファイルを起動し、ファイルパスを覚えたり長いコマンドを入力する必要がなくなります。

## リファレンス

### シェル設定

| エイリアス | 説明 |
|-------|-------------|
| `bshrc` | Bash設定ファイル（~/.bashrc）を開く |
| `bshp` | Bashプロファイル（~/.bash_profile）を開く |
| `zshrc` | Zsh設定ファイル（~/.zshrc）を開く |
| `zshp` | Zshプロファイル（~/.zprofile）を開く |

### バージョン管理

| エイリアス | 説明 |
|-------|-------------|
| `gcfg` | Git設定ファイル（~/.gitconfig）を開く |
| `gign` | Gitignoreファイル（~/.gitignore）を開く |

### ネットワークとサーバー

| エイリアス | 説明 |
|-------|-------------|
| `apconf` | Apache設定ファイルを開く |
| `ngconf` | Nginx設定ファイルを開く |
| `sshconf` | SSH設定ファイル（~/.ssh/config）を開く |
| `hosts` | hostsファイル（/etc/hosts）を開く |

### 開発ツール

| エイリアス | 説明 |
|-------|-------------|
| `dockcomp` | Docker Composeファイルを開く |
| `eddir` | 現在のディレクトリをデフォルトエディタで開く |
