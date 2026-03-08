---
title: Ghid de semnare a commiturilor cu SSH | Dotfiles
description: Cum să semnezi commituri și taguri Git cu chei SSH folosind Dotfiles. Configurare pas cu pas pentru macOS, Linux și WSL cu verificarea semnatarilor autorizați.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Ghid de semnare a commiturilor cu SSH preview
canonical: /ro/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Semnare SSH
pageType: article
schemaType: TechArticle
permalink: /ro/guides/ssh-signing/
---

# Ghid de semnare a commiturilor cu SSH

Commiturile nesemnate pot fi create de oricine. Semnarea dovedește:

## De ce să semnezi commiturile?

- **Identitate** — commitul a fost făcut de deținătorul cheii.
- **Integritate** — commitul nu a fost modificat de la semnare.
- **Încredere** — platformele afișează o insignă "Verificat".

## Cerințe preliminare

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Pasul 1: Generează o cheie de semnare

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Pasul 2: Configurează Git

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

## Pasul 3: Configurează semnatarii autorizați

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Pasul 4: Semnează și verifică

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

## Pasul 5: Înregistrează pe GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Integrare Chezmoi

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

## Depanare

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Note de platformă

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Corelat

- [Cele mai bune practici pentru gestionarea secretelor](/ro/guides/secret-management/)
- [Ghid de configurare GPG](/ro/guides/gpg-configuration/)
- [Aliasuri de securitate](/ro/aliases/security/)
- [Aliasuri Git](/ro/aliases/git/)
