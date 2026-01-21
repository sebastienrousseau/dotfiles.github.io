---
description: Kubernetes Aliase für Dotfiles
lang: de-DE
metaTitle: Kubernetes Aliase - Dotfiles (DE)
permalink: /de/aliases/kubernetes/
---

# Kubernetes Aliase

Verwalten Sie Kubernetes-Aliase. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `kubernetes.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

### Core

- `k` - kubectl Kurzbefehl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### Kontext

- `kcx` - Kontexte auflisten
- `kuse` - Kontext wechseln
- `kns` - Namespace wechseln

### Helm

- `h` - Helm Kurzbefehl
- `hls` - Releases auflisten
- `hi` - Chart installieren

### UI

- `k9` - k9s Terminal UI

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
