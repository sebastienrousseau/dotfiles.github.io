---
title: Przewodnik konfiguracji GPG | Dotfiles
description: Jak skonfigurować GPG do podpisywania commitów Git z Dotfiles. Generowanie kluczy, integracja z Git i zarządzanie Chezmoi na macOS, Linux i WSL.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Przewodnik konfiguracji GPG preview
canonical: /pl/guides/gpg-configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Konfiguracja GPG
pageType: article
schemaType: TechArticle
permalink: /pl/guides/gpg-configuration/
---

# Przewodnik konfiguracji GPG

GPG (GNU Privacy Guard) to tradycyjny standard podpisywania commitów:

## Dlaczego podpisywanie GPG?

- **Odznaki weryfikacji** na GitHub, GitLab i Bitbucket.
- **Sieć zaufania** — inni mogą podpisać Twój klucz.
- **Wygaśnięcie i odwołanie kluczy** — wbudowane zarządzanie cyklem życia.
- **Szyfrowanie** — ten sam klucz szyfruje pliki i e-maile.

## Wymagania wstępne

- GnuPG **2.2+** (`gpg --version`)
- Git **2.0+**
- GitHub / GitLab

## Krok 1: Wygeneruj klucz GPG

```bash
# Generate a new GPG key (RSA 4096-bit)
gpg --full-generate-key
```

1. **(1) RSA and RSA**
2. **4096**
3. **1y**
4. **Your Full Name**
5. **your@email.com**

```bash
# List secret keys with key IDs
gpg --list-secret-keys --keyid-format=long
```

```text
sec   rsa4096/ABC123DEF4567890 2026-03-08 [SC] [expires: 2027-03-08]
      ABCDEF1234567890ABCDEF1234567890ABCDEF12
uid                 [ultimate] Your Name <your@email.com>
ssb   rsa4096/1234567890ABCDEF 2026-03-08 [E] [expires: 2027-03-08]
```

## Krok 2: Skonfiguruj Git

```bash
# Set your signing key
git config --global user.signingkey ABC123DEF4567890

# Enable automatic commit signing
git config --global commit.gpgsign true

# Enable automatic tag signing
git config --global tag.gpgsign true

# Set the GPG program
git config --global gpg.program gpg
```

```ini
[user]
    signingkey = ABC123DEF4567890
[commit]
    gpgsign = true
[tag]
    gpgsign = true
[gpg]
    program = gpg
```

## Krok 3: Skonfiguruj agenta GPG

```bash
# Create or edit gpg-agent.conf
mkdir -p ~/.gnupg
cat > ~/.gnupg/gpg-agent.conf << 'EOF'
default-cache-ttl 28800
max-cache-ttl 28800
pinentry-program /usr/bin/pinentry-curses
EOF

# Restart the agent
gpgconf --kill gpg-agent
gpg-agent --daemon
```

### macOS

```bash
# Install pinentry-mac
brew install pinentry-mac
echo "pinentry-program $(which pinentry-mac)" > ~/.gnupg/gpg-agent.conf
gpgconf --kill gpg-agent
```

### GPG TTY

```bash
export GPG_TTY=$(tty)
```

## Krok 4: Podpisz i zweryfikuj

```bash
# Commits are now signed automatically
git commit -m "feat: add new feature"

# Or sign explicitly
git commit -S -m "feat: signed commit"

# Sign a tag
git tag -s v1.0.0 -m "Release v1.0.0"

# Verify the last commit
git log --show-signature -1

# Verify a tag
git tag -v v1.0.0
```

## Krok 5: Eksportuj i zarejestruj klucz

```bash
# Export in ASCII format
gpg --armor --export ABC123DEF4567890
```

### GitHub

1. **Settings → SSH and GPG keys → New GPG key**
2. `-----BEGIN PGP PUBLIC KEY BLOCK-----`

### GitLab

1. **Preferences → GPG Keys**

### Keyserver

```bash
gpg --keyserver keys.openpgp.org --send-keys ABC123DEF4567890
```

## Zarządzanie kluczami

```bash
# Extend expiration
gpg --edit-key ABC123DEF4567890
# expire → save

# Backup secret key
gpg --armor --export-secret-keys ABC123DEF4567890 > gpg-secret-key.asc

# Backup trust
gpg --export-ownertrust > gpg-trust.txt

# Restore
gpg --import gpg-secret-key.asc
gpg --import-ownertrust gpg-trust.txt
```

## Integracja z Chezmoi

```bash
# Add GPG config files
chezmoi add ~/.gnupg/gpg.conf
chezmoi add ~/.gnupg/gpg-agent.conf
chezmoi add ~/.gitconfig
```

```ini
[user]
    signingkey = {{ .gpg_key_id }}
[commit]
    gpgsign = true
[tag]
    gpgsign = true
[gpg]
    program = gpg
```

```toml
[data]
gpg_key_id = "ABC123DEF4567890"
```

## Rozwiązywanie problemów

| Problem | Solution |
|---------|----------|
| `gpg: signing failed: No secret key` | `user.signingkey` ↔ `gpg --list-secret-keys` |
| `gpg: signing failed: Inappropriate ioctl` | `export GPG_TTY=$(tty)` |
| No passphrase prompt | `pinentry-mac` / `pinentry-curses` |
| `error: gpg failed to sign the data` | `gpgconf --kill gpg-agent` |

## Uwagi platformowe

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| GnuPG 2.2+ | ✅ | ✅ | ✅ |
| pinentry-mac | ✅ | N/A | N/A |
| pinentry-curses | ✅ | ✅ | ✅ |
| Keyserver | ✅ | ✅ | ✅ |
| Chezmoi | ✅ | ✅ | ✅ |

## Powiązane

- [Najlepsze praktyki zarządzania sekretami](/pl/guides/secret-management/)
- [Przewodnik podpisywania SSH](/pl/guides/ssh-signing/)
- [Aliasy bezpieczeństwa](/pl/aliases/security/)
- [Aliasy Git](/pl/aliases/git/)
