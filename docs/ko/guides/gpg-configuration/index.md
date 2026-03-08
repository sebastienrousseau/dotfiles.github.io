---
title: GPG 구성 가이드 | Dotfiles
description: Dotfiles로 Git 커밋 서명을 위한 GPG 구성 방법. 키 생성, Git 통합, macOS·Linux·WSL에서의 Chezmoi 관리.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: GPG 구성 가이드 preview
canonical: /ko/guides/gpg-configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: GPG 구성
pageType: article
schemaType: TechArticle
permalink: /ko/guides/gpg-configuration/
---

# GPG 구성 가이드

GPG (GNU Privacy Guard)는 커밋 서명의 전통적인 표준입니다:

## 왜 GPG 서명인가요?

- **인증 배지** GitHub, GitLab, Bitbucket에서 표시.
- **신뢰 네트워크** — 다른 사람이 당신의 키에 서명할 수 있습니다.
- **키 만료 및 폐지** — 내장된 수명 주기 관리.
- **암호화** — 같은 키로 파일과 이메일을 암호화.

## 사전 요구사항

- GnuPG **2.2+** (`gpg --version`)
- Git **2.0+**
- GitHub / GitLab

## 1단계: GPG 키 생성

```bash
# Generate a new GPG key (RSA 4096-bit)
gpg --full-generate-key
```

1. **(1) RSA and RSA**
2. **4096**
3. **1y**
4. **Your Full Name**
5. **your@email.com**

```bash
# List secret keys with key IDs
gpg --list-secret-keys --keyid-format=long
```

```text
sec   rsa4096/ABC123DEF4567890 2026-03-08 [SC] [expires: 2027-03-08]
      ABCDEF1234567890ABCDEF1234567890ABCDEF12
uid                 [ultimate] Your Name <your@email.com>
ssb   rsa4096/1234567890ABCDEF 2026-03-08 [E] [expires: 2027-03-08]
```

## 2단계: Git 구성

```bash
# Set your signing key
git config --global user.signingkey ABC123DEF4567890

# Enable automatic commit signing
git config --global commit.gpgsign true

# Enable automatic tag signing
git config --global tag.gpgsign true

# Set the GPG program
git config --global gpg.program gpg
```

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

## 3단계: GPG 에이전트 구성

```bash
# Create or edit gpg-agent.conf
mkdir -p ~/.gnupg
cat > ~/.gnupg/gpg-agent.conf << 'EOF'
default-cache-ttl 28800
max-cache-ttl 28800
pinentry-program /usr/bin/pinentry-curses
EOF

# Restart the agent
gpgconf --kill gpg-agent
gpg-agent --daemon
```

### macOS

```bash
# Install pinentry-mac
brew install pinentry-mac
echo "pinentry-program $(which pinentry-mac)" > ~/.gnupg/gpg-agent.conf
gpgconf --kill gpg-agent
```

### GPG TTY

```bash
export GPG_TTY=$(tty)
```

## 4단계: 서명 및 검증

```bash
# Commits are now signed automatically
git commit -m "feat: add new feature"

# Or sign explicitly
git commit -S -m "feat: signed commit"

# Sign a tag
git tag -s v1.0.0 -m "Release v1.0.0"

# Verify the last commit
git log --show-signature -1

# Verify a tag
git tag -v v1.0.0
```

## 5단계: 키 내보내기 및 등록

```bash
# Export in ASCII format
gpg --armor --export ABC123DEF4567890
```

### GitHub

1. **Settings → SSH and GPG keys → New GPG key**
2. `-----BEGIN PGP PUBLIC KEY BLOCK-----`

### GitLab

1. **Preferences → GPG Keys**

### Keyserver

```bash
gpg --keyserver keys.openpgp.org --send-keys ABC123DEF4567890
```

## 키 관리

```bash
# Extend expiration
gpg --edit-key ABC123DEF4567890
# expire → save

# Backup secret key
gpg --armor --export-secret-keys ABC123DEF4567890 > gpg-secret-key.asc

# Backup trust
gpg --export-ownertrust > gpg-trust.txt

# Restore
gpg --import gpg-secret-key.asc
gpg --import-ownertrust gpg-trust.txt
```

## Chezmoi 통합

```bash
# Add GPG config files
chezmoi add ~/.gnupg/gpg.conf
chezmoi add ~/.gnupg/gpg-agent.conf
chezmoi add ~/.gitconfig
```

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

```toml
[data]
gpg_key_id = "ABC123DEF4567890"
```

## 문제 해결

| Problem | Solution |
|---------|----------|
| `gpg: signing failed: No secret key` | `user.signingkey` ↔ `gpg --list-secret-keys` |
| `gpg: signing failed: Inappropriate ioctl` | `export GPG_TTY=$(tty)` |
| No passphrase prompt | `pinentry-mac` / `pinentry-curses` |
| `error: gpg failed to sign the data` | `gpgconf --kill gpg-agent` |

## 플랫폼 참고사항

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| GnuPG 2.2+ | ✅ | ✅ | ✅ |
| pinentry-mac | ✅ | N/A | N/A |
| pinentry-curses | ✅ | ✅ | ✅ |
| Keyserver | ✅ | ✅ | ✅ |
| Chezmoi | ✅ | ✅ | ✅ |

## 관련 항목

- [시크릿 관리 모범 사례](/ko/guides/secret-management/)
- [SSH 커밋 서명 가이드](/ko/guides/ssh-signing/)
- [보안 별칭](/ko/aliases/security/)
- [Git 별칭](/ko/aliases/git/)
