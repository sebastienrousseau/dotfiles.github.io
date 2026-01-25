---
title: "Alias Kubernetes: simplifica la gestión de clusters"
description: "Acelera flujos Kubernetes con alias de kubectl, Helm y k9s. Gestiona pods, contextos y namespaces."
lang: es-ES
metaTitle: "Alias Kubernetes | Dotfiles"
permalink: /aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "alias kubernetes, atajos kubectl, alias helm, k9s, dotfiles, shell"
---

# Alias Kubernetes

Simplifica tus flujos Kubernetes con alias concisos para kubectl, Helm y gestión de clúster.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Descubrir

Estos alias se definen en `kubernetes.aliases.sh` y se cargan automáticamente por chezmoi. Reducen pulsaciones para operaciones comunes y ayudan a gestionar clústeres, pods y releases más rápido.

## Referencia

### Núcleo

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `k` | `kubectl` | Atajo de kubectl |
| `kg` | `kubectl get` | Obtener recursos |
| `kgp` | `kubectl get pods` | Obtener pods |
| `kga` | `kubectl get all` | Obtener todos los recursos |
| `kd` | `kubectl describe` | Describir recursos |
| `kdel` | `kubectl delete` | Eliminar recursos |
| `kl` | `kubectl logs` | Ver logs |
| `kex` | `kubectl exec -it` | Ejecutar shell interactivo |

### Contexto

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `kcx` | - | Listar contextos |
| `kuse` | - | Cambiar de contexto |
| `kns` | - | Cambiar de namespace |

### Helm

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `h` | `helm` | Atajo de Helm |
| `hls` | `helm list` | Listar releases |
| `hi` | `helm install` | Instalar chart |

### UI

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `k9` | `k9s` | UI de terminal k9s |
