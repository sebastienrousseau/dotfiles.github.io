---
title: "Alias Pnpm : raccourcis pour gestion de paquets rapide"
description: "Simplifiez les workflows pnpm avec des alias pour installer, builder, tester et gérer les dépendances Node.js."
lang: fr-FR
metaTitle: "Pnpm Aliases | Dotfiles"
permalink: /aliases/pnpm/
sidebar: true
meta:
  - name: keywords
    content: "alias pnpm, gestionnaire de paquets, node.js, alternative npm, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Pnpm Aliases | Dotfiles"
  - name: twitter:description
    content: "Simplifiez les workflows pnpm avec des alias pour installer, builder, tester et gérer les dépendances Node.js."
  - name: og:title
    content: "Pnpm Aliases | Dotfiles"
  - name: og:description
    content: "Simplifiez les workflows pnpm avec des alias pour installer, builder, tester et gérer les dépendances Node.js."
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Pnpm

Raccourcis pour le gestionnaire de paquets rapide et économe en disque.

![Dotfiles banner][banner]

## Aperçu

Ces alias sont définis dans `pnpm.aliases.sh` et chargés automatiquement par chezmoi. Ils offrent un accès rapide aux commandes [pnpm](https://pnpm.io/) courantes pour la gestion des paquets Node.js.

## Référence

### Initialisation de projet

| Alias | Description |
|-------|-------------|
| `pni` | Initialiser un nouveau projet |
| `pnc` | Créer un nouveau projet |
| `pnin` | Installer les dépendances du projet |
| `pnun` | Désinstaller les dépendances du projet |

### Développement

| Alias | Description |
|-------|-------------|
| `pnb` | Builder le projet |
| `pnrun` | Exécuter un script du projet |
| `pnd` | Lancer le projet en mode dev |
| `pns` | Lancer le projet en mode serve |
| `pnst` | Démarrer le projet |
| `pnsv` | Lancer le projet en mode server |

### Tests et qualité

| Alias | Description |
|-------|-------------|
| `pnt` | Tester le projet |
| `pntc` | Tester avec couverture |
| `pnln` | Linter le projet |
| `pndoc` | Générer la documentation du projet |

### Gestion des dépendances

| Alias | Description |
|-------|-------------|
| `pnls` | Lister toutes les dépendances |
| `pnout` | Vérifier les dépendances obsolètes |
| `pnwhy` | Vérifier pourquoi une dépendance est installée |
| `pnad` | Ajouter une dépendance dev |
| `pnap` | Ajouter une dépendance peer |
| `pnrm` | Supprimer une dépendance |
| `pnup` | Mettre à jour une dépendance |
| `pnui` | Mettre à jour une dépendance en mode interactif |
| `pnuil` | Mettre à jour une dépendance en mode interactif vers latest |

### Paquets globaux

| Alias | Description |
|-------|-------------|
| `pnga` | Ajouter une dépendance globale |
| `pngls` | Lister toutes les dépendances globales |
| `pngrm` | Supprimer une dépendance globale |
| `pngu` | Mettre à jour une dépendance globale |

### Publication et utilitaires

| Alias | Description |
|-------|-------------|
| `pnpub` | Publier le projet |
| `pnx` | Raccourci pour pnpx |
| `pnh` | Afficher l’aide |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
