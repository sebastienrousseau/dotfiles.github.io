---
title: "Aliases de Kubernetes: Atalhos para kubectl, Helm e K9s"
description: Aliases de shell para Kubernetes, Helm e K9s. Gerencie pods, deployments, servicos e clusters com comandos curtos.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Kubernetes: Atalhos para kubectl, Helm e K9s preview"
canonical: /pt/aliases/kubernetes/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Kubernetes: Atalhos para kubectl, Helm e K9s"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Kubernetes | Dotfiles
permalink: /pt/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: aliases kubernetes, kubectl, helm, k9s, aliases shell, dotfiles
---

# Aliases de Kubernetes

Gerencie clusters Kubernetes com comandos curtos.

## Visão Geral

Estes aliases são definidos em `kubernetes.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Core

| Alias | Descrição |
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

| Alias | Descrição |
|-------|-------------|
| `kcx` | Listar contextos |
| `kuse` | Trocar contexto |
| `kns` | Trocar namespace |

### Helm

| Alias | Descrição |
|-------|-------------|
| `h` | Atalho do Helm |
| `hls` | Listar releases |
| `hi` | Instalar chart |

### UI

| Alias | Descrição |
|-------|-------------|
| `k9` | K9s UI terminal |
