---
description: Die nächste Generation der Shell-Konfiguration. Hochleistungsfähig, sicher und AI-nativ. Verwaltet von Chezmoi.
lang: de-DE
metaTitle: Über Dotfiles - Dotfiles (DE)
permalink: /de/about/
sidebar: true

meta:
  - name: keywords
    content: chezmoi, dotfiles, konfiguration, automatisierung, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Die nächste Generation der Shell-Konfiguration. Hochleistungsfähig, sicher und AI-nativ. Verwaltet von Chezmoi.
  - name: twitter:title
    content: Über Dotfiles
  - name: og:title
    content: Über Dotfiles
  - name: og:description
    content: Die nächste Generation der Shell-Konfiguration. Hochleistungsfähig, sicher und AI-nativ. Verwaltet von Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Über Dotfiles

Der moderne Standard für Shell-Konfiguration. Basiert auf **Chezmoi** für sichere, plattformübergreifende Umgebungsverwaltung.

## Entdecken

Dotfiles v0.2.474 transformiert Ihr Terminal in einen leistungsstarken, einheitlichen Arbeitsbereich. Im Gegensatz zu alten Dotfiles, die auf komplexen Makefiles oder Symlink-Skripten basieren, verwendet Dotfiles einen vorlagenbasierten Ansatz, der atomar, schnell und reproduzierbar ist.

### Was ist neu

- **Moderner Kern** — Hochleistungs-Rust-Alternativen ersetzen alte Unix-Tools:
  - **Atuin** für Shell-Verlauf
  - **Yazi** für Dateiverwaltung
  - **Zellij** für Terminal-Multiplexing
  - **Ghostty** für GPU-beschleunigtes Terminal
  - **NeoVim** für modernes Editieren
- **Native Sicherheit** — Vollständig native SSH-Signierung ohne Drittanbieter-Agenten
- **Interaktiver Modus** — Neuer `dot learn` Befehl führt Sie durch die Funktionen

## Erste Schritte

### Voraussetzungen

- **macOS**, **Linux (Ubuntu/Debian)** oder **Windows (WSL)**
- **Curl** und **Git**
- **Chezmoi** (wird automatisch installiert)
- **Nerd Font** (für Terminal-Icons)

### Installation

Führen Sie einen einzigen Befehl aus, um die gesamte Suite zu installieren:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

Der Installer wird:

1. Die `chezmoi`-Binärdatei installieren
2. Das Repository klonen
3. Erforderliche Pakete über Homebrew (macOS) oder Apt (Linux) installieren
4. Ihre Konfiguration anwenden

### Erkunden

Nach der Installation starten Sie Ihr Terminal neu und führen Sie aus:

```bash
dot learn
```

Dies startet eine interaktive Tour durch Ihre neue Umgebung.

## Anpassen

Ihre Konfiguration befindet sich in `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # Shell-Einstiegspunkt
├── dot_config/             # XDG-Basiskonfiguration (~/.config)
│   ├── atuin/              # Shell-Verlauf
│   ├── ghostty/            # Terminal-Emulator
│   ├── git/                # Git-Konfiguration
│   ├── yazi/               # Dateimanager
│   ├── zellij/             # Terminal-Multiplexer
│   ├── zsh/                # Zsh-Konfiguration
│   └── shell/              # Gemeinsame Aliase und Pfade
├── provision/              # Lifecycle-Skripte
├── install.sh              # Universeller Installer
└── docs/                   # Dokumentation
```

## Beitragen

Treten Sie der Community bei. Lesen Sie unseren [Verhaltenskodex][code-of-conduct-url] und unsere [Beitragsrichtlinien][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
