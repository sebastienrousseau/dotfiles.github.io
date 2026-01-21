---
description: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
lang: zh-CN
metaTitle: Interactive aliases - Dotfiles (CN)
permalink: /zh/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:description
    content: The Interactive aliases are a collection of aliases that allow you to interact with your shell and terminal in a more interactive way.
  - name: twitter:title
    content: Interactive aliases - Dotfiles (CN)
  - name: og:title
    content: Interactive aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------------------- | ------------------------------------------------------------ |
| bin   | `rm -fr ${HOME}/.Trash` | 移除 all 文件 in the trash.                               |
| cp    | `cp -vi`                | 复制 文件 and directories.                                  |
| del   | `rm -rfvi`              | 移除 a 文件 or 目录.                                  |
| ln    | `ln -vi`                | Interactive symbolic link.                                   |
| mv    | `mv -vi`                | 移动 文件 interactively (ask before overwrite) and verbose. |
| rm    | `rm -vi`                | Prompts for every 文件 before removing.                      |
| zap   | `rm -vi`                | 移除 文件 interactively (ask before overwrite).           |
