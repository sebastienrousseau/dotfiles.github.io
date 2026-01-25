---
title: "Legal Aliases: Open Source Compliance Tools"
description: "Shell aliases for license scanning, copyright headers, and attribution management in your dotfiles."
lang: en-GB
metaTitle: "Legal Aliases | Dotfiles"
permalink: /aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "legal aliases, license scanning, copyright headers, open source compliance, dotfiles"
---

# Legal Aliases

Shell tools for managing open source compliance, license scanning, and attribution.

## Overview

The legal aliases provide a streamlined workflow for maintaining open source compliance across your projects. These tools handle license scanning, copyright header management, and dependency attribution.

## Reference

### License Scanning

| Alias | Description | Type |
|-------|-------------|------|
| `fossology-start` | Start local FOSSology server on port 8081 | Docker |
| `fossology-stop` | Stop FOSSology server | Docker |
| `license-scan` | Quick license scan of current directory via Trivy | Binary |

### Copyright Headers

| Alias | Description | Type |
|-------|-------------|------|
| `add-headers` | Recursively add MIT license headers to all source files | Docker (google/addlicense) |

### Attribution

| Alias | Description | Type |
|-------|-------------|------|
| `gen-notice` | Generate a NOTICE file for dependencies (Go support initially) | Docker |

### Contribution

| Alias | Description | Type |
|-------|-------------|------|
| `check-cla` | Watch GitHub PR checks including CLA status | CLI (gh) |

## Requirements

- **Docker** - Required for isolation of compliance tools
- **GitHub CLI (gh)** - Required for PR and CLA checking
- **Trivy** - Automatically installed or suggested for fast scanning
