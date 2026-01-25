---
title: "Alias Kubernetes : simplifiez la gestion des clusters"
description: "Accélérez les workflows Kubernetes avec des alias kubectl, Helm et k9s. Gérez pods, contextes et namespaces."
lang: fr-FR
metaTitle: "Alias Kubernetes | Dotfiles"
permalink: /aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "alias kubernetes, raccourcis kubectl, alias helm, k9s, dotfiles, shell"
---

# Alias Kubernetes

Simplifiez vos workflows Kubernetes avec des alias concis pour kubectl, Helm et la gestion de cluster.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Aperçu

Ces alias sont définis dans `kubernetes.aliases.sh` et chargés automatiquement par chezmoi. Ils réduisent les frappes pour les opérations courantes, afin de gérer clusters, pods et releases plus rapidement.

## Référence

### Noyau

| Alias | Commande | Description |
|-------|---------|-------------|
| `k` | `kubectl` | Raccourci kubectl |
| `kg` | `kubectl get` | Obtenir des ressources |
| `kgp` | `kubectl get pods` | Obtenir les pods |
| `kga` | `kubectl get all` | Obtenir toutes les ressources |
| `kd` | `kubectl describe` | Décrire des ressources |
| `kdel` | `kubectl delete` | Supprimer des ressources |
| `kl` | `kubectl logs` | Voir les logs |
| `kex` | `kubectl exec -it` | Exécuter un shell interactif |

### Contexte

| Alias | Commande | Description |
|-------|---------|-------------|
| `kcx` | - | Lister les contextes |
| `kuse` | - | Changer de contexte |
| `kns` | - | Changer de namespace |

### Helm

| Alias | Commande | Description |
|-------|---------|-------------|
| `h` | `helm` | Raccourci Helm |
| `hls` | `helm list` | Lister les releases |
| `hi` | `helm install` | Installer un chart |

### UI

| Alias | Commande | Description |
|-------|---------|-------------|
| `k9` | `k9s` | Interface terminal k9s |
