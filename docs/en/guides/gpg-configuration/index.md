---
title: GPG Configuration Guide | Dotfiles
description: How to configure GPG for Git commit signing with Dotfiles. Key generation, Git integration, and Chezmoi management on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: GPG Configuration Guide preview
canonical: /en/guides/gpg-configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: GPG Configuration
pageType: article
schemaType: TechArticle
permalink: /en/guides/gpg-configuration/
date: 2026-03-08
category: Guides
tags:
  - gpg
  - signing
  - git
  - security
---

# GPG Configuration Guide

Sign your Git commits and tags with GPG keys for verified identity on GitHub, GitLab, and Bitbucket. This guide covers key generation, Git configuration, keyserver publishing, Chezmoi integration, and cross-platform setup for macOS, Linux, and WSL.

## Why GPG Signing?

GPG (GNU Privacy Guard) is the traditional standard for commit signing. It provides:

- **Verified badges** on GitHub, GitLab, and Bitbucket.
- **Web of trust** — others can sign your key to vouch for your identity.
- **Key expiration and revocation** — built-in lifecycle management.
- **Encryption** — the same key can encrypt files and emails.

## Prerequisites

- GnuPG **2.2** or later (`gpg --version`)
- Git **2.0** or later
- A GitHub or GitLab account (optional, for verification badges)

## Step 1: Generate a GPG Key

```bash
# Generate a new GPG key (RSA 4096-bit, recommended)
gpg --full-generate-key
```

When prompted:

1. Key type: **(1) RSA and RSA**
2. Key size: **4096**
3. Expiration: **1y** (set a reminder to extend)
4. Real name: **Your Full Name**
5. Email: **your@email.com** (must match your Git email)
6. Passphrase: choose a strong passphrase

### List your keys

```bash
# List secret keys with key IDs
gpg --list-secret-keys --keyid-format=long
```

Output example:

```text
sec   rsa4096/ABC123DEF4567890 2026-03-08 [SC] [expires: 2027-03-08]
      ABCDEF1234567890ABCDEF1234567890ABCDEF12
uid                 [ultimate] Your Name <your@email.com>
ssb   rsa4096/1234567890ABCDEF 2026-03-08 [E] [expires: 2027-03-08]
```

The key ID is `ABC123DEF4567890` (the part after `rsa4096/`).

## Step 2: Configure Git

```bash
# Set your signing key
git config --global user.signingkey ABC123DEF4567890

# Enable automatic commit signing
git config --global commit.gpgsign true

# Enable automatic tag signing
git config --global tag.gpgsign true

# Set the GPG program (important on macOS)
git config --global gpg.program gpg
```

Your `~/.gitconfig` will now contain:

```ini
[user]
    signingkey = ABC123DEF4567890
[commit]
    gpgsign = true
[tag]
    gpgsign = true
[gpg]
    program = gpg
```

## Step 3: Configure GPG Agent

The GPG agent caches your passphrase so you don't type it for every commit:

```bash
# Create or edit gpg-agent.conf
mkdir -p ~/.gnupg
cat > ~/.gnupg/gpg-agent.conf << 'EOF'
# Cache passphrase for 8 hours
default-cache-ttl 28800
max-cache-ttl 28800

# Use pinentry for passphrase entry
pinentry-program /usr/bin/pinentry-curses
EOF

# Restart the agent
gpgconf --kill gpg-agent
gpg-agent --daemon
```

### macOS-specific setup

```bash
# Install pinentry-mac for GUI passphrase prompts
brew install pinentry-mac

# Configure GPG to use it
echo "pinentry-program $(which pinentry-mac)" > ~/.gnupg/gpg-agent.conf

# Restart
gpgconf --kill gpg-agent
```

### GPG TTY for terminal passphrase entry

Add to your shell profile (`~/.bashrc`, `~/.zshrc`):

```bash
export GPG_TTY=$(tty)
```

## Step 4: Sign and Verify

### Sign a commit

