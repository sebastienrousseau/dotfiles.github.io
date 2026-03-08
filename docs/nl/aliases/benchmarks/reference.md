---
title: Benchmarks-referentiebijlage | Dotfiles
description: Volledige alias- en helperfunctiereferentie voor Benchmarks in Dotfiles v0.2.495. Bevat elke sneltoets, gebruiksvoorbeeld en shellfunctie voor macOS, Linux en WSL.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks-referentiebijlage | Dotfiles preview
canonical: /nl/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /nl/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, referentie, aliassen, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Volledige aliasreferentie voor Benchmarks in Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Volledige aliasreferentie voor Benchmarks in Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Ontworpen om in uw shellleven te passen
  - name: og:locale
    content: nl_NL
---

# Benchmarks-referentiebijlage

## Bronbestanden

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Aliasreferentie

| Alias | Opdracht |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validatie

- Voer `chezmoi apply` uit na het bijwerken van aliassen.
- Voer `dot doctor` uit om de shellstatus te valideren.
