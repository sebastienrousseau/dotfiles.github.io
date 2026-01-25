---
description: Alias Kubernetes untuk Dotfiles
lang: id-ID
metaTitle: Alias Kubernetes - Dotfiles (ID)
permalink: /alias/kubernetes/
---

# Alias Kubernetes

Kelola alias Kubernetes. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `kubernetes.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

### Inti
- `k` - Pintasan kubectl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### Konteks
- `kcx` - Daftar konteks
- `kuse` - Ganti konteks
- `kns` - Ganti namespace

### Helm
- `h` - Pintasan Helm
- `hls` - Daftar release
- `hi` - Install chart

### UI
- `k9` - Terminal UI k9s
