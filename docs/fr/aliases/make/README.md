---
title: "Alias Make : simplifiez votre workflow de build"
description: "Alias de raccourci pour Make. Simplifiez les builds, tests et automatisations."
lang: fr-FR
metaTitle: Make Aliases | Dotfiles
permalink: /aliases/make/
sidebar: true
meta:
  - name: keywords
    content: alias make, raccourcis makefile, automation build, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make Aliases | Dotfiles
  - name: twitter:description
    content: Alias de raccourci pour Make. Simplifiez les builds, tests et automatisations.
  - name: og:title
    content: Make Aliases | Dotfiles
  - name: og:description
    content: Alias de raccourci pour Make. Simplifiez les builds, tests et automatisations.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Make

Simplifiez votre workflow de build avec des commandes Make raccourcies.

![Dotfiles banner][banner]

## Aperçu

Ces alias donnent un accès rapide aux cibles Make courantes. Définis dans `make.aliases.sh`, ils sont chargés automatiquement par chezmoi dans la configuration Universal Dotfiles.

## Référence

| Alias | Commande | Description |
|-------|---------|-------------|
| `mk` | `make` | Exécuter la cible par défaut |
| `mka` | `make all` | Construire toutes les cibles |
| `mkc` | `make clean` | Nettoyer les artefacts de build |
| `mkd` | `make doc` | Générer la documentation |
| `mkf` | `make format` | Formater les sources |
| `mkh` | `make help` | Afficher l’aide |
| `mki` | `make install` | Installer le projet |
| `mkr` | `make run` | Exécuter le projet |
| `mkt` | `make test` | Lancer les tests |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
