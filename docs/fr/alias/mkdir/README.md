---
description: Les alias mkdir sont des alias qui vous permettent de simplifier l'utilisation de la commande mkdir. Mkdir est une commande qui permet de créer des répertoires dans le système de fichiers.
lang: fr-FR
metaTitle: Les alias mkdir - Dotfiles (FR)
permalink: /aliases/mkdir/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, mcd, mcdp, md, mdd, mdp, mdt, mkdir, shell
  - name: twitter:card
    content: Les alias mkdir sont des alias qui vous permettent de simplifier l'utilisation de la commande mkdir. Mkdir est une commande qui permet de créer des répertoires dans le système de fichiers.
  - name: twitter:description
    content: Les alias mkdir sont des alias qui vous permettent de simplifier l'utilisation de la commande mkdir. Mkdir est une commande qui permet de créer des répertoires dans le système de fichiers.
  - name: twitter:title
    content: Les alias mkdir - Dotfiles (FR)
  - name: og:title
    content: Les alias mkdir - Dotfiles (FR)
  - name: og:description
    content: Les alias mkdir sont des alias qui vous permettent de simplifier l'utilisation de la commande mkdir. Mkdir est une commande qui permet de créer des répertoires dans le système de fichiers.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias mkdir

Le fichier `mkdir.aliases.sh` crée des raccourcis utiles pour créer des
répertoires.

Les alias mkdir sont des alias qui vous permettent de simplifier l'utilisation
de la commande `mkdir`. Mkdir est une commande qui permet de créer des
répertoires dans le système de fichiers.

## Raccourcis mkdir

| Alias | Commande                    | Description                              |
| ----- | --------------------------- | ---------------------------------------- |
| mcd   | `mkdir -pv && cd`           | Crée un répertoire et se déplace dedans  |
| mcdp  | `mkdir -pv && cd`           | Crée un répertoire et se déplace dedans  |
| md    | `mkd`                       | Crée un répertoire                       |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Crée un répertoire avec la date du jour  |
| mdp   | `mkdir -pv`                 | Crée un répertoire et ses parents        |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Crée un répertoire avec l'heure actuelle |
