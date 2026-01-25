---
title: "Alias Find: búsqueda rápida de archivos"
description: "Agiliza la búsqueda con alias basados en fd. Salida colorida y comandos intuitivos."
lang: es-ES
metaTitle: "Alias Find | Dotfiles"
permalink: /aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "alias find, comando fd, búsqueda de archivos, alias shell, dotfiles, find unix"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Find | Dotfiles
  - name: twitter:description
    content: Agiliza la búsqueda con alias basados en fd. Salida colorida y comandos intuitivos.
  - name: og:title
    content: Alias Find | Dotfiles
  - name: og:description
    content: Agiliza la búsqueda con alias basados en fd. Salida colorida y comandos intuitivos.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Find

Atajos potentes para buscar archivos con fd, la alternativa moderna a find.

![Dotfiles banner][banner]

## Descubrir

Estos alias ofrecen una interfaz simplificada para `fd`, una alternativa rápida y amigable a `find`. Definidos en `find.aliases.sh`, se cargan automáticamente por chezmoi y ofrecen salida colorida, sintaxis intuitiva y comandos memorables para búsquedas comunes.

Cuando `fd` está disponible, la orden `find` se aliasa automáticamente para usar `fd`, ofreciendo mejor rendimiento y una sintaxis más simple por defecto.

## Referencia

### Comandos principales

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `fd` | `fd --color always` | Buscar archivos con salida colorida |
| `find` | `fd` | Usar fd como reemplazo de find |

### Opciones de búsqueda

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | Mostrar resultados con rutas absolutas |
| `fdc` | `fd --ignore-case` | Búsqueda sin distinguir mayúsculas |
| `fdd` | `fd --list-details` | Mostrar detalles de archivo |
| `fde` | `fd --extension` | Filtrar por extensión |
| `fdf` | `fd --follow` | Seguir enlaces simbólicos |
| `fdh` | `fd --hidden` | Incluir archivos ocultos |
| `fdn` | `fd --glob` | Coincidir con patrones glob |
| `fdo` | `fd --owner` | Filtrar por propietario |
| `fds` | `fd --size` | Filtrar por tamaño |
| `fdu` | `fd --exclude` | Excluir patrones |
| `fdx` | `fd --exec` | Ejecutar un comando por resultado |

### Comandos utilitarios

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `fdv` | `fd --version` | Mostrar versión de fd |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
