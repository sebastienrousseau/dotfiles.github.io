---
description: Die Clear-Aliase können den Bildschirm auf verschiedene Weise löschen.
lang: de-DE
metaTitle: Clear Aliase - Dotfiles (DE)
permalink: /de/aliases/clear/
---

# Clear Aliase

Die Datei `clear.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Löschen des
Terminal-Bildschirms. Die Aliase können den Bildschirm auf verschiedene Weise löschen.

## Clear

[Clear](<https://de.wikipedia.org/wiki/Clear_(Unix)>) ist ein Befehl, der
den Terminal-Bildschirm löscht.

| Alias  | Befehl                                          | Beschreibung                                                                                              |
| ------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| c      | `clear`                                         | Lösche den Terminal-Bildschirm.                                                                           |
| cl     | `c`                                             | Lösche den Terminal-Bildschirm.                                                                           |
| clc    | `clear && cat`                                  | Lösche den Terminal-Bildschirm und drucke den Inhalt des aktuellen Verzeichnisses.                        |
| clcat  | `clc`                                           | Lösche den Terminal-Bildschirm und drucke den Inhalt des aktuellen Verzeichnisses.                        |
| clh    | `clear && history`                              | Lösche den Terminal-Bildschirm und drucke den Befehlsverlauf.                                             |
| clhist | `clh`                                           | Lösche den Terminal-Bildschirm und drucke den Befehlsverlauf.                                             |
| clp    | `clear && pwd`                                  | Lösche den Terminal-Bildschirm und drucke das aktuelle Arbeitsverzeichnis.                                |
| clpwd  | `clp`                                           | Lösche den Terminal-Bildschirm und drucke das aktuelle Arbeitsverzeichnis.                                |
| clr    | `c`                                             | Lösche den Terminal-Bildschirm.                                                                           |
| cls    | `c`                                             | Lösche den Terminal-Bildschirm.                                                                           |
| clt    | `clear && tree`                                 | Lösche den Terminal-Bildschirm und drucke den Verzeichnisbaum.                                            |
| cltree | `clt`                                           | Lösche den Terminal-Bildschirm und drucke den Verzeichnisbaum.                                            |
| ct     | `clear && tree ./`                              | Lösche den Terminal-Bildschirm und drucke den Verzeichnisbaum.                                            |
| ctree  | `ct`                                            | Lösche den Terminal-Bildschirm und drucke den Verzeichnisbaum.                                            |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | Lösche den Terminal-Bildschirm und drucke das aktuelle Arbeitsverzeichnis und den Inhalt des Verzeichnisses. |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | Lösche den Terminal-Bildschirm und drucke das aktuelle Arbeitsverzeichnis und den Verzeichnisbaum.        |
