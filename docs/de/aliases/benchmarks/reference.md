---
title: Benchmarks-Referenzanhang | Dotfiles
description: Vollständige Alias- und Hilfsfunktionsreferenz für Benchmarks in Dotfiles v0.2.495. Enthält jeden Shortcut, Anwendungsbeispiele und Shell-Funktionen für macOS, Linux und WSL.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks-Referenzanhang | Dotfiles preview
canonical: /de/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /de/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, Referenz, Aliase, Shell, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Vollständige Alias-Referenz für Benchmarks in Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Vollständige Alias-Referenz für Benchmarks in Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Passend für Ihr Shell-Leben
  - name: og:locale
    content: de_DE
---

# Benchmarks-Referenzanhang

## Quelldateien

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Alias-Referenz

| Alias | Befehl |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validierung

- Führen Sie `chezmoi apply` nach Alias-Aktualisierungen aus.
- Führen Sie `dot doctor` aus, um den Shell-Zustand zu prüfen.
