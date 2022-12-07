---
description: Les alias Tmux sont des alias qui vous permettent de simplifier l'utilisation de la commande Tmux.Tmux est une commande qui permet de créer des sessions de terminal multiples, de les détacher et de les relier.
lang: fr-FR
metaTitle: Les alias Tmux - Dotfiles (FR)
permalink: /aliases/tmux/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, rsync, shell
  - name: twitter:card
    content: Les alias Tmux sont des alias qui vous permettent de simplifier l'utilisation de la commande Tmux.Tmux est une commande qui permet de créer des sessions de terminal multiples, de les détacher et de les relier.
  - name: twitter:description
    content: Les alias Tmux sont des alias qui vous permettent de simplifier l'utilisation de la commande Tmux.Tmux est une commande qui permet de créer des sessions de terminal multiples, de les détacher et de les relier.
  - name: twitter:title
    content: Les alias Tmux - Dotfiles (FR)
  - name: og:title
    content: Les alias Tmux - Dotfiles (FR)
  - name: og:description
    content: Les alias Tmux sont des alias qui vous permettent de simplifier l'utilisation de la commande Tmux.Tmux est une commande qui permet de créer des sessions de terminal multiples, de les détacher et de les relier.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Tmux

Le fichier `tmux.aliases.sh` crée des raccourcis utiles pour de nombreuses
commandes [tmux](https://github.com/tmux/tmux/wiki) couramment utilisées.

Tmux est une commande qui permet de créer des sessions de terminal multiples, de
les détacher et de les relier. Il est souvent utilisé pour créer des sessions de
terminal multiples sur un serveur distant.

## Raccourcis Tmux

| Alias | Commande                 | Description                                           |
| ----- | ------------------------ | ----------------------------------------------------- |
| tm    | `tmux`                   | Lance Tmux                                            |
| tma   | `tmux attach-session`    | Attache une session Tmux                              |
| tmat  | `tmux attach-session -t` | Attache une session Tmux avec un nom spécifique       |
| tmks  | `tmux kill-session -a`   | Tuer toutes les sessions Tmux                         |
| tml   | `tmux list-sessions`     | Liste les sessions Tmux                               |
| tmn   | `tmux new-session`       | Crée une nouvelle session Tmux                        |
| tmns  | `tmux new -s`            | Crée une nouvelle session Tmux avec un nom spécifique |
| tms   | `tmux new-session -s`    | Crée une nouvelle session Tmux avec un nom spécifique |
