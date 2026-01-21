---
description: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
lang: zh-CN
metaTitle: The Configuration aliases - Dotfiles (CN)
permalink: /zh/aliases/configuration/

meta:
  - name: keywords
    content: aliases, configuration, dotfiles, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
  - name: twitter:description
    content: The Configuration aliases are aliases for opening the configuration files for the terminal and the shell.
  - name: twitter:title
    content: The Configuration aliases - Dotfiles (CN)
  - name: og:title
    content: The Configuration aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------------------------- | ------------------------------------------------------------ |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | 打开 the Bash profile in the default text editor.            |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | 打开 the Bash configuration 文件 in the default text editor. |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | 打开 the Git configuration 文件 in the default text editor.  |
| gign  | `${=EDITOR} $HOME/.gitignore`    | 打开 the Git ignore 文件 in the default text editor.         |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | 打开 the Zsh configuration 文件 in the default text editor.  |
