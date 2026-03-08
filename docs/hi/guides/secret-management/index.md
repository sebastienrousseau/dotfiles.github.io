---
title: गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ | Dotfiles
description: age, SOPS और 1Password CLI का उपयोग करके अपनी dotfiles में गोपनीय कुंजियों, API कुंजियों और क्रेडेंशियल्स को सुरक्षित रूप से प्रबंधित करने का तरीका।
lang: hi-IN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ preview
canonical: /hi/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: गोपनीयता प्रबंधन
pageType: article
schemaType: TechArticle
permalink: /hi/guides/secret-management/
---

# गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ

अपनी dotfiles रिपॉज़िटरी से गोपनीय जानकारी को बाहर रखें। यह गाइड Chezmoi के साथ क्रेडेंशियल्स को सुरक्षित रूप से प्रबंधित करने के तीन परीक्षित तरीकों को कवर करती है।

## यह क्यों मायने रखता है

Dotfiles रिपॉज़िटरी अक्सर सार्वजनिक होती हैं। एक भी कमिट की गई API कुंजी, टोकन या पासवर्ड इनका कारण बन सकती है:

- **खाता समझौता** पुश के कुछ ही मिनटों में।
- **क्लाउड बिलिंग का दुरुपयोग** लीक हुए क्लाउड क्रेडेंशियल्स से।
- **आपूर्ति-श्रृंखला हमले** जब CI टोकन उजागर होते हैं।

## स्वर्णिम नियम

1. **कभी भी सादे पाठ में गोपनीय जानकारी वर्शन कंट्रोल में न रखें।**
2. **विराम में एन्क्रिप्शन** — age, SOPS या सीक्रेट्स मैनेजर का उपयोग करें।
3. **हर कमिट से पहले सत्यापित करें** — pre-commit hooks से स्वचालित करें।

## विधि 1: Chezmoi + age (अनुशंसित)

age एक सरल, आधुनिक फ़ाइल एन्क्रिप्शन टूल है। Chezmoi में नेटिव इंटीग्रेशन है।

### सेटअप

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

`~/.config/chezmoi/chezmoi.toml` में जोड़ें:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### फ़ाइल एन्क्रिप्ट करें

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### टेम्पलेट गोपनीयता

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## विधि 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) YAML/JSON फ़ाइलों में विशिष्ट कुंजियों को एन्क्रिप्ट करता है, संरचना को दृश्यमान रखता है।

### सेटअप

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

### एन्क्रिप्ट करें

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### टेम्पलेट में उपयोग

`chezmoi.toml` में जोड़ें:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## विधि 3: 1Password CLI

1Password CLI (`op`) गोपनीय जानकारी को स्थानीय रूप से संग्रहीत किए बिना लागू होने के समय प्राप्त करता है।

### सेटअप

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Chezmoi टेम्पलेट में उपयोग

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### लाभ

- गोपनीय जानकारी कभी भी बिना एन्क्रिप्शन के डिस्क को नहीं छूती।
- 1Password वॉल्ट के माध्यम से टीम शेयरिंग।
- स्वचालित रोटेशन समर्थन।

## Pre-commit सुरक्षा जाल

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

हमेशा संवेदनशील पथों को बाहर रखें:

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

Chezmoi को संवेदनशील फ़ाइलों को प्रबंधित करने से रोकें:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## ऑडिट चेकलिस्ट

- [ ] सोर्स स्टेट में कोई सादे पाठ का गोपनीय डेटा नहीं: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age कुंजी **कमिट नहीं** है: `git ls-files | grep key.txt` कुछ नहीं लौटाता
- [ ] git-secrets hook सक्रिय है: `git secrets --scan`
- [ ] `.gitignore` में `*.age`, `*.key`, `.sops.yaml` शामिल है
- [ ] `dot doctor` बिना चेतावनियों के पास होता है
- [ ] SOPS-एन्क्रिप्टेड फ़ाइलें सही से डिक्रिप्ट होती हैं: `sops --decrypt chezmoi-data.yaml`

## परीक्षित प्लेटफ़ॉर्म

| प्लेटफ़ॉर्म | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## संबंधित

- [के बारे में](/hi/about/)
- [संगतता मैट्रिक्स](/hi/compatibility/)
- [सुरक्षा एलियास](/hi/aliases/security/)
