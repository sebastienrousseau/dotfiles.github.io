---
title: "Alias Fonts : gérer les polices système"
description: "Alias shell pour gérer les polices et les caches. Mettre à jour le cache et lister les familles installées."
lang: fr-FR
metaTitle: "Alias Fonts | Dotfiles"
permalink: /aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: "alias polices, cache polices, fc-cache, lister polices, dotfiles, shell"
---

# Alias Fonts

Alias shell pour gérer les polices système et leurs caches.

## Aperçu

Les alias fonts offrent des raccourcis pour des tâches courantes de gestion des polices. Ces commandes simplifient la mise à jour du cache après l’installation de nouvelles polices et la liste des familles disponibles.

## Référence

### Commandes

| Alias | Commande | Description |
|-------|---------|-------------|
| `update-fonts` | `fc-cache -fv` | Mettre à jour le cache des polices |
| `list-fonts` | — | Lister toutes les familles de polices installées |

### Polices installées

Les polices suivantes sont configurées par défaut :

| Police | Usage |
|------|---------|
| JetBrainsMono Nerd Font | Police principale du terminal |
| Symbols Nerd Font | Police de secours pour les icônes |
