---
description: alias de Disk Usage para Dotfiles
lang: es-ES
metaTitle: alias de Disk Usage - Dotfiles
permalink: /es/aliases/disk-usage/
---
# Alias de Disk Usage

Gestionar alias de Disk Usage. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `disk-usage.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Estos alias facilitan la exploracion del uso de disco con variantes de `du`, ordenadas por tamano
y pensadas para diagnosticos rapidos.
- `du` ejecutar `du -h` en el directorio actual.
- `du1` listar el uso de disco del primer nivel, ordenado por tamano.
- `ducks` mostrar los 10 mayores consumidores de espacio en el directorio actual.
- `duf` mostrar el uso de disco de archivos con profundidad 1.
- `dufi` igual que `duf`, ordenado de mayor a menor.
- `duh` mostrar el uso total del directorio actual, legible.
- `dui` mostrar uso de disco e inode, ordenado.
- `dul` listar directorios ordenados por tamano.
- `duls` listar el uso de disco en el directorio actual, ordenado por tamano.
- `dus` mostrar el uso de disco del directorio actual, ordenado por tamano.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
