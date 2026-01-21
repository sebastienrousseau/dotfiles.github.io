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
| `doc`, `dot-doctor` | Run the system health check script (`doctor.sh`). |
| `drift`, `dot-drift` | Verify if local files have drifted from the managed state (`chezmoi verify`). |
| `heal`, `dot-heal` | Apply the managed state to repair drift (`chezmoi apply`). |
| `doc-full` | Run doctor with extended path debugging info. |
