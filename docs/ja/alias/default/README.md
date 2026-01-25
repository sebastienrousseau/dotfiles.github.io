---
description: ナビゲーション、システム制御、日常タスクのための必須シェルエイリアス。これらのユニバーサルショートカットでターミナルワークフローを簡素化。
lang: ja-JP
metaTitle: Defaultエイリアス - Dotfiles (JP)
permalink: /ja/alias/default/
sidebar: true

meta:
  - name: keywords
    content: default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Defaultエイリアス - Dotfiles
  - name: twitter:description
    content: ナビゲーション、システム制御、日常タスクのための必須シェルエイリアス。
  - name: og:title
    content: Defaultエイリアス - Dotfiles
  - name: og:description
    content: ナビゲーション、システム制御、日常タスクのための必須シェルエイリアス。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Defaultエイリアス

日常のターミナルタスクのための必須シェルショートカット。

## 概要

デフォルトエイリアスは、一般的なターミナル操作を効率化するユニバーサルシェルショートカットのコレクションを提供します。これらのエイリアスは`default.aliases.sh`で定義され、chezmoiによってサポートされるすべてのシェルで自動的にロードされます。

これらのショートカットは、一般ユーティリティ、終了コマンド、ネットワーク診断、システム監視、ファイルシステムナビゲーションをカバーしています。

## リファレンス

### 一般

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | 現在の日付と時刻を表示 |
| `p` | `pwd` | 作業ディレクトリを表示 |
| `path` | `echo ${PATH//:/\\n}` | PATH変数を改行で表示 |
| `r` | `reload` | シェルをリロード |
| `t` | `tail -f` | ファイル出力をリアルタイムで追跡 |
| `wk` | `date +%V` | 現在の週番号を表示 |

### 終了とシャットダウン

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `q` | `exit` | シェルを終了 |
| `quit` | `exit` | シェルを終了 |
| `bye` | `exit` | シェルを終了 |
| `:q` | `exit` | シェルを終了（vimスタイル） |
| `halt` | `sudo /sbin/halt` | システムを停止 |
| `poweroff` | `sudo /sbin/shutdown` | システムの電源を切る |
| `reboot` | `sudo /sbin/reboot` | システムを再起動 |

### 履歴

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `h` | `history` | コマンド履歴を表示 |
| `history` | `fc -il 1` | ISO 8601タイムスタンプ付きで履歴を表示 |

### ネットワーク

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | ネットワークインターフェースを設定 |
| `ipinfo` | `ipconfig getpacket en0` | en0のネットワークパラメータを取得 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | アクティブなネットワークリスナーを表示 |
| `op` | `sudo lsof -i -P` | 開いているポートを一覧表示 |
| `ping` | `ping -c 5` | 5パケット制限でping |
| `ports` | `netstat -tulan` | すべてのリスニングポートを一覧表示 |

### システム監視

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `top` | `sudo btop` | インタラクティブプロセスモニター |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | ASLログファイルをクリア |

### ユーティリティ

| エイリアス | コマンド | 説明 |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | 現在のディレクトリのファイル数をカウント |
| `qfind` | `find . -name` | クイックファイル検索 |
| `reload` | `exec $SHELL -l` | シェルをリロード |
| `wth` | `curl -s "wttr.in/?format=3"` | 現在の天気を取得 |
