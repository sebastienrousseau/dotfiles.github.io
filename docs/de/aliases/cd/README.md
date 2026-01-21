---
description: Die Verzeichnisfwechsel-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem Befehlszeilenwerkzeug `cd` zu interagieren. Cd ist ein Werkzeug, das das aktuelle Verzeichnis wechselt.
lang: de-DE
metaTitle: Verzeichniswechsel-Aliase - Dotfiles (DE)
permalink: /de/aliases/cd/
---

# Verzeichniswechsel Aliase

Die Datei `cd.aliases.sh` erstellt hilfreiche Shortcut-Aliase für die Navigation im Terminal.

Die Verzeichniswechsel-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem Befehlszeilenwerkzeug `cd` zu interagieren. Cd ist ein Werkzeug, das das aktuelle Verzeichnis wechselt.

## Navigation

Der `cd`-Befehl, auch bekannt als chdir (change directory), ist ein Befehlszeilen-Shell-Befehl, der verwendet wird, um das aktuelle Arbeitsverzeichnis in verschiedenen Betriebssystemen zu ändern.

| Alias | Befehl                        | Beschreibung                                                     |
| ----- | ----------------------------- | ---------------------------------------------------------------- |
| -     | `cd -`                        | Shortcut zum vorherigen Verzeichnis.                             |
| ..    | `cd ..`                       | Shortcut zum übergeordneten Verzeichnis.                         |
| ...   | `cd ../..`                    | Shortcut zum Großeltern-Verzeichnis.                             |
| ....  | `cd ../../..`                 | Shortcut zum Urgroßeltern-Verzeichnis.                           |
| ..... | `cd ../../../..`              | Shortcut zum Ururgroßeltern-Verzeichnis.                         |
| ~     | `cd ~`                        | Shortcut zum Home-Verzeichnis.                                   |
| app   | `cd ${HOME}/Applications; ls` | Shortcut zum Applications-Verzeichnis.                           |
| cod   | `cd ${HOME}/Code; ls`         | Shortcut zum Code-Verzeichnis und Inhalt auflisten.              |
| des   | `cd ${HOME}/Desktop; ls`      | Shortcut zum Desktop-Verzeichnis und Inhalt auflisten.           |
| doc   | `cd ${HOME}/Documents; ls`    | Shortcut zum Documents-Verzeichnis und Inhalt auflisten.         |
| dot   | `cd ${HOME}/.dotfiles; ls`    | Shortcut zum dotfiles-Verzeichnis.                               |
| dow   | `cd ${HOME}/Downloads; ls`    | Shortcut zum Downloads-Verzeichnis und Inhalt auflisten.         |
| hom   | `cd ${HOME}/; ls`             | Shortcut zum Home-Verzeichnis und Inhalt auflisten.              |
| mus   | `cd ${HOME}/Music; ls`        | Shortcut zum Music-Verzeichnis und Inhalt auflisten.             |
| pic   | `cd ${HOME}/Pictures; ls`     | Shortcut zum Pictures-Verzeichnis und Inhalt auflisten.          |
| vid   | `cd ${HOME}/Videos; ls`       | Shortcut zum Videos-Verzeichnis und Inhalt auflisten.            |
