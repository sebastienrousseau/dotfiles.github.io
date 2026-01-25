---
description: Vereinfachen Sie die Verwaltung von Datei- und Verzeichnisberechtigungen mit chmod-Aliase. Schnelle Verknüpfungen für gängige Berechtigungsmuster wie 755, 644 und mehr.
lang: de-DE
metaTitle: Chmod Aliase - Dotfiles (DE)
permalink: /de/aliases/chmod/
sidebar: true

meta:
  - name: keywords
    content: chmod aliase, dateiberechtigungen, shell verknüpfungen, dotfiles, unix berechtigungen
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Vereinfachen Sie die Verwaltung von Datei- und Verzeichnisberechtigungen mit chmod-Aliase.
  - name: twitter:title
    content: Chmod Aliase - Dotfiles
  - name: og:title
    content: Chmod Aliase - Dotfiles
  - name: og:description
    content: Vereinfachen Sie die Verwaltung von Datei- und Verzeichnisberechtigungen mit chmod-Aliase.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Chmod Aliase

Verknüpfungen zur Verwaltung von Datei- und Verzeichnisberechtigungen.

## Übersicht

Diese Aliase sind in `chmod.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Gängige Berechtigungsaliase

| Alias | Berechtigungen | Beschreibung |
|:---|:---|:---|
| `chmod_000` | `----------` | Keine Berechtigungen für niemanden |
| `chmod_400` | `r--------` | Nur Lesen für den Eigentümer |
| `chmod_444` | `r--r--r--` | Nur Lesen für alle |
| `chmod_600` | `rw-------` | Lesen/Schreiben für den Eigentümer |
| `chmod_644` | `rw-r--r--` | Lesen/Schreiben für Eigentümer, nur Lesen für andere |
| `chmod_666` | `rw-rw-rw-` | Lesen/Schreiben für alle |
| `chmod_755` | `rwxr-xr-x` | Voll für Eigentümer, Lesen/Ausführen für andere |
| `chmod_764` | `rwxrw-r--` | Voll für Eigentümer, Lesen/Schreiben für Gruppe |
| `chmod_777` | `rwxrwxrwx` | Volle Berechtigungen für alle |

### Eigentümer-Berechtigungsaliase

| Alias | Beschreibung |
|:---|:---|
| `chmod_u+x` | Ausführberechtigung für Eigentümer hinzufügen |
| `chmod_u-x` | Ausführberechtigung für Eigentümer entfernen |
| `chmod_u+w` | Schreibberechtigung für Eigentümer hinzufügen |
| `chmod_u-w` | Schreibberechtigung für Eigentümer entfernen |
| `chmod_u+r` | Leseberechtigung für Eigentümer hinzufügen |
| `chmod_u-r` | Leseberechtigung für Eigentümer entfernen |

### Gruppen-Berechtigungsaliase

| Alias | Beschreibung |
|:---|:---|
| `chmod_g+x` | Ausführberechtigung für Gruppe hinzufügen |
| `chmod_g-x` | Ausführberechtigung für Gruppe entfernen |
| `chmod_g+w` | Schreibberechtigung für Gruppe hinzufügen |
| `chmod_g-w` | Schreibberechtigung für Gruppe entfernen |
| `chmod_g+r` | Leseberechtigung für Gruppe hinzufügen |
| `chmod_g-r` | Leseberechtigung für Gruppe entfernen |

### Andere-Berechtigungsaliase

| Alias | Beschreibung |
|:---|:---|
| `chmod_o+x` | Ausführberechtigung für andere hinzufügen |
| `chmod_o-x` | Ausführberechtigung für andere entfernen |
| `chmod_o+w` | Schreibberechtigung für andere hinzufügen |
| `chmod_o-w` | Schreibberechtigung für andere entfernen |
| `chmod_o+r` | Leseberechtigung für andere hinzufügen |
| `chmod_o-r` | Leseberechtigung für andere entfernen |

### Dateityp-Aliase

| Alias | Beschreibung |
|:---|:---|
| `chmod_755d` | Berechtigungen aller Verzeichnisse auf `rwxr-xr-x` setzen |
| `chmod_644f` | Berechtigungen aller Dateien auf `rw-r--r--` setzen |

### Rekursive Berechtigungsfunktion

Die `change_permission`-Funktion wendet Berechtigungen rekursiv mit einer Bestätigungsaufforderung an:

```bash
change_permission 755 /path/to/directory -R
```
