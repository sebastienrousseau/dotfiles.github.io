---
description: Shell-Aliase fuer pnpm-Paketverwaltung. Schneller, speichereffizienter Node.js-Paketmanager mit einpraegsamen Befehlen.
lang: de-DE
metaTitle: pnpm Aliase - Dotfiles (DE)
permalink: /de/aliases/pnpm/
sidebar: true

meta:
  - name: keywords
    content: pnpm aliase, pnpm verknuepfungen, node paketmanager, javascript dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: pnpm Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer pnpm-Paketverwaltung. Schneller, speichereffizienter Node.js-Paketmanager.
  - name: og:title
    content: pnpm Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer pnpm-Paketverwaltung. Schneller, speichereffizienter Node.js-Paketmanager.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# pnpm Aliase

Effiziente Paketverwaltung mit dem schnellen, speichereffizienten pnpm-Manager.

## Uebersicht

Diese Aliase sind in `pnpm.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf [pnpm](https://pnpm.io/)-Operationen fuer Projektverwaltung, Abhaengigkeitsbehandlung und Skriptausfuehrung.

## Referenz

### Projektinitialisierung

| Alias | Beschreibung |
|:---|:---|
| `pni` | Neues Projekt initialisieren |
| `pnin` | Projektabhaengigkeiten installieren |
| `pnc` | Neues Projekt erstellen |

### Build und Ausfuehrung

| Alias | Beschreibung |
|:---|:---|
| `pnb` | Projekt bauen |
| `pnrun` | Beliebiges Skript im Projekt ausfuehren |
| `pnd` | Projekt im Dev-Modus ausfuehren |
| `pns` | Projekt im Serve-Modus ausfuehren |
| `pnst` | Projekt starten |
| `pnsv` | Projekt im Server-Modus ausfuehren |

### Tests und Qualitaet

| Alias | Beschreibung |
|:---|:---|
| `pnt` | Projekt testen |
| `pntc` | Projekt mit Coverage testen |
| `pnln` | Projekt linten |
| `pndoc` | Projektdokumentation generieren |

### Abhaengigkeitsverwaltung

| Alias | Beschreibung |
|:---|:---|
| `pnad` | Dev-Abhaengigkeit hinzufuegen |
| `pnap` | Peer-Abhaengigkeit hinzufuegen |
| `pnrm` | Abhaengigkeit entfernen |
| `pnun` | Projektabhaengigkeiten deinstallieren |
| `pnls` | Alle Abhaengigkeiten auflisten |
| `pnout` | Veraltete Abhaengigkeiten pruefen |
| `pnwhy` | Pruefen, warum eine Abhaengigkeit installiert ist |

### Updates

| Alias | Beschreibung |
|:---|:---|
| `pnui` | Abhaengigkeit interaktiv aktualisieren |
| `pnuil` | Abhaengigkeit interaktiv auf neueste Version aktualisieren |
| `pnup` | Abhaengigkeit aktualisieren |

### Globale Pakete

| Alias | Beschreibung |
|:---|:---|
| `pnga` | Globale Abhaengigkeit hinzufuegen |
| `pngls` | Globale Abhaengigkeiten auflisten |
| `pngrm` | Globale Abhaengigkeit entfernen |
| `pngu` | Globale Abhaengigkeit aktualisieren |

### Sonstiges

| Alias | Beschreibung |
|:---|:---|
| `pnh` | Hilfe anzeigen |
| `pnpub` | Projekt veroeffentlichen |
| `pnx` | Kuerzel fuer pnpx |
