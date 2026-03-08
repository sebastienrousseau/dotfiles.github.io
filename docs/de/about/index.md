---
title: Über Dotfiles
description: Die nächste Generation der Shell-Konfiguration. Hochleistungsfähig, sicher und AI-nativ. Verwaltet von Chezmoi.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Über Dotfiles preview
canonical: /de/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Über Dotfiles
pageType: docs
schemaType: WebPage
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

Dotfiles v0.2.481 transformiert Ihr Terminal in einen leistungsstarken, einheitlichen Arbeitsbereich. Im Gegensatz zu alten Dotfiles, die auf komplexen Makefiles oder Symlink-Skripten basieren, verwendet Dotfiles einen vorlagenbasierten Ansatz, der atomar, schnell und reproduzierbar ist.

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
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

## Kernbefehle

Die `dot`-CLI bietet 53 Befehle, organisiert nach Kategorie.

### Kern

- `dot apply` — wendet Konfigurationsänderungen an.
- `dot sync` — holt den neuesten Repository-Stand und wendet ihn an.
- `dot update` — aktualisiert das Repository und wärmt Caches vor.
- `dot add` — fügt neue Dateien in die Chezmoi-Quelle ein.
- `dot diff` — zeigt ausstehende Änderungen vor dem Anwenden.
- `dot status` — zeigt den Status verwalteter Dateien an.
- `dot remove` — entfernt eine Datei aus der Verwaltung und löscht den Quelleintrag.
- `dot cd` — öffnet eine Shell im Chezmoi-Quellverzeichnis.
- `dot edit` — öffnet eine verwaltete Datei in Ihrem Editor.
- `dot clean-cache` — löscht temporäre Caches.
- `dot prewarm` — füllt Caches für schnelleren Shell-Start vor.

### Diagnose

- `dot doctor` — prüft Pfade, Tools und Shell-Zustand.
- `dot heal` — repariert fehlenden oder fehlerhaften Zustand automatisch.
- `dot health` — führt eine leichtgewichtige Gesundheitsprüfung durch.
- `dot verify` — prüft Dateiintegrität gegen die Quelle.
- `dot scorecard` — gibt eine Konfigurationsqualitätsbewertung aus.
- `dot snapshot` — erfasst den aktuellen Zustand für späteren Vergleich.
- `dot smoke-test` — validiert Kern-Toolchains vollständig.
- `dot chaos` — injiziert Fehler zum Testen der Selbstheilung.
- `dot bundle` — exportiert ein portables Konfigurationspaket.
- `dot rollback` — setzt auf einen vorherigen Snapshot zurück.
- `dot drift` — erkennt unerwartete Änderungen an verwalteten Dateien.
- `dot history` — zeigt das Apply/Sync-Verlaufsprotokoll.
- `dot benchmark` — misst die Shell-Startzeit.
- `dot perf` — profiliert langsame Shell-Initialisierung.

### Erscheinungsbild

- `dot theme` — wechselt das Terminal-Farbschema.
- `dot wallpaper` — setzt das Desktop-Hintergrundbild (macOS).
- `dot fonts` — installiert oder aktualisiert Nerd Fonts.
- `dot tune` — passt UI-Dichte und Prompt-Stil an.

### Sicherheit

- `dot backup` — erstellt verschlüsselte Konfigurationssicherungen.
- `dot encrypt-check` — überprüft die Verschlüsselung von Secrets im Ruhezustand.
- `dot firewall` — konfiguriert Host-Firewall-Regeln.
- `dot telemetry` — steuert anonyme Nutzungstelemetrie.
- `dot dns-doh` — aktiviert DNS-over-HTTPS.
- `dot lock-screen` — sperrt den Bildschirm sofort.
- `dot usb-safety` — beschränkt USB-Massenspeicher-Auto-Mount.

### Secrets

- `dot secrets-init` — initialisiert das Secrets-Backend (age / GPG).
- `dot secrets` — listet verschlüsselte Secret-Einträge auf.
- `dot secrets-create` — erstellt ein neues verschlüsseltes Secret.
- `dot ssh-key` — generiert oder rotiert SSH-Schlüsselpaare.
- `dot ssh-cert` — fordert ein SSH-Zertifikat von einer CA an.

### KI

- `dot ai` — öffnet eine interaktive KI-Assistentensitzung.
- `dot ai-setup` — konfiguriert API-Schlüssel für KI-Anbieter.
- `dot ai-query` — sendet eine einmalige Anfrage an ein KI-Modell.
- KI-Tool-Wrapper: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Werkzeuge

- `dot tools` — listet gebündelte CLI-Ersatztools und ihren Status.
- `dot new` — erstellt eine neue Alias- oder Funktionsdatei.
- `dot sandbox` — öffnet eine Wegwerf-Sandbox-Shell.
- `dot keys` — zeigt aktuelle Tastenbelegungen.
- `dot learn` — startet das interaktive Tutorial.

### Meta

- `dot upgrade` — aktualisiert Dotfiles auf die neueste Version.
- `dot packages` — listet installierte, von Dotfiles verwaltete Pakete.
- `dot version` / `dot help` — gibt Versions- oder Nutzungsinformationen aus.

## Beitragen

Treten Sie der Community bei. Lesen Sie unseren [Verhaltenskodex][code-of-conduct-url] und unsere [Beitragsrichtlinien][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
