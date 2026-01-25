---
title: "Alias macOS : raccourcis shell pour Mac"
description: "Alias shell pour la gestion système macOS, le Finder et les tâches de maintenance dans Dotfiles."
lang: fr-FR
metaTitle: "Alias macOS | Dotfiles"
permalink: /aliases/macOS/
sidebar: true
meta:
  - name: keywords
    content: "alias macOS, raccourcis shell, alias Finder, terminal Mac, dotfiles"
---

# Alias macOS

Raccourcis shell pour la gestion et la maintenance de macOS.

## Aperçu

Ces alias sont définis dans `macOS.aliases.sh` et chargés automatiquement par chezmoi. Ils offrent un accès rapide aux opérations macOS courantes : Finder, maintenance système et outils développeur.

## Référence

### Gestion système

| Alias | Description |
|-------|-------------|
| `lockScreen` | Verrouiller l’écran |
| `wifiOn` | Activer le Wi‑Fi |
| `wifiOff` | Désactiver le Wi‑Fi |
| `vp` | Vérifier les permissions macOS |
| `vv` | Vérifier le volume macOS |

### Finder

| Alias | Description |
|-------|-------------|
| `ofd` | Ouvrir le répertoire courant dans Finder |
| `finderShowHidden` | Afficher les fichiers cachés dans Finder |
| `finderHideHidden` | Masquer les fichiers cachés dans Finder |
| `showDesktopIcons` | Afficher les icônes sur le bureau |
| `hideDesktopIcons` | Masquer les icônes sur le bureau |

### Nettoyage

| Alias | Description |
|-------|-------------|
| `clds` | Supprimer récursivement les fichiers .DS_Store |
| `clls` | Nettoyer LaunchServices pour supprimer les doublons du menu Ouvrir avec |
| `trash` | Vider la corbeille sur tous les volumes montés et le disque principal |

### Outils développeur

| Alias | Description |
|-------|-------------|
| `xcode` | Lancer Xcode |
| `purge` | Purger les DerivedData Xcode |
| `iphone` | Ouvrir les simulateurs d’appareils |
| `safariSafeMode` | Lancer Safari en mode sans échec |

### Affichage

| Alias | Description |
|-------|-------------|
| `screensaverDesktop` | Lancer un économiseur d’écran sur le bureau |
