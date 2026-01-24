---
description: Los alias Find estan disenados para buscar archivos en una jerarquia de directorios y realizar acciones sobre los archivos encontrados.
lang: es-ES
metaTitle: Alias de Find - Dotfiles (ES)
permalink: /es/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Los alias Find estan disenados para buscar archivos en una jerarquia de directorios y realizar acciones sobre los archivos encontrados.
  - name: twitter:description
    content: Los alias Find estan disenados para buscar archivos en una jerarquia de directorios y realizar acciones sobre los archivos encontrados.
  - name: twitter:title
    content: Alias de Find - Dotfiles (ES)
  - name: og:title
    content: Alias de Find - Dotfiles (ES)
  - name: og:description
    content: Los alias Find estan disenados para buscar archivos en una jerarquia de directorios y realizar acciones sobre los archivos encontrados.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Find

Gestionar los alias de Find. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `find.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias para la utilidad `fd`, que es
una alternativa a `find` en sistemas basados en Unix.
`fd` es una herramienta simple, rapida y facil de usar que permite buscar
archivos y directorios en una ruta dada. Estos alias facilitan el uso de `fd`
con comandos simples y memorables para casos de uso comunes.
Estos son algunos de los alias disponibles:
- `fd` es el alias por defecto para `fd --color always` que lista todos los archivos
  con salida colorizada.
- `fda` lista todos los archivos con rutas absolutas.
- `fdc` lista todos los archivos con busqueda sin distinguir mayusculas.
- `fdd` lista todos los archivos con detalles.
- `fde` lista todos los archivos con una extension especificada.
- `fdf` lista todos los archivos siguiendo enlaces simbolicos.
- `fdh` muestra la ayuda de `fd`.
- `fdh` lista todos los archivos, incluidos los ocultos.
- `fdn` lista todos los archivos que coinciden con un glob especificado.
- `fdo` lista todos los archivos con informacion del propietario.
- `fds` lista todos los archivos con tamano.
- `fdu` lista todos los archivos con reglas de exclusion.
- `fdv` muestra la version de `fd`.
- `fdx` ejecuta un comando para cada resultado de busqueda.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
