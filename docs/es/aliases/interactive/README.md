---
description: Los alias interactivos son una colección de alias que te permiten interactuar con tu shell y terminal de una manera más interactiva.
lang: es-ES
metaTitle: Alias Interactivos - Dotfiles (ES)
permalink: /es/aliases/interactive/
---

# Alias Interactivos

El archivo `interactive.aliases.sh` crea atajos útiles para activar el modo interactivo en funciones críticas y comunes del terminal.

## Modo Interactivo

El [modo interactivo](https://es.wikipedia.org/wiki/Interactividad) es un modo en el cual se solicita confirmación al usuario antes de ejecutar el comando.

Esta es una característica útil para comandos como `cp`, `mv`, `rm` y `ln` que pueden sobrescribir archivos o directorios.

| Alias | Comando                 | Descripción                                                                        |
| ----- | ----------------------- | ---------------------------------------------------------------------------------- |
| bin   | `rm -fr ${HOME}/.Trash` | Eliminar todos los archivos en la papelera.                                        |
| cp    | `cp -vi`                | Copiar archivos y directorios interactivamente.                                    |
| del   | `rm -rfvi`              | Eliminar un archivo o directorio interactivamente.                                 |
| ln    | `ln -vi`                | Enlace simbólico interactivo.                                                      |
| mv    | `mv -vi`                | Mover archivos interactivamente (pregunta antes de sobrescribir) y modo detallado. |
| rm    | `rm -vi`                | Pregunta por cada archivo antes de eliminarlo.                                     |
| zap   | `rm -vi`                | Eliminar archivos interactivamente (pregunta antes de sobrescribir).               |
