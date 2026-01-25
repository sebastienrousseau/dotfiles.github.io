---
description: ターミナル環境での規制準拠、プライバシー強制、設定監査のためのシェルエイリアス。
lang: ja-JP
metaTitle: Complianceエイリアス - Dotfiles (JP)
permalink: /ja/alias/compliance/
sidebar: true

meta:
  - name: keywords
    content: compliance aliases, privacy mode, telemetry disable, audit trail, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: ターミナル環境での規制準拠、プライバシー強制、設定監査のためのシェルエイリアス。
  - name: twitter:title
    content: Complianceエイリアス - Dotfiles
  - name: og:title
    content: Complianceエイリアス - Dotfiles
  - name: og:description
    content: ターミナル環境での規制準拠、プライバシー強制、設定監査のためのシェルエイリアス。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Complianceエイリアス

規制準拠とプライバシー強制のためのシェルツール。

## 概要

Complianceエイリアスは、シェル環境でのプライバシー管理と監査証跡の維持に不可欠なコントロールを提供します。これらのエイリアスは、一般的なCLIツール全体でテレメトリを無効にし、コンプライアンス要件のための設定変更を追跡するのに役立ちます。

## リファレンス

### コントロール

| エイリアス | 説明 |
|-------|-------------|
| `privacy-mode` | 現在のセッションでCLIツール（Homebrew、Dotnet、Azureなど）のテレメトリを無効にします。 |
| `dot-audit` | 最近の設定監査証跡（Git履歴または監査ログ）を表示します。 |
