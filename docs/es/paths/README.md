---
description: Cómo Dotfiles gestiona tu jerarquía de \$PATH para asegurar que se carguen las herramientas correctas en el orden correcto.
lang: es-ES
metaTitle: Rutas (Paths) - Dotfiles (ES)
permalink: /es/paths/

meta:
  - name: keywords
    content: ruta, entorno, variables, jerarquía, dotfiles, chezmoi
---

# Gestión de Rutas (Path)

Uno de los roles más críticos de Dotfiles es gestionar tu variable de entorno `$PATH`. Esto determina qué versión de una herramienta se ejecuta cuando escribes un comando.

Nos adherimos a una jerarquía estricta para asegurar consistencia entre macOS y Linux.

## La Jerarquía

De mayor prioridad (verificado primero) a menor:

1.  **Binarios Locales** (`~/.local/bin`)
    *   **Prioridad**: 1
    *   **Propósito**: Scripts de usuario personalizados, CLI `dot`, y herramientas instaladas vía `pipx` u otros gestores de paquetes de nivel de usuario.
    *   **Razón**: Te permite anular herramientas del sistema o Homebrew con tus propias versiones.

2.  **Binarios de Aplicaciones** (macOS)
    *   **Prioridad**: 2
    *   **Propósito**: Binarios de aplicaciones instaladas (ej., VS Code, iTerm).

3.  **Tiempos de Ejecución de Lenguajes**
    *   **Node.js**: `~/.node_modules/bin`
    *   **Go**: `~/go/bin`
    *   **Rust (Cargo)**: `~/.cargo/bin`
    *   **Ruby (Gemas de Usuario)**: `~/.gem/ruby/bin`
    *   **Python (Pipx)**: `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    *   **Prioridad**: 3
    *   **Propósito**: Gestor de paquetes principal para macOS/Linux.
    *   **Nota**: Cargamos Homebrew intencionalmente *antes* de las rutas del sistema para permitir actualizar herramientas del sistema (como `git` o `curl`).

5.  **Rutas del Sistema** (`/usr/bin`, `/bin`)
    *   **Prioridad**: La más baja
    *   **Propósito**: Herramientas predeterminadas del sistema operativo.
    *   **Razón**: Respaldo para utilidades fundamentales.

## Deduplicación

Dotfiles deduplica automáticamente tu `$PATH` mientras preserva el orden de precedencia. Esto evita que la variable `$PATH` crezca indefinidamente al generar shells anidado.
