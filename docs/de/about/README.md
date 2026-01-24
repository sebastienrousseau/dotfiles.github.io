---
description: Die nächste Generation von Konfigurationsdateien, verwaltet von Chezmoi. Hochleistungsfähig, sicher und AI-nativ.
lang: de-DE
metaTitle: Über - Dotfiles (DE)
permalink: /de/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, konfiguration, automatisierung, macos, linux, rust, zellij
---

# Über Dotfiles v0.2.471

## Einführung

Dotfiles repräsentiert den modernen Standard für die Umgebungskonfiguration. Es basiert auf **Chezmoi** und bietet eine sichere, zuverlässige und plattformübergreifende Möglichkeit, Ihre Shell, Anwendungen und Geheimnisse zu verwalten.

Im Gegensatz zu alten Dotfiles, die auf komplexen Makefiles oder Symlink-Skripten basieren, verwendet Dotfiles einen vorlagenbasierten Ansatz, der atomar und schnell ist.

## Was ist neu in v0.2.471

- **Moderner Kern**: Wir haben alte Unix-Tools durch leistungsstarke Rust-Alternativen ersetzt:
  - **Atuin** (ersetzt `history`)
  - **Yazi** (ersetzt `ls`/`ranger`)
  - **Zellij** (ersetzt `tmux`)
  - **Ghostty** (Modernes GPU-beschleunigtes Terminal)
  - **NeoVim** (Moderner Vim-basierter Editor)
- **Native Sicherheit**: Vollständig native SSH-Signierung (schlüssellos/ohne Eigentümer) ohne Drittanbieter-Agenten.
- **Interaktiver Modus**: Neuer Befehl `dot learn`, um Sie durch die Funktionen zu führen.

## Erste Schritte

### :one: Voraussetzungen

- **macOS**, **Linux (Ubuntu/Debian)** oder **Windows (WSL)**
- **Curl** (zum Herunterladen des Installers)
- **Git**
- **Chezmoi** (wird bei Bedarf durch das Skript installiert)
- **Nerd Font** (für Terminal-Icons)

### :two: Installation (Einzeilig)

Die gesamte Suite wird mit einem einzigen Befehl über Chezmoi installiert:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.471/install.sh)"
```

Dieser Befehl wird:

1.  Die `chezmoi`-Binärdatei installieren.
2.  Das Repository klonen.
3.  **Automatisch** erforderliche Pakete installieren (über Homebrew auf macOS oder Apt auf Linux).
4.  Die Konfiguration anwenden.

### :three: Nach der Installation

Nach der Installation starten Sie Ihr Terminal neu und geben dann ein:

```bash
dot learn
```

Dies startet die interaktive Tour, um Sie mit Ihrer neuen Umgebung vertraut zu machen.

## Was ist enthalten

Ihre Konfiguration wird in `~/.local/share/chezmoi` verwaltet.

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Einstiegspunkt der Shell (XDG-Bootloader)
├── dot_config/             # XDG-Basiskonfiguration (auf ~/.config abgebildet)
│   ├── atuin/              # Shell-Verlauf (config.toml)
│   ├── ghostty/            # Terminal-Emulator (config)
│   ├── git/                # Git-Konfiguration (config)
│   ├── yazi/               # Dateimanager (yazi.toml)
│   ├── zellij/             # Multiplexer (config.kdl)
│   ├── zsh/                # Zsh-Konfiguration (.zshrc)
│   └── shell/              # Gemeinsame Shell-Konfiguration (Aliases, Pfade)
├── provision/              # Lifecycle-Skripte (Pakete, Schriftarten)
├── install.sh              # Universeller Installer
├── README.md               # Dokumentation
└── docs/                   # Detaillierte Dokumentation
```

## Beitragen

Wir freuen uns über Beiträge! Bitte lesen Sie unseren [Verhaltenskodex][code-of-conduct-url] und unsere [Beitragsrichtlinien][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
