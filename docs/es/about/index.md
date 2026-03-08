---
title: Acerca de Dotfiles
description: La nueva generación de configuración del shell. Alto rendimiento, segura y nativa para IA. Gestionada por Chezmoi.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Acerca de Dotfiles preview
canonical: /es/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Acerca de Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: Acerca de Dotfiles - Dotfiles (ES)
permalink: /es/about/
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

Dotfiles v0.2.495 transforma tu terminal en un espacio de trabajo unificado y potente. A diferencia de los dotfiles heredados basados en Makefiles complejos o scripts de enlaces simbólicos, Dotfiles usa un enfoque basado en plantillas que es atómico, rápido y reproducible.

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
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

## Comandos principales

La CLI `dot` ofrece 53 comandos organizados por categoría.

### Núcleo

- `dot apply` — aplica los cambios de configuración.
- `dot sync` — obtiene el estado más reciente del repositorio y lo aplica.
- `dot update` — actualiza el repositorio y precalienta las cachés.
- `dot add` — agrega nuevos archivos a la fuente de Chezmoi.
- `dot diff` — muestra los cambios pendientes antes de aplicar.
- `dot status` — muestra el estado de los archivos gestionados.
- `dot remove` — deja de gestionar un archivo y elimina la entrada fuente.
- `dot cd` — abre una shell dentro del directorio fuente de Chezmoi.
- `dot edit` — abre un archivo gestionado en tu editor.
- `dot clean-cache` — purga las cachés transitorias.
- `dot prewarm` — precarga las cachés para un inicio más rápido del shell.

### Diagnósticos

- `dot doctor` — valida rutas, herramientas y estado del shell.
- `dot heal` — repara automáticamente el estado faltante o dañado.
- `dot health` — ejecuta una sonda de salud ligera.
- `dot verify` — verifica la integridad de archivos contra la fuente.
- `dot scorecard` — muestra una puntuación de calidad de configuración.
- `dot snapshot` — captura el estado actual para comparación posterior.
- `dot smoke-test` — valida las cadenas de herramientas principales de extremo a extremo.
- `dot chaos` — inyecta fallos para probar la auto-reparación.
- `dot bundle` — exporta un paquete de configuración portátil.
- `dot rollback` — revierte a una instantánea anterior.
- `dot drift` — detecta cambios no autorizados en archivos gestionados.
- `dot history` — muestra el registro de historial de apply/sync.
- `dot benchmark` — mide el tiempo de inicio del shell.
- `dot perf` — perfila la inicialización lenta del shell.

### Apariencia

- `dot theme` — cambia el esquema de colores del terminal.
- `dot wallpaper` — establece el fondo de escritorio (macOS).
- `dot fonts` — instala o actualiza Nerd Fonts.
- `dot tune` — ajusta la densidad de la UI y el estilo del prompt.

### Seguridad

- `dot backup` — crea copias de seguridad cifradas de la configuración.
- `dot encrypt-check` — verifica el cifrado de secretos en reposo.
- `dot firewall` — configura las reglas del firewall del host.
- `dot telemetry` — controla la telemetría de uso anónimo.
- `dot dns-doh` — habilita DNS-over-HTTPS.
- `dot lock-screen` — bloquea la pantalla inmediatamente.
- `dot usb-safety` — restringe el montaje automático de almacenamiento USB.

### Secretos

- `dot secrets-init` — inicializa el backend de secretos (age / GPG).
- `dot secrets` — lista las entradas de secretos cifrados.
- `dot secrets-create` — crea un nuevo secreto cifrado.
- `dot ssh-key` — genera o rota pares de claves SSH.
- `dot ssh-cert` — solicita un certificado SSH de una CA.

### IA

- `dot ai` — abre una sesión interactiva de asistente IA.
- `dot ai-setup` — configura claves API para proveedores de IA.
- `dot ai-query` — envía un prompt único a un modelo de IA.
- Wrappers de herramientas IA: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Herramientas

- `dot tools` — lista las herramientas CLI incluidas y su estado.
- `dot new` — crea un nuevo archivo de alias o función.
- `dot sandbox` — abre un shell sandbox desechable.
- `dot keys` — muestra las combinaciones de teclas actuales.
- `dot learn` — inicia el tutorial interactivo.

### Meta

- `dot upgrade` — actualiza Dotfiles a la última versión.
- `dot packages` — lista los paquetes instalados gestionados por Dotfiles.
- `dot version` / `dot help` — muestra información de versión o uso.

## Contribuir

Únete a la comunidad. Revisa nuestro [Código de conducta][code-of-conduct-url] y las [Guías de contribución][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
