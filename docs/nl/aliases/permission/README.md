---
title: "Rechten-aliassen: Bestandsrechten-snelkoppelingen voor shell"
description: "Shell-aliassen voor chmod-, chown- en chgrp-commando's. Stel snel bestandsrechten in met numerieke snelkoppelingen zoals 755, 644 en 777."
lang: nl-NL
metaTitle: "Rechten-aliassen | Dotfiles"
permalink: /nl/aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: "rechten aliassen, chmod snelkoppelingen, bestandsrechten, chown, chgrp, dotfiles, shell"
---

# Rechten-aliassen

Snelkoppelingen voor het beheren van bestands- en maprechten in je shell-omgeving.

## Overzicht

Deze aliassen zijn gedefinieerd in `permission.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden snelle toegang tot gangbare rechtenpatronen en eigendomscommando's.

## Referentie

### Numerieke rechten-snelkoppelingen

| Alias | Beschrijving |
|-------|-------------|
| `000` | Stel rechten in op geen lezen, schrijven of uitvoeren voor gebruiker, groep en anderen |
| `400` | Stel rechten in op geen lezen of schrijven, maar sta uitvoeren toe voor alleen gebruiker |
| `444` | Stel rechten in op geen schrijven of uitvoeren, maar sta lezen toe voor iedereen |
| `600` | Stel rechten in op lezen en schrijven voor alleen gebruiker |
| `644` | Stel rechten in op lezen voor iedereen, maar schrijven alleen voor gebruiker |
| `666` | Stel rechten in op lezen en schrijven voor iedereen |
| `755` | Stel rechten in op lezen, schrijven en uitvoeren voor gebruiker, maar alleen lezen en uitvoeren voor groep en anderen |
| `764` | Stel rechten in op lezen en schrijven voor gebruiker en groep, maar alleen lezen voor anderen |
| `777` | Stel rechten in op lezen, schrijven en uitvoeren voor iedereen |

### Bestandsmodus-commando's

| Alias | Beschrijving |
|-------|-------------|
| `chmod` | Wijzig bestandsmodus-bits |
| `chmodr` | Wijzig bestandsmodus-bits recursief |
| `chmodu` | Wijzig bestandsmodus-bits recursief naar de huidige gebruiker |
| `chmox` | Maak een bestand uitvoerbaar |

### Eigendomscommando's

| Alias | Beschrijving |
|-------|-------------|
| `chown` | Wijzig bestandseigenaar en groep |
| `chownr` | Wijzig bestandseigenaar en groep recursief |
| `chownu` | Wijzig bestandseigenaar en groep recursief naar de huidige gebruiker |
| `chgrp` | Wijzig groepseigendom van bestanden of mappen |
| `chgrpr` | Wijzig groepseigendom van bestanden of mappen recursief |
| `chgrpu` | Wijzig groepseigendom van bestanden of mappen recursief naar de huidige gebruiker |
