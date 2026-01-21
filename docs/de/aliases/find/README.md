---
description: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
lang: de-DE
metaTitle: Find aliases - Dotfiles (DE)
permalink: /de/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:title
    content: Find aliases - Dotfiles (DE)
  - name: og:title
    content: Find aliases - Dotfiles (DE)
  - name: og:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Find aliases

The `find.aliases.sh` file creates helpful shortcut aliases for the `fd` command
. The `fd` command is a cross-platform alternative to `find`.

Traditionally, the `find` command is used to search for files in a directory
hierarchy and perform actions on the files that are found.

We decided to substitute the `find` command with the `fd` command which is
simpler, fast and user-friendly alternative to `find`.

## Find

[fd](https://github.com/sharkdp/fd) is a simple, fast and user-friendly
alternative to `find`. While it does not aim to support all of find's powerful
functionality, it provides sensible (opinionated) defaults for a majority of
use cases.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | -------------------- | ----------------------------------------------------------- |
| fd    | `fd --color always`  | always colorize output by default.                          |
| fda   | `fd --absolute-path` | Auflisten all Dateien with absolute path.                          |
| fdc   | `fd --ignore-case`   | Auflisten all Dateien with case insensitive Suchen.                |
| fdd   | `fd --list-details`  | Auflisten all Dateien with details.                                |
| fde   | `fd --extension`     | Auflisten all Dateien with extension.                              |
| fdf   | `fd --follow`        | Auflisten all Dateien with follow symlinks.                        |
| fdh   | `fd --help`          | Auflisten all Dateien with help.                                   |
| fdh   | `fd --hidden`        | Auflisten all Dateien with hidden Dateien.                           |
| fdn   | `fd --glob`          | Auflisten all Dateien with glob.                                   |
| fdo   | `fd --owner`         | Auflisten all Dateien with owner.                                  |
| fds   | `fd --size`          | Auflisten all Dateien with size.                                   |
| fdu   | `fd --exclude`       | Auflisten all Dateien with exclude.                                |
| fdv   | `fd --version`       | Auflisten all Dateien with version.                                |
| fdx   | `fd --exec`          | Execute a command for each Suchen result.                   |
| find  | `fd`                 | fd is a simple, fast and user-friendly alternative to Finden. |
