---
description: Comment Dotfiles gère votre hiérarchie PATH pour charger les bons outils dans le bon ordre.
lang: fr-FR
metaTitle: Paths - Dotfiles (FR)
permalink: /paths/

meta:
  - name: keywords
    content: path, environnement, variables, hiérarchie, dotfiles, chezmoi, shell, configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Comment Dotfiles gère votre hiérarchie PATH pour charger les bons outils dans le bon ordre.
  - name: twitter:title
    content: Paths - Dotfiles
  - name: og:title
    content: Paths - Dotfiles
  - name: og:description
    content: Comment Dotfiles gère votre hiérarchie PATH pour charger les bons outils dans le bon ordre.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Paths

Gestion modulaire du `PATH`. Assurez-vous que les bons outils se chargent dans le bon ordre.

## Découvrir

Les configurations de chemins sont séparées en fichiers prioritaires. Lors de `chezmoi apply` :

1. Les fichiers de ce répertoire sont parcourus par ordre alphabétique
2. Le contenu est agrégé dans `~/.config/shell/paths.sh`
3. Ce fichier est sourcé par `.zshrc` au démarrage

## Référence

| Script | Description |
|:---|:---|
| `00-default.paths.sh` | Chemins système de base (`/usr/bin`, `/sbin`) et Homebrew. Chargé en premier. |
| `99-custom.paths.sh` | Chemins utilisateur personnalisés (SDK, bin locaux). Chargé en dernier pour la priorité. |

## Premiers pas

### Ajouter un chemin utilisateur

1. Modifiez `99-custom.paths.sh` ou créez un nouveau fichier (par exemple `50-monprojet.paths.sh`)
2. Ajoutez votre chemin :
   ```bash
   export PATH="$PATH:/chemin/vers/dir"
   ```
3. Appliquez les changements :
   ```bash
   chezmoi apply
   ```
4. Vérifiez :
   ```bash
   echo $PATH
   ```
