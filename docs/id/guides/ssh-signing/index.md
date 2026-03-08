---
title: Panduan Penandatanganan Commit SSH | Dotfiles
description: Cara menandatangani commit dan tag Git dengan kunci SSH menggunakan Dotfiles. Pengaturan langkah demi langkah untuk macOS, Linux, dan WSL.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Panduan Penandatanganan Commit SSH preview
canonical: /id/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Penandatanganan SSH
pageType: article
schemaType: TechArticle
permalink: /id/guides/ssh-signing/
---

# Panduan Penandatanganan Commit SSH

Commit yang tidak ditandatangani dapat dibuat oleh siapa saja. Penandatanganan membuktikan:

## Mengapa menandatangani commit?

- **Identitas** — commit dibuat oleh pemegang kunci.
- **Integritas** — commit tidak diubah sejak ditandatangani.
- **Kepercayaan** — platform menampilkan lencana "Terverifikasi".

## Prasyarat

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Langkah 1: Buat kunci penandatanganan

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Langkah 2: Konfigurasikan Git

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

## Langkah 3: Siapkan penandatangan yang diizinkan

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Langkah 4: Tandatangani dan verifikasi

```bash
# Commits are now signed automatically
git commit -m "feat: add new feature"

# Or sign a single commit explicitly
git commit -S -m "feat: signed commit"

# Sign a tag
git tag -s v1.0.0 -m "Release v1.0.0"

# Verify the last commit
git log --show-signature -1

# Verify a tag
git tag -v v1.0.0
```

## Langkah 5: Daftarkan di GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Integrasi Chezmoi

```bash
# Add your Git config
chezmoi add ~/.gitconfig

# Add your allowed signers file
chezmoi add ~/.config/git/allowed_signers

# Add your signing key (encrypt it!)
chezmoi add --encrypt ~/.ssh/id_signing
```

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

## Pemecahan Masalah

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Catatan Platform

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Terkait

- [Praktik Terbaik Manajemen Rahasia](/id/guides/secret-management/)
- [Panduan Konfigurasi GPG](/id/guides/gpg-configuration/)
- [Alias Keamanan](/id/aliases/security/)
- [Alias Git](/id/aliases/git/)
