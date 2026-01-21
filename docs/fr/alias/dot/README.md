---
description: La commande dot est le point d'entrée unifié pour gérer vos dotfiles, apprendre les fonctionnalités et vérifier l'état du système.
lang: fr-FR
metaTitle: La commande dot - Dotfiles (FR)
permalink: /fr/alias/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# La commande `dot`

La commande `dot` est la nouvelle interface unifiée pour interagir avec vos dotfiles. Elle encapsule `chezmoi` et d'autres utilitaires pour offrir une expérience fluide.

## Utilisation

```bash
dot [commande]
```

## Commandes

| Commande | Description |
| :--- | :--- |
| `dot learn` | **Mode Interactif** : Lance une visite guidée des outils du Noyau Moderne (Atuin, Yazi, Zellij) et des fonctionnalités IA. |
| `dot doctor` | **Bilan de Santé** : Vérifie que votre système est correctement configuré et que toutes les dépendances sont installées. (Encapsule `chezmoi doctor`) |
| `dot update` | **Mise à jour** : Récupère les dernières modifications du dépôt et les réapplique. (Encapsule `chezmoi update`) |
| `dot help` | **Aide** : Affiche les informations d'utilisation. |

## Exemples

### Apprentissage Interactif
Lancez la visite guidée pour apprendre les nouveaux raccourcis :
```bash
dot learn
```

### Vérification du Système
Vérifiez que tout fonctionne correctement :
```bash
dot doctor
```
