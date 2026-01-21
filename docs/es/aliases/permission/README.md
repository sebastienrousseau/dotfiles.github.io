---
description: Alias de permisos para Dotfiles
lang: es-ES
metaTitle: Alias de Permisos - Dotfiles (ES)
permalink: /es/aliases/permission/
---

# Alias de Permisos

Gestiona alias de Permisos. Parte de la configuración de **Universal Dotfiles**.

![Banner de Dotfiles][banner]

## 📖 Descripción

Estos alias están definidos en `permission.aliases.sh` y son cargados automáticamente por `chezmoi`.

## ⚡ Alias

Este código proporciona un conjunto de alias para permisos de archivos.

- `000` Establecer permisos sin lectura, escritura ni ejecución para usuario, grupo y otros.
- `400` Establecer permisos sin lectura ni escritura, pero permitir ejecución solo para el usuario.
- `444` Establecer permisos sin escritura ni ejecución, pero permitir lectura para todos.
- `600` Establecer permisos de lectura y escritura solo para el usuario.
- `644` Establecer permisos de lectura para todos, pero escritura solo para el usuario.
- `666` Establecer permisos de lectura y escritura para todos.
- `755` Establecer permisos de lectura, escritura y ejecución para el usuario, pero solo lectura y ejecución para el grupo y otros.
- `764` Establecer permisos de lectura y escritura para usuario y grupo, pero solo lectura para otros.
- `777` Establecer permisos de lectura, escritura y ejecución para todos.
- `chgrp` Cambiar la propiedad del grupo de archivos o directorios.
- `chgrpr` Cambiar la propiedad del grupo de archivos o directorios recursivamente.
- `chgrpu` Cambiar la propiedad del grupo de archivos o directorios recursivamente al usuario actual.
- `chmod` Cambiar los bits de modo de archivo.
- `chmodr` Cambiar los bits de modo de archivo recursivamente.
- `chmodu` Cambiar los bits de modo de archivo recursivamente para el usuario actual.
- `chmox` Hacer que un archivo sea ejecutable.
- `chown` Cambiar el propietario y grupo del archivo.
- `chownr` Cambiar el propietario y grupo del archivo recursivamente.
- `chownu` Cambiar el propietario y grupo del archivo recursivamente al usuario actual.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
