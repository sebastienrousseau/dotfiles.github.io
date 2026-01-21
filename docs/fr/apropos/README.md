---
description: La nouvelle génération de fichiers de configuration, gérée par Chezmoi. Haute performance, sécurisée et native IA.
lang: fr-FR
metaTitle: À propos - Dotfiles (FR)
permalink: /apropos/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automatisation, macos, linux, rust, zellij
---

# À propos de Dotfiles v0.2.471

## Introduction

Dotfiles représente le standard moderne pour la configuration d'environnement. Il est construit sur **Chezmoi**, offrant une méthode sécurisée, fiable et multiplateforme pour gérer votre shell, vos applications et vos secrets.

Contrairement aux dotfiles hérités qui reposent sur des Makefiles complexes ou des scripts de liens symboliques, Dotfiles utilise une approche basée sur des modèles, atomique et rapide.

## Nouveautés de la v0.2.471

- **Noyau Moderne** : Remplacement des outils Unix hérités par des alternatives Rust haute performance :
  - **Atuin** (remplace `history`)
  - **Yazi** (remplace `ls`/`ranger`)
  - **Zellij** (remplace `tmux`)
  - **Ghostty** (Terminal moderne accéléré par GPU)
- **Sécurité Native** : Signature SSH entièrement native (sans clé/sans propriétaires) sans agents tiers.
- **Mode Interactif** : Nouvelle commande `dot learn` pour vous guider à travers les fonctionnalités.

## Démarrage

### :one: Prérequis

- **macOS** ou **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (pour télécharger l'installateur)
- **Git** (géré automatiquement)

### :two: Installation (Commande Unique)

La suite entière s'installe via une seule commande utilisant Chezmoi :

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

Cette commande va :

1.  Installer le binaire `chezmoi`.
2.  Cloner le dépôt vers `~/.local/share/chezmoi`.
3.  Calculer la différence entre votre état actuel et l'état désiré.
4.  Appliquer la configuration (installant paquets, polices et outils).

### :three: Post-Installation

Une fois installé, tapez simplement :

```bash
dot learn
```

Cela lancera la visite interactive pour vous aider à vous familiariser avec votre nouvel environnement.

## Contenu

Votre configuration est gérée dans `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship, etc.)
├── dot_local/           # ~/.local (Scripts personnalisés, bin)
├── dot_ssh/             # Sécurité SSH
├── dot_zshrc.tmpl       # Configuration Zsh
├── provision/           # Scripts d'installation (Darwin/Linux)
└── docs/                # Documentation
```

## Contribution

Nous accueillons les contributions ! Veuillez consulter notre [Code de conduite][code-of-conduct-url] et nos [Guides de contribution][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
