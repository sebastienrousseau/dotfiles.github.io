---
title: "Alias Permission: atajos de permisos para el shell"
description: "Alias shell para chmod, chown y chgrp. Configura permisos rápidamente con atajos numéricos."
lang: es-ES
metaTitle: "Alias Permission | Dotfiles"
permalink: /aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: "alias permission, atajos chmod, permisos de archivos, chown, chgrp, dotfiles, shell"
---

# Alias Permission

Atajos para gestionar permisos de archivos y directorios en tu entorno de shell.

## Descubrir

Estos alias se definen en `permission.aliases.sh` y se cargan automáticamente por chezmoi. Proporcionan acceso rápido a patrones de permisos comunes y comandos de propiedad.

## Referencia

### Atajos numéricos de permisos

| Alias | Descripción |
|-------|-------------|
| `000` | Establecer permisos sin lectura, escritura ni ejecución para usuario, grupo y otros |
| `400` | Sin lectura/escritura, permite ejecución solo al usuario |
| `444` | Solo lectura para todos |
| `600` | Lectura/escritura solo para usuario |
| `644` | Lectura para todos, escritura solo para usuario |
| `666` | Lectura/escritura para todos |
| `755` | Lectura/escritura/ejecución para usuario, lectura/ejecución para otros |
| `764` | Lectura/escritura para usuario y grupo, lectura para otros |
| `777` | Lectura/escritura/ejecución para todos |

### Comandos de modo de archivo

| Alias | Descripción |
|-------|-------------|
| `chmod` | Cambiar bits de modo de archivo |
| `chmodr` | Cambiar bits de modo recursivamente |
| `chmodu` | Cambiar bits de modo recursivamente al usuario actual |
| `chmox` | Hacer un archivo ejecutable |

### Comandos de propiedad

| Alias | Descripción |
|-------|-------------|
| `chown` | Cambiar propietario y grupo |
| `chownr` | Cambiar propietario y grupo recursivamente |
| `chownu` | Cambiar propietario y grupo recursivamente al usuario actual |
| `chgrp` | Cambiar grupo propietario |
| `chgrpr` | Cambiar grupo propietario recursivamente |
| `chgrpu` | Cambiar grupo propietario recursivamente al usuario actual |
