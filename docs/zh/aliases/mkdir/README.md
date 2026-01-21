---
description: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
lang: zh-CN
metaTitle: The Mkdir aliases - Dotfiles (CN)
permalink: /zh/aliases/mkdir/

meta:
  - name: keywords
    content: aliases, mkdir, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
  - name: twitter:description
    content: The Mkdir aliases are a collection of aliases that allow you to interact with the `mkdir` command line tool. Mkdir is a tool which creates a directory.
  - name: twitter:title
    content: The Mkdir aliases - Dotfiles (CN)
  - name: og:title
    content: The Mkdir aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------- | ------------------------------------------ |
| mcd   | `mkdir -pv && cd`           | Make 目录 and cd into it.             |
| mcdp  | `mkdir -pv && cd`           | Make 目录 and parents and cd into it. |
| md    | `mkd`                       | Make 目录.                            |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Make 目录 with date.                  |
| mdp   | `mkdir -pv`                 | Make 目录 and parents.                |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Make 目录 with time.                  |
