---
description: Los alias de Wget crean atajos útiles para el comando `wget`. Wget es una herramienta que descarga archivos de internet.
lang: es-ES
metaTitle: Alias de Wget - Dotfiles (ES)
permalink: /es/aliases/wget/
---

# Alias de Wget

El archivo `wget.aliases.sh` crea atajos útiles para muchos comandos de [wget](https://www.gnu.org/software/wget/) utilizados comúnmente.

Los alias de Wget crean atajos útiles para el comando `wget`. Wget es una herramienta que descarga archivos de internet.

## Wget

GNU [Wget](https://www.gnu.org/software/wget/) es una utilidad gratuita para la descarga no interactiva de archivos de la Web. Soporta los protocolos HTTP, HTTPS y FTP, así como la recuperación a través de proxies HTTP.

| Alias | Comando            | Descripción                                   |
| ----- | ------------------ | --------------------------------------------- |
| wg    | `wget`             | Descargar un archivo.                         |
| wgc   | `wg`               | Continuar un archivo parcialmente descargado. |
| wge   | `wg -e robots=off` | Descargar un archivo, ignorando robots.txt.   |
| wget  | `wget -c`          | Continuar un archivo parcialmente descargado. |
