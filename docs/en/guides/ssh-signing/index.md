---
title: SSH Commit Signing Guide | Dotfiles
description: How to sign Git commits and tags with SSH keys using Dotfiles. Step-by-step setup for macOS, Linux, and WSL with allowed_signers verification.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH Commit Signing Guide preview
canonical: /en/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH Signing
pageType: article
schemaType: TechArticle
permalink: /en/guides/ssh-signing/
date: 2026-03-08
category: Guides
tags:
  - ssh
  - signing
  - git
  - security
---

# SSH Commit Signing Guide

Sign your Git commits and tags with SSH keys — no GPG required. SSH signing is built into Git 2.34+ and uses the keys you already have. This guide walks you through generating an SSH signing key, configuring Git, setting up an allowed signers file for verification, and integrating with GitHub, GitLab, and Chezmoi on macOS, Linux, and WSL.

## Why Sign Commits?

Unsigned commits can be authored by anyone using `git config user.email`. Signing proves:

- **Identity** — the commit was made by the key holder.
- **Integrity** — the commit has not been altered since signing.
- **Trust** — platforms show a "Verified" badge next to signed commits.

## Prerequisites

- Git **2.34** or later (`git --version`)
- An SSH key pair (Ed25519 recommended)
- A GitHub or GitLab account (optional, for verification badges)

## Step 1: Generate a Signing Key

If you already have an SSH key, you can reuse it. Otherwise, create a dedicated signing key:

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

> **Tip:** Using a separate key for signing keeps authentication and signing concerns isolated.

## Step 2: Configure Git

Tell Git to use SSH for signing and point it to your key:

```bash
# Set the signing format to SSH
git config --global gpg.format ssh

# Point to your signing key
git config --global user.signingkey ~/.ssh/id_signing.pub

# Enable automatic commit signing
git config --global commit.gpgsign true

# Enable automatic tag signing
git config --global tag.gpgsign true
```

Your `~/.gitconfig` will now contain:

```ini
[gpg]
    format = ssh
[user]
    signingkey = ~/.ssh/id_signing.pub
[commit]
    gpgsign = true
[tag]
    gpgsign = true
```

## Step 3: Set Up Allowed Signers

The `allowed_signers` file maps email addresses to public keys, enabling local verification of signed commits:

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

Format of each line:

```text
email@example.com ssh-ed25519 AAAAC3Nz... comment
```

Add team members' keys to verify their commits locally.

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

# Verify all commits in a range
git log --show-signature HEAD~5..HEAD
```

Expected output for a valid signature:

```text
Good "git" signature for your@email.com with ED25519 key SHA256:xxxx
```

## Step 5: Register on GitHub / GitLab

### GitHub

1. Go to **Settings → SSH and GPG keys → New SSH key**
2. Set **Key type** to **Signing Key**
3. Paste the contents of `~/.ssh/id_signing.pub`
4. Click **Add SSH key**

### GitLab

1. Go to **Preferences → SSH Keys**
2. Set **Usage type** to **Signing** (or **Authentication & Signing**)
3. Paste the contents of `~/.ssh/id_signing.pub`
4. Click **Add key**

After pushing signed commits, the platform will show a **Verified** badge.

## Chezmoi Integration

Manage your signing configuration across machines with Chezmoi:

```bash
# Add your Git config
chezmoi add ~/.gitconfig

# Add your allowed signers file
chezmoi add ~/.config/git/allowed_signers

# Add your signing key (encrypt it!)
chezmoi add --encrypt ~/.ssh/id_signing
```

In your Chezmoi template (`dot_gitconfig.tmpl`):

```ini
[gpg]
    format = ssh
[user]
    signingkey = {{ .chezmoi.homeDir }}/.ssh/id_signing.pub
[gpg "ssh"]
    allowedSignersFile = {{ .chezmoi.homeDir }}/.config/git/allowed_signers
[commit]
    gpgsign = true
[tag]
    gpgsign = true
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Upgrade Git to 2.34+ |
| `error: Load key: No such file` | Check the path in `user.signingkey` |
| `No principal matched` | Add your key to `allowed_signers` |
| SSH agent prompt on every commit | Add key to agent: `ssh-add ~/.ssh/id_signing` |
| Signature shows "unknown" on GitHub | Upload the `.pub` key as a **Signing Key** |

## Platform Notes

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ via Homebrew | ✅ via apt/dnf | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Signing key in Chezmoi | ✅ | ✅ | ✅ |

## Related

- [Secret Management Best Practices](/en/guides/secret-management/)
- [GPG Configuration Guide](/en/guides/gpg-configuration/)
- [Security Aliases](/en/aliases/security/)
- [Git Aliases](/en/aliases/git/)
