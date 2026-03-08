---
title: Secret Management Best Practices | Dotfiles
description: How to safely manage secrets, API keys, and credentials in your dotfiles using age, SOPS, and 1Password CLI.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Secret Management Best Practices preview
canonical: /en/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Secret Management
pageType: article
schemaType: TechArticle
permalink: /en/guides/secret-management/
---

# Secret Management Best Practices

Keep secrets out of your dotfiles repository. This step-by-step guide covers three production-tested methods for managing API keys, tokens, and credentials safely with Chezmoi: age encryption for local-first security, SOPS for structured YAML/JSON secret storage, and 1Password CLI for zero-disk-exposure retrieval at apply time.

## Why This Matters

Dotfiles repositories are often public. A single committed API key, token, or password can lead to:

- **Account compromise** within minutes of push.
- **Cloud billing abuse** from leaked cloud credentials.
- **Supply-chain attacks** when CI tokens are exposed.

## Golden Rules

1. **Never store plaintext secrets in version control.**
2. **Encrypt at rest** — use age, SOPS, or a secrets manager.
3. **Verify before every commit** — automate with pre-commit hooks.

## Method 1: Chezmoi + age (Recommended)

age is a simple, modern file encryption tool. Chezmoi has native integration.

### Setup

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Add to `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Encrypt a file

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Template secrets

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Method 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) encrypts specific keys in YAML/JSON files, keeping structure visible.

### Setup

```bash
# Install SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Create a SOPS config
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Encrypt

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Use in templates

Add to `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Method 3: 1Password CLI

1Password CLI (`op`) retrieves secrets at apply-time without storing them locally.

### Setup

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Use in Chezmoi templates

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Advantages

- Secrets never touch disk unencrypted.
- Team sharing through 1Password vaults.
- Automatic rotation support.

## Pre-commit Safety Net

### git-secrets

```bash
# Install
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Configure for your repo
git secrets --install
git secrets --register-aws

# Add custom patterns
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Always exclude sensitive paths:

```text
# Secrets - never commit
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Prevent Chezmoi from managing sensitive files:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Audit Checklist

- [ ] No plaintext secrets in source state: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age key is **not** committed: `git ls-files | grep key.txt` returns nothing
- [ ] git-secrets hook is active: `git secrets --scan`
- [ ] `.gitignore` covers `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` passes with no warnings
- [ ] SOPS-encrypted files decrypt correctly: `sops --decrypt chezmoi-data.yaml`

## Tested On

| Platform | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Related

- [About](/en/about/)
- [Compatibility Matrix](/en/compatibility/)
- [Security Aliases](/en/aliases/security/)
