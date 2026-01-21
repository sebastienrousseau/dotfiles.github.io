---
description: Los alias de Change Directory son una colección de atajos que te permiten interactuar con la herramienta de línea de comandos `cd`. Cd es una herramienta que cambia el directorio actual.
lang: es-ES
metaTitle: Alias de Change Directory - Dotfiles (ES)
permalink: /es/aliases/cd/

meta:
  - name: keywords
    content: alias, cd, chdir, cambiar directorio, directorio, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Change Directory son una colección de atajos que te permiten interactuar con la herramienta de línea de comandos `cd`. Cd es una herramienta que cambia el directorio actual.
  - name: twitter:description
    content: Los alias de Change Directory son una colección de atajos que te permiten interactuar con la herramienta de línea de comandos `cd`. Cd es una herramienta que cambia el directorio actual.
  - name: twitter:title
    content: Alias de Change Directory - Dotfiles (ES)
  - name: og:title
    content: Alias de Change Directory - Dotfiles (ES)
  - name: og:description
    content: Los alias de Change Directory son una colección de atajos que te permiten interactuar con la herramienta de línea de comandos `cd`. Cd es una herramienta que cambia el directorio actual.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Change Directory

El archivo `cd.aliases.sh` crea atajos útiles para navegar por la terminal.

Los alias de Change Directory son una colección de atajos que te permiten interactuar con la herramienta de línea de comandos `cd`. Cd es una herramienta que cambia el directorio actual.

## Navegación

El comando cd, también conocido como chdir (change directory), es un comando de línea de comandos utilizado para cambiar el directorio de trabajo actual en varios sistemas operativos.

| Alias | Comando               | Descripción                                                                |
| ----- | ----------------------------- | ---------------------------------------------------------------- |
| -     | `cd -`                        | Atajo para ir al directorio anterior.                            |
| ..    | `cd ..`                       | Atajo para ir al directorio padre.                              |
| ...   | `cd ../..`                    | Atajo para ir al directorio abuelo.                         |
| ....  | `cd ../../..`                 | Atajo para ir al directorio bisabuelo.                   |
| ..... | `cd ../../../..`              | Atajo para ir al directorio tatarabuelo.             |
| ~     | `cd ~`                        | Atajo para ir al directorio de inicio (home).                                |
| app   | `cd ${HOME}/Applications; ls` | Atajo para ir al directorio Applications.                    |
| cod   | `cd ${HOME}/Code; ls`         | Atajo para ir al directorio Code y listar su contenido.      |
| des   | `cd ${HOME}/Desktop; ls`      | Atajo para ir al directorio Desktop y listar su contenido.   |
| doc   | `cd ${HOME}/Documents; ls`    | Atajo para ir al directorio Documents y listar su contenido. |
| dot   | `cd ${HOME}/.dotfiles; ls`    | Atajo para ir al directorio .dotfiles.                        |
| dow   | `cd ${HOME}/Downloads; ls`    | Atajo para ir al directorio Downloads y listar su contenido. |
| hom   | `cd ${HOME}/; ls`             | Atajo para ir al directorio home y listar su contenido.          |
| mus   | `cd ${HOME}/Music; ls`        | Atajo para ir al directorio Music y listar su contenido.     |
| pic   | `cd ${HOME}/Pictures; ls`     | Atajo para ir al directorio Pictures y listar su contenido.  |
| vid   | `cd ${HOME}/Videos; ls`       | Atajo para ir al directorio Videos y listar su contenido.    |
