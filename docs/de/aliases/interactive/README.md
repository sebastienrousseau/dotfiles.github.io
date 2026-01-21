---
description: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
lang: de-DE
metaTitle: Interactive aliases - Dotfiles (DE)
permalink: /de/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:description
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:title
    content: Interactive aliases - Dotfiles (DE)
  - name: og:title
    content: Interactive aliases - Dotfiles (DE)
  - name: og:description
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Interactive aliases

The `interactive.aliases.sh` file creates helpful shortcut aliases for enabling
interactive mode to critical common functionality in the terminal.

The Interactive aliases are a collection of aliases that allow you to interact
with your shell and terminal in a more interactive way.

## Interactive mode

[Interactive mode](https://en.wikipedia.org/wiki/Interactive_mode) is a mode in
which the user is prompted for input before the command is executed.

This is a useful feature for commands such as `cp`, `mv`, `rm`, and `ln` that
can be used to overwrite files or directories.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ----------------------- | ------------------------------------------------------------ |
| bin   | `rm -fr ${HOME}/.Trash` | Entfernen all Dateien in the trash.                               |
| cp    | `cp -vi`                | Kopieren Dateien and directories.                                  |
| del   | `rm -rfvi`              | Entfernen a Datei or Verzeichnis.                                  |
| ln    | `ln -vi`                | Interactive symbolic link.                                   |
| mv    | `mv -vi`                | Bewegen Dateien interactively (ask before overwrite) and verbose. |
| rm    | `rm -vi`                | Prompts for every Datei before removing.                      |
| zap   | `rm -vi`                | Entfernen Dateien interactively (ask before overwrite).           |
