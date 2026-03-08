---
title: שיטות עבודה מומלצות לניהול סודות | Dotfiles
description: כיצד לנהל בבטחה סודות, מפתחות API ואישורים בקובצי ה-dotfiles שלך באמצעות age, SOPS ו-1Password CLI.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: שיטות עבודה מומלצות לניהול סודות preview
canonical: /he/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: ניהול סודות
pageType: article
schemaType: TechArticle
permalink: /he/guides/secret-management/
---

# שיטות עבודה מומלצות לניהול סודות

שמור על סודות מחוץ למאגר ה-dotfiles שלך. מדריך זה מכסה שלוש שיטות שנבדקו לניהול אישורים בבטחה עם Chezmoi.

## למה זה חשוב

מאגרי dotfiles הם לעתים קרובות ציבוריים. מפתח API בודד, טוקן או סיסמה שנעשה להם commit יכולים להוביל ל:

- **פגיעה בחשבון** תוך דקות מה-push.
- **ניצול לרעה של חיוב ענן** מאישורי ענן שדלפו.
- **התקפות שרשרת אספקה** כאשר טוקני CI נחשפים.

## כללי הזהב

1. **לעולם אל תאחסן סודות בטקסט גלוי בבקרת גרסאות.**
2. **הצפנה במנוחה** — השתמש ב-age, SOPS או מנהל סודות.
3. **אמת לפני כל commit** — אוטומט עם hooks של pre-commit.

## שיטה 1: Chezmoi + age (מומלץ)

age הוא כלי הצפנת קבצים פשוט ומודרני. ל-Chezmoi יש אינטגרציה מקורית.

### הגדרה

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

הוסף ל-`~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### הצפנת קובץ

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### סודות בתבניות

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## שיטה 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) מצפין מפתחות ספציפיים בקובצי YAML/JSON, תוך שמירה על המבנה גלוי.

### הגדרה

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

### הצפנה

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### שימוש בתבניות

הוסף ל-`chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## שיטה 3: 1Password CLI

1Password CLI (`op`) מאחזר סודות בזמן ההחלה ללא אחסון מקומי.

### הגדרה

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### שימוש בתבניות Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### יתרונות

- סודות לעולם לא נוגעים בדיסק ללא הצפנה.
- שיתוף צוות דרך כספות 1Password.
- תמיכה ברוטציה אוטומטית.

## רשת ביטחון pre-commit

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

תמיד החרג נתיבים רגישים:

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

מנע מ-Chezmoi לנהל קבצים רגישים:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## רשימת ביקורת

- [ ] אין סודות בטקסט גלוי במצב המקור: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] מפתח age **לא** נעשה לו commit: `git ls-files | grep key.txt` לא מחזיר כלום
- [ ] hook של git-secrets פעיל: `git secrets --scan`
- [ ] `.gitignore` מכסה `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` עובר ללא אזהרות
- [ ] קבצים מוצפנים ב-SOPS מפוענחים נכון: `sops --decrypt chezmoi-data.yaml`

## נבדק על

| פלטפורמה | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## קישורים קשורים

- [אודות](/he/about/)
- [מטריצת תאימות](/he/compatibility/)
- [Aliases אבטחה](/he/aliases/security/)
