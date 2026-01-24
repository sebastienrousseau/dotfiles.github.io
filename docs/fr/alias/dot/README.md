---
description: La commande dot est le point d'entrée unifié pour gérer vos dotfiles, découvrir les fonctionnalités et vérifier la santé du système.
lang: fr-FR
metaTitle: La commande dot - Dotfiles (FR)
permalink: /aliases/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# La commande `dot`

La commande `dot` est la nouvelle interface unifiée pour interagir avec vos dotfiles. Elle encapsule `chezmoi` et d'autres utilitaires pour offrir une expérience fluide.

## Utilisation

```bash
dot [command]
```

## Commandes

| Commande     | Description                                                                                                                        |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Mode interactif** : lance une visite des outils du Noyau Moderne (Atuin, Yazi, Zellij) et des fonctionnalités IA.             |
| `dot doctor` | **Bilan de santé** : vérifie que votre système est correctement configuré et que toutes les dépendances sont installées. (Encapsule `chezmoi doctor`) |
| `dot update` | **Mise à jour** : récupère les dernières modifications du dépôt et les réapplique. (Encapsule `chezmoi update`)                   |
| `dot help`   | **Aide** : affiche les informations d'utilisation.                                                                               |

## Exemples

### Apprentissage interactif

Démarrer la visite guidée pour découvrir de nouveaux raccourcis :

```bash
dot learn
```

### Vérification du système

Vérifier que tout fonctionne correctement :

```bash
dot doctor
```
