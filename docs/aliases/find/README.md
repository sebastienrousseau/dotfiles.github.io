---
description: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
lang: en-GB
metaTitle: Find aliases - Dotfiles (UK)
permalink: /aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:title
    content: Find aliases - Dotfiles (UK)
  - name: og:title
    content: Find aliases - Dotfiles (UK)
  - name: og:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---
# Find Aliases

Manage Find aliases. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Description

These aliases are defined in `find.aliases.sh` and are automatically loaded by `chezmoi`.

## ⚡ Aliases

This code provides a set of command aliases for the `fd` utility that is
an alternative to the `find` command on Unix-based systems.
`fd` is a simple, fast, and user-friendly tool that can be used to
search for files and directories in a given path. These aliases make it
easier to use `fd` by providing simple and memorable commands for common
use cases.
Here are some of the available aliases:
- `fd` is the default alias for `fd --color always` that lists all files
  with colorized output.
- `fda` lists all files with absolute paths.
- `fdc` lists all files with case-insensitive search.
- `fdd` lists all files with details.
- `fde` lists all files with a specified extension.
- `fdf` lists all files while following symbolic links.
- `fdh` shows help for `fd`.
- `fdh` lists all files, including hidden files.
- `fdn` lists all files that match a specified glob.
- `fdo` lists all files with owner information.
- `fds` lists all files with size.
- `fdu` lists all files with exclusion rules.
- `fdv` shows the version of `fd`.
- `fdx` executes a command for each search result.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
