---
title: أفضل ممارسات إدارة الأسرار | Dotfiles
description: كيفية إدارة الأسرار ومفاتيح API وبيانات الاعتماد بأمان في ملفات dotfiles باستخدام age و SOPS و 1Password CLI.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: أفضل ممارسات إدارة الأسرار preview
canonical: /ar/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: إدارة الأسرار
pageType: article
schemaType: TechArticle
permalink: /ar/guides/secret-management/
---

# أفضل ممارسات إدارة الأسرار

احفظ الأسرار بعيدًا عن مستودع dotfiles الخاص بك. يغطي هذا الدليل ثلاث طرق مختبرة لإدارة بيانات الاعتماد بأمان مع Chezmoi.

## لماذا هذا مهم

غالبًا ما تكون مستودعات dotfiles عامة. يمكن أن يؤدي مفتاح API واحد أو رمز أو كلمة مرور تم الالتزام بها إلى:

- **اختراق الحساب** في غضون دقائق من الدفع.
- **إساءة استخدام فواتير السحابة** من بيانات اعتماد السحابة المسربة.
- **هجمات سلسلة التوريد** عند كشف رموز CI.

## القواعد الذهبية

1. **لا تخزن أبدًا أسرارًا بنص عادي في التحكم بالإصدارات.**
2. **التشفير في حالة السكون** — استخدم age أو SOPS أو مدير أسرار.
3. **تحقق قبل كل التزام** — قم بالأتمتة باستخدام خطافات ما قبل الالتزام.

## الطريقة 1: Chezmoi + age (موصى بها)

age هي أداة تشفير ملفات بسيطة وحديثة. يتكامل Chezmoi معها بشكل أصلي.

### الإعداد

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

أضف إلى `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### تشفير ملف

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### قوالب الأسرار

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## الطريقة 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) يشفر مفاتيح محددة في ملفات YAML/JSON مع الحفاظ على البنية مرئية.

### الإعداد

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

### التشفير

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### الاستخدام في القوالب

أضف إلى `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## الطريقة 3: 1Password CLI

يسترجع 1Password CLI (`op`) الأسرار في وقت التطبيق دون تخزينها محليًا.

### الإعداد

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### الاستخدام في قوالب Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### المزايا

- لا تلمس الأسرار القرص أبدًا بدون تشفير.
- مشاركة الفريق من خلال خزائن 1Password.
- دعم التدوير التلقائي.

## شبكة أمان ما قبل الالتزام

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

استبعد دائمًا المسارات الحساسة:

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

امنع Chezmoi من إدارة الملفات الحساسة:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## قائمة التدقيق

- [ ] لا توجد أسرار بنص عادي في حالة المصدر: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] مفتاح age **غير** ملتزم: `git ls-files | grep key.txt` لا يُرجع شيئًا
- [ ] خطاف git-secrets نشط: `git secrets --scan`
- [ ] يغطي `.gitignore` الملفات `*.age` و `*.key` و `.sops.yaml`
- [ ] يمر `dot doctor` بدون تحذيرات
- [ ] الملفات المشفرة بـ SOPS تُفك تشفيرها بشكل صحيح: `sops --decrypt chezmoi-data.yaml`

## مختبر على

| المنصة | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## ذو صلة

- [حول](/ar/about/)
- [مصفوفة التوافق](/ar/compatibility/)
- [أسماء الأمان المستعارة](/ar/aliases/security/)
