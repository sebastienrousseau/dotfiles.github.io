---
description: Los alias de Sudo son una colección de alias que te permiten interactuar con el comando `sudo`. Sudo es una herramienta que te permite ejecutar comandos como otro usuario.
lang: es-ES
metaTitle: Alias de Sudo - Dotfiles (ES)
permalink: /es/aliases/sudo/
---

# Alias de Sudo

El archivo `sudo.aliases.sh` crea atajos útiles para usar `sudo` con comandos.

Los alias de Sudo son una colección de alias que te permiten interactuar con el comando `sudo`. Sudo es una herramienta que te permite ejecutar comandos como otro usuario.

## Sudo

[Sudo](https://es.wikipedia.org/wiki/Sudo) es un comando que permite a los usuarios ejecutar comandos como otro usuario (normalmente el superusuario o root).

| Alias | Comando   | Descripción                                                |
| ----- | --------- | ---------------------------------------------------------- |
| root  | `s`       | Ejecutar un comando como superusuario.                     |
| s     | `sudo -i` | Ejecutar un comando como superusuario (shell interactiva). |
| su    | `sudo su` | Ejecutar un comando como superusuario (cambiar usuario).   |
| sudo  | `s`       | Ejecutar un comando como superusuario.                     |
