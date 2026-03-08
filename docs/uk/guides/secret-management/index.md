---
title: Найкращі практики керування секретами | Dotfiles
description: Як безпечно керувати секретами, API-ключами та обліковими даними у ваших dotfiles за допомогою age, SOPS та 1Password CLI.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Найкращі практики керування секретами preview
canonical: /uk/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Керування секретами
pageType: article
schemaType: TechArticle
permalink: /uk/guides/secret-management/
---

# Найкращі практики керування секретами

Тримайте секрети поза вашим репозиторієм dotfiles. Цей посібник описує три перевірені методи безпечного керування обліковими даними з Chezmoi.

## Чому це важливо

Репозиторії dotfiles часто публічні. Один закомічений API-ключ, токен або пароль може призвести до:

- **Компрометації облікового запису** протягом хвилин після push.
- **Зловживання хмарним білінгом** через витік хмарних облікових даних.
- **Атак на ланцюжок поставок**, коли CI-токени відкриті.

## Золоті правила

1. **Ніколи не зберігайте секрети у відкритому вигляді в системі контролю версій.**
2. **Шифруйте в стані спокою** — використовуйте age, SOPS або менеджер секретів.
3. **Перевіряйте перед кожним комітом** — автоматизуйте за допомогою pre-commit хуків.

## Метод 1: Chezmoi + age (Рекомендовано)

age — простий, сучасний інструмент шифрування файлів. Chezmoi має нативну інтеграцію.

### Налаштування

```bash
# Встановити age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Згенерувати пару ключів
age-keygen -o ~/.config/chezmoi/key.txt

# Налаштувати Chezmoi
chezmoi edit-config
```

Додайте до `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Шифрування файлу

```bash
# Додати секретний файл як зашифрований
chezmoi add --encrypt ~/.config/gh/hosts.yml

# Файл зберігається зашифрованим у каталозі джерел
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Шаблони секретів

```bash
# Використовуйте шаблони Chezmoi для вбудованих секретів
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Метод 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) шифрує конкретні ключі у файлах YAML/JSON, залишаючи структуру видимою.

### Налаштування

```bash
# Встановити SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Створити конфіг SOPS
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Шифрування

```bash
# Створити файл секретів
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Зашифрувати з SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Використання в шаблонах

Додайте до `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Метод 3: 1Password CLI

1Password CLI (`op`) отримує секрети під час застосування без локального збереження.

### Налаштування

```bash
# Встановити 1Password CLI
brew install --cask 1password-cli   # macOS

# Увійти
op signin
```

### Використання в шаблонах Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Переваги

- Секрети ніколи не потрапляють на диск у незашифрованому вигляді.
- Спільний доступ через сховища 1Password.
- Підтримка автоматичної ротації.

## Запобіжна мережа Pre-commit

### git-secrets

```bash
# Встановити
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Налаштувати для вашого репо
git secrets --install
git secrets --register-aws

# Додати власні шаблони
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Завжди виключайте чутливі шляхи:

```text
# Секрети - ніколи не комітити
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Запобігайте керуванню чутливими файлами через Chezmoi:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Контрольний список аудиту

- [ ] Жодних секретів у відкритому вигляді в стані джерел: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Ключ age **не** закомічений: `git ls-files | grep key.txt` повертає порожнє
- [ ] Хук git-secrets активний: `git secrets --scan`
- [ ] `.gitignore` покриває `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` проходить без попереджень
- [ ] Зашифровані SOPS файли коректно розшифровуються: `sops --decrypt chezmoi-data.yaml`

## Протестовано на

| Платформа | age | SOPS | 1Password CLI |
|-----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Пов'язане

- [Про Dotfiles](/uk/about/)
- [Матриця сумісності](/uk/compatibility/)
- [Аліаси безпеки](/uk/aliases/security/)
