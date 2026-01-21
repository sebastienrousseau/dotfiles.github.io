---
description: kubernetes aliases for Dotfiles
lang: zh-CN
metaTitle: kubernetes aliases - Dotfiles
permalink: /zh/aliases/kubernetes/
---

# Kubernetes 别名

管理 Kubernetes 别名。 Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `kubernetes.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

### core
- `k` - kubectl shortcut
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### context
- `kcx` - List contexts
- `kuse` - Switch context
- `kns` - Switch namespace

### helm
- `h` - Helm shortcut
- `hls` - List releases
- `hi` - Install chart

### ui
- `k9` - k9s terminal UI

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
