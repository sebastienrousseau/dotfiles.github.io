---
title: "macOS-aliassen: Shell-snelkoppelingen voor Mac"
description: "Shell-aliassen voor macOS-systeembeheer, Finder-besturing en onderhoudstaken in Dotfiles."
lang: nl-NL
metaTitle: "macOS-aliassen | Dotfiles"
permalink: /nl/aliases/macOS/
sidebar: true
meta:
  - name: keywords
    content: "macOS aliassen, shell snelkoppelingen, Finder aliassen, Mac terminal, dotfiles"
---

# macOS-aliassen

Shell-snelkoppelingen voor macOS-systeembeheer en onderhoud.

## Overzicht

Deze aliassen zijn gedefinieerd in `macOS.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden snelle toegang tot gangbare macOS-operaties, waaronder Finder-besturing, systeemonderhoud en ontwikkeltools.

## Referentie

### Systeembeheer

| Alias | Beschrijving |
|-------|-------------|
| `lockScreen` | Vergrendel het scherm |
| `wifiOn` | Schakel Wi-Fi in |
| `wifiOff` | Schakel Wi-Fi uit |
| `vp` | Verifieer macOS-rechten |
| `vv` | Verifieer macOS-volume |

### Finder

| Alias | Beschrijving |
|-------|-------------|
| `ofd` | Open de huidige map in Finder |
| `finderShowHidden` | Toon verborgen bestanden in Finder |
| `finderHideHidden` | Verberg verborgen bestanden in Finder |
| `showDesktopIcons` | Toon alle iconen op het bureaublad |
| `hideDesktopIcons` | Verberg alle iconen op het bureaublad |

### Opschonen

| Alias | Beschrijving |
|-------|-------------|
| `clds` | Verwijder recursief .DS_Store bestanden |
| `clls` | Ruim LaunchServices op om duplicaten in het "Open met" menu te verwijderen |
| `trash` | Leeg de prullenbak op alle gekoppelde volumes en de hoofd-HDD |

### Ontwikkeltools

| Alias | Beschrijving |
|-------|-------------|
| `xcode` | Start Xcode |
| `purge` | Verwijder Xcode DerivedData |
| `iphone` | Open device-simulators |
| `safariSafeMode` | Start Safari in Veilige Modus |

### Weergave

| Alias | Beschrijving |
|-------|-------------|
| `screensaverDesktop` | Voer een screensaver uit op het bureaublad |
