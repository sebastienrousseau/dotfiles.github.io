---
description: The Wget aliases create helpful shortcut aliases for the `wget` command. Wget is a tool which downloads files from the internet.
lang: es-ES
metaTitle: The Wget aliases - Dotfiles (ES)
permalink: /es/aliases/wget/

meta:
  - name: keywords
    content: aliases, wget, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Wget aliases create helpful shortcut aliases for the `wget` command. Wget is a tool which downloads files from the internet.
  - name: twitter:description
    content: The Wget aliases create helpful shortcut aliases for the `wget` command. Wget is a tool which downloads files from the internet.
  - name: twitter:title
    content: The Wget aliases - Dotfiles (ES)
  - name: og:title
    content: The Wget aliases - Dotfiles (ES)
  - name: og:description
    content: The Wget aliases create helpful shortcut aliases for the `wget` command. Wget is a tool which downloads files from the internet.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Wget aliases

This `wget.aliases.sh` file creates helpful shortcut aliases for many commonly
used [wget](https://www.gnu.org/software/wget/) commands.

The Wget aliases create helpful shortcut aliases for the `wget` command. Wget is
a tool which downloads files from the internet.

## Wget

GNU [Wget](https://www.gnu.org/software/wget/) is a free utility for
non-interactive download of files from the Web. It supports HTTP, HTTPS, and
FTP protocols, as well as retrieval through HTTP proxies.

| Alias | Comando               | Descripción                                                                |
| ----- | ------------------ | ------------------------------------- |
| wg    | `wget`             | Download a archivo.                      |
| wgc   | `wg`               | Continue a partially-downloaded archivo. |
| wge   | `wg -e robots=off` | Download a archivo, ignoring robots.txt. |
| wget  | `wget -c`          | Continue a partially-downloaded archivo. |
