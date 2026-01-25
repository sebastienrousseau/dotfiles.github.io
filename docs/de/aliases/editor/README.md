---
description: Shell-Aliase fuer Neovim, VS Code, Vim, Nano, Emacs und Sublime Text. Dateien schneller bearbeiten mit universellen Verknuepfungen.
lang: de-DE
metaTitle: Editor Aliase - Dotfiles (DE)
permalink: /de/aliases/editor/
sidebar: true

meta:
  - name: keywords
    content: editor aliase, neovim, vim, vscode, nano, emacs, sublime text, shell verknuepfungen, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-Aliase fuer Neovim, VS Code, Vim, Nano, Emacs und Sublime Text.
  - name: twitter:title
    content: Editor Aliase - Dotfiles
  - name: og:title
    content: Editor Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer Neovim, VS Code, Vim, Nano, Emacs und Sublime Text.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Editor Aliase

Verknuepfungen zum Starten und Konfigurieren Ihres bevorzugten Texteditors.

## Uebersicht

Editor-Aliase bieten eine einheitliche Schnittstelle fuer Textbearbeitung ueber mehrere Anwendungen. In `editor.aliases.sh` definiert und automatisch von Chezmoi geladen, arbeiten diese Verknuepfungen zusammen mit `editor.sh`, um den besten verfuegbaren Editor auf Ihrem System zu erkennen und zu konfigurieren.

Das System unterstuetzt Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text und Atom. Universelle Aliase passen sich an den aktiven Editor an, waehrend spezialisierte Aliase editor-spezifische Funktionen bieten.

## Referenz

### Universelle Aliase

Diese Aliase funktionieren mit jedem von `editor.sh` konfigurierten Editor.

| Alias | Beschreibung |
|:---|:---|
| `e` | Schneller Bearbeitungsbefehl |
| `edit` | Standard-Bearbeitungsbefehl |
| `editor` | Vollstaendiger Editor-Befehl |
| `mate` | TextMate-aehnlicher Befehl |
| `n` | Kurzer Bearbeitungs-Alias |
| `v` | Vim-aehnlicher Bearbeitungs-Alias |

### Neovim Aliase

Verfuegbar wenn Neovim der primaere Editor ist.

| Alias | Beschreibung |
|:---|:---|
| `vi` | Weiterleitung zu Neovim |
| `vim` | Weiterleitung zu Neovim |
| `nvimrc` | Neovim Vimscript-Konfiguration bearbeiten |
| `nvimlua` | Neovim Lua-Konfiguration bearbeiten |
| `nvimconf` | Neovim-Konfigurationsverzeichnis oeffnen |

### Visual Studio Code Aliase

Verfuegbar wenn VS Code installiert ist.

| Alias | Beschreibung |
|:---|:---|
| `vsc` | VS Code starten |
| `vsca` | Ordner zum aktuellen Fenster hinzufuegen |
| `vscd` | Zwei Dateien vergleichen |
| `vscn` | Neues Fenster oeffnen |
| `vscr` | Fenster beim Oeffnen von Dateien wiederverwenden |
| `vscu` | Mit benutzerdefiniertem Datenverzeichnis oeffnen |
| `vsced` | Mit benutzerdefiniertem Erweiterungsverzeichnis oeffnen |
| `vscex` | VS Code-Erweiterung installieren |
| `vsclist` | Installierte Erweiterungen auflisten |

### Vim Aliase

Verfuegbar wenn Vim der primaere Editor ist.

| Alias | Beschreibung |
|:---|:---|
| `vi` | Weiterleitung zu Vim |
| `vimrc` | Vim-Konfigurationsdatei bearbeiten |
| `vimconf` | Vim-Konfigurationsverzeichnis oeffnen |

### Nano Aliase

Verfuegbar wenn Nano der primaere Editor ist.

| Alias | Beschreibung |
|:---|:---|
| `nanorc` | Nano-Konfigurationsdatei bearbeiten |
| `ne` | Erweitertes Nano mit Zeilennummern und sanftem Scrollen |

### Emacs Aliase

Verfuegbar wenn Emacs installiert ist.

| Alias | Beschreibung |
|:---|:---|
| `em` | Emacs starten |
| `emacs-nw` | Emacs im Terminal-Modus ausfuehren |
| `emacsc` | Emacs-Client starten |
| `emacsrc` | Emacs-Konfigurationsdatei bearbeiten |
| `et` | Schnelles Terminal-basiertes Emacs |

### Sublime Text Aliase

Verfuegbar wenn Sublime Text installiert ist.

| Alias | Beschreibung |
|:---|:---|
| `st` | Sublime Text starten |
| `stt` | Aktuelles Verzeichnis in Sublime Text oeffnen |
| `stn` | In neuem Sublime Text-Fenster oeffnen |

### Atom Aliase

Verfuegbar wenn Atom installiert ist.

| Alias | Beschreibung |
|:---|:---|
| `a` | Atom starten |
| `at` | Aktuelles Verzeichnis in Atom oeffnen |
| `an` | In neuem Atom-Fenster oeffnen |

### Konfigurationsbearbeitung

Die `editrc`-Funktion bietet schnellen Zugriff auf gaengige Konfigurationsdateien.

| Befehl | Zieldatei |
|:---|:---|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Neovim init-Datei |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
| `editrc alias` | `~/.dotfiles/aliases` |
| `editrc dotfiles` | `~/.dotfiles` |
