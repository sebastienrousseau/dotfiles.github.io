---
description: Los alias de Find están diseñados para buscar archivos en una jerarquía de directorios y realizar acciones sobre los archivos encontrados.
lang: es-ES
metaTitle: Alias de Find - Dotfiles (ES)
permalink: /es/aliases/find/
meta:
  - name: keywords
    content: alias, código, editor, entorno, gedit, nano, notepad++, texto, vi, vim
  - name: twitter:card
    content: Los alias de Find están diseñados para buscar archivos en una jerarquía de directorios y realizar acciones sobre los archivos encontrados.
  - name: twitter:description
    content: Los alias de Find están diseñados para buscar archivos en una jerarquía de directorios y realizar acciones sobre los archivos encontrados.
  - name: twitter:title
    content: Alias de Find - Dotfiles (ES)
  - name: og:title
    content: Alias de Find - Dotfiles (ES)
  - name: og:description
    content: Los alias de Find están diseñados para buscar archivos en una jerarquía de directorios y realizar acciones sobre los archivos encontrados.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Find

El archivo `find.aliases.sh` crea atajos útiles para el comando `fd`. El comando `fd` es una alternativa multiplataforma a `find`.

Tradicionalmente, el comando `find` se utiliza para buscar archivos en una jerarquía de directorios y realizar acciones sobre los archivos encontrados.

Decidimos sustituir el comando `find` por el comando `fd`, que es una alternativa más simple, rápida y amigable para el usuario que `find`.

## Find

[fd](https://github.com/sharkdp/fd) es una alternativa simple, rápida y fácil de usar a `find`. Aunque no busca soportar toda la poderosa funcionalidad de find, proporciona configuraciones predeterminadas sensatas para la mayoría de los casos de uso.

| Alias | Comando              | Descripción                                                 |
| ----- | -------------------- | ----------------------------------------------------------- |
| fd    | `fd --color always`  | Colorear siempre la salida por defecto.                          |
| fda   | `fd --absolute-path` | Listar todos los archivos con ruta absoluta.                          |
| fdc   | `fd --ignore-case`   | Listar todos los archivos con búsqueda insensible a mayúsculas/minúsculas.                |
| fdd   | `fd --list-details`  | Listar todos los archivos con detalles.                                |
| fde   | `fd --extension`     | Listar todos los archivos con extensión.                              |
| fdf   | `fd --follow`        | Listar todos los archivos siguiendo enlaces simbólicos.                        |
| fdh   | `fd --help`          | Listar todos los archivos con ayuda.                                   |
| fdh   | `fd --hidden`        | Listar todos los archivos incluyendo archivos ocultos.                           |
| fdn   | `fd --glob`          | Listar todos los archivos con glob.                                   |
| fdo   | `fd --owner`         | Listar todos los archivos con propietario.                                  |
| fds   | `fd --size`          | Listar todos los archivos con tamaño.                                   |
| fdu   | `fd --exclude`       | Listar todos los archivos con exclusión.                                |
| fdv   | `fd --version`       | Listar todos los archivos con versión.                                |
| fdx   | `fd --exec`          | Ejecutar un comando para cada resultado de búsqueda.                   |
| find  | `fd`                 | fd es una alternativa simple, rápida y amigable a find. |
