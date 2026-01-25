---
title: "Configuratie-aliassen: Snelle toegang tot configuratiebestanden"
description: "Open shell-, Git-, SSH- en serverconfiguratie-bestanden direct met deze shell-aliassen voor Bash en Zsh."
lang: nl-NL
metaTitle: "Configuratie-aliassen | Dotfiles"
permalink: /nl/aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "configuratie aliassen, shell config, dotfiles, bash aliassen, zsh aliassen, git config, ssh config"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Configuratie-aliassen | Dotfiles
  - name: twitter:description
    content: Open shell-, Git-, SSH- en serverconfiguratie-bestanden direct met deze shell-aliassen.
  - name: og:title
    content: Configuratie-aliassen | Dotfiles
  - name: og:description
    content: Open shell-, Git-, SSH- en serverconfiguratie-bestanden direct met deze shell-aliassen.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Configuratie-aliassen

Open configuratiebestanden in je standaardeditor met een enkel commando.

## Overzicht

Configuratie-aliassen bieden snelkoppelingen om vaak bewerkte configuratiebestanden te openen. Deze aliassen zijn gedefinieerd in `configuration.aliases.sh` en worden automatisch geladen door chezmoi.

Elke alias opent het bijbehorende bestand in de standaard teksteditor van je systeem, zodat je geen bestandspaden hoeft te onthouden of lange commando's hoeft te typen.

## Referentie

### Shell-configuratie

| Alias | Beschrijving |
|-------|-------------|
| `bshrc` | Open Bash-configuratiebestand (~/.bashrc) |
| `bshp` | Open Bash-profiel (~/.bash_profile) |
| `zshrc` | Open Zsh-configuratiebestand (~/.zshrc) |
| `zshp` | Open Zsh-profiel (~/.zprofile) |

### Versiebeheer

| Alias | Beschrijving |
|-------|-------------|
| `gcfg` | Open Git-configuratiebestand (~/.gitconfig) |
| `gign` | Open Git-ignore bestand (~/.gitignore) |

### Netwerk en servers

| Alias | Beschrijving |
|-------|-------------|
| `apconf` | Open Apache-configuratiebestand |
| `ngconf` | Open Nginx-configuratiebestand |
| `sshconf` | Open SSH-configuratiebestand (~/.ssh/config) |
| `hosts` | Open hosts-bestand (/etc/hosts) |

### Ontwikkeltools

| Alias | Beschrijving |
|-------|-------------|
| `dockcomp` | Open Docker Compose-bestand |
| `eddir` | Open huidige map in standaardeditor |
