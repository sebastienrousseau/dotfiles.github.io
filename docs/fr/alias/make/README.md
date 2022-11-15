---
description: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Make est un outil de construction qui permet de compiler des programmes à partir de fichiers sources.
lang: fr-FR
metaTitle: Les alias make - Dotfiles (FR)
permalink: /aliases/make/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, make, makefile, mk, mkc, mkd, mkf, mkh, mki, mkr, mkt, shell
  - name: twitter:card
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Make est un outil de construction qui permet de compiler des programmes à partir de fichiers sources.
  - name: twitter:description
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Make est un outil de construction qui permet de compiler des programmes à partir de fichiers sources.
  - name: twitter:title
    content: Les alias make - Dotfiles (FR)
  - name: og:title
    content: Les alias make - Dotfiles (FR)
  - name: og:description
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Make est un outil de construction qui permet de compiler des programmes à partir de fichiers sources.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias make

Le fichier `make.aliases.sh` crée des raccourcis utiles pour exécuter des
commandes `make`. La commande make est un outil de construction qui permet de
compiler des programmes à partir de fichiers sources.

Make reçoit ses connaissances sur la façon de construire votre programme à
partir d'un fichier appelé `Makefile`, qui liste chacun des fichiers non-source
et comment les calculer à partir d'autres fichiers.

Par exemple, si vous avez un fichier `main.c` qui inclut `foo.h`, vous pouvez
écrire un `Makefile` qui dit à make comment compiler `main.c` en `main.o` et
`foo.h` en `foo.o`.

## Raccourcis de make

| Alias | Command | Description |
| ----- | ----- | ----- |
| mk | `make` | Exécute la commande make |
| mkc | `make clean` | Exécute la commande make clean |
| mkd | `make doc` | Exécute la commande make doc |
| mkf | `make format` | Exécute la commande make format |
| mkh | `make help` | Exécute la commande make help |
| mki | `make install` | Exécute la commande make install |
| mkr | `make run` | Exécute la commande make run |
| mkt | `make test` | Exécute la commande make test |
