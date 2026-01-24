---
description: Update 别名用于为操作系统和已安装软件提供更新快捷方式，帮助加固并改善当前 Dotfiles 安装，修复安全问题、增加新功能并修复关键错误。
lang: zh-CN
metaTitle: Update 别名 - Dotfiles (ZH)
permalink: /zh/aliases/update/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Update 别名用于为操作系统和已安装软件提供更新快捷方式，帮助加固并改善当前 Dotfiles 安装，修复安全问题、增加新功能并修复关键错误。
  - name: twitter:description
    content: Update 别名用于为操作系统和已安装软件提供更新快捷方式，帮助加固并改善当前 Dotfiles 安装，修复安全问题、增加新功能并修复关键错误。
  - name: twitter:title
    content: Update 别名 - Dotfiles (ZH)
  - name: og:title
    content: Update 别名 - Dotfiles (ZH)
  - name: og:description
    content: Update 别名用于为操作系统和已安装软件提供更新快捷方式，帮助加固并改善当前 Dotfiles 安装，修复安全问题、增加新功能并修复关键错误。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Update 别名

管理 Update 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `update.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

此代码为 macOS 与 Linux 的软件更新提供一组别名。
### macOS
- `upd` 更新 macOS 软件、Homebrew 包、Homebrew Casks、Mac App Store 应用、
   Rust stable 工具链、Ruby gems、Python 包和 Node.js 包。
### Linux
- `open` 以用户首选应用打开文件或 URL。
- `pbcopy` 复制到剪贴板。
- `pbpaste` 从剪贴板粘贴。
- `upd` 更新 Linux 包、清理包缓存、更新 pnpm 包、更新 Rust stable 工具链、
  更新 Ruby gems、更新 Python 包和 Node.js 包。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
