---
description: The editor aliases will open the file in the editor list that is set in the `editor` environment variable.
lang: en-GB
metaTitle: Editor aliases - Dotfiles (UK)
permalink: /aliases/editor/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The editor aliases will open the file in the editor list that is set in the `editor` environment variable.
  - name: twitter:creator
    content: "@wwdseb"
  - name: twitter:description
    content: The editor aliases will open the file in the editor list that is set in the `editor` environment variable.
  - name: og:title
    content: Editor aliases - Dotfiles (UK)
  - name: og:description
    content: The editor aliases will open the file in the editor list that is set in the `editor` environment variable.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Editor aliases

The `editor.aliases.sh` file creates helpful shortcut aliases for opening files
in your preferred text editor. The aliases will open the file in the editor list
that is set in the `editor` environment variable.

As of today the following editors are listed in the `editor` environment
variable in order of preference. This list can be changed by editing the
`editor` environment variable in the `editor.aliases.sh` file.:

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## Editor

[Editor](https://en.wikipedia.org/wiki/Text_editor) is a program for editing
plain text files.

| Alias | Command | Description |
| ----- | ----- | ----- |
| e | `${editor}` | Edit a file. |
| edit | `${editor}` | Edit a file. |
| editor | `${editor}` | Edit a file. |
| mate | `${editor}` | Edit a file. |
| n | `${editor}` | Edit a file. |
| v | `${editor}` | Edit a file. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
