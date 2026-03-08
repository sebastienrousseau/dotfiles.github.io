---
title: 关于 Dotfiles
description: 下一代 shell 配置。高性能、安全且原生支持 AI。由 Chezmoi 管理。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 关于 Dotfiles preview
canonical: /zh/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 关于 Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: 关于 Dotfiles - Dotfiles (CN)
permalink: /zh/about/
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

Dotfiles v0.2.495 将你的终端转变为强大的统一工作空间。与依赖复杂 Makefile 或符号链接脚本的旧式 dotfiles 不同，Dotfiles 使用基于模板的方法，原子化、快速且可重现。

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
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

## 核心命令

`dot` CLI 提供 53 个按类别组织的命令。

### 核心

- `dot apply` — 应用配置更改.
- `dot sync` — 拉取最新仓库状态并应用.
- `dot update` — 更新仓库并预热缓存.
- `dot add` — 将新文件添加到 Chezmoi 源.
- `dot diff` — 显示应用前的待处理更改.
- `dot status` — 显示受管文件的状态.
- `dot remove` — 取消管理文件并删除源条目.
- `dot cd` — 在 Chezmoi 源目录中打开 Shell.
- `dot edit` — 在编辑器中打开受管文件.
- `dot clean-cache` — 清除临时缓存.
- `dot prewarm` — 预填充缓存以加快 Shell 启动.

### 诊断

- `dot doctor` — 验证路径、工具和 Shell 状态.
- `dot heal` — 自动修复缺失或损坏的状态.
- `dot health` — 运行轻量级健康探测.
- `dot verify` — 根据源检查文件完整性.
- `dot scorecard` — 输出配置质量评分.
- `dot snapshot` — 捕获当前状态以供后续比较.
- `dot smoke-test` — 端到端验证核心工具链.
- `dot chaos` — 注入故障以测试自我修复.
- `dot bundle` — 导出可移植的配置包.
- `dot rollback` — 回滚到之前的快照.
- `dot drift` — 检测受管文件的意外更改.
- `dot history` — 显示 apply/sync 历史日志.
- `dot benchmark` — 测量 Shell 启动时间.
- `dot perf` — 分析 Shell 初始化缓慢问题.

### 外观

- `dot theme` — 切换终端配色方案.
- `dot wallpaper` — 设置桌面壁纸（macOS）.
- `dot fonts` — 安装或更新 Nerd Fonts.
- `dot tune` — 调整界面密度和提示符样式.

### 安全

- `dot backup` — 创建加密的配置备份.
- `dot encrypt-check` — 验证静态密钥加密.
- `dot firewall` — 配置主机防火墙规则.
- `dot telemetry` — 控制匿名使用遥测.
- `dot dns-doh` — 启用 DNS-over-HTTPS.
- `dot lock-screen` — 立即锁定屏幕.
- `dot usb-safety` — 限制 USB 大容量存储自动挂载.

### 密钥

- `dot secrets-init` — 初始化密钥后端（age / GPG）.
- `dot secrets` — 列出加密的密钥条目.
- `dot secrets-create` — 创建新的加密密钥.
- `dot ssh-key` — 生成或轮换 SSH 密钥对.
- `dot ssh-cert` — 从 CA 请求 SSH 证书.

### AI

- `dot ai` — 打开交互式 AI 助手会话.
- `dot ai-setup` — 配置 AI 提供商的 API 密钥.
- `dot ai-query` — 向 AI 模型发送一次性提示.
- AI 工具包装器: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### 工具

- `dot tools` — 列出捆绑的 CLI 替代工具及其状态.
- `dot new` — 创建新的别名或函数文件.
- `dot sandbox` — 打开一次性沙盒 Shell.
- `dot keys` — 显示当前键绑定.
- `dot learn` — 启动交互式教程.

### 元信息

- `dot upgrade` — 将 Dotfiles 升级到最新版本.
- `dot packages` — 列出 Dotfiles 管理的已安装包.
- `dot version` / `dot help` — 显示版本或使用信息

## 贡献

加入社区。查看我们的[行为准则][code-of-conduct-url]和[贡献指南][contributing-url]。

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
