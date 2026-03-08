---
title: 시크릿 관리 모범 사례 | Dotfiles
description: age, SOPS, 1Password CLI를 사용하여 dotfiles에서 시크릿, API 키, 자격 증명을 안전하게 관리하는 방법.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 시크릿 관리 모범 사례 preview
canonical: /ko/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 시크릿 관리
pageType: article
schemaType: TechArticle
permalink: /ko/guides/secret-management/
---

# 시크릿 관리 모범 사례

dotfiles 저장소에서 시크릿을 제외하세요. 이 가이드는 Chezmoi를 사용하여 자격 증명을 안전하게 관리하는 세 가지 테스트된 방법을 다룹니다.

## 왜 중요한가

dotfiles 저장소는 종종 공개됩니다. 커밋된 API 키, 토큰 또는 비밀번호 하나가 다음을 초래할 수 있습니다:

- 푸시 후 몇 분 내의 **계정 침해**.
- 유출된 클라우드 자격 증명으로 인한 **클라우드 과금 남용**.
- CI 토큰이 노출될 때의 **공급망 공격**.

## 황금 규칙

1. **버전 관리에 평문 시크릿을 저장하지 마세요.**
2. **저장 시 암호화** — age, SOPS 또는 시크릿 관리자 사용.
3. **모든 커밋 전에 확인** — 프리커밋 훅으로 자동화.

## 방법 1: Chezmoi + age (권장)

age는 간단하고 현대적인 파일 암호화 도구입니다. Chezmoi에 네이티브 통합이 있습니다.

### 설정

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

`~/.config/chezmoi/chezmoi.toml`에 추가:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### 파일 암호화

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### 템플릿 시크릿

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## 방법 2: Chezmoi + SOPS

SOPS(Secrets OPerationS)는 YAML/JSON 파일의 특정 키를 암호화하여 구조를 유지합니다.

### 설정

```bash
# Install SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Create a SOPS config
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### 암호화

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### 템플릿에서 사용

`chezmoi.toml`에 추가:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## 방법 3: 1Password CLI

1Password CLI(`op`)는 로컬에 저장하지 않고 적용 시 시크릿을 가져옵니다.

### 설정

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Chezmoi 템플릿에서 사용

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### 장점

- 시크릿이 암호화되지 않은 상태로 디스크에 닿지 않음.
- 1Password 볼트를 통한 팀 공유.
- 자동 로테이션 지원.

## 프리커밋 안전망

### git-secrets

```bash
# Install
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Configure for your repo
git secrets --install
git secrets --register-aws

# Add custom patterns
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

항상 민감한 경로를 제외:

```text
# Secrets - never commit
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Chezmoi가 민감한 파일을 관리하지 못하도록 방지:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## 감사 체크리스트

- [ ] 소스 상태에 평문 시크릿 없음: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age 키가 커밋**되지 않음**: `git ls-files | grep key.txt`가 아무것도 반환하지 않음
- [ ] git-secrets 훅이 활성화: `git secrets --scan`
- [ ] `.gitignore`가 `*.age`, `*.key`, `.sops.yaml` 포함
- [ ] `dot doctor`가 경고 없이 통과
- [ ] SOPS 암호화 파일이 올바르게 복호화: `sops --decrypt chezmoi-data.yaml`

## 테스트 플랫폼

| 플랫폼 | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## 관련 페이지

- [소개](/ko/about/)
- [호환성 매트릭스](/ko/compatibility/)
- [보안 별칭](/ko/aliases/security/)
