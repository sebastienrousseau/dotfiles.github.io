---
description: 頻繁に使用するコマンドのショートカットを作成するシェルエイリアス。日常のワークフローでタイピングを減らし、生産性を向上させます。
lang: ja-JP
metaTitle: エイリアス - Dotfiles (JP)
permalink: /ja/alias/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 頻繁に使用するコマンドのショートカットを作成するシェルエイリアス。日常のワークフローでタイピングを減らし、生産性を向上させます。
  - name: twitter:title
    content: エイリアス - Dotfiles
  - name: og:title
    content: エイリアス - Dotfiles
  - name: og:description
    content: 頻繁に使用するコマンドのショートカットを作成するシェルエイリアス。日常のワークフローでタイピングを減らし、生産性を向上させます。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# エイリアス

**Chezmoi**で管理されるモジュラーシェルエイリアス。少ないタイピングで多くを実行。

## 概要

エイリアスは、ツールやワークフローごとに小さく焦点を絞ったファイルに整理されています。`chezmoi apply`実行時、すべてのエイリアスファイルは`~/.config/shell/aliases.sh`に集約され、シェルによってソースされます。

## 使い方

### エイリアスの追加

1. 新しいファイルを作成します（例：`mytool/mytool.aliases.sh`）
2. エイリアスを定義します：
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. 変更を適用します：
   ```bash
   chezmoi apply
   ```

## リファレンス

カテゴリ別にエイリアスを参照：

<!-- markdownlint-disable MD013-->

| カテゴリ | 説明 |
| :--- | :--- |
| [AI](ai/) | AIアシスタントとLLMツールのショートカット |
| [Archives](archives/) | ファイルの圧縮と展開 |
| [CD](cd/) | ファイルシステムのナビゲーション |
| [Chmod](chmod/) | ファイル権限の変更 |
| [Clear](clear/) | ターミナル画面のクリア |
| [Compliance](compliance/) | SOC2とプライバシーツール |
| [Configuration](configuration/) | dotfilesとシェル設定の管理 |
| [Default](default/) | デフォルトのシェルエイリアス |
| [Diagnostics](diagnostics/) | 自己修復とヘルスチェック |
| [Dig](dig/) | DNSサーバーのクエリ |
| [Disk Usage](disk-usage/) | ディスク使用量情報の表示 |
| [Docker](docker/) | コンテナ管理 |
| [Editor](editor/) | テキストエディタの設定 |
| [Find](find/) | ファイルとディレクトリの検索 |
| [Fonts](fonts/) | フォントキャッシュ管理 |
| [GCloud](gcloud/) | Google Cloud SDKツール |
| [Git](git/) | Gitバージョン管理 |
| [GNU](gnu/) | GNUコアユーティリティ |
| [Go](go/) | Go言語ツール |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | ブートストラップとデプロイメント |
| [Interactive](interactive/) | インタラクティブシェルの動作 |
| [Kubernetes](kubernetes/) | Kubernetes、Helm、K9s |
| [Legal](legal/) | ライセンススキャンツール |
| [macOS](macOS/) | macOS固有の設定 |
| [Make](make/) | GNU Makeユーティリティ |
| [Mkdir](mkdir/) | ディレクトリの作成 |
| [Modern](modern/) | Rustベースのツール代替 |
| [NPM](npm/) | Node.jsパッケージマネージャー |
| [Permission](permission/) | ファイル権限 |
| [PNPM](pnpm/) | PNPMパッケージマネージャー |
| [PS](ps/) | プロセスステータス |
| [Python](python/) | Pythonユーティリティ |
| [Rsync](rsync/) | 効率的なファイル転送 |
| [Rust](rust/) | Rustプログラミングツール |
| [Security](security/) | 不変性と署名 |
| [Subversion](subversion/) | SVNバージョン管理 |
| [Sudo](sudo/) | スーパーユーザー操作 |
| [Terraform](terraform/) | Infrastructure as Code |
| [Tmux](tmux/) | ターミナルマルチプレクサ |
| [Update](update/) | dotfilesの更新 |
| [UUID](uuid/) | UUIDの生成 |
| [Wget](wget/) | コマンドラインダウンローダー |
| [Yarn](yarn/) | Yarnパッケージマネージャー |

<!-- markdownlint-enable MD013-->
