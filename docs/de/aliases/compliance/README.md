---
description: Shell-Aliase für regulatorische Compliance, Datenschutzdurchsetzung und Konfigurationsauditing in Ihrer Terminal-Umgebung.
lang: de-DE
metaTitle: Compliance Aliase - Dotfiles (DE)
permalink: /de/aliases/compliance/
sidebar: true

meta:
  - name: keywords
    content: compliance aliase, datenschutzmodus, telemetrie deaktivieren, audit trail, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-Aliase für regulatorische Compliance, Datenschutzdurchsetzung und Konfigurationsauditing.
  - name: twitter:title
    content: Compliance Aliase - Dotfiles
  - name: og:title
    content: Compliance Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase für regulatorische Compliance, Datenschutzdurchsetzung und Konfigurationsauditing.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Compliance Aliase

Shell-Tools für regulatorische Compliance und Datenschutzdurchsetzung.

## Übersicht

Diese Aliase sind in `compliance.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Kontrollen

| Alias | Beschreibung |
|:---|:---|
| `privacy-mode` | Deaktiviert Telemetrie für CLI-Tools (Homebrew, Dotnet, Azure, etc.) für die aktuelle Sitzung |
| `dot-audit` | Zeigt den aktuellen Konfigurationsaudit-Trail an (Git-Verlauf oder Audit-Log) |
