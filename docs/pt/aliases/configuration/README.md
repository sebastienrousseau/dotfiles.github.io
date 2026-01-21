---
description: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
lang: pt-BR
metaTitle: The Configuration aliases - Dotfiles (BR)
permalink: /pt/aliases/configuration/

meta:
  - name: keywords
    content: aliases, configuration, dotfiles, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
  - name: twitter:description
    content: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
  - name: twitter:title
    content: The Configuration aliases - Dotfiles (BR)
  - name: og:title
    content: The Configuration aliases - Dotfiles (BR)
  - name: og:description
    content: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Configuration aliases

The `configuration.aliases.sh` file creates helpful shortcut aliases for opening
the configuration files for the terminal and the shell.

> [!TIP]
> **New in v0.2.471**: You can now use the `dot` command to manage your configuration.
> Try `dot learn` for an interactive tour or `dot doctor` to verify your setup.

## Configuration

| Alias | Comando               | Descrição                                                                  |
| ----- | -------------------------------- | ------------------------------------------------------------ |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | Open the Bash profile in the default text editor.            |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | Open the Bash configuration file in the default text editor. |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | Open the Git configuration file in the default text editor.  |
| gign  | `${=EDITOR} $HOME/.gitignore`    | Open the Git ignore file in the default text editor.         |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | Open the Zsh configuration file in the default text editor.  |
