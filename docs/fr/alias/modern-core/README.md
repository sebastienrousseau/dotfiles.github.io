---
description: Le Noyau Moderne est une suite d'outils propulsés par Rust qui remplacent les utilitaires Unix hérités par des alternatives plus rapides et plus intelligentes.
lang: fr-FR
metaTitle: Noyau Moderne - Dotfiles (FR)
permalink: /fr/alias/modern-core/

meta:
  - name: keywords
    content: noyau moderne, atuin, yazi, zellij, ghostty, rust, shell, outils
---

# Outils du Noyau Moderne

Dans la version **v0.2.471**, nous avons introduit le "Noyau Moderne" — une suite d'outils haute performance, propulsés par Rust, conçus pour remplacer les utilitaires Unix hérités.

## Aperçu des Outils

| Outil       | Remplace        | Description                                                           | Raccourci         |
| :---------- | :-------------- | :-------------------------------------------------------------------- | :---------------- |
| **Atuin**   | `history`       | Historique shell synchronisable et chiffré avec recherche floue.      | `Ctrl+R` / `Haut` |
| **Yazi**    | `ranger` / `ls` | Gestionnaire de fichiers terminal ultra-rapide avec aperçus d'images. | `yy` (alias)      |
| **Zellij**  | `tmux`          | Multiplexeur de terminal moderne avec des mises en page intuitives.   | `Alt+n`           |
| **Ghostty** | `Terminal.app`  | Émulateur de terminal accéléré par GPU et multiplateforme.            | N/A               |

## Atuin (Historique Magique)

Atuin remplace votre historique shell existant par une base de données SQLite.

- **Recherche** : Appuyez sur `Ctrl+R` ou `Flèche Haut` pour ouvrir l'interface de recherche.
- **Filtre** : Tapez des requêtes en langage naturel ou des codes de sortie spécifiques.
- **Sync** : Votre historique est chiffré et synchronisé sur tous vos appareils.

## Yazi (Gestionnaire de Fichiers)

Yazi est un gestionnaire de fichiers terminal écrit en Rust, basé sur les E/S asynchrones.

- **Lancement** : Tapez `yy` dans votre terminal.
- **Fonctionnalités** :
  - Démarrage instantané.
  - Support des aperçus d'images Sixel/Kitty.
  - Système de plugins Lua.

## Zellij (Multiplexeur)

Zellij est un espace de travail terminal "batteries incluses".

- **Lancement** : Tapez `zellij` (ou utilisez votre alias configuré).
- **Fonctionnalités** :
  - Moteur de mise en page (sauvegarder/restaurer les mises en page de l'espace de travail).
  - Panneaux flottants.
  - Raccourcis conviviaux (affichés à l'écran).

## Ghostty (Terminal)

Ghostty est l'émulateur de terminal par défaut pour le Noyau Moderne.

- **Fonctionnalités** :
  - Performance native (accéléré par GPU).
  - Ligatures et support des polices modernes.
  - Rendu sans scintillement.
