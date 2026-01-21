---
description: Dotfiles 如何管理您的 \$PATH 层次结构，以确保以正确的顺序加载正确的工具。
lang: zh-CN
metaTitle: 路径 (Paths) - Dotfiles (CN)
permalink: /zh/paths/

meta:
  - name: keywords
    content: 路径, 环境, 变量, 层次结构, dotfiles, chezmoi
---

# 路径管理

Dotfiles 最关键的角色之一是管理您的 `$PATH` 环境变量。这决定了当您输入命令时执行工具的哪个版本。

我们遵守严格的层次结构，以确保 macOS 和 Linux 之间的一致性。

## 层次结构

从最高优先级（首先检查）到最低：

1.  **本地二进制文件** (`~/.local/bin`)
    - **优先级**: 1
    - **目的**: 自定义用户脚本，`dot` CLI，以及通过 `pipx` 或其他用户级包管理器安装的工具。
    - **原因**: 允许您用自己的版本覆盖系统或 Homebrew 工具。

2.  **应用程序二进制文件** (macOS)
    - **优先级**: 2
    - **目的**: 来自已安装应用程序的二进制文件（例如，VS Code，iTerm）。

3.  **语言运行时**
    - **Node.js**: `~/.node_modules/bin`
    - **Go**: `~/go/bin`
    - **Rust (Cargo)**: `~/.cargo/bin`
    - **Ruby (用户 Gems)**: `~/.gem/ruby/bin`
    - **Python (Pipx)**: `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    - **优先级**: 3
    - **目的**: macOS/Linux 的主要包管理器。
    - **注意**: 我们特意在系统路径*之前*加载 Homebrew，以允许升级系统工具（如 `git` 或 `curl`）。

5.  **系统路径** (`/usr/bin`, `/bin`)
    - **优先级**: 最低
    - **目的**: 默认操作系统工具。
    - **原因**: 基本实用程序的后备。

## 去重

Dotfiles 在保留优先顺序的同时自动去重您的 `$PATH`。这可以防止 `$PATH` 变量在生成嵌套 Shell 时无限增长。
