---
description: La nueva generación de configuración del shell. Alto rendimiento, segura y nativa para IA. Gestionada por Chezmoi.
lang: es-ES
metaTitle: Acerca de Dotfiles - Dotfiles (ES)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuración, automatización, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: La nueva generación de configuración del shell. Alto rendimiento, segura y nativa para IA. Gestionada por Chezmoi.
  - name: twitter:title
    content: Acerca de Dotfiles
  - name: og:title
    content: Acerca de Dotfiles
  - name: og:description
    content: La nueva generación de configuración del shell. Alto rendimiento, segura y nativa para IA. Gestionada por Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Acerca de Dotfiles

El estándar moderno para la configuración del shell. Construido sobre **Chezmoi** para una gestión segura y multiplataforma del entorno.

## Descubrir

Dotfiles v0.2.481 transforma tu terminal en un espacio de trabajo unificado y potente. A diferencia de los dotfiles heredados basados en Makefiles complejos o scripts de enlaces simbólicos, Dotfiles usa un enfoque basado en plantillas que es atómico, rápido y reproducible.

### Novedades

- **Núcleo Moderno** — Alternativas Rust de alto rendimiento reemplazan herramientas Unix heredadas:
  - **Atuin** para el historial del shell
  - **Yazi** para la gestión de archivos
  - **Zellij** para el multiplexado de terminal
  - **Ghostty** para un terminal acelerado por GPU
  - **NeoVim** para edición moderna
- **Seguridad nativa** — Firma SSH totalmente nativa sin agentes de terceros
- **Modo interactivo** — Nuevo comando `dot learn` para descubrir funciones

## Empezar

### Requisitos

- **macOS**, **Linux (Ubuntu/Debian)** o **Windows (WSL)**
- **Curl** y **Git**
- **Chezmoi** (se instala automáticamente)
- **Nerd Font** (para iconos del terminal)

### Instalación

Ejecuta un solo comando para instalar toda la suite:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
```

El instalador:

1. Instala el binario `chezmoi`
2. Clona el repositorio
3. Instala paquetes requeridos con Homebrew (macOS) o Apt (Linux)
4. Aplica tu configuración

### Explorar

Después de la instalación, reinicia tu terminal y ejecuta:

```bash
dot learn
```

Esto inicia una visita interactiva de tu nuevo entorno.

## Hazlo tuyo

Tu configuración vive en `~/.local/share/chezmoi`:

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Punto de entrada del shell
├── dot_config/             # Configuración XDG (~/.config)
│   ├── atuin/              # Historial del shell
│   ├── ghostty/            # Emulador de terminal
│   ├── git/                # Configuración de Git
│   ├── yazi/               # Gestor de archivos
│   ├── zellij/             # Multiplexor de terminal
│   ├── zsh/                # Configuración Zsh
│   └── shell/              # Alias y rutas compartidas
├── provision/              # Scripts de ciclo de vida
├── install.sh              # Instalador universal
└── docs/                   # Documentación
```

## Contribuir

Únete a la comunidad. Revisa nuestro [Código de conducta][code-of-conduct-url] y las [Guías de contribución][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
