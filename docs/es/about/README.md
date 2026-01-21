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
- **Seguridad Nativa**: Firma SSH totalmente nativa (sin clave/sin propietarios) sin agentes de terceros.
- **Modo Interactivo**: Nuevo comando `dot learn` para guiarte a través de las funciones.

## Comenzando

### :one: Prerrequisitos

- **macOS** o **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (para descargar el instalador)
- **Git** (gestionado automáticamente)

### :two: Instalación (Una Línea)

La suite completa se instala mediante un solo comando utilizando Chezmoi:

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

Este comando:

1.  Instalará el binario `chezmoi`.
2.  Clonará el repositorio en `~/.local/share/chezmoi`.
3.  Calculará la diferencia entre tu estado actual y el estado deseado.
4.  Aplicará la configuración (instalando paquetes, fuentes y herramientas).

### :three: Post-instalación

Una vez instalado, simplemente escribe:

```bash
dot learn
```

Esto lanzará el recorrido interactivo para ayudarte a familiarizarte con tu nuevo entorno.

## Qué incluye

Tu configuración se gestiona en `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship, etc.)
├── dot_local/           # ~/.local (Scripts personalizados, bin)
├── dot_ssh/             # Seguridad SSH
├── dot_zshrc.tmpl       # Configuración Zsh
├── provision/           # Scripts de instalación (Darwin/Linux)
└── docs/                # Documentación
```

## Contribuir

¡Agradecemos las contribuciones! Por favor revisa nuestro [Código de Conducta][code-of-conduct-url] y [Guías de Contribución][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
