---
description: Öffnen Sie Shell-, Git-, SSH- und Server-Konfigurationsdateien sofort mit diesen Shell-Aliase für Bash und Zsh.
lang: de-DE
metaTitle: Configuration Aliase - Dotfiles (DE)
permalink: /de/aliases/configuration/
sidebar: true

meta:
  - name: keywords
    content: konfiguration aliase, shell config, dotfiles, bash aliase, zsh aliase, git config, ssh config
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Öffnen Sie Shell-, Git-, SSH- und Server-Konfigurationsdateien sofort mit diesen Shell-Aliase.
  - name: twitter:title
    content: Configuration Aliase - Dotfiles
  - name: og:title
    content: Configuration Aliase - Dotfiles
  - name: og:description
    content: Öffnen Sie Shell-, Git-, SSH- und Server-Konfigurationsdateien sofort mit diesen Shell-Aliase.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Configuration Aliase

Öffnen Sie Konfigurationsdateien mit einem einzigen Befehl in Ihrem Standard-Editor.

## Übersicht

Diese Aliase sind in `configuration.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Shell-Konfiguration

| Alias | Beschreibung |
|:---|:---|
| `bshrc` | Bash-Konfigurationsdatei öffnen (~/.bashrc) |
| `bshp` | Bash-Profil öffnen (~/.bash_profile) |
| `zshrc` | Zsh-Konfigurationsdatei öffnen (~/.zshrc) |
| `zshp` | Zsh-Profil öffnen (~/.zprofile) |

### Versionskontrolle

| Alias | Beschreibung |
|:---|:---|
| `gcfg` | Git-Konfigurationsdatei öffnen (~/.gitconfig) |
| `gign` | Git-Ignore-Datei öffnen (~/.gitignore) |

### Netzwerk und Server

| Alias | Beschreibung |
|:---|:---|
| `apconf` | Apache-Konfigurationsdatei öffnen |
| `ngconf` | Nginx-Konfigurationsdatei öffnen |
| `sshconf` | SSH-Konfigurationsdatei öffnen (~/.ssh/config) |
| `hosts` | Hosts-Datei öffnen (/etc/hosts) |

### Entwicklungstools

| Alias | Beschreibung |
|:---|:---|
| `dockcomp` | Docker-Compose-Datei öffnen |
| `eddir` | Aktuelles Verzeichnis im Standard-Editor öffnen |
