---
description: kubernetes aliases for Dotfiles
lang: pt-BR
metaTitle: kubernetes aliases - Dotfiles
permalink: /pt/aliases/kubernetes/
---

# Aliases de Kubernetes

Gerenciar aliases de Kubernetes. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Descrição

Estes aliases são definidos em `kubernetes.aliases.sh` e são carregados automaticamente por `chezmoi`.

## ⚡ Aliases

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
