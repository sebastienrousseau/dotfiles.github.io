---
description: Die Editor-Aliase öffnen die Datei in der Editor-Liste, die in der Umgebungsvariable `editor` festgelegt ist.
lang: de-DE
metaTitle: Editor Aliase - Dotfiles (DE)
permalink: /de/aliases/editor/
---

# Editor Aliase

Die Datei `editor.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Öffnen von Dateien
in Ihrem bevorzugten Texteditor. Die Aliase öffnen die Datei in der Editor-Liste,
die in der Umgebungsvariable `editor` festgelegt ist.

Stand heute sind die folgenden Editoren in der Umgebungsvariable `editor` in der
Reihenfolge ihrer Präferenz aufgeführt. Diese Liste kann durch Bearbeiten der
Umgebungsvariable `editor` in der Datei `editor.aliases.sh` geändert werden:

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## Editor

[Editor](https://de.wikipedia.org/wiki/Texteditor) ist ein Programm zum Bearbeiten
von reinen Textdateien.

| Alias  | Befehl      | Beschreibung      |
| ------ | ----------- | ----------------- |
| e      | `${editor}` | Datei bearbeiten. |
| edit   | `${editor}` | Datei bearbeiten. |
| editor | `${editor}` | Datei bearbeiten. |
| mate   | `${editor}` | Datei bearbeiten. |
| n      | `${editor}` | Datei bearbeiten. |
| v      | `${editor}` | Datei bearbeiten. |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
