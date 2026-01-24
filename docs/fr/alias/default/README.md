---
description: Les alias par défaut ne sont pas spécifiques à une commande particulière. Ce sont des alias courants utilisés dans de nombreux contextes, listés ici pour plus de commodité.
lang: fr-FR
metaTitle: Alias par défaut - Dotfiles (FR)
permalink: /alias/default/

meta:
  - name: twitter:card
    content: Les alias par défaut ne sont pas spécifiques à une commande particulière. Ce sont des alias courants utilisés dans de nombreux contextes, listés ici pour plus de commodité.
  - name: twitter:description
    content: Les alias par défaut ne sont pas spécifiques à une commande particulière. Ce sont des alias courants utilisés dans de nombreux contextes, listés ici pour plus de commodité.
  - name: twitter:title
    content: Alias par défaut - Dotfiles (FR)
  - name: og:title
    content: Alias par défaut - Dotfiles (FR)
  - name: og:description
    content: Les alias par défaut ne sont pas spécifiques à une commande particulière. Ce sont des alias courants utilisés dans de nombreux contextes, listés ici pour plus de commodité.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias par défaut

Gérer les alias par défaut. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `default.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias de commande pour rendre les tâches et
commandes courantes plus pratiques et plus rapides à exécuter. Ces alias vont
du généraliste à la surveillance système et la navigation dans le système de fichiers.
Parmi les plus utiles :
- `c` : raccourci pour la commande `clear` afin de nettoyer l'écran du terminal.
- `p` : raccourci pour la commande `pwd` afin d'afficher le répertoire courant.
- `h` : lister les commandes récemment utilisées.
- `path` : afficher la variable `$PATH` sur plusieurs lignes.
- `quit` : raccourci pour la commande `exit` afin de quitter le shell.
- `halt`, `poweroff`, `reboot` : commandes d'arrêt et de redémarrage du système.
- `srv` : démarrer un serveur HTTP simple.
- `top` : surveiller de manière interactive les ressources système ou les processus en temps réel.
- `qfind` : rechercher rapidement des fichiers.
- `clc` : effacer l'écran et afficher le contenu du répertoire courant.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
