---
title: "Alias GNU Coreutils: atajos shell para Linux"
description: "Optimiza tu flujo de trabajo con alias GNU Coreutils para gestión de archivos, procesamiento de texto y checksums."
lang: es-ES
metaTitle: "Alias GNU Coreutils | Dotfiles"
permalink: /aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, alias shell, utilidades linux, gestión de archivos, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias GNU Coreutils | Dotfiles
  - name: twitter:description
    content: Optimiza tu flujo de trabajo con alias GNU Coreutils para gestión de archivos, procesamiento de texto y checksums.
  - name: og:title
    content: Alias GNU Coreutils | Dotfiles
  - name: og:description
    content: Optimiza tu flujo de trabajo con alias GNU Coreutils para gestión de archivos, procesamiento de texto y checksums.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias GNU Coreutils

Atajos para utilidades Unix esenciales y flujos de trabajo más rápidos.

![Dotfiles banner][banner]

## Descubrir

Los alias GNU Coreutils ofrecen comandos abreviados para utilidades Unix estándar. Definidos en `gnu.aliases.sh` y cargados automáticamente por chezmoi, simplifican operaciones de archivos, procesamiento de texto y verificación de datos.

## Referencia

### Gestión de archivos

| Alias | Descripción |
|-------|-------------|
| `basename` | Eliminar directorio y sufijo de un nombre de archivo |
| `cp` | Copiar archivos y directorios |
| `dirname` | Eliminar sufijo no-directorio de un nombre |
| `ln` | Crear enlaces entre archivos |
| `loname` | Mostrar el nombre del enlace |
| `ls` | Listar contenido de directorio |
| `mkdir` | Crear directorios |
| `mkfifo` | Crear tuberías con nombre (FIFO) |
| `mknod` | Crear archivos especiales de bloque o carácter |
| `mv` | Mover o renombrar archivos o directorios |
| `pathchk` | Verificar validez y portabilidad de nombres |
| `pwd` | Mostrar directorio de trabajo |
| `readlink` | Mostrar enlaces simbólicos resueltos |
| `realpath` | Mostrar la ruta física resuelta |
| `rm` | Eliminar archivos o directorios |
| `rmdir` | Eliminar directorios vacíos |
| `unlink` | Eliminar archivos o directorios |

### Procesamiento de texto

| Alias | Descripción |
|-------|-------------|
| `awk` | Lenguaje de procesamiento de patrones |
| `cat` | Concatenar y mostrar archivos |
| `csplit` | Dividir archivo en partes por contexto |
| `cut` | Eliminar secciones de cada línea |
| `diff` | Comparar archivos línea por línea |
| `fold` | Ajustar líneas a un ancho |
| `grep` | Imprimir líneas que coinciden con un patrón |
| `head` | Mostrar el inicio de archivos |
| `nl` | Numerar líneas de archivos |
| `paste` | Unir líneas de archivos |
| `patch` | Aplicar un diff a un original |
| `ptx` | Generar índice permutado del contenido |
| `sed` | Editor de flujo para transformar texto |
| `sort` | Ordenar líneas de texto |
| `split` | Dividir un archivo en partes |
| `tail` | Mostrar el final de archivos |
| `tr` | Traducir o eliminar caracteres |

### Utilidades de checksum

| Alias | Descripción |
|-------|-------------|
| `b2sum` | Mostrar/verificar hashes BLAKE2 |
| `cksum` | Mostrar checksum CRC y conteo de bytes |
| `sha1sum` | Mostrar/verificar hashes SHA1 |
| `sha224sum` | Mostrar/verificar hashes SHA224 |
| `sha256sum` | Mostrar/verificar hashes SHA256 |
| `sha384sum` | Mostrar/verificar hashes SHA384 |
| `sha512sum` | Mostrar/verificar hashes SHA512 |

### Utilidades de codificación

| Alias | Descripción |
|-------|-------------|
| `base32` | Mostrar o convertir datos base32 |
| `base64` | Codificar o decodificar datos base64 |
| `basenc` | Codificar o decodificar en varios formatos |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
