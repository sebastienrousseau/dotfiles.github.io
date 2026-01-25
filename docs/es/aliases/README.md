---
description: Alias de shell que crean atajos para comandos frecuentes. Aumenta la productividad reduciendo la escritura.
lang: es-ES
metaTitle: Alias - Dotfiles (ES)
permalink: /aliases/

meta:
  - name: keywords
    content: alias, shell, bash, zsh, atajos, comandos, dotfiles, chezmoi, productividad, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de shell que crean atajos para comandos frecuentes. Aumenta la productividad reduciendo la escritura.
  - name: twitter:title
    content: Alias - Dotfiles
  - name: og:title
    content: Alias - Dotfiles
  - name: og:description
    content: Alias de shell que crean atajos para comandos frecuentes. Aumenta la productividad reduciendo la escritura.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias

Alias modulares gestionados por **Chezmoi**. Escribe menos, haz más.

## Descubrir

Los alias se organizan en archivos pequeños y enfocados — uno por herramienta o flujo de trabajo. Durante `chezmoi apply`, todos los archivos de alias se agregan en `~/.config/shell/aliases.sh` y se cargan en tu shell.

## Empezar

### Añadir un alias

1. Crea un nuevo archivo (por ejemplo `miherramienta/miherramienta.aliases.sh`)
2. Define tus alias:
   ```bash
   alias micmd="echo 'Hello World'"
   ```
3. Aplica los cambios:
   ```bash
   chezmoi apply
   ```

## Referencia

Explora alias por categoría:

<!-- markdownlint-disable MD013-->

| Categoría | Descripción |
| :--- | :--- |
| [IA](ai/) | Atajos para asistentes IA y herramientas LLM |
| [Archives](archives/) | Comprimir y extraer archivos |
| [CD](cd/) | Navegar por el sistema de archivos |
| [Chmod](chmod/) | Cambiar permisos de archivos |
| [Clear](clear/) | Limpiar la pantalla del terminal |
| [Compliance](compliance/) | Herramientas SOC2 y privacidad |
| [Configuration](configuration/) | Gestionar dotfiles y configuración del shell |
| [Default](default/) | Alias por defecto del shell |
| [Diagnostics](diagnostics/) | Auto-reparación y chequeos de salud |
| [Dig](dig/) | Consultar servidores DNS |
| [Disk Usage](disk-usage/) | Mostrar uso de disco |
| [Docker](docker/) | Gestión de contenedores |
| [Editor](editor/) | Configurar editores de texto |
| [Find](find/) | Buscar archivos y directorios |
| [Fonts](fonts/) | Gestión de caché de fuentes |
| [GCloud](gcloud/) | Herramientas Google Cloud SDK |
| [Git](git/) | Control de versiones Git |
| [GNU](gnu/) | Utilidades GNU |
| [Go](go/) | Herramientas de Go |
| [Heroku](heroku/) | CLI de Heroku |
| [Installer](installer/) | Bootstrap y despliegue |
| [Interactive](interactive/) | Comportamiento interactivo del shell |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Herramientas de licencias |
| [macOS](macOS/) | Ajustes específicos de macOS |
| [Make](make/) | Utilidades GNU Make |
| [Mkdir](mkdir/) | Crear directorios |
| [Modern](modern/) | Reemplazos basados en Rust |
| [NPM](npm/) | Gestor de paquetes Node.js |
| [Permission](permission/) | Permisos de archivos |
| [PNPM](pnpm/) | Gestor de paquetes PNPM |
| [PS](ps/) | Estado de procesos |
| [Python](python/) | Utilidades Python |
| [Rsync](rsync/) | Transferencia eficiente de archivos |
| [Rust](rust/) | Herramientas Rust |
| [Security](security/) | Inmutabilidad y firma |
| [Subversion](subversion/) | Control de versiones SVN |
| [Sudo](sudo/) | Operaciones de superusuario |
| [Terraform](terraform/) | Infraestructura como código |
| [Tmux](tmux/) | Multiplexor de terminal |
| [Update](update/) | Actualizar dotfiles |
| [UUID](uuid/) | Generar UUIDs |
| [Wget](wget/) | Descargador en línea de comandos |
| [Yarn](yarn/) | Gestor de paquetes Yarn |

<!-- markdownlint-enable MD013-->
