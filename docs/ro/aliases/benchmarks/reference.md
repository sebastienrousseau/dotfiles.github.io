---
title: Anexă de referință Benchmarks | Dotfiles
description: Referință completă a aliasurilor și funcțiilor auxiliare pentru Benchmarks în Dotfiles v0.2.495. Include fiecare scurtătură, exemplu de utilizare și funcție shell pentru macOS, Linux și WSL.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Anexă de referință Benchmarks | Dotfiles preview
canonical: /ro/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /ro/aliases/benchmarks/reference/
---

# Anexă de referință Benchmarks

## Fișiere sursă

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Referință aliasuri

| Alias | Comandă |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validare

- Rulați `chezmoi apply` după actualizarea aliasurilor.
- Rulați `dot doctor` pentru a valida starea shell-ului.
