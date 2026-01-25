---
description: 用于法规合规、隐私执行和终端环境配置审计的 shell 别名。
lang: zh-CN
metaTitle: Compliance 别名 - Dotfiles (CN)
permalink: /aliases/compliance/
sidebar: true

meta:
  - name: keywords
    content: 合规别名, 隐私模式, 遥测禁用, 审计追踪, dotfiles, shell
---

# Compliance 别名

用于法规合规和隐私执行的 Shell 工具。

## 概述

合规别名提供了管理隐私和维护 shell 环境审计追踪的基本控制。这些别名帮助禁用常见 CLI 工具的遥测并跟踪配置更改以满足合规要求。

## 参考

### 控制

| 别名 | 描述 |
|:---|:---|
| `privacy-mode` | 为当前会话禁用 CLI 工具（Homebrew、Dotnet、Azure 等）的遥测。 |
| `dot-audit` | 显示最近的配置审计追踪（Git 历史或审计日志）。 |
