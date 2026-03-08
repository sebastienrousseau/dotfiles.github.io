---
title: À propos de Dotfiles
description: La nouvelle génération de configuration du shell. Haute performance, sécurisée et native IA. Gérée par Chezmoi.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: À propos de Dotfiles preview
canonical: /fr/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: À propos de Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: À propos de Dotfiles - Dotfiles (FR)
permalink: /fr/about/
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

Dotfiles v0.2.481 transforme votre terminal en un espace de travail unifié et puissant. Contrairement aux dotfiles hérités qui reposent sur des Makefiles complexes ou des scripts de liens symboliques, Dotfiles utilise une approche basée sur des modèles, atomique, rapide et reproductible.

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
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

## Commandes principales

La CLI `dot` propose 53 commandes organisées par catégorie.

### Noyau

- `dot apply` — applique les changements de configuration.
- `dot sync` — récupère l'état le plus récent du dépôt et l'applique.
- `dot update` — met à jour le dépôt et préchauffe les caches.
- `dot add` — ajoute de nouveaux fichiers dans la source Chezmoi.
- `dot diff` — affiche les changements en attente avant application.
- `dot status` — affiche l'état des fichiers gérés.
- `dot remove` — retire un fichier de la gestion et supprime l'entrée source.
- `dot cd` — ouvre un shell dans le répertoire source Chezmoi.
- `dot edit` — ouvre un fichier géré dans votre éditeur.
- `dot clean-cache` — purge les caches transitoires.
- `dot prewarm` — précharge les caches pour un démarrage shell plus rapide.

### Diagnostics

- `dot doctor` — valide les chemins, outils et l'état du shell.
- `dot heal` — répare automatiquement l'état manquant ou défectueux.
- `dot health` — exécute une sonde de santé légère.
- `dot verify` — vérifie l'intégrité des fichiers par rapport à la source.
- `dot scorecard` — affiche un score de qualité de la configuration.
- `dot snapshot` — capture l'état actuel pour comparaison ultérieure.
- `dot smoke-test` — valide les chaînes d'outils principales de bout en bout.
- `dot chaos` — injecte des fautes pour tester l'auto-réparation.
- `dot bundle` — exporte un paquet de configuration portable.
- `dot rollback` — revient à un instantané précédent.
- `dot drift` — détecte les changements non autorisés sur les fichiers gérés.
- `dot history` — affiche le journal d'historique apply/sync.
- `dot benchmark` — mesure le temps de démarrage du shell.
- `dot perf` — profile l'initialisation lente du shell.

### Apparence

- `dot theme` — change le thème de couleurs du terminal.
- `dot wallpaper` — définit le fond d'écran du bureau (macOS).
- `dot fonts` — installe ou met à jour les Nerd Fonts.
- `dot tune` — ajuste la densité de l'interface et le style du prompt.

### Sécurité

- `dot backup` — crée des sauvegardes chiffrées de la configuration.
- `dot encrypt-check` — vérifie le chiffrement des secrets au repos.
- `dot firewall` — configure les règles du pare-feu de l'hôte.
- `dot telemetry` — contrôle la télémétrie d'utilisation anonyme.
- `dot dns-doh` — active DNS-over-HTTPS.
- `dot lock-screen` — verrouille l'écran immédiatement.
- `dot usb-safety` — restreint le montage automatique des périphériques USB.

### Secrets

- `dot secrets-init` — initialise le backend de secrets (age / GPG).
- `dot secrets` — liste les entrées de secrets chiffrés.
- `dot secrets-create` — crée un nouveau secret chiffré.
- `dot ssh-key` — génère ou effectue la rotation des paires de clés SSH.
- `dot ssh-cert` — demande un certificat SSH auprès d'une CA.

### IA

- `dot ai` — ouvre une session d'assistant IA interactif.
- `dot ai-setup` — configure les clés API pour les fournisseurs d'IA.
- `dot ai-query` — envoie une requête unique à un modèle d'IA.
- Wrappers d'outils IA : `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Outils

- `dot tools` — liste les remplacements CLI intégrés et leur état.
- `dot new` — crée un nouveau fichier d'alias ou de fonction.
- `dot sandbox` — ouvre un shell bac à sable jetable.
- `dot keys` — affiche les raccourcis clavier actuels.
- `dot learn` — démarre le tutoriel interactif.

### Méta

- `dot upgrade` — met à jour Dotfiles vers la dernière version.
- `dot packages` — liste les paquets installés gérés par Dotfiles.
- `dot version` / `dot help` — affiche les informations de version ou d'utilisation.

## Contribuer

Rejoignez la communauté. Consultez notre [Code de conduite][code-of-conduct-url] et nos [Guides de contribution][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
