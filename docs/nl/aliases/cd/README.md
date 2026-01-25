---
description: Mapnavigatie-aliassen met bladwijzers, geschiedenisregistratie en slimme snelkoppelingen. Navigeer sneller door je bestandssysteem.
lang: nl-NL
metaTitle: CD-aliassen - Dotfiles (NL)
permalink: /nl/aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, map, navigatie, bladwijzers, shell aliassen, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Mapnavigatie-aliassen met bladwijzers, geschiedenisregistratie en slimme snelkoppelingen. Navigeer sneller door je bestandssysteem.
  - name: twitter:title
    content: CD-aliassen - Dotfiles
  - name: og:title
    content: CD-aliassen - Dotfiles
  - name: og:description
    content: Mapnavigatie-aliassen met bladwijzers, geschiedenisregistratie en slimme snelkoppelingen. Navigeer sneller door je bestandssysteem.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# CD-aliassen

Navigeer sneller door je bestandssysteem. Bladwijzers, geschiedenis en slimme snelkoppelingen.

## Overzicht

Deze aliassen zijn gedefinieerd in `cd.aliases.sh` en worden automatisch geladen door Chezmoi.

## Referentie

### Navigatiesnelkoppelingen

| Alias | Beschrijving |
|:---|:---|
| `-` | Schakel naar vorige map |
| `..` | Ga een niveau omhoog |
| `...` | Ga twee niveaus omhoog |
| `....` | Ga drie niveaus omhoog |
| `.....` | Ga vier niveaus omhoog |
| `hom` | Navigeer naar thuismap |

### Mapsnelkoppelingen

| Alias | Pad | Beschrijving |
|:---|:---|:---|
| `app` | `~/Applications` | Applicaties |
| `cod` | `~/Code` | Code-map |
| `dsk` | `~/Desktop` | Bureaublad |
| `doc` | `~/Documents` | Documenten |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Downloads |
| `mus` | `~/Music` | Muziek |
| `pic` | `~/Pictures` | Afbeeldingen |
| `vid` | `~/Videos` | Video's |

### Systeemmappen

| Alias | Pad | Beschrijving |
|:---|:---|:---|
| `etc` | `/etc` | Systeemconfiguratie |
| `var` | `/var` | Variabele bestanden |
| `tmp` | `/tmp` | Tijdelijke bestanden |
| `usr` | `/usr` | Gebruikersprogramma's |

### Bladwijzers

| Commando | Alias | Beschrijving |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Maak bladwijzer |
| `bookmark_list` | `bml` | Toon bladwijzers |
| `bookmark_update` | `bmu` | Werk bladwijzer bij |
| `bookmark_remove` | `bmr` | Verwijder bladwijzer |
| `goto <name>` | `bmg` | Ga naar bladwijzer |

```bash
bm work-project      # Maak bladwijzer
bmg work-project     # Navigeer naar bladwijzer
bml                  # Toon alle bladwijzers
```

### Geschiedenis

| Commando | Alias | Beschrijving |
|:---|:---|:---|
| `dirhistory` | `dh` | Toon mapgeschiedenis |
| `lwd` | `ld` | Keer terug naar laatste map |

### Geavanceerd

| Commando | Alias | Beschrijving |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Maak en ga naar map |
| `proj` | `pr` | Ga naar projectroot |
| `pushd` | `pd` | Duw map naar stapel |
| `popd` | — | Haal van stapel |
| `dirs` | — | Toon mapstapel |

## Configuratie

Pas gedrag aan met omgevingsvariabelen:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Help

Voer `cdhelp` uit om alle commando's te bekijken of `cdversion` voor versie-informatie.
