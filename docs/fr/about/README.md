---
description: La nouvelle génération de configuration du shell. Haute performance, sécurisée et native IA. Gérée par Chezmoi.
lang: fr-FR
metaTitle: À propos de Dotfiles - Dotfiles (FR)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automatisation, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: La nouvelle génération de configuration du shell. Haute performance, sécurisée et native IA. Gérée par Chezmoi.
  - name: twitter:title
    content: À propos de Dotfiles
  - name: og:title
    content: À propos de Dotfiles
  - name: og:description
    content: La nouvelle génération de configuration du shell. Haute performance, sécurisée et native IA. Gérée par Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# À propos de Dotfiles

Le standard moderne pour la configuration du shell. Construit sur **Chezmoi** pour une gestion d’environnement sécurisée et multiplateforme.

## Découvrir

Dotfiles v0.2.474 transforme votre terminal en un espace de travail unifié et puissant. Contrairement aux dotfiles hérités qui reposent sur des Makefiles complexes ou des scripts de liens symboliques, Dotfiles utilise une approche basée sur des modèles, atomique, rapide et reproductible.

### Nouveautés

- **Noyau Moderne** — Des alternatives Rust haute performance remplacent les outils Unix hérités :
  - **Atuin** pour l’historique du shell
  - **Yazi** pour la gestion de fichiers
  - **Zellij** pour le multiplexage de terminal
  - **Ghostty** pour un terminal accéléré par GPU
  - **NeoVim** pour l’édition moderne
- **Sécurité native** — Signature SSH entièrement native, sans agents tiers
- **Mode interactif** — Nouvelle commande `dot learn` pour découvrir les fonctionnalités

## Premiers pas

### Prérequis

- **macOS**, **Linux (Ubuntu/Debian)** ou **Windows (WSL)**
- **Curl** et **Git**
- **Chezmoi** (installé automatiquement)
- **Nerd Font** (pour les icônes du terminal)

### Installation

Lancez une seule commande pour installer l’ensemble de la suite :

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

L’installateur va :

1. Installer le binaire `chezmoi`
2. Cloner le dépôt
3. Installer les paquets requis via Homebrew (macOS) ou Apt (Linux)
4. Appliquer votre configuration

### Explorer

Après l’installation, redémarrez votre terminal puis exécutez :

```bash
dot learn
```

Cela lance une visite interactive de votre nouvel environnement.

## Personnaliser

Votre configuration se trouve dans `~/.local/share/chezmoi` :

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Point d’entrée du shell
├── dot_config/             # Configuration XDG (~/.config)
│   ├── atuin/              # Historique du shell
│   ├── ghostty/            # Émulateur de terminal
│   ├── git/                # Configuration Git
│   ├── yazi/               # Gestionnaire de fichiers
│   ├── zellij/             # Multiplexeur de terminal
│   ├── zsh/                # Configuration Zsh
│   └── shell/              # Alias et chemins partagés
├── provision/              # Scripts de cycle de vie
├── install.sh              # Installateur universel
└── docs/                   # Documentation
```

## Contribuer

Rejoignez la communauté. Consultez notre [Code de conduite][code-of-conduct-url] et nos [Guides de contribution][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
