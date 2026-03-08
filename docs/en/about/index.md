---
title: About Dotfiles | Dotfiles
description: Learn how Dotfiles v0.2.495 delivers security-first shell configuration with Chezmoi, 1,200+ aliases, and Rust-powered CLI tools for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: About Dotfiles | Dotfiles preview
canonical: /en/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: About Dotfiles
pageType: docs
schemaType: WebPage
permalink: /en/about/
---

# About Dotfiles

Dotfiles v0.2.495 is a cross-platform shell configuration framework managed by Chezmoi, providing security-first defaults for Bash, Zsh, and Fish across macOS, Linux, and WSL2. It bundles over 1 200 aliases, modern Rust-based CLI replacements, and automated secret management so developers can set up a fully configured terminal environment in minutes.

## Install

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
```

## Verify

```bash
dot doctor
```

## Core commands

The `dot` CLI exposes 53 commands organised by category.

### Core

- `dot apply` — applies configuration changes.
- `dot sync` — pulls the latest repo state and applies.
- `dot update` — updates the repo and warms caches.
- `dot add` — stages new files into Chezmoi source.
- `dot diff` — shows pending changes before apply.
- `dot status` — displays managed-file status.
- `dot remove` — un-manages a file and removes the source entry.
- `dot cd` — opens a shell inside the Chezmoi source directory.
- `dot edit` — opens a managed file in your editor.
- `dot clean-cache` — purges transient caches.
- `dot prewarm` — pre-populates caches for faster shell startup.

### Diagnostics

- `dot doctor` — validates paths, tools, and shell health.
- `dot heal` — repairs missing or broken state automatically.
- `dot health` — runs a lightweight health probe.
- `dot verify` — checks file integrity against source.
- `dot scorecard` — prints a configuration quality score.
- `dot snapshot` — captures current state for later comparison.
- `dot smoke-test` — validates core toolchains end-to-end.
- `dot chaos` — injects faults to test self-healing.
- `dot bundle` — exports a portable configuration bundle.
- `dot rollback` — reverts to a previous snapshot.
- `dot drift` — detects out-of-band changes to managed files.
- `dot history` — shows the apply/sync history log.
- `dot benchmark` — measures shell startup time.
- `dot perf` — profiles slow shell initialisation.

### Appearance

- `dot theme` — switches the terminal colour scheme.
- `dot wallpaper` — sets the desktop wallpaper (macOS).
- `dot fonts` — installs or updates Nerd Fonts.
- `dot tune` — adjusts UI density and prompt style.

### Security

- `dot backup` — creates encrypted configuration backups.
- `dot encrypt-check` — verifies secret encryption at rest.
- `dot firewall` — configures host firewall rules.
- `dot telemetry` — controls anonymous usage telemetry.
- `dot dns-doh` — enables DNS-over-HTTPS.
- `dot lock-screen` — locks the screen immediately.
- `dot usb-safety` — restricts USB mass-storage auto-mount.

### Secrets

- `dot secrets-init` — bootstraps the secrets backend (age / GPG).
- `dot secrets` — lists encrypted secret entries.
- `dot secrets-create` — creates a new encrypted secret.
- `dot ssh-key` — generates or rotates SSH key pairs.
- `dot ssh-cert` — requests an SSH certificate from a CA.

### AI

- `dot ai` — opens an interactive AI assistant session.
- `dot ai-setup` — configures API keys for AI providers.
- `dot ai-query` — sends a one-shot prompt to an AI model.
- AI-tool wrappers: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Tools

- `dot tools` — lists bundled CLI replacements and their status.
- `dot new` — scaffolds a new alias or function file.
- `dot sandbox` — opens a disposable sandbox shell.
- `dot keys` — shows current key bindings.
- `dot learn` — starts the interactive tutorial.

### Meta

- `dot upgrade` — upgrades Dotfiles to the latest release.
- `dot packages` — lists installed packages managed by Dotfiles.
- `dot version` / `dot help` — prints version or usage information.

## Related

- [Aliases](/en/aliases/)
- [Functions](/en/functions/)
- [Paths](/en/paths/)
- [Compatibility Matrix](/en/compatibility/)
