---
description: Kubernetes 别名用于 Dotfiles
lang: zh-CN
metaTitle: Kubernetes 别名 - Dotfiles
permalink: /zh/aliases/kubernetes/
---
# Kubernetes 别名

管理 Kubernetes 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `kubernetes.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

### core
- `k` - kubectl 快捷方式
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### context
- `kcx` - 列出 contexts
- `kuse` - 切换 context
- `kns` - 切换 namespace

### helm
- `h` - Helm 快捷方式
- `hls` - 列出 releases
- `hi` - 安装 chart

### ui
- `k9` - k9s 终端 UI

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
