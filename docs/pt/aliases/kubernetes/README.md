---
description: alias de Kubernetes para Dotfiles
lang: pt-PT
metaTitle: alias de Kubernetes - Dotfiles
permalink: /pt/aliases/kubernetes/
---
# Alias de Kubernetes

Gerenciar alias de Kubernetes. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `kubernetes.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

### core
- `k` - atalho do kubectl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### context
- `kcx` - listar contextos
- `kuse` - trocar contexto
- `kns` - trocar namespace

### helm
- `h` - atalho do Helm
- `hls` - listar releases
- `hi` - instalar chart

### ui
- `k9` - k9s UI terminal

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
