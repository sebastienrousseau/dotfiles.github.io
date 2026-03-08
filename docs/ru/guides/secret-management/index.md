---
title: Лучшие практики управления секретами | Dotfiles
description: Как безопасно управлять секретами, ключами API и учётными данными в ваших dotfiles с помощью age, SOPS и 1Password CLI.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Лучшие практики управления секретами preview
canonical: /ru/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Управление секретами
pageType: article
schemaType: TechArticle
permalink: /ru/guides/secret-management/
---

# Лучшие практики управления секретами

Храните секреты за пределами вашего репозитория dotfiles. Это руководство охватывает три проверенных метода безопасного управления учётными данными с помощью Chezmoi.

## Почему это важно

Репозитории dotfiles часто публичны. Один закоммиченный ключ API, токен или пароль может привести к:

- **Компрометации аккаунта** в течение минут после пуша.
- **Злоупотреблению облачным биллингом** из-за утёкших облачных учётных данных.
- **Атакам на цепочку поставок** при раскрытии токенов CI.

## Золотые правила

1. **Никогда не храните секреты в открытом виде в системе контроля версий.**
2. **Шифрование в состоянии покоя** — используйте age, SOPS или менеджер секретов.
3. **Проверяйте перед каждым коммитом** — автоматизируйте с помощью хуков pre-commit.

## Метод 1: Chezmoi + age (Рекомендуемый)

age — это простой современный инструмент шифрования файлов. Chezmoi имеет нативную интеграцию.

### Настройка

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Добавьте в `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Шифрование файла

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Шаблонные секреты

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Метод 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) шифрует определённые ключи в файлах YAML/JSON, сохраняя структуру видимой.

### Настройка

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

### Шифрование

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Использование в шаблонах

Добавьте в `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Метод 3: 1Password CLI

1Password CLI (`op`) получает секреты во время применения без локального хранения.

### Настройка

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Использование в шаблонах Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Преимущества

- Секреты никогда не касаются диска в незашифрованном виде.
- Командное совместное использование через хранилища 1Password.
- Поддержка автоматической ротации.

## Сеть безопасности pre-commit

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

Всегда исключайте конфиденциальные пути:

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

Предотвратите управление Chezmoi конфиденциальными файлами:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Контрольный список аудита

- [ ] Нет секретов в открытом виде в исходном состоянии: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Ключ age **не** закоммичен: `git ls-files | grep key.txt` не возвращает ничего
- [ ] Хук git-secrets активен: `git secrets --scan`
- [ ] `.gitignore` покрывает `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` проходит без предупреждений
- [ ] SOPS-зашифрованные файлы корректно расшифровываются: `sops --decrypt chezmoi-data.yaml`

## Протестировано на

| Платформа | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Связанные страницы

- [О проекте](/ru/about/)
- [Матрица совместимости](/ru/compatibility/)
- [Алиасы безопасности](/ru/alias/security/)
