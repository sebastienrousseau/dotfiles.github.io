---
description: Shell-Aliase fuer Sicherheitshaertung und Konfigurationssperrung. Kritische Dateien vor versehentlichen Aenderungen schuetzen.
lang: de-DE
metaTitle: Security Aliase - Dotfiles (DE)
permalink: /de/aliases/security/
sidebar: true

meta:
  - name: keywords
    content: security aliase, konfigurations sperrung, datei immutabilitaet, dotfiles, shell sicherheit
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Security Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer Sicherheitshaertung und Konfigurationssperrung.
  - name: og:title
    content: Security Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer Sicherheitshaertung und Konfigurationssperrung.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Security Aliase

Werkzeuge zur Haertung Ihrer Umgebung und Verwaltung der Konfigurationssperrung.

## Uebersicht

Die Security-Aliase bieten Befehle zur Verwaltung der Datei-Immutabilitaet und zum Schutz kritischer Konfigurationsdateien vor versehentlichen Aenderungen.

## Referenz

### Immutabilitaet

| Alias | Beschreibung |
|:---|:---|
| `lock-configs` | Kritische Dateien (`.zshrc`, etc.) sperren, um Aenderungen zu verhindern (`chflags uchg` / `chattr +i`) |
| `unlock-configs` | Kritische Dateien zur Bearbeitung entsperren |
| `check-locks` | Sperrstatus kritischer Dateien pruefen |

### Git-Signierung

Siehe [Git-Aliase](../git/) fuer die Konfiguration der Commit-Signierung, einschliesslich:

- `enable-signing` - GPG- oder SSH-Commit-Signierung konfigurieren
- `verify-signatures` - Commit-Signaturen verifizieren
- `check-signing` - Aktuelle Signierungskonfiguration pruefen
