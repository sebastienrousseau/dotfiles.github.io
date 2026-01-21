---
description: Los alias de PS son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `ps`. Ps es una herramienta que reporta una instantánea de los procesos actuales.
lang: es-ES
metaTitle: Alias de PS - Dotfiles (ES)
permalink: /es/aliases/ps/
---

# Alias de PS

El archivo `ps.aliases.sh` crea atajos útiles para trabajar con procesos.

Los alias de PS son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `ps`. Ps es una herramienta que reporta una instantánea de los procesos actuales.

## PS

[PS](<https://es.wikipedia.org/wiki/Ps_(Unix)>) es un comando que lista los procesos que se ejecutan en el sistema.

| Alias | Comando  | Descripción                                                                                                                             |
| ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| pid   | `ps -f`  | Muestra el uid, pid, pid padre, uso reciente de CPU, hora de inicio del proceso, tty de control, uso de CPU transcurrido y el comando asociado. |
| ps    | `ps -ef` | Mostrar todos los procesos.                                                                                                                  |
| psa   | `ps aux` | Listar todos los procesos (formato extendido).                                                                                                                     |
