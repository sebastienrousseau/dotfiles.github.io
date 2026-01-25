---
description: 下一代 shell 配置。高性能、安全且原生支持 AI。由 Chezmoi 管理。
lang: zh-CN
metaTitle: 关于 Dotfiles - Dotfiles (CN)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, 配置, 自动化, macos, linux, rust, zellij, shell, 终端
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 下一代 shell 配置。高性能、安全且原生支持 AI。由 Chezmoi 管理。
  - name: twitter:title
    content: 关于 Dotfiles
  - name: og:title
    content: 关于 Dotfiles
  - name: og:description
    content: 下一代 shell 配置。高性能、安全且原生支持 AI。由 Chezmoi 管理。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# 关于 Dotfiles

Shell 配置的现代标准。基于 **Chezmoi** 构建，用于安全的跨平台环境管理。

## 发现

Dotfiles v0.2.474 将你的终端转变为强大的统一工作空间。与依赖复杂 Makefile 或符号链接脚本的旧式 dotfiles 不同，Dotfiles 使用基于模板的方法，原子化、快速且可重现。

### 新功能

- **现代核心** — 高性能 Rust 替代品取代传统 Unix 工具：
  - **Atuin** 用于 shell 历史
  - **Yazi** 用于文件管理
  - **Zellij** 用于终端复用
  - **Ghostty** GPU 加速终端
  - **NeoVim** 用于现代编辑
- **原生安全** — 完全原生 SSH 签名，无需第三方代理
- **交互模式** — 新的 `dot learn` 命令引导你了解各项功能

## 开始使用

### 要求

- **macOS**、**Linux (Ubuntu/Debian)** 或 **Windows (WSL)**
- **Curl** 和 **Git**
- **Chezmoi**（自动安装）
- **Nerd Font**（用于终端图标）

### 安装

运行单个命令安装整个套件：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

安装程序将：

1. 安装 `chezmoi` 二进制文件
2. 克隆仓库
3. 通过 Homebrew (macOS) 或 Apt (Linux) 安装所需软件包
4. 应用你的配置

### 探索

安装后，重启终端并运行：

```bash
dot learn
```

这将启动新环境的交互式导览。

## 自定义

你的配置位于 `~/.local/share/chezmoi`：

```
~/.local/share/chezmoi
├── dot_zshenv              # Shell 入口点
├── dot_config/             # XDG 基础配置 (~/.config)
│   ├── atuin/              # Shell 历史
│   ├── ghostty/            # 终端模拟器
│   ├── git/                # Git 配置
│   ├── yazi/               # 文件管理器
│   ├── zellij/             # 终端复用器
│   ├── zsh/                # Zsh 配置
│   └── shell/              # 共享别名和路径
├── provision/              # 生命周期脚本
├── install.sh              # 通用安装程序
└── docs/                   # 文档
```

## 贡献

加入社区。查看我们的[行为准则][code-of-conduct-url]和[贡献指南][contributing-url]。

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
