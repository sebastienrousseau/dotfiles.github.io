---
title: "Chmod-aliassen: Bestandsrechten-snelkoppelingen voor Shell"
description: "Vereenvoudig het beheer van bestands- en maprechten met chmod-aliassen. Snelle snelkoppelingen voor gangbare rechtenpatronen zoals 755, 644 en meer."
lang: nl-NL
metaTitle: "Chmod-aliassen | Dotfiles"
permalink: /nl/aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: "chmod aliassen, bestandsrechten, shell snelkoppelingen, dotfiles, unix rechten"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Chmod-aliassen | Dotfiles
  - name: twitter:description
    content: Vereenvoudig het beheer van bestands- en maprechten met chmod-aliassen.
  - name: og:title
    content: Chmod-aliassen | Dotfiles
  - name: og:description
    content: Vereenvoudig het beheer van bestands- en maprechten met chmod-aliassen.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Chmod-aliassen

Snelkoppelingen voor het beheren van bestands- en maprechten.

![Dotfiles banner][banner]

## Overzicht

De chmod-aliassen bieden een gestroomlijnde manier om bestands- en maprechten te beheren vanaf de commandoregel. In plaats van numerieke rechtencodes te onthouden, gebruik je intuitive aliassen zoals `chmod_755` of `chmod_u+x` om snel de gewenste toegangsmodus in te stellen.

Deze aliassen zijn gedefinieerd in `chmod.aliases.sh` en worden automatisch geladen door chezmoi.

## Referentie

### Gangbare rechtenaliassen

| Alias | Rechten | Beschrijving |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Geen rechten voor iedereen |
| `chmod_400` | `r--------` | Alleen-lezen voor de eigenaar |
| `chmod_444` | `r--r--r--` | Alleen-lezen voor iedereen |
| `chmod_600` | `rw-------` | Lezen/schrijven voor de eigenaar |
| `chmod_644` | `rw-r--r--` | Lezen/schrijven voor eigenaar, alleen-lezen voor anderen |
| `chmod_666` | `rw-rw-rw-` | Lezen/schrijven voor iedereen |
| `chmod_755` | `rwxr-xr-x` | Volledig voor eigenaar, lezen/uitvoeren voor anderen |
| `chmod_764` | `rwxrw-r--` | Volledig voor eigenaar, lezen/schrijven voor groep |
| `chmod_777` | `rwxrwxrwx` | Volledige rechten voor iedereen |

### Eigenaarsrechten-aliassen

| Alias | Beschrijving |
|-------|-------------|
| `chmod_u+x` | Voeg uitvoerrecht toe voor de eigenaar |
| `chmod_u-x` | Verwijder uitvoerrecht voor de eigenaar |
| `chmod_u+w` | Voeg schrijfrecht toe voor de eigenaar |
| `chmod_u-w` | Verwijder schrijfrecht voor de eigenaar |
| `chmod_u+r` | Voeg leesrecht toe voor de eigenaar |
| `chmod_u-r` | Verwijder leesrecht voor de eigenaar |

### Groepsrechten-aliassen

| Alias | Beschrijving |
|-------|-------------|
| `chmod_g+x` | Voeg uitvoerrecht toe voor de groep |
| `chmod_g-x` | Verwijder uitvoerrecht voor de groep |
| `chmod_g+w` | Voeg schrijfrecht toe voor de groep |
| `chmod_g-w` | Verwijder schrijfrecht voor de groep |
| `chmod_g+r` | Voeg leesrecht toe voor de groep |
| `chmod_g-r` | Verwijder leesrecht voor de groep |

### Anderenrechten-aliassen

| Alias | Beschrijving |
|-------|-------------|
| `chmod_o+x` | Voeg uitvoerrecht toe voor anderen |
| `chmod_o-x` | Verwijder uitvoerrecht voor anderen |
| `chmod_o+w` | Voeg schrijfrecht toe voor anderen |
| `chmod_o-w` | Verwijder schrijfrecht voor anderen |
| `chmod_o+r` | Voeg leesrecht toe voor anderen |
| `chmod_o-r` | Verwijder leesrecht voor anderen |

### Bestandstype-aliassen

| Alias | Beschrijving |
|-------|-------------|
| `chmod_755d` | Stel rechten van alle mappen in op `rwxr-xr-x` |
| `chmod_644f` | Stel rechten van alle bestanden in op `rw-r--r--` |

### Recursieve rechtenfunctie

De `change_permission` functie past rechten recursief toe met een bevestigingsprompt:

```bash
change_permission 755 /path/to/directory -R
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
