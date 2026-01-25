---
title: "Kubernetes-aliassen: Stroomlijn je clusterbeheer"
description: "Versnel Kubernetes-workflows met kubectl-, Helm- en k9s-aliassen. Beheer pods, contexts en namespaces efficient."
lang: nl-NL
metaTitle: "Kubernetes-aliassen | Dotfiles"
permalink: /nl/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "kubernetes aliassen, kubectl snelkoppelingen, helm aliassen, k9s, dotfiles, shell"
---

# Kubernetes-aliassen

Stroomlijn je Kubernetes-workflows met beknopte shell-aliassen voor kubectl, Helm en clusterbeheer.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overzicht

Deze aliassen zijn gedefinieerd in `kubernetes.aliases.sh` en worden automatisch geladen door chezmoi. Ze verminderen toetsaanslagen voor gangbare Kubernetes-operaties en helpen je clusters, pods en releases sneller te beheren.

## Referentie

### Kern

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `k` | `kubectl` | kubectl-snelkoppeling |
| `kg` | `kubectl get` | Haal resources op |
| `kgp` | `kubectl get pods` | Haal pods op |
| `kga` | `kubectl get all` | Haal alle resources op |
| `kd` | `kubectl describe` | Beschrijf resources |
| `kdel` | `kubectl delete` | Verwijder resources |
| `kl` | `kubectl logs` | Bekijk logs |
| `kex` | `kubectl exec -it` | Voer interactieve shell uit |

### Context

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `kcx` | - | Toon contexts |
| `kuse` | - | Wissel van context |
| `kns` | - | Wissel van namespace |

### Helm

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `h` | `helm` | Helm-snelkoppeling |
| `hls` | `helm list` | Toon releases |
| `hi` | `helm install` | Installeer chart |

### UI

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `k9` | `k9s` | k9s terminal-UI |
