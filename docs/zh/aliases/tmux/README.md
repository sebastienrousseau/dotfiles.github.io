---
description: Tmux 别名是一组别名，允许您与 `tmux` 命令交互。Tmux 是一个工具，允许您在单个窗口中运行多个终端会话。
lang: zh-CN
metaTitle: Tmux 别名 - Dotfiles (CN)
permalink: /zh/aliases/tmux/
---

# Tmux 别名

`tmux.aliases.sh` 文件为许多常用的 [tmux](https://github.com/tmux/tmux/wiki) 命令创建了有用的快捷别名。

Tmux 别名是一组别名，允许您与 `tmux` 命令交互。Tmux 是一个工具，允许您在单个窗口中运行多个终端会话。

> [!NOTE]
> **Modern Core**: 在 v0.2.471+ 中，我们引入了 [Zellij](/zh/aliases/modern-core/#zellij) 作为 Tmux 的现代、基于 Rust 的替代品。
> Tmux 仍然受支持，但建议新用户使用 Zellij。

## Tmux

[Tmux](https://github.com/tmux/tmux/wiki) 是一个终端复用器。它允许您在一个终端中轻松地在多个程序之间切换，分离它们（它们在后台保持运行）并将它们重新附加到不同的终端。

| 别名 | 命令                     | 描述                         |
| ---- | ------------------------ | ---------------------------- |
| tm   | `tmux`                   | 启动 tmux。                  |
| tma  | `tmux attach-session`    | 附加到 tmux 会话。           |
| tmat | `tmux attach-session -t` | 附加到指定名称的 tmux 会话。 |
| tmks | `tmux kill-session -a`   | 终止所有 tmux 会话。         |
| tml  | `tmux list-sessions`     | 列出 tmux 会话。             |
| tmn  | `tmux new-session`       | 启动新的 tmux 会话。         |
| tmns | `tmux new -s`            | 启动指定名称的新 tmux 会话。 |
| tms  | `tmux new-session -s`    | 启动新的 tmux 会话。         |
