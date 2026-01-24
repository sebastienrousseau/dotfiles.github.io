---
description: alias modernes pour Dotfiles
lang: fr-FR
metaTitle: Alias modernes - Dotfiles (FR)
permalink: /aliases/modern/
---
# Alias d'outillage moderne

Gérer les alias d'outillage moderne. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `modern.aliases.sh` et sont chargés automatiquement par `chezmoi`.
Ils fournissent des remplacements modernes des outils Unix hérités (basés sur Rust).

## ⚡ Alias

### Listage de fichiers (eza)
Si `eza` est installé (remplace `ls`) :
- `ls` - Lister les fichiers (`eza --icons`)
- `ll` - Liste longue (`eza -alF`)
- `la` - Tout lister (`eza -a`)
- `lt` - Vue arborescente (`eza --tree`)

*(Replie sur `ls` standard si `eza` est absent)*

### Contenu de fichiers (bat)
Si `bat` est installé (remplace `cat`) :
- `cat` - Afficher le contenu avec coloration syntaxique

### Recherche (rg)
Si `rg` est installé (remplace `grep`) :
- `grep` - Rechercher avec Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
