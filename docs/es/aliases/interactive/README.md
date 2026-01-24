---
description: Los alias interactivos son una coleccion de alias que permiten interactuar con el shell y la terminal de forma mas interactiva.
lang: es-ES
metaTitle: Alias interactivos - Dotfiles (ES)
permalink: /es/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: Los alias interactivos son una coleccion de alias que permiten interactuar con el shell y la terminal de forma mas interactiva.
  - name: twitter:description
    content: Los alias interactivos son una coleccion de alias que permiten interactuar con el shell y la terminal de forma mas interactiva.
  - name: twitter:title
    content: Alias interactivos - Dotfiles (ES)
  - name: og:title
    content: Alias interactivos - Dotfiles (ES)
  - name: og:description
    content: Los alias interactivos son una coleccion de alias que permiten interactuar con el shell y la terminal de forma mas interactiva.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias interactivos

Gestionar los alias interactivos. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `interactive.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias interactivos para operaciones comunes de
linea de comandos. Los alias estan disenados para simplificar y mejorar la experiencia
de usuario agregando avisos interactivos antes de ejecutar operaciones potencialmente
destructivas.
* `cp` Copiar archivos y directorios de forma interactiva (preguntar antes de sobrescribir)
con salida detallada.
* `del` Eliminar archivos o directorios de forma interactiva (preguntar antes de cada eliminacion)
con salida detallada, de forma recursiva.
* `ln` Crear enlaces simbolicos de forma interactiva (preguntar antes de sobrescribir)
con salida detallada.
* `mv` Mover o renombrar archivos de forma interactiva (preguntar antes de sobrescribir)
con salida detallada.
* `rm` Eliminar archivos o directorios de forma interactiva (preguntar antes de cada eliminacion)
con salida detallada.
* `zap` Alias para 'rm', elimina archivos o directorios de forma interactiva (preguntar antes de cada eliminacion)
con salida detallada.
### Alias de manipulacion de la papelera
* `bin` Eliminar todos los archivos en la papelera (directorio .Trash del usuario) de forma forzada y
recursiva.
* `chmod` Cambiar permisos de archivos o directorios con salida detallada.
* `chown` Cambiar el propietario y el grupo de archivos o directorios con salida detallada.
* `diff` Comparar y mostrar diferencias entre dos archivos en formato unificado.
* `grep` Buscar un patron en archivos o salida, mostrando numeros de linea y de forma insensible a mayusculas.
* `mkdir` Crear un nuevo directorio, creando directorios padre segun sea necesario, con salida detallada.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
