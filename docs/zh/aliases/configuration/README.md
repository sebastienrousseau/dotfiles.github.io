---
description: 配置别名用于打开终端和 shell 的配置文件。
lang: zh-CN
metaTitle: 配置别名 - Dotfiles (CN)
permalink: /zh/aliases/configuration/
---

# 配置别名

`configuration.aliases.sh` 文件创建了有用的快捷别名，用于打开终端和 shell 的配置文件。

> [!TIP]
> **v0.2.471 新功能**: 您现在可以使用 `dot` 命令来管理您的配置。
> 尝试 `dot learn`进行交互式导览，或 `dot doctor` 验证您的设置。

## 配置

| 别名  | 命令                             | 描述                                   |
| ----- | -------------------------------- | -------------------------------------- |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | 在默认文本编辑器中打开 Bash profile。  |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | 在默认文本编辑器中打开 Bash 配置文件。 |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | 在默认文本编辑器中打开 Git 配置文件。  |
| gign  | `${=EDITOR} $HOME/.gitignore`    | 在默认文本编辑器中打开 Git 忽略文件。  |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | 在默认文本编辑器中打开 Zsh 配置文件。  |
