---
description: Kubernetes-Workflows beschleunigen mit kubectl, Helm und k9s Aliasen. Pods, Kontexte und Namespaces effizient verwalten.
lang: de-DE
metaTitle: Kubernetes Aliase - Dotfiles (DE)
permalink: /de/aliases/kubernetes/
sidebar: true

meta:
  - name: keywords
    content: kubernetes aliase, kubectl verknuepfungen, helm aliase, k9s, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Kubernetes Aliase - Dotfiles
  - name: twitter:description
    content: Kubernetes-Workflows beschleunigen mit kubectl, Helm und k9s Aliasen.
  - name: og:title
    content: Kubernetes Aliase - Dotfiles
  - name: og:description
    content: Kubernetes-Workflows beschleunigen mit kubectl, Helm und k9s Aliasen.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Kubernetes Aliase

Optimieren Sie Ihre Kubernetes-Workflows mit praegnanten Shell-Aliasen fuer kubectl, Helm und Cluster-Verwaltung.

## Uebersicht

Diese Aliase sind in `kubernetes.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie reduzieren Tastenanschlaege fuer gaengige Kubernetes-Operationen und helfen Ihnen, Cluster, Pods und Releases schneller zu verwalten.

## Referenz

### Kern

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `k` | `kubectl` | kubectl-Verknuepfung |
| `kg` | `kubectl get` | Ressourcen abrufen |
| `kgp` | `kubectl get pods` | Pods abrufen |
| `kga` | `kubectl get all` | Alle Ressourcen abrufen |
| `kd` | `kubectl describe` | Ressourcen beschreiben |
| `kdel` | `kubectl delete` | Ressourcen loeschen |
| `kl` | `kubectl logs` | Logs anzeigen |
| `kex` | `kubectl exec -it` | Interaktive Shell ausfuehren |

### Kontext

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `kcx` | - | Kontexte auflisten |
| `kuse` | - | Kontext wechseln |
| `kns` | - | Namespace wechseln |

### Helm

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `h` | `helm` | Helm-Verknuepfung |
| `hls` | `helm list` | Releases auflisten |
| `hi` | `helm install` | Chart installieren |

### UI

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `k9` | `k9s` | k9s Terminal-UI |
