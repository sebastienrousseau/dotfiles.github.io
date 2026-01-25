---
title: "Alias Modern: reemplazos Unix basados en Rust"
description: "Alias modernos para eza, bat y ripgrep. Sustituye utilidades Unix heredadas por alternativas Rust más rápidas."
lang: es-ES
metaTitle: "Alias Modern | Dotfiles"
permalink: /aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "alias modern, eza, bat, ripgrep, herramientas cli rust, dotfiles, shell"
---

# Alias Modern

Reemplazos más rápidos e inteligentes para comandos Unix heredados.

## Descubrir

Los alias modern definidos en `modern.aliases.sh` proporcionan alternativas Rust a las herramientas Unix tradicionales. Estos alias se cargan automáticamente por `chezmoi` y vuelven a los comandos estándar si las herramientas modernas no están disponibles.

## Referencia

### Listado de archivos con eza

Reemplaza `ls` cuando `eza` está instalado.

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `ls` | `eza --icons` | Listar archivos con iconos |
| `ll` | `eza -alF` | Formato de lista larga |
| `la` | `eza -a` | Listar todos los archivos, incluidos ocultos |
| `lt` | `eza --tree` | Mostrar árbol de directorios |

Vuelve a `ls` si `eza` no está instalado.

### Contenido de archivos con bat

Reemplaza `cat` cuando `bat` está instalado.

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `cat` | `bat` | Mostrar contenido con resaltado de sintaxis |

### Búsqueda con ripgrep

Reemplaza `grep` cuando `rg` está instalado.

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `grep` | `rg` | Buscar contenido con Ripgrep |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
