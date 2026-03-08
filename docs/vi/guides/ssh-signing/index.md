---
title: Hướng dẫn ký commit bằng SSH | Dotfiles
description: Cách ký commit và tag Git bằng khóa SSH với Dotfiles. Thiết lập từng bước cho macOS, Linux và WSL với xác minh người ký được phép.
lang: vi-VN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Hướng dẫn ký commit bằng SSH preview
canonical: /vi/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Ký SSH
pageType: article
schemaType: TechArticle
permalink: /vi/guides/ssh-signing/
---

# Hướng dẫn ký commit bằng SSH

Commit không được ký có thể được tạo bởi bất kỳ ai. Ký chứng minh:

## Tại sao phải ký commit?

- **Danh tính** — commit được thực hiện bởi chủ sở hữu khóa.
- **Tính toàn vẹn** — commit không bị thay đổi kể từ khi ký.
- **Tin cậy** — nền tảng hiển thị huy hiệu "Đã xác minh".

## Điều kiện tiên quyết

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Bước 1: Tạo khóa ký

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Bước 2: Cấu hình Git

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

## Bước 3: Thiết lập người ký được phép

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Bước 4: Ký và xác minh

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

## Bước 5: Đăng ký trên GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Tích hợp Chezmoi

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

## Khắc phục sự cố

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Ghi chú nền tảng

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Liên quan

- [Thực hành quản lý bí mật tốt nhất](/vi/guides/secret-management/)
- [Hướng dẫn cấu hình GPG](/vi/guides/gpg-configuration/)
- [Bí danh bảo mật](/vi/aliases/security/)
- [Bí danh Git](/vi/aliases/git/)
