---
title: Przewodnik po podpisywaniu commitów SSH | Dotfiles
description: Jak podpisywać commity i tagi Git kluczami SSH z Dotfiles. Konfiguracja krok po kroku dla macOS, Linux i WSL z weryfikacją autoryzowanych sygnatariuszy.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Przewodnik po podpisywaniu commitów SSH preview
canonical: /pl/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Podpisywanie SSH
pageType: article
schemaType: TechArticle
permalink: /pl/guides/ssh-signing/
---

# Przewodnik po podpisywaniu commitów SSH

Niepodpisane commity może tworzyć każdy. Podpis dowodzi:

## Dlaczego podpisywać commity?

- **Tożsamość** — commit został wykonany przez posiadacza klucza.
- **Integralność** — commit nie został zmieniony od podpisania.
- **Zaufanie** — platformy wyświetlają odznakę „Zweryfikowany".

## Wymagania wstępne

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## Krok 1: Wygeneruj klucz podpisywania

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## Krok 2: Skonfiguruj Git

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

## Krok 3: Skonfiguruj autoryzowanych sygnatariuszy

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## Krok 4: Podpisz i zweryfikuj

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

## Krok 5: Zarejestruj na GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Integracja z Chezmoi

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

## Rozwiązywanie problemów

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## Uwagi platformowe

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## Powiązane

- [Najlepsze praktyki zarządzania sekretami](/pl/guides/secret-management/)
- [Przewodnik konfiguracji GPG](/pl/guides/gpg-configuration/)
- [Aliasy bezpieczeństwa](/pl/aliases/security/)
- [Aliasy Git](/pl/aliases/git/)
