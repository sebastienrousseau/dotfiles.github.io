---
description: Hoe Dotfiles je PATH-hierarchie beheert om ervoor te zorgen dat de juiste tools in de juiste volgorde worden geladen.
lang: nl-NL
metaTitle: Paden - Dotfiles (NL)
permalink: /nl/paths/

meta:
  - name: keywords
    content: path, omgeving, variabelen, hierarchie, dotfiles, chezmoi, shell, configuratie
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Hoe Dotfiles je PATH-hierarchie beheert om ervoor te zorgen dat de juiste tools in de juiste volgorde worden geladen.
  - name: twitter:title
    content: Paden - Dotfiles
  - name: og:title
    content: Paden - Dotfiles
  - name: og:description
    content: Hoe Dotfiles je PATH-hierarchie beheert om ervoor te zorgen dat de juiste tools in de juiste volgorde worden geladen.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Paden

Modulair `PATH`-beheer. Zorg ervoor dat de juiste tools in de juiste volgorde worden geladen.

## Ontdek

Padconfiguraties zijn opgesplitst in prioriteitsgebaseerde bestanden. Tijdens `chezmoi apply`:

1. Bestanden in deze map worden alfabetisch gescand
2. Inhoud wordt samengevoegd in `~/.config/shell/paths.sh`
3. Wordt door `.zshrc` bij opstarten geladen

## Referentie

| Script | Beschrijving |
|:---|:---|
| `00-default.paths.sh` | Basis systeempaden (`/usr/bin`, `/sbin`) en Homebrew. Wordt eerst geladen. |
| `99-custom.paths.sh` | Aangepaste gebruikerspaden (taal-SDK's, lokale bins). Wordt als laatste geladen voor voorrang. |

## Aan de slag

### Een gebruikerspad toevoegen

1. Bewerk `99-custom.paths.sh` of maak een nieuw bestand aan (bijv. `50-myproject.paths.sh`)
2. Voeg je pad toe:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. Pas wijzigingen toe:
   ```bash
   chezmoi apply
   ```
4. Verifieer:
   ```bash
   echo $PATH
   ```
