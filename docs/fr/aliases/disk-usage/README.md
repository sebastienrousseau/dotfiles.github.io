---
title: "Alias Disk Usage : surveiller le stockage avec le shell"
description: "Alias shell pour le suivi de l’espace disque. Affichez la taille des fichiers, trouvez les gros dossiers et gérez le stockage."
lang: fr-FR
metaTitle: Alias Disk Usage | Dotfiles
permalink: /aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: alias disk usage, commande du, suivi stockage, taille fichier, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell pour le suivi de l’espace disque. Affichez la taille des fichiers, trouvez les gros dossiers et gérez le stockage.
  - name: twitter:title
    content: Alias Disk Usage | Dotfiles
  - name: og:title
    content: Alias Disk Usage | Dotfiles
  - name: og:description
    content: Alias shell pour le suivi de l’espace disque. Affichez la taille des fichiers, trouvez les gros dossiers et gérez le stockage.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Disk Usage

Surveillez rapidement la consommation de stockage dans votre système de fichiers.

## Aperçu

Les alias disk usage fournissent des commandes simplifiées pour surveiller la consommation sur les systèmes Unix. Définis dans `disk-usage.aliases.sh`, ces raccourcis simplifient les opérations `du` et sont chargés automatiquement par chezmoi dans la configuration Dotfiles.

## Référence

Le tableau suivant liste tous les alias disk usage et leurs fonctions.

| Alias | Description |
|-------|-------------|
| `du` | Afficher l’utilisation disque du répertoire courant |
| `du1` | Afficher la taille des fichiers et dossiers du répertoire courant |
| `duh` | Afficher la taille des fichiers et dossiers en format lisible |
| `ducks` | Afficher les 10 fichiers/dossiers les plus volumineux du répertoire courant |
| `dus` | Afficher les tailles en format lisible, triées par taille |
| `dusym` | Afficher la taille des fichiers et dossiers, symlinks inclus |
| `dut` | Afficher la taille totale du répertoire courant |
