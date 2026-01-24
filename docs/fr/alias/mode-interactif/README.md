---
description: Les alias interactifs sont une collection d'alias qui permettent d'interagir avec votre shell et votre terminal de manière plus interactive.
lang: fr-FR
metaTitle: Alias interactifs - Dotfiles (FR)
permalink: /alias/interactive/

meta:
  - name: keywords
    content: alias, bash, cp, interactif, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: Les alias interactifs sont une collection d'alias qui permettent d'interagir avec votre shell et votre terminal de manière plus interactive.
  - name: twitter:description
    content: Les alias interactifs sont une collection d'alias qui permettent d'interagir avec votre shell et votre terminal de manière plus interactive.
  - name: twitter:title
    content: Alias interactifs - Dotfiles (FR)
  - name: og:title
    content: Alias interactifs - Dotfiles (FR)
  - name: og:description
    content: Les alias interactifs sont une collection d'alias qui permettent d'interagir avec votre shell et votre terminal de manière plus interactive.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias interactifs

Gérer les alias interactifs. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `interactive.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias interactifs pour des opérations courantes
en ligne de commande. Ces alias sont conçus pour simplifier et améliorer
l'expérience utilisateur en ajoutant des invites interactives avant d'exécuter
des opérations potentiellement destructrices.
* `cp` Copier des fichiers et répertoires de manière interactive (demande avant d'écraser) avec
sortie verbeuse.
* `del` Supprimer des fichiers ou répertoires de manière interactive (demande avant chaque suppression)
avec sortie verbeuse, de manière récursive.
* `ln` Créer des liens symboliques de manière interactive (demande avant d'écraser) avec sortie
verbeuse.
* `mv` Déplacer ou renommer des fichiers de manière interactive (demande avant d'écraser) avec sortie
verbeuse.
* `rm` Supprimer des fichiers ou répertoires de manière interactive (demande avant chaque suppression)
avec sortie verbeuse.
* `zap` Alias de 'rm', supprime des fichiers ou répertoires de manière interactive (demande avant
chaque suppression) avec sortie verbeuse.
### Alias de manipulation de la corbeille
* `bin` Supprimer tous les fichiers du répertoire corbeille (utilisateur .Trash) de manière forcée et
récursive.
* `chmod` Modifier les permissions de fichiers ou répertoires avec sortie verbeuse.
* `chown` Modifier le propriétaire et le groupe d'un fichier ou répertoire avec sortie verbeuse.
* `diff` Comparer et afficher les différences entre deux fichiers en format unifié.
* `grep` Rechercher un motif dans des fichiers ou une sortie, en affichant les numéros de ligne et
en ignorant la casse.
* `mkdir` Créer un nouveau répertoire, en créant les parents si nécessaire, avec sortie verbeuse.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
