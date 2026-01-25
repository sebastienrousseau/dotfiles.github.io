---
title: "Alias Interactifs : commandes sûres avec confirmations"
description: "Alias shell qui ajoutent des confirmations avant rm, mv et cp. Évitez les suppressions accidentelles."
lang: fr-FR
metaTitle: "Alias Interactifs | Dotfiles"
permalink: /aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: alias interactifs, sécurité shell, confirmation rm, cp interactif, prompt mv, dotfiles, alias bash
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Interactifs | Dotfiles
  - name: twitter:description
    content: Alias shell qui ajoutent des confirmations avant rm, mv et cp.
  - name: og:title
    content: Alias Interactifs | Dotfiles
  - name: og:description
    content: Alias shell qui ajoutent des confirmations avant rm, mv et cp.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Interactifs

Commandes shell sûres avec confirmation avant les opérations destructrices.

![Dotfiles banner][banner]

## Aperçu

Les alias interactifs ajoutent des confirmations aux commandes qui peuvent modifier ou supprimer des fichiers de façon irréversible. Définis dans `interactive.aliases.sh` et chargés automatiquement par chezmoi, ils réduisent les risques de perte de données en demandant une confirmation.

## Référence

### Opérations sur fichiers

| Alias | Description |
|-------|-------------|
| `cp` | Copier fichiers et dossiers en mode interactif avec sortie verbeuse. Demande confirmation avant écrasement. |
| `mv` | Déplacer/renommer en mode interactif avec sortie verbeuse. Demande confirmation avant écrasement. |
| `ln` | Créer des liens symboliques en mode interactif avec sortie verbeuse. Demande confirmation avant écrasement. |

### Suppression de fichiers

| Alias | Description |
|-------|-------------|
| `rm` | Supprimer fichiers/dossiers en mode interactif avec sortie verbeuse. Demande confirmation pour chaque suppression. |
| `del` | Supprimer fichiers/dossiers en mode interactif et récursif avec sortie verbeuse. Demande confirmation pour chaque suppression. |
| `zap` | Alias de `rm`. Supprime de manière interactive avec sortie verbeuse. |

### Gestion de la corbeille

| Alias | Description |
|-------|-------------|
| `bin` | Supprimer tous les fichiers de la corbeille (`~/.Trash`) de façon forcée et récursive. |

### Permissions et utilitaires

| Alias | Description |
|-------|-------------|
| `chmod` | Modifier les permissions avec sortie verbeuse. |
| `chown` | Modifier propriétaire et groupe avec sortie verbeuse. |
| `diff` | Comparer deux fichiers en format unifié. |
| `grep` | Rechercher un motif avec numéros de ligne et insensibilité à la casse. |
| `mkdir` | Créer un répertoire avec parents et sortie verbeuse. |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
