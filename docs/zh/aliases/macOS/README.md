---
description: 用于 macOS 系统管理、Finder 控制和 Dotfiles 维护任务的 shell 别名。
lang: zh-CN
metaTitle: macOS 别名 - Dotfiles (CN)
permalink: /aliases/macOS/
sidebar: true

meta:
  - name: keywords
    content: macOS 别名, shell 快捷方式, Finder 别名, Mac 终端, dotfiles
---

# macOS 别名

用于 macOS 系统管理和维护的 Shell 快捷方式。

## 概述

这些别名定义在 `macOS.aliases.sh` 中，由 chezmoi 自动加载。它们提供对常见 macOS 操作的快速访问，包括 Finder 控制、系统维护和开发工具。

## 参考

### 系统管理

| 别名 | 描述 |
|:---|:---|
| `lockScreen` | 锁定屏幕 |
| `wifiOn` | 打开 Wi-Fi |
| `wifiOff` | 关闭 Wi-Fi |
| `vp` | 验证 macOS 权限 |
| `vv` | 验证 macOS 卷 |

### Finder

| 别名 | 描述 |
|:---|:---|
| `ofd` | 在 Finder 中打开当前目录 |
| `finderShowHidden` | 在 Finder 中显示隐藏文件 |
| `finderHideHidden` | 在 Finder 中隐藏隐藏文件 |
| `showDesktopIcons` | 显示桌面上的所有图标 |
| `hideDesktopIcons` | 隐藏桌面上的所有图标 |

### 清理

| 别名 | 描述 |
|:---|:---|
| `clds` | 递归删除 .DS_Store 文件 |
| `clls` | 清理 LaunchServices 以删除"打开方式"菜单中的重复项 |
| `trash` | 清空所有挂载卷和主硬盘上的垃圾桶 |

### 开发工具

| 别名 | 描述 |
|:---|:---|
| `xcode` | 启动 Xcode |
| `purge` | 清除 Xcode DerivedData |
| `iphone` | 打开设备模拟器 |
| `safariSafeMode` | 以安全模式启动 Safari |

### 显示

| 别名 | 描述 |
|:---|:---|
| `screensaverDesktop` | 在桌面上运行屏幕保护程序 |
