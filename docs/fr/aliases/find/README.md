---
title: "Alias Find : recherche rapide de fichiers"
description: "Accélérez la recherche de fichiers avec des alias basés sur fd. Sortie colorée et commandes intuitives."
lang: fr-FR
metaTitle: "Alias Find | Dotfiles"
permalink: /aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "alias find, commande fd, recherche fichiers, alias shell, dotfiles, find unix"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Find | Dotfiles
  - name: twitter:description
    content: Accélérez la recherche de fichiers avec des alias basés sur fd. Sortie colorée et commandes intuitives.
  - name: og:title
    content: Alias Find | Dotfiles
  - name: og:description
    content: Accélérez la recherche de fichiers avec des alias basés sur fd. Sortie colorée et commandes intuitives.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Find

Raccourcis de recherche puissants avec fd, l’alternative moderne à find.

![Dotfiles banner][banner]

## Aperçu

Ces alias fournissent une interface simplifiée à `fd`, une alternative rapide et conviviale à la commande `find`. Définis dans `find.aliases.sh`, ils sont chargés automatiquement par chezmoi et offrent une sortie colorée, une syntaxe intuitive et des commandes mémorables pour les recherches courantes.

Lorsque `fd` est disponible, la commande `find` est automatiquement aliasée vers `fd`, offrant de meilleures performances et une syntaxe plus simple par défaut.

## Référence

### Commandes principales

| Alias | Commande | Description |
|-------|---------|-------------|
| `fd` | `fd --color always` | Rechercher des fichiers avec sortie colorée |
| `find` | `fd` | Utiliser fd comme remplacement de find |

### Options de recherche

| Alias | Commande | Description |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | Afficher les résultats avec chemins absolus |
| `fdc` | `fd --ignore-case` | Recherche insensible à la casse |
| `fdd` | `fd --list-details` | Afficher les détails des fichiers |
| `fde` | `fd --extension` | Filtrer par extension |
| `fdf` | `fd --follow` | Suivre les liens symboliques |
| `fdh` | `fd --hidden` | Inclure les fichiers cachés |
| `fdn` | `fd --glob` | Correspondance via glob |
| `fdo` | `fd --owner` | Filtrer par propriétaire |
| `fds` | `fd --size` | Filtrer par taille |
| `fdu` | `fd --exclude` | Exclure des fichiers par motif |
| `fdx` | `fd --exec` | Exécuter une commande pour chaque résultat |

### Commandes utilitaires

| Alias | Commande | Description |
|-------|---------|-------------|
| `fdv` | `fd --version` | Afficher la version de fd |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
