---
description: Les alias en mode interactif sont des alias qui vous permettent de vérifier l’exécution des commandes avant de les exécuter.
lang: fr-FR
metaTitle: Les alias en mode interactif - Dotfiles (FR)
permalink: /aliases/mode-interactif/

meta:
  - name: keywords
    content: alias, environnement, mode interactif, zsh, bash, fish, shell, dotfiles
  - name: twitter:card
    content: Les alias en mode interactif sont des alias qui vous permettent de vérifier l’exécution des commandes avant de les exécuter.
  - name: twitter:description
    content: Les alias en mode interactif sont des alias qui vous permettent de vérifier l’exécution des commandes avant de les exécuter.
  - name: twitter:title
    content: Les alias en mode interactif - Dotfiles (FR)
  - name: og:title
    content: Les alias en mode interactif - Dotfiles (FR)
  - name: og:description
    content: Les alias en mode interactif sont des alias qui vous permettent de vérifier l’exécution des commandes avant de les exécuter.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias en mode interactif

Le fichier `interactive.aliases` contient des alias qui sont exécutés dans un
mode interactif. Les alias en mode interactif sont des alias qui vous permettent
de vérifier l’exécution des commandes avant de les exécuter.

Les alias en mode interactif sont utiles pour les commandes qui peuvent être
dangereuses ou qui peuvent avoir des effets secondaires indésirables. Par
exemple, `rm` (suppression d'un fichier ou d'un répertoire) est un alias en
mode interactif qui vous permet de vérifier la commande avant de continuer.

## Raccourcis en mode interactif

| Alias | Command                 | Description                               |
| ----- | ----------------------- | ----------------------------------------- |
| bin   | `rm -fr ${HOME}/.Trash` | Vide la corbeille                         |
| cp    | `cp -vi`                | Copie un fichier avec confirmation        |
| del   | `rm -rfvi`              | Supprime un fichier avec confirmation     |
| ln    | `ln -vi`                | Crée un lien symbolique avec confirmation |
| mv    | `mv -vi`                | Déplace un fichier avec confirmation      |
| rm    | `rm -vi`                | Supprime un fichier avec confirmation     |
| zap   | `rm -vi`                | Supprime un fichier avec confirmation     |
