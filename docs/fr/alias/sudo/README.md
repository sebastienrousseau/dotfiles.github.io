---
description: Les alias Sudo sont des alias qui vous permettent de simplifier l'utilisation de la commande Sudo.Sudo est une commande qui permet d'exécuter une commande en tant qu'un autre utilisateur.
lang: fr-FR
metaTitle: Les alias Sudo - Dotfiles (FR)
permalink: /aliases/sudo/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, sudo, shell
  - name: twitter:card
    content: Les alias Sudo sont des alias qui vous permettent de simplifier l'utilisation de la commande Sudo.Sudo est une commande qui permet d'exécuter une commande en tant qu'un autre utilisateur.
  - name: twitter:description
    content: Les alias Sudo sont des alias qui vous permettent de simplifier l'utilisation de la commande Sudo.Sudo est une commande qui permet d'exécuter une commande en tant qu'un autre utilisateur.
  - name: twitter:title
    content: Les alias Sudo - Dotfiles (FR)
  - name: og:title
    content: Les alias Sudo - Dotfiles (FR)
  - name: og:description
    content: Les alias Sudo sont des alias qui vous permettent de simplifier l'utilisation de la commande Sudo.Sudo est une commande qui permet d'exécuter une commande en tant qu'un autre utilisateur.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Sudo

Le fichier `sudo.aliases.sh` crée des raccourcis utiles pour utiliser `sudo`
avec des commandes.

Les alias [Sudo](https://en.wikipedia.org/wiki/Sudo) sont une collection d'alias
qui vous permettent d'interagir avec la commande `sudo`. Sudo est un outil qui
vous permet d'exécuter des commandes en tant qu'un autre utilisateur.

## Raccourcis Sudo

| Alias | Commande | Description |
| ----- | ----- | ----- |
| root | `s` | Exécute une commande en tant qu'utilisateur root |
| s | `sudo -i` | Exécute une commande en tant qu'utilisateur root |
| su | `sudo su` | Exécute une commande en tant qu'utilisateur root |
| sudo | `s` | Exécute une commande en tant qu'utilisateur root |
