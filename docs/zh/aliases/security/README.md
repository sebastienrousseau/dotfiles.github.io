---
description: 用于文件不可变性和配置保护的安全别名。锁定和解锁关键 shell 文件。
lang: zh-CN
metaTitle: Security 别名 - Dotfiles (CN)
permalink: /aliases/security/
sidebar: true

meta:
  - name: keywords
    content: 安全, 不可变性, 文件锁定, shell 别名, dotfiles, 配置保护
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于文件不可变性和配置保护的安全别名。锁定和解锁关键 shell 文件。
  - name: twitter:title
    content: Security 别名 - Dotfiles
  - name: og:title
    content: Security 别名 - Dotfiles
  - name: og:description
    content: 用于文件不可变性和配置保护的安全别名。锁定和解锁关键 shell 文件。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Security 别名

使用不可变性控制保护关键配置文件。

## 概述

这些别名定义在 `security.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

### 不可变性

| 别名 | 描述 |
|:---|:---|
| `lock-configs` | 锁定关键文件以防止修改 |
| `unlock-configs` | 解锁关键文件以进行编辑 |
| `check-locks` | 检查关键文件的锁定状态 |
