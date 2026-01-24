---
description: Die Editor-Aliase oeffnen die Datei im Editor, der in der Umgebungsvariablen `editor` gesetzt ist.
lang: de-DE
metaTitle: Editor-Aliase - Dotfiles (DE)
permalink: /de/aliases/editor/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Die Editor-Aliase oeffnen die Datei im Editor, der in der Umgebungsvariablen `editor` gesetzt ist.
  - name: twitter:description
    content: Die Editor-Aliase oeffnen die Datei im Editor, der in der Umgebungsvariablen `editor` gesetzt ist.
  - name: twitter:title
    content: Editor-Aliase - Dotfiles (DE)
  - name: og:title
    content: Editor-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Editor-Aliase oeffnen die Datei im Editor, der in der Umgebungsvariablen `editor` gesetzt ist.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Editor-Aliase

Editor-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `editor.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet einen umfassenden Satz von Befehlsaliasen zum Bearbeiten von Dateien mit dem
Editor, der in deiner Umgebung konfiguriert ist. Er arbeitet mit dem Editor-Konfigurationsskript
(`editor.sh`) zusammen, das automatisch den besten verfuegbaren Editor auf deinem System waehlt.
### Unterstuetzte Editoren
Die folgenden Editoren werden mit spezialisierten Aliasen unterstuetzt:
- **Neovim** - Moderne, erweiterte Version von Vim
- **Visual Studio Code** - Funktionsreicher Code-Editor mit Erweiterungen
- **Vim** - Hochgradig konfigurierbarer Texteditor
- **Nano** - Einfacher, benutzerfreundlicher Terminal-Editor
- **Emacs** - Erweiterbarer, anpassbarer Texteditor
- **Sublime Text** - Anspruchsvoller Editor fuer Code
- **Atom** - Hackbarer Editor
Diese universellen Aliase funktionieren mit jedem Editor, den `editor.sh` setzt:
- `e` - Schneller Edit-Befehl
- `edit` - Standard-Edit-Befehl
- `editor` - Voller Editor-Befehl
- `mate` - TextMate-aehnlicher Befehl
- `n` - Kurzer Edit-Alias
- `v` - Vim-aehnlicher Edit-Alias
Abhaengig vom von `editor.sh` gewaehlten Editor sind weitere Aliase verfuegbar:
- `vi`, `vim` - Umgeleitet zu Neovim, wenn es der Standardeditor ist
- `nvimrc` - Neovim Vimscript-Konfiguration bearbeiten
- `nvimlua` - Neovim Lua-Konfiguration bearbeiten
- `nvimconf` - Neovim-Konfigurationsverzeichnis oeffnen
- `vsc` - Kurzform fuer VS Code
- `vsca` - Ordner zum aktuellen Fenster hinzufuegen
- `vscd` - Zwei Dateien vergleichen
- `vscn` - Neues Fenster oeffnen
- `vscr` - Fenster wiederverwenden
- `vscu` - Mit eigenem User-Data-Verzeichnis oeffnen
- `vsced` - Mit eigenem Extensions-Verzeichnis oeffnen
- `vscex` - VS Code Extension installieren
- `vsclist` - Installierte Extensions auflisten
- `vi` - Umgeleitet zu Vim, wenn es der Standardeditor ist
- `vimrc` - Vim-Konfiguration bearbeiten
- `vimconf` - Vim-Konfigurationsverzeichnis oeffnen
- `nanorc` - Nano-Konfiguration bearbeiten
- `ne` - Verbessertes Nano mit Zeilennummern und smooth scrolling
- `em` - Kurzform fuer Emacs
- `emacs-nw` - Emacs im Terminalmodus starten
- `emacsc` - Emacs-Client starten
- `emacsrc` - Emacs-Konfiguration bearbeiten
- `et` - Schnelles Emacs im Terminal
- `st` - Sublime Text starten
- `stt` - Aktuelles Verzeichnis in Sublime Text oeffnen
- `stn` - In neuem Sublime Text Fenster oeffnen
- `a` - Atom starten
- `at` - Aktuelles Verzeichnis in Atom oeffnen
- `an` - In neuem Atom-Fenster oeffnen
### Schnelles Bearbeiten von Konfigurationen
Das Skript stellt die Funktion `editrc` bereit, um gaengige Konfigurationsdateien zu bearbeiten:
```bash
editrc bash     # ~/.bashrc bearbeiten
editrc zsh      # ~/.zshrc bearbeiten
editrc vim      # ~/.vimrc bearbeiten
editrc nvim     # Neovim init bearbeiten
editrc tmux     # ~/.tmux.conf bearbeiten
editrc git      # ~/.gitconfig bearbeiten
editrc ssh      # ~/.ssh/config bearbeiten
editrc alias    # ~/.dotfiles/aliases bearbeiten
editrc dotfiles # ~/.dotfiles bearbeiten
```
### Integration mit editor.sh
Diese Aliase arbeiten mit dem Skript `editor.sh`, das:
1. Automatisch verfuegbare Editoren erkennt
2. Passende Umgebungsvariablen setzt (`EDITOR`, `VISUAL`, `GIT_EDITOR`, etc.)
3. Editor-spezifische Einstellungen konfiguriert
4. Intelligente Fallbacks bietet
Die Aliase in dieser Datei bieten bequeme Kurzbefehle passend zum gewaehlten Editor.
### Beispiele
```bash
# Datei schnell mit dem Standardeditor bearbeiten
e myfile.txt
# Konfigurationen direkt bearbeiten
nvimrc    # Wenn Neovim (vimscript) genutzt wird
nvimlua   # Wenn Neovim (lua) genutzt wird
vimrc     # Wenn Vim genutzt wird
nanorc    # Wenn Nano genutzt wird
# VS Code, neues Fenster
vscn ~/projects/my-project
# Nano mit Zeilennummern
ne config.txt
# Konfigurationsdateien bearbeiten
editrc git    # git konfigurieren
editrc bash   # bash konfigurieren
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
