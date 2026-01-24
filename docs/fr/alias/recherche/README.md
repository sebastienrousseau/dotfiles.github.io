---
description: Les alias Find sont conçus pour rechercher des fichiers dans une hiérarchie de répertoires et effectuer des actions sur les fichiers trouvés.
lang: fr-FR
metaTitle: Alias Find - Dotfiles (FR)
permalink: /alias/find/

meta:
  - name: keywords
    content: alias, code, editeur, environnement, gedit, nano, notepad++, texte, vi, vim
  - name: twitter:card
    content: Les alias Find sont conçus pour rechercher des fichiers dans une hiérarchie de répertoires et effectuer des actions sur les fichiers trouvés.
  - name: twitter:description
    content: Les alias Find sont conçus pour rechercher des fichiers dans une hiérarchie de répertoires et effectuer des actions sur les fichiers trouvés.
  - name: twitter:title
    content: Alias Find - Dotfiles (FR)
  - name: og:title
    content: Alias Find - Dotfiles (FR)
  - name: og:description
    content: Les alias Find sont conçus pour rechercher des fichiers dans une hiérarchie de répertoires et effectuer des actions sur les fichiers trouvés.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Find

Gérer les alias Find. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `find.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias pour l'utilitaire `fd`,
une alternative à la commande `find` sur les systèmes Unix.
`fd` est un outil simple, rapide et convivial qui permet de
rechercher des fichiers et des répertoires dans un chemin donné. Ces alias
facilitent l'utilisation de `fd` en fournissant des commandes simples et mémorables
pour des cas d'usage courants.
Voici quelques alias disponibles :
- `fd` est l'alias par défaut pour `fd --color always` qui liste tous les fichiers
  avec une sortie colorée.
- `fda` liste tous les fichiers avec des chemins absolus.
- `fdc` liste tous les fichiers avec une recherche insensible à la casse.
- `fdd` liste tous les fichiers avec détails.
- `fde` liste tous les fichiers avec une extension spécifiée.
- `fdf` liste tous les fichiers en suivant les liens symboliques.
- `fdh` affiche l'aide de `fd`.
- `fdh` liste tous les fichiers, y compris les fichiers cachés.
- `fdn` liste tous les fichiers correspondant à un glob spécifié.
- `fdo` liste tous les fichiers avec les informations du propriétaire.
- `fds` liste tous les fichiers avec leur taille.
- `fdu` liste tous les fichiers en appliquant des règles d'exclusion.
- `fdv` affiche la version de `fd`.
- `fdx` exécute une commande pour chaque résultat de recherche.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
