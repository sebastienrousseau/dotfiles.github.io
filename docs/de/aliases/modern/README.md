---
description: moderne Aliase fuer Dotfiles
lang: de-DE
metaTitle: moderne Aliase - Dotfiles
permalink: /de/aliases/modern/
---
# Moderne Tooling-Aliase

Moderne Tooling-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `modern.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.
Sie bieten moderne Ersatztools fuer klassische Unix-Utilities (Rust-basiert).

## ⚡ Aliase

### Dateilisting (eza)
Wenn `eza` installiert ist (ersetzt `ls`):
- `ls` - Dateien auflisten (`eza --icons`)
- `ll` - Lange Liste (`eza -alF`)
- `la` - Alles auflisten (`eza -a`)
- `lt` - Baumansicht (`eza --tree`)

*(Faellt auf Standard-`ls` zurueck, wenn `eza` fehlt)*

### Dateiinhalte (bat)
Wenn `bat` installiert ist (ersetzt `cat`):
- `cat` - Dateiinhalte mit Syntax-Highlighting anzeigen

### Suche (rg)
Wenn `rg` installiert ist (ersetzt `grep`):
- `grep` - Suche mit Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
