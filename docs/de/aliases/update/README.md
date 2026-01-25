---
description: Shell-Aliase zum Aktualisieren von Betriebssystem und Software auf macOS und Linux. Pakete, Toolchains und Abhaengigkeiten aktuell halten.
lang: de-DE
metaTitle: Update Aliase - Dotfiles (DE)
permalink: /de/aliases/update/
sidebar: true

meta:
  - name: keywords
    content: update aliase, system update, paket update, homebrew update, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Update Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase zum Aktualisieren von Betriebssystem und Software auf macOS und Linux.
  - name: og:title
    content: Update Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase zum Aktualisieren von Betriebssystem und Software auf macOS und Linux.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Update Aliase

Halten Sie Ihr System und Ihre Entwicklungswerkzeuge auf dem neuesten Stand.

## Uebersicht

Diese Aliase sind in `update.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten plattformspezifische Befehle zum Aktualisieren von Betriebssystemkomponenten und installierter Software.

## Referenz

### macOS

| Alias | Beschreibung |
|:---|:---|
| `upd` | Aktualisiert macOS-Software, Homebrew-Pakete, Homebrew Casks, Mac App Store Apps, Rust Stable Toolchain, Ruby Gems, Python-Pakete und Node.js-Pakete |

### Linux

| Alias | Beschreibung |
|:---|:---|
| `upd` | Aktualisiert Linux-Pakete, bereinigt den Paket-Cache, aktualisiert pnpm-Pakete, Rust Stable Toolchain, Ruby Gems, Python-Pakete und Node.js-Pakete |

### Hilfsprogramme (Linux)

| Alias | Beschreibung |
|:---|:---|
| `open` | Datei oder URL in der bevorzugten Anwendung oeffnen |
| `pbcopy` | In die Zwischenablage kopieren |
| `pbpaste` | Aus der Zwischenablage einfuegen |
