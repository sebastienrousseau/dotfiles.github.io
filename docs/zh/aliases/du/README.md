---
description: The Disk usage aliases, are designed to display disk usage statistics. They are used to calculate and print the disk space used by files or directories.
lang: zh-CN
metaTitle: Disk usage aliases - Dotfiles (CN)
permalink: /zh/aliases/du/

meta:
  - name: twitter:card
    content: The Disk usage aliases, are designed to display disk usage statistics. They are used to calculate and print the disk space used by files or directories.
  - name: twitter:description
    content: The Disk usage aliases, are designed to display disk usage statistics. They are used to calculate and print the disk space used by files or directories.
  - name: twitter:title
    content: Disk usage aliases - Dotfiles (CN)
  - name: og:title
    content: Disk usage aliases - Dotfiles (CN)
  - name: og:description
    content: The Disk usage aliases, are designed to display disk usage statistics. They are used to calculate and print the disk space used by files or directories.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Disk usage aliases

The `du.aliases.sh` file creates helpful shortcut aliases for the `du` command.

The Disk usage aliases, are designed to display disk usage statistics. They are
used to calculate and print the disk space used by files or directories.

## Disk usage

[Disk usage](<https://en.wikipedia.org/wiki/Du_(Unix)>) is a command that
estimates file space usage. The `du` command is used to estimate file space
usage. The space used by each file is shown in kilobytes. The space used by each
directory is shown in kilobytes, along with the total space used by all files in
that directory and its subdirectories.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------ | --------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| du    | `du -h`      | 显示 the disk usage of the current 目录.                               |
| du1   | `du -hxd 1   | sort -h`                                                                    | 文件 size of 文件 and directories in current 目录. |
| ducks | `du -cks _._ | sort -rn                                                                    | head -n 10`                                              | Top 10 largest 文件 and directories in current 目录. |
| duh   | `du`         | 文件 size of 文件 and directories.                                         |
| dus   | `du -hs *`   | 文件 size human readable output sorted by size.                             |
| dusym | `du * -hsLc` | 文件 size of 文件 and directories in current 目录 including symlinks. |
| dut   | `dus`        | Total 文件 size of current 目录.                                       |
