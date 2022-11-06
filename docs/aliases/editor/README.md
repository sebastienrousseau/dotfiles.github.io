# Editor aliases

The `editor.aliases.sh` file creates helpful shortcut aliases for opening files in your preferred text editor. The aliases will open the file in the editor list that is set in the `editor` environment variable.

As of today the following editors are listed in the `editor` environment variable in order of preference. This list can be changed by editing the `editor` environment variable in the `editor.aliases.sh` file.:

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## 📝 Editor

[Editor](https://en.wikipedia.org/wiki/Text_editor) is a program for editing plain text files.

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
