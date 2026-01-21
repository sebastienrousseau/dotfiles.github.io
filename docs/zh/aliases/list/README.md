---
description: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
lang: zh-CN
metaTitle: The List (ls) aliases - Dotfiles (CN)
permalink: /zh/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:title
    content: The List (ls) aliases - Dotfiles (CN)
  - name: og:title
    content: The List (ls) aliases - Dotfiles (CN)
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
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                          | List hidden files.          |
| l      | `ls -lFh`            | Size, show type, human readable.                       |
| l1     | `ls -1`              | Display one file per line.                             |
| la     | `ls -lAFh`           | All files, show type, human readable.                  |
| labc   | `ls -lap`            | List all files in alphabetical order.                  |
| lc     | `wc -l`              | Count the number of lines in the file.                 |
| lct    | `ls -lcrh`           | List files by time, newest first.                      |
| ld     | `ls -ltrh`           | Sort by date, oldest first.                            |
| ldir   | `ls -l               | egrep '^d'`                                            | List directories only.      |
| ldot   | `l.`                 | List hidden files.                                     |
| left   | `ls -t -1`           | List files by date, most recent last.                  |
| right  | `ls -t -1r`          | List files by date, most recent first.                 |
| lf     | `ls -l               | egrep -v '^d'`                                         | List files only.            |
| lk     | `ls -lSrh`           | Sort by size, largest first.                           |
| ll     | `la`                 | Long list, show almost all, show type, human readable. |
| lla    | `ls -l -d $PWD/*`    | List full path of all files in current directory.      |
| locale | `locale -a           | grep UTF-8`                                            | List all available locales. |
| lp     | `sudo lsof -i -T -n` | List all open ports.                                   |
| lr     | `ls -lRh`            | Recursive list, show type, human readable.             |
| ls     | `ls --color`         | Colorize the output.                                   |
| lS     | `ls -1FSsh`          | Order Files Based on Last Modified Time and size.      |
| lt     | `tree`               | List contents of directories in a tree-like format.    |
| lu     | `ls -lurh`           | Sort by date, oldest first.                            |
| lw     | `ls -xAh`            | Wide list, show almost all, show type, human readable. |
| lx     | `ls                  | sort -k 1,1 -t .`                                      | Sort by extension.          |
| lz     | `ls -lSr`            | Sort by size, smallest first.                          |
