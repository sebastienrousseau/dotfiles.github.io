---
description: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
lang: es-ES
metaTitle: Find aliases - Dotfiles (ES)
permalink: /es/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:title
    content: Find aliases - Dotfiles (ES)
  - name: og:title
    content: Find aliases - Dotfiles (ES)
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

| Alias | Comando               | Descripción                                                                |
| ----- | -------------------- | ----------------------------------------------------------- |
| fd    | `fd --color always`  | always colorize output by default.                          |
| fda   | `fd --absolute-path` | list all files with absolute path.                          |
| fdc   | `fd --ignore-case`   | list all files with case insensitive search.                |
| fdd   | `fd --list-details`  | list all files with details.                                |
| fde   | `fd --extension`     | list all files with extension.                              |
| fdf   | `fd --follow`        | list all files with follow symlinks.                        |
| fdh   | `fd --help`          | list all files with help.                                   |
| fdh   | `fd --hidden`        | list all files with hidden files.                           |
| fdn   | `fd --glob`          | list all files with glob.                                   |
| fdo   | `fd --owner`         | list all files with owner.                                  |
| fds   | `fd --size`          | list all files with size.                                   |
| fdu   | `fd --exclude`       | list all files with exclude.                                |
| fdv   | `fd --version`       | list all files with version.                                |
| fdx   | `fd --exec`          | Execute a command for each search result.                   |
| find  | `fd`                 | fd is a simple, fast and user-friendly alternative to find. |
