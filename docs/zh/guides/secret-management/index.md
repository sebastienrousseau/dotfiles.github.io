---
title: 密钥管理最佳实践 | Dotfiles
description: 如何使用 age、SOPS 和 1Password CLI 在 dotfiles 中安全管理密钥、API 密钥和凭证。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 密钥管理最佳实践 preview
canonical: /zh/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 密钥管理
pageType: article
schemaType: TechArticle
permalink: /zh/guides/secret-management/
---

# 密钥管理最佳实践

将密钥保存在 dotfiles 仓库之外。本指南涵盖了使用 Chezmoi 安全管理凭证的三种经过测试的方法。

## 为什么这很重要

dotfiles 仓库通常是公开的。一个被提交的 API 密钥、令牌或密码可能导致：

- 推送后几分钟内的**账户泄露**。
- 泄露的云凭证导致的**云计费滥用**。
- CI 令牌暴露时的**供应链攻击**。

## 黄金法则

1. **永远不要在版本控制中存储明文密钥。**
2. **静态加密** — 使用 age、SOPS 或密钥管理器。
3. **每次提交前验证** — 使用 pre-commit 钩子自动化。

## 方法 1：Chezmoi + age（推荐）

age 是一个简单现代的文件加密工具。Chezmoi 具有原生集成。

### 设置

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

添加到 `~/.config/chezmoi/chezmoi.toml`：

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### 加密文件

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### 模板密钥

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## 方法 2：Chezmoi + SOPS

SOPS（Secrets OPerationS）加密 YAML/JSON 文件中的特定键，保持结构可见。

### 设置

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

### 加密

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### 在模板中使用

添加到 `chezmoi.toml`：

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## 方法 3：1Password CLI

1Password CLI（`op`）在应用时检索密钥，无需本地存储。

### 设置

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### 在 Chezmoi 模板中使用

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### 优势

- 密钥永远不会以未加密状态触及磁盘。
- 通过 1Password 保险库进行团队共享。
- 支持自动轮换。

## Pre-commit 安全网

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

始终排除敏感路径：

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

防止 Chezmoi 管理敏感文件：

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## 审计清单

- [ ] 源状态中无明文密钥：`chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age 密钥**未**被提交：`git ls-files | grep key.txt` 不返回任何内容
- [ ] git-secrets 钩子已激活：`git secrets --scan`
- [ ] `.gitignore` 覆盖 `*.age`、`*.key`、`.sops.yaml`
- [ ] `dot doctor` 无警告通过
- [ ] SOPS 加密文件正确解密：`sops --decrypt chezmoi-data.yaml`

## 测试平台

| 平台 | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## 相关页面

- [关于](/zh/about/)
- [兼容性矩阵](/zh/compatibility/)
- [安全别名](/zh/aliases/security/)
