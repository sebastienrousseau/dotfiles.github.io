---
title: SSH कमिट साइनिंग गाइड | Dotfiles
description: Dotfiles के साथ SSH कुंजियों से Git कमिट और टैग पर हस्ताक्षर कैसे करें। macOS, Linux और WSL के लिए चरण-दर-चरण सेटअप।
lang: hi-IN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: SSH कमिट साइनिंग गाइड preview
canonical: /hi/guides/ssh-signing/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: SSH साइनिंग
pageType: article
schemaType: TechArticle
permalink: /hi/guides/ssh-signing/
---

# SSH कमिट साइनिंग गाइड

अहस्ताक्षरित कमिट कोई भी बना सकता है। हस्ताक्षर साबित करता है:

## कमिट पर हस्ताक्षर क्यों?

- **पहचान** — कमिट कुंजी धारक द्वारा किया गया।
- **अखंडता** — हस्ताक्षर के बाद कमिट में बदलाव नहीं हुआ।
- **विश्वास** — प्लेटफ़ॉर्म "सत्यापित" बैज दिखाते हैं।

## पूर्वापेक्षाएँ

- Git **2.34+** (`git --version`)
- SSH (Ed25519)
- GitHub / GitLab

## चरण 1: साइनिंग कुंजी बनाएँ

```bash
# Generate an Ed25519 key for signing
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_signing

# Verify the key was created
ls -la ~/.ssh/id_signing*
```

## चरण 2: Git कॉन्फ़िगर करें

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

## चरण 3: अनुमत हस्ताक्षरकर्ता सेट करें

```bash
# Create the allowed signers file
mkdir -p ~/.config/git
echo "your@email.com $(cat ~/.ssh/id_signing.pub)" > ~/.config/git/allowed_signers

# Tell Git where to find it
git config --global gpg.ssh.allowedSignersFile ~/.config/git/allowed_signers
```

## चरण 4: साइन और सत्यापित करें

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

## चरण 5: GitHub / GitLab पर पंजीकरण करें

### GitHub

1. **Settings → SSH and GPG keys → New SSH key**
2. **Key type**: **Signing Key**
3. `~/.ssh/id_signing.pub`

### GitLab

1. **Preferences → SSH Keys**
2. **Usage type**: **Signing**
3. `~/.ssh/id_signing.pub`

## Chezmoi एकीकरण

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

## समस्या निवारण

| Problem | Solution |
|---------|----------|
| `error: unsupported value: ssh` | Git 2.34+ |
| `error: Load key: No such file` | `user.signingkey` |
| `No principal matched` | `allowed_signers` |
| SSH agent prompt | `ssh-add ~/.ssh/id_signing` |

## प्लेटफ़ॉर्म नोट्स

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| Git 2.34+ | ✅ | ✅ | ✅ |
| ssh-agent | ✅ Keychain | ✅ systemd | ✅ |
| 1Password SSH agent | ✅ | ✅ | ⚠️ |
| Chezmoi | ✅ | ✅ | ✅ |

## संबंधित

- [गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ](/hi/guides/secret-management/)
- [GPG कॉन्फ़िगरेशन गाइड](/hi/guides/gpg-configuration/)
- [सुरक्षा उपनाम](/hi/aliases/security/)
- [Git उपनाम](/hi/aliases/git/)
