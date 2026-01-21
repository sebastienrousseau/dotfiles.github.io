---
description: Modern Core 是一套 Rust 驱动的工具，用更快、更智能的替代品取代了旧版 Unix 实用程序。
lang: zh-CN
metaTitle: Modern Core - Dotfiles (CN)
permalink: /zh/aliases/modern-core/
---

# Modern Core 工具

在 **v0.2.471** 中，我们引入了“Modern Core”——一套高性能、Rust 驱动的工具，旨在取代旧版 Unix 实用程序。

## 工具概述

| 工具        | 替换对象        | 描述                                     | 快捷键          |
| :---------- | :-------------- | :--------------------------------------- | :-------------- |
| **Atuin**   | `history`       | 可同步、加密的 shell 历史记录，带模糊搜索。 | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | 极速终端文件管理器，带图像预览。         | `yy` (别名)     |
| **Zellij**  | `tmux`          | 具有直观布局的现代终端多路复用器。       | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | GPU 加速、跨平台终端模拟器。             | N/A             |

## Atuin (神奇历史)

Atuin 将现有的 shell 历史记录替换为 SQLite 数据库。

- **搜索**: 按 `Ctrl+R` 或 `向上箭头` 打开搜索 UI。
- **过滤**: 输入自然语言查询或特定退出代码。
- **同步**: 您的历史记录经过加密并在您的设备之间同步。

## Yazi (文件管理器)

Yazi 是一个用 Rust 编写的终端文件管理器，基于异步 I/O。

- **启动**: 在终端中输入 `yy`。
- **功能**:
  - 即时启动。
  - Sixel/Kitty 图像预览支持。
  - Lua 插件系统。

## Zellij (多路复用器)

Zellij 是一个包含电池的终端工作区。

- **启动**: 输入 `zellij`（或使用您配置的别名）。
- **功能**:
  - 布局引擎（保存/恢复工作区布局）。
  - 浮动窗格。
  - 用户友好的快捷键（显示在屏幕上）。

## Ghostty (终端)

Ghostty 是 Modern Core 的默认终端模拟器。

- **功能**:
  - 原生性能（GPU 加速）。
  - 连字和现代字体支持。
  - 零闪烁渲染。