```bash
# Commits are now signed automatically
git commit -m "feat: add new feature"

# Or sign a single commit explicitly
git commit -S -m "feat: signed commit"
```

### Sign a tag

```bash
git tag -s v1.0.0 -m "Release v1.0.0"
```

### Verify signatures

```bash
# Verify the last commit
git log --show-signature -1

# Verify a tag
git tag -v v1.0.0
```

Expected output for a valid signature:

```text
gpg: Signature made Sat 08 Mar 2026 12:00:00 PM
gpg: using RSA key ABC123DEF4567890
gpg: Good signature from "Your Name <your@email.com>" [ultimate]
```

## Step 5: Export and Register Your Key

### Export the public key

```bash
# Export in ASCII format
gpg --armor --export ABC123DEF4567890
```

### Register on GitHub

1. Copy the output of the export command
2. Go to **Settings → SSH and GPG keys → New GPG key**
3. Paste the key block (including `-----BEGIN PGP PUBLIC KEY BLOCK-----`)
4. Click **Add GPG key**

### Register on GitLab

1. Go to **Preferences → GPG Keys**
2. Paste the key block
3. Click **Add key**

### Publish to a keyserver (optional)

```bash
gpg --keyserver keys.openpgp.org --send-keys ABC123DEF4567890
```

## Key Management

### Extend expiration

```bash
# Edit the key
gpg --edit-key ABC123DEF4567890

# In the GPG prompt
gpg> expire
# Set new expiration (e.g., 1y)
gpg> save
```

### Backup your keys

```bash
# Export secret key (store securely!)
gpg --armor --export-secret-keys ABC123DEF4567890 > gpg-secret-key.asc

# Export trust database
gpg --export-ownertrust > gpg-trust.txt
```

### Restore on a new machine

```bash
# Import secret key
gpg --import gpg-secret-key.asc

# Import trust
gpg --import-ownertrust gpg-trust.txt

# Set trust level
gpg --edit-key ABC123DEF4567890 trust
```

## Chezmoi Integration

Manage your GPG configuration across machines:

```bash
# Add GPG config files
chezmoi add ~/.gnupg/gpg.conf
chezmoi add ~/.gnupg/gpg-agent.conf

# Add Git config
chezmoi add ~/.gitconfig

# Export and encrypt your secret key with Chezmoi
gpg --armor --export-secret-keys ABC123DEF4567890 | chezmoi add --encrypt /dev/stdin --name dot_gnupg/private_key.asc
```

In your Chezmoi template (`dot_gitconfig.tmpl`):

```ini
[user]
    signingkey = {{ .gpg_key_id }}
[commit]
    gpgsign = true
[tag]
    gpgsign = true
[gpg]
    program = gpg
```

Add `gpg_key_id` to your Chezmoi data (`chezmoi.toml`):

```toml
[data]
gpg_key_id = "ABC123DEF4567890"
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `gpg: signing failed: No secret key` | Check `user.signingkey` matches `gpg --list-secret-keys` |
| `gpg: signing failed: Inappropriate ioctl` | Set `export GPG_TTY=$(tty)` in your shell profile |
| Passphrase prompt never appears | Install and configure `pinentry-mac` (macOS) or `pinentry-curses` |
| `error: gpg failed to sign the data` | Restart agent: `gpgconf --kill gpg-agent` |
| Key expired | Extend with `gpg --edit-key <ID>` then `expire` |

## Platform Notes

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| GnuPG 2.2+ | ✅ via Homebrew | ✅ via apt/dnf | ✅ |
| pinentry-mac | ✅ | N/A | N/A |
| pinentry-curses | ✅ | ✅ | ✅ |
| Keyserver access | ✅ | ✅ | ✅ |
| Chezmoi integration | ✅ | ✅ | ✅ |

## Related

- [Secret Management Best Practices](/en/guides/secret-management/)
- [SSH Commit Signing Guide](/en/guides/ssh-signing/)
- [Security Aliases](/en/aliases/security/)
- [Git Aliases](/en/aliases/git/)
