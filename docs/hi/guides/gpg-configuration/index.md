---
title: GPG कॉन्फ़िगरेशन गाइड | Dotfiles
description: Dotfiles के साथ Git कमिट साइनिंग के लिए GPG कॉन्फ़िगर कैसे करें। कुंजी उत्पादन, Git एकीकरण और Chezmoi प्रबंधन macOS, Linux और WSL पर।
lang: hi-IN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: GPG कॉन्फ़िगरेशन गाइड preview
canonical: /hi/guides/gpg-configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: GPG कॉन्फ़िगरेशन
pageType: article
schemaType: TechArticle
permalink: /hi/guides/gpg-configuration/
---

# GPG कॉन्फ़िगरेशन गाइड

GPG (GNU Privacy Guard) कमिट साइनिंग का पारंपरिक मानक है:

## GPG साइनिंग क्यों?

- **सत्यापित बैज** GitHub, GitLab और Bitbucket पर।
- **विश्वास का जाल** — अन्य आपकी कुंजी पर हस्ताक्षर कर सकते हैं।
- **कुंजी समाप्ति और निरसन** — अंतर्निहित जीवनचक्र प्रबंधन।
- **एन्क्रिप्शन** — वही कुंजी फ़ाइलों और ईमेल को एन्क्रिप्ट करती है।

## पूर्वापेक्षाएँ

- GnuPG **2.2+** (`gpg --version`)
- Git **2.0+**
- GitHub / GitLab

## चरण 1: GPG कुंजी बनाएँ

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

## चरण 2: Git कॉन्फ़िगर करें

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

## चरण 3: GPG एजेंट कॉन्फ़िगर करें

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

## चरण 4: साइन और सत्यापित करें

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

## चरण 5: कुंजी निर्यात और पंजीकरण करें

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

## कुंजी प्रबंधन

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

## Chezmoi एकीकरण

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

## समस्या निवारण

| Problem | Solution |
|---------|----------|
| `gpg: signing failed: No secret key` | `user.signingkey` ↔ `gpg --list-secret-keys` |
| `gpg: signing failed: Inappropriate ioctl` | `export GPG_TTY=$(tty)` |
| No passphrase prompt | `pinentry-mac` / `pinentry-curses` |
| `error: gpg failed to sign the data` | `gpgconf --kill gpg-agent` |

## प्लेटफ़ॉर्म नोट्स

| Feature | macOS | Linux | WSL |
|---------|:-----:|:-----:|:---:|
| GnuPG 2.2+ | ✅ | ✅ | ✅ |
| pinentry-mac | ✅ | N/A | N/A |
| pinentry-curses | ✅ | ✅ | ✅ |
| Keyserver | ✅ | ✅ | ✅ |
| Chezmoi | ✅ | ✅ | ✅ |

## संबंधित

- [गोपनीयता प्रबंधन सर्वोत्तम प्रथाएँ](/hi/guides/secret-management/)
- [SSH कमिट साइनिंग गाइड](/hi/guides/ssh-signing/)
- [सुरक्षा उपनाम](/hi/aliases/security/)
- [Git उपनाम](/hi/aliases/git/)
