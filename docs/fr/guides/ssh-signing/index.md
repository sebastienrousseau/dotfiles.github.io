---
title: Guide de signature de commits SSH | Dotfiles
description: Comment signer les commits et tags Git avec des clés SSH en utilisant Dotfiles. Configuration étape par étape pour macOS, Linux et WSL avec vérification des signataires.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Guide de signature de commits SSH preview
canonical: /fr/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Signature SSH
pageType: article
schemaType: TechArticle
permalink: /fr/guides/ssh-signing/
---

# Guide de signature de commits SSH

Les commits non signés peuvent être créés par n'importe qui. La signature prouve :

## Pourquoi signer les commits ?

- **Identité** — le commit a été fait par le détenteur de la clé.
- **Intégrité** — le commit n'a pas été modifié depuis la signature.
- **Confiance** — les plateformes affichent un badge « Vérifié ».

## Prérequis

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Étape 1 : Générer une clé de signature

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Étape 2 : Configurer Git

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

## Étape 3 : Configurer les signataires autorisés

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Étape 4 : Signer et vérifier

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

## Étape 5 : Enregistrer sur GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Intégration Chezmoi

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

## Dépannage

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Notes de plateforme

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Pages connexes

- [Meilleures pratiques de gestion des secrets](/fr/guides/secret-management/)
- [Guide de configuration GPG](/fr/guides/gpg-configuration/)
- [Alias de sécurité](/fr/aliases/security/)
- [Alias Git](/fr/aliases/git/)
