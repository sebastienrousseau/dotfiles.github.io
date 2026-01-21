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
- **Native Sicherheit**: Vollständig native SSH-Signierung (schlüssellos/ohne Eigentümer) ohne Drittanbieter-Agenten.
- **Interaktiver Modus**: Neuer Befehl `dot learn`, um Sie durch die Funktionen zu führen.

## Erste Schritte

### :one: Voraussetzungen

- **macOS** oder **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (zum Herunterladen des Installers)
- **Git** (automatisch verwaltet)

### :two: Installation (Einzeilig)

Die gesamte Suite wird mit einem einzigen Befehl über Chezmoi installiert:

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

Dieser Befehl wird:
1.  Die `chezmoi`-Binärdatei installieren.
2.  Das Repository nach `~/.local/share/chezmoi` klonen.
3.  Die Differenz zwischen Ihrem aktuellen Zustand und dem gewünschten Zustand berechnen.
4.  Die Konfiguration anwenden (Installation von Paketen, Schriftarten und Tools).

### :three: Nach der Installation

Nach der Installation geben Sie einfach ein:

```bash
dot learn
```

Dies startet die interaktive Tour, um Sie mit Ihrer neuen Umgebung vertraut zu machen.

## Was ist enthalten

Ihre Konfiguration wird in `~/.local/share/chezmoi` verwaltet.

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship, usw.)
├── dot_local/           # ~/.local (Benutzerdefinierte Skripte, bin)
├── dot_ssh/             # SSH-Sicherheit
├── dot_zshrc.tmpl       # Zsh-Konfiguration
├── provision/           # Installationsskripte (Darwin/Linux)
└── docs/                # Dokumentation
```

## Beitragen

Wir freuen uns über Beiträge! Bitte lesen Sie unseren [Verhaltenskodex][code-of-conduct-url] und unsere [Beitragsrichtlinien][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
