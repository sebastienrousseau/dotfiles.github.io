---
title: "Alias Chmod : raccourcis de permissions pour le shell"
description: "Simplifiez la gestion des permissions avec des alias chmod. Raccourcis pour les motifs courants comme 755, 644, etc."
lang: fr-FR
metaTitle: "Alias Chmod | Dotfiles"
permalink: /aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: "alias chmod, permissions fichiers, raccourcis shell, dotfiles, permissions unix"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Chmod | Dotfiles
  - name: twitter:description
    content: Simplifiez la gestion des permissions avec des alias chmod.
  - name: og:title
    content: Alias Chmod | Dotfiles
  - name: og:description
    content: Simplifiez la gestion des permissions avec des alias chmod.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Chmod

Raccourcis pour gérer les permissions des fichiers et répertoires.

![Dotfiles banner][banner]

## Aperçu

Les alias chmod offrent un moyen rapide de gérer les permissions depuis la ligne de commande. Au lieu de mémoriser les codes numériques, utilisez des alias intuitifs comme `chmod_755` ou `chmod_u+x` pour définir l’accès souhaité.

Ces alias sont définis dans `chmod.aliases.sh` et chargés automatiquement par chezmoi.

## Référence

### Alias de permissions courantes

| Alias | Permissions | Description |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Aucune permission pour tous |
| `chmod_400` | `r--------` | Lecture seule pour le propriétaire |
| `chmod_444` | `r--r--r--` | Lecture seule pour tous |
| `chmod_600` | `rw-------` | Lecture/écriture pour le propriétaire |
| `chmod_644` | `rw-r--r--` | Lecture/écriture pour le propriétaire, lecture seule pour les autres |
| `chmod_666` | `rw-rw-rw-` | Lecture/écriture pour tous |
| `chmod_755` | `rwxr-xr-x` | Plein accès propriétaire, lecture/exécution pour les autres |
| `chmod_764` | `rwxrw-r--` | Plein accès propriétaire, lecture/écriture pour le groupe |
| `chmod_777` | `rwxrwxrwx` | Pleines permissions pour tous |

### Alias de permissions du propriétaire

| Alias | Description |
|-------|-------------|
| `chmod_u+x` | Ajouter l’exécution pour le propriétaire |
| `chmod_u-x` | Retirer l’exécution pour le propriétaire |
| `chmod_u+w` | Ajouter l’écriture pour le propriétaire |
| `chmod_u-w` | Retirer l’écriture pour le propriétaire |
| `chmod_u+r` | Ajouter la lecture pour le propriétaire |
| `chmod_u-r` | Retirer la lecture pour le propriétaire |

### Alias de permissions du groupe

| Alias | Description |
|-------|-------------|
| `chmod_g+x` | Ajouter l’exécution pour le groupe |
| `chmod_g-x` | Retirer l’exécution pour le groupe |
| `chmod_g+w` | Ajouter l’écriture pour le groupe |
| `chmod_g-w` | Retirer l’écriture pour le groupe |
| `chmod_g+r` | Ajouter la lecture pour le groupe |
| `chmod_g-r` | Retirer la lecture pour le groupe |

### Alias de permissions des autres

| Alias | Description |
|-------|-------------|
| `chmod_o+x` | Ajouter l’exécution pour les autres |
| `chmod_o-x` | Retirer l’exécution pour les autres |
| `chmod_o+w` | Ajouter l’écriture pour les autres |
| `chmod_o-w` | Retirer l’écriture pour les autres |
| `chmod_o+r` | Ajouter la lecture pour les autres |
| `chmod_o-r` | Retirer la lecture pour les autres |

### Alias par type de fichier

| Alias | Description |
|-------|-------------|
| `chmod_755d` | Définir les permissions des dossiers sur `rwxr-xr-x` |
| `chmod_644f` | Définir les permissions des fichiers sur `rw-r--r--` |

### Fonction récursive

La fonction `change_permission` applique les permissions récursivement avec confirmation :

```bash
change_permission 755 /path/to/directory -R
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
