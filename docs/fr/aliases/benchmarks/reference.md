---
title: Annexe de référence Benchmarks | Dotfiles
description: Référence complète des alias et fonctions auxiliaires pour Benchmarks dans Dotfiles v0.2.495. Inclut chaque raccourci, exemple d'utilisation et fonction shell pour macOS, Linux et WSL.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Annexe de référence Benchmarks | Dotfiles preview
canonical: /fr/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /fr/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, référence, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Référence complète des alias pour Benchmarks dans Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Référence complète des alias pour Benchmarks dans Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Annexe de référence Benchmarks

## Fichiers source

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Référence des alias

| Alias | Commande |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validation

- Exécutez `chezmoi apply` après la mise à jour des alias.
- Exécutez `dot doctor` pour valider l'état de votre shell.
