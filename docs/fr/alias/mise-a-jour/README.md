---
description: Les alias de mise a jour creent des raccourcis utiles pour mettre a jour le systeme d'exploitation et les logiciels installes. Cela securise et ameliore l'installation actuelle des Dotfiles pour se proteger contre les vulnerabilites de securite, ajouter de nouvelles fonctionnalites et corriger des bogues critiques.
lang: fr-FR
metaTitle: Les alias de mise a jour - Dotfiles (FR)
permalink: /aliases/mise-a-jour/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias de mise a jour creent des raccourcis utiles pour mettre a jour le systeme d'exploitation et les logiciels installes. Cela securise et ameliore l'installation actuelle des Dotfiles pour se proteger contre les vulnerabilites de securite, ajouter de nouvelles fonctionnalites et corriger des bogues critiques.
  - name: twitter:description
    content: Les alias de mise a jour creent des raccourcis utiles pour mettre a jour le systeme d'exploitation et les logiciels installes. Cela securise et ameliore l'installation actuelle des Dotfiles pour se proteger contre les vulnerabilites de securite, ajouter de nouvelles fonctionnalites et corriger des bogues critiques.
  - name: twitter:title
    content: Les alias de mise a jour - Dotfiles (FR)
  - name: og:title
    content: Les alias de mise a jour - Dotfiles (FR)
  - name: og:description
    content: Les alias de mise a jour creent des raccourcis utiles pour mettre a jour le systeme d'exploitation et les logiciels installes. Cela securise et ameliore l'installation actuelle des Dotfiles pour se proteger contre les vulnerabilites de securite, ajouter de nouvelles fonctionnalites et corriger des bogues critiques.
  - name: og:image:alt
    content: Les Dotfiles - Concus pour s'adapter a votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias de mise a jour

Gerer les alias de mise a jour. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont definis dans `update.aliases.sh` et sont charges automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias pour mettre a jour divers logiciels sur
macOS et Linux.
### macOS
- `upd` met a jour les logiciels macOS, les paquets Homebrew, les Homebrew Casks, les apps du Mac
   App Store, la toolchain Rust stable, les gems Ruby, les paquets Python
   et les paquets Node.js.
### Linux
- `open` ouvre un fichier ou une URL dans l'application preferee de l'utilisateur.
- `pbcopy` copie dans le presse-papiers.
- `pbpaste` colle depuis le presse-papiers.
- `upd` met a jour les paquets Linux, nettoie le cache des paquets, met a jour les paquets pnpm,
  met a jour la toolchain Rust stable, met a jour les gems Ruby, met a jour les paquets Python,
  et met a jour les paquets Node.js.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
