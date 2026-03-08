---
title: Best practice per la gestione dei segreti | Dotfiles
description: Come gestire in modo sicuro segreti, chiavi API e credenziali nei dotfiles usando age, SOPS e 1Password CLI.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Best practice per la gestione dei segreti preview
canonical: /it/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gestione dei segreti
pageType: article
schemaType: TechArticle
permalink: /it/guides/secret-management/
---

# Best practice per la gestione dei segreti

Tieni i segreti fuori dal tuo repository dotfiles. Questa guida copre tre metodi testati per gestire le credenziali in modo sicuro con Chezmoi.

## Perché è importante

I repository dotfiles sono spesso pubblici. Una singola chiave API, token o password committata può portare a:

- **Compromissione dell'account** in pochi minuti dal push.
- **Abuso della fatturazione cloud** da credenziali cloud trapelate.
- **Attacchi alla supply chain** quando i token CI vengono esposti.

## Regole d'oro

1. **Non memorizzare mai segreti in testo semplice nel controllo versione.**
2. **Crittografia a riposo** — usa age, SOPS o un gestore di segreti.
3. **Verifica prima di ogni commit** — automatizza con hook pre-commit.

## Metodo 1: Chezmoi + age (Consigliato)

age è uno strumento di crittografia file semplice e moderno. Chezmoi ha un'integrazione nativa.

### Configurazione

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Aggiungi a `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Crittografare un file

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Segreti nei template

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Metodo 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) crittografa chiavi specifiche nei file YAML/JSON, mantenendo la struttura visibile.

### Configurazione

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

### Crittografare

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Utilizzo nei template

Aggiungi a `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Metodo 3: 1Password CLI

1Password CLI (`op`) recupera i segreti al momento dell'applicazione senza memorizzarli localmente.

### Configurazione

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Utilizzo nei template Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Vantaggi

- I segreti non toccano mai il disco non crittografati.
- Condivisione del team tramite vault 1Password.
- Supporto per la rotazione automatica.

## Rete di sicurezza pre-commit

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

Escludi sempre i percorsi sensibili:

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

Impedisci a Chezmoi di gestire file sensibili:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Checklist di audit

- [ ] Nessun segreto in testo semplice nello stato sorgente: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] La chiave age **non** è committata: `git ls-files | grep key.txt` non restituisce nulla
- [ ] L'hook git-secrets è attivo: `git secrets --scan`
- [ ] `.gitignore` copre `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` passa senza avvisi
- [ ] I file crittografati SOPS si decrittano correttamente: `sops --decrypt chezmoi-data.yaml`

## Testato su

| Piattaforma | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Correlati

- [Informazioni](/it/about/)
- [Matrice di compatibilità](/it/compatibility/)
- [Alias di sicurezza](/it/aliases/security/)
