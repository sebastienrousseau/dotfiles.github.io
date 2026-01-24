---
description: 安全别名用于 Dotfiles
lang: zh-CN
metaTitle: 安全别名 - Dotfiles
permalink: /zh/aliases/security/
---
# 安全别名

用于加固环境与管理配置不可变性的工具。

## 🔒 不可变性

| Alias | 说明 |
|-------|------|
| `lock-configs` | 锁定关键文件（如 `.zshrc`），防止修改（`chflags uchg` / `chattr +i`）。 |
| `unlock-configs` | 解锁关键文件以便编辑。 |
| `check-locks` | 检查关键文件的锁定状态。 |

## 🔑 Git 签名

（签名配置见 [Git 别名](../git/README.md)）
