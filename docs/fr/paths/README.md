---
description: Comment Dotfiles gère la hiérarchie de votre \$PATH pour garantir que les bons outils sont chargés dans le bon ordre.
lang: fr-FR
metaTitle: Chemins (Paths) - Dotfiles (FR)
permalink: /fr/paths/

meta:
  - name: keywords
    content: path, environnement, variables, hiérarchie, dotfiles, chezmoi
---

# Gestion des Chemins (Paths)

L'un des rôles les plus critiques de Dotfiles est la gestion de votre variable d'environnement `$PATH`. Cela détermine quelle version d'un outil est exécutée lorsque vous tapez une commande.

Nous adhérons à une hiérarchie stricte pour assurer la cohérence entre macOS et Linux.

## La Hiérarchie

De la priorité la plus élevée (vérifié en premier) à la plus basse :

1.  **Binaires Locaux** (`~/.local/bin`)
    - **Priorité** : 1
    - **But** : Scripts utilisateur personnalisés, CLI `dot`, et outils installés via `pipx` ou d'autres gestionnaires de paquets niveau utilisateur.
    - **Raison** : Vous permet de surcharger les outils système ou Homebrew avec vos propres versions.

2.  **Binaires d'Applications** (macOS)
    - **Priorité** : 2
    - **But** : Binaires des applications installées (ex: VS Code, iTerm).

3.  **Runtimes de Langages**
    - **Node.js** : `~/.node_modules/bin`
    - **Go** : `~/go/bin`
    - **Rust (Cargo)** : `~/.cargo/bin`
    - **Ruby (User Gems)** : `~/.gem/ruby/bin`
    - **Python (Pipx)** : `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    - **Priorité** : 3
    - **But** : Gestionnaire de paquets principal pour macOS/Linux.
    - **Note** : Nous chargeons volontairement Homebrew _avant_ les chemins système pour permettre la mise à jour des outils système (comme `git` ou `curl`).

5.  **Chemins Système** (`/usr/bin`, `/bin`)
    - **Priorité** : La plus basse
    - **But** : Outils par défaut du système d'exploitation.
    - **Raison** : Repli pour les utilitaires fondamentaux.

## Déduplication

Dotfiles déduplique automatiquement votre `$PATH` tout en préservant l'ordre de priorité. Cela empêche la variable `$PATH` de croître indéfiniment lors du lancement de shells imbriqués.
