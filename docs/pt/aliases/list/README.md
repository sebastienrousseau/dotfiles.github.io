---
description: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
lang: pt-BR
metaTitle: The List (ls) aliases - Dotfiles (BR)
permalink: /pt/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:title
    content: The List (ls) aliases - Dotfiles (BR)
  - name: og:title
    content: The List (ls) aliases - Dotfiles (BR)
  - name: og:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# List aliases

The `list.aliases.sh` file creates helpful shortcut aliases for listing files
and directories.

The List aliases are a collection of aliases that allow you to interact with
the `ls` command in a more interactive way in order to display the content of a
directory.

For each operand that names a file of a type other than directory, `ls` displays
its name as well as any requested, associated information. For each operand
that names a file of type directory, `ls` displays the names of files contained
within that directory, as well as any requested, associated information.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) is a command that lists the contents of
a directory.

| Alias  | Command              | Description                                            |
| ------ | -------------------- | ------------------------------------------------------ | --------------------------- |
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                          | Listar hidden arquivos.          |
| l      | `ls -lFh`            | Size, Mostrar type, human readable.                       |
| l1     | `ls -1`              | Display one arquivo per line.                             |
| la     | `ls -lAFh`           | All arquivos, Mostrar type, human readable.                  |
| labc   | `ls -lap`            | Listar all arquivos in alphabetical order.                  |
| lc     | `wc -l`              | Count the number of lines in the arquivo.                 |
| lct    | `ls -lcrh`           | Listar arquivos by time, newest first.                      |
| ld     | `ls -ltrh`           | Sort by date, oldest first.                            |
| ldir   | `ls -l               | egrep '^d'`                                            | Listar directories only.      |
| ldot   | `l.`                 | Listar hidden arquivos.                                     |
| left   | `ls -t -1`           | Listar arquivos by date, most recent last.                  |
| right  | `ls -t -1r`          | Listar arquivos by date, most recent first.                 |
| lf     | `ls -l               | egrep -v '^d'`                                         | Listar arquivos only.            |
| lk     | `ls -lSrh`           | Sort by size, largest first.                           |
| ll     | `la`                 | Long Listar, Mostrar almost all, Mostrar type, human readable. |
| lla    | `ls -l -d $PWD/*`    | Listar full path of all arquivos in current diretório.      |
| locale | `locale -a           | grep UTF-8`                                            | Listar all available locales. |
| lp     | `sudo lsof -i -T -n` | Listar all Abrir ports.                                   |
| lr     | `ls -lRh`            | Recursive Listar, Mostrar type, human readable.             |
| ls     | `ls --color`         | Colorize the output.                                   |
| lS     | `ls -1FSsh`          | Order arquivos Based on Last Modified Time and size.      |
| lt     | `tree`               | Listar contents of directories in a tree-like format.    |
| lu     | `ls -lurh`           | Sort by date, oldest first.                            |
| lw     | `ls -xAh`            | Wide Listar, Mostrar almost all, Mostrar type, human readable. |
| lx     | `ls                  | sort -k 1,1 -t .`                                      | Sort by extension.          |
| lz     | `ls -lSr`            | Sort by size, smallest first.                          |
