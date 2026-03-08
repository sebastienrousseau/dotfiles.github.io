---
title: Gizli Bilgi Yonetimi En Iyi Uygulamalari | Dotfiles
description: age, SOPS ve 1Password CLI kullanarak dotfiles'inizdeki gizli bilgileri, API anahtarlarini ve kimlik bilgilerini guvenle yonetme.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Gizli Bilgi Yonetimi En Iyi Uygulamalari onizleme
canonical: /tr/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gizli Bilgi Yonetimi
pageType: article
schemaType: TechArticle
permalink: /tr/guides/secret-management/
---

# Gizli Bilgi Yonetimi En Iyi Uygulamalari

Gizli bilgileri dotfiles deponuzun disinda tutun. Bu kilavuz, Chezmoi ile kimlik bilgilerini guvenle yonetmek icin test edilmis uc yontemi kapsamaktadir.

## Neden Onemli

Dotfiles depolari genellikle herkese aciktir. Tek bir kaydedilmis API anahtari, jeton veya parola sunlara yol acabilir:

- **Hesap ele gecirme** push'tan dakikalar icinde.
- **Bulut fatura suistimali** sizdirilmis bulut kimlik bilgilerinden.
- **Tedarik zinciri saldirilari** CI jetonlari ifsa edildiginde.

## Altin Kurallar

1. **Duz metin gizli bilgileri asla surum kontrolunde saklamayin.**
2. **Duragan halde sifreleyin** — age, SOPS veya bir gizli bilgi yoneticisi kullanin.
3. **Her commit oncesi dogrulayin** — on-commit kancalariyla otomatiklestirin.

## Yontem 1: Chezmoi + age (Onerilen)

age basit, modern bir dosya sifreleme aracidir. Chezmoi'nin yerel entegrasyonu vardir.

### Kurulum

```bash
# age'i yukleyin
brew install age    # macOS
sudo apt install age  # Ubuntu

# Bir anahtar cifti olusturun
age-keygen -o ~/.config/chezmoi/key.txt

# Chezmoi'ye kullanmasini soyleyin
chezmoi edit-config
```

`~/.config/chezmoi/chezmoi.toml` dosyasina ekleyin:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Bir dosyayi sifreleyin

```bash
# Gizli bir dosyayi sifrelenmis olarak ekleyin
chezmoi add --encrypt ~/.config/gh/hosts.yml

# Dosya kaynak dizininde sifrelenmis olarak saklanir
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Sablon gizli bilgileri

```bash
# Satir ici gizli bilgiler icin Chezmoi sablonlari kullanin
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Yontem 2: Chezmoi + SOPS

SOPS (Secrets OPerationS), YAML/JSON dosyalarindaki belirli anahtarlari sifreler ve yapiyi gorunur tutar.

### Kurulum

```bash
# SOPS'u yukleyin
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Bir SOPS yapilandirmasi olusturun
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Sifreleme

```bash
# Bir gizli bilgi dosyasi olusturun
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# SOPS ile sifreleyin
sops --encrypt --in-place chezmoi-data.yaml
```

### Sablonlarda kullanma

`chezmoi.toml` dosyasina ekleyin:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Yontem 3: 1Password CLI

1Password CLI (`op`), gizli bilgileri yerel olarak saklamadan uygulama zamaninda alir.

### Kurulum

```bash
# 1Password CLI'yi yukleyin
brew install --cask 1password-cli   # macOS

# Oturum acin
op signin
```

### Chezmoi sablonlarinda kullanma

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Avantajlar

- Gizli bilgiler asla sifrelenmemis olarak diske dokunmaz.
- 1Password kasalari araciligiyla takim paylasimi.
- Otomatik rotasyon destegi.

## On-Commit Guvenlik Agi

### git-secrets

```bash
# Yukleyin
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Deponuz icin yapilandirin
git secrets --install
git secrets --register-aws

# Ozel kaliplar ekleyin
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Hassas yollari her zaman haric tutin:

```text
# Gizli bilgiler - asla kaydetmeyin
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Chezmoi'nin hassas dosyalari yonetmesini engelleyin:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Denetim Kontrol Listesi

- [ ] Kaynak durumunda duz metin gizli bilgi yok: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] age anahtari kaydedilmemis: `git ls-files | grep key.txt` bos donmeli
- [ ] git-secrets kancasi aktif: `git secrets --scan`
- [ ] `.gitignore` `*.age`, `*.key`, `.sops.yaml` dosyalarini kapsiyor
- [ ] `dot doctor` uyari olmadan geciyor
- [ ] SOPS ile sifrelenmis dosyalar dogru cozuluyor: `sops --decrypt chezmoi-data.yaml`

## Test Edilen Platformlar

| Platform | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Ilgili

- [Hakkinda](/tr/about/)
- [Uyumluluk Matrisi](/tr/compatibility/)
- [Guvenlik Takma Adlari](/tr/aliases/security/)
