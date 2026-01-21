---
description: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
lang: pt-BR
metaTitle: Find aliases - Dotfiles (BR)
permalink: /pt/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:title
    content: Find aliases - Dotfiles (BR)
  - name: og:title
    content: Find aliases - Dotfiles (BR)
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

| Alias | Comando               | Descrição                                                                  |
| ----- | -------------------- | ----------------------------------------------------------- |
| fd    | `fd --color always`  | always colorize output by default.                          |
| fda   | `fd --absolute-path` | Listar all arquivos with absolute path.                          |
| fdc   | `fd --ignore-case`   | Listar all arquivos with case insensitive Pesquisar.                |
| fdd   | `fd --list-details`  | Listar all arquivos with details.                                |
| fde   | `fd --extension`     | Listar all arquivos with extension.                              |
| fdf   | `fd --follow`        | Listar all arquivos with follow symlinks.                        |
| fdh   | `fd --help`          | Listar all arquivos with help.                                   |
| fdh   | `fd --hidden`        | Listar all arquivos with hidden arquivos.                           |
| fdn   | `fd --glob`          | Listar all arquivos with glob.                                   |
| fdo   | `fd --owner`         | Listar all arquivos with owner.                                  |
| fds   | `fd --size`          | Listar all arquivos with size.                                   |
| fdu   | `fd --exclude`       | Listar all arquivos with exclude.                                |
| fdv   | `fd --version`       | Listar all arquivos with version.                                |
| fdx   | `fd --exec`          | Execute a command for each Pesquisar result.                   |
| find  | `fd`                 | fd is a simple, fast and user-friendly alternative to Encontrar. |
