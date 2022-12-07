---
description: Les alias du sont des alias de la commande `du`. Ils sont utilisés pour afficher l'espace disque utilisé par les fichiers et les dossiers.
lang: fr-FR
metaTitle: Les alias du - Dotfiles (FR)
permalink: /aliases/du/

meta:
  - name: keywords
    content: alias, du, espace disque, taille, taille des fichiers, taille des dossiers, dotfiles
  - name: twitter:card
    content: Les alias du sont des alias de la commande `du`. Ils sont utilisés pour afficher l'espace disque utilisé par les fichiers et les dossiers.
  - name: twitter:description
    content: Les alias du sont des alias de la commande `du`. Ils sont utilisés pour afficher l'espace disque utilisé par les fichiers et les dossiers.
  - name: twitter:title
    content: Les alias du - Dotfiles (FR)
  - name: og:title
    content: Les alias du - Dotfiles (FR)
  - name: og:description
    content: Les alias du sont des alias de la commande `du`. Ils sont utilisés pour afficher l'espace disque utilisé par les fichiers et les dossiers.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias du

Le fichier `du.aliases.sh` crée des alias de raccourcis pour la commande `du`.
Ils sont utilisés pour afficher l'espace disque utilisé par les fichiers et les
dossiers.

Le [du](<https://en.wikipedia.org/wiki/Du_(Unix)>) (disk usage) est un
outil de ligne de commande qui permet de voir l'espace disque utilisé par les
fichiers et les dossiers.

## Raccourcis du

| Alias | Command      | Description                                                                                                              |
| ----- | ------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| du    | `du -h`      | Affiche l'espace disque utilisé par les fichiers et les dossiers.                                                        |
| du1   | `du -hxd 1   | sort -h`                                                                                                                 | Affiche l'espace disque utilisé par les fichiers et les dossiers du répertoire courant. |
| ducks | `du -cks _._ | sort -rn                                                                                                                 | head -n 10`                                                                             | Affiche les 10 fichiers les plus volumineux du répertoire courant. |
| duh   | `du`         | Affiche l'espace disque utilisé par les fichiers et les dossiers.                                                        |
| dus   | `du -hs *`   | Affiche l'espace disque utilisé par les fichiers et les dossiers du répertoire courant.                                  |
| dusym | `du * -hsLc` | Affiche l'espace disque utilisé par les fichiers et les dossiers du répertoire courant en suivant les liens symboliques. |
| dut   | `dus`        | Affiche l'espace disque total utilisé par les fichiers et les dossiers du répertoire courant.                            |
