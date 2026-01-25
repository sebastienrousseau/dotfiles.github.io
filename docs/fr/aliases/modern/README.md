---
title: "Alias Modern : remplacements Unix basés sur Rust"
description: "Alias shell modernes pour eza, bat et ripgrep. Remplacez les outils Unix hérités par des alternatives Rust."
lang: fr-FR
metaTitle: "Alias Modern | Dotfiles"
permalink: /aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "alias modern, eza, bat, ripgrep, outils cli rust, dotfiles, shell"
---

# Alias Modern

Des remplacements plus rapides et intelligents pour les commandes Unix héritées.

## Aperçu

Les alias modern définis dans `modern.aliases.sh` fournissent des alternatives Rust aux outils Unix classiques. Ces alias sont chargés automatiquement par `chezmoi` et retombent sur les commandes standards si les outils modernes ne sont pas disponibles.

## Référence

### Listing de fichiers avec eza

Remplace `ls` lorsque `eza` est installé.

| Alias | Commande | Description |
|-------|---------|-------------|
| `ls` | `eza --icons` | Lister les fichiers avec icônes |
| `ll` | `eza -alF` | Format liste longue |
| `la` | `eza -a` | Lister tous les fichiers, y compris cachés |
| `lt` | `eza --tree` | Afficher l’arborescence |

Rebascule sur `ls` si `eza` n’est pas installé.

### Contenu de fichiers avec bat

Remplace `cat` lorsque `bat` est installé.

| Alias | Commande | Description |
|-------|---------|-------------|
| `cat` | `bat` | Afficher le contenu avec coloration syntaxique |

### Recherche avec ripgrep

Remplace `grep` lorsque `rg` est installé.

| Alias | Commande | Description |
|-------|---------|-------------|
| `grep` | `rg` | Rechercher dans les fichiers avec Ripgrep |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
