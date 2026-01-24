---
description: Der Modern Core ist eine Suite Rust-basierter Tools, die klassische Unix-Utilities durch schnellere, smarte Alternativen ersetzt.
lang: de-DE
metaTitle: Modern Core - Dotfiles (DE)
permalink: /de/aliases/modern-core/

meta:
  - name: keywords
    content: modern core, atuin, yazi, zellij, ghostty, rust, shell, tools
---

# Modern Core Tools

In **v0.2.471** haben wir den "Modern Core" eingefuehrt — eine Suite performanter,
Rust-basierter Tools als Ersatz fuer klassische Unix-Utilities.

## Tools Overview

| Tool        | Ersetzt        | Beschreibung                                             | Keybinding      |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | Syncbare, verschluesselte Shell-Historie mit Fuzzy-Search. | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | Schneller Terminal-File-Manager mit Image-Previews.     | `yy` (alias)    |
| **Zellij**  | `tmux`          | Moderner Multiplexer mit intuitiven Layouts.            | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | GPU-beschleunigter, plattformuebergreifender Terminal.  | N/A             |

## Atuin (Magische Historie)

Atuin ersetzt deine Shell-Historie durch eine SQLite-Datenbank.

- **Search**: `Ctrl+R` oder `Up Arrow` fuer die Suche.
- **Filter**: Natuerliche Sprache oder Exit-Codes.
- **Sync**: Historie wird verschluesselt und zwischen Geraeten synchronisiert.

## Yazi (File Manager)

Yazi ist ein Terminal-Dateimanager in Rust, basiert auf async I/O.

- **Launch**: `yy` im Terminal.
- **Features**:
  - Sofortiger Start.
  - Sixel/Kitty Image-Preview Support.
  - Lua-Plugin-System.

## Zellij (Multiplexer)

Zellij ist ein Terminal-Workspace mit "Batteries included".

- **Launch**: `zellij` (oder Alias) ausfuehren.
- **Features**:
  - Layout-Engine (Layouts speichern/wiederherstellen).
  - Floating Panes.
  - Benutzerfreundliche Keybindings (onscreen angezeigt).

## Ghostty (Terminal)

Ghostty ist der Standard-Terminalemulator fuer den Modern Core.

- **Features**:
  - Native Performance (GPU-beschleunigt).
  - Ligaturen und moderne Font-Unterstuetzung.
  - Zero-Flicker Rendering.
