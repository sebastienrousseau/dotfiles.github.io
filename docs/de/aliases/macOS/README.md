---
description: Shell-Aliase fuer macOS-Systemverwaltung, Finder-Steuerung und Wartungsaufgaben in Dotfiles.
lang: de-DE
metaTitle: macOS Aliase - Dotfiles (DE)
permalink: /de/aliases/macOS/
sidebar: true

meta:
  - name: keywords
    content: macOS aliase, shell verknuepfungen, finder aliase, mac terminal, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: macOS Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer macOS-Systemverwaltung und Wartung.
  - name: og:title
    content: macOS Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer macOS-Systemverwaltung und Wartung.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# macOS Aliase

Shell-Verknuepfungen fuer macOS-Systemverwaltung und Wartung.

## Uebersicht

Diese Aliase sind in `macOS.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf gaengige macOS-Operationen einschliesslich Finder-Steuerung, Systemwartung und Entwicklertools.

## Referenz

### Systemverwaltung

| Alias | Beschreibung |
|:---|:---|
| `lockScreen` | Bildschirm sperren |
| `wifiOn` | Wi-Fi einschalten |
| `wifiOff` | Wi-Fi ausschalten |
| `vp` | macOS-Berechtigungen ueberpruefen |
| `vv` | macOS-Volume ueberpruefen |

### Finder

| Alias | Beschreibung |
|:---|:---|
| `ofd` | Aktuelles Verzeichnis im Finder oeffnen |
| `finderShowHidden` | Versteckte Dateien im Finder anzeigen |
| `finderHideHidden` | Versteckte Dateien im Finder ausblenden |
| `showDesktopIcons` | Alle Icons auf dem Desktop anzeigen |
| `hideDesktopIcons` | Alle Icons auf dem Desktop ausblenden |

### Bereinigung

| Alias | Beschreibung |
|:---|:---|
| `clds` | .DS_Store-Dateien rekursiv loeschen |
| `clls` | LaunchServices bereinigen, um Duplikate im Oeffnen-mit-Menue zu entfernen |
| `trash` | Papierkorb auf allen eingehaengten Volumes und der Hauptfestplatte leeren |

### Entwicklertools

| Alias | Beschreibung |
|:---|:---|
| `xcode` | Xcode starten |
| `purge` | Xcode DerivedData bereinigen |
| `iphone` | Geraetesimulatoren oeffnen |
| `safariSafeMode` | Safari im Safe Mode starten |

### Anzeige

| Alias | Beschreibung |
|:---|:---|
| `screensaverDesktop` | Bildschirmschoner auf dem Desktop ausfuehren |
