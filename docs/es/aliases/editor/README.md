---
title: "Alias Editor: atajos de edición de texto"
description: "Alias shell para Neovim, VS Code, Vim, Nano, Emacs y Sublime Text. Edita más rápido con atajos universales."
lang: es-ES
metaTitle: "Alias Editor | Dotfiles"
permalink: /aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: alias editor, neovim, vim, vscode, nano, emacs, sublime text, atajos shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell para Neovim, VS Code, Vim, Nano, Emacs y Sublime Text. Edita más rápido con atajos universales.
  - name: twitter:title
    content: Alias Editor | Dotfiles
  - name: og:title
    content: Alias Editor | Dotfiles
  - name: og:description
    content: Alias shell para Neovim, VS Code, Vim, Nano, Emacs y Sublime Text. Edita más rápido con atajos universales.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Editor

Atajos para abrir y configurar tu editor de texto preferido.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Descubrir

Los alias de editor proporcionan una interfaz unificada para la edición de texto en varias aplicaciones. Definidos en `editor.aliases.sh` y cargados automáticamente por chezmoi, estos atajos funcionan con `editor.sh` para detectar y configurar el mejor editor disponible.

El sistema admite Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text y Atom. Los alias universales se adaptan al editor activo, mientras que los alias especializados ofrecen funciones específicas de cada editor.

## Referencia

### Alias universales

Estos alias funcionan con cualquier editor configurado por `editor.sh`.

| Alias | Descripción |
|-------|-------------|
| `e` | Comando de edición rápido |
| `edit` | Comando de edición estándar |
| `editor` | Comando completo del editor |
| `mate` | Comando estilo TextMate |
| `n` | Alias corto de edición |
| `v` | Alias tipo Vim |

### Alias de Neovim

Disponibles cuando Neovim es el editor principal.

| Alias | Descripción |
|-------|-------------|
| `vi` | Redirigido a Neovim |
| `vim` | Redirigido a Neovim |
| `nvimrc` | Editar configuración Vimscript de Neovim |
| `nvimlua` | Editar configuración Lua de Neovim |
| `nvimconf` | Abrir el directorio de configuración de Neovim |

### Alias de Visual Studio Code

Disponibles cuando VS Code está instalado.

| Alias | Descripción |
|-------|-------------|
| `vsc` | Abrir VS Code |
| `vsca` | Añadir carpeta a la ventana actual |
| `vscd` | Comparar dos archivos |
| `vscn` | Abrir nueva ventana |
| `vscr` | Reutilizar ventana al abrir archivos |
| `vscu` | Abrir con directorio de datos de usuario personalizado |
| `vsced` | Abrir con directorio de extensiones personalizado |
| `vscex` | Instalar extensión de VS Code |
| `vsclist` | Listar extensiones instaladas |

### Alias de Vim

Disponibles cuando Vim es el editor principal.

| Alias | Descripción |
|-------|-------------|
| `vi` | Redirigido a Vim |
| `vimrc` | Editar archivo de configuración Vim |
| `vimconf` | Abrir el directorio de configuración Vim |

### Alias de Nano

Disponibles cuando Nano es el editor principal.

| Alias | Descripción |
|-------|-------------|
| `nanorc` | Editar archivo de configuración Nano |
| `ne` | Nano mejorado con números de línea y scroll suave |

### Alias de Emacs

Disponibles cuando Emacs está instalado.

| Alias | Descripción |
|-------|-------------|
| `em` | Iniciar Emacs |
| `emacs-nw` | Ejecutar Emacs en modo terminal |
| `emacsc` | Iniciar Emacs client |
| `emacsrc` | Editar archivo de configuración Emacs |
| `et` | Emacs rápido en terminal |

### Alias de Sublime Text

Disponibles cuando Sublime Text está instalado.

| Alias | Descripción |
|-------|-------------|
| `st` | Abrir Sublime Text |
| `stt` | Abrir el directorio actual en Sublime Text |
| `stn` | Abrir en nueva ventana de Sublime Text |

### Alias de Atom

Disponibles cuando Atom está instalado.

| Alias | Descripción |
|-------|-------------|
| `a` | Abrir Atom |
| `at` | Abrir el directorio actual en Atom |
| `an` | Abrir en nueva ventana de Atom |

### Edición de configuración

La función `editrc` brinda acceso rápido a archivos de configuración comunes.

| Comando | Archivo destino |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Archivo init de Neovim |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
| `editrc alias` | `~/.dotfiles/aliases` |
| `editrc dotfiles` | `~/.dotfiles` |

### Ejemplos de uso

```bash
# Edición rápida de un archivo con el editor por defecto
e myfile.txt

# Editar archivos de configuración directamente
nvimrc    # Con Neovim (vimscript)
nvimlua   # Con Neovim (lua)
vimrc     # Con Vim
nanorc    # Con Nano

# Abrir una carpeta en una nueva ventana de VS Code
vscn ~/projects/my-project

# Usar Nano mejorado con números de línea
ne config.txt

# Editar archivos de configuración específicos
editrc git    # Editar configuración git
editrc bash   # Editar configuración bash
```
