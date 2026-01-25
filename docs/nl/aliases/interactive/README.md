---
title: "Interactieve aliassen: Veilige shell-commando's met bevestigingsprompts"
description: "Shell-aliassen die interactieve prompts toevoegen voor destructieve operaties zoals rm, mv en cp. Voorkom per ongeluk bestanden verwijderen."
lang: nl-NL
metaTitle: "Interactieve aliassen | Dotfiles"
permalink: /nl/aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: interactieve aliassen, shell veiligheid, rm bevestiging, cp interactief, mv prompt, dotfiles, bash aliassen
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Interactieve aliassen | Dotfiles
  - name: twitter:description
    content: Shell-aliassen die interactieve prompts toevoegen voor destructieve operaties zoals rm, mv en cp.
  - name: og:title
    content: Interactieve aliassen | Dotfiles
  - name: og:description
    content: Shell-aliassen die interactieve prompts toevoegen voor destructieve operaties zoals rm, mv en cp.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Interactieve aliassen

Veilige shell-commando's met bevestigingsprompts voor destructieve operaties.

![Dotfiles banner][banner]

## Overzicht

Interactieve aliassen voegen bevestigingsprompts toe aan gangbare shell-commando's die permanent bestanden kunnen wijzigen of verwijderen. Gedefinieerd in `interactive.aliases.sh` en automatisch geladen door chezmoi, helpen deze aliassen om per ongeluk dataverlies te voorkomen door gebruikersbevestiging te vereisen voordat potentieel destructieve operaties worden uitgevoerd.

## Referentie

### Bestandsoperaties

| Alias | Beschrijving |
|-------|-------------|
| `cp` | Kopieer bestanden en mappen interactief met uitgebreide uitvoer. Vraagt voordat bestaande bestanden worden overschreven. |
| `mv` | Verplaats of hernoem bestanden interactief met uitgebreide uitvoer. Vraagt voordat bestaande bestanden worden overschreven. |
| `ln` | Maak symbolische links interactief met uitgebreide uitvoer. Vraagt voordat bestaande links worden overschreven. |

### Bestandsverwijdering

| Alias | Beschrijving |
|-------|-------------|
| `rm` | Verwijder bestanden of mappen interactief met uitgebreide uitvoer. Vraagt voor elke verwijdering. |
| `del` | Verwijder bestanden of mappen interactief en recursief met uitgebreide uitvoer. Vraagt voor elke verwijdering. |
| `zap` | Alias voor `rm`. Verwijdert bestanden of mappen interactief met uitgebreide uitvoer. |

### Prullenbakbeheer

| Alias | Beschrijving |
|-------|-------------|
| `bin` | Verwijder alle bestanden in de prullenbakmap (`~/.Trash`) geforceerd en recursief. |

### Rechten en hulpprogramma's

| Alias | Beschrijving |
|-------|-------------|
| `chmod` | Wijzig bestands- of maprechten met uitgebreide uitvoer. |
| `chown` | Wijzig bestands- of mapeigenaar en groep met uitgebreide uitvoer. |
| `diff` | Vergelijk en toon verschillen tussen twee bestanden in unified formaat. |
| `grep` | Zoek naar een patroon in bestanden of uitvoer, met regelnummers en hoofdletterongevoelig. |
| `mkdir` | Maak een nieuwe map met bovenliggende mappen indien nodig en uitgebreide uitvoer. |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
