---
description: macOS 别名用于 Dotfiles
lang: zh-CN
metaTitle: macOS 别名 - Dotfiles
permalink: /zh/aliases/macOS/
---
# macOS 别名

管理 macOS 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `macOS.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

- `clds` 递归删除 .DS_Store。
- `clls` 清理 LaunchServices 以移除“打开方式”重复项。
- `finderHideHidden` 在 Finder 隐藏隐藏文件。
- `finderShowHidden` 在 Finder 显示隐藏文件。
- `hideDesktopIcons` 隐藏桌面图标。
- `iphone` 打开设备模拟器。
- `lockScreen` 锁屏。
- `ofd` 在 Finder 打开当前目录。
- `purge` 清理 Xcode DerivedData。
- `safariSafeMode` 以安全模式启动 Safari。
- `showDesktopIcons` 显示桌面图标。
- `screensaverDesktop` 在桌面运行屏保。
- `trash` 清空所有卷的废纸篓。
- `vp` 验证 macOS 权限。
- `vv` 验证 macOS 卷。
- `wifiOn` 打开 Wi-Fi。
- `wifiOff` 关闭 Wi-Fi。
- `xcode` 启动 XCode。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
