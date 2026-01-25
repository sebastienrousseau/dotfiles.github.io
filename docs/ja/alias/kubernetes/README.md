---
description: Kubernetesワークフロー用シェルエイリアス。kubectl、Helm、k9sでPod、コンテキスト、ネームスペースを効率的に管理。
lang: ja-JP
metaTitle: Kubernetesエイリアス - Dotfiles (JP)
permalink: /ja/alias/kubernetes/
sidebar: true

meta:
  - name: keywords
    content: kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Kubernetesワークフロー用シェルエイリアス。kubectl、Helm、k9sでPod、コンテキスト、ネームスペースを効率的に管理。
  - name: twitter:title
    content: Kubernetesエイリアス - Dotfiles
  - name: og:title
    content: Kubernetesエイリアス - Dotfiles
  - name: og:description
    content: Kubernetesワークフロー用シェルエイリアス。kubectl、Helm、k9sでPod、コンテキスト、ネームスペースを効率的に管理。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Kubernetesエイリアス

kubectl、Helm、クラスタ管理のための簡潔なシェルエイリアスでKubernetesワークフローを効率化。

## 概要

これらのエイリアスは`kubernetes.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。一般的なKubernetes操作のキーストロークを削減し、クラスタ、Pod、リリースをより速く管理できます。

## リファレンス

### コア

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `k` | `kubectl` | kubectlショートカット |
| `kg` | `kubectl get` | リソースを取得 |
| `kgp` | `kubectl get pods` | Podを取得 |
| `kga` | `kubectl get all` | すべてのリソースを取得 |
| `kd` | `kubectl describe` | リソースを説明 |
| `kdel` | `kubectl delete` | リソースを削除 |
| `kl` | `kubectl logs` | ログを表示 |
| `kex` | `kubectl exec -it` | インタラクティブシェルを実行 |

### コンテキスト

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `kcx` | - | コンテキストを一覧表示 |
| `kuse` | - | コンテキストを切り替え |
| `kns` | - | ネームスペースを切り替え |

### Helm

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `h` | `helm` | Helmショートカット |
| `hls` | `helm list` | リリースを一覧表示 |
| `hi` | `helm install` | チャートをインストール |

### UI

| エイリアス | コマンド | 説明 |
|:---|:---|:---|
| `k9` | `k9s` | k9sターミナルUI |
