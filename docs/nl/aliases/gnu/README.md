---
title: "GNU Coreutils-aliassen: Shell-snelkoppelingen voor Linux"
description: "Stroomlijn je workflow met GNU Coreutils-aliassen voor bestandsbeheer, tekstverwerking en checksum-hulpprogramma's."
lang: nl-NL
metaTitle: "GNU Coreutils-aliassen | Dotfiles"
permalink: /nl/aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, shell aliassen, linux hulpprogramma's, bestandsbeheer, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: GNU Coreutils-aliassen | Dotfiles
  - name: twitter:description
    content: Stroomlijn je workflow met GNU Coreutils-aliassen voor bestandsbeheer, tekstverwerking en checksum-hulpprogramma's.
  - name: og:title
    content: GNU Coreutils-aliassen | Dotfiles
  - name: og:description
    content: Stroomlijn je workflow met GNU Coreutils-aliassen voor bestandsbeheer, tekstverwerking en checksum-hulpprogramma's.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# GNU Coreutils-aliassen

Snelkoppelingen naar essentiele Unix-hulpprogramma's voor snellere commandoregel-workflows.

![Dotfiles banner][banner]

## Overzicht

GNU Coreutils-aliassen bieden afkortingscommando's voor standaard Unix-hulpprogramma's. Gedefinieerd in `gnu.aliases.sh` en automatisch geladen door chezmoi, vereenvoudigen deze aliassen bestandsoperaties, tekstverwerking en dataverificatie-taken.

## Referentie

### Bestandsbeheer

| Alias | Beschrijving |
|-------|-------------|
| `basename` | Strip map en suffix van bestandsnamen |
| `cp` | Kopieer bestanden en mappen |
| `dirname` | Strip niet-map suffix van bestandsnamen |
| `ln` | Maak links tussen bestanden |
| `ls` | Toon mapinhoud |
| `mkdir` | Maak mappen |
| `mv` | Verplaats of hernoem bestanden of mappen |
| `pwd` | Print werkmapnaam |
| `rm` | Verwijder bestanden of mappen |
| `rmdir` | Verwijder lege mappen |

### Tekstverwerking

| Alias | Beschrijving |
|-------|-------------|
| `awk` | Patroonscanning en verwerkingstaal |
| `cat` | Aaneenschakelen en bestanden weergeven |
| `cut` | Verwijder secties van elke regel van bestanden |
| `diff` | Vergelijk bestanden regel voor regel |
| `grep` | Print regels die aan een patroon voldoen |
| `head` | Geef het eerste deel van bestanden weer |
| `sed` | Stream-editor voor filteren en transformeren van tekst |
| `sort` | Sorteer regels van tekstbestanden |
| `tail` | Geef het laatste deel van bestanden weer |
| `tr` | Vertaal of verwijder tekens |

### Checksum-hulpprogramma's

| Alias | Beschrijving |
|-------|-------------|
| `b2sum` | Print of controleer BLAKE2 message digests |
| `cksum` | Print CRC checksum en byte counts |
| `sha1sum` | Print of controleer SHA1 message digests |
| `sha256sum` | Print of controleer SHA256 message digests |
| `sha512sum` | Print of controleer SHA512 message digests |

### Codering-hulpprogramma's

| Alias | Beschrijving |
|-------|-------------|
| `base32` | Print of converteer base32-data |
| `base64` | Codeer of decodeer base64-data |
| `basenc` | Codeer of decodeer data in verschillende formaten |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
