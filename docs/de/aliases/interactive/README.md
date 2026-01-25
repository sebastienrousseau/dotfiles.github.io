---
description: Shell-Aliase mit interaktiven Prompts vor destruktiven Operationen wie rm, mv und cp. Versehentliches Loeschen von Dateien verhindern.
lang: de-DE
metaTitle: Interactive Aliase - Dotfiles (DE)
permalink: /de/aliases/interactive/
sidebar: true

meta:
  - name: keywords
    content: interactive aliase, shell sicherheit, rm bestaetigung, cp interaktiv, mv prompt, dotfiles, bash aliase
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Interactive Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase mit interaktiven Prompts vor destruktiven Operationen wie rm, mv und cp.
  - name: og:title
    content: Interactive Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase mit interaktiven Prompts vor destruktiven Operationen wie rm, mv und cp.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Interactive Aliase

Sichere Shell-Befehle mit Bestaetigungsprompts vor destruktiven Operationen.

## Uebersicht

Interactive-Aliase fuegen Bestaetigungsprompts zu gaengigen Shell-Befehlen hinzu, die Dateien dauerhaft aendern oder loeschen koennen. In `interactive.aliases.sh` definiert und automatisch von Chezmoi geladen, helfen diese Aliase versehentlichen Datenverlust zu verhindern, indem sie Benutzerbestaetigung vor dem Ausfuehren potenziell destruktiver Operationen erfordern.

## Referenz

### Dateioperationen

| Alias | Beschreibung |
|:---|:---|
| `cp` | Dateien und Verzeichnisse interaktiv mit ausfuehrlicher Ausgabe kopieren. Fragt vor dem Ueberschreiben. |
| `mv` | Dateien interaktiv mit ausfuehrlicher Ausgabe verschieben oder umbenennen. Fragt vor dem Ueberschreiben. |
| `ln` | Symbolische Links interaktiv mit ausfuehrlicher Ausgabe erstellen. Fragt vor dem Ueberschreiben. |

### Dateiloeschung

| Alias | Beschreibung |
|:---|:---|
| `rm` | Dateien oder Verzeichnisse interaktiv mit ausfuehrlicher Ausgabe entfernen. Fragt vor jedem Loeschen. |
| `del` | Dateien oder Verzeichnisse interaktiv und rekursiv mit ausfuehrlicher Ausgabe entfernen. Fragt vor jedem Loeschen. |
| `zap` | Alias fuer `rm`. Entfernt Dateien oder Verzeichnisse interaktiv mit ausfuehrlicher Ausgabe. |

### Papierkorb-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `bin` | Alle Dateien im Papierkorb-Verzeichnis (`~/.Trash`) erzwungen und rekursiv entfernen. |

### Berechtigungen und Hilfsprogramme

| Alias | Beschreibung |
|:---|:---|
| `chmod` | Datei- oder Verzeichnisberechtigungen mit ausfuehrlicher Ausgabe aendern. |
| `chown` | Besitzer und Gruppe von Dateien oder Verzeichnissen mit ausfuehrlicher Ausgabe aendern. |
| `diff` | Dateien vergleichen und Unterschiede im Unified-Format anzeigen. |
| `grep` | Nach einem Muster in Dateien oder Ausgabe suchen, Zeilennummern anzeigen, Gross-/Kleinschreibung ignorieren. |
| `mkdir` | Neues Verzeichnis mit Elternverzeichnissen nach Bedarf und ausfuehrlicher Ausgabe erstellen. |
