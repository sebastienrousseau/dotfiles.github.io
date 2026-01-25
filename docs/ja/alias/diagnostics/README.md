---
description: 自己修復とシステムヘルスチェックのためのシェルエイリアス。dotfiles環境の問題を検出して修復します。
lang: ja-JP
metaTitle: Diagnosticsエイリアス - Dotfiles (JP)
permalink: /ja/alias/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: diagnostics, health check, self-healing, dotfiles, shell aliases, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 自己修復とシステムヘルスチェックのためのシェルエイリアス。dotfiles環境の問題を検出して修復します。
  - name: twitter:title
    content: Diagnosticsエイリアス - Dotfiles
  - name: og:title
    content: Diagnosticsエイリアス - Dotfiles
  - name: og:description
    content: 自己修復とシステムヘルスチェックのためのシェルエイリアス。dotfiles環境の問題を検出して修復します。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Diagnosticsエイリアス

自己修復およびシステムヘルスチェックツール。

## 概要

これらのエイリアスは`diagnostics.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### ヘルスと修復

| エイリアス | 説明 |
|:---|:---|
| `doc`, `dot-doctor` | システムヘルスチェックスクリプト（`doctor.sh`）を実行 |
| `drift`, `dot-drift` | ローカルファイルが管理対象の状態からずれていないか確認（`chezmoi verify`） |
| `heal`, `dot-heal` | 管理対象の状態を適用してずれを修復（`chezmoi apply`） |
| `doc-full` | 拡張パスデバッグ情報付きでdoctorを実行 |
