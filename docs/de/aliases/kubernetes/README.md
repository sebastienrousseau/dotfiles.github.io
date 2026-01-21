---
description: kubernetes aliases for Dotfiles
lang: de-DE
metaTitle: kubernetes aliases - Dotfiles
permalink: /de/aliases/kubernetes/
---

# Kubernetes-Aliase

Verwalten Sie Kubernetes-Aliase. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `kubernetes.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

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
