---
description: Die Update-Aliase erstellen hilfreiche Kurzbefehle fuer das Aktualisieren des Betriebssystems und installierter Software. Sie sichern und verbessern die aktuelle Dotfiles-Installation, um Sicherheitsluecken zu vermeiden, neue Funktionen hinzuzufuegen und kritische Bugs zu beheben.
lang: de-DE
metaTitle: Die Update-Aliase - Dotfiles (DE)
permalink: /de/aliases/update/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Update-Aliase erstellen hilfreiche Kurzbefehle fuer das Aktualisieren des Betriebssystems und installierter Software. Sie sichern und verbessern die aktuelle Dotfiles-Installation, um Sicherheitsluecken zu vermeiden, neue Funktionen hinzuzufuegen und kritische Bugs zu beheben.
  - name: twitter:description
    content: Die Update-Aliase erstellen hilfreiche Kurzbefehle fuer das Aktualisieren des Betriebssystems und installierter Software. Sie sichern und verbessern die aktuelle Dotfiles-Installation, um Sicherheitsluecken zu vermeiden, neue Funktionen hinzuzufuegen und kritische Bugs zu beheben.
  - name: twitter:title
    content: Die Update-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Update-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Update-Aliase erstellen hilfreiche Kurzbefehle fuer das Aktualisieren des Betriebssystems und installierter Software. Sie sichern und verbessern die aktuelle Dotfiles-Installation, um Sicherheitsluecken zu vermeiden, neue Funktionen hinzuzufuegen und kritische Bugs zu beheben.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Update-Aliase

Update-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `update.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet Alias-Saetze fuer das Aktualisieren verschiedener Software auf
macOS und Linux.
### macOS
- `upd` aktualisiert macOS-Software, Homebrew-Pakete, Homebrew Casks, Mac
   App Store Apps, die Rust stable Toolchain, Ruby Gems, Python-Pakete
   und Node.js-Pakete.
### Linux
- `open` oeffnet eine Datei oder URL in der bevorzugten App.
- `pbcopy` kopiert in die Zwischenablage.
- `pbpaste` fuegt aus der Zwischenablage ein.
- `upd` aktualisiert Linux-Pakete, bereinigt den Paket-Cache, aktualisiert pnpm
  Pakete, aktualisiert die Rust stable Toolchain, aktualisiert Ruby Gems,
  aktualisiert Python-Pakete und aktualisiert Node.js-Pakete.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
