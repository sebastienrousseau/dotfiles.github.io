---
description: alias kubernetes pour Dotfiles
lang: fr-FR
metaTitle: Alias Kubernetes - Dotfiles (FR)
permalink: /aliases/kubernetes/
---
# Alias Kubernetes

Gérer les alias Kubernetes. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `kubernetes.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

### core
- `k` - Raccourci kubectl
- `kg` - `kubectl get`
- `kgp` - `kubectl get pods`
- `kga` - `kubectl get all`
- `kd` - `kubectl describe`
- `kdel` - `kubectl delete`
- `kl` - `kubectl logs`
- `kex` - `kubectl exec -it`

### contexte
- `kcx` - Lister les contextes
- `kuse` - Changer de contexte
- `kns` - Changer de namespace

### helm
- `h` - Raccourci Helm
- `hls` - Lister les releases
- `hi` - Installer un chart

### ui
- `k9` - Interface terminal k9s

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
