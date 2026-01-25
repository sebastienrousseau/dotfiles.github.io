---
title: "Aliases de Kubernetes: Atalhos para kubectl, Helm e K9s"
description: "Aliases de shell para Kubernetes, Helm e K9s. Gerencie pods, deployments, servicos e clusters com comandos curtos."
lang: pt-BR
metaTitle: "Aliases de Kubernetes | Dotfiles"
permalink: /pt/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "aliases kubernetes, kubectl, helm, k9s, aliases shell, dotfiles"
---

# Aliases de Kubernetes

Gerencie clusters Kubernetes com comandos curtos.

## Visao Geral

Estes aliases sao definidos em `kubernetes.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Core

| Alias | Descricao |
|-------|-------------|
| `k` | Atalho do kubectl |
| `kg` | `kubectl get` |
| `kgp` | `kubectl get pods` |
| `kga` | `kubectl get all` |
| `kd` | `kubectl describe` |
| `kdel` | `kubectl delete` |
| `kl` | `kubectl logs` |
| `kex` | `kubectl exec -it` |

### Contexto

| Alias | Descricao |
|-------|-------------|
| `kcx` | Listar contextos |
| `kuse` | Trocar contexto |
| `kns` | Trocar namespace |

### Helm

| Alias | Descricao |
|-------|-------------|
| `h` | Atalho do Helm |
| `hls` | Listar releases |
| `hi` | Instalar chart |

### UI

| Alias | Descricao |
|-------|-------------|
| `k9` | K9s UI terminal |
