---
title: คู่มือการลงนามคอมมิตด้วย SSH | Dotfiles
description: วิธีลงนามคอมมิตและแท็ก Git ด้วยคีย์ SSH โดยใช้ Dotfiles การตั้งค่าทีละขั้นตอนสำหรับ macOS, Linux และ WSL พร้อมการยืนยันผู้ลงนามที่อนุญาต
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: คู่มือการลงนามคอมมิตด้วย SSH preview
canonical: /th/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: การลงนาม SSH
pageType: article
schemaType: TechArticle
permalink: /th/guides/ssh-signing/
---

# คู่มือการลงนามคอมมิตด้วย SSH

คอมมิตที่ไม่ได้ลงนามสามารถสร้างได้โดยใครก็ได้ การลงนามพิสูจน์:

## ทำไมต้องลงนามคอมมิต?

- **ตัวตน** — คอมมิตถูกสร้างโดยเจ้าของคีย์
- **ความสมบูรณ์** — คอมมิตไม่ถูกแก้ไขหลังการลงนาม
- **ความไว้วางใจ** — แพลตฟอร์มแสดงป้าย "ยืนยันแล้ว"

## ข้อกำหนดเบื้องต้น

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## ขั้นตอนที่ 1: สร้างคีย์ลงนาม

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## ขั้นตอนที่ 2: กำหนดค่า Git

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

## ขั้นตอนที่ 3: ตั้งค่าผู้ลงนามที่อนุญาต

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## ขั้นตอนที่ 4: ลงนามและยืนยัน

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

## ขั้นตอนที่ 5: ลงทะเบียนบน GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## การรวม Chezmoi

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

## การแก้ไขปัญหา

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## หมายเหตุแพลตฟอร์ม

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## ที่เกี่ยวข้อง

- [แนวทางปฏิบัติที่ดีในการจัดการความลับ](/th/guides/secret-management/)
- [คู่มือการกำหนดค่า GPG](/th/guides/gpg-configuration/)
- [นามแฝงความปลอดภัย](/th/aliases/security/)
- [นามแฝง Git](/th/aliases/git/)
