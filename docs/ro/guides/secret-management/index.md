---
title: Cele Mai Bune Practici pentru Gestionarea Secretelor | Dotfiles
description: Cum să gestionați în siguranță secretele, cheile API și acreditările în dotfiles folosind age, SOPS și 1Password CLI.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Previzualizare Cele Mai Bune Practici pentru Gestionarea Secretelor
canonical: /ro/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gestionarea Secretelor
pageType: article
schemaType: TechArticle
permalink: /ro/guides/secret-management/
---

# Cele Mai Bune Practici pentru Gestionarea Secretelor

Păstrați secretele în afara depozitului de dotfiles. Acest ghid acoperă trei metode testate pentru gestionarea sigură a acreditărilor cu Chezmoi.

## De Ce Este Important

Depozitele de dotfiles sunt adesea publice. O singură cheie API, token sau parolă trimisă accidental poate duce la:

- **Compromiterea contului** în câteva minute de la push.
- **Abuz de facturare cloud** din acreditări cloud expuse.
- **Atacuri pe lanțul de aprovizionare** când token-urile CI sunt expuse.

## Reguli de Aur

1. **Nu stocați niciodată secrete în text clar în controlul versiunilor.**
2. **Criptați în repaus** — folosiți age, SOPS sau un manager de secrete.
3. **Verificați înainte de fiecare commit** — automatizați cu hook-uri pre-commit.

## Metoda 1: Chezmoi + age (Recomandat)

age este un instrument simplu și modern de criptare a fișierelor. Chezmoi are integrare nativă.

### Configurare

```bash
# Instalare age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generare pereche de chei
age-keygen -o ~/.config/chezmoi/key.txt

# Configurare Chezmoi
chezmoi edit-config
```

Adăugați în `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Criptarea unui fișier

```bash
# Adăugare fișier secret criptat
chezmoi add --encrypt ~/.config/gh/hosts.yml

# Fișierul este stocat criptat în directorul sursă
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Secrete în șabloane

```bash
# Folosiți șabloane Chezmoi pentru secrete inline
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Metoda 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) criptează chei specifice în fișiere YAML/JSON, păstrând structura vizibilă.

### Configurare

```bash
# Instalare SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Crearea configurării SOPS
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Criptare

```bash
# Crearea unui fișier de secrete
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Criptare cu SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Utilizare în șabloane

Adăugați în `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Metoda 3: 1Password CLI

1Password CLI (`op`) preia secretele la momentul aplicării fără a le stoca local.

### Configurare

```bash
# Instalare 1Password CLI
brew install --cask 1password-cli   # macOS

# Autentificare
op signin
```

### Utilizare în șabloane Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Avantaje

- Secretele nu ating niciodată discul necriptat.
- Partajare în echipă prin seifuri 1Password.
- Suport pentru rotire automată.

## Plasă de Siguranță Pre-commit

### git-secrets

```bash
# Instalare
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Configurare pentru depozit
git secrets --install
git secrets --register-aws

# Adăugare tipare personalizate
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Excludeți întotdeauna căile sensibile:

```text
# Secrete - nu se face commit niciodată
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Împiedicați Chezmoi să gestioneze fișiere sensibile:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Lista de Verificare pentru Audit

- [ ] Fără secrete în text clar în starea sursă: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Cheia age **nu** este trimisă: `git ls-files | grep key.txt` nu returnează nimic
- [ ] Hook-ul git-secrets este activ: `git secrets --scan`
- [ ] `.gitignore` acoperă `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` trece fără avertismente
- [ ] Fișierele criptate SOPS se decriptează corect: `sops --decrypt chezmoi-data.yaml`

## Testat Pe

| Platformă | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Legături conexe

- [Despre](/ro/about/)
- [Matrice de Compatibilitate](/ro/compatibility/)
- [Aliasuri Securitate](/ro/aliases/security/)
