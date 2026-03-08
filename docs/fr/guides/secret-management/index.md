---
title: Meilleures pratiques de gestion des secrets | Dotfiles
description: Comment gérer en toute sécurité les secrets, clés API et identifiants dans vos dotfiles avec age, SOPS et 1Password CLI.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Meilleures pratiques de gestion des secrets preview
canonical: /fr/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gestion des secrets
pageType: article
schemaType: TechArticle
permalink: /fr/guides/secret-management/
---

# Meilleures pratiques de gestion des secrets

Gardez les secrets hors de votre dépôt dotfiles. Ce guide couvre trois méthodes testées pour gérer les identifiants en toute sécurité avec Chezmoi.

## Pourquoi c'est important

Les dépôts dotfiles sont souvent publics. Une seule clé API, un token ou un mot de passe commité peut entraîner :

- **Compromission de compte** en quelques minutes après le push.
- **Abus de facturation cloud** à partir d'identifiants cloud divulgués.
- **Attaques de la chaîne d'approvisionnement** lorsque les tokens CI sont exposés.

## Règles d'or

1. **Ne stockez jamais de secrets en texte clair dans le contrôle de version.**
2. **Chiffrement au repos** — utilisez age, SOPS ou un gestionnaire de secrets.
3. **Vérifiez avant chaque commit** — automatisez avec des hooks pre-commit.

## Méthode 1 : Chezmoi + age (Recommandé)

age est un outil de chiffrement de fichiers simple et moderne. Chezmoi a une intégration native.

### Configuration

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Ajoutez à `~/.config/chezmoi/chezmoi.toml` :

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Chiffrer un fichier

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Secrets dans les templates

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Méthode 2 : Chezmoi + SOPS

SOPS (Secrets OPerationS) chiffre des clés spécifiques dans les fichiers YAML/JSON, en gardant la structure visible.

### Configuration

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

### Chiffrer

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Utilisation dans les templates

Ajoutez à `chezmoi.toml` :

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Méthode 3 : 1Password CLI

1Password CLI (`op`) récupère les secrets au moment de l'application sans les stocker localement.

### Configuration

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Utilisation dans les templates Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Avantages

- Les secrets ne touchent jamais le disque non chiffré.
- Partage en équipe via les coffres 1Password.
- Support de la rotation automatique.

## Filet de sécurité pre-commit

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

Excluez toujours les chemins sensibles :

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

Empêchez Chezmoi de gérer les fichiers sensibles :

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Liste de vérification d'audit

- [ ] Pas de secrets en texte clair dans l'état source : `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] La clé age **n'est pas** commitée : `git ls-files | grep key.txt` ne retourne rien
- [ ] Le hook git-secrets est actif : `git secrets --scan`
- [ ] `.gitignore` couvre `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` passe sans avertissements
- [ ] Les fichiers chiffrés SOPS se déchiffrent correctement : `sops --decrypt chezmoi-data.yaml`

## Testé sur

| Plateforme | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Pages connexes

- [À propos](/fr/about/)
- [Matrice de compatibilité](/fr/compatibility/)
- [Alias de sécurité](/fr/aliases/security/)
