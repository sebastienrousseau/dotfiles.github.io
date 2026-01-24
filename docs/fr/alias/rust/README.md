---
description: Les alias Rust sont une collection d'alias permettant d'interagir avec `rustup` et `cargo`. Ils sont conçus pour le gestionnaire de toolchains `rustup` et le gestionnaire de paquets `cargo`.
lang: fr-FR
metaTitle: Les alias Rust - Dotfiles (FR)
permalink: /alias/rust/

meta:
  - name: keywords
    content: alias, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias Rust sont une collection d'alias permettant d'interagir avec `rustup` et `cargo`. Ils sont conçus pour le gestionnaire de toolchains `rustup` et le gestionnaire de paquets `cargo`.
  - name: twitter:description
    content: Les alias Rust sont une collection d'alias permettant d'interagir avec `rustup` et `cargo`. Ils sont conçus pour le gestionnaire de toolchains `rustup` et le gestionnaire de paquets `cargo`.
  - name: twitter:title
    content: Les alias Rust - Dotfiles (FR)
  - name: og:title
    content: Les alias Rust - Dotfiles (FR)
  - name: og:description
    content: Les alias Rust sont une collection d'alias permettant d'interagir avec `rustup` et `cargo`. Ils sont conçus pour le gestionnaire de toolchains `rustup` et le gestionnaire de paquets `cargo`.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Rust

Gérer les alias Rust. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `rust.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble complet d'alias pour le développement Rust
avec les commandes `cargo` et `rustup`.
#### Commandes de base
- `cg` - Raccourci Cargo
- `cgn` - Créer un nouveau projet binaire
- `cgni` - Créer un nouveau projet bibliothèque
- `cginit` - Initialiser un projet dans le répertoire courant
#### Build et exécution
- `cgb` - Build debug
- `cgbr` - Build release
- `cgr` - Exécuter en debug
- `cgrr` - Exécuter en release
- `cgw` - Surveiller et reconstruire
#### Tests et benchmarks
- `cgt` - Exécuter les tests
- `cgtr` - Tests en mode release
- `cgbh` - Exécuter les benchmarks
- `cgta` - Tester toutes les cibles
- `cgtt` - Tests mono-thread
#### Qualité de code
- `cgc` - Vérifier la compilation
- `cgcl` - Nettoyer les artefacts de build
- `cgcy` - Exécuter les lint clippy
- `cgf` - Formater le code
- `cgfa` - Formater tout le code
- `cgfx` - Corriger automatiquement les problèmes de code
- `cgaud` - Vérifier les vulnérabilités de sécurité
#### Documentation
- `cgd` - Construire et ouvrir la documentation
- `cgdr` - Construire la documentation release
- `cgdo` - Documenter les éléments privés
#### Dépendances
- `cga` - Ajouter une dépendance
- `cgad` - Ajouter une dépendance de dev
- `cgu` - Mettre à jour les dépendances
- `cgo` - Vérifier les dépendances obsolètes
- `cgv` - Vendoriser les dépendances
- `cgtree` - Afficher l'arbre des dépendances
#### Cross compilation
- `cgx` - Build via Zig
- `cgxw` - Cross compilation
- `cgxt` - Cibler une plateforme spécifique
#### Analyse et profiling
- `cgfl` - Générer un flamegraph
- `cgbl` - Analyse de taille binaire
- `cgl` - Couverture de code
- `cgm` - Structure des modules
- `cgex` - Développer les macros
#### Gestion de paquets
- `cgi` - Installer un binaire
- `cgun` - Désinstaller un binaire
- `cgp` - Publier sur crates.io
- `cgs` - Rechercher sur crates.io
- `cgcp` - Créer un package de release
#### Build avancé
- `cgba` - Build toutes les cibles
- `cgbt` - Build avec toutes les features
- `cgbp` - Build avec un profil spécifique
#### Modèles de projet
- `cgnb` - Nouveau binaire depuis un template
- `cgnl` - Nouvelle bibliothèque depuis un template
- `cgnt` - Nouveau depuis un template personnalisé
#### Mises à jour et installation
- `ru` - Mettre à jour toutes les toolchains
- `rus` - Mettre à jour la toolchain stable
- `run` - Mettre à jour la toolchain nightly
- `rti` - Installer une toolchain spécifique
#### Gestion des composants
- `rca` - Ajouter un composant
- `rcl` - Lister les composants
- `rcr` - Retirer un composant
#### Gestion des toolchains
- `rtl` - Lister les toolchains installées
- `rtu` - Désinstaller une toolchain
- `rde` - Définir la toolchain par défaut
#### Gestion des cibles
- `rtaa` - Ajouter une cible de compilation
- `rtal` - Lister les cibles disponibles
- `rtar` - Retirer une cible de compilation
#### Exécution d'environnement
- `rns` - Exécuter une commande avec stable
- `rnn` - Exécuter une commande avec nightly
#### Documentation et aide
- `rdo` - Ouvrir la documentation Rust

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
