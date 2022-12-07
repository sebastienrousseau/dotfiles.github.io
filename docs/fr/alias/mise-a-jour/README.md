---
description: Les alias de mise à jour sont des alias qui vous permettent de simplifier l'utilisation des commandes de mise à jour.
lang: fr-FR
metaTitle: Les alias de mise à jour - Dotfiles (FR)
permalink: /aliases/mise-a-jour/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, mise-a-jour, mettre à jour, système d'exploitation, logiciels,
  - name: twitter:card
    content: Les alias de mise à jour sont des alias qui vous permettent de simplifier l'utilisation des commandes de mise à jour.
  - name: twitter:description
    content: Les alias de mise à jour sont des alias qui vous permettent de simplifier l'utilisation des commandes de mise à jour.
  - name: twitter:title
    content: Les alias de mise à jour - Dotfiles (FR)
  - name: og:title
    content: Les alias de mise à jour - Dotfiles (FR)
  - name: og:description
    content: Les alias de mise à jour sont des alias qui vous permettent de simplifier l'utilisation des commandes de mise à jour.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de mise à jour

Le fichier `update.aliases.sh` crée des raccourcis utiles pour mettre à jour le
système d'exploitation et les logiciels.

Les mises à jour aident à sécuriser et à améliorer l'installation actuelle des
Dotfiles pour protéger contre les vulnérabilités de sécurité, ajouter de
nouvelles fonctionnalités et corriger les bogues critiques.

## Raccourcis de mise à jour

Pour un contrôle plus important, le processus de mise à jour est combiné en une
seule commande qui :

1. Met à jour le système d'exploitation et les paquets logiciels
2. Met à jour les Dotfiles
3. Met à jour le fichier `update.aliases.sh` pour inclure les dernières
   modifications

### Plateformes prises en charge

#### Linux

L'alias `upd` a été adapté pour fonctionner sur Linux. Il mettra à jour les
distributions Linux basées sur Debian, via le gestionnaire de paquets `apt` et
d'autres dépendances via pnpm, rustup (Rust) et gem (Ruby).

| Alias | Commande                                                                                                           | Description                                                   |
| ----- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| upd   | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Met à jour le système d'exploitation et les paquets logiciels |

### macOS

L'alias `upd` est également disponible pour macOS. Il mettra à jour macOS, via
la ligne de commande `softwareupdate`, et gérera ses dépendances à l'aide des
gestionnaires de paquets pnpm, Homebrew, mas, rustup et gem.

| Alias | Command                                                                                                                                                                                            | Description                                                   |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| upd   | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Met à jour le système d'exploitation et les paquets logiciels |
