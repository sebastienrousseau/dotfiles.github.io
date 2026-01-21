---
description: Aliases de kubernetes para Dotfiles
lang: pt-BR
metaTitle: Aliases de Kubernetes - Dotfiles (BR)
permalink: /pt/aliases/kubernetes/
---

# Aliases de Kubernetes

Gerencie aliases do Kubernetes. Parte da configuração **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descrição

Esses aliases são definidos em `kubernetes.aliases.sh` e são carregados automaticamente pelo `chezmoi`.

## ⚡ Aliases

### core

- `k` - Atalho para kubectl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### contexto

- `kcx` - Listar contextos
- `kuse` - Alternar contexto
- `kns` - Alternar namespace

### helm

- `h` - Atalho para Helm
- `hls` - Listar releases
- `hi` - Instalar chart

### ui

- `k9` - Interface de terminal k9s

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
