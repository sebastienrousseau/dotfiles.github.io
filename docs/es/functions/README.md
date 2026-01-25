---
description: Funciones de shell que mejoran tu experiencia en el terminal. Utilidades para API, archivos y operaciones del sistema.
lang: es-ES
metaTitle: Funciones - Dotfiles (ES)
permalink: /functions/

meta:
  - name: keywords
    content: funciones, shell, bash, zsh, dotfiles, productividad, utilidades, api, archivos, sistema
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Funciones de shell que mejoran tu experiencia en el terminal. Utilidades para API, archivos y operaciones del sistema.
  - name: twitter:title
    content: Funciones - Dotfiles
  - name: og:title
    content: Funciones - Dotfiles
  - name: og:description
    content: Funciones de shell que mejoran tu experiencia en el terminal. Utilidades para API, archivos y operaciones del sistema.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Funciones

Utilidades de shell para aumentar tu productividad en macOS, Linux y Windows.

## Descubrir

Las funciones se definen en archivos `.sh` individuales. Durante `chezmoi apply`, se agregan en `~/.config/shell/functions.sh` y se cargan en tu shell.

## Empezar

### Añadir una función

1. Crea un nuevo archivo `.sh` (por ejemplo `mifuncion.sh`)
2. Añade la definición de tu función
3. Aplica los cambios:
   ```bash
   chezmoi apply
   ```

## Referencia

### Pruebas de API

| Función | Descripción | Uso |
|:---|:---|:---|
| `apihealth` | Comprobar la salud de una o varias APIs | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Medir la latencia de una API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Ejecutar una prueba de carga básica | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Depurar peticiones HTTP con tiempos | `httpdebug [options] [url]` |

### Utilidades HTTP

| Función | Descripción | Uso |
|:---|:---|:---|
| `curlheader` | Ver cabeceras HTTP | `curlheader [header] [url]` |
| `curlstatus` | Comprobar el código de estado HTTP | `curlstatus [url]` |
| `curltime` | Medir métricas de tiempo HTTP | `curltime [url]` |
| `view-source` | Ver el código fuente de un sitio | `view-source URL` |
| `whoisport` | Encontrar el proceso que usa un puerto | `whoisport PORT` |

### Gestión de archivos

| Función | Descripción | Uso |
|:---|:---|:---|
| `backup` | Crear copias de seguridad con timestamp | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Codificación/decodificación Base64 | `encode64 "string"` |
| `extract` | Extraer formatos de archivo | `extract [file]` |
| `hexdump` | Mostrar un archivo en formato hex | `hexdump [file] [lines]` |
| `ren` | Renombrar extensiones por lotes | `ren OLD_EXT NEW_EXT` |
| `size` | Comprobar tamaño de archivo o directorio | `size [file/directory]` |
| `zipf` | Crear archivos ZIP | `zipf [folder]` |

### Nombres de archivo

| Función | Descripción | Uso |
|:---|:---|:---|
| `kebabcase` | Convertir a kebab-case | `kebabcase <files...>` |
| `lowercase` | Convertir a minúsculas | `lowercase <files...>` |
| `sentencecase` | Convertir a mayúscula de frase | `sentencecase <files...>` |
| `snakecase` | Convertir a snake_case | `snakecase <files...>` |
| `titlecase` | Convertir a Title Case | `titlecase <files...>` |
| `uppercase` | Convertir a MAYÚSCULAS | `uppercase <files...>` |

### Utilidades del sistema

| Función | Descripción | Uso |
|:---|:---|:---|
| `caffeine` | Evitar que el sistema duerma | `caffeine [command]` |
| `environment` | Detectar el entorno del SO | `environment` |
| `freespace` | Limpiar espacio purgable | `freespace [disk]` |
| `hiddenfiles` | Mostrar/ocultar archivos ocultos en Finder | `hiddenfiles [show|hide]` |
| `hostinfo` | Mostrar información del host | `hostinfo` |
| `hstats` | Ver estadísticas de uso de comandos | `hstats` |
| `last` | Listar archivos modificados recientemente | `last [minutes]` |
| `logout` | Cerrar sesión multiplataforma | `logout [--force]` |
| `myproc` | Listar procesos del usuario | `myproc` |
| `stopwatch` | Cronómetro en terminal | `stopwatch` |
| `sysinfo` | Mostrar información del sistema | `sysinfo` |

### Comandos Caffeine

Evita que el sistema se duerma o active el salvapantallas.

| Comando | Descripción |
|:---|:---|
| `caffeine daemon` | Iniciar el daemon caffeine |
| `caffeine status` | Ver si el daemon está activo |
| `caffeine start` | Mantener la pantalla despierta |
| `caffeine stop` | Permitir que la pantalla duerma |
| `caffeine toggle` | Alternar pantalla despierta |
| `caffeine shutdown` | Detener el daemon |

Funciona en macOS (`caffeinate`), Linux (`xdg-screensaver`) y Windows (PowerShell).

### Seguridad

| Función | Descripción | Uso |
|:---|:---|:---|
| `genpass` | Generar contraseñas seguras | `genpass [num_blocks] [separator]` |
| `keygen` | Generar pares de claves SSH | `keygen [name] [email] [type] [bits]` |

### Navegación

| Función | Descripción | Uso |
|:---|:---|:---|
| `cdls` | Cambiar de directorio y listar | `cdls [directory]` |
| `goto` | Navegación rápida de directorios | `goto [directory]` |
| `mount_read_only` | Montar de solo lectura como lectura/escritura | `mount_read_only [image]` |
| `rd` | Eliminar un directorio | `rd [directory]` |
| `remove_disk` | Expulsar un disco de forma segura | `remove_disk [disk]` |

### Miscelánea

| Función | Descripción | Uso |
|:---|:---|:---|
| `matrix` | Efectos Matrix en terminal | `matrix [options]` |
| `prependpath` | Añadir un directorio al PATH | `prependpath [directory]` |
| `ql` | Abrir en Quick Look (macOS) | `ql [file]` |
| `vscode` | Abrir en VS Code | `vscode [file]` |

## Compatibilidad

- **macOS** — Soporte completo con utilidades específicas
- **Linux** — Compatible con distribuciones comunes
- **Windows** — Soporte vía WSL, Cygwin o Git Bash

## Ayuda

Cada función incluye ayuda con `--help`:

```bash
apihealth --help
```
