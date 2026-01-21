---
description: Los alias de UUID crean atajos útiles para el comando `uuidgen`. El comando uuidgen genera un Identificador Único Universal (UUID), un valor de 128 bits garantizado para ser único tanto en el espacio como en el tiempo.
lang: es-ES
metaTitle: Alias de UUID - Dotfiles (ES)
permalink: /es/aliases/uuid/
---

# Alias de UUID

El archivo `uuid.aliases.sh` crea atajos útiles para generar [UUIDs](https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal).

Los alias de UUID crean atajos útiles para el comando `uuidgen`. El comando uuidgen genera un Identificador Único Universal (UUID), un valor de 128 bits garantizado para ser único tanto en el espacio como en el tiempo.

## UUID

[UUID](https://es.wikipedia.org/wiki/Identificador_%C3%BAnico_universal) es un número de 128 bits utilizado para identificar información en sistemas informáticos.

| Alias | Comando                                                                            | Descripción                                   |
| ----- | ---------------------------------------------------------------------------------- | --------------------------------------------- |
| uuid  | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | Generar un UUID y copiarlo al portapapeles. |
