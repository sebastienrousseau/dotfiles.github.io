---
title: 機密管理最佳實務 | Dotfiles
description: 如何使用 age、SOPS 和 1Password CLI 在 Dotfiles 中安全管理機密、API 金鑰和憑證。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 機密管理最佳實務預覽
canonical: /zh-tw/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 機密管理
pageType: article
schemaType: TechArticle
permalink: /zh-tw/guides/secret-management/
---

# 機密管理最佳實務

將機密資料排除在 Dotfiles 儲存庫之外。本指南涵蓋三種經過測試的方法，使用 Chezmoi 安全管理憑證。

## 為何重要

Dotfiles 儲存庫通常是公開的。一個被提交的 API 金鑰、令牌或密碼可能導致：

- 推送後數分鐘內**帳號遭到入侵**。
- 洩漏的雲端憑證導致**雲端帳單濫用**。
- CI 令牌暴露導致**供應鏈攻擊**。

## 黃金準則

1. **永遠不要在版本控制中存儲明文機密。**
2. **靜態加密** — 使用 age、SOPS 或機密管理器。
3. **每次提交前驗證** — 使用 pre-commit 掛鉤自動化。

## 方法一：Chezmoi + age（建議）

age 是一個簡單、現代的檔案加密工具。Chezmoi 有原生整合。

### 設定

```bash
# 安裝 age
brew install age    # macOS
sudo apt install age  # Ubuntu

# 產生金鑰對
age-keygen -o ~/.config/chezmoi/key.txt

# 告知 Chezmoi 使用此金鑰
chezmoi edit-config
```

在 `~/.config/chezmoi/chezmoi.toml` 中新增：

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### 加密檔案

```bash
# 將機密檔案以加密方式新增
chezmoi add --encrypt ~/.config/gh/hosts.yml

# 檔案以加密形式存儲在來源目錄中
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### 範本機密

```bash
# 使用 Chezmoi 範本處理行內機密
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## 方法二：Chezmoi + SOPS

SOPS（Secrets OPerationS）加密 YAML/JSON 檔案中的特定金鑰，保持結構可見。

### 設定

```bash
# 安裝 SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# 建立 SOPS 配置
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### 加密

```bash
# 建立機密檔案
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# 使用 SOPS 加密
sops --encrypt --in-place chezmoi-data.yaml
```

### 在範本中使用

在 `chezmoi.toml` 中新增：

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## 方法三：1Password CLI

1Password CLI（`op`）在套用時擷取機密，無需在本地存儲。

### 設定

```bash
# 安裝 1Password CLI
brew install --cask 1password-cli   # macOS

# 登入
op signin
```

### 在 Chezmoi 範本中使用

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### 優勢

- 機密永遠不會以未加密形式接觸磁碟。
- 透過 1Password 保險庫進行團隊共享。
- 支援自動輪換。

## Pre-commit 安全網

### git-secrets

```bash
# 安裝
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# 為您的儲存庫配置
git secrets --install
git secrets --register-aws

# 新增自訂模式
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

始終排除敏感路徑：

```text
# 機密 - 永遠不要提交
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

防止 Chezmoi 管理敏感檔案：

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## 稽核檢查清單

- [ ] 來源狀態中無明文機密：`chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age 金鑰**未**被提交：`git ls-files | grep key.txt` 應無結果
- [ ] git-secrets 掛鉤已啟用：`git secrets --scan`
- [ ] `.gitignore` 涵蓋 `*.age`、`*.key`、`.sops.yaml`
- [ ] `dot doctor` 通過且無警告
- [ ] SOPS 加密的檔案可正確解密：`sops --decrypt chezmoi-data.yaml`

## 已測試平台

| 平台 | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## 相關連結

- [關於](/zh-tw/about/)
- [相容性矩陣](/zh-tw/compatibility/)
- [安全性別名](/zh-tw/aliases/security/)
