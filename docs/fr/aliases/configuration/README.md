---
title: "Alias Configuration : accès rapide aux fichiers de config"
description: "Ouvrez instantanément les fichiers de configuration shell, Git, SSH et serveur avec ces alias."
lang: fr-FR
metaTitle: "Alias Configuration | Dotfiles"
permalink: /aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "alias configuration, config shell, dotfiles, alias bash, alias zsh, config git, config ssh"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Configuration | Dotfiles
  - name: twitter:description
    content: Ouvrez instantanément les fichiers de configuration shell, Git, SSH et serveur avec ces alias.
  - name: og:title
    content: Alias Configuration | Dotfiles
  - name: og:description
    content: Ouvrez instantanément les fichiers de configuration shell, Git, SSH et serveur avec ces alias.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Configuration

Ouvrez les fichiers de configuration dans votre éditeur par défaut avec une seule commande.

## Aperçu

Les alias configuration offrent des raccourcis vers les fichiers fréquemment modifiés. Ces alias sont définis dans `configuration.aliases.sh` et chargés automatiquement par chezmoi.

Chaque alias ouvre le fichier correspondant dans l’éditeur de texte par défaut du système, sans devoir mémoriser les chemins.

## Référence

### Configuration du shell

| Alias | Description |
|-------|-------------|
| `bshrc` | Ouvrir la configuration Bash (~/.bashrc) |
| `bshp` | Ouvrir le profil Bash (~/.bash_profile) |
| `zshrc` | Ouvrir la configuration Zsh (~/.zshrc) |
| `zshp` | Ouvrir le profil Zsh (~/.zprofile) |

### Gestion de versions

| Alias | Description |
|-------|-------------|
| `gcfg` | Ouvrir la configuration Git (~/.gitconfig) |
| `gign` | Ouvrir le fichier Git ignore (~/.gitignore) |

### Réseau et serveurs

| Alias | Description |
|-------|-------------|
| `apconf` | Ouvrir la configuration Apache |
| `ngconf` | Ouvrir la configuration Nginx |
| `sshconf` | Ouvrir la configuration SSH (~/.ssh/config) |
| `hosts` | Ouvrir le fichier hosts (/etc/hosts) |

### Outils de développement

| Alias | Description |
|-------|-------------|
| `dockcomp` | Ouvrir un fichier Docker Compose |
| `eddir` | Ouvrir le répertoire courant dans l’éditeur par défaut |
