---
description: Die Default-Aliase sind nicht an bestimmte Befehle gebunden. Es sind allgemeine Aliase, die in vielen Kontexten verwendet werden.
lang: de-DE
metaTitle: Default-Aliase - Dotfiles (DE)
permalink: /de/aliases/default/

meta:
  - name: twitter:card
    content: Die Default-Aliase sind nicht an bestimmte Befehle gebunden. Es sind allgemeine Aliase, die in vielen Kontexten verwendet werden.
  - name: twitter:description
    content: Die Default-Aliase sind nicht an bestimmte Befehle gebunden. Es sind allgemeine Aliase, die in vielen Kontexten verwendet werden.
  - name: twitter:title
    content: Default-Aliase - Dotfiles (DE)
  - name: og:title
    content: Default-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Default-Aliase sind nicht an bestimmte Befehle gebunden. Es sind allgemeine Aliase, die in vielen Kontexten verwendet werden.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Default-Aliase

Default-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `default.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code stellt Alias-Befehle bereit, um haeufige Aufgaben schneller auszufuehren.
Die Aliase reichen von allgemeinem Nutzen bis zu Systemmonitoring und Dateinavigation.
Einige der nuetzlichsten Aliase:
- `c`: Kurzbefehl fuer `clear`.
- `p`: Kurzbefehl fuer `pwd`.
- `h`: listet kuerzlich verwendete Befehle.
- `path`: zeigt `$PATH` in neuen Zeilen an.
- `quit`: Kurzbefehl fuer `exit`.
- `halt`, `poweroff`, `reboot`: System herunterfahren und neu starten.
- `srv`: einfachen HTTP-Server starten.
- `top`: interaktives Monitoring von Systemressourcen/Prozessen.
- `qfind`: Schnellsuche nach Dateien.
- `clc`: Bildschirm leeren und Verzeichnisinhalt ausgeben.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
