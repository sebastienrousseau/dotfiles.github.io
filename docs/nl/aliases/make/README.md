---
title: "Make-aliassen: Stroomlijn je build-workflow"
description: "Snelkoppeling-aliassen voor Make-commando's. Vereenvoudig builds, tests en projectautomatisering."
lang: nl-NL
metaTitle: Make-aliassen | Dotfiles
permalink: /nl/aliases/make/
sidebar: true
meta:
  - name: keywords
    content: make aliassen, makefile snelkoppelingen, build automatisering, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make-aliassen | Dotfiles
  - name: twitter:description
    content: Snelkoppeling-aliassen voor Make-commando's. Vereenvoudig builds, tests en projectautomatisering.
  - name: og:title
    content: Make-aliassen | Dotfiles
  - name: og:description
    content: Snelkoppeling-aliassen voor Make-commando's. Vereenvoudig builds, tests en projectautomatisering.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Make-aliassen

Vereenvoudig je build-workflow met afkortingscommando's voor Make.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen bieden snelle toegang tot gangbare Make-targets. Gedefinieerd in `make.aliases.sh` en automatisch geladen door chezmoi als onderdeel van de Universal Dotfiles-configuratie.

## Referentie

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `mk` | `make` | Voer standaard Make-target uit |
| `mka` | `make all` | Bouw alle targets |
| `mkc` | `make clean` | Ruim build-artefacten op |
| `mkd` | `make doc` | Genereer documentatie |
| `mkf` | `make format` | Formatteer bronbestanden |
| `mkh` | `make help` | Toon helpinformatie |
| `mki` | `make install` | Installeer het project |
| `mkr` | `make run` | Voer het project uit |
| `mkt` | `make test` | Voer tests uit |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
