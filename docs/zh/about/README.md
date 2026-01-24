---
description: 下一代配置文件，由 Chezmoi 管理。高性能、安全且原生支持 AI。
lang: zh-CN
metaTitle: 关于 - Dotfiles (CN)
permalink: /zh/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, 配置,自动化, macos, linux, rust, zellij
---

# 关于 Dotfiles v0.2.471

## 简介

Dotfiles 代表了环境配置的现代标准。它建立在 **Chezmoi** 之上，提供了一种安全、可靠且跨平台的方式来管理您的 Shell、应用程序和机密。

与依赖复杂的 Makefile 或符号链接脚本的旧 Dotfiles 不同，Dotfiles 使用基于模板的方法，既原子又快速。

## v0.2.471 的新功能

- **现代核心**：我们将旧的 Unix 工具替换为高性能的 Rust 替代品：
  - **Atuin** (替换 `history`)
  - **Yazi** (替换 `ls`/`ranger`)
  - **Zellij** (替换 `tmux`)
  - **Ghostty** (现代 GPU 加速终端)
  - **NeoVim**（基于 Vim 的现代编辑器）
- **原生安全**：完全原生 SSH 签名（无密钥/无专有）无需第三方代理。
- **交互模式**：新的 `dot learn` 命令引导您了解功能。

## 入门

### :one:先决条件

- **macOS**、**Linux（Ubuntu/Debian）** 或 **Windows（WSL）**
- **Curl**（下载安装脚本）
- **Git**
- **Chezmoi**（脚本会在缺失时安装）
- **Nerd Font**（用于终端图标）

### :two: 安装（单行）

整个套件使用 Chezmoi 通过单个命令安装：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.471/install.sh)"
```

此命令将：

1.  安装 `chezmoi` 二进制文件。
2.  克隆存储库。
3.  **自动**安装所需软件包（macOS 使用 Homebrew，Linux 使用 Apt）。
4.  应用配置。

### :three: 安装后

安装后，先重启终端，然后输入：

```bash
dot learn
```

这将启动交互式导览，帮助您熟悉新环境。

## 包含内容

您的配置在 `~/.local/share/chezmoi` 中管理。

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Shell 入口（XDG 引导）
├── dot_config/             # XDG 基础配置（映射到 ~/.config）
│   ├── atuin/              # Shell 历史（config.toml）
│   ├── ghostty/            # 终端模拟器（config）
│   ├── git/                # Git 配置（config）
│   ├── yazi/               # 文件管理器（yazi.toml）
│   ├── zellij/             # 复用器（config.kdl）
│   ├── zsh/                # Zsh 配置（.zshrc）
│   └── shell/              # 共享 Shell 配置（别名、路径）
├── provision/              # 生命周期脚本（安装包、字体）
├── install.sh              # 通用安装脚本
├── README.md               # 文档
└── docs/                   # 详细文档
```

## 贡献

我们欢迎贡献！请查看我们的[行为准则][code-of-conduct-url]和[贡献指南][contributing-url]。

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
