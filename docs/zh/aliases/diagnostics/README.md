---
description: 用于系统诊断、健康检查、漂移检测和 dotfiles 环境自我修复的 shell 别名。
lang: zh-CN
metaTitle: Diagnostics 别名 - Dotfiles (CN)
permalink: /aliases/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: 诊断别名, 系统健康检查, dotfiles doctor, chezmoi verify, 自我修复 shell
---

# Diagnostics 别名

自我修复和系统健康检查工具。

## 概述

诊断别名提供了监控系统健康、检测配置漂移和自动修复 dotfiles 环境的命令。这些工具与 chezmoi 集成，确保本地文件与托管状态保持同步。

## 参考

### 健康和修复

| 别名 | 描述 |
|:---|:---|
| `doc`, `dot-doctor` | 运行系统健康检查脚本（`doctor.sh`）。 |
| `drift`, `dot-drift` | 验证本地文件是否偏离托管状态（`chezmoi verify`）。 |
| `heal`, `dot-heal` | 应用托管状态以修复漂移（`chezmoi apply`）。 |
| `doc-full` | 运行 doctor 并显示扩展路径调试信息。 |
