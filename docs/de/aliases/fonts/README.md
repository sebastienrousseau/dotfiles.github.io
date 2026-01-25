---
description: Shell-Aliase zur Verwaltung von Systemschriften und Caches. Schrift-Cache aktualisieren und installierte Schriftfamilien auflisten.
lang: de-DE
metaTitle: Font Aliase - Dotfiles (DE)
permalink: /de/aliases/fonts/
sidebar: true

meta:
  - name: keywords
    content: font aliase, schrift cache, fc-cache, schriften auflisten, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Font Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase zur Verwaltung von Systemschriften und Caches.
  - name: og:title
    content: Font Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase zur Verwaltung von Systemschriften und Caches.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Font Aliase

Shell-Aliase zur Verwaltung von Systemschriften und Caches.

## Uebersicht

Font-Aliase bieten praktische Verknuepfungen fuer gaengige Schriftverwaltungsaufgaben. Diese Befehle vereinfachen das Aktualisieren des Schrift-Caches nach der Installation neuer Schriften und das Auflisten aller verfuegbaren Schriftfamilien auf Ihrem System.

## Referenz

### Befehle

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `update-fonts` | `fc-cache -fv` | Aktualisiert den System-Schrift-Cache |
| `list-fonts` | - | Listet alle installierten Schriftfamilien auf |

### Installierte Schriften

Die folgenden Schriften sind standardmaessig konfiguriert:

| Schrift | Zweck |
|:---|:---|
| JetBrainsMono Nerd Font | Primaere Terminal-Schrift |
| Symbols Nerd Font | Icon-Fallback |
