---
description: Los alias de Uso de Disco están diseñados para mostrar estadísticas de uso del disco. Se utilizan para calcular e imprimir el espacio en disco utilizado por archivos o directorios.
lang: es-ES
metaTitle: Alias de Uso de Disco - Dotfiles (ES)
permalink: /es/aliases/du/
meta:
  - name: twitter:card
    content: Los alias de Uso de Disco están diseñados para mostrar estadísticas de uso del disco. Se utilizan para calcular e imprimir el espacio en disco utilizado por archivos o directorios.
  - name: twitter:description
    content: Los alias de Uso de Disco están diseñados para mostrar estadísticas de uso del disco. Se utilizan para calcular e imprimir el espacio en disco utilizado por archivos o directorios.
  - name: twitter:title
    content: Alias de Uso de Disco - Dotfiles (ES)
  - name: og:title
    content: Alias de Uso de Disco - Dotfiles (ES)
  - name: og:description
    content: Los alias de Uso de Disco están diseñados para mostrar estadísticas de uso del disco. Se utilizan para calcular e imprimir el espacio en disco utilizado por archivos o directorios.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Uso de Disco

El archivo `du.aliases.sh` crea atajos útiles para el comando `du`.

Los alias de Uso de Disco están diseñados para mostrar estadísticas de uso del disco. Se utilizan para calcular e imprimir el espacio en disco utilizado por archivos o directorios.

## Uso de Disco

[Uso de disco (Disk usage)](<https://es.wikipedia.org/wiki/Du_(Unix)>) es un comando que estima el uso de espacio de archivos. El comando `du` se utiliza para estimar el uso de espacio de archivos. El espacio utilizado por cada archivo se muestra en kilobytes. El espacio utilizado por cada directorio se muestra en kilobytes, junto con el espacio total utilizado por todos los archivos en ese directorio y sus subdirectorios.

| Alias | Comando      | Descripción                                                                 |
| ----- | ------------ | --------------------------------------------------------------------------- |
| du    | `du -h`      | Mostrar el uso de disco del directorio actual.                               |
| du1   | `du -hxd 1   | sort -h`                                                                    | Tamaño de archivos y directorios en el directorio actual. |
| ducks | `du -cks _._ | sort -rn                                                                    | head -n 10`                                              | Los 10 archivos y directorios más grandes en el directorio actual. |
| duh   | `du`         | Tamaño de archivos y directorios.                                         |
| dus   | `du -hs *`   | Tamaño de archivo legible por humanos ordenado por tamaño.                             |
| dusym | `du * -hsLc` | Tamaño de archivos y directorios en el directorio actual incluyendo enlaces simbólicos. |
| dut   | `dus`        | Tamaño total de archivo del directorio actual.                                       |
