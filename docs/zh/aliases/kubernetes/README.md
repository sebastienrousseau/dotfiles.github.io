---
description: 使用 kubectl、Helm 和 k9s 别名加速 Kubernetes 工作流。高效管理 pod、上下文和命名空间。
lang: zh-CN
metaTitle: Kubernetes 别名 - Dotfiles (CN)
permalink: /aliases/kubernetes/
sidebar: true

meta:
  - name: keywords
    content: kubernetes 别名, kubectl 快捷方式, helm 别名, k9s, dotfiles, shell
---

# Kubernetes 别名

使用简洁的 kubectl、Helm 和集群管理 shell 别名简化 Kubernetes 工作流。

## 概述

这些别名定义在 `kubernetes.aliases.sh` 中，由 chezmoi 自动加载。它们减少常见 Kubernetes 操作的按键次数，帮助你更快地管理集群、pod 和发布。

## 参考

### 核心

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `k` | `kubectl` | kubectl 快捷方式 |
| `kg` | `kubectl get` | 获取资源 |
| `kgp` | `kubectl get pods` | 获取 pod |
| `kga` | `kubectl get all` | 获取所有资源 |
| `kd` | `kubectl describe` | 描述资源 |
| `kdel` | `kubectl delete` | 删除资源 |
| `kl` | `kubectl logs` | 查看日志 |
| `kex` | `kubectl exec -it` | 执行交互式 shell |

### 上下文

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `kcx` | - | 列出上下文 |
| `kuse` | - | 切换上下文 |
| `kns` | - | 切换命名空间 |

### Helm

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `h` | `helm` | Helm 快捷方式 |
| `hls` | `helm list` | 列出发布 |
| `hi` | `helm install` | 安装 chart |

### UI

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `k9` | `k9s` | k9s 终端 UI |
