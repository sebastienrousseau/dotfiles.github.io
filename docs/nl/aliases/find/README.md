---
title: "Find-aliassen: Snelle bestandszoek-commando's"
description: "Stroomlijn bestandszoekopdrachten met fd-gebaseerde aliassen. Snelle, gekleurde uitvoer en intuitive commando's voor Unix-systemen."
lang: nl-NL
metaTitle: "Find-aliassen | Dotfiles"
permalink: /nl/aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "find aliassen, fd commando, bestandszoekopdracht, shell aliassen, dotfiles, unix find"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Find-aliassen | Dotfiles
  - name: twitter:description
    content: Stroomlijn bestandszoekopdrachten met fd-gebaseerde aliassen. Snelle, gekleurde uitvoer en intuitive commando's voor Unix-systemen.
  - name: og:title
    content: Find-aliassen | Dotfiles
  - name: og:description
    content: Stroomlijn bestandszoekopdrachten met fd-gebaseerde aliassen. Snelle, gekleurde uitvoer en intuitive commando's voor Unix-systemen.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Find-aliassen

Krachtige bestandszoek-snelkoppelingen met fd, het moderne alternatief voor find.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen bieden een gestroomlijnde interface voor `fd`, een snel en gebruiksvriendelijk alternatief voor het traditionele `find` commando. Gedefinieerd in `find.aliases.sh`, worden ze automatisch geladen door chezmoi en bieden gekleurde uitvoer, intuitive syntax en memorabele commando's voor gangbare bestandszoek-operaties.

Wanneer `fd` beschikbaar is op je systeem, wordt het `find` commando automatisch gealiast om `fd` te gebruiken, wat je standaard betere prestaties en eenvoudigere syntax geeft.

## Referentie

### Kerncommando's

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `fd` | `fd --color always` | Zoek bestanden met gekleurde uitvoer |
| `find` | `fd` | Gebruik fd als standaard find-vervanging |

### Zoekopties

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | Toon resultaten met absolute paden |
| `fdc` | `fd --ignore-case` | Voer hoofdletterongevoelige zoekopdracht uit |
| `fdd` | `fd --list-details` | Toon gedetailleerde bestandsinformatie |
| `fde` | `fd --extension` | Filter op bestandsextensie |
| `fdf` | `fd --follow` | Volg symbolische links tijdens zoekopdracht |
| `fdh` | `fd --hidden` | Voeg verborgen bestanden toe aan resultaten |
| `fdn` | `fd --glob` | Match bestanden met glob-patronen |
| `fdo` | `fd --owner` | Filter op bestandseigenaar |
| `fds` | `fd --size` | Filter op bestandsgrootte |
| `fdu` | `fd --exclude` | Sluit bestanden uit die aan patroon voldoen |
| `fdx` | `fd --exec` | Voer commando uit voor elk resultaat |

### Hulpcommando's

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `fdv` | `fd --version` | Toon fd versie-informatie |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
