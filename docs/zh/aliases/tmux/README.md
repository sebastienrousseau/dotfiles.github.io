---
description: Tmux 别名是一组用于与 `tmux` 交互的别名。Tmux 允许在单个窗口中运行多个终端会话。
lang: zh-CN
metaTitle: Tmux 别名 - Dotfiles (ZH)
permalink: /zh/aliases/tmux/

meta:
  - name: keywords
    content: aliases, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Tmux 别名是一组用于与 `tmux` 交互的别名。Tmux 允许在单个窗口中运行多个终端会话。
  - name: twitter:description
    content: Tmux 别名是一组用于与 `tmux` 交互的别名。Tmux 允许在单个窗口中运行多个终端会话。
  - name: twitter:title
    content: Tmux 别名 - Dotfiles (ZH)
  - name: og:title
    content: Tmux 别名 - Dotfiles (ZH)
  - name: og:description
    content: Tmux 别名是一组用于与 `tmux` 交互的别名。Tmux 允许在单个窗口中运行多个终端会话。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Tmux 别名

管理 Tmux 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `tmux.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

## 🆃🅼🆄🆇 🅲🅾🅽🅵🅸🅶🆄🆁🅰🆃🅸🅾🅽
一套完整的 tmux 配置，面向高效与易用。配置以模块化文件组织：
- **default**：核心设置与插件配置
- **display**：视觉与行为设置
- **linux**：平台相关功能
- **navigation**：完整快捷键
- **panes**：面板设置
- **theme**：状态栏与视觉样式
### 关键特性
- 现代配色并针对 OS 设置状态栏
- 直观快捷键，Ctrl+a 作为前缀键
- 完整窗口与面板管理
- tmux-resurrect / tmux-continuum 进行会话持久化
- 可滚动帮助菜单（Ctrl+a ?）
- 鼠标支持，便于导航
### 导航与快捷键
按 `Ctrl+a ?` 查看所有快捷键，主要功能：
- **窗口管理**：分割、创建、导航、重命名
- **面板导航**：使用 Vim 风格 h/j/k/l
- **会话管理**：创建、重命名、切换会话
- **复制模式**：Vim 风格选择、搜索与剪贴板集成

常用 tmux 操作别名：
| Alias | 说明 |
|-------|------|
| `tm`  | 启动 tmux |
| `tma` | 连接最近会话 |
| `tmat` | 连接指定会话 |
| `tmks` | 结束除当前外的所有会话 |
| `tmka` | 结束所有会话（服务端） |
| `tml` | 列出所有会话 |
| `tmn` | 新建无名会话 |
| `tms` | 新建有名会话 |
| `tmr` | 重新加载 tmux 配置 |
| `tmls` | 列出窗口 |
| `tmlp` | 列出面板 |
| `tmi` | 显示 tmux 信息 |
## 安装
1. 克隆仓库：
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git ~/.dotfiles
   ```
2. 运行安装脚本：
   ```bash
   cd ~/.dotfiles && ./install.sh
   ```
3. 安装 tmux 插件管理器（如未安装）：
   ```bash
   git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
   ```
4. 打开 tmux，按 `Ctrl+a I` 安装插件
## 使用
启动新 tmux 会话：
```bash
tmux
```
或使用任意别名。
## 许可证
MIT

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
