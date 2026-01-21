---
description: Dotfiles 的权限别名
lang: zh-CN
metaTitle: 权限别名 - Dotfiles (CN)
permalink: /zh/aliases/permission/
---

# 权限别名

管理权限别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名在 `permission.aliases.sh` 中定义，并由 `chezmoi` 自动加载。

## ⚡ 别名

此代码提供了一组文件权限的别名。

- `000` 将权限设置为用户、组和其他人均无法读取、写入或执行。
- `400` 将权限设置为无法读取或写入，但仅允许用户执行。
- `444` 将权限设置为无法写入或执行，但允许所有人读取。
- `600` 将权限设置为仅用户可读取和写入。
- `644` 将权限设置为所有人可读取，但仅用户可写入。
- `666` 将权限设置为所有人可读取和写入。
- `755` 将权限设置为用户可读取、写入和执行，但组和其他人仅可读取和执行。
- `764` 将权限设置为用户和组可读取和写入，但其他人仅可读取。
- `777` 将权限设置为所有人可读取、写入和执行。
- `chgrp` 更改文件或目录的组所有权。
- `chgrpr` 递归更改文件或目录的组所有权。
- `chgrpu` 将文件或目录的组所有权递归更改为当前用户。
- `chmod` 更改文件模式位。
- `chmodr` 递归更改文件模式位。
- `chmodu` 将文件模式位递归更改为当前用户。
- `chmox` 使文件可执行。
- `chown` 更改文件所有者和组。
- `chownr` 递归更改文件所有者和组。
- `chownu` 将文件所有者和组递归更改为当前用户。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
