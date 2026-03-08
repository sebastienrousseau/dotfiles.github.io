---
title: GPG-Konfigurationsanleitung | Dotfiles
description: GPG für Git-Commit-Signierung konfigurieren mit Dotfiles. Schlüsselgenerierung, Git-Integration und Chezmoi-Verwaltung auf macOS, Linux und WSL.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: GPG-Konfigurationsanleitung preview
canonical: /de/guides/gpg-configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: GPG-Konfiguration
pageType: article
schemaType: TechArticle
permalink: /de/guides/gpg-configuration/
---

# GPG-Konfigurationsanleitung

GPG (GNU Privacy Guard) ist der traditionelle Standard für Commit-Signierung:

## Warum GPG-Signierung?

- **Verifiziert-Abzeichen** auf GitHub, GitLab und Bitbucket.
- **Web of Trust** — andere können Ihren Schlüssel signieren.
- **Schlüsselablauf und -widerruf** — eingebautes Lebenszyklusmanagement.
- **Verschlüsselung** — derselbe Schlüssel verschlüsselt Dateien und E-Mails.

## Voraussetzungen

- GnuPG **2.2+** (`gpg --version`)
- Git **2.0+**
- GitHub / GitLab

## Schritt 1: GPG-Schlüssel generieren

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

## Schritt 2: Git konfigurieren

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

## Schritt 3: GPG-Agent konfigurieren

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

## Schritt 4: Signieren und Verifizieren

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

## Schritt 5: Schlüssel exportieren und registrieren

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

## Schlüsselverwaltung

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

## Chezmoi-Integration

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

## Fehlerbehebung

| Problem | Solution |
|---------|----------|
| `gpg: signing failed: No secret key` | `user.signingkey` ↔ `gpg --list-secret-keys` |
| `gpg: signing failed: Inappropriate ioctl` | `export GPG_TTY=$(tty)` |
| No passphrase prompt | `pinentry-mac` / `pinentry-curses` |
| `error: gpg failed to sign the data` | `gpgconf --kill gpg-agent` |

## Plattformhinweise

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| GnuPG 2.2+ | ✅ | ✅ | ✅ |
| pinentry-mac | ✅ | N/A | N/A |
| pinentry-curses | ✅ | ✅ | ✅ |
| Keyserver | ✅ | ✅ | ✅ |
| Chezmoi | ✅ | ✅ | ✅ |

## Verwandte Seiten

- [Best Practices für Geheimnisverwaltung](/de/guides/secret-management/)
- [SSH-Commit-Signierung](/de/guides/ssh-signing/)
- [Sicherheits-Aliases](/de/aliases/security/)
- [Git-Aliases](/de/aliases/git/)
