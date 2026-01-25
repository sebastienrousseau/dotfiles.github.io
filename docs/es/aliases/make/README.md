---
title: "Alias Make: simplifica tu flujo de build"
description: "Alias de atajo para Make. Simplifica builds, pruebas y automatización."
lang: es-ES
metaTitle: Make Aliases | Dotfiles
permalink: /aliases/make/
sidebar: true
meta:
  - name: keywords
    content: alias make, atajos makefile, automatización build, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make Aliases | Dotfiles
  - name: twitter:description
    content: Alias de atajo para Make. Simplifica builds, pruebas y automatización.
  - name: og:title
    content: Make Aliases | Dotfiles
  - name: og:description
    content: Alias de atajo para Make. Simplifica builds, pruebas y automatización.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Make

Simplifica tu flujo de build con comandos abreviados de Make.

![Dotfiles banner][banner]

## Descubrir

Estos alias proporcionan acceso rápido a objetivos Make comunes. Definidos en `make.aliases.sh`, se cargan automáticamente por chezmoi como parte de Universal Dotfiles.

## Referencia

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `mk` | `make` | Ejecutar objetivo por defecto |
| `mka` | `make all` | Construir todos los objetivos |
| `mkc` | `make clean` | Limpiar artefactos de build |
| `mkd` | `make doc` | Generar documentación |
| `mkf` | `make format` | Formatear fuentes |
| `mkh` | `make help` | Mostrar ayuda |
| `mki` | `make install` | Instalar el proyecto |
| `mkr` | `make run` | Ejecutar el proyecto |
| `mkt` | `make test` | Ejecutar pruebas |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
