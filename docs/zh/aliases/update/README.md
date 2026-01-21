---
description: 更新别名可以为更新操作系统和安装的软件创建有用的快捷方式。它有助于保护和增强当前的 Dotsfile 安装，以此来防止安全漏洞，添加新功能并修复关键漏洞。
lang: zh-CN
metaTitle: 更新 (Update) 别名 - Dotfiles (CN)
permalink: /zh/aliases/update/
---

# 更新别名

`update.aliases.sh` 文件为更新操作系统和软件创建了有用的快捷别名。

更新有助于保护和增强当前的 Dotfiles 安装，以防止安全漏洞，添加新功能并修复关键错误。

## 更新 (Update)

为了获得更大的控制权，更新过程被合并到一个命令中，该命令将：

1. 更新操作系统和软件包。
2. 更新到最新版本的 Dotfiles。
3. 这也将更新 `update.aliases.sh` 文件，因此您将始终拥有最新版本的更新程序。

## 平台

### Linux

`upd` 别名已适应在 Linux 上工作。它将通过 `apt` 包管理器更新基于 Debian 的 Linux 发行版，并通过 pnpm、rustup (Rust) 和 gem (Ruby) 更新其他依赖项。

| 别名 | 命令                                                                                                               | 描述                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| upd  | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | 基于 Debian 的 Linux 操作系统的更新命令。 |

### macOS

`upd` 别名也可用于 macOS。它将通过 `softwareupdate` 命令行工具更新 macOS，并使用 pnpm、Homebrew、mas、rustup 和 gem 包管理器管理其依赖项。

| 别名 | 命令                                                                                                                                                                                               | 描述       |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| upd  | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | 更新系统。 |
