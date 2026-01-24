---
description: Los alias List son una coleccion de alias que permiten interactuar con el comando `ls` de forma mas interactiva para mostrar el contenido de un directorio.
lang: es-ES
metaTitle: Los alias List (ls) - Dotfiles (ES)
permalink: /es/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias List son una coleccion de alias que permiten interactuar con el comando `ls` de forma mas interactiva para mostrar el contenido de un directorio.
  - name: twitter:description
    content: Los alias List son una coleccion de alias que permiten interactuar con el comando `ls` de forma mas interactiva para mostrar el contenido de un directorio.
  - name: twitter:title
    content: Los alias List (ls) - Dotfiles (ES)
  - name: og:title
    content: Los alias List (ls) - Dotfiles (ES)
  - name: og:description
    content: Los alias List son una coleccion de alias que permiten interactuar con el comando `ls` de forma mas interactiva para mostrar el contenido de un directorio.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de List

El archivo `list.aliases.sh` crea atajos utiles para listar archivos y
directorios.

Los alias List son una coleccion de alias que permiten interactuar con
el comando `ls` de forma mas interactiva para mostrar el contenido de un
directorio.

Para cada operando que nombra un archivo de un tipo distinto a directorio, `ls`
muestra su nombre junto con la informacion asociada solicitada. Para cada
operando que nombra un directorio, `ls` muestra los nombres de los archivos
contenidos en ese directorio, junto con cualquier informacion asociada
solicitada.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) es un comando que lista el contenido de
un directorio.

| Alias  | Comando                          | Descripcion                                            |
| ------ | -------------------------------- | ------------------------------------------------------ |
| l.     | `ls -dlhF .* \| grep -v "^d"`    | Listar archivos ocultos.                               |
| l      | `ls -lFh`                         | Tamano, mostrar tipo, legible.                         |
| l1     | `ls -1`                           | Mostrar un archivo por linea.                          |
| la     | `ls -lAFh`                        | Todos los archivos, mostrar tipo, legible.             |
| labc   | `ls -lap`                         | Listar todos los archivos en orden alfabetico.         |
| lc     | `wc -l`                           | Contar el numero de lineas del archivo.                |
| lct    | `ls -lcrh`                        | Listar archivos por fecha, mas nuevos primero.         |
| ld     | `ls -ltrh`                        | Ordenar por fecha, mas antiguos primero.               |
| ldir   | `ls -l \| egrep '^d'`             | Listar solo directorios.                               |
| ldot   | `l.`                              | Listar archivos ocultos.                               |
| left   | `ls -t -1`                        | Listar por fecha, mas recientes al final.              |
| right  | `ls -t -1r`                       | Listar por fecha, mas recientes al inicio.             |
| lf     | `ls -l \| egrep -v '^d'`          | Listar solo archivos.                                  |
| lk     | `ls -lSrh`                        | Ordenar por tamano, mas grandes primero.               |
| ll     | `la`                              | Lista larga, casi todos, tipo, legible.                |
| lla    | `ls -l -d $PWD/*`                 | Listar ruta completa de archivos en el directorio.     |
| locale | `locale -a \| grep UTF-8`         | Listar locales disponibles.                            |
| lp     | `sudo lsof -i -T -n`              | Listar puertos abiertos.                               |
| lr     | `ls -lRh`                         | Lista recursiva, mostrar tipo, legible.                |
| ls     | `ls --color`                      | Colorear la salida.                                    |
| lS     | `ls -1FSsh`                       | Ordenar archivos por fecha y tamano.                   |
| lt     | `tree`                            | Listar contenido en formato de arbol.                  |
| lu     | `ls -lurh`                        | Ordenar por fecha, mas antiguos primero.               |
| lw     | `ls -xAh`                         | Lista ancha, casi todos, tipo, legible.                |
| lx     | `ls \| sort -k 1,1 -t .`          | Ordenar por extension.                                 |
| lz     | `ls -lSr`                         | Ordenar por tamano, mas pequenos primero.              |
