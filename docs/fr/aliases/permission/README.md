---
title: "Alias Permission : raccourcis de permissions pour le shell"
description: "Alias shell pour chmod, chown et chgrp. Définissez rapidement les permissions avec des raccourcis numériques."
lang: fr-FR
metaTitle: "Alias Permission | Dotfiles"
permalink: /aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: "alias permission, raccourcis chmod, permissions fichiers, chown, chgrp, dotfiles, shell"
---

# Alias Permission

Raccourcis pour gérer les permissions de fichiers et répertoires dans votre shell.

## Aperçu

Ces alias sont définis dans `permission.aliases.sh` et chargés automatiquement par chezmoi. Ils fournissent un accès rapide aux permissions courantes et aux commandes de propriété.

## Référence

### Raccourcis numériques de permissions

| Alias | Description |
|-------|-------------|
| `000` | Définir les permissions à aucun droit pour user, group et others |
| `400` | Aucun droit lecture/écriture, exécution pour l’utilisateur uniquement |
| `444` | Lecture seule pour tous |
| `600` | Lecture/écriture pour l’utilisateur uniquement |
| `644` | Lecture pour tous, écriture pour l’utilisateur |
| `666` | Lecture/écriture pour tous |
| `755` | Lecture/écriture/exécution pour l’utilisateur, lecture/exécution pour les autres |
| `764` | Lecture/écriture pour user et group, lecture pour others |
| `777` | Lecture/écriture/exécution pour tous |

### Commandes de mode fichier

| Alias | Description |
|-------|-------------|
| `chmod` | Modifier les bits de mode d’un fichier |
| `chmodr` | Modifier les bits de mode récursivement |
| `chmodu` | Modifier récursivement en propriétaire courant |
| `chmox` | Rendre un fichier exécutable |

### Commandes de propriété

| Alias | Description |
|-------|-------------|
| `chown` | Changer propriétaire et groupe |
| `chownr` | Changer propriétaire et groupe récursivement |
| `chownu` | Changer propriétaire et groupe récursivement vers l’utilisateur courant |
| `chgrp` | Changer le groupe propriétaire |
| `chgrpr` | Changer le groupe propriétaire récursivement |
| `chgrpu` | Changer le groupe propriétaire récursivement vers l’utilisateur courant |
