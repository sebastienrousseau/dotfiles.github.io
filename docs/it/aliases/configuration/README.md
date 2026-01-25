---
description: Apri file di configurazione shell, Git, SSH e server istantaneamente con questi alias shell per Bash e Zsh.
lang: it-IT
metaTitle: Alias Configuration - Dotfiles (IT)
permalink: /aliases/configuration/
sidebar: true

meta:
  - name: keywords
    content: alias configurazione, config shell, dotfiles, alias bash, alias zsh, config git, config ssh
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Configuration - Dotfiles
  - name: twitter:description
    content: Apri file di configurazione shell, Git, SSH e server istantaneamente con questi alias shell.
  - name: og:title
    content: Alias Configuration - Dotfiles
  - name: og:description
    content: Apri file di configurazione shell, Git, SSH e server istantaneamente con questi alias shell.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Configuration

Apri file di configurazione nel tuo editor predefinito con un singolo comando.

## Panoramica

Gli alias configuration forniscono scorciatoie per aprire file di configurazione modificati frequentemente. Questi alias sono definiti in `configuration.aliases.sh` e caricati automaticamente da chezmoi.

Ogni alias avvia il file corrispondente nell'editor di testo predefinito del sistema, eliminando la necessita di ricordare percorsi file o digitare comandi lunghi.

## Riferimento

### Configurazione Shell

| Alias | Descrizione |
|-------|-------------|
| `bshrc` | Apri file configurazione Bash (~/.bashrc) |
| `bshp` | Apri profilo Bash (~/.bash_profile) |
| `zshrc` | Apri file configurazione Zsh (~/.zshrc) |
| `zshp` | Apri profilo Zsh (~/.zprofile) |

### Controllo versione

| Alias | Descrizione |
|-------|-------------|
| `gcfg` | Apri file configurazione Git (~/.gitconfig) |
| `gign` | Apri file Git ignore (~/.gitignore) |

### Rete e server

| Alias | Descrizione |
|-------|-------------|
| `apconf` | Apri file configurazione Apache |
| `ngconf` | Apri file configurazione Nginx |
| `sshconf` | Apri file configurazione SSH (~/.ssh/config) |
| `hosts` | Apri file hosts (/etc/hosts) |

### Strumenti sviluppo

| Alias | Descrizione |
|-------|-------------|
| `dockcomp` | Apri file Docker Compose |
| `eddir` | Apri directory corrente nell'editor predefinito |
