---
description: Dotfiles 的诊断别名
lang: zh-CN
metaTitle: 诊断别名 - Dotfiles (CN)
permalink: /zh/aliases/diagnostics/
---

# 诊断别名

用于自我修复和系统健康检查的工具。

## 🩺 健康与修复

| 别名                 | 描述                                             |
| -------------------- | ------------------------------------------------ |
| `doc`, `dot-doctor`  | 运行系统健康检查脚本 (`doctor.sh`)。             |
| `drift`, `dot-drift` | 验证本地文件是否偏离了托管状态 (`chezmoi verify`)。 |
| `heal`, `dot-heal`   | 应用托管状态以修复偏差 (`chezmoi apply`)。       |
| `doc-full`           | 运行带有扩展路径调试信息的 doctor。              |
