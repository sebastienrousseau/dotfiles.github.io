---
title: シークレット管理のベストプラクティス | Dotfiles
description: age、SOPS、1Password CLIを使用してdotfilesでシークレット、APIキー、クレデンシャルを安全に管理する方法。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: シークレット管理のベストプラクティス preview
canonical: /ja/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: シークレット管理
pageType: article
schemaType: TechArticle
permalink: /ja/guides/secret-management/
---

# シークレット管理のベストプラクティス

dotfilesリポジトリからシークレットを除外しましょう。このガイドでは、Chezmoiでクレデンシャルを安全に管理する3つのテスト済み方法を紹介します。

## なぜ重要なのか

dotfilesリポジトリは公開されていることが多いです。一つでもコミットされたAPIキー、トークン、パスワードは以下を引き起こす可能性があります：

- プッシュ後数分での**アカウント侵害**。
- 漏洩したクラウドクレデンシャルによる**クラウド課金の悪用**。
- CIトークンが露出した場合の**サプライチェーン攻撃**。

## 黄金ルール

1. **バージョン管理に平文のシークレットを保存しない。**
2. **保存時に暗号化する** — age、SOPS、またはシークレットマネージャを使用。
3. **コミット前に毎回検証する** — プリコミットフックで自動化。

## 方法1：Chezmoi + age（推奨）

ageはシンプルでモダンなファイル暗号化ツールです。Chezmoiにはネイティブ統合があります。

### セットアップ

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

`~/.config/chezmoi/chezmoi.toml`に追加：

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### ファイルの暗号化

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### テンプレートシークレット

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## 方法2：Chezmoi + SOPS

SOPS（Secrets OPerationS）はYAML/JSONファイルの特定のキーを暗号化し、構造を可視に保ちます。

### セットアップ

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

### 暗号化

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### テンプレートでの使用

`chezmoi.toml`に追加：

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## 方法3：1Password CLI

1Password CLI（`op`）は、ローカルに保存せずに適用時にシークレットを取得します。

### セットアップ

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Chezmoiテンプレートでの使用

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### 利点

- シークレットが暗号化されていない状態でディスクに触れることがない。
- 1Passwordボルトを通じたチーム共有。
- 自動ローテーションのサポート。

## プリコミットセーフティネット

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

常に機密パスを除外：

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

Chezmoiが機密ファイルを管理するのを防止：

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## 監査チェックリスト

- [ ] ソース状態に平文シークレットなし：`chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] ageキーがコミット**されていない**：`git ls-files | grep key.txt`が何も返さない
- [ ] git-secretsフックがアクティブ：`git secrets --scan`
- [ ] `.gitignore`が`*.age`、`*.key`、`.sops.yaml`をカバー
- [ ] `dot doctor`が警告なしで合格
- [ ] SOPS暗号化ファイルが正しく復号：`sops --decrypt chezmoi-data.yaml`

## テスト済みプラットフォーム

| プラットフォーム | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## 関連ページ

- [概要](/ja/about/)
- [互換性マトリックス](/ja/compatibility/)
- [セキュリティエイリアス](/ja/aliases/security/)
