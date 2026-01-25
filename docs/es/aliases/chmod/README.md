---
title: "Alias Chmod: atajos de permisos para el shell"
description: "Simplifica la gestión de permisos con alias chmod. Atajos para patrones comunes como 755, 644 y más."
lang: es-ES
metaTitle: "Alias Chmod | Dotfiles"
permalink: /aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: "alias chmod, permisos de archivos, atajos shell, dotfiles, permisos unix"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Chmod | Dotfiles
  - name: twitter:description
    content: Simplifica la gestión de permisos con alias chmod.
  - name: og:title
    content: Alias Chmod | Dotfiles
  - name: og:description
    content: Simplifica la gestión de permisos con alias chmod.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Chmod

Atajos para gestionar permisos de archivos y directorios.

![Dotfiles banner][banner]

## Descubrir

Los alias chmod ofrecen una forma rápida de gestionar permisos desde la línea de comandos. En lugar de memorizar códigos numéricos, usa alias intuitivos como `chmod_755` o `chmod_u+x` para establecer el acceso necesario.

Estos alias se definen en `chmod.aliases.sh` y se cargan automáticamente por chezmoi.

## Referencia

### Alias de permisos comunes

| Alias | Permisos | Descripción |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Sin permisos para nadie |
| `chmod_400` | `r--------` | Solo lectura para el propietario |
| `chmod_444` | `r--r--r--` | Solo lectura para todos |
| `chmod_600` | `rw-------` | Lectura/escritura para el propietario |
| `chmod_644` | `rw-r--r--` | Lectura/escritura para el propietario, lectura para otros |
| `chmod_666` | `rw-rw-rw-` | Lectura/escritura para todos |
| `chmod_755` | `rwxr-xr-x` | Total para propietario, lectura/ejecución para otros |
| `chmod_764` | `rwxrw-r--` | Total para propietario, lectura/escritura para grupo |
| `chmod_777` | `rwxrwxrwx` | Todos los permisos para todos |

### Alias de permisos del propietario

| Alias | Descripción |
|-------|-------------|
| `chmod_u+x` | Añadir ejecución para el propietario |
| `chmod_u-x` | Quitar ejecución para el propietario |
| `chmod_u+w` | Añadir escritura para el propietario |
| `chmod_u-w` | Quitar escritura para el propietario |
| `chmod_u+r` | Añadir lectura para el propietario |
| `chmod_u-r` | Quitar lectura para el propietario |

### Alias de permisos del grupo

| Alias | Descripción |
|-------|-------------|
| `chmod_g+x` | Añadir ejecución para el grupo |
| `chmod_g-x` | Quitar ejecución para el grupo |
| `chmod_g+w` | Añadir escritura para el grupo |
| `chmod_g-w` | Quitar escritura para el grupo |
| `chmod_g+r` | Añadir lectura para el grupo |
| `chmod_g-r` | Quitar lectura para el grupo |

### Alias de permisos para otros

| Alias | Descripción |
|-------|-------------|
| `chmod_o+x` | Añadir ejecución para otros |
| `chmod_o-x` | Quitar ejecución para otros |
| `chmod_o+w` | Añadir escritura para otros |
| `chmod_o-w` | Quitar escritura para otros |
| `chmod_o+r` | Añadir lectura para otros |
| `chmod_o-r` | Quitar lectura para otros |

### Alias por tipo de archivo

| Alias | Descripción |
|-------|-------------|
| `chmod_755d` | Establecer permisos de directorios a `rwxr-xr-x` |
| `chmod_644f` | Establecer permisos de archivos a `rw-r--r--` |

### Función recursiva

La función `change_permission` aplica permisos de forma recursiva con confirmación:

```bash
change_permission 755 /path/to/directory -R
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
