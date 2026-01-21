---
description: kubernetes aliases for Dotfiles
lang: es-ES
metaTitle: kubernetes aliases - Dotfiles
permalink: /es/aliases/kubernetes/
---

# Alias de Kubernetes

Gestionar alias de Kubernetes. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Descripción

Estos alias están definidos en `kubernetes.aliases.sh` y son cargados automáticamente por `chezmoi`.

## ⚡ Alias

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
