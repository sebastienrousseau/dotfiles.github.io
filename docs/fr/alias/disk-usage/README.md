---
description: Alias d'utilisation du disque pour Dotfiles
lang: fr-FR
metaTitle: Alias d'utilisation du disque - Dotfiles (FR)
permalink: /aliases/disk-usage/
---

# Alias d'utilisation du disque

Gérer les alias d'utilisation du disque. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `disk-usage.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias de commande pour aider les utilisateurs à gérer l'utilisation du disque sur un système Unix.
Les alias suivants sont fournis :
- `du` : Afficher l'utilisation du disque du répertoire courant.
- `du1` : Afficher la taille des fichiers et répertoires du répertoire courant.
- `duh` : Afficher la taille des fichiers et répertoires.
- `ducks` : Afficher les 10 plus gros fichiers et répertoires du répertoire courant.
- `dus` : Afficher la taille dans un format lisible et trier par taille.
- `dusym` : Afficher la taille des fichiers et répertoires du répertoire courant, y compris les liens symboliques.
- `dut` : Afficher la taille totale du répertoire courant.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
