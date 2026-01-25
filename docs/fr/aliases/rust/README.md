---
description: Alias Rust pour Cargo et Rustup. Raccourcis pour compiler, tester et gérer les projets Rust.
lang: fr-FR
metaTitle: Aliases Rust - Dotfiles (FR)
permalink: /aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, alias shell, dotfiles, développement rust
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Rust pour Cargo et Rustup. Raccourcis pour compiler, tester et gérer les projets Rust.
  - name: twitter:title
    content: Aliases Rust - Dotfiles
  - name: og:title
    content: Aliases Rust - Dotfiles
  - name: og:description
    content: Alias Rust pour Cargo et Rustup. Raccourcis pour compiler, tester et gérer les projets Rust.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Rust

Raccourcis pour le développement Rust avec Cargo et Rustup.

## Aperçu

Ces alias sont définis dans `rust.aliases.sh` et chargés automatiquement par Chezmoi.

## Référence

### Commandes de base

| Alias | Description |
|:---|:---|
| `cg` | Raccourci Cargo |
| `cgn` | Créer un projet binaire |
| `cgni` | Créer un projet bibliothèque |
| `cginit` | Initialiser un projet dans le répertoire courant |

### Build et exécution

| Alias | Description |
|:---|:---|
| `cgb` | Build debug |
| `cgbr` | Build release |
| `cgr` | Exécuter en debug |
| `cgrr` | Exécuter en release |
| `cgw` | Watch et rebuild |

### Tests et benchmarks

| Alias | Description |
|:---|:---|
| `cgt` | Lancer les tests |
| `cgtr` | Tests en mode release |
| `cgbh` | Exécuter les benchmarks |
| `cgta` | Tester toutes les cibles |
| `cgtt` | Tests mono-thread |

### Qualité de code

| Alias | Description |
|:---|:---|
| `cgc` | Vérifier la compilation |
| `cgcl` | Nettoyer les artefacts |
| `cgcy` | Lancer les lints clippy |
| `cgf` | Formater le code |
| `cgfa` | Formater tout le code |
| `cgfx` | Corriger automatiquement des problèmes |
| `cgaud` | Vérifier les vulnérabilités |

### Documentation

| Alias | Description |
|:---|:---|
| `cgd` | Construire et ouvrir la doc |
| `cgdr` | Construire la doc en release |
| `cgdo` | Documenter les éléments privés |

### Dépendances

| Alias | Description |
|:---|:---|
| `cga` | Ajouter une dépendance |
| `cgad` | Ajouter une dépendance dev |
| `cgu` | Mettre à jour les dépendances |
| `cgo` | Vérifier les dépendances obsolètes |
| `cgv` | Vendoriser les dépendances |
| `cgtree` | Afficher l’arbre des dépendances |

### Cross compilation

| Alias | Description |
|:---|:---|
| `cgx` | Build avec Zig |
| `cgxw` | Cross compilation |
| `cgxt` | Cible spécifique |

### Analyse et profiling

| Alias | Description |
|:---|:---|
| `cgfl` | Générer un flamegraph |
| `cgbl` | Analyse de taille binaire |
| `cgl` | Couverture de code |
| `cgm` | Structure des modules |
| `cgex` | Étendre les macros |

### Gestion des paquets

| Alias | Description |
|:---|:---|
| `cgi` | Installer un binaire |
| `cgun` | Désinstaller un binaire |
| `cgp` | Publier sur crates.io |
| `cgs` | Rechercher sur crates.io |
| `cgcp` | Créer un package release |

### Build avancé

| Alias | Description |
|:---|:---|
| `cgba` | Build toutes les cibles |
| `cgbt` | Build avec toutes les fonctionnalités |
| `cgbp` | Build avec un profil spécifique |

### Templates de projet

| Alias | Description |
|:---|:---|
| `cgnb` | Nouveau binaire depuis template |
| `cgnl` | Nouvelle bibliothèque depuis template |
| `cgnt` | Nouveau depuis template personnalisé |

### Mises à jour Rustup

| Alias | Description |
|:---|:---|
| `ru` | Mettre à jour tous les toolchains |
| `rus` | Mettre à jour le toolchain stable |
| `run` | Mettre à jour le toolchain nightly |
| `rti` | Installer un toolchain spécifique |

### Gestion des composants

| Alias | Description |
|:---|:---|
| `rca` | Ajouter un composant |
| `rcl` | Lister les composants |
| `rcr` | Supprimer un composant |

### Gestion des toolchains

| Alias | Description |
|:---|:---|
| `rtl` | Lister les toolchains installés |
| `rtu` | Désinstaller un toolchain |
| `rde` | Définir le toolchain par défaut |

### Gestion des cibles

| Alias | Description |
|:---|:---|
| `rtaa` | Ajouter une cible de compilation |
| `rtal` | Lister les cibles disponibles |
| `rtar` | Supprimer une cible de compilation |

### Exécution par environnement

| Alias | Description |
|:---|:---|
| `rns` | Exécuter une commande en stable |
| `rnn` | Exécuter une commande en nightly |

### Documentation et aide

| Alias | Description |
|:---|:---|
| `rdo` | Ouvrir la documentation Rust |

### Gestion des overrides

| Alias | Description |
|:---|:---|
| `rpr` | Définir un toolchain pour un répertoire |
| `rpl` | Lister les overrides de répertoire |
| `rpn` | Supprimer un override de répertoire |

### Infos toolchain

| Alias | Description |
|:---|:---|
| `rws` | Afficher le chemin rustc actif |
| `rsh` | Afficher les infos du toolchain |
