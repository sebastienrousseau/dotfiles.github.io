---
title: SSH-Commit-Signierung Anleitung | Dotfiles
description: Git-Commits und Tags mit SSH-Schlüsseln signieren mit Dotfiles. Schritt-für-Schritt-Einrichtung für macOS, Linux und WSL mit Allowed-Signers-Verifizierung.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH-Commit-Signierung Anleitung preview
canonical: /de/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH-Signierung
pageType: article
schemaType: TechArticle
permalink: /de/guides/ssh-signing/
---

# SSH-Commit-Signierung Anleitung

Unsignierte Commits können von jedem erstellt werden. Signierung beweist:

## Warum Commits signieren?

- **Identität** — der Commit wurde vom Schlüsselinhaber erstellt.
- **Integrität** — der Commit wurde seit der Signierung nicht verändert.
- **Vertrauen** — Plattformen zeigen ein „Verifiziert"-Abzeichen.

## Voraussetzungen

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Schritt 1: Signierungsschlüssel generieren

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Schritt 2: Git konfigurieren

```bash
# Set the signing format to SSH
git config --global gpg.format ssh

# Point to your signing key
git config --global user.signingkey ~/.ssh/id_signing.pub

# Enable automatic commit signing
git config --global commit.gpgsign true

# Enable automatic tag signing
git config --global tag.gpgsign true
```

```ini
[gpg]
    format = ssh
[user]
    signingkey = ~/.ssh/id_signing.pub
[commit]
    gpgsign = true
[tag]
    gpgsign = true
```

## Schritt 3: Erlaubte Unterzeichner einrichten

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Schritt 4: Signieren und Verifizieren

```bash
# Commits are now signed automatically
git commit -m "feat: add new feature"

# Or sign a single commit explicitly
git commit -S -m "feat: signed commit"

# Sign a tag
git tag -s v1.0.0 -m "Release v1.0.0"

# Verify the last commit
git log --show-signature -1

# Verify a tag
git tag -v v1.0.0
```

## Schritt 5: Bei GitHub / GitLab registrieren

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi-Integration

```bash
# Add your Git config
chezmoi add ~/.gitconfig

# Add your allowed signers file
chezmoi add ~/.config/git/allowed_signers

# Add your signing key (encrypt it!)
chezmoi add --encrypt ~/.ssh/id_signing
```

```ini
[gpg]
    format = ssh
[user]
    signingkey = {{ .chezmoi.homeDir }}/.ssh/id_signing.pub
[gpg "ssh"]
    allowedSignersFile = {{ .chezmoi.homeDir }}/.config/git/allowed_signers
[commit]
    gpgsign = true
[tag]
    gpgsign = true
```

## Fehlerbehebung

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Plattformhinweise

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Verwandte Seiten

- [Best Practices für Geheimnisverwaltung](/de/guides/secret-management/)
- [GPG-Konfigurationsanleitung](/de/guides/gpg-configuration/)
- [Sicherheits-Aliases](/de/aliases/security/)
- [Git-Aliases](/de/aliases/git/)
