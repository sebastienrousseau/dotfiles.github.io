---
title: Best Practices für die Geheimnisverwaltung | Dotfiles
description: Wie Sie Geheimnisse, API-Schlüssel und Zugangsdaten sicher in Ihren Dotfiles mit age, SOPS und 1Password CLI verwalten.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Best Practices für die Geheimnisverwaltung preview
canonical: /de/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Geheimnisverwaltung
pageType: article
schemaType: TechArticle
permalink: /de/guides/secret-management/
---

# Best Practices für die Geheimnisverwaltung

Halten Sie Geheimnisse aus Ihrem Dotfiles-Repository fern. Dieser Leitfaden behandelt drei getestete Methoden zur sicheren Verwaltung von Zugangsdaten mit Chezmoi.

## Warum das wichtig ist

Dotfiles-Repositories sind oft öffentlich. Ein einziger committeter API-Schlüssel, Token oder Passwort kann zu Folgendem führen:

- **Kontokompromittierung** innerhalb von Minuten nach dem Push.
- **Cloud-Abrechnungsmissbrauch** durch geleakte Cloud-Zugangsdaten.
- **Supply-Chain-Angriffe** wenn CI-Tokens offengelegt werden.

## Goldene Regeln

1. **Speichern Sie niemals Klartext-Geheimnisse in der Versionskontrolle.**
2. **Verschlüsselung im Ruhezustand** — verwenden Sie age, SOPS oder einen Secrets-Manager.
3. **Vor jedem Commit überprüfen** — automatisieren Sie mit Pre-Commit-Hooks.

## Methode 1: Chezmoi + age (Empfohlen)

age ist ein einfaches, modernes Dateiverschlüsselungstool. Chezmoi hat native Integration.

### Einrichtung

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Fügen Sie zu `~/.config/chezmoi/chezmoi.toml` hinzu:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Datei verschlüsseln

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Template-Geheimnisse

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Methode 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) verschlüsselt bestimmte Schlüssel in YAML/JSON-Dateien und hält die Struktur sichtbar.

### Einrichtung

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

### Verschlüsseln

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Verwendung in Templates

Fügen Sie zu `chezmoi.toml` hinzu:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Methode 3: 1Password CLI

1Password CLI (`op`) ruft Geheimnisse zur Anwendungszeit ab, ohne sie lokal zu speichern.

### Einrichtung

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Verwendung in Chezmoi-Templates

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Vorteile

- Geheimnisse berühren niemals unverschlüsselt die Festplatte.
- Teamfreigabe über 1Password-Tresore.
- Unterstützung für automatische Rotation.

## Pre-Commit-Sicherheitsnetz

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

Schließen Sie immer sensible Pfade aus:

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

Verhindern Sie, dass Chezmoi sensible Dateien verwaltet:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Audit-Checkliste

- [ ] Keine Klartext-Geheimnisse im Quellzustand: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age-Schlüssel ist **nicht** committet: `git ls-files | grep key.txt` gibt nichts zurück
- [ ] git-secrets-Hook ist aktiv: `git secrets --scan`
- [ ] `.gitignore` deckt `*.age`, `*.key`, `.sops.yaml` ab
- [ ] `dot doctor` besteht ohne Warnungen
- [ ] SOPS-verschlüsselte Dateien entschlüsseln korrekt: `sops --decrypt chezmoi-data.yaml`

## Getestet auf

| Plattform | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Verwandte Seiten

- [Über Dotfiles](/de/about/)
- [Kompatibilitätsmatrix](/de/compatibility/)
- [Sicherheits-Aliase](/de/aliases/security/)
