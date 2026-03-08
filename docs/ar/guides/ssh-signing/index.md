---
title: دليل توقيع الالتزامات بمفاتيح SSH | Dotfiles
description: كيفية توقيع التزامات Git والوسوم باستخدام مفاتيح SSH مع Dotfiles. إعداد خطوة بخطوة لأنظمة macOS وLinux وWSL مع التحقق من الموقعين المسموح بهم.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: دليل توقيع الالتزامات بمفاتيح SSH preview
canonical: /ar/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: توقيع SSH
pageType: article
schemaType: TechArticle
permalink: /ar/guides/ssh-signing/
---

# دليل توقيع الالتزامات بمفاتيح SSH

يمكن لأي شخص إنشاء التزامات غير موقعة باستخدام `git config user.email`. التوقيع يثبت:

## لماذا توقيع الالتزامات؟

- **الهوية** — الالتزام تم بواسطة مالك المفتاح.
- **السلامة** — لم يتم تعديل الالتزام بعد التوقيع.
- **الثقة** — تعرض المنصات شارة "تم التحقق" بجانب الالتزامات الموقعة.

## المتطلبات الأساسية

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## الخطوة 1: إنشاء مفتاح التوقيع

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## الخطوة 2: تكوين Git

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

## الخطوة 3: إعداد الموقعين المسموح بهم

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## الخطوة 4: التوقيع والتحقق

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

## الخطوة 5: التسجيل على GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## تكامل Chezmoi

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

## استكشاف الأخطاء

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## ملاحظات المنصة

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## ذو صلة

- [أفضل ممارسات إدارة الأسرار](/ar/guides/secret-management/)
- [دليل تكوين GPG](/ar/guides/gpg-configuration/)
- [أسماء مستعارة للأمان](/ar/aliases/security/)
- [أسماء مستعارة لـ Git](/ar/aliases/git/)
