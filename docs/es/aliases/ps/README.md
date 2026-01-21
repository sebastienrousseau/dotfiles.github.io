---
description: The PS aliases are a collection of aliases that allow you to interact with the `ps` command line tool. Ps is a tool which reports a snapshot of the current processes.
lang: es-ES
metaTitle: The PS aliases - Dotfiles (ES)
permalink: /es/aliases/ps/

meta:
  - name: keywords
    content: aliases, ps, process, processes, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The PS aliases are a collection of aliases that allow you to interact with the `ps` command line tool. Ps is a tool which reports a snapshot of the current processes.
  - name: twitter:description
    content: The PS aliases are a collection of aliases that allow you to interact with the `ps` command line tool. Ps is a tool which reports a snapshot of the current processes.
  - name: twitter:title
    content: The PS aliases - Dotfiles (ES)
  - name: og:title
    content: The PS aliases - Dotfiles (ES)
  - name: og:description
    content: The PS aliases are a collection of aliases that allow you to interact with the `ps` command line tool. Ps is a tool which reports a snapshot of the current processes.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# PS aliases

The `ps.aliases.sh` file creates helpful shortcut aliases for working with
processes.

The PS aliases are a collection of aliases that allow you to interact with the
`ps` command line tool. Ps is a tool which reports a snapshot of the current
processes.

## PS

[PS](<https://en.wikipedia.org/wiki/Ps_(Unix)>) is a command that lists the
processes running on the system.

| Alias | Comando               | Descripción                                                                |
| ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| pid   | `ps -f`  | Display the uid, pid, parent pid, recent CPU usage, process start time, controlling tty, elapsed CPU usage, and the associated command. |
| ps    | `ps -ef` | Display all processes.                                                                                                                  |
| psa   | `ps aux` | List all processes.                                                                                                                     |
