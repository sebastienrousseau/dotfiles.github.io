---
description: Shell-Aliase für Systemdiagnose, Gesundheitsprüfungen, Drift-Erkennung und Selbstheilung in Ihrer Dotfiles-Umgebung.
lang: de-DE
metaTitle: Diagnostics Aliase - Dotfiles (DE)
permalink: /de/aliases/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: diagnose aliase, system gesundheitsprüfung, dotfiles doctor, chezmoi verify, selbstheilende shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-Aliase für Systemdiagnose, Gesundheitsprüfungen und Selbstheilung in Ihrer Dotfiles-Umgebung.
  - name: twitter:title
    content: Diagnostics Aliase - Dotfiles
  - name: og:title
    content: Diagnostics Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase für Systemdiagnose, Gesundheitsprüfungen und Selbstheilung in Ihrer Dotfiles-Umgebung.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Diagnostics Aliase

Werkzeuge für Selbstheilung und System-Gesundheitsprüfungen.

## Übersicht

Diese Aliase sind in `diagnostics.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Gesundheit und Reparatur

| Alias | Beschreibung |
|:---|:---|
| `doc`, `dot-doctor` | System-Gesundheitsprüfung ausführen (`doctor.sh`) |
| `drift`, `dot-drift` | Prüfen, ob lokale Dateien vom verwalteten Zustand abweichen (`chezmoi verify`) |
| `heal`, `dot-heal` | Verwalteten Zustand anwenden, um Drift zu reparieren (`chezmoi apply`) |
| `doc-full` | Doctor mit erweiterten Pfad-Debug-Informationen ausführen |
