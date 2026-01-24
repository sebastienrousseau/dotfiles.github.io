---
description: Die Tmux-Aliase sind eine Sammlung von Aliasen, mit denen du mit dem Befehl `tmux` interagieren kannst. Tmux ist ein Tool, mit dem du mehrere Terminal-Sessions in einem Fenster ausfuehren kannst.
lang: de-DE
metaTitle: Die Tmux-Aliase - Dotfiles (DE)
permalink: /de/aliases/tmux/

meta:
  - name: keywords
    content: aliases, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Tmux-Aliase sind eine Sammlung von Aliasen, mit denen du mit dem Befehl `tmux` interagieren kannst. Tmux ist ein Tool, mit dem du mehrere Terminal-Sessions in einem Fenster ausfuehren kannst.
  - name: twitter:description
    content: Die Tmux-Aliase sind eine Sammlung von Aliasen, mit denen du mit dem Befehl `tmux` interagieren kannst. Tmux ist ein Tool, mit dem du mehrere Terminal-Sessions in einem Fenster ausfuehren kannst.
  - name: twitter:title
    content: Die Tmux-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Tmux-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Tmux-Aliase sind eine Sammlung von Aliasen, mit denen du mit dem Befehl `tmux` interagieren kannst. Tmux ist ein Tool, mit dem du mehrere Terminal-Sessions in einem Fenster ausfuehren kannst.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Tmux-Aliase

Tmux-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `tmux.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

## 🆃🅼🆄🆇 🅲🅾🅽🅵🅸🅶🆄🆁🅰🆃🅸🅾🅽
Eine umfassende tmux-Konfiguration, die fuer Produktivitaet und einfache Bedienung entworfen wurde. Die Konfiguration ist in modulare Dateien organisiert, um die Wartbarkeit zu verbessern:
- **default**: Basis-Settings und Plugin-Konfiguration
- **display**: Visuelle und Verhaltens-Settings
- **linux**: Plattform-spezifische Funktionalitaet
- **navigation**: Umfassende Keybindings
- **panes**: Pane-spezifische Einstellungen
- **theme**: Statusleiste und visuelles Styling
### Schluesselmerkmale
- Modernes Farbschema mit OS-spezifischer Statusleiste
- Intuitive Keybindings mit Ctrl+a als Prefix-Taste
- Umfassende Fenster- und Pane-Verwaltung
- Session-Persistenz mit tmux-resurrect und tmux-continuum
- Scrollbares Hilfe-Menue (Ctrl+a ?)
- Mausunterstuetzung fuer einfache Navigation
### Navigation & Keybindings
Druecke `Ctrl+a ?`, um alle Keybindings zu sehen. Wichtige Funktionen:
- **Fensterverwaltung**: Splitten, erstellen, navigieren und umbenennen
- **Pane-Navigation**: Zwischen Panes mit Vim-Keys h/j/k/l wechseln
- **Session-Verwaltung**: Sessions erstellen, umbenennen und wechseln
- **Copy-Mode**: Vim-aehnliche Auswahl, Suche und Clipboard-Integration

Praktische Aliase fuer tmux-Operationen:
| Alias | Beschreibung |
|-------|-------------|
| `tm`  | tmux starten |
| `tma` | Letzte Session anhaengen |
| `tmat` | Bestimmte Session anhaengen |
| `tmks` | Alle Sessions ausser der aktuellen beenden |
| `tmka` | Alle Sessions beenden (Server) |
| `tml` | Alle Sessions auflisten |
| `tmn` | Neue unbenannte Session |
| `tms` | Neue benannte Session |
| `tmr` | tmux-Konfiguration neu laden |
| `tmls` | Fenster auflisten |
| `tmlp` | Panes auflisten |
| `tmi` | tmux-Info anzeigen |
## Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git ~/.dotfiles
   ```
2. Installationsskript ausfuehren:
   ```bash
   cd ~/.dotfiles && ./install.sh
   ```
3. tmux Plugin Manager installieren (falls noch nicht vorhanden):
   ```bash
   git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
   ```
4. tmux oeffnen und `Ctrl+a I` druecken, um Plugins zu installieren
## Nutzung
Neue tmux-Session starten mit:
```bash
tmux
```
Oder nutze einen der Alias-Befehle fuer haeufige Aktionen.
## Lizenz
MIT

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
