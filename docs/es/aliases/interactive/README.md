---
title: "Alias Interactivos: comandos seguros con confirmación"
description: "Alias shell que añaden confirmaciones antes de rm, mv y cp. Evita borrados accidentales."
lang: es-ES
metaTitle: "Alias Interactivos | Dotfiles"
permalink: /aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: alias interactivos, seguridad shell, confirmación rm, cp interactivo, prompt mv, dotfiles, alias bash
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Interactivos | Dotfiles
  - name: twitter:description
    content: Alias shell que añaden confirmaciones antes de rm, mv y cp.
  - name: og:title
    content: Alias Interactivos | Dotfiles
  - name: og:description
    content: Alias shell que añaden confirmaciones antes de rm, mv y cp.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Interactivos

Comandos de shell seguros con confirmación antes de operaciones destructivas.

![Dotfiles banner][banner]

## Descubrir

Los alias interactivos añaden confirmaciones a comandos que pueden modificar o eliminar archivos de forma permanente. Definidos en `interactive.aliases.sh` y cargados automáticamente por chezmoi, estos alias ayudan a prevenir pérdidas de datos.

## Referencia

### Operaciones de archivos

| Alias | Descripción |
|-------|-------------|
| `cp` | Copiar archivos y directorios de forma interactiva con salida detallada. Confirma antes de sobrescribir. |
| `mv` | Mover o renombrar de forma interactiva con salida detallada. Confirma antes de sobrescribir. |
| `ln` | Crear enlaces simbólicos de forma interactiva con salida detallada. Confirma antes de sobrescribir. |

### Eliminación de archivos

| Alias | Descripción |
|-------|-------------|
| `rm` | Eliminar archivos/directorios de forma interactiva con salida detallada. Confirma cada eliminación. |
| `del` | Eliminar archivos/directorios de forma interactiva y recursiva con salida detallada. |
| `zap` | Alias de `rm`. Elimina de forma interactiva con salida detallada. |

### Gestión de papelera

| Alias | Descripción |
|-------|-------------|
| `bin` | Eliminar todos los archivos de la papelera (`~/.Trash`) de forma forzada y recursiva. |

### Permisos y utilidades

| Alias | Descripción |
|-------|-------------|
| `chmod` | Cambiar permisos con salida detallada. |
| `chown` | Cambiar propietario y grupo con salida detallada. |
| `diff` | Comparar archivos y mostrar diferencias en formato unificado. |
| `grep` | Buscar un patrón mostrando números de línea e ignorando mayúsculas. |
| `mkdir` | Crear directorios con padres y salida detallada. |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
