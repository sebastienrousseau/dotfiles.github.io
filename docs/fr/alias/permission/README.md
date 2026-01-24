---
description: alias de permissions pour Dotfiles
lang: fr-FR
metaTitle: Alias de permissions - Dotfiles (FR)
permalink: /aliases/permission/
---
# Alias de permissions

Gérer les alias de permissions. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `permission.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias pour les permissions de fichiers.
- `000` Définir les permissions à aucun droit de lecture, écriture ou exécution pour l'utilisateur, le groupe et les autres.
- `400` Définir les permissions à aucune lecture ni écriture, mais autoriser l'exécution pour l'utilisateur uniquement.
- `444` Définir les permissions à aucune écriture ni exécution, mais autoriser la lecture pour tous.
- `600` Définir les permissions à lecture et écriture pour l'utilisateur uniquement.
- `644` Définir les permissions à lecture pour tous, mais écriture uniquement pour l'utilisateur.
- `666` Définir les permissions à lecture et écriture pour tous.
- `755` Définir les permissions à lecture, écriture et exécution pour l'utilisateur, mais seulement lecture et exécution pour le groupe et les autres.
- `764` Définir les permissions à lecture et écriture pour l'utilisateur et le groupe, mais seulement lecture pour les autres.
- `777` Définir les permissions à lecture, écriture et exécution pour tous.
- `chgrp` Changer le groupe propriétaire de fichiers ou répertoires.
- `chgrpr` Changer récursivement le groupe propriétaire de fichiers ou répertoires.
- `chgrpu` Changer récursivement le groupe propriétaire de fichiers ou répertoires vers l'utilisateur courant.
- `chmod` Modifier les bits de mode d'un fichier.
- `chmodr` Modifier récursivement les bits de mode.
- `chmodu` Modifier récursivement les bits de mode vers l'utilisateur courant.
- `chmox` Rendre un fichier exécutable.
- `chown` Changer le propriétaire et le groupe d'un fichier.
- `chownr` Changer récursivement le propriétaire et le groupe.
- `chownu` Changer récursivement le propriétaire et le groupe vers l'utilisateur courant.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
