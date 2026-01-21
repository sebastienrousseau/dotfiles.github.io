---
description: Los alias de editor abrirán el archivo en el editor establecido en la variable de entorno `editor`.
lang: es-ES
metaTitle: Alias de Editor - Dotfiles (ES)
permalink: /es/aliases/editor/
meta:
  - name: keywords
    content: alias, código, editor, entorno, gedit, nano, notepad++, texto, vi, vim
  - name: twitter:card
    content: Los alias de editor abrirán el archivo en el editor establecido en la variable de entorno `editor`.
  - name: twitter:description
    content: Los alias de editor abrirán el archivo en el editor establecido en la variable de entorno `editor`.
  - name: twitter:title
    content: Alias de Editor - Dotfiles (ES)
  - name: og:title
    content: Alias de Editor - Dotfiles (ES)
  - name: og:description
    content: Los alias de editor abrirán el archivo en el editor establecido en la variable de entorno `editor`.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Editor

El archivo `editor.aliases.sh` crea atajos útiles para abrir archivos en tu editor de texto preferido. Los alias abrirán el archivo en la lista de editores que está configurada en la variable de entorno `editor`.

A día de hoy, los siguientes editores están listados en la variable de entorno `editor` en orden de preferencia. Esta lista puede ser modificada editando la variable de entorno `editor` en el archivo `editor.aliases.sh`:

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## Editor

[Editor](https://es.wikipedia.org/wiki/Editor_de_texto) es un programa para editar archivos de texto plano.

| Alias  | Comando     | Descripción  |
| ------ | ----------- | ------------ |
| e      | `${editor}` | Editar un archivo. |
| edit   | `${editor}` | Editar un archivo. |
| editor | `${editor}` | Editar un archivo. |
| mate   | `${editor}` | Editar un archivo. |
| n      | `${editor}` | Editar un archivo. |
| v      | `${editor}` | Editar un archivo. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
