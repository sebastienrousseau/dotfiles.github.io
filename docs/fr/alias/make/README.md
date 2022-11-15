---
description: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Les alias make sont utiles pour les projets qui utilisent la commande make.
lang: fr-FR
metaTitle: Les alias make - Dotfiles (FR)
permalink: /aliases/make/

meta:
  - name: keywords
    content: alias, commandes, make, makefile, zsh, bash, fish, shell, dotfiles
  - name: twitter:card
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Les alias make sont utiles pour les projets qui utilisent la commande make.
  - name: twitter:description
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Les alias make sont utiles pour les projets qui utilisent la commande make.
  - name: twitter:title
    content: Les alias make - Dotfiles (FR)
  - name: og:title
    content: Les alias make - Dotfiles (FR)
  - name: og:description
    content: Les alias make sont des alias qui vous permettent de simplifier l'utilisation de la commande make. Les alias make sont utiles pour les projets qui utilisent la commande make.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias make

Le fichier `make.aliases.sh` crée des raccourcis utiles pour exécuter des
commandes `make`. Les alias make sont utiles pour les projets qui utilisent la
commande make.

## Raccourcis de make

Make reçoit ses connaissances sur la façon de construire votre programme à
partir d'un fichier appelé `Makefile`, qui liste chacun des fichiers non-source
et comment les calculer à partir d'autres fichiers.

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
