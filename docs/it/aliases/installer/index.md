---
title: Alias Installer | Dotfiles
description: Alias shell per bootstrap e distribuzione remota dotfiles. Installa localmente o teleporta la configurazione su server remoti.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Installer preview
canonical: /it/aliases/installer/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Installer
pageType: docs
schemaType: WebPage
metaTitle: Alias Installer - Dotfiles (IT)
permalink: /it/aliases/installer/
sidebar: true
meta:
  - name: keywords
    content: alias installer, bootstrap dotfiles, distribuzione remota, teleport configurazione, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Installer - Dotfiles
  - name: twitter:description
    content: Alias shell per bootstrap e distribuzione remota dotfiles.
  - name: og:title
    content: Alias Installer - Dotfiles
  - name: og:description
    content: Alias shell per bootstrap e distribuzione remota dotfiles.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Installer

Strumenti per bootstrap e distribuzione remota.

## Panoramica

Questi alias semplificano l'installazione dei dotfiles, sia localmente che su server remoti. Definiti in `installer.aliases.sh` e caricati automaticamente da chezmoi.

## Riferimento

| Alias | Descrizione |
|-------|-------------|
| `dot-install` | Esegui lo script di bootstrap `install.sh` localmente. |
| `dot-teleport` | Teleporta la tua configurazione su un server remoto (`dot-teleport user@host`). |
