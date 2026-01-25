---
description: Shell-Aliase fuer tmux Terminal-Multiplexer. Sessions, Fenster und Panes effizient verwalten.
lang: de-DE
metaTitle: Tmux Aliase - Dotfiles (DE)
permalink: /de/aliases/tmux/
sidebar: true

meta:
  - name: keywords
    content: tmux aliase, terminal multiplexer, tmux session, tmux verknuepfungen, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Tmux Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer tmux Terminal-Multiplexer. Sessions, Fenster und Panes verwalten.
  - name: og:title
    content: Tmux Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer tmux Terminal-Multiplexer. Sessions, Fenster und Panes verwalten.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Tmux Aliase

Leistungsstarke Terminal-Multiplexing mit intuitiven Verknuepfungen.

## Uebersicht

Diese Aliase sind in `tmux.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf tmux Session-Verwaltung und Navigation.

## Referenz

### Session-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `tm` | tmux starten |
| `tma` | Letzte Session anhaengen |
| `tmat` | Bestimmte Session anhaengen |
| `tmn` | Neue unbenannte Session |
| `tms` | Neue benannte Session |
| `tml` | Alle Sessions auflisten |
| `tmks` | Alle Sessions ausser der aktuellen beenden |
| `tmka` | Alle Sessions beenden (Server) |

### Fenster und Panes

| Alias | Beschreibung |
|:---|:---|
| `tmls` | Fenster auflisten |
| `tmlp` | Panes auflisten |

### Konfiguration

| Alias | Beschreibung |
|:---|:---|
| `tmr` | tmux-Konfiguration neu laden |
| `tmi` | tmux-Info anzeigen |

## Schluesselmerkmale

- Modernes Farbschema mit OS-spezifischer Statusleiste
- Intuitive Keybindings mit `Ctrl+a` als Prefix-Taste
- Umfassende Fenster- und Pane-Verwaltung
- Session-Persistenz mit tmux-resurrect und tmux-continuum
- Scrollbares Hilfe-Menue (`Ctrl+a ?`)
- Mausunterstuetzung fuer einfache Navigation

## Navigation

Druecken Sie `Ctrl+a ?`, um alle Keybindings zu sehen. Wichtige Funktionen:

- **Fensterverwaltung** - Splitten, erstellen, navigieren und umbenennen
- **Pane-Navigation** - Zwischen Panes mit Vim-Keys h/j/k/l wechseln
- **Session-Verwaltung** - Sessions erstellen, umbenennen und wechseln
- **Copy-Mode** - Vim-aehnliche Auswahl, Suche und Clipboard-Integration
