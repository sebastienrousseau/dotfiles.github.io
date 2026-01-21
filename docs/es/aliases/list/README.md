---
description: Los alias de Listado son una colección de alias que te permiten interactuar con el comando `ls` de una manera más interactiva para mostrar el contenido de un directorio.
lang: es-ES
metaTitle: Alias de Listado (ls) - Dotfiles (ES)
permalink: /es/aliases/list/
meta:
  - name: keywords
    content: alias, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Listado son una colección de alias que te permiten interactuar con el comando `ls` de una manera más interactiva para mostrar el contenido de un directorio.
  - name: twitter:description
    content: Los alias de Listado son una colección de alias que te permiten interactuar con el comando `ls` de una manera más interactiva para mostrar el contenido de un directorio.
  - name: twitter:title
    content: Alias de Listado (ls) - Dotfiles (ES)
  - name: og:title
    content: Alias de Listado (ls) - Dotfiles (ES)
  - name: og:description
    content: Los alias de Listado son una colección de alias que te permiten interactuar con el comando `ls` de una manera más interactiva para mostrar el contenido de un directorio.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Listado

El archivo `list.aliases.sh` crea atajos útiles para listar archivos y directorios.

Los alias de Listado son una colección de alias que te permiten interactuar con el comando `ls` de una manera más interactiva para mostrar el contenido de un directorio.

Para cada operando que nombra un archivo de un tipo distinto a directorio, `ls` muestra su nombre así como cualquier información asociada solicitada. Para cada operando que nombra un archivo de tipo directorio, `ls` muestra los nombres de los archivos contenidos dentro de ese directorio, así como cualquier información asociada solicitada.

## ls

[ls](https://es.wikipedia.org/wiki/Ls) es un comando que lista el contenido de un directorio.

| Alias  | Comando              | Descripción                                            |
| ------ | -------------------- | ------------------------------------------------------ |
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                          | Listar archivos ocultos.          |
| l      | `ls -lFh`            | Tamaño, mostrar tipo, legible para humanos.                       |
| l1     | `ls -1`              | Mostrar un archivo por línea.                             |
| la     | `ls -lAFh`           | Todos los archivos, mostrar tipo, legible para humanos.                  |
| labc   | `ls -lap`            | Listar todos los archivos en orden alfabético.                  |
| lc     | `wc -l`              | Contar el número de líneas en el archivo.                 |
| lct    | `ls -lcrh`           | Listar archivos por tiempo, el más nuevo primero.                      |
| ld     | `ls -ltrh`           | Ordenar por fecha, el más antiguo primero.                            |
| ldir   | `ls -l               | egrep '^d'`                                            | Listar solo directorios.      |
| ldot   | `l.`                 | Listar archivos ocultos.                                     |
| left   | `ls -t -1`           | Listar archivos por fecha, el más reciente al final.                  |
| right  | `ls -t -1r`          | Listar archivos por fecha, el más reciente primero.                 |
| lf     | `ls -l               | egrep -v '^d'`                                         | Listar solo archivos.            |
| lk     | `ls -lSrh`           | Ordenar por tamaño, el más grande primero.                           |
| ll     | `la`                 | Lista larga, mostrar casi todo, mostrar tipo, legible para humanos. |
| lla    | `ls -l -d $PWD/*`    | Listar ruta completa de todos los archivos en el directorio actual.      |
| locale | `locale -a           | grep UTF-8`                                            | Listar todos los locales disponibles. |
| lp     | `sudo lsof -i -T -n` | Listar todos los puertos abiertos.                                   |
| lr     | `ls -lRh`            | Lista recursiva, mostrar tipo, legible para humanos.             |
| ls     | `ls --color`         | Colorear la salida.                                   |
| lS     | `ls -1FSsh`          | Ordenar archivos basado en Última Modificación y tamaño.      |
| lt     | `tree`               | Listar contenidos de directorios en formato de árbol.    |
| lu     | `ls -lurh`           | Ordenar por fecha, el más antiguo primero.                            |
| lw     | `ls -xAh`            | Lista ancha, mostrar casi todo, mostrar tipo, legible para humanos. |
| lx     | `ls                  | sort -k 1,1 -t .`                                      | Ordenar por extensión.          |
| lz     | `ls -lSr`            | Ordenar por tamaño, el más pequeño primero.                          |
