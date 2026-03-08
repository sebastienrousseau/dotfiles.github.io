---
title: SSH提交簽名指南 | Dotfiles
description: 如何使用Dotfiles透過SSH金鑰簽署Git提交和標籤。macOS、Linux和WSL的逐步設定以及允許的簽署者驗證。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH提交簽名指南 preview
canonical: /zh-tw/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH簽名
pageType: article
schemaType: TechArticle
permalink: /zh-tw/guides/ssh-signing/
---

# SSH提交簽名指南

未簽署的提交可以由任何人建立。簽署證明：

## 為什麼要簽署提交？

- **身分** — 提交由金鑰持有者建立。
- **完整性** — 簽署後提交未被修改。
- **信任** — 平台顯示「已驗證」徽章。

## 先決條件

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## 步驟1：產生簽名金鑰

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## 步驟2：設定Git

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

## 步驟3：設定允許的簽署者

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## 步驟4：簽署和驗證

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

## 步驟5：在GitHub / GitLab上註冊

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi整合

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

## 疑難排解

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## 平台說明

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## 相關

- [機密管理最佳實務](/zh-tw/guides/secret-management/)
- [GPG設定指南](/zh-tw/guides/gpg-configuration/)
- [安全別名](/zh-tw/aliases/security/)
- [Git別名](/zh-tw/aliases/git/)
