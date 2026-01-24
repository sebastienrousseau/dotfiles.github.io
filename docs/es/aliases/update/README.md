---
description: Los alias de Update crean atajos utiles para actualizar el sistema operativo y el software instalado. Ayudan a asegurar y mejorar la instalacion actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores criticos.
lang: es-ES
metaTitle: Alias de Update - Dotfiles (ES)
permalink: /es/aliases/update/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Update crean atajos utiles para actualizar el sistema operativo y el software instalado. Ayudan a asegurar y mejorar la instalacion actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores criticos.
  - name: twitter:description
    content: Los alias de Update crean atajos utiles para actualizar el sistema operativo y el software instalado. Ayudan a asegurar y mejorar la instalacion actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores criticos.
  - name: twitter:title
    content: Alias de Update - Dotfiles (ES)
  - name: og:title
    content: Alias de Update - Dotfiles (ES)
  - name: og:description
    content: Los alias de Update crean atajos utiles para actualizar el sistema operativo y el software instalado. Ayudan a asegurar y mejorar la instalacion actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores criticos.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Update

Gestionar los alias de Update. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `update.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias para actualizar diversos software en
macOS y Linux.
### macOS
- `upd` actualiza el software de macOS, los paquetes Homebrew, los Homebrew Casks, las apps del Mac
   App Store, la toolchain Rust estable, las gemas de Ruby, los paquetes de Python,
   y los paquetes de Node.js.
### Linux
- `open` abre un archivo o URL en la aplicacion preferida del usuario.
- `pbcopy` copia al portapapeles.
- `pbpaste` pega desde el portapapeles.
- `upd` actualiza paquetes de Linux, limpia la cache de paquetes, actualiza paquetes pnpm,
  actualiza la toolchain Rust estable, actualiza gemas de Ruby, actualiza paquetes de Python,
  y actualiza paquetes de Node.js.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
