---
description: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
lang: de-DE
metaTitle: The List (ls) aliases - Dotfiles (DE)
permalink: /de/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:title
    content: The List (ls) aliases - Dotfiles (DE)
  - name: og:title
    content: The List (ls) aliases - Dotfiles (DE)
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
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                          | Auflisten hidden Dateien.          |
| l      | `ls -lFh`            | Size, Zeigen type, human readable.                       |
| l1     | `ls -1`              | Display one Datei per line.                             |
| la     | `ls -lAFh`           | All Dateien, Zeigen type, human readable.                  |
| labc   | `ls -lap`            | Auflisten all Dateien in alphabetical order.                  |
| lc     | `wc -l`              | Count the number of lines in the Datei.                 |
| lct    | `ls -lcrh`           | Auflisten Dateien by time, newest first.                      |
| ld     | `ls -ltrh`           | Sort by date, oldest first.                            |
| ldir   | `ls -l               | egrep '^d'`                                            | Auflisten directories only.      |
| ldot   | `l.`                 | Auflisten hidden Dateien.                                     |
| left   | `ls -t -1`           | Auflisten Dateien by date, most recent last.                  |
| right  | `ls -t -1r`          | Auflisten Dateien by date, most recent first.                 |
| lf     | `ls -l               | egrep -v '^d'`                                         | Auflisten Dateien only.            |
| lk     | `ls -lSrh`           | Sort by size, largest first.                           |
| ll     | `la`                 | Long Auflisten, Zeigen almost all, Zeigen type, human readable. |
| lla    | `ls -l -d $PWD/*`    | Auflisten full path of all Dateien in current Verzeichnis.      |
| locale | `locale -a           | grep UTF-8`                                            | Auflisten all available locales. |
| lp     | `sudo lsof -i -T -n` | Auflisten all Öffnen ports.                                   |
| lr     | `ls -lRh`            | Recursive Auflisten, Zeigen type, human readable.             |
| ls     | `ls --color`         | Colorize the output.                                   |
| lS     | `ls -1FSsh`          | Order Dateien Based on Last Modified Time and size.      |
| lt     | `tree`               | Auflisten contents of directories in a tree-like format.    |
| lu     | `ls -lurh`           | Sort by date, oldest first.                            |
| lw     | `ls -xAh`            | Wide Auflisten, Zeigen almost all, Zeigen type, human readable. |
| lx     | `ls                  | sort -k 1,1 -t .`                                      | Sort by extension.          |
| lz     | `ls -lSr`            | Sort by size, smallest first.                          |
