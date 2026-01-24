---
description: La próxima generación de archivos de configuración, gestionada por Chezmoi. Alto rendimiento, segura y nativa de IA.
lang: es-ES
metaTitle: Acerca de - Dotfiles (ES)
permalink: /es/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuración, automatización, macos, linux, rust, zellij
---

# Acerca de Dotfiles v0.2.471

## Introducción

Dotfiles representa el estándar moderno para la configuración de entornos. Está construido sobre **Chezmoi**, proporcionando una forma segura, confiable y multiplataforma de gestionar tu shell, aplicaciones y secretos.

A diferencia de los dotfiles heredados que dependen de Makefiles complejos o scripts de enlaces simbólicos, Dotfiles utiliza un enfoque basado en plantillas que es atómico y rápido.

## Novedades en v0.2.471

- **Núcleo Moderno**: Hemos reemplazado las herramientas Unix heredadas con alternativas de alto rendimiento en Rust:
  - **Atuin** (reemplaza `history`)
  - **Yazi** (reemplaza `ls`/`ranger`)
  - **Zellij** (reemplaza `tmux`)
  - **Ghostty** (Terminal moderno acelerado por GPU)
  - **NeoVim** (Editor moderno basado en Vim)
- **Seguridad Nativa**: Firma SSH totalmente nativa (sin clave/sin propietarios) sin agentes de terceros.
- **Modo Interactivo**: Nuevo comando `dot learn` para guiarte a través de las funciones.

## Comenzando

### :one: Prerrequisitos

- **macOS**, **Linux (Ubuntu/Debian)** o **Windows (WSL)**
- **Curl** (para descargar el instalador)
- **Git**
- **Chezmoi** (instalado por el script si falta)
- **Nerd Font** (para iconos en la terminal)

### :two: Instalación (Una Línea)

La suite completa se instala mediante un solo comando utilizando Chezmoi:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.471/install.sh)"
```

Este comando:

1.  Instalará el binario `chezmoi`.
2.  Clonará el repositorio.
3.  **Instalará automáticamente** los paquetes requeridos (vía Homebrew en macOS o Apt en Linux).
4.  Aplicará la configuración.

### :three: Post-instalación

Una vez instalado, reinicia tu terminal y luego escribe:

```bash
dot learn
```

Esto lanzará el recorrido interactivo para ayudarte a familiarizarte con tu nuevo entorno.

## Qué incluye

Tu configuración se gestiona en `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Punto de entrada del shell (cargador XDG)
├── dot_config/             # Configuración base XDG (mapeada a ~/.config)
│   ├── atuin/              # Historial del shell (config.toml)
│   ├── ghostty/            # Emulador de terminal (config)
│   ├── git/                # Configuración de Git (config)
│   ├── yazi/               # Gestor de archivos (yazi.toml)
│   ├── zellij/             # Multiplexor (config.kdl)
│   ├── zsh/                # Configuración de Zsh (.zshrc)
│   └── shell/              # Configuración compartida del shell (alias, rutas)
├── provision/              # Scripts de ciclo de vida (paquetes, fuentes)
├── install.sh              # Instalador universal
├── README.md               # Documentación
└── docs/                   # Documentación detallada
```

## Contribuir

¡Agradecemos las contribuciones! Por favor revisa nuestro [Código de Conducta][code-of-conduct-url] y [Guías de Contribución][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
