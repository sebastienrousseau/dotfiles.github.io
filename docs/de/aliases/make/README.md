---
description: Verknuepfungs-Aliase fuer Make-Befehle. Vereinfachen Sie Builds, Tests und Projektautomatisierung.
lang: de-DE
metaTitle: Make Aliase - Dotfiles (DE)
permalink: /de/aliases/make/
sidebar: true

meta:
  - name: keywords
    content: make aliase, makefile verknuepfungen, build automatisierung, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make Aliase - Dotfiles
  - name: twitter:description
    content: Verknuepfungs-Aliase fuer Make-Befehle. Vereinfachen Sie Builds, Tests und Projektautomatisierung.
  - name: og:title
    content: Make Aliase - Dotfiles
  - name: og:description
    content: Verknuepfungs-Aliase fuer Make-Befehle. Vereinfachen Sie Builds, Tests und Projektautomatisierung.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Make Aliase

Vereinfachen Sie Ihren Build-Workflow mit Kurzbefehlen fuer Make.

## Uebersicht

Diese Aliase bieten schnellen Zugriff auf gaengige Make-Targets. In `make.aliases.sh` definiert und automatisch von Chezmoi als Teil der Universal Dotfiles-Konfiguration geladen.

## Referenz

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `mk` | `make` | Standard-Make-Target ausfuehren |
| `mka` | `make all` | Alle Targets bauen |
| `mkc` | `make clean` | Build-Artefakte bereinigen |
| `mkd` | `make doc` | Dokumentation generieren |
| `mkf` | `make format` | Quelldateien formatieren |
| `mkh` | `make help` | Hilfe-Informationen anzeigen |
| `mki` | `make install` | Projekt installieren |
| `mkr` | `make run` | Projekt ausfuehren |
| `mkt` | `make test` | Tests ausfuehren |
