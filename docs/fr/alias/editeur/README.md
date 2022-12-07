---
description: Les alias de l'éditeur système sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré. Ils facilitent l'ouverture rapide de ces fichiers depuis la console. Ils facilitent l'ouverture rapide de ces fichiers depuis la console.
lang: fr-FR
metaTitle: Les alias de l'éditeur système - Dotfiles (FR)
permalink: /aliases/editor/

meta:
  - name: keywords
    content: alias, code, dotfiles, éditeur, gedit, nano, notepad++, raccourcis, shell, système, terminal, vi, vim, visualstudio, vscode
  - name: twitter:card
    content: Les alias de l'éditeur système sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré. Ils facilitent l'ouverture rapide de ces fichiers depuis la console.
  - name: twitter:description
    content: Les alias de l'éditeur système sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré. Ils facilitent l'ouverture rapide de ces fichiers depuis la console.
  - name: twitter:title
    content: Les alias de l'éditeur système - Dotfiles (FR)
  - name: og:title
    content: Les alias de l'éditeur système - Dotfiles (FR)
  - name: og:description
    content: Les alias de l'éditeur système sont des alias pour ouvrir des fichiers dans votre éditeur de texte préféré. Ils facilitent l'ouverture rapide de ces fichiers depuis la console.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias de l'éditeur système

Le fichier `editor.aliases.sh` crée des alias de raccourcis pour ouvrir des
fichiers dans votre éditeur de texte préféré. Il utilise la variable modifier
`editor` pour déterminer l'éditeur à utiliser.

A ce jour, les éditeurs suivants sont listés dans la variable d'environnement
`editor` par ordre de préférence. Cette liste peut être modifiée en éditant la
variable d'environnement `editor` dans le fichier `editor.aliases.sh` :

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code, visual studio code, vscode][cod],
- [gedit][gdt],
- [notepad++][np++],

## Raccourcis de l'éditeur système

| Alias  | Commande    | Description                               |
| ------ | ----------- | ----------------------------------------- |
| e      | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| edit   | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| editor | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| mate   | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| n      | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |
| v      | `${editor}` | Ouvre un fichier dans l'éditeur de texte. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
