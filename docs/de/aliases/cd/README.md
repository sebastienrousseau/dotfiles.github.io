---
description: Verzeichnisnavigations-Aliase mit Lesezeichen, Verlaufsverfolgung und intelligenten Verknüpfungen. Navigieren Sie schneller durch Ihr Dateisystem.
lang: de-DE
metaTitle: CD Aliase - Dotfiles (DE)
permalink: /de/aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, verzeichnis, navigation, lesezeichen, shell aliase, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Verzeichnisnavigations-Aliase mit Lesezeichen, Verlaufsverfolgung und intelligenten Verknüpfungen. Navigieren Sie schneller durch Ihr Dateisystem.
  - name: twitter:title
    content: CD Aliase - Dotfiles
  - name: og:title
    content: CD Aliase - Dotfiles
  - name: og:description
    content: Verzeichnisnavigations-Aliase mit Lesezeichen, Verlaufsverfolgung und intelligenten Verknüpfungen. Navigieren Sie schneller durch Ihr Dateisystem.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# CD Aliase

Navigieren Sie schneller durch Ihr Dateisystem. Lesezeichen, Verlauf und intelligente Verknüpfungen.

## Übersicht

Diese Aliase sind in `cd.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Navigationsverknüpfungen

| Alias | Beschreibung |
|:---|:---|
| `-` | Zum vorherigen Verzeichnis wechseln |
| `..` | Eine Ebene nach oben |
| `...` | Zwei Ebenen nach oben |
| `....` | Drei Ebenen nach oben |
| `.....` | Vier Ebenen nach oben |
| `hom` | Zum Home-Verzeichnis navigieren |

### Verzeichnisverknüpfungen

| Alias | Pfad | Beschreibung |
|:---|:---|:---|
| `app` | `~/Applications` | Anwendungen |
| `cod` | `~/Code` | Code-Verzeichnis |
| `dsk` | `~/Desktop` | Schreibtisch |
| `doc` | `~/Documents` | Dokumente |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Downloads |
| `mus` | `~/Music` | Musik |
| `pic` | `~/Pictures` | Bilder |
| `vid` | `~/Videos` | Videos |

### Systemverzeichnisse

| Alias | Pfad | Beschreibung |
|:---|:---|:---|
| `etc` | `/etc` | Systemkonfiguration |
| `var` | `/var` | Variable Dateien |
| `tmp` | `/tmp` | Temporäre Dateien |
| `usr` | `/usr` | Benutzerprogramme |

### Lesezeichen

| Befehl | Alias | Beschreibung |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Lesezeichen erstellen |
| `bookmark_list` | `bml` | Lesezeichen auflisten |
| `bookmark_update` | `bmu` | Lesezeichen aktualisieren |
| `bookmark_remove` | `bmr` | Lesezeichen löschen |
| `goto <name>` | `bmg` | Zu Lesezeichen gehen |

```bash
bm work-project      # Lesezeichen erstellen
bmg work-project     # Zu Lesezeichen navigieren
bml                  # Alle Lesezeichen auflisten
```

### Verlauf

| Befehl | Alias | Beschreibung |
|:---|:---|:---|
| `dirhistory` | `dh` | Verzeichnisverlauf anzeigen |
| `lwd` | `ld` | Zum letzten Verzeichnis zurückkehren |

### Erweitert

| Befehl | Alias | Beschreibung |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Verzeichnis erstellen und betreten |
| `proj` | `pr` | Zum Projektstamm gehen |
| `pushd` | `pd` | Verzeichnis auf Stapel legen |
| `popd` | — | Vom Stapel entfernen |
| `dirs` | — | Verzeichnisstapel auflisten |

## Konfiguration

Passen Sie das Verhalten mit Umgebungsvariablen an:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Hilfe

Führen Sie `cdhelp` aus, um alle Befehle anzuzeigen, oder `cdversion` für Versionsinformationen.
