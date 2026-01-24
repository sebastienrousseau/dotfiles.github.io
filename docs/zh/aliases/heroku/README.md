---
description: Heroku 别名用于 Dotfiles
lang: zh-CN
metaTitle: Heroku 别名 - Dotfiles
permalink: /zh/aliases/heroku/
---
# Heroku 别名

管理 Heroku 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `heroku.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

这些别名用于管理 Heroku 应用及其相关资源。
- `hk` Heroku 通用快捷方式。
- `hkb` 在浏览器中打开当前应用。
- `hkba` 显示应用的 addons。
- `hkconf` 显示应用配置。
- `hkcs` 缩放应用的 dyno。
- `hkinfo` 显示应用信息。
- `hkl` 显示最近日志。
- `hklf` 实时跟随日志。
- `hklt` 显示日志并 tail。
- `hkop` 打开 Heroku 控制台。
- `hkps` 列出进程。
- `hkpsa` 列出应用。
- `hkpsoff` 停止所有 dyno。
- `hkpso` 启动 dyno。
- `hkrestart` 重启应用。
- `hkstack` 显示应用栈。
- `hkstackset` 设置应用栈。
- `hkt` 运行测试。
- `hktl` 列出 pipelines。
- `hktla` 列出 pipeline 中的应用。
- `hktop` 显示进程使用情况。
- `hkreleases` 列出 releases。
- `hkrl` 提升当前 release。
- `hkrb` 回滚到上一个 release。
- `hkrf` 强制 release（失败回滚）。
- `hkrfi` 强制 release（回滚，交互式）。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
