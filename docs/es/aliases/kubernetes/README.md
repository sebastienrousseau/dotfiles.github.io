---
description: Alias de Kubernetes para Dotfiles
lang: es-ES
metaTitle: Alias de Kubernetes - Dotfiles (ES)
permalink: /es/aliases/kubernetes/
---

# Alias de Kubernetes

Gestiona alias de Kubernetes. Parte de la configuración de **Universal Dotfiles**.

![Banner de Dotfiles][banner]

## 📖 Descripción

Estos alias están definidos en `kubernetes.aliases.sh` y son cargados automáticamente por `chezmoi`.

## ⚡ Alias

### Core

- `k` - Atajo para kubectl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### Contexto

- `kcx` - Listar contextos
- `kuse` - Cambiar contexto
- `kns` - Cambiar namespace

### Helm

- `h` - Atajo para Helm
- `hls` - Listar releases
- `hi` - Instalar chart

### UI

- `k9` - Interfaz de terminal k9s

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
