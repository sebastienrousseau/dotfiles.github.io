---
title: "Alias NPM : simplifiez la gestion des paquets Node"
description: "Accélérez les workflows npm avec des alias pour install, build, test et publish."
lang: fr-FR
metaTitle: "NPM Aliases | Dotfiles"
permalink: /aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: alias npm, gestionnaire paquets node, raccourcis npm, alias shell, dotfiles, commandes npm
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM Aliases | Dotfiles
  - name: twitter:description
    content: Accélérez les workflows npm avec des alias pour install, build, test et publish.
  - name: og:title
    content: NPM Aliases | Dotfiles
  - name: og:description
    content: Accélérez les workflows npm avec des alias pour install, build, test et publish.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias NPM

Simplifiez le développement Node.js avec des commandes abrégées pour le gestionnaire npm.

![Dotfiles banner][banner]

## Aperçu

Ces alias sont définis dans `npm.aliases.sh` et chargés automatiquement par chezmoi. Ils donnent un accès rapide aux opérations npm courantes.

## Référence

### Gestion des paquets

| Alias | Commande | Description |
|-------|---------|-------------|
| `npi` | `npm install` | Installer un paquet npm |
| `npg` | `npm install -g` | Installer un paquet npm en global |
| `nprm` | `npm uninstall` | Supprimer un paquet npm |
| `npu` | `npm update` | Mettre à jour un paquet npm |
| `npl` | `npm list` | Lister les paquets npm |
| `npc` | `npm cache` | Gérer le cache npm |

### Scripts

| Alias | Commande | Description |
|-------|---------|-------------|
| `npr` | `npm run` | Exécuter un script npm |
| `nps` | `npm start` | Démarrer un script npm |
| `npb` | `npm run build` | Builder un script npm |
| `npd` | `npm run dev` | Script npm de dev |
| `npt` | `npm test` | Tester un script npm |
| `nprw` | `npm run watch` | Script npm watch |
| `npsv` | `npm run serve` | Script npm de serve |

### Publication et analyse

| Alias | Commande | Description |
|-------|---------|-------------|
| `npp` | `npm publish` | Publier un paquet npm |
| `npa` | `npm audit` | Auditer les paquets npm |
| `npx` | `npm exec` | Exécuter un paquet npm |
| `npy` | `npm why` | Pourquoi un paquet npm |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
