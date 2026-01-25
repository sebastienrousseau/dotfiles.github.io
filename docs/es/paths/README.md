---
description: Cómo Dotfiles gestiona tu jerarquía PATH para cargar las herramientas correctas en el orden correcto.
lang: es-ES
metaTitle: Paths - Dotfiles (ES)
permalink: /paths/

meta:
  - name: keywords
    content: path, entorno, variables, jerarquía, dotfiles, chezmoi, shell, configuración
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Cómo Dotfiles gestiona tu jerarquía PATH para cargar las herramientas correctas en el orden correcto.
  - name: twitter:title
    content: Paths - Dotfiles
  - name: og:title
    content: Paths - Dotfiles
  - name: og:description
    content: Cómo Dotfiles gestiona tu jerarquía PATH para cargar las herramientas correctas en el orden correcto.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Paths

Gestión modular del `PATH`. Asegura que las herramientas correctas se carguen en el orden correcto.

## Descubrir

Las configuraciones de ruta se dividen en archivos por prioridad. Durante `chezmoi apply`:

1. Los archivos del directorio se recorren alfabéticamente
2. El contenido se agrega en `~/.config/shell/paths.sh`
3. Se carga desde `.zshrc` al iniciar

## Referencia

| Script | Descripción |
|:---|:---|
| `00-default.paths.sh` | Rutas base del sistema (`/usr/bin`, `/sbin`) y Homebrew. Se carga primero. |
| `99-custom.paths.sh` | Rutas personalizadas del usuario (SDKs, bins locales). Se carga al final para prioridad. |

## Empezar

### Añadir una ruta de usuario

1. Edita `99-custom.paths.sh` o crea un archivo nuevo (por ejemplo `50-miproyecto.paths.sh`)
2. Añade tu ruta:
   ```bash
   export PATH="$PATH:/ruta/a/dir"
   ```
3. Aplica los cambios:
   ```bash
   chezmoi apply
   ```
4. Verifica:
   ```bash
   echo $PATH
   ```
