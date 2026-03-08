---
title: Melhores práticas de gerenciamento de segredos | Dotfiles
description: Como gerenciar com segurança segredos, chaves API e credenciais nos seus dotfiles usando age, SOPS e 1Password CLI.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Melhores práticas de gerenciamento de segredos preview
canonical: /pt/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gerenciamento de segredos
pageType: article
schemaType: TechArticle
permalink: /pt/guides/secret-management/
---

# Melhores práticas de gerenciamento de segredos

Mantenha os segredos fora do seu repositório dotfiles. Este guia cobre três métodos testados para gerenciar credenciais com segurança usando o Chezmoi.

## Por que isso importa

Repositórios dotfiles são frequentemente públicos. Uma única chave API, token ou senha commitada pode levar a:

- **Comprometimento de conta** em minutos após o push.
- **Abuso de cobrança na nuvem** por credenciais de nuvem vazadas.
- **Ataques à cadeia de suprimentos** quando tokens de CI são expostos.

## Regras de ouro

1. **Nunca armazene segredos em texto simples no controle de versão.**
2. **Criptografia em repouso** — use age, SOPS ou um gerenciador de segredos.
3. **Verifique antes de cada commit** — automatize com hooks pre-commit.

## Método 1: Chezmoi + age (Recomendado)

age é uma ferramenta de criptografia de arquivos simples e moderna. O Chezmoi tem integração nativa.

### Configuração

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Adicione ao `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Criptografar um arquivo

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Segredos em templates

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Método 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) criptografa chaves específicas em arquivos YAML/JSON, mantendo a estrutura visível.

### Configuração

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

### Criptografar

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Uso em templates

Adicione ao `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Método 3: 1Password CLI

1Password CLI (`op`) recupera segredos no momento da aplicação sem armazená-los localmente.

### Configuração

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Uso em templates do Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Vantagens

- Segredos nunca tocam o disco sem criptografia.
- Compartilhamento em equipe através de cofres 1Password.
- Suporte a rotação automática.

## Rede de segurança pre-commit

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

Sempre exclua caminhos sensíveis:

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

Impeça o Chezmoi de gerenciar arquivos sensíveis:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Lista de verificação de auditoria

- [ ] Sem segredos em texto simples no estado fonte: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Chave age **não** está commitada: `git ls-files | grep key.txt` não retorna nada
- [ ] Hook git-secrets está ativo: `git secrets --scan`
- [ ] `.gitignore` cobre `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` passa sem avisos
- [ ] Arquivos criptografados SOPS descriptografam corretamente: `sops --decrypt chezmoi-data.yaml`

## Testado em

| Plataforma | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Relacionado

- [Sobre](/pt/about/)
- [Matriz de compatibilidade](/pt/compatibility/)
- [Aliases de segurança](/pt/aliases/security/)
