---
title: "Alias Configuration: acceso rápido a archivos de configuración"
description: "Abre archivos de configuración de shell, Git, SSH y servidor al instante con estos alias."
lang: es-ES
metaTitle: "Alias Configuration | Dotfiles"
permalink: /aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "alias configuración, config shell, dotfiles, alias bash, alias zsh, config git, config ssh"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Configuration | Dotfiles
  - name: twitter:description
    content: Abre archivos de configuración de shell, Git, SSH y servidor al instante con estos alias.
  - name: og:title
    content: Alias Configuration | Dotfiles
  - name: og:description
    content: Abre archivos de configuración de shell, Git, SSH y servidor al instante con estos alias.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Configuration

Abre archivos de configuración en tu editor por defecto con un solo comando.

## Descubrir

Los alias configuration ofrecen atajos para abrir archivos de configuración usados con frecuencia. Estos alias se definen en `configuration.aliases.sh` y se cargan automáticamente por chezmoi.

Cada alias abre el archivo correspondiente en el editor de texto predeterminado del sistema, sin tener que recordar rutas.

## Referencia

### Configuración del shell

| Alias | Descripción |
|-------|-------------|
| `bshrc` | Abrir configuración Bash (~/.bashrc) |
| `bshp` | Abrir perfil Bash (~/.bash_profile) |
| `zshrc` | Abrir configuración Zsh (~/.zshrc) |
| `zshp` | Abrir perfil Zsh (~/.zprofile) |

### Control de versiones

| Alias | Descripción |
|-------|-------------|
| `gcfg` | Abrir configuración Git (~/.gitconfig) |
| `gign` | Abrir archivo Git ignore (~/.gitignore) |

### Red y servidores

| Alias | Descripción |
|-------|-------------|
| `apconf` | Abrir configuración Apache |
| `ngconf` | Abrir configuración Nginx |
| `sshconf` | Abrir configuración SSH (~/.ssh/config) |
| `hosts` | Abrir archivo hosts (/etc/hosts) |

### Herramientas de desarrollo

| Alias | Descripción |
|-------|-------------|
| `dockcomp` | Abrir un archivo Docker Compose |
| `eddir` | Abrir el directorio actual en el editor por defecto |
