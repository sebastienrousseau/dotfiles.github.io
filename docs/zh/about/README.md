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
- **原生安全**：完全原生 SSH 签名（无密钥/无专有）无需第三方代理。
- **交互模式**：新的 `dot learn` 命令引导您了解功能。

## 入门

### :one:先决条件

- **macOS** 或 **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (下载安装程序)
- **Git** (自动管理)

### :two: 安装（单行）

整个套件使用 Chezmoi 通过单个命令安装：

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

此命令将：

1.  安装 `chezmoi` 二进制文件。
2.  克隆存储库到 `~/.local/share/chezmoi`。
3.  计算您当前状态与所需状态之间的差异。
4.  应用配置（安装包、字体和工具）。

### :three: 安装后

安装后，只需输入：

```bash
dot learn
```

这将启动交互式导览，帮助您熟悉新环境。

## 包含内容

您的配置在 `~/.local/share/chezmoi` 中管理。

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship 等)
├── dot_local/           # ~/.local (自定义脚本, bin)
├── dot_ssh/             # SSH 安全
├── dot_zshrc.tmpl       # Zsh 配置
├── provision/           # 安装脚本 (Darwin/Linux)
└── docs/                # 文档
```

## 贡献

我们欢迎贡献！请查看我们的[行为准则][code-of-conduct-url]和[贡献指南][contributing-url]。

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
