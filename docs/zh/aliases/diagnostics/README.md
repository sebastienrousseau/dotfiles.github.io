---
description: diagnostics aliases for Dotfiles
lang: zh-CN
metaTitle: diagnostics aliases - Dotfiles
permalink: /zh/aliases/diagnostics/
---

# Diagnostics 别名

Tools for self-healing and system health checks.

## 🩺 Health & Repair

| Alias | Description |
|-------|-------------|
| `doc`, `dot-doctor` | Run the system health 检查 script (`doctor.sh`). |
| `drift`, `dot-drift` | 验证 if local 文件 have drifted from the managed state (`chezmoi 验证`). |
| `heal`, `dot-heal` | Apply the managed state to repair drift (`chezmoi apply`). |
| `doc-full` | Run doctor with extended path debugging info. |
