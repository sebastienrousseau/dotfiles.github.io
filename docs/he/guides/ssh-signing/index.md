---
title: מדריך חתימת קומיטים עם SSH | Dotfiles
description: כיצד לחתום על קומיטים ותגיות Git באמצעות מפתחות SSH עם Dotfiles. הגדרה שלב אחר שלב עבור macOS, Linux ו-WSL עם אימות חותמים מורשים.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: מדריך חתימת קומיטים עם SSH preview
canonical: /he/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: חתימת SSH
pageType: article
schemaType: TechArticle
permalink: /he/guides/ssh-signing/
---

# מדריך חתימת קומיטים עם SSH

קומיטים לא חתומים יכולים להיווצר על ידי כל אחד. חתימה מוכיחה:

## למה לחתום על קומיטים?

- **זהות** — הקומיט נעשה על ידי בעל המפתח.
- **שלמות** — הקומיט לא שונה מאז החתימה.
- **אמון** — פלטפורמות מציגות תג "מאומת".

## דרישות מוקדמות

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## שלב 1: יצירת מפתח חתימה

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## שלב 2: הגדרת Git

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

## שלב 3: הגדרת חותמים מורשים

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## שלב 4: חתימה ואימות

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

## שלב 5: רישום ב-GitHub / GitLab

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## אינטגרציית Chezmoi

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

## פתרון בעיות

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## הערות פלטפורמה

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## קשור

- [שיטות עבודה מומלצות לניהול סודות](/he/guides/secret-management/)
- [מדריך הגדרת GPG](/he/guides/gpg-configuration/)
- [כינויי אבטחה](/he/aliases/security/)
- [כינויי Git](/he/aliases/git/)
