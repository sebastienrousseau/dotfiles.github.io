---
title: "Diagnostics Aliases: System Health and Self-Healing Commands"
description: "Shell aliases for system diagnostics, health checks, drift detection, and self-healing in your dotfiles environment."
lang: en-GB
metaTitle: "Diagnostics Aliases | Dotfiles"
permalink: /aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "diagnostics aliases, system health check, dotfiles doctor, chezmoi verify, self-healing shell"
---

# Diagnostics Aliases

Tools for self-healing and system health checks.

## Overview

The diagnostics aliases provide commands for monitoring system health, detecting configuration drift, and automatically repairing your dotfiles environment. These utilities integrate with chezmoi to ensure your local files remain in sync with your managed state.

## Reference

### Health and Repair

| Alias | Description |
|-------|-------------|
| `doc`, `dot-doctor` | Run the system health check script (`doctor.sh`). |
| `drift`, `dot-drift` | Verify if local files have drifted from the managed state (`chezmoi verify`). |
| `heal`, `dot-heal` | Apply the managed state to repair drift (`chezmoi apply`). |
| `doc-full` | Run doctor with extended path debugging info. |
