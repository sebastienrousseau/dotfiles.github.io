---
description: Les alias editor sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré.
lang: fr-FR
metaTitle: Les alias editor - Dotfiles (FR)
permalink: /aliases/editor/

meta:
  - name: keywords
    content: alias, editor, dotfiles, dotfiles-fr
  - name: twitter:card
    content: Les alias editor sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré.
  - name: twitter:description
    content: Les alias editor sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré.
  - name: twitter:title
    content: Les alias editor - Dotfiles (FR)
  - name: og:title
    content: Les alias editor - Dotfiles (FR)
  - name: og:description
    content: Les alias editor sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias editor

Le fichier `editor.aliases.sh` crée des alias de raccourcis pour ouvrir des
fichiers dans votre éditeur de texte préféré. Il utilise la variable modifier
`editor` pour déterminer l'éditeur à utiliser.

A ce jour, les éditeurs suivants sont listés dans la variable d'environnement
`editor` par ordre de préférence. Cette liste peut être modifiée en éditant la
variable d'environnement `editor` dans le fichier `editor.aliases.sh` :

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## Raccourcis

| Alias | Commande | Description |
| ----- | ----- | ----- |
| e | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| edit | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| editor | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| mate | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| n | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| v | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
