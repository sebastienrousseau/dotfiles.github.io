---
description: Alias de navegación con marcadores, historial y atajos inteligentes. Recorre tu sistema más rápido.
lang: es-ES
metaTitle: Alias CD - Dotfiles (ES)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directorio, navegación, marcadores, alias shell, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de navegación con marcadores, historial y atajos inteligentes. Recorre tu sistema más rápido.
  - name: twitter:title
    content: Alias CD - Dotfiles
  - name: og:title
    content: Alias CD - Dotfiles
  - name: og:description
    content: Alias de navegación con marcadores, historial y atajos inteligentes. Recorre tu sistema más rápido.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias CD

Navega más rápido por tu sistema de archivos. Marcadores, historial y atajos inteligentes.

## Descubrir

Estos alias se definen en `cd.aliases.sh` y se cargan automáticamente por Chezmoi.

## Referencia

### Atajos de navegación

| Alias | Descripción |
|:---|:---|
| `-` | Cambiar al directorio anterior |
| `..` | Subir un nivel |
| `...` | Subir dos niveles |
| `....` | Subir tres niveles |
| `.....` | Subir cuatro niveles |
| `hom` | Ir al directorio personal |

### Atajos de directorios

| Alias | Ruta | Descripción |
|:---|:---|:---|
| `app` | `~/Applications` | Aplicaciones |
| `cod` | `~/Code` | Directorio de código |
| `dsk` | `~/Desktop` | Escritorio |
| `doc` | `~/Documents` | Documentos |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Descargas |
| `mus` | `~/Music` | Música |
| `pic` | `~/Pictures` | Imágenes |
| `vid` | `~/Videos` | Vídeos |

### Directorios del sistema

| Alias | Ruta | Descripción |
|:---|:---|:---|
| `etc` | `/etc` | Configuración del sistema |
| `var` | `/var` | Archivos variables |
| `tmp` | `/tmp` | Archivos temporales |
| `usr` | `/usr` | Programas de usuario |

### Marcadores

| Comando | Alias | Descripción |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Crear marcador |
| `bookmark_list` | `bml` | Listar marcadores |
| `bookmark_update` | `bmu` | Actualizar marcador |
| `bookmark_remove` | `bmr` | Eliminar marcador |
| `goto <name>` | `bmg` | Ir al marcador |

```bash
bm work-project      # Crear marcador
bmg work-project     # Ir al marcador
bml                  # Listar todos los marcadores
```

### Historial

| Comando | Alias | Descripción |
|:---|:---|:---|
| `dirhistory` | `dh` | Mostrar historial de directorios |
| `lwd` | `ld` | Volver al último directorio |

### Avanzado

| Comando | Alias | Descripción |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Crear y entrar en un directorio |
| `proj` | `pr` | Ir a la raíz del proyecto |
| `pushd` | `pd` | Apilar un directorio |
| `popd` | — | Desapilar un directorio |
| `dirs` | — | Listar la pila de directorios |

## Configuración

Personaliza el comportamiento con variables de entorno:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Ayuda

Ejecuta `cdhelp` para ver todos los comandos o `cdversion` para la versión.
