---
description: Moderne Aliase für Dotfiles
lang: de-DE
metaTitle: Moderne Aliase - Dotfiles (DE)
permalink: /de/aliases/modern/
---

# Moderne Tooling Aliase

Verwalten Sie Aliase für moderne Tools. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `modern.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.
Sie bieten moderne Ersatzwerkzeuge für traditionelle Unix-Tools (Rust-basiert).

## ⚡ Aliase

### Dateilistung (eza)

Wenn `eza` installiert ist (ersetzt `ls`):

- `ls` - Dateien auflisten (`eza --icons`)
- `ll` - Lange Liste (`eza -alF`)
- `la` - Alle auflisten (`eza -a`)
- `lt` - Baumstruktur auflisten (`eza --tree`)

_(Greift auf Standard-`ls` zurück, falls `eza` fehlt)_

### Dateiinhalt (bat)

Wenn `bat` installiert ist (ersetzt `cat`):

- `cat` - Dateiinhalt mit Syntax-Highlighting anzeigen

### Suchen (rg)

Wenn `rg` installiert ist (ersetzt `grep`):

- `grep` - Suchen mit Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
