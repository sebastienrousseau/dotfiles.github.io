---
description: Moderne Shell-Aliase fuer eza, bat und ripgrep. Ersetzen Sie klassische Unix-Tools durch schnellere Rust-basierte Alternativen.
lang: de-DE
metaTitle: Modern Tooling Aliase - Dotfiles (DE)
permalink: /de/aliases/modern/
sidebar: true

meta:
  - name: keywords
    content: moderne aliase, eza, bat, ripgrep, rust cli tools, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Modern Tooling Aliase - Dotfiles
  - name: twitter:description
    content: Moderne Shell-Aliase fuer eza, bat und ripgrep als Ersatz fuer klassische Unix-Tools.
  - name: og:title
    content: Modern Tooling Aliase - Dotfiles
  - name: og:description
    content: Moderne Shell-Aliase fuer eza, bat und ripgrep als Ersatz fuer klassische Unix-Tools.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Modern Tooling Aliase

Schnellere, intelligentere Ersatztools fuer klassische Unix-Befehle.

## Uebersicht

Die modernen Aliase in `modern.aliases.sh` bieten Rust-basierte Alternativen zu traditionellen Unix-Tools. Diese Aliase werden automatisch von `chezmoi` geladen und fallen elegant auf Standardbefehle zurueck, wenn moderne Tools nicht verfuegbar sind.

## Referenz

### Dateilisting mit eza

Ersetzt `ls` wenn `eza` installiert ist.

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `ls` | `eza --icons` | Dateien mit Icons auflisten |
| `ll` | `eza -alF` | Langes Listenformat |
| `la` | `eza -a` | Alle Dateien einschliesslich versteckter auflisten |
| `lt` | `eza --tree` | Verzeichnisbaum anzeigen |

Faellt auf Standard-`ls` zurueck, wenn `eza` nicht installiert ist.

### Dateiinhalte mit bat

Ersetzt `cat` wenn `bat` installiert ist.

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `cat` | `bat` | Dateiinhalt mit Syntax-Highlighting anzeigen |

### Suche mit ripgrep

Ersetzt `grep` wenn `rg` installiert ist.

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `grep` | `rg` | Dateiinhalte mit Ripgrep durchsuchen |
