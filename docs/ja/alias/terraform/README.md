---
description: Infrastructure as Code用TerraformとAnsibleシェルエイリアス。IaCワークフローの素早いショートカット。
lang: ja-JP
metaTitle: Terraformエイリアス - Dotfiles (JP)
permalink: /ja/alias/terraform/
sidebar: true

meta:
  - name: keywords
    content: terraform, ansible, infrastructure as code, IaC, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Infrastructure as Code用TerraformとAnsibleシェルエイリアス。IaCワークフローの素早いショートカット。
  - name: twitter:title
    content: Terraformエイリアス - Dotfiles
  - name: og:title
    content: Terraformエイリアス - Dotfiles
  - name: og:description
    content: Infrastructure as Code用TerraformとAnsibleシェルエイリアス。IaCワークフローの素早いショートカット。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Terraformエイリアス

TerraformとAnsibleによるInfrastructure as Codeのためのショートカット。

## 概要

これらのエイリアスは`terraform.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### Terraform

| エイリアス | 説明 |
|:---|:---|
| `tf` | Terraformショートカット |
| `tfi` | 設定を初期化 |
| `tfp` | 変更を計画 |
| `tfa` | 変更を適用 |
| `tfaa` | 自動承認で適用 |
| `tfd` | インフラストラクチャを破棄 |
| `tff` | 設定をフォーマット |
| `tfv` | 設定を検証 |

### Ansible

| エイリアス | 説明 |
|:---|:---|
| `ans` | Ansibleショートカット |
| `ansp` | Ansible Playbookを実行 |
| `anslint` | Ansibleファイルをlint |
