---
description: Les alias clear sont des alias de la commande `clear`. Ils sont utilisés pour effacer le contenu de la console.
lang: fr-FR
metaTitle: Les alias clear - Dotfiles (FR)
permalink: /aliases/clear/

meta:
  - name: keywords
    content: alias, clear, effacer, console, terminal, shell, bash, zsh, fish, dotfiles, dotfiles-fr
  - name: twitter:card
    content: Les alias clear sont des alias de la commande `clear`. Ils sont utilisés pour effacer le contenu de la console.
  - name: twitter:description
    content: Les alias clear sont des alias de la commande `clear`. Ils sont utilisés pour effacer le contenu de la console.
  - name: twitter:title
    content: Les alias clear - Dotfiles (FR)
  - name: og:title
    content: Les alias clear - Dotfiles (FR)
  - name: og:description
    content: Les alias clear sont des alias de la commande `clear`. Ils sont utilisés pour effacer le contenu de la console.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias clear

Le fichier `clear.aliases.sh` crée des alias de raccourcis pour la commande
`clear`. Ils sont utilisés pour effacer le contenu de la console.

[Clear](https://en.wikipedia.org/wiki/Clear_(command)) est une commande qui est
utilisée pour effacer le contenu de la console.

## Raccourcis

| Alias | Commande | Description |
| ----- | ----- | ----- |
| c | `clear` | Efface le contenu de la console. |
| cl | `c` | Efface le contenu de la console. |
| clc | `clear && cat` | Efface le contenu de la console et affiche le contenu. |
| clcat | `clc` | Efface le contenu de la console et affiche le contenu. |
| clh | `clear && history` | Efface le contenu de la console et affiche l'historique. |
| clhist | `clh` | Efface le contenu de la console et affiche l'historique. |
| clp | `clear && pwd` | Efface le contenu de la console et affiche le répertoire courant. |
| clpwd | `clp` | Efface le contenu de la console et affiche le répertoire courant. |
| clr | `c` | Efface le contenu de la console. |
| cls | `c` | Efface le contenu de la console. |
| clt | `clear && tree` | Efface le contenu de la console et affiche l'arborescence. |
| cltree | `clt` | Efface le contenu de la console et affiche l'arborescence. |
| ct | `clear && tree ./` | Efface le contenu de la console et affiche l'arborescence du répertoire courant. |
| ctree | `ct` | Efface le contenu de la console et affiche l'arborescence du répertoire courant. |
| cpl | `clear && pwd && echo '' && ls -a && echo ''` | Efface le contenu de la console et affiche le répertoire courant et la liste des fichiers. |
| cplt | `clear && pwd && echo '' && tree ./ && echo ''` | Efface le contenu de la console et affiche le répertoire courant et l'arborescence. |
