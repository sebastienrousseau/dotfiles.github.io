---
title: Najlepsze Praktyki Zarzadzania Sekretami | Dotfiles
description: Jak bezpiecznie zarzadzac sekretami, kluczami API i poswiadczeniami w dotfiles za pomoca age, SOPS i 1Password CLI.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Najlepsze Praktyki Zarzadzania Sekretami preview
canonical: /pl/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Zarzadzanie Sekretami
pageType: article
schemaType: TechArticle
permalink: /pl/guides/secret-management/
---

# Najlepsze Praktyki Zarzadzania Sekretami

Trzymaj sekrety poza repozytorium dotfiles. Ten przewodnik omawia trzy przetestowane metody bezpiecznego zarzadzania poswiadczeniami z Chezmoi.

## Dlaczego to wazne

Repozytoria dotfiles sa czesto publiczne. Jeden zatwierdzony klucz API, token lub haslo moze prowadzic do:

- **Przejecia konta** w ciagu minut od wyslania.
- **Naduzycia rozliczen chmurowych** z wycieku poswiadczen chmurowych.
- **Atakow na lancuch dostaw** gdy tokeny CI sa ujawnione.

## Zlote zasady

1. **Nigdy nie przechowuj sekretow w postaci jawnej w kontroli wersji.**
2. **Szyfruj w spoczynku** -- uzyj age, SOPS lub menedzera sekretow.
3. **Weryfikuj przed kazdym commitem** -- zautomatyzuj za pomoca hookow pre-commit.

## Metoda 1: Chezmoi + age (Zalecana)

age to proste, nowoczesne narzedzie do szyfrowania plikow. Chezmoi ma natywna integracje.

### Konfiguracja

```bash
# Zainstaluj age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Wygeneruj pare kluczy
age-keygen -o ~/.config/chezmoi/key.txt

# Skonfiguruj Chezmoi
chezmoi edit-config
```

Dodaj do `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Zaszyfruj plik

```bash
# Dodaj tajny plik jako zaszyfrowany
chezmoi add --encrypt ~/.config/gh/hosts.yml

# Plik jest przechowywany zaszyfrowany w katalogu zrodlowym
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Sekrety w szablonach

```bash
# Uzyj szablonow Chezmoi dla sekretow inline
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Metoda 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) szyfruje okreslone klucze w plikach YAML/JSON, zachowujac widoczna strukture.

### Konfiguracja

```bash
# Zainstaluj SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Utworz konfiguracje SOPS
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Szyfrowanie

```bash
# Utworz plik sekretow
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Zaszyfruj za pomoca SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Uzycie w szablonach

Dodaj do `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Metoda 3: 1Password CLI

1Password CLI (`op`) pobiera sekrety w czasie aplikowania bez przechowywania ich lokalnie.

### Konfiguracja

```bash
# Zainstaluj 1Password CLI
brew install --cask 1password-cli   # macOS

# Zaloguj sie
op signin
```

### Uzycie w szablonach Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Zalety

- Sekrety nigdy nie trafiaja na dysk niezaszyfrowane.
- Udostepnianie zespolowe przez sejfy 1Password.
- Wsparcie automatycznej rotacji.

## Siatka bezpieczenstwa pre-commit

### git-secrets

```bash
# Zainstaluj
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Skonfiguruj dla repozytorium
git secrets --install
git secrets --register-aws

# Dodaj wlasne wzorce
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Zawsze wykluczaj wrazliwe sciezki:

```text
# Sekrety - nigdy nie zatwierdzaj
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Zapobiegaj zarzadzaniu wrazliwymi plikami przez Chezmoi:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Lista kontrolna audytu

- [ ] Brak sekretow w postaci jawnej w stanie zrodlowym: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] Klucz age **nie jest** zatwierdzony: `git ls-files | grep key.txt` zwraca pusty wynik
- [ ] Hook git-secrets jest aktywny: `git secrets --scan`
- [ ] `.gitignore` obejmuje `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` przechodzi bez ostrzezen
- [ ] Pliki zaszyfrowane SOPS deszyfruja sie poprawnie: `sops --decrypt chezmoi-data.yaml`

## Przetestowane na

| Platforma | age | SOPS | 1Password CLI |
|-----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Powiazane

- [O Dotfiles](/pl/about/)
- [Macierz Zgodnosci](/pl/compatibility/)
- [Aliasy Bezpieczenstwa](/pl/aliases/security/)
