---
title: 概要 | Dotfiles
description: Chezmoiで管理される次世代の設定ファイル。高性能、安全、AIネイティブ。 macOS・Linux・WSL対応。Dotfilesで管理。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 概要 preview
canonical: /ja/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 概要
pageType: docs
schemaType: WebPage
metaTitle: 概要 - Dotfiles (JA)
permalink: /ja/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, 設定, 自動化, macos, linux, rust, zellij
---

# Dotfiles v0.2.481 について

## はじめに

Dotfilesは環境設定のモダンスタンダードです。**Chezmoi**上に構築され、シェル、アプリケーション、シークレットを安全かつ信頼性高くクロスプラットフォームで管理できます。

複雑なMakefileやシンボリックリンクスクリプトに依存するレガシーなdotfilesとは異なり、Dotfilesはアトミックで高速なテンプレートベースのアプローチを使用します。

## v0.2.481の新機能

- **モダンコア**: レガシーUnixツールを高性能Rust代替品に置き換え:
  - **Atuin** (`history`を置換)
  - **Yazi** (`ls`/`ranger`を置換)
  - **Zellij** (`tmux`を置換)
  - **Ghostty** (モダンGPUアクセラレーテッドターミナル)
  - **NeoVim** (モダンVimベースエディタ)
- **ネイティブセキュリティ**: サードパーティエージェントなしの完全ネイティブSSH署名。
- **インタラクティブモード**: 新しい`dot learn`コマンドで機能をガイド。

## インストール

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## 検証

```bash
dot doctor
```

## コアコマンド

- `dot apply` 設定変更を適用します。
- `dot update` リポジトリを更新し、キャッシュをウォームアップします。
- `dot doctor` パス、ツール、シェルの状態を検証します。
- `dot heal` 欠落または壊れた状態を修復します。
- `dot smoke-test` コアツールチェーンを検証します。

## 関連ページ

- [エイリアス](/ja/aliases/)
- [関数](/ja/functions/)
- [パス](/ja/paths/)

## コアコマンド

`dot` CLI は 53 のコマンドをカテゴリ別に提供します。

### コア

- `dot apply` — 設定変更を適用します.
- `dot sync` — 最新のリポジトリ状態を取得して適用します.
- `dot update` — リポジトリを更新しキャッシュをウォームアップします.
- `dot add` — 新しいファイルを Chezmoi ソースに追加します.
- `dot diff` — 適用前の保留中の変更を表示します.
- `dot status` — 管理対象ファイルのステータスを表示します.
- `dot remove` — ファイルの管理を解除しソースエントリを削除します.
- `dot cd` — Chezmoi ソースディレクトリ内でシェルを開きます.
- `dot edit` — 管理対象ファイルをエディタで開きます.
- `dot clean-cache` — 一時キャッシュを消去します.
- `dot prewarm` — シェルの高速起動のためにキャッシュを事前準備します.

### 診断

- `dot doctor` — パス、ツール、シェルの状態を検証します.
- `dot heal` — 欠落または破損した状態を自動的に修復します.
- `dot health` — 軽量なヘルスプローブを実行します.
- `dot verify` — ソースに対するファイルの整合性を確認します.
- `dot scorecard` — 設定品質スコアを表示します.
- `dot snapshot` — 後の比較のために現在の状態をキャプチャします.
- `dot smoke-test` — コアツールチェーンをエンドツーエンドで検証します.
- `dot chaos` — 自己修復をテストするために障害を注入します.
- `dot bundle` — ポータブルな設定バンドルをエクスポートします.
- `dot rollback` — 以前のスナップショットに戻します.
- `dot drift` — 管理対象ファイルへの予期しない変更を検出します.
- `dot history` — apply/sync の履歴ログを表示します.
- `dot benchmark` — シェルの起動時間を測定します.
- `dot perf` — シェル初期化の遅延をプロファイリングします.

### 外観

- `dot theme` — ターミナルのカラースキームを切り替えます.
- `dot wallpaper` — デスクトップの壁紙を設定します（macOS）.
- `dot fonts` — Nerd Fonts をインストールまたは更新します.
- `dot tune` — UI の密度とプロンプトスタイルを調整します.

### セキュリティ

- `dot backup` — 暗号化された設定バックアップを作成します.
- `dot encrypt-check` — 保存時のシークレット暗号化を検証します.
- `dot firewall` — ホストファイアウォールルールを設定します.
- `dot telemetry` — 匿名使用テレメトリを制御します.
- `dot dns-doh` — DNS-over-HTTPS を有効にします.
- `dot lock-screen` — 画面を即座にロックします.
- `dot usb-safety` — USB マスストレージの自動マウントを制限します.

### シークレット

- `dot secrets-init` — シークレットバックエンドを初期化します（age / GPG）.
- `dot secrets` — 暗号化されたシークレットエントリを一覧表示します.
- `dot secrets-create` — 新しい暗号化シークレットを作成します.
- `dot ssh-key` — SSH 鍵ペアを生成またはローテーションします.
- `dot ssh-cert` — CA から SSH 証明書を要求します.

### AI

- `dot ai` — インタラクティブな AI アシスタントセッションを開きます.
- `dot ai-setup` — AI プロバイダの API キーを設定します.
- `dot ai-query` — AI モデルにワンショットプロンプトを送信します.
- AI ツールラッパー: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### ツール

- `dot tools` — バンドルされた CLI 代替ツールとそのステータスを一覧表示します.
- `dot new` — 新しいエイリアスまたは関数ファイルを作成します.
- `dot sandbox` — 使い捨てサンドボックスシェルを開きます.
- `dot keys` — 現在のキーバインドを表示します.
- `dot learn` — インタラクティブチュートリアルを開始します.

### メタ

- `dot upgrade` — Dotfiles を最新リリースにアップグレードします.
- `dot packages` — Dotfiles が管理するインストール済みパッケージを一覧表示します.
- `dot version` / `dot help` — バージョンまたは使用方法の情報を表示します
