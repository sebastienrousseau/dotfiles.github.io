---
name: "Dotfiles"
short_name: "dotfiles"
title: "Security Architecture: Zero Secrets & Credential Safety"
description: "Secret management patterns using 1Password CLI and environment isolation with zero plaintext tokens."
keywords: "dotfiles security, 1password cli, credential safety"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/security/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Security Architecture & Secret Management

## 1. Zero Plaintext Secrets in Git
Never commit API tokens, cloud keys, or private SSH credentials to dotfile repositories.

## 2. 1Password CLI Integration
Inject secrets dynamically at runtime:
```bash
# Run command with secrets injected into environment without writing to disk
op run -- env | grep AWS_
```

## 3. SSH Agent Forwarding & FIDO2 Hardware Keys
All SSH authentication is configured to use hardware security keys (YubiKey / Touch ID) via `ed25519-sk` key pairs.
