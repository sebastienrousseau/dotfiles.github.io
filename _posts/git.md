---
name: "Dotfiles"
short_name: "dotfiles"
title: "Git Configuration & Cryptographic Commit Signing"
description: "Hardened Git config featuring SSH/GPG commit signing, Delta side-by-side diffs, and workflow aliases."
keywords: "git signing ssh, delta diff git, gitconfig best practices"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/git/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Git Configuration & Security

## Cryptographic Commit Signing via SSH

Configure Git to automatically sign all commits using your local SSH key or 1Password agent:

```ini
[user]
    name = Sebastien Rousseau
    email = sebastien@rousseau.im
    signingkey = ~/.ssh/id_ed25519.pub

[gpg]
    format = ssh

[commit]
    gpgsign = true

[tag]
    gpgSign = true
```

## Delta Syntax Diff Highlighting

```ini
[core]
    pager = delta

[interactive]
    diffFilter = delta --color-only

[delta]
    navigate = true
    light = false
    side-by-side = true
    line-numbers = true
```
