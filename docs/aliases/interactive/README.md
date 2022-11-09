---
description: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
lang: en-GB
metaTitle: Interactive aliases - Dotfiles (UK)
permalink: /aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:description
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:title
    content: Interactive aliases - Dotfiles (UK)
  - name: og:title
    content: Interactive aliases - Dotfiles (UK)
  - name: og:description
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Interactive aliases

The `interactive.aliases.sh` file creates helpful shortcut aliases for enabling
interactive mode to critical common functionality in the terminal.

The Interactive aliases are a collection of aliases that allow you to interact
with your shell and terminal in a more interactive way.

## Interactive mode

[Interactive mode](https://en.wikipedia.org/wiki/Interactive_mode) is a mode in
which the user is prompted for input before the command is executed.

This is a useful feature for commands such as `cp`, `mv`, `rm`, and `ln` that
can be used to overwrite files or directories.

| Alias | Command | Description |
| ----- | ----- | ----- |
| bin | `rm -fr ${HOME}/.Trash` | Remove all files in the trash. |
| cp  | `cp -vi` | Copy files and directories. |
| del | `rm -rfvi` | Remove a file or directory. |
| ln  | `ln -vi` | Interactive symbolic link. |
| mv  | `mv -vi` | Move files interactively (ask before overwrite) and verbose. |
| rm  | `rm -vi` | Prompts for every file before removing. |
| zap | `rm -vi` | Remove files interactively (ask before overwrite). |
