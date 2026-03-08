---
title: SSH 커밋 서명 가이드 | Dotfiles
description: Dotfiles로 SSH 키를 사용하여 Git 커밋과 태그에 서명하는 방법. macOS, Linux, WSL에서 단계별 설정 및 허용된 서명자 검증.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH 커밋 서명 가이드 preview
canonical: /ko/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH 서명
pageType: article
schemaType: TechArticle
permalink: /ko/guides/ssh-signing/
---

# SSH 커밋 서명 가이드

서명되지 않은 커밋은 누구나 만들 수 있습니다. 서명은 다음을 증명합니다:

## 왜 커밋에 서명하나요?

- **신원** — 커밋이 키 보유자에 의해 만들어졌습니다.
- **무결성** — 서명 이후 커밋이 변경되지 않았습니다.
- **신뢰** — 플랫폼에서 "인증됨" 배지를 표시합니다.

## 사전 요구사항

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## 1단계: 서명 키 생성

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## 2단계: Git 구성

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

## 3단계: 허용된 서명자 설정

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## 4단계: 서명 및 검증

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

## 5단계: GitHub / GitLab에 등록

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi 통합

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

## 문제 해결

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## 플랫폼 참고사항

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## 관련 항목

- [시크릿 관리 모범 사례](/ko/guides/secret-management/)
- [GPG 구성 가이드](/ko/guides/gpg-configuration/)
- [보안 별칭](/ko/aliases/security/)
- [Git 별칭](/ko/aliases/git/)
