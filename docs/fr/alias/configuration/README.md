---
description: Les alias de configuration sont des alias pour ouvrir les fichiers de configuration depuis la console. Ils sont utilisés pour modifier les paramètres de votre shell et de vos applications.
lang: fr-FR
metaTitle: Les alias de configuration - Dotfiles (FR)
permalink: /fr/aliases/configuration/

meta:
  - name: twitter:card
    content: Les alias de configuration sont des alias pour ouvrir les fichiers de configuration depuis la console.Ils sont utilisés pour modifier les paramètres de votre shell et de vos applications.
  - name: twitter:description
    content: Les alias de configuration sont des alias pour ouvrir les fichiers de configuration depuis la console.Ils sont utilisés pour modifier les paramètres de votre shell et de vos applications.
  - name: twitter:title
    content: Les alias de configuration - Dotfiles (FR)
  - name: og:title
    content: Les alias de configuration - Dotfiles (FR)
  - name: og:description
    content: Les alias de configuration sont des alias pour ouvrir les fichiers de configuration depuis la console.Ils sont utilisés pour modifier les paramètres de votre shell et de vos applications.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de configuration

Le fichier `configuration.aliases.sh` crée des alias de raccourcis pour ouvrir
les fichiers de configuration depuis la console. Ils sont utilisés pour modifier
les paramètres de votre shell et de vos applications.

## Raccourcis

| Alias | Commande | Description |
| ----- | ----- | ----- |
| bshp | `${=EDITOR} $HOME/.bash_profile` | Ouvre le fichier de configuration de profile Bash avec l'éditeur par défaut. |
| bshrc | `${=EDITOR} $HOME/.bashrc` | Ouvre le fichier de configuration de Bash avec l'éditeur par défaut. |
| gcfg | `${=EDITOR} $HOME/.gitconfig` | Ouvre le fichier de configuration de Git avec l'éditeur par défaut. |
| gign | `${=EDITOR} $HOME/.gitignore` | Ouvre le fichier de configuration de Git avec l'éditeur par défaut. |
| zshrc | `${=EDITOR} $HOME/.zshrc` | Ouvre le fichier de configuration de Zsh avec l'éditeur par défaut. |
