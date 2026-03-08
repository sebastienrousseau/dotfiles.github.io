---
title: Praktik Terbaik Manajemen Rahasia | Dotfiles
description: Cara mengelola rahasia, kunci API, dan kredensial dengan aman di dotfiles Anda menggunakan age, SOPS, dan 1Password CLI.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Praktik Terbaik Manajemen Rahasia preview
canonical: /id/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Manajemen Rahasia
pageType: article
schemaType: TechArticle
permalink: /id/guides/secret-management/
---

# Praktik Terbaik Manajemen Rahasia

Jauhkan rahasia dari repositori dotfiles Anda. Panduan ini mencakup tiga metode yang diuji untuk mengelola kredensial dengan aman menggunakan Chezmoi.

## Mengapa Ini Penting

Repositori dotfiles sering kali bersifat publik. Satu kunci API, token, atau kata sandi yang di-commit dapat menyebabkan:

- **Kompromi akun** dalam hitungan menit setelah push.
- **Penyalahgunaan tagihan cloud** dari kredensial cloud yang bocor.
- **Serangan rantai pasokan** ketika token CI terekspos.

## Aturan Emas

1. **Jangan pernah menyimpan rahasia teks biasa dalam kontrol versi.**
2. **Enkripsi saat diam** — gunakan age, SOPS, atau manajer rahasia.
3. **Verifikasi sebelum setiap commit** — otomatiskan dengan hook pre-commit.

## Metode 1: Chezmoi + age (Direkomendasikan)

age adalah alat enkripsi file yang sederhana dan modern. Chezmoi memiliki integrasi native.

### Pengaturan

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Tambahkan ke `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Enkripsi file

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Rahasia template

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Metode 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) mengenkripsi kunci tertentu dalam file YAML/JSON, menjaga struktur tetap terlihat.

### Pengaturan

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

### Enkripsi

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Penggunaan dalam template

Tambahkan ke `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Metode 3: 1Password CLI

1Password CLI (`op`) mengambil rahasia saat waktu penerapan tanpa menyimpannya secara lokal.

### Pengaturan

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Penggunaan dalam template Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Keuntungan

- Rahasia tidak pernah menyentuh disk tanpa enkripsi.
- Berbagi tim melalui vault 1Password.
- Dukungan rotasi otomatis.

## Jaring pengaman pre-commit

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

Selalu kecualikan jalur sensitif:

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

Cegah Chezmoi mengelola file sensitif:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Daftar Periksa Audit

- [ ] Tidak ada rahasia teks biasa dalam status sumber: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Kunci age **tidak** di-commit: `git ls-files | grep key.txt` tidak mengembalikan apa pun
- [ ] Hook git-secrets aktif: `git secrets --scan`
- [ ] `.gitignore` mencakup `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` lulus tanpa peringatan
- [ ] File terenkripsi SOPS terdekripsi dengan benar: `sops --decrypt chezmoi-data.yaml`

## Diuji Pada

| Platform | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Terkait

- [Tentang](/id/about/)
- [Matriks Kompatibilitas](/id/compatibility/)
- [Alias Keamanan](/id/aliases/security/)
