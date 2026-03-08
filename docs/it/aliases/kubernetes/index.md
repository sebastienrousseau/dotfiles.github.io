---
title: Alias Kubernetes | Dotfiles
description: Alias shell per Kubernetes, Helm e K9s. Scorciatoie per kubectl get, describe, logs e gestione cluster.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Kubernetes preview
canonical: /it/aliases/kubernetes/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Kubernetes
pageType: docs
schemaType: WebPage
metaTitle: Alias Kubernetes - Dotfiles (IT)
permalink: /it/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: alias kubernetes, alias kubectl, alias helm, alias k9s, gestione cluster, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Kubernetes - Dotfiles
  - name: twitter:description
    content: Alias shell per Kubernetes, Helm e K9s. Scorciatoie per kubectl get, describe, logs e gestione cluster.
  - name: og:title
    content: Alias Kubernetes - Dotfiles
  - name: og:description
    content: Alias shell per Kubernetes, Helm e K9s. Scorciatoie per kubectl get, describe, logs e gestione cluster.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Kubernetes

Ottimizza le operazioni Kubernetes con alias per kubectl, Helm e K9s.

## Panoramica

Questi alias sono definiti in `kubernetes.aliases.sh` e caricati automaticamente da chezmoi. Forniscono comandi brevi per le operazioni Kubernetes piu comuni.

## Riferimento

### Core kubectl

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `k` | `kubectl` | Scorciatoia kubectl |
| `kg` | `kubectl get` | Ottieni risorse |
| `kgp` | `kubectl get pods` | Elenca pods |
| `kga` | `kubectl get all` | Elenca tutte le risorse |
| `kd` | `kubectl describe` | Descrivi risorsa |
| `kdel` | `kubectl delete` | Elimina risorsa |
| `kl` | `kubectl logs` | Visualizza log |
| `kex` | `kubectl exec -it` | Esegui comando interattivo nel pod |

### Contesto e namespace

| Alias | Descrizione |
|-------|-------------|
| `kcx` | Elenca i contesti |
| `kuse` | Cambia contesto |
| `kns` | Cambia namespace |

### Helm

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `h` | `helm` | Scorciatoia Helm |
| `hls` | `helm list` | Elenca release |
| `hi` | `helm install` | Installa chart |

### UI

| Alias | Descrizione |
|-------|-------------|
| `k9` | Avvia UI terminale K9s |
