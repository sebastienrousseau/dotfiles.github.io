---
description: alias de permisos para Dotfiles
lang: es-ES
metaTitle: alias de permisos - Dotfiles
permalink: /es/aliases/permission/
---
# Alias de permisos

Gestionar alias de permisos. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `permission.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias para permisos de archivos.
- `000` Establecer permisos sin lectura, escritura ni ejecucion para usuario, grupo y otros.
- `400` Establecer permisos sin lectura ni escritura, pero permitir ejecucion solo para el usuario.
- `444` Establecer permisos sin escritura ni ejecucion, pero permitir lectura para todos.
- `600` Establecer permisos de lectura y escritura solo para el usuario.
- `644` Establecer permisos de lectura para todos, pero escritura solo para el usuario.
- `666` Establecer permisos de lectura y escritura para todos.
- `755` Establecer permisos de lectura, escritura y ejecucion para el usuario, pero solo lectura y ejecucion para grupo y otros.
- `764` Establecer permisos de lectura y escritura para usuario y grupo, pero solo lectura para otros.
- `777` Establecer permisos de lectura, escritura y ejecucion para todos.
- `chgrp` Cambiar la propiedad de grupo de archivos o directorios.
- `chgrpr` Cambiar la propiedad de grupo de archivos o directorios de forma recursiva.
- `chgrpu` Cambiar la propiedad de grupo de archivos o directorios de forma recursiva al usuario actual.
- `chmod` Cambiar los bits de modo del archivo.
- `chmodr` Cambiar los bits de modo del archivo de forma recursiva.
- `chmodu` Cambiar los bits de modo del archivo de forma recursiva al usuario actual.
- `chmox` Hacer un archivo ejecutable.
- `chown` Cambiar el propietario y el grupo del archivo.
- `chownr` Cambiar el propietario y el grupo de forma recursiva.
- `chownu` Cambiar el propietario y el grupo de forma recursiva al usuario actual.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
