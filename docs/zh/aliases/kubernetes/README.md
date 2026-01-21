---
description: Dotfiles 的 Kubernetes 别名
lang: zh-CN
metaTitle: Kubernetes 别名 - Dotfiles (CN)
permalink: /zh/aliases/kubernetes/
---

# Kubernetes 别名

管理 Kubernetes 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名在 `kubernetes.aliases.sh` 中定义，并由 `chezmoi` 自动加载。

## ⚡ 别名

### 核心 (core)

- `k` - kubectl 快捷方式
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### 上下文 (context)

- `kcx` - 列出上下文
- `kuse` - 切换上下文
- `kns` - 切换命名空间

### helm

- `h` - Helm 快捷方式
- `hls` - 列出发布
- `hi` - 安装 chart

### 界面 (ui)

- `k9` - k9s 终端 UI

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
