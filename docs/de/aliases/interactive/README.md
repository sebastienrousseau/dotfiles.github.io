---
description: Die Interactive-Aliase sind eine Sammlung von Aliasen, die dir eine interaktivere Nutzung von Shell und Terminal ermoeglichen.
lang: de-DE
metaTitle: Interactive-Aliase - Dotfiles (DE)
permalink: /de/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: Die Interactive-Aliase sind eine Sammlung von Aliasen, die dir eine interaktivere Nutzung von Shell und Terminal ermoeglichen.
  - name: twitter:description
    content: Die Interactive-Aliase sind eine Sammlung von Aliasen, die dir eine interaktivere Nutzung von Shell und Terminal ermoeglichen.
  - name: twitter:title
    content: Interactive-Aliase - Dotfiles (DE)
  - name: og:title
    content: Interactive-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Interactive-Aliase sind eine Sammlung von Aliasen, die dir eine interaktivere Nutzung von Shell und Terminal ermoeglichen.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Interactive-Aliase

Interactive-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `interactive.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet eine Reihe interaktiver Aliase fuer gaengige Kommandozeilen-Operationen.
Die Aliase sind darauf ausgelegt, die Nutzung zu verbessern, indem sie interaktive Prompts
vor potenziell destruktiven Operationen anzeigen.
* `cp` Dateien und Verzeichnisse interaktiv kopieren (vor Ueberschreiben fragen)
mit ausfuehrlicher Ausgabe.
* `del` Dateien oder Verzeichnisse interaktiv entfernen (vor jedem Loeschen fragen)
mit ausfuehrlicher Ausgabe, rekursiv.
* `ln` Symlinks interaktiv erstellen (vor Ueberschreiben fragen)
mit ausfuehrlicher Ausgabe.
* `mv` Dateien interaktiv verschieben oder umbenennen (vor Ueberschreiben fragen)
mit ausfuehrlicher Ausgabe.
* `rm` Dateien oder Verzeichnisse interaktiv entfernen (vor jedem Loeschen fragen)
mit ausfuehrlicher Ausgabe.
* `zap` Alias fuer 'rm', entfernt Dateien oder Verzeichnisse interaktiv (vor jedem Loeschen fragen)
mit ausfuehrlicher Ausgabe.
### Papierkorb-Operationen
* `bin` Alle Dateien im Papierkorb des Nutzers (.Trash) erzwingen und rekursiv loeschen.
* `chmod` Dateiberechtigungen mit ausfuehrlicher Ausgabe aendern.
* `chown` Besitzer und Gruppe mit ausfuehrlicher Ausgabe aendern.
* `diff` Dateien vergleichen und Unterschiede im Unified-Format anzeigen.
* `grep` Nach Muster suchen, Zeilennummern anzeigen, case-insensitiv.
* `mkdir` Verzeichnis erstellen, Elternverzeichnisse anlegen, mit ausfuehrlicher Ausgabe.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
