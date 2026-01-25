---
title: "Alias predeterminados: atajos esenciales del shell"
description: "Alias esenciales para navegación, control del sistema y tareas diarias. Simplifica tu flujo de trabajo."
lang: es-ES
metaTitle: "Alias predeterminados | Dotfiles"
permalink: /aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "alias predeterminados, alias shell, atajos terminal, dotfiles, alias bash"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias predeterminados | Dotfiles
  - name: twitter:description
    content: Alias esenciales para navegación, control del sistema y tareas diarias.
  - name: og:title
    content: Alias predeterminados | Dotfiles
  - name: og:description
    content: Alias esenciales para navegación, control del sistema y tareas diarias.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias predeterminados

Atajos esenciales para tareas diarias en el terminal.

![Dotfiles banner][banner]

## Descubrir

Los alias predeterminados proporcionan atajos universales que simplifican operaciones comunes. Se definen en `default.aliases.sh` y se cargan automáticamente por chezmoi en todos los shells compatibles.

Estos atajos cubren utilidades generales, salida, diagnósticos de red, monitorización del sistema y navegación por el sistema de archivos.

## Referencia

### General

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Mostrar fecha y hora actuales |
| `p` | `pwd` | Mostrar directorio actual |
| `path` | `echo ${PATH//:/\\n}` | Mostrar PATH en líneas separadas |
| `r` | `reload` | Recargar el shell |
| `t` | `tail -f` | Seguir salida de archivos en tiempo real |
| `wk` | `date +%V` | Mostrar número de semana |

### Salida y apagado

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `q` | `exit` | Salir del shell |
| `quit` | `exit` | Salir del shell |
| `bye` | `exit` | Salir del shell |
| `:q` | `exit` | Salir del shell (estilo vim) |
| `halt` | `sudo /sbin/halt` | Apagar el sistema |
| `poweroff` | `sudo /sbin/shutdown` | Apagar el sistema |
| `reboot` | `sudo /sbin/reboot` | Reiniciar el sistema |

### Historial

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `h` | `history` | Ver historial de comandos |
| `history` | `fc -il 1` | Historial con timestamps ISO 8601 |

### Red

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configurar interfaces de red |
| `ipinfo` | `ipconfig getpacket en0` | Obtener parámetros de red para en0 |
| `nls` | `sudo lsof -i -P | grep LISTEN` | Mostrar listeners activos |
| `op` | `sudo lsof -i -P` | Listar puertos abiertos |
| `ping` | `ping -c 5` | Ping con límite de 5 paquetes |
| `ports` | `netstat -tulan` | Listar puertos en escucha |

### Monitorización del sistema

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `top` | `sudo btop` | Monitor de procesos interactivo |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Limpiar logs ASL |

### Utilidades

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `ctf` | `ls -1 | wc -l` | Contar archivos en el directorio |
| `qfind` | `find . -name` | Búsqueda rápida de archivos |
| `reload` | `exec $SHELL -l` | Recargar el shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Clima actual |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
