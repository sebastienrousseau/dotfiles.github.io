---
description: 权限别名用于 Dotfiles
lang: zh-CN
metaTitle: 权限别名 - Dotfiles
permalink: /zh/aliases/permission/
---
# 权限别名

管理权限别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `permission.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

此代码提供文件权限相关别名。
- `000` 用户/组/其他均无读写执行权限。
- `400` 用户可执行，其余无读写。
- `444` 所有人可读，不可写/执行。
- `600` 用户可读写。
- `644` 用户可写，所有人可读。
- `666` 所有人可读写。
- `755` 用户可读写执行，组/其他可读执行。
- `764` 用户与组可读写，其他可读。
- `777` 所有人可读写执行。
- `chgrp` 修改组所有权。
- `chgrpr` 递归修改组所有权。
- `chgrpu` 递归修改组为当前用户。
- `chmod` 修改文件模式位。
- `chmodr` 递归修改文件模式位。
- `chmodu` 递归修改为当前用户。
- `chmox` 使文件可执行。
- `chown` 修改所有者和组。
- `chownr` 递归修改所有者和组。
- `chownu` 递归修改为当前用户。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
