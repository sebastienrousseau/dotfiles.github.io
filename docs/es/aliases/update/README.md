---
description: Alias de Update para actualizar sistema operativo y software. Mantiene dotfiles, paquetes y toolchains actualizados con un solo comando.
lang: es-ES
metaTitle: Alias de Update - Dotfiles (ES)
permalink: /es/aliases/update/
sidebar: true

meta:
  - name: keywords
    content: alias update, actualizacion sistema, homebrew, apt, paquetes, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de Update para actualizar sistema operativo y software. Mantiene dotfiles, paquetes y toolchains actualizados.
  - name: twitter:title
    content: Alias de Update - Dotfiles
  - name: og:title
    content: Alias de Update - Dotfiles
  - name: og:description
    content: Alias de Update para actualizar sistema operativo y software. Mantiene dotfiles, paquetes y toolchains actualizados.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Update

Atajos para actualizar sistema operativo y software instalado.

## Descripcion

Estos alias estan definidos en `update.aliases.sh` y se cargan automaticamente por chezmoi. Proporcionan comandos unificados para mantener tu sistema actualizado, incluyendo paquetes del sistema, toolchains de desarrollo y gestores de paquetes.

## Referencia

### macOS

| Alias | Descripcion |
|:---|:---|
| `upd` | Actualizar software de macOS, paquetes Homebrew, Homebrew Casks, apps del Mac App Store, toolchain Rust estable, gemas Ruby, paquetes Python y paquetes Node.js |

### Linux

| Alias | Descripcion |
|:---|:---|
| `upd` | Actualizar paquetes Linux, limpiar cache de paquetes, actualizar pnpm, toolchain Rust estable, gemas Ruby, paquetes Python y paquetes Node.js |
| `open` | Abrir archivo o URL en la aplicacion preferida del usuario |
| `pbcopy` | Copiar al portapapeles |
| `pbpaste` | Pegar desde el portapapeles |
