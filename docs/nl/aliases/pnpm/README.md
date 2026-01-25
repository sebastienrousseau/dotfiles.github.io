---
title: "Pnpm-aliassen: Snelle pakketbeheer-snelkoppelingen"
description: "Stroomlijn pnpm-workflows met aliassen voor installeren, bouwen, testen en beheren van Node.js-afhankelijkheden."
lang: nl-NL
metaTitle: "Pnpm-aliassen | Dotfiles"
permalink: /nl/aliases/pnpm/
sidebar: true
meta:
  - name: keywords
    content: "pnpm aliassen, pakketbeheerder, node.js, npm alternatief, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Pnpm-aliassen | Dotfiles"
  - name: twitter:description
    content: "Stroomlijn pnpm-workflows met aliassen voor installeren, bouwen, testen en beheren van Node.js-afhankelijkheden."
  - name: og:title
    content: "Pnpm-aliassen | Dotfiles"
  - name: og:description
    content: "Stroomlijn pnpm-workflows met aliassen voor installeren, bouwen, testen en beheren van Node.js-afhankelijkheden."
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Pnpm-aliassen

Snelkoppelingen voor de snelle, schijf-efficiente pakketbeheerder.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen zijn gedefinieerd in `pnpm.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden snelle toegang tot gangbare [pnpm](https://pnpm.io/)-commando's voor Node.js-pakketbeheer.

## Referentie

### Project-initialisatie

| Alias | Beschrijving |
|-------|-------------|
| `pni` | Initialiseer een nieuw project |
| `pnc` | Maak een nieuw project |
| `pnin` | Installeer projectafhankelijkheden |
| `pnun` | Verwijder projectafhankelijkheden |

### Ontwikkeling

| Alias | Beschrijving |
|-------|-------------|
| `pnb` | Bouw het project |
| `pnrun` | Voer een script uit van het project |
| `pnd` | Voer het project uit in dev-modus |
| `pns` | Voer het project uit in serve-modus |
| `pnst` | Start het project |
| `pnsv` | Voer het project uit in server-modus |

### Testen en kwaliteit

| Alias | Beschrijving |
|-------|-------------|
| `pnt` | Test het project |
| `pntc` | Test het project met coverage |
| `pnln` | Lint het project |
| `pndoc` | Genereer projectdocumentatie |

### Afhankelijkheidsbeheer

| Alias | Beschrijving |
|-------|-------------|
| `pnls` | Toon alle afhankelijkheden |
| `pnout` | Controleer op verouderde afhankelijkheden |
| `pnwhy` | Controleer waarom een afhankelijkheid is geinstalleerd |
| `pnad` | Voeg een dev-afhankelijkheid toe |
| `pnap` | Voeg een peer-afhankelijkheid toe |
| `pnrm` | Verwijder een afhankelijkheid |
| `pnup` | Werk een afhankelijkheid bij |
| `pnui` | Werk een afhankelijkheid interactief bij |
| `pnuil` | Werk een afhankelijkheid interactief bij naar nieuwste |

### Globale pakketten

| Alias | Beschrijving |
|-------|-------------|
| `pnga` | Voeg een globale afhankelijkheid toe |
| `pngls` | Toon alle globale afhankelijkheden |
| `pngrm` | Verwijder een globale afhankelijkheid |
| `pngu` | Werk een globale afhankelijkheid bij |

### Publiceren en hulpprogramma's

| Alias | Beschrijving |
|-------|-------------|
| `pnpub` | Publiceer het project |
| `pnx` | Snelkoppeling naar pnpx |
| `pnh` | Toon help |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
