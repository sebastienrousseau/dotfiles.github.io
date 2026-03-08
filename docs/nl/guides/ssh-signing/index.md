---
title: SSH Commit-ondertekeningsgids | Dotfiles
description: Git-commits en tags ondertekenen met SSH-sleutels met Dotfiles. Stapsgewijze instelling voor macOS, Linux en WSL met verificatie van toegestane ondertekenaars.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH Commit-ondertekeningsgids preview
canonical: /nl/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH-ondertekening
pageType: article
schemaType: TechArticle
permalink: /nl/guides/ssh-signing/
---

# SSH Commit-ondertekeningsgids

Niet-ondertekende commits kunnen door iedereen worden gemaakt. Ondertekening bewijst:

## Waarom commits ondertekenen?

- **Identiteit** — de commit is gemaakt door de sleutelhouder.
- **Integriteit** — de commit is niet gewijzigd sinds ondertekening.
- **Vertrouwen** — platforms tonen een "Geverifieerd"-badge.

## Vereisten

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Stap 1: Ondertekeningssleutel genereren

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Stap 2: Git configureren

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

## Stap 3: Toegestane ondertekenaars instellen

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Stap 4: Ondertekenen en verifiëren

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

## Stap 5: Registreren bij GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi-integratie

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

## Probleemoplossing

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Platformopmerkingen

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Gerelateerd

- [Best practices geheimenbeheer](/nl/guides/secret-management/)
- [GPG-configuratiegids](/nl/guides/gpg-configuration/)
- [Beveiligingsaliassen](/nl/aliases/security/)
- [Git-aliassen](/nl/aliases/git/)
