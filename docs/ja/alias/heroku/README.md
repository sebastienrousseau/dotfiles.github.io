---
description: Heroku CLIのシェルエイリアス。アプリ、データベース、パイプライン、デプロイメントの200以上のショートカット。
lang: ja-JP
metaTitle: Herokuエイリアス - Dotfiles (JP)
permalink: /ja/alias/heroku/
sidebar: true

meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Heroku CLIのシェルエイリアス。アプリ、データベース、パイプライン、デプロイメントの200以上のショートカット。
  - name: twitter:title
    content: Herokuエイリアス - Dotfiles
  - name: og:title
    content: Herokuエイリアス - Dotfiles
  - name: og:description
    content: Heroku CLIのシェルエイリアス。アプリ、データベース、パイプライン、デプロイメントの200以上のショートカット。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Herokuエイリアス

Heroku CLIのシェルショートカット。`heroku.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## 概要

このコレクションは[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)の200以上のエイリアスを提供し、アプリ管理、アドオン、データベース、パイプライン、コンテナなどをカバーします。

## リファレンス

### 一般コマンド

| エイリアス | 説明 |
|:---|:---|
| `hkk` | Heroku CLIコマンドショートカット |
| `hka` | アプリに新しいユーザーを追加 |
| `hkau` | チームアプリの既存のコラボレーターを更新 |
| `hkh` | Herokuのヘルプを表示 |
| `hkj` | チームアプリに自分自身を追加 |
| `hkl` | すべてのコマンドを一覧表示 |
| `hkla` | アプリへのアクセス権を持つユーザーを一覧表示 |
| `hklg` | 最近のログ出力を表示 |
| `hkn` | 通知を表示 |
| `hko` | メンバーになっているチームを一覧表示 |
| `hkoo` | ブラウザでチームインターフェースを開く |
| `hkp` | データベースにpsqlシェルを開く |
| `hkq` | チームアプリから自分自身を削除 |
| `hkr` | チームアプリからユーザーを削除 |
| `hkrg` | デプロイ可能なリージョンを一覧表示 |
| `hks` | Herokuプラットフォームの現在のステータスを表示 |
| `hkt` | メンバーになっているチームを一覧表示 |
| `hku` | Heroku CLIを更新 |
| `hkulk` | チームメンバーが参加できるようにアプリをロック解除 |
| `hkw` | コマンドがどのプラグインに含まれているかを表示 |

### アドオン

| エイリアス | 説明 |
|:---|:---|
| `hkada` | 既存のアドオンリソースをアプリにアタッチ |
| `hkadc` | 新しいアドオンリソースを作成 |
| `hkadd` | 既存のアドオンリソースをアプリからデタッチ |
| `hkaddoc` | ブラウザでアドオンのDev Centerドキュメントを開く |
| `hkaddown` | アドオンプランを変更 |
| `hkadi` | 詳細なアドオンリソースとアタッチメント情報を表示 |
| `hkadk` | アドオンリソースを永続的に破棄 |
| `hkadl` | アドオンとアタッチメントを一覧表示 |
| `hkado` | ブラウザでアドオンのダッシュボードを開く |
| `hkadp` | アドオンサービスの利用可能なプランを一覧表示 |
| `hkadr` | アドオン名を変更 |
| `hkads` | 利用可能なすべてのアドオンサービスを一覧表示 |
| `hkadu` | アドオンプランを変更 |
| `hkadw` | アプリのアドオンのプロビジョニングステータスを表示 |

### アプリ

| エイリアス | 説明 |
|:---|:---|
| `hkapc` | 新しいアプリを作成 |
| `hkape` | アプリのエラーを表示 |
| `hkapfav` | お気に入りアプリを一覧表示 |
| `hkapfava` | アプリをお気に入りに追加 |
| `hkapunfav` | アプリをお気に入りから削除 |
| `hkapi` | アプリの詳細情報を表示 |
| `hkapj` | チームアプリに自分自身を追加 |
| `hkapk` | アプリを永続的に破棄 |
| `hkapl` | アプリを一覧表示 |
| `hkaplk` | チームメンバーがアプリに参加するのを防ぐ |
| `hkapo` | ウェブブラウザでアプリを開く |
| `hkapq` | チームアプリから自分自身を削除 |
| `hkapr` | アプリ名を変更 |
| `hkaps` | 利用可能なスタックを一覧表示 |
| `hkapss` | アプリのスタックを設定 |
| `hkapt` | アプリケーションを別のユーザーまたはチームに転送 |
| `hkapulk` | チームメンバーが参加できるようにアプリをロック解除 |

### 認証

| エイリアス | 説明 |
|:---|:---|
| `hk2fa` | 現在ログイン中のユーザーを表示 |
| `hk2fad` | アカウントの2FAを無効化 |
| `hk2fain` | Herokuの認証情報でログイン |
| `hk2faout` | ローカルログイン認証情報をクリアしAPIセッションを無効化 |
| `hk2fas` | 2FAステータスを確認 |
| `hk2fat` | 現在のCLI認証トークンを出力 |

### OAuth認証

| エイリアス | 説明 |
|:---|:---|
| `hkauc` | 新しいOAuth認証を作成 |
| `hkaui` | 既存のOAuth認証を表示 |
| `hkaul` | OAuth認証を一覧表示 |
| `hkaur` | OAuth認証を失効 |
| `hkauro` | OAuth認証トークンを更新 |
| `hkauu` | OAuth認証を更新 |

### ビルドパック

| エイリアス | 説明 |
|:---|:---|
| `hkbpac` | 自動補完のインストール手順を表示 |
| `hkbpad` | 新しいアプリのビルドパックを追加 |
| `hkbpcl` | アプリに設定されたすべてのビルドパックをクリア |
| `hkbpi` | ビルドパックに関する情報を取得 |
| `hkbpl` | アプリのビルドパックを表示 |
| `hkbpr` | アプリに設定されたビルドパックを削除 |
| `hkbps` | ビルドパックを検索 |
| `hkbpv` | ビルドパックのバージョンを一覧表示 |

### 証明書

| エイリアス | 説明 |
|:---|:---|
| `hkca` | アプリのACMステータスを表示 |
| `hkcad` | アプリにSSL証明書を追加 |
| `hkcae` | アプリのACMステータスを有効化 |
| `hkcak` | アプリのACMを無効化 |
| `hkcar` | アプリのACMを更新 |
| `hkcc` | 証明書の完全なチェーンを表示 |
| `hkcg` | キーとCSRまたは自己署名証明書を生成 |
| `hkci` | SSL証明書に関する情報を表示 |
| `hkck` | 指定された証明書の正しいキーを表示 |
| `hkcl` | アプリのSSL証明書を一覧表示 |
| `hkcr` | アプリからSSL証明書を削除 |
| `hkcu` | アプリのSSL証明書を更新 |

### Docker Compose

| エイリアス | 説明 |
|:---|:---|
| `hkct` | コンテナを使用してHerokuアプリを構築・デプロイ |
| `hkctin` | Heroku Container Registryにログイン |
| `hkctout` | Heroku Container Registryからログアウト |
| `hkctpull` | アプリのプロセスタイプからイメージをプル |
| `hkctpush` | DockerイメージをビルドしてHerokuにプッシュ |
| `hkctrelease` | プッシュ済みDockerイメージをHerokuアプリにリリース |
| `hkctrm` | アプリからプロセスタイプを削除 |
| `hkctrun` | Dockerイメージをローカルでビルドして実行 |

### PostgreSQL

| エイリアス | 説明 |
|:---|:---|
| `hkpg` | データベース情報を表示 |
| `hkpgb` | テーブルとインデックスの肥大化を表示 |
| `hkpgbk` | データベースバックアップを一覧表示 |
| `hkpgbkc` | 新しいバックアップをキャプチャ |
| `hkpgbkdl` | バックアップを削除 |
| `hkpgbkdw` | データベースバックアップをダウンロード |
| `hkpgbkr` | データベースにバックアップを復元 |
| `hkpgpsql` | データベースにpsqlシェルを開く |
| `hkpgpull` | Herokuデータベースをローカルにプル |
| `hkpgpush` | ローカルをHerokuデータベースにプッシュ |
| `hkpgreset` | データベースのすべてのデータを削除 |

### パイプライン

| エイリアス | 説明 |
|:---|:---|
| `hkpipe` | アクセス権のあるパイプラインを一覧表示 |
| `hkpipea` | アプリをパイプラインに追加 |
| `hkpipec` | 新しいパイプラインを作成 |
| `hkpipect` | GitHubリポジトリを既存のパイプラインに接続 |
| `hkpipediff` | 最新リリースをダウンストリームアプリと比較 |
| `hkpipei` | パイプライン内のアプリを一覧表示 |
| `hkpipek` | パイプラインを破棄 |
| `hkpipeo` | ダッシュボードでパイプラインを開く |
| `hkpipep` | 最新リリースをダウンストリームにプロモート |
| `hkpiper` | このアプリをパイプラインから削除 |
| `hkpipern` | パイプライン名を変更 |
| `hkpipett` | パイプラインの所有権を転送 |

### Redis

| エイリアス | 説明 |
|:---|:---|
| `hkred` | Redisに関する情報を取得 |
| `hkredcli` | Redisプロンプトを開く |
| `hkredcr` | 認証情報を表示 |
| `hkredmt` | メンテナンスウィンドウを管理 |
| `hkredw` | Redisインスタンスが利用可能になるまで待機 |

### リリース

| エイリアス | 説明 |
|:---|:---|
| `hkrel` | アプリのリリースを表示 |
| `hkreli` | リリースの詳細情報を表示 |
| `hkrelo` | リリースコマンドの出力を表示 |
| `hkrelr` | 以前のリリースにロールバック |
