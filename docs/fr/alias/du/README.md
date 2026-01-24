---
description: Les alias d'utilisation du disque sont conçus pour afficher des statistiques d'utilisation du disque. Ils permettent de calculer et d'afficher l'espace disque utilisé par des fichiers ou des répertoires.
lang: fr-FR
metaTitle: Alias d'utilisation du disque - Dotfiles (FR)
permalink: /aliases/du/

meta:
  - name: twitter:card
    content: Les alias d'utilisation du disque sont conçus pour afficher des statistiques d'utilisation du disque. Ils permettent de calculer et d'afficher l'espace disque utilisé par des fichiers ou des répertoires.
  - name: twitter:description
    content: Les alias d'utilisation du disque sont conçus pour afficher des statistiques d'utilisation du disque. Ils permettent de calculer et d'afficher l'espace disque utilisé par des fichiers ou des répertoires.
  - name: twitter:title
    content: Alias d'utilisation du disque - Dotfiles (FR)
  - name: og:title
    content: Alias d'utilisation du disque - Dotfiles (FR)
  - name: og:description
    content: Les alias d'utilisation du disque sont conçus pour afficher des statistiques d'utilisation du disque. Ils permettent de calculer et d'afficher l'espace disque utilisé par des fichiers ou des répertoires.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias d'utilisation du disque

Le fichier `du.aliases.sh` crée des alias de raccourcis utiles pour la commande `du`.

Les alias d'utilisation du disque sont conçus pour afficher des statistiques d'utilisation du disque. Ils servent à calculer et afficher l'espace disque utilisé par des fichiers ou des répertoires.

## Utilisation du disque

[Disk usage](<https://en.wikipedia.org/wiki/Du_(Unix)>) est une commande qui estime l'utilisation de l'espace disque. La commande `du` sert à estimer l'espace utilisé. L'espace utilisé par chaque fichier est affiché en kilooctets. L'espace utilisé par chaque répertoire est affiché en kilooctets, ainsi que l'espace total utilisé par tous les fichiers de ce répertoire et de ses sous-répertoires.

| Alias | Commande | Description |
| ----- | -------- | ----------- |
| du | `du -h` | Afficher l'utilisation du disque du répertoire courant. |
| du1 | `du -hxd 1 | sort -h` | Taille des fichiers et répertoires du répertoire courant. |
| ducks | `du -cks * | sort -rn | head -n 10` | Top 10 des plus gros fichiers et répertoires du répertoire courant. |
| duh | `du` | Taille des fichiers et répertoires. |
| dus | `du -hs *` | Taille lisible triée par taille. |
| dusym | `du * -hsLc` | Taille des fichiers et répertoires du répertoire courant incluant les liens symboliques. |
| dut | `dus` | Taille totale du répertoire courant. |
