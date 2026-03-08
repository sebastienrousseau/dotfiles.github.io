---
title: SSH Commit İmzalama Rehberi | Dotfiles
description: Dotfiles ile SSH anahtarları kullanarak Git commitlerini ve etiketlerini imzalama. macOS, Linux ve WSL için adım adım kurulum ve izin verilen imzacı doğrulaması.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH Commit İmzalama Rehberi preview
canonical: /tr/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH İmzalama
pageType: article
schemaType: TechArticle
permalink: /tr/guides/ssh-signing/
---

# SSH Commit İmzalama Rehberi

İmzasız commitler herkes tarafından oluşturulabilir. İmzalama şunları kanıtlar:

## Neden commitleri imzalamalısınız?

- **Kimlik** — commit anahtar sahibi tarafından yapıldı.
- **Bütünlük** — commit imzalandıktan sonra değiştirilmedi.
- **Güven** — platformlar "Doğrulanmış" rozeti gösterir.

## Ön koşullar

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Adım 1: İmzalama anahtarı oluşturun

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Adım 2: Git'i yapılandırın

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

## Adım 3: İzin verilen imzacıları ayarlayın

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Adım 4: İmzalayın ve doğrulayın

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

## Adım 5: GitHub / GitLab'da kaydedin

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi Entegrasyonu

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

## Sorun Giderme

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Platform Notları

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## İlgili

- [Gizli bilgi yönetimi en iyi uygulamaları](/tr/guides/secret-management/)
- [GPG yapılandırma rehberi](/tr/guides/gpg-configuration/)
- [Güvenlik takma adları](/tr/aliases/security/)
- [Git takma adları](/tr/aliases/git/)
