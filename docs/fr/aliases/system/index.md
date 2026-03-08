---
title: System Alias | Dotfiles
description: Découvrez les alias System dans Dotfiles v0.2.495. Commandes courtes et mémorables pour les workflows system sous macOS, Linux et WSL.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Alias | Dotfiles preview
canonical: /fr/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Alias
pageType: docs
schemaType: WebPage
metaTitle: System Alias | Dotfiles
permalink: /fr/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, alias, shell, bash, zsh, dotfiles, chezmoi, commandes system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Découvrez les alias System dans Dotfiles v0.2.495. Commandes courtes pour les workflows system.
  - name: twitter:title
    content: System Alias | Dotfiles
  - name: og:title
    content: System Alias | Dotfiles
  - name: og:description
    content: Découvrez les alias System dans Dotfiles v0.2.495. Commandes courtes pour les workflows system.
  - name: og:image:alt
    content: Dotfiles – Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# System Alias

Raccourcis system.

Cette page présente un groupe d'alias et ses raccourcis de commandes courants. Lisez-la d'abord pour comprendre les conventions de nommage, les entrées attendues et les schémas d'exécution sûrs. Ouvrez ensuite l'annexe de référence pour l'inventaire complet des commandes et la syntaxe exacte. Ces alias réduisent la saisie répétitive et garantissent un comportement de workflow cohérent sous macOS, Linux et WSL.

## Quand utiliser

Utilisez cette page avant votre travail quotidien en shell lorsque vous avez besoin de schémas de commandes fiables.

## Contenu

- Alias : 24
- Fonctions auxiliaires : 0
- Fichiers source : 1

## Exemples rapides

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Étape suivante

Ouvrir la liste complète :

- [Annexe de référence System](./reference.md)
