---
description: Los alias de archivos comprimidos son capaces de crear y manejar archivos en una variedad de formatos.
lang: es-ES
metaTitle: Alias de Archivos Comprimidos - Dotfiles (ES)
permalink: /es/aliases/archives/
meta:
  - name: keywords
    content: 7-zip, alias, archivos, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Los alias de archivos comprimidos son capaces de crear y manejar archivos en una variedad de formatos.
  - name: twitter:description
    content: Los alias de archivos comprimidos son capaces de crear y manejar archivos en una variedad de formatos.
  - name: twitter:title
    content: Alias de Archivos Comprimidos - Dotfiles (ES)
  - name: og:title
    content: Alias de Archivos Comprimidos - Dotfiles (ES)
  - name: og:description
    content: Los alias de archivos comprimidos son capaces de crear y manejar archivos en una variedad de formatos.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Archivos Comprimidos

El archivo `archives.aliases.sh` crea atajos útiles para archivar archivos y directorios. Los alias son capaces de crear y manejar archivos en una variedad de formatos.

## 7-Zip

[7-Zip](http://www.7-zip.org/) es un archivador de archivos con una alta relación de compresión.

| Alias | Comando | Descripción                                                          |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo 7z.  |
| e7z   | `7z x`  | Extraer un directorio completo (incluyendo subdirectorios) de un archivo 7z. |

## Bzip2

[Bzip2](http://www.bzip.org/) es un compresor de datos gratuito, libre de patentes y de alta calidad.

| Alias | Comando   | Descripción                     |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Comprimir un archivo a un archivo bz2.  |
| ebz2  | `bunzip2` | Extraer un archivo de un archivo bz2. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) es un programa de compresión de datos popular como reemplazo de compress.

| Alias | Comando  | Descripción                    |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Comprimir un archivo a un archivo gz.  |
| egz   | `gunzip` | Extraer un archivo de un archivo gz. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) es un formato de archivo utilizado para agregar muchos archivos en uno solo para distribuir software de aplicación o bibliotecas en la plataforma Java.

| Alias | Comando    | Descripción                                                           |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo jar.  |
| ejar  | `jar -xvf` | Extraer un directorio completo (incluyendo subdirectorios) de un archivo jar. |

## Tar

[Tar](https://www.gnu.org/software/tar/) es un programa informático utilizado para almacenar muchos archivos juntos en un solo archivo.

| Alias | Comando     | Descripción                                                              |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo tar.     |
| etar  | `tar -xvf`  | Extraer un directorio completo (incluyendo subdirectorios) de un archivo tar.    |
| ctgz  | `tar -cvzf` | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo tar.gz.  |
| etgz  | `tar -xvzf` | Extraer un directorio completo (incluyendo subdirectorios) de un archivo tar.gz. |

## Xz

[Xz](https://tukaani.org/xz/) es un software de compresión de datos de propósito general con una alta relación de compresión.

| Alias | Comando    | Descripción                                                          |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo xz.  |
| exz   | `xz -zxvf` | Extraer un directorio completo (incluyendo subdirectorios) de un archivo xz. |

## Zip

[Zip](<https://en.wikipedia.org/wiki/Zip_(file_format)>) es un formato de archivo utilizado para generar un solo archivo que contiene uno o más archivos.

| Alias | Comando  | Descripción                                                           |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo zip.  |
| ez    | `unzip`  | Extraer un directorio completo (incluyendo subdirectorios) de un archivo zip. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) es un algoritmo de compresión sin pérdida rápido, con el objetivo de escenarios de compresión en tiempo real a nivel de zlib y mejores relaciones de compresión.

| Alias | Comando      | Descripción                                                           |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Comprimir un directorio completo (incluyendo subdirectorios) a un archivo zst.  |
| ezstd | `zstd -zxvf` | Extraer un directorio completo (incluyendo subdirectorios) de un archivo zst. |
