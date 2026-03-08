---
title: Best practices voor geheimenbeheer | Dotfiles
description: Hoe u veilig geheimen, API-sleutels en inloggegevens beheert in uw dotfiles met age, SOPS en 1Password CLI.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Best practices voor geheimenbeheer preview
canonical: /nl/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Geheimenbeheer
pageType: article
schemaType: TechArticle
permalink: /nl/guides/secret-management/
---

# Best practices voor geheimenbeheer

Houd geheimen uit uw dotfiles-repository. Deze gids behandelt drie geteste methoden voor het veilig beheren van inloggegevens met Chezmoi.

## Waarom dit belangrijk is

Dotfiles-repositories zijn vaak openbaar. Eén gecommitte API-sleutel, token of wachtwoord kan leiden tot:

- **Accountcompromittatie** binnen minuten na de push.
- **Misbruik van cloudkosten** door gelekte cloudinloggegevens.
- **Supply-chain-aanvallen** wanneer CI-tokens worden blootgesteld.

## Gouden regels

1. **Sla nooit plaintext-geheimen op in versiebeheer.**
2. **Versleuteling in rust** — gebruik age, SOPS of een geheimenbeheerder.
3. **Verifieer voor elke commit** — automatiseer met pre-commit hooks.

## Methode 1: Chezmoi + age (Aanbevolen)

age is een eenvoudige, moderne bestandsversleutelingstool. Chezmoi heeft native integratie.

### Instelling

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Voeg toe aan `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Bestand versleutelen

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Template-geheimen

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Methode 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) versleutelt specifieke sleutels in YAML/JSON-bestanden en houdt de structuur zichtbaar.

### Instelling

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

### Versleutelen

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Gebruik in templates

Voeg toe aan `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Methode 3: 1Password CLI

1Password CLI (`op`) haalt geheimen op tijdens het toepassen zonder ze lokaal op te slaan.

### Instelling

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Gebruik in Chezmoi-templates

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Voordelen

- Geheimen raken nooit onversleuteld de schijf.
- Teamdeling via 1Password-kluizen.
- Ondersteuning voor automatische rotatie.

## Pre-commit vangnet

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

Sluit altijd gevoelige paden uit:

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

Voorkom dat Chezmoi gevoelige bestanden beheert:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Audit-checklist

- [ ] Geen plaintext-geheimen in bronstatus: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age-sleutel is **niet** gecommit: `git ls-files | grep key.txt` geeft niets terug
- [ ] git-secrets hook is actief: `git secrets --scan`
- [ ] `.gitignore` dekt `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` slaagt zonder waarschuwingen
- [ ] SOPS-versleutelde bestanden ontsleutelen correct: `sops --decrypt chezmoi-data.yaml`

## Getest op

| Platform | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Gerelateerd

- [Over](/nl/about/)
- [Compatibiliteitsmatrix](/nl/compatibility/)
- [Beveiligingsaliassen](/nl/aliases/security/)
