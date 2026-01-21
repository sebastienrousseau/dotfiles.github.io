---
description: Los alias de Make son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `make`. Make es una herramienta que controla la generación de ejecutables y otros archivos no fuente de un programa a partir de los archivos fuente del programa.
lang: es-ES
metaTitle: Alias de Make - Dotfiles (ES)
permalink: /es/aliases/make/
meta:
  - name: keywords
    content: alias, make, makefile, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Make son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `make`. Make es una herramienta que controla la generación de ejecutables y otros archivos no fuente de un programa a partir de los archivos fuente del programa.
  - name: twitter:description
    content: Los alias de Make son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `make`. Make es una herramienta que controla la generación de ejecutables y otros archivos no fuente de un programa a partir de los archivos fuente del programa.
  - name: twitter:title
    content: Alias de Make - Dotfiles (ES)
  - name: og:title
    content: Alias de Make - Dotfiles (ES)
  - name: og:description
    content: Los alias de Make son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `make`. Make es una herramienta que controla la generación de ejecutables y otros archivos no fuente de un programa a partir de los archivos fuente del programa.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Make

El archivo `make.aliases.sh` crea atajos útiles para ejecutar comandos `make`.

## Make

[Make](<https://es.wikipedia.org/wiki/Make_(software)>) es una herramienta que controla la generación de ejecutables y otros archivos no fuente de un programa a partir de los archivos fuente del programa.

Make obtiene su conocimiento de cómo construir tu programa de un archivo llamado `Makefile`, que lista cada uno de los archivos no fuente y cómo computarlo a partir de otros archivos.

| Alias | Comando        | Descripción                   |
| ----- | -------------- | ----------------------------- |
| mk    | `make`         | Ejecutar `make` sin argumentos. |
| mkc   | `make clean`   | Ejecutar `make clean`.             |
| mkd   | `make doc`     | Ejecutar `make doc`.               |
| mkf   | `make format`  | Ejecutar `make format`.            |
| mkh   | `make help`    | Ejecutar `make help`.              |
| mki   | `make install` | Ejecutar `make install`.           |
| mkr   | `make run`     | Ejecutar `make run`.               |
| mkt   | `make test`    | Ejecutar `make test`.              |
