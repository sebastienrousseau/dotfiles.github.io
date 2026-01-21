---
description: Los alias de Mkdir son una colección de alias que te permiten interactuar con la herramienta de línea de comandos `mkdir`, utilizada para crear directorios.
lang: es-ES
metaTitle: Alias de Mkdir - Dotfiles (ES)
permalink: /es/aliases/mkdir/
---

# Alias de Mkdir

El archivo `mkdir.aliases.sh` crea atajos útiles para crear directorios.

## Mkdir

[Mkdir](https://es.wikipedia.org/wiki/Mkdir) es un comando que crea directorios. La utilidad mkdir crea los directorios nombrados como operandos, en el orden especificado, utilizando el modo "rwxrwxrwx" (0777).

| Alias | Comando                     | Descripción                                        |
| ----- | --------------------------- | -------------------------------------------------- |
| mcd   | `mkdir -pv && cd`           | Crear directorio y entrar en él.                   |
| mcdp  | `mkdir -pv && cd`           | Crear directorio y sus padres, luego entrar en él. |
| md    | `mkd`                       | Crear directorio.                                  |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Crear directorio con la fecha actual.              |
| mdp   | `mkdir -pv`                 | Crear directorio y sus padres (recursivo).         |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Crear directorio con la hora actual.               |
