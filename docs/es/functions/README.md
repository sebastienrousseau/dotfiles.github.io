---
description: Funciones de shell proporcionadas por Dotfiles para mejorar tu experiencia en la terminal.
lang: es-ES
metaTitle: Funciones - Dotfiles (ES)
permalink: /es/functions/

meta:
  - name: keywords
    content: funciones, shell, bash, zsh, dotfiles, productividad
---

# Funciones

Dotfiles incluye una colección de funciones de utilidad para acelerar tu flujo de trabajo. Estas se cargan automáticamente en tu entorno de shell.

## API & Red

| Función      | Descripción                                       |
| :----------- | :------------------------------------------------ |
| `apihealth`  | Verificar la salud de un punto final de API.      |
| `apilatency` | Medir la latencia de API.                         |
| `apiload`    | Pruebas de carga de API simples.                  |
| `curlheader` | Obtener encabezados HTTP usando curl.             |
| `curlstatus` | Obtener código de estado HTTP.                    |
| `curltime`   | Medir tiempo de solicitud curl.                   |
| `httpdebug`  | Depurar tráfico HTTP.                             |
| `whoisport`  | Verificar quién está usando un puerto específico. |

## Gestión de Archivos

| Función           | Descripción                                               |
| :---------------- | :-------------------------------------------------------- |
| `cdls`            | Cambiar directorio y listar contenido.                    |
| `extract`         | Extraer cualquier formato de archivo (tar, zip, gz, etc). |
| `freespace`       | Verificar espacio libre en disco.                         |
| `hiddenfiles`     | Listar archivos ocultos.                                  |
| `showhiddenfiles` | Alternar archivos ocultos en Finder (macOS).              |
| `size`            | Obtener tamaño del directorio.                            |
| `zipf`            | Comprimir un archivo o directorio.                        |
| `backup`          | Copia de seguridad de un archivo con marca de tiempo.     |

## Procesamiento de Texto

| Función        | Descripción                         |
| :------------- | :---------------------------------- |
| `encode64`     | Codificar en Base64.                |
| `hexdump`      | Volcado hexadecimal de un archivo.  |
| `kebabcase`    | Convertir cadena a kebab-case.      |
| `lowercase`    | Convertir cadena a minúsculas.      |
| `sentencecase` | Convertir cadena a Caso de oración. |
| `snakecase`    | Convertir cadena a snake_case.      |
| `titlecase`    | Convertir cadena a Caso De Título.  |
| `uppercase`    | Convertir cadena a MAYÚSCULAS.      |

## Sistema & Utilidades

| Función     | Descripción                                |
| :---------- | :----------------------------------------- |
| `caffeine`  | Mantener el sistema despierto (macOS).     |
| `genpass`   | Generar una contraseña segura.             |
| `sysinfo`   | Mostrar información del sistema.           |
| `stopwatch` | Un cronómetro de terminal simple.          |
| `matrix`    | El efecto de lluvia digital de Matrix.     |
| `myproc`    | Listar mis procesos.                       |
| `kill`      | Matar procesos interactivamente (vía fzf). |

## Navegación

| Función       | Descripción                               |
| :------------ | :---------------------------------------- |
| `goto`        | Navegación rápida a directorios marcados. |
| `prependpath` | Anteponer un directorio a $PATH.          |

> [!TIP]
> ¡Usa `type <nombre_funcion>` en tu terminal para ver el código fuente de cualquier función!
