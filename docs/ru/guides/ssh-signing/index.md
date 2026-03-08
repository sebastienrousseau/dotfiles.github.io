---
title: Руководство по подписи коммитов SSH | Dotfiles
description: Как подписывать коммиты и теги Git ключами SSH с помощью Dotfiles. Пошаговая настройка для macOS, Linux и WSL с верификацией разрешённых подписантов.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Руководство по подписи коммитов SSH preview
canonical: /ru/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Подпись SSH
pageType: article
schemaType: TechArticle
permalink: /ru/guides/ssh-signing/
---

# Руководство по подписи коммитов SSH

Неподписанные коммиты может создать кто угодно. Подпись доказывает:

## Зачем подписывать коммиты?

- **Личность** — коммит сделан владельцем ключа.
- **Целостность** — коммит не изменялся после подписи.
- **Доверие** — платформы показывают значок «Верифицировано».

## Предварительные требования

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Шаг 1: Генерация ключа подписи

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Шаг 2: Настройка Git

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

## Шаг 3: Настройка разрешённых подписантов

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Шаг 4: Подпись и верификация

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

## Шаг 5: Регистрация на GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Интеграция с Chezmoi

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

## Устранение неполадок

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Примечания к платформам

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Связанное

- [Лучшие практики управления секретами](/ru/guides/secret-management/)
- [Руководство по настройке GPG](/ru/guides/gpg-configuration/)
- [Псевдонимы безопасности](/ru/aliases/security/)
- [Псевдонимы Git](/ru/aliases/git/)
