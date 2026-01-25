---
description: 使用 chmod 别名简化文件和目录权限管理。常见权限模式（如 755、644 等）的快捷方式。
lang: zh-CN
metaTitle: Chmod 别名 - Dotfiles (CN)
permalink: /aliases/chmod/
sidebar: true

meta:
  - name: keywords
    content: chmod 别名, 文件权限, shell 快捷方式, dotfiles, unix 权限
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Chmod 别名 - Dotfiles
  - name: twitter:description
    content: 使用 chmod 别名简化文件和目录权限管理。
  - name: og:title
    content: Chmod 别名 - Dotfiles
  - name: og:description
    content: 使用 chmod 别名简化文件和目录权限管理。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Chmod 别名

管理文件和目录权限的快捷方式。

## 概述

chmod 别名提供了从命令行管理文件和目录权限的简化方式。无需记住数字权限代码，使用直观的别名如 `chmod_755` 或 `chmod_u+x` 快速设置所需的访问模式。

这些别名定义在 `chmod.aliases.sh` 中，由 chezmoi 自动加载。

## 参考

### 常用权限别名

| 别名 | 权限 | 描述 |
|:---|:---|:---|
| `chmod_000` | `----------` | 任何人都没有权限 |
| `chmod_400` | `r--------` | 所有者只读 |
| `chmod_444` | `r--r--r--` | 所有人只读 |
| `chmod_600` | `rw-------` | 所有者读写 |
| `chmod_644` | `rw-r--r--` | 所有者读写，其他人只读 |
| `chmod_666` | `rw-rw-rw-` | 所有人读写 |
| `chmod_755` | `rwxr-xr-x` | 所有者完全权限，其他人读执行 |
| `chmod_764` | `rwxrw-r--` | 所有者完全权限，组读写 |
| `chmod_777` | `rwxrwxrwx` | 所有人完全权限 |

### 所有者权限别名

| 别名 | 描述 |
|:---|:---|
| `chmod_u+x` | 为所有者添加执行权限 |
| `chmod_u-x` | 移除所有者的执行权限 |
| `chmod_u+w` | 为所有者添加写入权限 |
| `chmod_u-w` | 移除所有者的写入权限 |
| `chmod_u+r` | 为所有者添加读取权限 |
| `chmod_u-r` | 移除所有者的读取权限 |

### 组权限别名

| 别名 | 描述 |
|:---|:---|
| `chmod_g+x` | 为组添加执行权限 |
| `chmod_g-x` | 移除组的执行权限 |
| `chmod_g+w` | 为组添加写入权限 |
| `chmod_g-w` | 移除组的写入权限 |
| `chmod_g+r` | 为组添加读取权限 |
| `chmod_g-r` | 移除组的读取权限 |

### 其他人权限别名

| 别名 | 描述 |
|:---|:---|
| `chmod_o+x` | 为其他人添加执行权限 |
| `chmod_o-x` | 移除其他人的执行权限 |
| `chmod_o+w` | 为其他人添加写入权限 |
| `chmod_o-w` | 移除其他人的写入权限 |
| `chmod_o+r` | 为其他人添加读取权限 |
| `chmod_o-r` | 移除其他人的读取权限 |

### 文件类型别名

| 别名 | 描述 |
|:---|:---|
| `chmod_755d` | 将所有目录权限设置为 `rwxr-xr-x` |
| `chmod_644f` | 将所有文件权限设置为 `rw-r--r--` |

### 递归权限函数

`change_permission` 函数递归应用权限并带有确认提示：

```bash
change_permission 755 /path/to/directory -R
```
