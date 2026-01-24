---
description: Le Noyau Moderne est une suite d'outils Rust qui remplace les utilitaires Unix hérités par des alternatives plus rapides et plus intelligentes.
lang: fr-FR
metaTitle: Noyau Moderne - Dotfiles (FR)
permalink: /alias/modern-core/

meta:
  - name: keywords
    content: noyau moderne, atuin, yazi, zellij, ghostty, rust, shell, outils
---

# Outils du Noyau Moderne

Dans **v0.2.471**, nous avons introduit le « Noyau Moderne » — une suite d'outils hautes performances, propulsés par Rust, conçus pour remplacer les utilitaires Unix hérités.

## Vue d'ensemble des outils

| Outil        | Remplace        | Description                                             | Raccourci       |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | Historique shell synchronisé et chiffré avec recherche floue. | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | Gestionnaire de fichiers terminal ultra-rapide avec aperçu d'images. | `yy` (alias) |
| **Zellij**  | `tmux`          | Multiplexeur moderne avec dispositions intuitives.     | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | Émulateur de terminal multiplateforme accéléré GPU.    | N/A             |

## Atuin (Historique magique)

Atuin remplace votre historique shell existant par une base SQLite.

- **Recherche** : appuyez sur `Ctrl+R` ou `Flèche Haut` pour ouvrir l'interface de recherche.
- **Filtrer** : tapez des requêtes en langage naturel ou des codes de sortie spécifiques.
- **Synchronisation** : votre historique est chiffré et synchronisé entre vos appareils.

## Yazi (Gestionnaire de fichiers)

Yazi est un gestionnaire de fichiers terminal écrit en Rust, basé sur l'I/O asynchrone.

- **Lancer** : tapez `yy` dans votre terminal.
- **Fonctionnalités** :
  - Démarrage instantané.
  - Prise en charge des aperçus d'images Sixel/Kitty.
  - Système de plugins Lua.

## Zellij (Multiplexeur)

Zellij est un espace de travail terminal avec batteries incluses.

- **Lancer** : tapez `zellij` (ou utilisez votre alias configuré).
- **Fonctionnalités** :
  - Moteur de dispositions (sauvegarder/restaurer des layouts).
  - Volets flottants.
  - Raccourcis conviviaux (affichés à l'écran).

## Ghostty (Terminal)

Ghostty est l'émulateur de terminal par défaut du Noyau Moderne.

- **Fonctionnalités** :
  - Performances natives (accélération GPU).
  - Ligatures et prise en charge des polices modernes.
  - Rendu sans scintillement.
