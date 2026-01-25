---
description: 使用 shell 别名即时打开 shell、Git、SSH 和服务器配置文件。
lang: zh-CN
metaTitle: Configuration 别名 - Dotfiles (CN)
permalink: /aliases/configuration/
sidebar: true

meta:
  - name: keywords
    content: 配置别名, shell 配置, dotfiles, bash 别名, zsh 别名, git 配置, ssh 配置
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Configuration 别名 - Dotfiles
  - name: twitter:description
    content: 使用 shell 别名即时打开 shell、Git、SSH 和服务器配置文件。
  - name: og:title
    content: Configuration 别名 - Dotfiles
  - name: og:description
    content: 使用 shell 别名即时打开 shell、Git、SSH 和服务器配置文件。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Configuration 别名

使用单个命令在默认编辑器中打开配置文件。

## 概述

配置别名提供了打开常用编辑配置文件的快捷方式。这些别名定义在 `configuration.aliases.sh` 中，由 chezmoi 自动加载。

每个别名都会在系统默认文本编辑器中启动相应文件，无需记住文件路径或输入冗长的命令。

## 参考

### Shell 配置

| 别名 | 描述 |
|:---|:---|
| `bshrc` | 打开 Bash 配置文件 (~/.bashrc) |
| `bshp` | 打开 Bash profile (~/.bash_profile) |
| `zshrc` | 打开 Zsh 配置文件 (~/.zshrc) |
| `zshp` | 打开 Zsh profile (~/.zprofile) |

### 版本控制

| 别名 | 描述 |
|:---|:---|
| `gcfg` | 打开 Git 配置文件 (~/.gitconfig) |
| `gign` | 打开 Git ignore 文件 (~/.gitignore) |

### 网络和服务器

| 别名 | 描述 |
|:---|:---|
| `apconf` | 打开 Apache 配置文件 |
| `ngconf` | 打开 Nginx 配置文件 |
| `sshconf` | 打开 SSH 配置文件 (~/.ssh/config) |
| `hosts` | 打开 hosts 文件 (/etc/hosts) |

### 开发工具

| 别名 | 描述 |
|:---|:---|
| `dockcomp` | 打开 Docker Compose 文件 |
| `eddir` | 在默认编辑器中打开当前目录 |
