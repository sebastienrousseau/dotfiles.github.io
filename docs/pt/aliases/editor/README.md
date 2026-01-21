---
description: Os aliases de editor abrirão o arquivo na lista de editores definida na variável de ambiente `editor`.
lang: pt-BR
metaTitle: Aliases de Editor - Dotfiles (BR)
permalink: /pt/aliases/editor/
---

# Aliases de Editor

O arquivo `editor.aliases.sh` cria aliases de atalho úteis para abrir arquivos
no seu editor de texto preferido. Os aliases abrirão o arquivo na lista de editores
que está definida na variável de ambiente `editor`.

A partir de hoje, os seguintes editores estão listados na variável de ambiente `editor`
em ordem de preferência. Esta lista pode ser alterada editando a
variável de ambiente `editor` no arquivo `editor.aliases.sh`.:

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## Editor

[Editor](https://pt.wikipedia.org/wiki/Editor_de_texto) é um programa para editar
arquivos de texto simples.

| Alias  | Comando     | Descrição       |
| ------ | ----------- | --------------- |
| e      | `${editor}` | Editar um arquivo. |
| edit   | `${editor}` | Editar um arquivo. |
| editor | `${editor}` | Editar um arquivo. |
| mate   | `${editor}` | Editar um arquivo. |
| n      | `${editor}` | Editar um arquivo. |
| v      | `${editor}` | Editar um arquivo. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
