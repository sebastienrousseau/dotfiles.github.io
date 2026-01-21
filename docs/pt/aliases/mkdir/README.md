---
description: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
lang: pt-BR
metaTitle: The Mkdir aliases - Dotfiles (BR)
permalink: /pt/aliases/mkdir/

meta:
  - name: keywords
    content: aliases, mkdir, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
  - name: twitter:description
    content: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
  - name: twitter:title
    content: The Mkdir aliases - Dotfiles (BR)
  - name: og:title
    content: The Mkdir aliases - Dotfiles (BR)
  - name: og:description
    content: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Mkdir aliases

The `mkdir.aliases.sh` file creates helpful shortcut aliases for creating
directories.

The Mkdir aliases are a collection of aliases that allow you to interact with
the `mkdir` command line tool. Mkdir is a tool which creates a directory.

## Mkdir

[Mkdir](https://en.wikipedia.org/wiki/Mkdir) is a command that creates a
directory. The mkdir utility creates the directories named as operands, in the
order specified, using mode “rwxrwxrwx” (0777).

| Alias | Comando               | Descrição                                                                  |
| ----- | --------------------------- | ------------------------------------------ |
| mcd   | `mkdir -pv && cd`           | Make directory and cd into it.             |
| mcdp  | `mkdir -pv && cd`           | Make directory and parents and cd into it. |
| md    | `mkd`                       | Make directory.                            |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Make directory with date.                  |
| mdp   | `mkdir -pv`                 | Make directory and parents.                |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Make directory with time.                  |
