---
description: Modern Core 是一套 Rust 驱动工具，用于替代传统 Unix 工具。
lang: zh-CN
metaTitle: Modern Core - Dotfiles (ZH)
permalink: /zh/aliases/modern-core/

meta:
  - name: keywords
    content: modern core, atuin, yazi, zellij, ghostty, rust, shell, tools
---

# Modern Core Tools

在 **v0.2.471** 中，我们引入 "Modern Core" — 一套高性能 Rust 工具。

## Tools Overview

| Tool        | Replaces        | Description                                             | Keybinding      |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | 可同步加密的历史记录与模糊搜索。                        | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | 超快终端文件管理器，支持图片预览。                      | `yy` (alias)    |
| **Zellij**  | `tmux`          | 现代终端多路复用器，布局直观。                          | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | GPU 加速跨平台终端。                                    | N/A             |

## Atuin (Magical History)

Atuin 使用 SQLite 替代 shell 历史记录。

- **Search**：`Ctrl+R` 或 `Up Arrow`。
- **Filter**：自然语言或退出码。
- **Sync**：加密并跨设备同步。

## Yazi (File Manager)

Yazi 是基于 async I/O 的 Rust 终端文件管理器。

- **Launch**：终端输入 `yy`。
- **Features**：
  - 启动迅速。
  - 支持 Sixel/Kitty 图片预览。
  - Lua 插件系统。

## Zellij (Multiplexer)

Zellij 是功能齐全的终端工作区。

- **Launch**：`zellij`（或配置的别名）。
- **Features**：
  - 布局引擎（保存/恢复）。
  - 浮动窗格。
  - 友好的快捷键提示。

## Ghostty (Terminal)

Ghostty 是 Modern Core 的默认终端。

- **Features**：
  - 原生性能（GPU 加速）。
  - 字体连字与现代字体支持。
  - 零闪烁渲染。
