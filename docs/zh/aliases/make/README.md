---
description: The Make aliases are a collection of aliases that allow you to interact with the `make` command line tool. Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.
lang: zh-CN
metaTitle: The Make aliases - Dotfiles (CN)
permalink: /zh/aliases/make/

meta:
  - name: keywords
    content: aliases, make, makefile, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Make aliases are a collection of aliases that allow you to interact with the `make` command line tool. Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.
  - name: twitter:description
    content: The Make aliases are a collection of aliases that allow you to interact with the `make` command line tool. Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.
  - name: twitter:title
    content: The Make aliases - Dotfiles (CN)
  - name: og:title
    content: The Make aliases - Dotfiles (CN)
  - name: og:description
    content: The Make aliases are a collection of aliases that allow you to interact with the `make` command line tool. Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Make aliases

The `make.aliases.sh` file creates helpful shortcut aliases for running `make`
commands.

## Make

[Make](<https://en.wikipedia.org/wiki/Make_(software)>) is a tool which controls
the generation of executables and other non-source files of a program from the
program's source files.

Make gets its knowledge of how to build your program from a file called the
`Makefile`, which lists each of the non-source files and how to compute it from
other files.

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------- | ----------------------------- |
| mk    | `make`         | Run `make` with no arguments. |
| mkc   | `make clean`   | Run `make clean`.             |
| mkd   | `make doc`     | Run `make doc`.               |
| mkf   | `make format`  | Run `make format`.            |
| mkh   | `make help`    | Run `make help`.              |
| mki   | `make install` | Run `make 安装`.           |
| mkr   | `make run`     | Run `make run`.               |
| mkt   | `make test`    | Run `make test`.              |
